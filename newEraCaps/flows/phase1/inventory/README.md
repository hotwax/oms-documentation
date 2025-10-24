---
description: >-
  Explore New Era Caps's intricate inventory management strategies, from
  real-time POS sales updates to seamless integration with HotWax Commerce.
---
# Inventory

## In-Store Inventory
Store inventory counts from Smaregi (POS) are sent once daily to OMS through the Flagship middleware. Flagship converts Smaregi’s output into a CSV compatible with OMS Reset Inventory format. The `Reset Inventory File from SFTP` job then processes the file and updates store-level inventory in OMS.

**Note**: This process applies only to retail store inventory, not warehouses.

## Inventory Lifecycle
SAP acts as the system of record for inventory at New Era Caps. New receipts flow into the **wholesale bucket** in SAP and are transferred to stores as needed.

* Store on-hand is tracked in Smaregi and shared daily with OMS as a complete CSV feed.

* Throughout the day, Smaregi sends API-based variance updates (e.g., sales, damage) with reasons.

* Warehouse adjustments and launch quantities are uploaded directly into OMS through CSV imports.

This ensures OMS maintains a unified, near real-time view across both warehouse and stores. OMS then publishes location-level availability to Shopify every five minutes, ensuring customers always see accurate stock levels.

## POS Sales
Flagship middleware also updates OMS for inventory sold in stores by posting adjustments via the OMS Update Inventory API. These updates keep OMS and Shopify aligned in near real-time, preventing overselling. Additionally, OMS pushes inventory deltas to Shopify every five minutes using the `Upload Inventory Variances` job. Instead of sending the full count, this job transmits changes (+1, -1, etc.) filtered by defined reasons such as POS Sale, Cycle Count, or Damage.


## Warehouse Inventory
Since New Era Caps’ warehouse also serves B2B operations (not managed in OMS), the merchandising team manually splits B2C inventory. The B2C portion is uploaded into OMS using the Import Create Inventory Variance MDM and Update on Shopify workflow.

## Scheduled Restock
HotWax enables scheduled restocks to support timed product launches such as flash sales or limited-edition releases. Even if inventory is already available at the fulfillment location, it only becomes visible and available for sale on Shopify at the scheduled release time.
This ensures smooth, coordinated product drops across online and in-store channels, avoiding early sales and maintaining launch integrity.

