<template>
  <section id="contact" class="py-5 py-lg-6 bg-gradient-premium text-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center" data-aos="fade-up">
          <!-- Badge -->
          <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-4">
            <i class="bi bi-chat-dots me-2"></i>CONTACTO
          </span>
          
          <!-- Título -->
          <h2 class="display-4 fw-bold mb-4">
            ¿Tienes un <span class="text-accent-light">proyecto</span> en mente?
          </h2>
          
          <!-- Descripción -->
          <p class="lead mb-5 opacity-90 mx-auto" style="max-width: 700px;">
            Estoy disponible para nuevas oportunidades laborales, proyectos freelance 
            o simplemente para conversar sobre tecnología.
          </p>
          
          <!-- Botones de acción -->
          <div class="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <!-- WhatsApp - Principal -->
            <a :href=whatsappUrl
               target="_blank"
               class="btn btn-success btn-lg px-5 py-3 rounded-pill d-flex align-items-center justify-content-center gap-3">
              <i class="bi bi-whatsapp fs-3"></i>
              <span class="fw-semibold">Escribir por WhatsApp</span>
            </a>
            
            <!-- Email - Secundario -->
            <a :href="'mailto:' + personalInfo.email"
               class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill d-flex align-items-center justify-content-center gap-3">
              <i class="bi bi-envelope fs-3"></i>
              <span class="fw-semibold">{{ personalInfo.email }}</span>
            </a>
          </div>
          
          <!-- Redes sociales -->
          <div class="d-flex justify-content-center gap-3">
            <a :href="personalInfo.linkedin"
               target="_blank"
               class="social-icon"
               title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a :href="personalInfo.github"
               target="_blank"
               class="social-icon"
               title="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a :href="'mailto:' + personalInfo.email" 
               class="social-icon"
               title="Email">
              <i class="bi bi-envelope-fill"></i>
            </a>
            <a :href=whatsappUrl
               target="_blank"
               class="social-icon"
               title="WhatsApp">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personalInfo } from '../data/portfolioData'

// Número de WhatsApp
//const whatsappNumber = '56982307788' // Ejemplo: 56912345678 (Chile)
//const whatsappMessage = 'Hola%20Francisco,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar%20contigo'

const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${personalInfo.whatsappMessage}`
</script>

<style scoped>
.bg-gradient-premium {
  background: linear-gradient(135deg, #2C3E50 0%, #1A2C3E 100%);
}

[data-bs-theme="dark"] .bg-gradient-premium {
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
}

.text-accent-light {
  color: var(--bs-accent) !important;
}

[data-bs-theme="dark"] .text-accent-light {
  color: #2DD4BF !important;
}

.bg-accent {
  background-color: var(--bs-accent) !important;
}

[data-bs-theme="dark"] .bg-accent {
  background-color: #2DD4BF !important;
}

/* Botón WhatsApp */
.btn-success {
  background: #25D366 !important;
  border: none !important;
  transition: all 0.3s ease !important;
}

.btn-success:hover {
  background: #20B859 !important;
  transform: translateY(-3px) !important;
  box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3) !important;
}

/* Botón Email */
.btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

.btn-outline-light:hover {
  background: white !important;
  color: #2C3E50 !important;
  transform: translateY(-3px) !important;
  border-color: white !important;
}

[data-bs-theme="dark"] .btn-outline-light:hover {
  color: #0F172A !important;
}

/* Redes sociales */
.social-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: var(--bs-accent);
  color: white;
  transform: translateY(-3px) scale(1.1);
}

[data-bs-theme="dark"] .social-icon:hover {
  background: #2DD4BF;
}

/* Responsive */
@media (max-width: 768px) {
  .btn {
    width: 100%;
    padding: 1rem !important;
  }
  
  .social-icon {
    width: 42px;
    height: 42px;
    font-size: 20px;
  }
}
</style>
  