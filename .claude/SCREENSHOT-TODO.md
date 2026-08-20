# Screenshot TODO

Outstanding screenshots for docs written without them. Not part of the built site — lives under `.claude/` so VitePress never picks it up.

**How to add one:** save the capture anywhere persistent (Desktop is fine — *not* a paste buffer, those are deleted before they can be converted), then convert and drop it at the target path:

```bash
cwebp -q 82 "<source>.png" -o "guide/public/images/<target>.webp"
```

Then replace the matching `<!-- TODO(screenshot): ... -->` comment in the markdown with the image line.

---

## FluentCart 1.6.2 — written Aug 20, 2026

### Data Export — `guide/store-management/exporting-data.md`

**DONE — Aug 20, 2026.** All eight captures supplied and placed:

| Capture | Path |
|---|---|
| Orders → More actions menu | `images/store-management/data-export/01-orders-more-actions.webp` |
| Export Orders dialog | `images/store-management/data-export/02-export-orders-dialog.webp` |
| Customers → More actions menu | `images/store-management/data-export/03-customers-more-actions.webp` |
| Export Customers dialog | `images/store-management/data-export/04-export-customers-dialog.webp` |
| Subscriptions → More actions menu | `images/store-management/data-export/05-subscriptions-more-actions.webp` |
| Export Subscriptions dialog | `images/store-management/data-export/06-export-subscriptions-dialog.webp` |
| Licenses → More actions menu | `images/store-management/data-export/07-licenses-more-actions.webp` |
| Export Licenses dialog | `images/store-management/data-export/08-export-licenses-dialog.webp` |

Still missing (optional): the in-progress export bar, and the Pro upgrade notice as seen on FluentCart Free.

### Order Sources Report — `guide/reporting-analytics/order-sources-report.md`

| # | Capture | Target path |
|---|---|---|
| 5 | The Order Sources report table with UTM columns and revenue metrics populated | `images/reporting-analytics/order-sources/order-sources-report.webp` |
| 6 | The **Columns** toggle popover open, showing the six UTM column checkboxes | `images/reporting-analytics/order-sources/order-sources-columns.webp` |
| 7 | An advanced filter being built on the report (field → operator → value) | `images/reporting-analytics/order-sources/order-sources-advanced-filter.webp` |

There is one `TODO(screenshot)` comment in this file, for #5.

### Order Details — `guide/store-management/orders-management/order-details-overview.md`

| # | Capture | Target path |
|---|---|---|
| 8 | The UTM / source card on an order that carries an ad click identifier (`gclid` or `fbclid`) | `images/store-management/order-details-overview/order-utm-card.webp` |
| 9 | The transaction table row showing **Settlement Time** | `images/store-management/order-details-overview/transaction-settlement-time.webp` |

### Roles and Permissions — `guide/settings-configuration/roles-permissions/index.md`

| # | Capture | Target path |
|---|---|---|
| 10 | The permission list scrolled to the four **Export** permissions | `images/settings-configuration/roles-permissions/export-permissions.webp` |

### Product License Settings — `guide/product-types-creation/creating-digital-products-with-licenses.md`

| # | Capture | Target path |
|---|---|---|
| 11 | The **Release Manifest** / **Release Signature** fields on the License Settings tab | `images/product-types-creation/creating-digital-product-license/signed-release-fields.webp` |

### Managing Subscriptions — `guide/product-types-creation/managing-subscriptions.md`

| # | Capture | Target path |
|---|---|---|
| 12 | The subscription actions menu with **Edit Vendor IDs** visible (needs the opt-in enabled) | `images/product-types-creation/managing-subscriptions/edit-vendor-ids.webp` |

---

## Carried over from earlier work

### Elementor — `guide/customization-and-themes/using-elementor-widgets.md`

| # | Capture | Target path |
|---|---|---|
| 13 | **Add Template → My Templates** modal showing the 8 FluentCart page templates with preview cards | `images/customization-and-themes/fluentcart-elementor-widgets/elementor-template-library.webp` |

### Elementor widgets — `guide/customization-and-themes/elementor-fluentcart-widgets.md`

| # | Capture | Target path |
|---|---|---|
| 14 | **Cart** widget edit panel (Item Row + Checkout Button style groups) | `images/customization-and-themes/fluentcart-elementor-widgets/widget-for-fluentcart/fluentcart-elementor-cart.webp` |
| 15 | **Order Receipt** widget edit panel (Sections + Preview Settings) | `images/customization-and-themes/fluentcart-elementor-widgets/widget-for-fluentcart/fluentcart-elementor-receipt.webp` |
| 16 | **Customer Dashboard** widget in the editor, showing the "Layout preview" badge | `images/customization-and-themes/fluentcart-elementor-widgets/widget-for-fluentcart/fluentcart-elementor-customer-dashboard.webp` |

### WooCommerce migration — `guide/migration/woocommerce/`

Complete — all five screenshots converted and placed.
