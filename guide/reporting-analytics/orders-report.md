# Orders Report

The **Orders Report** shows how many orders your store takes, what they are worth, and what kind of orders they are. Use it to watch order volume, average order value, refunds, and failed payments, and to see how much of your business comes from new customers, returning customers, and renewals.

## Accessing the Orders Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Orders** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). On this report, **Filters** can narrow the orders by **Order Type** or **Products** (Pro).

## Key Order Metrics

Six cards sum up the date range. Hover over the info icon beside a card to read its definition.

* **Orders:** Paid, partially paid, and refunded orders created in the range, in the report currency. Renewal orders are included, unpaid orders are not.
* **Average Order Value (Net):** Net sales divided by the number of orders.
* **Items per Order:** Items divided by the number of orders.
* **Refunded Orders:** Orders in the range with a full or partial refund. The line under it shows their share of all orders.
* **Failed Orders:** Orders created in the range whose payment failed. They are not counted in the other cards. The line under it shows the failure rate: failed orders out of all attempts. This card has no comparison.
* **Orders per Day:** Orders divided by the days in the range that have passed. For ranges longer than 90 days, the card changes to **Orders per Month**.

The arrow and percentage beside a figure compare it with the comparison period.

![Screenshot of the Orders report summary cards and the Order Chart](/images/reporting-analytics/orders/orders-summary-cards.webp)

## Order Chart

The **Order Chart** shows **Net sales** as a line and the number of **Orders** as light bars. The comparison period's net sales appear as a dashed line named **Compared net sales**.

* **Orders checkbox:** The checkbox on the **Orders** card turns the order bars on or off.
* **Grouping:** The dropdown in the corner sets the [chart grouping](/guide/reporting-analytics/how-reports-count#chart-grouping).
* **Export and zoom:** The download icon exports the chart data as a CSV file, and the zoom icon enlarges the chart.

## Order Mix

The **Order mix** card splits the orders in the **Orders** card in several ways. Each split adds up to that card.

* **Order type:** **One-time**, **New subscription**, **Renewal**, **Installment sign-up**, and **Installment payment**.
* **Order status:** For example completed, processing, or on hold.
* **Discount:** **Discounted** against **Full price** orders. The **Coupons report** link opens the [Coupons report](/guide/reporting-analytics/coupons-report).
* **Shipping:** The shipping status of physical orders. This part appears only when the range has physical orders.

![Screenshot of the Order mix card](/images/reporting-analytics/orders/orders-order-mix.webp)

## New vs. Returning Customers

This table splits the orders by who placed them. Hover over the info icon beside the title to read the definitions in the app.

* **New:** The customer's first paid purchase, as on the Customers report.
* **Returning:** The customer had paid before.
* **Renewal:** Subscription renewals.
* **Installment payment:** Later payments of an installment plan.
* **Free order:** Nothing was paid.
* **Guest:** Orders without a customer account.

The columns are **Customers**, **Orders**, **Net Sales**, and **Average Order (Net)**. Tick **Show Percentages** to see each row's share of the column total instead of the number. The download icon exports the table as a CSV file.

![Screenshot of the New vs. Returning Customers table](/images/reporting-analytics/orders/orders-new-vs-returning.webp)

## Average Order Charts

Two charts track averages across the range:

* **Average Order Value (Net):** Net sales divided by orders, for each period, as the card counts it.
* **Average Order Items:** Items per order, for each period.

## Order Patterns (Pro)

FluentCart Pro adds a set of charts that show when and how customers order:

* **Orders by day and hour:** A heat map of your busiest days of the week and hours of the day. Darker squares mean more orders.
* **Spend by day:** Gross sales by day of the week.
* **Spend by hour:** Gross sales by hour of the day.
* **Item count distribution:** How many orders hold one item, two items, and so on.
* **Order value distribution:** How many orders fall into each value range.
* **Time between an order's created & completed date:** How many hours orders take to complete.

Days and hours follow your [store timezone](/guide/reporting-analytics/how-reports-count#store-days-and-timezone).

::: info Order patterns require FluentCart Pro
Without Pro, this part of the page shows a locked preview with sample data.
:::

![Screenshot of the Orders by day and hour heat map and the Spend by day and Spend by hour charts](/images/reporting-analytics/orders/orders-patterns.webp)

The Orders Report now shows you how many orders you take, who places them, and where payments fail.
