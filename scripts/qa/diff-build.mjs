// Semantic diff between two VitePress dist/ trees.
// Normalizes content-hashed asset filenames so only real changes surface,
// then reports the distinct kinds of change rather than "every file differs".
import fs from 'node:fs';
import path from 'node:path';

const [baseDir, headDir] = process.argv.slice(2);
if (!baseDir || !headDir) {
  console.error('usage: node scripts/qa/diff-build.mjs <baseline-dist> <new-dist>');
  process.exit(1);
}

const norm = (s) => s
  .replace(/\.[A-Za-z0-9_-]{8}\.(js|css)/g, '.[hash].$1')  // vite content hashes
  .replace(/"[A-Za-z0-9_-]{8}"/g, '"[hash]"')
  // ::: tabs containers mint random ids on every build -> pure noise
  .replace(/(name|id|for)="(group|tab)-[A-Za-z0-9_-]{5,}"/g, '$1="$2-[rand]"');

const htmlFiles = (dir) => {
  const out = [];
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { if (e.name !== 'assets') walk(p); }
      else if (e.name.endsWith('.html')) out.push(path.relative(dir, p));
    }
  })(dir);
  return out.sort();
};

const base = new Set(htmlFiles(baseDir));
const head = new Set(htmlFiles(headDir));

const added = [...head].filter((f) => !base.has(f));
const removed = [...base].filter((f) => !head.has(f));
const changed = [];

for (const f of [...base].filter((x) => head.has(x))) {
  const a = norm(fs.readFileSync(path.join(baseDir, f), 'utf8'));
  const b = norm(fs.readFileSync(path.join(headDir, f), 'utf8'));
  if (a === b) continue;

  // Classify: which regions of the page actually moved?
  const grab = (s, re) => (s.match(re) || []).join('\n');
  const regions = {
    sidebar: /<a[^>]*class="[^"]*VPSidebar[^"]*"[\s\S]{0,200}?<\/a>/g,
    main: /<main[\s\S]*?<\/main>/g,
    title: /<title>[\s\S]*?<\/title>/g,
    ogdesc: /<meta property="og:description"[^>]*>/g,
    jsonld: /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
  };
  const moved = [];
  for (const [name, re] of Object.entries(regions)) {
    if (grab(a, re) !== grab(b, re)) moved.push(name);
  }
  // Anything changed outside the classified regions (e.g. nav links) -> "other"
  if (moved.length === 0) moved.push('other/nav');
  changed.push({ f, moved });
}

console.log(`baseline pages: ${base.size}   new pages: ${head.size}`);
if (added.length)   console.log(`\nADDED (${added.length}):\n  ` + added.join('\n  '));
if (removed.length) console.log(`\nREMOVED (${removed.length}):\n  ` + removed.join('\n  '));

const byKind = {};
for (const c of changed) {
  const k = c.moved.join('+');
  (byKind[k] ||= []).push(c.f);
}
console.log(`\nCHANGED: ${changed.length} pages, grouped by what moved:`);
for (const [kind, files] of Object.entries(byKind).sort((x, y) => y[1].length - x[1].length)) {
  console.log(`\n  [${kind}]  ${files.length} page(s)`);
  files.slice(0, 12).forEach((f) => console.log(`      ${f}`));
  if (files.length > 12) console.log(`      … +${files.length - 12} more`);
}
if (!changed.length && !added.length && !removed.length) console.log('\nNo semantic changes.');
