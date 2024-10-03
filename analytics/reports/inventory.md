---
description: Discover Inventory reports provided by HotWax Commerce
---

# Inventory

## Receiving Discrepancies by Product

This discrepancy report helps retailers maintain inventory accuracy and uphold customer satisfaction. By highlighting inventory received that does not match the expected quantities, such as the example of shoes-M-38 with a discrepancy of 4 units, retailers can identify and rectify issues like shipment errors, theft, or miscounts. Timely detection of such discrepancies enables corrective actions like adjusting stock levels, investigating root causes, and improving receiving processes, ultimately ensuring that customers receive the products they desire when they expect them.

### Glossary

| Field Header | Description                | HC Entity                                                                   |
| ------------ | -------------------------- | --------------------------------------------------------------------------- |
| SKU          | SKU of the product         | Product.INTERNAL\_NAME                                                      |
| Difference   | Discrepancies in receiving | Difference of ShipmentReceipt.QUANTITY\_ACCEPTED with ShipmentItem.QUANTITY |

<details>

<summary><strong>SQL Query to Generate Receiving Discrepancies by Product Report</strong></summary>

```sql
SELECT `SKU` AS `SKU`,
       SUM(ABS(Difference)) AS `SUM(ABS(Difference))`
FROM
  (SELECT s.External_Id AS Shipment_Id,
          s.Shipment_Id as HotWax_Shipment_Id,
          sa.Attr_Value AS Transfer_Order,
          S.EXTERNAL_ID as EXTERNAL_ID,
          p.internal_name AS SKU,
          s.Origin_Facility_Id AS Origin_Facility_Id,
          f2.Facility_Name AS Origin_Facility,
          s.DESTINATION_FACILITY_ID AS Destination_Facility_Id,
          s.DESTINATION_FACILITY_ID AS FACILITY_ID,
          f.Facility_Name AS Destination_Facility,
          si.QUANTITY AS Expected,
          sr.QUANTITY_ACCEPTED AS Received,
          (IFNULL(sr.QUANTITY_ACCEPTED, 0) - si.QUANTITY) AS Difference,
          CASE
              WHEN (si.QUANTITY - sr.QUANTITY_ACCEPTED) = 0
                   AND s.external_id IS NOT NULL THEN 'Completed'
              WHEN sr.QUANTITY_ACCEPTED IS NULL
                   AND s.external_id IS NOT NULL THEN 'NotReceived'
              WHEN (si.QUANTITY - sr.QUANTITY_ACCEPTED) < 0
                   AND s.external_id IS NOT NULL
                   AND si.QUANTITY != 0 THEN 'OverReceived'
              WHEN (si.QUANTITY - sr.QUANTITY_ACCEPTED) > 0
                   AND s.external_id IS NOT NULL THEN 'UnderReceived'
              WHEN si.QUANTITY = 0
                   AND sr.QUANTITY_ACCEPTED IS NOT NULL THEN 'Manually added item to transfer order'
          END AS Status,
          ss.STATUS_DATE AS Received_Date
   FROM shipment s
   JOIN shipment_item si ON s.SHIPMENT_ID = si.SHIPMENT_ID
   LEFT JOIN shipment_receipt sr ON si.SHIPMENT_ID = sr.SHIPMENT_ID
   AND si.SHIPMENT_ITEM_SEQ_ID = sr.SHIPMENT_ITEM_SEQ_ID
   LEFT JOIN shipment_attribute sa ON sa.SHIPMENT_ID = si.SHIPMENT_ID
   LEFT JOIN product p ON p.PRODUCT_ID = si.PRODUCT_ID
   LEFT JOIN facility f ON f.FACILITY_ID = s.DESTINATION_FACILITY_ID
   LEFT JOIN facility f2 ON f2.FACILITY_ID = s.ORIGIN_FACILITY_ID
   LEFT JOIN shipment_status ss ON s.SHIPMENT_ID = ss.SHIPMENT_ID
   AND s.STATUS_ID = ss.STATUS_ID
   WHERE s.SHIPMENT_TYPE_ID = 'IN_TRANSFER'
     AND s.STATUS_ID = 'PURCH_SHIP_RECEIVED'
     AND date(ss.STATUS_DATE) > DATE(now() - INTERVAL 1 MONTH)
     AND sa.Attr_Name = 'EXTERNAL_ORDER_NAME') AS virtual_table
WHERE `Status` != 'Completed'
  AND `Received_Date` >= STR_TO_DATE('2024-05-01 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `Received_Date` < STR_TO_DATE('2024-05-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
GROUP BY `SKU`
ORDER BY `SUM(ABS(Difference))` DESC
LIMIT 10000;
```

