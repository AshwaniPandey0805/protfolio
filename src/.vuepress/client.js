import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import './styles/index.scss'
import HomeLayout from './components/HomeLayout.vue'

export default defineClientConfig({
  enhance({ app }) {
    // Register layout / components if any
  },
  setup() {
    const router = useRouter()
    let currentScrollListener = null
    let lastPath = ''
    let lastH1Text = ''

    const renderBreadcrumbs = (content, pageName) => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return

      const oldBreadcrumbs = document.querySelector('.doc-breadcrumbs')
      if (oldBreadcrumbs) oldBreadcrumbs.remove()

      const breadcrumbs = document.createElement('nav')
      breadcrumbs.className = 'doc-breadcrumbs'
      breadcrumbs.setAttribute('aria-label', 'Breadcrumb')
      breadcrumbs.setAttribute('data-key', `Portfolio / ${pageName}`)

      breadcrumbs.innerHTML = `
        <span class="doc-breadcrumbs__item">Portfolio</span>
        <span class="doc-breadcrumbs__separator" aria-hidden="true">/</span>
        <span class="doc-breadcrumbs__item" aria-current="page">${pageName}</span>
      `

      content.insertBefore(breadcrumbs, content.firstChild)
    }

    const moveSearchToSidebar = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return
      
      const searchBox = document.querySelector('.vp-navbar .search-box')
      const sidebar = document.querySelector('.vp-sidebar')
      if (searchBox && sidebar && !sidebar.querySelector('.search-box')) {
        sidebar.insertBefore(searchBox, sidebar.firstChild)
      }
    }

    const renderRightSidebar = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return

      // Clear old sidebar instantly to prevent showing stale links
      const oldSidebar = document.querySelector('.vp-toc-sidebar')
      if (oldSidebar) oldSidebar.remove()

      // Clean up previous scroll listener if it exists
      if (currentScrollListener) {
        window.removeEventListener('scroll', currentScrollListener)
        currentScrollListener = null
      }

      // Find the headings in the content area
      const headingElements = document.querySelectorAll('#content h2, #content h3')
      if (headingElements.length === 0) return

      // Create new TOC sidebar
      const tocSidebar = document.createElement('div')
      tocSidebar.className = 'vp-toc-sidebar'

      const title = document.createElement('div')
      title.className = 'vp-toc-title'
      title.innerText = 'On this page'
      tocSidebar.appendChild(title)

      const ul = document.createElement('ul')
      ul.className = 'vp-toc-items'

      headingElements.forEach(heading => {
        const level = heading.tagName === 'H2' ? 2 : 3
        const slug = heading.id
        const anchor = heading.querySelector('.header-anchor')
        const headingText = anchor ? anchor.innerText.trim() : heading.innerText.trim()

        const li = document.createElement('li')
        li.className = `vp-toc-item level-${level}`
        
        const a = document.createElement('a')
        a.href = `#${slug}`
        a.innerText = headingText
        
        a.addEventListener('click', (e) => {
          e.preventDefault()
          const target = document.getElementById(slug)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
            history.pushState(null, null, `#${slug}`)
            
            // Highlight clicked item immediately
            const links = tocSidebar.querySelectorAll('a')
            links.forEach(l => l.classList.remove('active'))
            a.classList.add('active')
          }
        })

        li.appendChild(a)
        ul.appendChild(li)
      })

      tocSidebar.appendChild(ul)
      const container = document.querySelector('.vp-theme-container') || document.body
      container.appendChild(tocSidebar)

      // Setup scroll-spy
      const handleScroll = () => {
        let activeId = ''
        
        for (let i = 0; i < headingElements.length; i++) {
          const el = headingElements[i]
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            activeId = el.id
          } else {
            break
          }
        }

        const links = tocSidebar.querySelectorAll('a')
        links.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active')
          } else {
            link.classList.remove('active')
          }
        })
      }

      currentScrollListener = handleScroll
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    }



    const initPageComponents = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return

      const currentPath = router.currentRoute.value.path
      const isHomePage = currentPath === '/'

      let attempts = 0
      const maxAttempts = 30

      const checkAndRender = () => {
        const content = document.querySelector('#content')
        const h1 = content ? content.querySelector('h1') : null

        if (isHomePage) {
          const oldBreadcrumbs = document.querySelector('.doc-breadcrumbs')
          if (oldBreadcrumbs) oldBreadcrumbs.remove()
          const oldActions = document.querySelector('.doc-page-actions')
          if (oldActions) oldActions.remove()
          const oldSidebar = document.querySelector('.vp-toc-sidebar')
          if (oldSidebar) oldSidebar.remove()
          
          moveSearchToSidebar()
          return
        }

        if (!content || !h1) {
          attempts++
          if (attempts < maxAttempts) {
            setTimeout(checkAndRender, 60)
          }
          return
        }

        const h1Text = h1.innerText.replace('#', '').trim()

        if (currentPath !== lastPath && h1Text === lastH1Text) {
          attempts++
          if (attempts < maxAttempts) {
            setTimeout(checkAndRender, 60)
          }
          return
        }

        lastPath = currentPath
        lastH1Text = h1Text

        const oldActions = document.querySelector('.doc-page-actions')
        if (oldActions) oldActions.remove()

        renderBreadcrumbs(content, h1Text)
        moveSearchToSidebar()
        renderRightSidebar()
      }

      checkAndRender()
    }

    onMounted(() => {
      initPageComponents()
    })

    router.afterEach(() => {
      initPageComponents()
    })
  },
  layouts: {
    HomeLayout
  }
})
