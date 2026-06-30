---
name: fluentcart-doc-writer
description: Master guide for authoring FluentCart documentation pages in the VitePress site at docs.fluentcart.com. Use whenever the user asks to write, draft, edit, expand, restructure, or proofread any markdown file under guide/. Covers project rules, voice and tone, formatting conventions, and routing to template specialists. Always consult before producing content.
---

# FluentCart Doc Writer — Master Skill

You are writing for **FluentCart**, a WordPress e-commerce plugin. The site is built with VitePress 1.6.4 and lives at https://docs.fluentcart.com. All user docs are under `guide/`. Repository root: `/Users/authlab-24/Desktop/fluent-cart-docs`.

Read this skill first, then route to the matching specialist below for the page template.

---

## 1. Universal page rules (non-negotiable)

- **No frontmatter** on regular doc pages. Start the file with a single H1 (`# Page Title`). The home page (`index.md`) is the only file that uses `layout: home`.
- **SEO is auto-injected.** `.vitepress/config.mjs` `transformPageData` adds canonical URL, OG tags, Twitter card, JSON-LD `TechArticle`, breadcrumbs, and the sitemap entry. Never add `<meta>`, `<link rel="canonical">`, or JSON-LD by hand.
- **Outline shows H2–H3 only.** Use `##` for main sections, `###` for sub-sections. `####` is allowed for inline procedural sub-steps but won't appear in the right-hand outline.
- **Internal links** use clean URLs: `/guide/<section>/<slug>` (no `.md`, no `.html`). Section index = `/guide/<section>/`.
- **External links** auto-open in a new tab via a global markdown rule. Never write `target="_blank"` manually.
- **Images** physically live under `guide/public/images/<section>/<sub>/file.webp` and are referenced as `/images/<section>/<sub>/file.webp` (because `vite.publicDir = 'guide/public'`). Prefer `.webp`. Alt-text convention: `Screenshot of <thing>`.
- **Sidebar must be updated** in `.vitepress/config.mjs` → `themeConfig.sidebar['/guide/']` whenever a page is added, renamed, or removed.
- **Folder names are stable.** Never rename `tax-&-duties/` (literal `&`) or any other section folder — many pages link to them.

For the full rule set, see `CLAUDE.md` at the repo root. This skill summarizes the writing-relevant subset.

---

## 2. Voice & tone (match these patterns exactly)

### 2.1 Opening hook (first paragraph)
Two to three sentences, benefit-driven, second-person, written to answer "what does this page do?" Verbatim model:

> Welcome to **FluentCart**, a powerful and flexible e-commerce solution for WordPress designed to help you create and manage a full-featured online store with ease. Whether you are a small business owner, a course creator, or a software developer, FluentCart provides the tools you need to sell anything, anywhere.

A second variant for feature pages:

> Cloudflare Turnstile is a powerful, privacy-first security solution that provides an effortless alternative to traditional CAPTCHAs. By integrating Cloudflare Turnstile with FluentCart, you can protect your **Checkout Page** from spam and malicious bots without interrupting the customer's journey.

Avoid: "In this guide we will…" / "This article explains…" — too clinical for FluentCart's voice.

### 2.2 Bridge sentences (lead-in to a section or list)
Short (6–12 words), temporal, action-first. Verbatim examples:

> Before heading to Cloudflare, you need to prepare the integration within your WordPress site.

> Now, let's link the two platforms to finalize the security layer.

> First, you need to make sure the FluentCRM integration module is active.

Pattern: `[temporal marker] [condition] [action]`. Always introduce a numbered list with a bridge sentence — never drop a list cold.

### 2.3 Voice register
- **Second person** ("you", "your") throughout. Switch to "customers" only when describing what end-users see.
- **Present tense**, action-first. Imperative verbs in steps ("Click", "Navigate", "Copy").
- **Contractions** ~40%: use "you'll", "you're", "let's" in procedural and explanatory prose; avoid in formal constraints ("cannot be disabled", not "can't be disabled").
- **Sentence-length mix**: ~35% short (6–12 words), ~45% medium (13–25), ~20% long (26+). Vary deliberately — short sentences punctuate, long sentences explain context.

### 2.4 Closing
Pages end on an outcome statement, not a sign-off. Verbatim examples:

> Your store is now configured to securely accept payments through Stripe.

> Your checkout page is now officially protected by Cloudflare Turnstile.

Don't write "Hope this helps!" / "That's it!" / "Conclusion".

---

## 3. Formatting conventions

### 3.0 Punctuation discipline — no em dashes

**Do not use em dashes (`—`) in doc pages** unless they are critically needed. Em dashes were over-used in earlier writing; new pages should prefer cleaner alternatives. Reach for, in order:

1. **Colon** — for label-then-description (`**Cost per item:** What this product costs to produce`).
2. **Comma or parentheses** — for parenthetical asides (`Inventory (visible only when tax is enabled)`).
3. **Period + new sentence** — when the second clause is a full thought.

Only keep an em dash if removing it genuinely hurts readability — e.g., setting off a stark contrast inside a sentence that no other punctuation handles cleanly. When in doubt, rewrite without it.

This applies to:
- Body prose
- Bullet item descriptions
- Inline annotations (`*(Toggle, optional)*` not `*(Toggle — Optional)*`)
- Callout text

### 3.1 Bold patterns (memorize these four)

| Use | Example |
|---|---|
| UI navigation paths | `**FluentCart Pro > Settings**` (use `>` for nav arrows) |
| Field labels (with colon) | `**Feed Title:**` |
| Button names | `**Add Integration**`, `**Save Settings**` |
| Emphasized terms | `**Global Integrations**`, `**Live Mode**` |

