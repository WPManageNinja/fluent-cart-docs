# Integrating with Mailchimp

FluentCart offers a direct and powerful integration with Mailchimp, one of the world's leading email marketing platforms. By connecting your store to Mailchimp, you can automate your marketing efforts, build relationships with your customers, and grow your business more effectively. This integration allows you to automatically add new customers to your Mailchimp audience, segment them with tags based on their purchase behavior, and sync their data, all without any manual effort.

This comprehensive guide will walk you through the entire process, from enabling the Mailchimp module and connecting your account to creating and configuring your first automation feed.

#### Step 1: Enable the Mailchimp Module

Before you can connect your Mailchimp account, you must first activate the integration module within FluentCart. This ensures that all the necessary settings and features for the integration are loaded and available in your dashboard.

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Integrations**.
2.  Find **Mailchimp** in the list of available FluentCart Modules.
3.  Click the **Manage** button to enable it.

#### Step 2: Get Your Mailchimp API Key

To allow FluentCart to communicate securely with your Mailchimp account, you need to generate an API Key. An API Key is a unique code that acts like a password, granting FluentCart permission to access your Mailchimp audience and add contacts.

1.  Log in to your Mailchimp account.
2.  Click on your profile icon at the bottom left of the screen and navigate to **Account & billing > Extras > API keys**.
3.  If you do not have an existing API key, click the **Create A Key** button.
4.  Give the key a descriptive name that you will recognize, such as "FluentCart Store," and click **Generate Key**.
5.  Mailchimp will display your new API key one time only. It is crucial to click **Copy To Clipboard** and save it in a secure location immediately, as you will not be able to view or copy it again.

#### Step 3: Connect Mailchimp to FluentCart

With your API key copied, you can now return to your WordPress dashboard to establish the connection between the two platforms.

1.  Navigate back to **FluentCart Pro > Integrations** and click **Manage** for the Mailchimp module.
2.  Paste your copied **Mailchimp API Key** into the designated field.
3.  Click the **Save Settings** button. If the key is correct, you will see a success message confirming that the integration is active.

#### Step 4: Create a New Mailchimp Feed

Once the global connection is established, you can create specific automation "feeds." A feed is a single, configured rule that tells FluentCart what data to send to Mailchimp and when to send it. You can create multiple feeds for different purposes.

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2.  Click on the **Checkout Actions** tab.
3.  Click the **Add Integration** button at the top right of the screen and select **Mailchimp Feed** from the dropdown menu.

#### Step 5: Configure the Mailchimp Feed

This screen is where you will define the specific rules for your automation.

**1. Basic Information**

* **Name:** Give your feed a clear and descriptive name for your own reference. For example, "Add New Customers to Newsletter" or "Tag High-Value Buyers."
* **List:** From the dropdown menu, select the Mailchimp audience (formerly known as a list) where you want to add the new subscribers from your store.

**2. Additional Information**

This section provides advanced options to help you segment and manage your subscribers effectively.

* **Interest Group:** If you use interest groups (groups within an audience) in Mailchimp, you can select one here to automatically assign new subscribers to a specific group for more targeted marketing.
* **Tags:** Apply one or more tags to contacts when they are added. This is incredibly useful for segmentation. For example, you could add a "New Customer" tag. You can also enable **Dynamic Tag Inputs** to apply tags conditionally based on order data, such as tagging a customer based on the city they live in.
* **Note:** Add a static note that will be attached to the contact's profile in Mailchimp. This is for internal use and is not visible to the customer.
* **Enable Double Opt-in:** It is highly recommended to keep this option enabled. When checked, Mailchimp will send a confirmation email to the user, and they will only be added to your audience after they click the confirmation link. This is a best practice for GDPR compliance, improves your list quality, and reduces spam complaints.
* **Enable ReSubscription:** If a customer has previously unsubscribed from your list, enabling this option will resubscribe them upon purchase. Use this feature with caution to ensure you are respecting your customers' preferences.
* **Mark as VIP Contact:** Enable this to automatically mark the new contact as a VIP in Mailchimp, making it easy to identify and reward your most valuable customers.

**3. Event Trigger**

Here, you choose the specific store event that will trigger this automation. This gives you precise control over when the data is sent to Mailchimp.

* **Order Created:** The action fires immediately after an order is placed, regardless of payment status. This is useful for initial welcome sequences.
* **Order Completed:** The action fires only when the order status is marked as "Completed." This is ideal if you only want to add paying customers to your marketing lists.
* **Order Canceled:** The action fires if an order is canceled. This could be used to trigger a follow-up email asking for feedback.

**4. Finalize the Feed**

* **Status:** Ensure the **Enable This feed** checkbox is checked. If this is not checked, the automation will be saved but will remain inactive.

Once you have configured all the settings to your liking, click the **Create Mailchimp Feed** (or a similar save) button. Your integration is now live, and FluentCart will automatically send new customer data to Mailchimp based on your chosen trigger and settings.