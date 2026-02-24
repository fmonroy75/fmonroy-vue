// ============================================
// FRANCISCO MONROY - PORTFOLIO DATA
// VERSIÓN COMPLETA CON LENGUAJES DE PROGRAMACIÓN
// ============================================

export const personalInfo = {
  name: 'Francisco Monroy H.',
  title: 'Full Stack Developer | Ingeniero de Sistemas | Ingeniero Civil Industrial',
  shortBio: 'Profesional con 15+ años en gestión y liderazgo de equipos, especializado en desarrollo web, gestión de proyectos tecnológicos y análisis de datos.',
  fullBio: 'Ingeniero de Gestión y Sistemas con experiencia en evaluación, gestión, administración e implementación de proyectos tecnológicos y operativos, supervisión de servicios externos, auditoría de procesos, mejora de procesos, análisis de datos, administración de proveedores, administración de presupuesto. Liderazgo, capacidad analítica y orientación al logro. Excelentes habilidades de comunicación, resolución de problemas y gestión de relaciones.',
  location: 'Santiago de Chile',
  email: 'francisco.monroy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fmonroy75/',
  github: 'https://github.com/fmonroy75',
  //descarga
  cvFile: '/files/FMonroy_CV_ESP_v2.pdf',
  stats: [
    { value: '15+', label: 'Años Experiencia' },
    { value: '50+', label: 'Proyectos' },
    { value: '25+', label: 'Tecnologías' },
    { value: '10+', label: 'Empresas' }
  ]
}

export const experience = [
  {
    id: 1,
    company: 'Banco Estado · Banco Itaú',
    position: 'Full Stack Developer',
    period: '2022 – 2023',
    location: 'Santiago, Chile',
    color: 'primary',
    highlights: [
      'Aprendizaje acelerado del sistema Murex en 6 meses',
      'Controles de calidad previos a entregas productivas',
      'Desarrollo de execution scripts y batch extensions'
    ],
    technologies: ['Murex', 'SQL', 'Java', 'Batch Scripts']
  },
  {
    id: 2,
    company: 'Sonda',
    position: 'Analista de Datos',
    period: '2021 - 2022',
    location: 'Santiago, Chile',
    color: 'secondary',
    highlights: [
      'Mejorar la extracción de datos y enviar los resultados',
      'Realizar análisis y calidad de los datos',
      'Ejecutar scripts de mapeo y corrección'
    ],
    technologies: ['Excel', 'Oracle', 'SQL', 'VB']
  },
  {
    id: 3,
    company: 'AFP Habitat',
    position: 'Coordinador de Control de Calidad',
    period: '2019 - 2021',
    location: 'Santiago, Chile',
    color: 'success',
    highlights: [
      'Realizar control de calidad basado en coherencia y cohesión de datos',
      'Ejecutar scripts de corrección y mapeo',
      'Coordinar control de calidad en todos los proyectos',
      'Análisis para migración de información'
    ],
    technologies: ['Excel', 'SQL', 'Data Quality']
  },
  {
    id: 4,
    company: 'Holding CGE',
    position: 'Jefe de Proyectos | Líder de Desarrollo',
    period: '2007 - 2017',
    location: 'Santiago, Chile',
    color: 'warning',
    highlights: [
      'Implementar sistema de higiene y seguridad',
      'Aprender ERP PeopleSoft y liderar departamento en 6 meses',
      'Jefe de proyectos con empresas externas',
      'Liderar desarrollo y mantenimiento de software',
      'Control de calidad del producto final'
    ],
    technologies: ['PeopleSoft', 'SAP', 'VB', 'ASP', 'JavaScript', 'Oracle']
  },
  {
    id: 5,
    company: 'Principal Vida Chile',
    position: 'Líder Técnico | Desarrollador Web',
    period: '2004 - 2007',
    location: 'Santiago, Chile',
    color: 'info',
    highlights: [
      'Líder técnico de empresas externas',
      'Control de calidad de proyectos',
      'Desarrollo web'
    ],
    technologies: ['ASP', 'JavaScript', 'Oracle']
  },
  {
    id: 6,
    company: 'SYNAPSIS / Banco Central de Chile',
    position: 'Analista Programador',
    period: '2003 - 2004',
    location: 'Santiago, Chile',
    color: 'primary',
    highlights: [
      'Análisis y Programación'
    ],
    technologies: ['ASP', 'Oracle']
  },
  {
    id: 7,
    company: 'IN MOTION INGENIEROS S.A.',
    position: 'Analista Programador',
    period: '2003',
    location: 'Santiago, Chile',
    color: 'secondary',
    highlights: [
      'Proyecto "Sistema Multidimensional de Información"'
    ],
    technologies: ['Oracle']
  },
  {
    id: 8,
    company: 'IN-NOVA SOFTWARE / Freeway / Ferrera y Herquiñigo',
    position: 'Jefe de Proyectos',
    period: '1999 - 2002',
    location: 'Santiago, Chile',
    color: 'success',
    highlights: [
      'Control de calidad de proyectos',
      'Jefatura de proyectos'
    ],
    technologies: ['ASP', 'VB', 'PHP 5', 'MySQL', 'SQL', 'Oracle']
  },
  {
    id: 9,
    company: 'ATM Gestión / Municipalidad de Conchalí',
    position: 'Analista Programador',
    period: '1998 - 1999',
    location: 'Santiago, Chile',
    color: 'warning',
    highlights: [
      'Análisis y programación de sistemas'
    ],
    technologies: ['ASP', 'VB', 'SQL']
  },
  {
    id: 10,
    company: 'Manufacturas Textiles Pichara',
    position: 'Coordinador de Calidad',
    period: '1997 - 1998',
    location: 'Santiago, Chile',
    color: 'info',
    highlights: [
      'Coordinación y control de calidad',
      'Análisis del Sistema de Control de Producción'
    ],
    technologies: ['VB', 'SQL']
  }
]

