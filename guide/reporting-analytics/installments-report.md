# Installments Report

The **Installments** report follows every installment plan in your store, from its first payment to its last. You can see how much your plans have already collected, how much is still scheduled, what falls due in the next 30 days, and which customers have stopped paying. It is the place to check the health of your payment plans, separate from your regular recurring subscriptions.

## Accessing the Installments Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu. In the reports sidebar, open the **Subscriptions** group and click on **Installments**.

A line under the page title tells you what the figures cover. By default it reads **Installment plans as of today, over all time.** When you pick a start range, it changes to name those dates, for example **Plans started from Jan 1 to Mar 31, as they stand today.**

![Screenshot of the Installments report with the Started from / Started to picker, the All products dropdown and the summary cards](/images/reporting-analytics/subscription/installments/installments-cards.webp)

## Report Filters and Controls

The Installments report keeps its own filters in the title bar. The date range, comparison, and **Filters** menu of the other reports do not apply here, because every figure describes your plans as they stand today.

* **Plans started between:** Use the **Started from** and **Started to** picker to look only at plans whose first payment falls in that range. Quick picks include **This month**, **Last 3 months**, **Last 6 months**, **This year**, and **Last year**. Leave it empty to see all time.
* **Products:** Open the **All products** dropdown to limit the report to specific installment variations. The list is grouped by product and shows only products that have started installment plans.
* **Currency:** When your store sells in more than one currency, a currency chip appears under the title bar. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).

The filters appear once your store has at least one installment plan.

## Key Installment Metrics

At the top of the page, summary cards give you the state of your plans. Hover over the info icon beside a card to read its definition.

* **Collected:** What your started plans have paid so far, net of refunds. When an order holds a plan and other items, the plan's share of that order's tax, shipping, and refunds is estimated by line amount.
* **Scheduled:** The payments left on active plans.
* **Due next 30 days:** The payments on active and overdue plans that fall due in the next 30 days, or are already past due. When some of that amount is late, a note under the card reads, for example, **Includes $120.00 already past due**.
* **Projected to collect:** The scheduled and overdue payments at the collection rate you set on the **Monthly Schedule**. *(FluentCart Pro)*
* **Overdue:** The payments left on plans that are expiring, past due, or failing.
* **Lapsed unpaid:** The payments left on plans that ended without being completed and had no refund.
* **Plans started:** The number of plans with at least one paid order.
* **Completion rate:** Completed plans out of the plans that have ended (completed, lapsed, or refunded). Running and overdue plans are left out.

## Plans Started by Month

The **Plans Started by Month** chart groups your plans by the month of their first payment and splits each bar by how those plans stand today.

* **Completed:** Every installment was paid.
* **Running:** The plan is active and on schedule.
* **Overdue:** A payment failed and the plan is behind.
* **Paused:** The plan is paused.
* **Upgraded:** The customer moved to another plan.
* **Lapsed:** The plan ended with payments still unpaid and no refund.
* **Refunded:** The plan ended with a refund.

Hover over a bar to see the number of plans started that month, the count in each status, and the amount collected. When you have no plans yet, the chart reads **No installment plans yet**.

## Monthly Schedule

The **Monthly Schedule** chart shows the payments left on active and overdue plans, month by month, until the last installment.

* **Scheduled:** Bars for the payments due on running plans.
* **Overdue:** Bars, stacked on top, for payments on plans that are behind. A payment that was due before today is shown in the current month.
* **Projected:** A dashed line showing what you can expect to collect at the collection rate.

Use the **Collection rate** slider in the chart header to try other rates and watch the **Projected** line and the **Projected to collect** card update. The slider starts at your store's own rate, taken from how much of their payments your ended plans actually paid after the first one. If no plan has ended yet, it starts at 100%. Click **Reset** to return to your store's rate.

When there are no payments left, the chart reads **No payments left on active or overdue plans**.

::: info
**Plans Started by Month**, **Monthly Schedule**, and the **Projected to collect** card are part of **FluentCart Pro**. Without Pro, a sample preview of the schedule takes their place.
:::

![Screenshot of the Plans Started by Month chart and the Monthly Schedule chart with the Collection rate slider](/images/reporting-analytics/subscription/installments/installments-schedule.webp)

## Plans by Variation, Overdue, and Lapsed

The card at the bottom of the page has up to three tabs. Only the open tab loads, so switching tabs refreshes just that table.

### Plans by Variation

This tab compares your installment prices. Plans are grouped by the price they were sold at, so a later upgrade does not move a plan to its new price. A plan sold on a price that is not set up as an installment price is listed as **Custom plan**.

* **Variation:** The installment price the plans were sold at.
* **Terms:** The range of plan prices and payment counts.
* **Started:** The number of plans started.
* **Net collected:** What those plans have paid so far, net of refunds.
* **Scheduled:** The payments still to come.
* **Total:** Collected and scheduled together.
* **Completed, Running, Overdue, Paused, Upgraded, Lapsed, Refunded:** The number of plans in each status.

Click a number column heading to sort by it.

::: info
**Plans by Variation** is part of **FluentCart Pro**. Without Pro, the tab shows a sample preview, and the **Overdue** tab opens first.
:::

### Overdue and Lapsed

The **Overdue** tab lists plans with a failed payment that still owe money. The **Lapsed** tab lists plans that ended with payments unpaid and no refund. Each tab label shows its plan count, and a line above the table gives the total, for example **$450.00 still owed on 3 plans with a failed payment, largest balance first.**

* **Customer:** The customer's name and email. Click the name to open the subscription.
* **Product:** The product, with the variation and its ID underneath.
* **Status:** The subscription status.
* **Paid:** How many installments were paid out of the total, for example **2 / 6**.
* **Collected:** What the plan has paid so far.
* **Left:** What the plan still owes.
* **Reactivation:** Click **Copy link** to copy a link you can send the customer so they can restart their payments. The column reads **Not available** when the plan has no reactivation link.

Use the **Search name or email** box to find a customer. The table pages through long lists, largest balance first.

::: info
The **Overdue** and **Lapsed** tabs list customers by name and email, so they appear only for users who also have permission to view customers. A user with report access only sees the summary cards, the charts, and the **Plans by Variation** tab.
:::

![Screenshot of the Overdue tab with the Paid and Left columns and the Copy link buttons](/images/reporting-analytics/subscription/installments/installments-overdue.webp)

## Empty and Error States

* **No overdue plans** or **No lapsed plans:** No plan is in that state. With a search term, the table reads **No plans match this search** instead.
* If a request fails, an error message appears. Pick a filter again to reload the page's figures.

Your installment plans are now easy to track, from the money already collected to the customers who need a reminder to finish paying.
