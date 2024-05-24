# Promotions and Discounts

When an order is created in Shopify, discounts can be applied to items or an entire order. Discounts can stem from the retailer discounting an item or the customer applying a promotion to their order using a unique code. 

NetSuite allows retailers to apply discounts on orders at both the header level and item level. Header level discounts are inserted using a combination of the Rate and Amount columns. Item level discounts, like an item being sold at 25% off, are applied using a "Discount" type item which adjusts the line value of the item preceding it.


While "cart level" discounts appear to be discounting the cart total and so should intuitively map to the header discount field in NetSuite, in reality Shopify applies the discount in a pro-rated fashion across all cart items. This means that when posting the order to another system, there is no obvious way to discern between "cart level" and "item level" discounts on an order coming from Shopify.

To maintain data integrity and traceability down stream, all discounts coming from Shopify will be pushed to NetSuite as item level discounts using the generic discount item created in NetSuite.

NetSuite Integration data for Internal ID of the NetSuite discount item:

```
<IntegrationTypeMapping integrationTypeId="NETSUITE_DISC_MTHD" mappingKey="SHOPIFY_DISC" mappingValue="SHOPIFY DISCOUNT" />  

<IntegrationTypeMapping integrationTypeId="NETSUITE_DISC_MTHD" mappingKey="SHOPIFY_ITEM_DISC" mappingValue="12637" />  
```