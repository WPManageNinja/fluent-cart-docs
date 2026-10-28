# Processing Refunds

FluentCart lets you refund an order in full or in part, pick the exact items and shipping you are refunding, and restock the items in the same step. Refunds go through your payment gateway first, and FluentCart records the refund once the gateway accepts it.

## Opening the Refund Modal

1. Open the **[Order Details](/guide/store-management/orders-management/order-details-overview)** screen for the order you want to refund.
2. In the top right corner, click the **Refund** button.

    ![Screenshot of the Refund button on the Order Details screen](/images/store-management/processing-refunds/refund-button-on-order.webp)

3. The **Refund Transaction** modal opens.

::: info
An order that has been upgraded to another order cannot be refunded. FluentCart shows "Order can not be refunded." if you try.
:::

## Configuring the Refund

The modal fills itself in with the full refundable amount, so you only change what you need.

![Screenshot of the Refund Transaction modal](/images/store-management/processing-refunds/refund-payment-modal.webp)

* **Refund with transaction:** Choose the payment you are refunding. Only paid transactions are listed, shown with the amount paid (for example, "#5 - Paid $11.20"). This matters when an order has more than one payment.
* **Items:** Every item on the order is listed with a checkbox, its price, and a quantity stepper. Items are ticked by default.
    * Untick an item to leave it out of the refund, or lower its quantity to refund only some units.
    * When an item's tax is charged on top of the price, the row shows the tax per unit, such as "+$1.20 tax/qty".
    * An item that is already fully refunded is greyed out. If an earlier refund covered all of an item's units but left some money on it, the row shows "$X left" and starts unticked.
    * For physical items that have already shipped, an **Already shipped** stepper appears. Use it to tell FluentCart how many of the refunded units had already left your store, so they are not counted as still waiting to ship. FluentCart starts it at the lowest possible number.
* **Include shipping:** Shown when some of the order's shipping can still be refunded. Tick it to refund shipping, and adjust the amount in the field beside it. When the shipping was taxed, the label shows the shipping amount plus its tax.
* **Restock items to inventory:** Shown when a selected item has stock management turned on. It is ticked by default, and it puts the refunded units back into your inventory. It is not shown for a canceled order, because cancelling already restocked the items.
* **Refund amount:** With items or shipping selected, FluentCart works out the amount for you, and that amount is also the most you can refund. You can lower it, for example to refund part of an item's price. Any amount you enter must be at least the shipping you are refunding plus the smallest unit of your currency. With nothing selected, you can type any amount up to the **Max refund amount for this transaction** shown below the field.
* **Reason of refund:** An optional note. Your customers can see this reason. Hover over the information icon for the values Stripe accepts here.
* **Subscription:** If the order includes a subscription that is still active, you will see **Cancel Subscription (if any)**. It is ticked by default, and it cancels the subscription at your payment provider immediately.

::: info
There is no license checkbox in the modal. With FluentCart Pro, the licenses issued for an order are disabled automatically when the order is refunded in full.
:::

When you are ready, click the **Refund** button at the bottom of the modal. The button shows the amount, for example "Refund $11.20".

## What Happens When You Refund

FluentCart refunds through the payment gateway first, and only records the refund on the order once the gateway accepts it. Messages in the modal tell you what happened, such as "Refund processed on FluentCart." and the result from the gateway.

Some payment methods cannot return money automatically, for example offline payments. For those, FluentCart records the refund on the order and tells you to return the money through that method yourself.

Only one refund can run on an order at a time. If you start a second one too quickly, FluentCart asks you to try again in a moment.

### When the Gateway Refund Fails

If the gateway cannot be reached or rejects the refund, FluentCart records nothing on the order except an entry in its Activity log, and shows **Refund failed on** your gateway's name along with the gateway's message.

![Screenshot of the Refund failed prompt with the Record locally only button](/images/store-management/processing-refunds/refund-record-locally-prompt.webp)

If the failure was a timeout, check your gateway's dashboard first, because the refund may already be there. Otherwise you can choose:

* **Cancel:** Go back without refunding anything.
* **Record locally only:** Record the refund on the order without refunding through the gateway. The prompt lists what will change: the refund amount, the items and whether their stock is restored, the shipping amount, the new payment status, and that the subscription is not cancelled. No money is returned to the customer, so you need to refund them outside FluentCart. FluentCart adds a "Refund recorded locally only" entry to the order's Activity log as a reminder.

## After the Refund

* **Payment status:** The order becomes **Refunded** once the total refunded reaches the net amount paid. Until then, it is **Partially Refunded**.
* **Order summary:** The refund appears in the order's payment and financial summary, and the refunded items show their refunded quantities.
* **Stock:** Items you chose to restock are added back to your inventory.
* **Activity log:** The order's Activity log records the refund event.
* **Customer email:** FluentCart can email the customer after a refund. You control this with the **Send mail to customer after a refund** option in your [email notification settings](/guide/settings-configuration/email-configuration/configuring-email-notification).

::: info
The **Total Refund Owed** line on the Order Details screen is not part of a normal refund. It appears only when the customer has paid more than the order now totals, after refunds are taken into account.
:::

Your refund is now recorded, and the order's payment status reflects it.
