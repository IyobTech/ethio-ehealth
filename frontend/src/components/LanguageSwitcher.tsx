import { useLanguageStore } from '@/store';
import { languages } from '@/i18n';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex gap-2">
      {Object.entries(languages).map(([lang, { name, flag }]) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as any)}
          className={`px-3 py-2 rounded-lg transition ${
            language === lang
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
          title={name}
        >
          {flag} {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
