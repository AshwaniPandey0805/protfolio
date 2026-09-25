<template>
  <div class="home-wrapper">

    <!-- ── Top Navbar ─────────────────────────────────── -->
    <header class="home-navbar">
      <div class="home-navbar__inner">
        <!-- Logo + site name -->
        <a class="home-navbar__logo" :href="withBase('/')">
          <span class="home-navbar__site-name">Ashwani Kumar Pandey</span>
        </a>

        <!-- Nav links -->
        <nav class="home-navbar__links" aria-label="site navigation">
          <a :href="withBase('/about.html')">About Me</a>
          <a :href="withBase('/skills.html')">Skills</a>
          <a :href="withBase('/experience.html')">Experience</a>
          <a :href="withBase('/projects.html')">Projects</a>
          <a :href="withBase('/education.html')">Education</a>
          <a :href="withBase('/certifications.html')">Certifications</a>
        </nav>

        <!-- Actions: GitHub + Dark mode toggle -->
        <div class="home-navbar__actions">
          <!-- GitHub repository link -->
          <a
            class="home-navbar__github"
            href="https://github.com/AshwaniPandey0805/protfolio"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            aria-label="GitHub Repository"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          <!-- Dark mode toggle -->
          <button
            class="home-navbar__theme-toggle"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
            aria-label="toggle color mode"
          >
            <!-- Sun icon -->
            <svg v-if="!isDark" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"/>
              <path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"/>
              <path d="M2 15.005h5v2H2z" fill="currentColor"/>
              <path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"/>
              <path d="M15 25.005h2v5h-2z" fill="currentColor"/>
              <path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"/>
              <path d="M25 15.005h5v2-5z" fill="currentColor"/>
              <path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"/>
              <path d="M15 2.005h2v5h-2z" fill="currentColor"/>
            </svg>
            <!-- Moon icon -->
            <svg v-else viewBox="0 0 32 32" aria-hidden="true">
              <path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- ── Main home content ───────────────────────────── -->
    <div class="vp-home doc-is-home">

      <!-- Hero (Split Layout: Left Info, Right Image Container) -->
      <header class="vp-hero">
        <div class="vp-hero-inner">
          <!-- Left: Profile & Headline -->
          <div class="vp-hero-content">
            <span class="vp-hero-pretitle">BACKEND SOFTWARE DEVELOPER · NODE.JS · AI &amp; RAG SYSTEMS · LARAVEL</span>
            <h1 id="main-title">Ashwani Kumar Pandey</h1>
            <p class="vp-hero-description">
              Backend Software Developer with 2 years of experience in API development, web features, and third-party integrations, along with a solid foundation in backend architecture. Exploring AI Engineering, with exposure to LLM APIs and RAG-based systems.
            </p>
            <p class="vp-hero-actions">
              <a class="vp-hero-action-button primary" :href="withBase('/about.html')" aria-label="Explore Profile">
                Explore Portfolio
              </a>
              <a class="vp-hero-action-button secondary"
                 href="mailto:ashwanipandey679@gmail.com"
                 aria-label="Contact Email">
                Contact Me ✉
              </a>
            </p>
          </div>

          <!-- Right: Profile Image Container / Placeholder -->
          <div class="vp-hero-image-col">
            <div class="hero-image-card">
              <div class="hero-image-inner">
                <!-- If profile image provided, it will render here -->
                <img
                  v-if="profileImage"
                  :src="withBase(profileImage)"
                  alt="Ashwani Kumar Pandey"
                  class="hero-profile-image"
                />
                <!-- Placeholder container displayed until photo is provided -->
                <div v-else class="hero-image-placeholder">
                  <div class="placeholder-glow"></div>
                  <div class="placeholder-icon-circle">
                    <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div class="placeholder-text-group">
                    <span class="placeholder-title">Profile Photo</span>
                    <span class="placeholder-subtitle">Image container placeholder</span>
                  </div>
                  <div class="placeholder-badge-ready">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Ready for your photo</span>
                  </div>
                </div>
              </div>

              <!-- Floating Status Badge -->
              <div class="hero-experience-badge">
                <span class="experience-dot"></span>
                <span class="experience-badge-text">2+ Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content wrapper -->
      <div class="home-content-wrapper">
        <div class="home-content-inner">

          <!-- ── Skills & Tech Stack highlight ───────────────────────── -->
          <section class="home-trust" aria-labelledby="home-trust-title" style="margin-bottom: 2rem;">
            <p id="home-trust-title">CORE SKILLS &amp; TECHNOLOGIES</p>
            
            <div class="carousel-container">
              <button 
                class="carousel-btn prev" 
                @click="prevSlide" 
                :disabled="currentSlide === 0" 
                aria-label="Previous technologies"
              >
                ‹
              </button>
              
              <div class="carousel-track-wrapper">
                <div 
                  class="carousel-track" 
                  :style="{ 
                    '--visible-cols': visibleColumns, 
                    '--current-slide': currentSlide,
                    transform: `translateX(calc(-1 * var(--current-slide) * (100% + 12px) / var(--visible-cols)))`
                  }"
                >
                  <div 
                    v-for="(tech, index) in technologies" 
                    :key="tech.name"
                    class="home-trust-badge carousel-item"
                    style="cursor: default;"
                  >
                    <img :src="tech.logo" :alt="tech.name + ' logo'" class="tech-logo" />
                    <span><strong>{{ tech.name }}</strong><br/>{{ tech.subtitle }}</span>
                  </div>
                </div>
              </div>

              <button 
                class="carousel-btn next" 
                @click="nextSlide" 
                :disabled="currentSlide >= maxSlide" 
                aria-label="Next technologies"
              >
                ›
              </button>
            </div>
          </section>

          <!-- ── Professional Experience Overview ───────────────────── -->
          <section class="home-section" aria-labelledby="home-experience-title">
            <div class="home-section__header">
              <span class="home-section__badge">CAREER TRAJECTORY</span>
              <h2 id="home-experience-title" class="home-section__title">Professional Experience</h2>
              <p class="home-section__subtitle">Key engineering roles, architectural contributions, and measurable performance impact.</p>
            </div>

            <div class="home-cards-grid home-cards-grid--2col">
              <div v-for="exp in experienceList" :key="exp.company" class="home-overview-card">
                <div class="home-overview-card__header">
                  <div class="home-overview-card__identity">
                    <img :src="withBase(exp.logo)" :alt="exp.company + ' logo'" class="home-company-logo" loading="lazy" />
                    <div class="home-overview-card__titles">
                      <h3 class="home-overview-card__title">{{ exp.role }}</h3>
                      <div class="home-overview-card__meta">
                        <span class="home-overview-card__company">{{ exp.company }}</span>
                        <span class="home-overview-card__dot">·</span>
                        <span class="home-overview-card__period">{{ exp.period }}</span>
                      </div>
                    </div>
                  </div>
                  <span v-if="exp.badge" class="home-overview-card__highlight">{{ exp.badge }}</span>
                </div>

                <p class="home-overview-card__desc">{{ exp.description }}</p>

                <div class="home-overview-card__tags">
                  <span v-for="tech in exp.technologies" :key="tech" class="home-tag">{{ tech }}</span>
                </div>

                <div class="home-overview-card__footer">
                  <a :href="withBase(exp.link)" class="home-link-btn" :aria-label="'View complete details for ' + exp.role + ' at ' + exp.company">
                    <span>View More</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" class="home-link-icon" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="home-section__more">
              <a :href="withBase('/experience.html')" class="home-btn-outline">
                <span>View Complete Work History &amp; Achievements</span>
                <span class="arrow">→</span>
              </a>
            </div>
          </section>

          <!-- ── Featured Projects Overview ─────────────────────────── -->
          <section class="home-section" aria-labelledby="home-projects-title">
            <div class="home-section__header">
              <span class="home-section__badge">FEATURED WORK</span>
              <h2 id="home-projects-title" class="home-section__title">Featured Projects</h2>
              <p class="home-section__subtitle">Production-grade AI architectures, distributed event streaming, and full-stack systems.</p>
            </div>

            <div class="home-cards-grid home-cards-grid--3col">
              <div v-for="proj in projectsList" :key="proj.title" class="home-overview-card home-overview-card--project">
                <div class="home-overview-card__header">
                  <div>
                    <span class="home-project-category">{{ proj.category }}</span>
                    <h3 class="home-overview-card__title">{{ proj.title }}</h3>
                  </div>
                </div>

                <p class="home-overview-card__desc">{{ proj.description }}</p>

                <div class="home-overview-card__tags">
                  <span v-for="tech in proj.technologies" :key="tech" class="home-tag">{{ tech }}</span>
                </div>

                <div class="home-overview-card__footer home-overview-card__footer--project">
                  <!-- Resting state (default before hover) -->
                  <div class="home-project-footer-resting">
                    <span class="home-link-btn">
                      <span>View More</span>
                      <svg viewBox="0 0 20 20" fill="currentColor" class="home-link-icon" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </span>
                  </div>

                  <!-- Hover state (inline action icons) -->
                  <div class="home-project-footer-actions" role="group" :aria-label="'Actions for ' + proj.title">
                    <!-- 1. Live Project -->
                    <a
                      v-if="proj.live"
                      :href="resolveLink(proj.live)"
                      :target="isExternal(proj.live) ? '_blank' : '_self'"
                      :rel="isExternal(proj.live) ? 'noopener noreferrer' : undefined"
                      class="home-action-btn home-action-btn--live"
                      :title="'Live Project Demo for ' + proj.title"
                      :aria-label="'Live Project Demo for ' + proj.title"
                    >
                      <svg class="home-action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                      <span class="home-action-label">Live</span>
                    </a>

                    <!-- 2. GitHub -->
                    <a
                      v-if="proj.github"
                      :href="resolveLink(proj.github)"
                      :target="isExternal(proj.github) ? '_blank' : '_self'"
                      :rel="isExternal(proj.github) ? 'noopener noreferrer' : undefined"
                      class="home-action-btn home-action-btn--github"
                      :title="'GitHub Repository for ' + proj.title"
                      :aria-label="'GitHub Repository for ' + proj.title"
                    >
                      <svg class="home-action-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span class="home-action-label">GitHub</span>
                    </a>

                    <!-- 3. View More (Documentation) -->
                    <a
                      :href="resolveLink(proj.link)"
                      class="home-action-btn home-action-btn--more"
                      :title="'Documentation Details for ' + proj.title"
                      :aria-label="'Documentation Details for ' + proj.title"
                    >
                      <svg class="home-action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                      <span class="home-action-label">View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="home-section__more">
              <a :href="withBase('/projects.html')" class="home-btn-outline">
                <span>Explore All Projects &amp; System Specs</span>
                <span class="arrow">→</span>
              </a>
            </div>
          </section>

          <!-- ── Guide cards ─────────────────────────── -->
          <section class="home-learn">
            <div class="home-learn-grid">

              <!-- Card 1: Profile -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">1</span>
                  <h2>Profile</h2>
                </div>
                <p>Read about my background, core software engineering values, and soft skills.</p>
                <nav aria-label="Profile links">
                  <a :href="withBase('/about.html')">About Me</a>
                  <a :href="withBase('/skills.html')">Technical Skills</a>
                </nav>
              </div>

              <!-- Card 2: Work & Projects -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">2</span>
                  <h2>Experience</h2>
                </div>
                <p>Explore my employment history at Webkul, Rudra Innovative, BrainGrid, and Code Brew Labs.</p>
                <nav aria-label="Experience links">
                  <a :href="withBase('/experience.html')">Work Experience</a>
                  <a :href="withBase('/projects.html')">Key Projects</a>
                </nav>
              </div>

              <!-- Card 3: Education -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">3</span>
                  <h2>Education</h2>
                </div>
                <p>View my educational qualifications (B.Tech IT - CGPA 7.5) and professional credentials.</p>
                <nav aria-label="Education and Certifications links">
                  <a :href="withBase('/education.html')">Education Details</a>
                  <a :href="withBase('/certifications.html')">Certifications</a>
                </nav>
              </div>

            </div>
          </section>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { withBase } from '@vuepress/client'

