---
description: >-
  Discover the intricacies of cycle count synchronization from HotWax to
  NetSuite, including mappings and configurations.
---

# Cycle Count

This document includes mappings and configurations related to the cycle count sync from HotWax to NetSuite

## Inventory Variances

Retailers learn a lot about their product and operations using the reasons for variance in inventory but NetSuite’s Inventory Adjustment function only provides limited information relating to variance, mostly restricted to a “Comments” free text field. When trying to perform analytics on variance reasons, the free text nature of the comments field makes it difficult to obtain predictable results. To circumvent this issue, retailers will often set up variance locations in NetSuite. These locations are set up as “undefined” type locations, meaning that they are neither a retail location nor a warehouse, rather just a holding location. Retailers can set up as many variance locations as they need to help accurately segregate types of variances in their operations.

### How variance locations work in NetSuite

When variances are tracked using variance locations in NetSuite, variances logged internally or by external systems are actually registered as an Inventory Transfer from the affected location to the variance location. For example, if a retail location wants to damage out 2 units of a product, they’d log an inventory transfer of that product from their store to the Damaged location. This reduces the inventory from the store and increments that inventory at the Damaged location. Now retailers can use this movement to analyze which facilities are logging damaged inventory at higher rates than others and potentially track down operational and planning issues.

### How variance locations are mapped in HotWax

HotWax Commerce OMS supports logging variances with actual enumerated reasons that can be chosen by users. Each variance reason is mapped to a NetSuite Facility ID in the custom integration mapping table. When recent variances are pushed to NetSuite, the integration layer prepares an Inventory Transfer CSV for NetSuite where the `from facility` is where the variance was actually logged and the variance reason ID is used to find the `to facility` from the integration integration mapping table.

## Reports

### Pending Cycle Count

Products that have not been counted at a facility where a cycle count has been performed recently. Inactive products, where inventory is 0 and has not been added or decremented for any reason in the last month, will not be counted in this report to ensure only active products are shown in the report.

### Variance By Facility

Track which facilities are reporting higher manual negative variances. The results are sorted by the facilities reporting the highest variances which is further broken down by the reasons reported for the variance.

## Default Mappings

These are the default values that are sent to NetSuite unless a flow overrides them.

| Variable Name             | Value                           |
| ------------------------- | ------------------------------- |
| default.adjustmentAccount | 927                             |
| default.subsidiary        | 1                               |
| #{default.memo}           | Inventory cycle count by HotWax |

## FTP locations

These are the FTP locations where cycle count files are placed when exported from HotWax

| Variable Name                                  | Value                                               |
| ---------------------------------------------- | --------------------------------------------------- |
| destination.inv.cycle.count.feed.sftp.path     | netsuite/inventoryadjustment/csv                    |
| destination.log.inv.cycle.count.feed.sftp.path | nifi-feed-logs/netsuite/inventorycyclecountvariance |
| feed.fileName.withPrefix                       | Krewe\_InventoryCycleCountVarianceFeed\_            |
| hotwax.inv.cycle.count.feed.sftp.path          | hotwax/InventoryCycleCountVariance                  |
| hotwax.inv.cycle.count.feed.sftp.path.archive  | hotwax/InventoryCycleCountVariance/archive          |

These are the FTP locations for pushing inventory variances recorded in store to NetSuite from HotWax

| Variable Name                                    | Value                                           |
| ------------------------------------------------ | ----------------------------------------------- |
| destination.inv.item.variance.feed.sftp.path     | netsuite/inventoryadjustment/csv                |
| destination.log.inv.item.variance.feed.sftp.path | nifi-feed-logs/netsuite/inventoryadjustment/csv |
| feed.fileName.withPrefix                         | Krewe\_InventoryItemVarianceFeed\_              |
| hotwax.inv.item.variance.feed.sftp.path          | hotwax/InventoryItemVarianceFeed                |
| hotwax.inv.item.variance.feed.sftp.path.archive  | hotwax/InventoryItemVarianceFeed/archive        |
