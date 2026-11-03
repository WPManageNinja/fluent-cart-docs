# Coupons Report

The **Coupons** report shows what your coupons cost and what they bring in. It tracks the discount given, how many orders and new customers used a coupon, and, with Pro, whether coupon customers turn out as valuable as those who paid full price. Use it to decide which coupons to keep, change, or retire.

## Accessing the Coupons Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Coupons** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count).

## Key Coupon Metrics

Four cards sum up the range. A rise in any of them is shown in red, because each one is money or margin given away. Hover over the info icon beside a card to read its definition.

* **Discount given:** Coupon discounts on the orders placed in the range.
* **Orders with a coupon:** The share of paid orders that used a coupon, renewals included.
* **New customers with a coupon:** The share of new customers who used a coupon on their first purchase.
* **Average discount:** Discount given as a share of what the coupon orders would have cost at full price.

## Discounts Over Time

The **Discounts Over Time** chart shows the discount given in each period as bars, and the share of orders that used a coupon as a line.

<!-- TODO(screenshot): coupons-overview.webp | /reports/coupons, Last 30 days: the four coupon cards, Discounts Over Time chart and Coupon vs Full Price table (Pro) | no arrow -->

## Coupon vs Full Price (Pro)

This table compares new customers in the range whose first purchase used a coupon (**With a coupon**) with those who paid full price (**At full price**):

* **New customers**, **Average first order**, **Average lifetime value**, **Bought again**, and **First order refunded in part or full**.

Use it to see whether a coupon wins customers who stay, or bargain hunters who leave.

::: info Coupon quality figures require FluentCart Pro
Without Pro, this table shows a locked preview with sample data, and the coupons table below leaves out the Pro columns.
:::

## The Coupons Table

The table lists every coupon used in the range, sorted by orders.

* **Coupon:** The code. If the code was renamed, the earlier codes appear as **Used as**. A deleted coupon is marked **Deleted coupon**.
* **Orders**, **New Customers** (first purchases with this coupon), and **Returning**.
* **Discount Given**, **Net**, and **Discount Rate:** The discount divided by what the orders would have cost at full price.
* **Value of Customers Won** (Pro): What the customers this coupon won have spent with you to date, each.
* **Refund Rate** (Pro) and **Refunds.**

The **Total** row adds up every coupon. Use the search box to find a coupon by code or title, click a heading to sort, and use the download icon to export the table as a CSV file.

**Discount with no code** under the table counts orders that have a coupon discount but no coupon code recorded, for example renewal discounts imported from another platform. They are not in the rows or totals above.

<!-- TODO(screenshot): coupons-table.webp | /reports/coupons: coupons table with sample codes, the Total row and the "Discount with no code" line | no arrow -->

The Coupons report now shows you which discounts pay for themselves.
