---
description: Discover Order reports provided by HotWax Commerce
---

# Orders

## HotWax Order Count Report

The HotWax Order Count Report offers a daily snapshot of new orders in the Order Management System (OMS), providing a quick reference for monitoring overall order activity and facilitating proactive decision-making. In the Shopify context, this report ensures seamless synchronization by comparing daily order counts. It serves as a vital tool for merchants, quickly identifying and addressing any discrepancies in the synchronization process, ensuring accurate and efficient order fulfillment.

### Glossary

| Field Header | Description                                    | HC Entity                         |
| ------------ | ---------------------------------------------- | --------------------------------- |
| ORDER\_COUNT | The count of the orders in the HotWax Commerce | Count of OrderHeader.EXTERNAL\_ID |

<details>

<summary><strong>SQL Query to Generate HotWax Order Count Report</strong></summary>

```sql
SELECT count(`EXTERNAL_ID`) AS `COUNT(EXTERNAL_ID)`
FROM
  (SELECT oh.ORDER_ID ,
          oh.EXTERNAL_ID ,
          CASE
              WHEN oh.SALES_CHANNEL_ENUM_ID = 'POS_SALES_CHANNEL' THEN 'POS'
              ELSE 'Shopify'
          END AS SALES_CHANNEL ,
          oh.STATUS_ID ,
          oh.ORDER_DATE
   FROM order_header oh
   WHERE oh.ORDER_TYPE_ID = 'SALES_ORDER') AS virtual_table
WHERE (`STATUS_ID` NOT IN ('ORDER_CANCELLED'))
  AND `ORDER_DATE` >= STR_TO_DATE('2023-05-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `ORDER_DATE` < STR_TO_DATE('2024-05-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
LIMIT 100000;
```

</details>

### Query Logic

**Data Selection:** The SQL query selects specific data fields required for the report. This typically includes information about orders, such as order IDs and other relevant details.

**Filtering HotWax Orders:** The primary objective of the report is to count orders processed by the HotWax system. Therefore, the query includes conditions to filter the data and include only orders processed by HotWax.

**Joining Relevant Tables:** To compile a comprehensive dataset, the SQL query joins tables containing order information. This typically involves joining the `order_header` table with other relevant tables based on common fields like `ORDER_ID`.

**Selecting Necessary Information:** From the joined tables, the query selects columns related to order details needed for analysis or reporting. This could include order IDs, order dates, and other relevant information.

**Filtering and Grouping Data:** Conditions are applied to filter the data and include only orders processed by HotWax. This might involve checking if certain attributes or flags indicate that the order was processed by HotWax. The query groups the selected data based on certain criteria, such as order IDs or dates. Grouping data helps summarize and organize it for analysis.

**Counting HotWax Orders:** Within each group, the query counts the number of orders processed by HotWax. This provides insights into the volume of orders processed by the system over a specified period.

## Sales Order Count by Channel Report

Retailers receive orders through various channels, including eCommerce websites, social media platforms, online marketplaces, and point-of-sale (POS) systems. Retailers need visibility of their sales into channel performance. The Sales Order Count by Channel report offers a clear summary of order counts per channel, enabling retailers to identify high-performing channels and areas needing improvement. Retailers can easily discern the total count of orders per channel, whether it's from POS, Shopify, or any other channel enabling effective tracking and analysis.

### Glossary

| Field Header        | Description                                                             | HC Entity                            |
| ------------------- | ----------------------------------------------------------------------- | ------------------------------------ |
| Sales Channel       | Indicates the sales channel, either "POS" or "Shopify".                 | OrderHeader.SALES\_CHANNEL\_ENUM\_ID |
| COUNT(EXTERNAL\_ID) | Denotes the total number of orders received through each sales channel. | OrderHeader.ORDER\_ID                |

<details>

<summary><strong>SQL Query to Generate Sales Order Count by Channel Report</strong></summary>

```sql
SELECT `SALES_CHANNEL` AS `SALES_CHANNEL`,
       count(`EXTERNAL_ID`) AS `COUNT(EXTERNAL_ID)`
FROM
  (SELECT oh.ORDER_ID ,
          oh.EXTERNAL_ID ,
          CASE
              WHEN oh.SALES_CHANNEL_ENUM_ID = 'POS_SALES_CHANNEL' THEN 'POS'
              ELSE 'Shopify'
          END AS SALES_CHANNEL ,
          oh.STATUS_ID ,
          oh.ORDER_DATE
   FROM order_header oh
   WHERE oh.ORDER_TYPE_ID = 'SALES_ORDER') AS virtual_table
WHERE (`STATUS_ID` NOT IN ('ORDER_CANCELLED'))
  AND `ORDER_DATE` >= STR_TO_DATE('2023-05-06 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `ORDER_DATE` < STR_TO_DATE('2024-05-06 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
GROUP BY `SALES_CHANNEL`
ORDER BY `COUNT(EXTERNAL_ID)` DESC
LIMIT 100;
```

