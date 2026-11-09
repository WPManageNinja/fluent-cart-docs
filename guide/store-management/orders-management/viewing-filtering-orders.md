# Viewing & Filtering Orders

The Orders list is your central hub for tracking all transactions and customer purchases in your FluentCart store. This guide will show you how to view your orders and use filters to quickly find the specific orders.

## Accessing the Orders List

From your WordPress dashboard, navigate to **FluentCart Pro** > **Orders**. This will take you directly to the main **Orders** screen, where you'll see a list of all the transactions in your store.

## Understanding the Orders List Table

Your orders are neatly organized in a table. Each row is a single order, and each column gives you a quick piece of information:

* **Date:** The date and time when the order was placed.
* **Customer:** The name of the customer who placed the order.
* **Items:** The number of distinct product items included in the order.
* **Total:** The total monetary value of the order.
* **Payment Status:** Indicates the current status of the payment.
* **Status:** The order status (Processing, Completed, On Hold, Canceled, Failed).
* **Order Type:** Differentiates between various types of transactions.
* **View Invoice:** An icon on the far right opens the order's invoice/receipt.

You can hide the **Customer**, **Items**, **Status**, **Order Type**, and action columns from the column settings.

    ![Screenshot of Orders List Page](/images/store-management/viewing-and-filtering-orders/orders-list.webp)

## Customizing Your View & Actions

You can change what you see on the Orders page to fit your needs and quickly clean up your data. In the top-right corner, you’ll find a **More actions** dropdown button that gives you a few handy options:

### Showing or Hiding Order Stats
If you want a quick "health check" of your store, you can toggle the order stats panel. 

Just click the **More actions** button and select **Show Order Stats**. A summary will appear at the top, showing you important numbers like:

* **All Orders:** The total number of orders your store has ever received.
* **Paid Orders:** How many orders have been successfully paid for.
* **Paid Order Items:** The total number of individual items sold.
* **Order value (Paid):** The total amount of money you've earned from paid orders.

*(If you want to hide this summary to get more space on your screen, just click the dropdown again and choose the **Hide Order Stats** option).*

### Show Bulk Actions
Selecting this option adds checkboxes to the list. Tick the orders you want, then click **Delete Selected** to remove them. Completed orders can't be deleted and are reported as skipped.

### Delete Test Orders
When you are first setting up your store, you will likely create a few fake orders to test your payment gateways. Instead of deleting them one by one, simply click **Delete Test Orders** from the dropdown to instantly clean up your dashboard and reset your data before going live.

### Export Orders
Exports your orders to a CSV or JSON file. See [Exporting Your Store Data](/guide/store-management/exporting-data).

![Screenshot of Orders List Page](/images/store-management/viewing-and-filtering-orders/order-stats-overview.webp)

## Filtering Orders

FluentCart provides many ways to filter your orders, helping you narrow down the list based on status or other criteria.

### 1. Filtering by Order Status

Across the top of the list, you'll see tabs for the most common order statuses. You can click on any of them to instantly filter your orders:

* **All**: Shows every single order in your store.
* **Completed**: Only shows orders that are fully paid and fulfilled.
* **Processing**: Filters for orders that have been paid but are still waiting to be shipped or completed.
* **On Hold**: Shows orders that might be waiting for payment or need some other manual check-up.

For even more filter options, click the **More views** dropdown menu. Here you can find more specific filters like:

* **Paid**: Shows all orders that have been paid for, no matter their fulfillment status.
* **Subscription**: Narrows the list to only the first order a customer made when they signed up for a subscription.
* **Renewal**: Shows only the orders that were automatically created when a subscription renewed.
* **Refunded**: Displays orders that have been fully refunded.
* **Partially Refunded**: Shows orders where you only returned part of the money to the customer.
* **Upgraded From / Upgraded To**: These are helpful for tracking subscription upgrades. One shows the original order, and the other shows the new, upgraded order.

### 2. Using the Advanced Filter

For times when you need to get super specific, the **Advanced Filter** is your best friend.

Click the toggle button next to the search bar to turn on the **Advanced Filter**. This opens up a new panel where you can set very detailed rules. Clicking the **+ Add** button reveals several categories to build your filter:

* **Order Property:** By Order Items, Order Status, Payment Status, Order Type, Currency, Payment Method, Order Amount, Order Hash (UUID), and Order Date.
* **Customer Property:** Customer Name and Customer Email.
* **Transactions Property:** Transaction Id, Transaction Status, Transaction Type, Card last 4, Card Brand, and Payer email.
* **License Property:** License key and License Status. Shown only with FluentCart Pro and the licensing module active.
* **Utm Property:** Utm Campaign, Utm Term, Utm Source, Utm Medium, Utm Content, Utm Id, and Refer Url.
* **Tax Property:** B2B Purchase and Reverse Charge (Yes/No).
* **Labels:** Label Name.

You can add multiple rules by clicking the **+OR** button to create very powerful and specific searches. When you're done, click **Apply**. To go back to the full list, just click **Reset**.

To reuse a filter, click **Save as view**, give it a name, and it appears under **More views**. Saving views requires FluentCart Pro. The Advanced Filter itself is free.

![Screenshot of Advanced Filter Button](/images/store-management/viewing-and-filtering-orders/advanced-filter-button.webp) 

### 3. Using the Search Bar

If you just need to find something fast, the search bar at the top of the page is perfect. Type an invoice number, customer name, customer email, or product name to find matching orders. To look up an order by its ID, type `id = 1234` (you can also use `id > 100` or a range such as `id :: 1-10`).

You now have every tool you need to find any order in your store in seconds.
