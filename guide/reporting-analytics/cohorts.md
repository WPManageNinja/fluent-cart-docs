# Subscription Cohorts Report

The **Cohorts** report provides a detailed look at customer behavior over time by grouping subscribers based on when they started their journey. This report is essential for identifying patterns in customer retention and revenue stability, allowing you to see exactly how long specific "groups" of customers stay with your business.

## Accessing the Cohorts Report

Go to your WordPress dashboard, navigate to **FluentCart Pro → [Reports](/guide/reporting-analytics/reports-dashboard-overview)**, and select the **Cohorts** sub-tab under the **Subscriptions** category.

---

## Report Filters and Controls

The Cohorts page has no date filter, because every cohort is followed from its first payment to today.

* **Products:** Open the **All products** dropdown in the filter bar to see the cohorts of specific subscription products only.
* **Billing interval:** When you sell plans with more than one billing interval, a dropdown beside **Generate Snapshots** lets you read one interval at a time, or keep **All intervals**. *(FluentCart Pro)*

Each row counts the customers who first paid in that month or year, and each column shows how many of them still had a running subscription after that many months or years. A customer who leaves and comes back counts again. Installment plans are not included. Hover over the info icon beside the **Subscription Cohorts** title to read this definition in the app.

![Screenshot of the Cohorts page title bar and table settings](/images/reporting-analytics/subscription/cohorts/accessing-the-cohorts-report-1.webp)

## Cohort Visualization & Table

The **Subscription Cohorts** table breaks down your data into a "heat map" format, making it easy to spot trends at a glance. The settings row above the table controls what it shows.

### 1. Time Granularity

You can toggle the view between **Yearly** and **Monthly**.

* **Yearly View:** Best for long-term business health analysis.
* **Monthly View:** Best for tracking the immediate impact of seasonal promotions or product updates.

### 2. Metric Selection

With **FluentCart Pro**, you can choose whether to follow customers or revenue:

* **Customers:** Tracks the number of customers from the original group who are still subscribed.
* **MRR (Monthly Recurring Revenue):** Tracks how much of the group's starting MRR is still coming in. It can pass 100% when customers upgrade.

Without Pro, the table follows customers.

### 3. Data Representation Styles

Use the second pair of buttons to change how the cells read:

* **% of start:** Shows how many customers (or how much revenue) remain compared to the cohort's start.
* **Values:** Displays the actual customer count or currency amount instead of percentages.

### 4. Count Rebuys as Retained

With **FluentCart Pro**, turn on **Count rebuys as retained** to treat a customer whose subscription ended, and who bought the same product again within 30 days of their paid term ending, as kept the whole time. Use it when customers cancel and rebuy to get a new-customer price.

## Understanding the Cohort Table

Each row represents a **Cohort** (a group of subscribers who first paid in the same month or year).

* **First paid:** The month or year the group first paid.
* **Start:** The size of the group when it started (customers, or MRR in **MRR** view).
* **Month 1, Month 2, etc.** (or **Year 1, Year 2** in yearly view): These columns track that specific group as it moves through its lifecycle.
* **Weighted average:** The bottom row averages how all cohorts perform at each stage, weighted by cohort size, giving you a baseline for your business's overall retention health.

Hover over any cell to see the exact numbers behind it, for example **80%: 40 of 50 customers still subscribed**.

### Partial Periods

A cohort that is still maturing has not yet had every month of its later periods.

* In **Monthly** view, a figure for the current month reads **so far: this month has not ended yet**.
* In **Yearly** view, FluentCart sizes each yearly cohort from its monthly cohorts and marks the figures that are not complete. The hover text says how many of the monthly cohorts have reached that point, for example **from the 7 of 12 monthly cohorts that have reached this point**.

Treat these figures as a preview, because they will change as the remaining months pass.

## Retention Curve

With **FluentCart Pro**, the **Retention curve** under the table draws the average cohort: the share of its customers (or of its starting MRR) still subscribed after each period, weighted by cohort size. Pro also adds a **Cancel and rebuy** section that shows who let a subscription end and bought the same product again soon after. Without Pro, sample previews take their place.

## Managing Cohort Data

FluentCart allows you to manage and export this data for external reporting or deeper analysis.

* **Last generated:** The text beside the **Generate Snapshots** button shows when the cohort data was last refreshed, for example **Last generated October 15, 2026 4:46 pm**. The table is built from snapshots, so new signups and cancellations appear only after the next refresh.
* **Generate Snapshots:** Click this button to rebuild the cohort data from all subscriptions. FluentCart asks you to confirm first, because it can take a minute on a large store. The snapshots are built in short steps while the page is open, and the button shows the progress, for example **Building snapshots 3/12**. Keep the page open until the success message appears. If you close the tab before it finishes, your previous snapshots stay in place.
* **Stale data warning:** When the cohort data has never been generated, or was last generated more than 7 days ago, a warning above the table tells you so. Click **Generate now** in the warning to rebuild it. If you have never generated snapshots, the table also asks you to click **Generate Snapshots**.
* **After a plugin update:** When an update changes how snapshots are built, the page rebuilds them once by itself on your next visit, without asking.
* **Export:** Use the Export button to download your cohort data as a CSV file for use in spreadsheet software like Excel or Google Sheets.

::: info
Snapshots no longer run as a background job, so they don't depend on WP-Cron or Action Scheduler. They work on any host, as long as the Cohorts page stays open while they build.
:::

![Screenshot of the cohort table with the First paid and Start columns and the Weighted average row](/images/reporting-analytics/subscription/cohorts/cohorts-2.webp)

With the **Subscription Cohorts** report, you can identify exactly when customers are most likely to leave and which products attract the most loyal subscribers. By understanding these patterns, you can make data-driven decisions to improve your long-term recurring revenue.
