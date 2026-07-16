import type { Translations } from './types';

const tr: Translations = {
  lang: 'tr',
  dir: 'ltr',
  locale: 'tr_TR',
  path: '/',
  meta: {
    title: 'SubScan — GPR Analiz Programı | SGY, DZT, Tork GPR Yazılımı',
    description:
      'SubScan: Android ve Windows için GPR analiz programı. SGY, SEGY ve DZT dosyalarını açın. Tork GPR ve GSSI uyumlu. Jeofizik, arkeoloji, mezar tespiti, altyapı ve beton tarama için profesyonel radargram yazılımı.',
    keywords:
      'SubScan, sub-scan, GPR, GPR analiz programı, GPR yazılımı, yer altı radar, SGY, SEGY, DZT, Tork GPR, GSSI, radargram, jeofizik, jeofizik yazılımı, arkeoloji GPR, mezar tespiti, altyapı tarama, beton tarama, yer altı görüntüleme, hiperbol analiz, radar veri işleme',
  },
  brand: { subtitle: 'GPR ANALİZ' },
  nav: {
    features: 'Özellikler',
    desktop: 'Masaüstü',
    android: 'Android',
    workflow: 'Saha Akışı',
    partners: 'Ekipman',
    formats: 'Formatlar',
    videos: 'Videolar',
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
        title: '24 Preset + 50+ İşlem Filtresi',
        description:
          'Metal Kenar, Hiperbol, Gürültü Temiz, Derin Görsel, Hunter, Ghost Hunter ve daha fazlası. AGC, migration, Stolt F-K, CLAHE, dewow, wavelet, SVD, PCA, stacking.',
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
          'Metal hassasiyet ayarı, Metal Kenar / Saf Metal presetleri, boşluk (void) analizi ve Void probability filtresi.',
      },
      {
        icon: '💾',
        title: 'Özel Preset Sistemi',
        description:
          'İşlem zincirinizi kaydedin, dışa/içe aktarın ve paylaşın. SubScan .gxpreset formatı.',
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
      'Windows için profesyonel masaüstü uygulaması. Birden fazla dosyayı aynı anda açın, gelişmiş işlem zinciri ve derinlik analizi için tasarlandı.',
    features: [
      'SGY/SEGY ve DZT dosya desteği',
      '24 hazır preset ve 50+ işlem filtresi',
      'Çoklu dosya: aynı anda birden fazla radargram penceresi',
      'Hiperbol analizi, derinlik ölçümü ve iz aralığı hesabı',
      'Metal hassasiyeti, kazanç, kontrast ve 30+ renk paleti',
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
      '24 hazır preset ve 50+ işlem filtresi',
      'Hiperbol analizi, derinlik ölçümü ve metal hassasiyeti',
      'Kazanç, kontrast, parlaklık ve 30+ renk paleti seçimi',
      'Radargram görüntüsünü paylaşma',
      'Özel preset içe/dışa aktarma ve paylaşım',
      'Türkçe, İngilizce ve Arapça arayüz',
    ],
    screenshot: '/screenshots/android-analysis.png',
    screenshotAlt: 'SubScan Android uygulaması — saha GPR analizi',
  },
  workflow: {
    section: 'SAHA İŞ AKIŞI',
    title: 'Sahadan Rapora Tek Akış',
    subtitle:
      'Çekimden analize, preset paylaşımından PNG rapora — SubScan saha ekibinin günlük işini hızlandırır.',
    comingSoon: {
      badge: 'YAKINDA',
      text: 'Tork GPR için yakın güncellemede: Canlı çekim (gerçek zamanlı radar görüntüleme ve kayıt) özelliği SubScan\'e eklenecek.',
    },
    groups: [
      {
        id: 'field',
        icon: '📍',
        title: 'Sahada',
        items: [
          {
            title: 'Anlık görüntü',
            description: 'Yürürken radar ekranda akar, hedefi yerinde görürsün.',
          },
          {
            title: 'Hızlı kontrol',
            description: 'Başlat, duraklat, devam, durdur; arazide zaman kaybetmezsin.',
          },
          {
            title: 'Tek tuş kayıt',
            description: 'Önemli çekimi hemen SGY olarak saklarsın.',
          },
          {
            title: 'Standart SGY kayıt',
            description: 'Ofiste SubScan ile doğrudan açılır; format dönüşümü gerekmez.',
          },
          {
            title: '75 / 150 ns',
            description: 'Farklı saha koşullarına hızlı uyum.',
          },
          {
            title: 'Ayarlar hatırlanır',
            description: 'COM ve saha ayarları sonraki açılışta korunur.',
          },
        ],
      },
      {
        id: 'after',
        icon: '⚡',
        title: 'Çekim sonrası',
        items: [
          {
            title: 'Durdurunca çekim hazır',
            description: 'Ayrı programa geçmeden incelemeye başlarsın.',
          },
          {
            title: 'Birden fazla çekim',
            description: 'Aynı gün aldığın çekimleri yan yana karşılaştırırsın.',
          },
          {
            title: 'Hazır analiz seçenekleri',
            description: 'Metal, derin, hiperbol vb. tek tık presetler.',
          },
          {
            title: 'Renk ve görünüm',
            description: 'Aynı veriyi farklı şekilde okuyup yorumlarsın.',
          },
          {
            title: 'Toplu uygulama',
            description: 'Aynı işlemi tek çekime veya tüm açık çekimlere birden ver.',
          },
        ],
      },
      {
        id: 'preset',
        icon: '💾',
        title: 'Kendi profilini oluştur ve paylaş',
        items: [
          {
            title: 'Özel preset kaydet',
            description: 'Beğendiğin filtre kombinasyonunu özel preset olarak kaydet.',
          },
          {
            title: 'İsim ver, düzenle, sil',
            description: 'Preset kütüphaneni kendi iş akışına göre yönet.',
          },
          {
            title: 'Dışa aktar / içe aktar',
            description: 'Ekibe veya müşteriye .gxpreset dosyası olarak gönder.',
          },
        ],
      },
      {
        id: 'measure',
        icon: '📐',
        title: 'Ölçüm ve rapor',
        items: [
          {
            title: 'Derinlik ölçümü',
            description: 'Hiperbol veya imleçle hedef derinliğini oku.',
          },
          {
            title: 'Mesafe / uzunluk ölçümü',
            description: 'Radargram üzerinde mesafe ve boyut hesapla.',
          },
          {
            title: 'Hiperbol çökertme (migration)',
            description: 'Hedefi daha net konumlandır.',
          },
          {
            title: 'PNG kayıt',
            description: 'Rapor, sunum ve WhatsApp paylaşımı için görüntü al.',
          },
        ],
      },
      {
        id: 'files',
        icon: '📂',
        title: 'Dosya',
        items: [
          {
            title: 'Kayıtlı SGY dosyalarını aç',
            description: 'Önceki çekimleri analiz et, karşılaştır.',
          },
          {
            title: 'REC ile kalıcı kayıt',
            description: 'REC olmadan oturum içinde geçici inceleme yapabilirsin.',
          },
        ],
      },
    ],
    audience: {
      title: 'Kimler için?',
      description: 'Saha ekibi — hızlı çekim, hızlı karar.',
    },
  },
  partners: {
    section: 'SAHA EKİPMANI',
    title: 'Tork Pro GPR Cihazları',
    subtitle: 'SubScan uyumlu · Satış: Farmet',
    disclaimer: 'Marka ve cihaz satışı ilgili firmalara aittir. SubScan bağımsız bir yazılımdır.',
    visitSite: 'Siteyi İncele',
    buy: 'Satın Al',
    farmetUrl: 'https://farmet.net',
    items: [
      {
        id: 'tork-300',
        image: '/partners/tork-pro-300.png',
        imageAlt: 'Tork Pro 300 MHz yer radarı cihazı',
        name: 'Tork Pro 300 MHz',
        mhz: '300 MHz',
        tagline: 'Daha derin tarama',
        description: '500 MHz\'e göre daha derin penetrasyon. SubScan ile SGY analizi.',
        glow: 'green',
        waMessage: 'Merhaba, sub-scan.com üzerinden size ulaşıyorum. Tork Pro 300 MHz cihazı hakkında bilgi almak istiyorum.',
      },
      {
        id: 'tork-500',
        image: '/partners/tork-pro-500.png',
        imageAlt: 'Tork Pro 500 MHz yer radarı cihazı',
        name: 'Tork Pro 500 MHz',
        mhz: '500 MHz',
        tagline: 'Yüksek çözünürlük',
        description: 'Yüzeye yakın detay ve net hedef görüntüleme. SubScan ile SGY analizi.',
        glow: 'orange',
        waMessage: 'Merhaba, sub-scan.com üzerinden size ulaşıyorum. Tork Pro 500 MHz cihazı hakkında bilgi almak istiyorum.',
      },
    ],
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
  videos: {
    path: '/gpr-analiz-videolari',
    section: 'VİDEOLAR',
    title: 'GPR Analiz Videoları',
    subtitle:
      'SubScan YouTube kanalından otomatik güncellenen GPR, radargram, prizma ve SGY analiz videoları.',
    viewChannel: 'YouTube Kanalını Aç',
    thumbAlt: 'SubScan GPR analiz videosu',
    schemaSuffix: 'SubScan GPR analiz videosu',
    empty: 'Videolar yüklenemedi. YouTube kanalımızı ziyaret edebilirsiniz.',
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
    guides: 'Rehberler',
    backHome: '← Ana sayfa',
    contact: 'İletişim',
    rights: 'Tüm hakları saklıdır.',
  },
  langNames: { tr: 'Türkçe', en: 'English', ar: 'العربية' },
};

export default tr;
