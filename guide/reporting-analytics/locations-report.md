# Locations Report

The **Locations** report shows where your customers buy from. It ranks countries by net sales on a map and a table, and with Pro you can open any country to see its states and cities. Use it to find your strongest markets, plan shipping and tax, and spot places that grow or decline.

## Accessing the Locations Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Locations** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count).

## Key Location Metrics

Hover over the info icon beside a card to read its definition.

* **Net sales:** What customers paid in the range, less refunds and tax, across all locations.
* **International sales:** Net sales from outside your store country, as a share of all net sales. The store country comes from your store settings.
* **International new customers:** Customers outside the store country whose first purchase was in the range.
* **Countries with sales:** Countries with at least one order in the range.
* **Top country:** The country with the most net sales, and its share.

The two international cards appear when your store settings have a store country.

<!-- TODO(screenshot): locations-overview.webp | /reports/locations, Last 30 days: the location cards, the world map and the Address dropdown | arrow on the Address dropdown -->

## Map and Table

The map shades each country by its net sales. The table below it has one row per country and a **Total** row.

* **Orders**, **Customers**, **New Customers**, and **Returning Customers.** A customer counts once in each place. If they are new in one order and returning in another for the same place, they count as new.
* **Net**, **Change** (against the comparison period), and **Share of Net.**
* **Refunds**, **Refund Rate**, and **Average Order (Net).**

Use the **Address** dropdown to place orders by their **Billing** or **Shipping** address. Each order is placed by its latest address. Renewals without an address of their own use their original order, and orders with only a country use the customer's country. With a product filter, the money is those products' share of each order. Click a heading to sort, and use the download icon to export the table as a CSV file.

When one place holds most of a country's orders, a note warns you. That is often a checkout default rather than real demand, so check your address settings before reading it as a trend.

## States, Cities, and Movers (Pro)

With FluentCart Pro, the report goes deeper than countries:

* **States and cities:** Click a country to see its states, and a state to see its cities. Use the breadcrumb above the table, starting at **All countries**, to go back up.
* **Lifetime Value** and **Bought Again:** Two more columns: what the new customers won in each place have spent with you to date, and the share of them who made a second purchase. Renewals do not count.
* **Biggest Movers:** The places with the largest changes in net sales against the comparison period, split into **Growing** and **Declining**, at the level you are viewing.

::: info States, cities, and movers require FluentCart Pro
Without Pro, the report shows countries only, and a locked preview with sample data shows the rest.
:::

<!-- TODO(screenshot): locations-drilldown.webp | /reports/locations with Pro active: one country opened to its states, breadcrumb "All countries / <country>", Biggest Movers card visible | arrow on the breadcrumb -->

The Locations report now shows you where your customers are and which places are growing.
