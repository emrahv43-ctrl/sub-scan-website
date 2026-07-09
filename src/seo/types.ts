import type { Lang } from '../i18n/types';

export type SeoPageId = 'tork-gpr' | 'sgy-analiz' | 'gpr-program' | 'faq';

export interface SeoSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface SeoPageContent {
  id: SeoPageId;
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  sections: SeoSection[];
  faq?: SeoFaqItem[];
  cta: {
    title: string;
    subtitle: string;
  };
  footerLabel: string;
}

export type SeoPageRegistry = Record<SeoPageId, Record<Lang, SeoPageContent>>;
