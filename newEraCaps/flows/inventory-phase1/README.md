---
description: >-
  Explore New Era Caps's intricate inventory management strategies, from
  real-time POS sales updates to seamless integration with HotWax Commerce.
---

# Inventory Management at New Era Caps

## In-Store Inventory
Store inventory counts from Smaregi (POS) are sent once daily to HotWax Commerce through the Flagship middleware. Flagship converts Smaregi’s output into a CSV compatible with HotWax’s Reset Inventory format. The `Reset Inventory File from SFTP` job then processes the file and updates store-level inventory in OMS.
 Note: This process applies only to retail store inventory, not warehouses.

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
HotWax supports scheduled restocks for timed product launches (e.g., flash sales or limited releases). Inventory becomes available on Shopify only at the planned release time, even if stock is already present at the fulfillment location. This ensures smooth, coordinated product drops.
