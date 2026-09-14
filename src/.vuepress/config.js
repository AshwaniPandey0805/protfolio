import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  clientConfigFile: path.resolve(__dirname, './client.js'),
  bundler: viteBundler(),
  title: 'Ashwani Kumar Pandey',
  description: 'Backend Software Developer Portfolio - Node.js, AI & RAG Systems, Laravel',
  base: '/protfolio/',
  head: [
    ['link', { rel: 'icon', href: 'https://img.icons8.com/color/48/developer.png' }]
  ],
  theme: defaultTheme({
    logo: 'https://img.icons8.com/color/48/developer.png',
    sidebarDepth: 0,
    navbar: [
      { text: 'About Me', link: '/about.html' },
      { text: 'Skills', link: '/skills.html' },
      { text: 'Experience', link: '/experience.html' },
      { text: 'Projects', link: '/projects.html' },
      { text: 'Education', link: '/education.html' },
      { text: 'Certifications', link: '/certifications.html' }
    ],
    sidebar: [
      {
        text: 'Profile',
        children: [
          { text: 'About Me', link: '/about.html' },
          { text: 'Technical Skills', link: '/skills.html' }
        ]
      },
      {
        text: 'Experience & Projects',
        children: [
          { text: 'Work Experience', link: '/experience.html' },
          { text: 'Key Projects', link: '/projects.html' }
        ]
      },
      {
        text: 'Credentials',
        children: [
          { text: 'Education Details', link: '/education.html' },
          { text: 'Certifications', link: '/certifications.html' }
        ]
      }
    ]
  }),
  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      hotKeys: [
        's',
        '/',
        { key: 'k', ctrl: true },
        { key: 'k', meta: true }
      ],
      locales: {
        '/': {
          placeholder: 'Search Portfolio',
        },
      },
    }),
  ],
})