</details>

### Query Logic

**Data Selection:** Data selection involves gathering essential details from various tables. It selects shipment IDs, product SKUs, quantities, and facility information, providing insights into discrepancies in received shipments. This curated data forms the foundation for the report, enabling effective analysis and resolution of discrepancies.

**Joining Relevant Tables:** To compile a comprehensive dataset, the SQL query fetches information about shipments, products, facilities, and statuses. By joining these tables, the query gathers all the necessary information needed to understand discrepancies in received shipments.

**Selecting Necessary Information:** Once the tables are connected, the query selects specific details crucial for the report. It picks essential information like shipment IDs, product SKUs, facility IDs, expected and received quantities, and dates. These details provide insights into where the discrepancies occur, what products are involved, and when the shipments were received. This approach allows the report to focus on the key aspects of receiving discrepancies, enabling users to pinpoint issues and take corrective actions effectively.

**Calculating Differences and Defining Statuses:** Within the subquery, the query calculates the difference between expected and received quantities by subtracting the Quantity Accepted from the quantity. A status is assigned to each shipment item based on this difference, categorizing shipments into `Completed`, `NotReceived`, `OverReceived`, `UnderReceived`, and `Manually added item to transfer order`.

**Grouping Data:** The query groups the data by `Destination_Facility_Id` and `SKU`. This grouping helps to summarize and organize the discrepancies for each product at each facility.

**Ordering:** The query orders the results in descending order based on the total discrepancies, ensuring the product with more discrepancies appears first.

## Recorded Variances Report

This report provides retailers with detailed insights into discrepancies in inventory levels across different products and facilities. By highlighting specific product SKUs that have experienced variances and outlining the reasons behind these discrepancies, the report allows retailers to pinpoint areas of concern swiftly and accurately. Understanding the root causes of inventory discrepancies enables retailers to take proactive measures to rectify issues, whether they stem from inaccuracies in recording, theft, damage, or other factors.

This report helps in optimizing inventory management by ensuring that stock levels align with demand and sales forecasts. By identifying variances promptly, retailers can prevent overstocking or stockouts, thus minimizing potential revenue losses.

### Glossary

| Field Header    | Description                                                                                | HC Entity                                         |
| --------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| Facility        | Location of a physical store or warehouse                                                  | Facility.FACILITY\_NAME                           |
| Facility ID     | An identifier used to distinguish one facility from another uniquely                       | Facility.FACILITY\_ID                             |
| SKU             | Each product's unique code assigned for inventory management and tracking                  | GoodIdentification.ID\_VALUE                      |
| Adjustment date | The date on which a change or modification is made                                         | InventoryItemVariance.CREATED\_STAMP              |
| User            | A person or system that interacts with the system                                          | InventoryItemVariance.CHANGE\_BY\_USER\_LOGIN\_ID |
| Quantity        | The numerical amount or count of a product                                                 | InventoryItemVariance.QUANTITY\_ON\_HAND\_VAR     |
| Description     | A detailed explanation often used to provide information about products                    | VarianceReason.DESCRIPTION                        |
| Enum ID         | Short for "Enumeration Identifier," it refers to a unique identifier within an enumeration | Enumeration.ENUM\_TYPE\_ID                        |
| Comments        | Additional remarks or information provided to explain                                      | InventoryItemVariance.COMMENTS                    |

<details>

<summary><strong>SQL Query to Generate Recorded Variances Report</strong></summary>

