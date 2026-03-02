<template>
    <footer class="bg-dark text-white py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <h4 class="fw-bold mb-3">
              Francisco <span class="text-accent">Monroy</span> H.
            </h4>
            <p class="text-white opacity-75 mb-4">
              {{personalInfo.title}}
            </p>
            <div class="d-flex gap-2">
              <a :href="personalInfo.linkedin" target="_blank" 
                 class="btn btn-outline-light rounded-circle p-3 d-flex align-items-center justify-content-center"
                 style="width: 45px; height: 45px;">
                <i class="bi bi-linkedin fs-5"></i>
              </a>
              <a :href="personalInfo.github" target="_blank" 
                 class="btn btn-outline-light rounded-circle p-3 d-flex align-items-center justify-content-center"
                 style="width: 45px; height: 45px;">
                <i class="bi bi-github fs-5"></i>
              </a>
              <a :href="'mailto:' + personalInfo.email" 
                 class="btn btn-outline-light rounded-circle p-3 d-flex align-items-center justify-content-center"
                 style="width: 45px; height: 45px;">
                <i class="bi bi-envelope fs-5"></i>
              </a>
              <a :href="personalInfo.cvFile" download
                 class="btn btn-outline-light rounded-circle p-3 d-flex align-items-center justify-content-center"
                 style="width: 45px; height: 45px;">
                <i class="bi bi-file-text fs-5"></i>
              </a>
            </div>
          </div>
          
          <div class="col-lg-4">
            <h5 class="fw-bold mb-3">Navegación</h5>
            <ul class="list-unstyled">
              <li v-for="item in menuItems" :key="item.name" class="mb-2">
                <a :href="item.path" class="text-white opacity-75 text-decoration-none hover-accent">
                  <i class="bi bi-chevron-right me-2 small"></i>
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
          
          <div class="col-lg-4">
            <h5 class="fw-bold mb-3">Contacto</h5>
            <ul class="list-unstyled">
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-envelope me-3 text-accent"></i>
                <a :href="'mailto:' + personalInfo.email" 
                   class="text-white opacity-75 text-decoration-none">
                  {{ personalInfo.email }}
                </a>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-geo-alt me-3 text-accent"></i>
                <span class="text-white opacity-75">{{ personalInfo.location }}</span>
              </li>
              <li class="mb-3 d-flex align-items-center">
                <i class="bi bi-file-text me-3 text-accent"></i>
                <a :href="personalInfo.cvFile" 
                download="Francisco_Monroy_CV.pdf" 
                   class="text-white opacity-75 text-decoration-none">
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr class="my-4 opacity-25">
        
        <div class="row">
          <div class="col-12 text-center">
            <p class="small opacity-75 mb-0">
              © {{ currentYear }} Francisco Monroy. Todos los derechos reservados.
            </p>
            <p class="small opacity-50 mt-2">
              Desarrollado con Vue 3 + Bootstrap 5
            </p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { personalInfo, menuItems } from '../data/portfolioData'
  
  const currentYear = ref(new Date().getFullYear())
  </script>
  
  <style scoped>
  .bg-dark {
    background-color: #1A2C3E !important;
  }
  
  .text-accent {
    color: var(--bs-accent) !important;
  }
  
  .hover-accent:hover {
    color: var(--bs-accent) !important;
    transition: color 0.3s ease;
  }
  
  .btn-outline-light {
    border-width: 2px;
  }
  
  .btn-outline-light:hover {
    background: var(--bs-accent);
    border-color: var(--bs-accent);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(13, 148, 136, 0.35);
  }
  </style>