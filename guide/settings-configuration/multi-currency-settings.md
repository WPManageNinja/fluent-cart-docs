# Multi Currency Settings

Multi Currency lets customers see prices and pay in the currency they prefer, while you keep managing every product in one base currency. You set the exchange rate for each currency, decide how the converted prices should look, and FluentCart handles the conversion at checkout.

::: info
Multi Currency is a **FluentCart Pro** feature. Without Pro, the **Multi Currency** screen shows a Pro feature notice instead of the settings, and your store stays in its base currency. Only administrators can open and change these settings.
:::

## Accessing Multi Currency Settings

To open the multi currency settings:

1. From your WordPress dashboard, navigate to **FluentCart > Settings**.
2. Select the **Multi Currency** tab from the left-hand sidebar.

![Screenshot of the Multi Currency tab in FluentCart settings](/images/settings-configuration/multi-currency/multi-currency-menu.webp)

## Configuring Multi Currency

### 1. Sell in More Than One Currency

This card turns the feature on and shows the currency your prices are stored in.

![Screenshot of the Sell in more than one currency card with the enable switch and base currency](/images/settings-configuration/multi-currency/multi-currency-enable.webp)

* **Enable multi-currency:** Turn this on to let customers choose a currency. Prices are kept in the base currency and converted at the rate you set. Each order keeps the rate it was placed at, and renewals keep it too.
* **Base currency:** The currency your products are priced in. It is shown here for reference. You change it in the **Checkout Currency** field under **FluentCart > Settings > Store Settings**.
    * While multi-currency is enabled and orders exist, the base currency is locked. FluentCart refuses to save a different **Checkout Currency** until you turn multi-currency off, because every exchange rate and report is measured in the base currency.

::: info
Turning the switch on does not show anything to customers by itself. You also need at least one extra currency with a rate (see **Currencies** below), and a way for customers to pick it. See [Adding a Currency Switcher](/guide/customization-and-themes/currency-switcher) for the options.
:::

### 2. Exchange Rates

This card decides where each currency's exchange rate comes from.

![Screenshot of the Exchange rates card with the European Central Bank source selected](/images/settings-configuration/multi-currency/multi-currency-exchange-rates.webp)

* **Exchange rates from:** Choose how rates are kept up to date.
    * **Enter rates manually:** This is the default. You edit each rate in the **Currencies** table below, and a rate only changes when you edit it.
    * **European Central Bank (updated daily):** FluentCart Pro fetches the euro foreign exchange reference rates from the European Central Bank and refreshes them once a day. The ECB publishes rates once per working day (not at weekends or on holidays), for about 30 currencies, at mid-market rates with no spread. A currency the ECB does not publish keeps its manual rate.
* **Add a margin of:** *(Shown only when a rate feed is selected)* Enter a percentage from **0** to **10** that FluentCart adds to the fetched rates. Use it to cover the spread your payment gateway charges when it converts currencies.

If a feed fails to update, prices keep using the last rate. When some rates have not updated for more than 3 days, a warning appears on this card. If an automatic rate suddenly jumps far from the previous one, FluentCart holds it back and records a warning in the activity log instead of using it.

### 3. Currencies

This card lists every extra currency you sell in, with its rate and pricing rules.

![Screenshot of the Currencies card listing GBP, EUR, and BDT with their rates and pricing options](/images/settings-configuration/multi-currency/multi-currency-currencies.webp)

Use the **Add currencies** dropdown at the top right of the card to add a currency. You cannot add your base currency, and currencies with three decimal places (such as KWD and BHD) are not supported.

Each row has these parts:

* **Currency:** The currency code and its name.
* **Rate for 1 USD:** How many units of this currency equal 1 unit of your base currency. The column heading shows your own base currency code. A rate of **0.79 GBP** means 1 USD equals 0.79 GBP.
* **Pricing:** The rules that turn the converted amount into the final price (see below).
* **Rate history** and **Remove:** The clock and trash icons at the right edge of the row.

#### Setting a Rate

1. Click the pencil icon next to the rate. If a currency has no rate yet, the icon reads **Set rate**.
2. Type the new rate. While you type, FluentCart shows how far it moves from the current rate as a percentage.
3. Click **Set rate** to save it, or **Cancel** to discard it.

![Screenshot of a currency row with the new rate field open](/images/settings-configuration/multi-currency/multi-currency-set-rate.webp)

A rate must be greater than zero. Rates are saved the moment you click **Set rate**, so you don't need to click **Save Settings** for them.

::: info
A currency without a rate shows a **No rate — not offered** tag, and customers cannot choose it until you set one. A **Stale** tag marks a rate from a feed that has not updated for more than 3 days. Rates you enter manually are never marked stale.
:::

#### Pricing Rules

Pricing rules decide how a converted price is shaped. They apply in this order: FluentCart converts the base price at the rate, adds your price adjustment, rounds up, and then applies the charm ending.

![Screenshot of the pricing options for the Euro with an example final price](/images/settings-configuration/multi-currency/multi-currency-pricing.webp)

* **Price adjustment:** A percentage added to (or taken off) the converted price, from **-50** to **100**. The default is **0**. Use it to add a small buffer for conversion costs or to price a market differently.
* **Rounding:** Rounds the price up to a neat step. The default, **Round to the smallest unit of the currency**, leaves the amount as it is. The other options are **Round up to** 0.05, 0.10, 0.25, 0.50, 1, 5, 10, 50, or 100.
* **Charm pricing:** Adjusts the ending of the price after rounding. Choose **No charm pricing**, **End in .99 (take off 0.01)**, or **End in .95 (take off 0.05)**.

The **Example final price** box under each currency shows the result so you can check your rules before saving. It labels the result **Illustrative**, and uses the rate your customers get, including any margin. To test a different price, change the amount in **Preview each currency with an example product price of** at the top of the card.

For example, take a 100.00 USD product with a Euro rate of 0.92, a **2.00** price adjustment, **Round up to 0.50**, and **End in .99 (take off 0.01)**. The price converts to 92.00 EUR, becomes 93.84 EUR after the adjustment, rounds up to 94.00 EUR, and the charm ending makes the customer price **93.99 EUR**.

#### Rate History

Click the clock icon on a currency row to see every rate that currency has had.

![Screenshot of the Rate history dialog for GBP](/images/settings-configuration/multi-currency/multi-currency-rate-history.webp)

* **Rate:** The rate that was set.
* **Source:** Where the rate came from, such as **manual**.
* **Effective (UTC):** When the rate took effect.
* **Set by:** The user who set it.

#### Removing a Currency

Click the trash icon on a currency row to remove it from the list, then click **Save Settings**. Orders already placed in that currency keep their own currency and rate.

### 4. Checkout

The **Checkout** card controls how long a customer's price stays steady while they check out.

![Screenshot of the Checkout card showing the rate hold in minutes](/images/settings-configuration/multi-currency/multi-currency-checkout-rate-lock.webp)

* **Hold a cart's rate for:** Enter a number of minutes from **1** to **1440**. The default is **30**. During this time, a cart keeps the rate it was priced at, so the price a customer saw is the price they pay. After it passes, the cart is priced again at the current rate.

## Saving Your Settings

After making changes, click the **Save Settings** button at the bottom right of the page, or the **Save** button at the top right. You can also press **Cmd+S** (**Ctrl+S** on Windows).

![Screenshot of the Multi Currency page with the Save Settings button highlighted](/images/settings-configuration/multi-currency/multi-currency-save.webp)

Your store is now ready to show prices in more than one currency.
