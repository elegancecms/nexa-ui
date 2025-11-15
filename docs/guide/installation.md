# Installation

## NPM

Install the CLI tool:

```bash
npm install -D @khaimerax/nexa
```

## Initialize

Initialize @khaimerax/nexa-ui in your project:

```bash
npx @khaimerax/nexa init
```

This will:
- Create `components/ui` directory
- Create `lib/utils.ts` with the `cn` utility function
- Check for Tailwind CSS configuration

## Add Components

Add components to your project:

```bash
# Add a button component
npx @khaimerax/nexa add button

# Add a card component
npx @khaimerax/nexa add card
```

## Requirements

- React ^18.0.0
- Tailwind CSS ^4.0.0
- TypeScript (recommended)

## Next Steps

- [Getting Started Guide](/guide/getting-started)
- [Components](/components/button)

