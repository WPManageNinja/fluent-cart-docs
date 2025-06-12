 # Collecting Payments for Modified Orders

When you [edit an existing order](/guide/store-management/orders-management/editing-existing-orders) and add new products or increase quantities, the order's total value will increase. FluentCart gives flexible options to collect the outstanding balance from your customer.

## When to Collect Payment

After you have [edited an order](/guide/store-management/orders-management/editing-existing-orders) and are in the process of saving your changes (by clicking "Disable Editing"), if the order's total has increased, you will be prompted to collect the additional payment. The system will indicate a "Total Amount Due" or similar.

## Payment Collection Options

To collect the outstanding balance, navigate to the **"Transaction Details"** section on the [Order Details screen](/guide/store-management/orders-management/order-details-overview). You will see a **"Collect Payments"** dropdown menu.

![Screenshot of Collect Payments Dropdown](/guide/public/images/store-management/collect-payments-dropdown.png)


Clicking this dropdown reveals the following options:

### 1. Custom Payment Link

This is the most common method for collecting additional payments remotely from your customer.

1.  From the **"Collect Payments"** dropdown, select **"Custom Payment Link"**.
2.  A **"Custom Payment Link"** popup window will appear.

3.  Inside the popup:
    * A unique payment link (e.g., `https://temp.xcloudon.com/custom-payment-page/?order_ha...`) will be displayed.
    * Click the **"Copy"** button next to the link to copy it to your clipboard.
    * You can then share this link with your customer via email, chat, or any other preferred communication method.
    * **"Use vendor checkout" toggle:** You can enable this option. When activated, the customer will be redirected to the **vendor's specific payment page** instead of FluentCart's default payment page, leveraging their existing payment gateway setup.

4.  Once the customer clicks the link, they will be directed to a secure payment page where they can pay the outstanding balance using the available payment methods.

![Screenshot of Custom Payment Link Modal](/guide/public/images/store-management/custom-payment-link-modal.png)

### 2. Mark Order as Paid

This option is used when you have already received the additional payment from the customer through an offline or manual process outside of FluentCart (e.g., cash payment, bank transfer, or a payment processed directly via your payment gateway's dashboard).

1.  From the **"Collect Payments"** dropdown, select **"Mark order as paid"**.
2.  FluentCart will update the order's status to reflect the payment as received, and the outstanding balance will be cleared.
