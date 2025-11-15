# @ayz/nexa-ui - Yol Haritası

## 📋 Proje Özeti

**@ayz/nexa-ui**, React ve TypeScript tabanlı, hafif ve modüler bir UI bileşen kütüphanesidir. shadcn UI'den ilham alınarak geliştirilmiş, ancak daha az bağımlılık ve daha optimize bir yapıya sahiptir.

## 🎯 Proje Adlandırma

### Önerilen İsimler:
1. **@ayz/nexa-ui** ✅ (Önerilen)
   - Kısa ve akılda kalıcı
   - "Nexa" modern ve gelecek odaklı bir çağrışım yapar
   
2. **@ayz/ui** 
   - Daha kısa alternatif
   - Ancak daha az özgün

3. **@ayz/nexus-ui**
   - Bağlantı/köprü anlamı taşır
   - UI bileşenlerinin birbirine bağlanmasını simgeler

**Öneri:** `@ayz/nexa-ui` - Hem özgün hem de profesyonel görünüyor.

## 🏗️ Mimari Yaklaşım

### Temel Prensipler:
- ✅ **Modüler Yapı:** Her bileşen bağımsız paket olarak kurulabilir
- ✅ **Zero External Dependencies:** Dış paket bağımlılığı yok (sadece React peer dependency)
- ✅ **Native Implementations:** Tüm özellikler kendi kodumuzla implement edilecek
- ✅ **Tree-shaking Desteği:** Kullanılmayan kod otomatik temizlenir
- ✅ **TypeScript First:** Tam tip güvenliği
- ✅ **Tailwind CSS Entegrasyonu:** Stil yönetimi için Tailwind (peer dependency)
- ✅ **CSS-first Animations:** framer-motion yerine CSS transitions/animations
- ✅ **Zero Runtime:** Mümkün olduğunca compile-time optimizasyonları

### Paket Yapısı:
```
@ayz/nexa-ui/
├── packages/
│   ├── core/              # Temel utilities ve hooks
│   ├── button/            # Button bileşeni
│   ├── input/             # Input bileşeni
│   ├── card/              # Card bileşeni
│   ├── dialog/            # Dialog/Modal bileşeni
│   ├── dropdown/          # Dropdown bileşeni
│   ├── table/             # Table bileşeni
│   └── ...                # Diğer bileşenler
├── cli/                   # CLI aracı (bileşen ekleme için)
├── docs/                  # Dokümantasyon
└── playground/            # Geliştirme ve test ortamı
```

## 📦 Teknoloji Stack'i

### Core Dependencies:
- **React** (^18.0.0) - Peer dependency
- **TypeScript** (^5.0.0)
- **Tailwind CSS** (^4.0.0) - Peer dependency

### Zero External Dependencies Yaklaşımı:
- ✅ **Kendi Utility Fonksiyonları:** `cn()` (class name birleştirme) - clsx yerine native implementasyon
- ✅ **Native React Hooks:** Tüm hook'lar kendi implementasyonumuz (useClickOutside, useMediaQuery, useToggle, vb.)
- ✅ **CSS Animations:** framer-motion yerine CSS transitions ve animations kullanılacak
- ✅ **Native Dialog/Modal:** @radix-ui yerine kendi Portal ve Dialog implementasyonu
- ✅ **Form Management:** react-hook-form yerine kendi form hook'ları ve state yönetimi
- ✅ **Accessibility:** ARIA attributes ve keyboard navigation kendi implementasyonumuzla

### Build Tools:
- **Turborepo** veya **Nx** - Monorepo yönetimi
- **Vite** - Build tool
- **Rollup** veya **tsup** - Paket build
- **Vitest** - Test framework
- **Storybook** - Bileşen dokümantasyonu ve playground

## 🗺️ Geliştirme Aşamaları

### Faz 1: Proje Kurulumu (Hafta 1)
- [ ] Monorepo yapısının kurulması (Turborepo/Nx)
- [ ] Temel paket yapısının oluşturulması
- [ ] Build sisteminin kurulması
- [ ] TypeScript konfigürasyonu
- [ ] Tailwind CSS entegrasyonu
- [ ] CI/CD pipeline'ının kurulması (GitHub Actions)

