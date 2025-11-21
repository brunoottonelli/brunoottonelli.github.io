
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

const coursesData = {
  es: [
    {
      name: 'Machine Learning',
      institution: 'Coursera / Deeplearning.ai',
      date: '2023',
      description: 'Curso completo sobre fundamentos de ML, redes neuronales, y deep learning.',
    },
    {
      name: 'Data Quality & Integration',
      institution: 'FING - UDELAR',
      date: '2023',
      description: 'Técnicas avanzadas para integración y calidad de datos en grandes datasets.',
    },
    {
      name: 'Digital Communications',
      institution: 'FING - UDELAR',
      date: '2022',
      description: 'Sistemas de comunicación digital, modulación, codificación y transmisión.',
    },
    {
      name: 'Graph Neural Networks',
      institution: 'Udemy',
      date: '2024',
      description: 'Introducción a GNNs y sus aplicaciones en redes y grafos.',
    },
    {
      name: 'Excel VBA Avanzado',
      institution: 'UTE',
      date: '2021',
      description: 'Programación avanzada en VBA para automatización y análisis de datos.',
    },
    {
      name: 'Señales y Comunicaciones',
      institution: 'FING - UDELAR',
      date: '2022',
      description: 'Procesamiento de señales, análisis de Fourier y sistemas de comunicación.',
    },
  ],
  en: [
    {
      name: 'Machine Learning',
      institution: 'Coursera / Deeplearning.ai',
      date: '2023',
      description: 'Complete course on ML fundamentals, neural networks, and deep learning.',
    },
    {
      name: 'Data Quality & Integration',
      institution: 'FING - UDELAR',
      date: '2023',
      description: 'Advanced techniques for data integration and quality in large datasets.',
    },
    {
      name: 'Digital Communications',
      institution: 'FING - UDELAR',
      date: '2022',
      description: 'Digital communication systems, modulation, coding, and transmission.',
    },
    {
      name: 'Graph Neural Networks',
      institution: 'Udemy',
      date: '2024',
      description: 'Introduction to GNNs and their applications in networks and graphs.',
    },
    {
      name: 'Advanced Excel VBA',
      institution: 'UTE',
      date: '2021',
      description: 'Advanced VBA programming for automation and data analysis.',
    },
    {
      name: 'Signals and Communications',
      institution: 'FING - UDELAR',
      date: '2022',
      description: 'Signal processing, Fourier analysis, and communication systems.',
    },
  ],
};

export function CoursesSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const courses = coursesData[language];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.courses.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1">{course.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {course.institution} • {course.date}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {expandedIndex === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              {expandedIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