export const education = [
  {
    id: 1,
    degree: 'Ingeniería Civil Industrial',
    institution: 'Universidad de Las Américas',
    location: 'Santiago de Chile',
    period: '2005 - 2008',
    description: 'Titulado de Ingeniería Civil Industrial'
  },
  {
    id: 2,
    degree: 'Ingeniería en Ejecución en Informática',
    institution: 'Instituto CIISA',
    location: 'Santiago de Chile',
    period: '1996 - 2001',
    description: 'Titulado de Ingeniería en Ejecución en Informática'
  }
]

export const courses = [
  {
    id: 1,
    name: 'FullStack Python',
    institution: 'Inforcap - Talento Digital',
    location: 'Santiago de Chile',
    year: 2024,
    category: 'Desarrollo'
  },
  {
    id: 2,
    name: 'Data Sciences con Python',
    institution: 'Adalid - Talento Digital',
    location: 'Santiago de Chile',
    year: 2023,
    category: 'Data Science'
  },
  {
    id: 3,
    name: 'SAP MM',
    institution: 'Buffa Sistemas',
    location: 'Buenos Aires, Argentina',
    year: 2021,
    category: 'ERP'
  },
  {
    id: 4,
    name: 'Diplomado Sistemas de Gestión Integral (ISO 9001, 14001, 18001)',
    institution: 'Universidad del Desarrollo',
    location: 'Santiago de Chile',
    year: 2012,
    category: 'Gestión'
  },
  {
    id: 5,
    name: 'Curso de Finanzas para no especialistas',
    institution: 'Universidad Santo Tomás',
    location: 'Santiago de Chile',
    year: 2017,
    category: 'Finanzas'
  },
  {
    id: 6,
    name: 'Curso de Marketing y ventas',
    institution: 'Universidad de Chile',
    location: 'Santiago de Chile',
    year: 2017,
    category: 'Negocios'
  }
]

