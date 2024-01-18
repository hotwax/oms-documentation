# Cycle Count
Managing inventory accuracy in a retail business is a perpetual challenge. Store managers often encounter discrepancies between the recorded inventory in their systems and the actual physical stock on hand. To address these discrepancies, retailers periodically conduct inventory cycle counts. An inventory cycle count is a methodical approach that involves periodically counting a specific subset of items. Unlike a full physical inventory count, which requires tallying every item at once, cycle counts distribute the counting process over time, improving efficiency.

To support this process, HotWax Commerce provides the Cycle Count App. The app enables store associates to perform scheduled periodic cycle counts while also allowing them to record inventory variances identified outside of the cycle counts. Associates can specify reasons such as lost, stolen, damaged, or found for discrepancies identified. Synchronizing this crucial data from HotWax Commerce to NetSuite is essential to ensure that all systems within the retailer’s technology stack have accurate and up-to-date inventory information.

### Key Objectives
- The main goal of this integration is to keep in-store product inventory counts consistent between Netsuite and HotWax Commerce.
- Netsuite functions as the system of record for inventory in the retailer's technology ecosystem, making it essential to update Netsuite about any inventory changes within the stores.
- Synchronizing in-store inventory variances from HotWax Commerce to Netsuite ensures consistent and accurate inventory data, enhancing operational efficiency and inventory accuracy for systems dependent on Netsuite.

## Workflow

## Conduct Periodic Inventory Cycle Count in the Store
The inventory count process initiates within the store, where store associates leverage the Cycle Count App to conduct the cycle count. Upon completion of the cycle count, associates record the new inventory count into the app. Subsequently, the app automatically identifies the difference between the actual physical count and the corresponding systemic inventory levels, facilitating accurate and efficient inventory reconciliation.

### Pushing Cycle Count File to HotWax Commerce
Store associates upload the Cycle Count file from the app to the HotWax Commerce server. Store managers review this file, approve it, and subsequently, inventory cycle count variances are recorded in HotWax Commerce.

### Export Inventory Variances from HotWax Commerce
Once inventory cycle count variances are successfully logged in HotWax Commerce, a specific job is executed to create a CSV file containing all the cycle count inventory variance records. This file is then placed in an SFTP location, ensuring that it is readily accessible for further processing.

Successful logging of an inventory count is indicated by its status being "INV_COUNT_COMPLETED"

**Jobs in HotWax Commerce**

Create Cycle Count Inventory Variance CSV:
```
generate_InventoryCycleCountVarianceFeed
```

**SFTP Locations**

Inventory Cycle Count CSV:
```
/home/{sftp-username}/hotwax/InventoryCycleCountVariance
/home/{sftp-username}/hotwax/InventoryCycleCountVariance/archive
```

Cycle Count Inventory Variance of Actual vs Systemic:
```
/home/{sftp-username}/netsuite/inventoryadjustment/csv
```

### Import Cycle Count Inventory Variance in Netsuite
In NetSuite, a Scheduled Suite Script is employed to download and import the CSV files from the SFTP location. This script leverages the native CSV Import tool provided by NetSuite to create Inventory Adjustment records. The use of the NetSuite CSV Import tool for Inventory Adjustments eliminates the need for the N/record module in this specific integration, offering an efficient and accurate synchronization method.

**SuiteScripts**

Import Inventory Cycle Count Variance from SFTP:
```
HC_SC_ImportInventoryAdjustment.js
```
## Record Unexpected Store Inventory Variances Outside of Cycle Counts
While cycle counting in stores follows a periodic schedule, stores frequently encounter sudden inventory discrepancies in various scenarios. For example, if store associates identify 5 damaged units at their location, they’d want to record a variance of -5 for the damaged inventory. Similarly, if they discover 2 units of previously missing inventory, they’d want to record +2 for the newly found items.

To address these unexpected inventory changes, store associates can directly record these identified inventory variances into the Cycle Count App and ask their store managers to approve it so that this variance can be pushed into HotWax Commerce.

{% hint style="info" %}
Unlike cycle counting, where an inventory count is conducted periodically, this process involves store associates directly recording the variance amount without physically counting the entire store inventory.
{% endhint %}

### Pushing Inventory Variance to HotWax Commerce
Upon approval by the store manager, store associates log the inventory variances through the app, along with providing the relevant reasons, these recorded inventory variances automatically update the inventory in HotWax Commerce.

### Export Inventory Variance from HotWax Commerce
Once inventory variances are successfully updated in HotWax Commerce, a specific job is executed to create a CSV file containing all the inventory variance records. This file is then placed in an SFTP location from where NetSuite can read it.

**Jobs in HotWax Commerce**

Create Inventory Variance CSV:
```
generate_InventoryVarianceFeed
```

**SFTP Locations** 

Inventory Variance CSV:

```
/home/{sftp-username}/hotwax/InventoryItemVarianceFeed
/home/{sftp-username}/hotwax/InventoryItemVarianceFeed/archive
```

Inventory Variance:
```
/home/{sftp-username}/netsuite/inventoryadjustment/csv
```
### Import Inventory Variance in NetSuite

When variances are tracked using variance locations in NetSuite, variances logged by HotWax Commerce are actually registered as an Inventory Transfer from the affected store location to the variance location.

For example, if a store wants to damage out 5 units of a product, they’d log an inventory transfer of that product from their store to the Damaged location. This reduces the inventory from the store and increments that inventory at the Damaged location. Now retailers can use this movement to analyze which facilities are logging damaged inventory at higher rates than others and potentially track down operational and planning issues.

In NetSuite, another Scheduled Suite Script is employed to download and import the CSV files from the SFTP location. This script leverages the native CSV Import tool provided by NetSuite to create Inventory Adjustment records.

**SuiteScripts**

Import Inventory Variance from SFTP:
```
HC_SC_ImportInventoryAdjustment.js
```

## Benefits:
The automated synchronization of inventory variances from HotWax Commerce to Netsuite offers numerous advantages:

**Efficiency:** The process minimizes manual effort and reduces the time required for manual data entry.


**Error Reduction:** Automation eliminates potential human errors, ensuring data consistency and accuracy.


**Operational Transparency:** With near real-time synchronization, retailers gain insight into inventory variances as they occur, facilitating quicker decision-making and enhanced operational transparency.

This integration not only simplifies the process of managing in-store inventory but also plays a vital role in maintaining consistency across multiple systems, ultimately improving operational efficiency and inventory accuracy in the omnichannel retail environment.


**HotWax Commerce provides out of the box reports to get an overview of inventory cycle counts, which you can read [here](https://docs.hotwax.co/user-guides/inventory/cycle-counting/reports)**