const isDark = ref(false)

// Profile image source
const profileImage = ref('/images/profile.jpeg')

const technologies = [
  { name: 'Node.js', subtitle: 'Backend Runtime', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', subtitle: 'Web Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Next.js', subtitle: 'Full-Stack React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React.js', subtitle: 'Frontend Library', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', subtitle: 'State Management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Laravel', subtitle: 'PHP MVC Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP', subtitle: 'Backend Language', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'PostgreSQL', subtitle: 'Relational DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', subtitle: 'NoSQL Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', subtitle: 'Cache & Queue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Vector DB & RAG', subtitle: 'AI Embeddings', logo: 'https://static.pingcap.com/images/f54533cc-1000011158.svg?w=640&q=75' },
  { name: 'LLM APIs', subtitle: 'AI Engineering', logo: 'https://img.icons8.com/color/48/artificial-intelligence.png' },
  { name: 'Apache Kafka', subtitle: 'Message Streaming', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'Socket.io', subtitle: 'Real-Time WebSockets', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  { name: 'GraphQL', subtitle: 'API Query Lang', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Docker', subtitle: 'Containerization', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS & Firebase', subtitle: 'Cloud & Alerts', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Playwright & Jest', subtitle: 'Automated Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' }
]

const experienceList = [
  {
    role: 'Associate Software Engineer',
    company: 'Webkul Software Pvt. Ltd.',
    period: 'Jan 2026 – Present',
    badge: '70% Latency Drop',
    logo: '/images/companies/webkul_logo.jpeg',
    description: 'Developed Node.js mobile backend services and reduced API response times by 70% by architecting REST/GraphQL APIs optimized with Redis caching, PostgreSQL tuning, and async cron jobs.',
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Cron Jobs'],
    link: '/experience.html#associate-software-engineer'
  },
  {
    role: 'Junior Software Engineer',
    company: 'Rudra Innovative Software',
    period: 'Jul 2025 – Dec 2025',
    badge: 'IoT & Payments',
    logo: '/images/companies/rudrainnovative_logo.jpeg',
    description: 'Engineered Node.js backend APIs for the AlerTrax mobile tracking app, built React.js live tracking dashboards, and developed Stripe recurring subscription billing modules.',
    technologies: ['Node.js', 'React.js', 'Stripe API', 'IoT Telemetry'],
    link: '/experience.html#junior-software-engineer'
  },
  {
    role: 'Web Developer',
    company: 'BrainGrid Technology Pvt. Ltd.',
    period: 'Jul 2024 – Jul 2025',
    badge: 'Real-Time Web',
    logo: '/images/companies/BrainGridTechnology.jpeg',
    description: 'Built full-stack applications with React.js frontend and Laravel backend APIs, incorporating Redux Toolkit state management, real-time Socket.IO chat, and Firebase notifications.',
    technologies: ['React.js', 'Laravel', 'Redux Toolkit', 'Socket.IO', 'Firebase'],
    link: '/experience.html#web-developer'
  },
  {
    role: 'Software Developer Intern',
    company: 'Code Brew Labs',
    period: 'Dec 2023 – Jul 2024',
    badge: 'Core Foundations',
    logo: '/images/companies/Code_brew_Lab.jpeg',
    description: 'Resolved application bugs and improved system stability as part of the support team, mastering MVC design patterns, Laravel debugging tools, and Git workflows.',
    technologies: ['PHP', 'Laravel', 'MVC Architecture', 'Git', 'Debugging'],
    link: '/experience.html#software-developer-intern'
  }
]

const projectsList = [
  {
    title: 'AI Document Q&A Platform',
    category: 'AI & RAG Pipeline',
    description: 'Full-stack MERN SPA enabling natural-language document queries via automated semantic embeddings, vector database similarity search, and context-aware LLM synthesis with Zod validation.',
    technologies: ['React.js', 'Node.js', 'Vector DB', 'RAG Pipeline', 'LLM APIs', 'Zod'],
    link: '/projects.html#_1-ai-document-q-a-platform',
    github: 'https://github.com/AshwaniPandey0805/devdoc-ai',
    live: '#'
  },
  {
    title: 'Distributed Job Processing Platform',
    category: 'Event-Driven Microservices',
    description: 'High-throughput async task execution platform using Apache Kafka topic partitions to decouple compute-intensive jobs (bulk emails, reporting) with Redis distributed locks and Docker containers.',
    technologies: ['Node.js', 'Express', 'Apache Kafka', 'Redis', 'Docker'],
    link: '/projects.html#_2-distributed-job-processing-monitoring-platform',
    github: '#',
    live: '#'
  },
  {
    title: 'Freelance Lead Hunter',
    category: 'Automation & Analytics',
    description: 'Real-time automation dashboard aggregating freelance project leads via Apify with an adapter pattern, LLM-powered proposal drafting, and Recharts + MongoDB conversion analytics.',
    technologies: ['React.js', 'Redux', 'Apify Scraper', 'LLM APIs', 'MongoDB', 'Recharts'],
    link: '/projects.html#_3-freelance-lead-hunter',
    github: '#',
    live: '#'
  }
]

const resolveLink = (url) => {
  if (!url) return '#'
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//') || url.startsWith('#')) {
    return url
  }
  return withBase(url)
}

const isExternal = (url) => {
  if (!url) return false
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}

const currentSlide = ref(0)
const visibleColumns = ref(4)

const maxSlide = computed(() => {
  const totalCols = Math.ceil(technologies.length / 2)
  return Math.max(0, totalCols - visibleColumns.value)
})

const updateVisibleColumns = () => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width >= 900) {
      visibleColumns.value = 4
    } else if (width >= 600) {
      visibleColumns.value = 3
    } else {
      visibleColumns.value = 2
    }
    if (currentSlide.value > maxSlide.value) {
      currentSlide.value = maxSlide.value
    }
  }
}

