 # Processing Refunds

FluentCart provides a straightforward way to process refunds for your orders, whether it's a full refund or a partial amount. You can also manage related subscriptions and licenses during the refund process.

## Steps to Process a Refund

1.  Navigate to the **[Order Details](/guide/store-management/orders-management/order-details-overview)** screen for the specific order you wish to refund.
2.  In the top right corner of the Order Details screen, click the **"Refund"** button.

    ![Screenshot of Refund Button on Order Details](/guide/public/images/store-management/refund-button-on-order.png)

3.  A **"Refund Payment"** modal window will appear.

4.  Configure the refund details:
    * **Refund with transaction\:** Use the dropdown to select the specific payment transaction you wish to refund. This is crucial if an order had multiple payments or partial payments.
    * **Select Item/s:** Select the items you are refunding. 
    * **Refund amount\:** Enter the amount you wish to refund.
<<<<<<< HEAD
        * FluentCart displays the **"Max refund amount for this transaction"** (e.g., `$51.3`), ensuring you don't refund more than was paid in that specific transaction. This allows for **partial refunds**. You can manually adjust the amount if needed.
    * **I want to Mange Stock:** Check this option to automatically update the stock quantity for this product after each sale or return. 
=======
        * FluentCart displays the **"Max refund amount for this transaction"**, ensuring you don't refund more than was paid in that specific transaction. This allows for **partial refunds**. You can manually adjust the amount if needed.
>>>>>>> 1e3e0b9b2bef14497063cca0190b15771ec86b8a
    * **Subscription:** If the order includes a subscription, you will see a checkbox for **"Cancel Subscription (if any)"**.
        * Checking this box will not only process the refund but also automatically cancel the associated subscription.
    * **License:** If the order includes a digital product with a license, you will see a checkbox for **"Revoke License (if any)"**.
        * Checking this box will revoke the issued license in addition to processing the refund, ensuring proper access control for licensed digital goods.

5.  After configuring all options, click the **"Refund"** button at the bottom of the modal (e.g., "Refund $51.3") to confirm and process the refund.

![Screenshot of Refund Payment Modal](/guide/public/images/store-management/refund-payment-modal.png)

## Post-Refund Status

* After a refund is processed, the order's financial summary on the Order Details screen will update to reflect the refund amount (e.g., **"Total Refund Owed"** alert).
* The **Activity Log** for that order will also record the refund event, including details like who processed it and when.
