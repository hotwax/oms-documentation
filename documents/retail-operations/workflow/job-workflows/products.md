---
description: Learn about the Products job in HotWax Commerce.
---

# Products

## Sync

### Import New Product

Job Name: `Import new products`\
Job Enum ID: `JOB_IMP_PROD_NEW`\
Service Name: `CreateProductsFromShopify`\
Flow: Importing new products from Shopify to HotWax.

**`Import new product` job is used for importing new products from Shopify to HotWax.** For maintaining the system integrity, it is important to sync new products from Shopify.

If a new product created in Shopify and its not synced in HotWax Commerce (may be because job scheduled to run after 10 mins) and if an order is created for this new product in Shopify (before the job in run) and that order is now downloaded in HotWax, then a a placeholder for this new product will be created in HotWax. Once the job runs, the actual product will be imported and replace the placeholder.

**How does HotWax import products?**\
HotWax makes an API call on Shopify to retrieve all the newly created products in Shopify between the time frame of the last job run and the current timestamp. In response to this request, Shopify provides a JSON file containing details of such products. Further, the `Import New Products` job imports this JSON into HotWax OMS and uploads it to the `IMP_SHOPIFY_PROD` MDM in HotWax. Finally, the `Process Bulk Import Files` job runs and processes the JSON file to create products in HotWax OMS.

It is important to note that the `Import New Product` job must not be scheduled while creating new products on Shopify, as it can import incomplete data and cause data corruption. So the recommendation is to pause this job and reschedule it only after all products are fully created.

**Custom Parameters**

* `frequency` is the required parameter for this job.
* It has some optional parameters.

To know more about product import refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-products-downloaded-from-shopify-to-hotwax-commerce/product-download).

***

### Import Product Updates

Job name: `Import Product Updates`\
Job Enum ID: `JOB_IMP_PROD_UPD`\
Service name: `updateProductsFromShopify`\
Flow: Import product updates from Shopify to HotWax

When a retailer updates a product in Shopify, it is important for HotWax Commerce to sync these updates. **The `Import Product Updates` job is used for importing updates on products from Shopify to HotWax.**

**How are product updates synced?**\
HotWax makes an API call on Shopify to retrieve all the products that are updated between the last job run time and the current timestamp by checking the `updated_at` field in Shopify. In response to this request, Shopify provides a JSON file that is imported into HotWax by the `Import Product Update` job. Further, the `Process Bulk Imported Files` job runs and processes the JSON to sync product updates in Shopify.

**Custom Parameters**

* `frequency` is the required parameter for this job.
* It has some optional parameters.

To know more about importing product updates refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-are-products-downloaded-from-shopify-to-hotwax-commerce/updating-product-details).

***

## Webhooks

{% hint style="info" %}
Webhooks can be subscribed to from the category pages within the Job Manager app for specific categories.
{% endhint %}

Automated messages sent from eCommerce (Shopify) to OMS whenever an event occurs. They contain data about the event and are received in OMS, allowing real time communication between eCommerce and OMS.

**Subscribe to Shopify eCommerce Webhooks from OMS for:**

<details>

<summary>Products</summary>

**Webhooks available for:**

1. New products
2. Delete products

</details>

## More Jobs

### Product HS Code Identification

Job Name:`Product HS Code Identification`\
Job Enum ID: `JOB_HS_IDENT`\
Service Name: `ftpImportFile`\
Flow: Product Setup from NetSuite

**The product HS code identification job imports Harmonized System (HS) codes from NetSuite to HotWax Commerce.** The HS code is a standardized numerical system used to classify and identify products that are traded internationally.

An ERP system (like NetSuite) provides a CSV format file containing HS codes for all the products. Which is then imported by this job into HotWax OMS. This job is used in special scenarios when the retailer is shipping products internationally.

