---
description: >-
  Discover how Retail Pro Prism POS synchronizes inventory with HotWax Commerce
  for accurate records.
---

# Inventory Sync

In the daily operations of Retail Pro, numerous transactions occur, ranging from receiving purchase orders and processing returns to completing physical store sales. Each of these transactions directly impacts the inventory numbers in Retail Pro. To address this dynamic environment, we've implemented two approaches to synchronize inventory data from Retail Pro to HotWax Commerce.

The first approach involves real-time adjustments for immediate accuracy. Whenever a sale happens in physical stores, inventory numbers are dynamically adjusted in HotWax Commerce specifically for the location where the sale occurred. This real-time adjustment not only ensures the accuracy of inventory records in HotWax Commerce but also facilitates the precise transfer of inventory information downstream, particularly to eCommerce platforms.

The second approach introduces a daily early morning synchronization process. Scheduled to occur daily, this synchronization process resets inventory numbers in HotWax Commerce, aligning them with the current state in Retail Pro. This comprehensive synchronization covers the entire inventory and accommodates transactions such as receiving purchase orders, transfer orders, and returns.

The combination of these two approaches is crucial for maintaining consistency. While real-time adjustments handle immediate changes in inventory occurring due to in-store sales, the daily synchronization addresses a broader scope, ensuring that inventory numbers in both Retail Pro and HotWax Commerce remain in sync. This comprehensive strategy prevents discrepancies and provides a robust solution for managing inventory synchronization effectively

### Sync inventory of in-store sales

When a sale takes place in Retail POS, the smooth integration between HotWax Commerce and Retail Pro Prism POS comes into action. This integration is streamlined through the real-time triggering of the "UpdateInventory" API in HotWax Commerce by Retail Pro Prism POS. This swift mechanism promptly reduces the inventory in HotWax Commerce for the specific product and location where the sale occurred. This instantaneous adjustment ensures that HotWax Commerce keeps its inventory records accurate and current, providing a fast and precise overview of in-store sales. The real-time nature of this adjustment guarantees that HotWax Commerce maintains up-to-the-moment inventory records, delivering a responsive and precise reflection of in-store sales.

### Daily reset inventory

To address a wider array of inventory transactions, such as purchase orders, transfers, and returns, this approach employs the "Daily Reset Inventory" method. Executed each morning, this scheduled synchronization comprehensively updates the entire inventory in HotWax Commerce. Acting as a corrective measure, it aligns inventory numbers in both Retail Pro Prism POS and HotWax Commerce for consistency.

In a usual setup, ERP systems share a file at frequent time intervals comprising all active products with their inventory numbers on SFTP location and a job in HotWax Commerce reads the file and updates inventory in HotWax Commerce.
