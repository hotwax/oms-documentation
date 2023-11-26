# Cycle Count

This document includes mappings and configurations related to the cycle count sync from HotWax to NetSuite

## Reports

### Pending Cycle Count
Products that have not been counted at a facility where a cycle count has been performed recently. Inactive products, where inventory is 0 and has not been added or decremented for any reason in the last month, will not be counted in this report to ensure only active products are shown in the report.

### Variance By Facility
Track which facilities are reporting higher manual negative variances. The results are sorted by the facilities reporting the highest variances which is further broken down by the reasons reported for the variance.


## Default Mappings
These are the default values that are sent to NetSuite unless a flow overrides them.
| Variable Name               | Value                            |
|-----------------------------|----------------------------------|
| default.adjustmentAccount   | 927                              |
| default.subsidiary          | 1                                |
| #{default.memo}             | Inventory cycle count by HotWax  |

## FTP locations
These are the FTP locations where cycle count files are placed when exported from HotWax
| Variable Name                                 | Value                                            |
|-----------------------------------------------|--------------------------------------------------|
| destination.inv.cycle.count.feed.sftp.path     | netsuite/inventoryadjustment/csv                 |
| destination.log.inv.cycle.count.feed.sftp.path | nifi-feed-logs/netsuite/inventorycyclecountvariance |
| feed.fileName.withPrefix                       | Krewe_InventoryCycleCountVarianceFeed_            |
| hotwax.inv.cycle.count.feed.sftp.path          | hotwax/InventoryCycleCountVariance                |
| hotwax.inv.cycle.count.feed.sftp.path.archive  | hotwax/InventoryCycleCountVariance/archive        |

These are the FTP locations for pushing inventory variances recorded in store to NetSuite from HotWax
| Variable Name                                      | Value                                            |
|----------------------------------------------------|--------------------------------------------------|
| destination.inv.item.variance.feed.sftp.path        | netsuite/inventoryadjustment/csv                 |
| destination.log.inv.item.variance.feed.sftp.path    | nifi-feed-logs/netsuite/inventoryadjustment/csv |
| feed.fileName.withPrefix                            | Krewe_InventoryItemVarianceFeed_                 |
| hotwax.inv.item.variance.feed.sftp.path             | hotwax/InventoryItemVarianceFeed                 |
| hotwax.inv.item.variance.feed.sftp.path.archive     | hotwax/InventoryItemVarianceFeed/archive         |