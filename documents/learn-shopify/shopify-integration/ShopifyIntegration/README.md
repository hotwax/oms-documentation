---
description: >-
  Learn how to install HotWax Commerce App to integrate your Shopify store with HotWax Commerce's Order Management System
---

# Install HotWax Commerce Order Management App

The HotWax Commerce Order Management app on Shopify creates the connection between Shopify stores and HotWax Commerce's Omnichannel Order Management System (OMS). This integration ensures reliable transfer of critical data between the eCommerce platform and OMS, adhering to Shopify's guidelines.

**Step-by-Step Installation Guide:**

1. **Access Shopify App Store:**

{% hint style="info" %}
HotWax Commerce app must be installed on all Shopify stores to establish their connection with the OMS.{% endhint %}

   - Access your Shopify store by logging in to your Shopify account where you want to install the HotWax Order Management App.
   - Go to Settings > Apps and sales channel > Shopify App store.

2. **Install HotWax Order Management System App:**
   - Search for `HotWax Order Management System` in the Shopify App Store or directly access it via this link: [HotWax Order Management System App](https://apps.shopify.com/hotwax-order-management).
   - Click on the `Install` button to initiate the installation process.
   - **Grant the necessary permissions** to ensure optimal app functionality. 
   - Now you will be navigated to a screen which will ask the following detials:
     - HotWax Commerce Instance Name
     - JWT token

{% hint style="info" %}
The following steps are optional and can be handled by the HotWax Commerce team. Please contact us if you need assistance.{% endhint %}

HotWax Commerce relies on JWT (JSON Web Token) for secure API communication, ensuring a safe environment for data exchange between the Shopify store and the HotWax Commerce platform.

1. **Create JWT Token:**
   - Navigate to the provided documentation link: [JWT Token Creation Guide](https://docs.hotwax.co/documents/v/integrate-with-hotwax/hotwax-commerce-api-and-data-feeds/initial-api-authentication).
   - Follow the instructions to create a JWT token using an integration user on your HotWax Commerce system.
   - Securely store this token for future use.

2. **Provide Instance Name and JWT Token:**
   - Enter the instance name ```(e.g., https://{instance-name}.hotwax.io/)``` in the designated field. This is basically your OMS instance URL. Incase you do not have it, ask HotWax team to provide you with one.
   - Paste the JWT token created previously into the appropriate field.
   - Proceed with the installation.
   - Upon successful inputting credential, a connection between the OMS and Shopify should be established.

3. **Verify Installation:**
   - Confirm successful integration by verifying Shopify shop appearance within the HotWax Commerce Order Management System.
   - Log in to your HotWax Commerce instance.
   - Navigate to the `Shopify` > `Shopify Shop` section from the hamburger menu.
   - Confirm that your Shopify Shop is listed on the Shopify Shop page and that all the basic details are added.
   - On the Shopify Shop page, ensure that the following details are filled:


| Field                   | Description                                                                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Shop ID**             | The internal name of your Shopify Store. A default ID is created for your Shopify shop when you install the App. but change it to a unique value for multiple stores (e.g., US\_SHOP, CA\_SHOP). |
| **Shopify Config Name** | Project-specific; use the instance name along with Shopify Config (e.g. NotNaked Shopify Config).                                               |
| **Connect URL**         | The default URL is fetched from the Shopify URL (e.g., hc-demo for hc-demo.myshopify.com).                                                      |
| **Access Token**        | The JWT token to access Shopify                                                                                 |
| **Access Scope**        | The default scope is read-only, make sure you have given read and write access to make changes for the Shopify shop                                                             |
| **Shared Secret**       | Provided by the retailer or obtained during custom app setup.                                                                                   |
| **Product Store**       | When a Shopify shop is linked to HotWax Commerce, it is initially linked to the default product store, make sure to edit the product store to ensure accurate integration                                                                                            |
| **Process Refund**      | Select whether you want to process refunds through this Shopify Shop.                                                                           |
| **WebSite**             | If the website name is changed to the Product Store name, use the same name here.                                                               |

After the Shopify Shop is verified, further editing can be performed on the [Shopify Shop](integration-mapping.md) page


## Steps for Migrating Existing Clients to HotWax Commerce Public App

**Step 1: Establish Connection**
* Follow steps 1-3 of the standard migration process to connect the existing Shopify shop to the HotWax Commerce Public app. This will update the existing Shopify shop within the OMS without creating a new one.

**Step 2: Verify Functionality**
* Conduct a thorough sanity check to ensure all processes are functioning correctly post-connection.

**Step 3: Uninstall Custom App**
* Uninstall the HotWax Commerce Custom app (also known as HotWax Commerce Integration) from the Shopify shop by navigating to Settings > Apps and sales channels > Develop Apps.

{% hint style="info" %}
The subsequent steps involve internal configurations to be executed by the HotWax Commerce team. {% endhint %}

**Step 4: Update Maarg Instance Credentials (if applicable)**
* If the Maarg instance is configured for data sharing with Shopify, update the credentials:
  * Login to the dedicated Maarg instance.
  * Navigate to System > Sys-sys messages > Remotes > Message remote list.
  * Click on the dedicated Shopify Config to edit the configuration.
  * Input the Shopify shop's access token to the Shared Secret field and input the Shopify shop's shared secret into the Send Shared Secret field. 
  * Click on the update button to save the changes.

**Step 5: Final Verification**
* Perform a final sanity check to confirm that all information is being shared correctly between the Shopify shop, OMS, and Maarg instance.

**Note:** These steps assume basic familiarity with the HotWax Commerce platform, Shopify, and Maarg. 
