import type { Lang } from '../i18n/types';
import { langPath, SITE_URL } from '../i18n/types';
import type { SeoPageId, SeoPageContent } from './types';
import { trSeoPages } from './content/tr';
import { enSeoPages } from './content/en';
import { arSeoPages } from './content/ar';

export const SEO_PAGE_IDS: SeoPageId[] = ['tork-gpr', 'sgy-analiz', 'gpr-program', 'faq'];

const pagesByLang: Record<Lang, Record<SeoPageId, SeoPageContent>> = {
  tr: trSeoPages,
  en: enSeoPages,
  ar: arSeoPages,
};

export function getSeoPage(pageId: SeoPageId, lang: Lang): SeoPageContent {
  return pagesByLang[lang][pageId];
}

export function getSeoPageUrl(pageId: SeoPageId, lang: Lang): string {
  const slug = pagesByLang[lang][pageId].slug;
  const base = langPath(lang);
  return base === '/' ? `/${slug}` : `${base}${slug}`;
}

export function getSeoPageFullUrl(pageId: SeoPageId, lang: Lang): string {
  return SITE_URL + getSeoPageUrl(pageId, lang);
}

export function getSeoAlternates(pageId: SeoPageId): { lang: string; href: string }[] {
  const langs: Lang[] = ['tr', 'en', 'ar'];
  const alternates = langs.map(lang => ({
    lang,
    href: getSeoPageFullUrl(pageId, lang),
  }));
  alternates.push({ lang: 'x-default', href: getSeoPageFullUrl(pageId, 'tr') });
  return alternates;
}

export function getSeoFooterLinks(lang: Lang): { href: string; label: string }[] {
  const seoLinks = SEO_PAGE_IDS.map(id => ({
    href: getSeoPageUrl(id, lang),
    label: pagesByLang[lang][id].footerLabel,
  }));

  const extraLinksByLang: Record<Lang, { href: string; label: string }[]> = {
    tr: [
      { href: '/gpr-radargram-ornekleri', label: 'Radargram Galerisi' },
      { href: '/subscan-brosur', label: 'SubScan Broşürü' },
    ],
    en: [
      { href: '/en/gpr-radargram-gallery', label: 'Radargram Gallery' },
      { href: '/en/subscan-brochure', label: 'SubScan Brochure' },
    ],
    ar: [
      { href: '/ar/gpr-radargram-gallery', label: 'معرض الرادارغرام' },
      { href: '/ar/subscan-brochure', label: 'كتيب SubScan' },
    ],
  };

  return [...seoLinks, ...extraLinksByLang[lang]];
}

export * from './types';
