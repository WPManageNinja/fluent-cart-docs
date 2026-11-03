# Coupons Report

The **Coupons** report shows what your discount codes cost you and what they bring back. You can see how much discount you gave away, how much of your store depends on coupons, and which codes win new customers rather than just discounting orders you would have made anyway.

## Accessing the Coupons Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on **Coupons** in the reports sidebar.

You can also reach it from the **Orders** report: the **Discount** part of the **Order mix** card has a **Coupons report** link.

<!-- TODO(screenshot): Coupons report page with the Coupons item selected in the reports sidebar, the four summary cards, and the filter bar. -->

## Report Filters and Controls

The filter bar at the top of the page works the same way as on the other reports.

* **Date Range:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. Every figure on the page covers orders placed in this range.
* **Compare To:** Choose an earlier period, such as **Previous period** or **Previous year**, to measure the summary cards against. Without FluentCart Pro, the comparison stays on **Previous period**. See [Comparing With an Earlier Period](/guide/reporting-analytics/reports-dashboard-overview#comparing-with-an-earlier-period).
* **Currency:** Appears when your orders are in more than one currency.
* **Filters:** Narrow the report by **Order Type**, for example to leave out renewals. The **Filters** menu is part of **FluentCart Pro**.

## Key Coupon Metrics

At the top of the report, four summary cards tell you how much your store leans on coupons in the selected period. Hover over the info icon beside a card to read its definition.

* **Discount given:** The total coupon discount on the orders placed in this period.
* **Orders with a coupon:** The share of paid orders that used a coupon, renewals included. The tooltip shows the actual counts, for example 40 of 500 paid orders.
* **New customers with a coupon:** The share of new customers who used a coupon on their first purchase.
* **Average discount:** The discount given as a share of what the coupon orders would have cost at full price.

Each card also shows how it changed against the comparison period. The three share cards change in percentage points (**pts**). On every card, a rise reads as a cost, so more discounting shows in red.

## Discounts Over Time

The **Discounts Over Time** chart plots your coupon activity across the date range.

* **Discount given:** Bars showing the coupon discount in each period.
* **Orders with a coupon:** A line showing the share of orders that used a coupon in each period, read against the percentage axis on the right.

When there are no orders in the range, the chart reads **No orders in this date range**.

## Coupon vs Full Price

The **Coupon vs Full Price** card compares the new customers you won in this period, split by whether their first purchase used a coupon. It answers a simple question: are coupon customers as good as the ones who pay full price?

The table has a **With a coupon** column and an **At full price** column, with these rows:

* **New customers:** How many new customers fall into each group.
* **Average first order:** The average value of their first order.
* **Average lifetime value:** What these customers have spent with you since, on average.
* **Bought again:** The share who made a second purchase.
* **First order refunded in part or full:** The share whose first order was refunded.

::: info
**Coupon vs Full Price** is part of **FluentCart Pro**. Without Pro, a sample preview takes its place.
:::

![Screenshot of the Discounts Over Time chart beside the Coupon vs Full Price card](/images/reporting-analytics/coupons/coupons-overview.webp)

## Coupons Table

Below the charts, the coupons table lists every coupon code used on orders in the period, one row per coupon. It is sorted by **Orders** by default, and you can click any number column heading to sort by it.

* **Coupon:** The coupon code. If you renamed a coupon, the row lists the earlier codes underneath, for example **Used as SUMMER20**. A coupon you have since removed is marked **Deleted coupon**.
* **Orders:** The number of orders that used the coupon.
* **New Customers:** Orders that were a customer's first purchase, counted the same way as on the [Customers](/guide/reporting-analytics/customer-report) report.
* **Returning:** Orders from customers who had bought before.
* **Discount Given:** The total discount the coupon gave.
* **Net:** What those orders brought in.
* **Discount Rate:** The discount divided by what the orders would have cost at full price.
* **Value of Customers Won:** What the customers this coupon won have spent with you to date, each. *(FluentCart Pro)*
* **Refund Rate:** The share of the coupon's orders that were refunded in part or full. *(FluentCart Pro)*
* **Refunds:** The amount refunded on the coupon's orders.

The **Total** row at the bottom is calculated per order, so an order that used two coupons counts once there even though it appears in two rows.

* **Search:** Type in the **Search** box to filter the rows by coupon code or title. The search also matches the earlier codes of a renamed coupon.
* **Export CSV:** Click the download icon to save the table, including the **Total** row, as a CSV file. The file always holds every row, whatever you searched for.

### Discount With No Code

Some orders carry a coupon discount without a recorded coupon code, for example renewal discounts imported from another platform. When there are any, a **Discount with no code** line under the table shows their total discount and order count. These orders are not part of the rows or the totals above.

![Screenshot of the Coupons table with the Search box, the export icon and the Total row](/images/reporting-analytics/coupons/coupons-table.webp)

## Empty and Error States

* **No coupon orders in this period:** No order in the date range used a coupon. Widen the date range or check the **Order Type** filter.
* **Failed to load the coupons report:** The request did not finish. Reload the page or pick the date range again to retry.

The Coupons report now shows you which codes pay for themselves and which ones only give money away.
