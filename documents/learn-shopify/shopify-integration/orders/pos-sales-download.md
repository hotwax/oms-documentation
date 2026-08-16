---
description: Learn how Shopify POS sales map into HotWax Commerce orders and inventory.
---

# POS sales download

Shopify POS sales use the standard [order download flows](order-download.md), with additional channel, ship-group, status, and inventory handling.

## POS mapping

The Shopify `sourceName` is resolved through the shop's `SHOPIFY_ORDER_SOURCE` mapping. A configured POS source maps to `POS_SALES_CHANNEL`.

Fulfilled or non-shipping lines can import as `Completed`. The bridge assigns the `POS_COMPLETED` shipment method as an output mapping for cash POS orders without a shipping address. A mixed POS order can split fulfilled and unfulfilled quantities into separate ship groups.

`POS_COMPLETED` is therefore not a Shopify input value that identifies every POS sale.

## Inventory issuance

Inventory is not deducted unconditionally merely because an order was imported from POS. For a physical line, issuance follows Shopify fulfillment consumption and requires:

- A Shopify fulfillment and location that map to an OMS facility.
- A matching OMS ship group.
- Post-launch eligibility when the completed-fallback path is used.

If a POS order is present but inventory was not issued, trace the Shopify fulfillment and location mapping before replaying the order import.
