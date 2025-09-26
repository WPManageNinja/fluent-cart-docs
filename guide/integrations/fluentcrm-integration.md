# FluentCRM Integration

FluentCart seamlessly integrates with FluentCRM, allowing you to create powerful marketing automations that are triggered by customer purchases. By connecting your store, you can automatically add new customers to specific lists, apply tags based on what they buy, and enrich their contact profiles without any manual work.

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


### Setting Up a Global Integration

A global integration is perfect for general marketing tasks that should apply to all your customers, such as adding every new buyer to your main newsletter list or applying a general "Customer" tag.

#### Navigating to Global Integrations

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Global Integrations** tab.

#### Creating a New FluentCRM Feed

1.  On the Global Integrations dashboard, click the **Add Integration** button at the top right.
2.  Select **FluentCRM Feed** from the dropdown menu. This will take you to the configuration screen.

  ![Screenshot of Fluentcrm Integration Page](/images/integrations/fluentcrm/add-integration.png)

#### Configuring the Global Feed

This screen allows you to define exactly what happens in FluentCRM when any order is placed in your store.

* **Feed Title:** Give your feed a descriptive name that you'll recognize later, like "Add All Customers to Newsletter.
* **Add to Lists:** Use this field to select the FluentCRM lists you want to add to a customer’s profile when this feed runs from the dropdown.
* **Add to Tags:** Select the FluentCRM tag(s) you want to apply to all new customers. This is a great way to segment all your buyers for future marketing campaigns.
* **Remove From Lists / Remove From Tags:** If needed, you can also select lists and tags to remove from a customer's profile.
* **Note:** You can add a note that will be attached to the contact's profile in FluentCRM. This is great for internal records. You can even make the note dynamic by using shortcodes (click the {(...)} icon) to include customer or order data.
* **Enable Double Opt-in:** It is highly recommended to keep this enabled. It sends a confirmation email to new contacts before they are subscribed, which is a best practice for maintaining a healthy and engaged email list.
* **Event Trigger:** Select the specific store event that will trigger this automation. For most use cases, "Order Completed / Paid" is the best option, as it ensures only paying customers are added to your CRM.
* **Remove from selected Tags/Lists on Refund or Subscription Access Expiration:** This is a handy automation. If you check this box, FluentCart will automatically remove the customer from the lists and tags you selected if their order is refunded or their subscription ends.
* **Enable This Integration:** Ensure the toggle at the top right is switched on to make the automation active. If it is disabled, the integration will be saved but will not run.

  ![Screenshot of Fluentcrm Integration Feed Page](/images/integrations/fluentcrm/fluentcrm-integration-feed.png)

Once configured, click the **Create FluentCRM Feed** button. This global automation is now live and will run for every order in your store.

Once everything is set up, you can manage the integration by clicking the **Edit** icon to make changes or the **Delete** icon to remove it.

  ![Screenshot of Fluentcrm Integration Feed Page](/images/integrations/fluentcrm/fluentcrm-integration-edit-or-delete.png)

### Combining Global and Product Integrations

By combining both Global and Product-specific integrations, you can create a sophisticated marketing automation strategy. Use global feeds for general onboarding and product feeds for highly targeted, post-purchase follow-ups that enhance the customer experience.

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
