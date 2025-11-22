
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={`cursor-pointer h-8 px-3 text-xs font-medium transition-colors ${language !== 'es' ? 'hover:text-primary' : ''}`}
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`cursor-pointer h-8 px-3 text-xs font-medium transition-colors ${language !== 'en' ? 'hover:text-primary' : ''}`}
      >
        EN
      </Button>
    </div>
  );
}
