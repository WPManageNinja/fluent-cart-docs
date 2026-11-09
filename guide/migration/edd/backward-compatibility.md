# Backward Compatibility

When the migration finishes, the natural instinct is to deactivate the Migrator plugin and consider the job done. **Don't.**

The Migrator quietly provides a backward compatibility layer that keeps your existing customers working without disruption. Software licenses keep validating. PayPal subscriptions keep renewing. Old license renewal and update links keep working. Stripe webhooks for legacy orders keep finding the right transaction.

If you deactivate the Migrator too early, customers feel it.

## Why this layer exists

EDD and FluentCart use different URL structures, different API endpoints, and different identifier formats. After migration, your data is in FluentCart's format — but the outside world (your customers' installed software, PayPal's renewal notifications, Stripe's webhook history, bookmarked links in old emails) still speaks EDD.

The Migrator plugin sits between the two and translates. It accepts incoming requests in EDD's format, looks up the corresponding FluentCart record, and routes the work to the right place. Your customers see no difference.

This layer is what turns a migration from a hard cutover into a soft transition.

## What the layer handles

The completion screen lists the four areas the Migrator continues to bridge:

![Completion screen showing the backward compatibility notice listing License API, PayPal IPN, Stripe webhooks, and download/renewal URLs](/images/migration/edd-migrator/06-backward-compat.webp)

### License API endpoints

If you sold software with EDD Software Licensing, your customers' plugins, themes, or apps make periodic API calls to your site to:

- Activate a license on a new install
- Deactivate a license when uninstalling
- Check whether a license is still valid
- Check for software updates

These calls hit EDD's URL format, with EDD-style parameters. The Migrator intercepts each one, looks up the corresponding FluentCart license, performs the action through FluentCart, and returns a response in the format the customer's software expects. This needs FluentCart Pro, because the licenses live in its Licensing module.

Your customers don't update their software. They don't notice anything changed.

### PayPal IPN for legacy subscriptions

Active PayPal Standard subscriptions created during the EDD era continue to send Instant Payment Notifications to EDD's old IPN endpoint when each renewal payment processes. Without the Migrator, those notifications fail silently — the subscription appears to keep renewing on PayPal's side, but FluentCart never records the renewal.

The Migrator catches each renewal IPN, finds the matching FluentCart subscription, and re-syncs it from PayPal so the renewal is recorded. PayPal continues to charge the customer; FluentCart continues to know about it.

### Stripe webhook charge ID resolution

Stripe historically used charge IDs (`ch_xxx`) to identify transactions. Modern Stripe webhooks reference payment intent IDs (`pi_xxx`). For orders migrated from EDD, the original transaction record stores the charge ID — which means a webhook arriving with only a payment intent ID can't find its order.

The Migrator hooks into FluentCart's transaction lookup with a fallback: when a Stripe event can't be matched, the Migrator looks the transaction up by its old charge ID and updates the record to the payment intent ID, so later events match directly. Webhooks for migrated orders continue to apply correctly.

### Legacy EDD download and renewal URLs

Two kinds of old EDD link keep working:

- **License renewal links** (`?edd_license_key=…&download_id=…`) from old reminder emails. The Migrator finds the license's subscription and sends the customer to its renewal page, or to your home page if there's nothing to renew.
- **Software update downloads** through EDD's `edd-sl/package_download/…` URL, so installed plugins and themes can still fetch updates.

Other EDD links, such as file download links (`edd_action=process_download`) and EDD account pages, are not redirected. Update any links you control to point at FluentCart.

## When you can deactivate the Migrator

There is no fixed timeline. The right answer is "when the legacy traffic dies down to zero." For most stores that means at least one full subscription billing cycle — usually a year — after migration. For stores with long-tail license activations, longer.

A reasonable test: check your access logs for hits to EDD-format URLs over the past 30 days. If there are none, you can probably deactivate the Migrator. If there are still requests coming in, leave it active.

Deactivate **EDD Software Licensing** and **Easy Digital Downloads** once you've verified the migration. The compatibility layer only takes over after they're off: license API calls are routed to FluentCart once EDD Software Licensing is inactive, and PayPal IPNs once EDD is inactive.

::: tip Order of deactivation
A safe sequence:
1. Migration complete and verified
2. Run `wp fluent_cart_migrator migrate_from_edd --verify_license` to confirm license integrity
3. Reconnect payment gateways in FluentCart
4. Deactivate EDD Software Licensing, EDD Recurring Payments, and Easy Digital Downloads
5. Leave the Migrator and the EDD database tables in place for the transition period
6. After the transition (typically 6-12 months), evaluate whether legacy traffic has stopped
7. Only then consider deactivating the Migrator and running `edd_cleanup`
:::

## What stops working if you deactivate too early

| If you deactivate | What breaks |
|-------------------|-------------|
| Easy Digital Downloads (with Migrator still active) | Nothing customer-facing. The Migrator handles the compatibility work independently. |
| FluentCart Migrator (with EDD-era license customers) | License activation and update checks for software sold during the EDD era stop working. Customers see "license invalid" errors. |
| FluentCart Migrator (with active PayPal Standard subscriptions) | Renewal payments still happen at PayPal but are never recorded in FluentCart. Subscriptions appear to lapse despite still being charged. |
| FluentCart Migrator (with old license renewal or update links) | Renewal links land on your home page or 404, and software update downloads fail. |

None of these break immediately or visibly to you — they fail silently for customers, which is the worst kind of breakage. Leave the Migrator active until you have actively confirmed there is no remaining legacy traffic.

## Performance impact

The compatibility layer is lightweight. It hooks into request routing only when an incoming URL or webhook matches an EDD-format pattern, so normal FluentCart traffic is unaffected. Idle, the Migrator costs nothing.

## Related

- [Troubleshooting](/guide/migration/edd/troubleshooting) — what to do if a customer reports a broken license or missing renewal
- [WP-CLI Reference](/guide/migration/edd/edd-cli) — `--verify_license` and `edd_cleanup` commands
