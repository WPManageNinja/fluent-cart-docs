# Customer Report

The **Customers** report shows who buys from you: how many customers paid, how many were new, how many came back, and what they are worth over time. Use it to measure customer acquisition and loyalty, and to find your top customers.

## Accessing the Customer Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Customers** tab.

The date range, comparison period, and currency work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). This report always looks at all customers, so it has no **Filters** menu. Customer counts use paid orders only, and a customer is [new](/guide/reporting-analytics/how-reports-count#new-and-returning-customers) at their first paid purchase.

## Key Customer Metrics

Six cards sum up the range. Hover over the info icon beside a card to read its definition.

* **Customers:** Customers who paid in the range, renewals included.
* **New customers:** Customers whose first purchase was in the range. A renewal is never a first purchase.
* **Returning customers:** Customers who had bought before and made a new purchase in the range. Renewals alone do not count.
* **Repeat purchase rate:** Of the customers who paid in the range, the share who have made two or more purchases. Renewals are not purchases.
* **Average lifetime value:** What the customers who paid in the range have spent with you over all time, less refunds and tax, on average.
* **Revenue from existing customers:** The share of the range's revenue from customers who had bought before: their new purchases and renewals.

The first three cards compare with the comparison period.

<!-- TODO(screenshot): customers-cards.webp | /reports/customer, Last 30 days: the six customer cards and the Customers Over Time chart | arrow on the Customers / Revenue switch -->

## Customers Over Time

The **Customers Over Time** chart shows who paid in each period: **New customers**, **Returning customers**, and customers who only renewed (**Renewing only**). Switch to **Revenue** to see the money each group brought in, with renewals as their own part. The grouping dropdown sets the [chart grouping](/guide/reporting-analytics/how-reports-count#chart-grouping).

## Customer Value (Pro)

FluentCart Pro adds sections on what customers are worth:

* **Lifetime Value by First Purchase Month:** For the customers gained in each month, what they have spent on average since, month by month.
* **Revenue Concentration:** How much of your revenue comes from your top customers.
* **Value by First Product:** Customers whose first purchase was in the range, by the product they first bought, with what they have spent since and how many bought again.

## Repeat Purchases (Pro)

* **Purchases per Customer:** Customers who paid in the range, by how many times they have bought from you.
* **Time to Second Purchase:** For customers gained in the 12 months up to the range, how many made another purchase and how soon, with the **Median time to come back**. Renewals do not count.

## Customer Segments (Pro)

**Customer Segments** groups every customer, as of today, by how recently, how often, and how much they have bought, compared with your other customers. The date range does not apply. The segments are **Champions**, **Loyal**, **Promising**, **New**, **At risk**, **Can't lose them**, and **Hibernating**, each with a short suggestion on what to do. Click **Export** on a segment to download its customers as a CSV file.

::: info Customer value, repeat purchases, and segments require FluentCart Pro
Without Pro, each section shows a locked preview with sample data.
:::

<!-- TODO(screenshot): customers-segments.webp | /reports/customer with Pro active: Customer Segments section showing the segment tiles with customer shares | arrow on a segment's Export button -->

## Top Customers

The **Top Customers** table lists the customers who paid in the range, ranked by what they have spent with you over all time.

* **Customer:** Name and email. Click a name to open the customer's profile.
* **Orders** and **Renewals** in the range.
* **Net in Period:** What the customer spent in the range.
* **Lifetime Value:** What the customer has spent over all time.
* **First Order** and **Last Order:** The dates of their first and latest orders.

<!-- TODO(screenshot): customers-top-customers.webp | /reports/customer: Top Customers table with sample (non-real) customers | no arrow -->

The Customers report now shows you how your customer base grows and who your most valuable customers are.
