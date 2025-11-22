'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// Inicializar EmailJS UNA VEZ
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export function ContactSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const [formData, setFormData] = useState({
    name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success(t.contact.form.success);

      setFormData({
        name: '',
        from_email: '',
        subject: '',
        message: '',
      });

    } catch (error: any) {
      console.error('EmailJS error:', error);
      toast.error(t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'brunoottonelli@gmail.com',
      href: 'mailto:brunoottonelli@gmail.com',
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

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-foreground">
            {t.contact.title}
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-12">
            {t.contact.description}
          </p>

          {/* Métodos de contacto */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {contactMethods.map((method) => (
              <Card
                key={method.label}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => window.open(method.href, '_blank')}
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <method.icon
                    className={`h-8 w-8 ${method.color} group-hover:scale-110 transition-transform group-hover:!text-primary`}
                  />
                  <div className="text-center">
                    <p className="font-semibold text-sm mb-1 text-foreground">
                      {method.label}
                    </p>
                    <p className="text-xs text-foreground/70">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulario */}
          <Card className="bg-background/80 backdrop-blur-sm border-2">
            <CardContent className="p-6">

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Nombre */}
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder={language === 'es' ? 'Nombre*' : 'Name*'}
                />

                {/* Email */}
                <input
                  type="email"
                  required
                  value={formData.from_email}
                  onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder={language === 'es' ? 'Email*' : 'Email*'}
                />

                {/* Asunto */}
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground"
                  placeholder={language === 'es' ? 'Asunto*' : 'Subject*'}
                />

                {/* Mensaje */}
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground resize-none"
                  placeholder={language === 'es' ? 'Escribe tu mensaje aquí...*' : 'Write your message here...*'}
                />

                {/* Botón */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 cursor-pointer"
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
