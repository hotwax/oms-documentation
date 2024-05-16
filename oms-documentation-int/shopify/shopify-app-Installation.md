# HotWax Commerce App installation on Shopify

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
   - Once the installation is complete, verify that your Shopify Shop is successfully integrated into the HotWax Commerce Order Management System.
   - Log in to your HotWax Commerce instance.
   - Navigate to the `Shopify` > `Shopify Shop` section from the hamburger menu.
   - Confirm that your Shopify Shop is listed on the Shopify Shop page and that all the basic details are added.

{% hint style="info" %}
Shopify Shops are initially associated with the default product store, but users can specify the correct product store during setup. Initially, Shopify Shops only have read access, so it's essential for users to adjust the access permissions to allow both read and write capabilities. This ensures accurate synchronization of all data between Shopify and HotWax Commerce. {% endhint %}


