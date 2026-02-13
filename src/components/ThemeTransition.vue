<template>
    <div v-if="isTransitioning" class="theme-transition-overlay">
      <div class="theme-transition-circle" :style="circleStyle"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useThemeStore } from '../stores/themeStore'
  
  const isTransitioning = ref(false)
  const circleStyle = ref({})
  const themeStore = useThemeStore()
  
  // Escuchar cambios de tema
  watch(() => themeStore.isDark, async (newVal, oldVal) => {
    if (oldVal !== undefined) {
      await triggerTransition()
    }
  })
  
  const triggerTransition = async () => {
    isTransitioning.value = true
    
    // Posición del click (o centro)
    const x = window.event?.clientX ?? window.innerWidth / 2
    const y = window.event?.clientY ?? window.innerHeight / 2
    
    // Calcular radio máximo
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    
    circleStyle.value = {
      left: `${x}px`,
      top: `${y}px`,
      width: '0px',
      height: '0px',
      animation: `themeTransition 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`
    }
    
    // Remover overlay después de la animación
    setTimeout(() => {
      isTransitioning.value = false
    }, 600)
  }
  </script>
  
  <style scoped>
  .theme-transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  }
  
  .theme-transition-circle {
    position: fixed;
    border-radius: 50%;
    background: var(--bg-primary, #2C3E50);
    transform: translate(-50%, -50%);
    will-change: width, height;
  }
  
  .dark-mode .theme-transition-circle {
    background: #0F172A;
  }
  
  @keyframes themeTransition {
    0% {
      width: 0px;
      height: 0px;
      opacity: 1;
    }
    100% {
      width: 300vmax;
      height: 300vmax;
      opacity: 0;
    }
  }
  </style>