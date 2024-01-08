## Fulfilled Order Items Feed From NetSuite to HotWax

### Sample CSV schema of Fulfilled Order Items Feed From NetSuite
| orderId | orderItemSeqId| externalFacilityId | shippedDate      | quantity | trackingNumber  | carrier          |
|---------|----------------|-------------------|------------------|----------|-----------------|------------------|
| KR15831 | 00101          | 114               | 1/4/2024 4:23 pm | 1        | 788874904550    | FedEx/USPS/More  |
| KR15863 | 00101          | 114               | 1/4/2024 4:23 pm | 1        | 788874909150    | FedEx/USPS/More  |

### Sample JSON schema of Fulfilled Order Items Feed For HotWax
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

### Requirement

Streamline the process to read the Fulfilled Order Items Feed CSV file format sent by the NetSuite, and prepare the JSON file format that will be further used to mark the order items as fulfilled at HotWax.

### Design and Decisions

1. A Fulfilled Order Items Feed file in CSV format, containing specific details of shipped orders including tracking and shipping details, will be received daily on the SFTP from NetSuite. 
2. An automated will be designed to perform the following tasks:
   1. Read the CSV file format from the SFTP.
   2. Prepare a JSON file format containing the necessary details for marking order items as fulfilled in HotWax.


### Implementation Flow

1. NiFi:
    1. NiFi will read the Fulfilled Order Items Feed file from designated SFTP location, and covert the file format into a JSON file format.
    2. Afterward using the transformation a required JSON format will be prepared as per the HotWax Fulfilled Order Items Feed JSON schema. 
    3. NiFi will place the prepared JSON file format of the Fulfilled Order Items Feed on SFTP location for HotWax consumption.


### NiFi Flow

1. This NiFi flow utilizes a sequence of processors to seamlessly manage data preparation and conversions for the Fulfilled Order Items Feed.
    1. **ListSFTP**
        1. The ListSFTP processor is configured to read and process the Fulfilled Order Items Feed file from the SFTP location.

    2. **FetchSFTP**
        1. The FetchSFTP processor will move the Fulfilled Order Items Feed file into the archive folder, this needed to keep the information of the files that are processed by NiFi.

    3. **ConvertRecord**
        1. The ConvertRecord processor is used to convert the CSV file format into the JSON file format.

    4. **UpdateAttribute**
       1. The UpdateAttribute processor is used to update the file name of the Fulfilled Order Items Feed.
       
    5. **JoltTransformJSON**
        1. The JoltTransformJSON processor is used to prepare the required JSON format of Fulfilled Order Items Feed for HotWax.
       
    6. **PutSFTP**
       1. The PutSFTP processor is used to put the Fulfilled Order Items Feed CSV file at the SFTP.

### Mapping of NetSuite Fulfilled Order Items Feed with HotWax Feed File format

| NetSuite Field Name | Data Type |  Field Description                                | HotWax Field Name  |
|---------------------|-----------|------------------------------------------------------|--------------------|
| orderId             | String    | The unique ID of an order in the system.             | orderId            |
| orderItemSeqId      | String    | The line ID of an order item in the system.          | orderItemSeqId     |
| externalFacilityId  | String    | The facility, assigned to the order item.            | externalFacilityId |
| shippedDate         | Date      | The date when the order is shipped.                  | shippedDate        |
| quantity            | String    | The quantity of an order item.                       | quantity           |
| trackingNumber      | String    | The tracking No. assign to an order item.            | trackingNumber     |
| carrier             | String    | The shipping carrier which is used to ship an order. | carrier            |


### Custom handling in Fulfilled Order Items Feed For HotWax

1. **shippedDate**
   1. From NetSuite, the shippedDate format in the Fulfilled Order Items Feed CSV is 7/3/2023 6:36 am (M/D/YYYY hh:mm am/pm).
   2. But at HotWax the required date format is 'YYYY-MM-DD HH:MM:SS'.