<template>
    <section id="experience" class="py-5 py-lg-6 bg-light">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-5" data-aos="fade-up">
          <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-3">
            <i class="bi bi-briefcase me-2"></i>TRAYECTORIA
          </span>
          <h2 class="display-4 fw-bold mb-3">
            Experiencia <span class="text-accent">Profesional</span>
          </h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px;">
            15+ años liderando equipos y proyectos en empresas líderes de Chile
          </p>
        </div>
  
        <!-- Timeline -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div v-for="(exp, index) in sortedExperience" :key="exp.id" 
                 class="row g-0 mb-5 timeline-item animate-fade-up"
                 :style="{ animationDelay: `${index * 0.1}s` }">
              
              <!-- Línea decorativa y año -->
              <div class="col-md-4 text-md-end pe-md-5">
                <div class="sticky-top" style="top: 100px;">
                  <div class="badge bg-gradient-accent text-white px-4 py-2 rounded-pill mb-3">
                    {{ exp.period }}
                  </div>
                  <h3 class="h4 fw-bold text-primary">{{ exp.company }}</h3>
                  <p class="text-accent fw-semibold">{{ exp.position }}</p>
                  <p class="text-secondary small">
                    <i class="bi bi-geo-alt me-1"></i>
                    {{ exp.location }}
                  </p>
                </div>
              </div>
              
              <!-- Contenido -->
              <div class="col-md-8">
                <div class="card card-premium h-100">
                  <div class="card-body p-4 p-lg-5">
                    <ul class="list-unstyled mb-4">
                      <li v-for="highlight in exp.highlights" :key="highlight"
                          class="mb-3 d-flex">
                        <span class="text-accent me-3 fs-5">▹</span>
                        <span class="text-primary-800">{{ highlight }}</span>
                      </li>
                    </ul>
                    
                    <div class="d-flex flex-wrap gap-2 mt-4 pt-4 border-top">
                      <span v-for="tech in exp.technologies" :key="tech"
                            class="badge bg-light text-primary border px-3 py-2 rounded-pill">
                        <i :class="getTechIcon(tech)" class="me-1"></i>
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Separador móvil -->
              <div class="col-12 d-md-none mt-4">
                <hr class="opacity-25">
              </div>
            </div>
          </div>
        </div>
        
        <!-- Badge de experiencia total -->
        <div class="row mt-5">
          <div class="col-12 text-center">
            <div class="bg-white rounded-5 shadow-lg p-4 d-inline-flex align-items-center gap-4">
              <div class="bg-gradient-accent rounded-circle p-3">
                <i class="bi bi-briefcase-fill text-white fs-3"></i>
              </div>
              <div class="text-start">
                <span class="text-secondary small text-uppercase">Trayectoria completa</span>
                <div class="display-6 fw-bold text-primary">1997 - Presente</div>
                <span class="text-accent fw-semibold">27 años de experiencia continua</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { experience } from '../data/portfolioData'
  
  const sortedExperience = computed(() => {
    return [...experience].sort((a, b) => {
      const yearA = parseInt(a.period.split(' – ')[0] || a.period.split(' - ')[0])
      const yearB = parseInt(b.period.split(' – ')[0] || b.period.split(' - ')[0])
      return yearB - yearA
    })
  })
  
  const getTechIcon = (tech) => {
    const icons = {
      'Murex': 'bi-database',
      'SQL': 'bi-database',
      'Java': 'bi-code-square',
      'Excel': 'bi-file-spreadsheet',
      'Oracle': 'bi-database',
      'VB': 'bi-code-square',
      'PeopleSoft': 'bi-building',
      'SAP': 'bi-building',
      'ASP': 'bi-code',
      'JavaScript': 'bi-braces',
      'Python': 'bi-code-slash'
    }
    return icons[tech] || 'bi-gear'
  }
  </script>
  
  <style scoped>
  .bg-gradient-accent {
    background: linear-gradient(135deg, var(--bs-accent) 0%, var(--bs-accent-hover) 100%);
  }
  
  .bg-accent {
    background-color: var(--bs-accent) !important;
  }
  
  .text-accent {
    color: var(--bs-accent) !important;
  }
  
  .card-premium {
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }
  
  .card-premium:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
  }
  
  .border-top {
    border-color: rgba(0,0,0,0.05) !important;
  }
  
  .py-lg-6 {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }
  
  @media (min-width: 992px) {
    .py-lg-6 {
      padding-top: 6rem !important;
      padding-bottom: 6rem !important;
    }
  }
  </style>