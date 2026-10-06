// Brand-coloured callout arrows + webp export for doc screenshots.
// Coordinates are IMAGE pixels (already multiplied by the device scale factor).

const sharp = require('sharp');

const BRAND = '#00009F';       // FluentCart brand blue (matches scripts/generate-featured-images.mjs)
const QUALITY = 82;            // webp quality used across the docs

// A gently curved arrow whose tip stops `gap` px short of the target's edge.
// `from` is the side the arrow comes FROM: left | right | top | bottom.
function arrowSvg(target, from = 'left', len = 220, scale = 2) {
  const cx = target.x + target.width / 2;
  const cy = target.y + target.height / 2;
  const gap = 14 * scale;
  let tip, tail, ctrl;
  switch (from) {
    case 'right':
      tip = [target.x + target.width + gap, cy];
      tail = [tip[0] + len, cy - len * 0.45];
      ctrl = [tip[0] + len * 0.55, cy + len * 0.05];
      break;
    case 'top':
      tip = [cx, target.y - gap];
      tail = [cx - len * 0.5, tip[1] - len];
      ctrl = [cx - len * 0.05, tip[1] - len * 0.6];
      break;
    case 'bottom':
      tip = [cx, target.y + target.height + gap];
      tail = [cx - len * 0.5, tip[1] + len];
      ctrl = [cx - len * 0.05, tip[1] + len * 0.6];
      break;
    case 'left':
    default:
      tip = [target.x - gap, cy];
      tail = [tip[0] - len, cy + len * 0.45];
      ctrl = [tip[0] - len * 0.55, cy - len * 0.05];
  }
  const ang = Math.atan2(tip[1] - ctrl[1], tip[0] - ctrl[0]);
  const hl = 22 * scale, hw = 13 * scale;
  const bx = tip[0] - Math.cos(ang) * hl, by = tip[1] - Math.sin(ang) * hl;
  const p1 = [bx + Math.cos(ang + Math.PI / 2) * hw, by + Math.sin(ang + Math.PI / 2) * hw];
  const p2 = [bx + Math.cos(ang - Math.PI / 2) * hw, by + Math.sin(ang - Math.PI / 2) * hw];
  const sx = tip[0] - Math.cos(ang) * hl * 0.7, sy = tip[1] - Math.sin(ang) * hl * 0.7;
  const path = `M ${tail[0]} ${tail[1]} Q ${ctrl[0]} ${ctrl[1]} ${sx} ${sy}`;
  const head = `${tip[0]},${tip[1]} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`;
  const w = 5 * scale;
  // white halo underneath keeps the arrow legible on dark buttons and busy backgrounds
  return `
    <path d="${path}" fill="none" stroke="#ffffff" stroke-width="${w + 4 * scale}" stroke-linecap="round"/>
    <polygon points="${head}" fill="#ffffff" stroke="#ffffff" stroke-width="${4 * scale}" stroke-linejoin="round"/>
    <path d="${path}" fill="none" stroke="${BRAND}" stroke-width="${w}" stroke-linecap="round"/>
    <polygon points="${head}" fill="${BRAND}" stroke="${BRAND}" stroke-width="${1 * scale}" stroke-linejoin="round"/>`;
}

// Rounded rectangle outline around a target (use sparingly, arrows are the default).
function highlightSvg(target, scale = 2) {
  const pad = 6 * scale;
  return `<rect x="${target.x - pad}" y="${target.y - pad}" width="${target.width + pad * 2}" height="${target.height + pad * 2}" rx="${8 * scale}" ry="${8 * scale}" fill="none" stroke="${BRAND}" stroke-width="${3 * scale}"/>`;
}

// annotate(inputPng, outFile, { arrows, highlights, crop, scale })
//   arrows:     [{ target: {x,y,width,height}, from, len }]
//   highlights: [{x,y,width,height}]
//   crop:       { left, top, width, height } in image px (applied BEFORE drawing; targets are shifted)
// Writes .webp when outFile ends with .webp, otherwise .png.
async function annotate(inputPng, outFile, { arrows = [], highlights = [], scale = 2, quality = QUALITY, crop = null } = {}) {
  let img = sharp(inputPng);
  const meta = await img.metadata();
  let width = meta.width, height = meta.height, offX = 0, offY = 0;
  if (crop) {
    const c = { left: crop.left || 0, top: crop.top || 0, width: crop.width || meta.width - (crop.left || 0), height: crop.height || meta.height - (crop.top || 0) };
    c.width = Math.min(c.width, meta.width - c.left);
    c.height = Math.min(c.height, meta.height - c.top);
    img = img.extract(c);
    width = c.width; height = c.height; offX = c.left; offY = c.top;
  }
  const shift = (t) => ({ ...t, x: t.x - offX, y: t.y - offY });
  const parts = [
    ...highlights.map(t => highlightSvg(shift(t), scale)),
    ...arrows.map(a => arrowSvg(shift(a.target), a.from, a.len || 220, scale)),
  ];
  if (parts.length) {
    const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${parts.join('')}</svg>`);
    img = sharp(await img.png().toBuffer()).composite([{ input: svg, top: 0, left: 0 }]);
  }
  if (outFile.endsWith('.webp')) await img.webp({ quality }).toFile(outFile);
  else await img.png().toFile(outFile);
  return outFile;
}

// Stack two or more PNGs (same width) vertically with a bold label above each.
// Used for before/after storefront comparisons.
async function stack(files, labels, outFile, { gap = 40, labelH = 110, quality = QUALITY } = {}) {
  const metas = await Promise.all(files.map(f => sharp(f).metadata()));
  const W = Math.max(...metas.map(m => m.width));
  let H = 0;
  const positions = [];
  metas.forEach((m, i) => { positions.push(H + labelH); H += labelH + m.height + (i < metas.length - 1 ? gap : 0); });
  const text = (t, y) => `<text x="16" y="${y + 72}" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="44" font-weight="700" fill="#111827">${t.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</text>`;
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#eef0f4"/>${labels.map((l, i) => text(l, positions[i] - labelH)).join('')}</svg>`);
  await sharp(svg).composite(files.map((f, i) => ({ input: f, top: positions[i], left: 0 }))).webp({ quality }).toFile(outFile);
  return outFile;
}

module.exports = { annotate, stack, arrowSvg, BRAND, QUALITY };
