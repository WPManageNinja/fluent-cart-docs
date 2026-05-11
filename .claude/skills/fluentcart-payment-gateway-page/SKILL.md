---
name: fluentcart-payment-gateway-page
description: Specialist template for FluentCart payment gateway settings pages under guide/payments-checkout/connecting-payment-gateways/ — pages like stripe-settings.md, paypal-settings.md, square-settings.md, mollie-settings.md, paddle-settings.md, razorpay-settings.md, etc. Use when writing or editing any payment-gateway configuration page. Always pair with fluentcart-doc-writer for tone and universal rules.
---

# FluentCart Payment Gateway Page Template

Payment gateway pages have the **strictest structure** of any FluentCart doc template: a fixed 5-step flow that mirrors the user's actual configuration journey. Deviations are jarring because users compare gateways side-by-side.

## When to use this template

Any file under `guide/payments-checkout/connecting-payment-gateways/`. Filename pattern: `<gateway-slug>-settings.md`. Examples:
- `stripe-settings.md`
- `paypal-settings.md`
- `square-settings.md`
- `mollie-settings.md`
- `paddle-settings.md`
- `paystack-settings.md`
- `razorpay-settings.md`
- `flutterwave-settings.md`
- `mercado-pago-settings.md`
- `authorizenet-settings.md`
- `cash-on-delivery-settings.md`

## Required structure (5 steps, in this order)

```
# <Gateway Name> Settings

<Opening paragraph (1–2 sentences): what the gateway does + a "globally recognized / widely used" framing.>

<Optional second sentence: this guide will walk you through connecting your <Gateway> account to FluentCart to begin accepting payments.>

## Step 1: Accessing <Gateway> Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Payment Settings** tab.
3.  Locate **<Gateway>** in the list of payment gateways and click the **Manage** button next to it.

## Step 2: Connect Your <Gateway> Account

<Bridge sentence — usually mentions Test vs Live mode toggle.>

* **Test Mode Warning:** If your store is currently in Test mode, a banner will remind you to switch to Live mode for real transactions.

* **Select Credentials Mode:**
    * **Test credentials:** Select this tab if you want to connect your <Gateway> account in Test Mode...
    * **Live credentials:** Select this tab when you are ready to start accepting real payments...

* **Connect with <Gateway>:** <Description of the OAuth flow, manual key paste, or API key entry pattern this gateway uses.>

::: info
<Optional security note about how FluentCart stores credentials — typically about salt-key encryption.>
:::

## Step 3: Choose Your Checkout Mode  *(or other gateway-specific configuration)*

<Bridge sentence.>

* **Embedded checkout (Recommended):** Keeps the customer on your website. Customizable block, you control the design.
* **<Gateway> Hosted checkout:** Sends the customer to a secure page managed by **<Gateway>**.

![Screenshot of <Gateway> Settings Page](/images/payments-checkout/<gateway>-payment/<gateway>-settings.webp)

## Step 4: Configure Webhooks

<Sentence on why webhooks matter — they let the gateway send real-time order/payment updates to FluentCart.>

1.  **Copy Your Webhook URL:** On the FluentCart <Gateway> settings page, locate your unique **Webhook URL** and copy it.
2.  **Configure in <Gateway>:** Navigate to <Gateway>'s webhook configuration page (link or path).
3.  **Select the Important Events:** Subscribe to the events FluentCart needs:

The events recommended by FluentCart are briefly explained below:

 * **<event.name>:** <One-line description of what triggers this event and what FluentCart does with it.>
 * **<event.name>:** ...

![Screenshot of <Gateway> Webhook Setup](/images/payments-checkout/<gateway>-payment/<filename>.webp)

## Step 5: Activate and Save

1.  **Payment Activation:** Back on the **FluentCart <Gateway> settings** page, ensure the **Payment Activation** toggle at the top right is switched on.
2.  **Save Settings:** Click the **Save Settings** button at the bottom to finalize the setup.

Your store is now configured to securely accept payments through <Gateway>.

> **Note**
> <Optional reference to an alternative connection method, e.g. wp-config.php constants. Link to a separate guide.>
```

### Rules
- **The 5 step headings are mandatory and named like above.** "Step 3" can be renamed to a feature-specific phrase if the gateway has unique configuration (e.g. "Step 3: Configure Apple Pay Domain Verification"), but Steps 1, 2, 4, 5 should be near-verbatim across all gateways for consistency.
- **Webhooks step is mandatory** for any gateway that supports them. Cash-on-delivery and a few hosted-only gateways may skip it — note that explicitly in the page if so.
- **Closing line is formulaic:** `Your store is now configured to securely accept payments through <Gateway>.`
- **Frontmatter is the one exception:** existing gateway pages occasionally include a `title` and `description` frontmatter for richer SEO meta. Both styles are acceptable, but DO NOT add frontmatter just to set the title — the H1 is already the title. Add frontmatter only if you want a custom `description` for the search snippet.
- **Heading levels:** every step uses `##` (H2). Some legacy files use `####` (H4) for Steps 2–5 — that's a bug in those files; new pages use H2 throughout.

## Verbatim models from `guide/payments-checkout/connecting-payment-gateways/stripe-settings.md`

**Step 1 (verbatim):**
```
## Step 1: Accessing Stripe Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Payment Settings** tab.
3.  Locate **Stripe** in the list of payment gateways and click the **Manage** button next to it.
```

**Step 2 opening (verbatim):**
```
## Step 2: Connect Your Stripe Account

The Stripe settings page allows you to connect your store in both Test and Live modes. You must select the appropriate mode before initiating the connection.

* **Test Mode Warning:** If your store is currently in Test mode, a banner will remind you to switch to Live mode for real transactions.
```

**Step 4 webhook events (verbatim — adapt event names per gateway):**
```
The Events recommended by FluentCart are briefly explained below:

 * **checkout.session.completed:** The customer finished checkout, and the order is ready to process.
 * **charge.refunded:** A completed payment has been refunded to the customer.
 * **charge.refund.updated:** Details of a refund were updated (like the amount or reason).
 * **charge.succeeded:** The customer's payment went through successfully.
 * **invoice.paid:** A subscription invoice was paid by the customer.
 * **invoice.payment.failed:** A subscription invoice payment failed (e.g., card declined).
 * **customer.subscription.deleted:** The customer canceled their subscription.
 * **customer.subscription.updated:** The customer's subscription was changed (e.g., upgraded or downgraded).
```

## Sidebar entry

Add under the **Connecting Payment Gateways** group in `.vitepress/config.mjs`:

```js
{ text: '<Gateway Name> Settings', link: '/guide/payments-checkout/connecting-payment-gateways/<gateway-slug>-settings' }
```

## Common pitfalls

- **Renaming the closing line.** "Your store is now configured to securely accept payments through <Gateway>" is the standard sign-off.
- **Forgetting the Test Mode banner bullet** in Step 2.
- **Skipping the `::: info` security note** about credential storage in Step 2.
- **Listing webhook events without explanations.** Every event needs a one-line plain-English description.
- **Embedding raw API keys** in screenshots. Always use redacted/dummy keys (e.g., `sk_test_...`).
- **Image path inconsistency.** Use `/images/payments-checkout/<gateway>-payment/<file>.webp`.
