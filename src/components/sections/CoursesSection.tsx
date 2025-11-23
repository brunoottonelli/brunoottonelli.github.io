
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
      name: 'Neural Networks and Deep Learning',
      institution: 'Coursera / Deep Learning Specialization',
      date: '2023',
      description: 'Curso 1 de la especialización en Deep Learning: fundamentos de redes neuronales y aprendizaje profundo.',
    },
    {
      name: 'Git y GitHub',
      institution: 'Mouradev.pro',
      date: '2025',
      description: 'Control de versiones con Git y colaboración en GitHub, instructora: Bruno Ottonelli.',
    },
    {
      name: 'Power BI',
      institution: 'EMPOWERDATA LATAM',
      date: '2024',
      description: 'Análisis y visualización de datos con Microsoft Power BI.',
    },
    {
      name: 'Pandas',
      institution: 'Kaggle',
      date: '2024',
      description: 'Manipulación y análisis de datos con la librería Pandas de Python.',
    },
    {
      name: 'Inglés PET',
      institution: 'Cambridge',
      date: '2023',
      description: 'Preliminary English Test - Certificación de nivel intermedio de inglés.',
    },
    {
      name: 'Productividad Personal',
      institution: 'Google Activate',
      date: '2024',
      description: 'Técnicas y herramientas para mejorar la productividad personal y profesional.',
    },
    {
      name: 'Asistente Comercial',
      institution: 'Forge',
      date: '2023',
      description: 'Formación en técnicas de ventas, atención al cliente y gestión comercial.',
    },
  ],
  en: [
    {
      name: 'Neural Networks and Deep Learning',
      institution: 'Coursera / Deep Learning Specialization',
      date: '2023',
      description: 'Course 1 of Deep Learning Specialization: fundamentals of neural networks and deep learning.',
    },
    {
      name: 'Git & GitHub',
      institution: 'Mouradev.pro',
      date: '2025',
      description: 'Version control with Git and collaboration on GitHub, instructor: Bruno Ottonelli.',
    },
    {
      name: 'Power BI',
      institution: 'EMPOWERDATA LATAM',
      date: '2024',
      description: 'Data analysis and visualization with Microsoft Power BI.',
    },
    {
      name: 'Pandas',
      institution: 'Kaggle',
      date: '2024',
      description: 'Data manipulation and analysis with Python Pandas library.',
    },
    {
      name: 'English PET',
      institution: 'Cambridge',
      date: '2023',
      description: 'Preliminary English Test - Intermediate level English certification.',
    },
    {
      name: 'Personal Productivity',
      institution: 'Google Activate',
      date: '2024',
      description: 'Techniques and tools to improve personal and professional productivity.',
    },
    {
      name: 'Sales Assistant',
      institution: 'Forge',
      date: '2023',
      description: 'Training in sales techniques, customer service, and commercial management.',
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
              className="border-2 hover:shadow-lg transition-all duration-300 cursor-pointer"  
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} 
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
          
                {/* Botón actualizado */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();  
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }}
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
