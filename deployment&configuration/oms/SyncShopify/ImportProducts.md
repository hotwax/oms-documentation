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