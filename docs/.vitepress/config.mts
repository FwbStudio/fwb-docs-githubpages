import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FWB Studio Docs',
  description: 'Install guides and docs for FWB Studio FiveM scripts (ESX, QBCore, Qbox).',
  lang: 'en-US',
  cleanUrls: true,
  appearance: 'force-dark',
  srcExclude: ['**/resources/_FORMAT.md', '**/resources/_TEMPLATE/**'],
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
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap'
      }
    ],
    ['meta', { name: 'theme-color', content: '#07070f' }],
    ['link', { rel: 'icon', href: '/fwb-docs-githubpages/logo.png', type: 'image/png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'FWB Studio',
    nav: [],
    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Docs Home', link: '/' },
          { text: 'Install FWB Scripts', link: '/install-fwb-scripts' },
          { text: 'Basic Server Knowledge', link: '/basic-server-knowledge' }
        ]
      },
      {
        text: 'Bridge',
        items: [
          { text: 'Overview', link: '/bridge/' },
          { text: 'Supported', link: '/bridge/supported' },
          {
            text: 'Script Overrides',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/bridge/script-overrides' },
              { text: 'Client', link: '/bridge/overrides/client' },
              { text: 'Server', link: '/bridge/overrides/server' }
            ]
          },
          {
            text: 'Configuration',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/bridge/configuration/' },
              { text: 'Shared Config', link: '/bridge/configuration/shared-config' },
              { text: 'Client Config', link: '/bridge/configuration/client-config' },
              { text: 'Server Config', link: '/bridge/configuration/server-config' }
            ]
          }
        ]
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Coming soon', link: '/' }
        ]
      }
    ],
    socialLinks: [],
    footer: {
      message: 'FWB Studio documentation.',
      copyright: 'Copyright © FWB Studio'
    },
    search: {
      provider: 'local'
    },
    outline: [2, 3],
    fwbLinks: {
      store: 'https://fwbstudio.tebex.io/',
      discord: 'https://discord.gg/WH6uQ6uFvq'
    }
  } as any
})