</details>

### Query Logic

**Data Selection:** The SQL query selects data from the `order_header` table, focusing on sales orders. It calculates the count of orders received through each sales channel, excluding cancelled orders, within a specific date range.

**Sales Channel:** This field extracts the sales channel information from the `SALES_CHANNEL_ENUM_ID` column in the `order_header` table. If the `SALES_CHANNEL_ENUM_ID` is `POS_SALES_CHANNEL`, it assigns "POS" to the `SALES_CHANNEL` column; otherwise, it assigns "Shopify".

**Count of Orders:** This field calculates the count of orders for each sales channel. It uses the `count()` function to count the occurrences of `EXTERNAL_ID`, representing each order in the dataset. The query aggregates the data by sales channel, counting the number of orders for each channel.

**Filtering:** Orders with a status of `ORDER_CANCELLED` are excluded from the analysis. Additionally, the query filters orders based on their order date, selecting only those within the specified time frame.

**Ordering:** The results are ordered based on the count of orders in descending order, providing insight into which sales channel has the highest volume of orders.

**Limitation:** The query limits the output to the top 100 sales channels by order count.

## Missing Netsuite Order ID Report

Retailers often encounter synchronization issues between Shopify and Netsuite, leading to orders not being properly recorded. This can result in delays and disruptions in order processing and fulfillment, impacting customer satisfaction and revenue. This report is helpful for retailers to troubleshoot issues when orders, that have all the necessary attributes like `SIGNIFYD_APPROVED`, and `NETSUITE_CUSTOMER_ID` are not synchronized with Netsuite. It highlights orders in approved or completed status that lack Netsuite order IDs, indicating synchronization problems. Retailers can view this report to identify problematic orders and rectify errors to ensure all orders are synced with Netsuite. The synchronization process between HotWax and Netsuite may encounter delays. Therefore, this report exclusively displays orders without NetSuite order IDs for over 4 hours.

### Glossary

| Field Header       | Description                                                      | HC Entity                            |
| ------------------ | ---------------------------------------------------------------- | ------------------------------------ |
| ORDER\_NAME        | The name or identifier of the order                              | OrderHeader.ORDER\_NAME              |
| HC\_ORDER\_ID      | The ID assigned to the order in the OMS                          | OrderHeader.ORDER\_ID                |
| HC\_ENTRY\_DATE    | The date and time when the order was entered into the OMS        | OrderHeader.ENTRY\_DATE              |
| TIME\_SINCE\_ENTRY | The time elapsed since the order was entered into the OMS        | OrderHeader.ENTRY\_DATE              |
| SALES\_CHANNEL     | Indicates the sales channel through which the order was received | OrderHeader.SALES\_CHANNEL\_ENUM\_ID |

<details>

<summary><strong>SQL Query to Generate Missing Netsuite Order ID Report</strong></summary>

