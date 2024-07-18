---
description: Learn how to address synchronization issues of pre-orderable inventory between parent and child Shopify stores using HotWax Commerce. 
---

# Multistore pre-orders sync 

Retailers operating multiple Shopify stores in different countries with the same product catalog use a parent-child relationship in HotWax, read more about it [here](https://docs.hotwax.co/documents/v/retail-operations/products/products#sync-products-to-multiple-shopify-shop). 
When pushing pre-orderable inventory to Shopify, HotWax Commerce synchronizes pre-order product information from a preorder catalog to both the parent and child Shopify stores.

## Scenerio

Sometimes, a situation arises where the pre-order on the parent store gets updated correctly, but not on other child stores. This issue could occur due to three main reasons:

1. **Product Association Job not Scheduled:** The job to create product associations between parent and child catalog is not scheduled.
2. **Product Association Timing:** Association of products in HotWax Commerce might happen after the initial synchronization of pre-order information on the Parent store. This delay can prevent updates from being properly synced across all country-specific catalogs.
3. **Inactive Sync Jobs:** Automated jobs responsible for syncing the pre-order information of Shopify stores may not be active or properly configured. This can lead to inconsistencies where updates are missed in certain Shopify shops.

### Steps to troubleshoot

**Verify Product Association with Shopify Stores. To check,**

1. Navigate to the [Pre-order Catalog](https://preorder.hotwax.io/catalog) within Hotwax Commerce.
2. Open the Audit page and examine the Shop listing status card to check the stores to which the product is currently listed. If it's not linked to the desired store, proceed with the following steps.

**The product association job might not be scheduled, which prevents products from being associated with child catalogs. To resolve this issue, follow these steps:**

1. Go to the [Job Manager app](https://job-manager.hotwax.io/) > Product page.
2. Locate the "Associate Products with Sub Catalog" job and ensure if it is scheduled and active.
3. If it is not scheduled then, configure it with the required parameters like `Schedule` , `Frequency` and `limit` then click `save changes`.
4. Once the job runs successfully, check the pre-order catalogs again.

**If changes are not reflected, the sync jobs might not be enabled. To enable them,**

1. Open the [Pre-Order Jobs](https://job-manager.hotwax.io/pre-order) Page.
2. Look for the following options and check them if they are not enabled to schedule the respective jobs:
   - **`Auto Refresh Pre-sell Catalog`:** Automatically adds and removes products from the pre-order and backorder catalogs based on inventory, purchase orders, and order queues.
   - **`Sync Variant Details` (job name: `Preorder Catalog Sync`)`:** Pushes pre-order catalog 'Ship from' and inventory policies for SKUs to eCommerce.
3. Check the pre-orders again.

**If all these jobs were scheduled but preorder information to child product stores was not synced then check if any of them failed to run. To check,**

1. Go to the [Job Pipeline page](https://job-manager.hotwax.io/pipeline) > History segment to ensure these jobs ran successfully, then check the pre-orders again.
2. In the top right corner click on the filter icon and check the `Failed` checkbox under `status` column.
3. Look for all the above jobs status.
4. If found, click on `Failed` Badge for that job to see the error message.
5. If the event message describes an issue that can't be diagnosed, communicate with HotWax Commerce for further assistance.

**If the jobs were successful but the association still fails then link the product to Shopify Store manually. To do this,**

1. Access the Find Product page: `https://[instance-prefix]-oms.hotwax.io/commerce/control/FindProduct`
2. Open the detailed page for the specific product.
3. Review the `Shopify shop product` section to identify the store with which the product is currently connected.
4. Initiate the connection by clicking the `Add` button.
5. Select the Shopify store designated as the `Shop` in OMS.
6. Input the `Shopify product ID` and `Inventory ID` (extracted from the product on the Shopify store).

**If the issue still persists then,**

Contact Hotwax Support for further assistance. Provide them with details about the issue, and steps already taken to troubleshoot.
