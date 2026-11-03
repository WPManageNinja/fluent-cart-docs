# Revenue Report

The **Revenue Report** in FluentCart shows a clear breakdown of your store’s earnings. You can use it to track sales over time, see where your income comes from, and check how refunds, taxes, and discounts affect your total revenue.

#### Accessing the Revenue Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on the **Revenue** tab.

### Report Filters and Controls

The top of the dashboard gives you key controls to choose what data appears in the report.

* **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates.
* **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates.
* **Currency:** Appears when your orders are in more than one currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).
* **Filters:** Click **Filters** to break down the report by options like **Order Type** or specific **Products**. Applied filters appear as chips below the filter bar, and **Clear all** removes them.
* **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

	![Screenshot of the Revenue report summary cards from Gross Sales to Total Sales](/images/reporting-analytics/revenue/revenue-summary-cards.webp)

### Key Revenue Metrics

At the top of the report, you’ll see a quick summary of your store’s sales activity. Each number shows the total for the selected date range, along with the change against the comparison period.

* **Gross Sales:** Product sales before discounts, refunds, shipping, and tax, on paid, partially paid, and refunded orders created in the period.
* **Discounts:** Coupon and manual discounts on these orders.
* **Refunds:** Refunds on orders placed in the period, whenever they were refunded. Tax, shipping, and fees refunded with them are left out here, because they come off their own lines. The **Refunds** report counts all money refunded during the period instead, so the two figures can differ.
* **Net Sales:** Gross sales less discounts and refunds. Shipping, fees, and tax are not part of it.
* **Shipping:** Shipping charged on these orders, less refunded shipping, before shipping tax.
* **Fees:** Payment and other fees charged on these orders, less refunded fees.
* **Taxes:** Tax collected on these orders, including tax on shipping, less the tax share of refunds.
* **Total Sales:** Net sales plus shipping, fees, and taxes: what customers paid, less refunds.

The **Shipping**, **Fees**, and **Taxes** cards appear only when your orders have them. Without any of the three, **Total Sales** equals **Net Sales** and its card is hidden too. Hover over the info icon beside any metric to read its definition.

### Detailed Revenue Analysis

Below the key metrics, you’ll find detailed breakdowns of your store’s income. This section helps you see how well your store is performing.

* **Revenue Chart:** This chart shows your **Net Sales** over time, with **Compare Net Sales** for the comparison range drawn beside it. **Discounts** and **Refunds** are off by default: click them in the legend to add them to the chart.
* **Revenue Breakdown:** This table gives a summary of your store by year, with the net sales of the comparison period and the change beside it.
    * **Year:** Click the arrow at the start of a row to expand it into a row for each date in your range, each with the same columns.
    * **Order Count, Gross Sales, Discounts, Refunds, Net Sales:** The totals for that row.
    * **Taxes, Shipping, Total Sales:** Shown when your orders have tax, shipping, or other extras.
    * **Compare Net Sales:** The net sales of the matching comparison period.
    * **Change (%):** The percentage of change between the two, color-coded green or red.

Click a column heading to sort the table. Numeric columns sort by their value. Click the download icon above the table to export it as a CSV file.

   ![Screenshot of the Revenue Chart with the Net Sales and Compare Net Sales lines](/images/reporting-analytics/revenue/revenue-chart.webp)

   ![Screenshot of the Revenue Breakdown table with one year expanded into months](/images/reporting-analytics/revenue/revenue-breakdown.webp)

#### Net Sales by Order Type

The **Net sales by order type** table shows where your net sales come from: one-time orders, new subscriptions, renewals, installment sign-ups, and installment payments. The rows add up to your net sales.

* **Order type:** The kind of sale.
* **Orders:** The number of orders of that type.
* **Net Sales:** The net sales from those orders.
* **Share:** That type's share of your total net sales.
* **Net Sales per Order:** Net sales divided by orders.
* **Change (%):** The change against the comparison period. This column is hidden when you choose **No comparison**.

    ![Screenshot of the Net sales by order type card](/images/reporting-analytics/revenue/revenue-by-order-type.webp)

To see revenue by country or by payment method, open the [Locations](/guide/reporting-analytics/locations-report) or [Payment Methods](/guide/reporting-analytics/payment-methods-report) report.

The Revenue Report shows how your store is earning over time. You can easily see what’s working, understand your store’s earnings, and plan to make it grow.
