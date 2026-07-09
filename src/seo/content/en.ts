import type { SeoPageId, SeoPageContent } from '../types';

export const enSeoPages: Record<SeoPageId, SeoPageContent> = {
  'tork-gpr': {
    id: 'tork-gpr',
    slug: 'tork-gpr-software',
    footerLabel: 'Tork GPR Software',
    meta: {
      title: 'Tork GPR Software — SGY Analysis | SubScan',
      description:
        'Analyze Tork GPR SGY recordings with SubScan. Professional GPR software for Windows and Android. Hyperbola analysis, 24 presets, depth measurement.',
      keywords:
        'Tork GPR software, Tork GPR analysis, Tork SGY, Tork Pro 300, Tork Pro 500, GPR analysis software, SGY analysis program',
    },
    hero: {
      badge: 'TORK GPR COMPATIBLE',
      title: 'Analyze Tork GPR Recordings Professionally',
      subtitle:
        'Tork GPR field data is saved in standard SGY format. Open files in SubScan, apply presets, and run depth and target analysis.',
    },
    sections: [
      {
        title: 'How Tork GPR works with SubScan',
        paragraphs: [
          'Tork GPR devices collect subsurface radar data in the field and store recordings as SGY files. SubScan opens these files on Android and Windows for radargram viewing, filtering, and measurement.',
          'No format conversion is needed — when acquisition ends, the SGY file is ready for analysis in SubScan.',
        ],
      },
      {
        title: 'What you can do with SubScan',
        bullets: [
          'Open and view SGY and SEGY files',
          '24 ready presets: Metal Edge, Hyperbola, Deep View, Hunter and more',
          '50+ processing filters: AGC, migration, CLAHE, dewow, wavelet, SVD, PCA',
          'Hyperbola analysis for depth and dielectric constant',
          'Metal sensitivity, void analysis and depth measurement',
          'Custom preset save and .gxpreset sharing',
          'Radargram PNG export for reports',
        ],
        paragraphs: [],
      },
      {
        title: 'Tork Pro 300 MHz and 500 MHz',
        paragraphs: [
          'Tork Pro 500 MHz is ideal for near-surface detail and high resolution. Tork Pro 300 MHz offers deeper penetration. Both devices\' recordings are analyzed in the same SubScan workflow.',
        ],
      },
    ],
    cta: {
      title: 'SubScan for Tork GPR analysis',
      subtitle: 'Contact us on WhatsApp for licensing and pricing.',
    },
  },
  'sgy-analiz': {
    id: 'sgy-analiz',
    slug: 'sgy-analysis',
    footerLabel: 'SGY Analysis',
    meta: {
      title: 'SGY Analysis Software — SEGY Radargram Processing | SubScan',
      description:
        'Open, process and analyze SGY and SEGY files. SubScan GPR software with presets, filters, hyperbola analysis and depth measurement.',
      keywords:
        'SGY analysis, SEGY viewer, open SGY file, radargram analysis, GPR data processing, SGY software',
    },
    hero: {
      badge: 'SGY / SEGY',
      title: 'Open and Analyze SGY Files',
      subtitle:
        'View, filter and turn industry-standard SGY GPR recordings into professional reports.',
    },
    sections: [
      {
        title: 'What is an SGY file?',
        paragraphs: [
          'SGY (SEGY) is the most common storage format for ground-penetrating radar data. GPR devices record radar pulses during acquisition; this data is stored as SGY and displayed as radargrams in analysis software.',
          'SubScan natively supports SGY and SEGY. It is compatible with Tork GPR, GSSI (DZT is a separate format) and other SGY-producing devices.',
        ],
      },
      {
        title: 'SubScan SGY processing features',
        bullets: [
          'Multi-file: multiple radargram windows on desktop',
          'AGC, bandpass, dewow, background removal',
          'Stolt F-K migration and hyperbola collapse',
          'CLAHE, contrast, gain and 30+ color palettes',
          'SVD, PCA, stacking and void probability filters',
          'Click hyperbola for depth calculation',
          'PNG export and preset sharing',
        ],
        paragraphs: [],
      },
      {
        title: 'Who uses it?',
        paragraphs: [
          'Geophysicists, archaeologists, infrastructure teams and void scanning specialists process SGY files with SubScan. Turkish, English and Arabic interfaces support international field use.',
        ],
      },
    ],
    cta: {
      title: 'SubScan for SGY analysis',
      subtitle: 'Contact us for demo and licensing information.',
    },
  },
  'gpr-program': {
    id: 'gpr-program',
    slug: 'gpr-analysis-software',
    footerLabel: 'GPR Analysis Software',
    meta: {
      title: 'GPR Analysis Software — Ground Penetrating Radar | SubScan',
      description:
        'Professional GPR analysis software SubScan. View, process and measure subsurface radar data. Android and Windows. Archaeology, infrastructure, metal and void analysis.',
      keywords:
        'GPR analysis software, GPR program, ground penetrating radar software, radargram software, geophysics software',
    },
    hero: {
      badge: 'GPR SOFTWARE',
      title: 'Professional Analysis Software for Ground Penetrating Radar',
      subtitle:
        'From field to office: open, process, measure and report GPR data. One software, two platforms.',
    },
    sections: [
      {
        title: 'What does GPR analysis software do?',
        paragraphs: [
          'Ground penetrating radar (GPR) detects objects beneath soil, concrete or asphalt. Raw data is displayed as radargrams in analysis software; filters, presets and measurement tools clarify targets.',
          'SubScan covers the full workflow: file opening, image processing, hyperbola analysis, depth measurement and PNG reporting.',
        ],
      },
      {
        title: 'Use cases',
        bullets: [
          'Grave and archaeological surveys',
          'Pipe, cable and utility detection',
          'Concrete void and metal detection',
          'Road and subsurface analysis',
          'Geophysical research and mapping',
        ],
        paragraphs: [],
      },
      {
        title: 'Why SubScan?',
        paragraphs: [
          '24 ready presets and 50+ processing filters enable fast field work and detailed office analysis. Android for mobile control, desktop for multi-file and advanced processing chains. Direct SGY compatibility with Tork GPR.',
        ],
      },
    ],
    cta: {
      title: 'Start GPR analysis',
      subtitle: 'Message us on WhatsApp for SubScan licensing.',
    },
  },
  faq: {
    id: 'faq',
    slug: 'faq',
    footerLabel: 'FAQ',
    meta: {
      title: 'FAQ — SubScan GPR Software',
      description:
        'Frequently asked questions about SubScan GPR analysis software. SGY support, Tork GPR compatibility, licensing, Android vs desktop.',
      keywords:
        'SubScan FAQ, GPR software questions, how to open SGY, Tork GPR SubScan, GPR license',
    },
    hero: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Common questions about SubScan GPR analysis software.',
    },
    sections: [],
    faq: [
      {
        question: 'Which file formats does SubScan support?',
        answer:
          'SubScan opens SGY, SEGY and DZT files. Tork GPR recordings in SGY format are analyzed directly. Custom processing chains are saved and shared as .gxpreset files.',
      },
      {
        question: 'Is it compatible with Tork GPR?',
        answer:
          'Yes. SGY recordings from Tork GPR devices open in SubScan without format conversion. The Android version can integrate with the Tork recording folder.',
      },
      {
        question: 'What is the difference between Android and desktop?',
        answer:
          'Android is designed for field analysis and quick checks. Desktop offers multi-file windows, advanced processing chains and detailed measurement tools. Both use the same preset and filter set.',
      },
      {
        question: 'Is SubScan free?',
        answer:
          'SubScan is licensed software. Contact us via WhatsApp or email for pricing and license options.',
      },
      {
        question: 'How does hyperbola analysis work?',
        answer:
          'Click a hyperbolic target on the radargram to calculate depth, time delay, dielectric constant and velocity. Migration filters can also collapse hyperbolas.',
      },
      {
        question: 'Which languages are supported?',
        answer: 'SubScan interface is available in Turkish, English and Arabic.',
      },
      {
        question: 'What is the difference between 300 MHz and 500 MHz GPR?',
        answer:
          '500 MHz provides higher resolution and near-surface detail. 300 MHz offers deeper penetration. Both frequencies\' recordings are analyzed in SubScan.',
      },
      {
        question: 'Does SubScan sell GPR devices?',
        answer:
          'No. SubScan is independent software. Tork GPR device sales are through Farmet; see the equipment section on our site.',
      },
    ],
    cta: {
      title: 'Have more questions?',
      subtitle: 'Reach us on WhatsApp or email.',
    },
  },
};
