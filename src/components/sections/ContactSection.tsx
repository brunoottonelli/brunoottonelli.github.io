
'use client';

import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export function ContactSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'brunoottonelli@gmail.com',
      href: 'mailto:brunoottonelli@example.com',
      color: 'text-blue-500',
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: 'bruno-ottonelli',
      href: 'https://linkedin.com/in/bruno-ottonelli',
      color: 'text-blue-600',
    },
    {
      icon: Github,
      label: t.contact.github,
      value: 'brunoottonelli',
      href: 'https://github.com/brunoottonelli',
      color: 'text-gray-700 dark:text-gray-300',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-foreground">{t.contact.title}</h2>
          <p className="text-lg text-primary-foreground/90 mb-12">
            {t.contact.description}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {contactMethods.map((method) => (
              <Card
                key={method.label}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => window.open(method.href, '_blank')}
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <method.icon className={`h-8 w-8 ${method.color} group-hover:scale-110 transition-transform group-hover:text-primary`} />
                  <div className="text-center">
                    <p className="font-semibold text-sm mb-1 text-foreground">{method.label}</p>
                    <p className="text-xs text-foreground/70">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.location.href = 'mailto:brunoottonelli@gmail.com'}
            >
              <Send className="h-4 w-4" />
              {t.contact.email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
