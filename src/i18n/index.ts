import type { Lang, Translations } from './types';
import tr from './tr';
import en from './en';
import ar from './ar';

const translations: Record<Lang, Translations> = { tr, en, ar };

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

export { tr, en, ar };
export * from './types';
