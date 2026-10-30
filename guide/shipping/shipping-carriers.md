# Shipping Carriers

Carriers decide where your shipping rates come from. Out of the box, FluentCart uses the zone-based methods you define yourself. With the **Shipping For FluentCart** add-on, you can also connect **Shippo** to show live carrier rates at checkout, buy shipping labels from the order screen, and keep tracking up to date automatically.

This guide shows you where carriers live in your settings and how to install the add-on. Connecting your Shippo account is covered in [Connecting Shippo](/guide/shipping/connecting-shippo).

## What Shippo Adds to FluentCart

Shipping For FluentCart adds the Shippo carrier to FluentCart. Once it is connected, you can:

* **Show live rates at checkout:** Customers see real Shippo rates alongside your zone-based shipping methods.
* **Buy labels from the order screen:** Quote the available services for an order, buy a label, and download it without leaving FluentCart.
* **Void labels:** Deleting a shipment voids its Shippo label, and the carrier refunds it if it is eligible.
* **Track shipments:** Refresh tracking from the order, and let Shippo push tracking updates to your store through a webhook.

::: info
Shippo works in two modes. **Test** mode uses your Shippo test token, so you can try the full flow with free labels that are never shipped. **Live** mode uses your live token, and labels are real and billed.
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
4. Click **Install & Activate**. If FluentCart Pro is not active on your site, this button reads **Download** instead. It does not install anything: it opens the FluentCart add-ons page in a new tab, and you install the plugin yourself.

![Screenshot of the Shipping For FluentCart add-on in the Features & addon screen](/images/shipping/shipping-carriers/shipping-addon-install.webp)

Once the add-on is active, a **Shippo** row appears on the **Carriers** page under **Settings > Shipping**, and the card gets a settings icon that opens it.

## Understanding the Carriers Page

Go to **FluentCart Pro > Settings > Shipping** to open the **Carriers** page. Clicking **Shipping** in the settings menu opens it directly, and **Carriers** is the first item under it. Each carrier has a status badge (**Enabled** or **Disabled**) and a **Manage** button.

![Screenshot of the Carriers page listing Manual / Other and Shippo](/images/shipping/shipping-carriers/carriers-list.webp)

The Carriers page is part of FluentCart's shipping settings, so it is always there. Without the add-on it lists only **Manual / Other**. With the add-on installed, two carriers are listed:

* **Manual / Other:** The zone-based shipping rates you define yourself. This is the shipping system FluentCart has always had, and it is now where your shipping zones live.
* **Shippo:** Live rates, label generation, and tracking through the Shippo API. It stays **Disabled** until you connect it.

If a carrier is enabled but something stops it from working, such as a missing token or an incomplete store address, its row also shows a **Needs attention** badge.

Carrier settings contain API tokens, so only users who can manage sensitive store settings can open the Carriers page.

The **Shipping** menu also contains **Shipping Zones**, **Shipping Classes**, and **Packages**. Shipping classes and packages work as before and are covered in their own guides.

### Saving Carrier Settings

Each carrier's settings page is split into section cards. As soon as you change a field, an **Unsaved Changes** bar appears with **Discard** and **Save** buttons, and the **Discard** and **Save settings** buttons at the bottom of the page become active. You can also press `⌘S` (or `Ctrl+S`). Until you save or discard, FluentCart keeps you on the page, so you cannot lose your edits by clicking another menu item.

## Manual / Other

Click **Manage** next to **Manual / Other** to open its settings. This page holds your shipping zones.

![Screenshot of the Manual / Other carrier settings with the shipping zones list](/images/shipping/shipping-carriers/manual-other-carrier.webp)

* **Enable Manual Shipping:** When this toggle is on, your zone-based shipping methods appear at checkout. Turn it off to remove them from checkout, then click **Save settings**.

Below the toggle, the **Shipping Zones** list shows the general zones that apply to all products, with each zone's name, country, and number of shipping methods. You can search by zone name, add a zone with **Add Shipping Zone**, or use the edit and delete icons in the **Actions** column. See [Configuring Shipping Zones](/guide/shipping/configuring-shipping-zones) for the full walkthrough.

::: info
Turning **Enable Manual Shipping** off removes your zone-based methods from checkout. Leave it on if you want customers to see your own zone methods next to the live Shippo rates.
:::

### Where Did Shipping Zones Go?

Shipping zones used to have their own page under **Settings > Shipping > Shipping Zones**. They are now part of the **Manual / Other** carrier. The **Shipping Zones** menu item is still there for old bookmarks, but it now shows a **Shipping zones have moved** notice with the new path. Click **Go to Manual carrier** to open your zones.

![Screenshot of the Shipping zones have moved notice with the Go to Manual carrier button](/images/shipping/shipping-carriers/shipping-zones-moved.webp)

Links elsewhere in FluentCart, such as **Add Shipping** on a product or the "no shipping methods" link on an order, now take you to the Manual / Other page as well.

## Fulfilling Orders with a Carrier

When you create a shipment for an order, the **Ship with** dropdown lets you choose between **Manual / Other** and **Shippo**. Choosing Shippo lets you buy the label directly. See [Shippo Rates, Labels and Tracking](/guide/shipping/shippo-rates-labels-tracking) for the complete flow.

Your add-on is installed. Next, connect your Shippo account so FluentCart can start quoting rates.
