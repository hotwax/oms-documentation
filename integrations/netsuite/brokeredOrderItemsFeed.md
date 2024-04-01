---
description: >-
  Understand the process of brokering order items in OMS and sending them to
  NetSuite for fulfillment.
---

# Brokered Order Items

The order items once approved are brokered in OMS. The items assigned to NetSuite Fulfilment facilities need to be sent to NetSuite for fulfillment.

### Implementation Flow

This feed flow uses below components in the integration layer

1.  Moqui - This is used to generate the generic OMS JSON feed to include all the Brokered order items. So here we will not set any configurable parameters in the Service Job and it will be scheduled to run on a set frequency.

    **NOTE**

    1. This is done because from this generic feed, custom transformations will prepare feeds using FacilityGroupMember on order items.
    2. A facility can be a part of either OMS Fulfilment or NetSuite Fulfillment Facility Group. Using the facility Group Member for the order item's facility, here in this case it will be NETSUITE\_FULFILLMENT, to include only order items which are brokered to these facilities.
2. Apache NiFi - This is used to generate the feed format required by NetSuite.
   1. List and Fetch the File from the input folder.
   2. Transforms the OMS Brokered Order Items Feed format into the NetSuite format using Jolt transform capabilities in-built in NiFi.
   3. Generate the file name by appending the current time as per the timezone configured in OMS.
      1. This helps in identifying the time at which feed is being kept for NetSuite.
   4. Put the transformed feed file on SFTP. 2. Put the file in the folder for NetSuite. 3. Put the file in the folder for logging purpose in OMS.
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
   1. The ConvertRecord processor is used to convert the Brokered Order Items Feed file format from JSON into CSV.
5. **UpdateAttribute**
   1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept for NetSuite.
6. **PutSftp**
   1. Two PutSFTP processors are used here: the first for eligible records for NetSuite, the second for logging this feed file for OMS.

#### NetSuite OMS Brokered Order Items Feed Sample

| Line Id | External Id | Item  | Closed | Quantity | Location |
| ------- | ----------- | ----- | ------ | -------- | -------- |
| 1       | KR16360     | 28198 |        |          | 114      |
| 5       | KR16360     | 28198 |        |          | 114      |

### NetSuite Feed File details

#### FTP location

```
/home/${sftpUsername}/netsuite/salesorder/update
```

#### Sample Feed file Name format

```
KREWE_BrokredOrderItemsFeed_2023-12-26-16_10_00_086.json
```

### Data Model Mapping

| NetSuite Field Name | Type    | Description                                                      | OMS Brokered Order Items Feed Mapping                                                                |
| ------------------- | ------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Line Id             | String  | The NetSuite line Id of the order item.                          | orderItems\[n].orderItemAttributes\[m].attrValue for attrName as NetsuiteItemLineId                  |
| External Id         | String  | OMS Order ID.                                                    | orderItems\[n].orderId                                                                               |
| Item                | String  | The identifier for the product in order item.                    | orderItems\[n].goodIdentifications\[m].idValue for goodIdentificationTypeId as NETSUITE\_PRODUCT\_ID |
| Closed              | Boolean | Closed                                                           | Default value, set to empty                                                                          |
| Quantity            | Number  | The quantity of the order item.                                  | Default value, set to empty                                                                          |
| Location            | String  | The external ID of the facility to which order item is brokered. | orderItems\[n].externalFacilityId                                                                    |
