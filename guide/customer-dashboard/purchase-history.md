# Purchase History

The **Purchase History** section provides a complete record of all your orders made through the FluentCart store. You can view detailed information about each transaction, including payment status and ordered items.

## Viewing All Purchases

When you go to the Purchase History page, you'll see a list of all your orders. Each row gives you a quick summary:

* **# (Order Number)**: This shows your unique order number and the date you placed the order.
* **Items**: Here you'll see a quick summary of the products included in that order.
* **Status**: A simple badge shows the current status, like **Completed**, **On-Hold**, or **Canceled**.
* **Amount**: This is the total price you paid for the order.

Once the store ships a physical order, a delivery badge and a short line appear under its items. For a single shipment, the badge shows its status, such as **Shipped**, **On the way**, **Out for delivery**, or **Delivered**, and the line shows the carrier and the expected delivery date when the carrier provides one. An order sent in several parts shows **Partly shipped** (or **Shipped in parts** once every item has gone out), with a count of units per status, for example "4 on the way · 1 shipped · 1 not shipped yet".

<!-- TODO(screenshot): Purchase History list on the customer portal with a delivery badge and line under a shipped order. Needs an order with a shipment on cart.local; take it from the customer account of that order. -->

## Searching Your Orders

Have a lot of past orders? No problem. Use the **Search bar** (look for the magnifying glass icon) at the top-right of your order list to quickly find the purchase you're looking for.

![Screenshot of Purchase History](/images/customer-dashboard/purchase-history/purchase-history-1.webp)


## Viewing Individual Order Details

To see the full details for a purchase, just click on its order number in the list. This will take you to a detailed summary page where you can find everything related to that specific order.

Here’s what you might see on the details page:

* **Order Summary**: At the top of the page, you'll find a quick summary showing the product you bought, the total price, and a payment status like **Paid**.
* **Subscription Plan Details**: If your purchase was for a subscription, you'll see a dedicated 'Subscription Plan' section. This area provides all the important details, including the renewal date, the recurring cost, and the payment method used.
* **Downloads**: For any digital products, a 'Download' section will appear with a list of your files. Simply click the **Download** button to save the file to your device.
* **Transaction and Billing Info**: At the bottom of the page, you can find the specific **Related Transactions** for your payment and the **Billing Address** that was used for the order.
* **License Details**: If your order included a product with a software license, you would also see a section here with your license key and activation details.


![Screenshot of Purchase History](/images/customer-dashboard/purchase-history/purchase-history-2.webp)

## Tracking Your Delivery

When part or all of an order has shipped, the order details page shows a **Delivery** card above the **Summary**. Each shipment is listed as **Shipment 1**, **Shipment 2**, and so on, with its status, the time of its last update, the expected delivery date (when the carrier provides one), and a **Track** button when the carrier has a tracking page. Items that have not shipped yet are listed under **Not shipped yet**, with a note that you'll get an email when they ship.

The shipment with the newest update opens on its own, along with any shipment that has a delivery problem. Click another shipment to see its details:

* **Delivery progress:** Three steps, **Shipped**, **On the way**, and **Delivered**, with the current step highlighted. When the carrier reports the parcel is out for delivery, the status reads **Out for delivery** and **Expected today**.
* **Latest carrier update:** The carrier's most recent tracking message and when it arrived.
* **Carrier and Tracking Number:** The carrier and service, and the tracking number. Click **Copy tracking number** to copy it, or **Track on** the carrier's site to follow the parcel. If the store didn't add a tracking number, you see **No tracking number available**.
* **Parcels in this shipment:** For a shipment sent in more than one parcel, each parcel with its own tracking link.
* **In this shipment:** The items and quantities in that shipment.
* **Note from the store:** Any note the store added for you when it shipped the order.

If the carrier could not deliver a parcel or it went back to the store, the shipment opens with a red notice, such as **The carrier could not deliver this parcel**, and asks you to check the carrier page or contact the store.

<!-- TODO(screenshot): Delivery card on a customer-portal order page with one shipment expanded (progress steps, carrier, tracking number, items). Needs an order with a shipment on cart.local; a Shippo test label gives the "Expected" date. -->

## Upgrading a One-Time Purchase

Some products can be moved up to a bigger package after you have bought them, and you no longer have to own an active subscription to do it! If the store has set up an [upgrade path](/guide/product-types-creation/defining-upgrade-paths) for something you bought outright, an **Upgrade Plan** button appears next to that item on the order details page.

### How to Upgrade an Item:

1. Click the **Upgrade Plan** button located right beside the item. An **Upgrade** options window will open.

![Upgrade Plan](/images/customer-dashboard/purchase-history/upgrade-3.webp)

2. Review the available packages. Each row shows the package name, its regular price, and the **Amount** to pay (which automatically credits your original purchase amount).

3. Click **Upgrade** next to the package you want. You will be taken directly to **checkout** to pay the remaining difference.

> [!Note]
> The **Upgrade Plan** button only appears on items that qualify. Your original order must be paid, and the store must currently offer an active upgrade path for that exact product.
> Each order can be upgraded once. If you try to upgrade an order again, you'll see "This order has already been upgraded."

![Upgrade Plan](/images/customer-dashboard/purchase-history/popup-upgrade-4.webp)