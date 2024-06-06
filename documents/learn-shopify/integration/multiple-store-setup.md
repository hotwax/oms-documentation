# Product Synchronization for Multiple Shopify Stores

HotWax Commerce streamlines product synchronization from Shopify by selecting one Shopify store as the primary data source. If a client utilizes a multi-store configuration within Shopify for a single brand, the process involves designating one Shopify store for product data sourcing while the other child stores are restricted to product linking. Product linking occurs through the utilization of the primary product identifier established in the Product Store settings, such as `SKU` or `UPCA`. This synchronization process is facilitated by customizable job workflows, which can be configured using the `Job Manager App`.

Initially, products are synced into the primary catalog through the following job workflows:

[Import Products in Bulk](how-are-products-downloaded-from-shopify-to-hotwax-commerce/product-download.md) (For initial Import)
[Import New Products](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-workflows/products) (For regular import)

Subsequently, the primary catalog is linked to the child stores using the following job workflow:
[Associate Products with Sub-catalogs](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-workflows/products#associate-products-with-sub-catalog)

## How to Maintain Accurate Catalog for Multiple Shopify Stores

### Initial Product Creation in Shopify Store:

**Create Product in Shopify Store:**
   - Go to your store on `Shopify``
   - Create new products on Shopify.

**Automatic Sync with HotWax Commerce:**
   - Wait for at least 15 minutes for the automatic sync with HotWax Commerce, if the `Import new products` job is scheduled.

**Manual Sync (if needed):**
   - If immediate sync is required, go to the `Job Manager App`.
   - Switch to the desired Shopify shop in the quick switcher from the left bottom.
   - Navigate to the `Products` page > Sync section and run the `Import New Products` job by clicking the `Run Now` button.

**Verify Product Import:**
   - Navigate to the `PIM` > `Products` page from the Hamburger Menu.
   - Search for the product by its SKU.
   - Open the details page by clicking on the product.
   - Verify product details are the same as the details added on Shopify.

Products are successfully imported in OMS from the Shopify store.

### Product Association with Child Catalogs

**Create Products in Other Shopify Stores:**

- After the product sync in HotWax Commerce for the primary store, create products in other Shopify stores and they will be automatically associated in OMS with other Shopify stores with the `Associate Products with Sub-catalogs` job.

**Verify Association:**
- Navigate to the `PIM` > `Products` page from the Hamburger Menu.
- Search for the product by its SKU.
- Open the details page by clicking on the product.
- Verify Shopify Shop associations from the `Shopify Shop Product` section.

**Manual Association (if needed):**

In case, there is any failed association or incorrect association created you can manually manage the Shopify shop association through the following steps:
  - Open the `Product Detail` page by searching for the product SKU.
  - Navigate to the `Shopify Shop Product` section.
  - Click on `Add` to associate the product with another Shopify Shop by choosing the `Shopify Shop` where you want to associate the product and enter the `Product ID` from the specific Shopify shop.
  - You can also delete associations by clicking on the `delete` icon in the last column of the association table.


{% hint style="warning" %}
Do not schedule or run `Import products` and `Import Product updates` jobs for child catalogs. Scheduling these jobs for child catalogs can lead to catalog management issues.{% endhint %}