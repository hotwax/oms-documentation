# Cycle Count
Managing inventory accuracy in a retail business is a perpetual challenge. Store managers often encounter discrepancies between the recorded inventory in their systems and the actual physical stock on hand. To address these discrepancies, retailers perform regular inventory cycle counts. An inventory cycle count is a methodical approach that involves periodically counting a specific subset of items. Unlike a full physical inventory count, which requires tallying every item at once, cycle counts distribute the counting process over time, improving efficiency.

To support this process, HotWax Commerce offers the Cycle Count app, which empowers store associates to record the reasons behind inventory variances. Synchronizing this crucial data from HotWax Commerce to Netsuite is essential to ensure that all systems within the retailer’s technology stack have accurate and up-to-date inventory information.

### Key Objectives
- The main goal of this integration is to keep in-store product inventory counts consistent between Netsuite and HotWax Commerce.
- Netsuite functions as the system of record for inventory in the retailer's technology ecosystem, making it essential to update Netsuite about any inventory changes within the stores.
- Synchronizing in-store inventory variances from HotWax Commerce to Netsuite ensures consistent and accurate inventory data, enhancing operational efficiency and inventory accuracy for systems dependent on Netsuite.

## Workflow

### Inventory Count in the Store
The inventory count process begins in the store, where store associates use the Cycle Count App to count inventory and log any variances they observe.


### Pushing Cycle Count File to HotWax Commerce
Store associates upload the Cycle Count file from the app to the HotWax Commerce server. Store managers review this file, approve it, and subsequently, inventory variances are recorded in HotWax Commerce.


### Export Inventory Variances from HotWax Commerce
Once inventory variances are successfully logged in HotWax Commerce, a specific job is executed to create a CSV file containing all the inventory variance records. This file is then placed in an SFTP location, ensuring that it is readily accessible for further processing.


### Import Inventory Adjustment Records in Netsuite
In Netsuite, a Scheduled Suite Script is employed to download and import the CSV files from the SFTP location. This script leverages the native CSV Import tool provided by Netsuite to create Inventory Adjustment records seamlessly. The use of the Netsuite CSV Import tool for Inventory Adjustments eliminates the need for the N/record module in this specific integration, offering an efficient and accurate synchronization method.

## Benefits:
The automated synchronization of inventory variances from HotWax Commerce to Netsuite offers numerous advantages:

**Efficiency:** The process minimizes manual effort and reduces the time required for manual data entry.


**Error Reduction:** Automation eliminates potential human errors, ensuring data consistency and accuracy.


**Operational Transparency:** With near real-time synchronization, retailers gain insight into inventory variances as they occur, facilitating quicker decision-making and enhanced operational transparency.

This integration not only simplifies the process of managing in-store inventory but also plays a vital role in maintaining consistency across multiple systems, ultimately improving operational efficiency and inventory accuracy in the omnichannel retail environment.