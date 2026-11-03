# How Reports Count

Every FluentCart report uses the same rules for money, orders, customers, and dates. Once you know these rules, a figure on one report matches the same figure on every other report, and you can trust what you compare. This page explains them once, so the individual report pages can stay short.

## Where to Find Reports

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. When FluentCart Pro is active, the menu reads **FluentCart Pro > Reports**.

The left sidebar lists every report: **Overview**, **Orders**, **Revenue**, **Refunds**, **Subscriptions** (with **Retention**, **Cohorts**, **Future Renewals**, and **Installments**), **Products** (with **Compare**), **Customers**, **Sources**, **Coupons**, **Payment Methods**, and **Locations**. FluentCart Pro adds **Export** for the [accounting export](/guide/reporting-analytics/accounting-export). Add-ons that ship their own reports add them to the same sidebar. Click **Reports** at the top of the sidebar to collapse it.

![Screenshot of the Reports sidebar with every report listed and the Reports collapse button](/images/reporting-analytics/common/reports-sidebar.webp)

## The Filter Bar

The top-right corner of each report holds the controls that decide what the report reads.

![Screenshot of the report filter bar with the date range, comparison, currency and Filters buttons](/images/reporting-analytics/common/report-filter-bar.webp)

* **Date range:** Opens a list of presets: **Today**, **Last 7 days**, **Last 30 days**, **This month**, **Last month**, **Last 12 months**, **Year to date**, and **All time**. **Custom…** opens a calendar where you pick a start and end date, then click **Apply**. The note under the list, for example **In store time: America/New_York**, names the timezone the report uses. A preset always counts from today, so **Last 7 days** opened tomorrow shows the seven days up to tomorrow.
* **Compare:** The button that reads **vs Previous period** picks the earlier period the report compares with. See [Comparing With an Earlier Period](#comparing-with-an-earlier-period).
* **Currency:** Appears only when your orders in the range use two or more currencies. See [Currencies](#currencies).
* **Filters:** Narrows the report by order type or product. See [Filters](#filters-pro).

When a filter is set, it appears as a chip under the title bar. Click **Clear all** to remove every filter at once.

Some reports have their own controls instead. The subscription reports have a product picker that lists only subscription products. The **Installments** report has its own plan start dates and product picker. **Cohorts** and **Future Renewals** have no date range, because they look at all your subscriptions.

![Screenshot of the date range menu with its presets, Custom and the store time note](/images/reporting-analytics/common/report-date-presets.webp)

### Comparing With an Earlier Period

Figures with a small green or red arrow compare the selected range with an earlier period. Every comparison period has the same number of days as your range. The options differ in where the period starts:

* **Previous period:** Ends the day before your range starts.
* **Previous month:** Starts one month before your range starts.
* **Previous quarter:** Starts three months before your range starts.
* **Previous year:** Starts one year before your range starts.
* **Custom:** Starts on the date you pick in the **Compare from** box.
* **No comparison:** Turns the comparison off.

Each option in the list shows the dates it would use. When your range runs past today, the report and its comparison count only up to today.

::: info Choosing the comparison period requires FluentCart Pro
Without Pro, every report compares with the previous period, and the compare button is locked.
:::

![Screenshot of the comparison menu with each option and its dates](/images/reporting-analytics/common/report-compare-options.webp)

### Filters (Pro)

Click **Filters** to narrow the **Orders**, **Revenue**, **Refunds**, **Products**, **Sources**, **Coupons**, **Payment Methods**, and **Locations** reports.

* **Order Type:** **All**, **One time**, **Subscription**, **Renewal**, **Installment sign-up**, or **Installment payment**.
* **Products:** Pick whole products or single variations. With a product filter, money figures count only those products' share of each order.
* **Currency:** The same currency choice as the chip in the filter bar.

::: info Filters require FluentCart Pro
Without Pro, the **Filters** button shows an **Upgrade to Pro** notice instead of the filter list.
:::

### Chart Grouping

Most trend charts have a grouping dropdown: **Auto**, **Daily**, **Monthly**, or **Yearly**. **Auto** picks the grouping from your date range and shows its choice, for example **Auto (Daily)**. Ranges up to 91 days group by day, ranges up to a year group by month, and longer ranges group by year. The grouping changes the shape of the chart, not the totals.

## Net Sales

**Net sales** is the main money figure on every report. It is what customers paid, less refunds, and less the tax, shipping, and fees the store collected on top of the products. The **Revenue** report shows the full calculation:

1. **Gross sales:** Product sales before discounts, refunds, shipping, and tax.
2. **Discounts:** Coupon and manual discounts, taken away.
3. **Refunds:** Refunds on these orders, taken away. The tax, shipping, and fees refunded with them are left out here, because they were never part of net sales.
4. **Net sales:** What is left.
5. **Shipping**, **Fees**, and **Taxes** are added back, each less its refunded part.
6. **Total sales:** Net sales plus shipping, fees, and taxes. This is what customers paid, less refunds.

The Overview, Orders, Products, Customers, Sources, Coupons, Payment Methods, and Locations reports all use this same net sales figure, so their totals agree.

::: info
The FluentCart **Dashboard** tiles read the Revenue report for the last 30 store days, with all currencies converted to your base currency. The **Revenue** tile is net sales.
:::

## Which Orders Count

A report counts an order when its payment status is paid, partially paid, refunded, or partially refunded, and it was created inside the date range.

* **Renewals count.** Subscription renewal orders are orders like any other.
* **$0 orders count.** An order with nothing to pay, such as a 100% coupon or a free product, counts as an order. The Orders report lists these as **Free order**.
* **Unpaid and failed orders do not count.** The Orders and Payment Methods reports show failed orders in their own card or column.

Refunds are counted in two ways, and the reports say which one they use:

* The **Revenue**, **Orders**, and **Products** reports count refunds on orders placed in the range, whenever the refund happened.
* The **Refunds** report counts money refunded during the range, whenever the order was placed.

## New and Returning Customers

Customer counts look at paid orders only.

* **New customer:** A customer whose first paid purchase falls in the range. A renewal is never a first purchase.
* **Returning customer:** A customer who had paid before and made a new purchase in the range. Renewals alone do not make a customer returning.
* **Repeat purchase rate:** Of the customers who paid in the range, the share who have made two or more purchases.
* **Lifetime value:** What a customer has spent with you over all time, less refunds and tax.

On the **Locations** report, a customer counts once in each place they bought from. If they are new in one order and returning in another for the same place, they count as new.

## Store Days and Timezone

Reports read every day and hour in the WordPress site timezone, which you set in **Settings > General**. A day on a report is a store day: midnight to midnight in that timezone. The date presets, the monthly groups, the busiest hours, and the comparison periods all follow it. Chart tooltips name the timezone, for example **In store time: Europe/Berlin**.

Recent dates in admin tables show the time instead of the date. An order from earlier today shows as **2:50 PM**, and one from late yesterday shows as **Yesterday, 11:30 PM**.

## Currencies

Every report reads one currency at a time, so amounts in different currencies never add up into a meaningless total. When your orders in the range use two or more currencies, a **Currency** chip appears in the filter bar. It starts on the currency with the most orders in the range.

* **A single currency:** Pick a code, such as **USD** or **EUR**. The report shows only orders in that currency, in its own amounts.
* **All currencies:** The option reads **All currencies (in USD)**, with your own base currency in place of USD. Each order is converted to the base currency at the exchange rate saved on the order. Orders without a trusted saved rate are left out, and the option tells you how many.

**All currencies** is available on the **Orders**, **Revenue**, **Refunds**, **Products**, **Compare**, **Customers**, **Sources**, **Coupons**, **Payment Methods**, **Locations**, **Retention**, **Future Renewals**, and **Installments** reports. The **Overview**, **Subscriptions**, and **Cohorts** reports read one currency at a time. If **All currencies** was selected on another report, they switch to your base currency, or to the currency with the most orders when the range has no orders in your base currency.

**Cohorts**, **Future Renewals**, and **Installments** do not use the date range, so their currency list includes every currency that has orders.

## Live and Test Mode

Reports read the orders of the mode your store is in. In **Live** mode, they show live orders. In **Test** mode, they show test orders only, so test purchases never mix with real sales. The [accounting export](/guide/reporting-analytics/accounting-export) has its own **Include test-mode orders** option.

## Free and Pro

Every report is available on every FluentCart store, and every free store can pick any date range. FluentCart Pro adds deeper sections, the comparison period choice, and the **Filters** menu. Without Pro, a Pro section shows a locked preview with **Sample data** and an **Upgrade to Pro** button. If Pro is active but too old for a section, the preview asks you to update FluentCart Pro.

![Screenshot of a locked Pro preview over sample data with the Upgrade to Pro button](/images/reporting-analytics/common/report-pro-preview.webp)

| Report | Free | Pro adds |
|---|---|---|
| Overview | Everything | |
| Orders | Summary cards, Order Chart, Order mix, New vs. Returning Customers, average order charts | Orders by day and hour, spend by day and hour, item count, order value, completion time |
| Revenue | Everything | Comparison period choice |
| Refunds | Cards, chart, breakdown, reasons | Most refunded products, weeks between order and refund |
| Subscriptions | Right now cards, period cards, Subscription movement | MRR by plan and billing interval, free trial conversion |
| Retention | Summary cards, Retention Rate chart | Renewals chart, lifetime estimate |
| Cohorts | Customer cohorts, yearly or monthly, as a percent or values | MRR cohorts, billing intervals, retention curve, cancel and rebuy |
| Future Renewals | Every horizon, rate sliders, chart, won't renew, at risk | Renewals by variant |
| Installments | Summary cards, Overdue and Lapsed lists | Monthly schedule, projected to collect, plans started by month, plans by variation |
| Products | Cards, Sales Over Time, Products table | Product details drawer, Compare |
| Customers | Cards, Customers Over Time, Top Customers | Customer value, repeat purchases, customer segments |
| Sources | Channels with built-in rules, Order Sources by UTM | Custom channel rules, grouping by product, variation, day, week, month, or referrer, advanced filter |
| Coupons | Cards, Discounts Over Time, coupons table | Coupon vs Full Price, value of customers won, refund rate per coupon |
| Payment Methods | Cards, chart, sales and risk table | Disputes, dispute rate, card brands and methods |
| Locations | Cards, map, countries | States and cities, lifetime value and repeat rate by place, biggest movers |
| Export | | Accounting export |

With these rules in mind, every report in FluentCart reads the same way.
