<template>
  <button @click="toggleTheme" 
          class="theme-toggle-btn"
          :aria-label="themeText"
          :title="themeText">
    
    <!-- Sol (modo claro) -->
    <div v-if="!isDark" class="icon-wrapper">
      <i class="bi bi-sun-fill sun-icon"></i>
      <span class="sun-rays"></span>
      
    </div>
    
    <!-- Luna (modo oscuro) -->
    <div v-else class="icon-wrapper">
      <i class="bi bi-moon-fill moon-icon"></i>
      <span class="stars">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </span>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '../stores/themeStore'

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const isDark = computed(() => themeStore.isDark)
const themeText = computed(() => isDark.value ? 'Modo claro' : 'Modo oscuro')
</script>

<style scoped>
.theme-toggle-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #e94560;
  background: white;
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
  background: #1e293b;
  border-color: #ff6b8b;
}

.icon-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Sol */
.sun-icon {
  font-size: 28px;
  color: #f39c12;
  animation: pulse 2s ease-in-out infinite;
}

.sun-rays {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.sun-rays::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid #f39c12;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: sunRays 2s linear infinite;
}

@keyframes sunRays {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

/* Luna */
.moon-icon {
  font-size: 24px;
  color: #f1c40f;
  filter: drop-shadow(0 0 5px #f1c40f);
}

.stars {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 1.5s ease-in-out infinite;
}

.star:nth-child(1) {
  width: 3px;
  height: 3px;
  top: 5px;
  left: 10px;
}

.star:nth-child(2) {
  width: 4px;
  height: 4px;
  top: 15px;
  right: 8px;
  animation-delay: 0.5s;
}

.star:nth-child(3) {
  width: 2px;
  height: 2px;
  bottom: 12px;
  left: 12px;
  animation-delay: 1s;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Hover */
.theme-toggle-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(233, 69, 96, 0.3);
}

[data-bs-theme="dark"] .theme-toggle-btn:hover {
  box-shadow: 0 5px 15px rgba(255, 107, 139, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .theme-toggle-btn {
    width: 42px;
    height: 42px;
    margin: 0 5px;
  }
  
  .sun-icon {
    font-size: 24px;
  }
  
  .moon-icon {
    font-size: 20px;
  }
}
</style>