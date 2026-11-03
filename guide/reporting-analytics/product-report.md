# Product Report

The **Product Report** provides detailed analytics on the performance of your individual products. This dashboard is essential for understanding which products and variations are your bestsellers, tracking sales volume, and comparing performance over different time periods to identify trends.

## Accessing the Product Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on the **Products** tab.

## Report Filters and Controls

The top of the dashboard gives you key controls to choose what data appears in the report.

* **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates.
* **Compare to:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates, so you always know which period your numbers are measured against.
* **Currency:** Appears when your orders are in more than one currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).
* **Filters:** Click **Filters** to break down the report by options like **Order Type** or specific **Products**. Products you pick appear below the filter bar as collapsed chips, so a long selection does not push the report down the page. Picks that do not fit on the row collapse into a **+N** chip, and hovering over it shows the full list. **Clear all** removes every filter.
* **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

## Key Product Metrics

At the top of the **Product Report**, you will find summary cards highlighting your key product metrics for the selected period.

* **Net sales:** What customers paid for products in the period, less refunds and tax. Shipping is not included.
* **Units sold:** The quantity sold, including renewals. A signup fee does not count as a unit.
* **Orders:** Paid orders in the period, renewals included.
* **New customers:** Customers whose first purchase was in the period. A renewal is never a first purchase.
* **Refund rate:** Refunds as a share of what customers paid, for orders placed in the period. It changes in percentage points, and a rise reads as a cost.
* **Average order value:** Net sales divided by orders.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against. Hover over the info icon beside a metric to see exactly what it counts.

![Screenshot of the Products report summary cards and the Sales Over Time chart](/images/reporting-analytics/product/products-cards.webp)

## Sales Over Time

The **Sales Over Time** chart shows your product sales across the date range.

* **Net sales:** Bars split into **New sales**, **Renewals**, and, when you sell installment plans, **Installment payments**.
* **Units:** Switch to **Units** in the chart header to see **Units sold** instead.
* **Grouping:** Use the dropdown in the chart header to pick **Auto**, **Daily**, **Monthly**, or **Yearly**.

When there were no sales in the range, the chart reads **No sales in this date range**.

## Products Table

Below the chart, the **Products** table lists every product sold in the period. Expand a row for its variants, and click a product name for details.

* **Product:** The product name, with its number of variants underneath.
* **Net sales:** The product's net sales, with its share of all sales underneath.
* **Change:** The change in net sales against the comparison period. A product with no sales in the comparison period reads **New**.
* **New sales, Renewals, Installment payments:** The net sales split by type. The **Installment payments** column appears only when you sell installment plans.
* **Units:** The quantity sold.
* **Orders:** The number of orders that included the product.
* **New customers:** Customers whose first purchase included the product.
* **Refund rate:** The refunds as a share of what customers paid for the product.

Use the **Search products** box to find a product, and click a column heading to sort the table. Click the **Export** button above the table to download it as a CSV file.

![Screenshot of the Products table with a row expanded into its variants](/images/reporting-analytics/product/products-table.webp)

## Product Details

With **FluentCart Pro**, clicking a product name opens a details panel with the product's sales over time, each variation's share (**Variant mix**), its refunds, its **Subscriptions** figures (**Live subscriptions**, **MRR**, **Renewal rate**, and **Canceled, ends soon**), and the other products customers buy with it (**Bought together**). Without Pro, a sample preview opens instead.

To put specific products side by side, open the [Compare Products](/guide/reporting-analytics/product-compare-report) report.

![Screenshot of the product details panel with Subscriptions, Variant mix and Bought together](/images/reporting-analytics/product/products-detail-drawer.webp)

With the Product Report, you can see clear patterns in product demand, giving you the insights you need to make smarter decisions about your inventory and marketing.
