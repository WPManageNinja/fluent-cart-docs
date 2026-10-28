# Shippo Rates, Labels and Tracking

Once Shippo is connected, it works in three places: your checkout page, the order screen, and the background tracking updates. This guide explains what customers see, how you buy and manage a label, and how tracking stays up to date.

If you have not connected your account yet, start with [Connecting Shippo](/guide/shipping/connecting-shippo).

## Live Rates at Checkout

When **Show Shippo Rates at Checkout** is turned on, Shippo's live rates appear on the checkout page under **Shipping Options**, in the same list as your zone-based shipping methods. Each Shippo rate is listed as the carrier and service name with its price, so customers can pick the one they prefer.

![Screenshot of the Shipping Options list at checkout showing a zone method and live Shippo rates](/images/shipping/shippo/checkout-shipping-options.webp)

FluentCart builds the parcels for the quote from the products in the cart, using each product's weight and its assigned [package](/guide/shipping/packages). Rates are quoted from your store address in [Store Settings](/guide/settings-configuration/store-settings). To get accurate rates, set a weight on every physical product and assign it a package. See [Creating Physical Products](/guide/product-types-creation/creating-physical-products) for where to set these.

A package's empty weight is added to the parcel, and if the items are heavier than the package's maximum weight, FluentCart splits them across more boxes. If none of the products in the order has a weight, FluentCart quotes a default parcel of 10 × 10 × 10 weighing 1 unit, so the rates can come back wrong instead of missing.

Shippo bills your account in its own currency. At checkout, rates are shown in the currency the customer is paying in, and any rate Shippo cannot convert is left out.

## Creating a Shipment and Buying a Label

You buy labels from the order screen. Make sure **Enable Label Generation** is turned on in the Shippo settings first.

1. Go to **FluentCart Pro > Orders** and open an order that contains physical items.
2. In the **Order items** card, click **Create shipment**. The button appears while the order still has items left to ship.

    ![Screenshot of the Order items card with the Create shipment button highlighted](/images/shipping/shippo/order-create-shipment-button.webp)

3. The **Create shipment** panel opens with three steps: **Items**, **Method**, and **Review**.

### Step 1: Items

Choose which items go in this shipment and how many of each. Use **Clear all** to reset the quantities, or **Ship all remaining** to fill them back in. This lets you split one order into several shipments.

![Screenshot of the Items step in the Create shipment panel](/images/shipping/shippo/shipment-step-items.webp)

### Step 2: Method

Use the **Ship with** dropdown to choose a carrier.

![Screenshot of the Ship with dropdown listing Manual / Other and Shippo](/images/shipping/shippo/shipment-ship-with-dropdown.webp)

* **Manual / Other:** Pick one of your zone-based methods, or choose **Custom price** to enter the cost yourself (use `0` for free shipping). With a custom price you can also enter an optional **Carrier Name**. You can enter a **Tracking Number** and **Tracking URL** either way.
* **Shippo:** FluentCart asks Shippo for the services available for this order's address and parcels, and lists them under a heading such as "11 rates for this address".

![Screenshot of the Method step listing live Shippo rates with the Cheapest and Fastest tags](/images/shipping/shippo/shipment-step-method-shippo.webp)

Each Shippo service shows its name, estimated delivery time, and price. FluentCart tags the cheapest option with **Cheapest** and the fastest with **Fastest**. FluentCart preselects a rate for you, using the first of these that applies: the same service the customer chose at checkout, the cheapest rate from your **Preferred Carrier** (if you set one in the Shippo settings), and then the cheapest rate overall. Select the service you want to purchase.

Click **Refresh** to request the rates again. Shippo can return a different set of services each time, so refresh if a service you expect is missing.

::: info
If Shippo has no services for the address, the panel shows "No rates available from Shippo for this shipment." Make sure your store address and the order's shipping address are complete, then click **Refresh**.
:::

### Step 3: Review

Check the summary of items, carrier, tracking, and cost. For a Shippo label, the carrier line shows the service and estimated delivery, and the tracking number reads **Assigned when the label is bought**.

![Screenshot of the Review step for a Shippo label](/images/shipping/shippo/shipment-step-review-shippo.webp)

You can also:

* **Shipped now / Change:** Keep the current time or set a different **Shipped At** date and time.
* **Add a note for the customer:** Write an optional note that is shown with this shipment.
* **Notify Customer:** Selected by default. Clear it if you do not want the customer notified.

Click **Buy label**. The button shows the price. A confirmation then asks you to confirm the service and its price, for example "Buy USPS — Ground Advantage for $6.42?". Click **Buy Label** to confirm. Buying a label spends money in Live mode, so this extra confirmation is intentional.

![Screenshot of the Buy label confirmation showing the service and price](/images/shipping/shippo/shipment-buy-label-confirm.webp)

When the purchase succeeds, the order's items show as **Shipped** and fulfilled, and the new shipment appears in the **Shipments** card with its tracking number. You can download the label as a PDF from there.

The label cost is what Shippo bills you, in the currency of your Shippo account. If that differs from the order currency, the form adds a note such as "Billed by Shippo in USD." with an approximate amount in the order currency.

If an order needs more than one parcel, Shippo buys one label for each parcel. FluentCart keeps the first label's PDF, so **Download label** gives you that one. Download the others from your Shippo dashboard.

