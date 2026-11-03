# Reports Shot List

Screenshots the Reporting & Analytics pages need. Each row matches a `<!-- TODO(screenshot): ... -->` marker in `guide/reporting-analytics/<page>.md`. Take them with the `fluentcart-doc-screenshots` skill (plugin on `develop`, FluentCart Pro active unless the row says otherwise), then replace each marker with `![Screenshot of ...](<target path>)`.

Rules for every shot: use sample data only (no real store figures, customer names, or emails); set the report to the state in the "What to show" column; clip to the FluentCart app area.

Total: 54 images.

| # | Page | Target path | Report route | What to show (filter / state) | Arrow target |
|---|---|---|---|---|---|
| 1 | `how-reports-count.md` | `/images/reporting-analytics/common/reports-sidebar.webp` | `/reports/overview` | Reports sidebar with every item visible (Overview through Locations, plus Export with Pro), Overview open | arrow on the Reports collapse button |
| 2 | `how-reports-count.md` | `/images/reporting-analytics/common/report-filter-bar.webp` | `/reports/orders` | Filter bar on /reports/orders: date button showing "Last 30 days", "vs Previous period" button, Currency chip, Filters button | no arrow |
| 3 | `how-reports-count.md` | `/images/reporting-analytics/common/report-date-presets.webp` | `/reports/revenue` | Date range menu open on /reports/revenue showing all presets, Custom…, and the "In store time" note | arrow on "Custom…" |
| 4 | `how-reports-count.md` | `/images/reporting-analytics/common/report-compare-options.webp` | `/reports/revenue` | Compare menu open on /reports/revenue (Pro active) listing Previous period, Previous month, Previous quarter, Previous year, Custom, No comparison with their dates | no arrow |
| 5 | `how-reports-count.md` | `/images/reporting-analytics/common/report-pro-preview.webp` | `/reports/orders` | A locked Pro preview on /reports/orders without Pro: "See when and how customers order" card over sample data with the Sample data label and Upgrade to Pro button | no arrow |
| 6 | `reports-dashboard-overview.md` | `/images/reporting-analytics/dashboard-overview/overview-cards.webp` | `/reports/overview` | /reports/overview, Last 30 days, top of the page: the six sales cards and the three subscription cards with change arrows | no arrow |
| 7 | `reports-dashboard-overview.md` | `/images/reporting-analytics/dashboard-overview/overview-needs-attention.webp` | `/reports/overview` | /reports/overview on a store with a failing subscription and an overdue installment plan: the Needs Attention card with two items and View report links | arrow on the first View report link |
| 8 | `reports-dashboard-overview.md` | `/images/reporting-analytics/dashboard-overview/overview-top-lists.webp` | `/reports/overview` | /reports/overview scrolled to Top Products, Top Channels, Top Countries lists with share bars | no arrow |
| 9 | `reports-dashboard-overview.md` | `/images/reporting-analytics/dashboard-overview/overview-last-12-months.webp` | `/reports/overview` | /reports/overview scrolled to the bottom: Last 12 Months bar chart with the "A year earlier" series | no arrow |
| 10 | `orders-report.md` | `/images/reporting-analytics/orders/orders-summary-cards.webp` | `/reports/orders` | /reports/orders, Last 30 days: the six summary cards and the Order Chart below them | arrow on the checkbox of the Orders card |
| 11 | `orders-report.md` | `/images/reporting-analytics/orders/orders-order-mix.webp` | `/reports/orders` | /reports/orders: the Order mix card with Order type, Order status, Discount and Shipping bars | no arrow |
| 12 | `orders-report.md` | `/images/reporting-analytics/orders/orders-new-vs-returning.webp` | `/reports/orders` | /reports/orders: New vs. Returning Customers table with New, Returning, Renewal and Guest rows | arrow on the Show Percentages checkbox |
| 13 | `orders-report.md` | `/images/reporting-analytics/orders/orders-patterns.webp` | `/reports/orders` | /reports/orders with Pro active, scrolled to the bottom: Orders by day and hour heat map and the Spend by day / Spend by hour charts | no arrow |
| 14 | `revenue-report.md` | `/images/reporting-analytics/revenue/revenue-summary-cards.webp` | `/reports/revenue` | /reports/revenue, Last 30 days, store with tax and shipping: the full card row Gross Sales through Total Sales with change arrows | no arrow |
| 15 | `revenue-report.md` | `/images/reporting-analytics/revenue/revenue-chart.webp` | `/reports/revenue` | /reports/revenue: Revenue Chart with Net Sales and the dotted Compare Net Sales line, grouping dropdown on Auto (Daily) | arrow on the grouping dropdown |
| 16 | `revenue-report.md` | `/images/reporting-analytics/revenue/revenue-breakdown.webp` | `/reports/revenue` | /reports/revenue: Revenue Breakdown table with one year expanded into monthly rows | arrow on the expand arrow of the first year |
| 17 | `revenue-report.md` | `/images/reporting-analytics/revenue/revenue-by-order-type.webp` | `/reports/revenue` | /reports/revenue: Net sales by order type card with the stacked bar and the table | no arrow |
| 18 | `refunds-report.md` | `/images/reporting-analytics/refunds/refunds-cards.webp` | `/reports/refunds` | /reports/refunds, Last 30 days: the five refund cards with their second lines | no arrow |
| 19 | `refunds-report.md` | `/images/reporting-analytics/refunds/refunds-breakdown.webp` | `/reports/refunds` | /reports/refunds: Refunds Chart and the Refund breakdown card with its three bars | no arrow |
| 20 | `refunds-report.md` | `/images/reporting-analytics/refunds/refunds-pro-sections.webp` | `/reports/refunds` | /reports/refunds with Pro active: Most refunded products table and the Weeks between an order's created date and refund date chart | no arrow |
| 21 | `subscription-report.md` | `/images/reporting-analytics/subscription/subscriptions-right-now.webp` | `/reports/subscriptions` | /reports/subscriptions: "Right now" heading with "Not affected by the date range" and the nine health cards | no arrow |
| 22 | `subscription-report.md` | `/images/reporting-analytics/subscription/subscriptions-period.webp` | `/reports/subscriptions` | /reports/subscriptions: "In this period" cards and the Subscription movement chart below them | arrow on the Subscriptions / MRR switch |
| 23 | `subscription-report.md` | `/images/reporting-analytics/subscription/subscriptions-mrr-breakdown.webp` | `/reports/subscriptions` | /reports/subscriptions with Pro active: Where MRR comes from card with MRR by plan, MRR by billing interval and Free trial conversion | no arrow |
| 24 | `retention.md` | `/images/reporting-analytics/subscription/retention/retention-summary.webp` | `/reports/subscriptions/subscriptions-retention` | /reports/subscriptions/subscriptions-retention, Last 12 months, Monthly: the three summary cards and the Retention Rate chart | arrow on the Monthly / Yearly switch |
| 25 | `retention.md` | `/images/reporting-analytics/subscription/retention/retention-pro-sections.webp` | `/reports/subscriptions/subscriptions-retention` | /reports/subscriptions/subscriptions-retention with Pro active: Renewals chart and the Lifetime (estimate) card | arrow on the "Why they left" switch |
| 26 | `cohorts.md` | `/images/reporting-analytics/subscription/cohorts/cohorts-table.webp` | `/reports/subscriptions/subscriptions-cohorts` | /reports/subscriptions/subscriptions-cohorts, Monthly, % of start: cohort heat map with the Weighted average row and the Last generated text | arrow on Generate Snapshots |
| 27 | `cohorts.md` | `/images/reporting-analytics/subscription/cohorts/cohorts-pro-sections.webp` | `/reports/subscriptions/subscriptions-cohorts` | /reports/subscriptions/subscriptions-cohorts with Pro active: MRR view selected, Retention curve chart and the Cancel and rebuy card switched on | arrow on the Count rebuys as retained switch |
| 28 | `future-renewals.md` | `/images/reporting-analytics/subscription/future-renewals/future-renewals-cards.webp` | `/reports/subscriptions/future-renewals` | /reports/subscriptions/future-renewals, Next 3 months: the five forecast cards and the Renewal rate assumptions sliders | arrow on the horizon dropdown |
| 29 | `future-renewals.md` | `/images/reporting-analytics/subscription/future-renewals/future-renewals-chart.webp` | `/reports/subscriptions/future-renewals` | /reports/subscriptions/future-renewals, Next 6 months: Renewals by month chart with Ideal (100%) bars, Projected line and Won't renew bars | no arrow |
| 30 | `future-renewals.md` | `/images/reporting-analytics/subscription/future-renewals/future-renewals-variants.webp` | `/reports/subscriptions/future-renewals` | /reports/subscriptions/future-renewals with Pro active: Renewals by Variant table sorted by Projected | no arrow |
| 31 | `installments-report.md` | `/images/reporting-analytics/subscription/installments/installments-cards.webp` | `/reports/subscriptions/installments` | /reports/subscriptions/installments, no start range: the summary cards and the title-bar controls (Started from / Started to, All products) | arrow on the Plans started between date picker |
| 32 | `installments-report.md` | `/images/reporting-analytics/subscription/installments/installments-schedule.webp` | `/reports/subscriptions/installments` | /reports/subscriptions/installments with Pro active: Plans Started by Month and Monthly Schedule charts | arrow on the Collection rate slider |
| 33 | `installments-report.md` | `/images/reporting-analytics/subscription/installments/installments-overdue.webp` | `/reports/subscriptions/installments` | /reports/subscriptions/installments: Overdue tab open with sample customer rows and the Copy link button | arrow on Copy link |
| 34 | `product-report.md` | `/images/reporting-analytics/product/products-cards.webp` | `/reports/products` | /reports/products, Last 30 days: the six product cards and the Sales Over Time chart | no arrow |
| 35 | `product-report.md` | `/images/reporting-analytics/product/products-table.webp` | `/reports/products` | /reports/products: Products table with one product expanded into its variants | arrow on the expand arrow of the first row |
| 36 | `product-report.md` | `/images/reporting-analytics/product/products-detail-drawer.webp` | `/reports/products` | /reports/products with Pro active: product details drawer open for a subscription product showing Subscriptions, Variant mix and Bought together | no arrow |
| 37 | `product-compare-report.md` | `/images/reporting-analytics/product/compare-pickers.webp` | `/reports/products/compare` | /reports/products/compare with Pro active: three pickers filled with sample products, joined by "vs", and the + Add button | arrow on + Add |
| 38 | `product-compare-report.md` | `/images/reporting-analytics/product/compare-head-to-head.webp` | `/reports/products/compare` | /reports/products/compare with three sample products: Head to head table with Leader marks and change figures | no arrow |
| 39 | `product-compare-report.md` | `/images/reporting-analytics/product/compare-trend-overlap.webp` | `/reports/products/compare` | /reports/products/compare: Trend chart with Align by launch ticked, and the Customer overlap table below | arrow on the Align by launch checkbox |
| 40 | `customer-report.md` | `/images/reporting-analytics/customer/customers-cards.webp` | `/reports/customer` | /reports/customer, Last 30 days: the six customer cards and the Customers Over Time chart | arrow on the Customers / Revenue switch |
| 41 | `customer-report.md` | `/images/reporting-analytics/customer/customers-segments.webp` | `/reports/customer` | /reports/customer with Pro active: Customer Segments section showing the segment tiles with customer shares | arrow on a segment's Export button |
| 42 | `customer-report.md` | `/images/reporting-analytics/customer/customers-top-customers.webp` | `/reports/customer` | /reports/customer: Top Customers table with sample (non-real) customers | no arrow |
| 43 | `order-sources-report.md` | `/images/reporting-analytics/orders-source/sources-channels.webp` | `/reports/sources` | /reports/sources, Last 30 days: the three channel cards and the New Customers by Channel stacked chart | arrow on the Channel rules button |
| 44 | `order-sources-report.md` | `/images/reporting-analytics/orders-source/sources-channel-rules.webp` | `/reports/sources` | /reports/sources with Pro active: Channel Rules dialog with one sample channel (e.g. "Partner newsletter", UTM source is partner) and Your own domains box | arrow on Save rules |
| 45 | `order-sources-report.md` | `/images/reporting-analytics/orders-source/sources-table.webp` | `/reports/sources` | /reports/sources: Order Sources table grouped by Campaign / Source / Medium with the Total row, Net switch on | arrow on the Group by dropdown |
| 46 | `order-sources-report.md` | `/images/reporting-analytics/orders-source/sources-advanced-filter.webp` | `/reports/sources` | /reports/sources with Pro active: Advanced Filter panel open with the property groups and one OR condition | arrow on + Add |
| 47 | `coupons-report.md` | `/images/reporting-analytics/coupons/coupons-overview.webp` | `/reports/coupons` | /reports/coupons, Last 30 days: the four coupon cards, Discounts Over Time chart and Coupon vs Full Price table (Pro) | no arrow |
| 48 | `coupons-report.md` | `/images/reporting-analytics/coupons/coupons-table.webp` | `/reports/coupons` | /reports/coupons: coupons table with sample codes, the Total row and the "Discount with no code" line | no arrow |
| 49 | `payment-methods-report.md` | `/images/reporting-analytics/payment-methods/payment-methods-overview.webp` | `/reports/payment-methods` | /reports/payment-methods, Last 30 days: the four cards and the Net Sales by Payment Method chart | no arrow |
| 50 | `payment-methods-report.md` | `/images/reporting-analytics/payment-methods/payment-methods-table.webp` | `/reports/payment-methods` | /reports/payment-methods: table with Sales and Risk column groups for two or three gateways and the Total row | no arrow |
| 51 | `payment-methods-report.md` | `/images/reporting-analytics/payment-methods/payment-methods-disputes.webp` | `/reports/payment-methods` | /reports/payment-methods with Pro active: Dispute rate card, Disputes table and Card Brands and Methods table | no arrow |
| 52 | `locations-report.md` | `/images/reporting-analytics/locations/locations-overview.webp` | `/reports/locations` | /reports/locations, Last 30 days: the location cards, the world map and the Address dropdown | arrow on the Address dropdown |
| 53 | `locations-report.md` | `/images/reporting-analytics/locations/locations-drilldown.webp` | `/reports/locations` | /reports/locations with Pro active: one country opened to its states, breadcrumb "All countries / <country>", Biggest Movers card visible | arrow on the breadcrumb |
| 54 | `accounting-export.md` | `/images/reporting-analytics/accounting-export/accounting-export-menu.webp` | `/reports/export` | /reports/export with Pro active: Reports sidebar with Export selected (below Locations) and the Accounting export card open | arrow on Export in the sidebar |

