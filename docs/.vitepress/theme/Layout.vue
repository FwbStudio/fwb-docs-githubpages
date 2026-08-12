<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { computed, onMounted, watch } from 'vue'

const { Layout } = DefaultTheme
const { theme } = useData()
const route = useRoute()

const storeUrl = computed(
  () => theme.value.fwbLinks?.store ?? 'https://fwbstudio.tebex.io/'
)
const discordUrl = computed(
  () => theme.value.fwbLinks?.discord ?? 'https://discord.gg/WH6uQ6uFvq'
)

function setSidebarOpen(open: boolean) {
  const sidebar = document.querySelector('.VPSidebar') as HTMLElement | null
  const backdrop = document.querySelector('.VPBackdrop') as HTMLElement | null
  const hamburger = document.querySelector('.VPNavBarHamburger, .hamburger')
  const navScreen = document.querySelector('.VPNavScreen')

  if (sidebar) sidebar.style.transform = ''
  if (backdrop) backdrop.style.opacity = ''

  if (open) {
    sidebar?.classList.add('open')
    backdrop?.classList.add('active')
    hamburger?.classList.add('active')
  } else {
    sidebar?.classList.remove('open')
    backdrop?.classList.remove('active')
    hamburger?.classList.remove('active')
    navScreen?.classList.remove('open', 'active')
    document.documentElement.classList.remove('overflow-hidden', 'screen-open')
    document.body.classList.remove('overflow-hidden', 'screen-open')
  }
}

function toggleSidebar(e?: Event) {
  if (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  const sidebar = document.querySelector('.VPSidebar')
  const isOpen = sidebar?.classList.contains('open')
  setSidebarOpen(!isOpen)
}

watch(
  () => route.path,
  () => {
    setSidebarOpen(false)
  }
)

onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const hamburger = target.closest('.VPNavBarHamburger, .hamburger')
    const backdrop = target.closest('.VPBackdrop')
    const sidebarLink = target.closest('.VPSidebar a')

    if (hamburger) {
      toggleSidebar(e)
    } else if (sidebarLink) {
      setSidebarOpen(false)
    } else if (backdrop) {
      setSidebarOpen(false)
    } else {
      const sidebar = document.querySelector('.VPSidebar')
      if (sidebar?.classList.contains('open') && !target.closest('.VPSidebar')) {
        setSidebarOpen(false)
      }
    }
  })

  // Real-Time Finger Tracking Touch Dragging
  let startX = 0
  let startY = 0
  let isDragging = false
  let sidebarEl: HTMLElement | null = null
  let backdropEl: HTMLElement | null = null

  document.addEventListener('touchstart', (e) => {
    sidebarEl = document.querySelector('.VPSidebar') as HTMLElement
    backdropEl = document.querySelector('.VPBackdrop') as HTMLElement
    if (!sidebarEl) return

    const isOpen = sidebarEl.classList.contains('open')
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY

    if (isOpen || (!isOpen && startX < 35)) {
      isDragging = true
      sidebarEl.style.transition = 'none'
      if (backdropEl) backdropEl.style.transition = 'none'
    }
  }, { passive: true })

  document.addEventListener('touchmove', (e) => {
    if (!isDragging || !sidebarEl) return
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const deltaX = currentX - startX
    const deltaY = Math.abs(currentY - startY)

    if (deltaY > Math.abs(deltaX) && Math.abs(deltaX) < 15) return

    const isOpen = sidebarEl.classList.contains('open')
    const sidebarWidth = sidebarEl.offsetWidth || 280

    if (isOpen) {
      if (deltaX < 0) {
        const moveX = Math.max(-sidebarWidth, deltaX)
        sidebarEl.style.transform = `translateX(${moveX}px)`
        if (backdropEl) {
          const ratio = Math.max(0, 1 + moveX / sidebarWidth)
          backdropEl.style.opacity = `${ratio}`
        }
      }
    } else {
      if (deltaX > 0 && startX < 35) {
        const moveX = Math.min(0, -sidebarWidth + deltaX)
        sidebarEl.style.transform = `translateX(${moveX}px)`
        if (backdropEl) {
          backdropEl.classList.add('active')
          const ratio = Math.min(1, deltaX / sidebarWidth)
          backdropEl.style.opacity = `${ratio}`
        }
      }
    }
  }, { passive: true })

  document.addEventListener('touchend', (e) => {
    if (!isDragging || !sidebarEl) return
    isDragging = false

    const endX = e.changedTouches[0].clientX
    const deltaX = endX - startX
    const isOpen = sidebarEl.classList.contains('open')

    sidebarEl.style.transition = ''
    if (backdropEl) {
      backdropEl.style.transition = ''
      backdropEl.style.opacity = ''
    }
    sidebarEl.style.transform = ''

    if (isOpen) {
      if (deltaX < -60) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    } else {
      if (startX < 35 && deltaX > 60) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }
  }, { passive: true })
})
</script>

<template>
  <Layout>
    <template #layout-top>
      <div class="fwb-site-particles" aria-hidden="true">
        <span v-for="n in 18" :key="n" />
      </div>
    </template>

    <template #nav-bar-title-after>
      <span class="fwb-center-title">Docs</span>
    </template>

    <template #nav-bar-content-after>
      <div class="fwb-nav-actions">
        <a class="fwb-nav-store" :href="storeUrl" target="_blank" rel="noreferrer">Store</a>
        <a
          class="fwb-nav-discord"
          :href="discordUrl"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
          title="Discord"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
            <path
              d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.079.034c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.07.07 0 0 0-.079-.034A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.07.07 0 0 0-.041-.098 13.17 13.17 0 0 1-1.872-.892.07.07 0 0 1-.007-.117c.126-.094.252-.192.372-.292a.07.07 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .079.01c.12.1.246.198.373.292a.07.07 0 0 1-.006.117 12.3 12.3 0 0 1-1.873.892.07.07 0 0 0-.041.099c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
            />
          </svg>
        </a>
      </div>
    </template>
  </Layout>
</template>
