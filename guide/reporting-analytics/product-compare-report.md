# Compare Products Report

The **Compare Products** report puts the products you choose side by side. Each product or variation gets its own line on a trend chart and its own column in a head-to-head table, so you can see which one sells, keeps, and refunds best over the same dates. Use it to judge a new launch against an established bestseller, or to check how the variations of one product perform against each other.

::: info
This report is part of **FluentCart Pro**. Without Pro, the page shows a sample preview.
:::

## Accessing the Compare Products Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu. Open the **Products** group and click on the **Compare** tab.

## Choosing Products to Compare

You pick the products on the page itself, not in the **Filters** menu. The page reads **Pick two or more products or variations to compare.** until you do.

1. Open the first **Pick a product or variation** dropdown and choose a product. Choose **All variants** to compare the whole product, or pick a single variation.
2. Do the same in the second dropdown, beside **vs**.
3. Click **+ Add** to add more, up to six items in total. Click the **✕** beside a dropdown to remove it.
4. Click the **Compare** button. It becomes available once you have picked at least two items, and the report only loads when you click it.

If you change a pick or a filter after comparing, the page shows **The picks or filters changed. Click Compare to update.** and keeps the earlier results on screen until you click **Compare** again. Changing the currency clears the results, because the amounts are shown in the live currency.

Each item gets its own color, which it keeps on the chart and in the table. Your picks are saved in the page address, so you can bookmark or share a comparison.

![Screenshot of three product pickers joined by vs and the + Add button](/images/reporting-analytics/product/compare-pickers.webp)

## Report Filters and Controls

* **Date:** The date range the report covers.
* **Compare to:** The earlier period used for the change figures in the table.
* **Currency:** Appears when your orders are in more than one currency.

## The Trend Chart

The **Trend** chart draws one colored line for each item you picked.

* **Metric:** Use the buttons in the chart header to switch between **Net sales**, **Units**, **Orders**, and **New customers**.
* **Cumulative:** Tick this box to add each period to the ones before it, so you can see the running total.
* **Align by launch:** Tick this box to line items up from their own launch instead of by calendar date. A launch is the first of three months in a row with sales, and the chart follows each item over its first five years, so the date range does not apply. In this view, only **Net sales** and **Units** are available.
* **Grouping:** The dropdown sets how the timeline is bucketed (**Auto**, **Daily**, **Monthly**, or **Yearly**). It is hidden while **Align by launch** is on.

Hover over a point to see the exact value for each item on that date.

## Head to Head

Under the chart, the **Head to head** table has one column for each item and one row for each figure. The leader on each row is marked **Leader**, and changes are measured against the comparison period.

### Sales

* **Net sales:** What the item earned, less refunds and tax.
* **Share of compared sales:** The item's share of the net sales of all the items you picked.
* **Units sold:** The quantity sold.
* **Orders:** The number of orders that included the item.
* **Customers:** The number of customers who bought it.
* **New customers:** Customers whose first purchase included the item.
* **Average order value:** Net sales divided by orders.
* **Average price per unit:** The average price customers paid for one unit.
* **Refund rate:** Refunds as a share of what customers paid. A lower rate wins here, and its change is shown in points.

### Revenue Mix

* **New sales, Renewals, Installment payments:** The item's net sales split by type. The **Installment payments** row appears only when one of the items has any.

### Subscriptions

This group appears when at least one item sells subscriptions.

* **Live subscriptions:** The item's subscriptions that are running now.
* **MRR:** Their monthly recurring revenue.
* **Renewal rate:** The share of due renewals that were paid.
* **Canceled, ends soon:** Canceled subscriptions still in their paid term.
* **Failing payments:** Subscriptions whose renewal payment is failing.

## Customer Overlap

The **Customer overlap** table shows, for each item's customers in the period, how many have ever bought each of the other items, and how many bought that other item first. Use it to see whether two products compete for the same buyers or lead customers from one to the other.

![Screenshot of the Head to head table with Leader marks](/images/reporting-analytics/product/compare-head-to-head.webp)

![Screenshot of the Trend chart and the Customer overlap table](/images/reporting-analytics/product/compare-trend-overlap.webp)

If the report cannot load, the page shows **This report could not be loaded.** with a **Retry** button. The subscriptions and customer overlap cards load on their own, so a slow or failed card does not hold up the others, and each one has its own **Retry**.

Your product comparison now shows you which products are pulling their weight, and which variations deserve more attention.
