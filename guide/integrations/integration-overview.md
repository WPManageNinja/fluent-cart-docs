# Integrations & Addons

The **Integrations & Addons** screen is your central hub for connecting FluentCart with other powerful plugins and services. By activating these modules, you can automate your marketing, improve email deliverability, enhance customer support, and extend the functionality of your e-commerce store.

This guide will walk you through the two main sections of this page: **Global Integrations Feeds** and **Integration Modules**.

## Accessing the Integrations & Addons

1.  From your WordPress dashboard, navigate to **FluentCart Pro**.
2.  In the left-hand menu, click on **Integrations**.

### Global Integrations Feeds

This section, located at the top of the page, is where you create powerful, store-wide automation rules. A "feed" is a rule that is triggered by an event in your store (like a new order) and performs an action in another integrated service (like adding a customer to a list in FluentCRM).

These integration rules apply globally to all your orders. For more targeted rules, you can also set up integrations on a [per-product basis](/guide/product-types-creation/managing-product-integrations.md).

![Integration Overview](/guide/public/images/integrations/integration-overview/integration-overview.png)

### Integration Modules

This section, located at the bottom of the page, is where you manage the connections between FluentCart and other plugins. Before you can use an integration, you must first enable its module here.

#### Activating an Integration Module

The activation process is largely automatic.

* **If the required plugin is already installed and active:** FluentCart will automatically detect it, and you will see a green **Enabled** status badge. The integration is ready to be used.
* **If the required plugin is not installed:** You will see a button like **Install FluentCommunity**. Clicking this will help you install and activate the necessary plugin. Once the plugin is active, the integration will automatically be enabled on this screen.

To help you find what you need, you can also use the filter tabs (**ALL, CRM, LMS, CORE, MARKETING**) or the search bar to find a specific module.

![Available Integration Modules](/guide/public/images/integrations/integration-overview/integration-overview-1.png)

### Available Integration Modules

* [**Webhook:**](/guide/integrations/webhook-integration.md) For developers and advanced users, **Webhooks** allow you to send real-time data from your FluentCart store (like a new order) to any external service that can accept webhook notifications.
* [**FluentCRM:**](/guide/integrations/fluentcrm-integration.md) Automate your email marketing. This powerful integration allows you to add customers to lists, apply tags based on what they buy, and trigger targeted follow-up email sequences after a purchase.
* **FluentSMTP:** Ensure your store's emails get delivered. This module allows you to send all of FluentCart's transactional emails through a professional SMTP provider, improving deliverability. You don’t need any extra configuration to connect with FluentSMTP. Simply install FluentSMTP, and it will automatically integrate with your FluentCart.
* [**FluentCommunity:**](/guide/integrations/fluentcommunity-integration.md) Create a seamless membership experience. This integration lets you automatically grant or revoke access to private courses and community spaces based on a customer's purchase or subscription status.
* **FluentAuth:** Enhance your store's security and user experience. This integration allows you to customize the default WordPress login and registration pages, and add social login options for your customers. No extra settings are needed in FluentCart; simply install and configure the FluentAuth plugin, and it works automatically with your store.
* **FluentForm:** Create advanced forms and surveys with an easy-to-use drag & drop form builder. 
* **FluentSupport:** Streamline your customer service. This integration connects your e-commerce data with your helpdesk, allowing your support agents to view a customer's purchase history directly from their support tickets in FluentSupport.

#### Other Key Integrations

Some integrations are configured in their own dedicated areas of the settings.

* [**Amazon S3:**](/guide/integrations/amazon-s3-integration.md) Securely host and deliver your digital products using Amazon S3. This integration provides faster, more reliable downloads for your customers and reduces the server load on your own website, which is essential for stores selling large files. For secure digital file hosting configure at `FluentCart Pro > Settings > Storage Settings`.
* [**FluentAffiliate:**](/guide/integrations/fluentaffiliate-integration.md) Launch and manage a powerful affiliate program for your store. This integration allows partners and marketers to promote your products and automatically tracks their referrals, commissions, and payouts. For your affiliate program configure at `FluentAffiliate > Settings > Integration Settings`.