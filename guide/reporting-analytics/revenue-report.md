# Revenue Report

The **Revenue Report** in FluentCart provides a detailed breakdown of your store's financial health. Use this report to analyze your profitability over time, track key income sources like gross sales and net revenue, and understand the impact of deductions such as refunds, taxes, and discounts on your bottom line.

#### Accessing the Revenue Report

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Reports**.
2.  Click on the **Revenue** tab to access the Revenue Report.

### Filtering the Report

The **Revenue Report** givess you more powerful filtering options at the top of the page. These tools allow you to define specific time frames, compare performance, and segment your revenue data for deeper insights.

#### Date Filter

Located at the top-left of the report, the **Date Filter** is used to select the primary time frame for your analysis. You can choose from predefined ranges (such as "This Month" or "This Quarter") or select a custom date range. 

#### Compare to

The **Compare to** dropdown allows you to compare the data from your selected date range against a secondary period to track performance trends and growth. Activating a comparison will update the Revenue Report Chart and Comparison table to visualize and detail the differences. The available options are:

* **Previous Period:** Compares the selected range to the immediately preceding period of the same length. For example, if you select 30 days, it will compare to the 30 days prior.
* **Previous Month:** Compares your selection to the entire previous calendar month.
* **Previous Quarter:** Compares your selection to the previous three-month calendar quarter.
* **Previous Year:** Compares the selected range to the exact same date range from the prior year.
* **Custom:** Allows you to select a custom date range to compare against.
* **No Comparison:** This option removes the comparison data from the report.

#### Advanced Filters

Click the **filter icon** located in the top-right corner of the report. This opens two different report data filter options.

* **Order Type:** This filter allows you to separate revenue based on the type of transaction. You can choose to view revenue from:
    * **All:** Includes all order types.
    * **One time:** Shows revenue from standard, non-recurring purchases only.
    * **Subscription:** Shows revenue from initial subscription sign-ups.
    * **Renewal:** Shows revenue generated from recurring subscription payments.
* **Products:** This filter allows you to see revenue data for one or more specific products. You can search for and select items from a list to analyze their individual or combined financial performance.

	![Screenshot of Revenue Report Page](/images/reporting-analytics/revenue/advanced-filter.png)

### Key Performance Indicators (KPIs)

The top of the report displays a high-level summary of your store's financial activity. Each metric provides the total value for the selected date range, along with a visual indicator of its performance compared to the period selected in the "Compare to" filter.

* **Gross Sales:** This represents the total revenue from all sales before any deductions are made. The percentage and trend arrow icon (▲ or ▼) next to the value show the increase or decrease compared to the comparison period.

* **Refund:** This displays the total monetary value of refunds processed. Similarly, the percentage and trend arrow show how the total refund amount has changed relative to the comparison period.

* **Revenue:** This shows your total income after deductions like refunds have been subtracted. The percentage and trend arrow provide a direct comparison of your net revenue between the two selected periods.

#### Revenue Report Chart

The main chart at the top of the page visually represents your key financial trends over the selected period. It is an area chart designed to provide a clear comparison of revenue, helping you to quickly identify patterns and growth.

* **Current Revenue:** This metric, represented by a blue area, displays the revenue for the currently selected date range.
* **Compare Revenue:** This metric, represented by a green area, displays the revenue for the comparison period you have selected from the "Compare to" filter.

In the top-right corner of the chart, you will find several icons to interact with the data visualization:

* **View Toggle:** Allows you to switch between different chart types, such as from an area chart to a bar chart.
* **Zoom:** Enables you to magnify a specific portion of the chart for a more detailed view.
* **More Options:** Provides additional functionalities, such as downloading the chart as an image for use in reports or presentations.

At the bottom of the chart, you can use the Data and Timeline toggles to switch between the visual chart and its underlying data table.
 
   ![Screenshot of Revenue Report Page](/images/reporting-analytics/revenue/revenue-report.png)

### Comparison Table

This section provides a detailed tabular breakdown of the data visualized in the Revenue Report Chart, offering a clear numerical comparison between the two selected periods.

The table displays the following columns:

* **Period:** The specific time interval being compared (e.g., May 2025 vs December 2024).
* **Current Revenue:** The revenue generated during the current, more recent period.
* **Compare Revenue:** The revenue generated during the older comparison period.
* **Change (%):** The percentage difference between the Current and Compare Revenue. The value is color-coded green for an increase and red for a decrease, providing a quick visual indicator of performance.

### Revenue Breakdown by Year

This section aggregates your store's financial performance, grouped by year, within your selected date range. The data from this table can be downloaded as a CSV file by clicking the Export button located in the top-right corner.

The table displays the following financial details:

* **Year:** The year in which the revenue was recorded.
* **Order Count:** The total number of orders contributing to the revenue for that year.
* **Gross Sales:** The total revenue from all sales before any deductions.
* **Refunds:** The total monetary value of all refunds processed.
* **Revenue:** The final, net revenue after all deductions have been applied for the year.

   ![Screenshot of Revenue Report Page](/images/reporting-analytics/revenue/comparison-table.png)

#### Net Revenue Grouped By

This powerful section allows you to segment your revenue data based on different criteria, helping you identify key drivers of your store's income.

* **Grouping Options:** Use the dropdown menu on the right to choose how you want to group the data. Common options include:
    * **Billing Country:** Segments revenue based on the customer's billing address to show which countries are most profitable.
    * **Shipping Country:** Segments revenue based on the shipping destination.
    * **Payment Method:** Segments revenue by the payment gateway used (e.g., Stripe, PayPal), helping you understand which payment options are most popular.
* **Data Table:** The table will dynamically update to show a detailed breakdown of your revenue based on the selected grouping, including metrics like Order Count, Gross Sales, and Net Revenue for each item in the group (e.g., for each country or payment method).
* **Export:** Click the **Export** button to download the currently displayed grouped data as a CSV file.

    ![Screenshot of Revenue Report Page](/images/reporting-analytics/revenue/net-revenue.png)
