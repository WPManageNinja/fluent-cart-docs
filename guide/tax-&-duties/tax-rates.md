# Setting Up Tax Rates

Once you have your global tax behaviour configured and your tax classes created, the next step is to tell FluentCart what tax rate to charge in each region you sell into. The **Tax Regions** screen is the entry point: it lists every country, lets you toggle which ones are actively collecting tax, and opens a per-region detail page where you set the actual rates, custom labels, and overrides.

This guide walks through the list, the region detail page, multi-class rates, multi-tax scenarios with priority and compound rules, and the new product/shipping overrides with city + postcode granularity.

## Accessing Tax Regions

1. From your WordPress dashboard, go to **FluentCart → Settings**.
2. In the left-hand menu, click **Tax Settings → Rates**.

This opens the **Tax Regions** screen.

## The Tax Regions List

The Tax Regions screen is a single sortable table of every country FluentCart knows about (pre-seeded — you don't need to add countries first).

![Screenshot of the Tax Regions list with the EU row collecting and other countries inactive](/images/tax/tax-rates/tax-rates-settings.webp)

### Reading the List

The table has three columns:

* **Region** — the country name with its flag. The **European Union** is listed as a single region at the top — that's where you manage all EU VAT collection from a single record.
* **Collecting** — a status indicator. Reads **Collecting tax** when the region is actively configured, or a dash when it isn't yet set up.
* **Enabled** — a toggle that turns tax collection on or off for that region.

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

The second card is where you set the actual rates. A advisory banner at the top of the card reminds you that:

::: info
Rates are **pre-filled for convenience** and may not reflect current laws. Verify them against current tax law before going live, and use the **+** button next to the class tabs to add tax classes for products taxed at different rates (food, books, digital goods, etc.). FluentCart's defaults are a starting point, not a legal guarantee.
:::

Below the banner you'll find the **class tabs**, a **Search country/s in region…** field to jump to a specific sub-region, and the **per-region rate table** itself. The columns map to a row's **Region**, its **Rate (%)**, the customer-facing **Tax Label**, and a **Compound** dropdown that controls how the row stacks on top of other taxes in the same region (covered in [Compound and Priority](#compound-and-priority-multi-tax-scenarios) below).

When you're done editing a class tab, click **Save Rates** at the bottom-right of the card. **Reset to default** sits next to it and reverts the active class's rows to FluentCart's shipped defaults.

### Tax Class Tabs

Each region carries a separate rate table per tax class. You'll see tabs at the top of the rate area: **Standard**, **Reduced**, **Zero**, plus a **+** button to add more.

* Click a class tab to view and edit that class's rates.
* Click **+** to add another class to this region — a small dropdown appears with **Zero** (if not already added) and **Custom Class…** (lets you name a new class on the spot).
* An **×** appears on optional class tabs (Reduced, Zero, custom) so you can remove them from this region; the **Standard** class is always present.

### Per-Country Rate and Label

Inside each class tab, the rate table has three columns per row:

* **Country** — the country the row applies to. For the EU region this is one row per member state; for a single-country region it's one row.
* **Tax Label** — the customer-facing name of the tax for this country and class (e.g. `VAT`, `MwSt`, `GST`, `Sales Tax`). The label is what appears on receipts and on the checkout breakdown — set it to whatever your customers expect to see.
* **Rate (%)** — the percentage rate. Enter `20` for 20%.

Each class can carry its own label per country — so the EU's Standard class can read `VAT` everywhere while a reduced-rate book row in Germany could read `MwSt (ermäßigt)`. Useful when your jurisdiction names the rate differently per class.

### Reset to Default

Click **Reset to default** to discard the rates in the current class tab and restore the plugin's shipped defaults for that class. Useful after experimentation, but it does overwrite — there's no undo.

### Saving Rates

Click **Save Rates** at the bottom of the rate table to persist your changes for the active class. Switch tabs and click Save again on each class you've edited.

## Compound and Priority (Multi-Tax Scenarios)

Some regions apply more than one tax to the same line — for example a federal tax plus a provincial tax, or a base tax plus a city-level tax. FluentCart handles this with two fields on a rate row, surfaced in the rate editor:

* **Priority** — a number that determines the order in which taxes are applied. Lower priority numbers (e.g. `1`) are applied **first**.
* **Compound** — when on, the tax is calculated on the running total *including* any lower-priority taxes already applied. When off, the tax is calculated only on the line subtotal.

### Understanding Compound Taxes: A Practical Example

The fastest way to see what **Compound** actually does is to compare the same order with the checkbox switched off versus on. Below is the classic Canadian setup: a federal **GST** plus a Quebec **PST** stacked on top of a $100 product.

**The shared setup (only the Compound flag changes between the two scenarios below):**

| Tax | Rate | Priority | Compound |
|---|---|---|---|
| **GST** (Goods and Services Tax) | 5% | 1 | No |
| **PST** (Provincial Sales Tax) | 7% | 2 | *toggled per scenario* |

#### Scenario A: Compound OFF (both taxes calculated on the $100 subtotal)

| Step | Calculation | Amount |
|---|---|---|
| 1. GST applied first (Priority 1) | $100 × 5% | $5.00 |
| 2. PST applied next, Compound OFF | $100 × 7% | $7.00 |
| Total tax | $5.00 + $7.00 | **$12.00** |
| **Order total** | $100 + $12.00 | **$112.00** |

Each tax is calculated independently against the original $100. The order of priority doesn't change the final number.

#### Scenario B: Compound ON (PST calculated on the GST-inclusive total, the real Quebec rule)

| Step | Calculation | Amount | Running total |
|---|---|---|---|
| 1. GST applied first (Priority 1) | $100 × 5% | $5.00 | $105.00 |
| 2. PST applied next, Compound ON | $105.00 × 7% | $7.35 | $112.35 |
| Total tax | $5.00 + $7.35 | **$12.35** | |
| **Order total** | $100 + $12.35 | **$112.35** | |

Because Compound is on, PST is charged against the running total *after* GST, not against the original subtotal. That's the "tax on tax" effect.

#### Why the difference matters

The gap is $0.35 on a $100 order. On a $1,000 order it grows to $3.50, on a $10,000 order to $35.00, and on a $100,000 invoice to $350. Getting **Compound** right matters more as orders scale.

#### When to turn Compound on

Switch **Compound** on whenever your local tax law says a tax must be applied **on top of** another tax that's already in the cart (Quebec PST on GST, Indian SGST on CGST, and similar stacked regimes are the common cases). Leave it off when each tax is calculated independently against the line subtotal. If you're not sure which model your jurisdiction follows, confirm with a tax advisor before going live.

## Tax Overrides

Overrides let you charge a different rate when a more specific condition is met — for example, a different VAT rate on shipping to Vienna, or a reduced rate for the `books` category in France. They live in a dedicated section below the rate table on every region detail page.

![Screenshot of the Tax Overrides section with the Add Tax Override modal opened](/images/tax/tax-rates/tax-rates-settings-2.webp)

### What Overrides Do

When an override matches an order line, its rate replaces the default class rate for that region. Overrides are **scoped** — they can target a product category, a shipping line, or both — and FluentCart picks the most specific match (see **Specificity Matching** below).

### Adding an Override

Click **Add Tax Override** to open the modal. Fill in:

* **Override type** — radio:
  * **Products** — applies to product lines in a specific category.
  * **Shipping** — applies to the shipping line on orders that match.
* **Category** *(only when Products is selected)* — the product category this override targets.
* **Tax label** — the label shown on the matched line at checkout and on receipts.
* **Location** — the country this override applies in.
* **City (optional)** — narrows the override to a specific city. Leave empty to match every city in the country.
* **Postcode (optional)** — narrows further by postcode. You can enter a single value (`9302`) or a range (`9302:9399`) to match any postcode in that band. Here you have to use `:` to define the range.
* **Tax rate (%)** — the rate to apply on a match.

Click **Add override** to save. The override appears in the table.

### Specificity Matching

When multiple overrides could apply to the same order line, FluentCart picks the **most specific** match. Specificity, from most specific to least:

1. Postcode
2. City
3. State
4. Country
5. Class default rate (no override)

So a row scoped to a specific postcode wins over one scoped to a city, which wins over country-only, and so on. Use this layering to model real-world tax law without duplicating rules.

### Editing or Deleting an Override

Each row in the **Tax Overrides** table has action icons:

* **Edit (pencil)** — re-opens the override form with current values.
* **Delete (trash)** — removes the override (confirmation required).

