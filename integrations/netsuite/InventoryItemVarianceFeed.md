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


## Inventory Transfer Feed HotWax to NetSuite

This feed is used to record the Inventory transfer. The Inventory Item Variance Feed of OMS will be used to prepare Transfer feed format required by NetSuite.
Inventory transfers are recorded in response to various reasons, such as discovering damaged or missing products, with specific variance reasons defined in the IntegrationTypeMapping entity. These variances are logged in OMS to refresh the inventory count. 
To ensure consistency across all systems, these various are communicated to external platforms like NetSuite, so that inventory is updated across all systems.

### Implementation Flow
This feed flow uses below components in the integration layer
1. Moqui - This is used to generate the generic OMS JSON feed to include all the inventory variance item records.

2. Apache NiFi - In this process, two NiFi flows are utilized.
   1. Initially, we retrieve records from the IntegrationTypeMapping entity where the integration_type_id is 'NETSUITE_VAR_TRAN'. 
   2. In this stage, we systematically prepare both Inventory Transfer Feed and Inventory Variance Feed based on specific conditions. 
      1. If the Variance Reason ID matches the mapping_Key, we prepare the Inventory Transfer Feed. 
      2. If the Variance Reason ID does not match the mapping_Key, we prepare the Inventory Variance Feed.
   3. List and Fetch the File from the input folder.
   4. Transforms the OMS Feed format into the NetSuite format using Jolt transform capabilities in-built in NiFi.
   5. Generate the file name by appending the current time as per the timezone configured in OMS.
      1. This helps in identifying the time at which feed is being kept for NetSuite.
   6. Put the transformed feed file on SFTP. 
      1. Put the file in the folder for NetSuite.
      2. Put the file in the folder for logging purpose in OMS.
         1. NOTE this file resides in SFTP for a fixed configured duration like 30 days. 
3. SFTP - This is used as the medium to put/read the feed files.

#### Nifi Flow

1. Nifi flow for fetching the IntegrationTypeMapping entity records:
    1. **ExecuteSQLRecord**
        1. The ExecuteSQLRecord processor to retrieve records from the IntegrationTypeMapping entity, where the integration_type_id is 'NETSUITE_VAR_TRAN'.

    2. **UpdateAttribute**
        1. The UpdateAttribute processor is used to prepare the fileName.

    3. **PutFile**
        1. The PutFile processor is employed to transfer the file to the server side.
    

2. NiFi flow designed for the preparation of Inventory Variance and Inventory Transfer flows:
    1. **ListSFTP**
        1. The ListSFTP processor is used to read the Moqui generated Inventory Item Variance Feed file from the SFTP location.

    2. **FetchSFTP**
        1. The FetchSFTP processor is used to move the Moqui generated Inventory Item Variance Feed file into the archive folder.

    3. **SplitRecord**
        1. The SplitRecord processor limits the number of orders to a given number in a single file. Eg. 20000 records per file

    4. **ForkEnrichment**
       1. This processor, in tandem with JoinEnrichment, adds essential attributes for enrichment tasks. Incoming FlowFiles are cloned, with the original going to 'original' and the clone to 'enrichment.'

    5. **FetchFile**
       1. The FetchFile processor is employed to retrieve the Integration Type mapping file located on the server side.

    6. **JoinEnrichment**
       1. The JoinEnrichment processor is employed to combine records from the original file and the enrichment file based on specific conditions.
        <details>
          <summary>SQL to Join original flow file and enrichment flow file records</summary>
        
        ```
        SELECT 
          original.*, 
          enrichment.* 
        FROM 
          original 
          LEFT OUTER JOIN enrichment ON original.varianceReasonId = enrichment.mapping_key
        
        ```
        </details>

     7. **QueryRecord**
        1. The QueryRecord processor is employed to create two flow files based on specific conditions for the Inventory Variance Feed and Inventory Transfer Feed, utilizing attributes.
            1. If the Variance Reason ID matches the mapping_Key, we prepare the Inventory Transfer Feed
               <details>
                  <summary>SQL to fetch Inventory Transfer Feed</summary>
        
                ```
                SELECT 
                    *
                    FROM
                    flowfile
                    WHERE
                    mapping_key IS NOT NULL
                
                ```
             </details>

            2. If the Variance Reason ID does not match the mapping_Key, we prepare the Inventory Variance Feed.
               <details>
                  <summary>SQL to fetch Inventory Variance Feed.</summary>

                ```
                SELECT 
                    *
                    FROM
                    flowfile
                    WHERE
                    mapping_key IS NULL
                
                ```
             </details>

    8. **RouteOnAttribute**
        1. The RouteOnAttribute processor is used to filter out null files. The null files are created if the given condition is not match with data.
            
            **NOTE**: Two RouteOnAttribute processors are implemented—one dedicated to the Inventory Variance Feed and the other to the Inventory Transfer Feed.
    
    9. **JoltTransformJSON**
        1. The JoltTransformJSON processor is employed to transform both the Inventory Variance Feed file and Inventory Transfer file. As mentioned earlier, we prepared these two flow files based on certain conditions.
             
            **NOTE**: Here two JoltTransformJSON processors are applied because the formats of both feeds are distinct and require transformation.

    10. **ConvertRecord**
        1. The ConvertRecord processor is used to convert the transformed Inventory Item Variance Feed and Inventory Transfer Feed JSON file into CSV format.
    
    11. **UpdateAttribute**
       1. The UpdateAttribute processor is used to update the file name of Inventory Item Variance Feed and Inventory Transfer Feed CSV file format.
 
    12. **PutSFTP**
        1. The PutSFTP processor is used to put the Inventory Item Variance Feed and Inventory Transfer Feed CSV file at the SFTP.
        2. **Note :** Here, PutSFTP processor is also used to put the log Inventory Item Variance Feed and Inventory Transfer Feed file in the log folder.
    
