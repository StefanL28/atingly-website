import { translations, defaultLang, type Lang, type TranslationKey } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] ?? translations[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, anchor?: string): string {
  const base = lang === 'en' ? '/en/' : '/';
  return anchor ? `${base}${anchor}` : base;
}

export function getSwitchLangPath(currentLang: Lang): string {
  return currentLang === 'fr' ? '/en/' : '/';
}

export function getSwitchLangLabel(currentLang: Lang): string {
  return currentLang === 'fr' ? 'EN' : 'FR';
}
