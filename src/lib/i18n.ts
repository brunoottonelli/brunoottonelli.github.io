
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
      greeting1: '¡Hola! ',
      name: 'Soy Bruno',
      greeting2: ' 👋',
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
      mlLibraries: 'Machine Learning',
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
      showMore: 'Ver más',
    },
    contact: {
      title: '¿Trabajamos juntos?',
      description: 'Si tenés una oportunidad laboral o querés colaborar en algún proyecto, escribime. Estoy abierto a roles de desarrollador Python, machine learning, datos o de telecomunicaciones.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      form: {
        yourEmail: 'Tu email',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar',
        sending: 'Enviando...',
        success: '¡Mensaje enviado con éxito!',
        error: 'Error al enviar el mensaje. Por favor, intenta de nuevo.',
      },
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
      greeting1: "Hi! ",
      name: 'I\'m Bruno',
      greeting2: ' 👋',
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
      mlLibraries: 'Machine Learning',
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
      showMore: 'Show more',
    },
    contact: {
      title: "Let's Work Together?",
      description: 'If you have a job opportunity or want to collaborate on a project, write to me. I am open to roles in machine learning, signal processing, and telecommunications.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      form: {
        yourEmail: 'Your email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
      },
    },
  },
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