```sql
SELECT `ORDER_NAME` AS `ORDER_NAME`,
       `HC_ORDER_ID` AS `HC_ORDER_ID`,
       `HC_ENTRY_DATE` AS `HC_ENTRY_DATE`,
       `TIME_SINCE_ENTRY` AS `TIME_SINCE_ENTRY`,
       `SALES_CHANNEL` AS `SALES_CHANNEL`
FROM
  (SELECT oh.ORDER_NAME ,
          oh.ORDER_ID AS HC_ORDER_ID ,
          DATE_FORMAT(oh.ENTRY_DATE, "%m-%d-%Y %h:%i %p") AS HC_ENTRY_DATE ,
          CASE
              WHEN (TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)) < 60 THEN CONCAT((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)), ' mins')
              ELSE CONCAT(FLOOR((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)) / 60), ' hrs ', ((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)) % 60), ' mins')
          END AS TIME_SINCE_ENTRY ,
          e.DESCRIPTION AS SALES_CHANNEL ,
          oh.ENTRY_DATE
   FROM order_header oh
   LEFT JOIN order_identification oid ON oh.ORDER_ID = oid.ORDER_ID
   AND oid.ORDER_IDENTIFICATION_TYPE_ID = 'NETSUITE_ORDER_ID'
   JOIN enumeration e ON oh.SALES_CHANNEL_ENUM_ID = e.ENUM_ID
   WHERE oh.STATUS_ID IN ('ORDER_COMPLETED',
                          'ORDER_APPROVED')
     AND oh.SALES_CHANNEL_ENUM_ID IN ('WEB_SALES_CHANNEL',
                                      'POS_SALES_CHANNEL')
     AND oid.ORDER_ID IS NULL) AS virtual_table
ORDER BY `ENTRY_DATE` ASC
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query starts by selecting specific data from a table named `order_header`. This table contains information about orders, including the order name, order ID, entry date, and sales channel.

**Defining Criteria for Missing IDs:** The report specifically targets orders without a Netsuite order ID (`ORDER_IDENTIFICATION_TYPE_ID = 'NETSUITE_ORDER_ID'`) by filtering data where the Netsuite order ID is null or not present in the database.

**Joining Relevant Tables:** The query joins the `order_header` and `order_identification` tables based on common fields (e.g., `ORDER_ID`) to identify orders and associated identification information.

**Selecting Necessary Information:** Selected columns, such as `ORDER_NAME`, `HC_ORDER_ID`, and `SALES_CHANNEL`, provide context for the missing Netsuite order IDs. Including these details aids in understanding the orders affected by the missing IDs.

**Ordering Results:** The results are ordered by the `ENTRY_DATE` in ascending order, which arranges the orders from oldest to most recent. This organization aids in identifying patterns or trends over time.

## POS Cash Sale Exp Failed Report

The POS Cash Sale Exp Failed Report is a tool for tracking synchronization failures related to Point of Sale (POS) cash sales. This report is instrumental in identifying instances where the synchronization process encountered issues, allowing for a proactive approach to address and resolve these failures. By leveraging this report, organizations can ensure the accuracy and completeness of their POS cash sale data, contributing to a more reliable and efficient sales reporting process.

### Glossary

| Field Header   | Description                                                      | HC Entity                                                                                                       |
| -------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ORDER\_ID      | The ID of the cash sale order in HotWax Commerce                 | OrderHeader.ORDER\_ID                                                                                           |
| EXTERNAL\_ID   | The ID of the cash sale order in external systems                | OrderHeader.EXTERNAL\_ID                                                                                        |
| SALES\_CHANNEL | Indicates the sales channel through which the order was received | OrderHeader.SALES\_CHANNEL\_ENUM\_ID                                                                            |
| LOCATION       | The location where the cash sale order was placed                | Facility.EXTERNAL\_ID                                                                                           |
| DATE           | The date of the cash sale                                        | OrderHeader.ORDER\_DATE                                                                                         |
| CUSTOMER       | The customer associated with the cash sale order                 | OrderHeader.CUSTOMER\_CLASSIFICATION\_ID                                                                        |
| SUBSIDIARY     | The subsidiary information for the cash sale                     | F.EXTERNAL\_ID (Subsidiary is set to 5 specifically for facility 376; rest of the facilities have subsidiary 1) |

<details>

<summary><strong>SQL Query to Generate POS Cash Sales Exp Failed Report</strong></summary>

```sql
SELECT `ORDER_ID` AS `ORDER_ID`,
       `EXTERNAL_ID` AS `EXTERNAL_ID`,
       `SALES_CHANNEL` AS `SALES_CHANNEL`,
       `DATE` AS `DATE`,
       TIME_SINCE_ENTRY AS `TIME_SINCE_ENTRY`,
       `CUSTOMER` AS `CUSTOMER`,
       `SUBSIDIARY` AS `SUBSIDIARY`
FROM
  (SELECT OH.ORDER_NAME AS "ORDER_ID",
          OH.ORDER_ID AS "EXTERNAL_ID",
          E.DESCRIPTION AS "SALES_CHANNEL",
          F.EXTERNAL_ID AS "LOCATION",
          DATE_FORMAT(oh.ENTRY_DATE, "%m-%d-%Y %h:%i %p") AS "DATE",
          CASE
              WHEN (TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)) < 60 THEN CONCAT((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)), ' mins')
              ELSE CONCAT(FLOOR((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)) / 60), ' hrs ', ((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 5 HOUR)) % 60), ' mins')
          END AS TIME_SINCE_ENTRY,
          PI2.ID_VALUE AS "CUSTOMER",
          CASE
              WHEN F.EXTERNAL_ID = "376" THEN "5"
              ELSE "1"
          END AS "SUBSIDIARY",
          oh.ENTRY_DATE
   FROM ORDER_HEADER OH
   JOIN ENUMERATION E ON OH.SALES_CHANNEL_ENUM_ID = E.ENUM_ID
   JOIN ORDER_STATUS OS ON OH.ORDER_ID = OS.ORDER_ID
   AND OH.STATUS_ID = OS.STATUS_ID
   JOIN ORDER_ITEM_SHIP_GROUP OISG ON OH.ORDER_ID = OISG.ORDER_ID
   JOIN FACILITY AS F ON OISG.ORDER_FACILITY_ID = F.FACILITY_ID
   JOIN ORDER_ROLE ODR ON OH.ORDER_ID = ODR.ORDER_ID
   AND ODR.ROLE_TYPE_ID = 'SHIP_TO_CUSTOMER'
   AND (ODR.THRU_DATE IS NULL
        OR ODR.THRU_DATE > NOW())
   JOIN PARTY_IDENTIFICATION PI2 ON ODR.PARTY_ID = PI2.PARTY_ID
   AND PI2.PARTY_IDENTIFICATION_TYPE_ID = 'NETSUITE_CUSTOMER_ID'
   LEFT JOIN ORDER_IDENTIFICATION OID ON OH.ORDER_ID = OID.ORDER_ID
   AND OID.ORDER_IDENTIFICATION_TYPE_ID = 'NETSUITE_ORDER_ID'
   WHERE OH.STATUS_ID = 'ORDER_COMPLETED'
     AND OH.SALES_CHANNEL_ENUM_ID = 'POS_SALES_CHANNEL'
     AND OISG.SHIPMENT_METHOD_TYPE_ID = 'POS_COMPLETED'
     AND OH.ORDER_TYPE_ID = 'SALES_ORDER'
     AND oid.ORDER_ID IS NULL) AS virtual_table
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection**: The query selects specific data from the `ORDER_HEADER` table, including order names, IDs, entry dates, sales channels, and customer information.

