# Subscription Retention Report

The **Retention** report shows how many of your subscribers stay and how much of their recurring revenue you keep from one period to the next. Use it to measure loyalty, spot months where churn jumps, and, with Pro, estimate what a subscriber is worth over their lifetime.

## Accessing the Retention Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. Under **Subscriptions**, click on **Retention**.

The date range, product picker, and currency work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). Two more controls sit at the top of the page:

* **Monthly** or **Yearly:** Measure retention month by month or year by year.
* **Billing interval:** Appears when your subscriptions use more than one billing interval. Pick **All intervals**, or read one interval apart, because a monthly plan churns monthly and a yearly plan churns at renewal.

Retention compares the subscriptions active when a period began with those still active at its end. New subscriptions are not counted, and installment plans are not included.

## Retention Summary

Three cards describe the last closed month or year. A period still running has had no time to churn, so it is left out. Each card shows the figure for that period next to the **Average of closed periods** in your range.

* **Subscription Retention:** Of the subscriptions active when the period began, the share still active at its end. A sentence under it gives the counts, and a note shows the churned share.
* **MRR Retention:** Of the MRR at the start of the period, the share kept at its end.
* **Renewal Rate:** Of the renewals that fell due in the period, the share that was paid. A plan canceled early counts as a lost renewal when its paid term ends. Renewals still retrying payment count once they settle.

When your range does not cover a full month (or year), the cards ask you to pick a longer range.

![Screenshot of the Retention summary cards and the Retention Rate chart](/images/reporting-analytics/subscription/retention/retention-summary.webp)

## Retention Rate Chart

The **Retention Rate** chart plots **Subscription Retention** and **MRR Retention** for each period, so you can see whether losing subscribers also costs you revenue in the same proportion.

## Renewals and Why Subscriptions Left (Pro)

FluentCart Pro adds a chart with two views:

* **Renewals:** Renewals that fell due in each period: **Renewed**, **Lost**, or still **Retrying payment**, with the renewal rate.
* **Why they left:** Subscriptions that ended in each period, by reason: **Canceled**, **Payment failed**, **Retrying payment**, **Paused**, or **Completed**.

## Lifetime Estimate (Pro)

The **Lifetime (estimate)** card turns your retention into two sentences:

* **Expected subscription lifetime:** 1 divided by the average churn rate of the closed periods, in months. When retention is close to 100%, it reads **over 10 years**.
* **Expected lifetime value:** The average monthly revenue per subscriber in the last closed period, times that lifetime.

Both assume churn stays as it was.

::: info These sections require FluentCart Pro
Without Pro, they show a locked preview with sample data.
:::

![Screenshot of the Renewals chart and the Lifetime (estimate) card](/images/reporting-analytics/subscription/retention/retention-pro-sections.webp)

The Retention report now shows you how well you keep the subscribers you have already won.
