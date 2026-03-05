<template>
    <section id="education" class="py-5 py-lg-6">
      <div class="container">
        <!-- Header -->
        <div class="text-center mb-5" data-aos="fade-up">
          <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-3">
            <i class="bi bi-mortarboard me-2"></i>FORMACIÓN
          </span>
          <h2 class="display-4 fw-bold mb-3">
            Educación y <span class="text-accent">Certificaciones</span>
          </h2>
          <p class="lead text-secondary mx-auto" style="max-width: 700px;">
            Formación académica sólida y actualización continua en tecnologías emergentes
          </p>
        </div>
  
        <div class="row g-4">
          <!-- Educación Superior -->
          <div class="col-lg-6">
            <div class="card card-premium h-100" data-aos="fade-right">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-gradient-accent rounded-circle p-3 me-3">
                    <i class="bi bi-mortarboard-fill text-white fs-3"></i>
                  </div>
                  <h3 class="h3 fw-bold mb-0 text-primary">Educación Superior</h3>
                </div>
                
                <div 
  v-for="(edu, index) in education" 
  :key="edu.id"
  :class="{ 'mb-4': index !== education.length - 1 }"
>

  <div class="d-flex gap-4 align-items-start">

    <!-- LOGO -->
    <div class="flex-shrink-0">
      <img
        :src="edu.image"
        :alt="edu.institution" class="edu-logo"
        
      />
    </div>

    <!-- TEXTO -->
    <div class="flex-grow-1">

      <div class="d-flex justify-content-between align-items-start mb-2">
        <h4 class="h5 fw-bold mb-0">{{ edu.degree }}</h4>

        <span class="badge bg-accent text-white px-3 py-2 rounded-pill">
          {{ edu.period }}
        </span>
      </div>

      <p class="text-primary fw-semibold mb-1">
        {{ edu.institution }}
      </p>

      <p class="text-secondary small mb-2">
        <i class="bi bi-geo-alt me-1"></i>{{ edu.location }}
      </p>

      <p class="text-secondary">
        {{ edu.description }}
      </p>

    </div>

  </div>

  <hr v-if="index !== education.length - 1" class="my-4 opacity-25">

</div>              </div>
            </div>
          </div>
          
          <!-- Cursos y Diplomados -->
          <div class="col-lg-6">
            <div class="card card-premium h-100" data-aos="fade-left">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-gradient-accent rounded-circle p-3 me-3">
                    <i class="bi bi-patch-check-fill text-white fs-3"></i>
                  </div>
                  <h3 class="h3 fw-bold mb-0 text-primary">Cursos y Diplomados</h3>
                </div>
                
                <div class="timeline-wrapper">
                  <div v-for="(course, index) in sortedCourses" :key="course.id" 
                       class="position-relative mb-4 ps-4">
                    <div class="timeline-dot"></div>
                    <div class="d-flex justify-content-between align-items-start mb-2">
                      <h4 class="h6 fw-bold mb-0">{{ course.name }}</h4>
                      <span class="badge bg-light text-primary border px-2 py-1 rounded-pill">
                        {{ course.year }}
                      </span>
                    </div>
                    <p class="text-secondary small mb-1">{{ course.institution }}</p>
                    <p class="text-secondary small mb-0">
                      <i class="bi bi-geo-alt me-1"></i>{{ course.location }}
                    </p>
                    <span class="badge bg-accent bg-opacity-10  text-white px-3 py-1 rounded-pill mt-2">
                      {{ course.category }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Idiomas -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="card card-premium" data-aos="fade-up">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="bg-gradient-accent rounded-circle p-3 me-3">
                    <i class="bi bi-translate text-white fs-3"></i>
                  </div>
                  <h3 class="h3 fw-bold mb-0 text-primary">Idiomas</h3>
                </div>
                
                <div class="row g-4">
                  <div v-for="lang in languages" :key="lang.name" class="col-md-4">
                    <div class="d-flex align-items-center justify-content-between p-3 bg-light rounded-4">
                      <div>
                        <span class="fw-bold text-primary">{{ lang.name }}</span>
                        <span class="text-secondary small ms-2">{{ lang.native }}</span>
                      </div>
                      <div class="d-flex gap-1">
                        <span v-for="i in 5" :key="i"
                              :class="[
                                'bi',
                                i <= lang.level ? 'bi-star-fill text-accent' : 'bi-star text-secondary'
                              ]">
                        </span>
                      </div>
                    </div>
                  </div>
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
  import { education, courses, languages } from '../data/portfolioData'
  
  const sortedCourses = computed(() => {
    //return [...courses].sort((a, b) => b.year - a.year)
    return [...courses].sort((a, b) => b.id - a.id) // Descendente por ID
  })
  </script>
  
  <style scoped>
  .edu-logo{
  width:70px;
  object-fit:contain;
  filter: grayscale(20%);
}
  .bg-gradient-accent {
    background: linear-gradient(135deg, var(--bs-accent) 0%, var(--bs-accent-hover) 100%);
  }
  
  .bg-accent {
    background-color: var(--bs-accent) !important;
  }
  
  .text-accent {
    color: var(--bs-accent) !important;
  }
  
  .bg-opacity-10 {
    --bs-bg-opacity: 0.1;
  }
  
  .timeline-wrapper {
    position: relative;
    padding-left: 20px;
  }
  
  .timeline-wrapper::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(to bottom, var(--bs-accent), var(--bs-secondary));
  }
  
  .timeline-dot {
    position: absolute;
    left: -6px;
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--bs-accent);
    border: 3px solid white;
    box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.3);
  }
  
  .card-premium {
    border: none;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
  }
  
  .card-premium:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  </style>