**How are HS codes synced with HotWax?**\
Through a scheduled SuiteScript, NetSuite uploads a CSV file of HS codes for all the products to an SFTP location. From there, the `Product HS code Identification' job imports that CSV into HotWax and uploads it on` IMP\_HS\_IDENT`MDM. Further, the`Process Bulk Imported Files\` job processes the CSV to apply HS codes to products.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* It also has some optional parameters.
* This job has configId and propertyResource as the required parameters.

***

### Import Kit Component

Job Name: `Import Kit Component`\
Job Enum ID: `JOB_KIT_COMP`\
Service Name: `ftpImportFile`\
Flow: Importing Kit Product Information from ERP to OMS

When a retailer chooses not to use Shopify’s Bundles App for Kit products. Generally in such cases, ERP systems (like NetSuite) are used to manage kit products. So, HotWax needs to import kit components from NetSuite.

**`Import Kit Component` job is used for importing kit products from NetSuite to HotWax.**

**How are kit components synced?**\
When NetSuite manages the kit products, it uploads a CSV format file of kit product details to an SFTP location. From there, the `Import Kit Component` job imports the JSON in HotWax and uploads it on `IMP_KIT_COMP` MDM. Further, the `Process Bulk Imported Files` job processes the JSON to sync kit products in HotWax.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It also has some optional parameters.

To know more about kit products, refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/kitproducts).

***

### Import Promo Codes

Job Name: `Import Promo Codes`\
Job Enum ID: `JOB_IMP_PRMO_CODE`\
Service Name: `createUpdateProductPromo`

**This job is used to import promo codes from NetSuite to HotWax.**

Promo codes are those codes applied by customers while shopping to get some discounts. If an order has a discount code applied to it, during order sync to NetSuite, HotWax OMS checks if the applied code is available in NetSuite. If the code is available, then the exact code is used, and the value of the discount is shared as the "Rate.".

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It also has some optional parameters.

To know more about promo code refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/netsuite-deployment/prerequisites/promocodes).

***

### Product Identification

Job Name: `Product Identification`\
Job Enum ID: `JOB_PROD_IDENT`\
Service Name: `createUpdateProductErpId`\
Flow: Importing Product Details from ERP to OMS

**This job is used to import product IDs from ERP systems like NetSuite into HotWax OMS.** By fetching product IDs from NetSuite, it ensures proper integration and accurate product identification within HotWax OMS.

**How is the NetSuite product ID mapped?**\
A scheduled script in NetSuite retrieves the “NetSuite Product ID” for all the products in a JSON format file and uploads it to an SFTP location. From their `Product Identification` job, imports that JSON in HotWax and uploads it on `IMP_PROD_IDENT` MDM. Further, the `Process Bulk Imported Files` job runs and processes the file to map the NetSuite product ID in HotWax OMS.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It also has some optional parameters.

***

### Activate Product on Shopify

Job Name: `Activate Product on Shopify` Job Enum ID: `JOB_ACT_PROD_SHPFY` Service Name: `activateProductOnShopifyLocation` Flow: Order Fulfillment Flow

Products in HotWax are mapped to their physical facilities, and the same applies to Shopify. When a product is mapped to a facility in HotWax OMS but not in Shopify. The `Activates Product on Shopify` job identifies these products by querying the HotWax database. It then activates them on Shopify, ensuring a one-to-one mapping between products and facilities in both systems.

**Custom Parameters**

* This job has no custom parameters.

***

### Associate Product with sub catalog

Job Name: `Associate Product with sub catalog`\
Job Enum ID: `JOB_ACT_PROD_SHPFY`\
Service name: `activateProductsOnShopifyLocation`\
Flow: `HotWax to Shopify`

Retailers usually maintain a master catalog containing all their products. When selling some specific products in a particular country, they create a sub-catalog derived from the master catalog.

**The `Associate Product with Sub Catalog` job maps specific products to their respective sub-catalogs, verifying accurate product linkage within the catalog.**

**How are products mapped?**\
ERP systems (like NetSuite) generally maintain the mapping of the product and catalog. A suite script from NetSuite generates a JSON format file containing details about product mapping with the catalog and uploads it to an SFTP location. Then the `Associate Product with sub catalog` job is used to import the JSON in HotWax and upload it on `IMP_SHPFY_SHOP_PROD` MDM. Further, the `Process Bulk Import Files` job processes the file in HotWax OMS.

**Custom Parameters**

* Frequency is the required parameter for this job.
* It has some optional parameters.

***
