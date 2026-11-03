# Locations Report

The **Locations Report** shows where your sales and customers come from. It maps your net sales by country and breaks down orders, customers, refunds, and order value for each place, so you can see your strongest markets, how much of your business is international, and which regions are growing or declining.

## Accessing the Locations Report

Go to your WordPress dashboard, then go to **FluentCart** > [Reports](/guide/reporting-analytics/reports-dashboard-overview) and click on the **Locations** tab in the reports menu.

You need permission to view reports to open this page.

## Report Filters and Controls

The filter bar at the top of the page decides which orders the report covers.

* **Date range:** Choose a preset such as **Last 30 days** or **This month**, or pick **Custom…** to set your own dates.
* **Compare:** Pick the earlier period your figures are measured against, such as **vs Previous period**, or choose **No comparison**. Changing it is a FluentCart Pro feature.
* **Currency:** Appears when your orders are in more than one currency. You can read one currency at a time, or pick **All currencies** to combine everything in your base currency.
* **Filters:** Narrow the report by **Order Type** or specific **Products**. This is a FluentCart Pro feature. With a product filter, each location's money is those products' share of each order.
* **Address:** The dropdown above the table switches between the **Billing** address (the default) and the **Shipping** address. An order without a shipping address falls back to its billing address.

The [shared report controls](/guide/reporting-analytics/reports-dashboard-overview#comparing-with-an-earlier-period) work the same way on every report.

<!-- TODO(screenshot): Locations report from the top, showing the filter bar and the summary cards (Net sales, International sales, International new customers, Countries with sales, Top country). -->

## Key Metrics

The summary cards at the top cover your whole store for the selected period, whichever level of the table you are viewing. Hover over the info icon beside each title to see how it is counted.

* **Net sales:** What customers paid in this period, less refunds and tax, across all locations.
* **International sales:** Net sales from outside your store country, as a share of all net sales. It changes in percentage points against the compared period.
* **International new customers:** Customers outside your store country whose first purchase was in this period.
* **Countries with sales:** The number of countries with at least one order in this period.
* **Top country:** The country with the most net sales, and its share of the total.

The two **International** cards only appear when your store address has a **Country** set in the [Store Settings](/guide/settings-configuration/store-settings). Each card except **Top country** shows a badge with the change against the compared period. Hover over the badge to see the previous value.

## World Map

At the country level, a world map shades each country by its net sales, from light to dark blue, with a scale at the bottom left. Hover over a country to see its name and net sales, and drag or scroll to pan and zoom. With FluentCart Pro, clicking a country on the map opens its states.

![Screenshot of the Locations cards and the world map with the Address dropdown and color scale](/images/reporting-analytics/locations/locations-overview.webp)

## Locations Table

Below the map, the table lists one row per country, with a **Total** row at the bottom. Rows are sorted by net sales, and you can click any column header to sort by it.

* **Country:** The country's name. At deeper levels this column becomes **State** or **City**.
* **Orders:** The number of orders from this place.
* **Customers:** The number of distinct customers who ordered from this place.
* **New Customers:** Customers whose first purchase was in this period.
* **Returning Customers:** Customers who had bought from you before.
* **Net:** Net sales from this place, after refunds and tax.
* **Change:** How net sales changed against the compared period. A place with no sales in the compared period shows **New**. This column only appears while a comparison is active.
* **Share of Net:** This place's net sales as a share of the total.
* **Refunds:** The amount refunded on this place's orders.
* **Refund Rate:** The share of this place's orders that were refunded in part or in full.
* **Average Order (Net):** Net sales divided by orders.
* **Lifetime Value:** What the new customers won here have spent with you to date, each. *(FluentCart Pro)*
* **Bought Again:** The share of new customers won here who made a second purchase. Renewals do not count. *(FluentCart Pro)*

<!-- TODO(screenshot): The Locations table at country level showing the columns from Country to Average Order (Net), the Total row, and the note about how orders are placed below it. -->

### How an Order Is Placed

A note below the table explains where each order's location comes from. FluentCart uses the order's latest address of the type you selected. When an order has no address of its own, FluentCart falls back to:

1. The original order's billing address, for a subscription renewal.
2. The country saved on the customer's record, at the country level only.

When either fallback was used, the note tells you how many orders it applied to. Orders with no location at all appear in an **Unknown** row.

## States, Cities, and Biggest Movers *(FluentCart Pro)*

With FluentCart Pro, the report goes deeper than countries:

* **Drill-down:** Click a country, on the map or in the table, to see its states, then click a state to see its cities. The breadcrumb above the table (**All countries** / country / state) takes you back up. The summary cards stay store-wide while you drill down.
* **Lifetime Value and Bought Again:** These two columns appear at every level.
* **Biggest Movers:** A card above the table lists the places with the largest gains (**Growing**) and drops (**Declining**) in net sales against the compared period, at the level you are viewing, up to three on each side. It needs an active comparison.

When one state holds most of a country's orders, a warning above the table points out that this is often a checkout default rather than real demand, so you can check your address settings before reading it as a trend.

Without Pro, the report shows countries only, and a preview with sample data describes these extras.

![Screenshot of a country drilled down to its states with the breadcrumb and the Biggest Movers card](/images/reporting-analytics/locations/locations-drilldown.webp)

## Exporting the Report

Click the download icon (**Export CSV**) above the table to save the level you are viewing, for example `locations-country.csv`. The file has one row per place plus the total, and it also includes gross sales and the previous period's net sales. The Pro columns are included when Pro is active.

## Empty and Error States

When no orders match the selected period and filters, the table shows **No orders in this period**, the map is hidden, and the export button is disabled. If the world map's shapes cannot load, the map is skipped and the table still lists every country. If the report itself cannot load, the message **Failed to load the locations report** appears.

With the Locations Report, you can see exactly where your customers are and decide which markets deserve more of your attention.
