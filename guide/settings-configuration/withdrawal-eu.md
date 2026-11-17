# Withdrawal (EU)

If you sell to customers in the European Union, the law gives them the right to change their mind and cancel a purchase within a set cooling-off period. FluentCart's **Withdrawal** feature builds this right directly into your store. It gives shoppers a guided "Withdraw from contract" form, sends them an instant acknowledgment by email, and gives you a clean dashboard to review and decide on every request.

This page explains the law in plain terms, walks through every admin setting, and shows the full customer journey from declaration to acknowledgment.

::: info
This guide is a practical explanation of how the feature works. It is not legal advice. Consumer law differs from country to country, so check your own obligations or speak to a qualified advisor before relying on these settings for compliance.
:::

<YouTubeEmbed id="ib_NVgdbxbE" />

## Understanding the Right of Withdrawal

The right of withdrawal comes from the EU **Consumer Rights Directive (2011/83/EU)**. It lets consumers cancel most distance and off-premises purchases (for example, anything bought online) and get their money back. The key points that shape how FluentCart behaves are below.

* **A 14-day cooling-off period.** Consumers have **14 days** to withdraw from a distance or off-premises contract **without giving any reason** and without penalty. This is why FluentCart never forces a customer to explain why they are withdrawing.
* **When the clock starts.** For goods, the 14 days generally run from the day the consumer (or someone they nominate) receives the items. For services and digital content, they generally run from the day the contract is concluded.
* **The 12-month extension.** If you fail to tell customers about their right of withdrawal, the period is **extended by up to 12 months**. Making the withdrawal page easy to find is the simplest way to stay on the right side of this rule.
* **A clear declaration is enough.** Consumers can use a model withdrawal form or **any other unequivocal statement** to declare they are withdrawing. FluentCart's guided form is exactly this kind of clear statement, captured and time-stamped for you.
* **Refunds follow.** Once a valid withdrawal is made, the trader reimburses the consumer (usually within 14 days). FluentCart records the request and estimates the refund, but it always leaves the actual refund in your hands.
* **Some sales are exempt.** Under **Article 16** of the Directive, the right of withdrawal does not apply to certain contracts, for example custom or personalized goods, perishable items, sealed goods unsealed for health or hygiene reasons, sealed audio, video, or software that has been opened, and digital content whose download has begun with the consumer's prior consent. The **Excluded product categories** setting (below) lets you flag these.

::: info
FluentCart is built to **never silently refuse a declaration**. Even when an order falls outside your time window, an item is in an excluded category, or no order matches the details, the customer can still submit. The request lands in your dashboard for a human decision. This protects you from accidentally blocking a request the law actually permits. The only hard stops are the ones you choose: orders in a blocked order or shipping status, and orders where every item is in an excluded category.
:::

