# Product Sync

Products are first synced from Cin7 to Shopify. HotWax Commerce syncs these products into its system from Shopify. 

Cariuma uses a multi Shopify store configuration for one Product Store. To simplify product sync from Shopify to HotWax, one Shopify store, `Cariuma US` as `Cariuma` in OMS, is selected as a product data source and other, child stores are limited to product linking. Products are linked to child catalogs using the primary product identifier set in the Product Store settings, SKUs. This process is done by job workflows which can configured from [the Job Manager app](https://docs.hotwax.co/user-guides/workflow/job-manager). 


The three child catalog Shopify stores: 
- Cariuma INT : CI_SHOP
- Cariuma EUR : CN_SHOP
- Cariuma Gifting : CG_SHOP

Job to sync products on primary catalog


- [Import new products](https://docs.hotwax.co/user-guides/workflow/job-workflows/products#import-new-products)
- [Import product updates](https://docs.hotwax.co/user-guides/workflow/job-workflows/products#import-product-updates)

Job to link catalog to child stores

- [Associate products with sub catalog](https://docs.hotwax.co/user-guides/workflow/job-workflows/products#associate-products-with-sub-catalog)


# How to Maintain an Accurate Catalog in Multiple Catalogs

## Initial Product Creation in Cariuma US Shopify Store:

1. **Create Product in Cariuma US Shopify Store:**
   - Go the `Cariuma US` Shopify store.
   - Create new products.

2. **Automatic Sync with HotWax Commerce:**
   - Wait for at least 15 minutes for the automatic sync with HotWax Commerce.
   - Product details should be automatically imported into HotWax Commerce.

3. **Manual Sync (if needed):**
   - If immediate sync is required, go to the Job Manager App.
   - Switch to the `CARIUMA` shop in the quick switcher.
   - Navigate to Products page > Sync section and run the `Import products` job by clicking the `Run now` button.

4. **Verify Product Import:**
   - Go to the Catalog page in the Pre-order app.
   - Search for the product by its SKU.
   - Open the details page and check the Shop listing status for `Cariuma` with the value `No listing data`.

{% hint style="success" %}
Products are successfully imported in OMS for `Cariuma` store. 
{% endhint %}

## Product Association with Child Catalogs:

5. **Create Products in Other Shopify Stores:**
   - After the product sync in HotWax Commerce for `Cariuma` store, create products in other Shopify stores and they will be automatically associated in OMS with other Shopify stores. 

6. **Manual Association (if needed):**
   - Once the product from the master catalog is in HotWax Commerce, associate it with child catalogs using the `Associate products with sub-catalog` job.
   - In the Job Manager app, switch to the child Shopify store.
   - Navigate to the Products job page and run the `Associate products with sub-catalog` job.

7. **Verify Association:**
   - In the Catalog page of the Pre-order app, search for the product by SKU.
   - Open the details page and verify that the shop other than `Cariuma US` shows with the value `No listing data`, indicating a successful linkage.
   - Check that the product has been associated with the master catalog.
   - You can now create synced products in the child Shopify stores.

## Cautionary Note:

8. **Avoid Unwanted Job Execution:**
   - **Do not schedule or run `Import products` and `Import Product updates` jobs for child catalogs.** Scheduling these jobs for child catalogs can lead to catalog management issues.
  