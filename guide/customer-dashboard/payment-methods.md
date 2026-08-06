# Payment Methods

The **Payment Methods** section is where you save a card once and reuse it for future purchases. Instead of typing your card number every time you buy something, you pick a saved card at checkout and pay in a single step. You stay in control the whole time, and you can remove a saved card whenever you want.

Your card details are never stored on this site. Your payment provider keeps them and hands the store a secure token, which is only charged when you place an order or when a subscription you already signed up for renews.

::: info
This section appears only when your store has **Saved Payment Methods** turned on. If you do not see **Payment Methods** in your dashboard menu, the store has not enabled the feature.
:::

## Saving a Card While You Check Out

The easiest moment to save a card is when you are already paying with it. On the checkout page, look under the card fields for the **Save this card for faster checkout next time** checkbox and tick it before you pay.

The box is always unticked to begin with, so a card is only ever saved because you asked for it. Nothing is charged until you place the order, and the store still receives a token rather than your card number.

Once the order goes through, that card appears in your **Payment Methods** list, ready for next time.

## Paying With a Saved Card

On your next visit, the checkout page shows a **Your saved cards** list above the usual card fields, with each card written as its brand and last four digits, for example "Visa ending 4242".

Your default card is selected for you, so in most cases you can go straight to paying. To use a different saved card, select it from the list. To pay some other way, choose **Pay another way** and the standard payment options open up again.

Your bank may still ask you to confirm the payment, which is a normal security step and nothing to worry about.

## Viewing Your Saved Cards

To see everything you have saved, open the **Payment Methods** item in your dashboard menu. Each card shows its brand, its last four digits, and its expiry date, along with a couple of helpful labels:

* **Default:** The card that gets selected automatically at checkout and used for subscription renewals.
* **On a subscription:** The card is currently paying for an active subscription.

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

## Choosing Your Default Card

Your default card is the one the store reaches for automatically, both at checkout and when a subscription renews. Setting it in one place keeps everything consistent, so you are not updating your card separately for every subscription you hold.

To change it, find the card you want to promote and choose **Set as default**. The **Default** label moves across to the new card and a **Default payment method updated** confirmation appears.

Because this also drives renewals, updating your default is the quickest way to keep [your subscriptions](/guide/customer-dashboard/subscriptions) billing smoothly when you get a replacement card.

## Removing a Card

When you no longer want a card on file, select **Remove** on that card. A **Remove card** confirmation appears first, so an accidental click cannot delete anything.

Removing a card takes the saved token out of your account and deletes it at your payment provider, which means it cannot be charged again. If you want to use that card later, you will need to add it back.

### When a Card Cannot Be Removed

A card that is actively paying for a subscription cannot be removed straight away. If you try, you will see this message:

> This card is the active payment method for a subscription. Update that subscription to a different card before removing it.

This is deliberate. Removing a card that a subscription depends on would cause the next renewal to fail, so the store asks you to move that subscription onto another card first. Open [Subscriptions](/guide/customer-dashboard/subscriptions), switch the subscription to a different payment method, then come back and remove the old card.

## Which Cards You Can Save

Saved cards currently work with **Stripe** payments. If your store offers other payment options, those still work normally at checkout, they simply cannot be saved for reuse yet.

Your saved cards now do the work for you, at checkout and at renewal time, without your card details ever living on the store.
