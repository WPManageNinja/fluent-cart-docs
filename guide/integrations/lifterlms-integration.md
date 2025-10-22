# LifterLMS Integration

Connecting FluentCart with LifterLMS allows you to sell access to your online courses and memberships, and automatically manage student enrollment. When an event happens in your FluentCart store (like a successful purchase), this integration can instantly enroll customers into the correct LifterLMS courses or memberships, providing a smooth and automated experience.

This guide will show you how to activate the integration and configure enrollment rules using Integration Feeds.

### Activating the LifterLMS Integration

First, ensure you have both FluentCart and LifterLMS installed and active on your WordPress site.

## Configuring Enrollment Rules (Integration Feeds)

The center of this integration is setting up **Integration Feeds**. An integration feed is just a simple instruction or a rule. It tells FluentCart: "When *this specific event* happens, *then do this specific action* (like enroll a customer into a course or membership)."

You can create these feeds in two different locations:

* **Globally:** These are rules that apply to your *entire* store. They are useful for broad, general actions. For example, you could make a global rule to remove any user from a membership if their subscription is canceled, no matter what product they bought.
* **Product Specific:** This rule applies *only* to one specific product. This is the most common and recommended way to sell your courses. For example, "When a customer buys the 'Content Writing Course' product, enroll them in the 'Writing 101' LifterLMS course."

---

## Setting Up Your LifterLMS Integration Feeds

You have two ways to create these enrollment rules, depending on whether you want the rule to apply broadly or only to a specific product. Both methods use the same configuration settings.

#### Method 1: Creating a Global Feed

Choose this option to create a "catch-all" rule that runs for *any* order or subscription in your store. This is perfect for broad actions, like a site-wide rule that revokes access from a membership if *any* subscription expires.

1.  From your WordPress dashboard, go to **FluentCart Pro > Integrations**.
2.  Look for the **Global Integrations Feeds** section at the top of the page.
3.  Click the **Add Integration** button on the right side of that section.
4.  A dropdown menu will open. Select **LifterLMS**.
5.  This will take you to a new screen to set up your global rule (which we cover in the next section).

![Screenshot of LifterLMS Integration](/images/integrations/lifterlms-integration/enabling-liftelms.webp)

#### Method 2: Creating a Product-Specific Feed (Recommended)

This is the most common and recommended method. Choose this option to create a specific rule that runs *only* when this one product is purchased. This is perfect for directly linking a product, like "Beginner Writing Course," to its matching "Writing 101" LifterLMS course.

1.  **Go to your products list:** In your WordPress dashboard, navigate to **FluentCart Pro > Products**.
2.  **Open your product:** Find the product you want to sell (e.g., "Content Writing Course") and click its name to go into the product editor.
3.  **Find the Integrations tab:** At the top of the product editor, click the **Integrations** tab.
4.  **Add a new integration:** In the **Product Integrations** area, click the **Add Integration** button.
5.  **Select LifterLMS:** A dropdown will appear. Find and click on **LifterLMS**.
6.  This will take you to the feed configuration screen just for this product, where you can set up your specific enrollment rule (covered in the next section).

![Screenshot of LifterLMS Integration Feed](/images/integrations/lifterlms-integration/lifterlms-integration-feed.webp)

---

### Configuring the Feed Settings

Whether you're making a global or product-specific feed, you'll land on the configuration screen. This is where you tell FluentCart *exactly* what to do.

Here’s a simple breakdown of each setting:

* **Feed Title:** This is just for you. Give your feed a name you'll remember, like `Enroll in Content Writing Course` or `Global Refund Rule`.
* **Add to Courses:** Click in this box to select one or more LifterLMS courses. When this rule runs, the customer will be enrolled in the course(s) you pick here.
* **Add to Memberships:** This works just like the 'Add to Courses' setting. Click here to select one or more LifterLMS memberships to add the customer to.
* **Remove from selected Courses/Memberships on Refund or Subscription Access Expiration:** This is a very important setting for protecting your content. Check this box if you want FluentCart to automatically *unenroll* the customer from the courses or memberships you selected above. This will happen if their order is refunded or their subscription expires or is canceled.
* **Event Trigger:** Choose the specific action in FluentCart that should make this rule run. This is the "when" part of your automation. A full list of triggers includes:
    * **Orders**
        * `Order Paid (Payment / Subscription)`: **This is the most common trigger for selling courses.** It runs as soon as a customer's payment is successful.
        * `Order Canceled`: Runs if an order is canceled.
        * `Order Refunded (Full)`: Runs if an order is fully refunded. This is useful for global rules that revoke access.
    * **Subscriptions**
        * `Subscription Activated`: Runs when a subscription's status becomes active.
        * `Subscription Canceled`: Runs if a subscription is canceled (either by the admin or the user).
        * `Subscription Renewed`: Runs successfully on each subscription renewal payment.
        * `Subscription End of Term (Completed)`: Runs when a subscription with a fixed number of payments (e.g., 3 installments) is completed.
        * `Subscription Expired / End of Access Validity`: Runs when a subscription expires, and access should end.
    * **Shipping**
        * `Order Shipped`: Runs when an order's shipping status is marked as "Shipped."
        * `Order Delivered`: Runs when an order's shipping status is marked as "Delivered."
* **Run on Selected Variations Only** (Available for Product-Specific Feeds Only): If the product has different variations (e.g., "Basic Access," "Premium Access"), you can use this dropdown to make the rule run only when a specific variation is purchased. Leave empty to apply to all variations.
* **Enable this Integration:** Make sure this toggle at the top right is switched **ON** (blue) to make the rule active.

Click the **Create LifterLMS Feed** button to save your rule.

![Screenshot of Create LifterLMS Feed](/images/integrations/lifterlms-integration/specific-product-integration.webp)

### Use Case Example: Selling a Course Bundle

Let's illustrate how product-specific feeds make selling multiple courses simple. Imagine you offer two LifterLMS courses, but you sell them using three different FluentCart products:

* **FluentCart Product 1:** "Beginner Photography Course"
* **FluentCart Product 2:** "Advanced Editing Masterclass"
* **FluentCart Product 3:** "The Full Photography Bundle" (which gives access to both courses)

Here’s how you would set up the product-specific feeds:

1.  **Inside "Beginner Photography Course" Product:**
    * Add a LifterLMS feed.
    * In **"Add to Courses,"** select only the "Beginner Photography" LifterLMS course.
    * Set **Event Trigger** to `Order Paid (Payment / Subscription)`.
    * Check the "Remove..." box to auto-revoke access on refunds.

2.  **Inside "Advanced Editing Masterclass" Product:**
    * Add a LifterLMS feed.
    * In **"Add to Courses,"** select only the "Advanced Editing Masterclass" LifterLMS course.
    * Set **Event Trigger** to `Order Paid (Payment / Subscription)`.
    * Check the "Remove..." box.

3.  **Inside "The Full Photography Bundle" Product:**
    * Add a LifterLFMS feed.
    * In **"Add to Courses,"** select *both* the "Beginner Photography" course AND the "Advanced Editing Masterclass" course.
    * Set **Event Trigger** to `Order Paid (Payment / Subscription)`.
    * Check the "Remove..." box.

With these simple, product-specific rules, FluentCart automatically handles the correct enrollment for every single purchase. Your 'Bundle' customers get both courses, while 'Beginner' customers get just one, all without you lifting a finger.