# Orders Report

The **Orders Report** in FluentCart provides a deep dive into your store's order performance with in-depth analytics. This powerful dashboard allows you to analyze various aspects of your sales data through detailed charts and tables, helping you understand trends, customer behavior, and fulfillment efficiency.

#### Accessing the Orders Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on the **Orders** tab.

#### Filtering Your Report Data

Want to look at a specific time frame? Or maybe you want to see how this month's orders compare to last month's? FluentCart makes this easy with simple filtering tools.

### Report Filters and Controls

The top of the dashboard gives you key controls to choose what data appears in the report.

* **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
* **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
* **Advanced Filters:** Click the **filter** icon to break down the report by options like **Order Type** or specific **Products**. This helps you focus on detailed order data for a closer view.
* **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
* **Reset Filters:** Click the **Reset Filter** button to quickly remove all selections and return the report to its original view.

   ![Screenshot of Orders Report Page](/images/reporting-analytics/orders/order-report-filter.webp)

### Key Order Metrics

At the top of the Orders Report, you will find summary cards highlighting your key order metrics for the selected period.

* **Gross Sales:** The total paid on paid, partially paid, and refunded orders created in the period, including tax and shipping. Discounts are already applied, and refunds are not deducted.
* **Refunds:** The total amount of money refunded on orders created in the period.
* **Revenue:** Gross sales less refunds and taxes. Shipping charges and payment fees are not deducted.
* **Orders:** The number of paid, partially paid, and refunded orders created in the period. Renewal orders are included, and unpaid orders are not.
* **Items:** The total quantity of product units on those orders. With a product filter applied, only the matching items are counted.
* **Average Gross:** Gross sales divided by the number of orders.
* **Average Revenue:** Revenue divided by the number of orders.
* **Average Order Items:** Items divided by the number of orders.

Each metric also includes a percentage that indicates the increase or decrease compared to the period you are comparing against. Hover over the info icon beside a metric to read its definition.

#### Order Chart

Just below the metric cards, the **Order Chart** gives you a clear visual of your store's performance over time. Orders appear as light bars, and **Gross Sales** and **Revenue** appear as lines.

* **Metric checkboxes:** The checkboxes on the **Gross Sales**, **Revenue**, and **Orders** cards turn each series on or off in the chart.
* **Chart View Dropdown:** You can adjust the chart's timeline using the dropdown menu in the top-right corner of the chart. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or change it to **Daily**, **Monthly**, or **Yearly**.

   ![Screenshot of the Order Chart](/images/reporting-analytics/orders/orders-report-chart.webp)

#### Monthly Averages and Tax & Shipping

Under the chart, a row of four small cards shows your **Average Monthly Gross**, **Average Monthly Revenue**, **Average Monthly Orders**, and **Average Monthly Items** for the selected range, each with its change against the comparison period.

When your orders in the period include tax or shipping, two more cards appear: **Taxes** (the total amount of taxes) and **Shipping** (the total amount of shipping costs). They stay hidden when there is neither.

#### New vs. Returning Customers

This table breaks down your order data by customer type, helping you measure customer loyalty and the effectiveness of your acquisition strategies. Hover over the info icon beside the title to read the definitions in the app.

* **Customer types:** Each paid order is placed in one of four groups, so the table always adds up to your total orders.
    * **New:** The customer's first paid order.
    * **Returning:** A repeat order from a customer who already had an earlier paid order. A customer can be counted as New for one order and Returning for the next.
    * **Renewal:** An automatic subscription renewal. Renewals are kept apart so they do not inflate your Returning numbers.
    * **Guest:** An order placed without a customer account.
* **Columns:** The table displays Customer Count, Order Count, Gross Sales, Average Gross Sales, Revenue, and Average Revenue for each customer type.
* **Show Percentages:** Enable this checkbox to view the data as percentages, making it easy to see the proportion of sales from each customer type.
* **Export:** Click the **Export** button to download this data as a **CSV** file for further analysis.

#### Orders Grouped By

This table breaks down your orders by a criterion you choose with the dropdown beside the title.

* **Billing Country:** The default. Orders grouped by the customer's billing country, helping you identify your key international markets.
* **Shipping Country:** Orders grouped by the shipping destination.
* **Payment Method:** Orders grouped by the way customers paid, such as Stripe or PayPal.

The table shows Orders, Gross Sales, Average Gross Sales, Revenue, and Average Revenue for each group. Click a column heading to sort by it. The **Export** button downloads the table as a CSV file.

   ![Screenshot of the New vs. Returning Customers and Orders Grouped By tables](/images/reporting-analytics/orders/customer-insights.webp)

#### Orders by Day and Hour

This heatmap visualizes your store's busiest times, showing which days of the week and which hours of the day generate the most orders. Darker squares mean more orders.

#### Additional Order Analytics

At the bottom of the report, you'll find detailed charts that help you understand customer behavior and order trends. Use the zoom icon in the top-right corner of a chart to enlarge it.

* **Spend by day:** Gross sales grouped by the days of the week, shown as a line over the number of orders, so you can see which days earn the most.
* **Spend by hour:** Gross sales grouped by the hours of the day, allowing you to pinpoint your peak sales times.
* **Item count distribution:** How many orders have 1 item, 2 items, 3 items, and so on, helping you understand how many items customers usually buy.
* **Order value distribution:** How many orders fall into different price ranges (like 0-100 or 100-200), so you can see which order amounts happen most often.
* **Average Order Gross:** A chart that tracks the average gross value of your orders over the selected period.
* **Average Order Items:** A chart that tracks the average number of items per order over the selected period.
* **Time between an order's created & completed date:** Orders grouped by how many hours it took to complete them, helping you see how quickly orders are fulfilled.

   ![Screenshot of the Orders by day and hour heatmap and the additional order charts](/images/reporting-analytics/orders/orders-report-by.webp)
