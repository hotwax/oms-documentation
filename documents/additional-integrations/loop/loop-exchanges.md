---
description: >-
  Learn how HotWax Commerce makes exchanges simple and efficient.
---

# Exchanges

An exchange refers to a transaction in which a customer returns a purchased item and, instead of receiving a refund or store credit, opts to swap the returned item for a different product.

## Data Flow

### Synchronize Web Exchanges to HotWax Commerce

Exchange orders that are created in Shopify are imported into HotWax Commerce just like regular sales orders. Given that exchanges are created by Loop in Shopify, they are assigned the sales channel `Loop Exchange` within Shopify. Additionally, these exchange orders have a discount code labeled `loop-discount` applied to them.

Consequently, all exchange orders imported from Shopify into HotWax Commerce have a `Loop Exchange` sales channel as well as the discount code labeled `loop-discount` applied to them.

#### Linking New Exchange Orders with the Original Order

When a customer exchanges an item for another, references to the original order stored in Shopify notes are saved in HotWax Commerce as a `communication event`. This helps ensure that the continuity of the transaction is maintained and accurately tracked.

The downloaded exchange orders are then brokered to the optimal fulfillment locations by HotWax Commerce.

These exchange orders are also synchronized to NetSuite for further processing. Learn more about [synchronization of exchange orders from HotWax Commerce to NetSuite ERP.](https://docs.hotwax.co/documents/v/learn-netsuite/integration-flows/exchanges#README)

### Synchronize POS Exchanges to HotWax Commerce

POS exchange sales are similar to other POS sales as both the transactions recorded in Shopify POS. POS exchange sales created in Shopify POS are imported into HotWax Commerce just like regular POS sales.

Given that POS exchanges are created in Loop POS and synced by Loop to Shopify, they are assigned the sales channel `Loop Exchange` within Shopify. Consequently, all POS exchanges imported into HotWax Commerce have a `Loop Exchange` sales channel as well.

When POS sales are downloaded in HotWax Commerce, POS sales have a `Completed` status, the sales channel is set to `POS_Channel`, and shipping method is set to `POS_COMPLETED`. While, in the case of POS exchange sales, although they also have a `Completed` status, their sales channel is `Loop Exchange.`

#### Linking New Exchange Orders with the Original Order

Similar to web exchanges, in case POS exchanges references to the original order stored in Shopify notes are also saved in HotWax Commerce as a `communication event`.

These POS exchange sales are also synchronized to NetSuite for further processing. Learn more about [synchronization of POS exchange sales from HotWax Commerce to NetSuite ERP.](https://docs.hotwax.co/documents/v/learn-netsuite/integration-flows/exchanges#README)