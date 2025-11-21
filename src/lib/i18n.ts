
export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      courses: 'Cursos',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: '¡Hola! Soy Bruno 👋',
      title: 'Estudiante avanzado de Ingeniería en Sistemas de Comunicación con perfil enfocado en Machine Learning y Señales',
      description: 'Me especializo en aprendizaje automático, comunicaciones digitales y procesamiento de señales. Soy curioso, autodidacta y siempre estoy aprendiendo algo nuevo.',
      downloadCV: 'Descargar CV',
      openToWork: 'Disponible para trabajar',
    },
    about: {
      title: 'Sobre mí',
      description: 'Soy estudiante avanzado de Ingeniería en Sistemas de Comunicación en UDELAR (FING). Me encanta trabajar con señales, GNNs, redes inalámbricas y machine learning. Actualmente estoy buscando oportunidades laborales para dar mi salto profesional.',
      university: 'Facultad de Ingeniería - UDELAR',
    },
    skills: {
      title: 'Habilidades',
      languages: 'Lenguajes',
      mlLibraries: 'Librerías / ML',
      dataTools: 'Data & Tools',
      other: 'Otros',
    },
    courses: {
      title: 'Cursos',
      institution: 'Institución',
      date: 'Fecha',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Aún no tengo mucha experiencia profesional como desarrollador 😅 pero mis proyectos académicos también muestran lo que puedo hacer.',
      technologies: 'Tecnologías',
      viewOnGithub: 'Ver en GitHub',
    },
    contact: {
      title: '¿Trabajamos juntos?',
      description: 'Si tenés una oportunidad laboral o querés colaborar en algún proyecto, escribime. Estoy abierto a roles de desarrollador Python, machine learning, datos o de telecomunicaciones.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      courses: 'Courses',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi! I'm Bruno 👋",
      title: 'Telecommunications Engineer focused on Machine Learning and Signals',
      description: 'I specialize in machine learning, digital communications, and signal processing. I am curious, self-taught, and always learning something new.',
      downloadCV: 'Download CV',
      openToWork: 'Open To Work',
    },
    about: {
      title: 'About Me',
      description: 'I am an advanced student of Communication Systems Engineering at UDELAR (FING). I love working with signals, GNNs, wireless networks, and machine learning. I am currently looking for job opportunities to take my professional leap.',
      university: 'Faculty of Engineering - UDELAR',
    },
    skills: {
      title: 'Skills',
      languages: 'Languages',
      mlLibraries: 'Libraries / ML',
      dataTools: 'Data & Tools',
      other: 'Other',
    },
    courses: {
      title: 'Courses',
      institution: 'Institution',
      date: 'Date',
    },
    projects: {
      title: 'Projects',
      subtitle: "I don't have professional experience yet 😅 but these academic projects show what I can do.",
      technologies: 'Technologies',
      viewOnGithub: 'View on GitHub',
    },
    contact: {
      title: "Let's Work Together?",
      description: 'If you have a job opportunity or want to collaborate on a project, write to me. I am open to roles in machine learning, signal processing, and telecommunications.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
