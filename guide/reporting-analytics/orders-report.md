# Orders Report

The **Orders Report** in FluentCart provides a deep dive into your store's order performance with in-depth analytics. This powerful dashboard allows you to analyze various aspects of your sales data through detailed charts and tables, helping you understand trends, customer behavior, and fulfillment efficiency.

#### Accessing the Orders Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on the **Orders** tab.

#### Filtering Your Report Data

Want to look at a specific time frame? Or maybe you want to see how this month's orders compare to last month's? FluentCart makes this easy with simple filtering tools.

### Report Filters and Controls

The top of the dashboard gives you key controls to choose what data appears in the report.

* **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. See [Choosing the Date Range](/guide/reporting-analytics/reports-dashboard-overview#choosing-the-date-range).
* **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates.
* **Filters:** Click **Filters** to break down the report by options like **Order Type** or specific **Products**. Applied filters appear as chips below the filter bar, and **Clear all** removes them.
* **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

   ![Screenshot of Orders Report Page](/images/reporting-analytics/orders/order-report-filter.webp)

### Key Order Metrics

At the top of the Orders Report, you will find summary cards highlighting your key order metrics for the selected period.

* **Orders:** The number of paid, partially paid, and refunded orders created in the period. Renewal orders are included, and unpaid orders are not.
* **Average Order Value (Net):** Revenue divided by the number of orders counted in the period.
* **Items per Order:** The number of items divided by the number of orders counted in the period.
* **Refunded Orders:** The orders in the period with a full or partial refund. The line under the value shows them as a share of all orders.
* **Failed Orders:** Orders created in the period whose payment failed. They are not counted in the other cards. The line under the value shows the failure rate.
* **Orders per Day:** The number of orders divided by the days of the period that have passed. For ranges longer than 90 days, this card becomes **Orders per Month**.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against (except **Failed Orders**). Hover over the info icon beside a metric to read its definition.

#### Order Chart

Just below the metric cards, the **Order Chart** gives you a clear visual of your store's performance over time. Orders appear as light bars and **Net sales** appears as a line, with the comparison period drawn beside them.

* **Chart View Dropdown:** You can adjust the chart's timeline using the dropdown menu in the top-right corner of the chart. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or change it to **Daily**, **Monthly**, or **Yearly**.
* **Export CSV:** Click the download icon to save the chart data as a CSV file.

   ![Screenshot of the Order Chart](/images/reporting-analytics/orders/orders-report-chart.webp)

#### Order Mix

The **Order mix** card splits the orders from the **Orders** card in several ways. Each split is drawn as one bar, and every split adds up to the same total.

* **Order type:** The kind of sale, such as one-time orders, new subscriptions, renewals, installment sign-ups, and installment payments.
* **Order status:** How the orders stand, for example completed or processing.
* **Discount:** Orders with a coupon or manual discount (**Discounted**) against orders at **Full price**. The **Coupons report** link beside it opens the [Coupons report](/guide/reporting-analytics/coupons-report).
* **Shipping:** The shipping status of your physical orders. This split appears only when the period has physical orders.

![Screenshot of the Order mix card with the Order type, Order status, Discount and Shipping bars](/images/reporting-analytics/orders/orders-report-mix.webp)

#### New vs. Returning Customers

This table breaks down your order data by customer type, helping you measure customer loyalty and the effectiveness of your acquisition strategies. Hover over the info icon beside the title to read the definitions in the app.

* **Customer types:** Each paid order is placed in one group, so the table always adds up to your total orders.
    * **New:** The customer's first paid purchase, counted the same way as on the Customers report.
    * **Returning:** A repeat order from a customer who had paid before.
    * **Renewal:** An automatic subscription renewal. Renewals are kept apart so they do not inflate your Returning numbers.
    * **Installment payment:** A later payment of an installment plan.
    * **Free order:** An order where nothing was paid.
    * **Guest:** An order placed without a customer account.
* **Columns:** The table displays **Type**, **Customers**, **Orders**, **Net Sales**, and **Average Order (Net)** for each customer type.
* **Show Percentages:** Enable this checkbox to view the data as percentages, making it easy to see the proportion of sales from each customer type.
* **Export CSV:** Click the download icon to save this table as a **CSV** file for further analysis.

   ![Screenshot of the New vs. Returning Customers table](/images/reporting-analytics/orders/customer-insights.webp)

To see orders by country or by payment method, open the [Locations](/guide/reporting-analytics/locations-report) or [Payment Methods](/guide/reporting-analytics/payment-methods-report) report.

#### Average Order Charts

Two charts sit side by side under the table.

* **Average Order Value (Net):** Net sales divided by orders, for each period on the timeline.
* **Average Order Items:** The average number of items per order, for each period on the timeline.

#### Order Patterns

At the bottom of the report, you'll find detailed charts that help you understand when and how customers order. Use the zoom icon in the top-right corner of a chart to enlarge it.

* **Orders by Day and Hour:** A heatmap of your busiest times. Darker squares mean more orders.
* **Spend by day:** Gross sales grouped by the days of the week, shown as a line over the number of orders, so you can see which days earn the most.
* **Spend by hour:** Gross sales grouped by the hours of the day, allowing you to pinpoint your peak sales times.
* **Item count distribution:** How many orders have 1 item, 2 items, 3 items, and so on, helping you understand how many items customers usually buy.
* **Order value distribution:** How many orders fall into different price ranges (like 0-100 or 100-200), so you can see which order amounts happen most often.
* **Time between an order's created & completed date:** Orders grouped by how many hours it took to complete them, helping you see how quickly orders are fulfilled.

::: info
The order pattern charts are part of **FluentCart Pro**. Without Pro, a sample preview takes their place.
:::

   ![Screenshot of the Orders by day and hour heatmap and the additional order charts](/images/reporting-analytics/orders/orders-report-by.webp)
