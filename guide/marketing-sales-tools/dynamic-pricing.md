# Dynamic Pricing

**Dynamic Pricing** lets your store adjust prices automatically at checkout. You set the rule once, for example "10% off when a customer buys five or more" or "free shipping on orders over $75", and FluentCart applies it to every cart that qualifies. Customers don't need a coupon code, and you don't have to touch product prices.

Each rule can take money off (a **Discount**) or add money on (a **Fee**). It can target a single product line, the whole checkout, or the shipping cost, and you can limit it to certain carts, customers, or dates.

::: info
Dynamic Pricing is a **FluentCart Pro** feature. The module ships switched off, so you need to turn it on before the menu item appears.
:::

## Enabling Dynamic Pricing

Before you can create rules, activate the module in your store settings.

1.  Go to **FluentCart > Settings** in your WordPress dashboard.
2.  Select the **Features & Addon** tab.
3.  Find the **Dynamic Pricing** card and switch it to **Active**.
4.  Click **Save Settings**.

![Screenshot of the Dynamic Pricing module switched on in Features & Addon settings](/images/marketing-sales-tools/dynamic-pricing/dynamic-pricing-enable-module.webp)

Once the module is active, a **Dynamic Pricing** entry appears in the **More** menu of the FluentCart top navigation. See [Features & Addons](/guide/settings-configuration/features-addons) for the other modules on that screen.

## The Dynamic Pricing Screen

Open **More > Dynamic Pricing** to see all your rules in one table.

![Screenshot of the Dynamic Pricing screen listing three pricing rules](/images/marketing-sales-tools/dynamic-pricing/dynamic-pricing-rules-list.webp)

* **Rule:** The rule's display name and its internal name.
* **What it does:** A short summary, such as a "10% Discount" or a fee tag, with when the rule applies (for example, every purchase or first purchase only) and how many conditions it has.
* **Schedule:** The start and end dates, or "No end date" when the rule runs until you stop it.
* **Status:** A switch to turn the rule on or off without deleting it.
* **Actions:** **Edit** or **Delete** a rule.

Click **Add New Rule** at the top right to create one.

## Creating a Pricing Rule

Now let's build a rule from the beginning.

