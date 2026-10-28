# Shippo Rates, Labels and Tracking

Once Shippo is connected, it works in three places: your checkout page, the order screen, and the background tracking updates. This guide explains what customers see, how you buy and manage a label, and how tracking stays up to date.

If you have not connected your account yet, start with [Connecting Shippo](/guide/shipping/connecting-shippo).

## Live Rates at Checkout

When **Show Shippo Rates at Checkout** is turned on, FluentCart asks Shippo for rates once a customer enters their shipping address. The Shippo services appear next to your zone-based shipping methods, so customers can pick the one they prefer.

Here is how the rates are worked out:

* **Origin:** Rates are quoted from your store address in [Store Settings](/guide/settings-configuration/store-settings).
* **Destination:** The customer's country, state, city, and postal code.
* **Parcels:** Built from the products in the cart. FluentCart uses each product's weight plus the empty weight of its assigned [package](/guide/shipping/packages), and works out how many boxes the order needs.
* **Currency:** Rates are shown in the checkout currency.
* **Services:** Each rate is a carrier service with its own name and price.

To get accurate rates, set a weight on every physical product and assign it a package. See [Creating Physical Products](/guide/product-types-creation/creating-physical-products) for where to set these.

::: info
FluentCart keeps Shippo's answer for about 10 minutes for the same destination and cart, so customers get fast results while they review their order. If a customer changes their postal code or cart contents, FluentCart asks Shippo again.
:::

If Shippo cannot return rates for an address, for example because the postal code is incomplete, no Shippo rates are shown for that address. Your zone-based methods are handled separately by the **Manual / Other** carrier.

## Creating a Shipment and Buying a Label

You buy labels from the order screen. Make sure **Enable Label Generation** is turned on in the Shippo settings first.

1. Go to **FluentCart Pro > Orders** and open an order that contains physical items.
2. In the **Order items** card, click **Create shipment**. The button appears while the order still has items left to ship.

    ![Screenshot of the Order items card with the Create shipment button highlighted](/images/shipping/shippo/order-create-shipment-button.webp)

3. The **Create shipment** panel opens with three steps: **Items**, **Method**, and **Review**.

### Step 1: Items

Choose which items go in this shipment and how many of each. Click **Ship all remaining** to fill in every remaining quantity, or **Clear all** to reset them. Items that were already shipped show a **Fully Shipped** badge. This lets you split one order into several shipments.

![Screenshot of the Items step in the Create shipment panel](/images/shipping/shippo/shipment-step-items.webp)

### Step 2: Method

Use the **Ship with** dropdown to choose a carrier:

* **Manual / Other:** Pick one of your zone-based methods, or choose **Custom price** to type a cost yourself (use `0` for free shipping). You can enter a **Carrier Name**, **Shipping Cost**, **Tracking Number**, and **Tracking URL** by hand.
* **Shippo:** FluentCart asks Shippo for the services available for this order's address and parcels. They are listed as "rates for this address".

![Screenshot of the Ship with dropdown listing Manual / Other and Shippo](/images/shipping/shippo/shipment-ship-with-dropdown.webp)

<!-- TODO(screenshot): Method step with Shippo rates (Cheapest/Fastest tags, Label cost bar). Needs a store origin address in a country the Shippo test account can quote from; the current cart.local origin (Sylhet, BD) returns "No rates available from Shippo for this shipment". -->

Each Shippo service shows its name, estimated delivery, and price. FluentCart tags the cheapest option with **Cheapest** and the fastest with **Fastest** when it can tell them apart. Click **Refresh** to request the rates again.

Select the service you want to purchase. FluentCart preselects a rate for you in this order:

1. The same service the customer chose at checkout.
2. A service from your **Preferred Carrier**, if you set one.
3. The cheapest rate.

After you select a service, a summary shows the **Label cost**. Shippo bills you in your Shippo account's currency. If that differs from the order currency, the summary shows a note such as "Billed by Shippo in USD" with an approximate amount in the order currency. The saved cost is always the amount Shippo bills.

::: info
When you open **Create shipment**, FluentCart starts on the carrier the customer used at checkout, if that carrier can still quote rates or buy labels. Otherwise it starts on **Manual / Other**.
:::