const nextSlide = () => {
  currentSlide.value = Math.min(maxSlide.value, currentSlide.value + visibleColumns.value)
}

const prevSlide = () => {
  currentSlide.value = Math.max(0, currentSlide.value - visibleColumns.value)
}

const toggleTheme = () => {
  const html = document.documentElement
  if (html.getAttribute('data-theme') === 'dark' || html.classList.contains('dark')) {
    html.setAttribute('data-theme', 'light')
    html.classList.remove('dark')
    isDark.value = false
    localStorage.setItem('vuepress-color-scheme', 'light')
  } else {
    html.setAttribute('data-theme', 'dark')
    html.classList.add('dark')
    isDark.value = true
    localStorage.setItem('vuepress-color-scheme', 'dark')
  }
}

onMounted(() => {
  const html = document.documentElement
  isDark.value =
    html.getAttribute('data-theme') === 'dark' ||
    html.classList.contains('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches

  updateVisibleColumns()
  window.addEventListener('resize', updateVisibleColumns)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateVisibleColumns)
  }
})
</script>

<style scoped>
.home-trust-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.2s ease;
}
.home-trust-badge:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--vp-c-brand-glow);
}
.tech-logo {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  object-fit: contain;
}

#home-trust-title {
  order: 0 !important;
}

