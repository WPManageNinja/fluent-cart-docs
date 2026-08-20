---
title: Subscriptions & Renewals
description: How recurring billing changes hands when you migrate from WooCommerce Subscriptions to FluentCart, and what decides whether a migrated subscription keeps auto-charging.
---

# Subscriptions & Renewals

If your WooCommerce store sells recurring products, this is the part of the migration that needs the most attention. Everything else — products, orders, customers, coupons — is history being copied. Subscriptions are live obligations, and after migration a different system is responsible for billing them.

Read this page before you cut production over.

## What changes at the moment of migration

WooCommerce Subscriptions runs the billing schedule itself. It keeps its own subscription records, decides when each renewal is due, generates a renewal order, and asks the gateway to take a payment against a stored token. There is no subscription object living at Stripe or PayPal for FluentCart to inherit — the schedule exists only inside WooCommerce.

That means a migrated subscription can't be handed off to the gateway. Instead, **FluentCart takes over the schedule** using its [Store Billing](/guide/product-types-creation/store-managed-subscriptions) engine: FluentCart creates each renewal invoice on the due date, and then either charges the saved card or emails the customer a **Pay Now** link.

Every migrated subscription therefore lands on one of two collection methods.

| Collection method | What happens on each due date | Customer experience |
|-------------------|-------------------------------|---------------------|
| **System** (Store Billing + Auto-Charge) | FluentCart charges the saved payment method automatically | Nothing changes for them |
| **Manual** (Store Billing) | FluentCart issues a renewal invoice and emails a **Pay Now** link | They pay each renewal themselves |

Both are the same engine. The only difference is whether a usable saved payment method came across with the subscription.

## What decides which one you get

The Migrator is deliberately conservative here. It marks a subscription **System** only when the saved token is genuinely chargeable by FluentCart — because a subscription wrongly marked System fails *every* renewal silently, which is far worse than one marked Manual that simply asks the customer to pay.

A subscription becomes **System** only when all of these hold:

1. The subscription is **not** flagged for manual renewal in WooCommerce.
2. The gateway is **Stripe**.
3. The subscription carries a Stripe **PaymentMethod** token (an ID starting with `pm_`) **and** its Stripe customer ID.
4. Your FluentCart Stripe gateway is installed and advertises token-based renewal charging.

Everything else stays **Manual**:

- **PayPal subscriptions.** WooCommerce stores a Billing Agreement ID here, not a PayPal Vault ID, so FluentCart's vault-based charging cannot use it. The payer ID is still kept on the subscription for reference.
- **Legacy Stripe tokens.** Older `src_…` and `card_…` tokens are not valid PaymentMethods and cannot be charged off-session.
- **Offline and unknown gateways.** There is nothing to charge.
- **Subscriptions the merchant or customer already set to manual renewal.** That choice is respected.

::: info Why the stored flag, not `is_manual()`
The Migrator reads WooCommerce's stored manual-renewal flag rather than calling `WC_Subscription::is_manual()`. That method also returns true under WooCommerce Subscriptions' duplicate-site lock — which every staging clone triggers — and whenever the live gateway happens to be unavailable. Reading the stored flag means a staging rehearsal doesn't wrongly downgrade every token-backed subscription to manual.
:::

### Card details on file

When a Stripe PaymentMethod token does come across, the Migrator also reads the card's brand, last four digits, and expiry from WooCommerce's payment-token vault, so the card renders properly in your admin and in the customer portal. If your store kept only the raw token without a vault row, the token still migrates and still charges — the display is just sparser.

## Before you go live

**1. Reconnect Stripe using the same account.**
FluentCart selects its API keys by order mode. A migrated subscription carrying a live-mode Stripe token cannot be charged with test keys, and vice versa. Connect the same Stripe account you used with WooCommerce, in the same mode. See [Payments & Checkout](/guide/payments-checkout/).

**2. Check the order mode on migrated subscriptions.**
WooCommerce records no per-order test/live marker, so the Migrator reads your gateway's *current* configuration. If your store flipped between test and live at some point in its history, some orders may land on the wrong mode. Spot-check a few and, if needed, correct the mapping with the `fluentcart_migrator_woo_order_mode` filter before running the production migration.

**3. Review your Store Billing settings.**
Go to **FluentCart → Settings → Store Settings → Subscriptions** and confirm the renewal schedule, retry behavior, grace period, and reminder emails are how you want them. These now govern every migrated subscription. See [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions).

**4. Review the renewal notification emails.**
Manual-collection subscribers will receive a **Pay Now** email that they never received under WooCommerce. Read it before your customers do, under **FluentCart → Settings → Email Configuration**.

**5. Decide what to tell manual-collection customers.**
If a meaningful number of subscriptions land on Manual, those customers will be asked to pay their next renewal instead of being charged silently. A short heads-up email explaining the change avoids surprise and reduces churn.

**6. Turn off WooCommerce Subscriptions billing.**
Once FluentCart owns the schedule, leaving WooCommerce Subscriptions actively processing renewals risks double-charging. Deactivate WooCommerce (or at minimum its subscription scheduling) as part of the cutover — after you have verified the migration.

::: warning Don't run both billing engines at once
FluentCart and WooCommerce Subscriptions will each independently believe they own the renewal schedule. Verify the migration first, then deactivate WooCommerce before the next renewal date arrives.
:::

## How renewal history is preserved

Renewal orders migrate as orders in their own right and are linked back to their subscription. Because WooCommerce renewal orders carry no WordPress post parent, the Migrator reads the renewal's subscription reference from order meta and stamps the subscription's first order as the parent, so FluentCart can attribute the renewal correctly.

Two edge cases are handled explicitly:

- **The parent subscription was deleted.** The renewal still needs somewhere to attach, so a single canceled placeholder subscription is created and keyed to the original WooCommerce subscription ID. Every later renewal of that same deleted subscription links to the same placeholder rather than spawning its own.
- **A renewal migrated before its parent.** The **Recount & Verify** step re-attaches renewal transactions left without a subscription link, then rebuilds bill counts from the actual renewal orders. This is why recount should always be the final stage.

## Verifying after migration

Go to **FluentCart → Subscriptions** and check a representative sample:

- **Status** matches what WooCommerce showed. Note that an active subscription whose end date has passed is imported as **expired** on purpose.
- **Billing interval** is right. WooCommerce's period-plus-multiplier is collapsed into FluentCart's named intervals: 3 months becomes quarterly, 6 months becomes half-yearly, and other multiples fall back to the base period.
- **Next renewal date** matches the source.
- **Collection method** is what you expect — and if a subscription you believed was card-backed shows Manual, check the token type in WooCommerce against the rules above.
- **Bill count** matches the number of renewal orders. If it doesn't, re-run recount.
- **Card on file** displays for System subscriptions.

## Related

- [Store Billing for Subscriptions](/guide/product-types-creation/store-managed-subscriptions) — how the renewal engine now driving your subscriptions works
- [What Gets Migrated](/guide/migration/woocommerce/woocommerce-what-is-migrated) — the full subscription field inventory
- [Troubleshooting](/guide/migration/woocommerce/woocommerce-troubleshooting) — bill counts, orphaned renewals, and recount
- [Wizard Walkthrough](/guide/migration/woocommerce/woocommerce-migration) — running the migration
