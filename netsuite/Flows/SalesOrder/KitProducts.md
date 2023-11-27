# Bundles

## Inventory Synchronization of Bundles from Netsuite to HotWax Commerce

Integration with Netsuite simplifies the inventory synchronization of Bundles in HotWax Commerce. As Netsuite shares a daily morning feed of the inventory of products, it includes the inventory for bundles as well. 

**Automatic Inventory Management of bundle**

Netsuite independently manages the Inventory of Bundles by considering the lowest common denominator among their components. For example:
if a bundle comprises a belt and a wallet, where the belt's inventory is 7 and the wallet’s inventory is 10, the inventory of bundles aligns with the lowest available quantity, which becomes 7.

**Multi-Location Inventory Handling**

Netsuite operates similarly to HotWax Commerce in calculating the Inventory of Bundles across multiple locations, considering the availability of components at each location. If all bundle components are available at a single location, Netsuite considers the Inventory of Bundles for that specific location.
For instance, imagine a bundle consisting of a belt and wallet distributed across various locations:

- Times Square Store: 5 Belts
- Brooklyn Store: 10 Wallets
- Broadway Store: 3 Belts and 7 Wallets

Netsuite calculates the inventory of a bundle by computing the lowest available quantity within a single facility. As a result, Netsuite will push an inventory of 3 to HotWax for this bundle, reflecting the available quantity of the scarcest component at one location in the bundle.

**Post-Inventory Computation Handling**

After Netsuite's inventory calculation for bundles, Netsuite synchronizes the inventory of the bundles to HotWax Commerce like [other products’ inventory](https://docs.hotwax.co/integration-resources-1/v/netsuite-integration/supported-integrations/inventory).

## Order Synchronization of bundles from HotWax Commerce to Netsuite

When [syncing an order](https://docs.hotwax.co/integration-resources-1/v/netsuite-integration/supported-integrations/salesorder/orderallocation) containing a bundle to Netsuite, only the bundle's product ID is sent. Netsuite does not require bundle component details as retailers already have bundle-component associations set up within Netsuite to simplify the import process.

## Bundle Order Fulfillment Updates from Netsuite to HotWax Commerce

When the bundle is [fulfilled from a location in NetSuite](https://docs.hotwax.co/integration-resources-1/v/netsuite-integration/supported-integrations/salesorder/fulfillment), HotWax Commerce receives the bundle's ID in the fulfilled order feed from Netsuite. Processing this information, HotWax Commerce marks both the bundle and its components as fulfilled, ensuring accurate fulfillment status within the eCommerce system.
