
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

const skillsData = {
  languages: [
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '⚡' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'MATLAB', icon: '📊' },
  ],
  mlLibraries: [
    { name: 'PyTorch', icon: '🔥' },
    { name: 'PyTorch Geometric', icon: '🕸️' },
    { name: 'Scikit-Learn', icon: '🤖' },
  ],
  dataTools: [
    { name: 'NumPy', icon: '🔢' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Matplotlib', icon: '📈' },
    { name: 'Git', icon: '📦' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Excel / VBA', icon: '📑' },
  ],
  other: [
    { name: 'ESP32 / Arduino', icon: '🔌' },
    { name: 'Raspberry Pi', icon: '🍓' },
    { name: 'LaTeX', icon: '📝' },
  ],
};

export function SkillsSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const categories = [
    { key: 'languages', title: t.skills.languages, skills: skillsData.languages },
    { key: 'mlLibraries', title: t.skills.mlLibraries, skills: skillsData.mlLibraries },
    { key: 'dataTools', title: t.skills.dataTools, skills: skillsData.dataTools },
    { key: 'other', title: t.skills.other, skills: skillsData.other },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.skills.title}</h2>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.key}>
              <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="group hover:shadow-lg hover:scale-105 transition-all duration-300 /*cursor-pointer*/ border-2"
                  >
                    <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
                      <span className="text-4xl group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <p className="text-sm font-medium text-center">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
