import type { Translations } from './types';

const ar: Translations = {
  lang: 'ar',
  dir: 'rtl',
  locale: 'ar_SA',
  path: '/ar/',
  meta: {
    title: 'SubScan — برنامج تحليل GPR | SGY و DZT وجيوفيزياء',
    description:
      'SubScan: برنامج احترافي لتحليل GPR على أندرويد وويندوز. فتح ملفات SGY و SEGY و DZT. متوافق مع Tork GPR و GSSI. للجيوفيزياء والآثار وكشف القبور والبنية التحتية وفحص الخرسانة.',
    keywords:
      'SubScan, GPR, برنامج تحليل GPR, رادار اختراق الأرض, SGY, SEGY, DZT, Tork GPR, GSSI, راديوغرام, جيوفيزياء, علم الآثار, كشف القبور, فحص البنية التحتية, فحص الخرسانة',
  },
  brand: { subtitle: 'تحليل GPR' },
  nav: {
    features: 'الميزات',
    pricing: 'الأسعار',
    desktop: 'سطح المكتب',
    android: 'أندرويد',
    workflow: 'سير العمل',
    partners: 'المعدات',
    formats: 'الصيغ',
    videos: 'فيديوهات',
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
    trustDelivery: 'تسليم فوري',
    trustSecurePayment: 'دفع آمن',
    trustSupport: 'دعم سريع',
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
        title: '28 إعداد مسبق + 70+ فلتر',
        description:
          'Metal Edge و Hyperbola و Noise Clean و Deep Visual و Hunter و Ghost Hunter والمزيد. AGC و migration و Stolt F-K و CLAHE و dewow و wavelet و SVD و PCA و stacking.',
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
          'التحكم في حساسية المعادن وإعدادات Metal Edge / Metal Pure وتحليل الفراغات وفلتر Void probability.',
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
  pricing: {
    section: 'الأسعار',
    title: 'المنتجات والأسعار',
    subtitle: 'اختر الباقة المناسبة لاحتياجاتك واشترِ بأمان عبر الإنترنت.',
    priceNote: 'شامل الضريبة',
    cta: 'اشترِ الآن',
    comingSoon: 'قريباً',
    items: [
      {
        sku: 'desktop',
        name: 'SubScan Desktop Analiz',
        description: 'تحليل الملفات لنظام ويندوز — بدون تسجيل مباشر.',
        price: '7,800 ليرة',
      },
      {
        sku: 'android',
        name: 'SubScan Android',
        description: 'تطبيق تحليل GPR لهواتف وأجهزة أندرويد اللوحية.',
        price: '4,200 ليرة',
      },
      {
        sku: 'tork300',
        name: 'SubScan TORK 300 Realtime',
        description: 'تسجيل GPR مباشر مع جهاز TORK 300.',
        price: '18,000 ليرة',
      },
      {
        sku: 'tork450',
        name: 'SubScan TORK 450 Realtime',
        description: 'تسجيل GPR مباشر مع جهاز TORK 450.',
        price: '18,000 ليرة',
      },
      {
        sku: 'acik_anten',
        name: 'SubScan Open Antenna Realtime',
        description: 'تسجيل GPR مباشر مع أجهزة الهوائي المفتوح.',
        price: '6,000 ليرة',
        promoLabel: 'منتج جديد',
        compatNote: 'متوافق مع TORK EasyRead وOerad GPR',
      },
    ],
  },
  trust: {
    items: [
      {
        icon: '⚡',
        title: 'تسليم فوري',
        description: 'يتم إرسال ترخيصك عبر البريد الإلكتروني فور الدفع.',
      },
      {
        icon: '🛠️',
        title: 'تثبيت سهل',
        description: 'حمّل ملف التثبيت وكن جاهزًا خلال دقائق.',
      },
      {
        icon: '💬',
        title: 'دعم سريع',
        description: 'نرد على استفساراتكم بسرعة دائمًا.',
      },
      {
        icon: '🔄',
        title: 'تحديثات مجانية',
        description: 'تصلك الإصدارات الجديدة تلقائيًا دون أي تكلفة إضافية.',
      },
    ],
    security: [
      { icon: '🔒', text: 'اتصال مشفر بتقنية SSL 256-bit' },
      { icon: '🛡️', text: 'مؤمّن بواسطة بنية PayTR للدفع' },
      { icon: '✅', text: 'التحقق من البطاقة عبر 3D Secure' },
    ],
  },
  desktop: {
    badge: 'تحليل سطح المكتب',
    title: 'SubScan Desktop',
    subtitle:
      'تطبيق سطح مكتب احترافي لنظام Windows. افتح ملفات متعددة في آن واحد مع معالجة متقدمة وتحليل العمق.',
    features: [
      'دعم ملفات SGY/SEGY و DZT',
      '28 إعداد مسبق و70+ فلتر معالجة',
      'ملفات متعددة: نوافذ راديوغرام متعددة في آن واحد',
      'تحليل الهيبربولا وقياس العمق وحساب فاصل المسارات',
      'حساسية المعادن والكسب والتباين و30+ لوحة ألوان',
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
      '28 إعداد مسبق و70+ فلتر معالجة',
      'تحليل الهيبربولا وقياس العمق وحساسية المعادن',
      'الكسب والتباين والسطوع واختيار من 30+ لوحة ألوان',
      'مشاركة صور الراديوغرام',
      'استيراد/تصدير ومشاركة الإعدادات المسبقة',
      'واجهة بالتركية والإنجليزية والعربية',
    ],
    screenshot: '/screenshots/android-analysis.png',
    screenshotAlt: 'تطبيق SubScan Android — تحليل GPR ميداني',
  },
  dipole: {
    badge: 'أضيف حديثاً',
    title: 'SubScan Açık Anten Realtime',
    subtitle:
      'مصمم خصيصاً للتسجيل الحي بأجهزة الهوائي المفتوح (دايبول). ابدأ التسجيل في الميدان، شاهد النتيجة فوراً، وطبّق تركيبات الفلاتر الجاهزة F1-F2-F3 بضغطة واحدة.',
    features: [
      'تسجيل حي بصيغة SGY أثناء العمل',
      'تبديل فوري بين لوحات الألوان',
      'إيقاف التسجيل وتطبيق تركيبات الفلاتر الجاهزة F1-F2-F3 بضغطة واحدة',
      'دعم خيارات تردد متعددة لهوائي الدايبول',
      'اختيار نافذة الهوائي 75 و150 نانوثانية وخيارات أخرى',
      'عدة سمات لواجهة المستخدم',
      'خيارات لغة تركية وإنجليزية وعربية',
      'تحديثات برمجية مجانية وغير محدودة',
    ],
    screenshot: '/screenshots/dipole-tr.png',
    screenshotAlt: 'SubScan Açık Anten Realtime — شاشة التسجيل الحي بهوائي الدايبول',
  },
  workflow: {
    section: 'سير العمل الميداني',
    title: 'من الميدان إلى التقرير في تدفق واحد',
    subtitle:
      'من التسجيل إلى التحليل، ومشاركة الإعدادات المسبقة إلى تقارير PNG — SubScan يسرّع عملك الميداني اليومي.',
    realtime: {
      badge: 'SUBSCAN REALTIME',
      text: 'متوفر الآن: SubScan Realtime يتصل بجهاز Tork GPR لعرض الرادار وتسجيله وتحليله في الوقت الفعلي — يُباع كبرنامج مكتبي منفصل.',
      cta: 'اطلب معلومات',
      waMessage: 'مرحباً، أتواصل معكم عبر sub-scan.com. أرغب في معلومات حول SubScan Realtime (التصوير الحي).',
    },
    groups: [
      {
        id: 'field',
        icon: '📍',
        title: 'في الميدان',
        items: [
          {
            title: 'عرض مباشر',
            description: 'يتدفق الرادار على الشاشة أثناء المشي — شاهد الأهداف في مكانها.',
          },
          {
            title: 'تحكم سريع',
            description: 'ابدأ، أوقف مؤقتاً، استأنف، أوقف — لا وقت ضائع في الموقع.',
          },
          {
            title: 'تسجيل بلمسة واحدة',
            description: 'احفظ الخطوط المهمة كـ SGY فوراً.',
          },
          {
            title: 'تسجيل SGY قياسي',
            description: 'يُفتح مباشرة في SubScan في المكتب — دون تحويل صيغة.',
          },
          {
            title: '75 / 150 ns',
            description: 'تكيف سريع مع ظروف الميدان المختلفة.',
          },
          {
            title: 'تذكر الإعدادات',
            description: 'إعدادات COM والميدان تُحفظ عند الفتح التالي.',
          },
        ],
      },
      {
        id: 'after',
        icon: '⚡',
        title: 'بعد التسجيل',
        items: [
          {
            title: 'جاهز عند التوقف',
            description: 'ابدأ المراجعة دون الانتقال إلى برنامج آخر.',
          },
          {
            title: 'خطوط متعددة',
            description: 'قارن تسجيلات نفس اليوم جنباً إلى جنب.',
          },
          {
            title: 'تحليل جاهز',
            description: 'معادن، عمق، هيبربولا والمزيد — إعدادات مسبقة بلمسة واحدة.',
          },
          {
            title: 'اللون والعرض',
            description: 'اقرأ وفسّر نفس البيانات بطرق مختلفة.',
          },
          {
            title: 'تطبيق جماعي',
            description: 'طبّق نفس المعالجة على خط واحد أو كل الخطوط المفتوحة.',
          },
        ],
      },
      {
        id: 'preset',
        icon: '💾',
        title: 'أنشئ ملفك وشاركه',
        items: [
          {
            title: 'حفظ إعدادات مخصصة',
            description: 'احفظ سلسلة الفلاتر المفضلة كإعداد مسبق مخصص.',
          },
          {
            title: 'تسمية، تعديل، حذف',
            description: 'أدر مكتبة الإعدادات المسبقة حسب سير عملك.',
          },
          {
            title: 'تصدير / استيراد',
            description: 'أرسل ملفات .gxpreset للفريق أو العملاء.',
          },
        ],
      },
      {
        id: 'measure',
        icon: '📐',
        title: 'القياس والتقرير',
        items: [
          {
            title: 'قياس العمق',
            description: 'اقرأ عمق الهدف من الهيبربولا أو المؤشر.',
          },
          {
            title: 'المسافة / الطول',
            description: 'قِس المسافة والأبعاد على الراديوغرام.',
          },
          {
            title: 'طي الهيبربولا (migration)',
            description: 'حدد مواقع الأهداف بوضوح أكبر.',
          },
          {
            title: 'تصدير PNG',
            description: 'التقط صوراً للتقارير والعروض ومشاركة واتساب.',
          },
        ],
      },
      {
        id: 'files',
        icon: '📂',
        title: 'الملفات',
        items: [
          {
            title: 'فتح ملفات SGY المحفوظة',
            description: 'حلّل وقارن التسجيلات السابقة.',
          },
          {
            title: 'REC للحفظ الدائم',
            description: 'بدون REC، راجع مؤقتاً ضمن الجلسة.',
          },
        ],
      },
    ],
    audience: {
      title: 'لمن هو؟',
      description: 'فرق الميدان — تسجيل سريع، قرار سريع.',
    },
  },
  partners: {
    section: 'معدات ميدانية',
    title: 'أجهزة Tork Pro GPR',
    subtitle: 'متوافق مع SubScan · المبيعات: Farmet',
    disclaimer: 'العلامات التجارية ومبيعات الأجهزة مملوكة لأصحابها. SubScan برنامج مستقل.',
    visitSite: 'زيارة الموقع',
    buy: 'اشترِ',
    farmetUrl: 'https://farmet.net',
    items: [
      {
        id: 'tork-300',
        image: '/partners/tork-pro-300.png',
        imageAlt: 'جهاز Tork Pro 300 MHz',
        name: 'Tork Pro 300 MHz',
        mhz: '300 MHz',
        tagline: 'اختراق أعمق',
        description: 'أعمق من 500 MHz. تحليل SGY مع SubScan.',
        glow: 'green',
        waMessage: 'مرحباً، أتواصل معكم عبر sub-scan.com. أود الحصول على معلومات حول جهاز Tork Pro 300 MHz.',
      },
      {
        id: 'tork-500',
        image: '/partners/tork-pro-500.png',
        imageAlt: 'جهاز Tork Pro 500 MHz',
        name: 'Tork Pro 500 MHz',
        mhz: '500 MHz',
        tagline: 'دقة عالية',
        description: 'تفاصيل قريبة من السطح وصور أهداف أوضح. تحليل SGY مع SubScan.',
        glow: 'orange',
        waMessage: 'مرحباً، أتواصل معكم عبر sub-scan.com. أود الحصول على معلومات حول جهاز Tork Pro 500 MHz.',
      },
    ],
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
  videos: {
    path: '/ar/gpr-videos',
    section: 'فيديوهات',
    title: 'فيديوهات تحليل GPR',
    subtitle:
      'فيديوهات GPR ورادارغرام والموشور وSGY من قناة SubScan على يوتيوب، تُحدَّث عند كل نشر للموقع.',
    viewChannel: 'افتح قناة يوتيوب',
    videosHeading: 'فيديوهات',
    shortsHeading: 'Shorts',
    thumbAlt: 'فيديو تحليل GPR من SubScan',
    shortsAlt: 'فيديو Shorts من SubScan',
    schemaSuffix: 'فيديو تحليل GPR من SubScan',
    empty: 'تعذر تحميل الفيديوهات. يمكنك زيارة قناتنا على يوتيوب.',
    emptyVideos: 'لا توجد فيديوهات عادية بعد.',
    emptyShorts: 'لا توجد Shorts بعد.',
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
    guides: 'أدلة',
    backHome: '← الرئيسية',
    contact: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة.',
  },
  langNames: { tr: 'Türkçe', en: 'English', ar: 'العربية' },
};

export default ar;
