{% hint style='danger' %}
Before importing data from Shopify, it is crucial to have all default and custom mapping data in place for a smooth transition. Failure to do so may result in data discrepancies or errors during the import process.
{% endhint %}

# Import products

Before any other data can be imported into the system, products have to be synced from Shopify. Without products, inventory and orders cannot be imported into the system.

Use the Initial Load page in the Job Manager app to begin this process.

```
job-manager.hotwax.io
```

1. Go to Initial Load.

2. Click on Import products in bulk.

3. Select the run time and click on the “Run Import” button.

4. Go to Pipeline and in the Pending jobs section verify the job is scheduled as per the selected time and wait until the job finishes running.

Once this job has finished running, go to the Find Product page and verify that all products have imported.

<!-- add steps for how check for failed imports -->

After all the products are imported into HotWax cross-verify product count between HotWax and Shopify.

To find the count on Shopify append the following in the URL on the admin screen:

For the count of virtual products
```
products/count.json
```

For the count of variants
```
variants/count.json 
```
Example:

> https://{shop-name}.myshopify.com/admin/variants/count.json

To find the count in HotWax go to the find product page and in the search bar search the following:

For the count of virtual products
```
"isVirtual:true"
```

For the count of variants
```
"isVirtual:false"
```

# Kit Products

{% hint style='info' %} To seamlessly import Kit products into OMS, ensure that the Shopify Config Access Scope is set to grant both read and write access to the Shopify shop. {% endhint %}

The Bundles app checks inventory levels at 10-minute intervals, reducing inventory for kit products if individual item inventory decreases.
Kit products have no physical inventory of their own, like NetSuite, the inventory calculations are based on the lowest common denominator between all individual components.

For multi-location inventory calculations, a kit products avaialbity is determined by the lowest common denominator of the kit comopnent inventory avaiable by facility. The computed inventory of a kit product at each facility is then summed to produce the final sellable inventory number.

During allocation, brokering is run on the kit components directly which actually have physical inventory at facilities. By default splitting is disabled for kit products in an order.

{% hint style="warning" %}
**Note** HotWax does not push kit product inventory to Shopify. Kit product inventory on Shopify is computed entirely by the Bundles app.
{% endhint %}


### Install Bundles app reader in OMS

Out of the box HotWax Commerce does not come with a pre-loaded kit product integration with the Bundles app on Shopify. Before configuring Kit product data in OMS, it's crucial to install the Bundles app reader in OMS. Failure to do so may lead to missing jobs for the Bundles app. Follow the steps below for a seamless installation:

{% hint style="danger" %} The Kit Component Metafields feature in the Bundles app on Shopify must be enabled for this functionality to work.{% endhint %}

#### Step 1: Access WebTools

Go to the WebTools for your OMS instance using the provided sample link:

```
https://{instanceName}.hotwax.io/webtools/control/EntityImportReaders
```
#### Step 2: Add Kit Product Reader

In the `Enter readers` section, add the Bundles reader extension by typing `ext-bundles`.


#### Step 3: Import Configuration

Click on the "Import" button to initiate the installation process.

By following these steps, you ensure that the Bundles Reader is properly integrated into OMS, allowing for accurate and efficient data communication during import configurations.

### Map Shopify 'Kit' product types
For HotWax to recognize your products as true kit products, their product type in Shopify must be mapped to 'Marketing Package' in HotWax.
usually this is some variation of the word "Kit": `KIT`,`kit`,`Kit`.

{% hint style='danger' %}
The Shopify product time value is **case sensitive**
{% endhint %}

```
<ShopifyShopTypeMapping mappedKey="{Shopify Kit Type}" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedValue="MARKETING_PKG_PICK" shopId="SHOP"/>
```

### Jobs to sync Kit Products from Shopify

Import kit components from Shopify
```
Import kit product components
```

Enable this job for kit product associations
```
Add or Update kit product associations
```

# Link products with multiple Shops

{% hint style='info' %}
Only necessary for Multi-Shopify store configurations where a common product catalog is shared. Skip if not applicable.
{% endhint %}


## Multi-Shopify Store Configuration for Product Management

In a multi-Shopify store setup, a streamlined process needs to be implemented for product synchronization. In OMS, products are imported from a designated Master Shopify store, serving as the primary catalog. Subsequently, these products can be linked with products from other Shopify stores, functioning as child catalogs that share and sell the same products. Synchronization is achieved through the use of SKU or UPC, ensuring a cohesive and unified product management experience across the entire network of associated stores.

**Primary Catalog Sync for intial configuration:**

```
Import new products
Import product updates
```
- Purpose: Synchronize products from Primary catalog to HotWax Commerce.
- Workflow:
  - Create a product in the Primary Catalog Shopify store.
  - Allow at least 15 minutes for automatic synchronization with HotWax Commerce.

**Child Catalog Linking:**

```
Associate products with sub catalog
```
- Purpose: Link products in child catalogs to the primary catalog using SKUs/UPCs.
- Workflow:
  - Associate products with the all child catalogs in HotWax Commerce.


This process ensures maintaining accuracy across multiple catalogs. Adjustments can be made for a generic document applicable to various setups.
