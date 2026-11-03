# Managing Shipments

When you send out a physical order, you record it as a shipment right on the order. FluentCart lets you split one order into several shipments, add tracking when you have it, and email the customer about each parcel as it leaves your store. This page covers shipments you send yourself with **Manual / Other**, using your own zone-based shipping methods and any carrier you like.

If you buy carrier labels through Shippo, the same panel is used with a few extra steps. See [Shippo Rates, Labels and Tracking](/guide/shipping/shippo-rates-labels-tracking) for that flow.

## Creating a Shipment

You create shipments from the order screen. First, open an order that contains physical items.

1. Go to **FluentCart Pro > Orders** and open the order.
2. In the **Order items** card, click **Create shipment**.

    ![Screenshot of the Order items card with the Create shipment button highlighted](/images/shipping/shippo/order-create-shipment-button.webp)

3. The **Create shipment** panel opens with three steps: **Items**, **Method**, and **Review**.

The **Create shipment** button only appears while the order still has physical items left to ship. It is also hidden when the order's shipping status is **Delivered** or **Unshippable**, because you set those statuses on purpose. If you need to add a shipment to such an order, change its shipping status first.

### Step 1: Items

Choose which items go in this shipment and how many units of each. Each item shows how many of its units have shipped so far, for example "1 of 3 shipped".

* **Clear all:** Sets every quantity to zero, so you can pick only the items in this parcel.
* **Ship all remaining:** Fills in every unit that has not shipped yet.

Set at least one item to a quantity above zero, then click **Continue**.

![Screenshot of the Items step in the Create shipment panel](/images/shipping/shippo/shipment-step-items.webp)

#### Splitting an Order into Several Shipments

To ship an order in parts, ship only some of the items or units now and leave the rest at zero. After you create the shipment, the **Create shipment** button stays available for the remaining units, and the next shipment only offers what is still left to ship. Repeat this for each parcel until everything has shipped.

### Step 2: Method

Make sure **Ship with** is set to **Manual / Other**. FluentCart lists the shipping methods from your shipping zones that match this order's address, with their prices. Pick one of these methods, or choose **Custom price**.

<!-- TODO(screenshot): Method step of the Create shipment panel with Manual / Other selected, showing the zone methods list, Custom price, and the Carrier Name, Shipping Cost, Tracking Number and Tracking URL fields. -->

* **A zone method:** The shipment uses the method's name and price, so the **Carrier Name** and **Shipping Cost** fields are hidden.
* **Custom price:** Enter the cost yourself in **Shipping Cost**. Use `0` for free shipping. You can also type an optional **Carrier Name**, such as the courier you used.
* **Tracking Number:** *(Optional)* The tracking number from your carrier. You can leave it empty, for example when you deliver locally or send an untracked parcel.
* **Tracking URL:** *(Optional)* A link where the customer can follow the parcel. If the picked shipping method has a **Tracking URL Pattern**, this field fills in for you as you type the tracking number. A URL you type yourself is kept.

The shipping cost you enter is recorded on the shipment and shown in the **Cost** column. It does not change what the customer paid.

::: info Setting a tracking URL pattern
To fill tracking links automatically, edit a shipping method in your shipping zone and enter a **Tracking URL Pattern**. Use `{tracking_number}` where the number goes, for example `https://track.dhl.com/{tracking_number}`. See [Setting Up Shipping Methods](/guide/shipping/setting-up-shipping-methods) for where shipping methods are edited.
:::

If no zone method matches the order, or the methods could not be loaded, you can still continue to the next step.

### Step 3: Review

Check the summary of items, carrier, tracking, and cost. A tracking number you left empty shows as **Not set**. You can also set the following:

* **Shipped now / Change:** Keeps the time you click **Create Shipment** as the shipping time, or lets you set a different **Shipped At** date and time.
* **Add a note for the customer:** An optional **Note to customer** that is shown with this shipment, in the shipment email and on the customer's order page.
* **Notify Customer:** Selected by default. When it is selected, the customer gets the shipment email for this shipment. Clear it to create the shipment silently.

<!-- TODO(screenshot): Review step of the Create shipment panel for a Manual / Other shipment, showing the summary, Shipped now / Change, Add a note for the customer, and the Notify Customer checkbox. -->

Click **Create Shipment**. The new shipment appears in the **Shipments** card on the order.

### The Shipment Email

The **Notify Customer** checkbox is the only switch for the shipment email. There is no store-wide toggle for it in your email settings, so whatever you choose here is what happens for this shipment.

While a shipment is being created, FluentCart does not also send the general "order shipped" email, so the customer gets one email per shipment instead of two. To change the wording of the shipment email, see [Configuring Email Notifications](/guide/settings-configuration/email-configuration/configuring-email-notification#shipment-email).

## Order Shipping Status

FluentCart updates the order's shipping status for you as you add shipments:

* **Unshipped:** No units have shipped yet.
* **Partially Shipped:** Some units have shipped and some are still waiting.
* **Shipped:** Every physical unit is in a shipment.
* **Delivered:** Every unit has shipped and every shipment on the order is marked **Delivered**.

## Managing Shipments

The **Shipments** card appears on the order once it has at least one shipment. It has columns for **Status**, **Shipment**, **Tracking**, and **Cost**. Each row shows the method or carrier, the items shipped, and the date. A manual shipment without a tracking number reads **No tracking number**.

<!-- TODO(screenshot): Shipments card on an order with two Manual / Other shipments (one with a tracking number, one showing No tracking number) after splitting the order. -->

Click a row to expand its details, such as **Shipped via** and **Note to customer**.

### Shipment Statuses

A new shipment starts as **Dispatched**. The **Status** badge is a dropdown, so if you can manage order statuses, you can move a shipment through these statuses by hand:

* **Dispatched:** The parcel has left your store.
* **In Transit:** The parcel is on its way.
* **Delivered:** The parcel has arrived. When every shipment on the order is Delivered, the order's shipping status becomes **Delivered**.
* **Returned:** The parcel came back to you.
* **Failed:** The parcel could not be delivered.

Manual shipments do not receive carrier updates, so their status only changes when you change it. Customers see the status on their order page in the [customer portal](/guide/customer-dashboard/purchase-history#tracking-your-delivery).

### Shipment Actions

Click the three-dot button on a shipment to open its actions:

* **Copy tracking number:** Copies the number to your clipboard. Shown when the shipment has one.
* **Delete shipment:** Removes the shipment after you confirm. Its items go back to unshipped, so you can create a new shipment for them.

You now have every parcel of the order recorded, and your customer can follow each one from their account.
