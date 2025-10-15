# FluentCRM Integration

Connecting FluentCart with FluentCRM allows you to create powerful marketing automations based on your customers' actions. When someone makes a purchase, you can automatically add them to specific lists, apply tags, and update their profiles in FluentCRM without lifting a finger.

This guide will walk you through setting up a Global Integration Feed, which runs for every order placed in your store.

FluentCart offers two powerful ways to connect with FluentCRM:

* **Global Integrations:** These rules apply to every single purchase in your store. They are ideal for general tasks, like adding all new customers to your main newsletter.
* [**Product Integrations**](/guide/product-types-creation/managing-product-integrations.md): These rules are more specific and are triggered only when a customer buys a particular item. This is perfect for targeted actions, like adding a customer to a special list after they buy a specific course or e-book.

This guide will focus on setting up a **Global Integration**.

### When to Use Each Integration Type

Before you begin, it's helpful to decide which type of integration best suits your goal:

* **Use a Global Integration when:** You want an action to apply to *every single customer*, regardless of what they buy.
    * *Example:* Adding all paying customers to your main "Newsletter" list.
* **Use a Product Integration when:** You want an action to apply *only to customers who buy a specific item*. To learn more about setting up these powerful, product-specific automations, please follow our detailed [documentation](/guide/product-types-creation/managing-product-integrations.md).
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

* **Feed Title:** Give your feed a descriptive name that you'll recognize later, like "Add All Customers to Newsletter.
* **Add to Lists:** Use this field to select the FluentCRM lists you want to add to a customer’s profile when this feed runs from the dropdown.
* **Add to Tags:** Select the FluentCRM tag(s) you want to apply to all new customers. This is a great way to segment all your buyers for future marketing campaigns.
* **Remove From Lists / Remove From Tags:** If needed, you can also select lists and tags to remove from a customer's profile.
* **Note:** You can add a note that will be attached to the contact's profile in FluentCRM. This is great for internal records. You can even make the note dynamic by using shortcodes (click the {(...)} icon) to include customer or order data.
* **Enable Double Opt-in:** It is highly recommended to keep this enabled. It sends a confirmation email to new contacts before they are subscribed, which is a best practice for maintaining a healthy and engaged email list.
* **Event Trigger:** Select the specific store event that will trigger this automation. For most use cases, "Order Completed / Paid" is the best option, as it ensures only paying customers are added to your CRM. 

* **Remove from selected Tags/Lists on Refund or Subscription Access Expiration:** This is a handy automation. If you check this box, FluentCart will automatically remove the customer from the lists and tags you selected if their order is refunded or their subscription ends.
* **Run on Selected Variations Only:** This setting allows this integration rule to run only when a customer buys a **specific product variation**. Select one or more variations from the dropdown to apply this rule exclusively to them. If you leave this field empty, the rule will apply to all variations of this product.

* **Enable This Integration:** Ensure the toggle at the top right is switched on to make the automation active. If it is disabled, the integration will be saved but will not run.

![Screenshot of Fluentcrm Integration Feed Page](/images/integrations/fluentcrm/fluentcrm-integration-feed.webp)

Once configured, click the **Create FluentCRM Feed** button. This global automation is now live and will run for every order in your store.

Once everything is set up, you can manage the integration by clicking the **Edit** icon to make changes or the **Delete** icon to remove it.

![Screenshot of Fluentcrm Integration Feed Page](/images/integrations/fluentcrm/fluentcrm-integration-edit-or-delete.webp)

### Combining Global and Product Integrations

By combining both Global and Product-specific integrations, you can create a sophisticated marketing automation strategy. Use global feeds for general onboarding and product feeds for highly targeted, post-purchase follow-ups that enhance the customer experience.

### Automation Triggers in FluentCRM

Automation Triggers are the starting point for your marketing automations. FluentCRM can connect specific events in your FluentCart store, such as a purchase or subscription renewal, directly to marketing actions in FluentCRM. This system allows you to create a personalized and timely experience for every customer.

To start using these triggers, you'll need to create a new automation inside **FluentCRM**. It’s a straightforward process.

Here’s how you can find them:

 1. From your WordPress dashboard, go to **FluentCRM → Automations**.
 2. Click the **+ New Automation** button, which is usually at the top of the page.

> [!NOTE]
> If you’d like to explore Automation Triggers in FluentCRM in more depth, take a look at our comprehensive [documentation](/https://fluentcrm.com/docs/fluentcart-integration-with-fluentcrm/). It provides step-by-step guidance, use cases, and best practices to help you make the most of your automated workflows.

Below are the triggers you can use to start your automations.

 * **Order Paid (Payment/Subscription):** This kicks off the moment a customer successfully pays for an order or subscription. It's perfect for sending a "thank you" email, starting a welcome series, or tagging them based on what they bought.
 * **Order Shipped:** Triggered when you mark an order as shipped. This is your go-to for automatically sending "Your order is on its way!" emails to your customers.
 * **Order Delivered:** This starts once an order is marked as delivered. It's a great opportunity to ask for a product review or send tips on how to use the purchased item.
 * **Order Refunded (Full):** Starts when you process a full refund. You can use this to automatically tag the user, remove them from a specific email list, and send a follow-up email to understand what went wrong.
 * **Order Canceled:** This is triggered if an order gets canceled. It's a useful way to start a conversation and find out why the customer changed their mind.
 * **Subscription Activated:** Begins the moment a new subscription becomes active. This is the perfect trigger for an onboarding email series that helps new subscribers get the most out of their purchase.
 * **Subscription Canceled:** When a customer cancels their subscription, this trigger can start a workflow to get feedback with a survey or even send a special offer to win them back.
 * **Subscription Renewed:** A great way to acknowledge customer loyalty. This trigger starts when a subscription successfully renews, allowing you to send a thank-you message automatically.
 * **Subscription Expired / End of Access Validity:** This starts when a customer's subscription expires and is no longer active. You can use it to send a "last chance to renew" campaign or a final goodbye email.
 * **Subscription End of Term (Completed):** This triggers when a subscription has run its full course and is now complete (for subscriptions that don't auto-renew).

![Screenshot of Fluentcrm Automation Trigger](/images/integrations/fluentcrm/automation-trigger.webp)

### Use Case Example: Segmenting Customers by Location

To better understand how this integration works in practice, let's imagine you run an online store that sells physical goods, like custom-printed t-shirts. Your goal is to identify all customers from a specific city (e.g., London) so you can send them a targeted email about a local pop-up shop you are hosting.

Here is how you would configure the FluentCRM feed to achieve this:

* **Name:** `London Customer Segmentation`
* **List:** `Main Customer List`
* **Tags (Dynamic Tag Inputs):**
    * **Tag:** `london-customer`
    * **Condition:** IF `{order.billing.city}` *equals* `London`.
* **Event Trigger:** `Order Completed`
* **Status:** `Enable This feed`

**Result:**

With this configuration, every time an order with a London billing address is marked as "Completed" in FluentCart, the customer's information will be sent to FluentCRM. They will be added to your "Main Customer List" and will automatically be tagged as `london-customer`.

Inside FluentCRM, you can then create a new email campaign and, in the recipient settings, choose to send it *only* to contacts who have the `london-customer` tag. This ensures your promotional email about the London pop-up shop is sent exclusively to the relevant local audience.
