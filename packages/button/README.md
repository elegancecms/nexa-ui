# @ayz/nexa-ui-button

Button component for @ayz/nexa-ui - A lightweight, zero-dependency React UI component library.

## Installation

```bash
npm install @ayz/nexa-ui-button
```

## Features

- ✅ **Zero External Dependencies** - Only React and @ayz/nexa-ui-core peer dependencies
- ✅ **TypeScript First** - Full type safety
- ✅ **Multiple Variants** - Primary, secondary, outline, ghost, danger
- ✅ **Multiple Sizes** - Small, medium, large
- ✅ **Loading State** - Built-in loading indicator
- ✅ **Tailwind CSS** - Utility-first styling

## Usage

```typescript
import { Button } from "@ayz/nexa-ui-button";

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// With size
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button loading>Loading...</Button>

// Full width
<Button fullWidth>Full Width</Button>

// Disabled
<Button disabled>Disabled</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger"` | `"primary"` | Button variant |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| loading | `boolean` | `false` | Show loading spinner |
| fullWidth | `boolean` | `false` | Full width button |
| disabled | `boolean` | `false` | Disable button |

All standard HTML button attributes are also supported.

## Requirements

- React ^18.0.0
- @ayz/nexa-ui-core ^0.1.0
- Tailwind CSS ^4.0.0 (peer dependency)

## License

MIT

