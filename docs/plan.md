# Dokümantasyon Sitesi Planı

## 🎯 Hedefler

shadcn UI benzeri bir dokümantasyon sitesi oluşturmak:
- Component galerisi
- Her component için detaylı sayfa
- Canlı kod örnekleri
- API dokümantasyonu
- Kurulum rehberi

## 🛠️ Teknoloji Seçimi

### Seçenek 1: VitePress (Önerilen) ✅
- **Avantajlar:**
  - Çok hızlı (Vite tabanlı)
  - Markdown + Vue components
  - Otomatik dark mode
  - SEO dostu
  - Kolay kurulum

### Seçenek 2: Docusaurus
- **Avantajlar:**
  - React tabanlı
  - Çok özellikli
  - Meta tarafından geliştiriliyor

### Seçenek 3: Next.js + Tailwind (shadcn UI gibi)
- **Avantajlar:**
  - Tam kontrol
  - Modern stack
- **Dezavantajlar:**
  - Daha fazla geliştirme gerektirir

## 📁 Site Yapısı

```
docs/
├── .vitepress/
│   ├── config.ts
│   └── theme/
│       └── index.ts
├── guide/
│   ├── installation.md
│   └── getting-started.md
├── components/
│   ├── button.md
│   ├── card.md
│   └── ...
└── index.md
```

## 🎨 Özellikler

- [ ] Component galerisi (grid layout)
- [ ] Her component için:
  - [ ] Kullanım örnekleri
  - [ ] API dokümantasyonu
  - [ ] Canlı kod örnekleri
  - [ ] Variant gösterimleri
- [ ] Dark mode
- [ ] Arama özelliği
- [ ] Responsive tasarım
- [ ] Code copy butonları

## 🚀 Kurulum Adımları

1. VitePress kurulumu
2. Temel konfigürasyon
3. Tema özelleştirme
4. Component sayfaları oluşturma
5. GitHub Pages veya Vercel'e deploy

