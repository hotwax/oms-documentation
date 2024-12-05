---
description: >-
  Discover how integration with NetSuite simplifies inventory synchronization
  and management of bundles in HotWax Commerce, ensuring accurate inventory
  calculations and order fulfillment updates.
---

# Bundles

## Inventory Synchronization of Bundles from NetSuite to HotWax Commerce

Integration with NetSuite simplifies the inventory synchronization of bundles in HotWax Commerce. As NetSuite shares a daily morning feed of the inventory of products, it includes the inventory for bundles as well.

**Automatic Inventory Management of bundle**

NetSuite independently manages the inventory of bundles by considering the lowest common denominator among their components. For example: if a bundle comprises a belt and a wallet, where the belt's inventory is 7 and the wallet’s inventory is 10, the inventory of bundles aligns with the lowest available quantity, which becomes 7.

**Multi-Location Inventory Handling**

NetSuite operates similarly to HotWax Commerce in calculating the inventory of bundles across multiple locations, considering the availability of components at each location. If all bundle components are available at a single location, NetSuite considers the inventory of bundles for that specific location. For instance, imagine a bundle consisting of a belt and wallet distributed across various locations:

* Times Square Store: 5 Belts
* Brooklyn Store: 10 Wallets
* Broadway Store: 3 Belts and 7 Wallets

NetSuite calculates the inventory of a bundle by computing the lowest available quantity within a single facility. As a result, NetSuite will push an inventory of 3 to HotWax for this bundle, reflecting the available quantity of the scarcest component at one location in the bundle.

**Post-Inventory Computation Handling**

After NetSuite's inventory calculation for bundles, NetSuite synchronizes the inventory of the bundles to HotWax Commerce like [other products’ inventory](../inventory.md)

## Order Synchronization of bundles from HotWax Commerce to NetSuite

When [syncing an order](OrderAllocation.md) containing a bundle to NetSuite, only the bundle's product ID is sent. NetSuite does not require bundle component details as retailers already have bundle-component associations set up within NetSuite to simplify the import process.

## Bundle Order Fulfillment Updates from NetSuite to HotWax Commerce

When the bundle is [fulfilled from a location in NetSuite](Fulfillment.md), HotWax Commerce receives the bundle's ID in the fulfilled order feed from NetSuite. Processing this information, HotWax Commerce marks both the bundle and its components as fulfilled, ensuring accurate fulfillment status within the eCommerce system.
