---
name: fluentcart-overview-page
description: Specialist template for FluentCart section index/overview pages — the index.md file that lives at guide/<section>/index.md and serves as the entry point for a major guide section (Store Management, Payments & Checkout, Product Types & Creation, etc.). Use when creating, editing, or restructuring any guide/<section>/index.md file. Always pair with fluentcart-doc-writer for tone and universal rules.
---

# FluentCart Section Overview Page Template

A section overview page is a hub: it introduces a major guide section and links to its child topics. Keep it short — usually 60–120 words plus a bullet list. Most existing overview pages are under 30 lines.

## When to use this template

You are writing or editing one of these:
- `guide/store-management/index.md`
- `guide/payments-checkout/index.md`
- `guide/product-types-creation/index.md`
- `guide/shipping/index.md`
- `guide/settings-configuration/index.md`
- `guide/reporting-analytics/index.md`
- ...or any new `guide/<section>/index.md`.

## Required structure

```
# <Section Name>

<1–2 paragraph intro: what the section is, who it's for, and the practical outcome.>

This section covers the following key aspects of <section topic>:

* **[<Child Topic 1>](/guide/<section>/<child-slug>):** <One-line description of what's covered.>
* **[<Child Topic 2>](/guide/<section>/<child-slug>):** <One-line description of what's covered.>
[... more bullets, one per child page in the section ...]

By mastering <topic restatement>, you can <outcome statement that names concrete capabilities>.
```

### Rules
- **One H1 only.** No H2/H3 subheadings on overview pages.
- The intro paragraph is benefit-driven and second-person, matching the master skill's voice.
- The transition phrase is consistently `This section covers the following key aspects of <topic>:` — vary the trailing noun, not the structure.
- Each bullet wraps the child link in **bold**: `* **[Title](/guide/section/slug):** description.`
- The closing paragraph **always** starts with "By mastering" (or "By setting up" / "By using"), names the section, and ends with a concrete outcome.
- 0–1 screenshots only. Most overview pages have none.
- No code blocks, callouts, or numbered procedures.

## Verbatim model — `guide/store-management/index.md`

```
# Store Management

The **Store Management** section in FluentCart is your central hub for managing the daily work of your online store. Here, you can manage customer orders, keep track of your customers, and monitor your inventory. It has all the tools you need to keep your store running smoothly.

This section covers the following key aspects of store management:

* **[Orders Management](/guide/store-management/orders-management/):** Learn how to view, filter, create, edit, refund, and collect payments for all orders.
* **[Customers Management](/guide/store-management/customers-management/):** Discover how to view, search, filter, and manage individual customer profiles and their associated data.

By mastering the tools within Store Management, you can fulfill orders efficiently, keep customer information accurate, and make sure your product availability is always up-to-date.
```

## Sidebar note

Overview pages auto-resolve to `/guide/<section>/`, but the sidebar still needs an entry for the section group itself plus its children. Don't add a separate `index` link — link the group's `text` directly to the section URL when needed:

```js
{
  text: 'Store Management',
  collapsed: true,
  items: [
    { text: 'Store Management Overview', link: '/guide/store-management/' },
    // ...child pages
  ]
}
```

## Common pitfalls

- **Don't add H2 sections** ("Overview", "What's Inside", "Get Started") — they break the convention. The bullet list IS the navigation.
- **Don't write more than two intro paragraphs.** If you have more to say, it belongs in a child page.
- **Don't drop the "By mastering…" closer** — it's a recognizable rhythm of the site.
- **Don't use trailing slashes inconsistently.** All child links to section folders end in `/` (e.g. `/guide/store-management/orders-management/`).
