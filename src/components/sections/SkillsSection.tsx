'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { useTheme } from 'next-themes';

// Tipos
type SkillCategory = "languages" | "ml" | "data" | "tools";

interface Skill {
  name: string;
  icon: string;
  iconDark?: string;   // opcional para iconos blancos
}

const skillsData: Record<SkillCategory, Skill[]> = {
  languages: [
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'C', icon: '/icons/C_Programming_Language.svg' },
    { name: 'SQL', icon: '/icons/database-black.svg', iconDark: '/icons/database-white.svg' },
    { name: 'Visual Basic', icon: '/icons/visualbasic.svg' },
  ],
  ml: [
    { name: 'TensorFlow', icon: '/icons/tensorflow.svg' },
    { name: 'Keras', icon: '/icons/keras.svg' },
    { name: 'PyTorch Geometric', icon: '/icons/PyTorch_Geometric.svg' },
    { name: 'Scikit-learn', icon: '/icons/scikitlearn.svg', iconDark: '/icons/scikitlearn-white.svg' },
    { name: 'Gymnasium', icon: '/icons/gymnasium_black.svg', iconDark: '/icons/gymnasium_white.svg' },
  ],
  data: [
    { name: 'Pandas', icon: '/icons/pandas.svg' },
    { name: 'NumPy', icon: '/icons/numpy.svg' },
    { name: 'Matplotlib', icon: '/icons/matplotlib.svg' },
    { name: 'Seaborn', icon: '/icons/seaborn.svg' },
  ],
  tools: [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg', iconDark: '/icons/github-white.svg' },
    { name: 'OpenCV', icon: '/icons/opencv.svg' },
  ],
};

export function SkillsSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { theme, resolvedTheme } = useTheme();

  // Estado para controlar si el componente ya se montó en el cliente
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories: { key: SkillCategory; title: string }[] = [
    { key: 'languages', title: t.skills.languages || 'Lenguajes de Programación' },
    { key: 'ml', title: t.skills.mlLibraries },
    { key: 'data', title: t.skills.dataTools },
    { key: 'tools', title: t.skills.other },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t.skills.title}
          </h2>
        </div>

        {/* Cambio aquí: grid-cols-1 en móvil, 2 en tablet, 4 en desktop */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Card
              key={cat.key}
              className="border-2 hover:shadow-xl transition-all duration-300 rounded-2xl"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  {cat.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="grid grid-cols-2 gap-6 p-6">
                {skillsData[cat.key].map((skill) => {
                  // Usar el icono correcto solo después de que el componente se haya montado
                  // Usamos resolvedTheme para manejar correctamente el modo "system"
                  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");
                  const iconToUse = isDark && skill.iconDark
                    ? skill.iconDark
                    : skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 group"
                    >
                      <img
                        src={iconToUse}
                        alt={skill.name}
                        className="w-10 h-10 group-hover:scale-110 transition-all duration-300"
                        style={{
                          filter: 'drop-shadow(0 0 0 transparent)', // Default state
                        }}
                      />
                      {/* Estilo inline para el hover glow para asegurar que funcione con la variable CSS */}
                      <style jsx>{`
                        .group:hover img {
                          filter: drop-shadow(0 0 8px var(--primary));
                        }
                      `}</style>
                      <p className="text-sm text-center font-medium">{skill.name}</p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}