# Subscription Future Renewals Report

The **Future Renewals** report provides a predictive look into your store's upcoming income. By analyzing your live recurring subscriptions and their next billing dates, FluentCart shows what your renewals would bring in if every customer renewed, and what you can realistically expect at your store's own renewal rates. This report is a vital tool for cash flow forecasting and business planning.

## Accessing Future Renewals

Go to your WordPress dashboard, navigate to **FluentCart Pro → [Reports](/guide/reporting-analytics/reports-dashboard-overview)**, and select the **Future Renewals** sub-tab under the **Subscriptions** category.

## Report Filters and Controls

The Future Renewals report looks forward from today, so it has no date filter.

* **Horizon:** Use the dropdown beside the page title to choose how far ahead to look: **Next 3 months** (the default), **Next 6 months**, or **Next 12 months**.
* **Products:** Open the **All products** dropdown in the filter bar to forecast specific subscription products only.
* **Currency:** When your orders are in more than one currency, a **Currency** chip appears in the filter bar. Pick a currency, or read everything combined in your base currency. See [Viewing Reports in More Than One Currency](/guide/reporting-analytics/reports-dashboard-overview#viewing-reports-in-more-than-one-currency).

The forecast covers renewals scheduled by your live recurring subscriptions, at their renewal price, by the month they fall due. Installment plans are not included; see the [Installments](/guide/reporting-analytics/installments-report) report for those. Hover over the info icon beside the page title to read this definition in the app.

## Understanding Future Revenue Estimates

The cards at the top of the page summarize the horizon you picked. Hover over the info icon beside a card to read its definition.

* **Ideal Renewals (100%):** Every renewal due in the horizon, if every customer renews. Canceled subscriptions are not included. The line under it shows how many renewals are due.
* **Projected Renewals:** The ideal amount at the renewal rates you set below. The line under it shows the projection as a share of the ideal amount.
* **Projected Shortfall:** The ideal amount less the projected one: what you are not expected to collect at these rates, and the room a win-back or dunning effort has.
* **Won't Renew:** Canceled subscriptions still in their paid term that end inside the horizon: the renewals they would have paid, unless the customer comes back.
* **At Risk Now:** Renewals already due and not paid, either retrying payment (failing or past due) or overdue. They are not in the forecast, but they may still come in. The line under it splits them into retrying and overdue.

## Renewal Rate Assumptions

The **Renewal rate assumptions** card holds one slider for each billing interval you sell, such as **Monthly plans** or **Yearly plans**. Each slider sets the share of renewals you expect to be paid.

* The sliders start at your store's own rates: the renewals paid out of those due in the last 12 closed months, the same as on the [Retention](/guide/reporting-analytics/retention) report. The hint under each slider shows that history, for example **Your last 12 closed months: 92% renewed.**
* If no renewal of those plans was due in that time, the slider starts at your store's overall rate.
* When subscriptions in a free trial renew inside the horizon, a **Free trials converting** slider appears too. It starts at the share of ended trials that paid, or at 50% when no trial has ended yet.
* A subscription's second renewal in the horizon counts only if it paid the first, so the rate compounds over longer horizons.

Move a slider to try other rates, and the **Projected Renewals** and **Projected Shortfall** cards and the chart update. Click **Reset to your history** to return to your store's own rates.

## Renewals by Month

The main feature of this report is an interactive chart that visualizes your projected income over the months of the horizon.

* **Ideal (100%):** Bars for the renewals due each month if every customer renews.
* **Projected:** A line for what you can expect at the renewal rates you set.
* **Won't renew:** Bars for the renewals of canceled subscriptions that end that month.

When nothing is scheduled, the chart reads **No renewal is scheduled in this horizon**.

<!-- TODO(screenshot): Future Renewals page with the Horizon dropdown, the five summary cards, the Renewal rate assumptions sliders, and the Renewals by month chart. The current image shows the old Renewal Revenue chart. -->
![Future Renewals](/images/reporting-analytics/subscription/future-renewals/future-renewals-1.webp)

## Renewals by Variant

With **FluentCart Pro**, the **Renewals by Variant** table splits the forecast by product and variant, to see which plans carry your recurring revenue. For each variant, it shows the renewals due and the ideal and projected amounts. Without Pro, a sample preview takes its place.

<!-- TODO(screenshot): Pro Renewals by Variant table with its ideal and projected columns. -->
![Screenshot of the Renewals by Variant table](/images/reporting-analytics/subscription/future-renewals/future-renewals-variants.webp)

## Tips for Forecasting

> **Note:** These figures are estimates. Actual revenue may vary depending on factors like payment failures, mid-month cancellations, or manual plan changes.

* **Plan for Growth:** Use the peak months on the chart to plan your marketing budget or inventory purchases, knowing when your cash reserves will be strongest.
* **Identify Gaps:** If you notice a significant drop in future renewals in a specific month, consider launching a promotional campaign to attract new subscribers or encourage annual upgrades.
* **Size Your Win-Back Effort:** The **Projected Shortfall** and **At Risk Now** cards show how much a dunning or win-back campaign could recover.

With the **Future Renewals** report feature, you no longer have to guess what next month's income will look like. By providing a clear projection of upcoming subscription billing, FluentCart helps you manage your business with confidence and financial clarity.
