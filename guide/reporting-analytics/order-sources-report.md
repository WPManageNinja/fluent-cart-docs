# Order Sources Report

The **Sources** report answers the question every store owner eventually asks: *where do my paying customers come from?* It groups new customers into channels such as email, search, and paid ads, and it lists your orders by the UTM tags on the links that brought them in. A campaign that sends thousands of visitors but few orders looks very different here than in your analytics tool.

## Accessing the Order Sources Report

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu, and click on the **Sources** tab.

The date range, comparison period, currency, and **Filters** menu work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). Money figures on this page use the same [net sales](/guide/reporting-analytics/how-reports-count#net-sales) as every other report.

## New Customers by Channel

The top of the page looks at each new customer's first purchase and the channel it came from. FluentCart decides the channel in this order: your own channel rules first, then the order's UTM tags, then the website that sent the visitor.

Three cards sum up the range:

* **New customers:** Customers whose first purchase was in the range.
* **With a known source:** The share of those customers whose channel is known, with their share of first-order revenue.
* **Top channel:** The channel that brought the most new customers, not counting **Direct or unknown**.

The built-in channels are **Email**, **Paid ads**, **Social**, **AI assistants**, **Search**, **Other websites**, **Other campaigns**, and **Direct or unknown**. The **New Customers by Channel** chart stacks them for each period. Only the channels your store has appear.

![Screenshot of the channel cards and the New Customers by Channel chart](/images/reporting-analytics/orders-source/sources-channels.webp)

### Channels Table

The **Channels** table shows what each channel's new customers spent first, what they have spent since, and how many came back.

* **Channel**, **New customers** (with their share), **First orders**, **Average lifetime value**, **Bought again**, and **Refund rate**.

### Channel Rules (Pro)

Click **Channel rules** to name your own channels. Each rule matches orders by **UTM source**, **UTM medium**, **UTM campaign**, or **Referrer domain**, with **is**, **contains**, or **starts with**. Combine conditions with **and**, or add an **OR** group. Your rules run first, from top to bottom, and the first match decides the channel. Orders that no rule matches use the built-in channels. Rules apply to past orders too.

Under **Your own domains**, list your other sites, one per line. Visits from these domains and their subdomains count as direct, like visits from this store. Only users who can manage store settings can change the rules.

::: info Channel rules require FluentCart Pro
Without Pro, the **Channel Rules** dialog shows a locked preview with sample data.
:::

![Screenshot of the Channel Rules dialog with a sample channel](/images/reporting-analytics/orders-source/sources-channel-rules.webp)

## Order Sources Table

The **Order Sources** table lists the orders in the range by their UTM tags. Only orders with source data appear, unless you turn on **Include (none)**.

### Grouping

Use the **Group by** dropdown to choose what each row stands for:

* **Campaign**, **Source**, **Medium**, **Source / Medium**, **Term**, **Content**, or **Campaign / Source / Medium:** Group by the matching UTM tags, shown as **UTM Campaign**, **UTM Source**, **UTM Medium**, **UTM Term**, and **UTM Content** columns.
* **Product**, **Variation**, **Day**, **Week**, **Month**, or **Referrer domain** (Pro): Group by what was bought, by period, or by the website that sent the visitor. The period groupings also draw a chart above the table.

A row with no value for a tag shows **(not set)**. Spellings that differ only in case, `_`, `-`, or spaces count as one.

::: info Product, variation, period, and referrer groupings require FluentCart Pro
Without Pro, these options are marked **(Pro)** and cannot be selected.
:::

### Columns

* **Orders:** How many orders came from the row, with its change against the comparison period.
* **Gross** or **Net:** Use the **Gross** / **Net** switch to choose. **Net** is net sales, the figure to judge a campaign on.
* **Lifetime Value:** The first-order net plus later payments, such as renewals of these first orders, at any date.
* **Average Order** or **Average Order Net:** Follows the **Gross** / **Net** switch.
* **Refund Rate** and **Refunds.**

The **Total** row at the bottom covers every row that matches your filters. Click a column heading to sort, and use the download icon to export every row as a CSV file.

* **Include (none):** Adds a **(none)** row for orders without this source data, so the table adds up to the Revenue report for the same filters.
* **Search:** Filters the rows by name. Click a value in the table to search for it.

![Screenshot of the Order Sources table grouped by Campaign / Source / Medium](/images/reporting-analytics/orders-source/sources-table.webp)

### Advanced Filter (Pro)

Turn on the **Advanced Filter** switch above the table, click **+ Add**, and pick a property group (**Order Property**, **Customer Property**, **Transactions Property**, **Utm Property**, or **Tax Property**). Then choose a field, an operator, and a value. Combine conditions into groups joined with **AND** or **OR**. This answers questions such as *which campaigns brought orders over $100?* The search box hides while the advanced filter is on.

::: info Advanced filtering requires FluentCart Pro
The Order Sources report itself is available to every FluentCart store. Without Pro, the **Filters** menu in the title bar is the way to narrow it by product.
:::

![Screenshot of the Advanced Filter panel with two conditions joined by OR](/images/reporting-analytics/orders-source/sources-advanced-filter.webp)

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

**Find your most profitable channel.** Sort the Channels table by **Average lifetime value**. A channel with fewer new customers but a higher lifetime value is often worth more than a high-volume one.

**Check whether a campaign paid for itself.** Set the range to the campaign's run dates, switch to **Net**, and compare the campaign's net sales with what you spent.

**Spot untagged traffic.** Turn on **Include (none)**. A large **(none)** row means most orders arrive without UTM tags. Tag your outbound links (emails, ads, affiliate links, social posts) and the report fills in.

**Compare ad variants.** With `utm_content` set per creative, group by **Content** to see which variant converted.

The Sources report now shows you which channels and campaigns bring in paying customers.