### Step 3: Review

Check the summary of items, carrier, tracking, and cost. For Shippo, the tracking number reads **Assigned when the label is bought**.

![Screenshot of the Review step in the Create shipment panel](/images/shipping/shippo/shipment-step-review.webp)

You can also:

* **Shipped now / Change:** Keep the current time or set a different **Shipped At** date and time.
* **Add a note for the customer:** Write an optional **Note to customer** that is shown with this shipment.
* **Notify Customer:** Check this box to notify the customer about the shipment.

Click **Buy label** (the button shows the price). A confirmation asks you to confirm the service and its price. Click **Buy Label** to confirm. Buying a label spends money in Live mode, so the extra confirmation is intentional.

When the purchase succeeds, FluentCart creates the shipment, adds the tracking number, and stores a copy of the label PDF with it.

### International Shipments

For shipments that cross borders, FluentCart builds the customs declaration automatically from the items you ship, including each item's name, quantity, weight, and value. Shipments between countries in the European Union customs union do not need one. Add a weight to your products so the declaration is accurate.

## Managing Shipments

Shipments appear in the **Shipments** card on the order, with columns for **Status**, **Shipment**, **Tracking**, and **Cost**. Click the three-dot button on a shipment to open its actions:

* **Download label:** Opens the label PDF in a new tab so you can print it.
* **Refresh tracking:** Asks Shippo for the latest tracking status.
* **Copy tracking number:** Copies the number to your clipboard.
* **Delete shipment:** Removes the shipment. For a Shippo shipment, its label is voided, and the carrier refunds it if it is eligible.

Click the arrow at the end of a row to expand the details: **Latest tracking**, **Shipped via**, and **Note to customer**.

<!-- TODO(screenshot): Shipments card with a Shippo shipment, the three-dot menu open, and the expanded details. Needs a purchased test label. -->

::: info
In Test mode, labels are free and never shipped. Shippo only tracks its own test tracking numbers (those beginning with `SHIPPO_`), so real carrier tracking is not available for test labels.
:::

## Tracking Updates

FluentCart reads tracking from Shippo in two ways:

* **Automatically:** Shippo calls your webhook whenever a tracking status changes. This requires the webhook from [Connecting Shippo](/guide/shipping/connecting-shippo#step-3-adding-the-webhook-in-shippo).
* **Manually:** Click **Refresh tracking** on a shipment at any time.

Shippo's tracking statuses are mapped to the shipment status like this:

| Shippo status | Shipment status |
|---|---|
| Pre-transit | Dispatched |
| Transit | In transit |
| Delivered | Delivered |
| Returned | Returned |
| Failure | Failed |

A status Shippo marks as unknown is ignored, so your shipment keeps its current status.

## If Something Goes Wrong

* **The rate expired:** Rates are only valid for a short time. Click **Refresh**, select the service again, and retry.
* **A carrier refused the label:** FluentCart shows which carrier refused it and what Shippo said. Nothing is charged when a label is refused, so you can fix the issue and try again, or pick a different service.
* **Carrier login problem:** If the carrier account connected in your Shippo dashboard cannot log in, check that carrier's login details under **Carriers** in Shippo, or choose another service.
* **Address problems:** If Shippo rejects the store address, the customer's address, or a phone number, FluentCart tells you which field to correct. Fix your store address in Store Settings, or edit the order's shipping address.
* **Label purchase not confirmed:** If Shippo does not confirm a purchase in time, check your Shippo dashboard before you try again so the label is not bought twice.

## Data Shared with Shippo

FluentCart only contacts Shippo after you enable it and save an API token. It sends:

* **At checkout:** Your store address, the customer's city, state, postal code and country, and the parcel weights and dimensions.
* **When you buy a label:** Your store address, Seller Phone and Seller Email, the customer's name, company, shipping address, phone and email, and the parcels. For international shipments, it also sends the item names, quantities, weights, and values for customs.
* **When tracking is refreshed or a webhook arrives:** The label's transaction ID, or the tracking number and carrier.

Your shipping setup is now ready to quote, label, and track orders through Shippo.
