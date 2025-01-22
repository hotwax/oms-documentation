# Product Setup SOP

This document provides detailed instructions for setting up and managing products across Shopify, HotWax, and NetSuite to ensure accurate inventory levels and seamless order synchronization between the systems.

## 1. Setting Up New Products in HotWax

### Steps in NetSuite
1. Create SKUs in NetSuite with valid Internal Product (item) IDs.
2. Link products to bins in all facilities/locations for inventory synchronization.

### Steps in Shopify
1. Set up the corresponding products in Shopify and ensure no duplicate SKUs exist, regardless of product status (draft/active).
2. Link all products to all facilities/locations in Shopify to enable inventory synchronization.

### Steps to Sync Products in HotWax
1. Run the [Import Product job](https://job-manager.hotwax.io/product) manually from the Products section of the Job Manager. This imports all the products set up in Shopify.
2. NetSuite product details are synced into HotWax every 6 hours via scheduled jobs.
3. For immediate synchronization, follow these manual steps:
   - Run the [HC_SC_GenerateProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6432) SuiteScript.
   - Run the [HC_SC_UploadProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6433) SuiteScript.
   - Run the [Import Product Identification Job](https://job-manager.hotwax.io/product) job from the Products section of the Job Manager.
   - Run the [HC_SC_GenerateProdSalesDescriptionCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6489) SuiteScript.
   - Run the [HC_SC_UploadProdSalesDescriptionCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6490) SuiteScript.
   - Run the [Import NetSuite Sales Description Job](https://job-manager.hotwax.io/product) job from the Products section of the Job Manager.

4. For a limited number of products, manually add the NetSuite Internal Product ID in HotWax:
   - Navigate to **OMS → Hamburger Menu → PIM →** [Products](https://gorjana-oms.hotwax.io/commerce/control/FindProduct).
   - Search for the SKU, open the product page, and click the `+` symbol in the **Identifications** section.
   - Select "NetSuite Product Internal ID," enter the description, and save.

> **NOTE**
> - NetSuite resets inventory in HotWax daily at 1 a.m.
> - HotWax syncs inventory with Shopify at 3 a.m. (Inventory will sync only to linked locations in Shopify.)
> - Thus, invenotry for new products will be in sync between the three systems only the day after the product was set up.



## 2. Setting Up Kit Products
1. Import the components and the kit product itself by following the steps in **Setting Up New Products in HotWax**.
2. Export the kit parent-child association from NetSuite using the [HC_MR_ExportedKITProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6461) SuiteScript.
3. Wait up to 10 minutes for the kit component details to import into HotWax.


## 3. Editing Existing Products

### Syncing Changes Made in Shopify
1. Make any required changes in Shopify.
2. A scheduled job in HotWax imports product updates every hour.
3. For immediate synchronization, import the product updates using the [CreatAndUpdateShopifyProducts](https://gorjana-oms.hotwax.io/commerce/control/ShopifyJobRun?configId=SOP_CRT_UPDATE_PRODS) EXIM by following the below steps:
   - Navigate to said [EXIM](https://gorjana-oms.hotwax.io/commerce/control/ShopifyJobRun?configId=SOP_CRT_UPDATE_PRODS).
   - Enter the Shopify product IDs, separated by commas, of all the products that need to updated.
   - Click 'Run'
4. Alternatively, the user can run the **Import Product Updates** job from the Products section of the [Job Manager](https://job-manager.hotwax.io/product).

<div style=border-left: 6px solid #ffa500; padding: 10px;">
<strong>Note:</strong> Using the EXIM is recommended over running the job as running the job imports all product updates since the last run time (any sale/inventory change on a product in Shopify also counts as an update).
</div>

### Syncing Changes Made in NetSuite
1. Make the required changes in NetSuite.
2. A scheduled job in HotWax syncs these updates every 6 hours.
3. For immediate synchronization:
   - If the **NetSuite Product Sales Description** was updated:
     - Run the [HC_SC_GenerateProdSalesDescriptionCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6489) SuiteScript.
     - Run the [HC_SC_UploadProdSalesDescriptionCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6490) SuiteScript.
     - Run the [Import NetSuite Sales Description Job](https://job-manager.hotwax.io/product) job from the Products section of the Job Manager.
   - If the **NetSuite Internal ID** was updated:
     - Run the [HC_SC_GenerateProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6432) SuiteScript.
     - Run the [HC_SC_UploadProductCSV](https://4054670.app.netsuite.com/app/common/scripting/scriptrecord.nl?id=6433) SuiteScript.
     - Run the [Import Product Identification Job](https://job-manager.hotwax.io/product) job from the Products section of the Job Manager.

4. For limited products, update the details manually in HotWax:
   - Navigate to **OMS → Hamburger Menu → PIM →** [Products](https://gorjana-oms.hotwax.io/commerce/control/FindProduct).
   - Search for the SKU, open the product page, and click the `+` symbol in the **Identifications** section.
   - Select the field that needs to be updated, enter the description, and save.

## 4. Breaking Variants into Independent Products
To convert a variant into a standalone product:
1. Pause the **Sync Products/Import Product Updates** job in HotWax.
2. Open the parent product in HotWax Admin and then the variant to be separated.
3. Unlink the variant from Shopify in the **Shopify Link** section.
4. Remove any unnecessary links in HotWax for deleted/archived Shopify products.
5. Create the new product in Shopify using the same SKU as the variant.
   - If the SKU differs, a new product will be created in HotWax.
6. Once Shopify edits are complete:
   - Run the **Import Product** job in HotWax.
   - Re-enable the **Import Product Updates** job.