---
title: "Mercado Pago Settings"
description: "A complete guide to integrating Mercado Pago with FluentCart to accept local payments across Latin America."
---

# Mercado Pago Settings

Mercado Pago is a leading payment platform, making it the perfect choice for businesses operating in Latin America. By connecting **Mercado Pago to FluentCart**, you can securely accept a wide variety of local payment methods, including Credit Cards, Pix, Boleto, OXXO, and Bank Transfers.

This guide will walk you through the entire process of connecting your Mercado Pago account to FluentCart.

## Step 1: Activate Mercado Pago in FluentCart

First, you need to enable Mercado Pago as a payment method in your store.

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Payment Settings** tab.
3.  Find **Mercado Pago** in the list of available gateways and click the **Manage** button.
4.  If the addon is not yet installed, click the **Install & Activate** button to begin the setup.

![Mercado Pago Install & Activate](/guide/public/images/payments-checkout/mercado-pago/install-activate-mercado-pago-1.webp)

## Step 2: Configure Mercado Pago Settings

Once activated, you need to provide your API credentials to sync your store with your Mercado Pago account.

1.  Enable the gateway by toggling the **Payment Activation** switch at the top right.
2.  Choose your credential mode:
    * **Test credentials:** Select this tab to test your checkout flow without processing real money.
    * **Live credentials:** Select this tab when you are ready to accept real payments from your customers.
3.  You will need to enter the following information for your chosen mode:
    * Public Key
    * Access Token
    * Webhook Secret

>[!Note]
>When using **Test credentials**, you may notice many "false errors" appearing, or the API might suddenly become unavailable. These issues can prevent you from completing the proper checkout flow for your tests. Because of this, we highly recommend testing your store using your real Production credentials before officially going live to ensure everything is working perfectly.

![Payment Activation](/guide/public/images/payments-checkout/mercado-pago/payment-activation-3.webp)

## Step 3: Create an Application in Mercado Pago

To get your keys, you must first create an application in the Mercado Pago Developers portal.

1.  Log in to your **Mercado Pago Developers dashboard** and go to **Your integrations**. Click the **Create application** button.

![Create Application](/guide/public/images/payments-checkout/mercado-pago/create-application-4.webp)

2.  Enter your **Application name** and click **Continue**.

![Application Name](/guide/public/images/payments-checkout/mercado-pago/application-name-5.webp)

3.  Select **Online payments** and choose the option to create your store. Click on the **Continue** button.

![Online Payment](/guide/public/images/payments-checkout/mercado-pago/online-payment-6.webp)

4.  Confirm your details and click **Confirm** to generate your application.
5.  Navigate to **Production credentials** in the side menu to copy your **Public Key** and **Access Token** for later use.

![Copy Public Key & Access Token](/guide/public/images/payments-checkout/mercado-pago/copy-public-key-7.webp)

## Step 4: Set up Webhooks

Webhooks are essential for FluentCart to receive real-time updates about transaction statuses.

1.  **Copy the Webhook URL:** On your FluentCart Mercado Pago settings page, copy the unique **Webhook URL** provided.
2.  **Configure in Mercado Pago:** In your Mercado Pago application, navigate to **Notifications > Webhooks** and click **Configure notifications**.

![Configure Notification](/guide/public/images/payments-checkout/mercado-pago/configure-notification-8.webp)

3.  **Paste the URL:** Paste the link into the **URL for testing** (for Test mode) or **Production method** (for Live mode) field.
4.  **Select Events:** Under "Recommended events," check the boxes for:
    * Payments
    * Plans and subscriptions
5.  **Get Your Secret:** Click **Save settings**. A **Secret signature (Webhook Secret)** will be generated.

![Configure Webhook Notification](/guide/public/images/payments-checkout/mercado-pago/configure-webhook-notification-9.webp)

6.  **Add to FluentCart:** Copy this secret and paste it into the **Test/Live Webhook Secret** field back in your FluentCart settings.

Once all fields are filled, click the **Save Settings** button at the bottom of the page to finalize your integration.

![Add To FluentCart](/guide/public/images/payments-checkout/mercado-pago/save-settings-10.webp)

---