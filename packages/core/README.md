# @ayz/nexa-ui-core

Core utilities and hooks for @ayz/nexa-ui - A lightweight, zero-dependency React UI component library.

## Installation

```bash
npm install @ayz/nexa-ui-core
```

## Features

- ✅ **Zero External Dependencies** - Only React peer dependency
- ✅ **TypeScript First** - Full type safety
- ✅ **Tree-shakeable** - Optimized bundle sizes
- ✅ **Native Implementations** - No external libraries

## Usage

### Utilities

```typescript
import { cn } from "@ayz/nexa-ui-core";

// Class name utility
const className = cn("base-class", condition && "conditional-class");
```

### Hooks

```typescript
import { 
  useMediaQuery, 
  useClickOutside, 
  useToggle,
  useDebounce,
  useFocusTrap,
  usePortal
} from "@ayz/nexa-ui-core";

// Media query hook
const isMobile = useMediaQuery("(max-width: 768px)");

// Click outside hook
const ref = useRef<HTMLDivElement>(null);
useClickOutside(ref, { handler: () => console.log("Clicked outside") });

// Toggle hook
const [isOpen, toggle, setOpen] = useToggle(false);

// Debounce hook
const debouncedValue = useDebounce(value, { delay: 300 });

// Focus trap hook
useFocusTrap(ref, enabled);

// Portal hook
const portalContainer = usePortal();
```

### Components

```typescript
import { Portal } from "@ayz/nexa-ui-core";

<Portal>
  <div>Rendered outside DOM hierarchy</div>
</Portal>
```

## License

MIT

