# Subscription Retention & Churn Report

The **Retention** report in FluentCart provides a deep dive into your subscription health, helping you track how many customers you keep versus how many you lose (churn) over time. This dashboard is essential for measuring long-term stability and customer loyalty.

## Accessing the Retention Report

Go to your WordPress dashboard, navigate to **FluentCart Pro → [Reports](/guide/reporting-analytics/reports-dashboard-overview)**, and select the **Retention** sub-tab under the **Subscriptions** category.

## Report Filters and Controls

Use the controls at the top of the page to customize the data displayed in your charts and tables.

* **Date Filter:** Define a specific date range to analyze retention trends over months or years.
* **Products:** Open the **All products** dropdown to limit the report to specific subscription products.
* **Monthly / Yearly:** Use the buttons beside the page title to measure retention month by month or year by year.
* **Billing interval:** When you sell plans with more than one billing interval, a dropdown beside the buttons lets you read one interval at a time, for example **Monthly** or **Yearly** plans, or keep **All intervals**. A monthly plan can churn every month, while a yearly one can churn only at renewal, so reading them apart gives a fairer picture.

Retention compares the subscriptions active when a period began with those still active at its end. New subscriptions are not counted, and installment plans are not included. Hover over the info icon beside the **Subscription Retention** title to read this definition in the app.

![Screenshot of the Retention page with the Monthly / Yearly buttons, the three summary cards and the Retention Rate chart](/images/reporting-analytics/subscription/retention/retention-summary.webp)

## Retention Summary

Three cards highlight your ability to keep subscribers and the revenue they bring. Each card shows the figure for the latest closed period beside the **Average of closed periods**, so you can tell whether the latest month or year is above or below your norm.

* **Subscription Retention:** Of the subscriptions active when the period began, the share still active at its end. The note under it shows how much churned.
* **MRR Retention:** Of the monthly recurring revenue at the start of the period, the share kept at its end. The note under it shows the share of MRR that churned.
* **Renewal Rate:** Of the renewals that fell due in the period, the share that was paid. A plan canceled early counts as a lost renewal when its paid term ends. Renewals still retrying payment count once they settle, and the note under the card tells you how many are still retrying.

Under each figure, a sentence puts the numbers in plain words, for example **41 of the 43 subscriptions active when Sep 2026 began were still active at its end.**

If your date range does not yet cover a full closed month (or year, in **Yearly** view), the cards ask you to pick a range that covers at least one past period.

## Retention Rate Chart

The **Retention Rate** chart provides a visual period-over-period comparison of your subscriber stability.

* **Subscription Retention vs. MRR Retention:** The chart plots both metrics side-by-side, allowing you to see if customer loss is impacting your revenue proportionally.
* **Zoom:** Use the zoom icon in the top-right corner to enlarge the chart.

![Screenshot of the Retention Rate chart with the Subscription Retention and MRR Retention series](/images/reporting-analytics/subscription/retention/retention-summary.webp)

## Renewals and Lifetime Value

With **FluentCart Pro**, a further section shows what happened to your renewals and why subscriptions left, and uses your retention to estimate the long-term value of a subscriber.

* **Renewals:** The renewals that fell due in each period: **Renewed**, **Lost**, or **Retrying payment**. A plan canceled early counts as lost when its paid term ends.
* **Why subscriptions left:** The subscriptions that ended in each period, by reason: **Canceled**, **Payment failed**, **Retrying payment**, **Paused**, or **Completed**.
* **Lifetime (estimate):** Your expected subscription lifetime (1 divided by the average churn rate of the closed periods) and the expected lifetime value of a subscriber (average monthly revenue per subscriber times that lifetime). When retention is at or near 100%, the lifetime reads **over 10 years** instead of an unrealistic number of months. Both figures assume churn stays as it was.

Without Pro, a sample preview takes the place of this section.

![Screenshot of the Renewals chart and the Lifetime (estimate) card](/images/reporting-analytics/subscription/retention/retention-pro-sections.webp)

If the report cannot load, the page shows **This report could not be loaded.** with a **Retry** button.

> **Note:** High churn in a specific month often correlates with the end of a promotional period or a technical issue. Use these dates to investigate and improve your customer experience.

With the **Retention Report**, you can move beyond simple signup numbers and focus on building a sustainable, recurring business by keeping the customers you've already won.
