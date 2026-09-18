---
name: fluentcart-doc-screenshots
description: Take, annotate, and place pixel-consistent screenshots of the FluentCart admin and storefront for docs.fluentcart.com pages. Use whenever the user asks to "take screenshots", "add images", "capture the UI", "update the screenshot", or when a doc page you are writing needs an image of a FluentCart screen. Covers the headless-Chrome runner (scripts/screenshots/shoot.cjs), JSON shot plans, crop/arrow/naming rules, placing images in markdown, branch switching for unreleased UI, and verification. Do NOT use the Claude-in-Chrome extension or macOS screencapture for this.
---

# FluentCart Doc Screenshots

You are producing screenshots for the VitePress docs at `/Users/authlab-24/Desktop/WPManageNinja-Docs/fluent-cart-docs`. Every screenshot is taken by a script, never by hand, so the output is reproducible and every image on the site shares the same framing, scale, and arrow style.

Read this whole file before taking a single screenshot. Then follow the workflow in §2 exactly.

---

## 1. Facts you must not rediscover

| Thing | Value |
|---|---|
| Dev site | `http://cart.local` (Local by Flywheel, this Mac). Login `admin` / `admin`. |
| Plugin code the site runs | `/Users/authlab-24/Desktop/fluent-cart` — the site's `wp-content/plugins/fluent-cart` is a **symlink** to this clone. Branch = what the site shows. Default branch `develop`. |
| Admin URL pattern | `http://cart.local/wp-admin/admin.php?page=fluent-cart#<route>` — routes like `/settings/store-settings/`, `/settings/store-settings/appearance`, `/products`, `/orders`, `/customers`, `/reports/overview`. Full list: `resources/admin/routes.js` in the plugin. |
| App root element | `#fluent_cart_plugin_app`. The app is fixed-positioned **160px from the left** (WP menu) and **32px from the top** (WP admin bar). |
| Storefront | Product slug is `item` → `http://cart.local/item/<product-slug>/` (e.g. `/item/noteplus/`, a simple $90 digital product with a buy section). The FluentCart shop archive is `/shop-2/`. **`/shop/` is WooCommerce and `/products/` is Easy Digital Downloads — never screenshot those.** The store is in "coming soon" mode, so front-end pages must be visited logged in. |
| Runner | `npm run shots -- scripts/screenshots/plans/<plan>.json` (= `node scripts/screenshots/shoot.cjs …`). Library in `scripts/screenshots/lib/`. |
| Browser | Headless **real Google Chrome** (`/Applications/Google Chrome.app`) via `playwright-core`. It resolves from the docs repo's `node_modules`, then falls back to the plugin's. No download, no macOS permission. |
| Output | `guide/public/images/<section>/<sub>/<name>.webp`, referenced in markdown as `/images/<section>/<sub>/<name>.webp`. Raw PNGs land in `scripts/screenshots/raw/` (gitignored). |
| Scale | Viewport **1600 CSS px wide**, device scale factor **2** → images ~2880 px wide, matching the existing library (older files are 3066 px). Never resize output. |
| Brand colour | `#00009F` (arrows), white halo underneath. Defined in `scripts/screenshots/lib/annotate.cjs`. |
| webp quality | 82. |

### What does NOT work (do not retry these)
- **Claude-in-Chrome extension** (`mcp__claude-in-chrome__*`): it is bound to a different device and cannot resolve `cart.local`. Public sites load, the dev site errors. Skip it entirely for this task.
- **AppleScript + `screencapture`**: captures whatever overlaps the window (editor, dialogs), needs Screen Recording + Accessibility permissions for the `claude` binary, and System Events clicking was blocked. Skip.
- **`wp-cli`** for reading settings: fatals on this site. Read the plugin PHP instead.

---

## 2. Workflow (follow in order)

### Step 1 — Decide the shot list from the doc, not from the UI
For the page you are writing or updating, list every screenshot as a row:

```
name (file slug) | what it must show | clip type | arrow target (if any) | where it goes in the .md
```

Rules for deciding:
- **One image per procedural step that involves a click**, placed right after the sentence that says to click. Steps that are pure reading (a field description) get one image per *section*, not per bullet.
- **Arrows only where the sentence says "click"/"select"/"open"** — point at the exact control. A field-reference image gets **no arrow**.
- Skip a step's image if the control is already visible and obvious in the previous image.
- A new feature page needs, at minimum: (1) the "Accessing" shot with an arrow on the menu/tab item, (2) one shot per major section, (3) the Save/apply shot, and (4) for anything that changes the storefront, a **before/after** front-end composite.
- Reuse an existing image name if you are replacing a stale screenshot (keeps the markdown untouched). Check `guide/public/images/<section>/` first.

