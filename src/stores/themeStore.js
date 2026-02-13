// Sistema de modo oscuro con persistencia - VERSIÓN CORREGIDA
import { ref, watch, computed } from 'vue'

const THEME_KEY = 'portfolio-theme-preference'

export const useThemeStore = () => {
  const isDark = ref(false)
  
  // Inicializar tema desde localStorage o preferencia del sistema
  const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Detectar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }
    
    applyTheme()
  }
  
  // Aplicar tema al DOM - VERSIÓN CORREGIDA
  const applyTheme = () => {
    // CORREGIDO: Bootstrap 5 usa data-bs-theme en el HTML element
    if (isDark.value) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
      document.body.classList.add('dark-mode')
      // También agregamos una clase para nuestros estilos personalizados
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light')
      document.body.classList.remove('dark-mode')
      document.documentElement.classList.remove('dark-theme')
    }
    
    // Disparar evento para componentes
    window.dispatchEvent(new CustomEvent('theme-change', { 
      detail: { isDark: isDark.value } 
    }))
  }
  
  // Toggle tema
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light')
    applyTheme()
  }
  
  // Set tema específico
  const setTheme = (dark) => {
    isDark.value = dark
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
    applyTheme()
  }
  
  // Icono basado en tema actual
  const themeIcon = computed(() => 
    isDark.value ? 'bi-sun-fill' : 'bi-moon-fill'
  )
  
  // Texto basado en tema actual
  const themeText = computed(() => 
    isDark.value ? 'Modo Claro' : 'Modo Oscuro'
  )
  
  return {
    isDark,
    initTheme,
    toggleTheme,
    setTheme,
    themeIcon,
    themeText
  }
}