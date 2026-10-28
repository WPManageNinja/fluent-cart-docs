# Shipping Carriers

Carriers decide where your shipping rates come from. Out of the box, FluentCart uses the zone-based methods you define yourself. With the **Shipping For FluentCart** add-on, you can also connect **Shippo** to show live carrier rates at checkout, buy shipping labels from the order screen, and keep tracking up to date automatically.

This guide shows you where carriers live in your settings and how to install the add-on. Connecting your Shippo account is covered in [Connecting Shippo](/guide/shipping/connecting-shippo).

## What Shippo Adds to FluentCart

Shipping For FluentCart adds the Shippo carrier to FluentCart. Once it is connected, you can:

* **Show live rates at checkout:** Customers see real Shippo rates alongside your zone-based shipping methods, priced in the checkout currency.
* **Buy labels from the order screen:** Quote the available services for an order, buy a label, and download it without leaving FluentCart.
* **Void labels:** Deleting a shipment voids its Shippo label, and the carrier refunds it if it is eligible.
* **Track shipments:** Refresh tracking from the order, and let Shippo push tracking updates to your store through a webhook.

::: info
Shippo works in two modes. **Test** mode uses a free test token, so you can try the full flow without buying real labels. **Live** mode uses your live token, and labels are real and billed.
:::

## Requirements

Before you start, make sure you have:

* A [Shippo](https://goshippo.com) account and an API token.
* Your store address completed in [Store Settings](/guide/settings-configuration/store-settings). Shippo ships from this address, so rates and labels fail until the street address, city, postal code, and country are filled in.

## Installing Shipping For FluentCart

The add-on is available from the **Features & addon** screen in FluentCart.

1. Go to **FluentCart Pro > Settings** in your WordPress dashboard.
2. Click **Features & addon** in the left-hand menu.
3. Scroll to the **Plugin Addons** list and find **Shipping For FluentCart**.
4. Click **Install & Activate**.

![Screenshot of the Shipping For FluentCart add-on in the Features & addon screen](/images/shipping/shipping-carriers/shipping-addon-install.webp)

Once the add-on is active, a **Carriers** page appears under **Settings > Shipping**.

## Understanding the Carriers Page

Go to **FluentCart Pro > Settings > Shipping > Carriers** to see every carrier available in your store. Each carrier has a status badge (**Enabled** or **Disabled**) and a **Manage** button.

![Screenshot of the Carriers page listing Manual / Other and Shippo](/images/shipping/shipping-carriers/carriers-list.webp)

Two carriers are listed:

* **Manual / Other:** The zone-based shipping rates you define yourself. This is the shipping system FluentCart has always had.
* **Shippo:** Live rates, label generation, and tracking through the Shippo API. It stays **Disabled** until you connect it.

The **Shipping** menu also contains **Shipping Zones**, **Shipping Classes**, and **Packages**. These keep working as before and are covered in their own guides.

### Manual / Other

Click **Manage** next to **Manual / Other** to open its settings.

![Screenshot of the Manual / Other carrier settings with the shipping zones list](/images/shipping/shipping-carriers/manual-other-carrier.webp)

* **Enable Manual Shipping:** When this toggle is on, your zone-based shipping methods appear at checkout. Turn it off to remove them from checkout.

Below the toggle, the **Shipping Zones** list shows the general zones that apply to all products, with each zone's name, country, and number of shipping methods. You can search by zone name, add a zone with **Add Shipping Zone**, or use the edit and delete icons in the **Actions** column. See [Configuring Shipping Zones](/guide/shipping/configuring-shipping-zones) for the full walkthrough.

::: info
Turning **Enable Manual Shipping** off removes your zone-based methods from checkout. Leave it on if you want customers to see your own zone methods next to the live Shippo rates.
:::

## Fulfilling Orders with a Carrier

When you create a shipment for an order, the **Ship with** dropdown lets you choose between **Manual / Other** and **Shippo**. Choosing Shippo lets you buy the label directly. See [Shippo Rates, Labels and Tracking](/guide/shipping/shippo-rates-labels-tracking) for the complete flow.

Your add-on is installed. Next, connect your Shippo account so FluentCart can start quoting rates.
