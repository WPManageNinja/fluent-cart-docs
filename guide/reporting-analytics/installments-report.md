# Installments Report

The **Installments** report follows the installment plans your customers pay in parts. It shows what you have collected, what is still scheduled, and which plans have a failed payment or stopped paying. Use it to plan your income from payment plans and to follow up with customers who fall behind.

## Accessing the Installments Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. Under **Subscriptions**, click on **Installments**.

This report shows every plan as it stands today. It has its own controls in the title bar instead of the usual filter bar:

* **Plans started between:** Pick a range to see only the plans whose first payment falls in it. The shortcuts are **This month**, **Last 3 months**, **Last 6 months**, **This year**, and **Last year**. Leave it empty to see all time. The line under the page title says which plans you are looking at.
* **Products:** Pick installment products or variations, or leave it on **All products**.
* **Currency:** Appears when your orders use more than one currency. See [How Reports Count](/guide/reporting-analytics/how-reports-count#currencies).

## Summary Cards

Hover over the info icon beside a card to read its definition.

* **Collected:** Paid on started plans, net of refunds. When an order holds a plan and other items, the plan's share of that order's tax, shipping, and refunds is estimated by line amount.
* **Scheduled:** Payments left on active plans.
* **Due next 30 days:** Payments on active and overdue plans that fall due in the next 30 days, or are already past due. The line under it shows how much is already past due.
* **Projected to collect** (Pro): Scheduled and overdue payments at the collection rate set on the **Monthly Schedule**.
* **Overdue:** Payments left on expiring, past due, and failing plans.
* **Lapsed unpaid:** Payments left on ended plans that had no refund.
* **Plans started:** Plans with at least one paid order.
* **Completion rate:** Completed plans out of plans that have ended (completed, lapsed, or refunded). Running and overdue plans are left out.

![Screenshot of the Installments cards and the title bar filters](/images/reporting-analytics/subscription/installments/installments-cards.webp)

## Plans Started by Month and Monthly Schedule (Pro)

FluentCart Pro adds two charts:

* **Plans Started by Month:** Plans by the month of their first payment, split by how they stand today: **Completed**, **Running**, **Overdue**, **Paused**, **Upgraded**, **Lapsed**, and **Refunded**. Hover over a month to see the plans started and the amount collected.
* **Monthly Schedule:** Payments left on active and overdue plans, by month, with **Scheduled** and **Overdue** bars and a **Projected** line. The **Collection rate** slider starts at your store's rate: the share of their later payments that ended plans actually paid. Move it to try other rates, or click **Reset**.

::: info These charts require FluentCart Pro
Without Pro, this part of the page shows a locked preview with sample data.
:::

![Screenshot of the Plans Started by Month and Monthly Schedule charts](/images/reporting-analytics/subscription/installments/installments-schedule.webp)

## Plans by Variation, Overdue, and Lapsed

The table at the bottom has three tabs. Only the open tab loads.

* **Plans by Variation** (Pro): One row per variation with the number of terms, plans started, net collected, payments scheduled, and how many plans are completed, running, overdue, paused, upgraded, lapsed, or refunded. Use it to compare installment prices.
* **Overdue:** Plans with a failed payment, largest balance first.
* **Lapsed:** Ended plans with no refund and payments left unpaid, largest balance first.

The **Overdue** and **Lapsed** lists show the **Customer**, **Product**, **Status**, payments **Paid**, amount **Collected**, and amount **Left**. When a plan can be reactivated, click **Copy link** in the **Reactivation** column to copy a link you can send to the customer. Use the search box to find a customer by name or email.

![Screenshot of the Overdue tab with Copy link buttons](/images/reporting-analytics/subscription/installments/installments-overdue.webp)

The Installments report now shows you what your payment plans have brought in and which customers need a reminder.
