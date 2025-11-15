# @khaimerax/nexa - NPM Yayımlama Rehberi

Bu dosya paketlerinizi NPM'e yayımlama sürecini adım adım açıklar.

## 📋 Yeni Yapı: CLI Tabanlı Yaklaşım

**@khaimerax/nexa-ui** artık shadcn UI benzeri bir yaklaşım kullanıyor:
- Bileşenler npm paketi olarak değil, kaynak kod olarak projeye kopyalanıyor
- `npx @khaimerax/nexa init` ile proje başlatılıyor
- `npx @khaimerax/nexa add <component>` ile bileşenler ekleniyor

## 🚀 Yayımlama Süreci

### 1. NPM Hesabı Hazırlığı

```bash
# NPM hesabınız yoksa önce oluşturun: https://www.npmjs.com/signup

# NPM'e giriş yapın
npm login

# @khaimerax organizasyonu zaten mevcut
```

### 2. Build ve Versiyon Güncelleme

```bash
# Tüm paketleri build edin
npm run build

# CLI paketi versiyonunu güncelleyin
cd packages/cli
npm version patch  # veya minor, major
```

### 3. Yayımlama

Sadece CLI paketini yayımlayın (bileşenler CLI içinde templates olarak gelir):

```bash
# CLI paketini yayımla
cd packages/cli
npm publish --access public

# VEYA root'tan script ile
npm run publish:cli
```

## 📦 Kullanım

### Kurulum

```bash
npm install -D @khaimerax/nexa
```

### Kullanım

```bash
# Projeyi başlat
npx @khaimerax/nexa init

# Bileşen ekle
npx @khaimerax/nexa add button
npx @khaimerax/nexa add card

# Özel dizin belirt
npx @khaimerax/nexa add button --dir src/components
```

## 🎯 Paket Yapısı

```
@khaimerax/nexa/
├── dist/           # Build edilmiş CLI kodu
├── templates/      # Bileşen şablonları
│   ├── button/
│   ├── card/
│   └── ...
├── package.json
└── README.md
```

## 📝 Kontrol Listesi

### Yayımlamadan Önce:

- [x] `package.json` dosyasında doğru versiyon numarası
- [x] `README.md` dosyası mevcut ve güncel
- [x] `LICENSE` dosyası mevcut
- [x] `templates/` klasörü paket içinde
- [x] Build başarılı (`npm run build`)
- [x] CLI çalışıyor (`npx @khaimerax/nexa --help`)

### `files` Alanı Kontrolü

`packages/cli/package.json` içinde `files` alanı:

```json
{
  "files": [
    "dist",
    "templates",
    "README.md",
    "LICENSE"
  ]
}
```

## 🔄 Versiyonlama Stratejisi

### Semantic Versioning (SemVer)

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): Yeni özellikler, yeni bileşenler
- **PATCH** (0.0.1): Bug fix'ler, template güncellemeleri

### Pre-release Versiyonlar

```bash
# Alpha release
npm version prerelease --preid=alpha
npm publish --access public --tag alpha

# Beta release
npm version prerelease --preid=beta
npm publish --access public --tag beta
```

## 🌐 Yayımlama Sonrası Kontroller

1. **NPM Sayfasını Kontrol Edin:**
   - https://www.npmjs.com/package/@khaimerax/nexa

2. **CLI Kurulumunu Test Edin:**
   ```bash
   npm install -D @khaimerax/nexa
   npx @khaimerax/nexa --help
   ```

3. **Bileşen Ekleme Testi:**
   ```bash
   npx @khaimerax/nexa init
   npx @khaimerax/nexa add button
   ```

## 🛠️ Sorun Giderme

### "You do not have permission to publish"

- NPM hesabınızda giriş yaptığınızdan emin olun: `npm whoami`
- Scope için organizasyon üyeliğinizi kontrol edin
- `--access public` flag'ini kullandığınızdan emin olun

### "Package name already exists"

- Paket adı zaten kullanılıyor, farklı bir isim seçin
- Veya mevcut paketin sahibiyseniz versiyonu güncelleyin

### Templates bulunamıyor

- `templates/` klasörünün `files` alanında olduğundan emin olun
- Build sonrası `templates/` klasörünün kopyalandığını kontrol edin

## 📝 Notlar

- **Tek Paket:** Artık sadece `@ayz/nexa` paketi yayımlanıyor
- **Bileşenler Templates İçinde:** Tüm bileşenler `templates/` klasöründe
- **Kaynak Kod Kopyalama:** Bileşenler projeye kaynak kod olarak kopyalanıyor
- **Özelleştirilebilir:** Kullanıcılar bileşenleri istediği gibi düzenleyebilir

---

**Son Güncelleme:** 2024-11-15