```sql
SELECT `Facility Id` AS `Facility Id`,
       `Facility` AS `Facility`,
       `SKU` AS `SKU`,
       DATE_FORMAT(`Adjustment Date`, "%Y-%m-%d %H:%i %p") AS `Adjustment date`,
       `User` AS `User`,
       `Quantity` AS `Quantity`,
       `Description` AS `Description`,
       `Enum ID` AS `Enum ID`,
       `Comments` AS `Comments`
FROM
  (SELECT fa.facility_id AS 'Facility Id',
          fa.facility_id AS 'FACILITY_ID',
          fa.facility_name AS 'Facility',
          gi.id_value AS 'SKU',
          iiv.quantity_on_hand_var AS 'Quantity',
          iiv.change_by_user_login_id AS 'User',
          iiv.CREATED_STAMP AS 'Adjustment Date',
          vr.description AS 'Description',
          iiv.comments AS 'Comments',
          e.enum_type_id 'Enum ID'
   FROM physical_inventory pi
   LEFT JOIN inventory_item_variance iiv ON pi.physical_inventory_id = iiv.physical_inventory_id
   LEFT JOIN inventory_item ii ON iiv.inventory_item_id = ii.inventory_item_id
   LEFT JOIN product pr ON ii.product_id = pr.product_id
   LEFT JOIN facility fa ON ii.facility_id = fa.facility_id
   LEFT JOIN good_identification gi ON pr.product_id = gi.product_id
   AND (GI.THRU_DATE > NOW()
        OR GI.THRU_DATE IS NULL)
   JOIN product_category_member pcm ON pr.product_id = pcm.product_id
   AND product_category_id ='PURCHASE_ALLOW'
   JOIN variance_reason vr ON vr.variance_reason_id = iiv.variance_reason_id
   JOIN enumeration e ON e.enum_id = vr.variance_reason_id
   WHERE gi.good_identification_type_id = "UPCA"
     AND (PCM.THRU_DATE IS NULL
          OR PCM.THRU_DATE > NOW())
     AND e.enum_type_id = "IID_REASON"
     AND iiv.variance_reason_id <> "POS_SALE"
     AND fa.facility_id <> "BDC") AS virtual_table
WHERE `Description` != 'Adjustment'
  AND `Adjustment Date` >= STR_TO_DATE('2024-05-01 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `Adjustment Date` < STR_TO_DATE('2024-05-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
LIMIT 50000;
```

</details>

### Query Logic

**Data Selection:** The SQL query gathers data from multiple tables including `physical_inventory`, `inventory_item_variance`, `product`, `facility`, and others. These tables provide essential information such as facility IDs, SKUs, adjustment dates, quantities, users, descriptions, and comments necessary for analyzing inventory variances.

**Filtering Criteria:** To focus the report on relevant variances, the query applies several filtering criteria:

* It selects adjustments made for products identified by their UPC code (`good_identification_type_id = "UPCA"`).
* Only adjustments related to products with the product category `PURCHASE_ALLOW` are included.
* Adjustments labeled as `POS_SALE` are excluded, as they typically do not represent inventory discrepancies.
* Adjustments associated with a specific facility ID ("BDC") are also excluded, based on business requirements.
* The query further refines the dataset by specifying a date range for the adjustment date, ensuring that only adjustments within the specified timeframe are included in the report.

**Column Selection:** Essential columns such as facility IDs, SKUs, adjustment dates, quantities, users, descriptions, and comments are selected to provide insights into inventory adjustments. This selection enables retailers to identify specific products, facilities, and reasons behind variances.

**Grouping Data:** The query groups the selected data based on certain criteria such as facility IDs, SKUs, adjustment dates, and descriptions. Grouping the data helps organize it logically, making it easier to analyze and identify patterns in inventory adjustments.

## Open Inbound Shipment Report

This report facilitates the management of open inbound shipments for retailers by providing an overview of the transfer process, enhancing accuracy and operational efficiency.

For retailers, this report helps monitor the status of inbound shipments, tracks their journey to destination facilities, and verifies the receipt of goods. Key details such as destination facility, external ID (Netsuite ID), tracking code, and WMS (Warehouse Management System) ID are included, offering a detailed overview of each inbound shipment for streamlined identification and effective management.

### Glossary

| Field Header      | Description                                                   | HC Entity                                 |
| ----------------- | ------------------------------------------------------------- | ----------------------------------------- |
| External ID (WMS) | Identification code used in the WMS to track items externally | Shipment.EXTERNAL\_ID                     |
| External ID       | An identification code used externally for tracking purposes  | Shipment.SHIPMENT\_ID                     |
| Tracking code     | Code used to monitor the orders                               | ShipmentRouteSegment.TRACKING\_ID\_NUMBER |
| Facility          | Location of a physical store or warehouse                     | Facility.FACILITY\_NAME                   |