**Data Filtering**: Only completed orders (`STATUS_ID = 'ORDER_COMPLETED'`) from the POS sales channel (`SALES_CHANNEL_ENUM_ID = 'POS_SALES_CHANNEL'`) with no associated Netsuite order ID are included.

**Defining Criteria for Failed Export**: The report targets POS cash sales transactions with failed expense exports.

**Joining Relevant Tables**: Tables are joined based on common fields to identify transactions and associated details such as sales channels and error information.

**Selecting Necessary Information**: Selected columns provide context for identifying failed POS cash sales transactions.

**Grouping Data**: The query implicitly groups records based on filtering criteria to focus solely on transactions with failed expense exports.

**Calculating Subsidiary**: In this report, "subsidiary" is the division responsible for each transaction, based on the facility's external ID. Facility ID "376" maps to subsidiary "5," while all others map to subsidiary "1." This helps in financial tracking, operational management, and regulatory compliance. A conditional statement determines the subsidiary based on the facility's external ID, adding context to the order data.

## Duplicate Order

Retailers often face the issue of duplicate orders, which can cause inventory discrepancies and financial losses. For instance, if an order is duplicated and subsequently brokered differently, it can result in ATP (Available to Promise) discrepancies and financial losses for the retailer. Furthermore, it may cause errors when reconciling orders with Netsuite.

The "Duplicate Order" report provides crucial insights into the frequency of duplicate orders by presenting the total count of duplicate orders associated with the same order name. By understanding the extent of duplicate orders, retailers can take necessary actions to ensure that duplicate orders are removed from the system.

### Glossary

| Field Header         | Description                                                              | HC Entity                                                                                         |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| ORDER\_NAME          | Refers to the name or identifier of the order                            | OrderHeader.ORDER\_NAME                                                                           |
| COUNT                | The total number of duplicate orders associated with the same order name | OrderHeader.EXTERNAL\_ID (Count of all the unique ids of orders as stored in the external system) |
| HC\_Order\_Ids       | Comma-separated list of HotWax Commerce Order IDs                        | OrderHeader.ORDER\_ID                                                                             |
| Netsuite\_Order\_Ids | Comma-separated list of NetSuite Order IDs                               | oid.ORDER\_IDENTIFICATION\_TYPE\_ID                                                               |

<details>

<summary><strong>SQL Query to Generate Duplicate Order Report</strong></summary>

