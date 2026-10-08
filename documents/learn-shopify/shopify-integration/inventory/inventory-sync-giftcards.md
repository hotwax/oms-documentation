---
description: Distinguish tracked physical gift-card stock from untracked digital gift cards before investigating Shopify inventory sync.
---

# Inventory Synchronization of Gift Cards

## Physical Gift Cards

Physical gift cards can have tracked stock that requires delivery or pickup. Confirm the product and variant identifiers, whether denominations share a physical stock pool in the approved setup, and the Shopify location mapping. Do not assume every gift-card variant has independent physical stock or that all denominations always share one SKU.

For tracked stock published by OMS, follow Shopify inventory event sync for the applicable target: channel ATP to an aggregate location or facility ATP to a mapped physical location. Inspect its source event, batch, delivery result, and Shopify quantity.

Gift-card activation and monetary value are separate from inventory publication. A successful stock adjustment does not establish that a card was activated or credited.

## Digital Gift Cards

Digital gift cards do not require physical stock. When inventory tracking is disabled on the Shopify variant, there is no tracked stock quantity to reconcile through this workflow. Verify the variant's actual tracking and fulfillment configuration rather than assuming a missing inventory event is an error.

## Verify the correct target

Open Company > `Shopify` > the connection > `Inventory sync`. Select the channel or physical-location path that matches the tracked variant's target, then inspect the event and batch separately from any reset job.

Follow [Shopify inventory event sync](inventory-sync.md) and [inventory troubleshooting](../../initial-sync/troubleshooting/inventory.md). Do not use an inbound inventory webhook or a product-type assumption as proof of outbound stock delivery.
