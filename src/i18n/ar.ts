import type { Translations } from './types';

const ar: Translations = {
  lang: 'ar',
  dir: 'rtl',
  locale: 'ar_SA',
  path: '/ar/',
  meta: {
    title: 'SubScan — برنامج تحليل GPR',
    description:
      'SubScan — برنامج احترافي لتحليل بيانات الرادار الأرضي GPR / SGY / DZT على أندرويد وسطح المكتب. عالج واعرض وحلل بيانات الرادار تحت الأرض.',
    keywords:
      'GPR, رادار اختراق الأرض, SGY, DZT, SEGY, راديوغرام, SubScan, جيوفيزياء, علم الآثار',
  },
  brand: { subtitle: 'تحليل GPR' },
  nav: {
    features: 'الميزات',
    desktop: 'سطح المكتب',
    android: 'أندرويد',
    formats: 'الصيغ',
    contact: 'اتصل بنا',
    demo: 'اشترِ',
  },
  hero: {
    badge: 'تحليل GPR / SGY / DZT',
    title1: 'حلل ما',
    title2: 'تحت الأرض',
    title3: 'باحترافية',
    description:
      'SubScan برنامج GPR احترافي لتصور ومعالجة وتحليل بيانات رادار اختراق الأرض على منصات أندرويد وسطح المكتب.',
    ctaDemo: 'اشترِ',
    ctaExplore: 'استكشف الميزات',
    statPlatform: 'منصات',
    statFormats: 'صيغ الملفات',
    statFilters: 'فلاتر المعالجة',
  },
  features: {
    section: 'الميزات',
    title: 'لماذا SubScan؟',
    subtitle: 'كل ما تحتاجه لمعالجة بيانات GPR — من العمل الميداني إلى التحليل المكتبي.',
    items: [
      {
        icon: '📡',
        title: 'دعم SGY و DZT',
        description:
          'افتح ملفات SGY/SEGY و DZT. متوافق مع تسجيلات Tork GPR وبيانات رادار GSSI.',
      },
      {
        icon: '⚡',
        title: '22 إعداد مسبق + 50 فلتر',
        description:
          'Metal Edge و Hyperbola و Noise Clean و Deep Visual والمزيد. AGC و migration و CLAHE و dewow و wavelet و stacking.',
      },
      {
        icon: '🎯',
        title: 'تحليل الهيبربولا',
        description:
          'انقر على الهيبربولا لحساب العمق وتأخير الوقت وثابت العزل والسرعة.',
      },
      {
        icon: '🔍',
        title: 'كشف المعادن والأهداف',
        description:
          'التحكم في حساسية المعادن وإعدادات Metal Edge / Metal Pure وفلاتر تحليل الفراغات.',
      },
      {
        icon: '💾',
        title: 'نظام الإعدادات المسبقة',
        description:
          'احفظ وصدّر واستورد وشارك سلسلة المعالجة. صيغة SubScan .gxpreset.',
      },
      {
        icon: '🌍',
        title: '3 لغات',
        description: 'واجهة بالتركية والإنجليزية والعربية. جاهزة للاستخدام الميداني والمكتبي الدولي.',
      },
    ],
  },
  desktop: {
    badge: 'تحليل سطح المكتب',
    title: 'SubScan Desktop',
    subtitle:
      'تطبيق سطح مكتب Qt/C++. افتح ملفات متعددة في آن واحد مع معالجة متقدمة وتحليل العمق.',
    features: [
      'دعم ملفات SGY/SEGY و DZT',
      '22 إعداد مسبق و50+ فلتر معالجة',
      'ملفات متعددة: نوافذ راديوغرام متعددة في آن واحد',
      'تحليل الهيبربولا وقياس العمق وحساب فاصل المسارات',
      'حساسية المعادن والكسب والتباين و15+ لوحة ألوان',
      'حفظ واستيراد/تصدير الإعدادات المسبقة (.gxpreset)',
      'تصدير راديوغرام PNG',
      'واجهة بالتركية والإنجليزية والعربية',
    ],
    screenshot: '/screenshots/desktop-en.png',
    screenshotAlt: 'واجهة SubScan Desktop — تحليل راديوغرام متعدد',
  },
  android: {
    badge: 'تحليل ميداني',
    title: 'SubScan Android',
    subtitle:
      'تحليل GPR فوري على جهازك المحمول. يتكامل مع Tork GPR لتدفق سلس من الميدان إلى المكتب.',
    features: [
      'دعم ملفات SGY/SEGY و DZT',
      'تكامل تلقائي مع مجلد تسجيلات Tork GPR',
      '22 إعداد مسبق و50+ فلتر معالجة',
      'تحليل الهيبربولا وقياس العمق وحساسية المعادن',
      'الكسب والتباين والسطوع واختيار لوحة الألوان',
      'مشاركة صور الراديوغرام',
      'استيراد/تصدير ومشاركة الإعدادات المسبقة',
      'واجهة بالتركية والإنجليزية والعربية',
    ],
    screenshot: '/screenshots/android-analysis.png',
    screenshotAlt: 'تطبيق SubScan Android — تحليل GPR ميداني',
  },
  formats: {
    section: 'الصيغ',
    title: 'صيغ الملفات المدعومة',
    subtitle: 'افتح البيانات من أجهزة GPR مختلفة في برنامج واحد.',
    items: [
      { ext: 'SGY / SEGY', desc: 'صيغة تسجيل GPR — Tork GPR والمعيار الصناعي' },
      { ext: 'DZT', desc: 'أجهزة GSSI radar' },
      { ext: '.gxpreset', desc: 'ملف preset معالجة مخصص SubScan' },
    ],
  },
  contact: {
    section: 'اتصل بنا',
    title: 'اشترِ SubScan',
    subtitle:
      'تواصل معنا لشراء ترخيص SubScan أو معرفة الأسعار. احصل على رد سريع عبر واتساب.',
    whatsapp: 'راسلنا على واتساب',
    email: 'أرسل بريدًا إلكترونيًا',
    waMessage: 'مرحباً، أود شراء SubScan.',
  },
  footer: {
    description:
      'برنامج احترافي لأندرويد وسطح المكتب لتحليل بيانات رادار اختراق الأرض (GPR).',
    products: 'المنتجات',
    contact: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة.',
  },
  langNames: { tr: 'Türkçe', en: 'English', ar: 'العربية' },
};

export default ar;
