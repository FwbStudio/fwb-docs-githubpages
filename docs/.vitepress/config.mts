import { defineConfig } from 'vitepress'
import { buildDocsSidebar } from './resources-catalog.mts'

export default defineConfig({
  title: 'FWB Studio Docs',
  description:
    'Official FWB Studio FiveM documentation — install guides, Bridge setup, and script docs for ESX, QBCore, and Qbox servers.',
  lang: 'en-US',
  cleanUrls: true,
  appearance: 'force-dark',
  srcExclude: ['**/resources/_FORMAT.md', '**/resources/_TEMPLATE/**'],
  // Custom domain base path for docs.fwbstudio.com
  base: '/',
  head: [
    ['script', {}, `if ('serviceWorker' in navigator) { navigator.serviceWorker.getRegistrations().then(function(registrations) { for (let registration of registrations) { registration.unregister(); } }); }`],
    ['script', {}, `(function(){document.documentElement.classList.add('dark');})()`],
    ['style', {}, `:root, html, body, #app, .VPApp, .VPNav, .VPSidebar, .VPContent { background-color: #05070d !important; color: #e2e8f0 !important; }`],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap'
      }
    ],
    ['meta', { name: 'theme-color', content: '#07070f' }],
    [
      'meta',
      {
        name: 'description',
        content:
          'FWB Studio docs for FiveM scripts — Bridge, Fraud, Trap Phone, jobs, weapons, and install guides for ESX, QBCore, and Qbox.'
      }
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'FWB Studio Docs' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    nav: [],
    sidebar: buildDocsSidebar(),
    socialLinks: [],
    footer: {
      message: 'FWB Studio documentation.',
      copyright: 'Copyright © FWB Studio'
    },
    search: {
      provider: 'local'
    },
    // Off: frees the right column so code blocks can use full content width
    outline: false,
    fwbLinks: {
      store: 'https://fwbstudio.tebex.io/',
      discord: 'https://discord.gg/WH6uQ6uFvq'
    }
  } as any
})
