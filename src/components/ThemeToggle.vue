<template>
  <button @click="toggleTheme" 
          class="theme-toggle-btn position-relative overflow-hidden"
          :aria-label="themeText"
          :title="themeText">
    
    <!-- Efecto de brillo -->
    <span class="shine-effect"></span>
    
    <!-- Icono animado -->
    <transition name="theme-icon" mode="out-in">
      <i :key="themeIcon" 
         :class="['bi', themeIcon, 'fs-5']">
      </i>
    </transition>
    
    <!-- Indicador de estado -->
    <span class="position-absolute top-0 start-100 translate-middle p-1 
                 rounded-circle status-indicator"
          :class="isDark ? 'bg-accent' : 'bg-secondary'">
      <span class="visually-hidden">{{ themeText }}</span>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '../stores/themeStore'

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const themeIcon = computed(() => themeStore.themeIcon)
const themeText = computed(() => themeStore.themeText)
const isDark = computed(() => themeStore.isDark)
</script>

<style scoped>
.theme-toggle-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #E94560;
  background: transparent;
  color: #2C3E50;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0;
  margin: 0 10px;
}

[data-bs-theme="dark"] .theme-toggle-btn {
  border-color: #FF6B8B;
  color: #FF6B8B;
}

.theme-toggle-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(233, 69, 96, 0.3);
}

[data-bs-theme="dark"] .theme-toggle-btn:hover {
  box-shadow: 0 0 15px rgba(255, 107, 139, 0.3);
}

.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.shine-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
  pointer-events: none;
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  20% { transform: translateX(100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

.status-indicator {
  width: 12px;
  height: 12px;
  border: 2px solid white;
  animation: pulse 2s ease-in-out infinite;
}

.bg-accent {
  background-color: #E94560 !important;
}

.bg-secondary {
  background-color: #95A5A6 !important;
}

[data-bs-theme="dark"] .bg-accent {
  background-color: #FF6B8B !important;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>