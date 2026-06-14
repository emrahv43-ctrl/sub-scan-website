import type { Translations } from './types';

const en: Translations = {
  lang: 'en',
  dir: 'ltr',
  locale: 'en_US',
  path: '/en/',
  meta: {
    title: 'SubScan — GPR Analysis Software',
    description:
      'SubScan — Professional Android and desktop GPR / SGY / DZT analysis software. Process, visualize and analyze ground penetrating radar data.',
    keywords:
      'GPR, ground penetrating radar, SGY, DZT, SEGY, radargram, SubScan, GroundX, geophysics, archaeology, utility locating',
  },
  brand: { subtitle: 'GPR ANALYSIS' },
  nav: {
    features: 'Features',
    desktop: 'Desktop',
    android: 'Android',
    formats: 'Formats',
    contact: 'Contact',
    demo: 'Buy Now',
  },
  hero: {
    badge: 'GPR / SGY / DZT ANALYSIS',
    title1: 'Analyze What',
    title2: 'Lies Beneath',
    title3: 'Professionally',
    description:
      'SubScan is professional GPR software for visualizing, processing and analyzing ground penetrating radar data on Android and desktop platforms.',
    ctaDemo: 'Buy Now',
    ctaExplore: 'Explore Features',
    statPlatform: 'Platforms',
    statFormats: 'File Formats',
    statFilters: 'Process Filters',
  },
  features: {
    section: 'FEATURES',
    title: 'Why SubScan?',
    subtitle: 'Everything you need to process GPR data — from field work to office analysis.',
    items: [
      {
        icon: '📡',
        title: 'SGY and DZT Support',
        description:
          'Open SGY/SEGY and DZT files. Compatible with Tork GPR recordings and GSSI radar data.',
      },
      {
        icon: '⚡',
        title: '22 Presets + 50 Process Filters',
        description:
          'Metal Edge, Hyperbola, Noise Clean, Deep Visual and more. AGC, migration, CLAHE, dewow, wavelet, stacking.',
      },
      {
        icon: '🎯',
        title: 'Hyperbola Analysis',
        description:
          'Click on a hyperbola to calculate depth, time delay, permittivity and velocity.',
      },
      {
        icon: '🔍',
        title: 'Metal & Target Detection',
        description:
          'Metal sensitivity control, Metal Edge / Metal Pure presets and void analysis filters.',
      },
      {
        icon: '💾',
        title: 'Custom Preset System',
        description:
          'Save, export, import and share your processing chain. GroundX/SubScan .gxpreset format.',
      },
      {
        icon: '🌍',
        title: '3 Languages',
        description: 'Turkish, English and Arabic interface. Ready for international field and office use.',
      },
    ],
  },
  desktop: {
    badge: 'DESKTOP ANALYSIS',
    title: 'SubScan Desktop',
    subtitle:
      'Qt/C++ desktop application. Open multiple files at once with advanced processing and depth analysis.',
    features: [
      'SGY/SEGY and DZT file support',
      '22 built-in presets and 50+ process filters',
      'Multi-file: multiple radargram windows open simultaneously',
      'Hyperbola analysis, depth measurement and trace interval calculation',
      'Metal sensitivity, gain, contrast and 15+ color palettes',
      'Custom preset save, import/export (.gxpreset)',
      'Radargram PNG export',
      'Turkish, English and Arabic interface',
    ],
    screenshot: '/screenshots/desktop-en.png',
    screenshotAlt: 'SubScan Desktop interface — multi-radargram analysis',
  },
  android: {
    badge: 'FIELD ANALYSIS',
    title: 'SubScan Android',
    subtitle:
      'Instant GPR analysis on your mobile device. Integrates with Tork GPR for seamless field-to-office workflow.',
    features: [
      'SGY/SEGY and DZT file support',
      'Automatic file integration with Tork GPR recording folder',
      '22 built-in presets and 50+ process filters',
      'Hyperbola analysis, depth measurement and metal sensitivity',
      'Gain, contrast, brightness and color palette selection',
      'Share radargram images',
      'Custom preset import/export and sharing',
      'Turkish, English and Arabic interface',
    ],
    screenshot: '/screenshots/android-analysis.png',
    screenshotAlt: 'SubScan Android app — field GPR analysis',
  },
  formats: {
    section: 'FORMATS',
    title: 'Supported File Formats',
    subtitle: 'Open data from different GPR devices in one software.',
    items: [
      { ext: 'SGY / SEGY', desc: 'GPR recording format — Tork GPR and industry standard' },
      { ext: 'DZT', desc: 'GSSI radar devices' },
      { ext: '.gxpreset', desc: 'SubScan custom processing preset file' },
    ],
  },
  contact: {
    section: 'CONTACT',
    title: 'Buy SubScan',
    subtitle:
      'Contact us to purchase a SubScan license or get pricing. Get a quick response via WhatsApp.',
    whatsapp: 'Message on WhatsApp',
    email: 'Send Email',
    waMessage: 'Hello, I would like to buy SubScan.',
  },
  footer: {
    description:
      'Professional Android and desktop software for analyzing ground penetrating radar (GPR) data.',
    products: 'Products',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  langNames: { tr: 'Türkçe', en: 'English', ar: 'العربية' },
};

export default en;
