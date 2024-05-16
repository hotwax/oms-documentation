---
description: >-
  Discover how to link multiple Shopify stores with a shared product
  catalog by creating individual Shops for each storefront.
---

# Install HotWax Commerce Order Management App

The HotWax Commerce integration app on Shopify facilitates the connection between Shopify stores and HotWax Commerce's Omnichannel Order Management System (OMS). This integration enhances operational efficiency and enables consistent customer experiences across multiple channels.

HotWax Commerce relies on JWT (JSON Web Token) for secure API communication, ensuring a safe environment for data exchange between the Shopify store and the HotWax Commerce platform. It enables retailers to centralize order management, inventory tracking, and customer data across various channels.

**Step-by-Step Usage Instructions:**

1. **Create JWT Token:**
   - Navigate to the provided documentation link: [JWT Token Creation Guide](https://docs.hotwax.co/integration-resources/v/hotwax-commerce/api-and-data-feeds/initial-api-authentication).
   - Follow the instructions to create a JWT token using an integration user on your HotWax Commerce system.

2. **Access Shopify App Store:**
   - Log into your Shopify Shop account.

{% hint style="info" %}
HotWax Commerce App needs to be installed on all the Shopify Shops{% endhint %}

3. **Install HotWax Order Management System App:**
   - Search for `HotWax Order Management System` in the Shopify App Store or directly access it via this link: [HotWax Order Management System App](https://apps.shopify.com/hotwax-order-management).
   - Click on the `Install` button to initiate the installation process.

4. **Provide Instance Name and JWT Token:**
   - After clicking install, you'll be directed to a new page.
   - Enter the instance name ```(e.g., https://{instance-name}.hotwax.io/)``` in the designated field.
   - Paste the JWT token created previously into the appropriate field.
   - Proceed with the installation.

5. **Verify Installation:**
   - Once the installation is complete, verify that your Shopify Shop is successfully created into the HotWax Commerce Order Management System.
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

Once the Shopify Shop config is created, further editing can be performed on the [Shopify Shop](integration-mapping.md) page
