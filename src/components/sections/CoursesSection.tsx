'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
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
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/4ALXRCDTASD8',
      thumbnail: '/images/certificates/Certificate_Deep_Learning_Specialization_1.webp',
    },
    {
      name: 'Git y GitHub',
      institution: 'Mouradev.pro',
      date: '2025',
      description: 'Control de versiones con Git y colaboración en GitHub.',
      certificateUrl: 'https://campus.mouredev.pro/certificates/uk6huzxduw',
      thumbnail: '/images/certificates/Certificate_Git_y_GitHub.webp',
    },
    {
      name: 'Power BI',
      institution: 'EMPOWERDATA LATAM',
      date: '2024',
      description: 'Análisis y visualización de datos con Microsoft Power BI.',
      certificateUrl: '/documents/PowerBI-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_PowerBI.webp',
    },
    {
      name: 'Pandas',
      institution: 'Kaggle',
      date: '2024',
      description: 'Manipulación y análisis de datos con la librería Pandas de Python.',
      certificateUrl: 'https://www.kaggle.com/learn/certification/brunoottonelli/pandas',
      thumbnail: '/images/certificates/Certificate_Pandas.webp',
    },
    {
      name: 'Inglés PET',
      institution: 'Cambridge',
      date: '2023',
      description: 'Preliminary English Test - Certificación de nivel intermedio de inglés.',
      certificateUrl: '/documents/inglesPET-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_Inglés_PET.webp',
    },
    {
      name: 'Productividad Personal',
      institution: 'Google Activate',
      date: '2024',
      description: 'Técnicas y herramientas para mejorar la productividad personal y profesional.',
      certificateUrl: '/documents/productividad_personal-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_Productividad_Personal.webp',
    },
    {
      name: 'Asistente Comercial',
      institution: 'Forge',
      date: '2023',
      description: 'Formación en técnicas de ventas, atención al cliente y gestión comercial.',
      certificateUrl: '/documents/asistente_comercial-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_Asistente_Comercial.webp',
    },
  ],
  en: [
    {
      name: 'Neural Networks and Deep Learning',
      institution: 'Coursera / Deep Learning Specialization',
      date: '2023',
      description: 'Course 1 of Deep Learning Specialization: fundamentals of neural networks and deep learning.',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/4ALXRCDTASD8',
      thumbnail: '/images/certificates/Certificate_Deep_Learning_Specialization_1.webp',
    },
    {
      name: 'Git & GitHub',
      institution: 'Mouradev.pro',
      date: '2025',
      description: 'Version control with Git and collaboration on GitHub, instructor: Bruno Ottonelli.',
      certificateUrl: 'https://campus.mouredev.pro/certificates/uk6huzxduw',
      thumbnail: '/images/certificates/Certificate_Git_y_GitHub.webp',
    },
    {
      name: 'Power BI',
      institution: 'EMPOWERDATA LATAM',
      date: '2024',
      description: 'Data analysis and visualization with Microsoft Power BI.',
      certificateUrl: '/documents/PowerBI-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_PowerBI.webp',
    },
    {
      name: 'Pandas',
      institution: 'Kaggle',
      date: '2024',
      description: 'Data manipulation and analysis with Python Pandas library.',
      certificateUrl: 'https://www.kaggle.com/learn/certification/brunoottonelli/pandas',
      thumbnail: '/images/certificates/Certificate_Pandas.webp',
    },
    {
      name: 'English PET',
      institution: 'Cambridge',
      date: '2023',
      description: 'Preliminary English Test - Intermediate level English certification.',
      certificateUrl: '/documents/inglesPET-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_Inglés_PET.webp',
    },
    {
      name: 'Personal Productivity',
      institution: 'Google Activate',
      date: '2024',
      description: 'Techniques and tools to improve personal and professional productivity.',
      certificateUrl: '/documents/productividad_personal-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_Productividad_Personal.webp',
    },
    {
      name: 'Sales Assistant',
      institution: 'Forge',
      date: '2023',
      description: 'Training in sales techniques, customer service, and commercial management.',
      certificateUrl: '/documents/asistente_comercial-certificate.pdf',
      thumbnail: '/images/certificates/Certificate_Asistente_Comercial.webp',
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

      {/* 🔥 PRECARGA INVISIBLE (todas las miniaturas se descargan al inicio) */}
      <div className="hidden">
        {courses.map((course, i) => (
          <Image
            key={i}
            src={course.thumbnail}
            alt=""
            width={10}
            height={10}
            priority
          />
        ))}
      </div>

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
                  <div className="flex gap-6 items-start">

                    {/* Descripción */}
                    <p className="text-muted-foreground flex-1">{course.description}</p>

                    {/* Imagen del certificado */}
                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group flex-shrink-0 w-48 aspect-[3/2] rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={course.thumbnail}
                        alt={`Certificado de ${course.name}`}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />

                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-primary">
                          <ExternalLink className="h-6 w-6" />
                          <span className="text-xs font-medium">
                            {language === 'es' ? 'Ver certificado' : 'View certificate'}
                          </span>
                        </div>
                      </div>
                    </a>

                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
