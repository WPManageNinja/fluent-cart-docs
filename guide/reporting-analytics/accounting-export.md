# Accounting Export

The **Accounting Export** gives you a file of every sale and refund in your store, with its tax line, currency, and exchange rates, ready to hand to your accountant or import into your accounting or tax software. It is especially useful when you sell in more than one currency, because each row records the rate the sale was made at.

::: info
The accounting export is part of **FluentCart Pro**. Without Pro, the screen shows a warning instead of the export form.
:::

## Accessing the Accounting Export

To open the accounting export:

1. From your WordPress dashboard, navigate to **FluentCart > Reports**.
2. Select **Export** from the left-hand sidebar.

![Screenshot of the Export item in the Reports sidebar with the Accounting export screen open](/images/reporting-analytics/accounting-export/accounting-export-menu.webp)

::: info
The export covers this store only. It is not a complete EU OSS return, because a business that runs several stores files one OSS return for all of them.
:::

## Setting Up Your Export

![Screenshot of the Accounting export form with period, tax scheme, format, and test-mode options](/images/reporting-analytics/accounting-export/accounting-export-page.webp)

* **Period (UTC):** Choose the start and end dates of the export. All dates are in UTC. The form opens on the previous quarter, and the two buttons next to the date picker, such as **2026-Q3** and **2026-Q4**, fill in the previous and the current quarter in one click.
* **Tax scheme:** Limit the export to one kind of sale, or leave it on **All**.
    * **Domestic:** Sales where the customer's tax country is your store's own country.
    * **EU OSS:** Sales to other EU countries made under your OSS VAT number.
    * **EU, other registration:** Sales to other EU countries made under a different VAT registration.
    * **EU reverse charge:** Sales where the reverse charge was applied.
    * **Outside the EU:** Sales to customers in countries outside the EU.
    * **No tax country:** Sales with no tax country recorded.
* **Format:** Choose **CSV** for spreadsheets and most accounting tools, or **JSON** for systems that import structured data.
* **Include test-mode orders:** *(Optional)* Tick this to add orders placed while your store was in test mode. By default only live orders are exported.

Click **Export** to start. FluentCart builds the file in batches, shows how many rows have been written, and downloads it as `accounting-export-` followed by the date when it finishes. You can click **Cancel** while it is running.

::: info
The tax scheme is worked out with your current EU VAT setting, not the setting that was in place when the sale was made.
:::

## What the File Contains

Each row is one tax line of one payment or refund, so an order with two tax rates produces two rows for each payment.

* **Sales** are dated by the day the payment was made, not the day the order was placed.
* **Refunds** appear as negative rows. FluentCart stores only the total of a refund, so each refund's tax is estimated in proportion to the order, and the **Tax estimated** column is set to **yes** on those rows.
* **Orders without a recorded payment**, such as imported orders or ones you recorded by hand, produce one estimated payment row built from the order itself.
* **The untaxed part of an order**, such as shipping or exempt items, appears as a **Not taxed** row with a 0 rate.

The columns fall into these groups:

* **Order and payment:** **Row type**, **Order ID**, **Invoice number**, **Transaction ID**, **Date (UTC)**, and **Period** (for example `2026-Q3`).
* **Tax details:** **Customer tax country**, **Tax scheme**, **Reverse charge**, **Customer VAT number**, **Store VAT number**, **Tax label**, **Tax rate (%)**, and **Tax estimated**.
* **Amounts in the order currency:** **Currency**, **Taxable amount**, **Tax**, **Order net**, **Order tax**, and **Order gross**.
* **Amounts in your base currency:** **Base currency**, **Sales rate (per 1 base)**, **Taxable amount (base)**, **Tax (base)**, and **Order gross (base)**. These are the order amounts converted back to your base currency at the rate the order was sold at. They stay empty when a rate was never known for that order.
* **ECB reference rates:** **ECB rate on date (per 1 EUR)**, **ECB rate at period end (per 1 EUR)**, and **Period end date**. These show how many units of the order currency equal 1 EUR on the transaction date and on the last day of its quarter. The period-end columns stay empty until the quarter has ended, and every ECB column stays empty for currencies the European Central Bank does not publish.

Your accounting export is now ready to share with your accountant.
