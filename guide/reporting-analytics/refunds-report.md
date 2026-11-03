# Refunds Report

The **Refunds Report** provides a focused analysis of all refund activity in your store. This dashboard is essential for understanding your refund rate, tracking the total amount of money being returned to customers, and identifying trends that might indicate issues with products or customer satisfaction.

#### Accessing the Refunds Report

Go to your WordPress dashboard, then go to **FluentCart** > [Reports](/guide/reporting-analytics/reports-dashboard-overview) in the side menu, and click on the **Refunds** tab.

### Report Filters and Controls

The top of the dashboard gives you key controls to choose what data appears in your charts and tables.

* **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. Refunds are counted by the day they were made.
* **Compare To:** This dropdown lets you pick a past period (for example, the previous period, previous month, or the same time last year). Your current data is then compared with that past period. This helps you see if your store is doing better, worse, or staying the same over time. Each option in the list shows its own dates.
* **Filters:** Click **Filters** to segment the report by criteria such as **Order Type** or specific **Products**, allowing you to isolate refunds associated with certain items. Applied filters appear as chips below the filter bar, and **Clear all** removes them.
* **Chart grouping:** The dropdown above the trend chart sets how the timeline is bucketed. Leave it on [Auto](/guide/reporting-analytics/reports-dashboard-overview#choosing-how-a-trend-chart-is-grouped) to follow your date range, or pick **Daily**, **Monthly**, or **Yearly** yourself.

   ![Screenshot of the five Refunds report summary cards](/images/reporting-analytics/refunds/refunds-cards.webp)

### Key Refund Metrics

At the top of the **Refunds Report**, you will find summary cards highlighting your key refund metrics for the selected period.

* **Refunded:** The money refunded during the period, tax included, whatever date the order was placed. The **Revenue** report counts refunds on orders placed in the period, before tax, so the two figures can differ.
* **Refunds:** The number of refunds made in the period. An order can be refunded more than once, so the line under the value tells you how many orders they cover and how many were full or partial refunds.
* **Average Refund:** The refunded amount divided by the number of refunds.
* **Refund Rate:** The share of the period's orders refunded in part or full so far, counted the same way as on the Orders, Payment Methods, and Locations reports. The line under it, **Refunds per order placed**, compares refunds made in the period with orders placed in it. That second figure can pass 100% when older orders are refunded.
* **Days to Refund:** The median number of days from an order to its first refund, for orders first refunded in this period.

Each metric also shows a percentage, telling you whether the value went up or down compared to the period you selected for comparison.

#### Refunds Chart

The main chart on this dashboard is the **Refunds Chart**. It helps you easily spot refund trends by the day refunds were made.

The chart plots the **Refunded Amount** and **Refunds per order placed** for each period, with the **Previous Refunded Amount** and **Previous refunds per order placed** of the comparison period shown in a lighter style. Hover over a period to see its number of refunds and orders. Use the dropdown above the chart to change the grouping.

### Detailed Refund Analysis

Below the main chart, you’ll find more detailed breakdowns that show the data behind the charts. This helps you understand refunds in more detail.

* **Refund breakdown:** This card splits the refunded amount three ways, and each split adds up to the **Refunded** card:
    * **Full or partial:** **Full refunds** against **Partial refunds**.
    * **Sale type:** One-time orders, subscriptions, renewals, and other kinds of sale.
    * **Payment method:** The gateway the refund went back through.
* **Most refunded products:** The products that get refunded most, with their refund amount and refund rate. *(FluentCart Pro)*
* **Weeks Between Order and Refund:** This bar chart shows how many weeks after the order each refund came. It helps you set a fair refund window and spot products that disappoint early. *(FluentCart Pro)*
* **Refund reasons:** The most common reasons given for refunds in the period, with how many refunds gave each one. The line at the top tells you what share of refunds have a reason. When none were given, it reads **No reasons given in this period**.

::: info
**Most refunded products** and **Weeks Between Order and Refund** are part of **FluentCart Pro**. Without Pro, a sample preview takes their place.
:::

![Screenshot of the Refunds Chart and the Refund breakdown card](/images/reporting-analytics/refunds/refunds-breakdown.webp)

![Screenshot of the Most refunded products table and the Weeks between order and refund chart](/images/reporting-analytics/refunds/refunds-pro-sections.webp)

If the report cannot load, an error message with a **Retry** button takes the place of the figures, so a failed request never reads as zero refunds.

The Refunds Report goes deeper than sales data, showing you how often money goes back to customers and where it happens, so you can improve your products and services.
