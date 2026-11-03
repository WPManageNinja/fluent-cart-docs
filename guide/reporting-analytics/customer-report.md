# Customer Report Dashboard

The **Customer** Report tab is your dedicated tool for measuring the success of your customer acquisition and growth efforts. It shows who paid in each period, how many of them were new, how many came back, and what your customers are worth over time, allowing you to assess the long-term health and loyalty of your business.

## Accessing the Customer Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on the **Customers** tab.

### Report Filters and Controls

The top of the dashboard provides crucial controls that determine the data displayed in the cards, chart, and table.

* **Date Range Selector:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates.
* **Compare To:** This dropdown determines the earlier period used for comparison. Each option in the list shows its own dates.
* **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

The Customers report has no **Filters** menu.

### Key Customer Metrics

At the top of the Customer Report, six summary cards describe your customers in the selected period. Hover over the info icon beside a card to read its definition.

* **Customers:** Customers who paid in the period, renewals included.
* **New customers:** Customers whose first purchase was in the period. A renewal is never a first purchase.
* **Returning customers:** Customers who had bought before and made a new purchase in the period. Renewals alone do not count.
* **Repeat purchase rate:** Of the customers who paid in the period, the share who have made two or more purchases. Renewals are not purchases.
* **Average lifetime value:** What the customers who paid in the period have spent with you over all time, less refunds and tax, on average.
* **Revenue from existing customers:** The share of the period's revenue from customers who had bought before: their new purchases and renewals.

The first three cards also show the change against the comparison period.

<!-- TODO(screenshot): Customers report with the six summary cards and the Customers Over Time chart. The current image shows the old Customer Growth card and New Customers chart. -->
![Customer Reports](/images/reporting-analytics/customer/customer-report-1.webp)

### Customers Over Time

The **Customers Over Time** chart shows who paid in each period, split into **New customers**, **Returning customers**, and customers who only renewed (**Renewing only**).

* **Customers / Revenue:** Use the buttons in the chart header to count customers or show the revenue each group brought in. In **Revenue** view, the last group reads **Renewals**.
* **Grouping:** Use the dropdown beside the buttons to pick **Auto**, **Daily**, **Monthly**, or **Yearly**.

When no customer paid in the range, the chart reads **No customer paid in this date range**.

### Customer Value, Repeat Behavior, and Segments

With **FluentCart Pro**, more sections help you understand your customer base:

* **Lifetime Value by First Purchase Month:** What each month's new customers have spent since their first purchase.
* **Revenue Concentration:** How much of your revenue comes from your best customers.
* **Value by First Product:** Customers whose first purchase was in the period, grouped by the product they first bought, with what they have spent since and how many bought again.
* **Purchases per Customer:** Customers who paid in the period, grouped by how many times they have bought from you.
* **Time to Second Purchase:** Of the customers gained in the last 12 months, how many bought again and how soon. Renewals do not count as a second purchase.
* **Customer Segments:** Every customer as of today, grouped by how recently, how often, and how much they buy (for example **Champions**, **Loyal**, and **At risk**), with a CSV export for each segment. The date range does not apply to this section.

Without Pro, sample previews take their place.

### Top Customers

The **Top Customers** table lists the customers who paid in the period, highest lifetime value first.

* **Customer:** The customer's name and email.
* **Orders:** Their orders in the period.
* **Renewals:** Their renewals in the period.
* **Net in Period:** What they spent in the period.
* **Lifetime Value:** What they have spent with you over all time.
* **First Order** and **Last Order:** The dates of their first and latest orders.

::: info
**Top Customers** lists names and emails, so it appears only for users who also have permission to view customers. A user with report access only still sees the cards and charts.
:::

<!-- TODO(screenshot): Top Customers table. The current image shows the removed Comparison table. -->
![Customer Reports](/images/reporting-analytics/customer/customer-report-2.webp)

By using the Customer Report, you can move beyond simple sales numbers to understand the most valuable asset of your store: your customer base.
