import type { Translations } from './types';

const en: Translations = {
  lang: 'en',
  dir: 'ltr',
  locale: 'en_US',
  path: '/en/',
  meta: {
    title: 'SubScan — GPR Analysis Software | SGY, DZT, Geophysics',
    description:
      'SubScan: Professional GPR analysis software for Android and Windows. Open SGY, SEGY and DZT files. Compatible with Tork GPR and GSSI. For geophysics, archaeology, grave detection, utility locating and concrete scanning.',
    keywords:
      'SubScan, GPR, GPR analysis software, ground penetrating radar, SGY, SEGY, DZT, Tork GPR, GSSI, radargram, geophysics software, archaeology GPR, grave detection, utility locating, concrete scanning, subsurface imaging',
  },
  brand: { subtitle: 'GPR ANALYSIS' },
  nav: {
    features: 'Features',
    desktop: 'Desktop',
    android: 'Android',
    workflow: 'Workflow',
    partners: 'Equipment',
    formats: 'Formats',
    videos: 'Videos',
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
        title: '24 Presets + 50+ Process Filters',
        description:
          'Metal Edge, Hyperbola, Noise Clean, Deep Visual, Hunter, Ghost Hunter and more. AGC, migration, Stolt F-K, CLAHE, dewow, wavelet, SVD, PCA, stacking.',
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
          'Metal sensitivity control, Metal Edge / Metal Pure presets, void analysis and Void probability filter.',
      },
      {
        icon: '💾',
        title: 'Custom Preset System',
        description:
          'Save, export, import and share your processing chain. SubScan .gxpreset format.',
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
      'Professional Windows desktop application. Open multiple files at once with advanced processing and depth analysis.',
    features: [
      'SGY/SEGY and DZT file support',
      '24 built-in presets and 50+ process filters',
      'Multi-file: multiple radargram windows open simultaneously',
      'Hyperbola analysis, depth measurement and trace interval calculation',
      'Metal sensitivity, gain, contrast and 30+ color palettes',
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
      '24 built-in presets and 50+ process filters',
      'Hyperbola analysis, depth measurement and metal sensitivity',
      'Gain, contrast, brightness and 30+ color palette selection',
      'Share radargram images',
      'Custom preset import/export and sharing',
      'Turkish, English and Arabic interface',
    ],
    screenshot: '/screenshots/android-analysis.png',
    screenshotAlt: 'SubScan Android app — field GPR analysis',
  },
  workflow: {
    section: 'FIELD WORKFLOW',
    title: 'From Field to Report in One Flow',
    subtitle:
      'From capture to analysis, preset sharing to PNG reports — SubScan speeds up your daily field work.',
    comingSoon: {
      badge: 'COMING SOON',
      text: 'Coming in a near-term update for Tork GPR: Live capture (real-time radar display and recording) in SubScan.',
    },
    groups: [
      {
        id: 'field',
        icon: '📍',
        title: 'In the field',
        items: [
          {
            title: 'Live view',
            description: 'Radar scrolls on screen as you walk — see targets in place.',
          },
          {
            title: 'Quick control',
            description: 'Start, pause, resume, stop — no wasted time on site.',
          },
          {
            title: 'One-tap recording',
            description: 'Save important lines as SGY instantly.',
          },
          {
            title: 'Standard SGY recording',
            description: 'Opens directly in SubScan at the office — no format conversion.',
          },
          {
            title: '75 / 150 ns',
            description: 'Quick adaptation to different field conditions.',
          },
          {
            title: 'Settings remembered',
            description: 'COM and field settings persist on next launch.',
          },
        ],
      },
      {
        id: 'after',
        icon: '⚡',
        title: 'After capture',
        items: [
          {
            title: 'Ready when you stop',
            description: 'Start reviewing without switching to another app.',
          },
          {
            title: 'Multiple lines',
            description: 'Compare same-day captures side by side.',
          },
          {
            title: 'Ready-made analysis',
            description: 'Metal, depth, hyperbola and more — one-tap presets.',
          },
          {
            title: 'Color and display',
            description: 'Read and interpret the same data in different ways.',
          },
          {
            title: 'Batch apply',
            description: 'Apply the same process to one line or all open lines.',
          },
        ],
      },
      {
        id: 'preset',
        icon: '💾',
        title: 'Build and share your profile',
        items: [
          {
            title: 'Save custom presets',
            description: 'Store your favorite filter chain as a custom preset.',
          },
          {
            title: 'Name, edit, delete',
            description: 'Manage your preset library for your workflow.',
          },
          {
            title: 'Export / import',
            description: 'Send .gxpreset files to your team or clients.',
          },
        ],
      },
      {
        id: 'measure',
        icon: '📐',
        title: 'Measurement and report',
        items: [
          {
            title: 'Depth measurement',
            description: 'Read target depth from hyperbola or cursor.',
          },
          {
            title: 'Distance / length',
            description: 'Measure distance and dimensions on the radargram.',
          },
          {
            title: 'Hyperbola collapse (migration)',
            description: 'Position targets more clearly.',
          },
          {
            title: 'PNG export',
            description: 'Capture images for reports, presentations and WhatsApp.',
          },
        ],
      },
      {
        id: 'files',
        icon: '📂',
        title: 'Files',
        items: [
          {
            title: 'Open saved SGY files',
            description: 'Analyze and compare previous captures.',
          },
          {
            title: 'REC for permanent save',
            description: 'Without REC, review temporarily within the session.',
          },
        ],
      },
    ],
    audience: {
      title: 'Who is it for?',
      description: 'Field teams — fast capture, fast decisions.',
    },
  },
  partners: {
    section: 'FIELD EQUIPMENT',
    title: 'Tork Pro GPR Devices',
    subtitle: 'SubScan compatible · Sales: Farmet',
    disclaimer: 'Brands and device sales belong to their respective owners. SubScan is independent software.',
    visitSite: 'Visit Website',
    buy: 'Buy Now',
    farmetUrl: 'https://farmet.net',
    items: [
      {
        id: 'tork-300',
        image: '/partners/tork-pro-300.png',
        imageAlt: 'Tork Pro 300 MHz ground radar unit',
        name: 'Tork Pro 300 MHz',
        mhz: '300 MHz',
        tagline: 'Deeper penetration',
        description: 'Deeper than 500 MHz. SGY analysis with SubScan.',
        glow: 'green',
        waMessage: 'Hello, I am reaching you through sub-scan.com. I would like information about the Tork Pro 300 MHz device.',
      },
      {
        id: 'tork-500',
        image: '/partners/tork-pro-500.png',
        imageAlt: 'Tork Pro 500 MHz ground radar unit',
        name: 'Tork Pro 500 MHz',
        mhz: '500 MHz',
        tagline: 'High resolution',
        description: 'Near-surface detail and sharp target imaging. SGY analysis with SubScan.',
        glow: 'orange',
        waMessage: 'Hello, I am reaching you through sub-scan.com. I would like information about the Tork Pro 500 MHz device.',
      },
    ],
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
  videos: {
    section: 'VIDEOS',
    title: 'GPR Analysis Videos',
    subtitle:
      'GPR, radargram, prism and SGY analysis videos from the SubScan YouTube channel, updated on each deploy.',
    viewChannel: 'Open YouTube Channel',
    thumbAlt: 'SubScan GPR analysis video',
    schemaSuffix: 'SubScan GPR analysis video',
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
    guides: 'Guides',
    backHome: '← Home',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  langNames: { tr: 'Türkçe', en: 'English', ar: 'العربية' },
};

export default en;
