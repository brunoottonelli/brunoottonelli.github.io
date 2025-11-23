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
  technologies: string[];
  image: string;
  github: string;
}

/* --------------------- DATA -------------------------- */
const projectsData: Record<'es' | 'en', Project[]> = {
  es: [
    {
      name: 'APNetworkEnv',
      description:
        'Entorno Gym personalizado con GNNs para optimización de redes inalámbricas. Implementa algoritmos de aprendizaje por refuerzo para mejorar la asignación de recursos.',
      technologies: ['Python', 'PyTorch Geometric', 'OpenAI Gym', 'GNN'],
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/apnetworkenv',
    },
    {
      name: 'Pitch Detection',
      description:
        'Implementación de algoritmos GLogS y HPS para detección de pitch en señales de audio. Análisis comparativo de precisión y rendimiento.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing'],
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/pitch-detection',
    },
    {
      name: 'Data Quality & Integration',
      description:
        'Proyecto de integración y limpieza de grandes datasets. Implementación de pipelines ETL y validación de calidad de datos.',
      technologies: ['Python', 'Pandas', 'SQL', 'Data Quality'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/data-integration',
    },
    {
      name: 'Event Camera Processing',
      description:
        'Procesamiento de datos de event cameras (timestamp-x-y-polarity). Análisis de eventos para detección de movimiento y tracking.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
      image:
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/event-camera',
    },
    {
      name: 'Ambilight Raspberry Pi',
      description:
        'Sistema Ambilight DIY usando Raspberry Pi. Sincronización de LEDs con contenido de pantalla en tiempo real.',
      technologies: ['Python', 'Raspberry Pi', 'Arduino', 'LED Control'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/ambilight-pi',
    },
  ],
  en: [
    {
      name: 'APNetworkEnv',
      description:
        'Custom Gym environment with GNNs for wireless network optimization. Implements reinforcement learning algorithms to improve resource allocation.',
      technologies: ['Python', 'PyTorch Geometric', 'OpenAI Gym', 'GNN'],
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/apnetworkenv',
    },
    {
      name: 'Pitch Detection',
      description:
        'Implementation of GLogS and HPS algorithms for pitch detection in audio signals. Comparative analysis of accuracy and performance.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing'],
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/pitch-detection',
    },
    {
      name: 'Data Quality & Integration',
      description:
        'Large dataset integration and cleaning project. Implementation of ETL pipelines and data quality validation.',
      technologies: ['Python', 'Pandas', 'SQL', 'Data Quality'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/data-integration',
    },
    {
      name: 'Event Camera Processing',
      description:
        'Event camera data processing (timestamp-x-y-polarity). Event analysis for motion detection and tracking.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
      image:
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/event-camera',
    },
    {
      name: 'Ambilight Raspberry Pi',
      description:
        'DIY Ambilight system using Raspberry Pi. Real-time LED synchronization with screen content.',
      technologies: ['Python', 'Raspberry Pi', 'Arduino', 'LED Control'],
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/ambilight-pi',
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
          fixed top-0 right-0 h-full w-[420px] bg-background shadow-2xl border-l border-border
          transform transition-transform duration-300 ease-out
          z-50
          ${selectedProject ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {selectedProject && (
          <div className="p-6 overflow-y-auto h-full">

            {/* Botón cerrar */}
            <button
              className="mb-4 text-sm text-muted-foreground hover:text-primary transition cursor-pointer"
              onClick={() => setSelectedProject(null)}
            >
              ✕ Cerrar
            </button>

            <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
            <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg w-full mb-4"
            />

            <h3 className="font-semibold mb-2">Tecnologías</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-full gap-2 cursor-pointer"
              onClick={() => window.open(selectedProject.github, '_blank')}
            >
              <Github className="h-4 w-4" />
              {t.projects.viewOnGithub}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
