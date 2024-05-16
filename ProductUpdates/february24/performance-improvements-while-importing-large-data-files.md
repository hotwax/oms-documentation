---
description: >-
  HotWax Commerce's improvement includes sequentially importing inventory reset
  files from the SFTP location, resulting in enhanced CPU utilization,
  stability, and performance.
---

# Performance Improvements While Importing Large Data Files

<figure><img src="https://www.hotwax.co/hubfs/Performance%20improvements%20in%20large%20data%20imports.png" alt=""><figcaption></figcaption></figure>

HotWax Commerce reads inventory reset files received from the ERP system to ensure inventory numbers in ERP and in HC are in sync. These files are put in SFTP location by ERP systems and HC utilizes a multi-threaded data import process for processing these files.&#x20;

In many cases duplicate inventory reset files were available on the SFTP location. HC would read all available files from the SFTP server and schedule them for import. Before this update, HC would process multiple inventory reset files simultaneously and this was causing system performance issues especially when the number of SKUs are in thousands or millions. The system would occasionally run out of memory because redundant and large inventory reset files were put in memory simultaneously.

To address these issues, improvements were made to the file processing process. After this update, HotWax Commerce now imports one file at a time, eliminating the simultaneous processing of inventory reset files. This change aims to reduce system CPU utilization and prevent memory overload, enhancing overall system stability and performance.
