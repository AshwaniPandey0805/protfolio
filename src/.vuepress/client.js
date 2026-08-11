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
    let currentOutsideClickListener = null
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

    const showToast = (message) => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return
      let toast = document.querySelector('.doc-toast')
      if (!toast) {
        toast = document.createElement('div')
        toast.className = 'doc-toast'
        document.body.appendChild(toast)
      }
      toast.innerText = message
      toast.classList.add('doc-toast--show')
      
      if (toast._timeout) clearTimeout(toast._timeout)
      toast._timeout = setTimeout(() => {
        toast.classList.remove('doc-toast--show')
      }, 2500)
    }

    const renderPageActions = (content) => {
      if (typeof window === 'undefined' || typeof document === 'undefined') return

      if (currentOutsideClickListener) {
        document.removeEventListener('click', currentOutsideClickListener)
        currentOutsideClickListener = null
      }

      const oldActions = document.querySelector('.doc-page-actions')
      if (oldActions) oldActions.remove()

      const actions = document.createElement('div')
      actions.className = 'doc-page-actions'

      const copyBtn = document.createElement('button')
      copyBtn.type = 'button'
      copyBtn.className = 'doc-page-actions__copy'
      copyBtn.setAttribute('aria-label', 'Copy page link')
      copyBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z"></path>
        </svg>
        <span>Copy page</span>
      `

      const menuBtn = document.createElement('button')
      menuBtn.type = 'button'
      menuBtn.className = 'doc-page-actions__menu'
      menuBtn.setAttribute('aria-label', 'More page actions')
      menuBtn.setAttribute('aria-haspopup', 'menu')
      menuBtn.setAttribute('aria-expanded', 'false')
      menuBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"></path>
        </svg>
      `

      const dropdown = document.createElement('div')
      dropdown.className = 'doc-page-actions__dropdown'
      dropdown.id = 'doc-page-actions-menu'
      dropdown.setAttribute('role', 'menu')
      dropdown.hidden = true

      const copyLinkBtn = document.createElement('button')
      copyLinkBtn.type = 'button'
      copyLinkBtn.setAttribute('role', 'menuitem')
      copyLinkBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z"></path>
        </svg>
        <span>Copy link</span>
      `

      const printBtn = document.createElement('button')
      printBtn.type = 'button'
      printBtn.setAttribute('role', 'menuitem')
      printBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6v-8Z"></path>
        </svg>
        <span>Print page</span>
      `

      dropdown.appendChild(copyLinkBtn)
      dropdown.appendChild(printBtn)
      actions.appendChild(copyBtn)
      actions.appendChild(menuBtn)
      actions.appendChild(dropdown)

      content.insertBefore(actions, content.firstChild)

      const fallbackCopy = (text) => {
        try {
          const textArea = document.createElement('textarea')
          textArea.value = text
          textArea.style.position = 'fixed'
          textArea.style.top = '-9999px'
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()
          const successful = document.execCommand('copy')
          document.body.removeChild(textArea)
          if (successful) {
            showToast('Page link copied')
          }
        } catch (err) {
          console.error('Fallback: Copying text unsuccessful', err)
        }
      }

      const copyToClipboard = () => {
        const url = window.location.href
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            showToast('Page link copied')
          }).catch(() => {
            fallbackCopy(url)
          })
        } else {
          fallbackCopy(url)
        }
      }

      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        copyToClipboard()
      })

      copyLinkBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        copyToClipboard()
        dropdown.hidden = true
        menuBtn.setAttribute('aria-expanded', 'false')
      })

      printBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        window.print()
        dropdown.hidden = true
        menuBtn.setAttribute('aria-expanded', 'false')
      })

      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'
        menuBtn.setAttribute('aria-expanded', !isExpanded)
        dropdown.hidden = isExpanded
      })

      const handleOutsideClick = (e) => {
        if (!actions.contains(e.target)) {
          dropdown.hidden = true
          menuBtn.setAttribute('aria-expanded', 'false')
        }
      }
      currentOutsideClickListener = handleOutsideClick
      document.addEventListener('click', handleOutsideClick)
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

        renderBreadcrumbs(content, h1Text)
        moveSearchToSidebar()
        renderPageActions(content)
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
