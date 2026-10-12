---
description: Understand OMS inventory quantities and Shopify channel and physical-location event publication.
---

# Inventory

OMS consolidates inventory changes from configured sales, receipts, transfers, counts, and external systems. Confirm that each source update was processed before investigating how its result reached Shopify.

## Distinguish the quantity and target

* **Quantity on hand (QOH)** is recorded physical stock. It can differ from the quantity available for sale.
* **Facility ATP** reflects inventory available at a specific facility. The physical-location event path publishes changes to the mapped Shopify location's available inventory.
* **Channel ATP** is calculated for a channel's facility group, using its configured membership, eligibility, reservations, demand, and sourcing rules. The channel event path publishes to the channel's aggregate Shopify location.

Do not compare one store's inventory with an aggregate channel or apply one subtraction formula to every Shopify target. Use the configured calculation and matched product, facility or channel, and observation time.

For example, components split across different facilities may not form a locally fulfillable kit even when their total quantities look sufficient. See [Kit inventory synchronization](inventory-sync-kitproducts.md) for the distinct kit calculation and publication rules.

## Follow Shopify inventory event sync

Open the Company App, select `Shopify`, open the connection, then select `Inventory sync`. The monitor separates channel inventory events from physical-location inventory events. Follow the source event into its batch, review delivery, and verify the actual quantity at the matching Shopify location.

A completed inventory import or publisher job does not prove Shopify delivery. A reset and an incremental adjustment also have different meanings, especially while Shopify orders are waiting to import.

Continue with [Shopify inventory event sync](inventory-sync.md), [location mapping](location-mapping.md), and [inventory troubleshooting](../../initial-sync/troubleshooting/inventory.md).
