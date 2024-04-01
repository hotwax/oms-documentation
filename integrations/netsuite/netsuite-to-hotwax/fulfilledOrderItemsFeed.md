---
description: >-
  Discover how NetSuite fulfilled order items are seamlessly integrated into OMS
  using Apache NiFi.
---

# NetSuite Fulfilled Order Items

Once the order items are fulfilled in NetSuite, these items are sent as part of a CSV feed file to mark the items as fulfilled in OMS.

## Implementation Flow

The fulfilled order items feed from NetSuite is consumed in the integration layer using Apache NiFi. This processes the file to generate the fulfilled order items feed format for OMS. OMS will be consuming this feed using a scheduled job and mark the items as fulfilled.

In this flow, NiFi will read the NetSuite Fulfilled Order Items Feed file from designated SFTP location, and covert the file format into a JSON file format. This is done since OMS requires JSON format to mark items as fulfilled. Using Jolt transformation, the required JSON format will be prepared as per the OMS JSON schema. This transformed feed will be placed on SFTP location for OMS consumption.

### NiFi Flow

In the NiFi flow set up to sync NetSuite Fulfilled Order Items to OMS, the below processors are used.

1. **ListSFTP**
   1. This processor is used to read the NetSuite Fulfilled Items Feed file from the SFTP location.
2. **FetchSFTP**
   1. This processor is used to move the NetSuite Fulfilled Order Items Feed file to the archive folder after reading from the source folder.
3. **ConvertRecord**
   1. The ConvertRecord processor is used to convert the NetSuite Fulfilled Order Items CSV Feed file format into the JSON file format.
4. **UpdateAttribute**
   1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in NiFi. This helps in identifying the time at which feed is being kept for OMS.
5. **JoltTransformJSON**
   1. This processor is used to transform the NetSuite fulfilled Order Items Feed input JSON to OMS JSON format.
6. **PutSftp**
   1. The PutSFTP processor is used to put the Fulfilled Order Items Feed CSV file at the SFTP for OMS.

### NetSuite Fulfilled Order Items CSV Feed Sample

This is the input CSV file for this flow.

| orderId | orderItemSeqId | externalFacilityId | shippedDate      | quantity | trackingNumber | carrier         |
| ------- | -------------- | ------------------ | ---------------- | -------- | -------------- | --------------- |
| KR15831 | 00101          | 114                | 1/4/2024 4:23 pm | 1        | 788874904550   | FedEx/USPS/More |
| KR15863 | 00101          | 114                | 1/4/2024 4:23 pm | 1        | 788874909150   | FedEx/USPS/More |

### OMS Fulfilled Order Items JSON Feed Sample

This is the output JSON file for this flow.

```json
[
  {
    "orderMap": {
      "orderId": "KR15831",
      "items": [
        {
          "orderItemSeqId": 101,
          "externalFacilityId": 114,
          "shippedDate": "2024-01-04 16:23:00",
          "quantity": "1",
          "trackingNumber": "788874904550",
          "carrier": "FedEx/USPS/More",
          "validation-result": "success"
        }
      ]
    }
  }
]
```

### Custom handling in Fulfilled Order Items Feed For OMS

1. **shippedDate**
   1. From NetSuite, the shippedDate format in the Fulfilled Order Items Feed CSV is 7/3/2023 6:36 am (M/D/YYYY hh:mm am/pm).
   2. But at OMS the required date format is 'YYYY-MM-DD HH:MM:SS'.
   3. Below is the custom implementation made in the NiFi to prepare the required date format of OMS.
      1. In the ConvertRecord processor, Record Reader and Record Writer are the mandatory properties to configure the ConvertRecord processor to read the certain file format and convert it to another file format.
      2. Since the NetSuite feed file in the CSV format, Record Reader is set to CSVReader and Record Writer is set to JSONRecordWriter which are the controller services.
         1. **CSVReader**
            1. Using **Schema Text** property defined the CSV schema, and added the logicalType as 'timestamp-micros' for the date field in the schema.
            2. In the **Timestamp Format** property added the value as 'MM/dd/yyyy hh:mm a'.
         2. **JSONRecordWriter**
            1. In the **Timestamp Format** property added the value as 'yyyy-MM-dd HH:mm' to align with the required format (YYYY-MM-DD HH:MM:SS).

### FTP locations

NetSuite Feed File Directory

```
netsuite/salesorder/import/fulfillment-nifi
```

OMS Feed File Directory

```
netsuite/salesorder/import/fulfillment
```

### Sample Feed file Name format for OMS

```
Krewe_FulfilledOrderItemsFeed_2023-12-26-16_10_00_086.json
```

### Data Model Mapping

| OMS Fulfilled Order Items Field Feed  | Data Type | Field Description                                    | NetSuite Feed Field |
| ------------------------------------- | --------- | ---------------------------------------------------- | ------------------- |
| orderMap.orderId                      | String    | OMS Order ID.                                        | orderId             |
| orderMap.items\[n].orderItemSeqId     | String    | OMS Order Item Seq ID.                               | orderItemSeqId      |
| orderMap.items\[n].externalFacilityId | String    | The external ID of the fulfillment facility.         | externalFacilityId  |
| orderMap.items\[n].shippedDate        | Date      | The date when the order is shipped.                  | shippedDate         |
| orderMap.items\[n].quantity           | String    | The quantity of the fulfilled order item.            | quantity            |
| orderMap.items\[n].trackingNumber     | String    | The tracking number for the fulfilled order item.    | trackingNumber      |
| orderMap.items\[n].carrier            | String    | The shipping carrier for the fulfilled order item.   | carrier             |
| orderMap.items\[n].validation-result  | String    | Default value set in Jolt Transform Spec - "success" |                     |
