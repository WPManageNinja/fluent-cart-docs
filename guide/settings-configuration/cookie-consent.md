# Cookie Consent

FluentCart remembers which campaign brought a visitor to your store (the `utm_source` and `utm_campaign` values, plus ad click IDs) so your reports can show where each order came from. That information is saved in the visitor's browser, and privacy rules such as the German TDDDG treat browser storage the same way they treat cookies: you need the visitor's consent first. The **Cookie Consent** settings make FluentCart wait for your consent plugin's answer before it stores anything.

::: info
This guide explains how the feature works. It is not legal advice. Check your own obligations, or ask a qualified advisor, before relying on these settings for compliance.
:::

The FluentCart **Customer Rights** add-on provides this screen, together with [Withdrawal (EU)](/guide/settings-configuration/withdrawal-eu). It never shows a banner and never collects consent itself. Your consent plugin owns the banner, the visitor's decision, and the record of it. The add-on only reads the answer.

## Enabling the Feature

Cookie Consent is part of the **FluentCart Customer Rights** add-on. To install it:

1. Go to **FluentCart Pro > Settings > Features & addon**.
2. In **Plugin Addons**, find **FluentCart Customer Rights** and click **Install & Activate** (without FluentCart Pro, click **Download** and install the plugin manually).
3. Once the add-on is active, a **Cookie Consent** page appears in the settings sidebar under **Compliance**. Older versions of FluentCart list it at the top level instead.

The feature is **off by default**, so installing the add-on does not quietly stop attribution on stores that don't need it. For more on installing add-ons, see [Features & Addons](/guide/settings-configuration/features-addons).

## Accessing Cookie Consent Settings

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Expand **Compliance** in the left-hand sidebar and select **Cookie Consent**.

![Screenshot of the Cookie Consent page in the Compliance group of the settings sidebar](/images/settings-configuration/cookie-consent/cookie-consent-settings.webp)

## Tracking Consent

* **Ask before storing attribution:** *(Toggle, off by default)* When this is on, FluentCart holds the campaign values in page memory and writes them to the visitor's browser only after your consent plugin says marketing is allowed. The check runs only on pages a visitor reaches through a tagged campaign link. If the visitor withdraws consent later in the banner, attribution stored on an earlier visit is removed too.
* **Who asks for consent:** *(Select, shown when the toggle is on)* Choose the consent plugin that runs your banner. It starts on **Complianz**, so change it to match your site. A plugin that is supported but not installed stays visible and cannot be selected, with the reason shown beside its name.

![Screenshot of the Cookie Consent settings with Ask before storing attribution and Record the order source on the server switched on](/images/settings-configuration/cookie-consent/cookie-consent-options.webp)

The supported consent plugins are:

* **Complianz**
* **CookieYes**
* **GDPR Cookie Compliance (Moove):** This one needs the **WP Consent API** plugin as well. Without it, the entry reads "needs the WP Consent API plugin" and cannot be selected.

Each plugin is named on purpose instead of sitting behind a generic WP Consent API option. Some consent plugins that advertise WP Consent API support report consent as given for every visitor, even those who refused, so a catch-all entry would store attribution against a visitor's choice.

If your consent plugin is not listed, its developer can add it with the `fctcr/consent/providers` filter. Until that plugin's reader is registered, FluentCart holds every attribution write and stores nothing.

## Recording the Order Source on the Server

When you gate attribution on consent, most visitors never answer the banner, so their orders show no source in the [Order Sources Report](/guide/reporting-analytics/order-sources-report). The server-side option fills that gap.

* **Record the order source on the server:** *(Toggle, off by default, shown when **Ask before storing attribution** is on)* FluentCart reads the campaign values and ad click IDs from the page address when a visitor adds a product to the cart or uses **Buy Now**, and saves them on the order. Nothing is stored in the visitor's browser.

This is how it behaves:

* **A refusal always wins.** A visitor who refuses in the banner is never recorded. If they refuse between adding to the cart and checking out, what was read is dropped.
* **Only visitors who haven't answered are recorded this way.** If the visitor accepted, the browser's fuller attribution is used instead.
* **It needs a known consent plugin.** If FluentCart can't tell whether the visitor refused, it treats the visitor as having refused and records nothing.

::: info
Whether this suits your store is a legal decision. Confirm it with your legal advisor before turning it on.
:::

## Wiring Up Your Own Banner

If you built your own consent banner instead of using a plugin, you can answer the same question yourself. See [Gating Attribution Storage on Cookie Consent](/guide/customization-and-themes/code-snippets#gating-attribution-storage-on-cookie-consent).

Your store now waits for the visitor's consent before it remembers where they came from.
