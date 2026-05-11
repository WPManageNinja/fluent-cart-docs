---
name: fluentcart-code-to-docs
description: Use when updating FluentCart documentation based on plugin source-code changes or a new plugin release version. Triggers on phrases like "update docs for v1.3.x", "sync docs to the latest plugin", "document the new <feature> in the plugin", "what changed in the plugin since <tag>", or any request that requires reading the FluentCart plugin's PHP/JS code at /Users/authlab-24/Desktop/fluent-cart before writing. Always pair with fluentcart-doc-writer (master) and the matching template specialist (integration, payment-gateway, product, settings, overview).
---

# FluentCart Code-to-Docs Orchestrator

You are bridging two repos:

| Repo | Path | Purpose |
|---|---|---|
| **Plugin source** | `/Users/authlab-24/Desktop/fluent-cart` | The actual WordPress plugin code (Laravel-style PHP under `app/`, Vue/JS under `resources/`). Read-only from here — never edit. |
| **Docs site** | `/Users/authlab-24/Desktop/fluent-cart-docs` | The VitePress docs you're writing into. Edits go here. |

The plugin's default branch is `development`. Tags are plain `1.3.27` (no `v` prefix), but the helper scripts accept either form.

---

## Workflow (6 steps — follow in order)

### 0. Load plugin memory FIRST
Before doing anything else, **read both** of these files:
- `.claude/plugin-memory/CATALOG.md` — module-level table of contents (what each plugin module does and which doc page it drives)
- `.claude/plugin-memory/CHANGES.md` — per-release delta log, newest at top (what the previous release already addressed and what was deferred)

Together these give you the module map and the most recent release context, so you can scope your work *without* rescanning the plugin tree.

If the catalog lists a `Last fully audited:` version older than the version the user is asking about — and you can see they've pulled new code (e.g. `git -C /Users/authlab-24/Desktop/fluent-cart rev-parse HEAD` differs from what's reflected in `CHANGES.md`) — prompt the user to run `./scripts/plugin/sync-memory.sh <prev-tag>` first. That refreshes the FTS5 index (Layer 2) and prints a CHANGES.md skeleton you can build on.

### 1. Confirm scope
Before reading any code, decide which of these the user is asking for:

- **Version range** ("update docs for v1.3.27"): diff the plugin between the previous release tag and the new tag/HEAD.
- **Single feature** ("document the new tax country toggle"): grep + read the relevant plugin module.
- **Single file or PR** ("the change in `Tax/CountryToggle.php`"): read just that file plus its callers.

If the user gave a version with no "since" reference, default to **the previous tag** as the comparison base (run `recent-changes.sh` first to see the tag list, then pick the prior one).

### 2. Run the right helper script
Use the bash helpers under `scripts/plugin/`. Always prefer one of these over running `git -C ...` chains by hand.

| Helper | When to use |
|---|---|
| `./scripts/plugin/pull.sh` | First call of the session, to make sure the plugin clone is current. |
| `./scripts/plugin/recent-changes.sh [N]` | When you need a quick orientation on what's been happening in the plugin. Default N=20. |
| `./scripts/plugin/diff-since.sh <tag>` | The primary tool for version-aligned updates. Outputs commits + changed files between `<tag>` and HEAD. |
| `./scripts/plugin/find-doc.sh <pattern>` | When you have a feature name and need to locate the doc page that already documents it. |

### 3. Map plugin paths → doc paths
Use this table. Confirmed against the live plugin layout:

| Plugin path (under `/Users/authlab-24/Desktop/fluent-cart/app/`) | Doc target |
|---|---|
| `Modules/PaymentMethods/StripeGateway/*` | `guide/payments-checkout/connecting-payment-gateways/stripe-settings.md` |
| `Modules/PaymentMethods/PayPalGateway/*` | `guide/payments-checkout/connecting-payment-gateways/paypal-settings.md` |
| `Modules/PaymentMethods/PaystackGateway/*` | `guide/payments-checkout/connecting-payment-gateways/paystack-settings.md` |
| `Modules/PaymentMethods/AirwallexGateway/*` | `guide/payments-checkout/connecting-payment-gateways/airwallex-settings.md` *(may need to be created)* |
| `Modules/PaymentMethods/Cod/*` | `guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings.md` |
| `Modules/PaymentMethods/Core/*` | Cross-cuts all gateways — re-read every gateway page if Core types/contracts change. |
| `Modules/Integrations/FluentPlugins/<X>/*` | `guide/integrations/<x>-integration.md` (FluentCRM, FluentCommunity, FluentBooking, FluentSupport, FluentAffiliate, etc.) |
| `Modules/Integrations/MailChimp/*` | `guide/integrations/mailchimp-integration.md` *(create if missing)* |
| `Modules/Turnstile/*` | `guide/integrations/cloudflare-turnstile-integration.md` |
| `Modules/StorageDrivers/*` | `guide/integrations/amazon-s3-integration.md` and any future driver-specific pages under `guide/storage/` |
| `Modules/ReportingModule/*` | `guide/reporting-analytics/*.md` (match the report name) |
| `Modules/Subscriptions/*` | `guide/product-types-creation/managing-subscriptions.md` |
| `Modules/StockManagement/*` | `guide/product-types-creation/inventory-management.md` + `advanced-inventory.md` |
| `Modules/Shipping/*` | `guide/shipping/*.md` |
| `Modules/Tax/*` | `guide/tax-&-duties/*.md` (literal `&` in folder name — do not rename) |
| `Modules/Coupon/*` | `guide/marketing-sales-tools/creating-managing-coupons/*.md` |
| `Modules/Templating/*` | `guide/customization-and-themes/*.md` |
| `Modules/WooCommerceMigrator/*` | `guide/migration/*.md` |
| `Modules/ProductIntegration/*` | `guide/product-types-creation/managing-product-integrations.md` |
| `Modules/Wishlist/*` | *(no current doc — flag for user; may need new page under marketing-sales-tools or customer-dashboard)* |
| `CPT/*` | `guide/product-types-creation/*.md` (custom post types are products/orders/etc.) |
| `Http/Controllers/Settings*` | `guide/settings-configuration/*.md` |
| `Http/Controllers/Admin/Reports*` | `guide/reporting-analytics/*.md` |
| `Models/*`, `Services/*`, `Helpers/*`, `Hooks/*` | Internal — usually no user-facing doc impact. Skip unless they expose a setting, hook documented in changelog, or visible behavior change. |
| `resources/admin/**/*.{vue,js}` | UI-level changes — re-read the doc page that documents the corresponding screen. |
| `fluent-cart.php` (root) | Plugin metadata. Update version reference in `guide/changelog.md` only. |

