# Customer License Sites (Pro)

This page is for **vendors**: store owners who sell licensed digital products through FluentCart's License module and need to see every **customer site** that has activated one of those licenses.

If you're trying to activate **your own** FluentCart Pro license (the one you bought to unlock Pro features), see [Your FluentCart Pro License](/guide/settings-configuration/licensing-settings) instead.

The Sites view gives you a complete picture of every site running one of your licenses — without scrolling through individual licenses to find which domains are using them. You can see the full activation footprint at a glance, drill into any single site, and filter the list to surface exactly the activations you care about.

## Accessing Licensing Sites

Go to **FluentCart Pro > Licenses** and click the **Sites** button at the top right of the Licenses screen. The screen that opens is titled **Activated Sites**.

You can also reach this view from any single license: click the **Sites** breadcrumb to jump back to the full list.

## Sites List View

The Sites screen is a sortable, filterable table of every domain currently using one of your licenses. Use it as a directory of "who is running my software where."

For each activated site, the table shows:

* **Site URL:** Opens the **[Site Detail View](#site-detail-view)** for that site. Local or staging sites carry a **local** badge.
* **Products:** Products licensed on the site.
* **Active Licenses:** Number of active licenses.
* **Customer:** Customer names, shown as plain text.
* **Last Activity:** When the site last checked in.
* **Created At:** When the site was first registered.

You can show or hide these columns. Search by site URL, or use **Advanced Filter**. See [Advanced Filtering](#advanced-filtering) below.

<!-- TODO: screenshot of Sites list -->

## Site Detail View

Click any site URL to open the **Site Detail View**, a single screen showing everything tied to that one domain. The detail view is split into two columns.

### Activated Licenses

The main content area shows every license currently active on this site, broken out into a table:

* **Product:** The product the license unlocks. Click to jump to the product's edit page.
* **Status:** Active, Expired, or Disabled, shown as a colored badge.
* **License Key:** The first twelve characters of the key, with a copy icon to grab the full key. Click the truncated key to open the full **License Detail** view.
* **Activations:** How many of the license's allowed activation slots this site occupies. Format is `<used> / <limit>` — `Unlimited` shows when no cap is set.
* **Expiration:** The date the license expires, or **Lifetime** for licenses sold without a renewal cycle.
* **Last Update:** The version the site last received plus the date it received it. Blank if the site has never updated.

If the site has no active licenses (e.g., all activations have been revoked), the table shows a friendly empty state instead.

### Related Orders

Below the licenses, the **Related Orders** card lists the orders tied to this site's licenses, with each order's **ID**, **Amount**, **Date**, **Payment Method**, and **Status**.

### Sidebar

The right-hand sidebar holds three cards:

* **Site Details:** **Site URL**, an **Environment** badge for local or staging sites, **Platform Version**, **Server Version**, **Registered At**, and **Last Update Check**.
* **Summary:** **Total Activations**, **Active**, **Products**, and **Orders**.
* **Customers:** Each customer's name, linked to their customer profile, plus their email.

<!-- TODO: screenshot of Site Detail View -->

## Site Pages

From the Site Detail View, you can navigate to per-site pages without losing context. The breadcrumb at the top shows **Licenses → Sites → \<site URL>**, and **Back to Sites** returns you to the list.

This makes investigating a specific customer's setup fast: open the customer's site, review their activated licenses, jump into a specific license, then return to the Sites list.

## Advanced Filtering

Above the Sites table you'll find the search box and the standard FluentCart **Advanced Filter**.

### Advanced Filter

Click the **Advanced Filter** toggle to open the filter builder and combine multiple conditions for highly targeted lists. You can add rules based on:

* **Site Property:** Site URL, Platform Version, Server Version, Registered Date.
* **Product:** By Products.
* **License Property:** Activation Status (Active / Inactive), Active License Count.

Combine multiple rules with AND/OR groups to build queries like *"all sites running a specific product with no active license"*, useful for renewal outreach and compliance audits.

<!-- TODO: screenshot of Advanced Filter on Sites -->

## Common Workflows

* **Renewal outreach:** Filter **Activation Status = Inactive** to find sites whose licenses are no longer active, open each site to see its customers, and reach out about renewals.
* **Troubleshooting:** A customer reports an issue: search the Sites list by their domain, open the **Site Detail View**, and confirm which products and versions they're running before opening a support thread.
* **License audit:** Filter by **Active License Count** to surface sites running more licenses than you expect, then decide whether to reach out or offer an upgrade plan.
* **Per-product adoption:** Filter **By Products** to see exactly which sites are running a specific product, useful before deprecating a feature or scheduling a major version bump.
