# Cloudflare R2

Cloudflare R2 is Cloudflare's object storage service. It speaks the same S3 API that Amazon S3 does, but delivers objects through Cloudflare's global network with **zero egress fees** — meaning you do not pay every time a customer downloads a file. For media-heavy digital products, large archives, or stores with a global customer base, R2 is often the most cost-effective choice.

FluentCart ships with a **native** R2 driver. This means R2 is a first-class storage provider with its own dedicated settings, bucket management, and UI — not an S3-compatible afterthought.

## Accessing Cloudflare R2 Settings

From your WordPress dashboard:

1. Go to **FluentCart → Storage**.
2. Click **Cloudflare R2** in the sub-menu.

R2 setup has two steps:

1. **Credential** — how FluentCart will authenticate to Cloudflare.
2. **Bucket** — which R2 bucket will hold your files.

> **Note:** R2's security model is handled at the token and bucket level on Cloudflare's side, so there is no separate in-app Security step like S3 has.

---

## Prerequisites

Before you connect R2 to FluentCart, you need:

* A **Cloudflare account** with **R2 enabled** (R2 must be opted into from your Cloudflare dashboard — it is free to enable).
* Your **Cloudflare Account ID**.
* An **R2 API token** with **Object Read & Write** permissions, which gives you an **Access Key ID** and **Secret Access Key**.

### Getting Credentials From Cloudflare

FluentCart needs three values from your Cloudflare account to talk to R2:

* **Account ID** — identifies your Cloudflare account.
* **Access Key ID** — the public half of an R2 API token.
* **Secret Access Key** — the private half of that API token (shown only once).

The walkthrough below covers the full journey end-to-end.

#### 1. Open R2 Object Storage

1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com/).
2. From the left sidebar, expand **Storage & databases**, then click **R2 Object Storage**.
3. If this is your first time using R2, Cloudflare will ask you to accept the R2 terms and enable the service. Do that before continuing.

You should now see the **R2 Object Storage** overview, listing any existing buckets and usage stats.

#### 2. Copy Your Account ID

Look at the right-hand side of the R2 overview page, under **Account Details**. Your **Account ID** is displayed as a long hex string — click the copy icon next to it to grab it.

![Cloudflare dashboard — Account ID location in R2 overview](/images/storage/r2/cloudflare-r2-id.webp)

Paste it somewhere safe for a moment; you will need it shortly when filling in FluentCart (Method B) or your `wp-config.php` (Method A).

#### 3. Open the R2 API Tokens Page

Still on the R2 overview page, look inside the **Account Details** card for the **API Tokens** row and click the **Manage** button next to it.

![Cloudflare dashboard — Manage API Tokens button](/images/storage/r2/cloudflare-r2-id-manage.webp)

This opens the R2 API Tokens management page, where you will create a new token.

#### 4. Create an Account API Token

The API Tokens page splits into two sections:

* **Account API Tokens** — tokens tied to the Cloudflare account itself. They stay active even if the person who created them leaves the organization. **Use this for FluentCart on a production site.**
* **User API Tokens** — tokens tied to your individual Cloudflare user. They become inactive if you leave the organization. Only useful for personal or short-lived development setups.

Click **Create Account API token** (the recommended path for a real store).

![Cloudflare dashboard — Create Account API Token button](/images/storage/r2/cloudflare-r2-id-api.webp)

#### 5. Configure Token Permissions

On the **Create Account API Token** page, fill in the following:

* **Token name** — give it something identifiable, for example `R2 Account Token for FluentCart`. This is just a label for your own bookkeeping.
* **Permissions** — select **Admin Read & Write**. This is the right level for FluentCart because it allows the full set of operations the plugin needs:
  * Listing buckets (so "Browse existing buckets" works in the UI)
  * Creating buckets (so "Create New Bucket" works in the UI)
  * Reading, writing, and deleting objects inside buckets (so uploads, downloads, and file management work)
* **TTL (Time to live)** — choose **Forever**. You do not want your store's storage driver to silently stop working when a token expires. If your security policy requires token rotation, pick a date you can actually track and set a calendar reminder to rotate the token before it expires.
* **Client IP Address Filtering** *(optional)* — leave blank unless your store runs from a known, fixed set of server IPs. If you do restrict by IP, remember to add any load balancer or cron-runner IPs too, or uploads from background processes will fail.

![Cloudflare dashboard — Create Account API Token with Admin Read & Write and Forever TTL](/images/storage/r2/cloudflare-r2-bucket-api.webp)

> **Why "Admin Read & Write" rather than "Object Read & Write"?**
> *Object Read & Write* only covers reading, writing, and listing objects in specific buckets. FluentCart additionally lets you list all your buckets and create new ones from its own UI — that needs the broader *Admin* permission. If you prefer a narrower token, use *Object Read & Write* scoped to your FluentCart bucket, but you will lose the bucket-browse and bucket-create conveniences in the plugin.

