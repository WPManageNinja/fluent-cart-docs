# Photo Reviews & Helpful Votes

FluentCart Pro adds two upgrades to your reviews. **Photo Reviews** let customers show your product in real life instead of only describing it, and **Helpful Votes** let shoppers push the most useful reviews to the top of the list. Both live at the bottom of your review settings, under the general options.

::: info
These two features require **FluentCart Pro**. With the free plugin their toggles are visible but locked, and an **Upgrade to Pro** link appears beneath them.
:::

![Screenshot of the Photo Reviews and Helpful Votes settings in FluentCart review settings](/images/store-management/product-reviews/review-photo-helpful-settings.webp)

FluentCart Pro also adds a **Verified** filter chip to your storefront review list once its review features are active, so shoppers can narrow it down to purchase-verified feedback.

## Photo Reviews

A photo from a real customer is often the most persuasive thing on a product page. When photo reviews are on, the review form gains a **Photos** area where customers can attach images alongside their written feedback.

### Enabling Photo Reviews

To turn photo reviews on:

1.  Navigate to **FluentCart > Settings** in your WordPress dashboard.
2.  Select **Product Reviews** from the left-hand sidebar.
3.  Scroll to the **Photo Reviews** row.
4.  Turn on the **Photo Reviews** toggle.
5.  Set your upload limits, then click **Save**.

### Photo Review Options

These options appear once **Photo Reviews** is enabled:

* **Max Photos Per Review:** How many images a single review can carry. You can set anywhere from 1 to 10, and the default is 5.
* **Max File Size (MB):** The size ceiling for each uploaded image, from 0.1 MB up to 10 MB. The default is 1 MB.
* **Auto-approve Photo Reviews:** Publishes reviews with photos immediately. When off, photo reviews always wait for moderation. Off by default.
* **Allowed File Types:** The image formats customers may upload. You can allow **JPEG**, **PNG**, **GIF**, and **WebP**, and all four are enabled by default.

::: info
**Auto-approve Photo Reviews** is a separate decision from **Auto-approve Reviews**. This setting can only hold photo reviews back, never publish them on its own. With **Auto-approve Reviews** on and this one off, plain text reviews go live instantly while every review with photos waits for you, which is the safer setup for most stores. If **Auto-approve Reviews** is off, photo reviews wait as well, whatever this setting says.
:::

### How Customers Add Photos

Photos sit at the bottom of the review form, after the star rating and the written feedback. Customers drop their images in, watch each one upload, and can remove any they change their mind about. Nobody is forced to add one, and the form tells them plainly that skipping is fine. If you set the form to the [Steps layout](/guide/store-management/product-reviews/displaying-reviews#how-customers-write-a-review), photos become the last step instead.

Anyone who is allowed to leave a review can attach photos. Photo uploads follow exactly the same **Who can leave reviews?** rule you set in your [review settings](/guide/store-management/product-reviews/review-settings), so a store limited to verified buyers stays limited to verified buyers here too.

<!-- TODO screenshot: Photos area in the review drawer
     How to capture: On the front end with photo reviews enabled, open a product and click "Write a Review". Attach two images so their previews show. Capture the drawer with the photo previews visible. Needs FluentCart Pro's review assets built on cart.local.
     Save as: guide/public/images/store-management/product-reviews/photo-review-form.webp
     Reference as: /images/store-management/product-reviews/photo-review-form.webp -->

Once reviews with photos start coming in, shoppers get a **With Photos** filter chip above the review list, and clicking any image opens it full size with arrows to step through the rest. You get the same gallery in your admin: open a review with the **View** action and its images appear in a **Review Media** section.

When a review is deleted, its photos are removed with it, so your media library does not fill up with leftovers. Images that a customer uploaded but never submitted are cleaned up automatically the next day.

## Helpful Votes

Helpful votes let your customers do some of the curating for you. Shoppers mark a review as **Helpful** or **Not Helpful**, and the review list gains a **Most Helpful** sorting option that surfaces the best feedback first.

### Enabling Helpful Votes

To turn voting on:

1.  Navigate to **FluentCart > Settings** in your WordPress dashboard.
2.  Select **Product Reviews** from the left-hand sidebar.
3.  Scroll to the **Helpful Votes** row.
4.  Make sure the **Helpful Votes** toggle is on. It is on by default once FluentCart Pro is active.
5.  Click **Save**.

![Screenshot of the Helpful and Not Helpful buttons under a review on the product page](/images/store-management/product-reviews/helpful-votes.webp)

### How Voting Works

Voting is kept deliberately simple, and a few rules keep it honest:

* **Logged-in customers only:** Guests do not get vote buttons at all, because there is no reliable way to count a guest's vote only once. Asking shoppers to log in keeps the counts meaningful.
* **One vote per review:** Each customer gets a single vote on any given review.
* **Votes can be changed or removed:** Clicking the same button again clears the vote, and clicking the opposite one switches it.
* **No voting on your own review:** Customers cannot vote on reviews they wrote themselves.

### Seeing How Shoppers Reacted

You can check the votes on any review from your own admin. Open a review from **FluentCart > Products > Reviews** using the **View** action, and a **Helpful Votes** card sits beside the review showing how shoppers reacted to it.

![Screenshot of the Helpful Votes card in the FluentCart admin showing helpful and not helpful counts](/images/store-management/product-reviews/helpful-votes-admin.webp)

The green row counts the shoppers who found the review helpful, and the red row counts those who did not. It is a useful signal while you moderate. A review collecting steady not-helpful votes is worth a second look, and a review your customers keep marking helpful is one you may want to reply to.

With photos and votes in place, your product pages carry the kind of proof that helps shoppers commit, and the most useful reviews rise to the top on their own.
