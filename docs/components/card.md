# Card

A flexible card component with header, content, and footer sections.

## Installation

```bash
npx @khaimerax/nexa add card
```

## Usage

<ComponentDemo>
  <CardDemo>
    <CardHeaderDemo>
      <CardTitleDemo>Card Title</CardTitleDemo>
      <CardDescriptionDemo>Card description</CardDescriptionDemo>
    </CardHeaderDemo>
    <CardContentDemo>
      <p>Card content goes here.</p>
    </CardContentDemo>
    <CardFooterDemo>
      <ButtonDemo variant="primary">Action</ButtonDemo>
    </CardFooterDemo>
  </CardDemo>
</ComponentDemo>

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

## Examples

### Simple Card

<ComponentDemo>
  <CardDemo>
    <CardHeaderDemo>
      <CardTitleDemo>Simple Card</CardTitleDemo>
    </CardHeaderDemo>
    <CardContentDemo>
      <p>This is a simple card with just title and content.</p>
    </CardContentDemo>
  </CardDemo>
</ComponentDemo>

```tsx
<Card>
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This is a simple card with just title and content.</p>
  </CardContent>
</Card>
```

### Card with Footer

<ComponentDemo>
  <CardDemo>
    <CardHeaderDemo>
      <CardTitleDemo>Card with Footer</CardTitleDemo>
      <CardDescriptionDemo>Description text</CardDescriptionDemo>
    </CardHeaderDemo>
    <CardContentDemo>
      <p>Content area</p>
    </CardContentDemo>
    <CardFooterDemo>
      <ButtonDemo variant="outline">Cancel</ButtonDemo>
      <ButtonDemo variant="primary" class="ml-2">Save</ButtonDemo>
    </CardFooterDemo>
  </CardDemo>
</ComponentDemo>

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card with Footer</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content area</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

### Card Grid

<ComponentDemo>
  <div class="grid grid-cols-3 gap-4">
    <CardDemo>
      <CardHeaderDemo>
        <CardTitleDemo>Card 1</CardTitleDemo>
      </CardHeaderDemo>
      <CardContentDemo>Content 1</CardContentDemo>
    </CardDemo>
    <CardDemo>
      <CardHeaderDemo>
        <CardTitleDemo>Card 2</CardTitleDemo>
      </CardHeaderDemo>
      <CardContentDemo>Content 2</CardContentDemo>
    </CardDemo>
    <CardDemo>
      <CardHeaderDemo>
        <CardTitleDemo>Card 3</CardTitleDemo>
      </CardHeaderDemo>
      <CardContentDemo>Content 3</CardContentDemo>
    </CardDemo>
  </div>
</ComponentDemo>

```tsx
<div className="grid grid-cols-3 gap-4">
  <Card>
    <CardHeader>
      <CardTitle>Card 1</CardTitle>
    </CardHeader>
    <CardContent>Content 1</CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>Card 2</CardTitle>
    </CardHeader>
    <CardContent>Content 2</CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>Card 3</CardTitle>
    </CardHeader>
    <CardContent>Content 3</CardContent>
  </Card>
</div>
```

## API

### Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |

### CardHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |

### CardTitle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |

### CardDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |

### CardContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |

### CardFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | - | Additional CSS classes |