## Kept as is

| Target path | Page | Why |
|---|---|---|
| `/images/reporting-analytics/accounting-export/accounting-export-page.webp` | `accounting-export.md` | The form in `AccountingExport.vue` still has the fields this image shows. Not compared visually; re-shoot if the styling changed. |

## Images no longer referenced

These files are no longer used by any page. Delete them once the new shots are in, unless a row above reuses the name.

* `/images/reporting-analytics/customer/customer-report-1.webp`
* `/images/reporting-analytics/customer/customer-report-2.webp`
* `/images/reporting-analytics/dashboard-overview/compare-to-options.webp`
* `/images/reporting-analytics/dashboard-overview/overview-metrics.webp`
* `/images/reporting-analytics/dashboard-overview/reporting-overview.webp`
* `/images/reporting-analytics/dashboard-overview/trend-chart-grouped.webp`
* `/images/reporting-analytics/orders-source/column.webp`
* `/images/reporting-analytics/orders-source/filter-2.webp`
* `/images/reporting-analytics/orders-source/order-source-1.webp`
* `/images/reporting-analytics/orders/customer-insights.webp`
* `/images/reporting-analytics/orders/order-report-filter.webp`
* `/images/reporting-analytics/orders/orders-report-by.webp`
* `/images/reporting-analytics/orders/orders-report-chart.webp`
* `/images/reporting-analytics/product/product-compare-picker.webp`
* `/images/reporting-analytics/product/product-compare-report.webp`
* `/images/reporting-analytics/product/product-performanance.webp`
* `/images/reporting-analytics/product/product-report.webp`
* `/images/reporting-analytics/product/product-top-variants.webp`
* `/images/reporting-analytics/product/product-units-by-period.webp`
* `/images/reporting-analytics/refunds/refunds-report-1.webp`
* `/images/reporting-analytics/refunds/refunds-report.webp`
* `/images/reporting-analytics/revenue/advanced-filter.webp`
* `/images/reporting-analytics/revenue/net-revenue.webp`
* `/images/reporting-analytics/revenue/revenue-analysis.webp`
* `/images/reporting-analytics/sales/sales-reports.webp`
* `/images/reporting-analytics/sales/sles-report-filter.webp`
* `/images/reporting-analytics/subscription/cohorts/accessing-the-cohorts-report-1.webp`
* `/images/reporting-analytics/subscription/cohorts/cohorts-2.webp`
* `/images/reporting-analytics/subscription/future-renewals/future-renewals-1.webp`
* `/images/reporting-analytics/subscription/retention/lifetime-analysis-3.webp`
* `/images/reporting-analytics/subscription/retention/retention-rate-2.webp`
* `/images/reporting-analytics/subscription/retention/retention-report-1.webp`
* `/images/reporting-analytics/subscription/subscription-chart.webp`
* `/images/reporting-analytics/subscription/subscription-comparion-table.webp`
* `/images/reporting-analytics/subscription/subscription-report.webp`
