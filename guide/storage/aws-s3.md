# Amazon S3

Amazon S3 (Simple Storage Service) is AWS's cloud object storage service. Connecting S3 to FluentCart offloads your digital product files from your own web server into a dedicated, highly durable, globally available storage layer. Your site stays fast, your downloadable files stay safe, and your storage scales effectively without limit.

This guide walks you through the full setup — from getting AWS credentials, to picking or creating a bucket, to locking the bucket down with the right security settings.

## Obtaining AWS Access Keys

Before you open the FluentCart Storage screen, create a pair of S3 access keys in AWS. The walkthrough below uses the current (2026) AWS console layout and produces a dedicated IAM user scoped just for FluentCart — so you can rotate or revoke its keys any time without affecting the rest of your AWS account.

> **Already have access keys?** Skip this section and jump to [Accessing Amazon S3 Settings](#accessing-amazon-s3-settings).

### 1. Open IAM and Start a New User

1. Log in to the [AWS Management Console](https://aws.amazon.com/console/).
2. In the top search bar, type **IAM** and open the service.
3. In the IAM sidebar, expand **Access Management** and click **Users**.
4. Click the **Create user** button in the top-right.

![AWS IAM — Users list with Create user highlighted](/images/storage/s3/aws-iam-users-list.webp)

> **Tip:** IAM is a global service — you do not need to pick a region for user creation.

### 2. Specify User Details

Give the new user a recognisable name (for example, `fluentcart-s3`). Leave **Provide user access to the AWS Management Console** **unchecked** — FluentCart only needs programmatic (API) access, not a console login. Click **Next**.

![AWS IAM — Specify user details with a programmatic-only user](/images/storage/s3/aws-user-details.webp)

> **Why no console access?** A dedicated API-only user reduces your attack surface. If the key ever leaks, the attacker cannot log into the AWS console with it.

### 3. Attach the S3 Policy

On the **Set permissions** screen:

1. Choose **Attach policies directly**.
2. In the **Permissions policies** search box, type `s3full`.
3. Tick the row for **AmazonS3FullAccess**.
4. Click **Next**.

![AWS IAM — Attach AmazonS3FullAccess policy directly](/images/storage/s3/aws-attach-policy.webp)

> **Security-conscious alternative:** instead of `AmazonS3FullAccess`, you can create a custom policy scoped to a single bucket ARN with only the actions FluentCart uses (`s3:ListAllMyBuckets`, `s3:ListBucket`, `s3:CreateBucket`, `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject`, `s3:PutBucketPublicAccessBlock`, `s3:PutBucketOwnershipControls`). The managed policy is simpler and is what this guide assumes.

### 4. Review and Create the User

Double-check the user name and the attached policy. Tags are optional — you can skip them. Click **Create user**.

![AWS IAM — Review and create the new IAM user](/images/storage/s3/aws-review-create.webp)

### 5. Open the New User's Security Credentials

Back on the **Users** list, click the user you just created (`fluentcart-s3`). On the user details page, open the **Security credentials** tab, scroll down to the **Access keys** section, and click **Create access key**.

![AWS IAM — User security credentials with Create access key](/images/storage/s3/aws-security-credentials.webp)

### 6. Pick a Use Case for the Access Key

AWS asks what the key will be used for. Choose **Third-party service** (FluentCart is a third-party application calling the S3 API on your behalf). AWS will surface a best-practice reminder — tick **I understand the above recommendation and want to proceed to create an access key**, then click **Next**.

![AWS IAM — Access key use case: Third-party service](/images/storage/s3/aws-access-key-usecase.webp)

You can leave the optional **description tag** blank, or add something like `fluentcart-production` if you manage keys across several environments. Click **Create access key**.

### 7. Copy the Access Key and Secret Access Key

AWS now shows both values:

* **Access key** — the public ID.
* **Secret access key** — the private half. Click **Show** to reveal it.

![AWS IAM — Retrieve access key and secret access key](/images/storage/s3/aws-retrieve-keys.webp)

::: danger The secret is shown **only once**
This is the only moment AWS will ever display the secret access key in cleartext. Either copy both values immediately into FluentCart, or click **Download .csv file** to store them safely. If you lose the secret, you cannot recover it — you will have to delete this access key and create a new one.
:::

Once you have both values, click **Done**.

### Credentials Recap

| FluentCart field      | AWS value                      | Source step |
| --------------------- | ------------------------------ | ----------- |
| **Access Key**        | Access key                     | Step 7      |
| **Secret Key**        | Secret access key              | Step 7      |
| IAM user name         | e.g. `fluentcart-s3`           | Step 2      |
| Attached policy       | `AmazonS3FullAccess`           | Step 3      |

Keep the two keys handy — you will paste them into FluentCart in the next section.

---

## Accessing Amazon S3 Settings

From your WordPress dashboard:

1. Go to **FluentCart → Storage**.
2. Click **Amazon S3** in the sub-menu.

You will land on the Amazon S3 configuration wizard. Setup is split into three steps:

1. **Credential** — how FluentCart will authenticate to AWS.
2. **Bucket** — which S3 bucket will hold your files.
3. **Security** — bucket-level protections against unintended public access.

---

## Step 1 — Credential

FluentCart supports two ways to supply your AWS access keys.

### Method A — Define Access Keys in `wp-config.php` (Recommended)

This is the most secure option. Your keys live in your WordPress configuration file, never in the database, and are not readable from the admin UI.

![Amazon S3 — Define access keys in wp-config.php](/images/storage/s3/credential-define.webp)

Copy the snippet below **near the top** of your `wp-config.php` (before the `/* That's all, stop editing! */` line) and replace the placeholder values with your real AWS keys:

```php
define( 'FCT_S3_ACCESS_KEY', 'your-access-key-id' );
define( 'FCT_S3_SECRET_KEY', 'your-secret-access-key' );
```

Once FluentCart detects these constants, the credential fields in the UI are automatically locked, and the Connection Method card will tell you the keys have been picked up from your `wp-config.php`.

> **Heads up:** to later switch to a different method here, comment out or remove the `FCT_S3_ACCESS_KEY` and `FCT_S3_SECRET_KEY` defines from `wp-config.php` and reload the page.

### Method B — Store Access Keys in the Database

Available when you need UI-only configuration. Keys are saved to the database, which is inherently less secure than a file-based constant — an acknowledgement is shown before you proceed.

![Amazon S3 — Store access keys in the database](/images/storage/s3/credential-db.webp)

Select **"I understand the risks but I'd like to store access keys in the database."** Then enter:

* **Access Key** — your AWS Access Key ID.
* **Secret Key** — your AWS Secret Access Key.

Click **Save & Continue** to move on to the bucket step.

> **No access keys yet?** Head back to [Obtaining AWS Access Keys](#obtaining-aws-access-keys) above for the full IAM walkthrough.

---

## Step 2 — Bucket

An S3 **bucket** is a named storage container inside your AWS account. FluentCart gives you three ways to pick or create one.

### Option 1 — Use Existing Bucket, Entered Manually

If you already know the exact name of the bucket you want to use, type it directly.

![Amazon S3 — Enter bucket name manually](/images/storage/s3/bucket-existing-manual.webp)

1. Select **Use Existing Bucket**.
2. Choose **Enter bucket name**.
3. Type the bucket name and click **Save Selected Bucket**.

### Option 2 — Use Existing Bucket, Browse From AWS

FluentCart can fetch the list of buckets attached to the connected AWS account so you can pick from a dropdown — no copy-pasting names, no typos.

![Amazon S3 — Browse existing buckets](/images/storage/s3/bucket-existing-browse.webp)

1. Select **Use Existing Bucket**.
2. Choose **Browse existing buckets**.
3. Click the refresh icon if you do not see a bucket you just created.
4. Click the bucket you want and click **Save Selected Bucket**.

### Option 3 — Create a New Bucket From the UI

No need to switch to the AWS console. FluentCart can create a fresh S3 bucket in the region you pick.

![Amazon S3 — Create a new bucket](/images/storage/s3/bucket-create-new.webp)

1. Select **Create New Bucket**.
2. Enter a **Bucket Name**. Bucket names must be unique across **all of AWS globally**, follow DNS-style naming (lowercase letters, numbers, hyphens), and cannot be reused after deletion for a while.
3. Choose a **Region** — pick the one geographically closest to most of your customers (for example, **US East (N. Virginia)** for the Americas, **EU (Frankfurt)** for Europe).
4. Click **Create New Bucket**. FluentCart will create the bucket in AWS and select it for you automatically.

> **Region tip:** once a bucket exists, its region is fixed. If you change your mind later, you create a new bucket in the new region and move your files over.

---

## Step 3 — Security

This step configures two bucket-level protections on AWS.

![Amazon S3 — Security step with recommended toggles enabled](/images/storage/s3/security-enabled.webp)

### Block All Public Access

Controls AWS's S3 *Block Public Access* setting for this bucket. When enabled, AWS refuses any bucket policy or ACL that would expose objects publicly — even if something is misconfigured downstream.

* **Enabled (Recommended)** — your digital product files are kept private and only served through FluentCart's signed links.
* **Disabled** — required **only** if you explicitly need objects to be publicly reachable, which is unusual for paid digital goods.

### Object Ownership

Controls who owns objects uploaded into the bucket.

* **Enforced (Recommended)** — the bucket owner (your AWS account) retains full control of all objects, regardless of who uploaded them. ACLs are effectively disabled.
* **Not enforced** — uploader can retain ownership via ACLs, which complicates permission management.

Both toggles are surfaced as first-class controls with clear recommendation labels:

![Amazon S3 — Security step with toggles disabled, not recommended](/images/storage/s3/security-disabled.webp)

Click **Save Settings** to finish.

---

## Connected State

Once all three steps are complete, the Amazon S3 card shows the provider as **Active**, with the bucket name, region, and security summary.

![Amazon S3 — Connected and ready to serve assets](/images/storage/s3/connected.webp)

What each element does:

* **Active toggle** — enable or disable this storage provider without losing its configuration.
* **Edit** — re-enter the wizard and change credentials, bucket, or security.
* **Bucket name link** — opens the bucket in the AWS console.
* **Region label** — the AWS region your bucket lives in.
* **Check again** — re-runs FluentCart's connection verification against S3 on demand.
* **Security Configuration cards** — quick visual of Block All Public Access + Object Ownership state.

---

## Managing Files

Once connected, all digital product uploads flow through your S3 bucket automatically. Inside the FluentCart file browser you can:

* **Upload** new assets directly to S3.
* **Browse and list** files already in the bucket.
* **Search** by filename.
* **Delete** files you no longer need.
* See a **provider badge** next to each file so you know at a glance whether an asset lives on S3, R2, or local storage.

## Editing an Existing S3 Connection

Need to rotate your AWS keys, point FluentCart to a different bucket, or tighten the security settings?

1. From **FluentCart → Storage → Amazon S3**, click **Edit**.
2. Move through the Credential → Bucket → Security wizard again.
3. Only the fields you change need to be updated.

You do **not** need to disconnect and reconnect — existing assets stay referenced correctly.

## Enabling / Disabling the S3 Driver

Use the **Active** toggle on the Amazon S3 card to turn the provider on or off. Turning S3 off does not delete any files from AWS — it only tells FluentCart to stop routing new uploads through it.

---

## Full `wp-config.php` Example

For teams standardising on Method A, here is a complete, paste-ready snippet:

```php
// Add this near the top of wp-config.php, above
// the "That's all, stop editing!" line.
define( 'FCT_S3_ACCESS_KEY', 'AKIAEXAMPLEKEYID1234' );
define( 'FCT_S3_SECRET_KEY', 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' );
```

Once saved, reload the Amazon S3 page in FluentCart and the credential fields will be locked and pre-filled from your config.

---

## Troubleshooting

**The connection test fails after I save credentials.**
* Double-check both keys were pasted without leading or trailing spaces.
* Confirm the IAM user has the `AmazonS3FullAccess` policy (or an equivalent that allows `s3:ListAllMyBuckets`, `s3:CreateBucket`, `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject`).
* If you rotated keys recently, make sure the old key is deactivated and you are using the current one.

**"Browse existing buckets" shows nothing.**
* The IAM user lacks `s3:ListAllMyBuckets`.
* The account genuinely has no buckets yet — switch to **Create New Bucket**.

**Bucket creation fails with a name conflict.**
* Bucket names are globally unique across all AWS accounts. Try a more specific name (for example, `yourstore-fluentcart-assets`).

**Files upload but customers cannot download them.**
* *Block All Public Access* is likely **Enabled** (good) — FluentCart serves files through signed URLs in this mode, so confirm your digital product is configured to use S3 as its storage driver.

**I defined `FCT_S3_ACCESS_KEY` / `FCT_S3_SECRET_KEY` but the UI still shows empty fields.**
* Confirm both constants are in `wp-config.php` (not in a plugin file) and load before FluentCart.
* Confirm the constant names match exactly — `FCT_S3_ACCESS_KEY` and `FCT_S3_SECRET_KEY`.

---

## FAQs

**Can I run S3 and Cloudflare R2 at the same time?**
Yes — you can configure both and switch which one is active.

**Is my secret key visible from the WordPress admin after I save it?**
No. With Method A, keys live only in `wp-config.php`. With Method B, the secret is masked in the UI after save.

**Can I change the region later?**
A bucket's region is fixed at creation. To move to a different region, create a new bucket in the new region and either re-upload or use S3's cross-region replication to migrate your existing files.

**Does FluentCart support server-side encryption?**
AWS S3 default encryption (SSE-S3) applies at the bucket level. Enable it on the AWS side and FluentCart's uploads will be encrypted automatically.

**Do I have to use `AmazonS3FullAccess`?**
`AmazonS3FullAccess` is the simplest policy and is what this guide uses. Security-conscious setups can scope a custom policy down to the specific bucket ARN and only the actions FluentCart uses.
