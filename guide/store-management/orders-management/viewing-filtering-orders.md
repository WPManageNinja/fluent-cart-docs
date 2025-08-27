 # Viewing & Filtering Orders

The Orders list is your central hub for tracking all transactions and customer purchases in your FluentCart store. This guide will show you how to view your orders and use filters to quickly find the specific orders.

## Understanding Order Stats Overview

Beyond the main list, you can get a quick summary of your order stats.
To see this overview, click on **More Actions** button in the top right corner of the Orders screen, and then select "**Show Order Stats**". You can hide this overview anytime by using the same option again.

This section provides a snapshot of important order numbers, including:

* **All orders:** The total count of all orders in your store. 
* **Paid Orders:** The number of orders that have been successfully paid for.
* **Paid Order items:** The total count of individual product items across all paid orders.
* **Order value (Paid):** The total monetary value of all paid orders.

    ![Screenshot of Orders List Page](/images/store-management/viewing-and-filtering-orders/order-stats-overview.png)

## Accessing the Orders List

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Orders** in the top menu.
2.  This will open the main **Orders** screen, displaying a comprehensive list of all your store's orders.

## Understanding the Orders List Table

The Orders list is presented in a table format, with each row representing an individual order and displaying key information at a glance:

* **Date:** The date and time when the order was placed.
* **Customer:** The name of the customer who placed the order.
* **Items:** The number of distinct product items included in the order.
* **Total:** The total monetary value of the order.
* **Payment Status:** Indicates the current status of the payment.
* **Status:** The current fulfillment or processing status of the order.
* **Order Type:** Differentiates between various types of transactions.
* **Action Icons:** On the far right of each row, you'll see icons that let you quickly print things like order details.

## Filtering Orders

FluentCart provides many ways to filter your orders, helping you narrow down the list based on status or other criteria.

### 1. Filtering by Order Status

At the top of the orders list, you will find several default tabs for one-click filtering of the most common order statuses:

* **All:** Displays every order in your store, regardless of status.
* **Completed:** Shows only orders that have been successfully paid for and fulfilled.
* **Processing:** Filters for orders that have been paid but are still awaiting fulfillment.
* **On Hold:** Displays orders that are awaiting payment or require manual action before they can be processed.

For more specific filtering needs, FluentCart provides an additional set of advanced filters under the **More views** dropdown menu. Clicking on **More views** will reveal the following options:

* **Paid:** This filter displays all orders that have a "Paid" payment status, regardless of their fulfillment status (e.g., Processing, Completed).
* **Subscription:** Isolates only the initial orders that were placed for a new subscription.
* **Renewal:** Shows only orders that were generated for a subscription renewal.
* **Refunded:** Filters the list to show only orders that have been fully refunded.
* **Partially Refunded:** Displays orders where only a portion of the total amount was returned to the customer.
* **Upgraded From:** This view shows the original orders that customers have upgraded from (e.g., the initial "Standard Plan" order before upgrading).
* **Upgraded To:** This view shows the new orders that were created as a result of a customer upgrading their subscription or license (e.g., the new "Pro Plan" order).


    ![Screenshot of Orders List Page](/images/store-management/viewing-and-filtering-orders/orders-list.png)

### 2. Using the Advanced Filter

For more specific control, use the **Advanced Filter** option:

1.  Enable the **"Advanced Filter"** by clicking the **toggle** button located at the top right of the Orders screen. You can add multiple advanced filter by clicking the **+OR** button.
    
2.  This will open a section with many filtering options, allowing you to search using specific details under two main categories:

**Order Property:** Filters related to the order itself, such as:
* By order item
* Order status
* Payment Status
* Order type
* Payment Method

**Customer Property:** Filters related to the customer who placed the order, such as:
* Customer First name
* Customer last name
* Customer Email and more.

**Labels:** Filter related to the Labels, such as:
* Label Name

3.  Apply your desired filters and click **"Apply"** to see the refined list of orders.
4.  You can **"Reset"** the filters to view all orders again.

![Screenshot of Advanced Filter Button](/images/store-management/viewing-and-filtering-orders/advanced-filter-button.png) 

### 3. Using the Search Bar

You can also use the general search bar located at the top of the screen to quickly find orders by ID, Status, Payment status, Method, Amount, Customer Name, or Items.
