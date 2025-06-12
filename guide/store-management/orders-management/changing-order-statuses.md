 # Changing Order Statuses

Managing order statuses is crucial for efficient order fulfillment and clear communication with your customers. FluentCart allows you to easily update the status of individual orders.

## Understanding Order Statuses

Orders in FluentCart naturally progress through various statuses, indicating their current state:

* **Processing:** The order has been received and payment is confirmed, but items are still being prepared for fulfillment (e.g., packing, shipping).
* **Completed:** The order has been successfully fulfilled, items shipped (if physical), and payment fully received.
* **On Hold:** The order is temporarily paused, often due to pending payment, stock issues, or customer query.
* **Canceled:** The order has been canceled by the administrator or customer.
* **Refunded:** The order has been refunded.

## How to Change Order Status

You can change an order's status and perform other related actions from the **[Order Details screen](/guide/store-management/orders-management/order-details-overview)**.

1.  Navigate to the **Order Details** screen for the specific order you wish to update.
2.  In the top right corner of the screen, click the **"More Actions"** dropdown menu.

3.  From the dropdown, you will find several actions to manage the order's status:

    * **Change Shipping Status:** This option is primarily for physical products. It allows you to update the shipping status of items within the order, crucial for tracking fulfillment progress.
    * **Mark As Complete:** Selecting this option will mark the entire order as completed. This signifies that the order has been fully processed, items shipped (if physical), and payment fully received.
    * **Cancel Order:** Selecting this option will mark the entire order as canceled. This often triggers stock adjustments and may be followed by a [refund process](/guide/store-management/orders-management/processing-refunds) if payment was already received.
    * **Back to processing:** This action allows you to revert an order's status to "Processing." This is useful if an order was prematurely marked as "Completed" or "On Hold" and still requires further attention or [editing](/guide/store-management/orders-management/editing-existing-orders).
    * **Receipt:** This option typically allows you to view or re-send the customer's purchase receipt for the order.

     ![Screenshot of More Actions Dropdown](/guide/public/images/store-management/order-more-actions-dropdown.png)

### Using the Activity Log

Any changes to an order's status, whether manual or automated, are recorded in the **Activity Log** on the Order Details screen. This provides a clear audit trail of all status transitions for the order.