<details>

<summary><strong>SQL Query to Generate Open Inbound Shipment Report</strong></summary>

```sql
SELECT shipment_id AS shipment_id,
       hotwax_shipment_id AS hotwax_shipment_id,
       gobolt_order_name AS gobolt_order_name,
       origin_facility AS origin_facility,
       shipment_status AS shipment_status,
       DATE(imported_date) AS imported_date,
       destination_facility AS destination_facility,
       tracking_number AS tracking_number,
       sum(quantity) AS quantity
FROM
  (SELECT s.External_Id AS shipment_id,
          s.Shipment_Id AS hotwax_shipment_id,
          sa.Attr_Value AS gobolt_order_name,
          s.Origin_Facility_Id AS origin_facility_id,
          s.Origin_Facility_Id AS 'FACILITY_ID',
          f2.Facility_Name AS origin_facility,
          s.DESTINATION_FACILITY_ID AS destination_facility_id,
          f.Facility_Name AS destination_facility,
          'Receiving Pending' AS shipment_status,
          ss.STATUS_DATE AS imported_date,
          IFNULL(srs.TRACKING_ID_NUMBER, "Not Available") AS tracking_number,
          p.internal_name AS 'SKU',
          si.quantity AS quantity
   FROM shipment s
   LEFT JOIN shipment_status ss ON s.SHIPMENT_ID = ss.SHIPMENT_ID
   AND s.STATUS_ID = ss.STATUS_ID
   LEFT JOIN shipment_attribute sa ON s.SHIPMENT_ID = sa.SHIPMENT_ID
   AND sa.ATTR_NAME = 'EXTERNAL_ORDER_NAME'
   LEFT JOIN shipment_route_segment srs ON srs.SHIPMENT_ID = s.SHIPMENT_ID
   LEFT JOIN facility f ON s.DESTINATION_FACILITY_ID = f.FACILITY_ID
   LEFT JOIN facility f2 ON s.ORIGIN_FACILITY_ID = f2.FACILITY_ID
   JOIN shipment_item si ON si.SHIPMENT_ID = s.SHIPMENT_ID
   JOIN product p ON p.product_id = si.product_id
   WHERE S.SHIPMENT_TYPE_ID IN ('IN_TRANSFER')
     AND s.STATUS_ID IN ('PURCH_SHIP_SHIPPED')) AS virtual_table
WHERE imported_date >= STR_TO_DATE('2024-05-01 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND imported_date < STR_TO_DATE('2024-05-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
GROUP BY shipment_id,
         hotwax_shipment_id,
         gobolt_order_name,
         origin_facility,
         shipment_status,
         DATE(imported_date),
         destination_facility,
         tracking_number
ORDER BY quantity DESC
LIMIT 50000;
```

</details>

### Query Logic

**Data Selection:** The SQL query selects specific details related to inbound shipments from the database. This includes information such as shipment ID, HotWax shipment ID, order name, origin and destination facilities, shipment status, import date, tracking number, and quantity.

**Defining Criteria:** The query filters the selected data to include only inbound shipments that are open. These are typically shipments that are in transit or awaiting receipt at the destination facility. The specific criteria for identifying open inbound shipments involves checking their status or other attributes.

**Joining Relevant Tables:** To gather comprehensive information, the query joins multiple tables such as `shipment`, `shipment_status`, `shipment_attribute`, `facility`, `shipment_route_segment`, `shipment_item`, and `product`. These tables are connected using common fields to provide a complete picture of each inbound shipment, including its status updates, attributes, route segments, facilities involved, items, and products.

**Grouping Data:** This query groups the selected data by certain attributes such as shipment IDs, origin facilities, or destination facilities. Grouping the data allows for a summarized view of inbound shipments, making it easier to analyze trends and identify patterns.

## Receiving Report

By analyzing this report, retailers can gain insights into the incoming inventory flow, associated transfer orders, and the receiving method employed. This information enables them to track and manage inventory accurately, ensuring optimal stock levels and efficient warehouse operations.

