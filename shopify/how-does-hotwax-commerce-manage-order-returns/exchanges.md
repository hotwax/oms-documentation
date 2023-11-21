# Exchanges

### How Does HotWax Commerce Handle Exchanges?

Retailers have the flexibility to create exchanges both in-store and on Shopify. In HotWax Commerce, exchanges are recognized during the process of importing refunds from Shopify when the order information includes the user ID and order line item details but lacks the transaction amount.

Exchanges can fall into two main scenarios:

**Exchange of Same-Value Order Item:** In cases where the exchanged item has the same value as the original purchase, the initial order is marked as returned on Shopify. Simultaneously, another Order Item with a sales total of 0 is created in Shopify. This new order is downloaded in HotWax Commerce for fulfilment.

**Exchange with Different-Value Order Item:** When the exchanged item differs in value from the original purchase, a store associate or CSR team creates a gift card with a value matching the original item. Then, another order is generated, and the gift card is used as the preferred payment method. For items with a lower value, the customer can utilise the remaining balance for additional purchases. Conversely, for items with a higher value, customers can pay the difference using their preferred payment method.