#### 6. Save the Token and Copy the Keys

Scroll to the bottom of the page and click **Create Account API Token** to generate it.

Cloudflare now shows your credentials once:

* **Access Key ID** — a short identifier.
* **Secret Access Key** — a long secret string.
* (Optionally a ready-made S3 endpoint URL — FluentCart does not need it, but feel free to note it down.)

> **Important:** the **Secret Access Key** is displayed **only once**. If you close the page without copying it, you will have to roll the token and create a new one. Copy both values right away, ideally into a password manager.

You now have all three values FluentCart needs:

| Value              | Where it came from                        |
|--------------------|-------------------------------------------|
| Account ID         | R2 overview → Account Details (step 2)    |
| Access Key ID      | Create Account API Token result (step 6)  |
| Secret Access Key  | Create Account API Token result (step 6)  |

Head back to FluentCart and continue with Step 1 below.

![Cloudflare dashboard — Create Account API Token](/images/storage/r2/cloudflare-r2-api-created.webp)

---

## Step 1 — Credential

FluentCart supports two ways to supply your R2 credentials.

### Method A — Define Access Keys in `wp-config.php` (Recommended)

The most secure option. Keys live in your WordPress configuration file, not in the database, and are not editable from the admin UI.

![Cloudflare R2 — Define access keys in wp-config.php](/images/storage/r2/credential-define.webp)

Copy the snippet below **near the top** of your `wp-config.php` (before the `/* That's all, stop editing! */` line) and replace the placeholder values with your real Cloudflare values:

```php
define( 'FCT_R2_ACCOUNT_ID', 'your-account-id' );
define( 'FCT_R2_ACCESS_KEY', 'your-access-key-id' );
define( 'FCT_R2_SECRET_KEY', 'your-secret-access-key' );
```

Once FluentCart detects these constants, the credential fields lock automatically and the Connection Method card confirms the keys were picked up from `wp-config.php`. The in-app snippet includes a **Copy Snippet** button to make this paste-in friendlier.

> **Heads up:** to later switch to a different method here, comment out or remove the `FCT_R2_ACCOUNT_ID`, `FCT_R2_ACCESS_KEY`, and `FCT_R2_SECRET_KEY` defines from `wp-config.php` and reload the page.

### Method B — Store Access Keys in the Database

Available when you need UI-only configuration. Keys are saved to the database; an explicit acknowledgement is required.

![Cloudflare R2 — Store access keys in the database](/images/storage/r2/credential-db.webp)

Select **"I understand the risks but I'd like to store access keys in the database anyway."** Then enter:

* **Account ID** — your Cloudflare Account ID.
* **Access Key ID** — from your R2 API token.
* **Secret Access Key** — from your R2 API token.

Click **Save & Continue** to move to the bucket step.

---

## Step 2 — Bucket

An R2 **bucket** is a named storage container inside your Cloudflare account. FluentCart gives you three ways to pick or create one.

### Option 1 — Use Existing Bucket, Entered Manually

If you already know the name of the bucket you want to use, type it directly.

![Cloudflare R2 — Enter bucket name manually](/images/storage/r2/bucket-existing-manual.webp)

1. Select **Use Existing Bucket**.
2. Choose **Enter bucket name**.
3. Type the bucket name and click **Save Settings**.

### Option 2 — Use Existing Bucket, Browse From Cloudflare

FluentCart can fetch the buckets attached to your Cloudflare account so you can pick one from the list.

![Cloudflare R2 — Browse existing buckets](/images/storage/r2/bucket-existing-browse.webp)

1. Select **Use Existing Bucket**.
2. Choose **Browse existing buckets**.
3. Click the refresh icon if a bucket you just created is not visible.
4. Click the bucket you want, then **Save Settings**.

### Option 3 — Create a New Bucket From the UI

No need to switch over to the Cloudflare dashboard. FluentCart can create a fresh R2 bucket in the jurisdiction you pick.

![Cloudflare R2 — Create a new bucket](/images/storage/r2/bucket-create-new.webp)

1. Select **Create New Bucket**.
2. Enter a **Bucket Name**. R2 bucket names must be **globally unique across all Cloudflare R2 accounts** — this is called out directly in the UI.
3. Choose a **Region / Jurisdiction** (see the table below). **Automatic** is a safe default and lets Cloudflare pick the best fit.
4. Click **Save Settings**. FluentCart creates the bucket in R2 and selects it automatically.

### Understanding R2 Jurisdictions

R2 lets you pin a bucket to a geographic jurisdiction for data residency, latency, or compliance reasons.

