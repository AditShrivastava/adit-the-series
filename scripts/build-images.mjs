// Builds responsive portrait assets and the social-share image from pic1.jpeg.
// The supplied portrait already has a dark studio background that blends with the site's cinematic theme.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const source = sharp('pic1.jpeg');
const { width, height } = await source.metadata();
if (!width || !height) throw new Error('Could not read dimensions from pic1.jpeg');

for (const w of [420, 672]) {
  await sharp('pic1.jpeg')
    .resize({ width: Math.min(w, width) })
    .webp({ quality: 88, effort: 6 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop with the portrait on the right.
const portrait = await sharp('pic1.jpeg').resize({ height: 630, withoutEnlargement: false }).jpeg({ quality: 90 }).toBuffer();
const glow = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="78%" cy="45%" r="48%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.30"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#07070a"/>
  <rect width="1200" height="630" fill="url(#g)"/>
</svg>`);
const title = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="72" y="294" font-family="Impact, 'Arial Narrow', sans-serif" font-size="150" fill="#f4f1ec" letter-spacing="4">ADIT</text>
  <text x="78" y="350" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
  <text x="78" y="418" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="17" fill="#a7a6ad" letter-spacing="3">PRODUCT MARKETING • GROWTH STRATEGY • TECHNOLOGY</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#07070a' } })
  .composite([
    { input: glow },
    { input: portrait, gravity: 'southeast' },
    { input: title },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(`${OUT}/og-image.jpg`);
console.log('Adit portrait and social-share assets built.');
