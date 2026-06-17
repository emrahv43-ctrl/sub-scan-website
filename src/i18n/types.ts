export type Lang = 'tr' | 'en' | 'ar';

export interface Translations {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  locale: string;
  path: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  brand: {
    subtitle: string;
  };
  nav: {
    features: string;
    desktop: string;
    android: string;
    workflow: string;
    formats: string;
    contact: string;
    demo: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    ctaDemo: string;
    ctaExplore: string;
    statPlatform: string;
    statFormats: string;
    statFilters: string;
  };
  features: {
    section: string;
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  desktop: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    screenshot: string;
    screenshotAlt: string;
  };
  android: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    screenshot: string;
    screenshotAlt: string;
  };
  workflow: {
    section: string;
    title: string;
    subtitle: string;
    comingSoon: {
      badge: string;
      text: string;
    };
    groups: {
      id: string;
      icon: string;
      title: string;
      items: { title: string; description: string }[];
    }[];
    audience: {
      title: string;
      description: string;
    };
  };
  formats: {
    section: string;
    title: string;
    subtitle: string;
    items: { ext: string; desc: string }[];
  };
  contact: {
    section: string;
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    waMessage: string;
  };
  footer: {
    description: string;
    products: string;
    contact: string;
    rights: string;
  };
  langNames: Record<Lang, string>;
}

export const WHATSAPP = '905050859438';
export const EMAIL = 'info@sub-scan.com';
export const SITE_URL = 'https://sub-scan.com';

export const languages: Lang[] = ['tr', 'en', 'ar'];

export function langPath(lang: Lang): string {
  if (lang === 'tr') return '/';
  return `/${lang}/`;
}

export function switchPath(current: Lang, target: Lang): string {
  return langPath(target);
}
