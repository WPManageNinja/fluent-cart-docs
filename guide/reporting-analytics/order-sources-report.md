# Order Sources Report

The **Order Sources** report answers the question every store owner eventually asks: *where are my paying customers actually coming from?*

It groups your orders by the UTM parameters attached to them, so you can see which campaign, which channel, and which specific ad produced real revenue — not just traffic. A campaign that sends thousands of visitors but produces four orders looks very different here than it does in your analytics tool.

<!-- TODO(screenshot): Order Sources report showing the grouped table with UTM columns and revenue metrics -->

## Accessing the Order Sources Report

Go to your WordPress dashboard, then **FluentCart → Reports**, and open the **Order Sources** tab.

Only orders that carry a UTM source appear here. Orders placed by someone who came to your store directly, through an untagged link, or over a channel you never tagged are excluded — the report would otherwise be dominated by a single meaningless "unknown" row.

## Report Columns and Metrics

Each row is a unique combination of **campaign, source, and medium**. Every order matching that combination is rolled up into it.

### UTM Columns

Use the **Columns** control above the table to show or hide any of these:

* **UTM Campaign** — the campaign the link belonged to (`utm_campaign`).
* **UTM Source** — where the traffic came from, such as `google` or `newsletter` (`utm_source`).
* **UTM Medium** — the kind of channel, such as `cpc` or `email` (`utm_medium`).
* **UTM Term** — the keyword, for paid search (`utm_term`).
* **UTM Content** — which variant of an ad or link was clicked (`utm_content`).
* **UTM ID** — your own campaign identifier (`utm_id`).

### Revenue Metrics

* **Orders** — how many orders came from this source.
* **Gross Sales** — total paid across those orders.
* **Net Sales** — gross sales minus refunds, tax, and shipping tax. This is the figure to judge a campaign on.
* **Average Order** — gross sales divided by order count.
* **Average Order Net** — net sales divided by order count.

Rows are sorted by gross sales, highest first, so your best-performing sources are always at the top.

::: tip Judge campaigns on Net Sales, not Gross
Gross Sales includes tax, shipping tax, and orders that were later refunded. A campaign that drives high-refund purchases can look strong on gross and poor on net. Net Sales is the honest number.
:::

## Filtering the Report

### Date Range

The date selector at the top scopes the report to a period. Every metric recalculates, and comparison figures update alongside it so you can see whether a source is growing or fading.

### Advanced Filters

Beyond the date range, you can narrow the report using the same advanced filter engine that powers the Orders screen. That means you can answer much more specific questions — *which campaigns produced orders over $100?*, *which sources brought in subscription customers?*, *how did this campaign perform for customers in Germany?*

Build a filter by choosing a field, an operator, and a value. Conditions can be combined into groups, so complex questions are expressible without exporting anything.

Available operators depend on the field, and include **Equals** for exact matches — including matching an order by its order hash or a payer's email address — and **Includes** for partial text matches on fields such as customer email.

::: info Advanced filtering requires FluentCart Pro
The Order Sources report itself is available to every FluentCart store. Advanced filters on it are a Pro feature.
:::

## How FluentCart Attributes an Order

Understanding what the report is measuring makes it far more useful.

### Last touch wins

FluentCart records attribution on **every** order using a last-touch model. When a visitor arrives through a tagged link, that marketing touch replaces whatever was previously stored for them. Whichever campaign brought them back for the visit where they actually bought is the one credited.

This matters when a customer discovers you through one campaign and returns weeks later through another. Only the returning touch is credited — the report shows what closed the sale, not what started the relationship.

### Ad click identifiers

Alongside the six standard UTM parameters, FluentCart captures the click identifiers ad platforms append to your links:

| Identifier | Platform |
|---|---|
| `gclid` | Google Ads |
| `gbraid`, `wbraid` | Google Ads, for iOS clicks where `gclid` is unavailable |
| `gad_campaignid`, `gad_source` | Google Ads campaign details carried on the URL itself |
| `fbclid` | Meta (Facebook and Instagram) |
| `msclkid` | Microsoft Advertising |

These appear on the order's source card rather than as report columns, and they're what lets you reconcile an individual FluentCart order against the click record in your ad platform. They also survive situations where cookie-based attribution fails, because they travel on the URL.

### Referring URL

When a visitor arrives without UTM parameters, FluentCart records the referring URL instead. Referrals from your own domains are ignored, so a customer moving between your own pages doesn't overwrite the real external source that brought them.

### Where to see a single order's attribution

The report shows aggregates. To see the attribution recorded against one specific order, open the order and check its source card — see [Order Details Overview](/guide/store-management/orders-management/order-details-overview).

## Using the Report

**Find your most profitable channel.** Sort by Net Sales and compare Average Order Net across sources. A channel with fewer orders but a much higher average order value is often worth more than a high-volume one.

**Check whether a campaign paid for itself.** Filter to the campaign's run dates, read Net Sales, and compare against what you spent.

**Spot untagged traffic.** If your report totals are far below your actual order count, most of your orders are arriving without UTM tags. Tag your outbound links — email campaigns, ads, affiliate links, social posts — and the report fills in.

**Compare ad variants.** With `utm_content` set per creative, the UTM Content column tells you which variant actually converted.

## Related

- [Orders Report](/guide/reporting-analytics/orders-report) — order performance by customer, day, and hour
- [Revenue Report](/guide/reporting-analytics/revenue-report) — gross sales, net revenue, refunds, taxes
- [Order Details Overview](/guide/store-management/orders-management/order-details-overview) — attribution on a single order
- [Reports Dashboard Overview](/guide/reporting-analytics/reports-dashboard-overview) — the summary dashboard
