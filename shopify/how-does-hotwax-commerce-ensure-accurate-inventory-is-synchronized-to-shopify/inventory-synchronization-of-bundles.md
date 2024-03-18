---
description: >-
  Discover how HotWax Commerce ensures precise inventory synchronization of
  bundles to Shopify.
---

# Inventory Synchronization of Bundles

### How does HotWax Commerce Ensure Accurate Inventory of Bundle is Synchronized to Shopify?

In HotWax Commerce, components of bundles are associated with a parent product defined as a marketing package. This package, being a virtual product, doesn't have its own inventory. As a result, HotWax Commerce doesn't synchronize inventory data for this product.

**Inventory Calculation with Bundles App**

The Bundles app computes inventory based on the lowest available quantity among all individual components. For instance, if a bundle consists of a Belt and a Wallet:

* Belt's inventory: 7
* Wallet's inventory: 10

The bundled product's inventory becomes 7, as it matches the lowest quantity available.

**Inventory Updates and Frequency**

HotWax Commerce synchronizes the inventory of components as regular products using the '[Upload recent inventory change](https://docs.hotwax.co/integration-resources-1/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify)' job. The Bundles app checks for inventory changes every 10 minutes and computes the bundle's inventory.

For instance, if a customer buys a belt and its inventory reduces to 6, the Bundles app also decreases the inventory of the bundled product.

**Inventory Calculation without Bundles App**

In the absence of the Bundles app, HotWax Commerce can also calculate inventory for bundles by considering the lowest available quantity among all components.

For multi-location inventory, availability and levels of each component at every location are considered. Only when all products are available at a specific facility, the bundle’s inventory for that facility is counted.

Example of Multi-Location Inventory:

Let's consider a bundle with Belts and Wallets as its components across different locations:

* Times Square Store: 5 Belts
* Brooklyn Store: 10 Wallets
* Broadway Store: 3 Belts and 7 Wallets

HotWax Commerce ensures precise inventory management by calculating the inventory based on the lowest available quantity at a single facility. In this example, it would push an inventory of 3 to Shopify for this bundle, representing the available quantity of the scarcest component among all locations in the bundle.

\\
