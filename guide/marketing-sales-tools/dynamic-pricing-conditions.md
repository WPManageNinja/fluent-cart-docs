# Dynamic Pricing Display Conditions

**Display Conditions** decide which carts a [Dynamic Pricing](/guide/marketing-sales-tools/dynamic-pricing) rule applies to. Without conditions, a rule applies to every cart. With them, you can target big orders, specific products, wholesale customers, a particular payment method, or shoppers from a certain country.

FluentCart evaluates a rule's conditions each time checkout calculates the cart total.

## How Conditions Work

A rule's conditions are arranged in **groups** made of **rows**.

* **Rows inside a group use AND.** Every row in the group must be true.
* **Groups use OR.** The rule applies when *any one* group is fully true.

For example, two groups can express "quantity is at least 5, or the customer's role is Wholesale". If you add no conditions at all, the rule applies whenever its schedule and **When to Apply** choice allow it.

A condition always asks about the **whole cart**, even on a **Line item** rule. When the cart qualifies, the rule is then applied to every product line.

::: info
A condition that reads data the checkout does not have does not match, whatever its operator. For example, a coupon condition never matches a renewal invoice, because a renewal has no cart. A guest checkout is different: a guest has no role and no customer record, so **Role is not Wholesale** and **Customer is not** conditions do match a guest.
:::

## Adding Conditions to a Rule

1.  Open the rule from **More > Dynamic Pricing** and scroll to the **Display Conditions** card.
2.  Click **Add Conditions** to start the first group.
3.  Click the **Add** button next to **Add new properties** and pick an attribute from the menu. Attributes are grouped, so choose a group first and then the attribute inside it.
4.  Choose an **operator**, then enter or select a **value**.
5.  Repeat steps 3 and 4 to add more rows (AND) to the same group.
6.  Click the **+ or** button below the groups to start another group (OR).
7.  Click **Save** in the bar that appears once you change something.

![Screenshot of the Display Conditions card with two condition groups separated by OR](/images/marketing-sales-tools/dynamic-pricing/dynamic-pricing-display-conditions.webp)

To remove a row, use the remove icon at the end of it. A group with no rows can be removed with the remove icon beside **Add new properties**. Incomplete rows must be completed or removed before you can save.

## Available Attributes

### Cart

* **Quantity:** The total number of items in the cart, added up across all lines. Uses number operators.
* **Subtotal:** The subtotal of the items in the cart. Enter it as an amount in your store currency.

### Coupon

* **Coupon Name:** The code a customer applied, matched as text. If several codes are applied, a positive operator matches when any code matches, and a negative one only when every code does.
* **Coupon:** Pick one or more coupons from your store.

### Customer

* **Purchase Count:** How many paid orders the customer already has. Guests count as zero.
* **Customer:** Pick one or more specific customers. **is** matches only while that customer is signed in, and **is not** matches everyone else, guests included.

### Product

* **Product Name:** The name of a product in the cart, matched as text.
* **SKU:** The SKU of a product variation in the cart, matched as text.
* **Product:** Pick one or more products. **is** matches when any selected product is in the cart, and **is not** matches when none is.

### User

* **Role:** The WordPress role of the signed-in shopper, such as Customer or Wholesale. Guests have no role.

### Payment

* **Payment Method:** The payment method selected at checkout, such as Stripe or PayPal. When the shopper hasn't chosen one yet, it is the first method listed on the checkout page.

### Checkout Fields

Every field from your [checkout field settings](/guide/settings-configuration/checkout-fields) is offered, grouped the same way the settings screen groups them: **Basic Info**, **Business Details**, **Billing Address**, and **Shipping Address**. Use these to price by email, country, company name, and so on.

* Checkout fields are matched as text, so they use the text operators. Country fields hold the two-letter country code, for example `BD`, and a rule on the country name does not match.
* **Shipping Address** fields read the shipping address only when the shopper chooses to ship to a different address. Otherwise they read the billing address.
* **Business Details** fields have a value only for a business purchase, or when your store is in B2B-only mode.
* The rule reads the value the shopper typed into the form. A field the shopper hasn't filled in yet is unknown, so the row doesn't match until they do.
* An email condition uses the email the order is placed under. For a signed-in shopper that is their account email, whatever is typed in the field.
* Checkbox fields and store switches such as agreeing to terms are not offered.

## Operators

The operators you can pick depend on the type of attribute.

| Attribute type | Operators |
|---|---|
| Number and amount (Quantity, Subtotal, Purchase Count) | is, is not, is more than, is less than, is at least, is at most |
| Text (Coupon Name, Product Name, SKU, checkout fields) | is, is not, contains, not contains, starts with, ends with |
| Pick from a list (Coupon, Customer, Product, Role, Payment Method) | is, is not |

List attributes accept up to 100 values per row.

## Example Setups

1. **Big order or wholesale customer:** Group 1 has **Cart > Quantity is at least 10**. Group 2 has **User > Role is Wholesale**. The rule applies when either group matches.
2. **Returning customers over $100:** One group with **Customer > Purchase Count is at least 1** and **Cart > Subtotal is at least 100**. Both rows must be true.
3. **Only for a campaign coupon:** One group with **Coupon > Coupon Name is SPRING**.
4. **Domestic shipping promo:** A **Shipping** rule with **Checkout Fields > Shipping Address > Country is US** and **Cart > Subtotal is at least 50**.

Your rule now applies only to the carts that match its conditions.
