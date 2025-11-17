// Simple icon generator for development
// This creates placeholder icons if sharp is available

const fs = require('fs');
const path = require('path');

// Try to use sharp if available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('Sharp not available. To generate icons, run: npm install sharp');
  console.log('Alternatively, convert icon.svg manually using online tools.');
  process.exit(0);
}

const sizes = [16, 48, 128];
const svgPath = path.join(__dirname, 'icon.svg');

async function generateIcons() {
  console.log('Generating icons from SVG...');

  for (const size of sizes) {
    const outputPath = path.join(__dirname, `icon${size}.png`);

    try {
      await sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(outputPath);

      console.log(`✓ Generated icon${size}.png`);
    } catch (error) {
      console.error(`✗ Failed to generate icon${size}.png:`, error.message);
    }
  }

  console.log('\nIcons generated successfully!');
}

generateIcons().catch(error => {
  console.error('Error generating icons:', error);
  process.exit(1);
});
