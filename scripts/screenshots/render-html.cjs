// Render a saved email HTML file headlessly and write a .webp. Usage:
//   node scripts/screenshots/render-html.cjs <in.html> <out.webp> [width=720]
const path = require('path');
const sharp = require('sharp');
const { chromium } = require('playwright-core');
(async () => {
  const [inp, out, w] = process.argv.slice(2);
  const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
  const p = await b.newPage({ viewport: { width: parseInt(w || 720, 10), height: 900 }, deviceScaleFactor: 2 });
  await p.goto('file://' + path.resolve(inp));
  await p.waitForTimeout(500);
  const png = await p.screenshot({ fullPage: true });
  await b.close();
  await sharp(png).webp({ quality: 82 }).toFile(path.resolve(out));
  console.log('wrote', out);
})();
