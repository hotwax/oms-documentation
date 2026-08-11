---
description: Understand how shipped Shopify POS send-sale orders enter the NetSuite sales-order flow.
---

# Send-sale orders

A send-sale order is placed by a store associate for delivery to the customer's address. Although it originates from Shopify POS, it requires shipping and is not the same as an in-store completed cash sale.

## Shopify and OMS handling

HotWax Commerce imports the order through the standard Shopify [order download flows](../../../learn-shopify/shopify-integration/orders/order-download.md). The configured Shopify source mapping identifies its sales channel, while its shipping data distinguishes it from an immediately completed POS purchase.

The imported status depends on the Shopify order and line state. Do not assume that every send-sale order imports or exports specifically in `Created` status.

## NetSuite synchronization

A send-sale order follows the standard [create-order eligibility](README.md#create-order-eligibility). When its shipment method is not `POS_COMPLETED`:

- `generate_CreateOrderFeed` can include it in the ordinary NetSuite sales-order feed.
- `generate_CreateOrderFeed_pos` excludes it because that template presets `includeShipmentMethod=POS_COMPLETED`.

The released POS template does not additionally require a POS sales channel or Completed status. Shipment-method scope, identifiers, and optional configured filters determine which create-order feed can select the order.

Follow [Create sales orders and approve OMS orders](order-approval.md) for customer prerequisites, feed generation, identifier return, and approval.

## Verify a send-sale order

1. Confirm the Shopify order source and OMS sales-channel mapping.
2. Confirm the shipment method and shipping address.
3. Check the standard NetSuite customer, product, and order identifier prerequisites.
4. Find the `generate_CreateOrderFeed` Job Run and generated record.
5. Confirm the NetSuite sales-order internal ID and returned line identifiers.
6. Confirm the OMS approval and routing outcome independently.
