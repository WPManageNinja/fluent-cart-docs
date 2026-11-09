# Setting Up Shipping Methods

Shipping methods are the different delivery options you offer to customers within a specific [**shipping zone**](/guide/shipping/configuring-shipping-zones). FluentCart allows you to create flexible shipping options, from flat rates to free shipping, ensuring you can meet your customers' needs.

This guide will show you how to add and configure shipping methods for your shipping zones.

### How to Add a Shipping Method

Before you can add a method, you must have already created a shipping zone.

1.  From your WordPress dashboard, navigate to **FluentCart** > **Settings** > **Shipping**. The **Carriers** page opens.
2.  Click **Manage** next to **Manual / Other** to see your **Shipping Zones** list.
3.  Find the shipping zone you want to add a method to and click on its name to edit it.
4.  Inside the zone's settings, scroll down to the **Shipping Methods** section and click the **Add Shipping Method** button. You can also manage your existing shipping methods from this screen. To update a method's settings, click the Edit button located on the same row as its title.
5.  A panel slides in from the right where you configure the details of your new shipping method.

![Screenshot of Shipping Method](/images/shipping/setting-up-shipping-method/shipping-method-1.webp)

### Configuring the Shipping Method

This is where you define how your shipping option will work.

* **Enable Shipping Method:** This toggle at the top of the panel acts as the master switch for this specific method. If it's disabled, the method will be saved but won't appear as an option for customers at checkout.
* **Method Title:** Enter a clear and user-friendly name for this shipping option (e.g., "Standard Shipping," "Express Delivery," "Local Pickup"). This is the name your customers will see at checkout.
* **States** *(optional, single-country zones only)*: Limit this method to specific states or provinces of the zone's country. The label follows the country's own term, for example **Provinces** or **Counties**. Leave it empty to apply the method to the whole country (the methods list then shows **Applied To All States**). The field doesn't appear on zones that cover several countries or the whole world.
* **Method Type:** Choose the type of shipping method you want to offer:
    * **Flat Rate:** This is a fixed-cost shipping option. Use this to set a single rate for delivery.
    * **Free Shipping:** Charges nothing. When you choose it, the **Amount**, **Configure Rate** and **Class Aggregation** fields are hidden, and shipping-class costs are not added.
    * **Local Pickup:** A pickup option with the same pricing fields as Flat Rate. FluentCart does not zero the cost for you: set **Amount** to `0` if pickup should be free, or enter a handling fee.
* **Amount:** The cost for **Flat Rate** and **Local Pickup** methods (e.g., enter **10** for $10.00). The field is hidden when **Configure Rate** is **Per Weight**, because the cost then comes from your weight tiers.

* **Configure Rate**

This setting determines how the "Flat Rate" cost is calculated if a customer has multiple items in their cart.

* **Per Order:** Applies a single, fixed charge for the entire order, no matter how many items are purchased. This is the most common setup.
* **Per Item:** The amount is multiplied by the total quantity of physical items in the cart. For example, if the cost is $2 and a customer buys 3 items, the total shipping cost will be $6.
* **Percentage:** The amount is a percentage of the physical items' subtotal after discounts. Shipping, tax and digital items are not included. For example, 10% of a $50 subtotal is $5.
* **Per Weight:** Charges shipping based on the total weight of the cart, using a set of tiered rates you define (see **Weight Tiers** below). Ideal for carriers that price by weight brackets — light envelopes at one rate, medium parcels at another, heavy freight higher still.

#### Weight Tiers (Per-Weight Rates)

When **Configure Rate** is set to **Per Weight**, a **Weight Tiers** editor appears in place of the fixed Amount field. Each tier defines a weight range and the shipping cost that applies when the cart's total weight falls inside that range.

Each row has three fields. The weight columns use your store's weight unit:

* **Min Weight (kg):** The lower bound, inclusive. You can edit it on every tier, including the first (it does not have to start at `0`).
* **Max Weight (kg):** The upper bound, inclusive. It must be greater than Min. Set it to `0` on the last tier to mean "and above" (unlimited).
* **Cost:** The shipping amount when the cart weight falls in this tier.

