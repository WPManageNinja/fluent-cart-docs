# FluentCRM Integration

FluentCart seamlessly integrates with FluentCRM, allowing you to create powerful marketing automations that are triggered by customer purchases. By connecting your store, you can automatically add new customers to specific lists, apply tags based on what they buy, and enrich their contact profiles without any manual work.

FluentCart offers two powerful ways to connect with FluentCRM: **Global Integrations**, which apply to every purchase (ideal for adding all customers to a main newsletter), and [**Product Integrations**](/guide/product-types-creation/managing-product-integrations.md), which are triggered only by specific items (perfect for adding a student to a course-specific list).

This guide will walk you through setting up both types of integrations.

### When to Use Each Integration Type

Before you begin, it's helpful to decide which type of integration best suits your goal:

* **Use a Global Integration when:** You want an action to apply to *every single customer*, regardless of what they buy.
    * *Example:* Adding all paying customers to your main "Newsletter" list.
* **Use a Product Integration when:** You want an action to apply *only to customers who buy a specific item*. To learn more about setting up these powerful, product-specific automations, please follow our detailed [documentation](/guide/product-types-creation/managing-product-integrations.md).
    * *Example:* Adding customers who bought your "Advanced SEO Course" to a "Course Students" list and tagging them accordingly.


### Global Integration (For All Products)

A global integration is perfect for general marketing tasks that should apply to all your customers, such as adding every new buyer to your main newsletter list or applying a general "Customer" tag.

#### Navigating to Global Integrations

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Global Integrations** tab.

#### Creating a New FluentCRM Feed

1.  On the Global Integrations dashboard, click the **Add Integration** button at the top right.
2.  Select **FluentCRM Feed** from the dropdown menu. This will take you to the configuration screen.

  ![Screenshot of Fluentcrm Integration Page](/guide/public/images/Integrations/fluentcrm/add-integration.png)

#### Configuring the Global Feed

This screen allows you to define exactly what happens in FluentCRM when any order is placed in your store.

* **Name:** Give your feed a descriptive name for your own internal reference (e.g., "Add All New Customers to Main List"). This helps you easily identify the automation later.
* **FluentCRM Lists:** Select the FluentCRM list(s) where you want to add your new contacts. You can select one or more lists.
* **Contact Tags:** Select the FluentCRM tag(s) you want to apply to all new customers. This is a great way to segment all your buyers for future marketing campaigns.
* **Other Fields:** This powerful feature allows you to map additional data from the order to custom fields in FluentCRM. For each, provide a **Field Label** (the name of the custom field in FluentCRM) and select the corresponding FluentCart **Field Value** (shortcode) to sync the data.
    * Example: To save the customer's city, you could set the Field Label to 'City' and select the Field Value '{order.billing.city}'. This will automatically populate the 'City' custom field in the FluentCRM contact profile with the data from the order.*
* **Note:** Add a note that will be attached to the contact's profile in FluentCRM. You can use shortcodes here to make the note dynamic and personalized.
* **Enable Double Opt-in:** It is highly recommended to keep this enabled. It sends a confirmation email to the user before they become an active subscriber, which is a best practice for GDPR compliance and maintaining a healthy, engaged email list.
* **Enable ReSubscription:** If enabled, this will resubscribe a contact if they had previously unsubscribed from your list. Use this option with caution to ensure you respect your customers' choices.
* **Event Trigger:** Select the specific store event that will trigger this automation. For most use cases, "Order Completed / Paid" is the best option, as it ensures only paying customers are added to your CRM.
* **Enable This Feed:** Ensure the toggle at the top right is switched on to make the automation active. If it is disabled, the feed will be saved but will not run.

  ![Screenshot of Fluentcrm Integration Feed Page](/guide/public/images/Integrations/fluentcrm/fluentcrm-integration-feed.png)

Once configured, click the **Create FluentCRM Feed** button. This global automation is now live and will run for every order in your store.

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