```sql
SELECT `ORDER_NAME` AS `ORDER_NAME`,
       `COUNT` AS `COUNT`,
       `HC_Order_Ids` AS `HC_Order_Ids`,
       `Netsuite_Order_Ids` AS `Netsuite_Order_Ids`
FROM
  (SELECT oh.ORDER_NAME,
          COUNT(oh.EXTERNAL_ID) AS COUNT,
          GROUP_CONCAT(oh.ORDER_ID ORDER BY oh.ENTRY_DATE SEPARATOR ', ') AS HC_Order_Ids,
          GROUP_CONCAT(oid.ID_VALUE ORDER BY oh.ENTRY_DATE SEPARATOR ', ') AS Netsuite_Order_Ids,
          MAX(oh.ENTRY_DATE) AS max_entry_date
   FROM order_header oh
   JOIN order_identification oid ON oh.ORDER_ID = oid.ORDER_ID
   AND oid.ORDER_IDENTIFICATION_TYPE_ID = 'NETSUITE_ORDER_ID'
   WHERE oh.STATUS_ID NOT IN ('ORDER_CANCELLED')
     AND oh.ORDER_NAME <> '#11100672002'
   GROUP BY oh.EXTERNAL_ID, oh.ORDER_NAME
   HAVING COUNT(oh.EXTERNAL_ID) > 1) AS virtual_table
ORDER BY max_entry_date DESC
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection**: The query selects four columns: `ORDER_NAME`, `COUNT`, `HC_Order_Ids`, and `Netsuite_Order_Ids` from the `order_header` and `order_identification` tables.

**Counting Duplicate Orders**: Duplicate orders are identified based on their `ORDER_NAME` and `EXTERNAL_ID`, and the `COUNT()` function calculates the number of occurrences of each unique `EXTERNAL_ID`.

**Concatenation of Order IDs**: For each duplicated order, the associated `HC_Order_Ids` (HotWax Commerce Order IDs) and `Netsuite_Order_Ids` (NetSuite Order IDs) are concatenated into comma-separated lists using the `GROUP_CONCAT()` function.

**Filtering Criteria**: Orders with a status of "ORDER\_CANCELLED" and a specific `ORDER_NAME` are excluded from the analysis.

**Grouping and Aggregation**: Data is grouped by `EXTERNAL_ID` and `ORDER_NAME` to aggregate duplicate orders, and the `HAVING` clause filters out orders with a count of occurrences less than 1, ensuring that only duplicate orders are included.

**Ordering by Entry Date**: Results are ordered based on the maximum entry date (`max_entry_date`) of the duplicated orders in descending order, prioritizing the most recent occurrences of duplicate orders for resolution.

## Shopify Order Import Error

When an order fails to transfer from Shopify to Hotwax, it doesn't show up in the OMS, and an error is logged in the EXIM Import record for Shopify orders. The Shopify Order Import Error report details these failed imports, providing the specific errors generated by the system. There are several potential causes for these errors, including data exported from Shopify not being compatible with the OMS, or issues with specific API endpoints, such as inadequate permissions or temporary unavailability. Retailers can use this report to identify problematic orders and troubleshoot accordingly.

### Glossary

| Field Header       | Description                             | HC Entity                         |
| ------------------ | --------------------------------------- | --------------------------------- |
| Shopify Website    | URL of the order on the Shopify website | logInsights.SITE\_TXT\_EN         |
| Error Message      | System-generated error message          | logInsights.ERRORMESSAGE\_TXT\_EN |
| Shopify Order Name | Name of the order in Shopify            | OrderHeader.ORDER\_NAME           |
| Order Created Date | Date when the order was created         | OrderHeader.ORDER\_DATE           |

<details>

<summary><strong>SQL Query to Generate Shopify Order Import Error</strong></summary>

```sql
SELECT `Shopify Website` AS `Shopify Website`,
       `Error message` AS `Error message`,
       `Shopify Order Name` AS `Shopify Order Name`,
       `Order Created Date` AS `Order Created Date`
FROM
  (SELECT site_txt_en AS `Shopify Website`,
          docType,
          errorMessage_txt_en AS `Error message`,
          shopifyOrderName_txt_en AS `Shopify Order Name`,
          tags_txt_en,
          orderCreatedDate_dt AS `Order Created Date`
   FROM logInsights
   WHERE docType ='SHOPIFY_ORDER'
   ORDER BY orderCreatedDate_dt DESC) AS virtual_table
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection**: The query selects specific data from the `logInsights` table, likely containing information related to Shopify orders, including the Shopify website name, error messages, Shopify order names, tags, and order creation dates.

**Defining Selection Criteria**: Data is filtered to include only entries where the document type is `SHOPIFY_ORDER`, ensuring that only relevant Shopify order information is retrieved.

**Identification of Shopify Order Errors**: Within a subquery (`virtual_table`), records with a `docType` of `SHOPIFY_ORDER` are isolated, capturing entries specific to Shopify order imports. The `errorMessage_txt_en` field captures system-generated error messages, providing insights into the nature of import failures.

## Canceled Order Report

Retailers often face challenges in managing and reducing order cancellations. Customers or CSRs may cancel orders due to reasons such as changes in preference, product unavailability, errors in orders, delivery delays, financial constraints, product defects, better offers elsewhere, and miscommunication. The Cancelled Order Report provides weekly insights into cancellation rates, enabling retailers to pinpoint peak cancellation weeks and address underlying causes. It outlines the total number of canceled orders within the OMS, helping retailers businesses enhance customer satisfaction and operational efficiency by addressing root issues effectively. A weekly report is generated for retailers, and the frequency of the report can be updated as per the requirements.

### Glossary

| Field Header               | Description                                                                  | HC Entity                     |
| -------------------------- | ---------------------------------------------------------------------------- | ----------------------------- |
| CANCELLED\_DATE            | The date range during which orders were cancelled (2024-01-28 to 2024-02-04) | OrderStatus.STATUS\_DATETIME  |
| COUNT\_DISTINCT(ORDER\_ID) | The count of distinct order IDs for cancelled orders (11)                    | OrderIdentification.ID\_VALUE |

<details>

<summary><strong>SQL Query to Generate Canceled Order Report</strong></summary>

