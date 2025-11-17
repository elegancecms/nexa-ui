# Windows NPX Sorunu Çözümü

Windows'ta NPX komutu bazen `.js` dosyalarını editörde açmak yerine çalıştırmalıdır. Bu sorunu çözmek için projenize şu script'leri ekleyebilirsiniz:

## package.json'a Eklenecek Scripts

```json
{
  "scripts": {
    "nexa:init": "node node_modules/@khaimerax/nexa/dist/cli.js init",
    "nexa:add": "node node_modules/@khaimerax/nexa/dist/cli.js add"
  }
}
```

## Kullanım

```bash
# Initialize
npm run nexa:init

# Add component
npm run nexa:add button
npm run nexa:add card
```

Bu şekilde NPX sorunu olmadan direkt çalışır!

