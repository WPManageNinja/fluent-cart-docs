---
name: fluentcart-featured-images
description: Generate or debug the auto-generated 1200x630 branded featured/OG images for FluentCart doc pages. Use when adding a doc page, changing an H1 title, when a featured image is missing or wrong, when the on-page hero needs toggling, or when any code re-derives the featured-image filename (config.mjs, FeaturedImage.vue). Covers scripts/generate-featured-images.mjs, the section--slug naming rule including nested index.md, and the FeaturedImage.vue hero.
---

# FluentCart Featured Images

Every doc page under `guide/` gets an auto-generated 1200×630 branded PNG, used as `og:image` / `twitter:image` for social sharing. (An on-page hero component exists but is disabled by default — see the toggle below.) Output goes to:

```
guide/public/images/featured/<section>--<page-slug>.png
```

## Generating

```bash
npm run featured:generate
```

Runs `scripts/generate-featured-images.mjs`. It is **idempotent** — it skips any page whose output PNG already exists. Pass `--force` to regenerate everything.

Run it when a new page is added or an existing page's H1 title changes.

## Naming rule (replicate this exactly)

- `<section>` = the first folder under `guide/`.
- `<page-slug>` = the filename without `.md`.
- An `index.md` **directly** under a section becomes `<section>--index.png`.
- A **nested** `index.md` (more than one level deep) folds the intervening path into the slug, so sibling nested indexes don't collide:

  ```
  guide/settings-configuration/roles-permissions/index.md
    → settings-configuration--roles-permissions-index.png
  ```

See the `buildNameParts()` comment in `scripts/generate-featured-images.mjs` for the authoritative rule.

**Any code that re-derives this filename must replicate the full rule, not just the simple case.** That currently means `.vitepress/config.mjs` and the on-page hero component.

## Exclusions

`guide/changelog.md` and everything under `guide/public/` are excluded.

## On-page hero

- Component: `.vitepress/theme/components/FeaturedImage.vue`
- Registered in the `doc-before` slot in `.vitepress/theme/Layout.vue`
- Computes the same URL client-side and hides itself on 404
- Toggle it off everywhere by flipping `SHOW_FEATURED_HERO` to `false` in `Layout.vue`
