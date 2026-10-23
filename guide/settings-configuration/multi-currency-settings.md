# Multi Currency Settings

Multi Currency lets customers see prices and pay in the currency they prefer, while you keep managing every product in one base currency. You enter the exchange rate for each currency, decide how the converted prices should look, and FluentCart handles the conversion at checkout.

::: info
Multi Currency is a **FluentCart Pro** feature, and it is currently in **Beta**. Without Pro, the **Multi Currency** screen shows a Pro feature notice instead of the settings, and your store stays in its base currency. Only administrators can open and change these settings. While the feature is in Beta, the screen also reminds you to test it on a staging site before relying on it in your live store.
:::

## Accessing Multi Currency Settings

To open the multi currency settings:

1. From your WordPress dashboard, navigate to **FluentCart > Settings**.
2. Select the **Multi Currency** tab from the left-hand sidebar.

![Screenshot of the Multi Currency tab in FluentCart settings](/images/settings-configuration/multi-currency/multi-currency-menu.webp)

## Quick Setup

1. Turn on **Enable multi-currency** in the **Sell in more than one currency** card.
2. Use **Add currencies** to pick the currencies you want to offer.
3. Type the exchange rate for each currency and click **Set rate**.
4. Optionally, set pricing rules such as rounding or charm pricing.
5. Add a [currency switcher](/guide/customization-and-themes/currency-switcher) so customers can choose a currency.

The sections below explain each card in detail.

## Configuring Multi Currency

### 1. Sell in More Than One Currency

This card turns the feature on and shows the currency your prices are stored in.

![Screenshot of the Sell in more than one currency card with the enable switch, switcher shortcode, and base currency](/images/settings-configuration/multi-currency/multi-currency-enable.webp)

* **Enable multi-currency:** Turn this on to let customers choose a currency. Prices are kept in the base currency and converted at the rate you enter. Each order keeps the rate it was placed at, and renewals keep it too.
    * While the switch is off, the card tells you that shoppers only see your base currency, and the rest of the screen stays hidden. Turn it on to add currencies and set their rates.
    * Once it is on, a line under the switch shows how customers pick a currency: the `[fluent_cart_currency_switcher]` shortcode, the Currency Switcher block, or the `fct-currency-switcher-toggle` class for a navigation menu. Click the copy icon beside the shortcode or the class to copy it, or click **See documentation** to open this guide.
* **Base currency:** The currency your products are priced in. It is shown here for reference, and you change it in the **Checkout Currency** field under **FluentCart > Settings > Store Settings**. Beside the currency code, a **Change in Store Settings** link takes you there.
    * While multi-currency is enabled and orders exist, the base currency is locked. The card shows **Locked while multi-currency is enabled and orders exist**, the link is hidden, and the **Checkout Currency** field in Store Settings is disabled with a note. Turn multi-currency off to change the currency, because every exchange rate and report is measured in the base currency.

::: info
Turning the switch on does not show anything to customers by itself. You also need at least one extra currency with a rate (see **Currencies** below), and a way for customers to pick it. See [Adding a Currency Switcher](/guide/customization-and-themes/currency-switcher) for the options.
:::

### 2. Currencies

This card lists every extra currency you sell in, with its rate and pricing rules. A badge beside the title counts the currencies.

![Screenshot of the Currencies card listing GBP, EUR, and BDT with their rates and pricing rules](/images/settings-configuration/multi-currency/multi-currency-currencies.webp)

Use the **Add currencies** dropdown at the top right of the card to add a currency. You cannot add your base currency, and currencies with three decimal places (such as KWD and BHD) are not supported. The new currency appears at the bottom of the list, ready for you to type its rate.

Each row has these parts:

* **Currency:** The currency code and its name.
* **Rate for 1 USD:** How many units of this currency equal 1 unit of your base currency. The column heading shows your own base currency code. A rate of **0.79 GBP** means 1 USD equals 0.79 GBP, and the line underneath shows the reverse, for example **1 GBP = 1.2658 USD**.
* **Pricing:** An example price in this currency, and a summary of the pricing rules (see below).
* **Rate history** and **Remove:** The clock and trash icons at the right edge of the row.

#### Setting a Rate

A currency without a rate shows a **Needs a rate** tag and the note **Shoppers won't see CAD until it has a rate**, with a field to type the rate right there.

![Screenshot of a new currency row asking for its first rate](/images/settings-configuration/multi-currency/multi-currency-needs-rate.webp)

To set the first rate, type it in the field after **1 USD =** and click **Set rate**.

