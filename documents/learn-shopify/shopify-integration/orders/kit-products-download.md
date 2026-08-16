---
description: Learn how HotWax Commerce imports and reserves Shopify kit products.
---

# Kit order download

HotWax Commerce imports orders for kit products through the standard [order download flows](order-download.md). Shopify variants configured with components map to the `MARKETING_PKG_PICK` product type; ordinary finished goods use `FINISHED_GOOD`.

The sales order keeps the kit product as its order item. When that item is reserved at a facility, HotWax Commerce also creates proportional reservations for its components at the same facility. This preserves the kit relationship during fulfillment.

The released source proves same-facility component reservation, not a separate promise that every component independently participates in routing. For product setup and synchronization, see [Download kit products](../products/download-kit-products.md).
