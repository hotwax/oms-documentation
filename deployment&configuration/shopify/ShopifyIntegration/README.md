# Setup a Shopify Configuration

{% hint style="info" %}
To link multiple Shopify stores sharing the same product catalog, create a separate Shop for each store. This approach streamlines management, ensuring synchronized updates and consistent control over the shared inventory and product information across all storefronts. 
{% endhint %}

Establish a corresponding shop in the HotWax Commerce OMS. This step ensures that the OMS is aware of and linked to your Shopify store, laying the foundation for coherent data exchange between the two platforms.

**To initiate the creation of a Shop, follow these steps:**

1. Access the OMS platform at https://{instanceName}.hotwax.io/commerce/control/main.
2. Navigate to the Hamburger Menu.
3. In the Shopify section, click on "Create Shopify Shop" to open the dedicated page for setting up a new Shopify Shop. 


Fill out your Shopify details:

| Field                | Description                                                                                               |
|----------------------|-----------------------------------------------------------------------------------------------------------|
| **Shop ID**          | The internal name of your Shopify Store. The default is `SHOP`, but change it to a unique value for multiple stores (e.g., US_SHOP, CA_SHOP).                                  |
| **Shopify Config ID**| ShopifyConfigId;  `SHOP_CONFIG` for a single store, add a unique value for multiple stores. Example: CA_SHOP_CONFIG                |
| **Shopify Config Name**| Project-specific; use the instance name along with Shopify Config (e.g. NotNaked Shopify Config).                |
| **Shop**             | The value is the shop name from the Shopify URL (e.g., hc-demo for hc-demo.myshopify.com).                  |
| **Access Token**     | Provided by the retailer or obtained during custom app setup.                                              |
| **Shared Secret**    | Provided by the retailer or obtained during custom app setup.                                              |
| **Product Store**    | Connects the Shopify store to the Product Store.                                                            |
| **WebSite**          | If the website name is changed to the Product Store name, use the same name here.                            |
