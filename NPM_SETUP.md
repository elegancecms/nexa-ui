# NPM Yayımlama Adım Adım Rehber

## ✅ Adım 1: NPM Hesabı (TAMAMLANDI)
- [x] NPM hesabı oluşturuldu
- [x] Giriş yapıldı

## 🔄 Adım 2: @ayz Organizasyonu Oluşturma

Scope'lu paketler (`@ayz/nexa`) için bir organizasyon oluşturmanız gerekiyor.

### Yöntem 1: Web Üzerinden (Önerilen)

1. **Organizasyon Sayfasına Gidin:**
   - https://www.npmjs.com/org/create

2. **Organizasyon Bilgilerini Girin:**
   - **Organization name:** `ayz`
   - **Plan:** Free plan seçin (ücretsiz)
   - **Billing email:** E-posta adresiniz

3. **Organizasyonu Oluşturun**

### Yöntem 2: NPM CLI ile

```bash
npm org create ayz
```

**Not:** Eğer organizasyon oluşturmak istemiyorsanız, scope'u kaldırıp `nexa` olarak yayımlayabilirsiniz.

## 🔐 Adım 3: NPM Giriş Kontrolü

```bash
# Hangi kullanıcı olarak giriş yaptığınızı kontrol edin
npm whoami

# Eğer çıktı yoksa, tekrar giriş yapın
npm login
```

## 📦 Adım 4: Paket Hazırlığı

### Versiyon Kontrolü

```bash
# packages/cli/package.json dosyasında versiyon kontrol edin
# İlk yayımlama için 0.1.0 uygun
```

### Build Kontrolü

```bash
# Tüm paketleri build edin
npm run build

# CLI paketinin build edildiğini kontrol edin
# packages/cli/dist/ klasöründe dosyalar olmalı
# packages/cli/dist/templates/ klasöründe şablonlar olmalı
```

## 🚀 Adım 5: Yayımlama

### İlk Yayımlama

```bash
# CLI paketine gidin
cd packages/cli

# Yayımlayın
npm publish --access public
```

**Not:** `--access public` flag'i scope'lu paketler için zorunludur.

### Versiyon Güncelleme ile Yayımlama

```bash
cd packages/cli

# Versiyon güncelle (patch: 0.1.0 -> 0.1.1)
npm version patch

# Yayımla
npm publish --access public
```

### Root'tan Script ile

```bash
# Root dizinden
npm run publish:cli
```

## ✅ Adım 6: Yayımlama Sonrası Kontrol

1. **NPM Sayfasını Kontrol Edin:**
   - https://www.npmjs.com/package/@ayz/nexa

2. **Paketi Test Edin:**
   ```bash
   # Yeni bir proje oluşturun
   mkdir test-nexa
   cd test-nexa
   npm init -y
   
   # Paketi kurun
   npm install -D @ayz/nexa
   
   # CLI'ı test edin
   npx @ayz/nexa --help
   npx @ayz/nexa init
   npx @ayz/nexa add button
   ```

## 🛠️ Sorun Giderme

### "You do not have permission to publish"

**Çözüm:**
- Organizasyon üyeliğinizi kontrol edin
- `npm whoami` ile giriş yaptığınızdan emin olun
- `--access public` flag'ini kullandığınızdan emin olun

### "Package name already exists"

**Çözüm:**
- Paket adı zaten kullanılıyor
- Farklı bir isim seçin veya mevcut paketin sahibiyseniz versiyonu güncelleyin

### "Organization not found"

**Çözüm:**
- Organizasyonu oluşturduğunuzdan emin olun
- Organizasyon adının doğru olduğundan emin olun (`ayz`)

## 📝 Notlar

- **İlk Yayımlama:** Paket adı NPM'de kalıcı olur, değiştirilemez
- **Versiyonlama:** Semantic Versioning (SemVer) kullanın
- **Access:** Scope'lu paketler için `--access public` zorunlu
- **Organizasyon:** Ücretsiz plan yeterli, premium gerekmez

---

**Sonraki Adım:** Organizasyon oluşturduktan sonra yayımlamaya geçebilirsiniz!

