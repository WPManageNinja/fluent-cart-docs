# LearnDash Integration

Connecting FluentCart with LearnDash allows you to sell access to your online courses and automatically manage student enrollment. When an event happens in your FluentCart store (like a successful purchase), this integration can instantly enroll customers into the correct LearnDash courses or groups, providing a smooth and automated experience.

This guide will show you how to activate the integration and configure enrollment rules using Integration Feeds.

## Activating the LearnDash Integration

First, ensure you have both **FluentCart** and **LearnDash** installed and active on your WordPress site. The basic connection is automatic.

## Configuring Enrollment Rules (Integration Feeds)

The core of the integration lies in creating **Integration Feeds**. Think of a "feed" as a specific instruction or rule that tells FluentCart: *"When this happens, enroll the customer in that LearnDash course or group."*

You can create these feeds in two places:

* **Globally:** These feeds apply based on events happening anywhere in your store. Useful for broad actions, like adding every new subscriber to a general student group.
* **Product Specific:** These feeds apply only for a specific product. This is the most common and recommended method for selling individual courses.

### How to Create an Enrollment Rule (Feed)

You have two ways to create these enrollment rules, depending on whether you want the rule to apply broadly or only to a specific product. Both methods use the same configuration settings.

#### Method 1: Creating a Global Feed

Use this method if you want a rule to apply based on events happening anywhere in your store (e.g., enrolling every new subscriber into a general student group).

1.  From your WordPress dashboard, go to **FluentCart Pro > Integrations**.
2.  Find the **Global Integrations Feeds** section at the top of the page.
3.  Click the **Add Integration** button located in the top-right corner of this section.
4.  A dropdown menu will appear. Choose **LearnDash** from the list.
5.  You will now be taken to the feed configuration screen where you can define the specifics of your global rule (explained in the below section).

![Global Integration](/guide/public/images/integrations/learndash/global-integration-1.png)

#### Method 2: Creating a Product-Specific Feed (Recommended for Selling Courses)

Use this method to link a specific FluentCart product directly to the LearnDash course(s) it grants access to. This is the most common way to sell individual courses.

1.  From your WordPress dashboard, go to **FluentCart Pro > Products**.
2.  Find the product you want to link to LearnDash (e.g., your "Learn Python Course") and click on its name or the "Edit" link to open the product editor.
3.  Inside the product editor, look for the row of tabs near the top (Edit Product, Upgrade Paths, etc.) and click on **Integrations**.
4.  Within the product's Integrations area, click the **Add Integration** button.
5.  A dropdown menu will appear. Choose **LearnDash** from the list.
6.  You will now be taken to the feed configuration screen, specifically for this product, where you can define the enrollment rule (explained in the next section).

![Product Integration](/guide/public/images/integrations/learndash/product-integration-2.png)

### Configuring the Feed Settings

Once you add a feed (either globally or per-product), you will see the configuration screen.

Here’s what each setting does:

* **Feed Title:** Give your rule a clear name that you'll easily recognize later (e.g., "Enroll in Learn Python Course" or "Add Subscribers to Student Group").
* **Add to Courses:** Use the dropdown menu to select the LearnDash courses you want to enroll the user in when this rule runs.
* **Add to LearnDash Groups:** Similarly, select any LearnDash group(s) you want to add the user to.
* **Remove from selected Courses/Groups on Refund or Subscription Access Expiration:** This is a vital setting for managing access automatically. Check this box if you want FluentCart to automatically remove the user from the selected courses/groups if their related order is refunded, or if their subscription expires or is canceled.
* **Event Trigger:** Select the FluentCart action from the dropdown that runs this rule. For course access after purchase, you can use `Order Paid (Payment / Subscription)`. Other order and subscription triggers are available for different needs. 
* **Run on Selected Variations Only (Available for Product-Specific Feeds Only):** If the product has different variations (e.g., "Basic Access," "Premium Access"), you can use this dropdown to make the rule run only when a specific variation is purchased. Leave empty to apply to all variations.
* **Enable this Integration:** Make sure this toggle at the top right is switched **ON** (blue) to make the rule active.

Click **Create LearnDash Feed** (or similar button) to save your rule.

![Global Integration Feed](/guide/public/images/integrations/learndash/integration-feed-3.png)

### Use Case Example: Selling a Course Bundle

Let's illustrate how product-specific feeds make selling multiple courses easy. Imagine you offer two LearnDash courses, sold via three FluentCart products:

* **FluentCart Product 1:** "Beginner Photography Course"
* **FluentCart Product 2:** "Advanced Editing Masterclass"
* **FluentCart Product 3:** "Photography Bundle" (includes access to both courses)

Here’s how you would set up the feeds:

1.  **Inside "Beginner Photography Course" Product:** Add a LearnDash feed. In "Add to Courses," select only the "Beginner Photography" LearnDash course. Set Trigger to **Order Paid**.
2.  **Inside "Photography Bundle" Product:** Add a LearnDash feed. In "Add to Courses," select both the "Beginner Photography" AND the "Advanced Editing" LearnDash courses. Set Trigger to **Order Paid**.

With these simple, product-specific rules, FluentCart automatically handles the correct enrollment for every purchase, ensuring your students get exactly what they paid for instantly.