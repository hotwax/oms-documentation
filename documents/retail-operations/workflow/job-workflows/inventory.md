---
description: Discover how Inventory job works in HotWax Commerce.
---

# Inventory

## Adjustments

### Hard Sync

Job Name: `Upload Inventory`
Job Enum ID: `JOB_UL_INV`
Service Name: `bulkResetShopifyInventoryLevel`
Flow: Inventory Sync from HotWax to Shopify.

**The `Hard Sync` job is used to synchronize the inventory of all the products from HotWax to Shopify once a day.** This job fetches the inventory counts of all products in Shopify and compares them with the inventory counts of all products  in HotWax Commerce. Then it prepares the delta file in GraphQL format for all the products where there is a difference in inventory counts in HotWax compared to Shopify. This delta file is then sent to Shopify, and Shopify updates the inventory counts by recording deltas.

Note:  The `ShopifyFacilityGroupId` ' parameter allows retailers to not to push inventory of specific facilities included in that group.

**Custom Parameters**
- This job has no required parameters.
- It has `facilityGroupId`,`shopifyFacilityGroupId`,`includeAll`, `useVaildATP` as optional parameters.

To know more about inventory synchronization between HotWax and Shopify, refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify/inventory-synchronization#hard-sync).

<figure><img src="../../.gitbook/assets/Upload Inventory.png" alt="" width="375"><figcaption></figcaption></figure>

## Webhooks

{% hint style="info" %}
Webhooks can be subscribed to from the category pages within the Job Manager app for specific categories.
{% endhint %}

Automated messages sent from eCommerce (Shopify) to OMS whenever an event occurs. They contain data about the event and are received in OMS, allowing real time communication between eCommerce and OMS.

**Subscribe to Shopify eCommerce Webhooks from OMS for:**

<details>

<summary>Inventory</summary>

**Webhooks available for:**

**Inventory level update**\
This webhook is used to receive inventory level updates from Shopify to HotWax, especially when a retailer is not using HotWax Commerce as master of inventory availability (ATP inventory) and managing fulfillment out of HotWax.. In such cases, HotWax relies on other systems like Shopify for inventory updates. However, since Shopify webhooks may not always be reliable, it is recommended to schedule jobs.

</details>

## More Jobs

### Import Inventory

Job name: `Read Reset Inventory File From SFTP`\
Job Enum id: `JOB_IMP_INV`\
Service Name: `ftpImportFile`\
Flow: Inventory Reset in HotWax from NetSuite

**The `Import Inventory` Reset job is used for importing inventory reset files from SFTP locations uploaded by ERP systems (like NetSuite).**

**How is the reset file received?**

NetSuite runs a scheduled script and generates the CSV format file of updated inventory on each location, then uploads this file to the SFTP location. Then, the `Import Inventory Reset` job is used to import this file from the SFTP location to HotWax and upload this on `RESET_INVENTORY` MDM. Further `Process Bulk Imported Files` jobs run to process data into HotWax.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It also has some optional parameters.

***

### Import Item Receipt

Job name: `Import Item Receipt`\
Job Enum ID: `JOB_ITM_RECEIPT`\
Service Name: `ftpImportFile`

**The `Import Item Receipt` job is used for importing updates from NetSuite to HotWax on all the items that are completed in NetSuite**.

When an order is brokered to a warehouse, HotWax relies on Warehouse Management Systems (like NetSuite) to get the fulfillment update. In cases when NetSuite is also used as a WMS, it uploads a JSON format file containing details of all the items that are fulfilled from the warehouse in an SFTP location.

**How is the item receipt synced?**

After NetSuite uploads a JSON file to the SFTP location, the `Import Item Receipt` job imports the JSON into HotWax and uploads it to the `IMP_ITM_RECEIPT` MDM. Further `Process Bulk Import Files` job runs, which finally marks the item as completed in HotWax.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It also has some optional parameters.

***

### Import Product Facility

Job Name: `Import Product Facility`\
Job Enum ID: `JOB_IMP_PROD_FAC`\
Service Name: `ftpImportCSVFile`\
Flow: Applying ATP rules in HotWax.

