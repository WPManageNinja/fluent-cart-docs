# Tax Configuration

The **Tax Configuration** screen is the control center for your store's tax behaviour. Here you decide whether tax is collected at all, how prices are interpreted (inclusive or exclusive of tax), which customer address is used for tax calculations, how the breakdown appears at checkout, and how VAT reverse-charge is handled for EU customers.

Getting these settings right is the foundation for accurate calculations everywhere else: rates, EU VAT, per-product overrides, receipts.

## Accessing Tax Configuration

1. From your WordPress dashboard, go to **FluentCart > Settings**.
2. In the left-hand menu, click **Tax Settings > Configuration**.

::: info
You can also set the basics during the install **Onboarding Wizard's Tax step**. It writes to the same settings, so anything you choose there shows up here and can be edited later.
:::

![Screenshot of the Tax Configuration screen with all sections visible](/images/tax/configuration-and-classes/tax-settings-1.webp)

## Tax Configuration Settings

This block holds the global rules that govern tax across your entire store.

### Enable Tax

The master switch. When **on**, FluentCart applies your tax rules at checkout and a confirmation reads "This store is now collecting tax." When **off**, no tax is calculated and all per-variation tax controls are hidden.

### Prices entered with tax

Tells FluentCart how your product prices are entered:

* **Included:** the price you set on a product already contains tax. At checkout, FluentCart splits the tax out for reporting, but the customer pays the same number you see in the product editor.
* **Excluded:** the price you set excludes tax. At checkout, tax is added on top.

This single choice has the biggest downstream effect on what customers see, so set it deliberately. Individual variations can override this; see [Per-Variation Tax Settings](/guide/product-types-creation/per-variation-tax).

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

### Checkout Tax Breakdown Display

Controls how the per-line tax context appears on the checkout summary:

* **Item label and tooltip:** shows the tax label on each line item *and* a hover tooltip with the breakdown.
* **Item label only:** shows just the label.
* **Tooltip only:** shows only the hover tooltip.

Choose the option that fits the busyness of your checkout layout.

### Saving Your Settings

Click **Save** in the top-right corner to apply changes. You can also use the keyboard shortcut **Cmd+S** (macOS) or **Ctrl+S** (Windows/Linux), handy when you're tweaking several fields in a row.

## VAT Reverse Charge Settings

If you sell to business customers in the European Union, you'll likely need to handle the **reverse-charge** mechanism, where the buyer is responsible for self-accounting VAT instead of paying it to you. This sub-section configures that behaviour.

![Screenshot of the VAT Reverse Charge Settings sub-panel with all controls visible](/images/tax/configuration-and-classes/tax-settings-2.webp)

### Local Reverse Charge

Toggle. **Default: off.**

* **Off:** reverse charge applies only when the customer is in a different EU country than your home country.
* **On:** reverse charge also applies when the customer is in your home country (some jurisdictions require this; check with a tax advisor).

### Exclude Categories from VAT Reverse

A multi-select product-category picker. Any category you select here is **never** reverse-charged: VAT is always added, even when the customer has a valid EU VAT ID. Use this for product types that are explicitly outside reverse-charge scope.

### Tax-Inclusive Price Mode

Visible only when **Local Reverse Charge** is on. Controls how a reverse charge affects products whose price was entered tax-inclusive:

* **Fixed:** the listed price stays the same. The invoice shows the same total, but the tax line is zeroed.
* **Dynamic:** VAT is stripped from the price. The customer pays the net (ex-VAT) amount.

**Practical example.** A €120 inclusive price (€100 net + €20 VAT) sold to a B2B EU buyer with reverse charge:

* In **Fixed** mode, buyer is invoiced **€120** with a €0 VAT line.
* In **Dynamic** mode, buyer is invoiced **€100** net.

Pick the one that matches how your accounting and contracts are written.

