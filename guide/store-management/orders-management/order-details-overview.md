 # Order Details Overview

The Order Details screen in FluentCart provides a comprehensive breakdown of each individual customer transaction. This centralized view allows you to review all associated information, track its progress, and perform necessary management actions.

## Accessing Order Details

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Orders**.
2.  You will see a list of all the orders your store has received.
3.  To open the details for a specific order, simply click on its order number in the first column (labeled # Date). 

    ![Screenshot of Order Details Page](/images/store-management/order-details-overview/order-3-details.png)

## Understanding the Order Details Screen

The Order Details screen is organized into several panels, each providing specific information about the order.

### 1. Order Header

At the top of the screen, you’ll see the main order information and quick action buttons.

* **Receipt Number:** A unique number that identifies the order.
* **Order Status:** Shows the current state of the order (like pending or completed).
* **Refund Button:** Initiates the [refund process](/guide/store-management/orders-management/processing-refunds) for the order.
* **Edit Button:** Allows you to enter [edit mode for the order](/guide/store-management/orders-management/editing-existing-orders).
* **More Actions Dropdown:** Contains additional actions such as "Change Shipping Status", "Cancel Order", Back to Processing, and "Receipt".

### 2. Order Items

This section lists all the products included in the order.

* **Product Name:** The name of the purchased product.
* **Quantity:** The number of units purchased.
* **Individual Item Price:** The price of a single unit of the product.
* For physical products, you might see an "Order Items Delivered" button to mark fulfillment for specific items.

### 3. Payment & Financial Summary

Provides a summary of the order's financial aspects, including payments received and any outstanding amounts.

* **Payment Status:** At the top of this section, a status like Paid quickly tells you whether the customer has completed their payment.
* **Subtotal:** This is the total cost of all the products in the cart before any other charges, like shipping, are added.
* **Shipping:** This line shows the shipping cost that was added to the order.
* **Total:** This is the final price of the order that the customer was charged (Subtotal + Shipping + Taxes, etc.).
* **Total Paid:** This shows how much money the customer has actually sent for this order.
* **Net Payment:** This is the final amount your store has received after all payments have been processed.

### 4. Transaction Details

This table provides a log of all payment transactions related to this specific order, including both payments and refunds.

* **ID:** The transaction ID.
* **Gateway ID:** The unique ID from the payment gateway.
* **Date:** The date and time of the transaction.
* **Payment Method:** The method used for the transaction.
* **Total:** The amount of the individual transaction.
* **Status:** The status of the transaction.

### 5. Customer Information

Displays key details about the customer who placed the order.

* **Customer Name:** The name of the customer.
* **Contact Information:** The customer's email address.
* **Shipping Address:** The address provided for shipping, if applicable.
* **Billing Address:** The address provided for billing.
* **Labels:** Any custom labels assigned to the customer.
* This panel also offers quick links to [edit customer information](/guide/store-management/customers-management/customer-details-overview#editing-customer-information), [manage shipping address](/guide/store-management/customers-management/customer-details-overview#managing-customer-addresses), and [manage billing address](/guide/store-management/customers-management/customer-details-overview#managing-customer-addresses).

    ![Screenshot of Order Details Page](/images/store-management/order-details-overview/order-details.png)

### 6. Notes

An internal field for administrators to add any private notes or comments relevant to the order.

### 7. Activity Log

A complete, time-ordered record of all important events and changes related to this order. This helps you track how the order has progressed and makes troubleshooting easier.

* **Examples:** Order status updates (e.g., "Order status updated from completed to processing"), payment paid, refunds processed, license upgrades, and order creation events.

