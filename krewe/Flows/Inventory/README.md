---
description: >-
  Explore Krewe's inventory management process, leveraging HotWax's Unified
  Inventory capabilities for seamless flow from NetSuite to Shopify.
---

# Inventory

## Sync Inventory

The overall flow of inventory in Krewe is from NetSuite to HotWax and then to Shopify. With HotWax in the middle Krewe is able to take advantage of HotWax's Unified Inventory capabities. There are some exception cases that are coverd in more detail in this and other linked documents.

> [!WARNING]
 When adding a new facility in HotWax, it is required that the NetSuite location ID for the newly added facility is added into the `Export Inventory Item` saved search on Netsuite to synchronize inventory data for that location from NetSuite to HotWax.

### Kit Products

Krewe is using the Bundles app on Shopify to create and manage Kit Products. HotWax Commerce is pre-integrated with the kit component metafields capabilities of the app.

{% content-ref url="KitProducts.md" %}
[KitProducts.md](KitProducts.md)
{% endcontent-ref %}

### Inventory Count Variance

The inventory cycle count app is used to update inventory counts and log variances for products. HotWax Commerce syncs these variances to Netsuite in batch processes.

### Purchase Order

Purchase orders are created in NetSuite by Krewe. Purchase Orders that are "Pending Receipts" are imported into HotWax. Stores then use the HotWax Receiving app to receive them.

Received purchase orders are exported to NetSuite. In case of over receiving/under receiving HotWax Commerce will receive the actual shipment at the designated store, which includes the over and under received quantities. A report will be sent from HotWax Commerce to Krewe Operations teams with receipts where the expected and accepted quantities do not match. This report will enable Krewe to make the necessary adjustments within the source and destination locations manually.
