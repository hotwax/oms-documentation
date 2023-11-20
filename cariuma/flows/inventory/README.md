# Inventory

Inventory levels are synchronized from Cin7 to all Shopify Stores, and subsequently, HotWax Commerce mirrors this synchronization from the Cariuma US Shopify using inventory webhooks. When a product/item's inventory reaches zero in the Cariuma US Shopify Store, HotWax Commerce promptly designates the product as eligible for pre-order across all Shopify stores, including Cariuma US.

```
Job name to sync inventory from Shopify
```

Because Shopify webhooks are used for reading inventory, the "Reserve Inventory" setting in HotWax Commerce is disabled. This prevents the OMS from reserving inventory against online orders and instead inventory is entirely dependent on an external system for inventory levels.

To toggle Reserve Inventory, go to the Product Store detail page.