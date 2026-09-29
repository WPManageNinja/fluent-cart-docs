# Review Settings

The **Product Reviews** settings page is where you decide how reviews behave in your store. You choose who is allowed to leave a review, whether new reviews go live straight away or wait for your approval, and how they are presented to shoppers. All of it sits on a single card, and every option takes effect as soon as you save.

## Accessing Review Settings

To open the review settings:

1.  Log in to your **WordPress Dashboard**.
2.  Navigate to **FluentCart > Settings** in the side menu.
3.  Select **Product Reviews** from the left-hand sidebar.

![Screenshot of the Product Reviews settings page in FluentCart](/images/store-management/product-reviews/review-settings.webp)

## Enable Product Reviews

The switch at the top of the card is the master control for the whole feature. The line beneath it tells you what your store is doing right now, either **Customers can leave ratings and reviews on products** or **Customers cannot leave reviews right now**.

![Screenshot of the Enable Product Reviews switch at the top of the review settings](/images/store-management/product-reviews/enable-product-reviews.webp)

* **Enable Product Reviews:** Allow customers to leave ratings and reviews on products. When this is off, the **Reviews** screen is hidden and no review sections appear on your product pages. Existing reviews are kept and return as soon as you switch it back on.

The rest of the settings only appear once this switch is on. Individual products can still opt out while the feature is on. See [turning reviews off for a single product](/guide/store-management/product-reviews/#turning-reviews-off-for-a-single-product).

## General Settings

These options control who can review your products and what happens to a review after it is submitted.

### Who Can Leave Reviews?

This setting decides which shoppers see the review form. Pick the option that matches how much you trust your audience:

![Screenshot of the Who can leave reviews options in FluentCart review settings](/images/store-management/product-reviews/review-permission-modes.webp)

* **Verified buyers only:** Only customers who purchased the product can review it. This is the default, and it gives you the most trustworthy feedback.
* **Logged-in users:** Any logged-in user can leave a review, whether they bought the product or not.
* **Anyone:** Guests can also leave reviews, without creating an account. The review form asks guests for their name and email address, and the email stays private.

::: info
Whichever option you pick, each customer can only leave one review per product. If you reject a review by marking it as spam or moving it to trash, that customer is free to submit a fresh one.
:::

### Display and Approval Options

The rest of the general settings shape how reviews look and how quickly they appear:

* **Show 'Verified Owner' Badge:** Displays a **Verified Purchase** badge on reviews from customers who bought the product. Shoppers can tell genuine purchase feedback apart at a glance. On by default.
* **Enable Star Ratings:** Allows customers to rate products with stars, and shows those ratings on your product pages. Turning it off also removes the rating from the review form, leaving a text-only review. On by default.
* **Star Ratings Required:** Makes the star rating mandatory. When it is off, customers can submit text-only reviews without a star rating. This option appears indented under **Enable Star Ratings**, only while that switch is on, and it is on by default.
* **Auto-approve Reviews:** Publishes new reviews immediately, without moderation. Off by default, which means every review waits in your **Pending** queue until you approve it.
* **Reviews Per Page:** How many reviews a product page lists before it starts paging. The default is 10, and you can set anything from 1 to 50.

::: info
Leaving **Auto-approve Reviews** off is the safer choice for most stores. It costs you a moment of moderation per review, but nothing reaches your product pages without your approval.
:::

## Photo Reviews and Helpful Votes

The two rows at the bottom of the card, **Photo Reviews** and **Helpful Votes**, need FluentCart Pro. With the free plugin they stay visible but locked, and a note beneath each one reads **This feature is only available in FluentCart Pro**, followed by an **Upgrade to Pro** link.

![Screenshot of the Photo Reviews and Helpful Votes settings in FluentCart review settings](/images/store-management/product-reviews/review-photo-helpful-settings.webp)

* **Photo Reviews:** Lets customers attach photos to their reviews. Turning it on reveals its own limits underneath.
* **Helpful Votes:** Lets visitors mark reviews as helpful.

Both options come with their own limits and behavior. For the full setup, see [Photo Reviews & Helpful Votes](/guide/store-management/product-reviews/photo-reviews-helpful-votes).

## Getting Notified About Reviews

FluentCart sends three review emails, and all of them are switched on out of the box. You can find them here:

1.  Navigate to **FluentCart > Settings** in your WordPress dashboard.
2.  Select **Email Configuration** from the left-hand sidebar.
3.  Click **Notifications**.
4.  Scroll to the **Review Actions** group.

![Screenshot of the Review Actions notification group under Email Configuration Notifications](/images/store-management/product-reviews/review-notification.webp)

The group holds three notifications:

* **Send mail to admin when a new review is submitted:** Tells you a review is waiting, so nothing sits in your queue unnoticed. It goes to **Admin**.
* **Send mail to the reviewer when their review is approved:** Lets the customer know their review is now live on the product page. It goes to the **Customer**.
* **Send mail to the reviewer when the store replies to their review:** Lets the customer know you answered them. It goes to the **Customer**.

Use each **Enabled** toggle to switch a notification off, or click the pencil icon to rewrite its subject and body. The [email notification](/guide/settings-configuration/email-configuration/configuring-email-notification) editor works the same way here as it does for order and subscription emails.

## Saving Your Changes

After adjusting any option:

1.  Check that your selections match how you want reviews to work.
2.  Click the **Save** button at the top right of the page, or press **Cmd+S** (**Ctrl+S** on Windows).

![Screenshot of the Save button in the Product Reviews settings header](/images/store-management/product-reviews/review-settings-save.webp)

Your store now follows your own review policy, and you can move on to [moderating the reviews](/guide/store-management/product-reviews/moderating-reviews) as they come in.
