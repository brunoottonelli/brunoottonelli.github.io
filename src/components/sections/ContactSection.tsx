
'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - reemplaza con tus credenciales
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      // Inicializar EmailJS con la clave pública
      emailjs.init(PUBLIC_KEY);
      
      // Enviar el email usando EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'brunoottonelli@gmail.com',
      });

      toast.success(t.contact.form.success);
      setFormData({ email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS error:', error);
      toast.error(error.text || t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <Card className="bg-background/80 backdrop-blur-sm border-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={language === 'es' ? 'Email*' : 'Email*'}
                />
                
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={language === 'es' ? 'Asunto*' : 'Subject*'}
                />
                
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder={language === 'es' ? 'Escribe tu mensaje aquí...*' : 'Write your message here...*'}
                />
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
