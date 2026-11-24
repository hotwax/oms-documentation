---
description: >-
  Understand the product, inventory, order, routing, and fulfillment flows
  between HotWax Commerce and Shopify.
---

# Shopify integration reference

Use this manual to understand and operate the flows between Shopify and HotWax Commerce. For initial implementation, follow [Set up HotWax Commerce with Shopify](../system-admin/administration/company/product-store-onboarding.md).

## Choose the integration flow

Each flow has its own direction, configuration, and completion checks.

| Flow | Direction | What it synchronizes |
| --- | --- | --- |
| [Product sync](shopify-integration/products/download-products.md) | Shopify to HotWax Commerce | Products, variants, supported field updates, and Shopify identifiers used for order and inventory mapping |
| [Starting inventory](shopify-integration/inventory/import-inventory-from-shopify.md) | Shopify to HotWax Commerce | Physical on-hand quantities for mapped products and facilities during onboarding |
| [Inventory publication](shopify-integration/inventory/inventory-sync.md) | HotWax Commerce to Shopify | Available inventory for mapped physical locations and aggregate inventory channels |
| [Order download](shopify-integration/orders/README.md) | Shopify to HotWax Commerce | Eligible orders and subsequent order updates |
| [Routing location sync](shopify-integration/orders/routing-location-sync.md) | HotWax Commerce to Shopify | Location assignments for eligible unfulfilled line quantities after routing |
| [Order fulfillment](shopify-integration/order-fulfillment/README.md) | HotWax Commerce to Shopify | Shipped quantities and tracking information |

Product import establishes catalog records and mappings. Importing Shopify inventory is a separate stock operation. After launch, HotWax Commerce can combine inventory inputs from the retailer's systems to calculate the availability published to Shopify.

Routing location sync lets Shopify reflect a HotWax routing decision before shipment. Incoming Shopify location changes use a separate opt-in setting. Review both directions in the routing guide before enabling reconciliation.

## Verify the result in each system

Follow a request through its export or submission, result processing, and final records. A completed export or consumed message does not always mean the corresponding product, inventory, or order update finished.

Use the linked flow's verification and recovery steps to check the selected shop, record identifiers, quantities, and locations. Job availability, schedules, and enabled features depend on the installed connector and the shop's configuration.
