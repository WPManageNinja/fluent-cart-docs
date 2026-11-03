# Payment Methods Report

The **Payment Methods Report** shows how each of your payment gateways performs. It answers questions like which gateway brings in the most money, where refunds pile up, which gateway declines the most charges, and how much recurring revenue is at risk from subscriptions whose renewal payment is failing.

## Accessing the Payment Methods Report

Go to your WordPress dashboard, then go to **FluentCart** > [Reports](/guide/reporting-analytics/reports-dashboard-overview) and click on the **Payment Methods** tab in the reports menu.

You need permission to view reports to open this page.

## Report Filters and Controls

The filter bar at the top of the page decides which orders the report covers.

* **Date range:** Choose a preset such as **Last 30 days** or **This month**, or pick **Custom…** to set your own dates.
* **Compare:** Pick the earlier period your figures are measured against, such as **vs Previous period**, or choose **No comparison**. Changing it is a FluentCart Pro feature.
* **Currency:** Appears when your orders are in more than one currency. You can read one currency at a time, or pick **All currencies** to combine everything in your base currency.
* **Filters:** Narrow the report by **Order Type** or specific **Products**. This is a FluentCart Pro feature.

The [shared report controls](/guide/reporting-analytics/reports-dashboard-overview#comparing-with-an-earlier-period) work the same way on every report.

![Screenshot of the Payment Methods report filter bar and summary cards](/images/reporting-analytics/payment-methods/payment-methods-overview.webp)

## Key Metrics

Four summary cards at the top give you the store-wide picture for the selected period. Hover over the info icon beside each title to see how it is counted.

* **Net sales:** What customers paid in this period, less refunds and tax.
* **Payment success rate:** Paid orders out of paid orders plus the declined charges your gateways recorded. Some gateways, such as PayPal, retry failed payments on their side and record no declines, so their success rate can read higher.
* **Refund rate:** The share of this period's orders that were refunded in part or in full.
* **MRR at risk (now):** The monthly recurring revenue of subscriptions whose renewal payment is failing today. The date range does not apply, so this card shows no change badge.

The other cards show a badge with the change against the compared period. Hover over the badge to see the previous value. Rates change in percentage points, shown as **pts**, and a rising refund rate shows in red.

## Net Sales by Payment Method

The **Net Sales by Payment Method** chart shows the net sales of the orders each gateway took, period by period. Each gateway is a colored segment in a stacked bar, so the full bar is your total net sales and each segment is one gateway's share. The timeline groups by day, month, or year automatically from your date range. Only gateways with orders in the period are drawn.

![Screenshot of the Net Sales by Payment Method chart](/images/reporting-analytics/payment-methods/payment-methods-chart.webp)

## Payment Methods Table

The table below the chart gives you one row per payment gateway, with a **Total** row at the bottom. Columns are grouped under two headings, and you can click any column header to sort by it.

### Sales

* **Orders:** The number of paid orders the gateway took in this period.
* **Net:** Net sales from those orders, after refunds and tax.
* **Share of Net:** The gateway's net sales as a share of all net sales.
* **From Renewals:** Net sales from subscription renewals and installment payments.
* **Refunds:** The amount refunded on the gateway's orders.
* **Refund Rate:** The share of the gateway's orders that were refunded in part or in full.
* **Average Order:** The gateway's net sales divided by its orders.

### Risk

* **Payment Success:** Paid orders out of paid orders and recorded declined charges.
* **Declined Charges:** Declined charges the gateway recorded in this period. Some gateways, such as PayPal, record none.
* **Failed Orders:** Orders created in this period whose payment failed.
* **Failing Subscriptions (Now):** Subscriptions whose renewal payment is failing today, grouped by the payment method they renew with. The date range does not apply.
* **MRR at Risk (Now):** The monthly recurring revenue of those failing subscriptions, as on the Subscriptions report.

A few rows are worth knowing about. A payment made with a saved card is counted under the gateway that charged it. A gateway you have since removed still appears under a readable version of its name, and orders with no recorded gateway appear as **Unknown**.

![Screenshot of the Payment Methods table with the Sales and Risk column groups](/images/reporting-analytics/payment-methods/payment-methods-table.webp)

## Disputes and Card Brands *(FluentCart Pro)*

With FluentCart Pro, two more sections appear below the table:

* **Disputes:** Your store's overall **Dispute rate**, its change in points against the previous period, and a table of **Disputed Orders** and **Disputes Lost** (with the amount lost) for each payment method. Card networks start to monitor a store at a dispute rate of about 0.75%. Disputes can arrive months after the order, so the rate for a recent period can still rise.
* **Card Brands and Methods:** How customers paid, such as each card brand or a bank debit, with **Orders**, **Net**, and **Share of Net** for each. The subtitle tells you what share of orders had this detail recorded by the gateway. The section is hidden when none of your gateways record it.

Without Pro, this area shows a preview with sample data. If Pro is active but too old to include these sections, the preview asks you to update FluentCart Pro.

<!-- TODO(screenshot): With FluentCart Pro active, the Disputes card with its dispute rate and per-gateway table, and the Card Brands and Methods table below it. -->

::: info
Even without Pro, the [Overview](/guide/reporting-analytics/reports-dashboard-overview) warns you in its **Needs Attention** card when your store's dispute rate rises above 0.75%.
:::

## Exporting the Report

Click the download icon (**Export CSV**) above the table to save it as `payment-methods.csv`. The file has one row per gateway plus the total, and it includes gross sales and the amount of declined charges, which the table on screen does not show.

## Empty and Error States

When no orders match the selected period and filters, the chart shows **No orders in this period**. The table shows the same message, and the export button is disabled, when no gateway has anything to report. If the report cannot load, the message **Failed to load the payment methods report** appears.

With the Payment Methods Report, you can see which gateways earn their place at checkout and catch payment problems before they cost you recurring revenue.
