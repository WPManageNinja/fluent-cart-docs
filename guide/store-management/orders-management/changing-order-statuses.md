# Changing Order Statuses

Managing order statuses is crucial for efficient order fulfillment and clear communication with your customers. FluentCart allows you to easily update the status of individual orders.

## Understanding Order Statuses

Orders in FluentCart naturally progress through various statuses, indicating their current state:

* **Processing:** The order has been received and payment is confirmed, but items are still being prepared for fulfillment (e.g., packing, shipping).
* **Completed:** The order has been successfully fulfilled, items shipped (if physical), and payment fully received.
* **On Hold:** The order is temporarily paused, often due to pending payment, stock issues, or customer query.
* **Canceled:** The order has been canceled by the administrator or customer.
* **Failed:** The order could not be processed, usually because the payment failed.

Refunds are tracked in the order's **payment status** (**Refunded** or **Partially Refunded**), not in the order status. See [Understanding Statuses](/guide/store-management/understanding-statuses) for every status FluentCart uses.

![Screenshot of Order Status](/images/store-management/changing-order-statuses/order-status.webp)

## How to Change Order Status

You can change an order's status and perform other related actions from the **[Order Details screen](/guide/store-management/orders-management/order-details-overview)**.

1.  Navigate to the **Order Details** screen for the specific order you wish to update.
2.  In the top right corner of the screen, click the **More Action** dropdown.

3.  The dropdown shows only the actions that apply to the order's current state:

    * **Change Shipping Status:** Shown for physical orders that are not canceled. Opens an **Update Shipping Status** window where you pick **Unshipped**, **Shipped**, **Delivered**, or **Unshippable** and click **Update**.
    * **Mark As Complete:** Shown only while the order is **Processing**. Confirm to mark the order completed.
    * **Cancel Order:** Shown until the order is canceled. Canceling can't be undone: a canceled order can't be moved back to another status or edited. Stock is adjusted automatically. If the customer already paid, [refund](/guide/store-management/orders-management/processing-refunds) them separately.
    * **Back to processing:** Shown only while the order is **Completed**. Moves it back to **Processing**, for example when it still needs [editing](/guide/store-management/orders-management/editing-existing-orders).
    * **Sync Order Statuses:** Shown while the order is neither completed nor canceled. Re-checks the order's payment and order statuses against its transactions.
    * **Receipt:** Opens the customer's receipt in a new tab.
    * **Generate missing licenses:** Appears only when a licensed product in the order is missing its license key (FluentCart Pro).
    * **Delete order:** Appears for test-mode orders and canceled orders.

    ![Screenshot of the More Action dropdown](/images/store-management/changing-order-statuses/order-more-actions-dropdown.webp)

### Using the Activity Log

Any changes to an order's status, whether manual or automated, are recorded in the **Activity Log** on the Order Details screen. This provides a clear audit trail of all status transitions for the order.
