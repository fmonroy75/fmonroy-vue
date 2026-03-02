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

      <!-- ===== LENGUAJES DE PROGRAMACIÓN (NUEVO) ===== -->
<!--      <div class="mb-5" data-aos="fade-up">
        <div class="d-flex align-items-center mb-4">
          <div class="bg-gradient-accent rounded-circle p-3 me-3">
            <i class="bi bi-code-slash text-white fs-3"></i>
          </div>
          <h3 class="h3 fw-bold mb-0 text-primary">Lenguajes de Programación</h3>
        </div>
        
        <div class="row g-4">
          <div v-for="lang in programmingLanguages" :key="lang.name" 
               class="col-lg-3 col-md-4 col-sm-6">
            <div class="skill-card card h-100 border-0 shadow-sm hover-lift">
              <div class="card-body text-center p-4">
                <!- - Imagen del lenguaje - ->
                <div class="mb-3">
                  <img :src="getSkillImage(lang.icon)" 
                       :alt="lang.name"
                       class="skill-icon img-fluid"
                       style="height: 60px; width: auto; object-fit: contain;"
                       @error="handleImageError">
                </div>
                
                <h4 class="h5 fw-bold text-primary mb-2">{{ lang.name }}</h4>
                
                <!- - Nivel de experiencia - ->
                <div class="mb-3">
                  <div class="progress" style="height: 8px;">
                    <div class="progress-bar" role="progressbar" 
                         :style="{ width: lang.level + '%' }"
                         :aria-valuenow="lang.level" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                  <span class="small text-accent mt-1 d-block">{{ lang.level }}%</span>
                </div>
                
                <!- - Años de experiencia - ->
                <div class="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <i class="bi bi-clock-history text-accent"></i>
                  <span class="small fw-semibold">{{ lang.experience }}</span>
                </div>
                
                <! -- Descripción (tooltip o visible solo en hover) - ->
                <div class="skill-description small text-secondary">
                  {{ lang.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    -->
      <!-- ===== FRAMEWORKS Y LIBRERÍAS ===== - ->
      <div class="mb-5" data-aos="fade-up">
        <div class="d-flex align-items-center mb-4">
          <div class="bg-gradient-accent rounded-circle p-3 me-3">
            <i class="bi bi-boxes text-white fs-3"></i>
          </div>
          <h3 class="h3 fw-bold mb-0 text-primary">Frameworks y Librerías</h3>
        </div>
        
        <div class="row g-4">
          <div v-for="fw in frameworks" :key="fw.name" 
               class="col-lg-3 col-md-4 col-sm-6">
            <div class="skill-card card h-100 border-0 shadow-sm hover-lift">
              <div class="card-body text-center p-4">
                <div class="mb-3">
                  <img :src="getSkillImage(fw.icon)" 
                       :alt="fw.name"
                       class="skill-icon img-fluid"
                       style="height: 60px; width: auto; object-fit: contain;"
                       @error="handleImageError">
                </div>
                
                <h4 class="h5 fw-bold text-primary mb-2">{{ fw.name }}</h4>
                
                <div class="mb-3">
                  <div class="progress" style="height: 8px;">
                    <div class="progress-bar" role="progressbar" 
                         :style="{ width: fw.level + '%' }"
                         :aria-valuenow="fw.level" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                  <span class="small text-accent mt-1 d-block">{{ fw.level }}%</span>
                </div>
                
                <div class="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <i class="bi bi-clock-history text-accent"></i>
                  <span class="small fw-semibold">{{ fw.experience }}</span>
                </div>
                
                <div class="skill-description small text-secondary">
                  {{ fw.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!- - ===== HERRAMIENTAS Y OTROS ===== - ->
      <div class="mb-5" data-aos="fade-up">
        <div class="d-flex align-items-center mb-4">
          <div class="bg-gradient-accent rounded-circle p-3 me-3">
            <i class="bi bi-tools text-white fs-3"></i>
          </div>
          <h3 class="h3 fw-bold mb-0 text-primary">Herramientas y Tecnologías</h3>
        </div>
        
        <div class="row g-4">
          <div v-for="tool in tools" :key="tool.name" 
               class="col-lg-3 col-md-4 col-sm-6">
            <div class="skill-card card h-100 border-0 shadow-sm hover-lift">
              <div class="card-body text-center p-4">
                <div class="mb-3">
                  <img :src="getSkillImage(tool.icon)" 
                       :alt="tool.name"
                       class="skill-icon img-fluid"
                       style="height: 60px; width: auto; object-fit: contain;"
                       @error="handleImageError">
                </div>
                
                <h4 class="h5 fw-bold text-primary mb-2">{{ tool.name }}</h4>
                
                <div class="mb-3">
                  <div class="progress" style="height: 8px;">
                    <div class="progress-bar" role="progressbar" 
                         :style="{ width: tool.level + '%' }"
                         :aria-valuenow="tool.level" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                  <span class="small text-accent mt-1 d-block">{{ tool.level }}%</span>
                </div>
                
                <div class="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <i class="bi bi-clock-history text-accent"></i>
                  <span class="small fw-semibold">{{ tool.experience }}</span>
                </div>
                
                <div class="skill-description small text-secondary">
                  {{ tool.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    -->
      <!-- ===== HABILIDADES TÉCNICAS GENERALES (BARRAS) ===== -->
      <div class="row g-4 mt-4">
        <!-- Skills técnicas -->
        <div class="col-lg-7">
          <div class="card card-premium h-100" data-aos="fade-right">
            <div class="card-body p-4 p-lg-5">
              <div class="d-flex align-items-center mb-4">
                <div class="bg-gradient-accent rounded-circle p-3 me-3">
                  <i class="bi bi-bar-chart text-white fs-3"></i>
                </div>
                <h3 class="h3 fw-bold mb-0 text-primary">Competencias Clave</h3>
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
      
      <!-- Bases de Datos y ERP -->
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

      <!-- Lenguages -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="card card-premium" data-aos="fade-up">
            <div class="card-body p-4 p-lg-5">
              <div class="d-flex align-items-center mb-4">
                <div class="bg-gradient-accent rounded-circle p-3 me-3">
                  <i class="bi bi-code-slash text-white fs-3"></i>
                </div>
                <h3 class="h3 fw-bold mb-0 text-primary">Lenguajes de programación</h3>
              </div>
              
              <div class="d-flex flex-wrap gap-2">
                <span v-for="lang in programmingLanguages" :key="lang.name"
                      class="badge bg-white border border-accent text-accent px-4 py-2 rounded-pill">
                  <i class="bi bi-code-slash me-1"></i>
                  {{ lang.name }}
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Frameworks -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="card card-premium" data-aos="fade-up">
            <div class="card-body p-4 p-lg-5">
              <div class="d-flex align-items-center mb-4">
                <div class="bg-gradient-accent rounded-circle p-3 me-3">
                  <i class="bi bi-boxes text-white fs-3"></i>
                </div>
                <h3 class="h3 fw-bold mb-0 text-primary">Herramientas de programación</h3>
              </div>
              
              <div class="d-flex flex-wrap gap-2">
                <span v-for="fw in frameworks" :key="fw.name"
                      class="badge bg-white border border-accent text-accent px-4 py-2 rounded-pill">
                  <i class="bi bi-boxes me-1"></i>
                  {{ fw.name }}
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Herramientas -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="card card-premium" data-aos="fade-up">
            <div class="card-body p-4 p-lg-5">
              <div class="d-flex align-items-center mb-4">
                <div class="bg-gradient-accent rounded-circle p-3 me-3">
                  <i class="bi bi-tools text-white fs-3"></i>
                </div>
                <h3 class="h3 fw-bold mb-0 text-primary">Herramientas y tecnologías</h3>
              </div>
              
              <div class="d-flex flex-wrap gap-2">
                <span v-for="tool in tools" :key="tool.name"
                      class="badge bg-white border border-accent text-accent px-4 py-2 rounded-pill">
                  <i class="bi bi-tools me-1"></i>
                  {{ tool.name }}
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
import { 
  skills, 

  programmingLanguages, 
  frameworks, 
  tools 
} from '../data/portfolioData'

const technicalSkills = computed(() => {
  return skills.filter(s => 
    ['Full Stack Development', 'Python & Data Science', 'SQL & Bases de Datos', 
     'Análisis de Datos', 'ERP (SAP, PeopleSoft)'].includes(s.name)
  )
})

const specializations = [
  {
    title: 'Gestión de Proyectos',
    description: 'Liderazgo de equipos, metodologías ágiles, control de calidad, auditoría de procesos.',
    icon: 'bi-briefcase'
  },
  {
    title: 'Arquitectura de Software',
    description: 'Diseño de sistemas escalables, patrones de diseño, microservicios.',
    icon: 'bi-diagram-3'
  },
  {
    title: 'DevOps & Cloud',
    description: 'CI/CD, Docker, AWS, automatización de despliegues.',
    icon: 'bi-cloud'
  },
  {
    title: 'Liderazgo Técnico',
    description: 'Mentoría, revisión de código y definición de arquitecturas.',
    icon: 'bi-people'
  },
  {
    title: 'Análisis',
    description: 'Toma de requerimientos, Análisis de datos',
    icon: 'bi-people'
  }
]

const databaseSkills = ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
const erpSkills = ['SAP', 'PeopleSoft', 'Murex']

// Función para obtener la ruta de la imagen
const getSkillImage = (imageName) => {
  try {
    return new URL(`../assets/images/skills/${imageName}`, import.meta.url).href
  } catch (error) {
    console.warn(`Imagen no encontrada: ${imageName}`)
    return `https://via.placeholder.com/60x60/2C3E50/FFFFFF?text=${imageName.split('.')[0]}`
  }
}

// Manejador de error de imagen (fallback)
const handleImageError = (event) => {
  const img = event.target
  const techName = img.alt || 'tech'
  img.src = `https://via.placeholder.com/60x60/2C3E50/FFFFFF?text=${techName.charAt(0).toUpperCase()}`
  img.onerror = null // Prevenir loop infinito
}
</script>

<style scoped>
.bg-gradient-accent {
  background: linear-gradient(135deg, var(--bs-accent) 0%, var(--bs-accent-hover) 100%);
}

[data-bs-theme="dark"] .bg-gradient-accent {
  background: linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%) !important;
}

.bg-accent {
background-color: var(--bs-accent) !important;
  }

[data-bs-theme="dark"] .bg-accent {
  background-color: #2DD4BF !important;
}

.text-accent {
color: var(--bs-accent) !important;
  }

[data-bs-theme="dark"] .text-accent {
  color: #2DD4BF !important;
}

.border-accent {
border-color: var(--bs-accent) !important;
  }

[data-bs-theme="dark"] .border-accent {
  border-color: #2DD4BF !important;
}

.progress {
  height: 8px;
  border-radius: 4px;
  background-color: #e9ecef;
}

[data-bs-theme="dark"] .progress {
  background-color: #2D3A4F !important;
}

.progress-bar {
  background: linear-gradient(90deg, var(--bs-accent), #14B8A6);
  border-radius: 4px;
  transition: width 1s ease;
}

[data-bs-theme="dark"] .progress-bar {
  background: linear-gradient(90deg, #2DD4BF, #14B8A6) !important;
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

.skill-card {
  transition: all 0.3s ease;
  border-radius: 16px !important;
  overflow: hidden;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px rgba(13, 148, 136, 0.15) !important;
}

[data-bs-theme="dark"] .skill-card:hover {
  box-shadow: 0 20px 30px rgba(255, 107, 139, 0.25) !important;
}

.skill-icon {
  filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
}

.skill-description {
  opacity: 0.8;
  font-size: 0.85rem;
  line-height: 1.4;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.skill-card:hover .skill-description {
  max-height: 100px;
}

.hover-lift {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hover-lift:hover {
  transform: translateY(-8px) scale(1.02);
}

.bg-light {
  background-color: #F8FAFC !important;
}

[data-bs-theme="dark"] .bg-light {
  background-color: #1E293B !important;
}

/* Responsive */
@media (max-width: 768px) {
  .skill-card .card-body {
    padding: 1rem !important;
  }
  
  .skill-icon {
    height: 40px !important;
  }
  
  .h5 {
    font-size: 1rem !important;
  }
}
</style>