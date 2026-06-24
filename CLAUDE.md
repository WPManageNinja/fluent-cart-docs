# CLAUDE.md — FluentCart Documentation

This file tells Claude exactly how to work in this repo. Read it fully before any task.

---

## 1. What this project is

A **VitePress 1.6.4** static documentation site for **FluentCart**, a WordPress e-commerce plugin.

| Field | Value |
|---|---|
| Live site | https://docs.fluentcart.com |
| Dev docs (separate repo) | https://dev.fluentcart.com/ |
| Marketing site | https://fluentcart.com |
| Status | Released |
| Working dir | `/Users/authlab-24/Desktop/fluent-cart-docs` |
| Git branch | `master` (also the PR base) |

**No backend, no CI/CD, no test suite.** Every change is a content edit or a config edit.

---

## 2. Repo layout (memorize this)

```
.
├── .vitepress/
│   └── config.mjs              # Site config: head meta, sitemap, nav, sidebar, markdown plugins
├── guide/                      # ALL user-facing docs live here
│   ├── public/images/<section>/...   # Images (.webp) — served at /images/<section>/
│   ├── getting-started/
│   ├── product-types-creation/
│   ├── store-management/
│   ├── payments-checkout/
│   │   └── connecting-payment-gateways/   # Per-gateway docs (stripe-settings.md, etc.)
│   ├── shipping/
│   ├── tax-&-duties/                      # Note the literal `&` in folder name
│   ├── customer-dashboard/
│   ├── marketing-sales-tools/
│   ├── integrations/
│   ├── reporting-analytics/
│   ├── settings-configuration/
│   ├── storage/
│   ├── customization-and-themes/
│   ├── browsing-history/
│   ├── migration/edd/
│   ├── troubleshooting-support/
│   └── changelog.md
├── developer/index.md          # Stub — main dev docs are at dev.fluentcart.com
├── public/                     # Site-level assets: logo-full.png, logo-full-dark.svg, robots.txt
└── index.md                    # Home page (uses layout: home)
```

`vite.publicDir` is set to `'guide/public'`, which is why image paths are `/images/...` (not `/guide/public/images/...`).

---

## 3. Commands (only ones that exist)

```bash
npm run docs:dev           # Local dev with HMR
npm run docs:build         # Production build → .vitepress/dist/
npm run docs:clean-build   # Wipe .vitepress/cache + .vitepress/dist, then build
npm run docs:preview       # Preview the built site
```

There is **no** lint, no typecheck, no test command. Don't invent ones.

---

## 4. Page rules (follow exactly)

### 4.1 Frontmatter
- **Regular doc pages: NO frontmatter.** Start the file with an H1 (`# Page Title`). The introduction, integrations, and most pages follow this.
- **Home page (`index.md` only):** uses `layout: home` plus hero/features blocks.
- **SEO is automatic.** `config.mjs` injects canonical URL, OpenGraph, Twitter card, JSON-LD `TechArticle`, breadcrumbs, and sitemap entry per page. Do **not** add `<meta>` tags or duplicate JSON-LD in pages.

### 4.2 Heading hierarchy
- `#` once at the top = page title.
- `##` = main sections.
- `###` = sub-sections.
- `####` = procedural sub-steps inside a `###`.
- `outline: [2, 3]` — only H2/H3 appear in the right-hand outline. Don't put critical navigation under H4.

### 4.3 Links
- Internal links use clean URLs: `/guide/<section>/<page-slug>` (no `.md`, no `.html`).
- Section index pages: link as `/guide/<section>/` or `/guide/<section>/index`.
- External links auto-open in a new tab via a global markdown rule — do **not** add `target="_blank"` manually.
- `ignoreDeadLinks: true` is set, so broken links don't fail the build. Still get them right.

### 4.4 Images
- Store: `guide/public/images/<section>/<subsection>/<file>.webp`
- Reference: `![Descriptive alt text](/images/<section>/<subsection>/<file>.webp)`
- Prefer `.webp`. Always include meaningful alt text (existing convention is `Screenshot of <thing>`).

### 4.5 Bold formatting (existing convention — match it)
- UI navigation paths: `**FluentCart Pro → Integrations**`
- Field labels (with colon): `**Feed Title:**`
- Button names: `**Add Integration**`
- Emphasized terms inside paragraphs: `**Global Integrations**`

### 4.6 Lists
- Numbered (`1. 2. 3.`) for ordered procedures.
- Bullets (`*` or `-`) for unordered enumerations and feature lists.

### 4.7 Voice & tone
- Second person ("you"), present tense, action-first.
- Friendly, concise, instructional. Avoid marketing fluff inside guides.
- Cross-link aggressively to related pages — see `guide/getting-started/introduction-fluentcart.md` as the model.

### 4.8 Directives in use
- `::: info ... :::` for informational callouts. Other VitePress containers (tip/warning/danger/details) are available; use sparingly and only when consistent with neighboring pages.

---

## 5. Adding or editing pages — the workflow

1. **Locate the right section** under `guide/`. File slug = URL slug.
2. **Create/edit the `.md`** following section 4.
3. **Add to the sidebar** in `.vitepress/config.mjs` under `themeConfig.sidebar['/guide/']`. Sidebar shape:
   ```js
   { text: 'Group Title', collapsed: true, items: [
       { text: 'Page Title', link: '/guide/section/page-slug' },
       // Nested sub-items are supported (see Product Types & Orders Management groups):
       { text: 'Parent Page', link: '/guide/section/', items: [
           { text: 'Child Page', link: '/guide/section/child-slug' }
       ]}
   ]}
   ```
