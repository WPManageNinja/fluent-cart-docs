import DefaultTheme from 'vitepress/theme'
import Breadcrumbs from './components/Breadcrumbs.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Breadcrumbs', Breadcrumbs)
  }
} 