# Storage in FluentCart

FluentCart ships with a built-in **Storage** layer that decides where your digital product files, downloadable assets, and related media are physically saved and served from. You can keep everything on your own server, or offload to a cloud storage provider for better performance, reliability, and scalability.

To manage storage, go to **FluentCart** > **Settings** > **Storage Settings**. The **Storage Providers** screen lists every provider. Only site administrators can see it.

## Why Storage Matters

Every digital product you sell — a PDF, a software license archive, a video course file, a design asset — needs to live somewhere. The storage driver you choose here determines:

* **Where the file is stored** when it is uploaded (your server vs. a cloud bucket).
* **How the file is delivered** to the customer after purchase (direct from your server vs. served through the cloud provider).
* **How your site scales** as your file library grows (server disk vs. effectively unlimited cloud storage).

:::tip Digital Product Assets
When [creating or editing digital products](/guide/product-types-creation/creating-digital-products), the storage driver you configure here is where those downloadable files are actually saved.
:::

## Supported Storage Providers

FluentCart currently supports the following storage providers out of the box:

### Local Storage

Files are saved directly on your website's server. This is the simplest option and is active by default, making it a good fit for smaller stores or early setups where files are light and traffic is manageable.

### Amazon S3

Amazon S3 is AWS's cloud object storage — the industry standard for offloading large file libraries from your web server. Choose S3 if you sell large digital files, want to keep your site fast under load, or already live inside the AWS ecosystem.

[Read the full Amazon S3 setup guide →](/guide/storage/aws-s3)

### Cloudflare R2

Cloudflare R2 is Cloudflare's object storage — S3-compatible at the API level, but delivered through Cloudflare's global network with **zero egress fees**. Choose R2 if you have media-heavy downloads, international customers, or want predictable costs as traffic grows.

Cloudflare R2 requires **FluentCart Pro**. Without Pro, the R2 row shows an **Upgrade to Pro** button. Local Storage and Amazon S3 are included in the free plugin.

[Read the full Cloudflare R2 setup guide →](/guide/storage/cloudflare-r2)

## Provider List, Enable / Disable, and Edit

On the **Storage Providers** screen, each provider shows an **Active** or **Inactive** badge. **Local** has an on/off toggle right in the list.

Click **Amazon S3** or **Cloudflare R2** (or its **Manage** button) to open its settings page. There you'll find these controls:

* **Active** toggle: turn the provider on or off without losing its configuration.
* **Check again**: re-verify the connection.
* **Edit Config**: change credentials or bucket.
* **Reset**: clear all settings after confirmation.

More than one provider can be active at the same time. When you add a downloadable file, the **Storage Providers** dialog shows a tab for each active provider, so you choose where each file goes.

## Security Model

FluentCart takes credential safety seriously. Both S3 and R2 let you pick how credentials are stored:

* **Define in `wp-config.php`** *(Recommended)* — keys live in your WordPress configuration file, never in the database. The UI detects the constants and locks the credential fields so nothing overrides them from the admin.
* **Store credentials in the database**: for UI-only setups. The option is labelled less secure, but there is no acknowledgement checkbox. It is disabled while keys are defined in `wp-config.php`.

For Amazon S3, a dedicated **Security step** additionally lets you enforce *Block All Public Access* and *Object Ownership* on your bucket.

## Saving Changes

After any change to your Storage configuration, click the relevant button to apply it:

* Amazon S3: **Save & Continue** (credentials), then **Next** or **Create Bucket & Continue** (bucket), then **Save Settings** (security).
* Cloudflare R2: **Save & Continue**, then **Save Settings** or **Create Bucket & Save**.

FluentCart verifies the connection where applicable before marking the provider as connected.