1.  Open **More > Dynamic Pricing** and click **Add New Rule**.
2.  Fill in the **Basic Information** card.
3.  Choose [where and when](#where-and-when-a-rule-applies) the rule applies, using the **Applies To** and **Apply discount to** cards.
4.  Click **Create Rule**.

![Screenshot of the Add New Rule page with the Basic Information, Applies To and Apply discount to cards](/images/marketing-sales-tools/dynamic-pricing/dynamic-pricing-add-rule.webp)

### Basic Information

* **Name:** An internal name only you see, for example `summer-sale-10`. *(Required)*
* **Display Name:** The friendly name customers see on the checkout summary, for example "Summer Sale". *(Required)*
* **Start from a template:** Pick a starting point. The choice fills in the fields below, and every field stays editable. *(Required)*
    * **Start from scratch:** An empty rule you build yourself.
    * **Bulk Purchase Discount:** A 10% line item discount when the cart quantity is at least 5.
    * **Free-shipping minimum:** A 100% shipping discount when the cart subtotal is at least a set amount.
* **Price Type:** **Discount** takes money off. **Fee** adds money on.
* **Apply as:** **Percentage** or **Fixed**.
* **Percent** or **Amount:** The size of the discount or fee. With **Percentage** you enter a number such as `10`. With **Fixed** you enter an amount in your store currency.

::: info
Check the **Apply discount to** card after picking a template. A template fills it in for you, but you can change it to match how you want the rule to behave. See [Where and When a Rule Applies](#where-and-when-a-rule-applies).
:::

## Where and When a Rule Applies

Every rule answers two separate questions, and each one has its own card on the form. It helps to keep them apart:

| Question | What it decides | Card on the Add New Rule page | Card on the edit page |
|---|---|---|---|
| **Where** does the price change? | The part of the cart the discount or fee is taken from | **Applies To** | **Applies To** |
| **When** does the rule run? | The kind of purchase that can trigger it | **Apply discount to** | **When to Apply** |

::: info
The second card has two names. On the **Add New Rule** page it is headed **Apply discount to**, with the hint "Choose which transactions this rule should run on." Once the rule exists, the edit page calls the same choice **When to Apply**. They are the same setting.
:::

You can combine any **Where** choice with any **When** choice, with the renewal limits described below. For example, a **Shipping** rule can run on **First purchase only**.

### Where: Applies To

This card sits at the top right of the form. It decides which amount the rule's percentage or fixed value is worked out against.

* **Line item:** The rule is calculated on each product line separately. A 10% line item rule takes 10% off every line's subtotal, so it covers every unit on the line.
* **Checkout:** The rule is calculated once on the whole cart subtotal. A discount is spread across the products so receipts and reports stay consistent.
* **Shipping:** The rule is calculated on the shipping cost. A 100% shipping discount makes shipping free.

### When: Apply Discount To (When to Apply)

This card sits below **Applies To** on the Add New Rule page. It limits the rule to one kind of purchase, so you choose exactly one option.

| Option | The rule runs on | Does not run on |
|---|---|---|
| **Every purchase** | Any checkout, including a checkout where a customer changes plans | Renewal invoices issued by your store |
| **First purchase only** | The checkout of a customer who has no completed paid order yet | A customer who has bought before, and renewal invoices |
| **Store managed renewals** | Renewal invoices that your store creates for a subscription | Normal checkouts |
| **Upgrades & downgrades** | The checkout a customer completes when moving a subscription to another plan | Normal checkouts and renewal invoices |

A few details for each option:

* **Every purchase** is the right choice for everyday promotions such as a sale or a bulk discount.
* **First purchase only** counts only paid orders. A signed-in customer is checked by their account. A guest is checked by the email typed at checkout, so the discount appears as soon as they enter an address nobody has used before. Until an email is entered, the rule does not apply.
* **Store managed renewals** is the only option that can change a renewal invoice, and only a **Discount** can be set for it. See [Rules for Renewals and Plan Changes](#rules-for-renewals-and-plan-changes).
* **Upgrades & downgrades** lets you reward or soften a plan change without touching the price of new sign-ups.

### Choosing the Right Combination

Use these examples when you aren't sure which options to pick.

| You want to | Price Type | Applies To | When to Apply |
|---|---|---|---|
| Take 10% off every item when a customer buys five or more | Discount | Line item | Every purchase |
| Offer 15% off a whole order for a limited time | Discount | Checkout | Every purchase, with a [schedule](#scheduling-a-rule) |
| Give free shipping above a set subtotal | Discount | Shipping | Every purchase |
| Welcome new customers with $5 off | Discount | Checkout | First purchase only |
| Add a handling fee to specific orders | Fee | Checkout | Every purchase |
| Give subscribers 10% off each renewal | Discount | Checkout or Line item | Store managed renewals |
| Make a plan change cheaper | Discount | Checkout | Upgrades & downgrades |

## Editing a Rule

Click **Edit** on any rule to open the editor. The top bar summarizes the rule in a sentence and holds the **Active** switch, and the **Save** bar appears as soon as you make a change.

![Screenshot of the edit page for a pricing rule with its Schedule card](/images/marketing-sales-tools/dynamic-pricing/dynamic-pricing-edit-rule.webp)

The editor has these cards:

* **Details:** The name, display name, price type, apply-as, and amount.
* **Display Conditions:** The rules that decide which carts qualify. See [Display Conditions](/guide/marketing-sales-tools/dynamic-pricing-conditions).
* **Applies To:** Line item, checkout, or shipping.
* **When to Apply:** Every purchase, first purchase only, store managed renewals, or upgrades and downgrades.
* **Schedule:** When the rule starts and stops.

### Scheduling a Rule

Use the **Schedule** card to run a promotion for a limited time.

* **Start Date & Time:** When the rule begins applying at checkout. Leave it empty to start **Immediately**.
* **Set end date & time:** Tick this box to reveal an **End Date & Time** field. Leave it unticked and the rule runs until you turn it off (**Never**).

The end date must be after the start date, and you need a start date whenever you set an end date.

::: info
A rule that is switched on but outside its schedule does nothing. It starts applying the moment its window opens and stops the moment it closes, with no extra step on your side.
:::

## What Customers See

When a customer's cart qualifies, the rule shows up automatically on the checkout page.

* **Discounts** appear as their own line in the checkout summary, labeled with the rule's **Display Name** and the amount taken off.
* **Fees** appear as an extra line using the same display name.
* **Shipping rules** leave the **Shipping** line at its full price and add a separate row for the discount, followed by what the shipping costs after the rules.

![Screenshot of the checkout order summary showing an Autumn Sale discount line for NotePlus](/images/marketing-sales-tools/dynamic-pricing/dynamic-pricing-checkout-discount.webp)

The discount is carried into the placed order, so the order page, the thank-you page, and the customer's email receipt all show the reduced price.

### How Rules Combine

* Every active rule that qualifies is applied. Rules do not replace each other, and they work alongside coupons.
* A discount never takes a price below zero. A 120% rule, or a fixed discount larger than the line, stops at the amount that is there.
* Several shipping discounts together never exceed the shipping cost.
* A rule that would adjust by zero is skipped, so you never see a "0.00 off" line.

## Rules for Renewals and Plan Changes

Subscription rules behave a little differently, because a renewal is an amount your customer already agreed to pay.

* A renewal invoice created by your store is only changed by rules set to **Store managed renewals**. Every other rule is ignored for it.
* A **Store managed renewals** rule can only be a **Discount** and cannot apply to **Shipping**. The editor disables those choices when this option is selected.
* On a renewal there is no checkout cart, so conditions that read the cart (coupon, user role, product, payment method, and checkout fields) do not match. Customer conditions use the subscription's customer.
* **Upgrades & downgrades** rules apply to the checkout a customer completes when switching plans.

Learn how subscriptions work in [Managing Subscriptions](/guide/product-types-creation/managing-subscriptions).

## Order History

Every placed order remembers which rules priced it, even if you rename or delete a rule later. The record keeps the rule name as it read at the time, so your order history stays accurate. If a payment is retried and the cart no longer qualifies, the old record is replaced with the new result.

## Permissions

Access to Dynamic Pricing is controlled by two permissions on the **Roles & Permissions** screen:

* **View Dynamic Pricing:** See the rules list and open a rule. Managers and workers have this by default.
* **Manage Dynamic Pricing:** Create, edit, switch, and delete rules. Managers have this by default.

Learn more in [Roles & Permissions](/guide/settings-configuration/roles-permissions/).

## Common Rule Recipes

Here are a few starting points you can build with the tools above.

1. **Bulk discount:** **Line item**, **Discount**, **Percentage** 10, condition **Cart > Quantity is at least 5**.
2. **Free shipping over $75:** **Shipping**, **Discount**, **Percentage** 100, condition **Cart > Subtotal is at least 75**.
3. **Welcome offer:** **Checkout**, **Discount**, **Percentage** 15, **First purchase only**.
4. **Wholesale pricing:** **Checkout**, **Discount**, **Percentage** 20, condition **User > Role is Wholesale**.
5. **Card payment discount:** **Checkout**, **Discount**, **Fixed** 2, condition **Payment > Payment Method is Stripe**.
6. **Rush handling fee:** **Checkout**, **Fee**, **Fixed** 5, condition **Product > SKU is RUSH-01**.
7. **Weekend sale:** Any rule above with a **Schedule** from Friday evening to Monday morning.

Your pricing rule is now live and applies to every qualifying cart automatically.
