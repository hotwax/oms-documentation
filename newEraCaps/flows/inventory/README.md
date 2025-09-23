---
description: >-
  Explore New Era Caps's intricate inventory management strategies, from
  real-time POS sales updates to seamless integration with HotWax Commerce.
---

# Inventory

## In Store Inventory

The Flagship middleware sends store inventory counts for products at retail locations to HotWax Commerce in a file-based integration once a day. The Flagship middleware is responsible for converting the inventory file produced by Smaregi into a CSV format that is compatible with the native OMS Reset Inventory format.  

(It is important to note that the reset file provided by this system is only for retail stores, and it does not update inventory for warehouse location.)  

**Reset Inventory SFTP location**:  
```
/home/newera-uat-sftp/pos/morning_inventory_sync/staging/incoming
```
The `Read Reset File from SFTP` job in the Job Manager App is used to process the reset file in OMS, and thereby update store inventory in OMS.

### POS Sales

The Flagship middleware is also responsible for posting inventory adjustments into the OMS to account for POS sales orders recorded in Smaregi. For this, Flagship uses the OMS’s [Update Inventory](https://docs.hotwax.co/documents/integrate-with-hotwax/hotwax-commerce-api-and-data-feeds/inventory/update-inventory) REST API endpoint to update inventory sold by POS sales. This approach allows them to post updates in near real time, helping maintain store inventory accuracy in the OMS, and by extension in Shopify, to avoid overselling online.  

Further, OMS updates the inventory variances in Shopify through the `Upload Inventory Variances` job, which is scheduled every 5 minutes to keep both systems in sync. This job sends inventory deltas (for example, +1 or -1) rather than the full updated inventory. It also excludes products that belong to the `NEW_LAUNCHED_PROD` category.  

```
https://<host>/api/service/updateInventoryByIdentification
```

{% hint style="info" %}
**API Docs** for the [Update Invetory API](\[udpateInvAPI]\(https:/github.com/hotwax/oms-documentation/blob/oms1.0/Inventory/Update%20Inventory.md\)) are a great place to learn more about how to use this API.
{% endhint %}

### Store fulfilled inventory

As order items are fulfilled from stores, the OMS reduces inventory in Smaregi that was used for store fulfillment. Traditionally the OMS would feed a list of shipped orders to the POS to ensure that it can maintain an accurate count of inventory in its system. New Era Caps found that this duration could actually be too long and cause retail operational issues and instead will depleted inventory in Smaregi POS as soon as orders are packed.

**Packed order rejection**

Once an order is packed by a store representative, New Era Caps will not allow the order to be unlocked, hence preventing any rejection and enabling them to accurately deplete store inventory at that time.

Store fulfilled orders SFTP

```
/home/newera-uat-sftp/pos/store_fulfilled_orders/outgoing
```

## Warehouse Inventory

New Era Caps uses a manual inventory upload procedure because their warehouse services also services their B2B business which does not flow through the OMS. The merchandising team manually splits inventory between the two channels and then uploads the inventory allotted to B2C sales manually into the OMS, through `IMP_INV_VAR_SHOPIFY` MDM.

## Posting inventory online

HotWax pushes available inventory levels to Shopify. Because New Era Caps does not use Shopify POS in Japan, HotWax will map store inventory to store facilities in Shopify since now they have had POS locations established on Shopify.

All stores that participate in online sales will post their inventory to the consolidated inventory location on Shopify. During the add to cart experience New Era Caps will add a soft allocation to the order items that the customer has selected to have shipped from store to their house at a higher shipping fee.

{% content-ref url="../salesOrder/omnichannelOrders.md" %}
[omnichannelOrders.md](../salesOrder/omnichannelOrders.md)
{% endcontent-ref %}


### Jobs responsible to push inventory to shopify

  1. **Hard Sync**
  The `Hard Sync` job is used to synchronize the inventory of all the products from HotWax to Shopify once a day. It compares inventory counts between Shopify and HotWax Commerce, generates a delta file in GraphQL format for any differences, and sends it to Shopify, which updates the counts by recording those deltas.  
  
  **Note:** The `ShopifyFacilityGroupId` parameter in this job can be used to exclude inventory from specific facilities in that group.
    
    Click [here](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows/inventory#hard-sync) to know more about Hard Sync job.

  2.  **Upload Inventory Variances**
  
  The Upload Inventory Variances job pushes inventory deltas to Shopify every 5 minutes. It only sends updates for specific reasons such as POS Sale, Cycle Count, Damage, and others that are included in the `SHPFY_INV_DLT_REASON` enumeration group. This group is passed as a parameter in the job to ensure that only variances with those reasons are pushed.

## Scheduled Restock

HotWax will offer an option to allow retailers to schedule an inventory restock for products. Scheduled restocks are used by retailers when they have hyped products which are released at exact points of day and time, and for unique and limited inventory products, customers or even bots will have the merchants website and loaded up ready to purchase the new release product before it goes out of stock. Even though inventory has arrived physically at the fulfillment locations,

Click [here](https://docs.hotwax.co/documents/retail-operations/inventory/inventory-upload/schedule-restock) to know more about scheduled restock.