Click **Add Tier** to append a row. The new row's Min defaults to the previous Max + 0.01, but every field stays editable. **Add Tier** is disabled while the last tier is unlimited (Max `0`), so give that tier a Max first. FluentCart sorts tiers by Min when you edit them.

**Flexible, non-contiguous ranges**

Tiers do not have to be continuous. You can leave gaps between ranges — for example, `0–10 kg`, then `15–20 kg` — when your carrier simply does not offer rates in the gap, or when weights in that gap should fall back to a different shipping method.

If the cart weight falls in a gap, above your last tier, or the method has no tiers at all, the method is hidden at checkout instead of being offered for free. If a customer had already picked it before the cart changed, placing the order fails with "The selected shipping method is not available." so they can choose another method. To keep the method available for every cart, make the last tier unlimited (Max `0`).

**How the cart weight is counted**

The cart weight is the weight of the products plus the empty weight of each box they are packed in. FluentCart packs the items into their assigned [packages](/guide/shipping/packages), counting each box's own weight once per box, not once per unit. For example, three 0.9 kg items that fit in one 0.25 kg box weigh 2.95 kg. When items are heavier than a box's maximum weight, they are split across more boxes, and each extra box adds its own weight. Items with no package assigned use your default package.

**Validation**

The editor validates tiers inline before you can save:

* A tier whose **Max** is less than or equal to its **Min** shows an error and the **Add Tier** button is disabled until fixed.
* A tier whose range **overlaps** an earlier tier (e.g., `0–10` followed by `8–15`) shows an error — overlapping ranges would create ambiguity when a cart weight fits both tiers.
* If every tier has a **Cost** of 0, saving shows "Weight tiers must have a cost greater than zero". Per Weight methods also need at least one tier.

Correct the highlighted tier and the error clears immediately, re-enabling the **Add Tier** button and the **Save** action.

#### How It Looks at Checkout

Once saved, the shipping method appears under **Shipping Options** on the checkout page with the method title and its calculated cost. The Order summary on the right reflects the same amount under **Shipping**, so what the customer picks is exactly what they pay.

![Screenshot of the checkout page showing the shipping method under Shipping Options with its price, and the Order summary reflecting the Shipping line](/images/shipping/setting-up-shipping-method/shipping-method-checkout.webp)

* **Class Aggregation**

This advanced setting is for when a customer's cart contains products from different shipping classes (e.g., a small item and a bulky, oversized item). It tells FluentCart how to combine the shipping costs.

* **Combined Cost:** The shipping costs for each distinct shipping class in the cart are calculated and then added together to get the final total.
* **Highest Cost:** Only the single highest shipping cost among all the shipping classes present in the cart is applied.

Class Aggregation is hidden for Free Shipping methods.

::: info
The Configure Rate and Class Aggregation settings work together to give you precise control over your shipping fees. For a more detailed guide with advanced examples of how these calculations work, especially when a cart contains multiple items from different shipping classes, please see our documentation on [Advanced Shipping Calculations](/guide/shipping/advanced-shipping-calculations).
:::

* **Description:** 

You can add a short description for the shipping method. FluentCart shows it in small text under the method name in **Shipping Options** at checkout (e.g., "Delivered in 3-5 business days").

 ![Screenshot of Shipping Method](/images/shipping/setting-up-shipping-method/shipping-method-2.webp)

Once you have configured all the details, click **Save** (or **Update** when editing an existing method). Your new shipping method is now active and will be offered to customers in the selected shipping zone.

### Where the Method Name Appears After Checkout

The name you give a shipping method is not just a checkout label. Once an order is placed, the method the customer picked travels with the order and appears in three places:

* **The order detail page** in your admin, so your team knows how the order should be packed and sent. See [Order Details Overview](/guide/store-management/orders-management/order-details-overview).
* **The customer's order view** in their account area, so they can see what they paid for.
* **Order emails**, listed alongside the shipping address.

::: info
This is worth keeping in mind when you name a method. A customer-facing name like "Express (2-3 days)" reads far better on a receipt than an internal one like "Zone 2 tier B".
:::