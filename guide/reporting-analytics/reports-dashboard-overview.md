# Reports Dashboard Overview

FluentCart's **Reports** section is your built-in business analytics hub. It turns your orders, refunds, subscriptions, and customers into clear charts and tables, so you can understand how your store is doing without exporting data to an external tool.

The **Overview** page is the first stop. It gathers the headline figure from each detailed report onto one screen, flags anything that needs your attention, and links you straight to the report that explains each number.

## Accessing the Reports

Go to your WordPress dashboard, then go to **FluentCart** > **Reports**. The section always opens on the **Overview** page, and the menu on the left lets you switch to any other report.

## The Full Report Section

The Reports menu is divided into focused pages, each covering one area of your store:

* **Overview:** A one-screen summary of sales, customers, refunds, subscriptions, and your top products, channels, and countries.
* **Orders:** Order counts, order value, and how your orders are spread over time.
* **Revenue:** What you actually earned after refunds and tax, with trend charts and breakdowns.
* **Refunds:** How often and how much money goes back to customers.
* **Subscriptions:** Recurring revenue and subscriber movement. Its sub-pages cover **Retention**, **Cohorts**, **Future Renewals**, and [Installments](/guide/reporting-analytics/installments-report).
* **Products:** How each product sells. Its **Compare** sub-page puts the products you pick side by side.
* **Customers:** New and returning customers and what they are worth.
* **Sources:** Orders grouped by marketing channel, campaign, source, and medium.
* **Coupons:** How much discount you give and how each coupon code performs. See the [Coupons Report](/guide/reporting-analytics/coupons-report).
* **Payment Methods:** Sales, refunds, and payment failures for each payment gateway. See the [Payment Methods Report](/guide/reporting-analytics/payment-methods-report).
* **Locations:** Sales and customers by country, with a world map. See the [Locations Report](/guide/reporting-analytics/locations-report).
* **Export:** An accounting export of your sales and refunds. This page is added by FluentCart Pro.

::: info
The Reports menu is **extensible**. When you install a FluentCart add-on that ships its own reports, those pages appear automatically in the same menu, after the built-in ones. There's nothing to configure.
:::

## The Overview Page

The **Overview** follows the date range and compare period you pick in the filter bar at the top of the page, so every card and list covers the same period. Two parts are exceptions because they describe your store right now or a fixed window: the subscription cards marked **(now)** and the **Last 12 Months** chart ignore the date range.

The Overview is store-wide. It has no **Filters** menu, so an **Order Type** or **Products** filter you set on another report does not apply here. It also reads one currency at a time, so its **Currency** chip lists your individual currencies only, without an **All currencies** option.

![Screenshot of the Overview sales cards and subscription cards with change badges](/images/reporting-analytics/dashboard-overview/overview-cards.webp)

![Screenshot of the Needs Attention card with View report links](/images/reporting-analytics/dashboard-overview/overview-needs-attention.webp)

### Sales Cards

The first row of cards sums up your sales for the selected period. Each card title is a link to the report it comes from, and the info icon beside it explains how the figure is counted.

* **Net sales:** What customers paid in this period, less refunds and tax, counted the same way as on the Revenue report. The title opens the **Revenue** report.
* **Orders:** The number of paid orders placed in this period, renewals included. It links to the **Orders** report.
* **Average order value:** Net sales divided by the number of orders. It links to the **Orders** report.
* **New customers:** Customers whose first purchase was in this period. A renewal never counts as a first purchase. It links to the **Customers** report.
* **Repeat purchase rate:** Of the customers who paid in this period, the share who have made two or more purchases. Renewals are not counted as purchases. This card shows no change badge, because the Customers report has no figure for the compared period.
* **Refund rate:** The share of this period's orders that were refunded in part or in full, matching the headline figure on the **Refunds** report.

Below each figure, a badge shows how it changed against the compared period. Hover over the badge to see the previous value. Amounts change as a percentage of themselves, while rates such as **Refund rate** change in percentage points, shown as **pts**. A green badge is good news and a red one is not, so a rising refund rate shows in red. When you choose **No comparison**, the badges disappear.

### Subscription Cards

If your store has subscriptions, a second row of cards appears:

