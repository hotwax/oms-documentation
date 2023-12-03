# Sync with Shopify

## Schedule Bulk file processor
```
Execute the job of processing bulk imported files by accessing the "Process Bulk Imported Files" job, located on the Miscellaneous page within the Job Manager app.
```
## Import products

To initiate the import of products from Shopify, a crucial step before importing other data, follow these steps using the Initial Load page in the Job Manager app:

1. Visit [job-manager.hotwax.io](http://job-manager.hotwax.io).
2. Navigate to the Initial Load section.
3. Click on "Import products in bulk."
4. Choose the desired run time and initiate the import by clicking the "Run Import" button.
5. Access the Pipeline, specifically the Pending jobs section, to confirm that the job is scheduled as per the selected time. Wait until the job is completed.

Once the job finishes, proceed to the Find Product page and verify that all products have been successfully imported into the system. This step ensures a foundational dataset for inventory and order imports.

## Reconcile Product Sync

#### Shopify
- Access the Shopify admin screen.
- Append the following to the URL for product count:
  - For virtual products: `products/count.json`
  - For variants: `variants/count.json`

**Example:**
> https://admin.shopify.com/admin/{shop-name}/products/count.json
> https://admin.shopify.com/admin/{shop-name}/variants/count.json

#### HotWax 

**To retrieve counts in HotWax, follow these structured steps in the webtools:**

1. Navigate to the web tools and access the Entity list.
2. Search for the `Product` entity.
3. Locate the `isVirtual` field in the form and set its value to `true`. This action gets the count of virtual products, visible in the results.
4. For variant product counts, use the filter `isVirtual` set to `false`.
   
