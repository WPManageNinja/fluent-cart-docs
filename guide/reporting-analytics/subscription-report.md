# Subscription Report

The **Subscriptions** report shows the health of your recurring revenue right now and how it moved in the date range. Use it to track monthly recurring revenue (MRR), new and churned subscriptions, renewals, and the revenue at risk from failed payments.

## Accessing the Subscription Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Subscriptions** tab. Its sub-pages, [Retention](/guide/reporting-analytics/retention), [Cohorts](/guide/reporting-analytics/cohorts), [Future Renewals](/guide/reporting-analytics/future-renewals), and [Installments](/guide/reporting-analytics/installments-report), sit under it in the sidebar.

The date range, comparison period, and currency work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). Instead of the **Filters** menu, the subscription reports have a product picker that lists only subscription products. Leave it on **All products**, or pick the plans you want to see. Installment plans are not part of this report.

## Right Now

The first group of cards is a snapshot of today. The date range does not apply to it. Hover over the info icon beside a card to read its definition.

* **MRR:** Monthly recurring revenue now: active subscriptions at their renewal price, plus discounted first years at the price paid now, plus canceled subscriptions until their paid term ends. Installment plans, trials, failing, and paused subscriptions are not included.
* **Paying Subscriptions:** Active subscriptions, discounted first years, and canceled subscriptions still in their paid term.
* **ARPU:** Average revenue per paying subscription: MRR divided by the subscriptions that pay more than 0.
* **Discounted First Years:** MRR from subscriptions in a discounted first cycle, at the price paid now.
* **Uplift When Discounts Renew:** What MRR gains when those discounted first cycles renew at full price.
* **Free Trials:** Subscriptions in a free trial. They are not in MRR. The info icon shows their MRR after the trial.
* **MRR at Risk:** MRR of subscriptions whose renewal payment failed. It is not in MRR.
* **Canceled, Ends Soon:** MRR of canceled subscriptions still in their paid term. It stays in MRR until the term ends.
* **Paused MRR:** MRR of paused subscriptions. It is not in MRR.

<!-- TODO(screenshot): subscriptions-right-now.webp | /reports/subscriptions: "Right now" heading with "Not affected by the date range" and the nine health cards | no arrow -->

## In This Period

The second group of cards covers the date range and compares it with the comparison period.

* **New Subscriptions:** Recurring subscriptions started in the range. A free trial counts when it first pays.
* **Churned:** Recurring subscriptions that ended in the range: canceled, expired, failing, past due, or paused. The line under it shows the churn rate against the subscriptions active at the start. Subscriptions that started and ended in the range are included here, while the Retention report leaves them out.
* **Net Change:** New subscriptions less churned ones.
* **Net MRR Change:** MRR of new subscriptions less MRR of churned ones, plus plan upgrades less downgrades. The line under it splits the change into new, upgrades, downgrades, and churned.
* **Renewals:** Paid subscription renewals in the range. The amount under it is the renewals' [net sales](/guide/reporting-analytics/how-reports-count#net-sales). Installment payments are not counted.
* **Failed Renewals:** Renewal payments that failed in the range, with their amount.

<!-- TODO(screenshot): subscriptions-period.webp | /reports/subscriptions: "In this period" cards and the Subscription movement chart below them | arrow on the Subscriptions / MRR switch -->

## Subscription Movement

The **Subscription movement** chart shows new and churned subscriptions per period, and the net change. Switch between **Subscriptions** (counts) and **MRR** (money). In the MRR view, plan upgrades and downgrades appear too. The **Group by** dropdown sets the [chart grouping](/guide/reporting-analytics/how-reports-count#chart-grouping).

## Where MRR Comes From (Pro)

FluentCart Pro adds a card that splits today's MRR so you can see what carries it:

* **MRR by plan:** Each product and variation, with its share.
* **MRR by billing interval:** Monthly, yearly, and other intervals.
* **Free trial conversion:** For trials started in the range: **Converted to paid**, **Ended without paying**, and **Still in trial**.

::: info MRR breakdown requires FluentCart Pro
Without Pro, this card shows a locked preview with sample data.
:::

<!-- TODO(screenshot): subscriptions-mrr-breakdown.webp | /reports/subscriptions with Pro active: Where MRR comes from card with MRR by plan, MRR by billing interval and Free trial conversion | no arrow -->

The Subscriptions report now shows you how healthy your recurring revenue is today and how it changed.
