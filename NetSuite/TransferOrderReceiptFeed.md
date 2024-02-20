## Introduction

Prepare the Transfer Order Receipt Feed in JSON file format for NetSuite.

## Implementation Flow

This feed flow uses below components in the integration layer
1. Moqui - This is used to generate the generic OMS JSON feed to include the Transfer Orders feed.
   This feed is scheduled to run on a set frequency.

2. Apache NiFi - This is used to generate the feed format required by NetSuite.
    1. List and Fetch the File from the input folder.
    2. Split the records of incoming file into multiple flow files to prevent processing bulk data all at once.
       The number of records in each flow file is configurable.
    3. Transform the OMS Transfer Order Shipment Receipt Feed format into the NetSuite format using Jolt
       transform capabilities in-built in NiFi.
    4. Generate the file name by appending the current time as per the timezone configured in OMS.
        1. This helps in identifying the time at which feed is being kept for NetSuite.
    5. Put the transformed feed file on SFTP.
        1. Put the file in the folder for NetSuite.
        2. Put the file in the folder for logging purpose in OMS.
            1. NOTE this file resides in SFTP for a fixed configured duration like 30 days.

3. SFTP - This is used as the medium to put/read the feed files.

### NiFi Flow

In the NiFi flow set up, to sync OMS Transfer Order Shipment Receipts, below processors are used.

1. **ListSFTP**
    1. This processor is used to read the OMS Transfer Order Shipment Receipt Feed file from the SFTP location.

2. **FetchSFTP**
    1. This processor is used to move the OMS Transfer Order Shipment Receipt Feed file to the archive folder after reading from the source folder.

3. **SplitRecord**
    1. This processor is used to split the incoming flow file records into multiple flow files to handle large feed files and not process all records
       all at once. The number of records to be in one split flow file is configurable in the processor's properties.

4. **JoltTransformJSON**
    1. This processor is used to transform the Transfer Order Shipment Receipt Feed input JSON to NetSuite JSON format.

5. **UpdateAttribute**
    1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in OMS.
       This helps in identifying the time at which feed is being kept for NetSuite.

6. **PutSftp**
    1. Two PutSFTP processors are used here: the first for eligible records for NetSuite, the second for logging this feed file for OMS.

### NetSuite Transfer Order Shipment Receipt Feed file details

#### FTP location

```dtd
/home/${sftpUsername}/netsuite/transferorder/receipt
```

#### Sample Feed file Name format

```dtd
UCG_TransferOrderReceiptFeed_2024-02-17-09_26_00_922.json
```

### Sample JSON format of NetSuite

The Transfer Order Receipts Feed should have the following details, which will be further consumed by the external system NetSuite:

   ```json
    [
       {
          "order_id": "38011066",
          "fulfillment_id": "38011067",
          "items": [
             {
                "product_id": "10178",
                "quantity": "2"
             },
             {
                "product_id": "10177",
                "quantity": "1"
             }
          ]
       }
    ]
   ```

### Custom handling
1. **quantity**
    1. For quantity, in the transformation added default value as zero (0), since in the HC generated JSON the **totalQuantityAccepted** will be null.
    2. As per the NetSuite JSON File format quantity should be as a string instead of number, converted the value of **totalQuantityAccepted** into a string while transformation.
2. In transformation added a default empty value for those fields that can be null or missing in the HC generated JSON. Eg- fulfillment_id.

### Mapping of the HC Shipments Receipt Feed for NetSuite file format

| Field Name | Type | Description                                                                   | <span dir="">HC Entity Mapping</span>                                                                                                                                                                                                                   |
|------------|------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| order_id   | string | This is the transfer order ID assigned to an Order in the system.             | shipmentAttribute.`attrValue` when `attrName` =  'EXTERNAL_ORDER_ID'                                                                                                                                                                                    |
| fulfillment_id    | string | This is the transfer order fulfillment ID assigned to an Order in the system. | shipmentAttribute.`attrValue` when `attrName` =  'EXTERNAL_FULFILLMENT_ID'                                                                                                                                                                              |
| product_id | string | This is the external product ID of a product of an order item.                | goodIdentification.`idValue` when `goodIdentificationTypeId` = 'NETSUITE_PROD_ID'                                                                                                                                                                       |
| quantity   | string | This is the quantity of an order Item.                                        | ShipmentReceipt.`quantityAccepted` <br>**NOTE:** <br>1. totalQuantityAccepted is the alias used to keep the value of total accepted Quantity, in the HC generated feed <br>2. It corresponds to the sum of the accepted quantities of shipment receipt. |