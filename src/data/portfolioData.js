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
  whatsappNumber: '56982307788',
  whatsappMessage:'Hola%20Francisco,%20vi%20tu%20portafolio%20y%20me%20gustaría%20conversar%20contigo',
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
    position: 'Murex Analyst',
    period: '2022 – 2023',
    location: 'Santiago, Chile',
    color: 'primary',
    highlights: [
      'Aprendizaje acelerado del sistema Murex en 6 meses',
      'Controles de calidad previos a entregas productivas',
      'Desarrollo de execution scripts y batch extensions'
    ],
    technologies: ['Murex', 'SQL','Batch Scripts']
  },
  {
    id: 2,
    company: 'Sonda',
    position: 'Consultor de operaciones',
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
    position: 'Analista de datos',
    period: '2019 - 2021',
    location: 'Santiago, Chile',
    color: 'success',
    highlights: [
      'Realizar control de calidad basado en coherencia y cohesión de datos',
      'Ejecutar scripts de corrección y mapeo',
      'Encontrar inconsistencias de datos',
      'Análisis de datos para migración de información'
    ],
    technologies: ['Excel', 'SQL']
  },
  {
    id: 4,
    company: 'Holding CGE',
    position: 'Jefe de Proyectos | Líder de Desarrollo | Desarrollador',
    period: '2007 - 2017',
    location: 'Santiago, Chile',
    color: 'warning',
    highlights: [
      'Implementar sistema de higiene y seguridad',
      'Aprender ERP PeopleSoft y liderar proyectos en 6 meses',
      'Jefe de proyectos con empresas externas',
      'Liderar desarrollo y mantenimiento de software',
      'Realizar control de calidad de producto final antes de la entrega',
      'Gestión con clientes (internos y externos) para la toma de requerimientos',
      'Soporte nivel 2 y 3 de aplicaciones web'
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
      'Desarrollador de aplicaciones Web'
    ],
    technologies: ['ASP','Java', 'JavaScript', 'Oracle']
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
    technologies: ['ASP', 'Javascript','Oracle']
  },
  {
    id: 7,
    company: 'IN MOTION INGENIEROS S.A.',
    position: 'Analista de Sistemas',
    period: '2003',
    location: 'Santiago, Chile',
    color: 'secondary',
    highlights: [
      'Participa en proyecto "Sistema Multidimensional de Información”'
    ],
    technologies: ['Oracle']
  },
  {
    id: 8,
    company: 'IN-NOVA SOFTWARE / Freeway / Ferrera y Herquiñigo',
    position: 'Jefe de Proyectos | Desarrollador',
    period: '1999 - 2002',
    location: 'Santiago, Chile',
    color: 'success',
    highlights: [
      'Control de calidad de proyectos',
      'Jefatura de proyectos con equipos multidisciplinarios',
      'Desarrollador web'
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
    position: 'Analista Programador',
    period: '1997 - 1998',
    location: 'Santiago, Chile',
    color: 'info',
    highlights: [
      'Coordinación y control de calidad',
      'Análisis y programación de sistema de Control de Producción'
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
    name: 'Diplomado Sistemas de Gestión Integral (ISO 9001, 14001, 18001)',
    institution: 'Universidad del Desarrollo',
    location: 'Santiago de Chile',
    year: 2012,
    category: 'Gestión'
  },
  {
    id: 2,
    name: 'Curso de Finanzas para no especialistas',
    institution: 'Universidad Santo Tomás',
    location: 'Santiago de Chile',
    year: 2017,
    category: 'Finanzas'
  },
  {
    id: 3,
    name: 'Curso de Marketing y ventas',
    institution: 'Universidad de Chile',
    location: 'Santiago de Chile',
    year: 2017,
    category: 'Negocios'
  },
  {
    id: 4,
    name: 'SAP MM',
    institution: 'Buffa Sistemas',
    location: 'Buenos Aires, Argentina',
    year: 2021,
    category: 'ERP'
  },
  {
    id: 5,
    name: 'Data Sciences con Python',
    institution: 'Adalid - Talento Digital',
    location: 'Santiago de Chile',
    year: 2023,
    category: 'Data Science'
  },
  {
    id: 6,
    name: 'FullStack Python',
    institution: 'Inforcap - Talento Digital',
    location: 'Santiago de Chile',
    year: 2024,
    category: 'Desarrollo Web'
  },
  {
    id: 7,
    name: 'Desarrollo FrontEnd Vue',
    institution: 'Nuevacumbre - Talento Digital',
    location: 'Santiago de Chile',
    year: 2026,
    category: 'Desarrollo Web'
  }
]

// ===== LENGUAJES DE PROGRAMACIÓN (NUEVO) =====
export const programmingLanguages = [
  { 
    name: 'Python', 
    level: 85, 
    icon: 'python-logo.webp',
    experience: '1+ años',
    description: 'Desarrollo backend, data science, scripting'
  },
  { 
    name: 'JavaScript', 
    level: 90, 
    icon: 'JavaScript-logo.png',
    experience: '10+ años',
    description: 'ES6+, DOM, async, frameworks, Desarrollo web'
  },
  { 
    name: 'TypeScript', 
    level: 75, 
    icon: 'typescript.png',
    experience: '1+ años',
    description: 'Tipado estático, interfaces, generics'
  },
  { 
    name: 'Java', 
    level: 80, 
    icon: 'java.png',
    experience: '2+ años',
    description: 'Desarrollo, microservicios'
  },
  { 
    name: 'PHP', 
    level: 75, 
    icon: 'php-logo.webp',
    experience: '7+ años',
    description: 'Desarrollo web , Wordpress, Moodle, APIs'
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
    icon: 'sql-database-logo.jpg',
    experience: '12+ años',
    description: 'Oracle, MySQL, PostgreSQL, optimización'
  },
  { 
    name: 'HTML5', 
    level: 95, 
    icon: 'html5-logo.png',
    experience: '15+ años',
    description: 'Semántica, accesibilidad, SEO, Desarrollo Web'
  },
  { 
    name: 'CSS3', 
    level: 90, 
    icon: 'CSS3_Logo.png',
    experience: '10+ años',
    description: 'Desarrollo Web'
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
    experience: '1+ años',
    description: 'Vue 3,  Vuex/Pinia, Vuetify'
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
    icon: 'bootstrap-logo.jpg',
    experience: '3+ años',
    description: 'Responsive, customización, Desarrollo Web'
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
    icon: 'django-logo.webp',
    experience: '2+ años',
    description: 'ORM, admin, Desarrollo Web'
  }
]

export const tools = [
  { 
    name: 'GitHub', 
    level: 90, 
    icon: 'GitHub-Logo.png',
    experience: '8+ años',
    description: 'Git , branching, merging'
  },
  /*{ 
    name: 'Docker', 
    level: 70, 
    icon: 'docker.png',
    experience: '3+ años',
    description: 'Contenedores, compose, swarm'
  },*/
  { 
    name: 'VS Code', 
    level: 95, 
    icon: 'vscode.png',
    experience: '5+ años',
    description: 'Extensiones, debugging, snippets, Programación'
  },
  { 
    name: 'Postman', 
    level: 85, 
    icon: 'postman.png',
    experience: '1+ años',
    description: 'Testing'
  },
  { 
    name: 'Wix', 
    level: 85, 
    icon: 'wix.png',
    experience: '5+ años',
    description: 'Desarrollo Web'
  },
  { 
    name: 'Wordpress', 
    level: 85, 
    icon: 'wordpress.webp',
    experience: '5+ años',
    description: 'Desarrollo Web'
  },
  { 
    name: 'Moodle', 
    level: 85, 
    icon: 'moodle.jpg',
    experience: '5+ años',
    description: 'Desarrollo Web, desarrollo de cursos'
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
    description: 'Creacion de bases de datos, consultas, vistas'
  },
  { 
    name: 'SQL Server', 
    level: 90, 
    icon: 'sql-database-logo.jpg',
    experience: '8+ años',
    description: 'Creación de bases de datos, consultas, vistas, cursores'
  },
  { 
    name: 'MySQL', 
    level: 90, 
    icon: 'mysql-logo.png',
    experience: '8+ años',
    description: 'Creación de bases de datos, consultas vistas'
  },
  { 
    name: 'FireStore', 
    level: 85, 
    icon: 'firebase.webp',
    experience: '2+ años',
    description: 'Colecciones'
  },
  { 
    name: 'PostgreSQL', 
    level: 85, 
    icon: 'logo-postgresql.png',
    experience: '1+ años',
    description: 'Creación de bases de datos'
  },
]

  export const ERP = [
    { 
      name: 'Peoplesoft', 
      level: 90, 
      icon: 'peoplesoft-logo.png',
      experience: '5+ años',
      description: 'Desarrollo y Mantención'
    },
    { 
      name: 'Murex', 
      level: 90, 
      icon: 'murex-logo.webp',
      experience: '1+ años',
      description: 'Script, Batch of script'
    },
]




export const skills = [
  { name: 'Full Stack Development', level: 90, icon: 'bi-code-slash', color: 'primary' },
  { name: 'Python & Data Science', level: 85, icon: 'bi-graph-up', color: 'info' },
  { name: 'SQL & Bases de Datos', level: 95, icon: 'bi-database', color: 'success' },
  { name: 'Gestión de Proyectos', level: 92, icon: 'bi-briefcase', color: 'warning' },
  { name: 'Análisis de Datos', level: 88, icon: 'bi-bar-chart', color: 'secondary' },
  { name: 'Desarrollo Web', level: 95, icon: 'bi-bar-chart', color: 'primary' },
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
    title: 'Simulador de Corredor de Bolsa',
    category: 'python',
    categoryLabel: 'Python',
    description: 'Proyecto test en Python, simulador de corredor de bolsa.',
    fullDescription: 'Aplicación de simulación de inversiones en tiempo real que permite a usuarios compra y venta de acciones.',
    image: '../src/assets/images/portfolio/python-bootcamp.webp',
    technologies: ['Python', 'Bootstrap', 'Django'],
    features: [
      'Simulación de compra/venta de acciones',
      'Portafolio de inversiones'
        ],
    demoUrl: '',
    codeUrl: '',
    webUrl: '',
    featured: true,
    year: 2025
  },

  {
    id: 2,
    title: 'Administración de Arriendo de Bodegas',
    category: 'python',
    categoryLabel: 'Python',
    description: 'Sistema de administración de arriendo de bodegas.',
    fullDescription: 'Sistema de gestión para arriendo de bodegas. Control de inventario,reportes financieros y dashboard administrativo.',
    image: '../src/assets/images/portfolio/python-bootcamp.webp',
    technologies: ['Python', 'Django', 'SQLite', 'Bootstrap'],
    features: [
      'Gestión de clientes ',
      'Reportes de ocupación',
      'Dashboard administrativo'
    ],
    demoUrl: '',
    codeUrl: '',
    webUrl: '',
    featured: false,
    year: 2025
  },

  {
    id: 3,
    title: 'Sistema de Gestión Inmobiliaria',
    category: 'python',
    categoryLabel: 'Python',
    description: 'Proyecto final de gestión inmobiliaria, permite mostrar propiedades y agregar cuando se requiera.',
    fullDescription: 'Sistema completo para la gestión de propiedades inmobiliarias. Incluye módulos de administración de propiedades, clientes, reportes y dashboard interactivo desarrollado Python y Django.',
    image: '../src/assets/images/portfolio/python-bootcamp.webp',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
    features: [
      'CRUD completo de propiedades',
      'Búsqueda y filtros avanzados',
      'Dashboard',
      'Autenticación de usuarios'
    ],
    demoUrl: '',
    codeUrl: '',
    webUrl:'',
    featured: false,
    year: 2025
 
  },

  {
    id: 4,
    title: 'Landing Page Chikung',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    description: 'Landing Page para fitness Terapias Funcionales - Chikung.',
    fullDescription: 'Landing page profesional para centro de terapias funcionales. Diseño responsive con animaciones suaves y optimización SEO.',
    image: '../src/assets/images/portfolio/tf.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'BEM', 'Tailwind'],
    features: [
      'Diseño 100% responsive',
      'Animaciones',
      'Optimización SEO',
      'Integración con Google Maps'
    ],
    demoUrl: '',
    codeUrl: '',
    webUrl:'https://fmonroy75.github.io/ChiKung/',
    featured: false,
    year: 2026
  },


  {
    id: 5,
    title: 'LanguageArtLife',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    description: 'Webpage para una academia de idiomas con galería de arte.',
    fullDescription: 'Webpage para una academia de idiomas, galería de arte, exposiciones y eventos',
    image: '../src/assets/images/portfolio/languageartlife.jpg',
    technologies: ['Bootstrap','Javascript','PHP','MySQL','Javascript','Json','Jquery'],
    features:[ 
      'Blog de noticias y eventos',
      'Galería de Obras',
      'Responsive',
      'Optimización SEO',
      'Multiidioma'
    ],
    demoUrl: '',
    codeUrl: '',
    webUrl:'https://www.languageartlife.com',
    featured: true,
    year: 2026
  },
  {
    id: 6,
    title: 'Juegos para Práctica de Idiomas',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    description: 'Juegos para practicar oralmente, idiomas, supervisados o sin supervisar con algun profesor.',
    fullDescription: 'Plataforma interactiva de juegos educativos para la práctica oral de idiomas.',
    image: '../src/assets/images/portfolio/languagelife.jpg',
    technologies: ['PHP', 'MySQL'],
    features: [
      'PHP',
      'Javascript',
      'Multiidioma',
      'Opciones al azar'
        ],
    demoUrl: '',
    codeUrl: '',
    webUrl: 'https://www.languageartlife.com/juego/oral-practice.php',
    featured: true,
    year: 2026
  },

  {
    id: 7,
    title: 'Landing Page Vincent Alizé',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    description: 'Landing Page para músico Vincent Alizé - Portafolio artístico.',
    fullDescription: 'Sitio web portfolio para músico profesional. Galería de videos, discografía',
    image: '../src/assets/images/portfolio/vincentalize.jpg',
    technologies: ['Bootstrap', 'Javascript', 'jQuery'],
    features: [
      'Galería multimedia',
      'Reproductor de música',
    ],
    demoUrl: '',
    codeUrl: '',
    webUrl:'https://fmonroy75.github.io/vincentalize/',
    featured: true,
    year: 2026
     
  },
  {
    id: 8,
    title: 'Landing Page Moviltechnology',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    description: 'Landing Page tienda de respuestos y accesorios para celulares',
    fullDescription: 'Sitio web de tienda de repuestos y accesorios para celulares, cada card con acción de llamada a whatsapp',
    image: '../src/assets/images/portfolio/moviltechnology.jpg',
    technologies: ['Bootstrap', 'Javascript', 'Vue'],
    features: [
      'Cards con llamada a la acción',
      'Landing Page',
    ],
    demoUrl: '',
    codeUrl: '',
    webUrl:'https://moviltechnology.ingeniumbright.com/',
    featured: true,
    year: 2026
     
  },
  {
    id: 8,
    title: 'Simulador Bursatil',
    category: 'web',
    categoryLabel: 'Desarrollo Web',
    description: 'Simulador bursatil',
    fullDescription: 'Simulador de compra y ventas de acciones, con una seccion para noticias',
    image: '../src/assets/images/portfolio/talentodigital.png',
    technologies: ['Bootstrap', 'Javascript', 'Vue','Firebase'],
    features: [
      'Autentificacion',
      'APIs',
      'Compra/venta acciones',
      'Blog de Noticias',
    ],
    demoUrl: '',
    codeUrl: '',
    webUrl:'https://fmonroy75.github.io/simulador-bursatil/',
    featured: true,
    year: 2026
     
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

