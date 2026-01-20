import DefaultTheme from 'vitepress/theme'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import Layout from './Layout.vue' // Import new layout file
// import ZoomableImage from './components/ZoomableImage.vue' // Disabled - causing frontend rendering issues

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Breadcrumbs', Breadcrumbs)
    app.component('Feedback', Feedback)
    // app.component('ZoomableImage', ZoomableImage) // Disabled - causing frontend rendering issues
  }
} 