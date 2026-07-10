# Tax Configuration

The **Tax Configuration** screen is the control center for your store's tax behaviour. Here you decide whether tax is collected at all, how prices are interpreted (inclusive or exclusive of tax), which customer address is used for tax calculations, how the breakdown appears at checkout, and how VAT reverse-charge is handled for EU customers.

Getting these settings right is the foundation for accurate calculations everywhere else: rates, EU VAT, per-product overrides, receipts.

## Accessing Tax Configuration

1. From your WordPress dashboard, go to **FluentCart > Settings**.
2. In the left-hand menu, click **Tax Settings > Configuration**.

::: info
You can also set the basics during the install **Onboarding Wizard's Tax step**. It writes to the same settings, so anything you choose there shows up here and can be edited later.
:::

![Screenshot of the Tax Configuration screen with all sections visible](/images/tax/configuration-and-classes/tax-1.webp)

## Tax Configuration Settings

This block holds the global rules that govern tax across your entire store.

### Enable Tax

The master switch. When **on**, FluentCart applies your tax rules at checkout and a confirmation reads "This store is now collecting tax." When **off**, no tax is calculated and all per-variation tax controls are hidden.

### Prices entered with tax

Tells FluentCart how your product prices are entered:

* **Included:** the price you set on a product already contains tax. At checkout, FluentCart splits the tax out for reporting, but the customer pays the same number you see in the product editor.
* **Excluded:** the price you set excludes tax. At checkout, tax is added on top.

This single choice has the biggest downstream effect on what customers see, so set it deliberately. Individual variations can override this; see [Per-Variation Tax Settings](/guide/product-types-creation/per-variation-tax).

### Tax-Inclusive Price Mode

Visible only when **Local Reverse Charge** is on. Controls how a reverse charge affects products whose price was entered tax-inclusive:

* **Fixed:** the listed price stays the same. The invoice shows the same total, but the tax line is zeroed.
* **Dynamic:** VAT is stripped from the price. The customer pays the net (ex-VAT) amount.

**Practical example.** A €120 inclusive price (€100 net + €20 VAT) sold to a B2B EU buyer with reverse charge:

* In **Fixed** mode, buyer is invoiced **€120** with a €0 VAT line.
* In **Dynamic** mode, buyer is invoiced **€100** net.

![Screenshot of the Tax Configuration](/images/tax/configuration-and-classes/tax-4.webp)

### Calculate Tax Based On

Picks the address used to look up the right tax rate for an order:

