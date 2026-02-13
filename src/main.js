/*import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
*/
import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

// Estilos personalizados (SIEMPRE después de Bootstrap)
import './style.css'

createApp(App).mount('#app')