---
description: >-
  Added a new inventory sync job that pushes inventory variances to each
  location on Shopify, rather than resetting the inventory.
---

# Improved Inventory Sync for Locations on Shopify

<figure><img src="https://www.hotwax.co/hubfs/Improved%20Inventory%20Sync%20for%20Locations%20on%20Shopify.png" alt=""><figcaption></figcaption></figure>

Maintaining accurate inventory levels is vital for retailers to prevent issues like overselling and underselling. HotWax Commerce updates the online ATP on Shopify. Previously the inventory was reset for all the products that have inventory changes logged in HotWax Commerce in the last 15 minutes through the “Hard Reset Inventory” job. Generally, orders are synced from Shopify to HotWax Commerce every 15 minutes. In some cases, if a product is sold too fast on Shopify and orders are not yet downloaded in HotWax Commerce, then inventory of this product is out of stock on Shopify, however, inventory in HotWax Commerce is still available.  In such cases, the inventory of these products was also being reset with the current ATP in HotWax Commerce. And due to this Shopify was overselling the inventory.

To improve inventory accuracy on Shopify, we introduced a new inventory synchronization job. Rather than resetting the inventory on Shopify, this job only syncs the inventory variances recorded in HotWax commerce. This means any variance—whether negative (Such as damaged, lost, POS Sales) or positive (TO receiving, Returns restock) are updated to the respective Shopify locations.

For example, Product A has 5 units listed in both Shopify and HotWax Commerce. Shopify then receives 4 orders for this product, which have not yet been downloaded into HotWax Commerce. Meanwhile, one unit of Product A is reported in HotWax Commerce as damaged or missing, reducing the online ATP in HotWax Commerce to 4. In this scenario, HotWax Commerce will now push a -1 inventory variance to Shopify instead of resetting the inventory to 4. The ATP on Shopify will be adjusted to 0, ensuring the product is marked as "Out of Stock" in Shopify, as Shopify has already received orders for 4 units.

In another example, if a store receives a transfer order for Product B with 2 units, which originally had 10 units, then a variance of 2 will be pushed on Shopify to update the Shopify ATP to 12. Additionally, HotWax Commerce now also syncs inventory for all locations that are mapped with Shopify to ensure precise inventory availability across all the locations.
