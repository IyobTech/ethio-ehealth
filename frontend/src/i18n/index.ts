import { en } from './locales/en';
import { am } from './locales/am';
import { om } from './locales/om';

export type Language = 'en' | 'am' | 'om';

export const translations = {
  en,
  am,
  om,
};

export const languages = {
  en: { name: 'English', flag: '🇬🇧' },
  am: { name: 'አማርኛ', flag: '🇪🇹' },
  om: { name: 'Afaan Oromo', flag: '🇪🇹' },
};

export const useTranslation = (lang: Language = 'en') => {
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value: any = translations[lang];
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return value || key;
    },
  };
};
