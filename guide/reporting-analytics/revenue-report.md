# Revenue Report

The **Revenue Report** shows how your sales turn into money, line by line: product sales, discounts, refunds, net sales, and the shipping, fees, and taxes collected on top. Use it to see what your store really earned, how it changes over time, and how much comes from one-time orders, new subscriptions, and renewals.

## Accessing the Revenue Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Revenue** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). The whole Revenue report is free. FluentCart Pro adds the choice of comparison period and the **Filters** menu.

## The Sales Breakdown

The cards read from left to right like a statement. Each line leads to the next. Hover over the info icon beside a card to read its definition.

* **Gross Sales:** Product sales before discounts, refunds, shipping, and tax, on paid, partially paid, and refunded orders created in the range.
* **− Discounts:** Coupon and manual discounts on these orders.
* **− Refunds:** Refunds on orders placed in the range, whenever they were refunded, without the tax, shipping, and fees refunded with them. The Refunds report counts all money refunded during the range instead.
* **= Net Sales:** Gross sales less discounts and refunds. Shipping, fees, and tax are not part of it.
* **+ Shipping:** Shipping charged on these orders, less refunded shipping, before shipping tax.
* **+ Fees:** Payment and other fees charged on these orders, less refunded fees.
* **+ Taxes:** Tax collected on these orders, including tax on shipping, less the tax share of refunds.
* **= Total Sales:** Net sales plus shipping, fees, and taxes. This is what customers paid, less refunds.

**Shipping**, **Fees**, and **Taxes** appear only when your orders have them. Without any of the three, **Total Sales** equals net sales and is hidden.

The [net sales](/guide/reporting-analytics/how-reports-count#net-sales) figure here is the same one every other report uses.

![Screenshot of the Revenue report cards from Gross Sales to Total Sales](/images/reporting-analytics/revenue/revenue-summary-cards.webp)

## Revenue Chart

The **Revenue Chart** draws **Net Sales** over the range. With a comparison period, **Compare Net Sales** appears as a dotted line.

* **Discounts** and **Refunds:** Click them in the legend to add them to the chart. They are off by default.
* **Grouping:** The dropdown sets the [chart grouping](/guide/reporting-analytics/how-reports-count#chart-grouping).
* **Chart type:** Switch between a line chart and a bar chart, or zoom in.

![Screenshot of the Revenue Chart with the compared Net Sales line and the grouping dropdown](/images/reporting-analytics/revenue/revenue-chart.webp)

## Revenue Breakdown

The **Revenue Breakdown** table lists the same lines by year. Click the arrow at the start of a year to expand it into one row per day, month, or year, following the chart grouping.

* **Year** or **Date**, **Order Count**, **Gross Sales**, **Discounts**, **Refunds**, and **Net Sales**.
* **Taxes**, **Shipping**, and **Total Sales:** Shown when your orders have tax or shipping.
* **Compare Net Sales** and **Change (%):** Shown when a comparison period is set. Hover over a compared amount to see the date it is compared with.

Click a column heading to sort by it. The download icon exports the table as a CSV file.

![Screenshot of the Revenue Breakdown table with one year expanded into months](/images/reporting-analytics/revenue/revenue-breakdown.webp)

## Net Sales by Order Type

The last card splits net sales by order type: **One-time**, **New subscription**, **Renewal**, **Installment sign-up**, and **Installment payment**. The rows add up to net sales.

The table shows **Orders**, **Net Sales**, **Share**, and **Net Sales per Order** for each type, with **Change (%)** when a comparison period is set. For a subscription store, this shows at a glance how much of your income is recurring and how much is new.

![Screenshot of the Net sales by order type card](/images/reporting-analytics/revenue/revenue-by-order-type.webp)

The Revenue Report now shows you exactly how your sales become the money you keep.
