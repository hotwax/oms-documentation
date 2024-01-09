# OMS Brokered Order Items Feed to NetSuite
Brokered items are received in the OMS for brokering. Subsequently, the brokered feed is sent to Netsuite so they can be fulfilled.

### Implementation Flow

This feed flow uses below components in the integration layer
1. Moqui - This is used to generate the generic OMS JSON feed to include all the Brokered order items.
   So here we will not set any configurable parameters in the Service Job and it will be scheduled to run on a set frequency.
   
   **NOTE**
   1. This is done because from this generic feed, custom transformations will prepare feeds using FacilityGroupMember on order items.
   2. Send orders with brokered items to facilities, like physical stores or warehouses, where NetSuite will handle the fulfillment process.
   
2. Apache NiFi - This is used to generate the feed format required by NetSuite.
   1. List and Fetch the File from the input folder.
   2. Transforms the OMS Brokered Order Items Feed format into the NetSuite format using Jolt 
   transform capabilities in-built in NiFi.
   3. Generate the file name by appending the current time as per the timezone configured in OMS.
      1. This helps in identifying the time at which feed is being kept for NetSuite.
   6. Put the transformed feed file on SFTP.
      1. Put the file in the folder for NetSuite.
      2. Put the file in the folder for logging purpose in OMS.
         1. NOTE this file resides in SFTP for a fixed configured duration like 30 days.
            
3. SFTP - This is used as the medium to put/read the feed files.

#### NiFi Flow

In the NiFi flow set up to sync OMS Brokered Order Items, the below processors are used.

1. **ListSFTP**
    1. This processor is used to read the OMS Brokered Order Items Feed file from the SFTP location.
       
2. **FetchSFTP**
    1. This processor is used to move the OMS Brokered Order Items Feed file to the archive folder after reading from the source folder.
       
3. **JoltTransformJSON**
    1. This processor is used to transform the OMS Brokered Order Items Feed input JSON to NetSuite JSON format.
       
4. **ConvertRecord**
    1. The ConvertRecord processor is used to convert the Brokered Order Items Feed file format into the CSV file format.
       
6. **UpdateAttribute**
    1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept for NetSuite.
       
7. **PutSftp**
    1. Two PutSFTP processors are used here: the first for eligible records for NetSuite, the second for logging this feed file for OMS.


#### NetSuite OMS Brokered Order Items Feed Sample
| Line Id | External Id | Item  | Closed | Quantity | Location |
|---------|-------------|-------|--------|----------|----------|
| 1       | KR16360     | 28198 |        |          | 114      |
| 5       | KR16360     | 28198 |        |          | 114      |


### NetSuite Feed File details

#### FTP location

```text
/home/${sftpUsername}/netsuite/salesorder/update
```

#### Sample Feed file Name format

```text
KREWE_BrokredOrderItemsFeed_2023-12-26-16_10_00_086.json
```

### Data model mapping

| NetSuite Field Name | Type    | Description    | OMS Brokered Order Items Feed Mapping |
|---------------------|---------|----------------|----------------------|
| Line Id             | String  | The NetSuite line Id of the order item. | orderItemAttributes.attrValue |
| External Id         | String  | HotWax order ID as a external id for NetSuite, since HotWax is an external system for NetSuite. | orderItems.orderId   |
| Item                | String  | The product identifier for the order item. | goodIdentifications.idValue </br> **NOTE:** goodIdentifications[n].goodIdentificationTypeId value should be **NETSUITE_PRODUCT_ID** |
| Closed              | Boolean | Closed         | Default value, set to empty |
| Quantity            | Number  | The quantity of the order item. | Default value, set to empty |
