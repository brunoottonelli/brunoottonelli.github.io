'use client';

import { ArrowRight, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { useState } from 'react';

/* ----------------------- TIPOS ----------------------- */
interface Project {
  name: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  github: string;
  features?: string[];
  challenges?: string[];
  achievements?: string[];
}

/* --------------------- DATA -------------------------- */
const projectsData: Record<'es' | 'en', Project[]> = {
  es: [
    {
      name: 'Sistema de Automatización para el Área de Redes – UTE',
      description: 'VBA / Excel – Proyecto real en producción',
      detailedDescription:
        'En el área de Redes de Distribución de UTE detecté información dispersa, procesos muy manuales y la ausencia de una herramienta moderna para gestionar compras, entregas y planificación presupuestal. Para resolverlo, desarrollé un sistema integral en VBA que centraliza datos y automatiza tareas críticas.',
      technologies: [
        'VBA',
        'Excel avanzado',
        'Procesamiento de reportes SAP',
        'Diseño de bases de datos simples',
        'Automatización de procesos',
        'UX accesible',
        'Levantamiento de requerimientos',
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: '#',
      features: [
        'Importa y procesa automáticamente reportes SAP, transformándolos en tablas limpias y relacionables',
        'Organiza la información en estructuras de datos centralizadas',
        'Ofrece una interfaz intuitiva (botones, formularios y acciones guiadas)',
        'Automatiza tareas clave: actualización de saldos y precios, generación de reportes, seguimiento de entregas, exportación de tablas',
        'Incluye herramientas de visualización y previsión, útiles para planificar presupuesto y compras',
      ],
      challenges: [
        'Datos distribuidos en varios archivos y versiones',
        'Procesos repetitivos que demandaban horas o días',
        'Falta de seguimiento claro de entregas de materiales',
        'Dificultad para prever qué mercadería ingresaría cada mes',
        'Información exportada desde SAP, pero sin una manera práctica de procesarla o visualizarla',
      ],
      achievements: [
        'Reducción significativa del tiempo dedicado a tareas mecánicas',
        'Mayor claridad en el estado de compras y entregas',
        'Procesamiento automático de datos SAP adaptado a las necesidades del equipo',
        'Mejor previsión de materiales y presupuestos',
        'Sistema estable, escalable y utilizado diariamente',
      ],
    },
    {
      name: 'APNetworkEnv',
      description:
        'Entorno Gym personalizado con GNNs para optimización de redes inalámbricas. Implementa algoritmos de aprendizaje por refuerzo para mejorar la asignación de recursos.',
      detailedDescription:
        'APNetworkEnv es un entorno de simulación avanzado que combina el framework OpenAI Gym con Graph Neural Networks (GNNs) para abordar problemas complejos de optimización en redes inalámbricas. El proyecto permite entrenar agentes de aprendizaje por refuerzo que aprenden a asignar recursos de manera óptima en escenarios de redes dinámicas y heterogéneas.',
      technologies: ['Python', 'PyTorch Geometric', 'OpenAI Gym', 'GNN'],
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/apnetworkenv',
      features: [
        'Interfaz compatible con OpenAI Gym para fácil integración',
        'Representación de topología de red mediante grafos',
        'Soporte para algoritmos DQN, PPO y A3C',
        'Métricas de rendimiento y visualización en tiempo real',
        'Escenarios configurables de movilidad y tráfico'
      ],
      challenges: [
        'Diseño de espacios de estado y acción escalables',
        'Optimización del entrenamiento con grafos grandes',
        'Balanceo entre exploración y explotación',
        'Validación con escenarios realistas de red'
      ],
      achievements: [
        'Mejora del 25% en throughput comparado con heurísticas tradicionales',
        'Reducción del 40% en latencia promedio',
        'Convergencia estable en menos de 1000 episodios',
        'Generalización exitosa a topologías no vistas'
      ]
    },
    {
      name: 'Pitch Detection',
      description:
        'Implementación de algoritmos GLogS y HPS para detección de pitch en señales de audio. Análisis comparativo de precisión y rendimiento.',
      detailedDescription:
        'Este proyecto implementa y compara dos algoritmos avanzados de detección de pitch: GLogS (Generalized Logarithmic Spectrum) y HPS (Harmonic Product Spectrum). Incluye un análisis exhaustivo de su rendimiento en diferentes condiciones acústicas, tipos de instrumentos y niveles de ruido.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing'],
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/pitch-detection',
      features: [
        'Implementación optimizada de GLogS y HPS',
        'Pre-procesamiento de audio con filtros adaptativos',
        'Detección robusta de fundamentales en señales polifónicas',
        'Visualización de espectros y armónicos',
        'Evaluación con datasets estándar (MIREX, NSynth)'
      ],
      challenges: [
        'Manejo de octavas erróneas en señales ruidosas',
        'Optimización computacional para tiempo real',
        'Discriminación entre tono y ruido armónico',
        'Calibración de parámetros para diferentes instrumentos'
      ],
      achievements: [
        '97% de precisión en detección de pitch para instrumentos solistas',
        'Latencia inferior a 23ms en procesamiento en tiempo real',
        'Detección exitosa en rangos de 50Hz a 2000Hz',
        'Resistencia a SNR de hasta -5dB'
      ]
    },
    {
      name: 'Data Quality & Integration',
      description:
        'Proyecto de integración y limpieza de grandes datasets. Implementación de pipelines ETL y validación de calidad de datos.',
      detailedDescription:
        'Sistema completo de ETL (Extract, Transform, Load) diseñado para integrar múltiples fuentes de datos heterogéneas, con énfasis en la validación de calidad y la detección de anomalías. Implementa reglas de negocio complejas y procesos de reconciliación automatizados.',
      technologies: ['Python', 'Pandas', 'SQL', 'Data Quality'],
      image:
        '/images/projects-thumbnails/CaDQM-thumbnail2.png',
      github: 'https://github.com/bruno-ottonelli/data-integration',
      features: [
        'Pipeline ETL modular y escalable',
        'Validación multinivel de calidad de datos',
        'Detección automática de anomalías estadísticas',
        'Reconciliación entre múltiples fuentes',
        'Reportes de calidad y trazabilidad completa'
      ],
      challenges: [
        'Manejo de inconsistencias entre esquemas heterogéneos',
        'Optimización de procesamiento de datasets de 100M+ filas',
        'Detección de duplicados con lógica difusa',
        'Preservación de integridad referencial en transformaciones'
      ],
      achievements: [
        'Reducción del 85% en errores de datos en producción',
        'Procesamiento de 50M registros en menos de 2 horas',
        'Detección automática del 95% de anomalías conocidas',
        'Ahorro de 200+ horas/mes en reconciliación manual'
      ]
    },
    {
      name: 'Event Camera Processing',
      description:
        'Procesamiento de datos de event cameras (timestamp-x-y-polarity). Análisis de eventos para detección de movimiento y tracking.',
      detailedDescription:
        'Implementación de algoritmos de visión computacional especializados para event cameras, que capturan cambios de luminosidad a nivel de píxel de forma asíncrona. El proyecto incluye técnicas de reconstrucción de frames, detección de objetos en movimiento y tracking de alta velocidad.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
      image:
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/event-camera',
      features: [
        'Parser eficiente de streams de eventos asíncronos',
        'Reconstrucción de frames a partir de eventos',
        'Detección de bordes y contornos en tiempo real',
        'Tracking de objetos de alta velocidad',
        'Filtrado de ruido adaptativo temporal'
      ],
      challenges: [
        'Manejo de flujos asíncronos de alta frecuencia (>1M events/s)',
        'Reconstrucción coherente de escenas a partir de eventos dispersos',
        'Calibración de umbrales de detección',
        'Integración temporal sin pérdida de resolución'
      ],
      achievements: [
        'Tracking exitoso de objetos a velocidades >500 px/ms',
        'Latencia de procesamiento <5ms por frame reconstruido',
        'Detección de movimiento con resolución de 100µs',
        'Reducción del 60% en consumo de ancho de banda vs cámaras tradicionales'
      ]
    },
    {
      name: 'Ambilight Raspberry Pi',
      description:
        'Sistema Ambilight DIY usando Raspberry Pi. Sincronización de LEDs con contenido de pantalla en tiempo real.',
      detailedDescription:
        'Sistema de iluminación ambiental que analiza el contenido de la pantalla en tiempo real y proyecta los colores predominantes en LEDs RGB ubicados detrás del monitor. Utiliza Raspberry Pi como controlador principal y Arduino para el manejo de tiras LED, logrando una experiencia inmersiva con latencia imperceptible.',
      technologies: ['Python', 'Raspberry Pi', 'Arduino', 'LED Control'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/ambilight-pi',
      features: [
        'Captura de pantalla mediante HDMI splitting',
        'Análisis de color por zonas configurables',
        'Comunicación serial optimizada RPi-Arduino',
        'Suavizado de transiciones con interpolación',
        'Configuración web para ajustes en vivo'
      ],
      challenges: [
        'Minimización de latencia total por debajo de 50ms',
        'Optimización de captura de frames sin impacto en CPU',
        'Sincronización precisa entre análisis y actualización de LEDs',
        'Balanceo de brillo y saturación para diferentes contenidos'
      ],
      achievements: [
        'Latencia total de 35ms desde captura hasta LED',
        'Actualización de 240 LEDs a 60 FPS',
        'Consumo de CPU <15% en Raspberry Pi 4',
        'Experiencia inmersiva en gaming y multimedia'
      ]
    },
  ],
  en: [
    {
      name: 'Automation System for Network Area – UTE',
      description: 'VBA / Excel – Real project in production',
      detailedDescription:
        'In the UTE Distribution Network area, I detected scattered information, very manual processes, and the absence of a modern tool to manage purchases, deliveries, and budget planning. To solve this, I developed a comprehensive system in VBA that centralizes data and automates critical tasks.',
      technologies: [
        'VBA',
        'Advanced Excel',
        'SAP Report Processing',
        'Simple Database Design',
        'Process Automation',
        'Accessible UX',
        'Requirements Gathering',
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: '#',
      features: [
        'Automatically imports and processes SAP reports, transforming them into clean and relational tables',
        'Organizes information in centralized data structures',
        'Offers an intuitive interface (buttons, forms, and guided actions)',
        'Automates key tasks: balance and price updates, report generation, delivery tracking, table export',
        'Includes visualization and forecasting tools, useful for budget and purchase planning',
      ],
      challenges: [
        'Data distributed in various files and versions',
        'Repetitive processes that demanded hours or days',
        'Lack of clear tracking of material deliveries',
        'Difficulty foreseeing what merchandise would enter each month',
        'Information exported from SAP, but without a practical way to process or visualize it',
      ],
      achievements: [
        'Significant reduction in time spent on mechanical tasks',
        'Greater clarity in the status of purchases and deliveries',
        'Automatic processing of SAP data adapted to the team needs',
        'Better forecasting of materials and budgets',
        'Stable, scalable system used daily',
      ],
    },
    {
      name: 'APNetworkEnv',
      description:
        'Custom Gym environment with GNNs for wireless network optimization. Implements reinforcement learning algorithms to improve resource allocation.',
      detailedDescription:
        'APNetworkEnv is an advanced simulation environment that combines the OpenAI Gym framework with Graph Neural Networks (GNNs) to address complex optimization problems in wireless networks. The project enables training reinforcement learning agents that learn to optimally allocate resources in dynamic and heterogeneous network scenarios.',
      technologies: ['Python', 'PyTorch Geometric', 'OpenAI Gym', 'GNN'],
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/apnetworkenv',
      features: [
        'OpenAI Gym compatible interface for easy integration',
        'Network topology representation using graphs',
        'Support for DQN, PPO, and A3C algorithms',
        'Real-time performance metrics and visualization',
        'Configurable mobility and traffic scenarios'
      ],
      challenges: [
        'Design of scalable state and action spaces',
        'Training optimization with large graphs',
        'Balancing exploration and exploitation',
        'Validation with realistic network scenarios'
      ],
      achievements: [
        '25% improvement in throughput compared to traditional heuristics',
        '40% reduction in average latency',
        'Stable convergence in less than 1000 episodes',
        'Successful generalization to unseen topologies'
      ]
    },
    {
      name: 'Pitch Detection',
      description:
        'Implementation of GLogS and HPS algorithms for pitch detection in audio signals. Comparative analysis of accuracy and performance.',
      detailedDescription:
        'This project implements and compares two advanced pitch detection algorithms: GLogS (Generalized Logarithmic Spectrum) and HPS (Harmonic Product Spectrum). It includes an exhaustive analysis of their performance under different acoustic conditions, instrument types, and noise levels.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing'],
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/pitch-detection',
      features: [
        'Optimized implementation of GLogS and HPS',
        'Audio preprocessing with adaptive filters',
        'Robust fundamental detection in polyphonic signals',
        'Spectrum and harmonics visualization',
        'Evaluation using standard datasets (MIREX, NSynth)'
      ],
      challenges: [
        'Handling octave errors in noisy signals',
        'Computational optimization for real-time',
        'Discrimination between pitch and harmonic noise',
        'Parameter calibration for different instruments'
      ],
      achievements: [
        '97% accuracy in pitch detection for solo instruments',
        'Latency under 23ms in real-time processing',
        'Successful detection in ranges from 50Hz to 2000Hz',
        'Resistance to SNR down to -5dB'
      ]
    },
    {
      name: 'Data Quality & Integration',
      description:
        'Large dataset integration and cleaning project. Implementation of ETL pipelines and data quality validation.',
      detailedDescription:
        'Complete ETL (Extract, Transform, Load) system designed to integrate multiple heterogeneous data sources, with emphasis on quality validation and anomaly detection. Implements complex business rules and automated reconciliation processes.',
      technologies: ['Python', 'Pandas', 'SQL', 'Data Quality'],
      image:
        '/images/projects-thumbnails/CaDQM-thumbnail2.png',
      github: 'https://github.com/bruno-ottonelli/data-integration',
      features: [
        'Modular and scalable ETL pipeline',
        'Multi-level data quality validation',
        'Automatic statistical anomaly detection',
        'Reconciliation across multiple sources',
        'Quality reports and complete traceability'
      ],
      challenges: [
        'Handling inconsistencies between heterogeneous schemas',
        'Processing optimization for 100M+ row datasets',
        'Fuzzy logic duplicate detection',
        'Preserving referential integrity in transformations'
      ],
      achievements: [
        '85% reduction in production data errors',
        'Processing of 50M records in under 2 hours',
        'Automatic detection of 95% of known anomalies',
        'Saving 200+ hours/month in manual reconciliation'
      ]
    },
    {
      name: 'Event Camera Processing',
      description:
        'Event camera data processing (timestamp-x-y-polarity). Event analysis for motion detection and tracking.',
      detailedDescription:
        'Implementation of specialized computer vision algorithms for event cameras, which capture pixel-level brightness changes asynchronously. The project includes frame reconstruction techniques, moving object detection, and high-speed tracking.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
      image:
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/event-camera',
      features: [
        'Efficient parser for asynchronous event streams',
        'Frame reconstruction from events',
        'Real-time edge and contour detection',
        'High-speed object tracking',
        'Adaptive temporal noise filtering'
      ],
      challenges: [
        'Handling high-frequency asynchronous flows (>1M events/s)',
        'Coherent scene reconstruction from sparse events',
        'Detection threshold calibration',
        'Temporal integration without resolution loss'
      ],
      achievements: [
        'Successful tracking of objects at speeds >500 px/ms',
        'Processing latency <5ms per reconstructed frame',
        'Motion detection with 100µs resolution',
        '60% reduction in bandwidth consumption vs traditional cameras'
      ]
    },
    {
      name: 'Ambilight Raspberry Pi',
      description:
        'DIY Ambilight system using Raspberry Pi. Real-time LED synchronization with screen content.',
      detailedDescription:
        'Ambient lighting system that analyzes screen content in real-time and projects predominant colors onto RGB LEDs placed behind the monitor. Uses Raspberry Pi as the main controller and Arduino for LED strip management, achieving an immersive experience with imperceptible latency.',
      technologies: ['Python', 'Raspberry Pi', 'Arduino', 'LED Control'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/ambilight-pi',
      features: [
        'Screen capture via HDMI splitting',
        'Color analysis by configurable zones',
        'Optimized RPi-Arduino serial communication',
        'Transition smoothing with interpolation',
        'Web configuration for live adjustments'
      ],
      challenges: [
        'Minimizing total latency below 50ms',
        'Frame capture optimization without CPU impact',
        'Precise synchronization between analysis and LED updates',
        'Brightness and saturation balance for different content'
      ],
      achievements: [
        'Total latency of 35ms from capture to LED',
        '240 LEDs update at 60 FPS',
        'CPU consumption <15% on Raspberry Pi 4',
        'Immersive experience in gaming and multimedia'
      ]
    },
  ],
};

/* -------------------- COMPONENTE ---------------------- */
export function ProjectsSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const projects = projectsData[language];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-sm text-muted-foreground flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  {/* GitHub */}
                  <Button
                    variant="outline"
                    className="
                      cursor-pointer
                      w-full gap-2 group/button
                      hover:!border-primary
                      hover:text-primary
                      hover:!bg-primary/5
                      dark:hover:!bg-primary/10
                      transition-colors
                    "
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    {t.projects.viewOnGithub}
                  </Button>

                  {/* Ver más */}
                  <Button
                    variant="outline"
                    className="
                      cursor-pointer
                      w-full gap-2 group/button
                      hover:!border-primary
                      hover:text-primary
                      hover:!bg-primary/5
                      dark:hover:!bg-primary/10
                      transition-colors
                    "
                    onClick={() => setSelectedProject(project)}
                  >
                    <ArrowRight className="h-4 w-4" />
                    {t.projects.showMore}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* -------- BACKDROP (click para cerrar) -------- */}
      {selectedProject && (
        <div
          className="
            fixed inset-0 bg-black/40 backdrop-blur-sm
            transition-opacity duration-300
          "
          onClick={() => setSelectedProject(null)}
        />
      )}

      {/* -------- DRAWER LATERAL ---------- */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[700px] bg-background shadow-2xl border-l border-border
          transform transition-transform duration-300 ease-out
          z-50 overflow-y-auto
          ${selectedProject ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {selectedProject && (
          <div className="p-8">

            {/* Header con botón cerrar */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{selectedProject.name}</h2>
              <button
                className="text-muted-foreground hover:text-primary transition cursor-pointer text-2xl px-3"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>

            {/* Imagen destacada */}
            <div className="relative h-64 rounded-lg overflow-hidden mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Descripción breve (original) */}
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Divider */}
            <div className="border-t border-border my-6"></div>

            {/* Descripción Detallada */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-primary">📖</span>
                {t.projects.detailedDescription}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedProject.detailedDescription}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-6"></div>

            {/* Características Clave */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-primary">✨</span>
                  {t.projects.keyFeatures}
                </h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border my-6"></div>
              </div>
            )}

            {/* Desafíos Técnicos */}
            {selectedProject.challenges && selectedProject.challenges.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-primary">⚡</span>
                  {t.projects.technicalChallenges}
                </h3>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border my-6"></div>
              </div>
            )}

            {/* Logros & Resultados */}
            {selectedProject.achievements && selectedProject.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-primary">🎯</span>
                  {t.projects.achievements}
                </h3>
                <ul className="space-y-2">
                  {selectedProject.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border my-6"></div>
              </div>
            )}

            {/* Tecnologías */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">{t.projects.technologies}</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Botón GitHub */}
            <Button
              variant="default"
              className="w-full gap-2 cursor-pointer text-base py-6"
              onClick={() => window.open(selectedProject.github, '_blank')}
            >
              <Github className="h-5 w-5" />
              {t.projects.viewOnGithub}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
