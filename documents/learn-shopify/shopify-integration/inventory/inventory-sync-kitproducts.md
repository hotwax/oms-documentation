---
description: >-
  Discover how HotWax Commerce ensures accurate inventory synchronization of Kit
  Products to Shopify.
---

# Inventory Synchronization of Kit Products

### Inventory of Kit Products and their Components in HotWax Commerce

The `Bulk Recent Kit Product Inventory Setup` job calculates the inventory of the kit products by considering the lowest common denominator among its components at a given location.

#### Example 1:

A kit product consisting of a belt and wallet distributed across multiple locations:

| **Store Location** | **Belts** | **Wallets** |
| ------------------ | --------- | ----------- |
| Times Square Store | 5         | 0           |
| Brooklyn Store     | 0         | 10          |
| Broadway Store     | 3         | 7           |

It will record an inventory of **3** in HotWax Commerce for this kit product because only the Broadway store has both belts and wallets. So, a kit product can only be fulfilled from the Broadway store. The inventory reflects the available quantity of the most limited component at a location where both components are available.

#### Example 2:

Another example of a belt and wallet distributed across multiple locations:

| **Store Location** | **Belts** | **Wallets** |
| ------------------ | --------- | ----------- |
| Times Square Store | 5         | 0           |
| Brooklyn Store     | 3         | 2           |
| Broadway Store     | 1         | 5           |

Here, Brooklyn has enough stock to make **2 kits** (2 belts and 2 wallets), and Broadway can fulfill **1 kit** (1 belt and 1 wallet).

While the total available belts and wallets across all locations might be summed up as **9 belts** (5 + 3 + 1) and **7 wallets** (2 + 5), this does not represent the actual number of kits that can be fulfilled. The correct calculation is based on the available components at each location, resulting in **3 kits**: 2 from Brooklyn and 1 from Broadway.

### Limitations of Using Bundles App

If any retailer is using the Bundles App to sell kit products and their components on Shopify, the Bundles App takes care of inventory computation. Bundles simplify kit products and their component management, but it has drawbacks when it comes to determining inventory for multi-location fulfillment.

The Bundles App aggregates the lowest inventory of each component accessible across every location to determine kit inventory. Because it ignores the need for every element of a kit to be accessible at the same place to fulfill the order, this method may lead to inaccurate inventory counts.

#### Example:

Suppose a kit product consists of a belt and a wallet, with the inventory distributed between two stores:

| **Store Location** | **Belts** | **Wallets** |
| ------------------ | --------- | ----------- |
| Brooklyn Store     | 3         | 2           |
| Broadway Store     | 1         | 5           |

In this case, the Bundles App calculates the total kit inventory as **4** by adding the total number of belts and wallets across both locations (belts: 3 + 1 = 4, wallets: 2 + 5 = 7).

However, this calculation is incorrect because the actual number of kits that can be fulfilled is only **3**:

* **Brooklyn** can fulfill **2 kits** (with 3 belts and 2 wallets).
* **Broadway** can fulfill **1 kit** (with 1 belt and 1 wallet).

The remaining items are insufficient to complete any additional kits.

### How does HotWax Commerce Synchronize the Inventory of Kit Products with Shopify?

HotWax Commerce syncs the inventory of kit products and their components just like regular products, using webhooks and the `Upload Recent Inventory Change` [job](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify/inventory-synchronization#upload-recent-inventory-change). This process is the same for kit products and their components as other products.

[Learn more about inventory synchronization.](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/how-does-hotwax-commerce-ensure-accurate-inventory-is-synchronized-to-shopify/inventory-synchronization)
