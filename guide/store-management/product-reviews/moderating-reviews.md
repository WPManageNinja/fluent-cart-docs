# Moderating Reviews

The **Reviews** screen is where every piece of customer feedback lands. From this one list you can read new reviews, approve the good ones, and clear out spam. Everything works on single reviews or on a whole batch at once, so a busy store stays manageable.

## Accessing the Reviews Screen

To open your review queue:

1.  Log in to your **WordPress Dashboard**.
2.  Navigate to **FluentCart** in the side menu.
3.  Open the **Products** menu in the top navigation bar.
4.  Select **Reviews**.

![Screenshot of the Reviews option in the FluentCart Products menu](/images/store-management/product-reviews/reviews-menu.webp)

::: info
The **Reviews** option only appears when the feature is switched on and your user role has the **Manage Reviews** permission. If you cannot see it, check your [review settings](/guide/store-management/product-reviews/review-settings) first, then your role permissions.
:::

## Reading the Reviews List

Each row gives you everything you need to judge a review without opening it:

* **ID:** The review's reference number, with the name of the product being reviewed beneath it.
* **Reviewer:** The customer's name and email address.
* **Rating:** The star rating they gave.
* **Review:** The review's title, with the opening of the text beneath it.
* **Status:** Whether the review is **Approved**, **Pending**, or in another state.
* **Date:** When the review was submitted.
* **Actions:** The menu for acting on that single review.

At the bottom of the list you can change how many reviews load per page and page through the results.

## Filtering by Status

The tabs across the top of the list let you jump straight to the reviews that need you:

* **All:** Every review, whatever its state.
* **Approved:** Live on the product page and counting towards the product's average rating.
* **Pending:** Waiting for your decision. Not visible to shoppers, and not affecting the rating.
* **Spam:** Flagged as junk. Hidden from your storefront but not deleted, so you can restore it if you flagged it by mistake.

**Trash** sits under the **More views** dropdown next to the tabs, since it is the one you need least often.

![Screenshot of the Trash view under the More views dropdown on the Reviews screen](/images/store-management/product-reviews/reviews-more-views-trash.webp)

## Finding a Specific Review

When your store starts collecting real volume, search and filters do the heavy lifting.

### Searching

Use the search icon at the top right of the list to match against the reviewer's name, their email address, the review title, the review text, or the product name. This is the quickest way to find a review when you already know something about it.

### Using Advanced Filters

For narrower questions, such as "show me every one-star review that nobody has replied to yet", switch on **Advanced Filter** at the top right of the list. You can then filter by:

* **Star Rating:** Narrow the list to a specific rating, or use an operator to catch a range such as everything below 3 stars.
* **Verified Purchase:** Show only reviews from customers who actually bought the product, or only those who did not.
* **Has Admin Reply:** Separate the reviews you have already answered from the ones still waiting.
* **Review Date:** Limit the list to a date or a date range.
* **Reviewer Name:** Match reviews by the name the customer submitted.
* **Reviewer Email:** Match reviews by the customer's email address.

You can also sort the list by review ID, submission date, reviewer name, or star rating. Sorting by rating is handy when you want to work through your lowest-rated feedback first.

## Adding a Review Yourself

You do not have to wait for a customer to write one. If a shopper sent you feedback by email or on social media, you can enter it as a review yourself.

1.  Open the **Reviews** screen.
2.  Click the **Add Review** button at the top right.

![Screenshot of the Add Review button at the top right of the Reviews screen](/images/store-management/product-reviews/review-add-button.webp)

3.  Fill in the form and click **Add Review**.

![Screenshot of the Add Review form in the FluentCart admin](/images/store-management/product-reviews/review-add-modal.webp)

The form asks for the following:

