# Compare Products Report

The **Compare** report puts up to six products or variations side by side. It shows which one sells more, keeps customers longer, and gets refunded less, over the same dates. Use it to judge a new launch against an established best seller, or to compare the variations of one product.

::: info This report requires FluentCart Pro
Without Pro, the page shows a locked preview with sample data.
:::

## Accessing the Compare Products Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. Under **Products**, click on **Compare**.

The date range, comparison period, and currency work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). You pick the products on the page itself, so this report has no **Filters** menu.

## Choosing What to Compare

The page opens with two empty pickers joined by **vs**.

1. Click the first picker and choose a product. Pick **All variants** to compare the whole product, or pick a single variation.
2. Do the same in the second picker.
3. Click **+ Add** to add another picker, up to six in total. Click **✕** beside a picker to remove it.

The report loads once two or more pickers are filled. Each item gets a color that it keeps in the table and the chart. The page address keeps your picks, so you can bookmark a comparison or share it with your team.

<!-- TODO(screenshot): compare-pickers.webp | /reports/products/compare with Pro active: three pickers filled with sample products, joined by "vs", and the + Add button | arrow on + Add -->

## Head to Head

The **Head to head** table puts each item in its own column. The leader on each row is marked **Leader**, and the change against the comparison period appears beside each figure.

* **Sales:** **Net sales**, **Share of compared sales**, **Units sold**, **Orders**, **Customers**, **New customers**, **Average order value**, **Average price per unit**, and **Refund rate**. For refund rate, the lowest value leads.
* **Revenue mix:** **New sales**, **Renewals**, and **Installment payments**.
* **Subscriptions:** **Live subscriptions**, **MRR**, **Renewal rate**, **Canceled, ends soon**, and **Failing payments**. This group appears for subscription products.

The **Export** button downloads the comparison as a CSV file.

<!-- TODO(screenshot): compare-head-to-head.webp | /reports/products/compare with three sample products: Head to head table with Leader marks and change figures | no arrow -->

## Trend

The **Trend** chart draws one line per item. Switch the metric between **Net sales**, **Units**, **Orders**, and **New customers**, and set the grouping with the dropdown.

* **Cumulative:** Adds each period to the ones before it, so you see the running total.
* **Align by launch:** Starts each item at its own launch, the first of three months in a row with sales, and follows it over its first five years. The date range does not apply in this view, and only **Net sales** and **Units** are offered. Use it to compare a new product's first months with an older product's first months.

## Customer Overlap

The **Customer overlap** table shows, for each item's customers in the range, how many have ever bought each of the other items, and how many bought that other item first. Use it to see which products customers combine and which one usually comes first.

<!-- TODO(screenshot): compare-trend-overlap.webp | /reports/products/compare: Trend chart with Align by launch ticked, and the Customer overlap table below | arrow on the Align by launch checkbox -->

Your product comparison now shows you which products pull their weight and which deserve more attention.
