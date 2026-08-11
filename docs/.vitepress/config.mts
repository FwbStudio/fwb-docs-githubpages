import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FWB Studio',
  description: 'FiveM scripts, Bridge docs, and install guides for ESX, QBCore, and Qbox.',
  lang: 'en-US',
  cleanUrls: true,
  // Project Pages URL first. When you add doc.fwbstudio.com later, set base back to '/'
  // and restore docs/public/CNAME.
  base: '/fwb-docs-githubpages/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Source+Sans+3:wght@400;500;600;700&display=swap'
      }
    ],
    ['meta', { name: 'theme-color', content: '#0f1419' }]
  ],
  themeConfig: {
    logo: '/brand-mark.svg',
    siteTitle: 'FWB Studio',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Scripts', link: '/#scripts' },
      {
        text: 'Store',
        link: 'https://fwbstudio.tebex.io/',
        target: '_blank'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Get Started',
          items: [
            { text: 'Docs Home', link: '/docs/' },
            { text: 'Install FWB Scripts', link: '/docs/install-fwb-scripts' },
            { text: 'Basic Server Knowledge', link: '/docs/basic-server-knowledge' }
          ]
        },
        {
          text: 'Bridge',
          items: [
            { text: 'Overview', link: '/docs/bridge/' }
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Coming soon', link: '/docs/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FwbStudio' }
    ],
    footer: {
      message: 'Public docs for FWB Studio FiveM resources.',
      copyright: 'Copyright © FWB Studio'
    },
    search: {
      provider: 'local'
    },
    outline: [2, 3]
  }
})
