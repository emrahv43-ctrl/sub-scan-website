import type { Translations } from './types';

const tr: Translations = {
  lang: 'tr',
  dir: 'ltr',
  locale: 'tr_TR',
  path: '/',
  meta: {
    title: 'SubScan — GPR Analiz Yazılımı',
    description:
      'SubScan — Android ve masaüstü GPR / SGY / DZT analiz yazılımı. Yer altı radar verilerini profesyonelce işleyin, görselleştirin ve analiz edin.',
    keywords:
      'GPR, yer altı radar, SGY, DZT, SEGY, radargram, SubScan, GroundX, jeofizik, arkeoloji, altyapı tarama',
  },
  brand: { subtitle: 'GPR ANALİZ' },
  nav: {
    features: 'Özellikler',
    desktop: 'Masaüstü',
    android: 'Android',
    formats: 'Formatlar',
    contact: 'İletişim',
    demo: 'Satın Al',
  },
  hero: {
    badge: 'GPR / SGY / DZT ANALİZ',
    title1: 'Yer Altını',
    title2: 'Profesyonelce',
    title3: 'Analiz Edin',
    description:
      'SubScan, yer altı radar verilerini görselleştirmek, işlemek ve analiz etmek için Android ve masaüstü platformlarında çalışan profesyonel GPR yazılımıdır.',
    ctaDemo: 'Satın Al',
    ctaExplore: 'Özellikleri Keşfet',
    statPlatform: 'Platform',
    statFormats: 'Dosya Formatı',
    statFilters: 'İşlem Filtresi',
  },
  features: {
    section: 'ÖZELLİKLER',
    title: 'Neden SubScan?',
    subtitle: 'Saha çalışmasından ofis analizine kadar, GPR verilerinizi işlemek için ihtiyacınız olan her şey.',
    items: [
      {
        icon: '📡',
        title: 'SGY ve DZT Desteği',
        description:
          'SGY/SEGY ve DZT dosyalarını açın. Tork GPR kayıtları ve GSSI radar verileriyle uyumlu.',
      },
      {
        icon: '⚡',
        title: '22 Preset + 50 İşlem Filtresi',
        description:
          'Metal Kenar, Hiperbol, Gürültü Temiz, Derin Görsel ve daha fazlası. AGC, migration, CLAHE, dewow, wavelet, stacking.',
      },
      {
        icon: '🎯',
        title: 'Hiperbol Analizi',
        description:
          'Hiperbol üzerinde tıklayarak derinlik, zaman gecikmesi, dielektrik sabiti ve hız hesaplayın.',
      },
      {
        icon: '🔍',
        title: 'Metal ve Hedef Tespiti',
        description:
          'Metal hassasiyet ayarı, Metal Kenar / Saf Metal presetleri ve boşluk (void) analiz filtreleri.',
      },
      {
        icon: '💾',
        title: 'Özel Preset Sistemi',
        description:
          'İşlem zincirinizi kaydedin, dışa/içe aktarın ve paylaşın. GroundX/SubScan .gxpreset formatı.',
      },
      {
        icon: '🌍',
        title: '3 Dil Desteği',
        description: 'Türkçe, İngilizce ve Arapça arayüz. Uluslararası saha ve ofis kullanımı için hazır.',
      },
    ],
  },
  desktop: {
    badge: 'MASAÜSTÜ ANALİZ',
    title: 'SubScan Desktop',
    subtitle:
      'Qt/C++ masaüstü uygulaması. Birden fazla dosyayı aynı anda açın, gelişmiş işlem zinciri ve derinlik analizi için tasarlandı.',
    features: [
      'SGY/SEGY ve DZT dosya desteği',
      '22 hazır preset ve 50+ işlem filtresi',
      'Çoklu dosya: aynı anda birden fazla radargram penceresi',
      'Hiperbol analizi, derinlik ölçümü ve iz aralığı hesabı',
      'Metal hassasiyeti, kazanç, kontrast ve 15+ renk paleti',
      'Özel preset kaydetme, dışa/içe aktarma (.gxpreset)',
      'Radargram PNG dışa aktarma',
      'Türkçe, İngilizce ve Arapça arayüz',
    ],
    screenshot: '/screenshots/desktop-tr.png',
    screenshotAlt: 'SubScan Desktop masaüstü arayüzü — çoklu radargram analizi',
  },
  android: {
    badge: 'SAHA ANALİZİ',
    title: 'SubScan Android',
    subtitle:
      'Mobil cihazınızda anında GPR analizi. Tork GPR ile entegre çalışır, sahadan ofise kesintisiz veri akışı sağlar.',
    features: [
      'SGY/SEGY ve DZT dosya desteği',
      'Tork GPR kayıt klasörü ile otomatik dosya entegrasyonu',
      '22 hazır preset ve 50+ işlem filtresi',
      'Hiperbol analizi, derinlik ölçümü ve metal hassasiyeti',
      'Kazanç, kontrast, parlaklık ve renk paleti seçimi',
      'Radargram görüntüsünü paylaşma',
      'Özel preset içe/dışa aktarma ve paylaşım',
      'Türkçe, İngilizce ve Arapça arayüz',
    ],
    screenshot: '/screenshots/android-analysis.png',
    screenshotAlt: 'SubScan Android uygulaması — saha GPR analizi',
  },
  formats: {
    section: 'FORMATLAR',
    title: 'Desteklenen Dosya Formatları',
    subtitle: 'Farklı GPR cihazlarından gelen verileri tek yazılımda açın.',
    items: [
      { ext: 'SGY / SEGY', desc: 'GPR kayıt formatı — Tork GPR ve endüstri standardı' },
      { ext: 'DZT', desc: 'GSSI radar cihazları' },
      { ext: '.gxpreset', desc: 'SubScan özel işlem preset dosyası' },
    ],
  },
  contact: {
    section: 'İLETİŞİM',
    title: 'Satın Alın',
    subtitle:
      'SubScan lisansı almak veya fiyat bilgisi için bize ulaşın. WhatsApp üzerinden hızlıca yanıt alabilirsiniz.',
    whatsapp: 'WhatsApp ile Yazın',
    email: 'E-posta Gönderin',
    waMessage: 'Merhaba, SubScan satın almak istiyorum.',
  },
  footer: {
    description:
      'Yer altı radar (GPR) verilerini analiz etmek için profesyonel Android ve masaüstü yazılımı.',
    products: 'Ürünler',
    contact: 'İletişim',
    rights: 'Tüm hakları saklıdır.',
  },
  langNames: { tr: 'Türkçe', en: 'English', ar: 'العربية' },
};

export default tr;
