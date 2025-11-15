# Dokümantasyon Sitesi Deployment Rehberi

## 🚀 Deployment Seçenekleri

### 1. Vercel (Önerilen) ⭐

**Avantajlar:**
- Otomatik deployment (Git push ile)
- Ücretsiz
- Hızlı CDN
- Custom domain desteği

**Adımlar:**

1. **Vercel'e giriş yapın:**
   - https://vercel.com adresine gidin
   - GitHub ile giriş yapın

2. **Projeyi import edin:**
   - "Add New Project" butonuna tıklayın
   - GitHub repository'nizi seçin

3. **Build ayarlarını yapın:**
   - **Framework Preset:** Other
   - **Root Directory:** `docs`
   - **Build Command:** `npm install && npm run build`
   - **Output Directory:** `.vitepress/dist`
   - **Install Command:** `npm install`

4. **Deploy edin:**
   - "Deploy" butonuna tıklayın
   - İlk deployment otomatik başlar

5. **Custom Domain (Opsiyonel):**
   - Settings > Domains
   - Domain ekleyin ve DNS ayarlarını yapın

### 2. Netlify

**Adımlar:**

1. Netlify'e giriş yapın: https://netlify.com
2. "Add new site" > "Import an existing project"
3. GitHub repository'nizi seçin
4. Build settings:
   - **Base directory:** `docs`
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `docs/.vitepress/dist`
5. Deploy!

### 3. GitHub Pages

**Adımlar:**

1. **GitHub Actions workflow oluşturun:**

`.github/workflows/docs.yml` dosyası oluşturun:

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: |
          cd docs
          npm install
      - name: Build
        run: |
          cd docs
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

2. **GitHub Pages'i aktifleştirin:**
   - Repository Settings > Pages
   - Source: GitHub Actions

### 4. Cloudflare Pages

**Adımlar:**

1. Cloudflare Dashboard > Pages
2. "Create a project" > "Connect to Git"
3. Repository seçin
4. Build settings:
   - **Framework preset:** VitePress
   - **Build command:** `npm run build`
   - **Build output directory:** `.vitepress/dist`
   - **Root directory:** `docs`

## 📝 Önemli Notlar

### Build Komutları

Root'tan çalıştırma:
```bash
npm run docs:build
```

Docs klasöründen:
```bash
cd docs
npm run build
```

### Preview

Build'i test etmek için:
```bash
npm run docs:preview
```

### Environment Variables

Eğer environment variables kullanacaksanız, deployment platformunda ayarlayın.

## 🔗 Örnek URL'ler

Deployment sonrası:
- Vercel: `https://nexa-ui.vercel.app`
- Netlify: `https://nexa-ui.netlify.app`
- GitHub Pages: `https://khaimerax.github.io/nexa-ui`

Custom domain ile:
- `https://nexa-ui.com`
- `https://docs.nexa-ui.com`

---

**Öneri:** Vercel kullanın - en kolay ve hızlı seçenek!

