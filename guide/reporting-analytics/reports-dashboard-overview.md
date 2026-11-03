# Reports Overview

The **Overview** report is the first page you see when you open Reports. It puts the numbers a store owner checks every day on one screen: sales, orders, new customers, refunds, subscriptions, and anything that needs your attention. Each figure links to the report that explains it, so you can start here and drill down.

## Accessing the Overview

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. The **Overview** tab opens first.

The Overview uses the date range and comparison period from the filter bar. It has no **Filters** menu, because it always looks at the whole store. The filter bar, the comparison period, and the currency choice work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count).

## Sales Cards

The first row of cards sums up the date range. Hover over the info icon beside a card to read its definition, and click a card title to open its report.

* **Net sales:** What customers paid in the range, less refunds and tax, as on the Revenue report.
* **Orders:** Paid orders placed in the range, renewals included.
* **Average order value:** Net sales divided by orders.
* **New customers:** Customers whose first purchase was in the range. A renewal is never a first purchase.
* **Repeat purchase rate:** Of the customers who paid in the range, the share who have made two or more purchases. This card shows no change arrow.
* **Refund rate:** The share of the range's orders refunded in part or in full, as on the Refunds report. Its change is shown in percentage points.

The small arrow and percentage beside a figure compare it with the comparison period.

<!-- TODO(screenshot): overview-cards.webp | /reports/overview, Last 30 days, top of the page: the six sales cards and the three subscription cards with change arrows | no arrow -->

## Subscription Cards

When your store has subscriptions, a second row of cards appears.

* **MRR (now):** Monthly recurring revenue right now, as on the Subscriptions report. The date range does not apply.
* **Paying subscriptions (now):** Active subscriptions, discounted first years, and canceled subscriptions still in their paid term.
* **Churn rate:** Subscriptions that ended in the range, as a share of those active at its start.

## Needs Attention

This card lists problems worth a look, each with a **View report** link. It appears only when at least one applies:

* Subscriptions with a failed renewal payment, and the MRR at risk.
* A dispute rate above 0.75%, the level at which card networks start to monitor a store.
* Installment plans with a failed payment, and the amount still owed.
* A refund rate that rose sharply against the comparison period.

<!-- TODO(screenshot): overview-needs-attention.webp | /reports/overview on a store with a failing subscription and an overdue installment plan: the Needs Attention card with two items and View report links | arrow on the first View report link -->

## Net Sales Chart

The **Net Sales** chart shows net sales across the date range. The comparison period appears as a dotted line, so you can see where this period pulls ahead or falls behind.

## Top Products, Channels, and Countries

Three short lists rank what drives your sales in the range. Each shows the top five with a bar for its share, and a **View report** link.

* **Top Products:** By net sales. Opens the Products report.
* **Top Channels:** By new customers. Opens the Sources report.
* **Top Countries:** By net sales, using the billing address. Opens the Locations report.

<!-- TODO(screenshot): overview-top-lists.webp | /reports/overview scrolled to Top Products, Top Channels, Top Countries lists with share bars | no arrow -->

## Last 12 Months

The last chart shows net sales for each of the last 12 months as bars, against the same month a year earlier. The date range does not apply here, and the current month is still in progress.

<!-- TODO(screenshot): overview-last-12-months.webp | /reports/overview scrolled to the bottom: Last 12 Months bar chart with the "A year earlier" series | no arrow -->

The Overview now gives you a daily snapshot of your store, with a link to the report behind every number.
