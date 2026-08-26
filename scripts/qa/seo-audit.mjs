// SEO audit of the built VitePress site. Reads .vitepress/dist and reports
// per-page signals that search engines and social crawlers actually consume.
import fs from 'node:fs';
import path from 'node:path';

const DIST = process.argv[2] || '.vitepress/dist';
const pages = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== 'assets') walk(p); }
    else if (e.name.endsWith('.html')) pages.push(p);
  }
})(DIST);

const attr = (h, re) => { const m = h.match(re); return m ? m[1] : null; };
const rows = pages.map((p) => {
  const h = fs.readFileSync(p, 'utf8');
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  const text = main.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  const imgs = [...main.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  return {
    url: '/' + path.relative(DIST, p).replace(/index\.html$/, '').replace(/\.html$/, ''),
    title: attr(h, /<title>([^<]*)<\/title>/),
    metaDesc: attr(h, /<meta name="description" content="([^"]*)"/),
    ogDesc: attr(h, /<meta property="og:description" content="([^"]*)"/),
    ogTitle: attr(h, /<meta property="og:title" content="([^"]*)"/),
    ogImage: attr(h, /<meta property="og:image" content="([^"]*)"/),
    twCard: attr(h, /<meta name="twitter:card" content="([^"]*)"/),
    canonical: attr(h, /<link rel="canonical" href="([^"]*)"/),
    jsonLdDesc: (() => { const m = h.match(/"@type":"TechArticle"[\s\S]*?"description":"([^"]*)"/); return m ? m[1] : null; })(),
    h1: (main.match(/<h1\b/g) || []).length,
    h2: (main.match(/<h2\b/g) || []).length,
    words: text.split(/\s+/).filter(Boolean).length,
    imgCount: imgs.length,
    imgNoAlt: imgs.filter((i) => !/\balt="[^"]+"/.test(i)).length,
    intLinks: (main.match(/href="\/guide\//g) || []).length,
    extNoRel: (main.match(/<a\b[^>]*href="https?:\/\/(?!docs\.fluentcart\.com)[^"]*"[^>]*>/g) || [])
      .filter((a) => !/rel="[^"]*noopener/.test(a)).length,
  };
});

const guide = rows.filter((r) => r.url.startsWith('/guide/'));
const pct = (n) => `${n} (${Math.round((n / guide.length) * 100)}%)`;
const miss = (f) => guide.filter((r) => !r[f] || r[f].trim() === '');

console.log(`=== SEO AUDIT — ${guide.length} guide pages ===\n`);
console.log('SIGNAL                       MISSING/EMPTY');
console.log('-'.repeat(52));
for (const [label, f] of [
  ['<title>', 'title'],
  ['<meta name="description">', 'metaDesc'],
  ['og:description', 'ogDesc'],
  ['og:title', 'ogTitle'],
  ['og:image', 'ogImage'],
  ['twitter:card', 'twCard'],
  ['canonical', 'canonical'],
  ['JSON-LD description', 'jsonLdDesc'],
]) console.log(`${label.padEnd(28)} ${pct(miss(f).length)}`);

console.log('\n--- CONTENT SIGNALS ---');
console.log(`pages with 0 <h1>            ${guide.filter(r=>r.h1===0).length}`);
console.log(`pages with >1 <h1>           ${guide.filter(r=>r.h1>1).length}`);
console.log(`pages with 0 <h2>            ${guide.filter(r=>r.h2===0).length}`);
console.log(`thin pages (<300 words)      ${guide.filter(r=>r.words<300).length}`);
console.log(`images missing alt text      ${guide.reduce((s,r)=>s+r.imgNoAlt,0)} across ${guide.filter(r=>r.imgNoAlt>0).length} pages`);
console.log(`external links w/o noopener  ${guide.reduce((s,r)=>s+r.extNoRel,0)}`);

const long = guide.filter(r=>r.title && r.title.length>60);
console.log(`\ntitles >60 chars (truncated in SERP)  ${long.length}`);
long.slice(0,8).forEach(r=>console.log(`   ${r.title.length}  ${r.title}`));

console.log('\n--- THINNEST PAGES ---');
guide.sort((a,b)=>a.words-b.words).slice(0,10)
  .forEach(r=>console.log(`   ${String(r.words).padStart(4)}w  ${r.url}`));

fs.writeFileSync('/tmp/seo-rows.json', JSON.stringify(rows, null, 0));
console.log('\n(full per-page data: /tmp/seo-rows.json)');
