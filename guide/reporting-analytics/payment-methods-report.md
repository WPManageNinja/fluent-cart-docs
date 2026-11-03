# Payment Methods Report

The **Payment Methods** report compares the gateways your customers pay with. It shows how much each one takes, how often its payments succeed, how many orders fail, and how much recurring revenue is at risk from failing renewals. Use it to catch a gateway problem early and to keep your dispute rate low.

## Accessing the Payment Methods Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Payment Methods** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count).

## Key Payment Metrics

Four cards sum up the range. Hover over the info icon beside a card to read its definition.

* **Net sales:** What customers paid in the range, less refunds and tax.
* **Payment success rate:** Paid orders out of paid orders and the declined charges the gateway recorded. Some gateways, such as PayPal, retry on their side and record no declines.
* **Refund rate:** Orders in the range refunded in part or in full.
* **MRR at risk (now):** Monthly recurring revenue of the subscriptions whose renewal payment is failing today. The date range does not apply.

## Net Sales by Payment Method

This chart shows the net sales of the orders each gateway took, period by period.

![Screenshot of the Payment Methods cards and the Net Sales by Payment Method chart](/images/reporting-analytics/payment-methods/payment-methods-overview.webp)

## The Payment Methods Table

The table has one row per payment method and a **Total** row. Its columns fall into two groups.

**Sales:**

* **Orders**, **Net**, and **Share of Net**.
* **From Renewals:** Net sales from subscription renewals and installment payments.
* **Refunds**, **Refund Rate**, and **Average Order**.

**Risk:**

* **Payment Success:** Paid orders out of paid orders and recorded declined charges.
* **Declined Charges:** Declined charges the gateway recorded in the range. Some gateways, such as PayPal, record none.
* **Failed Orders:** Orders created in the range whose payment failed.
* **Failing Subscriptions (Now):** Subscriptions whose renewal payment is failing today, by the payment method they renew with.
* **MRR at Risk (Now):** Monthly recurring revenue of those failing subscriptions.

Click a heading to sort, and use the download icon to export the table as a CSV file.

![Screenshot of the payment methods table with Sales and Risk columns](/images/reporting-analytics/payment-methods/payment-methods-table.webp)

## Disputes and Card Brands (Pro)

FluentCart Pro adds two sections:

* **Disputes:** The **Dispute rate** card, and a table of **Disputed Orders** and **Disputes Lost** for each payment method. A dispute is an order whose payment the customer disputed. Card networks start to monitor a store at about 0.75%. Disputes can come months later, so a recent period can still rise.
* **Card Brands and Methods:** How customers paid, such as card brands and wallets, where the gateway records it, with **Orders**, **Net**, and **Share of Net**.

::: info Disputes and card brands require FluentCart Pro
Without Pro, this part of the page shows a locked preview with sample data.
:::

![Screenshot of the Disputes table and the Card Brands and Methods table](/images/reporting-analytics/payment-methods/payment-methods-disputes.webp)

The Payment Methods report now shows you how well each gateway turns checkouts into paid orders.
