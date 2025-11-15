# Sonraki Adımlar - NPM Yayımlama

## 🔐 Adım 1: NPM'e Giriş Yapın

Terminal'de şu komutu çalıştırın:

```bash
npm login
```

Bu komut sizden şunları isteyecek:
- **Username:** NPM kullanıcı adınız
- **Password:** NPM şifreniz
- **Email:** E-posta adresiniz

Giriş yaptıktan sonra kontrol edin:

```bash
npm whoami
```

Bu komut kullanıcı adınızı göstermeli.

## 🏢 Adım 2: @ayz Organizasyonu Oluşturun

Scope'lu paketler (`@ayz/nexa`) için bir organizasyon gerekiyor.

### Web Üzerinden (Önerilen):

1. Tarayıcınızda şu adrese gidin:
   **https://www.npmjs.com/org/create**

2. Formu doldurun:
   - **Organization name:** `ayz`
   - **Plan:** Free (ücretsiz plan seçin)
   - **Billing email:** E-posta adresiniz

3. "Create Organization" butonuna tıklayın

### Alternatif: CLI ile

```bash
npm org create ayz
```

**Not:** Eğer organizasyon oluşturmak istemiyorsanız, paket adını `nexa` olarak değiştirebiliriz (scope olmadan).

## ✅ Adım 3: Giriş ve Organizasyon Kontrolü

```bash
# Giriş kontrolü
npm whoami

# Organizasyon kontrolü (organizasyon oluşturduktan sonra)
npm org ls
```

## 📦 Adım 4: Paketi Yayımlayın

Organizasyonu oluşturduktan sonra:

```bash
# 1. Build edin
npm run build

# 2. CLI paketine gidin
cd packages/cli

# 3. Yayımlayın
npm publish --access public
```

**Önemli:** `--access public` flag'i scope'lu paketler için zorunludur!

## 🎯 Hızlı Kontrol Listesi

- [ ] `npm login` ile giriş yapıldı
- [ ] `npm whoami` ile kullanıcı adı görünüyor
- [ ] @ayz organizasyonu oluşturuldu
- [ ] `npm run build` ile build edildi
- [ ] `packages/cli/dist/` klasöründe dosyalar var
- [ ] `packages/cli/dist/templates/` klasöründe şablonlar var
- [ ] `npm publish --access public` ile yayımlandı

## 🚀 Yayımlama Sonrası

Yayımlama başarılı olduktan sonra:

1. **NPM Sayfasını Kontrol Edin:**
   - https://www.npmjs.com/package/@ayz/nexa

2. **Paketi Test Edin:**
   ```bash
   # Yeni bir test projesi oluşturun
   mkdir test-nexa && cd test-nexa
   npm init -y
   npm install -D @ayz/nexa
   npx @ayz/nexa --help
   ```

---

**Şimdi yapmanız gereken:** `npm login` komutunu çalıştırın ve organizasyonu oluşturun!