* **Customer Shipping Address** *(typical default for physical stores)*
* **Customer Billing Address** *(often correct for digital-only stores)*
* **Store Location** *(uses your store's address; common in jurisdictions that tax at origin)*

### Price Suffixes

Short pieces of text shown next to your prices on the storefront, to make tax handling transparent. There are two independent fields so you can show different copy depending on how each price was entered:

* **Price Suffix (Tax Included):** shown on prices that already include tax. Example: `(incl. tax)`.
* **Price Suffix (Tax Excluded):** shown on prices that exclude tax. Example: `+ tax`.

Leave either field blank to skip its suffix.

### Tax Display Style

Controls how tax is presented to shoppers and on your documents — the checkout and cart summary, receipts, PDF invoices, order emails, and the order views in both the admin area and the customer dashboard. Pick a style from the **Tax Display Style** dropdown:

![Screenshot of the Tax Display Style dropdown showing the Simplified and Itemized options with the Tax Label field](/images/tax/configuration-and-classes/tax-display-style.webp)

* **Simplified (single line + details):** tax is shown as a single, tidy line (one label and one amount) with a **See details** link that expands the full per-rate breakdown on demand. Per-item tax badges are hidden to keep the summary clean. This is the Amazon-style presentation most storefronts expect.
* **Itemized (per-item tax + breakdown):** the detailed presentation. Every taxable line item carries its own tax badge, and the full tax-breakdown-by-rate table is always visible. Choose this when you want tax spelled out on each line.

::: info
Stores upgrading from an earlier version keep **Itemized**, so nothing changes unexpectedly, while brand-new installs start on **Simplified**. You can switch styles at any time.
:::

#### Tax Label (Simplified mode)

When **Simplified** is selected, a **Tax Label** field appears so you can rename that single tax line to whatever your customers expect — for example `VAT`, `GST`, or `MwSt`. Leave it as the default **Tax** if a generic label suits your store.

#### How tax appears at checkout

Your customers see the tax context directly in the **Order summary** on the checkout page. In **Itemized** mode, each taxable line item carries a tax label badge (for example **Tax (15%)**); in **Simplified** mode those per-line badges collapse into the single tax line you labelled above. Either way, a dedicated **TAX** block totals the tax for the whole order, and exactly how it reads depends on your **Prices entered with tax** setting.

**When prices Tax Include,** the line badge shows the tax already contained in the price (for example `incl. $1.68`) and the **TAX** block reads **Total tax in this order**. The order total stays the same, because tax was already part of the price.

![Screenshot of the checkout Order summary with tax-inclusive pricing, showing a Tax (15%) badge marked incl. and the Total tax in this order row](/images/tax/configuration-and-classes/checkout-tax-display.webp)

**When prices Tax Excluded,** the line badge shows the tax added on top (for example `+ $1.94`) and the **TAX** block reads **Total payable tax**. This amount is added to the order total.

![Screenshot of the checkout Order summary with tax-exclusive pricing, showing a Tax (15%) badge marked with a plus and the Total payable tax row](/images/tax/configuration-and-classes/checkout-tax-display-excluded.webp)

::: info
When an order mixes items taxed at different rates, FluentCart lists one tax line per rate (with the rate percentage and its amount) instead of a single combined figure — in the always-on breakdown under **Itemized**, or inside the **See details** popover under **Simplified**. This per-rate breakdown appears everywhere the order is rendered: the checkout summary, order emails, receipts, PDF invoices, and the order views in both the admin area and the customer dashboard. Reverse-charge (B2B) orders use the very same table, showing a **VAT reversed** total in place of a charged amount. Orders placed before FluentCart 1.5.2 keep their original single-line tax total.
:::

### Saving Your Settings

Click **Save** in the top-right corner to apply changes. You can also use the keyboard shortcut **Cmd+S** (macOS) or **Ctrl+S** (Windows/Linux), handy when you're tweaking several fields in a row.

## VAT Reverse Charge Settings

If you sell to business customers in the European Union, you'll likely need to handle the **reverse-charge** mechanism, where the buyer is responsible for self-accounting VAT instead of paying it to you. This sub-section configures that behaviour.

![Screenshot of the VAT Reverse Charge Settings sub-panel with all controls visible](/images/tax/configuration-and-classes/tax-3.webp)

### Local Reverse Charge

Toggle. **Default: off.** There are no other settings for this option.

* **On:** home country reverse charge applies when the customer is in your home country (some jurisdictions require this; check with a tax advisor).
* **Off:** home country reverse charge does not apply. Reverse charge still applies when the customer is in a different EU country than your home country.

### Exclude Categories from VAT Reverse

A multi-select product-category picker. Any category you select here is **never** reverse-charged: VAT is always added, even when the customer has a valid EU VAT ID. Use this for product types that are explicitly outside reverse-charge scope.

Pick the one that matches how your accounting and contracts are written.

### Automatic Reverse-Charge Notice

When an order qualifies for reverse charge, FluentCart prints the required legal mention **automatically** — you no longer ask customers to type their own declaration. The default notice reads:

> Reverse charge — Article 196, Council Directive 2006/112/EC. Customer is liable for VAT.

![Screenshot of a PDF invoice showing the automatic reverse-charge legal notice beneath the tax breakdown](/images/tax/configuration-and-classes/reverse-charge-notice.webp)

This mention appears at checkout and on every generated document — order and renewal receipts, refund notices, PDF invoices, and order emails — satisfying the EU VAT Directive's Article 226(11a) requirement. Orders placed before the upgrade keep whatever declaration was stored with them at the time.

::: info
Developers can customise the wording with the `fluent_cart/tax/reverse_charge_notice_text` filter.
:::

