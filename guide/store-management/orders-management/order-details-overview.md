# Order Details Overview

The Order Details screen in FluentCart provides a comprehensive breakdown of each individual customer transaction. This centralized view allows you to review all associated information, track its progress, and perform necessary management actions.

## Accessing Order Details

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Orders**.
2.  You will see a list of all the orders your store has received.
3.  To open the details for a specific order, click the order in the first column, **Date**, which also shows its order ID.

    ![Screenshot of Order Details Page](/images/store-management/order-details-overview/order-3-details.webp)

## Understanding the Order Details Screen

The Order Details screen is organized into several panels, each providing specific information about the order.

### 1. Order Header

At the top of the screen, you’ll see the main order information and quick action buttons.

* **Order Number:** The order's unique 12-character code, shown as **Order #** after the breadcrumb (for example `#A7K2P9X4M1Q8`). Older orders keep their longer code, which is shortened here; hover over it to see the full value. This is the number your customers see on their order pages and emails.
* **Receipt Number:** The receipt number, such as `INV-1001`, shown below the title next to the order date. It is assigned when the order is paid, so an unpaid order does not have one yet. You set its prefix and starting number in the [checkout settings](/guide/settings-configuration/cart-checkout-settings).
* **Order Status and Badges:** The order status, plus a **B2B** badge for business purchases. The order date and order type also appear under the title.
* **Refund Button:** Initiates the [refund process](/guide/store-management/orders-management/processing-refunds) for the order.
* **Edit Button:** Allows you to enter [edit mode for the order](/guide/store-management/orders-management/editing-existing-orders).
* **More Action Dropdown:** Contains **Change Shipping Status**, the status actions (**Mark As Complete**, **Cancel Order**, **Back to processing**), **Sync Order Statuses**, **Receipt**, and, when applicable, **Generate missing licenses** and **Delete order**. See [Changing Order Statuses](/guide/store-management/orders-management/changing-order-statuses).

### 2. Order Items

This section lists all the products included in the order.

* **Product Name:** The name of the purchased product.
* **Quantity:** The number of units purchased.
* **Individual Item Price:** The price of a single unit of the product.
* For orders with physical products, a **Create shipment** button appears in the card header while items are left to ship. Shipments you create are listed in a **Shipments** card below. See [Managing Shipments](/guide/store-management/orders-management/managing-shipments) for splitting an order into shipments and adding tracking.
* To update fulfillment, use **Change Shipping Status** in the **More Action** dropdown.

### 3. Payment

The **Payment** card summarizes the order's financial aspects, including payments received and any outstanding amounts.

* **Payment Status:** At the top of this section, a status like Paid quickly tells you whether the customer has completed their payment.
* **Subtotal:** This is the total cost of all the products in the cart before any other charges, like shipping, are added.
* **Coupon Discount:** Shown when a coupon is applied.
* **Shipping:** This line shows the shipping cost that was added to the order.
* **Tax:** The tax charged on the order.
* **Total:** This is the final price of the order that the customer was charged (Subtotal + Shipping + Taxes, etc.).
* **Total Paid:** This shows how much money the customer has actually sent for this order.
* **Total Refund:** Shown after a refund.
* **Net Payment:** This is the final amount your store has received after all payments have been processed.
* **Total Due:** Shown when the customer still owes money.
* **Total Refund Owed:** A warning shown when the customer has paid more than the order total, for example after you removed items.

### 4. Transaction Details

This table provides a log of all payment transactions related to this specific order, including both payments and refunds. The **Collect Payments** button sits in this card's header.

* **# Date:** The transaction ID with its date. For a successful payment this is the settlement time, when the payment actually went through; otherwise it's when the transaction was created.
* **Gateway ID:** The unique ID from the payment gateway, linked to the gateway.
* **Payment Method:** The method used for the transaction, with the card brand and last 4 digits when available.
* **Total:** The amount of the individual transaction.
* **Status:** The status of the transaction.
* **Actions:** Shown only when needed: **Handle dispute** for disputed payments, or a sync button to refresh the payment status from the gateway.