```sql
SELECT DATE(DATE_SUB(`CANCELLED_DATE`, INTERVAL DAYOFWEEK(`CANCELLED_DATE`) - 1 DAY)) AS `CANCELLED_DATE`,
       count(DISTINCT `ORDER_ID`) AS `COUNT_DISTINCT(ORDER_ID)`
FROM
  (SELECT oid.ID_VALUE AS ORDER_ID,
          oi.ORDER_ID AS HC_ORDER_ID,
          os.STATUS_DATETIME AS CANCELLED_DATE,
          gi.ID_VALUE AS SKU,
          oi.ITEM_DESCRIPTION,
          oi.UNIT_PRICE AS Price,
          en.DESCRIPTION AS REASON,
          oi.EXTERNAL_ID AS External_Id
   FROM order_item oi
   JOIN order_status os ON oi.ORDER_ID = os.ORDER_ID
   AND oi.ORDER_ITEM_SEQ_ID = os.ORDER_ITEM_SEQ_ID
   AND os.STATUS_ID = 'ITEM_CANCELLED'
   JOIN good_identification gi ON oi.PRODUCT_ID = gi.PRODUCT_ID
   AND gi.GOOD_IDENTIFICATION_TYPE_ID = 'SHOPIFY_PROD_SKU'
   JOIN order_identification oid ON oi.ORDER_ID = oid.ORDER_ID
   AND oid.ORDER_IDENTIFICATION_TYPE_ID = 'SHOPIFY_ORD_NAME'
   LEFT JOIN enumeration en ON os.CHANGE_REASON = en.ENUM_ID
   JOIN order_header oh ON oi.ORDER_ID = oh.ORDER_ID
   AND oh.product_store_id = 'STORE'
   WHERE oi.STATUS_ID = 'ITEM_CANCELLED'
   GROUP BY ORDER_ID,
            HC_ORDER_ID,
            CANCELLED_DATE,
            SKU,
            ITEM_DESCRIPTION,
            Price,
            REASON,
            External_Id
   LIMIT 1000) AS virtual_table
GROUP BY DATE(DATE_SUB(`CANCELLED_DATE`, INTERVAL DAYOFWEEK(`CANCELLED_DATE`) - 1 DAY))
LIMIT 100000;
```

</details>

### Query Logic

**Data Selection**:

* **Order IDs and Statuses**: The query selects `oid.ID_VALUE` (order ID) and `os.STATUS_DATETIME` (cancellation date) to track canceled orders.
* **Order Details**: Additional information like `oi.ITEM_DESCRIPTION` (item description), `oi.UNIT_PRICE` (price), and `oi.EXTERNAL_ID` (external ID) is also selected.
* **Product Information**: The query includes `gi.ID_VALUE` (SKU) to identify specific products.
* **Cancellation Reasons**: `en.DESCRIPTION` provides reasons for cancellations.

**Defining Cancellation Criteria**: The query filters the data to include only orders where the status indicates cancellation (e.g., `STATUS_ID = 'ITEM_CANCELLED'`).

**Joining Relevant Tables**: The SQL query joins these tables together based on common fields (e.g., `ORDER_ID`, `ORDER_ITEM_SEQ_ID`, `PRODUCT_ID`) to compile a comprehensive dataset.

**Selecting Necessary Information**: Relevant columns are selected from the joined tables, such as order IDs, cancellation dates, SKUs (product identifiers), item descriptions, prices, cancellation reasons, and external IDs.

**Grouping Data**: The selected data is grouped based on certain criteria, such as order ID, canceled date, SKU, item description, price, cancellation reason, and external ID, to summarize and organize it for analysis.

**Counting Distinct Orders**: Within each group, the query counts the number of distinct order IDs, providing insights into how many unique orders were canceled on each date.

**Calculating Date**: The query calculates the date of the canceled orders by finding the first day of the week for each canceled date, facilitating grouping the cancellations by week.

## Order Approval Duration Graph

Order approval delays can happen due to missing order attributes such as missing customer ID or municipio ID. Delays in order approval can lead to missed delivery deadlines and potential revenue loss.

The Order Approval Duration graph provides information on how long it takes the OMS to approve orders. It has two main attributes: order volume and average approval duration in minutes. This Graph helps in tracking the average approval duration over time. This helps in identifying any deviations from expected performance levels and taking corrective actions promptly.

### Glossary

| Field Header                        | Description                                                                        | HC Entity                                                                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Order Volume                        | This refers to the number of orders received by the system over a specific period. | OrderHeader.ORDER\_ID                                                                                                                        |
| Average Approval Duration (Minutes) | This is the average amount of time it takes for the OMS to approve an order.       | Calculated difference of OrderHeader.ORDER\_DATE and OrderStatus.STATUS\_DATETIME(For “APPROVED” status) divided by 60 to display in minutes |

<details>

<summary><strong>SQL Query to Generate Order Approval Duration Graph</strong></summary>

