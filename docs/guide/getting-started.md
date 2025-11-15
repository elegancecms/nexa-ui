# Getting Started

## Quick Start

After installing and initializing @khaimerax/nexa-ui, you can start using components:

```tsx
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}
```

## Project Structure

After initialization, your project structure will look like this:

```
your-project/
├── components/
│   └── ui/
│       ├── button/
│       │   ├── Button.tsx
│       │   └── index.ts
│       └── card/
│           ├── Card.tsx
│           └── index.ts
├── lib/
│   └── utils.ts
└── ...
```

## Customization

Since components are copied to your project as source code, you can customize them however you want:

```tsx
// components/ui/button/Button.tsx
export function Button({ ... }) {
  // Modify the component as needed
  return <button>...</button>;
}
```

## Styling

Components use Tailwind CSS for styling. Make sure your `tailwind.config.js` includes:

```js
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    // ... other paths
  ],
};
```

## TypeScript

All components are fully typed. TypeScript will provide autocomplete and type checking:

```tsx
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

const props: ButtonProps = {
  variant: "primary",
  size: "md",
  // TypeScript will autocomplete available props
};
```

