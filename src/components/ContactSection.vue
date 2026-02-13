<template>
    <section id="contact" class="py-5 py-lg-6 bg-gradient-premium text-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-4">
              <i class="bi bi-envelope me-2"></i>CONTACTO
            </span>
            
            <h2 class="display-4 fw-bold mb-4">
              Trabajemos <span class="text-accent">Juntos</span>
            </h2>
            
            <p class="lead mb-5 opacity-90">
              ¿Tienes un proyecto en mente o estás buscando un profesional para tu equipo? 
              Estoy disponible para nuevas oportunidades y desafíos.
            </p>
          </div>
        </div>
  
        <div class="row g-4 justify-content-center">
          <!-- Información de contacto -->
          <div class="col-lg-4">
            <div class="glass-card p-4 p-lg-5 h-100" data-aos="fade-right">
              <div class="d-flex align-items-center mb-4">
                <div class="bg-accent rounded-circle p-3 me-3">
                  <i class="bi bi-person text-white fs-4"></i>
                </div>
                <h3 class="h4 fw-bold mb-0">Información</h3>
              </div>
              
              <div class="d-flex mb-4">
                <div class="flex-shrink-0 me-3">
                  <i class="bi bi-envelope-fill text-accent fs-5"></i>
                </div>
                <div>
                  <div class="small text-white opacity-75">Email</div>
                  <a :href="'mailto:' + personalInfo.email" class="text-white text-decoration-none">
                    {{ personalInfo.email }}
                  </a>
                </div>
              </div>
              
              <div class="d-flex mb-4">
                <div class="flex-shrink-0 me-3">
                  <i class="bi bi-geo-alt-fill text-accent fs-5"></i>
                </div>
                <div>
                  <div class="small text-white opacity-75">Ubicación</div>
                  <span class="text-white">{{ personalInfo.location }}</span>
                </div>
              </div>
              
              <div class="d-flex mb-4">
                <div class="flex-shrink-0 me-3">
                  <i class="bi bi-linkedin text-accent fs-5"></i>
                </div>
                <div>
                  <div class="small text-white opacity-75">LinkedIn</div>
                  <a :href="personalInfo.linkedin" target="_blank" 
                     class="text-white text-decoration-none">
                    linkedin.com/in/fmonroy75
                  </a>
                </div>
              </div>
              
              <div class="d-flex mb-4">
                <div class="flex-shrink-0 me-3">
                  <i class="bi bi-github text-accent fs-5"></i>
                </div>
                <div>
                  <div class="small text-white opacity-75">GitHub</div>
                  <a :href="personalInfo.github" target="_blank" 
                     class="text-white text-decoration-none">
                    github.com/fmonroy75
                  </a>
                </div>
              </div>
              
              <div class="d-flex">
                <div class="flex-shrink-0 me-3">
                  <i class="bi bi-file-text text-accent fs-5"></i>
                </div>
                <div>
                  <div class="small text-white opacity-75">CV</div>
                  <a :href="personalInfo.cvFile" download 
                     class="text-white text-decoration-none">
                    Descargar Curriculum
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Formulario de contacto -->
          <div class="col-lg-6">
            <div class="glass-card p-4 p-lg-5" data-aos="fade-left">
              <div class="d-flex align-items-center mb-4">
                <div class="bg-accent rounded-circle p-3 me-3">
                  <i class="bi bi-send text-white fs-4"></i>
                </div>
                <h3 class="h4 fw-bold mb-0">Envíame un mensaje</h3>
              </div>
              
              <form @submit.prevent="submitForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <input type="text" v-model="formData.name" 
                           class="form-control bg-white bg-opacity-10 border-0 text-white rounded-3 p-3"
                           :class="{ 'is-invalid': errors.name }"
                           placeholder="Nombre completo">
                    <div v-if="errors.name" class="invalid-feedback d-block">
                      {{ errors.name }}
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <input type="email" v-model="formData.email" 
                           class="form-control bg-white bg-opacity-10 border-0 text-white rounded-3 p-3"
                           :class="{ 'is-invalid': errors.email }"
                           placeholder="Correo electrónico">
                    <div v-if="errors.email" class="invalid-feedback d-block">
                      {{ errors.email }}
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <input type="text" v-model="formData.subject" 
                           class="form-control bg-white bg-opacity-10 border-0 text-white rounded-3 p-3"
                           :class="{ 'is-invalid': errors.subject }"
                           placeholder="Asunto">
                    <div v-if="errors.subject" class="invalid-feedback d-block">
                      {{ errors.subject }}
                    </div>
                  </div>
                  
                  <div class="col-12">
                    <textarea v-model="formData.message" 
                              class="form-control bg-white bg-opacity-10 border-0 text-white rounded-3 p-3"
                              :class="{ 'is-invalid': errors.message }"
                              rows="5"
                              placeholder="Tu mensaje"></textarea>
                    <div v-if="errors.message" class="invalid-feedback d-block">
                      {{ errors.message }}
                    </div>
                  </div>
                  
                  <div class="col-12 mt-4">
                    <button type="submit" class="btn btn-accent btn-lg w-100 py-3 rounded-3"
                            :disabled="loading">
                      <span v-if="!loading">
                        <i class="bi bi-send me-2"></i>
                        Enviar mensaje
                      </span>
                      <span v-else>
                        <span class="spinner-border spinner-border-sm me-2"></span>
                        Enviando...
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              
              <!-- Mensaje de éxito -->
              <div v-if="showSuccess" class="alert alert-success mt-4 mb-0 rounded-3">
                <i class="bi bi-check-circle-fill me-2"></i>
                ¡Mensaje enviado con éxito! Te contactaré pronto.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { personalInfo } from '../data/portfolioData'
  
  const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const errors = ref({})
  const loading = ref(false)
  const showSuccess = ref(false)
  
  const validateForm = () => {
    errors.value = {}
    let isValid = true
    
    if (!formData.value.name.trim()) {
      errors.value.name = 'El nombre es requerido'
      isValid = false
    }
    
    if (!formData.value.email.trim()) {
      errors.value.email = 'El email es requerido'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
      errors.value.email = 'Email inválido'
      isValid = false
    }
    
    if (!formData.value.subject.trim()) {
      errors.value.subject = 'El asunto es requerido'
      isValid = false
    }
    
    if (!formData.value.message.trim()) {
      errors.value.message = 'El mensaje es requerido'
      isValid = false
    }
    
    return isValid
  }
  
  const submitForm = () => {
    if (validateForm()) {
      loading.value = true
      showSuccess.value = false
      
      // Simular envío
      setTimeout(() => {
        loading.value = false
        showSuccess.value = true
        formData.value = { name: '', email: '', subject: '', message: '' }
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          showSuccess.value = false
        }, 5000)
      }, 1500)
    }
  }
  </script>
  
  <style scoped>
  .bg-gradient-premium {
    background: linear-gradient(135deg, #2C3E50 0%, #1A2C3E 100%);
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
  }
  
  .btn-accent {
    background: linear-gradient(135deg, #E94560 0%, #d63a52 100%);
    border: none;
    color: white;
  }
  
  .btn-accent:hover {
    background: linear-gradient(135deg, #d63a52 0%, #c23048 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(233, 69, 96, 0.3);
  }
  
  .form-control {
    background: rgba(255, 255, 255, 0.1) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: white !important;
  }
  
  .form-control:focus {
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: #E94560 !important;
    box-shadow: 0 0 0 0.25rem rgba(233, 69, 96, 0.25) !important;
  }
  
  .form-control::placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
  }
  
  .text-accent {
    color: #E94560 !important;
  }
  
  .bg-accent {
    background-color: #E94560 !important;
  }
  
  .bg-opacity-10 {
    --bs-bg-opacity: 0.1;
  }
  
  .invalid-feedback {
    color: #ff8a8a;
  }
  </style>