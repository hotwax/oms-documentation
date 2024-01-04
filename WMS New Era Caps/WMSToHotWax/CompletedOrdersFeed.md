## Completed Orders Feed From WMS to HotWax

### Sample Excel schema of Completed Orders Feed From WMS
| DO#         | 日付       | 個数 | 問い合せNo         | 便名     |
|-------------|------------|------|--------------------|----------|
| 1000879842  | 20230420   | 1    | 361054809931      | 佐川急便 |
| 1000879889  | 20230420   | 1    | 361054812300      | 佐川急便 |

### Sample JSON schema of Completed Orders Feed For HotWax
```json
[
  {
    "orderMap": {
      "orderId": "10013",
      "items": [
        {
          "orderItemSeqId": 101,
          "externalFacilityId": 1,
          "shippedDate": "20230420",
          "quantity": "1",
          "trackingNumber": "361054812300",
          "carrier": "佐川急便",
          "validation-result": "success"
        }
      ]
    }
  }
]
```

### Requirement

Streamline the process to read the Completed Orders Feed Excel file format of shipped orders sent by the WMS, fetch the required order item details from HotWax for the respective shipped orders and prepare the JSON file format that will be further used to mark the order items as fulfilled at HotWax.

### Design and Decisions

1. A Completed Orders Feed file in Excel format, will be received on the SFTP by the WMS at the end of each day. 
2. This file will contain specific details of shipped orders, including order ID, date, quantity, tracking number, and shipping carrier. 
3. While HotWax will receive order IDs with tracking and shipping details from the WMS, the process for marking orders as fulfilled in HotWax will also require items and ship group information for the respective orders. 
4. An automated flow should be designed to retrieve the necessary order item and ship group details to prepare a JSON file format required by HotWax.


### Implementation Flow

1. NiFi:
   1. NiFi will read the Completed Orders Feed file from designated SFTP location, and extract the order IDs, along with their corresponding tracking and shipping details.
   2. Using the extracted order IDs, the flow will query HotWax to fetch the required order item details, such as items and ship group information, though the details are not provided in the WMS feed but these details are necessary for marking order items as fulfilled in HotWax.
   3. In the further process the flow will combine the dataset from the WMS feed with the data fetched from HotWax, it will map and merge the fields as needed. 
   4. Afterward a JSON file format will be prepared, containing the combined information of orders and their items.  
   5. NiFi will place the prepared JSON file format of the Completed Orders Feed on SFTP location for HotWax consumption.


### NiFi Flow

1. This NiFi flow automates the handling to prepare and send the Store Fulfilled Order Items Feed from HotWax to BI/BW.
   It utilizes a sequence of processors to seamlessly manage data preparation and conversions for the Store Fulfilled Order Items Feed.
    1. **ListSFTP**
        1. The ListSFTP processor is configured to read and process the Completed Orders Items feed file from the SFTP location.

    2. **FetchSFTP**
        1. The FetchSFTP processor will move the Completed Orders Items feed file into the archive folder, this needed to keep the information of the files that are processed by NiFi.

    3. **ConvertExcelToCSVProcessor**
       1. The ConvertExcelToCSVProcessor processor is used to convert the Excel file format to the CSV file format.
       
    4. **SplitRecord**
       1. The SplitRecord processor will help to split the records, by splitting the records into smaller batches, we can ensure smooth and efficient processing throughout the flow.
       2. In this flow the records will be split into a single record, each flow file will contain only one record.
       
    5. **JoltTransformJSON**
        1. The JoltTransformJSON processor is used to transform and map the WMS fields to the HotWax fields.

    6. **ForkEnrichment**
       1. The ForkEnrichment processor in NiFi is a key component for enriching data flows with additional information, the processor creates two identical copies of each incoming FlowFile.
       2. In this flow there is a requirement to combine the dataset from the WMS feed with the data fetched from HotWax, to fulfill the requirement the ForkEnrichment processor is being used to create two copies of the WMS feed file one copy will be used to fetch the additional details from HotWax and the original feed file will be used to further combine the data sets.
       
    7. **EvaluateJSONPath**
       1. The processor is used to create the order attribute of extracted order IDs from WMS feed file, further, the attribute will be used in the SQL to fetch the additional details for the respective order.
       
    8. **ExecuteSQLRecord**
       1. The ExecuteSQLRecord processor will retrieve the additional information for the respective order ID attribute using SQL.
       
    9. **JoinEnrichment**
       1. The JoinEnrichment processor will combine the dataset from the WMS feed with the data fetched from HotWax using the join strategy.
       
    10. **JoltTransformJSON**
        1. The JoltTransformJSON processor is used to prepare the required JSON file format of the Completed Order Items Feed for HotWax.

    11. **MergeRecord**
        1. The MergeRecord processor is used to merge the all the flow files in a single flow file to prepare a single JSON file of Completed Orders Feed. 
        
    12. **PutSFTP**
         1. The PutSFTP processor is used to put the Store Fulfilled Order Items Feed CSV file at the SFTP.

### Mapping from the WMS Completed Orders Feed with HotWax File format

| WMS Field Name | Data Type | WMS Field Description | HotWax Completed Order Items Feed Mapping |
|-------|-----------|-----------------------|-------|
| DO#   | Numeric   | The name of the order in the system. | orderName |
| 日付   | Date      | The date when the order is shipped.<br/> <br/> **Note:** The date format will be as 'YYYYMMDD' | shippedDate  |
| 個数    | Quantity  | The quantity of an order in the system. | quantity |
| 問い合せNo | Numeric or Alphanumeric | The tracking no. of an order item in the system. | trackingNumber |
| 便名    | String    | The shipping carrier which is used to ship an order. | carrier |



