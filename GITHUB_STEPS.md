# 📝 GitHub Repository Kurulum Adımları

## ✅ Hazırlık Tamamlandı

- ✅ Git repository başlatıldı
- ✅ GitHub Actions workflow hazır
- ✅ VitePress config GitHub Pages için ayarlandı

## 🚀 Şimdi Yapmanız Gerekenler

### 1. GitHub'da Repository Oluşturun

1. **GitHub'a gidin:** https://github.com/new
2. **Repository bilgileri:**
   - **Name:** `nexa-ui`
   - **Description:** `Lightweight, zero-dependency React UI component library`
   - **Public** seçin
   - ❌ **Initialize repository** seçeneklerini işaretlemeyin (boş repo)
3. **Create repository** butonuna tıklayın

### 2. Local Dosyaları Commit Edin

```bash
# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: @khaimerax/nexa-ui"
```

### 3. GitHub'a Bağlayın ve Push Yapın

GitHub'da repository oluşturduktan sonra, repository sayfasında gösterilen komutları kullanın:

```bash
# Remote ekle (YOUR_USERNAME yerine GitHub kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR_USERNAME/nexa-ui.git

# Branch adını main yap
git branch -M main

# Push yap
git push -u origin main
```

### 4. GitHub Pages'i Aktifleştirin

1. Repository'de **Settings** sekmesine gidin
2. Sol menüden **Pages** seçin
3. **Source:** **GitHub Actions** seçin
4. **Save** butonuna tıklayın

### 5. İlk Deployment

GitHub Actions otomatik olarak çalışacak ve dokümantasyon sitesini deploy edecek!

**Not:** İlk deployment 2-3 dakika sürebilir.

## 📍 Sonuç

Deployment tamamlandıktan sonra dokümantasyon siteniz şu adreste olacak:

```
https://YOUR_USERNAME.github.io/nexa-ui/
```

## 🔄 Sonraki Güncellemeler

Her `docs/` klasöründeki değişiklik push edildiğinde, GitHub Actions otomatik olarak siteyi yeniden deploy edecek!

---

**GitHub kullanıcı adınızı paylaşırsanız, komutları tam olarak hazırlayabilirim!**

