# Storage Settings

The **Storage Settings** feature in FluentCart allows you to configure where your digital product files and other assets are stored. This flexibility enables you to choose between local file storage on your server or integrate with cloud-based solutions like Amazon S3 for more efficient and secure file management.

## Accessing Storage Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2.  Click on the **"Storage Settings"** tab.

## Storage Drivers

The main area of this screen displays a list of available **Storage Drivers**. You can manage each driver to configure its specific settings.

### 1. Local Storage

Local storage means your files are saved directly on your website's server. This is the simplest option and is usually active by default.

To check the settings for local storage, click the **Manage** button next to Local.

   ![Screenshot of Storage Settings Tab](/images/settings-configuration/storage/storage-settings-tab.png)

On this page, you’ll see a checkbox to **Enable the local driver**. Make sure this is checked if you want to use your server for file storage. Click **Save** if you make any changes.
 
   ![Screenshot of Storage Settings Tab](/images/settings-configuration/storage/enable-local-driver.png)

### 2. S3 (Amazon S3)

Amazon S3 is a cloud storage service. Using S3 is highly recommended if you sell large digital files because it offloads storage from your server, which can improve your site's speed and security.

To set it up, click the **Manage** button next to S3.

On the S3 Settings page, you will need to do the following:

* **Enable S3 driver:** First, you need to activate the S3 connection. Click the toggle switch next to this label to tell FluentCart you want to start using Amazon S3 for file storage.
* **Access Key:** Enter the Access Key ID from your [Amazon Web Services (AWS) account](https://aws.amazon.com/account/). 
* **Secret Key**: Enter the Secret Access Key from your AWS account. This acts like a password, so be sure to keep it secure.

:::tip
Read our comprehensive documentation to learn how you can integrate your FluentCart store with Amazon S3 for secure and scalable media file storage.

[Read the full Integrating with Amazon S3 documentation](/guide/Integrations/amazon-s3-integration.md)
:::

:::tip Digital Product Assets
When [creating or editing digital products](/product-types-creation/creating-digital-products), you will have the option to upload or link your downloadable assets. The storage driver you configure here will determine where those files are actually saved.
:::

## Saving Your Settings

After making any changes to your Storage Settings, remember to click the **"Save"** button at the bottom right of the screen to apply your configurations.

