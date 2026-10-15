# Revenue Report

The **Revenue Report** in FluentCart shows a clear breakdown of your store’s earnings. You can use it to track sales over time, see where your income comes from, and check how refunds, taxes, and discounts affect your total revenue.

#### Accessing the Revenue Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on the **Revenue** tab.

### Report Filters and Controls

The top of the dashboard gives you key controls to choose what data appears in the report.

* **Date Filter:** This field allows you to define the date range for your report, enabling you to focus on specific periods.
* **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. The dates of the selected period appear in grey text beside the dropdown, and each option in the list shows its own dates.
* **Currency:** Appears when your orders are in more than one currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).
* **Advanced Filters:** Click the **filter** icon to break down the report by options like Order Type or specific Products. This helps you focus on detailed revenue data for a closer view.
* **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.
* **Reset Filters:** Click the **Reset Filter** button to quickly remove all selections and return the report to its original view.

	![Screenshot of Revenue Report Page](/images/reporting-analytics/revenue/advanced-filter.webp)

### Key Revenue Metrics

At the top of the report, you’ll see a quick summary of your store’s sales activity. Each number shows the total for the selected date range, along with a small visual that compares it to the period you chose in the “**Compare to**” filter.

* **Gross Sales:** The total paid on paid, partially paid, and refunded orders created in the period, including tax and shipping. Discounts are already applied, and refunds are not deducted. The percentage and trend arrow icon (▲ or ▼) next to the value show the increase or decrease compared to the comparison period.
* **Refunds:** The amount refunded on orders created in the period. It is deducted from gross sales to calculate revenue. The percentage and trend arrow show how it has changed compared to the comparison period.
* **Taxes:** The tax collected on orders created in the period, including tax on shipping. It is deducted from gross sales to calculate revenue.
* **Shipping:** The shipping charged on orders created in the period, before shipping tax. Shipping is not deducted when revenue is calculated.
* **Revenue:** Gross sales less refunds and taxes. Shipping charges and payment fees are not deducted. The percentage and trend arrow provide a direct comparison of your revenue between the two periods.

Hover over the info icon beside any metric to read its definition.

### Detailed Revenue Analysis

Below the key metrics, you’ll find detailed breakdowns of your store’s income. This section helps you see how well your store is performing.

* **Revenue Chart:** This chart shows how your earnings have changed over time. The solid line is the current range, and the dotted line in the same color is the comparison range, so the two periods are easy to tell apart.
* **Revenue Breakdown:** This table gives a summary of your store by year, with the revenue of the comparison period and the change beside it. It replaces the separate comparison table, so every number you need sits in one place.
    * **Year:** Click the arrow at the start of a row to expand it into a row for each date in your range, each with the same columns.
    * **Order Count, Gross Sales, Refunds, Revenue:** The totals for that row.
    * **Compare Revenue:** The revenue of the matching comparison period.
    * **Change (%):** The percentage of change between the two, color-coded green or red.

Click a column heading to sort the table. Numeric columns sort by their value.

The Revenue Report shows how your store is earning over time. You can easily see what’s working, understand your store’s earnings, and plan to make it grow.

   ![Screenshot of Revenue Report Page](/images/reporting-analytics/revenue/revenue-analysis.webp)

#### Grouped By

This section allows you to break down revenue by different criteria, making it easier to see what drives your store’s income.

* **Grouping Options:** Use the dropdown menu on the right to choose how you want to group the data. Common options include:
    * **Billing Country:** Shows your revenue by the customer's billing country, so you can see which countries bring in the most money.
    * **Shipping Country:** Shows your revenue for each shipping destination.
    * **Payment Method:** Shows revenue by payment type (like Stripe or PayPal) so you can see which options your customers use most.
* **Data Table:** The table will dynamically update to show a detailed breakdown of your revenue based on the selected grouping, including metrics like Order Count, Gross Sales, Refunds, and Revenue for each item in the group (e.g., for each country or payment method).
* **Export:** Click the **Export** button to download the currently displayed grouped data as a CSV file.

    ![Screenshot of Revenue Report Page](/images/reporting-analytics/revenue/net-revenue.webp)
