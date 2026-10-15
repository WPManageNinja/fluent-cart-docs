 # Reports Dashboard Overview

FluentCart Pro’s Reports section is your **built-in Business Analytics command center**. It provides detailed, real-time data visualizations designed to help you understand your store's financial performance, customer behavior, and product success without the need for complex external tools.

This powerful reporting suite allows you to:
* **Track Profitability:** Get instant comparisons of **Gross Sales** versus **Net Revenue** and monitor your **Refund Rate**.
* **Analyze Growth:** Track changes in your **Customer Base**, identify **Subscription** trends, and calculate **Customer Lifetime Value (CLTV)**.
* **Optimize Operations:** Use the **Order Heatmap** to identify peak sales hours and analyze the speed of your refund process.
* **Pinpoint Performance:** See detailed breakdowns by **Product**, **Variant**, and **Country** to know exactly what is selling best and where.

You can access the full reporting suite by navigating to **FluentCart Pro** > **Reports** in your top menu bar.

## 360-Degree View: The Full Report Section

The reporting hub is divided into several focused tabs, giving you a comprehensive view of every key area of your e-commerce operation:

* **Overview:** Your instant dashboard summary for high-level financial health and growth comparisons.
* **Sales:** Tracks volume, revenue, and identifies your top-performing products and product variants.
* **Orders:** Focuses on transaction count, order value, and features a **Sales Heatmap** to show peak ordering times.
* **Revenue:** Delivers the true income earned after deductions, with trend charts and geographical (per-country) breakdowns.
* **Refunds:** Provides detailed metrics on returns, the total refunded amount, and the time it takes to process a refund.
* **Subscriptions:** Essential for recurring sales, tracking subscriber growth, and installments still due. Its sub-pages cover **Retention**, **Cohorts**, and **Future Renewals**.
* **Products:** Analyzes individual item performance, units sold, discounts, and refunds. Its **Compare** sub-page puts products you pick side by side.
* **Customers:** Monitors your store’s customer acquisition and growth, helping you understand long-term customer value.
* **Sources:** Groups your orders by UTM campaign, source, and medium.
* **Export:** Downloads an accounting export of your sales and refunds.

::: info
The Reports sidebar is **extensible**. When you install a FluentCart add-on that ships its own reports, those report pages appear automatically in this same sidebar alongside the built-in tabs — there's nothing to configure. If you don't have any reporting add-ons active, the menu simply shows the core reports listed above.
:::


## Reports Dashboard Overview (The Summary Page)

When you first enter the Reports section, you land on the **Overview** tab. This tab is your main summary page, built to give you the most important information about your store's status and momentum instantly.

### Reporting Overview - Gross Summary

A small label at the top of the page tells you what the whole Overview covers, for example **Last 12 Months · Base currency (USD)**. All the figures on this page are shown in your store's base currency. The Overview does not follow the date filters used on the other report tabs. It always looks at the most recent months, and the quarterly cards always show the last four quarters, including the current quarter so far, compared with the same quarters a year earlier.

At the top, two cards give you a direct summary of your store's financial volume and growth:

* **Gross Summary:** The total sales amount before anything is taken out, charted month by month. The subtitle under the card title shows the total for the period with its year-over-year growth figure.
* **Gross Revenue Quarterly:** The same gross figure grouped into three-month quarters, with its own total and growth figure in the subtitle.
* **Year-over-Year Growth (YoY):** This figure shows the percentage change compared to the same period last year, giving you crucial context on expansion. Hover over the info icon beside it to see how the number is calculated.

    ![Screenshot of Reporting Overview Page](/images/reporting-analytics/dashboard-overview/reporting-overview.webp)


### Key Performance Trends

The middle section presents key visual trends that inform your business strategy:

* **Gross Volume Breakdown:** A line chart showing the monthly trend of your raw sales, with the year-over-year growth plotted against the right-hand axis. A sentence above the chart sums it up in plain words, for example how much you have sold so far this month, how that compares with last month, and the figure for the same month last year. When your store has no sales from the same period last year, the sentence says **no prior-year figure** instead of showing a misleading percentage.
* **Gross Revenue Breakdown:** The same view by quarter. Its sentence tells you how far into the current quarter you are, how many days are left, and how the quarter so far compares with the previous one.

### Core Revenue and Geographic Metrics

These sections move beyond raw sales to show real profitability and market performance:

* **Net Revenue:** Your total income after refunds and taxes have been removed, with its own year-over-year growth in the subtitle.
* **Net Revenue Quarterly:** The net income broken down by three-month periods for easier fiscal review.
* **Top Country Gross/Net Volume:** Stacked monthly charts that split your sales and revenue by the customer’s billing country. This helps you identify your most valuable geographical markets and how their share changes over time.

![Screenshot of Report Dashboard Overview Page](/images/reporting-analytics/dashboard-overview/overview-metrics.webp)

### Top Countries

The final charts rank the countries behind your sales:

