'use client';

import { Download, Mail, Linkedin, Github, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";

export function HeroSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(true);

  // imágenes
  const [currentImage, setCurrentImage] = useState("/images/profile-day.png");
  const [prevImage, setPrevImage] = useState("/images/profile-day.png");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detectar scroll para ocultar el botón
  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario scrollea más de 50px, ocultar el botón
      if (window.scrollY > 50) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⭐ Crossfade con blur
  useEffect(() => {
    if (!mounted) return;

    const next = theme === "light" 
      ? "/images/profile-day.png" 
      : "/images/profile.webp";

    if (next === currentImage) return;

    // activar transición
    setPrevImage(currentImage);
    setCurrentImage(next);
    setTransitioning(true);

    const timeout = setTimeout(() => {
      setTransitioning(false);
    }, 400); // duración del crossfade

    return () => clearTimeout(timeout);
  }, [theme, mounted, currentImage]);

  const handleDownloadCV = () => {
    const cvUrl = language === 'es'
      ? '/documents/cv-bruno-ottonelli-es.pdf'
      : '/documents/cv-bruno-ottonelli-en.pdf';

    window.open(cvUrl, '_blank');
  };

  const scrollToAbout = () => {
    const section = document.getElementById('about');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — unchanged */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">{t.hero.greeting1}</span>
                {t.hero.name}
                {t.hero.greeting2}
              </h1>

              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {t.hero.title}
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button onClick={handleDownloadCV} size="lg" className="gap-2 cursor-pointer">
                <Download className="h-4 w-4" />
                {t.hero.downloadCV}
              </Button>

              <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 px-4 py-2 text-sm font-medium border-emerald-500/20">
                ✓ {t.hero.openToWork}
              </Badge>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button variant="outline" size="icon" className="rounded-full hover:text-primary cursor-pointer"
                onClick={() => window.open('https://linkedin.com/in/bruno-ottonelli', '_blank')}>
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button variant="outline" size="icon" className="rounded-full hover:text-primary cursor-pointer"
                onClick={() => window.open('https://github.com/brunoottonelli', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>

              <Button variant="outline" size="icon" className="rounded-full hover:text-primary cursor-pointer"
                onClick={() => window.location.href = 'mailto:bruno.ottonelli@example.com'}>
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>


          {/* RIGHT — FOTO con crossfade */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">

              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-primary/20 rounded-3xl transform rotate-3 scale-100 shadow-xl"></div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-border shadow-2xl">

                {/* Imagen anterior (fade-out + blur-out) */}
                <img
                  src={prevImage}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-500
                    ${transitioning ? "opacity-0 blur-sm" : "opacity-100 blur-0"}
                  `}
                />

                {/* Imagen nueva (fade-in + blur-in) */}
                <img
                  src={currentImage}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-500
                    ${transitioning ? "opacity-100 blur-0" : "opacity-0 blur-sm"}
                  `}
                />

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll down arrow - se oculta al hacer scroll */}
      <button
        onClick={scrollToAbout}
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2 
          flex flex-col items-center gap-2 
          text-muted-foreground hover:text-primary 
          transition-all duration-300 group cursor-pointer
          ${showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          {language === 'es' ? 'Más sobre mi' : 'More about me'}
        </span>
        
        <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
    </section>
  );
}