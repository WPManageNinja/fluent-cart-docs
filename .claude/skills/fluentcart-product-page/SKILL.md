---
name: fluentcart-product-page
description: Specialist template for FluentCart product creation and management pages under guide/product-types-creation/ — pages like creating-physical-products.md, creating-digital-products.md, creating-product-bundles.md, configuring-product-pricing.md, managing-subscriptions.md, inventory-management.md, etc. Use when writing or editing any product creation/management guide. Always pair with fluentcart-doc-writer for tone and universal rules.
---

# FluentCart Product Page Template

Product pages document how to create or configure a product type or product feature. They mix step-driven onboarding (how to start a product) with form-section reference (what each field on the edit screen does). Field documentation is the heaviest part of these pages.

## When to use this template

Any file under `guide/product-types-creation/`, e.g.:
- `creating-physical-products.md`
- `creating-digital-products.md`
- `creating-digital-products-with-licenses.md`
- `creating-product-bundles.md`
- `configuring-product-pricing.md`
- `managing-subscriptions.md`
- `managing-product-integrations.md`
- `inventory-management.md`
- `advanced-inventory.md`
- `bulk-product-import.md`
- `product-list-overview.md`
- `defining-upgrade-paths.md`

## Required structure

```
# Creating <Product Type> *(or)* Configuring <Feature>

<Opening paragraph (2–3 sentences): what this page covers + outcome promise. Often: "This guide will walk you through the process of adding a new <type> product to your FluentCart store.">

<Optional bullet preview list: "We will cover every essential step to get your product ready for sale. You will learn how to configure all the necessary details, including:">

* <Topic 1>
* <Topic 2>
* ...

<Closer of intro: "By the end of this guide, you will be able to confidently …">

## Steps to Create a New <Product Type>

<Bridge sentence.>

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2.  On the **Products** screen, click the **"Add Product"** button at the top right.

    ![Screenshot of Add Product Button](/images/product-types-creation/<sub>/<file>.webp)

3.  ...

### 1. Basic Product Information

* **Title:** Enter the main name of your product (e.g., "Purple Air Max Trainers"). This name shows up everywhere: on your shop page, in the cart, and at checkout.
* **Short description:** Write a brief, simple summary of what the product is...
* **Long Description:** This is the large area for all the detailed information...

### 2. Media

<Section intro sentence.>

**Featured Image:**

<Description.>

**Product Gallery:**

<Description with bullets for sub-options.>

### 3. Product Taxonomies

* **[Categories:](/guide/product-types-creation/creating-managing-product-categories/index)** Assign the product to one or more relevant **Categories**...
* **[Brands:](/guide/product-types-creation/creating-managing-product-brand)** Use this field to associate the product with a specific **Brand**...

### 4. Pricing & Variations

<Bridge paragraph.>

#### Simple Pricing
<Description + field list.>

#### Simple Variations
<Description + field list with **The Variations Table** sub-headings.>

### 5. Inventory Management

<Description + field reference.>

### Downloadable Asset(s) *(if applicable to this product type)*

### Shipping Class *(if physical)*

### Tax Class

## Publishing Settings

* **Status:** ...
* **URL Slug:** ...
* **Default Variant:** ...
* ...
```

### Rules

#### Section sequence
The standard form-section order on a product creation page is:
1. **Basic Product Information** (title, descriptions)
2. **Media** (featured image, gallery)
3. **Product Taxonomies** (categories, brands)
4. **Pricing & Variations**
5. **Inventory Management**
6. (Type-specific) **Downloadable Asset(s)** / **Shipping Class** / **Tax Class**
7. **Publishing Settings** (right-sidebar fields, shown last because they're the final pre-publish actions)

Skip sections that don't apply to the product type (e.g., digital products skip Shipping Class).

#### Field documentation patterns
**Pattern A — bulleted fields with bold colon labels (most common):**
```
* **Title:** Enter the main name of your product (e.g., "Purple Air Max Trainers"). This name shows up everywhere...
* **Short description:** Write a brief, simple summary of what the product is...
```

**Pattern B — bold heading + paragraph (for individual major fields):**
```
**Featured Image:**

Set a prominent, high-quality image that will act as the main face of your product on the shop page and in the cart.
```

**Pattern C — em-dash compact list (for sub-fields under a parent):**
```
- **Cost per item** — What this product actually costs you to source or produce
- **Profit** — Auto-calculated (Price minus Cost)
- **Margin** — Your profit as a percentage, also auto-calculated
```

#### Field state annotations (use these literally)
- `*(Required)*`
- `*(Optional)*`
- `*(Collapsible section)*`
- `*(Toggle)*`
- `*(Toggle — Optional)*`

#### Pro Tip / Note callouts
Inside product pages, both blockquote forms appear:
```
> **💡 Pro Tip:** <Practical advice that goes beyond the documentation, e.g. about pricing strategy or workflow shortcuts.>

> **📝 Note:** <Constraint, gotcha, or behavior worth flagging.>
```

The emoji prefixes `💡` (Pro Tip) and `📝` (Note) are the established convention on these pages — keep them.

## Verbatim model — opening of `guide/product-types-creation/creating-physical-products.md`

```
# Creating Physical Products

This guide will walk you through the process of adding a new physical product to your FluentCart store. A physical product is any tangible item that you sell and ship to your customers.

We will cover every essential step to get your product ready for sale. You will learn how to configure all the necessary details, including:

* Product name, description, and images
* Pricing and sales information
* Inventory and stock levels
* Variations such as size or color

By the end of this guide, you will be able to confidently list and manage any physical product in your inventory.

## Steps to Create a New Physical Product

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Products** in the left sidebar.
2.  On the **Products** screen, click the **"Add Product"** button at the top right.
```

## Verbatim field-list model

```
### 1. Basic Product Information

* **Title:** Enter the main name of your product (e.g., "Purple Air Max Trainers"). This name shows up everywhere: on your shop page, in the cart, and at checkout.
* **Short description:** Write a brief, simple summary of what the product is. This usually shows up quickly near the product picture or price, giving customers a quick, important overview.
```

## Sidebar entry

Add under the **Product Types & Creation** group's nested `Product Overview` items in `.vitepress/config.mjs`:

```js
{ text: '<Page Title>', link: '/guide/product-types-creation/<page-slug>' }
```

## Common pitfalls

- **Inconsistent field-list pattern.** Pick one of A/B/C above and stay consistent within a section.
- **Missing field-state annotations.** A reader needs to know if a field is required or optional — annotate with `*(Required)*` / `*(Optional)*`.
- **Skipping the Pricing dropdown explanation.** Every product page needs to mention `Simple` vs `Simple Variations` (and `Subscription` toggle when relevant).
- **Putting Publishing Settings before form sections.** Publishing Settings always come last — they describe right-sidebar fields and the publish action.
- **Generic image alt text.** Use specific, descriptive alt text like `Screenshot of Add Product Button` or `Screenshot of the Pricing section showing the Simple/Simple Variations dropdown`.
