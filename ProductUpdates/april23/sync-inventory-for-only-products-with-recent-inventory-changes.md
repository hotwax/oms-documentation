---
description: >-
  Implemented a new task to synchronize inventory exclusively for products in
  HotWax Commerce and Shopify that are out of sync, leading to enhanced system
  efficiency.
---

# Sync Inventory for Only Products with Recent Inventory Changes

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2023/April%202023/Product%20updates/Featured%20Image/Sync%20recent%20inventory%20changes.png" alt=""><figcaption></figcaption></figure>

Shopify retailers face the challenge of managing multiple orders daily across various channels, including brick-and-mortar stores, online sites, and marketplaces. To ensure accurate inventory tracking and prevent overselling, HotWax Commerce plays a crucial role in reducing the "Available To Promise" inventory whenever new orders are received from any channel. Subsequently, it synchronizes the inventory with Shopify.

​​Previously, HotWax Commerce would regularly synchronize inventory of all products with Shopify, even if the inventory levels for certain products remained unchanged due to the absence of new orders from any sales channel or no new inventory being received for those specific products. Resetting inventory for the entire product catalog placed unnecessary strain on system resources, Shopify API throttling and processing capacity, while limiting the system's ability to synchronize inventory multiple times a day. Consequently, Shopify retailers were limited to synchronizing inventory with HotWax Commerce only 2-3 times per day, which could sometimes cause discrepancies in inventory numbers between HotWax Commerce and Shopify, leading to potential issues of overselling or underselling.

To address this issue and provide Shopify retailers with greater flexibility, HotWax Commerce has introduced a new inventory sync job. The new job specifically focuses on pushing inventory counts to Shopify for products whose inventory numbers are not in sync with HotWax Commerce. This means that only the necessary inventory updates are synchronized, reducing the burden on system resources and enhancing overall performance.

With the recommended interval for scheduling the inventory sync job set at every 15 minutes, Shopify retailers can now synchronize their product inventory numbers 24x more than before every day. The new inventory sync job is especially useful for retailers doing store fulfillment, where inventory sold to walk-in customers needs to be deducted from online as fast as possible, because it dramatically reduces the chances of gaps in inventory numbers between HotWax Commerce and Shopify, minimizing the risk of overselling or underselling.