For the full legal text, see the official EU summary, [Consumer information, right of withdrawal and other consumer rights](https://eur-lex.europa.eu/EN/legal-content/summary/consumer-information-right-of-withdrawal-and-other-consumer-rights.html), and the [Consumer Rights Directive 2011/83/EU](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083).

## Enabling the Feature

Withdrawal is provided by the **FluentCart Customer Rights** add-on. To install it:

1. Go to **FluentCart Pro > Settings > Features & addon**.
2. In **Plugin Addons**, find **FluentCart Customer Rights** and click **Install & Activate** (without FluentCart Pro, click **Download** and install the plugin manually).
3. Once the add-on is active, a **Withdrawal** page appears in the settings sidebar, grouped under **Compliance**, and a **Withdrawals** item is added to the **More** menu. There is no separate on/off toggle.

::: info
The Withdrawals screen needs a recent version of FluentCart. If your FluentCart is a little behind, the **Withdrawals** menu item opens an **Update FluentCart** card instead of the table. On a much older FluentCart, the menu item is hidden. In both cases a notice in the WordPress admin asks you to update, and the settings and the customer form keep working. Older versions of FluentCart also list **Withdrawal** at the top level of the settings sidebar instead of under **Compliance**.
:::

For more on installing add-ons, see [Features & Addons](/guide/settings-configuration/features-addons).

## Accessing Withdrawal Settings

With the add-on active, all of its controls live in one settings tab. To open it:

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Expand **Compliance** in the left-hand sidebar and select **Withdrawal**.

![Screenshot of the Compliance group in the settings sidebar expanded, with the Withdrawal page selected](/images/settings-configuration/withdrawal/withdrawal-settings-compliance.webp)

![Screenshot of the FluentCart Withdrawal settings screen showing the Button Placement, Form Behaviour, Time Windows, and Order Filtering sections](/images/settings-configuration/withdrawal/withdrawal-settings.webp)

The settings are grouped into four areas: **Button Placement**, **Form Behaviour**, **Time Windows**, and **Order Filtering**, plus the **Select Withdrawal Page** option at the bottom. Each is covered below.

## Button Placement

This section controls **where the "Withdraw from contract here" link appears** in the customer portal. All three placements are on by default.

* **Show in subscription detail:** Adds the link at the bottom of the customer's subscription detail view. It opens the form with the subscription and its original order already filled in.
* **Show in order detail:** Adds the link at the bottom of an individual order's detail view. It opens the form with that order's receipt number already filled in.
* **Show in customer dashboard:** Adds the link below the orders table on the main customer dashboard. It is not tied to one order, so it opens the empty form.

Turn on whichever placements match how your customers browse their account. The more visible the link, the easier it is to meet the "must be clearly informed" requirement described above.

::: info
The link only appears once you have chosen a page under **Select Withdrawal Page** (see Order Filtering below). Without a page, none of the three placements shows anything.
:::

On the order and subscription views, the link is hidden when the order is in a blocked order or shipping status, or when every item in it is in an excluded category. The dashboard link is never hidden for those reasons, because it isn't tied to an order. Turning a placement off only removes the link. The withdrawal page itself stays reachable by its address.

Once a withdrawal has been submitted for an order, the link is replaced by a status label so the customer always knows where the request stands:

* **Withdrawal requested — pending review:** The request is waiting for your decision.
* **Withdrawal accepted for this order:** You accepted it.
* **Withdrawal declaration was not accepted:** You declined it.

These labels are shown on the order and subscription views regardless of the blocked statuses, and they don't appear on the dashboard.

## Form Behaviour

These options shape what the customer sees and how strictly each declaration is checked.

* **Require a verified order match:** *(Toggle, off by default)* When this is **off** (recommended), declarations that cannot be automatically matched to an order are still accepted and queued as **unverified**, so a genuine withdrawal is never refused on a technicality. Turn it **on** only if your operations require a matched order before a request can be processed.
* **Show the optional note field:** *(Toggle)* Lets the customer add an optional free-text note to their declaration. This is for any extra context. The choice of which items to withdraw is handled separately by the item-selection step.
* **Allow partial revocations:** *(Toggle)* When **on**, customers can withdraw from some items while keeping others. When **off**, every request is treated as a full contract withdrawal and the item-selection step is hidden. Turning this off also hides the note field.
* **Item selection step, who can use it:** Controls which customers see the item-selection step.
  * **Account owner (logged in, email + invoice match):** Only customers who are logged in with the account that placed the order, and whose email and invoice match, see the step.
  * **Email-verified submitter (invoice + email match):** The step is also shown to any customer (including guests) who correctly matches the receipt number and billing email.

::: info
Four emails are added to **Email Configuration > Notifications** under **Withdrawal**: **Withdrawal acknowledgment to customer**, **New withdrawal request to admin**, **Withdrawal accepted notice to customer**, and **Withdrawal declined notice to customer**. The acknowledgment is legally required, so it is sent even if you switch it off. See [Configuring Email Notification](/guide/settings-configuration/email-configuration/configuring-email-notification) to customize their wording.
:::

## Time Windows

These two fields let you mark older orders as outside the cooling-off period. Both are measured in days, and **0 means no restriction**.

* **Statutory cancellation period (days):** The maximum age of an order, based on its completion date, that is still eligible for withdrawal. Orders older than this show a warning to the customer, but, in keeping with the design above, they are **never hard-blocked**.
* **Exclude orders older than (days):** A fallback age check based on the order's creation date. This is useful when orders are created in stages before completion. As with the field above, it produces a warning rather than a block.

## Order Filtering

This section decides which orders and products are eligible, and where the withdrawal page lives.

* **Blocked order statuses:** Orders in any of these statuses are rejected at the first step, and the withdrawal button is hidden in the customer portal. The default is **Canceled**, **Failed**, **Draft**, and **Completed**. A customer who tries anyway sees "Withdrawal is not available for this order (status: completed). Please contact the store if you believe this is a mistake." Remove **Completed** if you want customers to be able to withdraw from finished orders.
* **Blocked shipping statuses:** Orders whose shipping status matches one of these values are rejected at the first step, and the button is hidden. The default is **Shipped**. Shipping status is tracked separately from order status, which is why it has its own filter.
* **Excluded product categories:** Product categories that are not eligible for withdrawal under **Article 16** of the Directive, such as digital goods or perishables. When only some items in an order are excluded, the customer can still submit, and the request is flagged for you with a **Partial exclusion** badge and the excluded items listed. When every item in the order is excluded, the withdrawal button is hidden in the customer portal and the form shows "This order is not eligible for withdrawal — all products are excluded from the right of withdrawal." instead of accepting the declaration.
* **Select Withdrawal Page:** The WordPress page that hosts the withdrawal form. The page must contain the `[fluent_cart_withdrawal]` shortcode. Link to this page prominently, for example with a footer link, so it is easy for customers to find.

### Setting Up the Withdrawal Page

The customer-facing form is rendered by a shortcode, so you can place it on any WordPress page.

1. Create a new WordPress page (for example, titled "Right of Withdrawal").
2. Add the `[fluent_cart_withdrawal]` shortcode to the page content and publish it.
3. Back in **Settings > Compliance > Withdrawal**, choose that page under **Select Withdrawal Page**.
4. Add a link to the page somewhere persistent, such as your site footer, so customers can always reach it.

Prefer a shortcut for steps 1 to 3? Click the **+** button next to **Select Withdrawal Page**, and FluentCart creates the page for you (default title "Withdraw from contract") with the shortcode already in place.

## The Customer Withdrawal Journey

Once the feature is set up, withdrawing is a short, guided flow for the customer. Here is what they experience from start to finish. The form follows your store's color palette and spacing, so it blends in with the rest of your site, and your theme's button styles do not change how its links and buttons look.

### Starting a Withdrawal

A customer who wants to cancel opens their order in the **Purchase History** area of their account and clicks the **Withdraw from contract here** link beneath the billing and shipping details. Depending on your **Button Placement** settings, the same link can also appear on the dashboard or a subscription view.

![Screenshot of a customer's Purchase History order detail with the Withdraw from contract here link below the billing and shipping address](/images/settings-configuration/withdrawal/withdrawal-portal-link.webp)

### Step 1: Enter Details

The form opens on the **Withdraw from contract** page. The customer confirms who they are and which order they mean. No reason is required at any point.

* **First name** and **Last name:** *(Required)* The customer's name.
* **Receipt number:** *(Required)* Found on the order confirmation email or receipt.
* **Email address:** *(Required)* Where the acknowledgment of receipt will be sent.
* **Additional note:** *(Optional)* A free-text note. This appears only when **Show the optional note field** is enabled, and the customer can leave it blank.

![Screenshot of step one of the Withdraw from contract form with first name, last name, receipt number, email address, and an optional note field](/images/settings-configuration/withdrawal/withdrawal-step-1-details.webp)

When the details are filled in, the customer clicks **Continue**. If no order matches the details, the next step starts with a notice that reads "We could not automatically match an order with these details. Your withdrawal will still be submitted and reviewed by the store." The declaration is still accepted and shows up as **Unverified** on your side.

::: info
To discourage abuse, each visitor can make 5 attempts in 15 minutes. After that, the form shows "Too many attempts — please try again in a few minutes."
:::

### Step 2: Choose What to Withdraw

If you allow partial revocations and the customer is eligible for the item-selection step (by default only a logged-in account owner is, see **Item selection step, who can use it** above), they now choose which items to withdraw. Every item is **pre-selected**, so a customer who wants to cancel the whole order can simply continue. To keep an item, they uncheck it.

![Screenshot of the item-selection step showing the order items pre-selected with item, unit price, and quantity columns](/images/settings-configuration/withdrawal/withdrawal-step-2-items.webp)

Clicking **Continue** moves to the review step, and **Back to edit details** returns to step 1.

### Step 3: Review and Confirm

The final step summarizes the whole request so the customer can check it before submitting. When an order matches, it shows the order number, date, and total, then the customer's name, receipt number, and email, plus the items being withdrawn and an **estimated refund** for customers who went through the item-selection step. A guest who skipped item selection withdraws from the whole contract.

![Screenshot of the review and confirm step showing the order summary, the withdrawal request details, the items to withdraw, and the estimated refund](/images/settings-configuration/withdrawal/withdrawal-step-3-review.webp)

The customer clicks **Confirm withdrawal** to submit the declaration.

### Acknowledgment of Receipt

As soon as the request is submitted, FluentCart confirms it on screen and emails an **acknowledgment of receipt** to the address provided. The acknowledgment records the date and time the declaration was received, the customer's name, the receipt number, and a unique **reference** code. This time-stamped acknowledgment is your proof that the customer exercised their right within the cooling-off period.

![Screenshot of the withdrawal confirmation screen showing the acknowledgment of receipt with the received date and time, name, receipt number, and reference code](/images/settings-configuration/withdrawal/withdrawal-confirmation.webp)

The screen makes clear that this acknowledgment confirms receipt of the declaration, and that the store will review the request and follow up on next steps.

## Reviewing Requests as an Admin

You can review declarations in two places: all together on the **Withdrawals** screen, or one by one on the order they relate to.

### The Withdrawals Screen

The **Withdrawals** screen lists every declaration in one table. To open it:

1. From your FluentCart admin, click the **More** menu item in the top navigation bar.
2. Click **Withdrawals**.

![Screenshot of the More menu in the FluentCart top navigation with the Withdrawals item highlighted](/images/settings-configuration/withdrawal/withdrawals-more-menu.webp)

The screen is titled **Withdrawal Requests** and lists every declaration in a table.

![Screenshot of the Withdrawal Requests screen with status tabs, request rows, and one row expanded to show the withdrawn item](/images/settings-configuration/withdrawal/withdrawals-screen.webp)

The table has the tabs **All**, **Pending**, **Accepted**, and **Declined**, with more views such as **Unverified** under **More views**. Use the search box to find a request by name, email, order number, or reference, and sort by **Received**, **Status**, or **Name**. The **Customer**, **Order**, and **Received** columns can be toggled on or off.

Each row shows the reference code with its status badge (**Pending**, **Succeeded** once accepted, or **Failed** once declined), the customer, the linked order, when it was received, whether it is **Verified** (a **Verified User** or **Verified Mail** match) or **Unverified**, and the **Est. Refund**. Click the arrow at the start of a row to expand the items the customer chose to withdraw, with the quantity, unit refund, and line total for each (tax is shown as a note).

The **Actions** column works like this:

* **Accept:** The check button approves a pending request. The customer is notified by email.
* **Decline:** The cross button rejects a pending request. The customer is notified by email. The row then shows **Failed** and the action buttons disappear.
* **Link order:** Shown for a request that is not tied to an order yet, such as an unverified declaration. Click it, enter the **Order ID**, and click **Confirm**. The request is attached to that order and counted as verified. Its badge turns green, although it keeps the **Unverified** label because that label records how the customer identified themselves.

You need permission to manage orders to see these buttons. Anyone who can view orders can read the table.

### The Order Page

Every declaration also appears against the order it relates to, so you can review and decide on it right where the order lives. To find a request:

1. From your FluentCart admin, go to the **Orders** section.
2. Click the order the customer is withdrawing from to open its **order detail** page.
3. Scroll to the **Withdrawal Requests** card on that page, where any request tied to the order is listed.

Each request card shows its current state at a glance:

* **Status badge:** **Pending** until you decide, then **Accepted** or **Declined**.
* **Verification badge:** **Verified** when the order number and billing email matched the order, or **Unverified** when they did not. (The Withdrawals screen is more specific and tells **Verified User** from **Verified Mail**.)
* **Exclusion badge:** **Partial exclusion** or **All items excluded** appears when the order contains products from an excluded category, and the excluded items are listed on the card.
* **Details:** The reference code, the date and time received, the customer's name and email, the order reference, the customer's note (shown as **Part / note**), and the **Est. refund** when the customer chose items.

![Screenshot of a pending, verified withdrawal request card with Accept withdrawal and Decline buttons](/images/settings-configuration/withdrawal/withdrawal-request-pending.webp)

To act on a pending request, use the two buttons on the card:

* **Accept withdrawal:** Approves the request. The customer is emailed automatically with the decision.
* **Decline:** Rejects the request. The customer is also notified by email.

Once you decide, the card updates to show the outcome, who acted, and when, along with a note that the decision email was sent to the customer.

![Screenshot of an accepted withdrawal request card showing the Accepted and Verified badges and a note that the decision email was sent to the customer](/images/settings-configuration/withdrawal/withdrawal-request-accepted.webp)

::: info
Accepting a withdrawal **does not issue a refund automatically**. Refunds stay manual, so you remain in full control of when and how money is returned. Process the refund from the order itself once you are ready. See [Refunds Report](/guide/reporting-analytics/refunds-report) for tracking refunded orders.
:::

With this feature configured, your store gives EU customers a clear, lawful way to exercise their right of withdrawal, keeps a verifiable record of every declaration, and leaves the final decision and refund firmly in your hands.
