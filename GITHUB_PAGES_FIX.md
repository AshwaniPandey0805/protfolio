# GitHub Pages Deployment Fix Guide

## 1. Root Cause Analysis

### The Error
```text
Source: /github/workspace/./docs
Destination: /github/workspace/./docs/_site
github-pages 232 | Error: No such file or directory @ dir_chdir0 - /github/workspace/docs
```

### Why Did This Happen?
1. **GitHub's Default Jekyll Engine Was Triggered:**
   - In your GitHub repository under **Settings → Pages**, the **Build and deployment Source** is currently set to **"Deploy from a branch"**, with the folder set to **`/docs`** on the `main` branch.
   - When a commit is pushed, GitHub automatically triggers its legacy built-in **Jekyll** build engine (`pages-build-deployment`).
   - Jekyll attempts to change directory (`dir_chdir0`) to `/github/workspace/docs`.

2. **The `/docs` Directory Does Not Exist:**
   - In your VuePress project, all documentation source files are stored in **`src/`**, not `docs/`.
   - When Jekyll fails to find a folder named `docs`, it throws the fatal error:
     `Error: No such file or directory @ dir_chdir0 - /github/workspace/docs`.

3. **Conflict with Your Custom GitHub Actions Workflow:**
   - You already created `.github/workflows/docs.yml` to build VuePress using Vite.
   - However, because GitHub Pages was still configured for "Deploy from a branch (/docs)", GitHub ran its internal Jekyll job instead of letting GitHub Actions deploy the site.

---

## 2. Step-by-Step Fix

### Step 1: Change GitHub Pages Source in Repository Settings (Crucial)
1. Go to your GitHub repository: [https://github.com/AshwaniPandey0805/protfolio](https://github.com/AshwaniPandey0805/protfolio)
2. Click on **Settings** (top tab).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - Find the **Source** dropdown (currently set to *"Deploy from a branch"*).
   - Change it to: **`GitHub Actions`**.
5. Save the setting.
   > **Note:** This immediately tells GitHub to stop running the legacy Jekyll engine on `/docs`.

---

### Step 2: Update `.github/workflows/docs.yml` to Native GitHub Pages Actions
Replace `.github/workflows/docs.yml` with the modern, official GitHub Actions workflow for static site deployments:

```yaml
name: Deploy Portfolio

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: package-lock.json

      - name: Install Dependencies
        run: npm ci

      - name: Build Docs
        run: npm run build:docs

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: src/.vuepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### Step 3: Configure Base URL in `src/.vuepress/config.js` (Prevents 404s & Missing CSS/Images)
Because your repository is named **`protfolio`**, your GitHub Pages site URL will be:
`https://ashwanipandey0805.github.io/protfolio/`

If `base` is left as `'/'`, the browser will request `/assets/...` instead of `/protfolio/assets/...`, leading to blank pages and broken styles.

Update line 14 in `src/.vuepress/config.js`:
```javascript
// Dynamic base: '/protfolio/' for production builds on GitHub Pages, '/' for local dev
base: process.env.BASE || (process.env.NODE_ENV === 'production' ? '/protfolio/' : '/'),
```

---

## 3. Summary of Updates Required

| Component | Location | Issue | Fix |
|---|---|---|---|
| **GitHub Repo Settings** | GitHub Web UI → Settings → Pages | Source set to "Deploy from a branch" with `/docs` | Switch Source to **"GitHub Actions"** |
| **Workflow** | `.github/workflows/docs.yml` | Uses legacy branch pusher without proper pages permissions | Use `actions/upload-pages-artifact@v3` & `actions/deploy-pages@v4` |
| **VuePress Config** | `src/.vuepress/config.js` | `base: '/'` hardcoded | Set `base: '/protfolio/'` in production |
