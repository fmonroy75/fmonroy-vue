<template>
  <div id="app">
    <!-- Navbar - VERSIÓN CORREGIDA -->
    <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#home">
        <img :src="logoImage" 
             alt="Francisco Monroy" 
             class="rounded-circle"
             style="height: 50px; width: auto; object-fit: cover;">
        <span class="fw-bold fs-5 d-none d-sm-inline">
          F. <span class="text-accent">Monroy</span>
        </span>
      </a>
        <!--<a class="navbar-brand fw-bold fs-3" href="#home">
          F<span class="text-accent">M</span>
        </a>-->
        
        <div class="d-flex align-items-center">
          <!-- Theme Toggle -->
          <ThemeToggle />
          
          <button class="navbar-toggler border-0" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item" v-for="item in menuItems" :key="item.name">
              <a class="nav-link px-3 fw-medium" :href="item.path" 
                 :class="{ active: activeSection === item.path.substring(1) }"
                 @click.prevent="scrollToSection(item.path.substring(1))">
                {{ item.name }}
              </a>
            </li>
            <li class="nav-item ms-lg-3">
              <a href="#contact" class="btn btn-accent px-4 rounded-pill"
                 @click.prevent="scrollToSection('contact')">
                <i class="bi bi-envelope me-2"></i>
                Contactar
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
      <EducationSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Back to top -->
    <button v-show="showBackToTop" @click="scrollToTop" 
            class="btn btn-accent rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg back-to-top"
            style="width: 50px; height: 50px; z-index: 1000;">
      <i class="bi bi-arrow-up fs-5"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { menuItems } from './data/portfolioData'

// Componentes
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'



const showBackToTop = ref(false)
const activeSection = ref('home')

// Importar la imagen desde assets
import logoImage from './assets/images/sigla.png'


const checkScroll = () => {
  showBackToTop.value = window.scrollY > 300
  
  // Detectar sección activa
  const sections = menuItems.map(item => item.path.substring(1))
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId
    
    // Cerrar navbar en móvil
    const navbarCollapse = document.getElementById('navbarNav')
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show')
    }
  }
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

/* Navbar - ESTILOS CORREGIDOS */
.navbar {
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

[data-bs-theme="dark"] .navbar {
  background-color: rgba(15, 23, 42, 0.95) !important;
  border-bottom: 1px solid #334155 !important;
}

.navbar-brand {
  color: #2C3E50 !important;
}

[data-bs-theme="dark"] .navbar-brand {
  color: #F1F5F9 !important;
}

.nav-link {
  color: #2C3E50 !important;
  transition: color 0.3s ease;
  position: relative;
}

[data-bs-theme="dark"] .nav-link {
  color: #CBD5E1 !important;
}

.nav-link:hover,
.nav-link.active {
  color: #E94560 !important;
}

[data-bs-theme="dark"] .nav-link:hover,
[data-bs-theme="dark"] .nav-link.active {
  color: #FF6B8B !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #E94560;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

[data-bs-theme="dark"] .nav-link::after {
  background: #FF6B8B;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 30px;
}

.navbar-toggler {
  border: none;
  padding: 0.5rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

[data-bs-theme="dark"] .navbar-toggler-icon {
  filter: invert(1);
}

.btn-accent {
  background: linear-gradient(135deg, #E94560 0%, #d63a52 100%);
  border: none;
  color: white;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(233, 69, 96, 0.3);
  color: white;
}

[data-bs-theme="dark"] .btn-accent {
  background: linear-gradient(135deg, #FF6B8B 0%, #FF8E9F 100%);
}

.text-accent {
  color: #E94560 !important;
}

[data-bs-theme="dark"] .text-accent {
  color: #FF6B8B !important;
}

.back-to-top {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background: white;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  [data-bs-theme="dark"] .navbar-collapse {
    background: #1E293B;
    border: 1px solid #334155;
  }
  
  .nav-item {
    margin: 0.5rem 0;
  }
}
</style>