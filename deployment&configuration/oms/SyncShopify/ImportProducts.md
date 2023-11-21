## Schedule file processor

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

# Associate products 

{% hint style='info' %}
Only necessary for Multi-Shopify store configurations where a common product catalog is shared. Skip if not applicable.
{% endhint %}



## Multi-Shopify Store Configuration for Product Management

In a multi-Shopify store setup, a streamlined process needs to be implemented for product synchronization. In OMS, products are imported from a designated Master Shopify store, serving as the primary catalog. Subsequently, these products can be linked with products from other Shopify stores, functioning as child catalogs that share and sell the same products. Synchronization is achieved through the use of SKU or UPC, ensuring a cohesive and unified product management experience across the entire network of associated stores.

**Primary Catalog Sync for intial configuration:**

`Job Name: To be Added`
   - Purpose: Synchronize products from Primary catalog to HotWax Commerce.
   - Workflow:
     - Create a product in the Primary Catalog Shopify store.
     - Allow at least 15 minutes for automatic synchronization with HotWax Commerce.

**Child Catalog Linking:**

`Job Name: To be Added`
   - Purpose: Link products in child catalogs to the primary catalog using SKUs/UPCs.
   - Workflow:
     - Associate products with the all child catalogs in HotWax Commerce.


This process ensures maintaining accuracy across multiple catalogs. Adjustments can be made for a generic document applicable to various setups.
