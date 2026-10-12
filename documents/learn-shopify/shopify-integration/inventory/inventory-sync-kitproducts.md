---
description: Understand component-based kit quantities and their separate Shopify channel and physical-location reset feeds.
---

# Inventory Synchronization of Kit Products

## Calculate complete kits at each facility

OMS-derived kit availability depends on the effective component associations and the available component quantities at the same facility. Components split across facilities do not create a locally fulfillable kit.

For a kit requiring one belt and one wallet:

| Facility | Available belts | Available wallets | Complete kits |
| --- | --- | --- | --- |
| Store A | 5 | 0 | 0 |
| Store B | 0 | 10 | 0 |
| Store C | 3 | 7 | 3 |

The channel has three complete kits in this simplified example, all at Store C. Confirm the configured component quantities, facility eligibility, and channel rules before treating an example as the published quantity.

## Publish derived kit quantities

In the reviewed Shopify connector 4.4.2, OMS-derived kit inventory uses separate periodic reset feeds for both channel and physical-location targets. It is not a component-driven real-time kit event publisher.

| Target | Feed and publish services |
| --- | --- |
| Channel | `generate#KitInventoryChannelFeed` and `push#KitChannelInventory` |
| Physical location | `generate#KitPhysicalLocationInventoryFeed` and `push#KitPhysicalLocationInventory` |

The corresponding jobs are shop-scoped and seeded paused. Have the integration owner verify the installed jobs, component associations, mappings, target scope, and approved schedules before activation. A component's successful ordinary event batch does not prove that the derived kit quantity has refreshed.

Verify the derived quantity at the intended Shopify target after the kit reset completes. Check channel and physical-location targets separately.

## Shopify-managed bundles

Confirm whether OMS or Shopify owns the bundle calculation. Native Shopify bundles must not receive a competing OMS-derived kit quantity. Do not activate a kit reset merely because the product has component records; verify the intended ownership and eligibility first.

For ordinary inventory events, monitoring, and reconciliation, see [Shopify inventory event sync](inventory-sync.md). Keep that event path separate from the kit-specific reset feeds above.
