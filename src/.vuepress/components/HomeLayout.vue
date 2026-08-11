<template>
  <div class="home-wrapper">

    <!-- ── Top Navbar ─────────────────────────────────── -->
    <header class="home-navbar">
      <div class="home-navbar__inner">
        <!-- Logo + site name -->
        <a class="home-navbar__logo" href="/">
          <span class="home-navbar__site-name">Ashwani Kumar Pandey</span>
        </a>

        <!-- Nav links -->
        <nav class="home-navbar__links" aria-label="site navigation">
          <a href="/about.html">About Me</a>
          <a href="/skills.html">Skills</a>
          <a href="/experience.html">Experience</a>
          <a href="/projects.html">Projects</a>
          <a href="/education.html">Education</a>
          <a href="/certifications.html">Certifications</a>
        </nav>

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
    </header>

    <!-- ── Main home content ───────────────────────────── -->
    <div class="vp-home doc-is-home">

      <!-- Hero -->
      <header class="vp-hero">
        <span class="vp-hero-pretitle">BACKEND ENGINEER · PHP · MAGENTO 2 · JAVA &amp; SPRING BOOT</span>
        <h1 id="main-title">Ashwani Kumar Pandey</h1>
        <p class="vp-hero-description">
          Backend Software Engineer specializing in scalable e-commerce extension development, API design (REST/GraphQL), session &amp; database optimizations, and robust backend integrations.
        </p>
        <p class="vp-hero-actions">
          <a class="vp-hero-action-button primary" href="/about.html" aria-label="Explore Profile">
            Explore Portfolio
          </a>
          <a class="vp-hero-action-button secondary"
             href="mailto:ashwanipandey679@gmail.com"
             aria-label="Contact Email">
            Contact Me ✉
          </a>
        </p>
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
                  <a href="/about.html">About Me</a>
                  <a href="/skills.html">Technical Skills</a>
                </nav>
              </div>

              <!-- Card 2: Work & Projects -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">2</span>
                  <h2>Experience</h2>
                </div>
                <p>Explore my employment history at Webkul, Rudra Innovative, and BrainGrid.</p>
                <nav aria-label="Experience links">
                  <a href="/experience.html">Work Experience</a>
                  <a href="/projects.html">Key Projects</a>
                </nav>
              </div>

              <!-- Card 3: Education -->
              <div class="home-guide-card">
                <div class="home-guide-card__head">
                  <span class="home-guide-card__number">3</span>
                  <h2>Education</h2>
                </div>
                <p>View my educational qualifications, academic degrees, and professional certifications.</p>
                <nav aria-label="Education and Certifications links">
                  <a href="/education.html">Education Details</a>
                  <a href="/certifications.html">Certifications</a>
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

const isDark = ref(false)

const technologies = [
  { name: 'PHP', subtitle: 'Language Core', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', subtitle: 'MVC Framework', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Magento 2', subtitle: 'Adobe Commerce', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg' },
  { name: 'Java', subtitle: 'Core & OOPs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', subtitle: 'Microservices', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'PostgreSQL', subtitle: 'Relational DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', subtitle: 'Relational DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GraphQL', subtitle: 'API Query Lang', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'REST API', subtitle: 'Web Services', logo: 'https://img.icons8.com/color/48/api.png' },
  { name: 'Vue.js', subtitle: 'Frontend Library', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Tailwind CSS', subtitle: 'Utility CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Hyvä Theme', subtitle: 'Magento Tailwind', logo: '/images/trust/hyva.webp' },
  { name: 'React.js', subtitle: 'MERN Frontend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', subtitle: 'MERN Backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', subtitle: 'NoSQL Database', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'System Design', subtitle: 'Cron & Queues', logo: 'https://img.icons8.com/color/48/services.png' },
  { name: 'Playwright', subtitle: 'Automated Test', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' }
]

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
</style>