```sql
SELECT DATE(`ENTRY_DATE`) AS `ENTRY_DATE`,
       AVG(`duration in sec`) / 60 AS `Average approval duration in minutes`,
       count(DISTINCT `Order Id`) AS `Orders Volume`
FROM
  (select oh.ORDER_ID "Order Id",
          oh.ORDER_NAME "Shopify Order Id",
          TIME_FORMAT(SEC_TO_TIME(TIMESTAMPDIFF(SECOND, oh.ORDER_DATE, max(os.status_datetime))), "%H:%i:%s") "Duration",
          TIMESTAMPDIFF(SECOND, oh.ORDER_DATE, max(os.status_datetime)) "duration in sec",
          oh.ENTRY_DATE,
          oh.ORDER_DATE "Created At",
          max(os.status_datetime) "Approved At"
   from order_header oh
   join order_status os on os.ORDER_ID = oh.ORDER_ID
   and os.status_id = "ORDER_APPROVED"
   where os.status_datetime
   group by oh.ORDER_ID
   order by oh.ORDER_ID desc) AS virtual_table
WHERE `Created At` >= STR_TO_DATE('2024-04-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `Created At` < STR_TO_DATE('2024-05-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `ENTRY_DATE` >= STR_TO_DATE('2024-04-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `ENTRY_DATE` < STR_TO_DATE('2024-05-08 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
GROUP BY DATE(`ENTRY_DATE`)
ORDER BY `Average approval duration in minutes` DESC
LIMIT 10000;
```

</details>

**Data Selection:** The SQL query begins by selecting specific data from two tables: `order_header` and `order_status`. These tables likely contain information about orders and their statuses.

**Defining Criteria:** The query filters the data to include only orders with a specific status, in this case, orders that are approved. This is achieved by specifying the condition `os.status_id = 'ORDER_APPROVED'`.

**Joining Relevant Tables:** To combine relevant information from both tables, the query joins `order_header` and `order_status` using the common field `ORDER_ID`.

**Selecting Necessary Information:** From the joined tables, the query selects columns such as order ID, Shopify order ID, approval duration (calculated in seconds), creation date (`ORDER_DATE`), and approval date (`status_datetime`).

**Grouping Data:** The query groups the selected data by order ID. This means that all entries with the same order ID are grouped together, allowing for aggregation and analysis of approval durations for each order. The query groups the results by the date part of the creation date (`ENTRY_DATE`), allowing for a summary of average approval durations and order volumes for each day.

**Calculating Average Approval Duration:** Within each group, the query calculates the average approval duration in minutes (`AVG(duration in sec) / 60`).

**Counting Distinct Orders:** Additionally, the query counts the number of distinct order IDs to determine the volume of orders for each day.

## Missing Order Attribute Report

The Missing Order Attribute Report is a vital report for tracking order synchronization. By monitoring the presence of essential attributes, it identifies orders lacking crucial information, ensuring a seamless synchronization process. This report enables proactive resolution of discrepancies, preventing any orders from failing to synchronize effectively. In the NetSuite context, the report ensures accurate order synchronization by verifying essential attributes. By highlighting orders lacking these attributes, it prevents synchronization issues, providing assurance that orders seamlessly integrate with NetSuite.

Order attributes are specific pieces of information or data associated with an order that are essential for its processing and synchronization. These attributes can include details such as whether an order has been approved by a fraud detection system (e.g., Signifyd), whether it has been exported to NetSuite, or customer identification numbers. Ensuring these attributes are correctly populated is crucial for smooth order management and integration across different systems.

### Glossary

| Field Header              | Description                                               | HC Entity                                                                                                          |
| ------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ORDER\_NAME               | The identifier for the order                              | OrderHeader.ORDER\_NAME                                                                                            |
| HC\_ENTRY\_DATE           | The date and time of the order entry                      | OrderHeader.ENTRY\_DATE                                                                                            |
| TIME\_SINCE\_ENTRY        | Time elapsed since order entry                            | Calculated                                                                                                         |
| SALES\_CHANNEL\_ENUM\_ID  | The sales channel through which the order was placed      | OrderHeader.SALES\_CHANNEL\_ENUM\_ID                                                                               |
| SIGNIFYD\_APPROVED        | Indicates whether the order has been approved by Signifyd | OrderAttribute.ATTR\_NAME such as SIGNIFYD\_APPROVED and OrderAttribute.ATTR\_VALUE                                |
| NETSUITE\_ORDER\_EXPORTED | Indicates whether the order has been exported to NetSuite | OrderAttribute.ATTR\_NAME with value as “NETSUITE\_ORDER\_EXPORTED” and OrderAttribute.ATTR\_VALUE                 |
| NETSUITE\_CUSTOMER\_ID    | The customer identifier in NetSuite                       | PartyIdentification.ID\_VALUE with PartyIdentification.PARTY\_IDENTIFICATION\_TYPE\_ID as “NETSUITE\_CUSTOMER\_ID” |

<details>

<summary><strong>SQL Query to Generate Missing Order Attribute Report</strong></summary>

