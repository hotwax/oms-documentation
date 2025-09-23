---
description: >-
  Explore New Era Caps's intricate inventory management strategies, from
  real-time POS sales updates to seamless integration with HotWax Commerce.
---

# Inventory
## In Store Inventory

The Flagship middleware sends store inventory counts for products at retail locations to HotWax Commerce in a file-based integration once a day. The Flagship middleware is responsible for converting the inventory file produced by Smaregi into a CSV format that is compatible with the native OMS Reset Inventory format.  

(It is important to note that the reset file provided by this system is only for retail stores, and it does not update inventory for warehouse location.)  

Reset Inventory SFTP location:

```  
/home/newera-uat-sftp/pos/morning_inventory_sync/staging/incoming
```
The `Read Reset File from SFTP` job in the Job Manager App is used to process the reset file in OMS, and thereby update store inventory in OMS.

## POS Sales

The Flagship middleware is also responsible for posting inventory adjustments into the OMS to account for POS sales orders recorded in Smaregi. For this for Flagship uses the OMS’s [Update Inventory](https://docs.hotwax.co/documents/integrate-with-hotwax/hotwax-commerce-api-and-data-feeds/inventory/update-inventory) REST API endpoint to update inventory sold by POS sales. This approach allows them to post updates in near real time, helping maintain store inventory accuracy in the OMS, and by extension in Shopify, to avoid overselling online.  

Further, OMS updates the inventory variances in Shopify through the `Upload Inventory Variances` job, which is scheduled every 5 minutes to keep both systems in sync. This job sends inventory deltas (for example, +1 or -1) rather than the full updated inventory.  


## Warehouse Inventory

New Era Caps uses a manual inventory upload procedure because their warehouse services also services their B2B business which does not flow through the OMS. The merchandising team manually splits inventory between the two channels and then uploads the inventory allotted to B2C sales manually into the OMS, through `Import Create Inventory Variance and Update on shopify` MDM.

## Posting Inventory Online
HotWax ensures that the product availability shown on Shopify always matches the actual inventory in the OMS. For NEC, inventory is managed store by store—each physical store has its own POS location in Shopify. HotWax keeps these store-level inventories in sync so that the availability customers see online reflects what’s actually in each store.
To achieve this, two types of updates are carried out:
Daily Full Update: Once a day, HotWax refreshes the entire inventory across all store locations. This provides Shopify with a complete and consistent view of products available in stores (excluding the warehouse).
Real-Time Adjustments: Throughout the day, HotWax also pushes deltas whenever inventory changes are recorded in the OMS. These updates cover both store and warehouse stock, ensuring Shopify reflects the most current availability.
Together, these updates ensure customers always see accurate stock levels, reduce the risk of overselling, and give store teams reliable visibility into product availability.

## Jobs used to Push Inventory to Shopify

1. Hard Sync
The `Hard Sync` job is used to synchronize the inventory of all the products from HotWax to Shopify once a day. It compares inventory counts between Shopify and HotWax Commerce, generates a delta file in GraphQL format for any differences, and sends it to Shopify, which updates the counts by recording those deltas.  

**Note:** The `ShopifyFacilityGroupId` parameter in this job can be used to suppress inventory updates for facilities in this group, ensuring their inventory is not pushed to Shopify.  

Click [here](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows/inventory#hard-sync) to know more about Hard Sync job.


2.  Upload Inventory Variances
The Upload Inventory Variances job sends inventory adjustments to Shopify every 5 minutes using Shopify GraphQL. During each run, it captures changes that occurred since the last execution and pushes only selected event types such as POS Sale, Cycle Count, and Damage. These reasons are defined in the `SHPFY_INV_DLT_REASON` group, which is passed as a job parameter to determine which variances are pushed.  

## Scheduled Restock

HotWax offers an option that allows New Era Caps to schedule inventory restocks for products.  
Scheduled restocks are especially useful during flash sales or when hyped products are launched at a specific time. This is also applied for unique or limited inventory releases, where customers are ready to purchase the product the moment it becomes available.  
This ensures that inventory is made available on the website only at the planned release time, even if the stock has already arrived physically at the fulfillment locations.  

Click [here](https://docs.hotwax.co/documents/retail-operations/inventory/inventory-upload/schedule-restock) to know more about scheduled restock.

