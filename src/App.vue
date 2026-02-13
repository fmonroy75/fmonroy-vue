<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold fs-3" href="#">
          F<span class="text-accent">M</span>
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item" v-for="item in menuItems" :key="item.name">
              <a class="nav-link px-3" :href="item.path">{{ item.name }}</a>
            </li>
            <li class="nav-item ms-lg-3">
              <a href="#contact" class="btn btn-accent px-4 rounded-pill">
                <i class="bi bi-envelope me-2"></i>Contactar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <HeroSection />
      <ExperienceSection />
      <!-- Aquí van los demás componentes -->
    </main>

    <!-- Footer -->
    <footer class="bg-primary text-white py-5">
      <div class="container text-center">
        <h4 class="fw-bold mb-3">Francisco Monroy H.</h4>
        <p class="mb-4 opacity-75">Full Stack Developer · Ingeniero de Sistemas · PM</p>
        <div class="d-flex justify-content-center gap-3 mb-4">
          <a href="#" class="text-white fs-4"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="text-white fs-4"><i class="bi bi-github"></i></a>
          <a href="#" class="text-white fs-4"><i class="bi bi-envelope"></i></a>
        </div>
        <hr class="opacity-25">
        <p class="small opacity-75 mb-0">© 2024 Francisco Monroy. Todos los derechos reservados.</p>
      </div>
    </footer>

    <!-- Back to top -->
    <button v-show="showBackToTop" @click="scrollToTop" 
            class="btn btn-accent rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg"
            style="width: 50px; height: 50px;">
      <i class="bi bi-arrow-up fs-5"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'

const showBackToTop = ref(false)
const menuItems = ref([
  { name: 'Inicio', path: '#home' },
  { name: 'Experiencia', path: '#experience' },
  { name: 'Proyectos', path: '#portfolio' },
  { name: 'Contacto', path: '#contact' }
])

const checkScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style>
/* Smooth scroll */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

/* Navbar active state */
.nav-link {
  color: #2C3E50 !important;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #E94560 !important;
}

/* Custom utilities */
.text-accent {
  color: #E94560 !important;
}

.bg-accent {
  background-color: #E94560 !important;
}

.btn-accent {
  background-color: #E94560;
  border-color: #E94560;
  color: white;
}

.btn-accent:hover {
  background-color: #d63a52;
  border-color: #d63a52;
  color: white;
}

.bg-primary {
  background-color: #2C3E50 !important;
}
</style>
