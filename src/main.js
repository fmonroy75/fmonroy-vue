import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap y Bootstrap Icons - IMPORTACIÓN CORREGIDA
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

// IMPORTANTE: Bootstrap JS debe ir DESPUÉS del CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Estilos personalizados
import './style.css'
import './style-dark.css'  // Modo oscuro


// Store del tema
import { useThemeStore } from './stores/themeStore'

const app = createApp(App)
app.mount('#app')

// Inicializar tema después de montar la app
const themeStore = useThemeStore()
themeStore.initTheme()