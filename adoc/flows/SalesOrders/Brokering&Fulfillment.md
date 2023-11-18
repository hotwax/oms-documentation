---
cover: ../../.gitbook/assets/ADOC_Fulfillment.HEIC
coverY: 0
---

# Brokering and Fulfillment

ADOC doesn’t have any warehouses so it is entirely dependent on its store network for order fulfillment. The Central American countries that ADOC operates in do not have zip codes, so instead of using numerical zip codes for distance computation and routing, the ADOC team has created their own zone mapping using their primary geo zoning system, municipios and cantons in Costa Rica.

## Brokering

Brokering is scheduled to run once every 15 minutes, which is very important since all orders are fulfilled from stores. If orders are not allocated fast enough, it can lead to that inventory being sold in stores to walk in customers and leading to a large queue of unfillable orders.

Orders are fulfilled using the HotWax’s store Fulfillment app. HotWax integrates with separate carriers for shipping labels in each country of operation. HotWax Commerce sends all orders to Retail Pro for invoicing. Fulfillment updates for all orders are pushed into Shopify once a day or at the decided frequency.

Here is a mapping of each carrier per country

| Country     | Carrier          |
| ----------- | ---------------- |
| El Salvador | C807             |
| Guatemala   | Guatex           |
| Nicaragua   | Cargo Trans      |
| Costa Rica  | Terminal Express |

Other than El Salvador, the carrier partner only provides the carrier tracking details and it is then compiled in the shipping label designed by HotWax.

The BOPIS app is also deployed in stores for fulfillment of store pickup orders. Both of these apps have also been translated into Spanish by ADOC to make them easier for their stores to use.

Reports

## Syncing fulfillment updates

Fulfillment updates are synced to Shopify and Retail Pro after full order completion. The sync waits for order completion because Retail Pro can only invoice orders from one location. In order to keep both systems in sync, HotWax only notifies both systems of fulfillment on order completion. If Shopify is notified of fulfillment before Retail Pro, it will capture payment against the customers payment method before the order has been legally invoiced in Retail Pro.
