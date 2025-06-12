# Storage Settings

The **Storage Settings** feature in FluentCart allows you to configure where your digital product files and other assets are stored. This flexibility enables you to choose between local file storage on your server or integrate with cloud-based solutions like Amazon S3 for more efficient and secure file management.

## Accessing Storage Settings

1.  From your WordPress dashboard, navigate to **FluentCart Pro > Settings** in the left sidebar.
2.  Click on the **"Storage Settings"** tab.

    ![Screenshot of Storage Settings Tab](/guide/public/images/settings-configuration/storage-settings-tab.png)

## Storage Drivers

The main area of this screen displays a list of available storage drivers. You can manage each driver to configure its specific settings.

### 1. Local Storage

* **Description:** "Local allows to upload file in local file storage". This means files will be stored directly on your web server where WordPress is installed.
* **Status:** Typically shown as "Active" by default.
* **Manage:** Click the "Manage" button next to "Local" to configure any specific local storage options (though this is often minimal).

### 2. S3 (Amazon S3)

* **Description:** "S3 bucket allows to configure storage options and others for efficient and secure cloud-based file storage". Using S3 is highly recommended for large digital product files as it offloads storage from your web server, improves delivery speed, and enhances security.
* **Status:** You will need to "Manage" this option to connect your Amazon S3 bucket.
* **Manage:** Click the "Manage" button next to "S3 Info" to configure your S3 credentials (Access Key ID, Secret Access Key, Bucket Name, Region, etc.) and other settings for cloud storage.

:::tip Digital Product Assets
When [creating or editing digital products](/product-types-creation/creating-digital-products), you will have the option to upload or link your downloadable assets. The storage driver you configure here will determine where those files are actually saved.
:::

## Saving Your Settings

After making any changes to your Storage Settings, remember to click the **"Save Settings"** button at the bottom right of the screen to apply your configurations.

