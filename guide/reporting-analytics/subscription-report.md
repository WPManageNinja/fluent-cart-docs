# Subscription Report

The **Subscription Report** provides a clear overview of your recurring business: how much monthly recurring revenue (MRR) you have right now, and how many subscriptions you won and lost in the period you pick. This dashboard is designed to give you a simple, at-a-glance look at how your subscription offerings are performing.

#### Accessing the Subscription Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu, and click on the **Subscriptions** tab.

### Report Filters and Controls

The top of the dashboard gives you key controls to choose what data appears in the report.

* **Date Filter:** Pick a preset such as **Last 30 days** or **This month**, or choose **Custom…** to set your own dates. It applies to the **In this period** section only.
* **Compare To:** This dropdown allows you to choose a past time period to compare with your current data. Each option in the list shows its own dates.
* **Products:** Open the **All products** dropdown to limit the report to specific subscription products. It lists subscription products only and replaces the **Filters** menu of the other reports.

Installment plans are not part of this report. Track them on the [Installments](/guide/reporting-analytics/installments-report) report.

### Right Now

The **Right now** cards describe your subscriptions as they stand today. They are not affected by the date range. Hover over the info icon beside a card to read its definition.

* **MRR:** Monthly recurring revenue now: active subscriptions at their renewal price, plus discounted first years at the price paid now, plus canceled subscriptions until their paid term ends. Installment plans, trials, failing, and paused subscriptions are not included.
* **Paying Subscriptions:** Active subscriptions, discounted first years, and canceled subscriptions still in their paid term.
* **ARPU:** Average revenue per paying subscription: MRR divided by the subscriptions that pay more than 0.
* **Discounted First Years:** The MRR from subscriptions in a discounted first cycle, at the price paid now.
* **Uplift When Discounts Renew:** What MRR gains when those discounted first cycles renew at their full price.
* **Free Trials:** The number of subscriptions in a free trial. They are not in MRR, and the tooltip shows their MRR after the trial.
* **MRR at Risk:** The MRR of subscriptions whose renewal payment failed. It is not in MRR.
* **Canceled, Ends Soon:** The MRR of canceled subscriptions still in their paid term. It stays in MRR until the term ends, then leaves unless the customer comes back.
* **Paused MRR:** The MRR of paused subscriptions. It is not in MRR.

<!-- TODO(screenshot): Subscriptions report showing the "Right now" health cards and the "In this period" cards. The current image shows the old Installments Still Due card. -->
  ![Screenshot of the Subscription Report page](/images/reporting-analytics/subscription/subscription-report.webp)

### In This Period

The **In this period** cards follow your date range and compare against the period you chose.

* **New Subscriptions:** Recurring subscriptions started in the period. A free trial counts when it first pays.
* **Churned:** Recurring subscriptions that ended in the period: canceled, expired, failing, past due, or paused. The line under the value shows the churn rate against the subscriptions active at the start.
* **Net Change:** New subscriptions less churned ones.
* **Net MRR Change:** The MRR of new subscriptions less the MRR of churned ones, plus plan upgrades less downgrades. A plan upgrade is neither churn nor a new subscription. The line under the value splits it into its parts.
* **Renewals:** Paid subscription renewals in the period. Installment payments are not counted.
* **Failed Renewals:** Subscription renewal payments that failed in the period.

### Subscription Movement

The **Subscription movement** chart shows new and churned subscriptions for each period, with a **Net** line for the change.

* **Subscriptions / MRR:** Use the buttons in the chart header to count subscriptions or show the MRR they carry. In **MRR** view, plan **Upgrades** and **Downgrades** are drawn too, whenever the period has any.
* **Grouping:** Use the dropdown beside the buttons to change how the timeline is bucketed.

When nothing moved in the date range, the chart reads **No new or churned subscriptions in this period**.

<!-- TODO(screenshot): Subscription movement chart with New, Churned and Net series and the Subscriptions / MRR toggle. The current image shows the removed Subscription Chart. -->
  ![Screenshot of Report Subscriprtion Page](/images/reporting-analytics/subscription/subscription-chart.webp)

### Where MRR Comes From

With **FluentCart Pro**, the **Where MRR comes from** card splits your current MRR **by plan** and **by billing interval**, and shows the **Free trial conversion** of trials started in the period: **Converted to paid**, **Ended without paying**, and **Still in trial**. Without Pro, a sample preview takes its place.

If the report cannot load, an error message with a **Retry** button takes the place of the figures.

With the Subscription Report, you can easily see where your recurring revenue stands today and how it moved over time, giving you the insights you need to measure your growth.
