# Button

A versatile button component with multiple variants and sizes.

## Installation

```bash
npx @khaimerax/nexa add button
```

## Usage

<ComponentDemo>
  <ButtonDemo variant="primary" text="Click me" />
</ComponentDemo>

```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Click me</Button>;
}
```

## Variants

### Primary

<ComponentDemo>
  <ButtonDemo variant="primary" />
</ComponentDemo>

```tsx
<Button variant="primary">Primary</Button>
```

### Secondary

<ComponentDemo>
  <ButtonDemo variant="secondary" />
</ComponentDemo>

```tsx
<Button variant="secondary">Secondary</Button>
```

### Outline

<ComponentDemo>
  <ButtonDemo variant="outline" />
</ComponentDemo>

```tsx
<Button variant="outline">Outline</Button>
```

### Ghost

<ComponentDemo>
  <ButtonDemo variant="ghost" />
</ComponentDemo>

```tsx
<Button variant="ghost">Ghost</Button>
```

### Danger

<ComponentDemo>
  <ButtonDemo variant="danger" />
</ComponentDemo>

```tsx
<Button variant="danger">Danger</Button>
```

## Sizes

### Small

<ComponentDemo>
  <ButtonDemo variant="primary" size="sm">Small</ButtonDemo>
</ComponentDemo>

```tsx
<Button size="sm">Small</Button>
```

### Medium (Default)

<ComponentDemo>
  <ButtonDemo variant="primary" size="md">Medium</ButtonDemo>
</ComponentDemo>

```tsx
<Button size="md">Medium</Button>
```

### Large

<ComponentDemo>
  <ButtonDemo variant="primary" size="lg">Large</ButtonDemo>
</ComponentDemo>

```tsx
<Button size="lg">Large</Button>
```

## States

### Loading

<ComponentDemo>
  <ButtonDemo variant="primary" loading>Loading...</ButtonDemo>
</ComponentDemo>

```tsx
<Button loading>Loading...</Button>
```

### Disabled

<ComponentDemo>
  <ButtonDemo variant="primary" disabled>Disabled</ButtonDemo>
</ComponentDemo>

```tsx
<Button disabled>Disabled</Button>
```

### Full Width

<ComponentDemo>
  <ButtonDemo variant="primary" :full-width="true">Full Width</ButtonDemo>
</ComponentDemo>

```tsx
<Button fullWidth>Full Width</Button>
```

## Examples

### Button Group

<ComponentDemo>
  <div class="flex gap-2">
    <ButtonDemo variant="primary">Primary</ButtonDemo>
    <ButtonDemo variant="secondary">Secondary</ButtonDemo>
    <ButtonDemo variant="outline">Outline</ButtonDemo>
  </div>
</ComponentDemo>

```tsx
<div className="flex gap-2">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
</div>
```

### With Icons

<ComponentDemo>
  <ButtonDemo variant="primary">
    <svg class="mr-2 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
    Add Item
  </ButtonDemo>
</ComponentDemo>

```tsx
<Button variant="primary">
  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Add Item
</Button>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger"` | `"primary"` | Button variant |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| loading | `boolean` | `false` | Show loading spinner |
| fullWidth | `boolean` | `false` | Full width button |
| disabled | `boolean` | `false` | Disable button |
| children | `React.ReactNode` | - | Button content |

All standard HTML button attributes are also supported.

