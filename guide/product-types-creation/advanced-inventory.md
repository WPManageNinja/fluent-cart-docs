# Advanced Inventory

**Advanced Inventory** is a dedicated stock-management workspace for FluentCart Pro stores that need more than per-product stock fields. It gives you a central **Inventory** admin screen with cross-catalog views, bulk updates, an auditable adjustment history, and export — on top of everything the basic [Inventory Management](/guide/product-types-creation/inventory-management) screen already does.

If you're running a physical-goods store, a warehouse, or a mixed channel where stock moves often and needs accountability, this is the module to build on.

---

## What Advanced Inventory Adds

On top of basic stock tracking, Advanced Inventory gives you:

* **A central Inventory screen** — every product (and every variation) in one place, with scope filters for *All*, *Low Stock*, and *Out of Stock*.
* **Inline stock edits** — adjust a variant's total stock directly from the list without opening the product.
* **Bulk updates** — update many variants at once in **Add** mode (increment existing stock) or **Set** mode (replace with a new total).
* **Adjustment history** — every change is logged with who made it, when, the old and new values, and a reason.
* **Reasons enum + custom reasons** — categorise stock movements as Restock, Damaged, Shrinkage, Correction, or Other (with a free-text note).
* **Export** — download inventory by scope and state for reporting or handover to a third-party system.
* **Stock stats** — a summary strip showing totals across the catalog, aggregated in SQL so it stays fast on large stores.

---

## Step 1: Enable the Module

Advanced Inventory layers on top of the core Stock Management feature, so both toggles must be on.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click the **Features & Addon** tab from the left-hand menu.
3. Make sure **Stock Management** is enabled.
4. Enable **Advanced Inventory** directly below it.
5. Click **Save Settings**.

Once both features are active, a new **Inventory** submenu appears in the FluentCart admin menu, directly after **Products**.

::: info
If Advanced Inventory is disabled, the Inventory submenu disappears and no new adjustments are recorded to the history. Your existing per-product stock levels are untouched — the basic [Inventory Management](/guide/product-types-creation/inventory-management) screen still works.
:::

---

## Step 2: The Inventory Screen

Navigate to **FluentCart > Inventory** to open the Advanced Inventory workspace.

![Screenshot of the Advanced Inventory list showing All / Low Stock / Out of Stock tabs, Advanced Filter toggle, Total Stock, Available, On hold, and Delivered columns across multiple products](/images/product-types-creation/advanced-inventory/inventory-list.webp)

### Scope tabs

Across the top of the list you'll see three quick-filter tabs:

* **All** — every tracked product and variant in your store.
* **Low Stock** — items whose Available count has dropped to or below your configured low-stock threshold.
* **Out of Stock** — items with an Available count of `0`.

### Advanced Filter

Toggle **Advanced Filter** on to refine the list by product, SKU, category, or custom criteria. Useful for large catalogs where you need to focus on a single supplier, brand, or segment.

### Column Reference

Each row represents a single product or a single variation of a variable product:

* **Products** — The product or variant name (expand the chevron on variable products to see each version listed individually).
* **SKU** — The variant's Stock Keeping Unit. Shows `No SKU` or `--` when none is assigned.
* **Total Stock** — The complete stock count. Editable inline — type a new value and click the adjuster icon next to the field.
* **Available** — Units currently sellable (Total Stock minus On hold and Delivered).
* **On hold** — Units reserved in pending or processing orders. Not available for sale.
* **Delivered** — Units already fulfilled and shipped.
* **History icon** (right edge) — Opens the adjustment history for that variant.

### Bulk selection

Use the checkboxes at the start of each row (or the master checkbox in the header) to select multiple variants and open the bulk actions toolbar.

### Expand All

Click **Expand All** at the top right to reveal every variation under every variable product at once — useful before exporting or bulk editing a large catalog.

---

## Step 3: Updating Stock

### Single Update (inline)

1. Find the variant in the list.
2. Click directly inside the **Total Stock** input for that row.
3. Enter the new total, then click the small adjuster icon next to the field.
4. A confirmation modal asks for a **Reason** — pick one from the dropdown, and if you choose **Other**, fill in the required **Custom Reason** field.
5. Click **Apply**. The row updates, the new Available count recalculates, and a new entry is written to the adjustment history.

### Bulk Update

1. Select two or more rows using their checkboxes.
2. Click **Bulk Update** in the actions bar.
3. Choose the **Mode**:
    * **Add** — The value you enter is *added to* each selected variant's existing stock. Use a positive number to increase, a negative number to decrease (e.g., `+50` to restock, `-3` to write off damaged units across all selected items).
    * **Set** — The value you enter *replaces* each selected variant's current stock. Use this for end-of-month resets or physical-count reconciliations.
4. Pick a **Reason** from the enum, or select **Other** and enter a **Custom Reason**.
5. Click **Apply**. Every selected variant is updated atomically; each change writes its own entry in the adjustment history.

::: tip
Prefer **Add** mode for routine receiving and write-offs — it avoids overwriting stock that might have moved since you loaded the list. Reserve **Set** mode for situations where a physical count has produced a definitive number.
:::

### Adjustment Reasons

Every stock change — single or bulk — must carry a reason. FluentCart records one of the following:

| Reason | Typical use |
|--------|-------------|
| **Restock** | New inventory arriving from supplier or production |
| **Damaged** | Units broken, expired, or unsellable |
| **Shrinkage** | Missing stock (theft, misplacement, errors) |
| **Correction** | Reconciliation against a physical count |
| **Other** | Anything else — requires a **Custom Reason** free-text note |

Reasons are enforced at the API layer: attempts to save a stock change without a valid reason (or without a custom reason when "Other" is selected) are rejected.

---

## Step 4: Adjustment History

Click the **history icon** at the end of any row to open the adjustment log for that variant. The log lists every stock change chronologically, showing:

* **Timestamp** — when the change was made.
* **User** — the WP user who made it.
* **Old Stock → New Stock** — the transition, so deltas are obvious at a glance.
* **Reason** — the reason picked from the enum.
* **Custom Reason** — any free-text note captured when **Other** was selected.

The history is append-only — adjustments cannot be edited or deleted, so the audit trail stays trustworthy. This is the record you reach for when reconciling a discrepancy, responding to a supplier dispute, or investigating a shrinkage pattern.

---

## Step 5: Export

For reporting, hand-off, or import into an external inventory system, use the **Export** action at the top of the inventory screen.

* **Scope** — Export the current tab (All, Low Stock, Out of Stock) or a filtered subset.
* **Inventory State** — Narrow further by state (e.g., only Available, only On hold).
* **Format** — CSV is the default, suitable for spreadsheets and most downstream tools.

Exports run against the same optimised SQL query used by the stats strip, so they stay fast even on catalogs with thousands of variants.

---

## Permissions

Access to Advanced Inventory follows the standard **Products** capability. Any role that can view and manage products — typically Store Manager and Administrator — can open the Inventory screen and adjust stock. Roles without the products capability do not see the Inventory menu entry at all.

To customise this, see [Roles & Permissions](/guide/settings-configuration/roles-permissions/).

---

## Best Practices

* **Always pick a specific reason** — "Other" works, but a typed-out custom reason helps Future You figure out what happened three months later.
* **Prefer Add mode for routine movement** — it's safer when the list view might be slightly stale.
* **Export before large bulk updates** — a CSV snapshot is the cheapest rollback if you need to undo a mistake.
* **Review the history periodically** — patterns in Shrinkage or Damaged reasons often reveal process issues (bad packaging, theft, a warehouse bay with water damage).
