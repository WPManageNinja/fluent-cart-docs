# Collecting Payments for Modified Orders

When you [edit an existing order](/guide/store-management/orders-management/editing-existing-orders) and add new products or increase quantities, the order's total value will increase. FluentCart gives flexible options to collect the outstanding balance from your customer.

## When to Collect Payment

After you edit an order and click **Update** in the **Unsaved Changes** bar to save it, the **Payment** card shows a **Total Due** line whenever the order total is higher than what the customer has paid. FluentCart doesn't prompt you, so use the options below to collect the balance.

## Payment Collection Options

To collect the outstanding balance, navigate to the **"Transaction Details"** section on the [Order Details screen](/guide/store-management/orders-management/order-details-overview). You will see a **Collect Payments** dropdown menu. The **Collect Payments** button appears only while the order has an unpaid balance and is not canceled.

![Screenshot of Collect Payments Dropdown](/images/store-management/collecting-payments/collect-payments-dropdown.webp)


Clicking this dropdown reveals the following options:

### 1. Custom Payment Link

This is the most common way to collect an additional payment. It creates a special, secure link that you can send directly to your customer.

1. From the **Collect Payments** dropdown menu, choose the **Custom Payment Link** option.

2. The **Custom payment link** window opens with a unique link created just for this order's remaining balance.

3. Click the **Copy** button to copy this link to your clipboard. You can now paste it into an email, a chat message, or however you normally communicate with your customer.

When your customer clicks the link, they will be taken to a simple and secure page where they can pay the outstanding amount using your store's available payment methods.

![Screenshot of Custom Payment Link Modal](/images/store-management/collecting-payments/custom-payment-link-modal.webp)

### 2. Mark Order as Paid

This option is perfect for when you've already received the payment outside of FluentCart. Maybe the customer paid you the difference in cash, sent a bank transfer, or you charged them directly through your payment processor's website. This feature lets you manually update the order to reflect that payment.

1. From the **Collect Payments** dropdown, select **Mark order as paid**.

2. In the **Mark as paid** window, choose the **Payment method** the customer used. Optionally, enter the **Vendor charge id** (for example, a bank or processor reference) and **Notes**.

3. Click **Mark Paid**. FluentCart records the payment and clears the outstanding balance.

<!-- TODO(screenshots): no image of the Mark as paid window yet. Capture the Mark as paid window (Payment method, Vendor charge id, Notes, Mark Paid button). Update later. -->

### 3. Send Payment Reminder

When the order's payment is still outstanding, the **Collect Payments** dropdown also offers **Send Payment Reminder**. Click it and confirm with **Send Now** to email the customer a reminder to pay the balance.

Your customer's outstanding balance is now collected or on its way, and the order's payment status updates once the payment is recorded.
