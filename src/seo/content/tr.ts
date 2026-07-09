import type { SeoPageId, SeoPageContent } from '../types';

export const trSeoPages: Record<SeoPageId, SeoPageContent> = {
  'tork-gpr': {
    id: 'tork-gpr',
    slug: 'tork-gpr-yazilimi',
    footerLabel: 'Tork GPR Yazılımı',
    meta: {
      title: 'Tork GPR Yazılımı — SGY Analiz Programı | SubScan',
      description:
        'Tork GPR cihazlarından alınan SGY kayıtlarını SubScan ile analiz edin. Windows ve Android için Türkçe GPR yazılımı. Hiperbol, derinlik ölçümü, 24 preset.',
      keywords:
        'Tork GPR yazılımı, Tork GPR analiz, Tork SGY, Tork Pro 300, Tork Pro 500, GPR yazılımı, SGY analiz programı, yer altı radar yazılımı',
    },
    hero: {
      badge: 'TORK GPR UYUMLU',
      title: 'Tork GPR Kayıtlarını Profesyonelce Analiz Edin',
      subtitle:
        'Tork GPR saha kayıtları standart SGY formatında. SubScan ile dosyayı açın, preset uygulayın, derinlik ve hedef analizi yapın.',
    },
    sections: [
      {
        title: 'Tork GPR ve SubScan nasıl çalışır?',
        paragraphs: [
          'Tork GPR cihazları sahada yer altı radar verisi toplar ve kayıtları SGY formatında saklar. SubScan bu dosyaları hem Android hem Windows üzerinde açarak radargram görüntüleme, filtreleme ve ölçüm imkânı sunar.',
          'Format dönüşümü gerekmez: çekim bittiğinde SGY dosyası doğrudan SubScan\'de analiz edilir. Saha ekibi mobil cihazda hızlı kontrol yapabilir; ofiste masaüstü sürümüyle detaylı işlem yapılabilir.',
        ],
      },
      {
        title: 'SubScan ile yapabilecekleriniz',
        bullets: [
          'SGY ve SEGY dosyalarını açma ve görüntüleme',
          '24 hazır preset: Metal Kenar, Hiperbol, Derin Görsel, Hunter ve daha fazlası',
          '50+ işlem filtresi: AGC, migration, CLAHE, dewow, wavelet, SVD, PCA',
          'Hiperbol analizi ile derinlik ve dielektrik sabiti hesabı',
          'Metal hassasiyeti, void (boşluk) analizi ve derinlik ölçümü',
          'Özel preset kaydetme ve .gxpreset paylaşımı',
          'Radargram PNG dışa aktarma — rapor ve WhatsApp paylaşımı',
        ],
        paragraphs: [],
      },
      {
        title: '300 MHz ve 500 MHz Tork Pro',
        paragraphs: [
          'Tork Pro 500 MHz yüzeye yakın detay ve yüksek çözünürlük için idealdir. Tork Pro 300 MHz ise daha derin penetrasyon sağlar. Her iki cihazın kayıtları SubScan ile aynı iş akışında analiz edilir.',
        ],
      },
    ],
    cta: {
      title: 'Tork GPR analizi için SubScan',
      subtitle: 'Lisans ve fiyat bilgisi için WhatsApp üzerinden bize ulaşın.',
    },
  },
  'sgy-analiz': {
    id: 'sgy-analiz',
    slug: 'sgy-analiz',
    footerLabel: 'SGY Analiz',
    meta: {
      title: 'SGY Analiz Programı — SEGY Radargram İşleme | SubScan',
      description:
        'SGY ve SEGY dosyalarını açın, işleyin ve analiz edin. SubScan GPR analiz yazılımı: preset, filtre, hiperbol analizi, derinlik ölçümü. Windows ve Android.',
      keywords:
        'SGY analiz, SEGY açma programı, SGY dosyası açma, radargram analiz, GPR veri işleme, SGY yazılımı, yer altı radar analiz',
    },
    hero: {
      badge: 'SGY / SEGY',
      title: 'SGY Dosyalarını Açın ve Analiz Edin',
      subtitle:
        'Endüstri standardı SGY formatındaki GPR kayıtlarını görüntüleyin, filtreleyin ve profesyonel raporlara dönüştürün.',
    },
    sections: [
      {
        title: 'SGY dosyası nedir?',
        paragraphs: [
          'SGY (SEGY) yer altı radar verilerinin en yaygın depolama formatıdır. GPR cihazları çekim sırasında radar darbelerini kaydeder; bu veriler SGY dosyası olarak saklanır ve analiz yazılımlarında radargram olarak görüntülenir.',
          'SubScan SGY ve SEGY dosyalarını doğrudan destekler. Tork GPR, GSSI (DZT ayrı formatta) ve diğer SGY üreten cihazlarla uyumludur.',
        ],
      },
      {
        title: 'SubScan SGY işlem özellikleri',
        bullets: [
          'Çoklu dosya: masaüstünde birden fazla radargram penceresi',
          'AGC, bandpass, dewow, background removal',
          'Stolt F-K migration ve hiperbol çökertme',
          'CLAHE, kontrast, kazanç ve 30+ renk paleti',
          'SVD, PCA, stacking ve void probability filtreleri',
          'Hiperbol üzerinde tıklayarak derinlik hesabı',
          'PNG dışa aktarma ve preset paylaşımı',
        ],
        paragraphs: [],
      },
      {
        title: 'Kimler kullanır?',
        paragraphs: [
          'Jeofizik mühendisleri, arkeologlar, altyapı ve enerji sektörü ekipleri, beton ve boşluk tarama uzmanları SGY dosyalarını SubScan ile işler. Türkçe, İngilizce ve Arapça arayüz uluslararası saha kullanımına uygundur.',
        ],
      },
    ],
    cta: {
      title: 'SGY analizi için SubScan',
      subtitle: 'Demo ve lisans bilgisi almak için iletişime geçin.',
    },
  },
  'gpr-program': {
    id: 'gpr-program',
    slug: 'gpr-analiz-programi',
    footerLabel: 'GPR Analiz Programı',
    meta: {
      title: 'GPR Analiz Programı — Yer Altı Radar Yazılımı | SubScan',
      description:
        'Profesyonel GPR analiz programı SubScan. Yer altı radar verilerini görüntüleyin, işleyin, ölçün. Android ve Windows. Mezar tespiti, altyapı, metal ve boşluk analizi.',
      keywords:
        'GPR analiz programı, GPR yazılımı, yer altı radar yazılımı, radargram programı, jeofizik yazılımı, GPR görüntüleme, yer altı görüntüleme yazılımı',
    },
    hero: {
      badge: 'GPR YAZILIMI',
      title: 'Yer Altı Radar İçin Profesyonel Analiz Programı',
      subtitle:
        'Sahadan ofise: GPR verilerinizi açın, işleyin, ölçün ve raporlayın. Tek yazılım, iki platform.',
    },
    sections: [
      {
        title: 'GPR analiz yazılımı ne işe yarar?',
        paragraphs: [
          'Yer altı radar (GPR) cihazları toprak, beton veya asfalt altındaki nesneleri tespit eder. Ham veri analiz yazılımında radargram olarak görüntülenir; filtreler, presetler ve ölçüm araçlarıyla hedefler netleştirilir.',
          'SubScan bu sürecin tamamını kapsar: dosya açma, görüntü işleme, hiperbol analizi, derinlik ölçümü ve PNG rapor üretimi.',
        ],
      },
      {
        title: 'Kullanım alanları',
        bullets: [
          'Mezar ve arkeolojik alan taraması',
          'Boru, kablo ve altyapı tespiti',
          'Beton içi boşluk ve metal tespiti',
          'Yol ve zemin altı analizi',
          'Jeofizik araştırma ve haritalama',
        ],
        paragraphs: [],
      },
      {
        title: 'Neden SubScan?',
        paragraphs: [
          '24 hazır preset ve 50\'den fazla işlem filtresi ile sahada hızlı, ofiste detaylı analiz yapılır. Android sürümü mobil kontrol, masaüstü sürümü çoklu dosya ve gelişmiş işlem zinciri sunar. Tork GPR ile doğrudan SGY uyumu sağlar.',
        ],
      },
    ],
    cta: {
      title: 'GPR analizine başlayın',
      subtitle: 'SubScan lisansı ve fiyat bilgisi için WhatsApp ile yazın.',
    },
  },
  faq: {
    id: 'faq',
    slug: 'sss',
    footerLabel: 'Sık Sorulan Sorular',
    meta: {
      title: 'Sık Sorulan Sorular — SubScan GPR Yazılımı',
      description:
        'SubScan GPR analiz programı hakkında sık sorulan sorular. SGY desteği, Tork GPR uyumu, lisans, Android ve masaüstü farkları.',
      keywords:
        'SubScan SSS, GPR yazılımı sorular, SGY nasıl açılır, Tork GPR SubScan, GPR lisans',
    },
    hero: {
      badge: 'SSS',
      title: 'Sık Sorulan Sorular',
      subtitle: 'SubScan GPR analiz yazılımı hakkında merak edilenler.',
    },
    sections: [],
    faq: [
      {
        question: 'SubScan hangi dosya formatlarını destekler?',
        answer:
          'SubScan SGY, SEGY ve DZT dosyalarını açar. Tork GPR kayıtları SGY formatında doğrudan analiz edilir. Özel işlem zincirleri .gxpreset dosyası olarak kaydedilir ve paylaşılır.',
      },
      {
        question: 'Tork GPR ile uyumlu mu?',
        answer:
          'Evet. Tork GPR cihazlarından alınan SGY kayıtları SubScan\'de format dönüşümü olmadan açılır. Android sürümü Tork kayıt klasörü ile entegre çalışabilir.',
      },
      {
        question: 'Android ve masaüstü arasındaki fark nedir?',
        answer:
          'Android sürümü saha analizi ve hızlı kontrol için tasarlanmıştır. Masaüstü sürümü çoklu dosya penceresi, gelişmiş işlem zinciri ve detaylı ölçüm araçları sunar. Her iki sürüm de aynı preset ve filtre setini kullanır.',
      },
      {
        question: 'SubScan ücretsiz mi?',
        answer:
          'SubScan lisanslı bir yazılımdır. Fiyat ve lisans seçenekleri için WhatsApp veya e-posta ile iletişime geçebilirsiniz.',
      },
      {
        question: 'Hiperbol analizi nasıl yapılır?',
        answer:
          'Radargram üzerinde hiperbol şeklindeki hedefe tıklayarak derinlik, zaman gecikmesi, dielektrik sabiti ve hız hesaplanır. Migration filtreleri ile hiperbol çökertme de uygulanabilir.',
      },
      {
        question: 'Hangi dilleri destekliyor?',
        answer: 'SubScan arayüzü Türkçe, İngilizce ve Arapça dillerinde kullanılabilir.',
      },
      {
        question: '300 MHz ve 500 MHz GPR farkı nedir?',
        answer:
          '500 MHz daha yüksek çözünürlük ve yüzeye yakın detay sağlar. 300 MHz daha derin penetrasyon sunar. Her iki frekansın kayıtları SubScan ile analiz edilir.',
      },
      {
        question: 'Cihaz satışı SubScan\'den mi yapılıyor?',
        answer:
          'Hayır. SubScan bağımsız bir yazılımdır. Tork GPR cihaz satışı Farmet üzerinden yapılır; sitemizdeki ekipman bölümünden bilgi alabilirsiniz.',
      },
    ],
    cta: {
      title: 'Başka sorunuz mu var?',
      subtitle: 'WhatsApp veya e-posta ile bize ulaşın.',
    },
  },
};