It provides a comprehensive overview of received inventory, aiding retailers in managing their store or warehouse inventory effectively. It includes details such as received date, origin and destination facility IDs, expected quantities, shipment IDs, transfer orders, SKUs, received quantities, differences, and shipment statuses. Additionally, the receiving method (e.g., manual count, automated scanning) is tracked to understand the process employed for inventory reception and to identify any potential issues in the receiving workflow.

### Glossary

| Field Header            | Description                                                                              | HC Entity                                                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Original Facility ID    | ID of the facility where the shipment originated                                         | Shipment.ORIGIN\_FACILITY\_ID                                                                                                                                                       |
| Destination Facility ID | ID of the facility where the shipment was delivered                                      | Shipment.DESTINATION\_FACILITY\_ID                                                                                                                                                  |
| Expected                | Expected quantity of items                                                               | ShipmentItem.QUANTITY                                                                                                                                                               |
| Shipment ID             | Unique identifier for the shipment                                                       | Shipment.EXTERNAL\_ID                                                                                                                                                               |
| Transfer Order          | Transfer order number associated with the shipment                                       | ShipmentAttribute.ATTR\_VALUE where the ShipmentAttribute.ATTR\_NAME is set to EXTERNAL\_ORDER\_NAME                                                                                |
| SKU                     | SKU of the product                                                                       | Product.INTERNAL\_ID                                                                                                                                                                |
| Received                | Quantity of items received                                                               | ShipmentReceipt.QUANTITY\_ACCEPTED                                                                                                                                                  |
| Difference              | Discrepancies in receiving                                                               | Difference of ShipmentReceipt.QUANTITY\_ACCEPTED and ShipmentItem.QUANTITY                                                                                                          |
| Status                  | The status of the order based on the difference between expected and received quantities | Conditions applied to ShipmentItem.QUANTITY - ShipmentReceipt.QUANTITY\_ACCEPTED (e.g., Completed, NotReceived, OverReceived, UnderReceived, Manually added item to transfer order) |

<details>

<summary><strong>SQL Query to Generate Receiving Report</strong></summary>

```sql
SELECT DATE(`Received_Date`) AS `Received_Date`,
       `Origin_Facility_Id` AS `Origin_Facility_Id`,
       `Destination_Facility_Id` AS `Destination_Facility_Id`,
       `Expected` AS `Expected`,
       `Shipment_Id` AS `Shipment_Id`,
       `Transfer_Order` AS `Transfer_Order`,
       `SKU` AS `SKU`,
       `Received` AS `Received`,
       `Difference` AS `Difference`,
       `Status` AS `Status`
FROM
  (SELECT s.External_Id AS Shipment_Id,
          s.Shipment_Id AS HotWax_Shipment_Id,
          sa.Attr_Value AS Transfer_Order,
          s.EXTERNAL_ID AS EXTERNAL_ID,
          p.internal_name AS SKU,
          s.Origin_Facility_Id AS Origin_Facility_Id,
          f2.Facility_Name AS Origin_Facility,
          s.DESTINATION_FACILITY_ID AS Destination_Facility_Id,
          s.DESTINATION_FACILITY_ID AS FACILITY_ID,
          f.Facility_Name AS Destination_Facility,
          si.QUANTITY AS Expected,
          sr.QUANTITY_ACCEPTED AS Received,
          (IFNULL(sr.QUANTITY_ACCEPTED, 0) - si.QUANTITY) AS Difference,
          CASE
              WHEN (si.QUANTITY - sr.QUANTITY_ACCEPTED) = 0
                   AND s.external_id IS NOT NULL THEN 'Completed'
              WHEN sr.QUANTITY_ACCEPTED IS NULL
                   AND s.external_id IS NOT NULL THEN 'NotReceived'
              WHEN (si.QUANTITY - sr.QUANTITY_ACCEPTED) < 0
                   AND s.external_id IS NOT NULL
                   AND si.QUANTITY != 0 THEN 'OverReceived'
              WHEN (si.QUANTITY - sr.QUANTITY_ACCEPTED) > 0
                   AND s.external_id IS NOT NULL THEN 'UnderReceived'
              WHEN si.QUANTITY = 0
                   AND sr.QUANTITY_ACCEPTED IS NOT NULL THEN 'Manually added item to transfer order'
          END AS Status,
          ss.STATUS_DATE AS Received_Date
   FROM shipment s
   JOIN shipment_item si ON s.SHIPMENT_ID = si.SHIPMENT_ID
   LEFT JOIN shipment_receipt sr ON si.SHIPMENT_ID = sr.SHIPMENT_ID
   AND si.SHIPMENT_ITEM_SEQ_ID = sr.SHIPMENT_ITEM_SEQ_ID
   LEFT JOIN shipment_attribute sa ON sa.SHIPMENT_ID = si.SHIPMENT_ID
   LEFT JOIN product p ON p.PRODUCT_ID = si.PRODUCT_ID
   LEFT JOIN facility f ON f.FACILITY_ID = s.DESTINATION_FACILITY_ID
   LEFT JOIN facility f2 ON f2.FACILITY_ID = s.ORIGIN_FACILITY_ID
   LEFT JOIN shipment_status ss ON s.SHIPMENT_ID = ss.SHIPMENT_ID
   AND s.STATUS_ID = ss.STATUS_ID
   WHERE s.SHIPMENT_TYPE_ID = 'IN_TRANSFER'
     AND s.STATUS_ID = 'PURCH_SHIP_RECEIVED'
     AND DATE(ss.STATUS_DATE) > DATE(NOW() - INTERVAL 1 MONTH)
     AND sa.Attr_Name = 'EXTERNAL_ORDER_NAME') AS virtual_table
WHERE `Received_Date` >= STR_TO_DATE('2024-05-05 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `Received_Date` < STR_TO_DATE('2024-05-12 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
GROUP BY DATE(`Received_Date`),
         `Origin_Facility_Id`,
         `Destination_Facility_Id`,
         `Expected`,
         `Shipment_Id`,
         `Transfer_Order`,
         `SKU`,
         `Received`,
         `Difference`,
         `Status`
LIMIT 100;
```

