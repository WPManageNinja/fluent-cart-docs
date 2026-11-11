# Licenses Report

The **Licenses** report shows how your software licenses are doing: how many you issue, where customers use them, which licenses are close to their site limit, and which plugin versions your customers run. Use it to find customers who still need help getting started and expired licenses that are good renewal leads.

::: info
The Licenses report belongs to **FluentCart Pro**. It appears in the Reports menu while the **Product Licensing** module is switched on, and only for roles that can view both reports and licenses.
:::

## Accessing the Licenses Report

Go to your WordPress dashboard, then go to **FluentCart > [Reports](/guide/reporting-analytics/reports-dashboard-overview)** and click **Licenses** in the reports menu on the left.

<!-- TODO(screenshot): Licenses report page with the Licenses item selected in the reports sidebar, the summary cards, and the filter bar. -->

## Report Filters

The **Date Range** button in the filter bar sets the period for the figures that depend on a range, such as **New Licenses** and the trend chart. Other cards describe your licenses as of today, and each card says which kind it is.

## Summary Cards

Six cards sit at the top of the page. Hover over the info icon beside a card to read its definition. A small caption under each card tells you whether it follows the date range (**In date range**) or shows today's picture (**Today**).

* **New Licenses:** Licenses issued in the date range.
* **Site Activations:** License activations on production sites in the date range. A site activated with a new license counts again. Local and staging sites are left out, and so are sites deactivated since.
* **Valid Licenses:** Active licenses and licenses not activated yet, as of today. The date range does not apply.
* **Live Sites:** Production sites on valid licenses, as of today.
* **Not Activated:** Valid licenses that were never activated on a site. These customers may need help to get started.
* **Expired, Still Installed:** Expired licenses that still have production sites. They are your best renewal leads.

## Licenses and Activations

The **Licenses and Activations** chart plots new licenses and production-site activations over the date range, in your site timezone.

* **Group by:** Choose **Auto**, **Daily**, **Monthly**, or **Yearly**. **Auto** picks a grouping that fits the length of the range.
* **Cumulative:** Tick this to switch from new figures per period to running totals. The chart then shows the total number of licenses and production-site activations at the end of each period, and a site activated with two licenses counts twice.

When nothing happened in the range, the chart reads **No licenses or activations in this date range**.

## Products

The **Products** table shows licenses and sites for each product and variation, as of today. The date range does not apply here.

* **Licenses:** All licenses for the product or variation.
* **Active:** Licenses that are in use.
* **Not activated:** Valid licenses with no site yet.
* **Expired:** Licenses past their expiry.
* **Live sites:** Production sites on valid licenses.
* **Site limit use:** The average number of sites used per valid license with a limit, out of the average limit. It reads **Unlimited** when 90% or more of the valid licenses have no limit.
* **At limit:** Valid licenses that use every site they allow. These are candidates for a bigger plan.
* **Expired, installed:** Expired licenses that still have production sites.

Click a product to see its versions in the next section. Use the **Export CSV** button above the table to download the table. The CSV also includes the **Disabled** count, the average sites used, and the average site limit.

## Versions in Use

The **Versions in Use** card shows which plugin versions your customers' production sites run, as of today. Pick a product from the **Select a product** dropdown, or click one in the Products table.

* **On the latest version:** The share of sites on the release version set in your license settings. When no release version is set, the card says **No release version in the license settings**.
* **Sites that report a version:** Sites that have checked for updates and told you their version.
* **Sites with no version yet:** Production sites that have not reported a version.
* **Version bars:** One bar per version, newest first, split by **Valid license** and **Expired or disabled license**. The newest version carries a **Latest** badge, and smaller versions are grouped under **Other**.

A site reports its version only when it checks for updates, so older installs may show none.

## Site Environment

The **Site Environment** card shows the **Server** and **Platform** versions of the selected product's production sites, as each site reports them. Use it to choose the minimum requirements for your next release. Sites that have not reported a value are counted in a note under each chart.

## How Sites Are Counted

* Only production sites are counted. Local and staging sites are left out of site counts.
* A site that has both an expired license and a newer one counts once, as valid.
* Activations of licenses that were deleted are skipped.

Your license figures now sit alongside your sales reports, so you can follow a license from purchase to renewal.
