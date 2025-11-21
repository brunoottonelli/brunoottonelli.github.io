
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export function AboutSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.about.title}</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=800&fit=crop"
                    alt="FING - Universidad de la República"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.about.description}
                </p>
                <div className="pt-4 space-y-2">
                  <p className="text-lg font-bold text-foreground">
                    {t.about.university}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'es' 
                      ? 'Facultad de Ingeniería - Universidad de la República' 
                      : 'Faculty of Engineering - University of the Republic'}
                  </p>
                </div>
              </div>

              {/* Optional: Add some highlights or stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-background border-2 border-border">
                  <p className="text-2xl font-bold text-primary">ML & AI</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === 'es' ? 'Especialización' : 'Specialization'}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background border-2 border-border">
                  <p className="text-2xl font-bold text-primary">GNNs</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === 'es' ? 'Redes Neuronales' : 'Neural Networks'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
