# Compare Products Report

The **Compare Products** report puts the products you choose side by side. Each product gets its own line on a chart and its own row in a totals table, so you can see which one sells the most, earns the most, or gets refunded the most over the same dates. Use it to judge a new launch against an established bestseller, or to check how the variations of one product perform against each other.

::: info
This report is part of **FluentCart Pro**.
:::

## Accessing the Compare Products Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** in the side menu. Open the **Products** group and click on the **Compare** tab.

## Choosing Products to Compare

The page stays on a preview until you pick at least two products. The preview shows an example chart, so you know what to expect.

1. Click the **filter** icon at the right end of the filter bar.
2. Select **Products** from the list.
3. Open the **Select Products** dropdown, then tick the checkbox beside each product you want to compare. Click the arrow beside a product to see its variations and tick only the ones you need.
4. Click anywhere outside the dropdown to close it.

You can also click **Open the Product filter** inside the preview to jump straight to the picker.

![Screenshot of the Products filter with three products ticked](/images/reporting-analytics/product/product-compare-picker.webp)

Once you pick two or more products, they appear in the filter bar as chips, and the report loads. Hover over a chip to see which variations it covers.

::: info
The report compares up to 50 picked variations. If you pick more, FluentCart tells you it is comparing the first ones you picked, so narrow the selection for an exact comparison.
:::

## Report Filters and Controls

* **Date:** The date range the report covers.
* **Compare to:** The earlier period used for the change figures in the totals table. The dates of that period appear beside the dropdown, and again above the table as **Change compared with** followed by the dates.
* **Currency:** Appears when your orders are in more than one currency.
* **Reset Filters:** Clears your picks and returns the report to its preview.

## The Comparison Chart

The chart draws one colored line for each product you picked, and a legend underneath tells you which color is which product.

* **Metric:** Use the buttons in the top-right corner to switch between **Orders**, **Revenue**, and **Units**. The chart title follows your choice, for example **Revenue by product**.
* **Grouping:** The dropdown beside the metric buttons sets how the timeline is bucketed (**Auto**, **Daily**, **Monthly**, or **Yearly**).

Hover over a point to see the exact value for each product on that date.

## The Totals Table

Under the chart, the **Totals** table has one row for each product, with the color that matches its line on the chart.

* **Entity:** The product name, with the number of its variations underneath.
* **Orders:** The number of orders that include the product. An order that holds two variations of the same product is counted twice in the product row.
* **Revenue:** What the product earned after discounts and refunds, excluding tax.
* **Units:** The quantity sold.
* **Customers:** The number of customers who bought it. A customer who bought two variations of one product counts twice in the product row.
* **Discounts:** The discounts applied to the product.
* **Refunds:** Refunds on orders placed in your date range, counted by the order date and not by the date the refund was issued.
* **Share:** The percentage of the selected total this product accounts for. It follows the chart metric you chose: the share of total orders, revenue, or units.

Next to each figure, a small green or red arrow with a percentage shows the change compared with your comparison period. The final **Selected total** row adds up all the products you picked.

Click a column heading to sort the table by that column. Numeric columns sort by their value, so $1,000 correctly ranks above $900.

### Product or Variation

Use the **Product** and **Variation** buttons at the top-right of the table to change what each row stands for.

* **Product:** One row per product, with all of its variations added together.
* **Variation:** One row per variation, for example each size or color of a hoodie. The chart switches to variation lines too.

When you have more than five rows, the table shows the top 5 for the column you sorted by, and the chart draws only those same five. Click **Show all** to see every row, or **Show top 5** to collapse it again.

![Screenshot of the Compare Products chart and Totals table](/images/reporting-analytics/product/product-compare-report.webp)

Your product comparison now shows you which products are pulling their weight, and which variations deserve more attention.