### Faz 2: Core Paket (Hafta 1-2)
- [ ] `@ayz/nexa-ui/core` paketinin oluşturulması
- [ ] `cn()` utility fonksiyonu (class name birleştirme) - clsx yerine native
- [ ] Temel hooks implementasyonu:
  - `useMediaQuery` - Responsive breakpoint detection
  - `useClickOutside` - Click outside detection
  - `useToggle` - Boolean state toggle
  - `useDebounce` - Debounce utility
  - `useFocusTrap` - Accessibility için focus trap
  - `usePortal` - Portal oluşturma için hook
- [ ] Portal component (Dialog/Modal için)
- [ ] Type definitions ve utilities
- [ ] Test coverage

### Faz 3: Temel Bileşenler (Hafta 2-4)
- [ ] **Button** - Temel buton bileşeni
- [ ] **Input** - Form input bileşeni
- [ ] **Card** - Kart bileşeni
- [ ] **Badge** - Etiket bileşeni
- [ ] **Avatar** - Avatar bileşeni
- [ ] Her bileşen için:
  - TypeScript tipleri
  - Tailwind CSS stilleri
  - Variant desteği
  - Dokümantasyon
  - Testler

### Faz 4: İleri Seviye Bileşenler (Hafta 4-6)
- [ ] **Dialog/Modal** - Native Portal tabanlı modal (ARIA, focus trap, ESC key desteği)
- [ ] **Dropdown** - Native dropdown menü (click outside, keyboard navigation)
- [ ] **Select** - Custom select bileşeni (native select wrapper veya custom)
- [ ] **Table** - Tablo bileşeni
- [ ] **Tabs** - Sekme bileşeni (keyboard navigation ile)
- [ ] **Toast/Notification** - Bildirim sistemi (CSS animations ile)
- [ ] **Tooltip** - Tooltip bileşeni (CSS transitions ile)
- Her bileşen için:
  - Native React implementasyonu (dış bağımlılık yok)
  - CSS transitions/animations (framer-motion yok)
  - ARIA attributes ve accessibility desteği
  - Keyboard navigation desteği

