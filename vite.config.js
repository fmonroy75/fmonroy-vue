/*import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/fmonroy-vue/', // Cambia al nombre de tu repositorio
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    publicPath: '/fmonroy-vue/',
    rollupOptions: {
      output: {
        manualChunks: {
          bootstrap: ['bootstrap']
        }
      }
    }
  }
})