// ===== LENGUAJES DE PROGRAMACIÓN (NUEVO) =====
export const programmingLanguages = [
  { 
    name: 'Python', 
    level: 85, 
    icon: 'python.png',
    experience: '8+ años',
    description: 'Desarrollo backend, data science, scripting'
  },
  { 
    name: 'JavaScript', 
    level: 90, 
    icon: 'javascript.png',
    experience: '10+ años',
    description: 'ES6+, DOM, async, frameworks'
  },
  { 
    name: 'TypeScript', 
    level: 75, 
    icon: 'typescript.png',
    experience: '3+ años',
    description: 'Tipado estático, interfaces, generics'
  },
  { 
    name: 'Java', 
    level: 80, 
    icon: 'java.png',
    experience: '8+ años',
    description: 'Spring, JPA, microservicios'
  },
  { 
    name: 'PHP', 
    level: 75, 
    icon: 'php.png',
    experience: '7+ años',
    description: 'Laravel, Wordpress, APIs'
  },
  /*{ 
    name: 'C#', 
    level: 70, 
    icon: 'csharp.png',
    experience: '5+ años',
    description: '.NET, ASP.NET, Entity Framework'
  },*/
  { 
    name: 'SQL', 
    level: 95, 
    icon: 'sql.png',
    experience: '12+ años',
    description: 'Oracle, MySQL, PostgreSQL, optimización'
  },
  { 
    name: 'HTML5', 
    level: 95, 
    icon: 'html.png',
    experience: '15+ años',
    description: 'Semántica, accesibilidad, SEO'
  },
  { 
    name: 'CSS3', 
    level: 90, 
    icon: 'css.png',
    experience: '15+ años',
    description: 'Flexbox, Grid, animaciones, responsive'
  },
  { 
    name: 'VB / ASP', 
    level: 85, 
    icon: 'vb.png',
    experience: '10+ años',
    description: 'VB6, ASP clásico, VBScript'
  }
]

export const frameworks = [
  { 
    name: 'Vue.js', 
    level: 85, 
    icon: 'vue.png',
    experience: '4+ años',
    description: 'Vue 3, Composition API, Vuex/Pinia'
  },
  /*{ 
    name: 'React', 
    level: 75, 
    icon: 'react.png',
    experience: '3+ años',
    description: 'Hooks, Context, Redux'
  },*/
  /*{ 
    name: 'Node.js', 
    level: 80, 
    icon: 'nodejs.png',
    experience: '5+ años',
    description: 'Express, APIs REST, microservicios'
  },*/
  { 
    name: 'Bootstrap', 
    level: 95, 
    icon: 'bootstrap.png',
    experience: '8+ años',
    description: 'Responsive, customización, temas'
  },
  /*{ 
    name: 'Tailwind', 
    level: 80, 
    icon: 'tailwind.png',
    experience: '2+ años',
    description: 'Utility-first, componentes'
  },*/
  { 
    name: 'Django', 
    level: 70, 
    icon: 'django.png',
    experience: '2+ años',
    description: 'ORM, admin, templates'
  }
]

export const tools = [
  { 
    name: 'GitHub', 
    level: 90, 
    icon: 'git.png',
    experience: '8+ años',
    description: 'Git flow, branching, merging'
  },
  { 
    name: 'Docker', 
    level: 70, 
    icon: 'docker.png',
    experience: '3+ años',
    description: 'Contenedores, compose, swarm'
  },
  { 
    name: 'VS Code', 
    level: 95, 
    icon: 'vscode.png',
    experience: '6+ años',
    description: 'Extensiones, debugging, snippets'
  },
  { 
    name: 'Postman', 
    level: 85, 
    icon: 'postman.png',
    experience: '5+ años',
    description: 'APIs, testing, colecciones'
  },
 /* { 
    name: 'Figma', 
    level: 65, 
    icon: 'figma.png',
    experience: '2+ años',
    description: 'Diseño, prototipado, colaboración'
  }*/
]

export const BD = [
  { 
    name: 'Oracle', 
    level: 90, 
    icon: 'oracle.png',
    experience: '8+ años',
    description: 'Creacion de bases de datos, consultas vistas'
  },
  { 
    name: 'SQL Server', 
    level: 90, 
    icon: 'sql.png',
    experience: '8+ años',
    description: 'Creacion de bases de datos, consultas vistas'
  },
  { 
    name: 'MySQL', 
    level: 90, 
    icon: 'MySQL.png',
    experience: '8+ años',
    description: 'Creacion de bases de datos, consultas vistas'
  },
  { 
    name: 'FireStore', 
    level: 85, 
    icon: 'firebase.png',
    experience: '2+ años',
    description: 'APIs, testing, colecciones'
  },
  { 
    name: 'PostgreSQL', 
    level: 85, 
    icon: 'postgresql.png',
    experience: '2+ años',
    description: 'APIs, testing, colecciones'
  }
]




