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
    partners: string;
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
  partners: {
    section: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    visitSite: string;
    buy: string;
    farmetUrl: string;
    items: {
      id: string;
      image: string;
      imageAlt: string;
      name: string;
      mhz: string;
      tagline: string;
      description: string;
      glow: 'orange' | 'green';
      waMessage: string;
    }[];
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

export const WHATSAPP = '905552140322';
export const PHONE_DISPLAY = '+90 555 214 03 22';
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