::: info Why settlement time differs from the order date
An order's date is when the customer checked out. That can be days or weeks before the money moves — a payment link paid later, a delayed webhook, or an offline payment confirmed by hand. Settlement time records the moment the payment succeeded, so reconciling FluentCart against a payout statement lines up.

Gateways that report an exact charge time supply it directly. For the rest, FluentCart records the moment the transaction became successful.
:::

### 5. Customer Information

Displays key details about the customer who placed the order.

* **Customer Name:** The name of the customer.
* **Contact Information:** The customer's email address.
* **Shipping Address:** The address provided for shipping, if applicable.
* **Billing Address:** The address provided for billing.
* **Customer Summary:** The customer's order count, lifetime value, and linked WordPress user.
* **Actions Menu:** The card's **...** menu offers **Edit customer information**, **Manage shipping address**, **Manage billing address**, and **Change customer**. See the [customer details](/guide/store-management/customers-management/customer-details-overview#_2-customer-information-panel) guide for more.

Labels have their own **Labels** card in the sidebar. They belong to the order, not the customer.

<!-- TODO(screenshots): order-details.webp is outdated: it shows a Tax Information card that FluentCart 2.2.0 no longer has. Retake the Order Details screen (ideally a B2B order so the Business Information card shows). Update later. -->
![Screenshot of Order Details Page](/images/store-management/order-details-overview/order-details.webp)

### 6. Notes

A private field where administrators can add notes or comments related to the order.

### 7. Activity

The **Activity** card is a complete, time-ordered record of all important events and changes related to this order. This helps you track how the order has progressed and makes troubleshooting easier.

* **Examples:** Order status updates (e.g., "Order status updated from completed to processing"), payment paid, refunds processed, license upgrades, and order creation events.

### 8. UTM Details

This section shows the marketing attribution recorded when the customer placed their order — where they came from, and which campaign brought them.

**UTM parameters**

* **UTM Campaign:** The specific marketing campaign that brought the customer to your store.
* **UTM Source:** Where the traffic came from, such as `google` or `newsletter`.
* **UTM Medium:** The type of channel, such as `cpc` or `email`.
* **UTM Term:** The keyword, for paid search traffic.
* **UTM Content:** Which variant of an ad or link was clicked.
* **UTM ID:** Your own campaign identifier.

**Ad click identifiers**

When the customer arrived from a paid ad, the platform's click identifier is recorded alongside the UTM values — `gclid`, `gbraid`, or `wbraid` for Google Ads, `fbclid` for Meta, `msclkid` for Microsoft Advertising, plus `gad_campaignid` and `gad_source` where Google supplies them.

These let you match an individual FluentCart order back to the exact click in your ad platform's reporting, which UTM parameters alone can't do. They also travel on the URL rather than in a cookie, so they survive cases where cookie-based tracking is blocked.

**Referring URL**

If the customer arrived without any UTM tags, FluentCart records the referring URL instead. Referrals from your own domains are ignored, so navigation within your own site never overwrites the real external source.

::: info Attribution is last-touch
Every order records attribution. When a returning visitor arrives through a new tagged link, that newer touch replaces the previous one — so this card credits the campaign that brought them back for the visit where they bought, not the one that first introduced them.

For campaign-level totals across all orders, see the [Order Sources Report](/guide/reporting-analytics/order-sources-report).
:::

### 9. Business Information

For a business (B2B) purchase, a **Business Information** card shows the **Company**, **VAT/Tax ID**, **Reg. ID**, whether the tax was **Charge Reversed**, and any **Reverse Charge Declaration**. The card appears only when the order has a company name, tax number, or registration ID. Learn more about [tax configuration and classes](/guide/tax-&-duties/configuration-and-classes).

### 10. Licenses

Orders with licensed products show a **Licenses** card with each license key (FluentCart Pro).

### 11. Subscription

A subscription order shows its subscription summary at the top of the sidebar.

With these panels, you have everything you need to review and manage any order from one screen.

