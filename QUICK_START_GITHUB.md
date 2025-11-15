# 🚀 Hızlı GitHub Kurulumu

## Adım 1: GitHub'da Repository Oluşturun

1. https://github.com/new adresine gidin
2. **Repository name:** `nexa-ui`
3. **Description:** `Lightweight, zero-dependency React UI component library`
4. **Public** seçin
5. ❌ **Initialize repository** seçeneklerini işaretlemeyin (boş repo)
6. **Create repository** butonuna tıklayın

## Adım 2: Local Git Başlatma (Zaten Yapıldı ✅)

```bash
git init
```

## Adım 3: Dosyaları Ekleyin ve Commit Yapın

```bash
# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: @khaimerax/nexa-ui - Zero dependency React UI library"
```

## Adım 4: GitHub'a Bağlayın

GitHub'da oluşturduğunuz repository sayfasında gösterilen komutları kullanın:

```bash
# Remote ekle (YOUR_USERNAME yerine GitHub kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR_USERNAME/nexa-ui.git

# Branch adını main yap
git branch -M main

# Push yap
git push -u origin main
```

## Adım 5: GitHub Pages'i Aktifleştirin

1. Repository Settings > Pages
2. Source: **GitHub Actions** seçin
3. Save

GitHub Actions workflow'u otomatik olarak dokümantasyon sitesini deploy edecek!

## ✅ Tamamlandı!

Artık:
- ✅ GitHub repository hazır
- ✅ Dokümantasyon sitesi GitHub Pages'de yayında
- ✅ Vercel'e bağlayabilirsiniz (opsiyonel)

---

**GitHub kullanıcı adınızı paylaşırsanız, komutları tam olarak hazırlayabilirim!**

