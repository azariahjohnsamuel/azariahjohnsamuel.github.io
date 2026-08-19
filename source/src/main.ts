import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal } from './directives/reveal'
import { vTilt } from './directives/tilt'
import { vZoomSection } from './directives/zoomSection'

const app = createApp(App)
app.directive('reveal', vReveal)
app.directive('tilt', vTilt)
app.directive('zoom-section', vZoomSection)
app.mount('#app')