| Value    | Label                                 | When to pick it |
|----------|---------------------------------------|-----------------|
| `auto`   | Automatic                             | Default. Cloudflare chooses the best location based on where data is written. Best general-purpose choice. |
| `apac`   | Asia-Pacific (APAC)                   | Most of your customers are in Asia-Pacific. |
| `eeur`   | Eastern Europe (EEUR)                 | Customers or compliance requirements in Eastern Europe. |
| `enam`   | Eastern North America (ENAM)          | Customers primarily on the US East Coast / eastern Canada. |
| `weur`   | Western Europe (WEUR)                 | Customers or GDPR-driven residency in Western Europe. |
| `wnam`   | Western North America (WNAM)          | Customers primarily on the US West Coast / western Canada. |
| `oc`     | Oceania (OC)                          | Customers primarily in Australia / New Zealand. |

> **Tip:** a bucket's jurisdiction is fixed once created. If you later need a different jurisdiction, create a new bucket and migrate your files across.

---

## Connected State

Once credentials are verified and a bucket is picked, the Cloudflare R2 card shows the provider as **Active**, with the bucket name and jurisdiction.

![Cloudflare R2 — Connected and ready to serve assets](/images/storage/r2/connected.webp)

What each element does:

* **Active toggle** — enable or disable this storage provider without losing its configuration.
* **Edit** — re-enter the wizard and change credentials or bucket.
* **Bucket name** — the R2 bucket your assets live in.
* **Jurisdiction label** (e.g. `ENAM`) — the R2 region this bucket is pinned to.
* **Check Connection** — re-runs FluentCart's connection verification against R2 on demand.

---

## Managing Files

Once connected, all digital product uploads flow through your R2 bucket automatically. Inside the FluentCart file browser you can:

* **Upload** new assets directly to R2.
* **Browse and list** files already in the bucket.
* **Search** by filename.
* **Delete** files you no longer need.
* See a **provider badge** next to each file so you always know which storage driver an asset lives on.

## Editing an Existing R2 Connection

1. From **FluentCart → Storage → Cloudflare R2**, click **Edit**.
2. Move through the Credential → Bucket wizard again.
3. Only the fields you change need to be updated.

You do **not** need to disconnect and reconnect — existing assets stay referenced correctly.

## Enabling / Disabling the R2 Driver

Use the **Active** toggle on the Cloudflare R2 card to turn the provider on or off. Turning R2 off does not delete any files from Cloudflare — it only tells FluentCart to stop routing new uploads through it.

---

## Full `wp-config.php` Example

For teams standardising on Method A, here is a complete, paste-ready snippet:

```php
// Add this near the top of wp-config.php, above
// the "That's all, stop editing!" line.
define( 'FCT_R2_ACCOUNT_ID', '1a2b3c4d5e6f7g8h9i0j' );
define( 'FCT_R2_ACCESS_KEY', 'EXAMPLEACCESSKEYID12' );
define( 'FCT_R2_SECRET_KEY', 'EXAMPLE_SECRET_ACCESS_KEY_1234567890abcd' );
```

Once saved, reload the Cloudflare R2 page in FluentCart and the credential fields will be locked and pre-filled from your config.

---

## Troubleshooting

**The connection fails with an authentication error.**
* Verify your **Account ID** is correct — it is a long hex string, not your email or account name.
* Confirm the **Access Key ID** and **Secret Access Key** were copied fully, with no extra spaces.
* Make sure the R2 API token has **Object Read & Write** permission.
* If you regenerated the token, the previous Access Key ID / Secret are invalid.

**"Browse existing buckets" is empty.**
* Your Cloudflare account has no R2 buckets yet — switch to **Create New Bucket**.
* The API token is scoped to a different set of buckets than the one you expect.

**Bucket creation fails with a name conflict.**
* R2 bucket names are globally unique across **all** Cloudflare accounts. Pick a more specific name (for example, `yourstore-fluentcart-assets`).

**Files upload but customers cannot download them.**
* Confirm the digital product is configured to use Cloudflare R2 as its storage driver.
* Confirm the API token still has **Object Read & Write** — read-only tokens will break downloads.

**I defined `FCT_R2_ACCOUNT_ID` / `FCT_R2_ACCESS_KEY` / `FCT_R2_SECRET_KEY` but the UI still shows empty fields.**
* Confirm all three constants are in `wp-config.php` (not inside a plugin or theme file) and load before FluentCart.
* Confirm the constant names match exactly — `FCT_R2_ACCOUNT_ID`, `FCT_R2_ACCESS_KEY`, and `FCT_R2_SECRET_KEY`.

---

## FAQs

**Can I run Cloudflare R2 and Amazon S3 at the same time?**
Yes — you can configure both and switch which one is active.

**Can I change a bucket's jurisdiction after creation?**
No. Jurisdiction is fixed at bucket creation. To change it, create a new bucket with the new jurisdiction and migrate your files across.

**Is my Secret Access Key visible in the admin after I save it?**
No. With Method A the key lives only in `wp-config.php`. With Method B the Secret Access Key is masked after save.

**What does "Automatic" do for the jurisdiction?**
Cloudflare picks the optimal location based on where the first write comes from, balancing latency and availability. It is the recommended default for most stores.
