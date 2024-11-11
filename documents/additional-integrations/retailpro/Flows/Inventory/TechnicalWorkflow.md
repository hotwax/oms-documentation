---
description: >-
  Discover the technical workflow for syncing inventory in HotWax Commerce with
  Retail Pro.
---

# Technical Workflow

### Filter inventory file and reset inventory in HotWax Commerce

RetailPro sends the Reset Inventory File, including both active and inactive products, to HotWax Commerce, landing in a designated SFTP folder. Every midnight at 1:00 am, a job of HotWax Commerce integration platform compiles a list of active products, defining items available for online sales. This file is securely stored on the HC Integration Platform server. Half an hour later, the HC Integration Platform processes both files, creating a new Reset Inventory File that exclusively focuses on active products, substantially reducing its size from 300 MB to 80-100 KB and puts it in another folder on SFTP location . Another job in HotWax Commerce reads this new file from this new SFTP folder and updates the inventory records, ensuring they match RetailPro's data accurately.

### Record variance to fix incorrect inventory numbers in HotWax commerce

While HotWax Commerce's integration platform is actively engaged in filtering the inventory file and resetting inventory in HotWax Commerce, it simultaneously creates an "inventory variance file." This file is a result of identifying items in HotWax Commerce that have been shipped but not appropriately marked in Retail Pro, leading to a discrepancy in inventory counts. A job in the HotWax Commerce Integration Platform executes a SQL query, specifically targeting items shipped in HotWax Commerce but not acknowledged in Retail Pro and creates inventory variance file . The resulting inventory variance file is then placed in the designated SFTP location.

Another job in HotWax Commerce reads this inventory variance file, strategically scheduled to run an hour after the job updating inventory records based on the Reset Inventory file from Retail Pro. This timing ensures that the variance is recorded accurately by correcting the inventory numbers in HotWax Commerce that were initially influenced by the erroneous data sent from Retail Pro.