</details>

### Query Logic

**Data Selection:** The SQL query retrieves data from the `shipment` table along with relevant attributes and statuses. It selects fields such as received date, origin and destination facility IDs, expected quantity, shipment ID, transfer order, SKU, received quantity, difference, and status. These fields provide comprehensive information about the receiving process for inbound transfers.

**Filtering Criteria:** To generate the report for receiving, the query applies specific filtering criteria:

* It selects inbound transfer shipments with a status of `PURCH_SHIP_RECEIVED`, indicating that they have been received.
* The query further refines the dataset by specifying a date range for the received date, ensuring that only shipments received within the specified timeframe are included in the report.
* Additionally, only shipments with an external order name attribute are considered, indicating that they are part of a transfer order.

**Column Selection:** Columns such as received date, origin and destination facility IDs, expected quantity, shipment ID, transfer order, SKU, received quantity, difference, and status are selected. These columns provide insights into the receiving process for inbound transfers, allowing users to track and manage received quantities effectively.

**Calculating Difference and Status:** The query calculates the difference between the expected and received quantities for each shipment item. Based on this difference and other conditions such as the presence of an external order name and the status of the shipment, it assigns a status to each item indicating whether it was received correctly, over-received, under-received, or not received at all.

**Grouping Data:** The query groups the selected data by various attributes such as received date, origin and destination facility IDs, expected quantity, shipment ID, transfer order, SKU, received quantity, difference, and status. Grouping the data helps organize it logically and facilitates analysis of the receiving process for inbound transfers.


## Completed cycle report

This report helps retailers maintain accurate inventory records and ensure operational efficiency. By detailing the expected quantity of items, the quantity counted, and any variances discovered during the counting process, this report provides insights into the accuracy of inventory levels. Moreover, it records essential information such as who conducted the cycle count, the facility where it was performed, as well as the submission and completion dates.

This Report  allows retailers to identify discrepancies between expected and actual inventory levels promptly, enabling timely investigation and resolution of any issues such as theft, damage, or discrepancies in record-keeping. This helps in maintaining inventory accuracy, which is important for optimizing stocking levels, preventing stockouts or overstock situations, and ultimately improving customer satisfaction.

The submission and completion dates listed in the report provide insights into the efficiency of the inventory management process. Retailers can track how quickly cycle counts are conducted and completed, allowing them to assess the effectiveness of their inventory management practices and identify areas for improvement.

### User
Head of Store, Vice President of Retail

