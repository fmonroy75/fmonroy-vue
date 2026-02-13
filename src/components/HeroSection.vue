<template>
    <section id="home" class="hero-section text-white min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      <!-- Fondo animado -->
      <div class="position-absolute w-100 h-100">
        <div class="position-absolute w-100 h-100" 
             :style="{ background: 'url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+\')', opacity: 0.2 }">
        </div>
      </div>
  
      <div class="container position-relative">
        <div class="row align-items-center min-vh-100">
          <!-- Columna izquierda -->
          <div class="col-lg-7">
            <div class="animate-fade-up">
              <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-4">
                <i class="bi bi-code-slash me-2"></i>FULL STACK DEVELOPER
              </span>
              
              <h1 class="display-1 fw-bold mb-3">
                Francisco <span class="text-accent-light">Monroy</span> H.
              </h1>
              
              <h2 class="h3 fw-light mb-4 opacity-90">
                Ingeniero de Sistemas • Civil Industrial • 15+ años
              </h2>
              
              <p class="lead mb-5 opacity-80" style="max-width: 600px;">
                Especialista en gestión de proyectos tecnológicos, desarrollo full stack y análisis de datos. 
                Liderazgo de equipos y orientación al logro.
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
                <div v-for="stat in personalInfo.stats" :key="stat.label" class="col-6 col-md-3">
                  <div class="text-center text-lg-start">
                    <div class="display-6 fw-bold text-accent-light">{{ stat.value }}</div>
                    <div class="small text-white opacity-75">{{ stat.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Columna derecha -->
          <div class="col-lg-5 d-none d-lg-block">
            <div class="position-relative animate-float">
              <div class="position-absolute top-50 start-50 translate-middle" 
                   style="width: 450px; height: 450px; background: radial-gradient(circle, rgba(233,69,96,0.2) 0%, transparent 70%);">
              </div>
              
              <div class="position-relative text-center">
                <div class="bg-gradient-accent rounded-circle p-1 mx-auto" style="width: 350px; height: 350px;">
                  <div class="bg-white rounded-circle w-100 h-100 d-flex align-items-center justify-content-center shadow-lg">
                    <span class="display-1 fw-bold text-primary">FM</span>
                  </div>
                </div>
                
                <!-- Badges flotantes -->
                <div class="position-absolute top-0 end-0 bg-white shadow-lg rounded-4 p-3 animate-float" 
                     style="animation-delay: 0.5s; z-index: 10;">
                  <div class="d-flex align-items-center gap-2">
                    <div class="bg-accent rounded-circle p-2">
                      <i class="bi bi-award-fill text-white fs-5"></i>
                    </div>
                    <div class="text-start">
                      <div class="fw-bold text-primary">15+ años</div>
                      <div class="small text-secondary">experiencia</div>
                    </div>
                  </div>
                </div>
                
                <div class="position-absolute bottom-0 start-0 bg-white shadow-lg rounded-4 p-3 animate-float" 
                     style="animation-delay: 1s; z-index: 10;">
                  <div class="d-flex align-items-center gap-2">
                    <div class="bg-accent rounded-circle p-2">
                      <i class="bi bi-briefcase-fill text-white fs-5"></i>
                    </div>
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
  import { personalInfo } from '../data/portfolioData'
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  </script>
  
  <style scoped>
  .hero-section {
    background: linear-gradient(135deg, #2C3E50 0%, #1A2C3E 100%);
  }
  
  [data-bs-theme="dark"] .hero-section {
    background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%) !important;
  }
  
  .bg-gradient-accent {
    background: linear-gradient(135deg, #E94560 0%, #d63a52 100%);
  }
  
  [data-bs-theme="dark"] .bg-gradient-accent {
    background: linear-gradient(135deg, #FF6B8B 0%, #FF8E9F 100%) !important;
  }
  
  .bg-accent {
    background-color: #E94560 !important;
  }
  
  [data-bs-theme="dark"] .bg-accent {
    background-color: #FF6B8B !important;
  }
  
  .text-accent-light {
    color: #E94560 !important;
  }
  
  [data-bs-theme="dark"] .text-accent-light {
    color: #FF6B8B !important;
  }
  
  .btn-accent {
    background: linear-gradient(135deg, #E94560 0%, #d63a52 100%);
    border: none;
    color: white;
  }
  
  [data-bs-theme="dark"] .btn-accent {
    background: linear-gradient(135deg, #FF6B8B 0%, #FF8E9F 100%) !important;
  }
  
  .btn-outline-light {
    border: 2px solid white;
    color: white;
  }
  
  .btn-outline-light:hover {
    background: white;
    color: #2C3E50;
  }
  
  [data-bs-theme="dark"] .btn-outline-light:hover {
    background: white;
    color: #0F172A;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-20px); }
    60% { transform: translateX(-50%) translateY(-10px); }
  }
  
  .opacity-90 { opacity: 0.9; }
  .opacity-80 { opacity: 0.8; }
  .opacity-75 { opacity: 0.75; }
  </style>