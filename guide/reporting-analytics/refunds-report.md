# Refunds Report

The **Refunds Report** shows how much money goes back to customers, how often, and why. Use it to track your refund rate, spot the products and payment methods behind refunds, and see how soon after a purchase customers ask for their money back.

## Accessing the Refunds Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Refunds** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count).

::: info
This report counts money refunded during the date range, whenever the order was placed. The Revenue report counts refunds on orders placed in the range instead, so the two refund figures can differ.
:::

## Key Refund Metrics

Five cards sum up the range. For every card except **Days to Refund**, a rise is shown in red, because more refunds is bad news.

* **Refunded:** Money refunded during the range, tax included, whenever the order was placed.
* **Refunds:** Refunds made in the range. An order can be refunded more than once. The line under it shows how many orders they were on, split into full and partial refunds.
* **Average Refund:** The refunded amount divided by the number of refunds.
* **Refund Rate:** The share of the range's orders refunded in part or in full so far, as on the Orders, Payment Methods, and Locations reports. The line under it, **Refunds per order placed**, counts refunds made in the range per order placed in it. That figure can pass 100% when older orders are refunded.
* **Days to Refund:** The median number of days from an order to its first refund, for orders first refunded in the range.

<!-- TODO(screenshot): refunds-cards.webp | /reports/refunds, Last 30 days: the five refund cards with their second lines | no arrow -->

## Refunds Chart

The **Refunds Chart** shows the **Refunded Amount** and **Refunds per order placed** by the day the refunds were made. The comparison period appears in a lighter style. Use the dropdown to change the [chart grouping](/guide/reporting-analytics/how-reports-count#chart-grouping).

## Refund Breakdown

The **Refund breakdown** card splits the refunded amount three ways. Each split adds up to the **Refunded** card.

* **Full or partial:** **Full refunds** against **Partial refunds**.
* **Sale type:** One-time orders, new subscriptions, renewals, and installment orders.
* **Payment method:** The gateway that took the original payment.

<!-- TODO(screenshot): refunds-breakdown.webp | /reports/refunds: Refunds Chart and the Refund breakdown card with its three bars | no arrow -->

## Most Refunded Products (Pro)

This table lists products sold in the range by refunded amount. **Refunded Share** is the part of what the product sold for that was refunded.

* **Product**, **Refunded**, **Sold**, **Refunded Share**, and **Refunded Orders**.

The download icon exports the table as a CSV file.

## Weeks Between Order and Refund (Pro)

This chart shows how many weeks after the order each refund came. Use it to set a fair refund window and to spot products that disappoint early.

::: info These two sections require FluentCart Pro
Without Pro, each shows a locked preview with sample data.
:::

<!-- TODO(screenshot): refunds-pro-sections.webp | /reports/refunds with Pro active: Most refunded products table and the Weeks between an order's created date and refund date chart | no arrow -->

## Refund Reasons

The last card shows the share of refunds that have a reason, and lists the most common reasons your team entered when refunding.

The Refunds Report now shows you where money goes back to customers, so you can fix the cause.
