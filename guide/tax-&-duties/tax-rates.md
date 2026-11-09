# Setting Up Tax Rates

Once your global tax behaviour is configured, the next step is to tell FluentCart what tax rate to charge in each region you sell into. The **Tax Regions** screen is the entry point: it lists every country, lets you toggle which ones are actively collecting tax, and opens a per-region detail page where you set the actual rates, custom labels, and overrides.

This guide walks through the list, the region detail page, multi-class rates, multi-tax compound rules for federal-plus-state regions, and the new product/shipping overrides with city + postcode granularity.

## Accessing Tax Regions

1. From your WordPress dashboard, go to **FluentCart → Settings**.
2. In the left-hand menu, click **Tax Settings → Rates**.

This opens the **Tax Regions** screen.

## The Tax Regions List

The Tax Regions screen is a single table of every country FluentCart knows about (pre-seeded — you don't need to add countries first).

![Screenshot of the Tax Regions list with the EU row collecting and other countries inactive](/images/tax/tax-rates/tax-rates-settings.webp)

### Reading the List

The table has three columns:

* **Region** — the country name with its flag. The **European Union** is listed as a single region at the top — that's where you manage all EU VAT collection from a single record.
* **Collecting** — a status indicator. Reads **Collecting tax**, **Disabled** (configured but switched off), or a dash (not set up).
* **Enabled** — a toggle that turns tax collection on or off for that region. It only appears on regions that already have rates, and is greyed out while tax is off in **Configuration**.

A **Collecting Tax** checkbox next to the search box filters the list to active regions.

### Enabling or Disabling a Region

You can enable a region from two places:

* **The Enabled toggle on this list** — fastest if you're flipping several regions in a row.
* **The toggle next to the breadcrumb on the region detail page** — useful when you're already inside a region's settings and want to flip it without going back.

Both write to the same setting. Switching a region off doesn't delete its configured rates — they're preserved for when you turn it back on.

### Searching for a Region

Use the **Search regions...** box at the top right to jump to a country by name. Helpful when the list is long.

## Setting Rates for a Region

Click any row to open the **region detail page**, where you configure rates for that country.

![Screenshot of a region detail page with the VAT/GST/Tax Number card and the Base taxes card visible](/images/tax/tax-rates/tax-rates-settings-1.webp)

The breadcrumb at the top reads **Tax Regions > [Region name]** so you always know which region you're editing. The page itself is two cards stacked above the Tax Overrides block.

#### VAT/GST/Tax Number

The top card holds a single field where you record **your store's own registration number** for this region (for example your Canadian GST/HST number, a UK VAT number, or any equivalent identifier the region requires). Enter the number and click **Save** in the card's top-right to persist it. The number is used on receipts and PDF invoices that ship to customers in the region.

Leave the field blank if you aren't registered in this region yet.

#### Base Taxes

The second card is where you set the actual rates. **Read the warning at the top of the card before you rely on any pre-filled rate.**

::: warning Verify rates before going live
Rates are **pre-filled for convenience** and may not reflect current laws. **Always verify them against the relevant country's tax law before going live.** Use the **+** button next to the class tabs to add tax classes for products taxed at different rates (food, books, digital goods, etc.). FluentCart's defaults are a starting point, not a legal guarantee.
:::

Below the banner you'll find the **class tabs**, a **Search country or region…** field to jump to a specific sub-region, and the **per-region rate table** itself. The columns map to a row's **Region**, its **Rate (%)**, the customer-facing **Tax Label**, and (on sub-region rows) a **Compound** dropdown that controls how that rate relates to the parent region's tax (covered in [Compound (Multi-Tax Scenarios)](#compound-multi-tax-scenarios) below).

When you're done editing a class tab, click **Save Rates** at the bottom-right of the card. On the **Standard** tab, **Reset to default** sits next to it (see [Reset to Default](#reset-to-default)).

### Tax Class Tabs

Each region carries a separate rate table per tax class. You'll see tabs at the top of the rate area: **Standard**, **Reduced**, **Zero**, plus a **+** button to add more.

* Click a class tab to view and edit that class's rates.
* Click **+** to add a class. The dropdown offers **Reduced** and **Zero** (whichever isn't added yet) and **Custom Class...**. Once both exist, **+** opens the custom-name input directly. A store can have up to six classes.
* Tax classes are store-wide. A class you add here appears on every region and on products. Clicking **×** on a tab deletes the class everywhere, with all its rates, and products that used it fall back to **Standard**. FluentCart asks you to confirm first. The **Standard** class is always present and can't be deleted.

#### Creating a Tax Class Inline

Choosing **Custom Class…** lets you name a brand-new class **right there in the tab bar** — no pop-up dialog and no page reload. Type the class name in the inline input and confirm; the new tab and its rate rows appear immediately, ready to fill in.

![Screenshot of the inline tax class input open in the class tab bar with a new class name being typed](/images/tax/tax-rates/inline-tax-class.webp)

If you enter a name that already exists, the input turns **red** to flag the duplicate — just edit the name and the error clears. This same inline flow is available on the [EU VAT screens](/guide/tax-&-duties/european-union-vat#per-class-tabs), so a class you create in one place is available to assign to products everywhere.

### Per-Country Rate and Label

Inside each class tab, the rate table has these columns:

* **Region**: the country, plus one row per state or province where the country has them.
* **Rate**: the percentage rate. Enter `20` for 20%.
* **Tax Label**: the customer-facing name of the tax for this region and class (for example `VAT`, `MwSt`, `GST`, `Sales Tax`). The label appears on receipts and on the checkout breakdown, so set it to whatever your customers expect to see.
* **Compound**: shown only on state or province rows (see below).

Each class can carry its own label, so a Standard class can read `MwSt` while a reduced-rate class reads `MwSt (ermäßigt)`. This is useful when your jurisdiction names the rate differently per class.

### Reset to Default

**Reset to default** only appears on the **Standard** tab. After you confirm, it replaces the Standard rates (country and states) with FluentCart's preset values and saves them right away. This can't be undone.

### Saving Rates

Click **Save Rates** at the bottom of the rate table to persist your changes for the active class. Switch tabs and click Save again on each class you've edited.

## Compound (Multi-Tax Scenarios)

Some countries charge more than one tax on the same order line. The **United States** is the clearest example: a federal rate on the parent row plus a state rate on each sub-row. FluentCart surfaces this in the **Base taxes** table as a parent **Region** row (e.g. **United States (US)**) and child rows for each state.

The parent row holds your federal (or national) **Rate** and **Tax Label**. Each state row has its own rate and label, plus a **Compound** dropdown that tells FluentCart how that state tax relates to the federal rate. The dropdown label updates dynamically to include whatever federal rate you've entered (e.g. `added to 10% federal tax`).

![Screenshot of the US Base taxes table with the Compound column and per-state stacking options](/images/tax/tax-rates/tax-rates-compound.webp)

The **Compound** column appears only when the region has sub-divisions. Single-country regions without states do not show it.

### The three Compound options

Open any state row's **Compound** dropdown to pick one of three modes:

![Screenshot of the Compound dropdown expanded with added to, instead of, and compounded on top of options](/images/tax/tax-rates/tax-rates-compound-options.webp)

* **Added to [federal rate]:** the state tax is calculated on the line subtotal and charged **alongside** the federal tax. Both lines appear at checkout.
* **Instead of [federal rate]:** the state tax **replaces** the federal tax for orders shipped to that state. Only the state rate applies.
* **Compounded on top of [federal rate]:** the state tax is calculated on the subtotal **plus the federal tax already applied**. This is the tax-on-tax model.

Each state can use a different mode. Alabama might replace the federal rate while Arizona compounds on top of it, all within the same class tab.

### A practical example

The fastest way to see what each option does is to walk the same $100 order through all three modes. Assume the parent row is **10%** federal tax and a state row is **5%** state tax.

#### Added to 10% federal tax

| Step | Calculation | Amount |
|---|---|---|
| 1. Federal tax | $100 × 10% | $10.00 |
| 2. State tax (added) | $100 × 5% | $5.00 |
| Total tax | $10.00 + $5.00 | **$15.00** |
| **Order total** | $100 + $15.00 | **$115.00** |

Both taxes are calculated independently against the original $100 subtotal.

#### Instead of 10% federal tax

| Step | Calculation | Amount |
|---|---|---|
| 1. Federal tax | *(skipped for this state)* | — |
| 2. State tax (instead) | $100 × 5% | $5.00 |
| Total tax | | **$5.00** |
| **Order total** | $100 + $5.00 | **$105.00** |

The federal rate is not applied when the customer's state is set to **instead of**.

#### Compounded on top of 10% federal tax

| Step | Calculation | Amount | Running total |
|---|---|---|---|
| 1. Federal tax | $100 × 10% | $10.00 | $110.00 |
| 2. State tax (compounded) | $110.00 × 5% | $5.50 | $115.50 |
| Total tax | $10.00 + $5.50 | **$15.50** | |
| **Order total** | $100 + $15.50 | **$115.50** | |

The state tax is charged against the running total after federal tax, not against the original subtotal.

### Why the difference matters

On a $100 order the gap between **added to** and **compounded on top of** is only $0.50. On a $1,000 order it grows to $5.00, and on a $10,000 order to $50.00. Picking the wrong **Compound** mode scales with order size.

### When to use each option

* Choose **added to** when federal and state taxes are both due and each is calculated on the pre-tax amount.
* Choose **instead of** when a state has no federal tax obligation or its rate fully replaces the federal rate for in-state sales.
* Choose **compounded on top of** when local law requires the state tax to apply after the federal tax is already in the total (Quebec PST on GST and similar stacked regimes follow this pattern even outside the US).

If you're not sure which mode your jurisdiction requires, confirm with a tax advisor before going live.

## Tax Overrides

Overrides let you charge a different rate when a more specific condition is met — for example, a different VAT rate on shipping to Vienna, or a reduced rate for the `books` category in France. They live in a dedicated section below the rate table on every region detail page.

![Screenshot of the Tax Overrides section with the Add Tax Override modal opened](/images/tax/tax-rates/tax-rates-settings-2.webp)

### What Overrides Do

When an override matches an order line, its rate replaces the default class rate for that region. Each override targets either a product category or the shipping line, not both. To change both, add two overrides. When several overrides match, FluentCart picks the most specific one (see **Specificity Matching** below).

### Adding an Override

Click **Add Tax Override** to open the **Add tax override for [Country]** dialog, then choose the **Override type** (**Products** or **Shipping**). The fields differ by type.

For **Products** overrides, fill in:

* **Category**: the product category to target (required).
* **Tax Class**: **All Tax Classes**, or one class to target.
* **Tax label**: the label shown on the matched line at checkout and on receipts.
* **Location**: the whole country, or one of its states or provinces.
* **City (optional)**: narrows the override to a specific city. Leave empty to match every city.
* **Postcode (optional)**: a single postcode (`9300`), a numeric range written with a hyphen (`9300-9399`), or a comma-separated list (`9300,9400`). Ranges only work with numeric postcodes. A range written with `:` never matches.
* **Tax rate (%)**: the rate to apply on a match. Enter `0` to make the category tax-exempt.
* **Also override state/provincial taxes** (only for countries with states): when checked, the override replaces the state tax as well. When unchecked, it replaces only the country-level rate and state taxes still apply.

**Shipping** overrides have no category or label. They use **Tax Class** (required), **Location**, **City (optional)**, **Postcode (optional)** and **Tax rate (%)**. **Location** only lists places that already have a rate in that class.

Click **Add override** to save. The override appears in the table.

### Specificity Matching

When several product overrides match the same line, FluentCart picks the one with the most location detail. Each filled-in **state**, **city** and **postcode** adds to its weight, so an override with city and postcode beats one with postcode only. On a tie, an override set to a specific **Tax Class** beats one set to **All Tax Classes**. The city must match the customer's city exactly as typed at checkout.

Use this layering to model real-world tax law without duplicating rules.

### Editing or Deleting an Override

Each row in the **Tax Overrides** table has action icons:

* **Edit (pencil)** — re-opens the override form with current values.
* **Delete (trash)** — removes the override (confirmation required).

