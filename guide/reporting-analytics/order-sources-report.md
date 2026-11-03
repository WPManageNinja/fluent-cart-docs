# Order Sources Report

The **Order Sources** report answers the question every store owner eventually asks: *where are my paying customers actually coming from?*

It groups your orders by the UTM parameters attached to them, so you can see which campaign, which channel, and which specific ad produced real revenue, not just traffic. A campaign that sends thousands of visitors but produces four orders looks very different here than it does in your analytics tool.



## Accessing the Order Sources Report

Go to your WordPress dashboard, then **FluentCart → Reports**, and open the **Sources** tab. The page itself is titled **Order Sources**.

![Screenshot of the Order Sources report with the Sources tab selected in the Reports sidebar](/images/reporting-analytics/orders-source/order-source-1.webp)

## New Customers by Channel

The top of the page looks at the new customers you won in the period and where their first purchase came from.

* **New customers:** The number of new customers in the period.
* **With a known source:** The share of those customers whose first purchase has a known source, with the share of their revenue in brackets.
* **Top channel:** The channel that brought in the most new customers.

The **New Customers by Channel** chart sorts each new customer's first purchase into a channel: **Email**, **Paid ads**, **Social**, **AI assistants**, **Search**, **Other websites**, **Other campaigns**, or **Direct or unknown**. Your channel rules are applied first, then the purchase's UTM tags, then the website that sent it.

The **Channels** table below the chart shows, for each channel, the **New customers**, what they spent on their **First orders**, their **Average lifetime value**, the share who **Bought again**, and their **Refund rate**.

::: info
With **FluentCart Pro**, the **Channel rules** button lets you name your own channels from UTM source, medium, campaign, or referring site (for example a partner or newsletter channel), and mark your other sites as direct.
:::

## Report Columns and Metrics

Below the channels, the sources table groups your orders by their UTM values. Every order matching a row is rolled up into it.

### Group By

Use the **Group by** dropdown above the table to choose what each row stands for:

* **Campaign:** the campaign the link belonged to (`utm_campaign`). This is the default.
* **Source:** where the traffic came from, such as `google` or `newsletter` (`utm_source`).
* **Medium:** the kind of channel, such as `cpc` or `email` (`utm_medium`).
* **Source / Medium:** source and medium together.
* **Term:** the keyword, for paid search (`utm_term`).
* **Content:** which variant of an ad or link was clicked (`utm_content`).
* **Campaign / Source / Medium:** all three together.

With **FluentCart Pro**, you can also group by **Product**, **Variation**, **Day**, **Week**, **Month**, or **Referrer domain**. Without Pro, these options are marked **(Pro)**. A **Day**, **Week**, or **Month** grouping also draws a chart above the table.

By default, only orders that carry the field you group by appear. Turn on **Include (none)** to add a **(none)** row for orders without that source data, so the table adds up to your revenue for the same filters. A row whose value is missing reads **(not set)**.

![Screenshot of the Sources table header with the Group by dropdown, the Include (none) switch, the Advanced Filter switch and the Gross / Net switch](/images/reporting-analytics/orders-source/order-source-table-controls.webp)

### Revenue Metrics

* **Orders:** how many orders came from this source.
* **Gross:** total paid across those orders.
* **Net:** gross sales minus refunds and tax. This is the figure to judge a campaign on.
* **Lifetime Value:** the first-order net plus later payments, such as renewals of those first orders, whatever their date.
* **Average Order:** gross sales divided by order count.
* **Average Order Net:** net sales divided by order count.
* **Refund Rate:** the share of these orders refunded.
* **Refunds:** the amount refunded on these orders.

The **Gross / Net** switch above the table toggles which pair of these the table displays: **Gross** shows Gross and Average Order, **Net** shows Net and Average Order Net. A change badge beside the sales figure compares it with the comparison period.

Click a column heading to sort the table. The **Total** row adds up every row. Spellings that differ only in case, `_`, `-`, or spaces count as one source.

Click the download icon to export the table as a CSV file.

