# Product Set Up SOP

## Introduction
Between Shopify, HotWax, and NetSuite, products need to be synced accurately to maintain accurate inventory levels and seamless order syncs between the systems.

This document details the Standard Operating Procedure (SOP) to set up the products between the three systems.

## Shopify
1. Ensure there are no duplicate SKUs in Shopify when setting up products, irrespective of product status (i.e., draft / active status).

2. **Ensure that the products are linked with all facilities / locations in Shopify for proper inventory sync.**

3. Whenever new products are created in Shopify, the user needs to run the [Import Product job](https://job-manager.hotwax.io/product) from the Data Manager in OMS to import those products in HotWax. The job will not run automatically and should not be scheduled to run automatically.

4. The user needs to wait for at least 10 minutes for the products to be imported.

## NetSuite
1. Ensure all SKUs that are created in Shopify have a corresponding SKU in NetSuite with a valid NetSuite Internal Product (item) ID.

2. Ensure that these products have a Bin linked to all facilities / locations in NetSuite for proper inventory sync.

3. A Scheduled job in OMS imports the NetSuite internal product ID in HotWax every 6 hours.

4. Alternatively, if the sync needs to be immediate, please run the following Scripts / jobs:
    - [HC_SC_GenerateProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6432) SuiteScript from NetSuite
    - [HC_SC_UploadProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6433) SuiteScript from NetSuite
    - [Import Product Identification Job](https://job-manager.hotwax.io/product) from the Job Manager in HotWax
    - The user needs to wait for at least 10 minutes for the changes to reflect.

6. Alternatively, if the sync is only for a limited number of products, please add the Identification from the [ViewProduct Page](https://gorjana-oms.hotwax.io/commerce/control/ViewProduct?productId=14213#:~:text=0.0481%20lbs-,Identifications,-NetSuite%20Product%20Internal) for immediate effect, by following the steps:
    - Navigate to OMS -> Hamburger Menu -> PIM -> Product
    - Search for the Product using SKU in the search bar and navigate to the product page.
    - Click the '+' symbol against the Identifications section in the page
    - Select the type: 'NetSuite Product Internal ID' 
    - Enter the Description and save.

7. A Scheduled job in OMS imports the NetSuite Sales Description in HotWax every 6 hours.

8. Alternatively, if the sync needs to be immediate, please run the following Scripts / jobs:
    - [HC_SC_GenerateProdSalesDescriptionCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6489) SuiteScript from NetSuite
    - [HC_SC_UploadProdSalesDescriptionCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6490) SuiteScript from NetSuite
    - [Import NetSuite Sales Description Job](https://job-manager.hotwax.io/product) from the Job Manager in HotWax

9. Alternatively, if the sync is only for a limited number of products, please add the Identification from the [ViewProduct Page](https://gorjana-oms.hotwax.io/commerce/control/ViewProduct?productId=14213#:~:text=0.0481%20lbs-,Identifications,-NetSuite%20Product%20Internal) for immediate effect, by following the steps:
    - Navigate to OMS -> Hamburger Menu -> PIM -> Product
    - Search for the Product using SKU in the search bar and navigate to the product page.
    - Click the '+' symbol against the Identifications section in the page
    - Select the type: 'NetSuite Sales Description'
    - Enter the Description and save.

## Kit Products
Whenever a new Kit Product is set up in Shopify and is imported in HotWax, the components of the kit product are also imported. The component details are imported from NetSuite.

To do so, run the script named [HC_MR_ExportedKITProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6461) in NetSuite to export the kit products and their component details to an SFTP location.

The user needs to wait for 10 minutes or less for the details to be imported in HotWax.

## Inventory Sync
NetSuite resets inventory in HotWax every day at 1 a.m. Thereafter, HotWax syncs the inventory in Shopify at 3:00 a.m. A hard inventory reset between NetSuite and HotWax during operating hours is not recommended as it could cause inventory discrepancy. Thus, for newly set up products, inventory will be in sync between all three systems only the next day.

Moreover, the inventory for new products in Shopify will be set by HotWax only at those Shopify locations where the product is linked. Ensure SOP is followed when setting up new products.

## Breaking Variants into Independent Products
To break out a product into its own parent product, follow these steps to ensure data does not get corrupted in HotWax.

This process assumes that the end result in Shopify will be that the original variant in Shopify will continue to exist under a different archived SKU value. A new product will be set up using the actual SKU, and all inventory should be linked to this new product. New orders will only be captured for this new product in Shopify.

1. Pause the [Sync Products / Import product updates](https://job-manager.hotwax.io/product) job from the product page in Job Manager.

2. Open the parent product in HotWax Admin and open the variant that will be separated out into its own standalone product.

3. On the variant product page, scroll down to the Shopify link section and unlink the product from Shopify.

4. If there are multiple products linked to the same product in HotWax, verify if the links need to exist. If the products have been deleted in Shopify or archived, these links can be deleted too.

5. Set up the new product in Shopify under the same SKU. If the product is not set up with the same SKU, it will create a new product in HotWax.

6. Once all edits in Shopify are concluded, run “Import Products” and re-enable the “Import product updates” job.