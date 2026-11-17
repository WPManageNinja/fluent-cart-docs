# Address Autofill (Japan)

Japanese shoppers expect to type a 7-digit postal code and see their address appear. The **Address Autofill for FluentCart** addon does exactly that at checkout: when a customer chooses **Japan** and enters a postal code, FluentCart fills in the prefecture, city, and street for them.

## What It Fills In

The addon completes three fields, on both the billing and the shipping address:

* **Prefecture:** Set through FluentCart's own state selector, so shipping and tax recalculate exactly as they do when a customer picks a prefecture by hand.
* **Town / City:** The municipality for the postal code.
* **Street Address:** The town area for the postal code.

It never touches the **Apt, suite, unit** field. If the customer has already typed a building or room number into **Street Address**, it stays: the street is only replaced while it is empty or still holds the value the addon filled in earlier. The prefecture and city always follow the postal code.

![Screenshot of the checkout billing address with Japan selected and the postal code 100-0001, with the prefecture, city, and street already filled in](/images/settings-configuration/address-autofill/address-autofill-checkout.webp)

The lookup starts as soon as the customer has typed a complete 7-digit code, with or without the hyphen (`1000001` or `100-0001`). Full-width digits from a Japanese keyboard work too.

## Installing the Addon

Address Autofill is a free addon. To install it:

1. Go to **FluentCart Pro > Settings > Features & addon**.
2. In **Plugin Addons**, find **Address Autofill for FluentCart** and click **Install & Activate** (without FluentCart Pro, click **Download** and install the plugin manually).

![Screenshot of the Address Autofill for FluentCart card in the Plugin Addons section with its Active badge](/images/settings-configuration/address-autofill/address-autofill-addon-card.webp)

For more on installing add-ons, see [Features & Addons](/guide/settings-configuration/features-addons).

## Turning It On or Off

Once the addon is active, an **Address Autofill** row appears in the **Features & addon** list. It is switched on by default, because activating the addon is the opt-in. Use the toggle to pause it without deactivating the plugin.

![Screenshot of the Address Autofill row in the Features & addon list with its toggle switched on](/images/settings-configuration/address-autofill/address-autofill-toggle.webp)

## Before You Start

Turn on the **State** field under **FluentCart Pro > Settings > Checkout Fields**. Without it, the checkout has nowhere to put the prefecture. See [Checkout Fields](/guide/settings-configuration/checkout-fields) for the steps.

::: info
Postal codes are looked up through **zipcloud** (zipcloud.ibsnet.co.jp), a free public copy of the Japan Post postal file. Only the postal code the customer typed is sent, and nothing else about them. Each result is kept for one week, so a given postal code is only looked up once.
:::

## Other Countries

Japan is the only country built in. Developers can add other countries, or supply their own postal data so no outside request is made, with the `fluent_cart/checkout/postcode_autofill_countries` and `fluent_cart/checkout/postcode_lookup` filters.

Your Japanese customers can now complete their address from the postal code alone.