::: tip Judge campaigns on Net, not Gross
Gross includes tax and orders that were later refunded. A campaign that drives high-refund purchases can look strong on gross and poor on net. Net is the honest number.
:::

## Filtering the Report

### Date Range

The date selector at the top scopes the report to a period. Every metric recalculates, and comparison figures update alongside it so you can see whether a source is growing or fading.

### Search

The **Search** field above the table filters the rows by name as you type. Click a value in the table to search for it. While you search, the total row reads **Total (all sources)**, because it still covers every source, and the CSV export holds only the rows the search shows.

### Advanced Filters

Beyond the date range, you can narrow the report using the same advanced filter engine that powers the Orders screen. That means you can answer much more specific questions: *which campaigns produced orders over $100?*, *which sources brought in subscription customers?*, *how did this campaign perform for customers in Germany?*

Turn on the **Advanced Filter** switch above the table, click **+ Add**, and pick a property group (**Order Property**, **Customer Property**, **Transactions Property**, **Utm Property**, or **Tax Property**), then choose a field within it, an operator, and a value. Conditions can be combined into groups joined with **AND** / **OR**, so complex questions are expressible without exporting anything.

Available operators depend on the field, and include **Equals** for exact matches (including matching an order by its order hash or a payer's email address) and **Includes** for partial text matches on fields such as customer email.

::: info Advanced filtering requires FluentCart Pro
The Order Sources report itself is available to every FluentCart store. Advanced filters on it are a Pro feature.
:::

![Screenshot of the Advanced Filter panel open with Order Property, Customer Property, Transactions Property, Utm Property, and Tax Property groups, an OR condition, and Apply and Reset buttons](/images/reporting-analytics/orders-source/filter-2.webp)

## How FluentCart Attributes an Order

Understanding what the report is measuring makes it far more useful.

### Last touch wins

FluentCart records attribution on **every** order using a last-touch model. When a visitor arrives through a tagged link, that marketing touch replaces whatever was previously stored for them. Whichever campaign brought them back for the visit where they actually bought is the one credited.

This matters when a customer discovers you through one campaign and returns weeks later through another. Only the returning touch is credited. The report shows what closed the sale, not what started the relationship.

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

### Consent and stored attribution

To credit the right campaign at checkout, FluentCart has to remember the marketing touch that brought a visitor in, and it does that by storing the campaign values in the visitor's own browser. Privacy rules such as GDPR and Germany's TDDDG treat that storage the same way they treat cookies, and campaign attribution is not something a shop strictly needs in order to sell.

FluentCart therefore announces every attribution write before it happens, so a consent manager can step in and decide. Three things can follow:

* **No consent integration is present.** The write goes ahead exactly as it always has, which is the case for most stores. Nothing changes and nothing needs configuring.
* **A consent manager holds the decision.** The campaign values stay in page memory only and are never written to the device. If the visitor accepts on that same page, the touch is stored and the campaign is not lost.
* **The visitor refuses, or withdraws later.** Nothing is written, and anything already stored is cleared, so a withdrawal takes effect on past data rather than only on future visits.

Orders that arrive without stored attribution still appear in your reports. They simply carry no marketing source, the same as any untagged visit.

::: info
Wiring your consent banner to this gate takes a few lines of JavaScript, and there is a working example among the [code snippets](/guide/customization-and-themes/code-snippets).
:::

### Where to see a single order's attribution

The report shows aggregates. To see the attribution recorded against one specific order, open the order and check its source card; see [Order Details Overview](/guide/store-management/orders-management/order-details-overview).

## Using the Report

**Find your most profitable channel.** Sort by Revenue and compare Average Order Net across sources. A channel with fewer orders but a much higher average order value is often worth more than a high-volume one.

**Check whether a campaign paid for itself.** Filter to the campaign's run dates, read Revenue, and compare against what you spent.

**Spot untagged traffic.** If your report totals are far below your actual order count, most of your orders are arriving without UTM tags. Tag your outbound links (email campaigns, ads, affiliate links, social posts) and the report fills in.

**Compare ad variants.** With `utm_content` set per creative, the UTM Content column tells you which variant actually converted.


