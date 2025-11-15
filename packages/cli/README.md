# @khaimerax/nexa

CLI tool for adding @khaimerax/nexa-ui components to your project.

## Installation

```bash
npm install -D @khaimerax/nexa
```

## Usage

### Initialize

First, initialize @khaimerax/nexa-ui in your project:

```bash
npx @khaimerax/nexa init
```

This will:
- Create `components/ui` directory
- Create `lib/utils.ts` with the `cn` utility function
- Check for Tailwind CSS configuration

### Add Components

Add components to your project:

```bash
# Add a button component
npx @khaimerax/nexa add button

# Add a card component
npx @khaimerax/nexa add card

# Specify custom directory
npx @khaimerax/nexa add button --dir src/components
```

Components will be copied to your project as source files, allowing you to customize them as needed.

## Available Components

- `button` - Button component with variants and sizes
- `card` - Card component with header, content, and footer

## Requirements

- React ^18.0.0
- Tailwind CSS ^4.0.0
- TypeScript (recommended)

## License

MIT