Naming: `kebab-case`, `<screen>-<what>.webp`, e.g. `appearance-inherit-theme.webp`, `store-settings-date-time.webp`, `products-search-help.webp`. No numbers, no dates.

### Step 2 — Confirm the UI is on the site
- If the feature is on `develop`, you're fine after a fresh build. Check `git -C /Users/authlab-24/Desktop/fluent-cart branch --show-current` and `git log -1`.
- If it lives on an **unmerged branch**, run `./scripts/screenshots/plugin-branch.sh <branch>` (switches the clone + rebuilds; ~40 s). When done, **always** run `./scripts/screenshots/plugin-branch.sh --restore`. The script snapshots and restores `config/app.php` (the plugin's build otherwise resets it to `env=production`, `using_faker=false`) and discards the regenerated `vendor/composer/autoload_*`. If the permission classifier blocks the script, tell the user to run it; do not hand-edit the plugin.
- PHP changes are live immediately; **Vue/JS changes need `npm run build`** in the plugin (the runner does not build).

### Step 3 — Write the plan JSON
Create `scripts/screenshots/plans/<page-slug>.json`. Copy the closest existing plan (`store-setup.json` for a settings tab, `products-search.json` for a list + dialog, `appearance.json` for a feature with pickers and a storefront before/after) and edit it. The complete step vocabulary is documented at the top of `scripts/screenshots/shoot.cjs`; the essentials:

```json
{
  "outDir": "guide/public/images/settings-configuration/<sub>",
  "viewport": { "width": 1600, "height": 1100 },
  "steps": [
    { "admin": "/settings/store-settings/" },
    { "fillByLabel": { "label": "Company Name", "value": "Cartuz Studio LLC" } },
    { "shot": { "name": "store-business-tax", "clip": { "rows": ["Business Details"], "pad": 24 } } },
    { "shot": { "name": "store-settings-timezone",
                "clip": { "rows": ["Date & Time Format", "Timezone"], "pad": 24 },
                "arrows": [ { "target": { "row": "Timezone", "part": "control" }, "from": "right", "len": 140 } ] } }
  ]
}
```

Selector forms accepted everywhere a `<sel>` is expected:
- CSS string — `".fct-reset-color-btn"`, `"a[href*=\"store-settings/appearance\"]:visible"`, `".fct-appearance-color-field:has(.setting-label:text-is(\"Button background\")) .fct-color-picker-box"`
- `{ "text": "Search Help" }` — exact visible text
- `{ "role": "button", "name": "^save$" }` — accessible role + name regex (use for **Save**)
- `{ "selector": "[role=\"radio\"]", "hasText": "Customize" }` — CSS narrowed by text
- `{ "row": "Timezone", "part": "control" | "label" | "row" }` — a schema-driven settings row (any `.setting-label` text). `control` = the radio group / select / input in that row. **Prefer this for anything on a Settings tab**; it never needs a CSS class.

Clip rules (what ends up in the image):
- `"app"` — the whole FluentCart admin app (its top nav + settings sidebar + content), WordPress bar and menu excluded. Use for "Accessing…" shots and any shot where the sidebar location matters.
- `{ "rows": [...], "pad": 24 }` — one or more settings rows, edge to edge. Use for field-reference images on settings tabs.
- `{ "element": "<sel>", "pad": 24 }` — a dialog, card, drawer, table. Add `"extendRight": true` to run from the element's left edge to the viewport's right edge (product gallery + buy column).
- `"crop": { "height": N }` (image px) trims dead space at the bottom of a tall `"app"` shot; use it whenever the viewport is taller than the content (e.g. a Save-button shot on a long form).
- Increase `viewport.height` (1400–1650) when a form is taller than 1100 so the full tab fits in one image; then crop.

Arrow rules:
- `from` is the side the arrow **comes from**: pick the side with empty space. Sidebar items → `"right"`. Header Save button → `"bottom"`. A control in the right column of a settings row → `"right"`. A card or picker in the left column → `"left"`.
- `len` 130–160 for controls, 200 only when there is a lot of room. If the arrow would cross another card or text, shorten it or change `from`.
- One arrow per image. Never label the arrow; the sentence above the image is the caption.

Data rules:
- Empty fields look fake. Use `fillByLabel` to type realistic placeholder data (a company name, an ID, a VAT number) **without clicking Save**. Use plausible but obviously sample values (`Cartuz Studio LLC`, `DE123456789`, `82-1234567`). Never real customer data.
- For pickers/toggles that must be *saved* to show an effect (Appearance colours), save, shoot, then put the setting back (see `appearance.json`, which ends by re-selecting the default and saving).
- Colour examples use the brand blue `#00009F`.

### Step 4 — Run it
```
npm run shots -- scripts/screenshots/plans/<page-slug>.json
npm run shots -- scripts/screenshots/plans/<page-slug>.json --only=name1,name2   # re-run selected shots
```
Each shot logs the written path and pixel size. Expect ~1–3 s per shot, plus ~10 s login.

If login loops ("did not redirect"), the site is slow: just re-run. If a selector is not found, open the plugin's Vue file for that screen (`resources/admin/…`) and read the class names; do not guess. For schema-driven settings screens, read `api/StoreSettings.php` for the label text and use `{ "row": "<label>" }`.

### Step 5 — Verify every image (mandatory)
Open each produced `.webp` with the Read tool and check, in this order:
1. No WordPress admin bar, no WP left menu, no browser chrome, no "needs to be updated" banner.
2. The intended control is fully inside the frame with breathing room; nothing is cut mid-word.
3. The arrow tip sits just outside the control's edge and does not cover text or cross another element.
4. State is right: the correct radio/card is selected, values are filled, the dialog is open.
5. Size is sane: 2880 px wide for `"app"` shots; no huge empty area at the bottom (fix with `crop.height`).
If anything fails, fix the plan and re-run with `--only=`. Do not hand-edit images.

### Step 6 — Place in markdown
- Reference: `![Screenshot of <what the reader sees>](/images/<section>/<sub>/<name>.webp)` — alt text starts with "Screenshot of".
- Position: **immediately after the sentence or step the image illustrates**, on its own line with a blank line above and below. Inside a numbered list, indent the image four spaces under the step.
- One image per step; one or two per reference section. Never stack two images with no text between them.
- Before/after composites go after the paragraph that explains the outcome (usually in "Saving Your Settings").
- Then run `npm run docs:build` (must be clean) and, for a new page, `npm run featured:generate`.
- Do not commit unless asked.

### Step 7 — Leave the site as you found it
- Any setting you saved for a shot: put it back (default colour source, etc.).
- Plugin clone: `./scripts/screenshots/plugin-branch.sh --restore` if you switched branches; confirm `git -C /Users/authlab-24/Desktop/fluent-cart status --short` shows only the developer's own `config/app.php` change (`env => 'dev'`, `using_faker => true`), nothing else.
- Keep the plan JSON in `scripts/screenshots/plans/` — it is the regression fixture for the next release.

---

## 3. Recipes

**Settings tab, full page + field close-ups** → copy `plans/store-setup.json`. Raise `viewport.height` until the whole form fits, shoot `"app"` with a `crop.height`, then one `rows` shot per section that has its own image in the doc.

**A dialog / modal** → click the trigger, `{"wait": 800}`, then `clip: {"element": ".<dialog-class>"}`. Element Plus dialogs are appended to `<body>`; class names are on the `el-dialog` (see `products-search.json`).

**A list screen's toolbar / search popover** → the search is an icon button (`.fct-btn-group button.icon-button:visible`); the input and the **Search Help** link only exist after clicking it.

**Colour pickers (Appearance tab)** → `setColor` opens the Element Plus picker, types the hex, confirms. After pickers, add `{"scrollTop": true}` because opening them scrolls the panel.

**Storefront before/after** → shoot the front page twice around a saved change with `"export": false`, then `{"stack": {...}}` to build the labelled vertical composite (`appearance.json`). Front shots use `"front"` with the theme header hidden and `clip: {"element": ".fct-product-gallery-wrapper", "pad": 40, "extendRight": true}` for the product page.

**Unreleased feature** → `plugin-branch.sh <branch>` → shoot → `plugin-branch.sh --restore`. Note in `.claude/plugin-memory/CHANGES.md` which branch the images came from.

---

## 4. Hard rules
- Never take screenshots by hand or via the Chrome extension; if the runner cannot do it, extend the runner (`lib/harness.cjs`) and keep the plan declarative.
- Never crop out part of a control to make an arrow fit; move the arrow.
- Never publish an image that shows another product's UI (Woo, EDD, Elementor pages) or the WordPress chrome.
- Never invent UI. If a selector or label from the doc cannot be found on the site, stop and tell the user which step is missing rather than shooting something similar.
- Never leave the plugin clone on a feature branch or with build-modified config.
