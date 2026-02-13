<template>
    <section id="skills" class="py-5 py-lg-6 bg-light">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-5" data-aos="fade-up">
          <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-3">
            <i class="bi bi-tools me-2"></i>COMPETENCIAS
          </span>
          <h2 class="display-4 fw-bold mb-3">
            Habilidades <span class="text-accent">Técnicas</span>
          </h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px;">
            Más de 25 tecnologías dominadas a lo largo de 15+ años de experiencia continua
          </p>
        </div>
  
        <div class="row g-4">
          <!-- Skills técnicas -->
          <div class="col-lg-7">
            <div class="card card-premium h-100" data-aos="fade-right">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-gradient-accent rounded-circle p-3 me-3">
                    <i class="bi bi-code-slash text-white fs-3"></i>
                  </div>
                  <h3 class="h3 fw-bold mb-0 text-primary">Desarrollo y Tecnologías</h3>
                </div>
                
                <div v-for="skill in technicalSkills" :key="skill.name" class="mb-4">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="fw-semibold text-primary">
                      <i :class="[skill.icon, 'me-2 text-accent']"></i>
                      {{ skill.name }}
                    </span>
                    <span class="text-accent fw-bold">{{ skill.level }}%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" 
                         :style="{ width: skill.level + '%' }"
                         :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Especializaciones -->
          <div class="col-lg-5">
            <div class="card card-premium h-100" data-aos="fade-left">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-gradient-accent rounded-circle p-3 me-3">
                    <i class="bi bi-briefcase text-white fs-3"></i>
                  </div>
                  <h3 class="h3 fw-bold mb-0 text-primary">Especializaciones</h3>
                </div>
                
                <div v-for="spec in specializations" :key="spec.title" 
                     class="d-flex align-items-start gap-3 mb-4 p-3 bg-light rounded-4">
                  <div class="bg-accent rounded-circle p-2 flex-shrink-0">
                    <i :class="[spec.icon, 'text-white fs-5']"></i>
                  </div>
                  <div>
                    <h4 class="h6 fw-bold text-primary mb-1">{{ spec.title }}</h4>
                    <p class="small text-secondary mb-0">{{ spec.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bases de Datos y Otras Tecnologías -->
        <div class="row mt-4">
          <div class="col-12">
            <div class="card card-premium" data-aos="fade-up">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-gradient-accent rounded-circle p-3 me-3">
                    <i class="bi bi-database text-white fs-3"></i>
                  </div>
                  <h3 class="h3 fw-bold mb-0 text-primary">Bases de Datos y ERP</h3>
                </div>
                
                <div class="d-flex flex-wrap gap-2">
                  <span v-for="tech in databaseSkills" :key="tech"
                        class="badge bg-white border border-accent text-accent px-4 py-2 rounded-pill">
                    <i class="bi bi-database me-1"></i>
                    {{ tech }}
                  </span>
                  <span v-for="tech in erpSkills" :key="tech"
                        class="badge bg-white border border-primary text-primary px-4 py-2 rounded-pill">
                    <i class="bi bi-building me-1"></i>
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { skills } from '../data/portfolioData'
  
  const technicalSkills = computed(() => {
    return skills.filter(s => 
      ['Full Stack Development', 'Python & Data Science', 'SQL & Bases de Datos', 
       'JavaScript', 'VB / ASP', 'PHP'].includes(s.name)
    )
  })
  
  const specializations = [
    {
      title: 'Gestión de Proyectos',
      description: 'Liderazgo de equipos, metodologías ágiles, control de calidad, auditoría de procesos.',
      icon: 'bi-briefcase'
    },
    {
      title: 'Análisis de Datos',
      description: 'Extracción, transformación y visualización de datos para toma de decisiones.',
      icon: 'bi-graph-up'
    },
    {
      title: 'ERP & Sistemas',
      description: 'Implementación y soporte de SAP, PeopleSoft y Murex.',
      icon: 'bi-building'
    },
    {
      title: 'Liderazgo Técnico',
      description: 'Mentoría, revisión de código y definición de arquitecturas.',
      icon: 'bi-people'
    }
  ]
  
  const databaseSkills = ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
  const erpSkills = ['SAP', 'PeopleSoft', 'Murex']
  </script>
  
  <style scoped>
  .bg-gradient-accent {
    background: linear-gradient(135deg, #E94560 0%, #d63a52 100%);
  }
  
  .bg-accent {
    background-color: #E94560 !important;
  }
  
  .text-accent {
    color: #E94560 !important;
  }
  
  .border-accent {
    border-color: #E94560 !important;
  }
  
  .progress {
    height: 10px;
    border-radius: 10px;
    background-color: #e9ecef;
  }
  
  .progress-bar {
    background: linear-gradient(90deg, #E94560, #ff6b8b);
    border-radius: 10px;
    transition: width 1s ease;
  }
  
  .card-premium {
    transition: all 0.3s ease;
  }
  
  .card-premium:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  </style>