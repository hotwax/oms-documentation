# Store Fulfilled Items Inventory Delta Feed

This is a simple CSV structure containing records of fulfilled order items in packed status. CSV contains following details-

| Order ID  | Product ID       | Facility ID | Quantity |
|-----------|------------------|-------------|----------|
| 90002368  | 4550236253399    | 5           | 1        |
| 90002368  | 4550538244309    | 5           | 1        |
| 90002368  | 4550236253399    | 5           | 1        |


## Requirement
The objective of this requirement is to implement an automated system for sending the Store Fulfillment Feed to Smaregi. The feed should include information about all orders in a packed status, and it should be dispatched at regular intervals of every 30 minutes. This process is independent of the order type, encompassing both Ship-from-Store and BOPIS (Buy Online, Pick Up In Store) orders.

Previously, the Store Fulfillment Feed was triggered upon order fulfillment in HotWax. However, the new requirement dictates a shift in the trigger condition. The feed must now be dispatched after an order has been packed, and the frequency should be set to every 30 minutes.

## Design and Decisions

As the Store Fulfillment Order Feed is utilized in Business Intelligence (BI) and Business Warehouse (BW) systems, and the requirement is to trigger the feed when the order header is completed, using the Moqui service is impractical.

To align with the completion of the order header and overcome the limitations of the Moqui service, Apache NiFi was chosen. NiFi's capabilities in data flow automation and integration provide a more tailored and efficient solution for this specific feed, ensuring synchronization with BI/BW systems.

## Implementation

This feed is implemented using Apache NiFi. NiFi is employed to fetch orders in the packed status from a database, transform the data, convert it to CSV format, and distribute it to both a Point of Sale (POS) SFTP location and a Logs folder for Hotwax logging.

Following are the implementation steps-

1. **QueryDatabaseTableRecord Processor**\
The QueryDatabaseTableRecord processor is configured to incrementally fetch orders in the packed status from the database. It uses a SQL query to retrieve only those records that haven't been included in previous feeds. The processor runs at regular intervals, ensuring updated data in each feed.

2. **JoltTransformJson Processor**\
The JoltTransformJson processor is applied to transform the SQL result set into the desired JSON format for the Store Fulfillment Feed. A Jolt specification is defined to map database columns to the required fields in the feed. The processor ensures the correct structure for downstream processing.

3. **ConvertRecord Processor**\
The ConvertRecord processor is configured to convert the transformed JSON data into CSV format. Field mappings are set up to accurately convert JSON fields to CSV columns. The processor enables a seamless transition from JSON to CSV, meeting the requirements of downstream systems.

4. **UpdateAttribute Processor**\
The UpdateAttribute processor is utilized to assign a filename to the generated CSV file. Attributes such as filename, timestamp, or any relevant metadata are updated for better file management.

5. **SFTP Sending for POS**\
An instance of the PutSFTP processor is set up to send the CSV file to the designated SFTP location for POS. The processor is configured with the necessary SFTP connection details, including hostname, port, username, password, and remote directory.

6. **Logging to Logs Folder**\
Another instance of the PutSFTP processor is configured to send a copy of the CSV file to the Logs folder for Hotwax logging. SFTP connection details for the logging directory are adjusted to ensure proper file placement