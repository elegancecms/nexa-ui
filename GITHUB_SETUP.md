# GitHub Repository Kurulum Rehberi

## 📋 Adım Adım GitHub Kurulumu

### 1. GitHub'da Repository Oluşturma

1. **GitHub'a giriş yapın:**
   - https://github.com adresine gidin
   - Giriş yapın

2. **Yeni repository oluşturun:**
   - Sağ üstteki "+" butonuna tıklayın
   - "New repository" seçin

3. **Repository bilgilerini girin:**
   - **Repository name:** `nexa-ui` (veya istediğiniz isim)
   - **Description:** `Lightweight, zero-dependency React UI component library`
   - **Visibility:** Public (önerilen) veya Private
   - **Initialize repository:** ❌ Boş bırakın (README, .gitignore, license eklemeyin)
   - "Create repository" butonuna tıklayın

### 2. Local Git Repository Başlatma

Projenizde Git henüz başlatılmadıysa:

```bash
# Git'i başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: @khaimerax/nexa-ui"
```

### 3. GitHub Repository'ye Bağlama

GitHub'da oluşturduğunuz repository'nin sayfasında şu komutlar gösterilecek:

```bash
# Remote repository ekle (YOUR_USERNAME yerine GitHub kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR_USERNAME/nexa-ui.git

# VEYA SSH kullanıyorsanız:
git remote add origin git@github.com:YOUR_USERNAME/nexa-ui.git

# Branch adını main olarak ayarla
git branch -M main

# İlk push
git push -u origin main
```

### 4. Kontrol

```bash
# Remote repository'yi kontrol et
git remote -v

# Son commit'leri kontrol et
git log --oneline
```

## 🔄 Sonraki Adımlar

GitHub repository oluşturulduktan sonra:

1. **Vercel Deployment:**
   - Vercel'e giriş yapın
   - GitHub repository'nizi import edin
   - Dokümantasyon sitesi otomatik deploy olur

2. **GitHub Pages (Alternatif):**
   - Repository Settings > Pages
   - GitHub Actions ile deploy edin

3. **README.md Güncelleme:**
   - GitHub repository URL'ini ekleyin
   - Badge'ler ekleyin

## 📝 Önemli Dosyalar

### .gitignore

Projede zaten `.gitignore` dosyası var, şunları içeriyor:
- `node_modules/`
- `dist/`
- `.turbo/`
- Build çıktıları

### README.md

Ana README.md dosyası GitHub'da otomatik gösterilir. İsterseniz şunları ekleyebilirsiniz:
- Badge'ler (NPM version, license, etc.)
- GitHub repository linki
- Dokümantasyon sitesi linki

## 🎯 Hızlı Komutlar

```bash
# Git durumunu kontrol et
git status

# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Your commit message"

# Push yap
git push

# Yeni branch oluştur
git checkout -b feature/new-feature
```

---

**Not:** GitHub repository oluşturduktan sonra remote URL'ini paylaşırsanız, komutları tam olarak hazırlayabilirim!