```sql
SELECT `ORDER_NAME` AS `ORDER_NAME`,
       `HC_ENTRY_DATE` AS `HC_ENTRY_DATE`,
       `TIME_SINCE_ENTRY` AS `TIME_SINCE_ENTRY`,
       `SALES_CHANNEL_ENUM_ID` AS `SALES_CHANNEL_ENUM_ID`,
       `SIGNIFYD_APPROVED` AS `SIGNIFYD_APPROVED`,
       `NETSUITE_ORDER_EXPORTED` AS `NETSUITE_ORDER_EXPORTED`,
       `NETSUITE_CUSTOMER_ID` AS `NETSUITE_CUSTOMER_ID`
FROM
  (SELECT oh.ORDER_NAME ,
          DATE_FORMAT(oh.ENTRY_DATE, "%m-%d-%Y %h:%i %p") AS HC_ENTRY_DATE ,
          CASE
              WHEN (TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 4 HOUR)) < 60 THEN CONCAT((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 4 HOUR)), ' mins')
              ELSE CONCAT(FLOOR((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 4 HOUR)) / 60), ' hrs ', ((TIMESTAMPDIFF(MINUTE, oh.ENTRY_DATE, NOW() - INTERVAL 4 HOUR)) % 60), ' mins')
          END AS TIME_SINCE_ENTRY ,
          oh.SALES_CHANNEL_ENUM_ID ,
          temp1.SIGNIFYD_APPROVED ,
          temp1.NETSUITE_ORDER_EXPORTED ,
          pi2.ID_VALUE AS NETSUITE_CUSTOMER_ID ,
          oh.ENTRY_DATE
   FROM
     (SELECT oa.ORDER_ID ,
             MAX(CASE
                     WHEN oa.ATTR_NAME = 'SIGNIFYD_APPROVED' THEN oa.ATTR_VALUE
                 END) AS SIGNIFYD_APPROVED ,
             MAX(CASE
                     WHEN oa.ATTR_NAME = 'NETSUITE_ORDER_EXPORTED' THEN oa.ATTR_VALUE
                 END) AS NETSUITE_ORDER_EXPORTED
      FROM order_attribute oa
      WHERE oa.ATTR_NAME IN ('SIGNIFYD_APPROVED',
                             'NETSUITE_ORDER_EXPORTED')
      GROUP BY oa.ORDER_ID) temp1
   JOIN order_header oh ON temp1.ORDER_ID = oh.ORDER_ID
   JOIN order_role or2 ON temp1.ORDER_ID = or2.ORDER_ID
   AND or2.ROLE_TYPE_ID = 'SHIP_TO_CUSTOMER'
   AND (or2.THRU_DATE IS NULL
        OR or2.THRU_DATE > NOW())
   LEFT JOIN party_identification pi2 ON or2.PARTY_ID = pi2.party_id
   AND pi2.PARTY_IDENTIFICATION_TYPE_ID = 'NETSUITE_CUSTOMER_ID'
   WHERE oh.STATUS_ID = 'ORDER_CREATED'
     AND oh.SALES_CHANNEL_ENUM_ID NOT IN ('LOOP_EXCH')
     AND (SIGNIFYD_APPROVED IS NULL
          OR NETSUITE_ORDER_EXPORTED IS NULL)
   ORDER BY oh.ENTRY_DATE) AS virtual_table
ORDER BY `ENTRY_DATE` ASC
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The SQL query starts by selecting specific data fields relevant to the report. This includes information about orders and their attributes.

**Defining Missing Attributes:** The primary objective of the report is to identify orders with missing attributes. Therefore, criteria are established to filter the data and include only orders where certain attributes are absent or null.

**Joining Relevant Tables:** To compile a comprehensive dataset, the SQL query joins tables containing order information and attributes. This typically involves joining the `order_header` table with the `order_attribute` table based on a common field like `ORDER_ID`.

**Selecting Necessary Information:** From the joined tables, the query selects columns related to order attributes and any other relevant information needed for analysis or reporting.

**Filtering Data:** Conditions are applied to filter the data and include only orders with missing attributes. This involves checking if certain attribute values are null or absent in the dataset.

**Grouping Data:** The query groups the selected data based on certain criteria, such as order ID or attribute type. Grouping data helps summarize and organize it for analysis.

**Counting Missing Attributes:** Within each group, the query counts the number of orders with missing attributes. This provides insights into the frequency and distribution of missing attributes across orders.


## Allocation Pending Report

The Allocation Pending Report displays orders assigned to facilities that currently lack sufficient inventory for immediate fulfillment. Monitoring the orders and items listed in this report is essential for initiating replenishment actions at the store. By doing so, retailers can ensure that inventory levels are maintained adequately, facilitating the successful completion of fulfillment for the identified orders.

### Glossary

| Field          | Description                                        |
| -------------- | -------------------------------------------------- |
| FACILITY\_ID   | The identifier of the facility in external systems |
| FACILITY\_NAME | The name of the facility in external systems       |
| SKU            | Unique identifier                                  |
| QUANTITY       | Quantity required of the SKU                       |