#### NetSuite Inventory Transfer Sample

| External Id      | Item | Adjust Qty By | From Location | To Location | Date       | Memo          | Subsidiary |
|-------------------|--------------------|------|---------------|----------|------------|---------------|------------|
| 1000036-58549    |   3410           | -10 | 925          | 1099      | 6/20/2022  | Lost          | 1          |
| 2367160-152820    | 3410                | -15 | 927          | 1098      | 6/20/2022  | Not in Stock  | 1          |

### NetSuite Feed File details

#### FTP locations

Path for NetSuite to consume the Inventory transfer Feed
```text
/home/${sftp-username}/netsuite/inventorytransfer/csv
```

Path for OMS for the log file
This path represents the sftp location where the Inventory Item Variance Feed is kept for logging purpose.
```text
/home/${sftp-username}/nifi-feed-logs/netsuite/inventorytransfer/csv
```

#### Sample Feed File Name Format
```text
${clientName}_InventoryTransferFeed_2023-12-20-00_46_40_660.csv
```

### Data Model Mapping
| NetSuite Field | Type   | Description                                                                                      | OMS Field Mapping                                                                                                                                  |
|----------------|--------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| External Id  | string | The External Id assign to an inventory variance in the system.                              | InventoryItem.inventoryItemId + '-' + PhysicalInventory.physicalInventoryId                                                                          |
| Item           | string | The NetSuite Product ID.                               | GoodIdentification.idValue for Good Identification Type ID of NETSUITE_PRODUCT_ID                                                                                                                       |
| Adjust Qty By  | Number | The quantity of item to adjust the inventory in the system.                                     | InventoryItemVariance.quantityOnHandVar                                                                                                            |
|  From Location       | string | The store or warehouse location where the inventory variance is being recorded within the system.| Facility.externalId                                                                                                                                |
|  To Location       | string | Facility.externalId; here variance reason ID will be used to find the to facility from the integration mapping table.| mappingValue                                                                                                                             |
| Date           | string | The date when inventory variance is created in OMS.                                          | PhysicalInventory.physicalInventoryDate                                                                                                            |
| Memo           | string | The memo field is used to keep a log regarding the inventory variance imported in system.        | VarianceReason.varianceDescription                                                                                                                 |
| Subsidiary     | string | The subsidiary associated with the inventory variance in the system.                             | 1. The value for this field is prepared using the configurable parameter **default.subsidiary** in NiFi. <br/> 2. Sample value - Inventory cycle count by HotWax |

**NOTE:** The Inventory Variance format remains unchanged, and reference can be made to the format described above.