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

```bash
npm install -D @khaimerax/nexa
```

## 🚀 Quick Start

### 1. Initialize

```bash
npx @khaimerax/nexa init
```

This creates:
- `components/ui` directory
- `lib/utils.ts` with the `cn` utility function

### 2. Add Components

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

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📄 License

MIT