When a path doesn't fit the table, use `./scripts/plugin/find-doc.sh <feature-name>` to locate doc pages that mention the feature. If nothing matches, the change may need a **new** page — propose its location to the user before creating one.

### 4. Read the plugin code to understand the feature
- **Prefer `ctx_search` over `grep` / `find` for symbol lookups in plugin source.** The plugin is FTS5-indexed via context-mode (Layer 2 of `.claude/plugin-memory/`). Searches like `"SubscriptionReactivated"`, `"free_shipping bump"`, `"tax country toggle"` return matching files in milliseconds without re-walking the tree.
- Use native `Read` only for the specific files surfaced by `ctx_search` or named explicitly in `CATALOG.md`. Don't open files the catalog doesn't list as doc-relevant unless `ctx_search` results point you there.
- Look for: PHP class docblocks, Vue component prop comments, hook names (`apply_filters`, `do_action`), settings keys, and translatable strings (`__('...', 'fluent-cart')`) — the user-visible surface lives in those.
- If the change is purely internal (refactor, dead-code removal, type tightening), it usually does **not** need a doc update. Note it and move on.

### 5. Write the doc update via the right specialist
Once the affected doc page is identified, **always** load:
- `fluentcart-doc-writer` (master skill — tone, voice, universal rules)
- The template specialist matching the page type:
  - `fluentcart-integration-page` for `guide/integrations/`
  - `fluentcart-payment-gateway-page` for `guide/payments-checkout/connecting-payment-gateways/`
  - `fluentcart-product-page` for `guide/product-types-creation/`
  - `fluentcart-settings-page` for `guide/settings-configuration/` and `guide/reporting-analytics/`
  - `fluentcart-overview-page` for `guide/<section>/index.md`

Don't write from scratch — use the specialist's heading sequence and field-description format.

After writing:
- Update the sidebar in `.vitepress/config.mjs` if you added a page.
- Mention in your final report which doc pages changed and which sidebar entries (if any) you edited.

---

## Hard rules

- **Never fabricate behavior.** If the plugin code is ambiguous about what users see, ask the user before writing — don't guess.
- **Never copy plugin source code into the docs.** Docs describe behavior in user-facing language, not implementation. PHP class names and method names belong in dev docs (a separate site at https://dev.fluentcart.com).
- **Never skip the template specialist.** The whole point is tone and structural fidelity. If the user wants a quick "what changed" summary instead of a doc edit, deliver that as a chat message — don't bypass the specialists in a markdown file.
- **Never write secrets or API keys** into examples. Use placeholders like `<your-api-key>` or `sk_test_...`.
- **Never run `git push`, `git commit`, or any destructive command** in either repo. Stop at writing files and reporting changes.
- **Never edit anything inside `/Users/authlab-24/Desktop/fluent-cart`.** That repo is read-only from this session's perspective.
- **Don't trust the previous-tag default** for huge gaps. If `diff-since.sh 1.3.20` returns hundreds of files, push back and ask the user to scope down to a smaller range or specific module.

---

## Reporting format (end of every code-to-docs run)

End your turn with a concise summary:

```
## Plugin → Docs sync summary

**Source:** /Users/authlab-24/Desktop/fluent-cart  (<branch> @ <short-sha>)
**Range:** <since-ref>..HEAD   (<N> commits, <M> files changed)

### Doc pages updated
- guide/<section>/<page>.md  — <one-line reason>
- guide/<section>/<page>.md  — <one-line reason>

### Doc pages created (with sidebar entries added)
- guide/<section>/<page>.md  — <one-line reason>

### Plugin changes flagged but skipped (no doc impact)
- <plugin path>  — <reason: refactor / internal-only / dev-docs domain>

### Open questions for the user
- <if any — e.g. "should Wishlist get a new doc page?">
```

This format makes the run reviewable in seconds.

After printing the summary block:
1. **Append a new entry to `.claude/plugin-memory/CHANGES.md`** at the top, following the shape used by the most recent existing entry. The `sync-memory.sh` skeleton (if the user ran it) gives you most of the body — fill in the doc pages updated/created/skipped sections from your actual run.
2. **Bump `Last fully audited:`** in `.claude/plugin-memory/CATALOG.md` for every Modules/<X> section the run touched. Use the new release version (e.g. `v1.3.28`).
3. If a new module was added to the plugin or a doc page was moved, also update the matching CATALOG.md entry's structure (Key files, Drives docs).

Skipping these maintenance steps causes drift — the next session will think the catalog is current when it isn't.
