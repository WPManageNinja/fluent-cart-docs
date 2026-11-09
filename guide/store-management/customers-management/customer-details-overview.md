# Customer Details Overview

The individual **Customer Details** screen in FluentCart provides a comprehensive profile for each of your customers. This centralized view allows you to access all relevant information about a customer, including their contact details, addresses, purchase history, subscriptions, and associated licenses.

Customers also have access to their own personalized dashboard where they can manage their profile, view orders, subscriptions, and licenses. For more details on what your customers see and can manage, refer to the [Customer Dashboard Profile Management](/guide/customer-dashboard/profile-management) documentation.

## Accessing Customer Details

From your WordPress dashboard, navigate to **FluentCart Pro > Customers**. On the **Customers** list, click on the **Customer Name** next to the customer you wish to inspect.

   ![Screenshot of Customer Details Page](/images/store-management/customer-details/customer-details.webp)

## Understanding the Customer Details Screen

The Customer Details screen is organized into several panels, each providing specific information about the customer.

### 1. Customer Information

The **Customer Information** card in the right-hand sidebar shows the customer's name and photo, their order count, **Lifetime Value**, and the linked WordPress user (**WP User: #ID**). If no WordPress user is linked, an **Attach User** button lets you connect one.

The card also holds the customer's contact details and address management options:

* **Contact Information:** Displays the customer's email address.
* **Default Addresses:** Shows the customer's default shipping and billing addresses.
* **Action Links:** Open the **...** menu in the card header for these options:
    * **Edit customer information:** Allows you to modify the customer's core details.
    * **Manage shipping address:** Provides access to manage or add shipping addresses for this customer.
    * **Manage billing address:** Provides access to manage or add billing addresses for this customer.
    * **Recalculate lifetime value:** Refreshes the Lifetime Value from the customer's orders.
* **Labels:** A section for assigning custom labels to the customer.

    <!-- TODO(screenshots): customer-information-details.webp is outdated: the ... menu now also shows Recalculate lifetime value; retake with the full menu open. Update later. -->
    ![Screenshot of Customer Details Page](/images/store-management/customer-details/customer-information-details.webp)

### 2. Orders Section

The **Orders** card lists all orders placed by this specific customer.

* **Order Details:** Shows the **Date** (with the order ID), **Items**, **Total**, **Payment Status**, **Status**, and **Order Type** of each order. Type in the search box and press **Enter** to search this customer's orders.
* **Clickable Orders:** Each order ID is clickable, allowing you to quickly navigate to the [individual Order Details screen](/guide/store-management/orders-management/order-details-overview) for that specific transaction.

### 3. Subscriptions

If the customer has subscriptions, a **Subscriptions** card lists each one with its ID, product, status, billing, created date, **Next Billing Date**, **Collection Method**, **Bills Count**, **Order ID**, and **Payment Method**.

<!-- TODO(screenshots): no image of the Subscriptions card on the Customer Details screen; capture a customer with at least one subscription showing the Subscriptions card. Update later. -->

### 4. Licenses

With **FluentCart Pro** and licensing active, a **Licenses** card lists the customer's license keys. Users without the license view permission don't see this card.

* **License Details:** Includes columns for **License Key**, **Product**, **Order ID**, and **Activations**.
* **Clickable License Keys:** Each license key is clickable, allowing you to navigate to the [License Details screen](/guide/product-types-creation/creating-digital-products-with-licenses#_7-product-specific-license-settings) for that specific license.

The Customer Details page is an invaluable tool for understanding your customers' interactions with your store and providing personalized support.