### International Shipments

For shipments that cross borders, FluentCart builds the customs declaration for you, so you buy the label the same way as a domestic one. The declaration lists the contents as merchandise, with the package returned to you if it cannot be delivered. Each item is declared with its name, quantity, total weight, and total value for the quantity shipped, and an item without a weight is declared at 0.1 kg per unit. Shipments between countries in the European Union customs union do not need a declaration.

## Managing Shipments

Shipments appear in the **Shipments** card on the order, with columns for **Status**, **Shipment**, **Tracking**, and **Cost**. Each row shows the service, the items shipped, and the date. The **Tracking** column has the tracking number with buttons to copy it and to open the carrier's tracking page.

The **Status** badge is a dropdown. If you can manage order statuses, you can change a shipment to Dispatched, In Transit, Delivered, Returned, or Failed by hand. Carrier tracking never moves a shipment out of Delivered or Returned, but you can still correct those by hand.

![Screenshot of the Shipments card showing a Shippo shipment](/images/shipping/shippo/order-shipments-card.webp)

Click the arrow at the end of a row to expand the details: **Latest tracking**, **Shipped via**, and **Note to customer**. The expanded row also has **Download label** and **Refresh tracking** buttons.

![Screenshot of the expanded shipment details](/images/shipping/shippo/order-shipments-card-details.webp)

Click the three-dot button on a shipment to open its actions:

![Screenshot of the shipment actions menu](/images/shipping/shippo/shipment-actions-menu.webp)

* **Download label:** Opens the label PDF so you can print it.
* **Refresh tracking:** Asks Shippo for the latest tracking status. If nothing has changed, FluentCart shows "Tracking is already up to date." You can refresh a shipment once every 15 seconds, and the action is not offered once the shipment is Delivered or Returned.
* **Copy tracking number:** Copies the number to your clipboard.
* **Delete shipment:** Removes the shipment. For a Shippo shipment, its label is voided, and the carrier refunds it if it is eligible. If the void fails, the shipment is still deleted, and FluentCart tells you to void the label in the carrier portal.

![Screenshot of the Delete shipment confirmation](/images/shipping/shippo/shipment-delete-confirm.webp)

When you delete a shipment, the order's items go back to unshipped, so you can create a new shipment for them.

::: info
In Test mode, labels are free and never shipped. Shippo only tracks its own test tracking numbers (those beginning with `SHIPPO_`), so a test label's tracking shows no carrier updates.
:::

## Tracking Updates

FluentCart reads tracking from Shippo in two ways:

* **Automatically:** Shippo calls your webhook whenever a tracking status changes. This requires the webhook from [Connecting Shippo](/guide/shipping/connecting-shippo#step-3-adding-the-webhook-in-shippo).
* **Manually:** Click **Refresh tracking** on a shipment. There is a short wait of 15 seconds between refreshes, and the action is not offered once the shipment is Delivered or Returned.

Shippo's tracking statuses are mapped to the shipment status like this:

| Shippo status | Shipment status |
|---|---|
| Pre-transit | Dispatched |
| Transit | In transit |
| Delivered | Delivered |
| Returned | Returned |
| Failure | Failed |

A status Shippo marks as unknown is ignored, so your shipment keeps its current status.

The webhook only acts on tracking updates for shipments in your store. FluentCart ignores events that do not match the mode a label was bought in, events for tracking numbers it does not know, and other event types, and it rejects any call that carries an invalid token.

## If Something Goes Wrong

* **A carrier refused the label:** FluentCart shows which carrier refused it and what Shippo said, and confirms that no label was bought and nothing was charged. For example, if you pick a UPS service before activating UPS in your Shippo account, Shippo answers that the UPS account is not yet registered. Activate the carrier in your Shippo dashboard, or pick a different service, and try again.
* **Shippo rates do not show at checkout:** FluentCart never shows an error to the customer. When a quote fails, the Shippo rates are simply left out of the list. Check these in order:
    * Shippo is enabled, the selected mode has a token, and **Show Shippo Rates at Checkout** is on.
    * Your store address is complete. See the [setup notices](/guide/shipping/connecting-shippo#setup-notices).
    * Shippo answered in time. A quote that takes longer than 5 seconds is skipped.
    * Quoting is not paused. After Shippo fails to respond or returns an account-level error, FluentCart stops asking for 1 minute for every visitor. A single visitor can also trigger up to 20 live quotes in 10 minutes.
    * The answer may be cached. FluentCart keeps Shippo's answer for about 10 minutes for the same address and cart, so changes such as a new store address or token can take that long to show at checkout.
* **No rates in the Create shipment panel:** See the note under [Step 2: Method](#step-2-method).

## Data Shared with Shippo

FluentCart only contacts Shippo after you enable it and save an API token. It sends:

* **At checkout:** Your store address, the customer's city, state, postal code and country, and the parcel weights and dimensions.
* **When you buy a label:** Your store name and company name, your store address, Seller Phone and Seller Email, the order number as label metadata (for example "Order #123"), the customer's name, company, shipping address, phone and email, and the parcels. For international shipments, it also sends the item names, quantities, weights, and values for customs.
* **When tracking is refreshed or a webhook arrives:** The label's transaction ID, or the tracking number and carrier.

Your shipping setup is now ready to quote, label, and track orders through Shippo.