To change a rate that already exists:

1. Click the pencil icon next to the rate.
2. Type the new rate. While you type, FluentCart shows how far it moves from the current rate as a percentage.
3. Click **Set rate** to save it, or **Cancel** to discard it. You can also press **Enter** to save and **Esc** to cancel.

![Screenshot of a currency row with the new rate field open](/images/settings-configuration/multi-currency/multi-currency-set-rate.webp)

FluentCart does not update rates for you, so check your rates from time to time and change them when the market moves. A rate must be greater than zero. Clicking **Set rate** saves the rate and your currency list together, so a currency you just added is not lost. If the rate saves but the currency list does not, a warning asks you to click **Save Settings** to keep the new currency.

::: info
A currency without a rate is not offered, and customers cannot choose it until you set one.
:::

#### Pricing Rules

Pricing rules decide how a converted price is shaped. They apply in this order: FluentCart converts the base price at the rate, adds your price adjustment, rounds up, and then applies the charm ending.

Under **Pricing**, each row shows an **Example** that turns 100.00 in your base currency into the final price in that currency, followed by a summary such as **Adjustment +2% · Rounding Up to 0.50 · Charm End in .99**. Click the pencil icon at the end of the summary to open **Pricing rules** for that currency.

![Screenshot of the pricing rules panel for the Euro](/images/settings-configuration/multi-currency/multi-currency-pricing.webp)

* **Price adjustment:** A percentage added to (or taken off) the converted price, from **-50** to **100**. The default is **0**. Use it to add a small buffer for conversion costs or to price a market differently.
* **Rounding:** Rounds the price up to a neat step. The default, **No rounding**, leaves the amount as it is. The other options are **Round up to** 0.05, 0.10, 0.25, 0.50, 1, 5, 10, 50, or 100.
* **Charm pricing:** Adjusts the ending of the price after rounding. Choose **No charm pricing**, **End in .99 (take off 0.01)**, or **End in .95 (take off 0.05)**. Pair it with a whole-number rounding step, because it takes 0.01 or 0.05 off the rounded price.

The **Example** updates as you change the rules, so you can check them before saving, and it uses the rate your customers get. Click **Save** in the panel to store your changes.

For example, take a 100.00 USD product with a Euro rate of 0.92, a **2.00** price adjustment, **Round up to 0.50**, and **End in .99 (take off 0.01)**. The price converts to 92.00 EUR, becomes 93.84 EUR after the adjustment, rounds up to 94.00 EUR, and the charm ending makes the customer price **93.99 EUR**.

#### Rate History

Click the clock icon on a currency row to see every rate that currency has had, newest first.

![Screenshot of the Rate history dialog for BDT](/images/settings-configuration/multi-currency/multi-currency-rate-history.webp)

* **Rate:** The rate that was set. The one in use now carries a **Current** badge.
* **Change:** How far the rate moved from the one before it, in green for a rise and red for a fall. It reads **No change** when the rate stayed the same, and a dash (**—**) for the first rate a currency was given.
* **Source:** Where the rate came from. Rates you enter yourself read **Manual**.
* **Effective:** The date and time the rate took effect.
* **Set by:** The user who set the rate.

#### Removing a Currency

Click the trash icon on a currency row and confirm with **Remove**, then click **Save Settings**. Shoppers can no longer pick the currency, and orders already placed in it keep their own currency and rate.

### 3. Rate Changes

The **Rate changes** card controls how long converted prices stay at the previous rate after you change a rate.

![Screenshot of the Rate changes card showing the number of minutes](/images/settings-configuration/multi-currency/multi-currency-rate-changes.webp)

* **Keep converted prices at the previous rate for up to:** Enter a number of minutes from **0** to **1440**. The default is **0**, which uses a new rate at once. With a higher number, a cart priced before the change can keep the previous rate for that long, so a customer in the middle of checkout sees the price they were shown. After the time passes, the cart is priced again at the current rate.

When you set a rate and a hold is active, the currency row shows **Converted prices may still use the previous rate for up to 30 more minutes**, counting down the time that is left.

## Saving Your Settings

After making changes, click the **Save Settings** button at the bottom right of the page, or the **Save** button at the top right. You can also press **Cmd+S** (**Ctrl+S** on Windows). Rates are the exception: they are saved the moment you click **Set rate**.

![Screenshot of the Multi Currency page with the Save Settings button highlighted](/images/settings-configuration/multi-currency/multi-currency-save.webp)

Your store is now ready to show prices in more than one currency.
