# @khaimerax/nexa-ui

Lightweight, zero-dependency React UI component library built with TypeScript and Tailwind CSS.

## 🎯 Features

- ✅ **Zero External Dependencies** - Only React and TypeScript peer dependencies
- ✅ **Modular Architecture** - Install only what you need
- ✅ **TypeScript First** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **CSS Animations** - No JavaScript animation libraries
- ✅ **Accessible** - WCAG AA compliant
- ✅ **Tree-shakeable** - Optimized bundle sizes

## 📦 Installation

### Step 1: Install the package

```bash
npm install -D @khaimerax/nexa
```

### Step 2: Initialize your project

```bash
npx @khaimerax/nexa init
```

This creates:
- `components/ui` directory
- `lib/utils.ts` with the `cn` utility function

### Step 3: Add Components

```bash
# Add a button component
npx @khaimerax/nexa add button

# Add a card component
npx @khaimerax/nexa add card
```

### 3. Use Components

```tsx
import { Button } from "@/components/ui/button";

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

## 🏗️ Project Structure

```
@khaimerax/nexa-ui/
├── packages/
│   ├── core/          # Core utilities and hooks
│   ├── button/        # Button component
│   ├── cli/           # CLI tool for adding components
│   └── ...            # Other components
```

## 🚀 Release & Publishing

### Automated Release Script

Otomatik release script'i hem NPM'e publish hem de GitHub'a push yapar:

```bash
# Patch release (0.1.0 -> 0.1.1)
npm run release:patch

# Minor release (0.1.0 -> 0.2.0)
npm run release:minor

# Major release (0.1.0 -> 1.0.0)
npm run release:major

# Default (patch)
npm run release
```

Script şunları yapar:
1. ✅ Git durumunu kontrol eder (uncommitted changes varsa uyarır)
2. ✅ Tüm paketleri build eder
3. ✅ Versiyonu günceller (patch/minor/major)
4. ✅ NPM'e publish eder
5. ✅ Değişiklikleri commit eder
6. ✅ GitHub'a push eder

### Manual Publishing

Manuel olarak publish etmek için:

```bash
# Build
npm run build

# Publish CLI package
npm run publish:cli
```

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📄 License

MIT

