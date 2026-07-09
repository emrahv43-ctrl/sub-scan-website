import type { SeoPageId, SeoPageContent } from '../types';

export const arSeoPages: Record<SeoPageId, SeoPageContent> = {
  'tork-gpr': {
    id: 'tork-gpr',
    slug: 'tork-gpr-software',
    footerLabel: 'برنامج Tork GPR',
    meta: {
      title: 'برنامج Tork GPR — تحليل SGY | SubScan',
      description:
        'حلل تسجيلات Tork GPR بصيغة SGY مع SubScan. برنامج GPR احترافي لـ Windows و Android.',
      keywords:
        'برنامج Tork GPR, تحليل Tork GPR, Tork SGY, برنامج تحليل GPR, برنامج SGY',
    },
    hero: {
      badge: 'متوافق مع TORK GPR',
      title: 'حلل تسجيلات Tork GPR باحترافية',
      subtitle:
        'بيانات Tork GPR تُحفظ بصيغة SGY القياسية. افتح الملفات في SubScan وطبّق الإعدادات المسبقة وحلل الأهداف.',
    },
    sections: [
      {
        title: 'كيف يعمل Tork GPR مع SubScan؟',
        paragraphs: [
          'أجهزة Tork GPR تجمع بيانات الرادار في الميدان وتحفظها كملفات SGY. يفتح SubScan هذه الملفات على Android و Windows للعرض والتصفية والقياس.',
          'لا حاجة لتحويل الصيغة — ملف SGY جاهز للتحليل مباشرة في SubScan.',
        ],
      },
      {
        title: 'ما يمكنك فعله مع SubScan',
        bullets: [
          'فتح وعرض ملفات SGY و SEGY',
          '24 إعداداً مسبقاً جاهزاً',
          'أكثر من 50 مرشح معالجة',
          'تحليل القطع المكافئ للعمق',
          'حساسية المعادن وتحليل الفراغات',
          'حفظ الإعدادات المسبقة ومشاركتها',
          'تصدير PNG للتقارير',
        ],
        paragraphs: [],
      },
      {
        title: 'Tork Pro 300 و 500 MHz',
        paragraphs: [
          'Tork Pro 500 MHz للتفاصيل القريبة من السطح. Tork Pro 300 MHz للاختراق الأعمق. كلا الجهازين يُحللان في SubScan بنفس سير العمل.',
        ],
      },
    ],
    cta: {
      title: 'SubScan لتحليل Tork GPR',
      subtitle: 'تواصل معنا عبر WhatsApp للترخيص والأسعار.',
    },
  },
  'sgy-analiz': {
    id: 'sgy-analiz',
    slug: 'sgy-analysis',
    footerLabel: 'تحليل SGY',
    meta: {
      title: 'برنامج تحليل SGY — معالجة الراديوغرام | SubScan',
      description:
        'افتح وعالج وحلل ملفات SGY و SEGY. برنامج SubScan GPR مع إعدادات مسبقة ومرشحات وتحليل القطع المكافئ.',
      keywords:
        'تحليل SGY, فتح ملف SGY, تحليل الراديوغرام, معالجة بيانات GPR',
    },
    hero: {
      badge: 'SGY / SEGY',
      title: 'افتح وحلل ملفات SGY',
      subtitle:
        'اعرض وصفِّ و حوّل تسجيلات GPR بصيغة SGY إلى تقارير احترافية.',
    },
    sections: [
      {
        title: 'ما هو ملف SGY؟',
        paragraphs: [
          'SGY (SEGY) هو الصيغة الأكثر شيوعاً لتخزين بيانات رادار الأرض. تسجل أجهزة GPR النبضات أثناء المسح وتُخزن كملف SGY.',
          'يدعم SubScan ملفات SGY و SEGY مباشرة. متوافق مع Tork GPR و GSSI وغيرها.',
        ],
      },
      {
        title: 'ميزات معالجة SGY في SubScan',
        bullets: [
          'ملفات متعددة على سطح المكتب',
          'AGC و bandpass و dewow',
          'Stolt F-K migration',
          'CLAHE وتباين و30+ لوحة ألوان',
          'SVD و PCA و void probability',
          'قياس العمق بالنقر على القطع المكافئ',
          'تصدير PNG ومشاركة الإعدادات',
        ],
        paragraphs: [],
      },
      {
        title: 'من يستخدمه؟',
        paragraphs: [
          'الجيوفيزيائيون وعلماء الآثار وفرق البنية التحتية يعالجون ملفات SGY مع SubScan. واجهة بالتركية والإنجليزية والعربية.',
        ],
      },
    ],
    cta: {
      title: 'SubScan لتحليل SGY',
      subtitle: 'تواصل معنا للحصول على معلومات الترخيص.',
    },
  },
  'gpr-program': {
    id: 'gpr-program',
    slug: 'gpr-analysis-software',
    footerLabel: 'برنامج تحليل GPR',
    meta: {
      title: 'برنامج تحليل GPR — رادار الأرض | SubScan',
      description:
        'برنامج SubScan GPR الاحترافي. اعرض وعالج وقِس بيانات الرادار تحت الأرض. Android و Windows.',
      keywords:
        'برنامج تحليل GPR, برنامج رادار الأرض, برنامج الراديوغرام, برنامج جيوفيزياء',
    },
    hero: {
      badge: 'برنامج GPR',
      title: 'برنامج تحليل احترافي لرادار الأرض',
      subtitle:
        'من الميدان إلى المكتب: افتح وعالج وقِس وأعد التقارير. برنامج واحد، منصتان.',
    },
    sections: [
      {
        title: 'ما فائدة برنامج تحليل GPR؟',
        paragraphs: [
          'رادار الأرض (GPR) يكشف الأجسام تحت التربة أو الخرسانة. تُعرض البيانات كراديوغرام في برنامج التحليل.',
          'يغطي SubScan سير العمل الكامل: فتح الملفات والمعالجة وتحليل القطع المكافئ وقياس العمق وتقارير PNG.',
        ],
      },
      {
        title: 'مجالات الاستخدام',
        bullets: [
          'مسح القبور والآثار',
          'كشف الأنابيب والكابلات',
          'كشف الفراغات والمعادن في الخرسانة',
          'تحليل الطرق والتربة',
          'البحث الجيوفيزيائي',
        ],
        paragraphs: [],
      },
      {
        title: 'لماذا SubScan؟',
        paragraphs: [
          '24 إعداداً مسبقاً وأكثر من 50 مرشحاً للمعالجة. إصدار Android للميدان وإصدار سطح المكتب للتحليل المتقدم. توافق SGY مع Tork GPR.',
        ],
      },
    ],
    cta: {
      title: 'ابدأ تحليل GPR',
      subtitle: 'راسلنا على WhatsApp للترخيص.',
    },
  },
  faq: {
    id: 'faq',
    slug: 'faq',
    footerLabel: 'الأسئلة الشائعة',
    meta: {
      title: 'الأسئلة الشائعة — SubScan GPR',
      description:
        'أسئلة شائعة حول برنامج SubScan GPR. دعم SGY وتوافق Tork GPR والترخيص.',
      keywords:
        'SubScan أسئلة, برنامج GPR, فتح SGY, Tork GPR SubScan',
    },
    hero: {
      badge: 'أسئلة شائعة',
      title: 'الأسئلة الشائعة',
      subtitle: 'أسئلة شائعة حول برنامج SubScan GPR.',
    },
    sections: [],
    faq: [
      {
        question: 'ما صيغ الملفات التي يدعمها SubScan؟',
        answer: 'يفتح SubScan ملفات SGY و SEGY و DZT. تسجيلات Tork GPR تُحلل مباشرة. سلاسل المعالجة تُحفظ كملفات .gxpreset.',
      },
      {
        question: 'هل هو متوافق مع Tork GPR؟',
        answer: 'نعم. تسجيلات Tork GPR بصيغة SGY تُفتح في SubScan دون تحويل صيغة.',
      },
      {
        question: 'ما الفرق بين Android وسطح المكتب؟',
        answer: 'Android للميدان والتحقق السريع. سطح المكتب لملفات متعددة ومعالجة متقدمة. كلاهما يستخدم نفس الإعدادات والمرشحات.',
      },
      {
        question: 'هل SubScan مجاني؟',
        answer: 'SubScan برنامج مرخص. تواصل معنا عبر WhatsApp أو البريد للأسعار.',
      },
      {
        question: 'كيف يعمل تحليل القطع المكافئ؟',
        answer: 'انقر على هدف قطع مكافئ على الراديوغرام لحساب العمق وثابت العزل الكهربائي والسرعة.',
      },
      {
        question: 'ما اللغات المدعومة؟',
        answer: 'واجهة SubScan بالتركية والإنجليزية والعربية.',
      },
      {
        question: 'ما الفرق بين 300 و 500 MHz؟',
        answer: '500 MHz دقة أعلى قرب السطح. 300 MHz اختراق أعمق. كلا الترددين يُحلل في SubScan.',
      },
      {
        question: 'هل يبيع SubScan أجهزة GPR؟',
        answer: 'لا. SubScan برنامج مستقل. بيع أجهزة Tork GPR عبر Farmet.',
      },
    ],
    cta: {
      title: 'لديك المزيد من الأسئلة؟',
      subtitle: 'تواصل معنا عبر WhatsApp أو البريد.',
    },
  },
};
