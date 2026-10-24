---
description: Learn how HotWax Commerce imports Shopify orders and synchronizes order and routing updates.
---

# Orders

HotWax Commerce imports Shopify orders and applies order updates as they move toward fulfillment. The order integration covers these workflows:

1. Import open sales orders from the launch period that HotWax Commerce will fulfill.
2. Import new orders placed after the initial download.
3. Check payment and order eligibility before approving orders for fulfillment.
4. Apply Shopify order updates, such as changes to shipping addresses, item quantities, or item details.
5. Send eligible HotWax routing decisions to Shopify and reconcile incoming location changes through [routing location sync](routing-location-sync.md).