/* Carousel Styles */
.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 1.5rem;
  order: 1 !important;
}
.carousel-track-wrapper {
  overflow: hidden;
  width: 100%;
  padding: 8px 4px;
}
.carousel-track {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - (var(--visible-cols) - 1) * 12px) / var(--visible-cols));
  gap: 12px;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.carousel-item {
  flex-direction: column !important;
  text-align: center;
  padding: 16px 12px !important;
  min-height: 120px !important;
  justify-content: center;
  box-sizing: border-box;
}
.carousel-btn {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-size: 20px;
  line-height: 1;
  flex-shrink: 0;
}
.carousel-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
  transform: scale(1.05);
}
.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  box-shadow: none;
}
.carousel-btn.prev {
  margin-right: 8px;
}
.carousel-btn.next {
  margin-left: 8px;
}

/* ── Section & Overview Cards Styles ───────────────────────── */
.home-section {
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
}

.home-section__header {
  margin-bottom: 1.5rem;
  text-align: left;
}

.home-section__badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-brand-next, #555555);
  margin-bottom: 0.35rem;
}

.home-section__title {
  margin: 0 0 0.35rem 0 !important;
  font-size: 1.65rem !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  color: var(--vp-c-brand) !important;
  line-height: 1.25 !important;
}

.home-section__subtitle {
  margin: 0 !important;
  font-size: 0.95rem !important;
  color: var(--vp-c-text-mute, #666666) !important;
  line-height: 1.5 !important;
}

.home-cards-grid {
  display: grid;
  gap: 1.25rem;
  width: 100%;
  min-width: 0;
}

.home-cards-grid--2col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.home-cards-grid--3col {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1024px) {
  .home-cards-grid--3col {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .home-cards-grid--2col,
  .home-cards-grid--3col {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.home-overview-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  box-sizing: border-box;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.home-overview-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--vp-c-brand-glow);
}

.home-overview-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  min-width: 0;
}

.home-overview-card__identity {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
  flex: 1 1 auto;
}

.home-company-logo {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 8px;
  object-fit: contain;
  background: #ffffff;
  border: 1px solid var(--vp-c-border);
  padding: 3px;
  box-sizing: border-box;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
}

.home-overview-card__titles {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.home-overview-card__title {
  margin: 0 !important;
  font-size: 1.15rem !important;
  font-weight: 700 !important;
  color: var(--vp-c-brand) !important;
  line-height: 1.3 !important;
  word-break: break-word;
}

.home-overview-card__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.3rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-mute, #666666);
}

.home-overview-card__company {
  font-weight: 600;
  color: var(--vp-c-text);
}

.home-overview-card__dot {
  opacity: 0.5;
}

.home-overview-card__period {
  font-size: 0.82rem;
  color: var(--vp-c-text-subtle, #999999);
}

.home-overview-card__highlight {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-brand);
  white-space: nowrap;
  flex-shrink: 0;
}

@media (max-width: 580px) {
  .home-section {
    margin-top: 2.25rem;
    margin-bottom: 2rem;
  }

  .home-section__title {
    font-size: 1.45rem !important;
  }

  .home-overview-card {
    padding: 1.15rem 1rem !important;
  }

  .home-overview-card__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .home-overview-card__identity {
    width: 100%;
    gap: 0.75rem;
  }

  .home-company-logo {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }

  .home-overview-card__title {
    font-size: 1.05rem !important;
  }

  .home-overview-card__highlight {
    align-self: flex-start;
  }
}

.home-project-category {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0b6bff;
  margin-bottom: 0.35rem;
}

.home-overview-card__desc {
  margin: 0 0 1rem 0 !important;
  font-size: 0.885rem !important;
  line-height: 1.55 !important;
  color: var(--vp-c-text) !important;
  flex-grow: 1;
}

.home-overview-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.home-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-mute, #666666);
  border: 1px solid var(--vp-c-border);
}