[Learn more](https://docs.hotwax.co/documents/retail-operations/inventory/inventory-upload/schedule-restock#steps-to-schedule-restocking)

## Publishing Inventory Online

>Phase 2

The OMS ensures that Shopify always displays accurate, location-specific product availability. Each physical store operates as a separate POS location in Shopify, allowing customers to view real-time stock levels and choose their preferred store when placing an order. This requires the OMS to continuously update Shopify with store-level inventory data so that customers only see items that are actually available for purchase from each store.
**Note**: Inventory from Outlet Stores is not sent to Shopify, as these stores cater exclusively to walk-in customers.

To maintain accuracy, the OMS uses two complementary update processes:

- **Daily Full Update (Hard Sync)**: Once per day, the OMS performs a complete refresh of inventory across all store locations, ensuring a consistent baseline.
- **Real-Time Adjustments**: Every five minutes, the OMS pushes incremental updates for any inventory changes occurring in stores or warehouses, keeping Shopify aligned with the latest stock movements.

Together, these updates provide customers with up-to-date product availability, minimize overselling, and ensure consistent visibility between physical stores and the online channel.

## Batch Jobs for Inventory Synchronization

>Phase 2

HotWax runs a series of automated inventory synchronization jobs to keep Shopify updated with accurate, real-time stock availability across warehouse and retail store locations.

- **Upload Warehouse Inventory Variances to Shopify**: This job runs every 5 minutes and updates any changes in warehouse inventory. It includes all products, even newly launched ones, since the warehouse is eligible to fulfill all online orders from day one.

- **Upload Retail Store Inventory Variances to Shopify**: This job also runs every 5 minutes and updates store-level inventory on Shopify. However, it excludes products in the “NEW_LAUNCHED_PROD” category for the first 24 hours, ensuring that newly launched products are not made available for store fulfillment immediately after release.
  
- **Hard Sync (Full Reconciliation)**: Executed once daily, this job performs a complete reconciliation of inventory between HotWax and Shopify across all facilities. The job uses the ShopifyFacilityGroupId parameter to define which facilities are included in the sync.

[Learn more](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows/inventory#hard-sync)

## Controlled Store Fulfillment During New Product Launch
>Phase 2

For newly launched products, New Era Caps restricts store fulfillment for the first 24 hours after launch to prioritize walk-in customers.  

The OMS reads the launch date from Shopify product metafields, records it, and sets a thruDate (launch date + 24 hours) at the product’s category level. Until the thruDate is reached, these products are automatically moved to an excluded category, preventing their inventory from being pushed to Shopify for store fulfillment.  

During these 24 hours, customers can buy these products in-store, but they cannot place online orders for store shipping. The 24-hour buffer also ensures that inventory resets before store opening hours, avoiding overlap between online and in-store sales.   

For instance, if a product launches at 10:00 AM, the thruDate is set to 9:45 AM the next day, with a reset job running at 9:50 AM to restore normal syncing.  

**Note**: This restriction applies only to store inventory. Warehouse inventory continues to sync independently, ensuring product availability for online fulfillment from the warehouse.
This automated process enables controlled product launches, maintains sales channel discipline, and eliminates manual coordination.

## Manage Store Fulfillment with Product Tags
>Phase 2

To promote **store-first selling** while maintaining strong online visibility, New Era Caps follows a selective fulfillment strategy. Certain popular products remain visible for browsing on Shopify but are temporarily unavailable for **Buy Online, Pick Up In Store** (BOPIS) or **Ship From Store** (SFS).
This approach helps drive foot traffic to retail locations while still allowing customers to view and purchase products online for warehouse shipment.
### How It Works
When the Customer Support team applies the Hide-HotWax tag to a product in Shopify, HotWax Commerce automatically imports this tag and updates its internal fulfillment rules:

- Products tagged with Hide-HotWax stay visible online but are excluded from store fulfillment.
  
- Once the tag is removed, HotWax automatically re-enables store fulfillment during the next sync cycle.

This allows New Era Caps to easily control which products can be fulfilled from stores and to pause store fulfillment during special sales events or holidays when in-store availability needs to be prioritized.

### Behind the Process
1. **Tag Synchronization**  
    - Tags added in Shopify at the parent product level are automatically synced to HotWax.
    - Frequent import and update jobs ensure that any new or modified tags appear in HotWax within minutes.
    - These tags are stored as product keywords, making them accessible for fulfillment rule evaluation.

2. **Fulfillment Rules via ATP App**  
The Available to Promise (ATP) App applies fulfillment rules based on these tags:
    - A general rule enables store fulfillment for all products.
    - A specific rule identifies items tagged with Hide-HotWax and disables their store fulfillment.
    - These rules refresh daily, ensuring that store fulfillment remains disabled until the tag is removed.

This structure allows New Era Caps to quickly enable or disable SFS and BOPIS at any time — for example, during New Year promotions or other key retail events.

4. **Inventory Synchronization to Shopify**
     - **Daily Hard Sync**: Resets store inventory on Shopify. For products tagged with Hide-HotWax, inventory is set to zero across all store locations, while warehouse stock remains unaffected.
    - **Frequent Delta Syncs**: Push incremental inventory updates. Tagged products are excluded to prevent store fulfillment while ensuring warehouse availability continues updating in real time.

5. **Channel and Facility Setup**  
Facilities are grouped into two fulfillment channels — retail stores and warehouse.
By linking the tag-based rules to the retail channel, HotWax ensures that all stores are automatically affected without needing to configure each one separately. Warehouse fulfillment remains active, so customers can continue placing online orders shipped from the warehouse.

**Example**  
If the Hide-HotWax tag is applied to a product at 6:00 PM IST on January 17, 2024, HotWax disables store fulfillment during the next sync at 2:05 AM IST on January 18, 2024. At that time, the product’s store inventory in Shopify is reset to zero, making it unavailable for store pickup or store shipment, while warehouse sales remain unaffected.

This automated tagging and fulfillment control gives New Era Caps the flexibility to manage store operations strategically —promoting in-store sales when desired, ensuring consistent online visibility, and maintaining full control without manual intervention.

## Restocking Process for Returns and Cancellations in HotWax

>Phase 2

HotWax ensures that inventory remains accurate whenever an order is canceled or returned in Shopify, automatically managing restocking based on the configuration defined by New Era Caps. This prevents discrepancies between actual and available stock, helping maintain reliable product availability online.

**Business Rules**
The New Era team follows a selective restocking policy:

- All sales are final — customer-initiated returns or cancellations are not accepted.
- If the Customer Service (CS) team cancels an order, it is usually because the item cannot be fulfilled due to a lack of inventory.
- When an order is canceled or returned, the team decides whether the product should be restocked to ensure that only genuinely available items appear online.

**Automated Behavior in HotWax**
HotWax automatically adjusts inventory based on the restock preference set in Shopify at the time of cancellation or return:

- If “Restock inventory” is not selected, the OMS does not add any items back into stock.
- If “Restock inventory” is selected, OMS evaluates each item individually:
- Items marked as “Do not restock” are excluded.
- All other eligible items are added back to available inventory.

If required data is missing, HotWax safely skips the restocking step to avoid errors and logs the event for later review.

**Example Scenario**  
A customer cancels an online order for a cap.

- If the CS team marks the order with “**Restock inventory**”, OMS immediately adds that cap back to the available stock, making it visible for another shopper to purchase.
- If the item is returned damaged and marked as “**Do not restock**”, OMS ensures it stays out of sellable inventory, preventing it from being offered online again.

This automated process ensures that Shopify always reflects accurate stock availability, minimizes the risk of overselling, and keeps customers’ online shopping experience reliable. 

## Store-Fulfilled Inventory Management

>Phase 2

As orders are fulfilled from retail stores, the OMS automatically reduces the corresponding inventory in Smaregi, ensuring both systems reflect accurate stock levels in real time.
Previously, store inventory in the POS was updated only after shipments were completed, which occasionally caused discrepancies and operational delays. To improve efficiency, New Era Caps now depletes store inventory in Smaregi as soon as orders are packed, ensuring immediate alignment between physical stock and digital records.

Store fulfilled orders SFTP

```
/home/newera-uat-sftp/pos/store_fulfilled_orders/outgoing
```
<!--
---
description: >-
  Explore New Era Caps's intricate inventory management strategies, from
  real-time POS sales updates to seamless integration with HotWax Commerce.
---

# Inventory Management at New Era Caps

## In-Store Inventory
Store inventory counts from Smaregi (POS) are sent once daily to HotWax Commerce through the Flagship middleware. Flagship converts Smaregi’s output into a CSV compatible with HotWax’s Reset Inventory format. The `Reset Inventory File from SFTP` job then processes the file and updates store-level inventory in OMS.  

**Note**: This process applies only to retail store inventory, not warehouses.

## Inventory Lifecycle
SAP acts as the system of record for inventory at New Era Caps. New receipts flow into the **wholesale bucket** in SAP and are transferred to stores as needed.

* Store on-hand is tracked in Smaregi and shared daily with HotWax OMS as a complete CSV feed (Smaregi is the source of truth for store inventory).

* Throughout the day, Smaregi sends API-based variance updates (e.g., sales, damage) with reasons.

* Warehouse adjustments and launch quantities are uploaded directly into HotWax through CSV imports.


This ensures OMS maintains a unified, near real-time view across both warehouse and stores. OMS then publishes location-level availability to Shopify every five minutes, ensuring customers always see accurate stock levels.

## POS Sales
Flagship middleware also updates OMS for inventory sold in stores by posting adjustments via HotWax’s Update Inventory API. These updates keep OMS and Shopify aligned in near real-time, preventing overselling.
Additionally, OMS pushes inventory deltas to Shopify every five minutes using the Upload `Inventory Variances` job. Instead of sending the full count, this job transmits changes (+1, -1, etc.) filtered by defined reasons such as POS Sale, Cycle Count, or Damage.

## Warehouse Inventory
Since New Era Caps’ warehouse also serves B2B operations (not managed in OMS), the merchandising team manually splits B2C inventory. The B2C portion is uploaded into OMS using the Import Create Inventory Variance and Update on Shopify workflow.

## Publishing Inventory Online
HotWax ensures Shopify always reflects accurate, location-specific product availability. Each physical store has its own POS location in Shopify. Updates include:

* Daily Full Update (Hard Sync): Once a day, OMS refreshes the full inventory across all store locations.

* Real-Time Adjustments: Throughout the day, OMS pushes deltas for changes in both store and warehouse stock.

Together, these updates ensure visibility, reduce overselling, and align store and online availability.
## Batch Jobs for Inventory Sync
* **Hard Sync**: Runs daily to reconcile HotWax and Shopify inventory across facilities. Uses the `ShopifyFacilityGroupId` parameter to specify which facilities to sync. [Learn more](https://docs.hotwax.co/documents/retail-operations/workflow/job-workflows/inventory#hard-sync).

* **Upload Inventory Variances**: Runs every five minutes via Shopify GraphQL to push incremental changes since the last run, filtered by the `SHPFY_INV_DLT_REASON` parameter.

## Scheduled Restock
HotWax supports scheduled restocks for timed product launches (e.g., flash sales or limited releases). Inventory becomes available on Shopify only at the planned release time, even if stock is already present at the fulfillment location. This ensures smooth, coordinated product drops. [Learn More](https://docs.hotwax.co/documents/retail-operations/inventory/inventory-upload/schedule-restock#steps-to-schedule-restocking)
-->
