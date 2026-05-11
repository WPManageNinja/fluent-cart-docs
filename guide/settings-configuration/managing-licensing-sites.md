# Customer License Sites (Pro)

This page is for **vendors**: store owners who sell licensed digital products through FluentCart's License module and need to see every **customer site** that has activated one of those licenses.

If you're trying to activate **your own** FluentCart Pro license (the one you bought to unlock Pro features), see [Your FluentCart Pro License](/guide/settings-configuration/licensing-settings) instead.

The Sites view gives you a complete picture of every site running one of your licenses — without scrolling through individual licenses to find which domains are using them. You can see the full activation footprint at a glance, drill into any single site, and filter the list to surface exactly the activations you care about.

## Accessing Licensing Sites

1.  From your WordPress dashboard, navigate to **FluentCart Pro**.
2.  Click on **Licenses** in the top menu bar.
3.  Open the **Sites** tab from the secondary navigation.

You can also reach this view from any single license — click the **Sites** breadcrumb to jump back to the full list.

## Sites List View

The Sites screen is a sortable, filterable table of every domain currently using one of your licenses. Use it as a directory of "who is running my software where."

For each activated site, the table shows:

* **Site URL:** The domain where the license is active. Click the URL to open the **[Site Detail View](#site-detail-view)** for that site.
* **Customer:** The customer who owns the license for this activation. Click the customer name to open their full customer profile.
* **Activated Licenses:** The number of distinct licenses currently active on this site (a single site can run multiple of your products).
* **Status:** A quick health badge — Active, Expired, or Disabled — for the site's activations.
* **Last Update:** The most recent date and version on which the site checked in for an update. A blank value means the site has not yet phoned home.

The list supports search, status filters, and the standard FluentCart **Advanced Filter** so you can scope it down by license, customer, expiration window, or activation count. See [Advanced Filtering](#advanced-filtering) below.

<!-- TODO: screenshot of Sites list -->

## Site Detail View

Click any site URL to open the **Site Detail View** — a single screen showing everything tied to that one domain. The detail view is split into two columns:

### Activated Licenses

The main content area shows every license currently active on this site, broken out into a table:

* **Product:** The product the license unlocks. Click to jump to the product's edit page.
* **Status:** Active, Expired, or Disabled, shown as a colored badge.
* **License Key:** The first twelve characters of the key, with a copy icon to grab the full key. Click the truncated key to open the full **License Detail** view.
* **Activations:** How many of the license's allowed activation slots this site occupies. Format is `<used> / <limit>` — `Unlimited` shows when no cap is set.
* **Expiration:** The date the license expires, or **Lifetime** for licenses sold without a renewal cycle.
* **Last Update:** The version the site last received plus the date it received it. Blank if the site has never updated.

If the site has no active licenses (e.g., all activations have been revoked), the table shows a friendly empty state instead.

### Customer Information

The right-hand sidebar surfaces the customer who owns the activations on this site:

* **Name and email** with a direct link to the customer profile.
* **Customer lifetime value** so you can quickly see how much business this account has driven.
* **Total amounts** are now formatted using your store's currency settings — including thousand separators and the configured currency position — so the figures match what you see everywhere else in FluentCart Pro.

::: info
Customer profile and amount formatting in the Site Detail View were both polished in v1.3.27 — if you remember either of these looking off in earlier versions, the latest release fixes both.
:::

<!-- TODO: screenshot of Site Detail View -->

## Site Pages

From the Site Detail View, you can navigate to per-site pages without losing context — the breadcrumb at the top always shows **Licenses → Sites → \<site URL>**, and clicking back into **Sites** restores the previous filter and search state.

This makes investigating a specific customer's setup fast: open the customer's site, review their activated licenses, jump into a specific license, then click the breadcrumb to return to the same filtered Sites list you started from.

## Advanced Filtering

Above the Sites table you'll find the standard FluentCart filtering tools.

### Quick Filters

* **All:** Every activated site.
* **Active:** Sites whose licenses are all currently valid.
* **Expired:** Sites with at least one expired license still on file.
* **Disabled:** Sites where activations have been manually disabled.

### Advanced Filter

Click the **Advanced Filter** toggle to open the filter builder and combine multiple conditions for highly targeted lists. You can add rules based on:

* **Site URL** — match exact domains or substrings.
* **Customer properties** — name, email, or customer ID.
* **License properties** — product, status, license key, expiration, activation limit.
* **Activation count** — find sites running a specific number of your products.

Combine multiple rules with AND/OR groups to build queries like *"all sites whose license expires in the next 30 days, run by customers in the EU"* — useful for renewal outreach and compliance audits.

<!-- TODO: screenshot of Advanced Filter on Sites -->

## Common Workflows

* **Renewal outreach:** Filter for **Expired** status plus an expiration date in the past 60 days, then export the customer list and reach out about renewals.
* **Troubleshooting:** A customer reports an issue — search the Sites list by their domain, open the **Site Detail View**, and confirm which products and versions they're running before opening a support thread.
* **License audit:** Filter by activation count `>` your typical limit to surface sites where customers might be over-activated, then decide whether to reach out or offer an upgrade plan.
* **Per-product adoption:** Filter by **Product** to see exactly which sites are running a specific product — useful before deprecating a feature or scheduling a major version bump.