.home-overview-card__footer {
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px solid var(--vp-c-border);
}

.home-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none !important;
  transition: all 0.15s ease;
}

.home-link-btn:hover {
  color: #0b6bff;
}

.home-link-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.15s ease;
}

.home-overview-card:hover .home-link-icon {
  transform: translateX(4px);
}

/* ── Project Card Action Buttons on Hover ────────────────── */
.home-overview-card--project {
  position: relative;
  padding: 1.4rem 1.25rem;
}

.home-overview-card__footer--project {
  position: relative;
  min-height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.home-project-footer-resting {
  display: flex;
  align-items: center;
  width: 100%;
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 1;
  transform: translateY(0);
}

.home-project-footer-actions {
  position: absolute;
  top: 0.85rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem;
  width: 100%;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.home-overview-card--project:hover .home-project-footer-resting,
.home-overview-card--project:focus-within .home-project-footer-resting {
  opacity: 0;
  transform: translateY(-4px);
  pointer-events: none;
}

.home-overview-card--project:hover .home-project-footer-actions,
.home-overview-card--project:focus-within .home-project-footer-actions {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.home-action-btn {
  flex: 1 1 auto;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.26rem;
  padding: 0.4rem 0.42rem;
  border-radius: 6px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text);
  font-size: 0.76rem;
  font-weight: 600;
  text-decoration: none !important;
  white-space: nowrap;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.home-action-btn--more {
  flex: 1.25 1 auto;
}

.home-action-svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  transition: transform 0.18s ease;
}

.home-action-label {
  line-height: 1;
}

.home-action-btn:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.home-action-btn:hover .home-action-svg {
  transform: scale(1.12);
}

/* Button-specific accent styling */
.home-action-btn--live:hover {
  border-color: #0b6bff;
  color: #0b6bff;
  background: rgba(11, 107, 255, 0.08);
}

.home-action-btn--github:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-elv);
}

.home-action-btn--more:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-elv);
}

/* Dark mode specific tweaks */
html[data-theme="dark"] .home-action-btn--live:hover,
html.dark .home-action-btn--live:hover {
  border-color: #3b82f6;
  color: #60a5fa;
  background: rgba(59, 130, 246, 0.12);
}

/* Touch & Mobile device optimization */
@media (hover: none), (max-width: 680px) {
  .home-project-footer-resting {
    display: none !important;
  }
  .home-project-footer-actions {
    position: static !important;
    opacity: 1 !important;
    transform: none !important;
    pointer-events: auto !important;
    width: 100%;
  }
}

.home-section__more {
  display: flex;
  justify-content: center;
  margin-top: 1.75rem;
}

.home-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text);
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.home-btn-outline:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-alt);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--vp-c-brand-glow);
}

.home-btn-outline .arrow {
  transition: transform 0.15s ease;
}

.home-btn-outline:hover .arrow {
  transform: translateX(4px);
}
</style>
