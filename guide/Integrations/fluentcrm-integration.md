# Integrating with FluentCRM

FluentCart seamlessly integrates with FluentCRM, allowing you to create powerful marketing automations that are triggered by customer purchases. By connecting your store to FluentCRM, you can automatically add new customers to specific lists, apply tags based on what they buy, and enrich their contact profiles without any manual work.

This integration is handled through FluentCart's **Checkout Actions** feature. This guide will walk you through the process of setting up a new feed to connect a checkout event to FluentCRM.

#### Step 1: Navigate to Checkout Actions

To begin, you need to access the main Checkout Actions screen.

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Once you're there, look for the **Checkout Actions** tab on the left side menu. Click it, and then hit the **Configure Modules** button.

  ![Screenshot of Fluentcrm Integration pricing Page](/guide/public/images/Integrations/fluentcrm/checkout-actions-fluentcart.png)

Now, you'll see options for different tools you can connect. If you haven't added FluentCRM yet, click the **Install FluentCRM** button. But if you already have FluentCRM on your site and it's ready to go, just click the **Manage** button next to it instead.

  ![Screenshot of Fluentcrm Integration pricing Page](/guide/public/images/Integrations/fluentcrm/install-fluentCrm.png)

#### Step 2: Create a New FluentCRM Feed

1.  On the Checkout Actions screen, click the **Add Integration** button at the top right.
2.  Select **FluentCRM Feed** from the dropdown menu. This will take you to the configuration screen for the new feed.

  ![Screenshot of Fluentcrm Integration pricing Page](/guide/public/images/Integrations/fluentcrm/install-fluentCrm.png)

#### Step 3: Configure the Feed Settings

This screen is divided into several sections that allow you to define exactly what happens in FluentCRM when a customer checks out.

**1. Basic Information**

* **Name:** Give your automation a descriptive name for internal reference.
* **List:** From the dropdown, select the target FluentCRM list where you want to add the new contacts.

**2. Map Fields**

This is where you connect the customer data collected during checkout to the corresponding fields in the FluentCRM contact profile. By default, you can map the following essential fields:

* **Email Address:** This is the most critical field. You map this to the customer's email collected during checkout. It serves as the unique identifier for the contact in FluentCRM.
* **First Name:** This maps the customer's first name from the checkout form to the "First Name" field in their FluentCRM profile, allowing for personalized communication.
* **Last Name:** This maps the customer's last name from the checkout form to the "Last Name" field in their FluentCRM profile.

:::tip Select button dropdown
The **Select** button dropdown next to each field allows you to choose the corresponding shortcode. These shortcodes pull data directly from the customer's order and are organized into helpful categories like "Customer," "Payments," and "General." For example, to map the customer's email, you would choose **Email Address** from the "Customer" category, which inserts the `{order.billing_email}` shortcode.
:::

  ![Screenshot of Fluentcrm Integration Page](/guide/public/images/Integrations/fluentcrm/fluentcrm-integration-feed.png)

**3. Additional Information**

This section provides more advanced options for organizing and managing your new contacts.

* **Other Fields:** Click the **plus icon (+)** to map additional data. For each, provide a **Field Label** in FluentCRM and select the corresponding FluentCart **Field Value** from the dropdown.
* **Tags:** Apply one or more tags to the contact. For more advanced segmentation, check the **Enable Dynamic Tag Inputs** box to apply tags only when specific conditions are met.
    * **Select the Tag:** Choose the tag you want to apply from the dropdown menu.
    * **Set the Condition:** Create a rule that must be met for the tag to be applied.
        * **If:** Select a data point (shortcode) from the dropdown, such as `{order.billing.city}`.
        * **Operator:** Choose a logical operator.
        * **Value:** Enter the value to check against.
    * **Add More Conditions:** Click the **plus icon (+)** to add another rule. The tag will only be applied if *all* conditions are met.
* **Note:** Add a static note that will be attached to the contact's profile in FluentCRM.
* **Double Opt-in:** Enable this to send a confirmation email to the user before they become an active subscriber on your list.
* **ReSubscribe:** If enabled, this will resubscribe a contact if they had previously unsubscribed from your list.
* **VIP:** Enable this to automatically mark the new contact as a VIP in FluentCRM.

**4. Finalize the Feed**

Before saving, you must set the status of your new automation.

* **Status:** Ensure the **Enable This feed** checkbox is checked to make the automation active. Unless your automation will be inactive.t

Once all fields are configured, click the **Create FluentCRM Feed** button at the bottom of the page. Your integration is now live, and FluentCart will automatically send customer data to FluentCRM after every completed checkout.

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