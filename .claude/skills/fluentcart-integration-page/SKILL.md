---
name: fluentcart-integration-page
description: Specialist template for FluentCart third-party integration pages under guide/integrations/ — guides for connecting external services like FluentCRM, FluentCommunity, FluentBooking, FluentAffiliate, LearnDash, LifterLMS, Cloudflare Turnstile, Amazon S3, etc. Use when writing or editing any guide/integrations/<service>-integration.md file. Always pair with fluentcart-doc-writer for tone and universal rules.
---

# FluentCart Integration Page Template

Integration pages walk users through connecting FluentCart to a third-party service. They are step-driven, screenshot-heavy, and end with a verification check.

## When to use this template

Any new or existing file under `guide/integrations/`, e.g.:
- `fluentcrm-integration.md`
- `cloudflare-turnstile-integration.md`
- `learndash-integration.md`
- `fluentbooking-integration.md`
- `amazon-s3-integration.md`
- `webhook-integration.md`

Filename pattern: `<service-slug>-integration.md`. Section folder: `guide/integrations/`. URL: `/guide/integrations/<service-slug>-integration`.

## Required structure

```
# <Service Name> Integration

<Opening paragraph (2–3 sentences): what the service does, plus why a FluentCart store would integrate it. Benefit-driven, second-person.>

<Optional second paragraph: a deeper context line — e.g. how the integration works invisibly, what triggers it, what use cases it covers.>

## Step 1: <Enabling/Activating the Module in FluentCart>

<Bridge sentence (one line) before the numbered list.>

1. <Action with bold UI label.>
2. <Action.>
3. ...

![<Descriptive alt>](/images/integrations/<service>/<filename>.webp)

<Optional short paragraph between sub-steps explaining what just happened or what's next.>

## Step 2: <Generating Credentials / Configuring the External Service>

<Bridge sentence.>

1. **<Subtask Name>:** <Action.>
2. **<Subtask Name>:** <Action.>
   * **<Sub-option>:** <Description.>
   * **<Sub-option>:** <Description.>

![<Descriptive alt>](/images/integrations/<service>/<filename>.webp)

## Step 3: <Connecting / Saving / Configuring the Feed>

<Bridge sentence.>

1. ...
2. ...

## Step 4 / Step 5 (optional, only if the integration genuinely has more phases)

## How to Verify the Integration

<Sentence or two on why verification matters, then either a numbered checklist or bullets describing what success looks like (e.g., "Dashboard Stats", "Test Order", "Webhook Log").>
```

### Rules
- **Always use the literal `Step N:` prefix on H2 headings.** Not "Phase", "Section", "Part 1". The N is an integer, no zero-padding.
- The first step is usually **enabling/activating** the integration module inside FluentCart (under `FluentCart Pro > Settings > Features & Addon` for many integrations).
- The middle step(s) are usually **credential generation** in the external service.
- The final step before verification is usually **pasting credentials** or **configuring the integration feed/options** in FluentCart.
- **`How to Verify the Integration` is required** — every integration page ends with it. The H2 text is exactly that.
- Place a screenshot **immediately after** the action it illustrates, not at the section end.
- Total page length: typically 60–250 lines. Keep each step focused.
- Heavy bold usage on UI labels, button names, field names — see master skill §3.1.

## Verbatim model — opening of `guide/integrations/cloudflare-turnstile-integration.md`

```
# Cloudflare Turnstile Integration

Cloudflare Turnstile is a powerful, privacy-first security solution that provides an effortless alternative to traditional CAPTCHAs. By integrating Cloudflare Turnstile with FluentCart, you can protect your **Checkout Page** from spam and malicious bots without interrupting the customer's journey.

Turnstile works invisibly in the background, ensuring your shoppers enjoy a smooth, puzzle-free checkout while your store remains protected from automated "carding" attacks and fake order submissions.

## Step 1: Enabling Turnstile in FluentCart

Before heading to Cloudflare, you need to prepare the integration within your WordPress site.

1.  Log in to your **WordPress Dashboard**.
2.  Navigate to **FluentCart > Settings** in the side menu.
3.  Click on the **Features & Addon** section in the left-hand sidebar.
4.  Find the **Cloudflare Turnstile** card and toggle the switch to **Active**.

![Cloudflare Turnstile Integration](/guide/public/images/integrations/cloudflare-turnstile/trunstile-integration-fluentcart-1.webp)
```

## Verbatim model — H2 sequence in `guide/integrations/fluentcrm-integration.md`

```
# FluentCRM Integration

<intro paragraph + use-case context paragraphs>

### When to Use Each Integration Type

### Enabling the FluentCRM Module

### Setting Up a Global Integration Feed
#### Create a New FluentCRM Feed
#### Configure Your Feed
```

(FluentCRM uses thematic H3s rather than literal "Step N:" because the page is feature-organized rather than purely sequential. This is acceptable for integrations where the user already has the module enabled — but the simpler `Step N:` H2 form is preferred for first-time setup guides.)

## Sidebar entry

Add under the `Integrations` group in `.vitepress/config.mjs`:

```js
{ text: '<Service Name>', link: '/guide/integrations/<service>-integration' }
```

## Common pitfalls

- **Skipping Step 1 module-enable.** Most integrations require activating the module under `FluentCart Pro > Settings > Features & Addon` before anything else works. Always include this step.
- **Forgetting `How to Verify the Integration`.** It's required.
- **Inconsistent step numbering.** Don't write "Step 2A" or "Step 3.1" — use H3 sub-sections inside the step instead.
- **Putting credentials in the page literally.** Always use placeholders (`<your-api-key>`) and warn the user not to commit secrets.
- **Mixing two structures.** A page is either step-driven (`Step 1:`, `Step 2:`) or feature-driven (thematic H2s). Pick one and stay consistent.
