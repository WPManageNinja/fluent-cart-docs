# Integrating with FluentAffiliate

Integrating FluentCart with FluentAffiliate allows you to create and manage a powerful, full-featured affiliate program for your store. By connecting the two, you can empower marketers and partners to promote your products and automatically track their referrals, commissions, and payouts.

This guide will walk you through how to set up the integration and explain the different ways referrals can be tracked.

> [!Info]
>  This integration is configured from the FluentAffiliate dashboard, which then automatically communicates with your FluentCart store.

## Enable the FluentCart Integration in FluentAffiliate

First, you need to activate the connection between the two plugins.

1.  From your WordPress dashboard, navigate to **FluentAffiliate > Settings**.
2.  Click on the **Integration Settings** tab.
3.  You will see a list of available integrations. Find **Fluent Cart** and make sure the toggle next to it is enabled.

![Enable FluentCart integration with FluentAffiliate](/images/integrations/fluentaffiliate/enable-the-fluentcart-settings.webp)

### Configure Integration Settings

Once enabled, you can click the **Manage** button to configure the main rules for your affiliate program.

In the management panel, you can fine-tune how commissions work for your FluentCart store. Here are the available options:

* **Enable Affiliate Integration for FluentCart:** This checkbox acts as the master switch for the integration. Ensure it is checked.
* **Enable Branded Coupon Codes for Affiliates:** When you enable this feature, you can offer branded coupon codes to your affiliates. This allows them to promote products with unique discount codes, giving them another powerful marketing opportunity.

![Enable Branded Coupons](/images/integrations/fluentaffiliate/enable-branded-coupons.webp)

* **Disable Referrals on Upgrades:** Check this box to ensure that no referrals will be added on purchased upgrades. This gives you more control over commission payouts for existing customers who upgrade their plan.
* **Enable custom rate for specific products or categories:** This is a powerful feature that lets you override your default commission rate. Check this box if you want to set special commission rates for specific products or entire product categories.

> [!NOTE]
> This feature gives you the flexibility to offer different commission rates for different products. For example, you could offer a higher commission on a new product as an incentive for affiliates to promote it more heavily.

* **Select Products:** In the `Select` field, start typing the name of the product or category and choose it from the list.
* **Select Rate:** Enter the commission value in the `Enter Rate` field. Then, choose whether the commission is a **Percentage (%)** or a **Fixed** amount from the dropdown menu.
* **Save Settings:** Once you have configured all your custom rates, click the **Save Settings** button to make them live.

You can add more custom rates for different products or categories by clicking the **+Add New Group** button again. You can also remove any rate rule by clicking the red delete icon.

![Enable Custom rates for Specific Products or Categories](/images/integrations/fluentaffiliate/enable-custom-rates.webp)

## How to Set Up a Coupon Referral

1.  In your WordPress dashboard, navigate to **FluentCart Pro > Coupons**.
2.  Create a new coupon or edit an existing one.
3.  On the coupon edit screen, find the **FluentAffiliate** section on the right-hand side.
4.  Click on the **Select Affiliate** field and begin typing the affiliate's name. Select their affiliate from the list when it appears.
5.  **Save** the coupon. Now, when this coupon is used, the selected affiliate will be credited with the referral.

> [!NOTE]
> Before you can assign a coupon, the user must already be an approved affiliate in your FluentAffiliate program.

![How to Set Up a Coupon Referral](/images/integrations/fluentaffiliate/setup-coupons.webp)

## How Affiliate Referrals Are Tracked

FluentAffiliate can track referrals for your FluentCart store in three different ways, giving your affiliates maximum flexibility to promote your products.

**1. Using a Standard Affiliate Referral Link**
This is the most common method. Every affiliate who signs up gets a unique referral link (e.g., `yourstore.com/?ref=7`).

*How it works:* When a customer clicks this link, a cookie is stored in their browser. If they make a purchase on your FluentCart store within the cookie's duration, the affiliate is automatically credited with the commission for that sale.

**2. Using a Custom Product Link**
Affiliates can also generate unique links that go directly to a specific product page on your FluentCart store.

*Why it's useful:* This is perfect for targeted promotions. Instead of sending traffic to your homepage, an affiliate can write a review of a specific product and use a direct affiliate link to that product's page, increasing the chances of a conversion.

**3. Using a Coupon Code**
This is a powerful and popular way to track referrals without relying on links at all. You can associate a specific coupon code directly with one of your affiliates.

*How it works:* When a customer uses that affiliate's coupon code at checkout, the affiliate is automatically credited for the sale, even if the customer never clicked a referral link. This is perfect for social media influencers, podcasters, or anyone who promotes your brand offline.

By combining these three tracking methods, you provide a robust and flexible affiliate program that empowers your partners to promote your FluentCart products in a variety of ways.