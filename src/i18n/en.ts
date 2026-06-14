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
    demo: 'Request Demo',
  },
  hero: {
    badge: 'GPR / SGY / DZT ANALYSIS',
    title1: 'Analyze What',
    title2: 'Lies Beneath',
    title3: 'Professionally',
    description:
      'SubScan is professional GPR software for visualizing, processing and analyzing ground penetrating radar data on Android and desktop platforms.',
    ctaDemo: 'Request Demo',
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
        title: 'Multi-Format Support',
        description:
          'SGY, SEGY, DZT, RD3, RD7, DT1 and CSV/TXT. Open MALA, GSSI, Sensors & Software and ASCII data.',
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
      'SGY, SEGY, DZT, RD3, RD7, DT1 and CSV/TXT format support',
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
      'SGY, SEGY, DZT, RD3, RD7, DT1 and CSV/TXT format support',
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
      { ext: 'SGY / SEGY', desc: 'Industry standard GPR format' },
      { ext: 'DZT', desc: 'GSSI radar devices' },
      { ext: 'RD3 / RD7', desc: 'MALA RAMAC systems' },
      { ext: 'DT1', desc: 'Sensors & Software' },
      { ext: 'CSV / TXT / ASC', desc: 'ASCII matrix data' },
      { ext: '.gxpreset', desc: 'SubScan custom preset file' },
    ],
  },
  contact: {
    section: 'CONTACT',
    title: 'Request a Demo',
    subtitle:
      'Contact us to try SubScan or get a license. Get a quick response via WhatsApp.',
    whatsapp: 'Message on WhatsApp',
    email: 'Send Email',
    waMessage: 'Hello, I would like to request a SubScan demo.',
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
