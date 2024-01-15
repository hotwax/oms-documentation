## Inventory Item Variance Feed HotWax to NetSuite

This feed is used to record the Inventory variances. The Inventory Item Variance Feed of OMS will be used to prepare variance feed format required by NetSuite.
These variances are logged due to reasons like if product is found damaged, missing etc. and so the variance will be logged in OMS so that its inventory count is refreshed. This variance needs to be communicated to external systems like NetSuite so that inventory is updated across all systems.

### Implementation Flow
This feed flow uses below components in the integration layer
1. Moqui - This is used to generate the generic OMS JSON feed to include all the inventory variance item records.
   So here we will set the configurable parameters in the Service Job if required and it will be scheduled to run on a set frequency.
   1. varianceReasonIds: VAR_STOLEN,VAR_DAMAGED,VAR_FOUND
   
2. Apache NiFi - This is used to generate the feed format required by NetSuite.
   1. List and Fetch the File from the input folder.
   2. Transforms the OMS Feed format into the NetSuite format using Jolt transform capabilities in-built in NiFi.
   3. Generate the file name by appending the current time as per the timezone configured in OMS.
      1. This helps in identifying the time at which feed is being kept for NetSuite.
   6. Put the transformed feed file on SFTP.
      1. Put the file in the folder for NetSuite.
      2. Put the file in the folder for logging purpose in OMS.
         1. NOTE this file resides in SFTP for a fixed configured duration like 30 days.
            
4. SFTP - This is used as the medium to put/read the feed files.

#### Nifi Flow
1. The below processors are used to prepare the NiFi flow:
    1. **ListSFTP**
        1. The ListSFTP processor is used to read the Moqui generated Inventory Item Variance Feed file from the SFTP location.
           
    2. **FetchSFTP**
        1. The FetchSFTP processor is used to move the Moqui generated Inventory Item Variance Feed file into the archive folder.

    3. **SplitRecord**
       1. The SplitRecord processor limits the number of orders to a given number in a single file. Eg. 20000 records per file
           
    3. **JoltTransformJSON**
        1. The JoltTransformJSON processor is used to transform the Moqui generated Inventory Item Variance Feed JSON into the
           required JSON format of external system NetSuite.
   
    4. **ConvertRecord**
        1. The ConvertRecord processor is used to convert the transformed Inventory Item Variance Feed JSON file into CSV format.
           
    5. **UpdateAttribute**
        1. The UpdateAttribute processor is used to update the file name of Inventory Item Variance Feed CSV file format.
           
    6. **PutSFTP**
        1. The PutSFTP processor is used to put the Inventory Item Variance Feed CSV file at the SFTP.
        2. **Note :** Here, PutSFTP processor is also used to put the log Inventory Item Variance Feed file in the log folder.

#### NetSuite Inventory Item Variance Sample

| Reference No      | Adjustment Account | Item | Adjust Qty By | Location | Date       | Memo          | Subsidiary | HC Inventory Adj Id |
|-------------------|--------------------|------|---------------|----------|------------|---------------|------------|---------------------|
| 2367160-152810    | 927                | 3410 | -10           | 1        | 6/20/2022  | Lost          | 1          | 2367160-152810      |
| 2367160-152820    | 927                | 3409 | -15           | 1        | 6/20/2022  | Not in Stock  | 1          | 2367160-152820      |
| 2367160-152821    | 927                | 3412 | -1            | 1        | 6/20/2022  | Not in Stock  | 1          | 2367160-152821      |

### NetSuite Feed File details

#### FTP locations

Path for NetSuite to consume the Inventory Item Variance Feed
```text
/home/${sftp-username}/netsuite/inventoryadjustment/csv
```

Path for OMS for the log file
This path represents the sftp location where the Inventory Item Variance Feed is kept for logging purpose.
```text
/home/${sftp-username}/nifi-feed-logs/netsuite/inventoryadjustment/csv
```

#### Sample Feed File Name Format
```text
${clientName}_InventoryItemVarianceFeed_2023-12-20-00_46_40_660.csv
```

### Data Model Mapping
| NetSuite Field | Type   | Description                                                                                      | OMS Field Mapping                                                                                                                                  |
|----------------|--------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Reference No.  | string | The reference number assign to an inventory variance in the system.                              | InventoryItem.inventoryItemId + '-' + PhysicalInventory.physicalInventoryId                                                                          |
| Adjustment Account | string | The account for the inventory adjustment in the system.                                      | 1. The value for this field is prepared using the configurable parameter **default.adjustmentAccount** in NiFi. <br/> 2. Sample value - 92                       |
| Item           | string | The NetSuite Product ID.                               | GoodIdentification.idValue for Good Identification Type ID of NETSUITE_PRODUCT_ID                                                                                                                       |
| Adjust Qty By  | Number | The quantity of item to adjust the inventory in the system.                                     | InventoryItemVariance.quantityOnHandVar                                                                                                            |
| Location       | string | The store or warehouse location where the inventory variance is being recorded within the system.| Facility.externalId                                                                                                                                |
| Date           | string | The date when inventory variance is created in OMS.                                          | PhysicalInventory.physicalInventoryDate                                                                                                            |
| Memo           | string | The memo field is used to keep a log regarding the inventory variance imported in system.        | VarianceReason.varianceDescription                                                                                                                 |
| Subsidiary     | string | The subsidiary associated with the inventory variance in the system.                             | 1. The value for this field is prepared using the configurable parameter **default.subsidiary** in NiFi. <br/> 2. Sample value - Inventory cycle count by HotWax |
| HC Inventory Adj Id | string | The Inventory Adustment ID of OMS.                                                          | InventoryItem.inventoryItemId and PhysicalInventory.physicalInventoryId concated by hyphen(-)                                                      |
