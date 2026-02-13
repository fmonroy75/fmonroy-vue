// Detectar preferencia de tema del sistema
export const detectSystemTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }
  
  // Escuchar cambios en preferencia del sistema
  export const listenToSystemTheme = (callback) => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handler = (e) => {
      callback(e.matches ? 'dark' : 'light')
    }
    
    mediaQuery.addEventListener('change', handler)
    
    // Retornar función para limpiar listener
    return () => mediaQuery.removeEventListener('change', handler)
  }