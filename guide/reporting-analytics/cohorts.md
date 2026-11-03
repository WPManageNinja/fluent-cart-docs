# Subscription Cohorts Report

The **Cohorts** report groups subscribers by when they first paid and follows each group over time. Use it to see how long customers stay subscribed, whether newer customers stay longer than older ones, and, with Pro, how much revenue each group keeps.

## Accessing the Cohorts Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. Under **Subscriptions**, click on **Cohorts**.

This report covers all your subscriptions, so it has no date range. The product picker and currency work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count).

## Generating Cohort Data

The table is built from snapshots, so new subscriptions and cancellations appear only after the next rebuild.

* **Last generated:** The text at the top shows when the data was last built.
* **Generate Snapshots:** Rebuilds the cohort data from all subscriptions. FluentCart asks you to confirm, because it can take a minute on a large store. Large stores build in the background, and a message tells you when it starts.

If the data is older than seven days, or was never built, a warning appears with a **Generate now** link. Until the first build, the table asks you to click **Generate Snapshots**.

## Reading the Cohort Table

Each row is the customers who first paid in that month or year. Each column shows how many of them still had a running subscription after that many months or years. A customer who leaves and comes back counts again. Installment plans are not included.

* **First paid:** The month or year the group first paid.
* **Start:** The size of the group when it started.
* **Month 1**, **Month 2**, and so on (or **Year 1**, **Year 2**): The group after that many periods. Darker cells mean higher retention.
* **Weighted average:** The bottom row averages all groups at each step, weighted by group size.

Hover over a cell to see the exact numbers. A cell marked with `*` is not complete yet. In the monthly view, it is the current month, still running. In the yearly view, only some of the group's monthly cohorts have reached that point, and the hover text says how many.

Use the controls above the table to change the view:

* **Yearly** or **Monthly:** The size of each group and each step.
* **% of start** or **Values:** Show each cell as a share of the start, or as the number itself.
* **Export:** Downloads the table as a CSV file.

<!-- TODO(screenshot): cohorts-table.webp | /reports/subscriptions/subscriptions-cohorts, Monthly, % of start: cohort heat map with the Weighted average row and the Last generated text | arrow on Generate Snapshots -->

## More Cohort Views (Pro)

FluentCart Pro adds these controls and charts:

* **Customers** or **MRR:** Follow the revenue each group keeps instead of the number of customers. MRR retention can pass 100% when customers upgrade.
* **Billing interval:** Appears when your subscriptions use more than one interval. Read monthly and yearly plans apart.
* **Count rebuys as retained:** A customer whose subscription ended and who bought the same product again within 30 days of its paid term end counts as kept the whole time. Use it when customers cancel and rebuy to get a new-customer price.
* **Retention curve:** A chart of the average cohort: the share still subscribed after each period, weighted by cohort size.
* **Cancel and rebuy:** Turn the switch on to see subscriptions whose paid term ended without renewing, and how many of their customers bought the same product again. Cohorts has no date control of its own, so this card uses the date range last set on the other reports. Pick a window of **Within 7 days**, **Within 30 days**, or **Within 90 days**. The cards show the **Rebuy rate**, **When they bought again**, and the **Discount on rebuys**.

::: info These views require FluentCart Pro
Without Pro, the table shows customer cohorts only, and the other sections show a locked preview with sample data.
:::

<!-- TODO(screenshot): cohorts-pro-sections.webp | /reports/subscriptions/subscriptions-cohorts with Pro active: MRR view selected, Retention curve chart and the Cancel and rebuy card switched on | arrow on the Count rebuys as retained switch -->

The Cohorts report now shows you how long each group of customers stays with you.
