# FluentCart with Amazon S3

Amazon S3 is like a huge, super-fast warehouse that you can use to store all your files. By connecting Amazon S3 to FluentCart, you move your files from your crowded shop to this big warehouse. This makes your website load much faster for your customers and keeps everything running smoothly.

This guide will walk you through the simple steps to connect your FluentCart store with your Amazon S3 warehouse.

## Step 1: Find the Storage Settings in FluentCart

First, let's go to the right place in FluentCart.

1.  From your WordPress dashboard, go to **FluentCart**.
2.  Click on **Settings** in the left-hand menu.
3.  Choose **Storage Settings**.
4.  You will see a list of cloud storage options. Find **Amazon S3** and click the **Manage** button.

![Amazon S3 Settings in FluentCart](/guide/public/images/Integrations/S3/access-s3.png)

You’ll now see the fields we need to fill in to connect FluentCart to Amazon S3.

To retrieve this information, please visit your Amazon AWS account. Don’t worry, we’ll guide you through each step to make the process simple and stress-free.

![Amazon S3 configuration fields in FluentCart](/guide/public/images/integrations/S3/s3-credential-fields.png)

## Step 2: Get Your Credentials from Amazon S3

Think of this step as creating a secure storage box in your Amazon S3 for your media files, and then generating a special key that only FluentCart can use to access it.

### Create a "Bucket" (Your File Box)

First, we need to create a "bucket," which is just what Amazon calls a storage container.

1.  Log in to your **Amazon AWS account**.
2.  From the main dashboard, find and click on **S3** under the "Storage" section. If you can't find it, you can search for "S3" in the search bar at the top.

![Navigating to the S3 service in AWS](/guide/public/images/integrations/S3/aws-navigate-to-s3.png)

3.  Before we make the bucket, let's choose a **Region**. This is the physical location of the data center where your files will be stored. It's a good idea to pick a region that is closest to most of your customers. You can change this at the top right of the AWS console.

![Choosing a region in the AWS console](/guide/public/images/integrations/S3/aws-select-region.png)

4.  Now, click the **Create Bucket** button. This will start the setup process for your new storage bucket.

![The 'Create Bucket' button in AWS S3](/guide/public/images/integrations/S3/aws-create-bucket-button.png)

5.  On the bucket creation page, follow these instructions carefully:
    * **Bucket Name:** Give your bucket a unique name.
    * **Object Ownership:** Select **ACLs enabled**, and then choose **Object writer**. This is like telling Amazon it's okay for FluentCart to put files into this bucket.
    * **Block Public Access Settings:** For your customers to see your product images, the files need to be public. So, uncheck the box for **Block all public access**.
    * Amazon will show a warning. Check the box that says, "**I acknowledge that the current settings might result in this bucket and the objects within becoming public.**"
6.  Click the **Create Bucket** button at the bottom.

Make a note of the **Region** you chose (like `us-east-1`), as you'll need it in a moment.

![The 'Create Bucket' Creation page in AWS S3](/guide/public/images/integrations/S3/bucket-creation.png)

### Create an "IAM User" (A Special Key)

Instead of giving FluentCart the master key to your entire Amazon account, we’ll create a special user with a limited key that only works for your S3 bucket. This is much more secure.

1.  In the AWS search bar at the top, type **IAM** and select it from the results.

![Searching for IAM in the AWS console](/guide/public/images/integrations/S3/aws-search-iam.png)

2.  On the IAM dashboard, click **Users** from the left sidebar, and then click the **Create User** button.

![The 'Create User' button in the IAM dashboard](/guide/public/images/integrations/S3/iam-create-user-button.png)

3.  **User name:** Give your user a name.
4.  Leave the box for "**Provide user access to the AWS Management Console**" unchecked. FluentCart doesn't need it. After that, click the **Next** button.

![Setting the user name in IAM](/guide/public/images/integrations/S3/iam-set-user-name.png)

5.  In the permissions step, choose **Attach policies directly**.
6.  In the search bar, type **AmazonS3FullAccess**, check the box next to it, and click the **Next** button.

![Attaching the AmazonS3FullAccess policy](/guide/public/images/integrations/S3/iam-attach-policy.png)

7.  You can skip the Review and Create step and click on the **Create User** button to create the new user.
8.  Your user is now created! Click on the new **User Name** in the list to see its details.
9.  Now, go to the **Security credentials** tab. Scroll down to the **Access keys** section and click **Create access key**.

![The 'Create access key' button in security credentials](/guide/public/images/integrations/S3/iam-create-access-key.png)

10. The next step asked how you'll use the access key. Choose **Other** and click **Next**. You can skip the next step by clicking **Create access key**.
11. Now you'll see your **Access key** and **Secret access key**. This is very important! Copy both of these keys somewhere safe. You can also click the **Download CSV file** button to save them to your computer.

![Viewing the final Access Key and Secret Access Key](/guide/public/images/integrations/S3/iam-view-keys.png)

> **Heads up!** Amazon will only show you the Secret Access Key once. If you lose it, you'll have to create a new one.

## Step 3: Configure Amazon S3 in FluentCart

Okay, we have our bucket and our special keys. It's time to head back to FluentCart and put it all together.

1.  Go back to your **FluentCart Storage Settings** for Amazon S3.
2.  Toggle the switch from "**Inactive**" to "**Active**".
3.  **Secret Key:** Paste the **Secret access key** you just copied from the IAM User.
4.  **Access Key:** Paste the **Access key** you copied.
5.  **Region:** Enter the region you chose when you created your bucket (e.g., `us-east-1`).
6.  Click the **Test S3 Config** button. You should see a success message.
7.  Finally, click **Save Settings** button.

![FluentCart Storage Settings](/guide/public/images/integrations/S3/save-settings.png)

That's it! Your FluentCart store is now connected to Amazon S3. All your new media files will be automatically stored in your S3 bucket, making your site faster and more efficient.

## Troubleshooting Common Issues

If the connection test fails, don't worry! Here are a few common things to check:

* **Did you copy the keys correctly?** Double-check that there are no extra spaces at the beginning or end of your Access Key or Secret Key.
* **Is the Region correct?** The region you enter in FluentCart must exactly match the region of your S3 bucket in AWS.
* **Are the permissions right?** Go back to your bucket's settings in AWS and make sure that "Block all public access" is turned off.