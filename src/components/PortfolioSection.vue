<template>
    <section id="portfolio" class="py-5 py-lg-6">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-5" data-aos="fade-up">
          <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-3">
            <i class="bi bi-briefcase me-2"></i>PORTAFOLIO
          </span>
          <h2 class="display-4 fw-bold mb-3">
            Proyectos <span class="text-accent">Destacados</span>
          </h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px;">
            Una selección de mis mejores trabajos en desarrollo web, data science y aplicaciones empresariales
          </p>
        </div>
  
        <!-- Filtros -->
        <div class="d-flex justify-content-center flex-wrap gap-2 mb-5" data-aos="fade-up">
          <button v-for="filter in filters" :key="filter.value"
                  @click="activeFilter = filter.value"
                  :class="[
                    'btn px-4 py-2 rounded-pill fw-semibold transition-all',
                    activeFilter === filter.value 
                      ? 'btn-accent text-white' 
                      : 'btn-outline-accent'
                  ]">
            {{ filter.label }}
          </button>
        </div>
  
        <!-- Grid de proyectos -->
        <div class="row g-4">
          <div v-for="project in filteredProjects" :key="project.id" 
               class="col-lg-4 col-md-6"
               data-aos="fade-up"
               :data-aos-delay="project.id * 50">
            
            <div class="card card-portfolio h-100" @click="openProjectModal(project)">
              <!-- Imagen del proyecto -->
              <div class="position-relative overflow-hidden" style="height: 240px;">
                <img :src="project.image" :alt="project.title" 
                     class="w-100 h-100 object-fit-cover transition-transform">
                
                <!-- Overlay -->
                <div class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark d-flex align-items-center justify-content-center opacity-0 hover-overlay transition-all">
                  <span class="btn btn-accent btn-sm rounded-pill px-4">
                    <i class="bi bi-eye me-2"></i>Ver detalles
                  </span>
                </div>
                
                <!-- Badges -->
                <div class="position-absolute top-0 start-0 p-3 d-flex gap-2">
                  <span v-if="project.featured" 
                        class="badge bg-accent text-white px-3 py-2 rounded-pill">
                    <i class="bi bi-star-fill me-1"></i>Destacado
                  </span>
                  <span :class="[
                    'badge px-3 py-2 rounded-pill',
                    project.category === 'web' ? 'bg-primary' : 'bg-success'
                  ]">
                    {{ project.categoryLabel }}
                  </span>
                </div>
              </div>
              
              <!-- Contenido -->
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h3 class="h5 fw-bold text-primary mb-0">{{ project.title }}</h3>
                  <span class="text-secondary small">{{ project.year }}</span>
                </div>
                
                <p class="text-secondary small mb-3">{{ project.description }}</p>
                
                <!-- Tecnologías -->
                <div class="d-flex flex-wrap gap-1">
                  <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                        class="badge bg-light text-primary border px-2 py-1 rounded-pill">
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 3"
                        class="badge bg-light text-secondary border px-2 py-1 rounded-pill">
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Ver más en GitHub -->
        <div class="text-center mt-5" data-aos="fade-up">
          <a href="https://github.com/fmonroy75" target="_blank" 
             class="btn btn-outline-accent btn-lg px-5 py-3 rounded-pill">
            <i class="bi bi-github me-2"></i>
            Ver todos los proyectos en GitHub
            <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
  
      <!-- Modal de proyecto -->
      <div v-if="showModal" class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.8);">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content border-0 rounded-4">
            <div class="modal-header border-0 p-4">
              <h3 class="modal-title h4 fw-bold text-primary">{{ selectedProject?.title }}</h3>
              <button type="button" class="btn-close" @click="showModal = false"></button>
            </div>
            
            <div class="modal-body p-4 pt-0">
              <div v-if="selectedProject">
                <!-- Imagen -->
                <img :src="selectedProject.image" :alt="selectedProject.title" 
                     class="w-100 rounded-3 mb-4" style="height: 300px; object-fit: cover;">
                
                <!-- Descripción completa -->
                <p class="text-secondary mb-4">{{ selectedProject.fullDescription }}</p>
                
                <!-- Características -->
                <h4 class="h6 fw-bold text-primary mb-3">Características principales:</h4>
                <ul class="list-unstyled mb-4">
                  <li v-for="feature in selectedProject.features" :key="feature"
                      class="mb-2 d-flex">
                    <i class="bi bi-check-circle-fill text-accent me-2"></i>
                    {{ feature }}
                  </li>
                </ul>
                
                <!-- Tecnologías -->
                <h4 class="h6 fw-bold text-primary mb-3">Tecnologías utilizadas:</h4>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <span v-for="tech in selectedProject.technologies" :key="tech"
                        class="badge bg-light text-primary border px-3 py-2 rounded-pill">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="modal-footer border-0 p-4">
              <a v-if="selectedProject?.webUrl" :href="selectedProject.webUrl" target="_blank" 
                 class="btn btn-accent px-4 py-2 rounded-pill">
                <i class="bi bi-github me-2"></i>
                Ver Proyecto
              </a>
              <button type="button" class="btn btn-outline-secondary px-4 py-2 rounded-pill" 
                      @click="showModal = false">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { projects } from '../data/portfolioData'
  
  const activeFilter = ref('all')
  const showModal = ref(false)
  const selectedProject = ref(null)
  
  const filters = [
    { label: 'Todos los proyectos', value: 'all' },
    { label: 'Desarrollo Web', value: 'web' },
    { label: 'Python', value: 'python' }
  ]
  
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') return projects
    return projects.filter(p => p.category === activeFilter.value)
  })
  
  const openProjectModal = (project) => {
    selectedProject.value = project
    showModal.value = true
  }
  </script>
  
  <style scoped>
  .btn-accent {
    background: linear-gradient(135deg, #E94560 0%, #d63a52 100%);
    border: none;
    color: white;
  }
  
  .btn-accent:hover {
    background: linear-gradient(135deg, #d63a52 0%, #c23048 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(233, 69, 96, 0.3);
    color: white;
  }
  
  .btn-outline-accent {
    border: 2px solid #E94560;
    color: #E94560;
  }
  
  .btn-outline-accent:hover {
    background: #E94560;
    color: white;
  }
  
  .card-portfolio {
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }
  
  .card-portfolio:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 50px rgba(0,0,0,0.1);
  }
  
  .card-portfolio:hover .hover-overlay {
    opacity: 1 !important;
  }
  
  .hover-overlay {
    background: linear-gradient(to top, rgba(44,62,80,0.9), rgba(44,62,80,0.7));
    transition: opacity 0.3s ease;
  }
  
  .transition-transform {
    transition: transform 0.5s ease;
  }
  
  .card-portfolio:hover .transition-transform {
    transform: scale(1.1);
  }
  
  .bg-gradient-dark {
    background: linear-gradient(135deg, rgba(44,62,80,0.95), rgba(26,44,62,0.95));
  }
  
  .modal {
    backdrop-filter: blur(5px);
  }
  
  .text-accent {
    color: #E94560 !important;
  }
  
  .bg-accent {
    background-color: #E94560 !important;
  }
  </style>