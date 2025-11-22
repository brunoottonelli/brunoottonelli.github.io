
'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

const projectsData = {
  es: [
    {
      name: 'APNetworkEnv',
      description: 'Entorno Gym personalizado con GNNs para optimización de redes inalámbricas. Implementa algoritmos de aprendizaje por refuerzo para mejorar la asignación de recursos.',
      technologies: ['Python', 'PyTorch Geometric', 'OpenAI Gym', 'GNN'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/apnetworkenv',
    },
    {
      name: 'Pitch Detection',
      description: 'Implementación de algoritmos GLogS y HPS para detección de pitch en señales de audio. Análisis comparativo de precisión y rendimiento.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing'],
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/pitch-detection',
    },
    {
      name: 'Data Quality & Integration',
      description: 'Proyecto de integración y limpieza de grandes datasets. Implementación de pipelines ETL y validación de calidad de datos.',
      technologies: ['Python', 'Pandas', 'SQL', 'Data Quality'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/data-integration',
    },
    {
      name: 'Event Camera Processing',
      description: 'Procesamiento de datos de event cameras (timestamp-x-y-polarity). Análisis de eventos para detección de movimiento y tracking.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/event-camera',
    },
    {
      name: 'Ambilight Raspberry Pi',
      description: 'Sistema Ambilight DIY usando Raspberry Pi. Sincronización de LEDs con contenido de pantalla en tiempo real.',
      technologies: ['Python', 'Raspberry Pi', 'Arduino', 'LED Control'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/ambilight-pi',
    },
  ],
  en: [
    {
      name: 'APNetworkEnv',
      description: 'Custom Gym environment with GNNs for wireless network optimization. Implements reinforcement learning algorithms to improve resource allocation.',
      technologies: ['Python', 'PyTorch Geometric', 'OpenAI Gym', 'GNN'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/apnetworkenv',
    },
    {
      name: 'Pitch Detection',
      description: 'Implementation of GLogS and HPS algorithms for pitch detection in audio signals. Comparative analysis of accuracy and performance.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing'],
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/pitch-detection',
    },
    {
      name: 'Data Quality & Integration',
      description: 'Large dataset integration and cleaning project. Implementation of ETL pipelines and data quality validation.',
      technologies: ['Python', 'Pandas', 'SQL', 'Data Quality'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/data-integration',
    },
    {
      name: 'Event Camera Processing',
      description: 'Event camera data processing (timestamp-x-y-polarity). Event analysis for motion detection and tracking.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/event-camera',
    },
    {
      name: 'Ambilight Raspberry Pi',
      description: 'DIY Ambilight system using Raspberry Pi. Real-time LED synchronization with screen content.',
      technologies: ['Python', 'Raspberry Pi', 'Arduino', 'LED Control'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      github: 'https://github.com/bruno-ottonelli/ambilight-pi',
    },
  ],
};

export function ProjectsSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const projects = projectsData[language];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

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
                
                {/* GitHub button */}
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
                  <Github className="h-4 w-4 transition-colors group-hover/button:text-primary" />
                  <span className="transition-colors group-hover/button:text-primary">
                    {t.projects.viewOnGithub}
                  </span>
                </Button>

                {/* Show more button — EXACTAMENTE igual */}
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
                  onClick={() => console.log('Show more clicked:', project.name)}
                >
                  {/* Podés agregar icono si querés: <ExternalLink ... /> */}
                  <span className="transition-colors group-hover/button:text-primary">
                    {t.projects.showMore}
                  </span>
                </Button>


                {/*<Button
                  variant="outline"
                  onClick={() => window.open(project.github, "_blank")}
                  className="
                    w-full gap-2 
                    group/button 
                    border-border 
                    hover:border-primary 
                    hover:bg-primary/10 
                    transition-all 
                    duration-300 
                    rounded-xl
                  "
                >
                  <Github
                    className="
                      h-4 w-4 
                      transition-transform 
                      duration-300
                      group-hover/button:translate-x-1 
                      group-hover/button:text-primary
                    "
                  />

                  <span
                    className="
                      transition-colors 
                      duration-300
                      group-hover/button:text-primary
                    "
                  >
                    {t.projects.viewOnGithub}
                  </span>

                  <ExternalLink
                    className="
                      ml-auto h-4 w-4 opacity-0 
                      transition-all duration-300 
                      group-hover/button:opacity-100 
                      group-hover/button:translate-x-1
                    "
                  />
                </Button>*/}



              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
