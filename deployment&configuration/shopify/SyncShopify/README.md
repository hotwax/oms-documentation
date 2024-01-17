# Initial Product Sync

## Sync with Shopify

{% hint style="danger" %}
Before importing data from Shopify, it is crucial to have all default and custom mapping data in place for a smooth transition. Failure to do so may result in data discrepancies or errors during the import process.
{% endhint %}

### Schedule Bulk file processor

```
Execute the job of processing bulk imported files by accessing the "Process Bulk Imported Files" job, located on the Miscellaneous page within the Job Manager app.
```

### Import products

To initiate the import of products from Shopify, a crucial step before importing other data, follow these steps using the Initial Load page in the Job Manager app:

1. Visit [job-manager.hotwax.io](http://job-manager.hotwax.io).
2. Navigate to the Initial Load section.
3. Click on "Import products in bulk."
4. Choose the desired run time and initiate the import by clicking the "Run Import" button.
5. Access the Pipeline, specifically the Pending jobs section, to confirm that the job is scheduled as per the selected time. Wait until the job is completed.

Once the job finishes, proceed to the Find Product page and verify that all products have been successfully imported into the system. This step ensures a foundational dataset for inventory and order imports.

### Reconcile Product Sync

**Shopify**

* Access the Shopify admin screen.
* Append the following to the URL for product count:
  * For virtual products: `products/count.json`
  * For variants: `variants/count.json`

**Example:**

> https://admin.shopify.com/admin/{shop-name}/products/count.json https://admin.shopify.com/admin/{shop-name}/variants/count.json

**HotWax**

**To retrieve counts in HotWax, follow these structured steps in the webtools:**

1. Navigate to the web tools and access the Entity list.
2. Search for the `Product` entity.
3. Locate the `isVirtual` field in the form and set its value to `true`. This action gets the count of virtual products, visible in the results.
4. For variant product counts, use the filter `isVirtual` set to `false`.

## Linking Products with Multiple Shops

{% hint style="info" %}
Only necessary for Multi-Shopify store configurations where a common product catalog is shared. Skip if not applicable.
{% endhint %}

### Multi-Shopify Store Configuration for Product Management

In a multi-Shopify store setup, a streamlined process needs to be implemented for product synchronization. In OMS, products are imported from a designated Master Shopify store, serving as the primary catalog. Subsequently, these products can be linked with products from other Shopify stores, functioning as child catalogs that share and sell the same products. Synchronization is achieved through the use of SKU or UPC, ensuring a cohesive and unified product management experience across the entire network of associated stores.

Once the product from the master catalog is in HotWax Commerce, retailers need to associate it with child catalogs using the `Associate products with sub-catalog` job. This is a one-time action needed when initially importing all products to establish their associations, ensuring a comprehensive association between the master catalog and child catalogs. Thereafter, regular job needs to be schedule to create association whenever a new product is created in Shopify and downloaded in HotWax Commerce.

Follow these steps to schedule the job:

1. Log in to the `Job Manager` App
2. Click on the quick switcher menu positioned at the bottom left corner of the `Job Manager app` interface and select the child store for which the association needs to be created.
3. Navigate to the `Product` page and go to the job title `Associate products with sub-catalog`.
4. Click on the job title to open the job card and then select the custom parameters icon to configure the job settings.
5. Within the custom parameters modal, locate `includeAll` field and input `true` to include the products for the association.
6. In the `scheduleNow` field, insert `N` to ensure that the job runs instantaneously.
7. Save the changes to schedule and execute the job.

<figure><img src="../.gitbook/assets/Screenshot 2024-01-08 at 8.23.23 PM.png" alt=""><figcaption><p>Initial Product Association</p></figcaption></figure>

[Click here](user-manuals/job-workflows/products.md) to read about regular product association jobs.

### Verifying Associations

Associations may take some time, depending on the number of products being linked. To confirm product associations, follow these steps:

1. Log in to your HotWax Commerce user instance.
2. Go to `Import Create Shopify shop product data` page by clicking [here](https://demo-oms.hotwax.io/commerce/control/ImportData?configId=IMP\_SHPFY\_SHOP\_PROD). Change `demo-oms` with your user instance and log in to the HotWax Commerce to access the page.
3. Check that the import status reads as `finished`.
4. Further, you can go to the `Products` page and click on the preferred product to navigate to `Product Detail` page and see the associated shopify shop under `Shopify Shop Product` section.