### Faz 5: Form Bileşenleri (Hafta 6-7)
- [ ] **Form** - Form wrapper ve state yönetimi (kendi hook'umuz)
- [ ] **useForm** hook - Form state ve validation (react-hook-form yerine)
- [ ] **Checkbox** - Checkbox bileşeni
- [ ] **Radio** - Radio button
- [ ] **Switch** - Toggle switch (CSS transitions ile)
- [ ] **Textarea** - Textarea bileşeni
- [ ] **DatePicker** - Tarih seçici (native date input veya custom calendar)
- Form özellikleri:
  - Native form validation
  - Custom validation hooks
  - Error state yönetimi
  - Form state persistence (opsiyonel)

### Faz 6: CLI Aracı (Hafta 7-8)
- [ ] `nexa-ui add <component>` komutu
- [ ] Bileşen dosyalarını projeye kopyalama
- [ ] Tailwind config güncelleme (gerekli utility class'ları ekleme)
- [ ] Proje yapısını algılama ve uyum sağlama
- [ ] TypeScript path alias kontrolü
- **Not:** Dış bağımlılık ekleme yok - sadece bileşen dosyaları kopyalanacak

### Faz 7: Dokümantasyon (Hafta 8-9)
- [ ] Storybook kurulumu
- [ ] Her bileşen için Storybook stories
- [ ] API dokümantasyonu
- [ ] Kullanım örnekleri
- [ ] Migration guide (shadcn UI'den geçiş)
- [ ] Website/docs sitesi (VitePress veya Docusaurus)

### Faz 8: Optimizasyon ve Test (Hafta 9-10)
- [ ] Bundle size optimizasyonu
- [ ] Tree-shaking testleri
- [ ] Performance testleri
- [ ] Cross-browser testleri
- [ ] Accessibility (a11y) kontrolleri
- [ ] TypeScript strict mode kontrolleri

### Faz 9: NPM Yayımlama (Hafta 10)
- [ ] NPM hesabı oluşturma/kurulumu
- [ ] Paket versiyonlama stratejisi (Semantic Versioning)
- [ ] NPM publish konfigürasyonu
- [ ] Beta sürüm yayımlama
- [ ] Community feedback toplama
- [ ] v1.0.0 release

## 📝 Paket Yapılandırması

### package.json Örneği (Core Paket):
```json
{
  "name": "@ayz/nexa-ui-core",
  "version": "1.0.0",
  "description": "Core utilities for @ayz/nexa-ui",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "sideEffects": false,
  "files": [
    "dist"
  ],
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "keywords": [
    "react",
    "ui",
    "components",
    "tailwind",
    "typescript"
  ],
  "license": "MIT"
}
```

### Bileşen Paketi Örneği (Button):
```json
{
  "name": "@ayz/nexa-ui-button",
  "version": "1.0.0",
  "description": "Button component for @ayz/nexa-ui",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css"
  },
  "sideEffects": [
    "./dist/styles.css"
  ],
  "peerDependencies": {
    "react": "^18.0.0",
    "@ayz/nexa-ui-core": "^1.0.0"
  }
}
```

## 🚀 NPM Yayımlama Süreci

### 1. NPM Hesabı Hazırlığı
```bash
# NPM hesabı oluşturma
npm login

# Scope için organizasyon oluşturma (önerilen)
# npm'de @ayz scope'u için organizasyon kurulmalı
```

### 2. Paket Versiyonlama
- **Semantic Versioning (SemVer)** kullanılacak
- Format: `MAJOR.MINOR.PATCH`
- Pre-release: `1.0.0-alpha.1`, `1.0.0-beta.1`, `1.0.0-rc.1`

### 3. Yayımlama Komutları
```bash
# Versiyon güncelleme
npm version patch|minor|major

# Yayımlama
npm publish --access public

# Beta yayımlama
npm publish --tag beta --access public
```

### 4. Otomatik Yayımlama (CI/CD)
- GitHub Actions ile otomatik publish
- Tag oluşturulduğunda otomatik yayımlama
- Pre-release'ler için manuel onay

## 📚 Dokümantasyon Stratejisi

### 1. Storybook
- Her bileşen için interaktif örnekler
- Variant gösterimleri
- Props dokümantasyonu

### 2. API Dokümantasyonu
- TypeScript tipleri otomatik dokümante edilecek
- JSDoc yorumları
- Kullanım örnekleri

### 3. Website
- Ana sayfa ve tanıtım
- Kurulum rehberi
- Bileşen galerisi
- Migration guide

## 🧪 Test Stratejisi

### Test Türleri:
1. **Unit Tests** - Vitest ile
2. **Component Tests** - React Testing Library
3. **Visual Regression Tests** - Chromatic veya Percy
4. **E2E Tests** - Playwright (opsiyonel)

### Coverage Hedefi:
- Minimum %80 code coverage
- Kritik bileşenlerde %100

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow:
1. **Lint & Type Check** - Her PR'da
2. **Test** - Her PR'da
3. **Build** - Her PR'da
4. **Visual Regression** - Her PR'da (opsiyonel)
5. **Publish** - Tag oluşturulduğunda

## 📊 Başarı Metrikleri

### Teknik Metrikler:
- ✅ Bundle size: Her bileşen < 5KB (gzipped)
- ✅ **Zero external dependencies** - Sadece React ve TypeScript peer dependencies
- ✅ Zero runtime overhead (mümkün olduğunca)
- ✅ TypeScript strict mode compliance
- ✅ Accessibility score: WCAG AA minimum
- ✅ Native browser APIs kullanımı (Portal, IntersectionObserver, vb.)

### Kullanıcı Metrikleri:
- ✅ Kolay kurulum (< 5 dakika)
- ✅ Net dokümantasyon
- ✅ Aktif community desteği

## 🎨 Tasarım Sistemi

### Stil Yaklaşımı:
- **Tailwind CSS** ile utility-first yaklaşım
- **CSS Variables** ile tema desteği
- **Dark mode** desteği
- **Responsive** tasarım

### Tema Sistemi:
```css
:root {
  --nexa-primary: ...;
  --nexa-secondary: ...;
  --nexa-border: ...;
  /* ... */
}
```

## 🔗 Community & Support

### Destek Kanalları:
- GitHub Issues - Bug reports ve feature requests
- GitHub Discussions - Sorular ve tartışmalar
- Discord/Slack - Community chat (opsiyonel)

### Katkıda Bulunma:
- CONTRIBUTING.md dosyası
- Code of Conduct
- Pull request template
- Issue templates

## 📅 Zaman Çizelgesi

| Faz | Süre | Başlangıç | Bitiş |
|-----|------|-----------|-------|
| Faz 1: Kurulum | 1 hafta | Hafta 1 | Hafta 1 |
| Faz 2: Core | 1-2 hafta | Hafta 1 | Hafta 2 |
| Faz 3: Temel Bileşenler | 2 hafta | Hafta 2 | Hafta 4 |
| Faz 4: İleri Bileşenler | 2 hafta | Hafta 4 | Hafta 6 |
| Faz 5: Form Bileşenleri | 1 hafta | Hafta 6 | Hafta 7 |
| Faz 6: CLI | 1 hafta | Hafta 7 | Hafta 8 |
| Faz 7: Dokümantasyon | 1 hafta | Hafta 8 | Hafta 9 |
| Faz 8: Optimizasyon | 1 hafta | Hafta 9 | Hafta 10 |
| Faz 9: Yayımlama | 1 hafta | Hafta 10 | Hafta 10 |

**Toplam Süre:** ~10 hafta (2.5 ay)

## 🎯 İlk Adımlar

### Hemen Başlanacaklar:
1. ✅ GitHub repository oluşturma
2. ✅ Monorepo yapısının kurulması
3. ✅ Temel paket yapısının oluşturulması
4. ✅ Build sisteminin kurulması
5. ✅ İlk bileşen (Button) implementasyonu

### İlk Hafta Hedefleri:
- [ ] Repository kurulumu
- [ ] Monorepo yapısı
- [ ] Core paket temel yapısı
- [ ] Button bileşeni (alpha)
- [ ] İlk test ve build

## 🔧 Native Implementasyon Detayları

### Portal & Dialog Implementasyonu:
```typescript
// @ayz/nexa-ui-core içinde
// React.createPortal kullanarak native Portal
// Focus trap için kendi hook'umuz
// ESC key ve backdrop click handling
```

### Animasyon Stratejisi:
- **CSS Transitions:** Hover, focus, active state'ler için
- **CSS Animations:** Toast, Modal açılma/kapanma için
- **Tailwind Animation Classes:** Fade, slide, scale efektleri
- **IntersectionObserver:** Scroll-based animasyonlar için

### Form State Yönetimi:
```typescript
// useForm hook - react-hook-form benzeri ama daha hafif
// Native HTML5 validation
// Custom validation rules
// Error state management
// Field-level ve form-level validation
```

### Accessibility (a11y):
- **ARIA Attributes:** role, aria-label, aria-expanded, vb.
- **Keyboard Navigation:** Tab, Enter, Escape, Arrow keys
- **Focus Management:** useFocusTrap hook ile
- **Screen Reader Support:** Semantic HTML ve ARIA

### Dropdown & Select:
- **Native click outside detection** (useClickOutside hook)
- **Keyboard navigation** (Arrow keys, Enter, Escape)
- **Portal rendering** (z-index sorunlarını çözmek için)
- **Virtual scrolling** (büyük listeler için - opsiyonel)

## 💡 Notlar ve Öneriler

### shadcn UI'dan Farklar:
1. **Zero external dependencies** - @radix-ui, framer-motion, react-hook-form yok
2. **Daha küçük bundle size** - Sadece kendi kodumuz, dış paket yok
3. **Daha hızlı kurulum** - Basitleştirilmiş CLI, daha az bağımlılık
4. **Daha iyi tree-shaking** - Modüler yapı, native implementasyonlar
5. **Native browser APIs** - Portal, IntersectionObserver, ResizeObserver gibi native API'ler
6. **CSS-first animations** - framer-motion yerine CSS transitions/animations
7. **Tam kontrol** - Tüm kod kendi kontrolümüzde, özelleştirme kolaylığı

### Gelecek Özellikler:
- [ ] Figma plugin (design token sync)
- [ ] VSCode extension (snippet'ler)
- [ ] Theme builder (interaktif tema oluşturucu)
- [ ] Component playground (CodeSandbox entegrasyonu)

---

**Son Güncelleme:** 2024
**Versiyon:** 1.0.0 (Draft)

