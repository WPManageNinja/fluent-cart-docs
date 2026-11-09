# FluentCRM Integration

Connecting FluentCart with FluentCRM allows you to create powerful marketing automations based on your customers' actions. When someone makes a purchase, you can automatically add them to specific lists, apply tags, and update their profiles in FluentCRM without lifting a finger.

This guide will walk you through setting up a Global Integration Feed, which runs for every order placed in your store.

FluentCart offers two powerful ways to connect with FluentCRM:

* **Global Integrations:** These rules apply to every single purchase in your store. They are ideal for general tasks, like adding all new customers to your main newsletter.
* [**Product Integrations**](/guide/product-types-creation/managing-product-integrations): These rules are more specific and are triggered only when a customer buys a particular item. This is perfect for targeted actions, like adding a customer to a special list after they buy a specific course or e-book.

This guide will focus on setting up a **Global Integration**.

<YouTubeEmbed id="ySPK5SuQ8zo" />

### When to Use Each Integration Type

Before you begin, it's helpful to decide which type of integration best suits your goal:

* **Use a Global Integration when:** You want an action to apply to *every single customer*, regardless of what they buy.
    * *Example:* Adding all paying customers to your main "Newsletter" list.
* **Use a Product Integration when:** You want an action to apply *only to customers who buy a specific item*. To learn more about setting up these powerful, product-specific automations, please follow our detailed [documentation](/guide/product-types-creation/managing-product-integrations).
    * *Example:* Adding customers who bought your "Advanced SEO Course" to a "Course Students" list and tagging them accordingly.


### Enabling the FluentCRM Module

First, you need to make sure the FluentCRM integration module is active.
 1. From your WordPress dashboard, navigate to **FluentCart Pro → Integrations**.
 2. Scroll down to the **Integration Modules** section.
 3. Find **FluentCRM** in the list and make sure it is enabled. If it's disabled, you may need to install or activate it first.

### Setting Up a Global Integration Feed

A global feed is perfect for tasks that should apply to all your customers, like adding every new buyer to your main newsletter.

#### Create a New FluentCRM Feed

 * Click the **Add Integration** button in the top-right corner.
 * Select **FluentCRM** from the dropdown menu. This will open a new screen where you can set up the automation rules.

![Screenshot of Fluentcrm Integration Page](/images/integrations/fluentcrm/add-integration.webp)

#### Configure Your Feed 

Here, you'll decide exactly what happens in FluentCRM when the feed is triggered.

* **Feed Title:** Give your feed a descriptive name that you'll recognize later, like "Add All Customers to Newsletter."
* **Add to Lists:** Use this field to select the FluentCRM lists you want to add to a customer’s profile when this feed runs from the dropdown.
* **Add to Tags:** Select the FluentCRM tag(s) you want to apply to all new customers. This is a great way to segment all your buyers for future marketing campaigns.
* **Remove From Lists / Remove From Tags:** If needed, you can also select lists and tags to remove from a customer's profile.
* **Note:** You can add a note that will be attached to the contact's profile in FluentCRM. This is great for internal records. You can even make the note dynamic by using shortcodes (click the {(...)} icon) to include customer or order data.
* **Enable Double Opt-in:** It is highly recommended to keep this enabled. It sends a confirmation email to new contacts before they are subscribed, which is a best practice for maintaining a healthy and engaged email list.
* **Event Trigger:** Select the specific store event that will trigger this automation. For most use cases, **Order Paid (Payment / Subscription)** is the best option, as it ensures only paying customers are added to your CRM.

* **Remove from selected Tags/Lists on Refund or Subscription Access Expiration:** This is a handy automation. If you check this box, FluentCart will automatically remove the customer from the lists and tags you selected if their order is fully refunded or canceled, or when their subscription's paid access runs out. Canceling a subscription does not remove anything on its own: access ends, and the tags and lists are removed, when the paid period expires.
* **Run on Selected Variations Only (product-specific feeds only):** When you add this feed from a product's **Integrations** tab and the product has variations, you can limit the feed to the variations you pick. Leave it empty to run for all variations. This field does not appear on global feeds.

* **Enable This Integration:** Ensure the toggle at the top right is switched on to make the automation active. If it is disabled, the integration will be saved but will not run.

![Screenshot of Fluentcrm Integration Feed Page](/images/integrations/fluentcrm/fluentcrm-integration-feed.webp)

Once configured, click the **Create FluentCRM Feed** button. This global automation is now live and will run for every order in your store.

Once everything is set up, you can manage the integration by clicking the **Edit** icon to make changes or the **Delete** icon to remove it.

![Screenshot of Fluentcrm Integration Feed Page](/images/integrations/fluentcrm/fluentcrm-integration-edit-or-delete.webp)

### Combining Global and Product Integrations

By combining both Global and Product-specific integrations, you can create a sophisticated marketing automation strategy. Use global feeds for general onboarding and product feeds for highly targeted, post-purchase follow-ups that enhance the customer experience.

### Advanced Marketing Automation with FluentCRM Triggers

Beyond simply adding tags and lists, the FluentCart integration adds a powerful set of e-commerce triggers directly inside FluentCRM's automation builder. This allows you to create automated marketing funnels based on real-time events in your store.

When you create a new automation in FluentCRM, you will find a new **FluentCart** trigger category.

Here are the available triggers and what they do:

 * **Order Paid (Payment/Subscription):** Starts an automation when a new order is successfully paid. Perfect for sending a "Thank You" email or starting an onboarding sequence.
 * **Order Shipped:** Triggers when a physical order's status is changed to "Shipped." Use this to send shipping confirmation emails with tracking information.
 * **Order Delivered:** Triggers when an order's status is changed to "Delivered." A great opportunity to ask for a product review.
 * **Order Refunded (Full):** Starts when a full refund is processed. You could use this to send a survey asking for feedback on why the customer requested a refund.
 * **Order Canceled:** Triggers when an order is canceled.
 * **Order Status Changed:** Starts when an order moves to a status you choose.
 * **Subscription Triggers:** A full suite of triggers for managing communication with your subscribers, including **Subscription Activated**, **Subscription Cancelled**, **Subscription Renewed**, **Subscription End of Term (Completed)**, and **Subscription Expired / End of Access Validity**. These are essential for reducing churn and keeping subscribers engaged.

> [!Info]
> These triggers are the starting point for powerful marketing funnels. For detailed, step-by-step guides on how to use these triggers to build onboarding sequences, cart abandonment funnels, and other advanced marketing automations, please see this [documentation](https://fluentcrm.com/docs/fluentcart-integration-with-fluentcrm/).
> Abandoned cart tracking for FluentCart comes from FluentCRM's **Abandoned Cart** feature, not from FluentCart itself.

![Screenshot of Fluentcrm Automation Trigger](/images/integrations/fluentcrm/automation-trigger.webp)


### Use Case Example: Tagging Buyers of a Specific Product

You sell a "Beginner Photography Course" and want to email its buyers separately. Here is how you set up the feed:

1. Open the course product and go to its **Integrations** tab.
2. Click **Add Integration** and choose **FluentCRM**.
3. **Feed Title:** `Tag photography course buyers`
4. **Add to Lists:** `Main Customer List`
5. **Add to Tags:** `photography-course`
6. **Event Trigger:** **Order Paid (Payment / Subscription)**
7. Make sure **Enable this Integration** is on, then click **Create FluentCRM Feed**.

Every paying buyer of that course is added to your list and tagged `photography-course`, so you can target them from a FluentCRM campaign or automation.

::: info
Feeds apply fixed lists and tags; they have no conditions. To segment contacts by details such as their city, use FluentCRM's own segment filters.
:::