### 3.2 Field / option description format
Two acceptable patterns. Pick one per page and stay consistent.

**Pattern A — Bold label, colon, full description (most common):**
```
* **Title:** Enter the main name of your product (e.g., "Purple Air Max Trainers"). This name shows up everywhere: on your shop page, in the cart, and at checkout.
* **Email Address:** A system-required field used for order confirmations and communication. This field cannot be disabled.
```

**Pattern B — Bold label, colon, short phrase (used for compact lists):**
```
- **Cost per item:** What this product actually costs you to source or produce
- **Profit:** Auto-calculated (Price minus Cost)
- **Margin:** Your profit as a percentage, also auto-calculated
```

Both patterns use a colon — Pattern A for full descriptions, Pattern B for terse one-liners. Do not use em dashes between the label and the description.

Annotate optional/required state inline: `*(Required)*`, `*(Optional)*`, `*(Collapsible section)*`, `*(Toggle, optional)*`.

### 3.3 Lists
- Numbered (`1.` / `1.  ` with two trailing spaces is also seen) for sequential procedures.
- Bullets (`*` or `-`, matching the surrounding file) for non-sequential enumerations.
- Always introduce a list with a bridge sentence. Never drop the list in cold.

### 3.4 Cross-link density
About one internal link per 3–4 sentences in narrative prose. Weave links into the bold name of the linked feature:

> Connect seamlessly with tools like **[FluentCRM](/guide/integrations/fluentcrm-integration)** to automatically tag customers and start email sequences.

> To learn more about how shipping classes work, see the [Understanding Shipping Classes](/guide/shipping/understanding-shipping-classes) guide.

### 3.5 Callouts
- `::: info ... :::` for context, gotchas, and "FYI" notes. Used sparingly (~1 per 300–400 words).
- `> **Note**` blockquote form is also seen in older pages — match the surrounding file's existing style if editing.

Verbatim model:
```
::: info
This setting is directly linked to your payment gateways. When you set the store to **Live Mode**, your payment methods will also switch to their live settings.
:::
```

### 3.6 Images
- Insert immediately after the action sentence the image illustrates, not at the end of a section.
- One image per step in step-based pages; one or two per feature section in reference pages.
- Reference path always begins with `/images/<section>/...` (the public-dir mapping). Some older pages use `/guide/public/images/...` — both work, but new pages should use `/images/...`.

### 3.7 YouTube video embeds

Use the global `<YouTubeEmbed>` Vue component. **Never use a raw `<iframe>`.** The component shows a thumbnail click-to-load facade that avoids YouTube's bot-check prompt (triggered in all browsers with third-party cookie blocking enabled) and is fully responsive at 16:9.

```md
<YouTubeEmbed id="VIDEO_ID" />
```

- `id` is the 11-character YouTube video ID from the watch URL (`watch?v=<id>`).
- **Placement:** after the opening paragraph/intro block, before the first `##` section heading.
- **Channel rule:** only embed videos from the **WPManageNinja** channel. Verify with the oEmbed API before adding: `curl "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json"` — `author_name` must be `WPManageNinja`.
- The component is registered globally in `.vitepress/theme/index.js`. No import needed in markdown files.
- Source: `.vitepress/theme/components/YouTubeEmbed.vue`.

---

## 4. Workflow checklist (every new or renamed page)

1. **Locate the right `guide/<section>/` folder.** Filename slug = URL slug.
2. **Pick the matching template specialist** (see §5) and follow its heading sequence.
3. **Write the file** — H1 only at the top, no frontmatter.
4. **Add the page to the sidebar** in `.vitepress/config.mjs` under `themeConfig.sidebar['/guide/']`. Sidebar entry shape:
   ```js
   { text: 'Page Title', link: '/guide/section/page-slug' }
   ```
   Nested groups use `{ text: 'Group', collapsed: true, items: [...] }` and groups themselves can contain a parent link plus a nested `items: [...]` (see Product Types & Creation in the existing config).
5. **Place images** under `guide/public/images/<section>/<sub>/`.
6. **Run `npm run docs:dev`** and verify: page renders, sidebar updates, images load, internal links resolve.
7. **Don't commit** unless the user asks.

---

## 5. Page template specialists (route by what you're writing)

| Writing... | Use specialist |
|---|---|
| A section index/overview page (`guide/<section>/index.md`) | `fluentcart-overview-page` |
| A third-party integration guide under `guide/integrations/` | `fluentcart-integration-page` |
| A payment gateway settings page under `guide/payments-checkout/connecting-payment-gateways/` | `fluentcart-payment-gateway-page` |
| A product creation/management page under `guide/product-types-creation/` | `fluentcart-product-page` |
| A settings page under `guide/settings-configuration/` OR a report under `guide/reporting-analytics/` | `fluentcart-settings-page` |
| Anything else (troubleshooting, glossary, customization, changelog) | Follow this master skill plus the closest existing neighboring page |

---

## 6. Things to NEVER do

- Add a `title:` frontmatter field to a regular doc page.
- Add manual `<meta>`, canonical, or JSON-LD tags.
- Write `target="_blank"` on links.
- Drop a numbered list without a bridge sentence above it.
- End a page with a generic "That's it!" / "Hope this helps!" sign-off.
- Invent screenshots. Only reference images that physically exist or that the user has indicated will be added.
- Use em dashes (`—`) in body prose, bullets, or annotations unless removing the em dash genuinely hurts readability. Prefer colon, comma, parentheses, or a period (see §3.0).
- Edit `.vitepress/dist/` or `.vitepress/cache/` (generated).
- Commit unless the user explicitly asks.
