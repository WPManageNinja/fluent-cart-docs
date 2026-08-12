# Payment Methods

The **Payment Methods** section is where you save a card or PayPal account once and reuse it for future purchases. Instead of entering your payment details every time you buy something, you pick a saved payment method at checkout and pay in a single step. You stay in control the whole time, and you can remove a saved payment method whenever you want.

Your payment details are never stored on this site. Your payment provider keeps them and hands the store a secure token, which is only charged when you place an order or when a subscription you already signed up for renews.

::: info
This section appears only when your store has **Saved Payment Methods** turned on. If you do not see **Payment Methods** in your dashboard menu, the store has not enabled the feature.
:::

## Saving a Payment Method While You Check Out

The easiest moment to save a payment method is when you are already paying with it.

* **Card:** On the checkout page, look under the card fields for the **Save this card for faster checkout next time** checkbox and tick it before you pay.
* **PayPal:** When PayPal is your selected payment method, the same **Save this card for faster checkout next time** checkbox appears before you are sent to approve the payment. Tick it and approve the save agreement on PayPal's own screen to save the account for next time.

The box is always unticked to begin with, so a payment method is only ever saved because you asked for it. Nothing is charged until you place the order, and the store still receives a token rather than your card or account details.

Once the order goes through, that payment method appears in your **Payment Methods** list, ready for next time.

::: info
If the checkbox does not appear when you pay with PayPal, saving is not currently available for that gateway on this store.
:::

## Paying With a Saved Payment Method

On your next visit, the checkout page shows a **Your saved payment methods** list above the usual payment fields. A saved card is written as its brand and last four digits, for example "Visa ending 4242"; a saved PayPal account is written by its email address and tagged **PYPL**, since PayPal has no card number to show.

Your default payment method is selected for you, so in most cases you can go straight to paying. To use a different saved payment method, select it from the list. To pay some other way, choose **Pay another way** and the standard payment options open up again.

Your bank may still ask you to confirm the payment, which is a normal security step and nothing to worry about.

## Viewing Your Saved Payment Methods

To see everything you have saved, open the **Payment Methods** item in your dashboard menu. A saved card shows its brand, its last four digits, and its expiry date; a saved PayPal account shows its email address instead. Either entry can carry a couple of helpful labels:

* **Default:** The payment method that gets selected automatically at checkout and used for subscription renewals. Only a saved card can currently be set as the default.
* **On a subscription:** The payment method is currently paying for an active subscription.

If you have not saved anything yet, you will see **No saved cards yet** instead, along with a prompt to add one for faster checkout on your next purchase.

## Adding a Card Without Buying Anything

You do not have to wait for a purchase to save a card. You can add one directly from your dashboard, which is handy when your old card is about to expire and you want the new one ready.

1. Open **Payment Methods** from your dashboard menu.
2. Click the **Add payment method** button.
3. In the **Add a payment method** window, fill in your **Cardholder name**, **Card number**, **Expiry**, and **CVC**.
4. Tick **Set as default payment method** if you want this card used automatically from now on.
5. Click **Add card**.

Your payment provider runs a quick verification on the card before saving it. When it succeeds, a **Card saved** confirmation appears and the new card joins your list.

::: info
Card verification is limited to a few attempts per day to protect your account. If you hit that limit you will see "Daily verification limit reached. You can try again tomorrow.", and you can add the card again the next day.
:::

A PayPal account cannot be added from this page — you can only save one the next time you check out with PayPal.

## Choosing Your Default Card

Your default card is the one the store reaches for automatically, both at checkout and when a subscription renews. Setting it in one place keeps everything consistent, so you are not updating your card separately for every subscription you hold.

To change it, find the card you want to promote and choose **Set as default**. The **Default** label moves across to the new card and a **Default payment method updated** confirmation appears.

Because this also drives renewals, updating your default is the quickest way to keep [your subscriptions](/guide/customer-dashboard/subscriptions) billing smoothly when you get a replacement card.

::: info
Only a saved card can be set as the default. A saved PayPal account stays available to pick from the list and can still be used to pay, but it cannot be promoted to your default payment method.
:::

## Removing a Payment Method

When you no longer want a card or PayPal account on file, select **Remove** on that entry. A **Remove card** confirmation appears first, so an accidental click cannot delete anything.

Removing a payment method takes the saved token out of your account and revokes it at your payment provider, which means it cannot be charged again. If you want to use it later, you will need to save it again.

### When a Payment Method Cannot Be Removed

A card or PayPal account that is actively paying for a subscription cannot be removed straight away. If you try, you will see this message:

> This card is the active payment method for a subscription. Update that subscription to a different card before removing it.

This is deliberate. Removing a payment method that a subscription depends on would cause the next renewal to fail, so the store asks you to move that subscription onto another payment method first. Open [Subscriptions](/guide/customer-dashboard/subscriptions), switch the subscription to a different payment method, then come back and remove the old one.

## Which Payment Methods You Can Save

Saved payment methods currently work with **Stripe** cards and **PayPal** accounts. A saved PayPal account can be used to pay and can be removed like any other saved method, but it can only be saved the next time you check out with PayPal (there is no way to add one directly from this page, unlike a card), and it can never be set as your default. If your store offers other payment options, those still work normally at checkout, they simply cannot be saved for reuse yet.

Your saved payment methods now do the work for you, at checkout and at renewal time, without your card or account details ever living on the store.
