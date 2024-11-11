---
description: >-
  Discover the process of downloading bundle orders from Shopify to HotWax
  Commerce.
---

# Bundles Order Download

### How are Orders for Bundles Downloaded from Shopify to HotWax Commerce?

HotWax Commerce manages order downloads for bundles through two distinct jobs:

Job-1: [Import Orders:](https://docs.hotwax.co/integration-resources-1/how-are-orders-downloaded-from-shopify-to-hotwax-commerce)

This job downloads orders for product bundles alongside other open sales orders.

Job-2: Internal Bundle Product Job:

This job is specifically designed for orders with bundles. Once it finds that an order has a bundle i.e. modeled as a marketing package in HotWax Commerce, it takes the following steps to ensure fulfillment of the bundle

* HotWax Commerce creates a ship group for the bundle, and its components are also added as new order items in that ship group of the order.
* Creating a new ship group helps in disabling Split Shipment configuration for specifically this new ship group, so Split Shipment is disabled to ensure that all items of that bundle are routed to a single fulfillment location.
* When the brokering engine runs, it skips the brokering of the bundle as it does not possess any inventory, and inventory is only allocated for components.
