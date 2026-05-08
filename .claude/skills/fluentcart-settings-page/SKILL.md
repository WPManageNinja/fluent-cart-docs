---
name: fluentcart-settings-page
description: Specialist template for FluentCart settings configuration pages (guide/settings-configuration/) AND analytics/reporting pages (guide/reporting-analytics/) — both share an "Accessing the X" + numbered H3 subsection pattern. Use when writing or editing pages like store-settings.md, payment-settings.md, cart-checkout-settings.md, sales-report.md, customer-report.md, etc. Always pair with fluentcart-doc-writer for tone and universal rules.
---

# FluentCart Settings & Reporting Page Template

Settings and reporting pages share an identical skeleton: an "Accessing the X" navigation H2 followed by themed group H2s, each broken into numbered H3 subsections that document fields or metrics one by one. Both page types are reference-heavy, not narrative.

## When to use this template

**Settings pages** under `guide/settings-configuration/`:
- `store-settings.md`
- `payment-settings.md`
- `cart-checkout-settings.md`
- `checkout-fields.md`
- `pages-setup.md`
- `product-page.md`
- `storage-settings.md`
- `licensing-settings.md`
- `features-addons.md`
- `global-integrations.md`
- `invoice-packing-settings.md`
- ...plus subfolders like `email-configuration/` and `roles-permissions/`.

**Reporting pages** under `guide/reporting-analytics/`:
- `reports-dashboard-overview.md`
- `sales-report.md`
- `orders-report.md`
- `revenue-report.md`
- `customer-report.md`
- `product-report.md`
- `refunds-report.md`
- `subscription-report.md`
- `cohorts.md`
- `retention.md`
- `future-renewals.md`

## Required structure (Settings variant)

```
# <Settings Group Name>

<Opening paragraph (1–2 sentences): what this settings group controls and why it matters.>

## Accessing <Settings Group Name>

<One sentence or short numbered list explaining the WordPress admin path.>

Go to your WordPress dashboard, then go to **FluentCart Pro > Settings** in the side menu, and click on the **<Tab Name>** tab.

## Configuring Your <Settings Group Name>

### 1. <Subsection Name>

<Optional intro sentence.>

* **<Field Name>:** <Description of what the field does and any constraints.>
* **<Field Name>:** <Description.>
    * Click the **<Sub-action>** button if you wish to <secondary action>.

### 2. <Subsection Name>

<Intro sentence describing the subsection.>

* **<Option>:** <Description.>
* **<Option>:** <Description.>

::: info
<Optional related-setting cross-reference or behavioral note.>
:::

### 3. <Subsection Name>

...

    ![Screenshot of <Settings Page>](/images/settings-configuration/<sub>/<file>.webp)

## Saving Your Settings

After making any changes, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.
```

## Required structure (Reporting variant)

```
# <Report Name>

<Opening paragraph: what this report shows and what business questions it answers.>

## Accessing the <Report Name>

<Short navigation paragraph or numbered list.>

## Key Metrics

<Bridge sentence.>

* **<Metric>:** <How it's calculated and what it tells you.>
* **<Metric>:** <Description.>

## Visualizations

* **<Chart Type>:** <What it plots, axes, time range options.>

## Filters & Date Ranges

<Description of available filters.>

* **Date Range:** <Options.>
* **<Other filter>:** <Options.>

## Exporting & Sharing *(if applicable)*

<Description of export options — CSV, PDF, scheduled email, etc.>

    ![Screenshot of <Report>](/images/reporting-analytics/<sub>/<file>.webp)
```

### Rules
- **The "Accessing X" H2 is mandatory.** It teaches users how to navigate to the screen this page documents.
- **Numbered H3 subsections** (`### 1. <Name>`, `### 2. <Name>`, …) are the convention for settings groups. They visually mirror the order of UI sections on the actual settings screen.
- **Reporting pages use thematic H2s** (Key Metrics / Visualizations / Filters) instead of numbered H3s, because they describe a single dashboard, not a list of grouped settings.
- **Field documentation always follows the bullet-with-bold-label pattern:** `* **Field Name:** description.`
- **Cross-link to dependent settings.** Settings pages frequently reference one another — use `::: info` callouts to point readers to related screens.
- **Closing for settings pages is formulaic:** the `## Saving Your Settings` H2 with the "Save Settings" reminder.

## Verbatim model — `guide/settings-configuration/store-settings.md`

```
# Store Settings

The **Store Settings** screen is where you configure the fundamental information about your FluentCart store. This includes your store's name, logo, physical address, and essential currency settings, all of which are crucial for the basic operation and branding of your online business.

## Accessing General Settings

Go to your WordPress dashboard, then go to **FluentCart Pro** > **Settings** in the side menu, and click on the **Pages Setup** tab.

## Configuring Your Store Details

### 1. General Information

* **Store Name:** Enter the official name of your online store. This name will often appear in various parts of your store, emails, and reports.
* **Store Logo:** You can upload your brand's logo here. This logo may be used in receipts, invoices, or other areas of your store.
    * Click the **"Remove"** button if you wish to remove an existing logo.

### 2. Store Mode

Select your store's current operating mode. This is a critical setting that controls whether your store can process real payments.

* **Live:** This is the standard mode for an active store. In **Live** mode, all transactions are real, and your payment gateways will process actual payments from customers.
* **Test:** This mode is designed for development and setup purposes. When **Test** mode is active, you can place test orders using dummy payment details without any real money being charged.

::: info
This setting is directly linked to your payment gateways. When you set the store to **Live Mode**, your payment methods will also switch to their live settings. When you select **Test Mode**, your payment gateways will automatically use their test or "sandbox" credentials.
:::
```

## Cross-references between settings & reporting

Settings and reporting pages frequently link to each other (e.g., `store-settings.md` mentions Live/Test mode → links to payment-gateway pages). Use bold + linked text:

```
> Learn more about how Test mode works in [**Stripe Settings**](/guide/payments-checkout/connecting-payment-gateways/stripe-settings).
```

## Sidebar entry

For settings pages, add under the **Settings & Configuration** group:

```js
{ text: '<Settings Group Name>', link: '/guide/settings-configuration/<page-slug>' }
```

For reporting pages, add under the **Reporting & Analytics** group:

```js
{ text: '<Report Name>', link: '/guide/reporting-analytics/<page-slug>' }
```

## Common pitfalls

- **Skipping the "Accessing X" H2.** It's required — every settings/reporting page needs a navigation entry point.
- **Mixing numbered (`### 1.`) and unnumbered H3s** within the same page. Pick one and stay consistent.
- **Putting screenshots before the field they illustrate.** Place screenshots after the relevant subsection's bullet list.
- **Leaving out the "Save Settings" closer** on settings pages.
- **Documenting reporting metrics without an explanation of the formula.** Every metric needs at least one sentence on how it's calculated.
- **Mixing settings and reporting structure.** Settings pages use numbered H3s; reporting pages use thematic H2s. Don't blend.
