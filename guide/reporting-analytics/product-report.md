# Product Report

The **Products** report shows how each product sells: its net sales, units, orders, new customers, and refund rate. Use it to find your best sellers, see how much of a product's income comes from renewals, and catch products with a high refund rate.

## Accessing the Product Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Products** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count).

## Key Product Metrics

Six cards sum up product sales in the range. Hover over the info icon beside a card to read its definition.

* **Net sales:** What customers paid for products in the range, less refunds and tax. Shipping is not included.
* **Units sold:** Quantity sold, including renewals. A signup fee does not count as a unit.
* **Orders:** Paid orders in the range, renewals included.
* **New customers:** Customers whose first purchase was in the range. A renewal is never a first purchase.
* **Refund rate:** Refunds as a share of what customers paid, for orders placed in the range. Its change is shown in percentage points.
* **Average order value:** Net sales divided by orders.

<!-- TODO(screenshot): products-cards.webp | /reports/products, Last 30 days: the six product cards and the Sales Over Time chart | no arrow -->

## Sales Over Time

The **Sales Over Time** chart splits net sales into **New sales**, **Renewals**, and, when your store sells installment plans, **Installment payments**. Switch to **Units** to chart quantities instead of money. The grouping dropdown sets the [chart grouping](/guide/reporting-analytics/how-reports-count#chart-grouping).

## The Products Table

The **Products** table lists every product sold in the range.

* **Product:** The product name. Click it to open the product details.
* **Net sales:** With its share of all product sales under it.
* **Change:** The change in net sales against the comparison period. A product with no sales in that period shows **New**.
* **New sales**, **Renewals**, and **Installment payments:** Net sales split by order type. **Installment payments** appears only when you sell installment plans.
* **Units**, **Orders**, **New customers**, and **Refund rate**.

Click the arrow at the start of a row to see the same figures for each variant. Use **Search products** to find a product, and click a column heading to sort by it.

<!-- TODO(screenshot): products-table.webp | /reports/products: Products table with one product expanded into its variants | arrow on the expand arrow of the first row -->

## Product Details (Pro)

Click a product name to open a drawer with its details:

* Its net sales and share of all sales in the range.
* **Subscriptions:** Live subscriptions, MRR, renewal rate, and canceled subscriptions that end soon.
* **Variant mix:** Each variation's share of the product's sales.
* **Bought together:** Other products in the same orders. Renewals are not counted.

::: info Product details require FluentCart Pro
Without Pro, the drawer shows a locked preview with sample data.
:::

<!-- TODO(screenshot): products-detail-drawer.webp | /reports/products with Pro active: product details drawer open for a subscription product showing Subscriptions, Variant mix and Bought together | no arrow -->

To put products side by side, open the [Compare Products](/guide/reporting-analytics/product-compare-report) report.