export const skills = [
  { name: 'Full Stack Development', level: 90, icon: 'bi-code-slash', color: 'primary' },
  { name: 'Python & Data Science', level: 85, icon: 'bi-graph-up', color: 'info' },
  { name: 'SQL & Bases de Datos', level: 95, icon: 'bi-database', color: 'success' },
  { name: 'Gestión de Proyectos', level: 92, icon: 'bi-briefcase', color: 'warning' },
  { name: 'Análisis de Datos', level: 88, icon: 'bi-bar-chart', color: 'secondary' },
  { name: 'ERP (SAP, PeopleSoft)', level: 80, icon: 'bi-building', color: 'danger' }
]

export const languages = [
  { name: 'Español', level: 5, native: 'Nativo', flag: 'bi-flag' },
  { name: 'Inglés', level: 4.5, native: 'Avanzado', flag: 'bi-flag' },
  { name: 'Francés', level: 3.5, native: 'Intermedio', flag: 'bi-flag' }
]

export const projects = [
  {
    id: 1,
    title: 'Landing Page Vincent Alizé',
    category: 'web',
    categoryLabel: 'Web Design',
    description: 'Landing Page para músico Vincent Alizé - Portafolio artístico.',
    fullDescription: 'Sitio web portfolio para músico profesional. Galería de videos, discografía, fechas de conciertos y tienda integrada con pasarela de pagos.',
    image: '../src/assets/images/portfolio/vincentalize.jpg',
    technologies: ['Vue 3', 'Vuetify', 'Firebase', 'Vue Router'],
    features: [
      'Galería multimedia',
      'Reproductor de música',
      'Blog de noticias',
      'Calendario de eventos',
      'E-commerce básico'
    ],
    demoUrl: 'https://github.com/fmonroy75/vincent-alize',
    codeUrl: 'https://github.com/fmonroy75/vincent-alize',
    featured: true,
    year: 2026
     
  },
  {
    id: 2,
    title: 'LanguageArtLife',
    category: 'python',
    categoryLabel: 'Webdesign',
    description: 'Web LanguageArtLife.',
    fullDescription: 'Aplicación de simulación de inversiones en tiempo real que permite a usuarios practicar estrategias de trading con datos históricos del mercado chileno. Incluye visualización de datos y análisis de riesgo.',
    image: '../src/assets/images/portfolio/languageartlife.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib'],
    features: [
      'Simulación de compra/venta de acciones',
      'Análisis de riesgo',
      'Visualización de datos históricos',
      'Portafolio de inversiones',
      'Alertas de mercado'
    ],
    demoUrl: 'https://github.com/fmonroy75/simulador-bolsa',
    codeUrl: 'https://github.com/fmonroy75/simulador-bolsa',
    featured: true,
    year: 2025
  },
  {
    id: 3,
    title: 'Juegos para Práctica de Idiomas',
    category: 'web',
    categoryLabel: 'Web Development',
    description: 'Juegos para practicar oralmente idiomas, supervisados o sin supervisión.',
    fullDescription: 'Plataforma interactiva de juegos educativos para el aprendizaje de idiomas. Incluye reconocimiento de voz, evaluación automática y modo multijugador en tiempo real.',
    image: '../src/assets/images/portfolio/languagelife.jpg',
    technologies: ['Vue 3', 'Web Speech API', 'Node.js', 'Socket.io', 'PostgreSQL'],
    features: [
      'Reconocimiento de voz',
      'Ejercicios de pronunciación',
      'Juegos interactivos',
      'Seguimiento de progreso',
      'Salas multijugador'
    ],
    demoUrl: 'https://github.com/fmonroy75/juegos-idiomas',
    codeUrl: 'https://github.com/fmonroy75/juegos-idiomas',
    featured: true,
    year: 2026
  },
  {
    id: 4,
    title: 'Landing Page Chikung Wellness',
    category: 'web',
    categoryLabel: 'Web Design',
    description: 'Landing Page para fitness Terapias Funcionales - Chikung.',
    fullDescription: 'Landing page profesional para centro de terapias funcionales. Diseño responsive con animaciones suaves, formulario de contacto integrado y optimización SEO.',
    image: '../src/assets/images/portfolio/tf.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Bootstrap'],
    features: [
      'Diseño 100% responsive',
      'Animaciones GSAP',
      'Formulario de contacto',
      'Optimización SEO',
      'Integración con Google Maps'
    ],
    demoUrl: 'https://github.com/fmonroy75/chikung-landing',
    codeUrl: 'https://github.com/fmonroy75/chikung-landing',
    featured: false,
    year: 2026
  },
  {
    id: 5,
    title: 'Sistema de Gestión Inmobiliaria',
    category: 'web',
    categoryLabel: 'Web Development',
    description: 'Proyecto final de gestión inmobiliaria, permite mostrar propiedades y agregar cuando se requiera.',
    fullDescription: 'Sistema completo para la gestión de propiedades inmobiliarias. Incluye módulos de administración de propiedades, clientes, contratos de arriendo, reportes y dashboard interactivo desarrollado con Vue 3 y Node.js.',
    image: '../src/assets/images/portfolio/python-bootcamp.webp',
    technologies: ['Vue 3', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    features: [
      'CRUD completo de propiedades',
      'Búsqueda y filtros avanzados',
      'Dashboard con métricas',
      'Autenticación de usuarios',
      'API RESTful'
    ],
    demoUrl: 'https://github.com/fmonroy75/proyecto-inmobiliario',
    codeUrl: 'https://github.com/fmonroy75/proyecto-inmobiliario',
    featured: false,
    year: 2025
 
  },
  {
    id: 6,
    title: 'Administración de Arriendo de Bodegas',
    category: 'python',
    categoryLabel: 'Python',
    description: 'Sistema de administración de arriendo de bodegas industriales.',
    fullDescription: 'Sistema de gestión para arriendo de bodegas industriales. Control de inventario, facturación automática, reportes financieros y dashboard administrativo.',
    image: '../src/assets/images/portfolio/python-bootcamp.webp',
    technologies: ['Python', 'Django', 'SQLite', 'Bootstrap', 'Chart.js'],
    features: [
      'Gestión de clientes y contratos',
      'Control de pagos',
      'Reportes de ocupación',
      'Facturación automática',
      'Dashboard administrativo'
    ],
    demoUrl: 'https://github.com/fmonroy75/admin-bodegas',
    codeUrl: 'https://github.com/fmonroy75/admin-bodegas',
    featured: false,
    year: 2025
  },
  {
    id: 7,
    title: 'Simulador de Corredor de Bolsa',
    category: 'python',
    categoryLabel: 'Python / Data Science',
    description: 'Proyecto test en Python, simulador de corredor de bolsa con análisis predictivo.',
    fullDescription: 'Aplicación de simulación de inversiones en tiempo real que permite a usuarios practicar estrategias de trading con datos históricos del mercado chileno. Incluye visualización de datos y análisis de riesgo.',
    image: '../src/assets/images/portfolio/python-bootcamp.webp',
    technologies: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib'],
    features: [
      'Simulación de compra/venta de acciones',
      'Análisis de riesgo',
      'Visualización de datos históricos',
      'Portafolio de inversiones',
      'Alertas de mercado'
    ],
    demoUrl: 'https://github.com/fmonroy75/simulador-bolsa',
    codeUrl: 'https://github.com/fmonroy75/simulador-bolsa',
    featured: true,
    year: 2025
  }
]

export const menuItems = [
  { name: 'Inicio', path: '#home' },
  { name: 'Experiencia', path: '#experience' },
  { name: 'Educación', path: '#education' },
  { name: 'Habilidades', path: '#skills' },
  { name: 'Proyectos', path: '#portfolio' },
  { name: 'Contacto', path: '#contact' }
]

