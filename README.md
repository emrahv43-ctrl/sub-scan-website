# sub-scan-website

SubScan tanıtım sitesi — [sub-scan.com](https://sub-scan.com)

## Teknoloji

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- Cloudflare Pages

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:4321` adresini açın.

## Build

```bash
npm run build
```

Çıktı: `dist/` klasörü

## Cloudflare Pages

| Ayar | Değer |
|------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 |

## Güncellenecek yerler

- `src/layouts/BaseLayout.astro` → WhatsApp numarası ve e-posta
- `src/components/Footer.astro` → İletişim bilgileri
- `src/components/WhatsAppButton.astro` → WhatsApp numarası
- `src/pages/index.astro` → İletişim bölümü linkleri
- `public/` → Ekran görüntüleri ve OG image

## Ekran görüntüsü ekleme

1. Görselleri `public/screenshots/` klasörüne koyun
2. `ProductSection.astro` içindeki placeholder'ı gerçek `<img>` ile değiştirin