### Report Glossary
| Field             | Description                                       |
|-------------------|---------------------------------------------------|
| Facility          | Location of a physical store or warehouse.       |
| SKU               | Unique product code for tracking.                 |
| Expected Quantity | Anticipated stock amount.                         |
| Variance          | Discrepancy between expected and counted product. |
| Quantity Counted  | Actual amount observed.                           |
| User              | Individual conducting inventory tasks.            |
| Line Status       | Current state of the inventory item.             |
| Submitted Date    | Date of data entry.                              |
| Completed Date    | Date of task completion.                          |                                                   

## Open Transfer order shipment

This report provides insights into the movement of inventory within the supply chain. It offers an overview of the transfer process by presenting shipment IDs, origin and destination facilities, tracking numbers, and pending quantities for reception. 

it enables efficient inventory management by identifying precisely which products are in transit and yet to be received, allowing retailers to anticipate stock availability accurately.

### User
Head of Store, Vice President of Retail

### Glossary

| Field              | Description                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------|
| hotwax_shipment_id | Unique identifier specific to the HotWax Commerce.                                                 |
| shipment_id       | A unique identifier for each shipment.                                                             |
| WMS_order_name    | The name of the order within the warehouse management system.                                      |
| origin_facility   | The facility or location where the shipment originated from.                                        |
| shipment_status   | The shipment's current status (e.g., delivered, pending).                                           |
| imported_date     | The date when the shipment information was imported or recorded.                                    |

## POS orders vs POS variances 

Retailers require this report to effectively manage their inventory and streamline operations. By tracking POS-completed orders and ensuring that the same inventory variance is logged into the ERP system the retailer gains insights into any possible inventory discrepancy. 

This report provides information about the quantity variance between pos orders and pos variance. Retailers can identify the problematic orders with incorrect inventory variance and resolve the errors, if any. 

### User
Head of Store, Vice President of Retail

### Glossary

| Field        | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| ORDER_NAME   | Name associated with the order.                                                                          |
| ORDER_ID     | A unique identifier for each order.                                                                      |
| ENTRY_DATE   | The date when the order was entered or recorded.                                                         |
| SKU          | Stock Keeping Unit, a unique code assigned to each distinct product or item in inventory.                |
| SALES        | The amount of sales associated with the order.                                                           |
| QOH variance | Stands for "Quantity On Hand variance," representing the variance in Sync inventory from QOH.           |

## Shipment by Tracking Number Report

The Shipment by Tracking Number Report is valuable for retailers as it shows information such as Shopify ID, Tracking Number, Shipping Method, Shipping Location, Destination Address, and Units Shipped. 

Retailers require a report that can help them track and manage their shipments, ensuring transparency and accountability throughout the Shipment process. By having a clear overview of which orders have been shipped, where they are in transit, and their expected delivery destinations, retailers can optimize their supply chain.

### User
Head of Store, Vice President of Retail

### Glossary
| Field             | Description                                                                                        |
|-------------------|---------------------------------------------------------------------------------------------------------|
| Shopify ID        | A unique identifier assigned to each order within the Shopify platform. It helps track and manage orders efficiently. |
| Tracking Number   | A unique code assigned to a shipment by the carrier.                                                    |
| Shipping Method   | The specific method or service used to deliver the package, such as standard shipping, expedited shipping, or a specific courier service. |
| Shipping Location | The shipment's origin or point of dispatch, such as a warehouse or fulfillment center.                  |
| Units Shipped     | The quantity of items included in the shipment. It helps ensure that the correct number of products is sent to the customer. |

## Pending Cycle Count report

The Pending Cycle Count report presents products awaiting counting at a facility where a recent cycle count has occurred. Inactive products, characterized by a zero inventory that has remained unchanged for the last month, are excluded to ensure that only active products are included in the report. This selective approach aims to provide an accurate representation of products requiring attention for inventory verification and reconciliation.

### Glossary

| Field          | Description                                               |
| -------------- | --------------------------------------------------------- |
| FACILITY\_ID   | The unique identifier for the facility in external system |
| FACILITY\_NAME | The name of the facility in external system               |
| PRODUCT\_ID    | The ID of the product in HotWax Commerce                  |
| PRODUCT\_SKU   | Unique identifier                                         |



