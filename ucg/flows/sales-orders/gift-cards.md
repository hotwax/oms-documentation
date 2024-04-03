---
description: >-
  Discover how Frank and Oak handles both physical and digital gift cards, their
  configurations in Shopify, and integration with HotWax for streamlined order
  fulfillment processes.
---

# Gift Cards

Frank and Oak has two types of gift cards, physical and digital. Currently both of these gift cards are configured with the product type “GIFT CARD” in Shopify. Usually retailers have one type of gift card and based on the type, the OMS decides if it needs to be auto completed or if it requires actual fulfillment.

If the retailer chooses to map the GIFT CARD Shopify product type to `digital` type products in the OMS, then the OMS will automatically mark gift card order items as completed as soon as they’re imported into the OMS.

To support UCG’s situation where both products are typed as GIFT CARDs, but some are digital and some are physical, all gift cards will be configured as finished goods in HotWax and the responsibility of auto fulfilling digital gift cards will rest in Shopify. When an order for a digital gift card is placed on Shopify, after the order is created, Shopify will auto fulfill the digital item before it is imported into HotWax, eliminating the need for the OMS to complete the gift card based on type. Physical gift card orders will not be auto fulfilled by Shopify so the OMS will link route them through the traditional fulfillment processes.

## Custom Amount Gift Cards

Shopify POS allows store staff to create custom amount gift cards that are not linked to any product. These order items are not linked to any product in Shopify, HotWax or NetSuite so when they’re imported into the OMS, HotWax creates a new placeholder product for them.

Orders with these custom amount gift cards will not be synced to NetSuite unless the NetSuite product ID is not manually added to each product created for every order item. Because a new place holder product is created for every order, adding the NetSuite product ID on one order does not cover every subsequent order.

The solution for this scenario is currently under discussion, until then we may want to consider a job that automatically checks for products like this and automatically adds the default NetSuite product ID to them.

Digital Gift Card SKU:

```
virtual_giftcard
```

Physical Gift Card SKU:

```
5500000-000
```
