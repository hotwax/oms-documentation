# OMS Purchase Orders Receipt Feed to NetSuite

The OMS transmits the Purchase Orders Receipt Feed to Netsuite.

### Implementation Flow

This feed flow uses below components in the integration layer
1. Moqui - This is used to generate the generic OMS JSON feed to include all the Purchase Orders Receipt.
   So here we will not set any configurable parameters in the Service Job and it will be scheduled to run on a set frequency.
   
   **NOTE**
   1. This is done because from this generic feed, custom transformations will prepare feeds.
   
2. Apache NiFi - This is used to generate the feed format required by NetSuite.
   1. List and Fetch the File from the input folder.
   2. Transforms the OMS Purchase Orders Receipt Feed format into the NetSuite format using Jolt 
   transform capabilities in-built in NiFi.
   3. Generate the file name by appending the current time as per the timezone configured in OMS.
      1. This helps in identifying the time at which feed is being kept for NetSuite.
   6. Put the transformed feed file on SFTP.
      1. Put the file in the folder for NetSuite.
      2. Put the file in the folder for logging purpose in OMS.
         1. NOTE this file resides in SFTP for a fixed configured duration like 30 days.
            
3. SFTP - This is used as the medium to put/read the feed files.


#### NiFi Flow

In the NiFi flow set up to sync OMS Purchase Orders Receipt Feed, the below processors are used.

1. **ListSFTP**
    1. This processor is used to read the OMS Purchase Orders Receipt Feed file from the SFTP location.
       
2. **FetchSFTP**
    1. This processor is used to move the OMS Purchase Orders Receipt Feed file to the archive folder after reading from the source folder.

3. **SplitRecord**
    1. The SplitRecord processor limits the number of orders to a given number in a single file.

4. **JoltTransformJSON**
    1. This processor is used to transform the OMS Purchase Orders Receipt Feed input JSON to NetSuite JSON format.
              
5. **UpdateAttribute**
    1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept for NetSuite.
       
7. **PutSftp**
    1. Two PutSFTP processors are used here: the first for eligible records for NetSuite, the second for logging this feed file for OMS.
This is a sample JSON containing records of a Purchase Orders Receipt feed-

#### NetSuite OMS Purchase Orders Receipt feed Sample
If a PO has 4 items and we receive 2 items today, then the feed will include all 4 items with the first 2 items having their receipt details and the last two items having empty receipt details.
Now, if we receive only the 3rd item by the next day, then the feed will include the 3rd item with the receipt details and the 4th item with empty receipt details. Here, the feed will not include the first two items again, as the order items were already sent in the earlier feed.
If we receive the 4th Item now, we will include only the 4th item with its received details.

```json
[ {
  "order_id" : "8302919",
  "items" : [ {
    "line_id" : "1",
    "quantity" : "100"
  }, {
    "line_id" : "2",
    "quantity" : "200"
  }, {
    "line_id" : "3",
    "quantity" : "150"
  } ]
} ]

```
### NetSuite Feed File details

#### FTP location

```text
/home/${sftpUsername}/netsuite/purchaseorder/receipt

```

#### Sample Feed file Name format

```text
Krewe_PurchaseOrderReceiptFeed_2023-12-26-16_10_00_086.json
```

### Data model mapping

| Fields  | Data Type | Description | OMS Field Mapping  |
|---------|-----------|-------------|-------------------|
|order_id |string     |order id     | OrderHeader.ExternalId|
|items.line_id |string|Line id| OrderItem.orderItemExternalId|
|items.quantity |string|Quantity| ShipmentReceipt.totalQuantityAccepted|
