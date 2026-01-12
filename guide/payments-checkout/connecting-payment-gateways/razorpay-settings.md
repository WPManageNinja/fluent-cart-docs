---
title: "Razorpay Settings"
description: "A complete guide to integrating Razorpay with FluentCart, enabling UPI, Cards, and NetBanking payments for your store."
---

# Razorpay Settings

Razorpay is a popular and powerful payment solution, especially perfect for businesses in India. It allows you to accept a wide variety of payments, including UPI, Credit/Debit Cards, NetBanking, and Wallets. By connecting Razorpay to FluentCart, you provide your customers with a fast and secure payment option for their orders.

This guide will walk you through how you can get Razorpay up and running on your store.

## Step 1: Activate Razorpay in FluentCart

Before you can use Razorpay, you need to add the feature to your FluentCart store.

1.  Log in to your WordPress dashboard and go to **FluentCart Pro > Settings**.
2.  Click on the **Payment Settings** tab on the left.
3.  You will see a list of available payment gateways. Find **Razorpay** and click the **Manage** button next to it.
4.  If it isn't ready yet, you will see a screen with an **Install & Activate** button. Click on it.

![ Activate Razorpay](/guide/public/images/payments-checkout/razorpay-settings/access-razorpay-1.webp)

## Step 2: Configure Razorpay Settings

On this page, you need to provide your Razorpay API credentials to connect your store to your bank account.

First, enable the payment gateway by toggling the **Payment Activation** switch at the top right. Here is a breakdown of the available settings:

* **Live/Test Credentials:** You can switch between the Live credentials and Test credentials tabs. It is highly recommended to start with test mode to ensure your checkout is working perfectly before you start accepting real money from customers.
* **Test/Live API Key:** Enter the **Key ID** you copied from your Razorpay dashboard into this field.
* **Test/Live Key Secret:** Enter the **Key Secret** generated in your Razorpay account here.
* **Test/Live Webhook Secret:** Enter your **Webhook Secret** key. You will get this secret when you set up the webhook in your Razorpay dashboard to receive payment updates.

> [!TIP]
> Now, copy the **Webhook URL** from this page for future use in Step 4.

![ Configure Razorpay Settings](/guide/public/images/payments-checkout/razorpay-settings/payment-activation-2.webp)

## Step 3: Get Your Keys from Razorpay

To integrate your store with Razorpay, you require two special codes: a **Key ID** and a **Key Secret**.

1.  Log in to your **[Razorpay](https://rize-dashboard.razorpay.com/login/) Dashboard**.
2.  In the left sidebar, go to **Accounts & Settings**.
3.  Click on the **API Keys** tab.

![ Get API Keys From Razorpay](/guide/public/images/payments-checkout/razorpay-settings/razorpay-account-settings-3.webp)

4.  Click the **Regenerate Test Key** (or "Generate Key") button.

![ Get API Keys From Razorpay](/guide/public/images/payments-checkout/razorpay-settings/Regenarate-Test-Key-4.webp)

5.  Copy the **Key ID** and **Key Secret** that appear. Keep these safe!

![ Copy Key ID and Secret](/guide/public/images/payments-checkout/razorpay-settings/Copy-the-public-key-secret-key-5.webp)

## Step 4: Set Up Webhooks

Webhooks are like "digital status updates." They tell FluentCart exactly when a customer has finished paying so the order can be marked as "Paid" automatically.

1.  In your Razorpay Dashboard, go to **Settings > Webhooks**. 
2.  Click on the **Add New Webhook** button.

![ Add New Webhook](/guide/public/images/payments-checkout/razorpay-settings/add-new-webhook-6.webp)

3.  In the popup that appears, paste the **Webhook URL** you copied before from FluentCart.
4.  In the **Active Events** section, you must select these specific events:
    * `payment.authorized`
    * `payment.captured`
    * `payment.failed`
    * `refund.processed`
5.  Click the **Create Webhook** button to make sure your store stays updated.
6.  Razorpay will provide a **Webhook Secret**. Copy it for later use.

![ Create Webhook](/guide/public/images/payments-checkout/razorpay-settings/create-webhook-7.webp)

## Step 5: Finalize Configuration in FluentCart

Now, take those keys and put them into your store settings.

1.  Go back to your **FluentCart Payment Settings** for Razorpay.
2.  Choose between the **Live credentials** or **Test credentials** tab.
3.  Paste your **Key ID** and **Key Secret** into the corresponding fields.
4.  Paste the **Test or Live Webhook Secret** you copied earlier from Razorpay.

>[Tip] 
>We recommend starting with "Test" mode to make sure everything works before you take real money!

![ Finalize Configuration](/guide/public/images/payments-checkout/razorpay-settings/razorpay-settings-8.webp)

---

### Important: International Payments

If you want to sell to customers outside of India, there is an extra step:

* You must enable **International Payments** inside your actual **Razorpay Dashboard settings**.
* Without this, customers using cards from other countries might see their payments declined.

