# Per-Variation Tax Settings

When your product comes in multiple variations and they don't all share the same tax treatment, FluentCart lets you configure tax **per variation** — so a physical variant taxed at the standard rate can sit alongside a digital variant that's zero-rated, or a sample variant that isn't taxed at all.

The variation editor exposes three independent tax controls. This page walks through what each one does, when to use it, and how they interact.

## When You'll See These Controls

These controls are visible **only when store-level tax is enabled** on the [Tax Configuration page](/guide/tax-&-duties/configuration-and-classes#enable-tax). If you have tax turned off globally, FluentCart hides the per-variation tax controls entirely — there's nothing to override.

## Opening the Variation Editor

1. Open the product you want to edit.
2. In the **Pricing** section, make sure the pricing method is set to **Simple Variations**.
3. Click the **pencil icon** in the **Action** column of the variation you want to configure.

The variation editor opens as a side panel. The three tax controls are split across two sections: a **Tax** dropdown in **Pricing** (next to the **Price** field) and a **Tax** block further down (below **Shipping**).

![Screenshot of the variation editor with the Tax dropdown in Pricing and the Tax section at the bottom showing Charge tax on this variation and Class Standard](/images/product-types-creation/per-variation-tax/per-variation-tax-overview.webp)

## The Three Variation Tax Controls

### 1. Tax Inclusion (Pricing section)

A **Tax** dropdown next to the **Price** field, with three options:

![Screenshot of the Tax inclusion dropdown open with Store default, Tax included, and Tax excluded](/images/product-types-creation/per-variation-tax/per-variation-tax-inclusion.webp)

* **Store default:** inherit the store-level **Prices entered with tax** setting from Tax Configuration. This is the default; use the other options if you collect tax differently for this variation.
* **Tax included:** this variation's price already contains tax. Use when one variation needs the opposite of the store default (e.g. your store ships prices tax-exclusive but this single variation is quoted tax-inclusive on supplier paperwork).
* **Tax excluded:** this variation's price excludes tax; FluentCart adds the applicable tax on top at checkout.

**Use case.** Imagine your store is configured for tax-inclusive pricing across the board. You add a variation sourced from a different supplier whose price sheet is net of tax — set just that variation to **Tax excluded** without flipping your store-wide default.

### 2. Charge Tax on This Variation (Tax section)

A checkbox in the dedicated **Tax** section near the bottom of the variation editor.

* **Checked** *(default)* — tax is calculated and added to this variation according to its tax class and the customer's region.
* **Unchecked** — the variation is **tax-exempt**. No tax line appears at checkout, and the variation is excluded from tax reports.

**Use case.** A `Free Sample` variation of a paid product, a complimentary trial unit, or a variation that's explicitly outside your tax obligation. Uncheck and you're done.

### 3. Tax Class (Tax section)

When **Charge tax on this variation** is checked, a **Class:** row appears below the checkbox showing the active class (for example, **Standard**). Click the **pencil icon** beside the class name to open a dropdown and pick a different class.

![Screenshot of the Tax class dropdown open with Standard, Reduced, and Zero options](/images/product-types-creation/per-variation-tax/per-variation-tax-class.webp)

The list includes every tax class configured on your store: **Standard** (default), **Reduced**, **Zero**, and any custom classes you've created. To add or rename classes store-wide, use [Configuring Tax Settings & Classes](/guide/tax-&-duties/configuration-and-classes) or the class tabs on [Tax Rates](/guide/tax-&-duties/tax-rates).

* The selected class determines which rate row applies when an order includes this variation.

**Use case.** A book-set product where one variation is a hardback (Standard) and another is an audiobook (Zero in your jurisdiction). Same product, different class per variation.

## How the Three Controls Interact

| Charge Tax | Tax Class | Tax Inclusion | What happens at checkout |
|---|---|---|---|
| **Off** | *(ignored)* | *(ignored)* | No tax line. Variation is fully exempt. |
| On | Standard | Store default | Standard rate applied; inclusion follows store setting. |
| On | Zero | *(any)* | 0% applied — the inclusion choice is moot because the tax line is always €0. |
| On | Reduced | Tax excluded | Reduced rate is added on top of the variation price at checkout. |
| On | Custom (e.g. Digital Services) | Tax included | The custom class's rate is split out of the displayed price for reporting; customer pays the displayed number. |

Set the three controls to match how you actually want each variation to behave — they don't have to be consistent across a product.

## Saving

Click **Update** at the bottom of the variation editor to save the variation. Repeat for each variation that needs a different tax setup.

## Related Pages

* [Configuring Tax Settings & Classes](/guide/tax-&-duties/configuration-and-classes) — store-level tax behaviour and the global Prices-entered-with-tax setting that **Store default** inherits from.
* [Setting Up Tax Rates](/guide/tax-&-duties/tax-rates) — where the rates that get applied to a variation's tax class actually live.
* [Configuring Product Pricing & Variations](/guide/product-types-creation/configuring-product-pricing) — the rest of the variation editor's fields (price, inventory, SKU, shipping).
