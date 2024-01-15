## Inventory Item Variance Feed HotWax to NetSuite

### Sample CSV Schema for Inventory Item Variance from HotWax to NetSuite

| Reference No      | Adjustment Account | Item | Adjust Qty By | Location | Date       | Memo          | Subsidiary | HC Inventory Adj Id |
|-------------------|--------------------|------|---------------|----------|------------|---------------|------------|---------------------|
| 2367160-152810    | 927                | 3410 | -10           | 1        | 6/20/2022  | Lost          | 1          | 2367160-152810      |
| 2367160-152820    | 927                | 3409 | -15           | 1        | 6/20/2022  | Not in Stock  | 1          | 2367160-152820      |
| 2367160-152821    | 927                | 3412 | -1            | 1        | 6/20/2022  | Not in Stock  | 1          | 2367160-152821      |

### FTP locations
#### Path for NetSuite to consume the Inventory Item Variance Feed
```text
/home/${sftp-username}/netsuite/inventoryadjustment/csv
```

#### Path for OMS for the log file

This path represents the sftp location where the Inventory Item Variance Feed is kept for logging purpose.
```text
/home/${sftp-username}/nifi-feed-logs/netsuite/inventoryadjustment/csv
```

### Sample Feed File Name Format
```text
${clientName}_InventoryItemVarianceFeed_2023-12-20-00_46_40_660.csv
```


### Requirement
1. Prepare the Inventory Item Variance Feed to adjust CSV which will be further consumed by the external system NetSuite.

### Implementation flow
1. The Inventory Item Variance Feed JSON will be generated from OMS using Moqui and will be kept on SFTP.
2. Using NiFi, the HotWax generated JSON will be read and transformed into the JSON format with all the fields as per the NetSuite file format.
3. The transformed JSON will be converted into the CSV format as the final file format required by NetSuite.
4. The converted Inventory Item Variance feed file CSV will be kept on the SFTP for NetSuite.

#### Nifi Flow
1. The below processors are used to prepare the NiFi flow:
    1. **ListSFTP processor**
        1. The ListSFTP processor is used to read the Moqui generated Inventory Item Variance Feed file from the SFTP location.
    2. **FetchSFTP Processor**
        1. The FetchSFTP processor is used to move the Moqui generated Inventory Item Variance Feed file into the archive folder.
    3. **JoltTransformJSON Processor**
        1. The JoltTransformJSON processor is used to transform the Moqui generated Inventory Item Variance Feed JSON into the
           required JSON format of external system NetSuite.
    4. **ConvertRecord Processor**
        1. The ConvertRecord processor is used to convert the transformed Inventory Item Variance Feed JSON file into CSV format.
    5. **UpdateAttribute Processor**
        1. The UpdateAttribute processor is used to update the file name of Inventory Item Variance Feed CSV file format.
    6. **PutSFTP Processor**
        1. The PutSFTP processor is used to put the Inventory Item Variance Feed CSV file at the SFTP.
        2. **Note :** Here, PutSFTP processor is also used to put the log Inventory Item Variance Feed file in the log folder.

### Prepared Fields for Inventory Variance Feed NetSuite
| NetSuite Field | Type   | Description                                                                                      | OMS Field Mapping                                                                                                                                  |
|----------------|--------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Reference No.  | string | The reference number assign to an inventory variance in the system.                              | InventoryItem.inventoryItemId <br/> PhysicalInventory.physicalInventoryId                                                                          |
| Adjustment Account | string | The account for the inventory adjustment in the system.                                      | 1. The value for this field is prepared using the variable **default.adjustmentAccount** in NiFi. <br/> 2. Sample value - 92                       |
| Item           | string | ID value for Good Identification Type ID of NETSUITE_PRODUCT_ID                                  | GoodIdentification.idValue                                                                                                                         |
| Adjust Qty By  | Number | The quantity of items to adjust the inventory in the system.                                     | InventoryItemVariance.quantityOnHandVar                                                                                                            |
| Location       | string | The store or warehouse location where the inventory variance is being recorded within the system.| Facility.externalId                                                                                                                                |
| Date           | string | The date when inventory variance created in the system.                                          | PhysicalInventory.physicalInventoryDate                                                                                                            |
| Memo           | string | The memo field is used to keep a log regarding the inventory variance imported in system.        | VarianceReason.varianceDescription                                                                                                                 |
| Subsidiary     | string | The subsidiary associated with the inventory variance in the system.                             | 1. The value for this field is prepared using the variable **default.subsidiary** in NiFi. <br/> 2. Sample value - Inventory cycle count by HotWax |
| HC Inventory Adj Id | string | The Inventory Adustment ID of OMS.                                                          | InventoryItem.inventoryItemId and PhysicalInventory.physicalInventoryId concated by hyphen(-)                                                      |