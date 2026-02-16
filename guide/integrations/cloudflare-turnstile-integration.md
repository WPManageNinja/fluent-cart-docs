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

Once enabled, two configuration fields will appear: **Turnstile Site Key** and **Turnstile Secret Key**. You will need to keep this tab open as you’ll be pasting your keys here in Step 3.

![Cloudflare Turnstile Integration](/guide/public/images/integrations/cloudflare-turnstile/trunstile-integration-fluentcart-2.webp)

## Step 2: Generating Your Keys in Cloudflare

To connect your store, you need to register your domain with Cloudflare. You can do this with a free [Cloudflare account](https://dash.cloudflare.com/).

1.  **Access the Turnstile Dashboard:** Log in to Cloudflare, and in the sidebar, navigate to **Protect & Connect > Turnstile**.
2.  **Add Your Website:** Click the **Add Widget** button.

![Cloudflare Turnstile Integration](/guide/public/images/integrations/cloudflare-turnstile/trunstile-integration-fluentcart-3.webp)

3.  **Configure the Widget:**
    * **Widget Name:** Enter a name to identify this site (e.g., "Main Store Checkout").
    * **Hostname Management:** Click the **Add Hostnames** button. A popup will appear—enter your store’s primary domain name (e.g., `mystore.com`) and click **Add**.

![Cloudflare Turnstile Integration](/guide/public/images/integrations/cloudflare-turnstile/trunstile-integration-fluentcart-4.webp)

4.  **Select Widget Mode:**
    * **Managed (Recommended):** Cloudflare will only show an interactive checkbox if the visitor looks suspicious. Otherwise, it stays invisible.
    * **Non-interactive:** Shows a loading bar to the user while verifying.
    * **Invisible:** Stays completely hidden from the user at all times.
5.  **Finalize:** Click **Create** at the bottom of the page.

![Cloudflare Turnstile Integration](/guide/public/images/integrations/cloudflare-turnstile/trunstile-integration-fluentcart-5.webp)

Cloudflare will now display your **Site Key** and **Secret Key**. These are unique to your domain and should be kept secure.

![Cloudflare Turnstile Integration](/guide/public/images/integrations/cloudflare-turnstile/trunstile-integration-fluentcart-6.webp)

## Step 3: Connecting the Keys to FluentCart

Now, let's link the two platforms to finalize the security layer.

1.  Return to your **FluentCart Settings** tab.
2.  **Copy and Paste:**
    * Copy the **Site Key** from Cloudflare and paste it into the **Turnstile Site Key** field in FluentCart.
    * Copy the **Secret Key** from Cloudflare and paste it into the **Turnstile Secret Key** field.
3.  **Save Changes:** Click the **Save Settings** button at the bottom right.

You should see a "Settings Saved" confirmation. Your checkout page is now officially protected by Cloudflare Turnstile.

![Cloudflare Turnstile Integration](/guide/public/images/integrations/cloudflare-turnstile/trunstile-integration-fluentcart-7.webp)

## How to Verify the Integration

Because Turnstile is designed to be invisible, you might wonder if it’s actually working. Here is how to check:

* **Dashboard Stats:** After a few traffic spikes, you can return to your Cloudflare dashboard under **Turnstile** to see analytics on how many "challenges" were issued and how many bots were blocked.