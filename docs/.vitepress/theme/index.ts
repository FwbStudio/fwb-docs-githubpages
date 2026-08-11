import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import FeaturedScripts from './FeaturedScripts.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeaturedScripts', FeaturedScripts)
  }
} satisfies Theme
