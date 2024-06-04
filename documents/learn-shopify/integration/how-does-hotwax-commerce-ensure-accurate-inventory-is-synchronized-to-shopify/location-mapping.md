---
description: >-
  Easily configure locations in HotWax Commerce and Shopify with our
  step-by-step guide to streamline inventory management.
---

# Location Mapping

### How To Set Up Locations In HotWax Commerce And Shopify

HotWax Commerce sets up all retail stores and warehouses as Locations. For retailers using Shopify eCommerce and third-party Point of Sale systems, only one Location is created on Shopify. This Location aggregates the inventory counts of all products available for sale on Shopify.

For retailers using Shopify POS in both retail stores and eCommerce, multiple Locations are created on Shopify. One Location is created for the eCommerce store, while each physical store also has its own Location on Shopify. The Location for the eCommerce store aggregates inventory counts for all products from all Locations. Each retail store Location on Shopify has inventory counts specific to that location.

**Set up with Non-Shopify POS**

When syncing inventory data between HotWax Commerce and Shopify, HotWax Commerce combines inventory counts from all storage locations (such as stores and warehouses) and sends the total inventory count of products to the default location in Shopify.

<figure><img src="../../.gitbook/assets/12.png" alt=""><figcaption><p><em>Fig. 1: Shopify and HotWax Commerce setup with Non-Shopify POS</em></p></figcaption></figure>

**Set up with Shopify POS**

Shopify's locations are mapped one-to-one with HotWax Commerce's locations. HotWax Commerce sends the sellable inventory to Shopify, captures orders from Shopify, routes them to fulfillment location, and updates order statuses to Shopify once they are fulfilled. When HotWax Commerce is used, its recommended to disable “online order fulfillment from store locations” on Shopify.

Periodic synchronization of inventory counts for all products at both the default location and store locations occurs from HotWax Commerce to Shopify.

<figure><img src="../../.gitbook/assets/13.png" alt=""><figcaption><p><em>Fig. 2 : Shopify and HotWax Commerce setup with Shopify POS</em></p></figcaption></figure>