4. **Add images** to `guide/public/images/<section>/`.
5. **Run `npm run docs:dev`** and verify the page renders, the sidebar updates, images load, and internal links resolve.

When deleting a page, also remove its sidebar entry — orphan entries produce dead nav links.

---

## 6. Editing the changelog

`guide/changelog.md` is the public changelog. Append new releases at the **top**, following the existing heading + bullet format. Don't reformat past entries.

---

## 7. Things NOT to do

- Don't add a README.md or any new top-level docs unless explicitly asked — this CLAUDE.md is the project guide.
- Don't add frontmatter `title:` to regular pages (the H1 is the title). The Intro and integration files contain none.
- Don't add manual SEO meta tags, canonical links, or JSON-LD — `transformPageData` in `config.mjs` already handles all of it.
- Don't edit `.vitepress/dist/` or `.vitepress/cache/` — generated.
- Don't change `vite.publicDir`, `cleanUrls`, or `ignoreDeadLinks` without explicit user approval.
- Don't introduce new dependencies for trivial reasons. Current deps: `vitepress`, `ufo` (URL utils used in config), `turndown` (HTML→MD utility).
- Don't rename folders containing literal `&` (e.g. `tax-&-duties/`) — links in many pages depend on this exact spelling.
- Don't use Bash for content analysis when a Read or Edit fits.
- Don't commit unless the user asks.

---

## 8. Things to ALWAYS do

- Read this file first.
- Match existing tone/style by skimming a neighboring page in the same section before writing a new one.
- Update the sidebar whenever you add, rename, or remove a page.
- Keep image alt text descriptive.
- Use the exact section folder names already present.
- Run `npm run docs:dev` after structural changes (sidebar, new files, renames) to confirm the site still builds and navigates correctly.

---

## 9. Quick reference

- VitePress config: `.vitepress/config.mjs` (518 lines: `transformPageData`, sitemap, markdown plugin, nav, full sidebar)
- Sidebar lives at: `.vitepress/config.mjs` → `themeConfig.sidebar['/guide/']`
- Nav lives at: `.vitepress/config.mjs` → `themeConfig.nav`
- Image base: `/images/...` (mapped from `guide/public/images/`)
- Site assets (logos, robots.txt): `public/`
- Home: `index.md`  •  Changelog: `guide/changelog.md`  •  Dev stub: `developer/index.md`

---

## 10. Code-aware doc updates (plugin → docs sync)

When a request requires reading the FluentCart **plugin source code** (e.g. "update docs for v1.3.27", "document the new tax country toggle", "what changed in the plugin since 1.3.26"), load the orchestrator skill **`fluentcart-code-to-docs`**. It coordinates reading the plugin → mapping changes to doc pages → writing updates via the existing template specialists.

**Plugin source location (hardcoded sibling repo):**
```
/Users/authlab-24/Desktop/fluent-cart
```
Default branch is `development`. Tags are plain numbers (`1.3.27`), no `v` prefix. The plugin clone is **read-only** from this session — never edit, commit, or push to it.

**Helper scripts** under `scripts/plugin/`:

| Script | Purpose |
|---|---|
| `./scripts/plugin/pull.sh` | Fetch + fast-forward pull on the plugin repo's current branch *(legacy — the user now owns pulls; see plugin-memory note below)* |
| `./scripts/plugin/recent-changes.sh [N]` | Last N plugin commits with subject + file count (default 20) |
| `./scripts/plugin/diff-since.sh <ref>` | Commits + changed files between `<ref>` and HEAD |
| `./scripts/plugin/find-doc.sh <pattern>` | Locate doc pages mentioning a feature keyword |
| `./scripts/plugin/sync-memory.sh <prev-ref>` | Refresh the plugin-memory layer after a pull. Lists changed PHP/Vue files, prints the `ctx_index` invocation Claude should run, and prints a `CHANGES.md` skeleton |

**Plugin memory layer** (added to avoid re-exploring the plugin every release):

```
.claude/plugin-memory/
├── CATALOG.md   — module-level table of contents (always loaded by the orchestrator)
├── CHANGES.md   — per-release delta log, newest first (read first to see what's already addressed)
└── README.md    — overview of the 3-layer design
```

Plus an FTS5 index of `app/**/*.php` (and a small Vue allowlist) maintained via `mcp__plugin_context-mode_context-mode__ctx_index` and queried via `ctx_search`. Use `ctx_search` for symbol lookups in plugin source instead of `grep` / `find`.

**Pull rhythm:** the **user** owns `git pull` on the plugin repo. After pulling, the user runs `./scripts/plugin/sync-memory.sh <prev-ref>` and pastes the changelog. Claude does **not** auto-pull and does **not** auto-reindex — keeps memory state unambiguous.

**Workflow** is defined in `.claude/skills/fluentcart-code-to-docs/SKILL.md`. Always pair the orchestrator with the master `fluentcart-doc-writer` and the matching template specialist (integration, payment-gateway, product, settings, overview).

**Hard rules:** never copy plugin source code into user-facing docs (docs describe behavior, not implementation), never fabricate behavior the code doesn't support, never commit. End every code-to-docs run with the standard summary block defined in the skill, then append a new entry to `.claude/plugin-memory/CHANGES.md` and bump `Last fully audited:` in `CATALOG.md` for every module the run touched.