* **Select Product:** The product being reviewed *(Required)*. Start typing to search.
* **Variation:** Appears once you pick a product that has variations. Leave it on the whole product, or choose the specific variation the reviewer bought.
* **How would you rate this product?:** The star rating. It is required only while **Star Ratings Required** is on in your review settings, and the field is hidden when star ratings are disabled.
* **Review title:** A short summary of the experience *(Optional)*.
* **Your review:** The review text, up to 5,000 characters *(Required)*.
* **Reviewer name:** The name shown on the review *(Required)*.
* **Reviewer email:** The reviewer's email address *(Optional)*.
* **Status:** Whether the review goes live right away as **Approved**, or waits as **Pending**.
* **Verified purchase:** Marks the review with the verified badge.
* **Attachments:** Photos to show with the review. This row appears only while **Photo Reviews** is switched on in your [review settings](/guide/store-management/product-reviews/review-settings#photo-reviews-and-helpful-votes), it needs FluentCart Pro, and the form shows the photo limits you set there.

## Acting on a Single Review

Click the three-dot **Actions** menu at the end of any row to deal with that review on the spot.

![Screenshot of the review row actions menu showing View, Pending, Spam, Trash, and Delete](/images/store-management/product-reviews/review-row-actions.webp)

The menu offers:

* **View:** Open the full review, where you can read all of it and reply to the customer.
* **Approve:** Publish the review on the product page.
* **Pending:** Send the review back to your **Pending** queue, hidden from the storefront until you decide again.
* **Spam:** Flag the review as junk and hide it from your storefront.
* **Trash:** Discard the review without deleting it outright.
* **Delete:** Remove the review permanently.

The menu only shows the states a review is not already in, so an approved review offers **Pending**, **Spam** and **Trash** but not **Approve**. **View** and **Delete** are always there.

## Opening a Full Review

Choosing **View** takes you to the review's own page, where you can read all of it and answer the customer.

![Screenshot of a single review in the FluentCart admin showing the review information and helpful votes](/images/store-management/product-reviews/single-review-view.webp)

The breadcrumb at the top tells you which product the review belongs to and who wrote it, with the current status beside the name. The **More Actions** menu at the top right holds every status change, **Approve**, **Mark as Spam**, **Mark as Pending**, and **Move to Trash**, showing only the ones that apply, plus **Delete Permanently**.

The **Review Information** card holds the review itself: the star rating and its numeric score, the reviewer's name, when they posted, the review title, and their feedback. Small tags next to the name tell you who you are dealing with, marking the entry as a **Customer review**, flagging a **Guest** who reviewed without an account, or confirming a **Verified Purchase**.

The **About the Reviews** card beside it gathers the rest of the context and the quick controls:

* **Product:** The product being reviewed, with a link that opens it on your storefront.
* **Customer:** The reviewer, with a link to their customer profile. Guests show as **Guest customer** with a **No account** tag.
* **Verified purchase:** A switch that shows or hides the verified badge on this one review.
* **Actions:** One-click buttons for the status changes, such as **Spam**, **Trash** and **Pending**, so you can decide without leaving the page.

If the review came with photos, a **Review Media** section appears below the text. Click any image to open it full size and step through the rest with **Previous** and **Next**.

If you have **Helpful Votes** enabled, a card beside the review shows how shoppers reacted to it, with the number who found it helpful and the number who did not. See [Photo Reviews & Helpful Votes](/guide/store-management/product-reviews/photo-reviews-helpful-votes) for how voting works.

## Replying to Customers

A short reply to a critical review often does more for your store than the review itself costs you. Your replies appear publicly on the product page, directly under the review they answer, signed as the store owner.

To reply, type your response into the message box at the bottom of the **Review Information** card and click **Reply**.

You can also reply to several reviews at once by selecting them in the list and choosing **Reply** from the bulk actions, which is useful when you want to send the same thank-you note to a group of happy customers. Each review holds one store reply. To reword or withdraw it, delete the existing reply first, then write a new one.

::: info
By default customers cannot reply to your answer, so each review stays a single review with one store reply from you.
:::

## Using Bulk Actions

When a batch of reviews needs the same treatment, handle them together instead of one by one.

1.  Select the reviews you want to act on using the checkboxes in the list.
2.  Choose an action from the bulk actions dropdown.
3.  Click **Confirm** to run it.

A bar with the bulk actions dropdown appears above the list as soon as you tick a review, and it counts how many items you have selected.

![Screenshot of the bulk actions dropdown above the reviews list](/images/store-management/product-reviews/review-bulk-actions.webp)

You get six bulk actions: **Approve**, **Pending**, **Mark as Spam**, **Move to Trash**, **Delete Permanently**, and **Reply**.

::: info
Bulk actions run on up to 50 reviews at a time. If you select more than that, work through the list in batches. Product ratings are recalculated once per product after the batch finishes, so even a large clean-up stays fast.
:::

## Ratings Update Automatically

You never need to refresh a product's rating by hand. Whenever a review is approved, unapproved, marked as spam, trashed, or deleted, FluentCart recalculates that product's average rating, total review count, and star breakdown for you. This holds true even if the review's status is changed from the standard WordPress comments screen or by another plugin.

With your queue under control, the next step is deciding where those approved reviews show up. See [Displaying Reviews on Your Store](/guide/store-management/product-reviews/displaying-reviews).
