# Fulfilled Order Items Feed From NetSuite to OMS

NetSuite's Fulfilled Order Items Feed CSV file. Convert it into a JSON file format for efficient use in marking order items as fulfilled at OMS.

### Implementation Flow    
1. NiFi will read the Fulfilled Order Items Feed file from designated SFTP location, and covert the file format into a JSON file format.
2. Afterward using the transformation a required JSON format will be prepared as per the OMS Fulfilled Order Items Feed JSON schema. 
3. NiFi will place the prepared JSON file format of the Fulfilled Order Items Feed on SFTP location for OMS consumption.


#### NiFi Flow

In the NiFi flow set up to sync NetSuite Fulfilled Order Items, the below processors are used.

1. **ListSFTP**
    1. This processor is used to read the NetSuite Fulfilled Items Feed file from the SFTP location.

2. **FetchSFTP**
    1. This processor is used to move the NetSuite Fulfilled Order Items Feed file to the archive folder after reading from the source folder.

3. **ConvertRecord**
    1. The ConvertRecord processor is used to convert the NetSuite Fulfilled Order Items Feed file format into the JSON file format.
       
4. **UpdateAttribute**
    1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in NiFi. This helps in identifying the time at which feed is being kept for OMS.
       
5. **JoltTransformJSON**
    1. This processor is used to transform the NetSuite fulfilled Order Items Feed input JSON to OMS JSON format.
       
6. **PutSftp**
    1. The PutSFTP processor is used to put the Fulfilled Order Items Feed CSV file at the SFTP for OMS.


#### NetSuite Fulfilled Order Items Feed Sample
| orderId | orderItemSeqId| externalFacilityId | shippedDate      | quantity | trackingNumber  | carrier          |
|---------|----------------|-------------------|------------------|----------|-----------------|------------------|
| KR15831 | 00101          | 114               | 1/4/2024 4:23 pm | 1        | 788874904550    | FedEx/USPS/More  |
| KR15863 | 00101          | 114               | 1/4/2024 4:23 pm | 1        | 788874909150    | FedEx/USPS/More  |

### Sample JSON schema of Fulfilled Order Items Feed For OMS
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


### NetSuite Feed File details

#### FTP location

```text
netsuite/salesorder/import/fulfillment-nifi
```

#### Sample Feed file Name format

```text
Krewe_FulfilledOrderItemsFeed_2023-12-26-16_10_00_086.json
```
### Data model mapping

| NetSuite Field Name | Data Type |  Field Description                                | OMS Field Name  |
|---------------------|-----------|------------------------------------------------------|--------------------|
| orderId             | String    | The unique ID of an order in the system.             | orderId            |
| orderItemSeqId      | String    | The line ID of an order item in the system.          | orderItemSeqId     |
| externalFacilityId  | String    | The facility, assigned to the order item.            | externalFacilityId |
| shippedDate         | Date      | The date when the order is shipped.                  | shippedDate        |
| quantity            | String    | The quantity of an order item.                       | quantity           |
| trackingNumber      | String    | The tracking No. assign to an order item.            | trackingNumber     |
| carrier             | String    | The shipping carrier which is used to ship an order. | carrier            |
| validation-result   | String    | Default value set in Jolt Transform Spec - "success" |          |
