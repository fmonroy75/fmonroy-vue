<template>
    <section id="home" class="bg-gradient-premium text-white min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      <!-- Fondo animado con partículas -->
      <div class="position-absolute w-100 h-100">
        <div class="position-absolute w-100 h-100" style="background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+'); opacity: 0.2;"></div>
      </div>
  
      <div class="container position-relative">
        <div class="row align-items-center min-vh-100">
          <!-- Columna izquierda - Contenido -->
          <div class="col-lg-7">
            <div class="animate-fade-up">
              <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-4">
                <i class="bi bi-code-slash me-2"></i>FULL STACK DEVELOPER
              </span>
              
              <h1 class="display-1 fw-bold mb-3">
                Francisco <span class="text-accent">Monroy</span> H.
              </h1>
              
              <h2 class="h3 fw-light mb-4 opacity-90">
                Ingeniero de Sistemas • Civil Industrial • 15+ años
              </h2>
              
              <p class="lead mb-5 opacity-80" style="max-width: 600px;">
                Especialista en gestión de proyectos tecnológicos, desarrollo full stack y análisis de datos. Liderazgo de equipos y orientación al logro.
              </p>
              
              <div class="d-flex flex-wrap gap-3 mb-5">
                <button @click="scrollToSection('contact')" class="btn btn-accent btn-lg">
                  <i class="bi bi-envelope me-2"></i>
                  Contactar ahora
                </button>
                
                <button @click="scrollToSection('portfolio')" class="btn btn-outline-light btn-lg">
                  <i class="bi bi-briefcase me-2"></i>
                  Ver proyectos
                </button>
                
                <a href="/cv-francisco-monroy.pdf" download class="btn btn-outline-light btn-lg">
                  <i class="bi bi-download me-2"></i>
                  CV
                </a>
              </div>
              
              <!-- Stats -->
              <div class="row g-4">
                <div v-for="stat in stats" :key="stat.label" class="col-4">
                  <div class="text-center text-lg-start">
                    <div class="display-6 fw-bold text-accent">{{ stat.value }}</div>
                    <div class="small text-white opacity-75">{{ stat.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Columna derecha - Imagen/avatar -->
          <div class="col-lg-5 d-none d-lg-block">
            <div class="position-relative animate-float">
              <!-- Círculo decorativo -->
              <div class="position-absolute top-50 start-50 translate-middle" 
                   style="width: 400px; height: 400px; background: radial-gradient(circle, rgba(233,69,96,0.2) 0%, transparent 70%);">
              </div>
              
              <!-- Avatar -->
              <div class="position-relative text-center">
                <div class="bg-gradient-accent rounded-circle p-1 mx-auto" style="width: 320px; height: 320px;">
                  <div class="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center">
                    <span class="display-1 fw-bold text-primary">FM</span>
                  </div>
                </div>
                
                <!-- Badge flotante 1 -->
                <div class="position-absolute top-0 end-0 bg-white shadow-lg rounded-4 p-3 animate-float" 
                     style="animation-delay: 0.5s;">
                  <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-award-fill text-accent fs-4"></i>
                    <div class="text-start">
                      <div class="fw-bold text-primary">15+ años</div>
                      <div class="small text-secondary">experiencia</div>
                    </div>
                  </div>
                </div>
                
                <!-- Badge flotante 2 -->
                <div class="position-absolute bottom-0 start-0 bg-white shadow-lg rounded-4 p-3 animate-float" 
                     style="animation-delay: 1s;">
                  <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-briefcase-fill text-accent fs-4"></i>
                    <div class="text-start">
                      <div class="fw-bold text-primary">50+</div>
                      <div class="small text-secondary">proyectos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate-bounce">
        <a href="#experience" @click.prevent="scrollToSection('experience')" class="text-white">
          <i class="bi bi-chevron-down fs-1"></i>
        </a>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const stats = ref([
    { value: '15+', label: 'Años experiencia' },
    { value: '50+', label: 'Proyectos' },
    { value: '25+', label: 'Tecnologías' }
  ])
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  </script>
  
  <style scoped>
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-20px); }
    60% { transform: translateX(-50%) translateY(-10px); }
  }
  
  .bg-accent {
    background: #E94560 !important;
  }
  
  .text-accent {
    color: #E94560 !important;
  }
  
  .btn-accent {
    background: #E94560;
    border-color: #E94560;
    color: white;
  }
  
  .btn-accent:hover {
    background: #d63a52;
    border-color: #d63a52;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(233, 69, 96, 0.3);
  }
  
  .opacity-90 {
    opacity: 0.9;
  }
  
  .opacity-80 {
    opacity: 0.8;
  }
  
  .opacity-75 {
    opacity: 0.75;
  }
  </style>