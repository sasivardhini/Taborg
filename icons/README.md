# Taborg Icons

## Icon Generation Instructions

The extension requires icons in the following sizes:
- 16x16px (toolbar icon)
- 48x48px (extension management page)
- 128x128px (Chrome Web Store)

### Using the SVG Source

The `icon.svg` file contains the source design. To generate PNG icons:

**Option 1: Using Online Converters**
1. Visit https://cloudconvert.com/svg-to-png or similar
2. Upload `icon.svg`
3. Set output dimensions: 16x16, 48x48, and 128x128
4. Download and save as `icon16.png`, `icon48.png`, `icon128.png`

**Option 2: Using ImageMagick (if available)**
```bash
convert icon.svg -resize 16x16 icon16.png
convert icon.svg -resize 48x48 icon48.png
convert icon.svg -resize 128x128 icon128.png
```

**Option 3: Using Node.js with sharp**
```bash
npm install sharp
node generate-icons.js
```

### Temporary Icons for Development

For testing, you can use the SVG directly or create simple colored squares:
- Use any 16x16, 48x48, and 128x128 PNG images
- Place them in this directory with the correct names

### Design Notes

The icon design represents:
- **Grid pattern**: Organized tabs and windows
- **Gradient**: Modern, professional look (purple to pink)
- **Rounded squares**: Friendly, approachable UI
- **Opacity layers**: Depth and hierarchy

Colors used:
- Primary: #6366f1 (Indigo)
- Secondary: #8b5cf6 (Purple)
- Accent: #ec4899 (Pink)
