import DefaultTheme from 'vitepress/theme'
import Breadcrumbs from './components/Breadcrumbs.vue'
// import ZoomableImage from './components/ZoomableImage.vue' // Disabled - causing frontend rendering issues

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Breadcrumbs', Breadcrumbs)
    // app.component('ZoomableImage', ZoomableImage) // Disabled - causing frontend rendering issues
  }
} 