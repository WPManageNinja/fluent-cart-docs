# Subscription Future Renewals Report

The **Future Renewals** report forecasts the renewal income your subscriptions will bring in over the next months. It shows the ideal amount if every customer renews, a projection at your own renewal rates, and the renewals you are likely to lose. Use it to plan cash flow and to see how much a win-back or dunning effort could recover.

## Accessing Future Renewals

Go to your WordPress dashboard, then go to **FluentCart > Reports** in the side menu. Under **Subscriptions**, click on **Future Renewals**.

This report looks forward, so it has no date range or comparison. The product picker and currency work as described in [How Reports Count](/guide/reporting-analytics/how-reports-count). Pick the forecast length in the dropdown at the top: **Next 3 months**, **Next 6 months**, or **Next 12 months**.

The forecast covers renewals scheduled by your live recurring subscriptions, at their renewal price, by the month they fall due. Installment plans are not included; see the [Installments report](/guide/reporting-analytics/installments-report) for those.

## Forecast Cards

Five cards sum up the forecast. Hover over the info icon beside a card to read its definition.

* **Ideal Renewals (100%):** Every renewal due in the period, if every customer renews. Canceled subscriptions are not included. The line under it shows how many renewals are due.
* **Projected Renewals:** The ideal amount at the renewal rates set below. The line under it shows the projection as a share of the ideal.
* **Projected Shortfall:** The ideal amount less the projected one: what you are not expected to collect at these rates.
* **Won't Renew:** Canceled subscriptions still in their paid term that end inside the period: the renewals they would have paid, unless the customer comes back.
* **At Risk Now:** Renewals already due and not paid, either retrying payment or overdue. They are not in the forecast, but they may still come in.

<!-- TODO(screenshot): future-renewals-cards.webp | /reports/subscriptions/future-renewals, Next 3 months: the five forecast cards and the Renewal rate assumptions sliders | arrow on the horizon dropdown -->

## Renewal Rate Assumptions

The **Renewal rate assumptions** card holds one slider per billing interval, for example **Monthly plans** and **Yearly plans**. Each slider starts at your store's own rate: the renewals paid out of those due in the last 12 closed months, as on the Retention report. When an interval has no history, it starts at your store's overall rate.

When subscriptions in a free trial are due to convert, a **Free trials converting** slider appears too. It starts at your share of ended trials that paid, or at 50% without history.

Move a slider to try another rate, and the cards and chart update at once. A subscription's second renewal in the period counts only if it paid the first, so the rate compounds. Click **Reset to your history** to return to your own rates.

## Renewals by Month

The chart shows each month in the period:

* **Ideal (100%):** The bars for every renewal due.
* **Projected:** The line at your renewal rates.
* **Won't renew:** Bars for canceled subscriptions that end that month, shown when there are any.

<!-- TODO(screenshot): future-renewals-chart.webp | /reports/subscriptions/future-renewals, Next 6 months: Renewals by month chart with Ideal (100%) bars, Projected line and Won't renew bars | no arrow -->

## Renewals by Variant (Pro)

This table splits the forecast by product and variation, so you can see which plans carry your recurring revenue. It shows the **Product**, **Variant**, **Renewals**, **Ideal (100%)**, and **Projected** amount for each, and you can sort by any number column.

::: info Renewals by Variant requires FluentCart Pro
Without Pro, this table shows a locked preview with sample data.
:::

<!-- TODO(screenshot): future-renewals-variants.webp | /reports/subscriptions/future-renewals with Pro active: Renewals by Variant table sorted by Projected | no arrow -->

::: info
These figures are a forecast. Actual income can differ because of failed payments, cancellations, and plan changes.
:::

The Future Renewals report now gives you a forecast of your recurring income that you can test against your own assumptions.
