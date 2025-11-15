---
layout: home

hero:
  name: "@khaimerax/nexa-ui"
  text: "Lightweight UI Components"
  tagline: Zero dependencies. Fully customizable. Built with React & TypeScript.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/elegancecms/nexa-ui

features:
  - icon: ⚡
    title: Zero Dependencies
    details: No external dependencies. Only React and TypeScript peer dependencies.
  - icon: 🎨
    title: Fully Customizable
    details: Components are copied to your project as source code. Modify them as you need.
  - icon: 📦
    title: Tree-shakeable
    details: Optimized bundle sizes. Only include what you use.
  - icon: 🔒
    title: Type Safe
    details: Built with TypeScript. Full type safety out of the box.
  - icon: 🎯
    title: Accessible
    details: WCAG AA compliant. Built with accessibility in mind.
  - icon: 🚀
    title: Modern Stack
    details: React 18, TypeScript, Tailwind CSS. Modern development experience.

---

## 🎨 Components

<div class="component-grid">

### [Button](/components/button)

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary">Click me</Button>
```

### [Card](/components/card)

A flexible card component for displaying content.

```tsx
import { Card } from "@/components/ui/card";

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Content>Content</Card.Content>
</Card>
```

</div>

## 🚀 Quick Start

Install the CLI and initialize your project:

```bash
npx @khaimerax/nexa init
```

Add components to your project:

```bash
npx @khaimerax/nexa add button
npx @khaimerax/nexa add card
```

## 📚 Documentation

- [Installation Guide](/guide/installation) - Get started with nexa-ui
- [Getting Started](/guide/getting-started) - Learn the basics
- [Components](/components/button) - Browse all components

---