* **Top Countries Gross Revenue:** The countries that bring in the most gross sales, so you can see where your customers are.
* **Top Countries Net Revenue:** The same ranking after refunds and taxes.

By reviewing the Overview first, you get a clean summary of the most critical numbers, allowing you to choose which detailed tab (Sales, Refunds, etc.) you need to investigate further.

## Choosing How a Trend Chart Is Grouped

The **Orders**, **Revenue**, **Refunds**, **Subscriptions**, **Products**, **Customers**, and **Compare** pages each carry a trend chart with a small grouping dropdown above it. That dropdown decides how tightly the timeline is bucketed, and it changes the shape of what you see without changing the numbers underneath.

* **Auto:** Lets FluentCart pick the grouping from the date range you selected. This is the default.
* **Daily:** One point per day. Best for spotting the exact day a campaign landed or a problem started.
* **Monthly:** One point per month, which smooths daily noise into a readable trend.
* **Yearly:** One point per year, for long-range comparisons.

**Auto** tells you what it decided rather than leaving you guessing. While it is the active choice, the option reads **Auto (Daily)**, **Auto (Monthly)**, or **Auto (Yearly)** to show which grouping your current date range resolves to. Ranges up to about three months group daily, up to a year group monthly, and anything longer groups yearly.

Pick a grouping explicitly when Auto is not what you want, such as reading a full year day by day to find a single spike. The label goes back to a plain **Auto** while an explicit choice is active, so it never echoes your own selection back at you.

![Screenshot of the Order Chart with the grouping dropdown open, showing Auto (Yearly), Daily, Monthly, and Yearly](/images/reporting-analytics/dashboard-overview/trend-chart-grouped.webp)

## Comparing With an Earlier Period

The **Compare to** dropdown on the report filter bar decides which earlier period your numbers are measured against. Each option in the list shows the dates it would use, and once you pick one, the dates stay visible in grey text beside the dropdown, so you never have to work out the comparison window yourself.

![Screenshot of the Compare to dropdown listing Previous Period, Previous Month, Previous Quarter, Previous Year, Custom, and No Comparison with their dates](/images/reporting-analytics/dashboard-overview/compare-to-options.webp)

All comparison periods last as many days as your selected range. They differ in where they start:

* **Previous Period:** Ends the day before your selected range begins.
* **Previous Month:** Starts one month before your selected range starts.
* **Previous Quarter:** Starts three months before your selected range starts.
* **Previous Year:** Starts one year before your selected range starts.
* **Custom:** You choose the start date with a separate date picker.
* **No Comparison:** Turns the comparison off.

On charts, the comparison period is drawn as a dotted line in the same color as the current period, or as a faded bar, so the two are easy to tell apart. If your date range runs past today, the report counts only up to today.

If a report cannot load, an error message with a retry option appears instead of a blank chart.

## Using Advanced Filters

The funnel icon at the right end of the filter bar opens **Advanced Filters**, a Pro feature. Pick a filter from the list, choose its values, and the report updates. Applied filters appear in the filter bar, and **Reset Filters** clears them.

* **Order Type:** Choose **All**, **One time**, **Subscription**, or **Renewal** to limit the report to those kinds of orders. It is available on the Sales, Orders, Revenue, Refunds, Products, Compare, Retention, Cohorts, and Future Renewals reports.
* **Subscription Type:** Choose **New**, **Renewal**, **Expired**, or **Canceled** to focus on one kind of subscription event. It is available on the subscription reports only.
* **Products:** Pick specific products or variations to see only their numbers. On the **Compare** page, this is also how you choose what to compare.

The Customers report has no Advanced Filters, and the [Order Sources](/guide/reporting-analytics/order-sources-report) report has its own UTM filter.

## Viewing Reports in More Than One Currency

If you sell in more than one currency with [Multi Currency](/guide/settings-configuration/multi-currency-settings), your orders end up in different currencies. Adding those amounts together without converting them would give you a meaningless total, so the reports let you choose how to read them.

When the selected date range contains orders in two or more currencies, a **Currency** filter appears with the report filters. It lists every currency that has orders in that range, and it starts on the currency with the most orders. If you clear the currency chip, it resets to that default instead of disappearing. You can read your data in two ways:

* **A single currency:** Pick a currency code, such as **USD** or **GBP**. The report shows only the orders placed in that currency, in that currency's own amounts, with no conversion.
* **All currencies (in USD):** Pick this option to combine everything in your base currency. The label shows your own base currency code in place of USD. Each order is converted at the exchange rate it was placed at. Orders that have no exchange rate on record are left out, and the option tells you how many, for example **3 orders without an exchange rate left out**.

The **All currencies** option is available on the **Sales**, **Orders**, **Revenue**, **Refunds**, **Product**, **Order Sources**, **Retention**, and **Future Renewals** reports. The **Subscription**, **Cohorts**, and **Customer** reports always read one currency at a time, so on those pages only the individual currency codes are listed.

::: info
The **Future Renewals** report has its own **Currency** picker above the report. It appears when your orders include more than one currency.
:::
