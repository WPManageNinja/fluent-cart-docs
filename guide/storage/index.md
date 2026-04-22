# Storage in FluentCart

FluentCart ships with a built-in **Storage** layer that decides where your digital product files, downloadable assets, and related media are physically saved and served from. You can keep everything on your own server, or offload to a cloud storage provider for better performance, reliability, and scalability.

From your WordPress dashboard, you will find a dedicated **Storage** menu in the FluentCart sidebar, with a sub-menu for each supported cloud provider.

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

[Read the full Amazon S3 setup guide →](/guide/storage/s3)

### Cloudflare R2

Cloudflare R2 is Cloudflare's object storage — S3-compatible at the API level, but delivered through Cloudflare's global network with **zero egress fees**. Choose R2 if you have media-heavy downloads, international customers, or want predictable costs as traffic grows.

[Read the full Cloudflare R2 setup guide →](/guide/storage/r2)

## Provider List, Enable / Disable, and Edit

Inside the **Storage** menu, each provider is listed as a card with:

* An **Active / Inactive** toggle — flip a provider on or off without losing its configuration.
* An **Edit** button — update credentials, swap the bucket, or adjust security settings any time.
* A **connection status** banner once connected, with a **Check again** action to re-verify the connection on demand.

You can configure multiple providers and switch the active one as your needs change.

## Security Model

FluentCart takes credential safety seriously. Both S3 and R2 let you pick how credentials are stored:

* **Define in `wp-config.php`** *(Recommended)* — keys live in your WordPress configuration file, never in the database. The UI detects the constants and locks the credential fields so nothing overrides them from the admin.
* **Store in the database** — available when you need UI-only configuration, with an explicit acknowledgement of the reduced security posture.

For Amazon S3, a dedicated **Security step** additionally lets you enforce *Block All Public Access* and *Object Ownership* on your bucket.

## Saving Changes

After any change to your Storage configuration, click the relevant **Save** button (`Save & Continue`, `Save Selected Bucket`, `Create New Bucket`, or `Save Settings`) to apply the change. FluentCart will verify the connection where applicable before marking the provider as connected.