* **MRR (now):** Your monthly recurring revenue today, as on the Subscriptions report. The date range does not apply.
* **Paying subscriptions (now):** Active subscriptions, discounted first years, and canceled subscriptions that are still in their paid term. The date range does not apply.
* **Churn rate:** Subscriptions that ended in this period, as a share of those active at its start. It changes in percentage points against the compared period.

All three cards link to the **Subscriptions** report. Stores without any subscriptions don't see this row.

### Needs Attention

The **Needs Attention** card lists problems worth acting on. It only appears when at least one of these checks applies:

* **Failed renewals:** Subscriptions with a failed renewal payment, and how much monthly recurring revenue is at risk.
* **High dispute rate:** Your dispute rate is above 0.75%, the level at which card networks start to monitor a store.
* **Failed installment payments:** Installment plans with a failed payment, and how much is still owed.
* **Rising refund rate:** The refund rate rose clearly against the compared period, by at least 2 percentage points and to at least one and a half times the earlier rate. Small swings are ignored.

Each item has a **View report** link to the page where you can investigate it.

### Net Sales Chart

The **Net Sales** chart plots your net sales across the selected period, with the compared period drawn as a dotted line, so you can see at a glance whether you are ahead or behind. The chart groups the timeline automatically from your date range: by day for short ranges, by month for ranges up to a year, and by year beyond that. If there were no sales in either period, it shows **No sales in this period**.

![Screenshot of the Top Products, Top Channels, and Top Countries lists](/images/reporting-analytics/dashboard-overview/overview-top-lists.webp)

### Top Lists

Three short lists rank what drove your sales in the period. Each shows up to five rows, with a bar for each row's share of the total and a **View report** link to the full report.

* **Top Products:** Your best products by net sales. It links to the **Products** report.
* **Top Channels:** The marketing channels that brought in the most new customers. It links to the **Sources** report.
* **Top Countries:** The countries with the most net sales, by billing address. Orders without a known country are left out. It links to the **Locations** report.

When a list has nothing to show, it says so, for example **No product sales in this period** or **No new customers in this period**.

### Last 12 Months

The final chart shows your net sales for each of the last 12 months as bars, with the same month a year earlier drawn as a dotted line. It is counted the same way as the Revenue report. The date range does not apply here, and the current month is still in progress, so its bar is not final.

### Loading and Errors

The Overview loads in stages: the cards at the top appear first, and the lists further down the page load as you scroll to them. If one section cannot load, only that section shows an error with a **Retry** button, and the rest of the page keeps working. A card whose figure failed to load shows **Unavailable** instead of a misleading zero, and the message **Some figures could not be loaded.** offers a retry. If a Needs Attention check fails, the card warns that the list may be incomplete.

## Choosing How a Trend Chart Is Grouped

The **Orders**, **Revenue**, **Refunds**, **Subscriptions**, **Products**, **Customers**, and **Compare** pages each carry a trend chart with a small grouping dropdown above it. That dropdown decides how tightly the timeline is bucketed, and it changes the shape of what you see without changing the numbers underneath.

* **Auto:** Lets FluentCart pick the grouping from the date range you selected. This is the default.
* **Daily:** One point per day. Best for spotting the exact day a campaign landed or a problem started.
* **Monthly:** One point per month, which smooths daily noise into a readable trend.
* **Yearly:** One point per year, for long-range comparisons.

On the **Orders**, **Revenue**, **Refunds**, and **Subscriptions** charts, **Auto** tells you what it decided. While it is the active choice, the option reads **Auto (Daily)**, **Auto (Monthly)**, or **Auto (Yearly)** to show which grouping your current date range resolves to. Ranges up to about three months group daily, up to a year group monthly, and anything longer groups yearly. The label goes back to a plain **Auto** while you have picked a grouping yourself.

Pick a grouping explicitly when Auto is not what you want, such as reading a full year day by day to find a single spike.

<!-- TODO(screenshot): Verify against the rebuilt Orders page and reshoot if it changed. A trend chart with the grouping dropdown open, showing Auto (Daily, Monthly, or Yearly), Daily, Monthly, and Yearly. -->
![Screenshot of the Order Chart with the grouping dropdown open, showing Auto (Yearly), Daily, Monthly, and Yearly](/images/reporting-analytics/dashboard-overview/trend-chart-grouped.webp)