HotWax Commerce [ATP App](https://docs.hotwax.co/documents/retail-operations/inventory/available-to-promise) allows retailers to configure rules for inventory computation based on product tags and facility types or groups, reducing manual work. Based on these rules, the available-to-promise (ATP) of a product is calculated, which is then synchronized to Shopify or other sales channels.

A job in the ATP app generates a CSV file based on rules configured for calculating ATP and puts it in the SFTP location. \*\*The `Import Product Facility` job is used to download this CSV from the SFTP location and upload it on the file system of HotWax Commerce. \*\* Further, the `Process Bulk Import Files` job runs and processes all the files in HotWax. And finally, all the rules configured from the ATP app by the retailer are created.

**It is important to note that this job is responsible for applying ATP rules configured by retailers on ATP computation.**

**Custom Parameters**
* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It also has some optional parameters.

***

### Bulk recent kit product inventory setup

Job Name: `Bulk recent kit product inventory setup`\
Job Enum ID: `BLK_RCNT_KIT_INV`\
Service Name: `bulkKitProductInventorySetup`\
Flow: Kit Product Inventory Computation

The `Bulk Recent Kit Product Inventory Setup` job calculates the inventory of the kit products in HotWax by considering the lowest common denominator among its components at a given location.

**Note**: Retailers who don't use Shopify's Bundle App for kit inventory calculation rely on this job in HotWax to compute the inventory.

**Custom Parameters**

* This job has no required parameters.
* includeAll is the optional parameter of this job.

To know more about kit inventory calculation, refer to this [document](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/kitproducts).

***

### Import Inventory Transfer

Job Name : `Import Inventory Transfer`\
Job Enum Id : `JOB_INV_TRANS`\
Service Name: `ftpImportFile`\
Flow: Importing Inventory Update from NetSuite to HotWax

Retailers with one warehouse for both B2C and B2B create two virtual locations in NetSuite: one for online orders (B2C) and one for wholesale (B2B). This helps manage inventory better. If one runs low on stock, they transfer inventory between them as needed.

In ERP systems (like NetSuite), retailers generally create inventory transfers, and these inventory transfers need to be synced from NetSuite to HotWax to maintain better inventory synchronization. `Import Inventory Transfer` job is used for importing the inventory transfers created in NetSuite to HotWax, and further inventory is adjusted in HotWax accordingly.

**How are inventory transfers are synced ?**

A scheduled script in NetSuite generates a CSV file of inventory transfers and uploads it to an SFTP location. The `Import Inventory Transfer` job in HotWax then fetches the file and uploads it to HotWax’s internal system. Finally, the `Process Bulk Imported Files` job runs to create records in HotWax.

To know more, refer to the inventory transfer [document](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/inventory).

***

### Import Inbound Shipment

Job name: `Import Inbound Shipment`\
Job Enum ID : `JOB_IMP_TO_SHPMNT`\
Service Name: ftpImportFile\
Flow: Inventory Synchronization

This job is used to create inbound shipment in HotWax so that store associates can see an upcoming inbound shipment in their [Receiving App](https://docs.hotwax.co/documents/store-operations/inventory/receiving/receiving). In case of a warehouse to store TO or store to store TO is created in NetSuite, HotWax imports it as an inbound shipment for the receiving store through this job.

**Custom Parameters**

* The recommended frequency for this job is 15 minutes.
* This job has configId and propertyResource as the required parameters.
* It also has some optional parameters.

***

### Schedule Restock

Job Name: Schedule Restock\
Job Enum ID: `JOB_SCHEDULED_RSTK`\
Service Name: `receiveAndUpdateInventoryToShopify`\
Flow: Schedule restock

Retailers often schedule new product launches and require inventory to be available for sale at specific future dates and times. For example, if a retailer plans to launch a product at 10 AM a month from now, the inventory must sync precisely at that moment.

The HotWax Commerce Import App simplifies this process by allowing retailers to schedule restocks via a CSV upload. Once uploaded, the Import App transfers the CSV to an SFTP location, and the `Schedule Restock` job imports it into HotWax database.

**Custom Parameters**

* ShipmentId is the required for this job.

***

### Sync Invnetory from Shopify

Job Name: `Sync Inventory from Shopify`
Job Enum Id : `JOB_SYNC_INV_FRM_SHPY`
Service Name: `bulkInventorySyncFromShopify`
Flow: Inventory Synchronization from Shopify

In cases where HotWax is not used as the source of truth for inventory availability—meaning retailers do not use HotWax for fulfillment and do not have an ERP system for inventory management—HotWax relies on Shopify for inventory updates. To ensure accurate inventory data, this job runs once a day to reset inventory updates for all products.

**How Does This Job Work?**
HotWax sends an API request to Shopify to fetch the latest inventory data for all products. In response, Shopify provides a JSON file, which is then uploaded to HotWax’s internal file system. After that, the `Process Bulk Imported Files` job processes the JSON file, updates the inventory, and syncs the changes in HotWax.

This job is an alternative to Shopify Webhooks, but since Shopify Webhooks are reliable, it is recommended to schedule this job in HotWax.

**Custom Parameters**
- This job does not have any required parameters
- It has some optional parameters.

***

### Upload Recent Inventory Changes

Job Name: `Upload Recent Inventroy Changes`\
Job Enum Id: `UL_RCNT_INV`\
Service Name: `bulkRecentShopifyInventroyLevel`\
Flow: Inventory Synchronization

The `Upload Recent Inventory Changes` job is used to update Shopify with the latest inventory changes for products. It functions similarly to `Hard Sync`, but instead of syncing updated inventory for all products, it only uploads changes for products whose inventory has fluctuated.&#x20;

**Custom Parameters**

* This job does not have any required parameters.
* It has some optional parameters.

To know more about uploading recent inventory changes refer to this [document](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify/inventory-synchronization#upload-recent-inventory-change).

***