## Choosing the Date Range

The date button at the left of the filter bar sets the period a report covers. Pick one of the presets (**Today**, **Last 7 days**, **Last 30 days**, **This month**, **Last month**, **Last 12 months**, **Year to date**, or **All time**), or choose **Custom…** to pick a start and end date yourself and click **Apply**.

Presets always count from today, so **Last 7 days** still means the last seven days when you come back tomorrow. Dates follow your WordPress site timezone, which the menu shows at the bottom, for example **In store time: UTC+06:00**. Without FluentCart Pro, the reports start on **This month**.

## Comparing With an Earlier Period

The compare dropdown beside the date button decides which earlier period your numbers are measured against. Its label reads, for example, **vs Previous period**. Each option in the list shows the dates it would use, so you never have to work out the comparison window yourself.

![Screenshot of the compare dropdown with each option and its dates](/images/reporting-analytics/common/report-compare-options.webp)

All comparison periods last as many days as your selected range. They differ in where they start:

* **Previous period:** Ends the day before your selected range begins.
* **Previous month:** Starts one month before your selected range starts.
* **Previous quarter:** Starts three months before your selected range starts.
* **Previous year:** Starts one year before your selected range starts.
* **Custom:** You choose the start date in the **Compare from** date picker that appears beside the dropdown.
* **No comparison:** Turns the comparison off.

Changing the comparison period is a FluentCart Pro feature. Without Pro, the dropdown is locked on **Previous period**.

On charts, the comparison period is drawn as a dotted line or a lighter series, so the two periods are easy to tell apart. If a report cannot load, an error message with a **Retry** button appears instead of a blank chart or zeros.

## Using Advanced Filters

The **Filters** button at the right end of the filter bar opens the advanced filters, a FluentCart Pro feature. Pick a filter from the list, choose its values, and the report updates. The button shows how many filters are active, the applied filters appear as chips below the filter bar, and **Clear all** removes them.

* **Order Type:** Choose **All**, **One time**, **Subscription**, **Renewal**, **Installment sign-up**, or **Installment payment** to limit the report to those kinds of orders.
* **Products:** Pick specific products or variations to see only their numbers.

The **Filters** button appears on the **Orders**, **Revenue**, **Refunds**, **Products**, **Sources**, **Coupons**, **Payment Methods**, and **Locations** reports. The subscription reports (**Subscriptions**, **Retention**, **Cohorts**, and **Future Renewals**) replace it with their own product picker, which lists subscription products only. The **Overview**, **Customers**, **Compare**, and **Installments** pages have no Filters menu.

## Viewing Reports in More Than One Currency

If you sell in more than one currency with [Multi Currency](/guide/settings-configuration/multi-currency-settings), your orders end up in different currencies. Adding those amounts together without converting them would give you a meaningless total, so the reports let you choose how to read them.

When the selected date range contains orders in two or more currencies, a **Currency** chip appears in the filter bar. It lists every currency that has orders in that range, and it starts on the currency with the most orders. You can read your data in two ways:

* **A single currency:** Pick a currency code, such as **USD** or **GBP**. The report shows only the orders placed in that currency, in that currency's own amounts, with no conversion.
* **All currencies (in USD):** Pick this option to combine everything in your base currency. The label shows your own base currency code in place of USD. Each order is converted at the exchange rate it was placed at. Orders that have no exchange rate on record are left out, and the option tells you how many.

The **All currencies** option is available on the **Orders**, **Revenue**, **Refunds**, **Products**, **Compare**, **Customers**, **Sources**, **Coupons**, **Payment Methods**, **Locations**, **Retention**, **Future Renewals**, and **Installments** reports. The **Overview**, **Subscriptions**, and **Cohorts** pages always read one currency at a time, so only the individual currency codes are listed there.

All amounts on a report, including the figures for the comparison period, are shown in the currency you selected, with that currency's symbol.

::: info
On the **Future Renewals**, **Cohorts**, and **Installments** reports, the **Currency** chip lists every currency that has ever had orders, not only those in a date range.
:::

By starting on the Overview, you see the most important numbers first and know exactly which detailed report to open next.
