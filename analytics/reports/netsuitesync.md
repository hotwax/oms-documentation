---
description: Discover Netsuite synchronization reports provided by HotWax Commerce
---

# Netsuite Sync

## Missing Products from Order

This report identifies active orders and the products associated with it that are missing from NetSuite. It checks each order to see if it has a corresponding NetSuite Order ID and if the products within those orders have NetSuite Product IDs. Orders without a NetSuite Order ID and products without a NetSuite Product ID are highlighted. The query excludes canceled orders, joins relevant tables to gather necessary data, and groups it by order ID and product ID.

### Glossary

| Field Header | Description                                        | HC Entity              |
| ------------ | -------------------------------------------------- | ---------------------- |
| **Order ID** | It helps in distinguishing one order from another. | OrderHeader.ORDER\_ID  |
| **SKU**      | SKU of the product                                 | Product.INTERNAL\_NAME |

<details>

<summary>SQL Query to Generate Missing Products from Order</summary>

```sql
SELECT order_id AS order_id,
       product_sku_not_in_netsuite AS product_sku_not_in_netsuite
FROM
  (SELECT oh.ORDER_NAME AS order_id ,
          p.INTERNAL_NAME AS product_sku_not_in_netsuite
   FROM order_header oh
   JOIN order_item oi ON oh.ORDER_ID = oi.ORDER_ID
   JOIN product p ON oi.PRODUCT_ID = p.PRODUCT_ID
   LEFT JOIN order_identification oi2 ON oh.ORDER_ID = oi2.ORDER_ID
   AND oi2.ORDER_IDENTIFICATION_TYPE_ID = 'NETSUITE_ORDER_ID'
   AND (oi2.THRU_DATE IS NULL
        OR oi2.THRU_DATE > NOW())
   LEFT JOIN good_identification gi ON oi.PRODUCT_ID = gi.PRODUCT_ID
   AND gi.GOOD_IDENTIFICATION_TYPE_ID = 'NETSUITE_PRODUCT_ID'
   AND (gi.THRU_DATE IS NULL
        OR gi.THRU_DATE > NOW())
   WHERE oh.STATUS_ID NOT IN ('ORDER_CANCELLED')
     AND oi2.ORDER_ID IS NULL
     AND gi.PRODUCT_ID IS NULL
   GROUP BY oh.ORDER_ID ,
            oi.PRODUCT_ID) AS virtual_table
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query starts by selecting data from various tables related to orders and products. These tables contain details about orders, order items, product information, and NetSuite identifiers.

**Filtering Active Orders:** The main focus of the report is to identify orders and products missing NetSuite IDs. Therefore, criteria are set to exclude canceled orders (e.g., `STATUS_ID NOT IN ('ORDER_CANCELLED')`) and only include active ones.

**Joining Relevant Tables:** To compile a comprehensive dataset, the SQL query joins multiple tables: order headers, order items, and product details. Additionally, it joins to tables containing NetSuite order and product identifiers using common fields (e.g., `ORDER_ID` and `PRODUCT_ID`).

**Selecting Necessary Information:** The query selects specific columns from the joined tables that include order IDs and product SKUs that are not present in NetSuite.

**Grouping Data:** The selected data is grouped by order ID and product ID to ensure that each combination is considered individually. This helps in organizing the data for further analysis.

**Identifying Missing NetSuite IDs:** Within each group, the query checks if there are any corresponding NetSuite Order IDs or Product IDs. If both are missing, it highlights these records as the ones missing from NetSuite.

## Products without Netsuite Order ID Report

This report identifies products listed on Shopify that are missing from NetSuite. It checks each product to see if it has a corresponding NetSuite Product ID. Products without a NetSuite Product ID are highlighted. The query joins relevant tables to gather necessary data, filters for active products, and groups it by product SKU, Shopify product ID, and Hotwax product ID.

### Glossary

| Field Header           | Description                                                       | HC Entity                         |
| ---------------------- | ----------------------------------------------------------------- | --------------------------------- |
| **Shopify Product ID** | Identifies the product within Shopify                             | gi.GOOD\_IDENTIFICATION\_TYPE\_ID |
| **HotWax Product ID**  | The internal product identifier within the HotWax Commerce system | gi.PRODUCT\_ID                    |

<details>

<summary>SQL Query to Generate Product without Netsuite Order ID Report</summary>

```sql
SELECT sku AS sku,
       shopify_product_id AS shopify_product_id,
       hotwax_product_id AS hotwax_product_id
FROM
  (SELECT p.INTERNAL_NAME AS sku ,
          gi.ID_VALUE AS shopify_product_id ,
          gi.PRODUCT_ID AS hotwax_product_id
   FROM good_identification gi
   LEFT JOIN good_identification gi2 ON gi.PRODUCT_ID = gi2.PRODUCT_ID
   AND gi2.GOOD_IDENTIFICATION_TYPE_ID = 'NETSUITE_PRODUCT_ID'
   AND (gi2.THRU_DATE IS NULL
        OR gi2.THRU_DATE > NOW())
   JOIN product p ON gi.PRODUCT_ID = p.PRODUCT_ID
   WHERE gi.GOOD_IDENTIFICATION_TYPE_ID = 'SHOPIFY_PROD_ID'
     AND (gi.THRU_DATE IS NULL
          OR gi.THRU_DATE > NOW())
     AND p.IS_VIRTUAL = 'N'
     AND p.IS_VARIANT = 'Y'
     AND gi2.PRODUCT_ID IS NULL
     AND gi.ID_VALUE <> p.INTERNAL_NAME) AS virtual_table
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query starts by selecting data from tables related to product identifications. These tables store information about product SKUs, Shopify product IDs, and internal Hotwax product IDs. The query selects specific columns that include the product SKU, Shopify product ID, and HotWax product ID.

**Filtering Active Products:** The main focus of the report is to identify Shopify products missing NetSuite IDs. Criteria are set to include only active product identifications (those with no end date or an end date in the future).

**Joining Relevant Tables:** To compile a comprehensive dataset, the SQL query joins multiple tables: good identifications (for product IDs) and products (for additional product details). It also joins the good identifications table to check for NetSuite Product IDs.

**Grouping Data:** The selected data is grouped by product ID and identification type to ensure that each product's information is uniquely considered.

**Identifying Missing NetSuite IDs:** Within each group, the query checks for missing NetSuite Product IDs. If a product does not have a corresponding NetSuite ID, it is highlighted.

## Deleted Shopify Product Report

This SQL query generates a report listing products that have been deleted from Shopify. It selects key details such as the Hotwax product ID, product SKU, the date when the product was discontinued in Hotwax, and any comments related to the deletion. The query specifically looks for products with comments indicating they were "Deleted from Shopify." It then groups the data by product ID, SKU, discontinuation date, and comments to ensure each product's details are uniquely considered.

### Glossary

| Field Header                    | Description                                                                              | HC Entity                              |
| ------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------- |
| **HotWax product ID**           | The internal product identifier within the HotWax Commerce system                        | product.PRODUCT\_ID                    |
| **SKU**                         | SKU of the product                                                                       | product.INTERNAL\_NAME                 |
| **HotWax Discontinuation date** | The date when the product was discontinued in the HotWax system, formatted as mm-dd-yyyy | product.SUPPORT\_DISCONTINUATION\_DATE |
| **comments**                    | Any comments related to the product                                                      | product.COMMENTS                       |

<details>

<summary>SQL query to generate Deleted Shopify Product Report</summary>

```sql
SELECT hotwax_product_id,
       product_sku,
       hotwax_discontinuation_date,
       COMMENTS AS `My column`
FROM
  (SELECT p.PRODUCT_ID AS hotwax_product_id ,
          p.INTERNAL_NAME AS product_sku ,
          DATE_FORMAT(p.SUPPORT_DISCONTINUATION_DATE, "%m-%d%-%Y") AS hotwax_discontinuation_date ,
          p.COMMENTS
   FROM product p
   WHERE p.COMMENTS LIKE "%Deleted from Shopify:%") AS virtual_table
GROUP BY hotwax_product_id,
         product_sku,
         hotwax_discontinuation_date,
         COMMENTS
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query starts by selecting data from the product table, focusing on products deleted from Shopify. It retrieves information such as Hotwax product ID, product SKU, discontinuation date, and comments.

**Filtering Criteria:** To identify products deleted from Shopify, the query filters records where the comments field contains the phrase "Deleted from Shopify". This ensures that only relevant products are included in the report.

**Grouping Data:** The data is grouped by Hotwax product ID, product SKU, discontinuation date, and comments. Grouping helps organize the data and ensures each product's information is considered uniquely, avoiding duplicate entries in the report.

## Customer Without Netsuite Id Report

This SQL query generates a report listing customers who have a Shopify customer ID but are missing a corresponding NetSuite customer ID. It fetches details including the Hotwax customer ID, first name, last name, Shopify customer ID, and the number of orders placed by each customer. By joining relevant tables and applying specific filters, the query identifies and provides a concise list of customers not present in the NetSuite system.

| Field Header            | Description                                                                                     | HC Entity                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **HotWax Customer ID**  | The unique identifier for the customer within the Hotwax Commerce system.                       | party.PARTY\_ID                                                                               |
| **First Name**          | The first name of the customer.                                                                 | person.FIRST\_NAME                                                                            |
| **Last Name**           | The last name of the customer.                                                                  | person.LAST\_NAME                                                                             |
| **Shopify Customer ID** | The unique identifier for the customer within the Shopify platform.                             | party\_identification.ID\_VALUE (where PARTY\_IDENTIFICATION\_TYPE\_ID = 'SHOPIFY\_CUST\_ID') |
| **Order Count**         | The total number of distinct orders placed by the customer, reflecting their purchase activity. | Derived from order\_role.ORDER\_ID                                                            |

<details>

<summary>SQL query to generate Customer Without NetSuite ID Report</summary>

```sql
SELECT hotwax_customer_id AS hotwax_customer_id,
       `FIRST_NAME` AS `FIRST_NAME`,
       `LAST_NAME` AS `LAST_NAME`,
       shopify_customer_id AS shopify_customer_id,
       order_count AS order_count
FROM
  (SELECT p.PARTY_ID as hotwax_customer_id ,
          p2.FIRST_NAME ,
          p2.LAST_NAME ,
          pi3.ID_VALUE AS shopify_customer_id ,
          COUNT(DISTINCT or2.ORDER_ID) AS order_count
   FROM party p
   JOIN party_role pr ON p.PARTY_ID = pr.PARTY_ID
   JOIN party_identification pi3 ON p.PARTY_ID = pi3.PARTY_ID
   AND pi3.PARTY_IDENTIFICATION_TYPE_ID = 'SHOPIFY_CUST_ID'
   LEFT JOIN party_identification pi2 ON p.PARTY_ID = pi2.PARTY_ID
   AND pi2.PARTY_IDENTIFICATION_TYPE_ID = 'NETSUITE_CUSTOMER_ID'
   LEFT JOIN person p2 ON p.PARTY_ID = p2.PARTY_ID
   LEFT JOIN order_role or2 ON p.PARTY_ID = or2.PARTY_ID
   AND or2.ROLE_TYPE_ID = 'SHIP_TO_CUSTOMER'
   AND (or2.THRU_DATE IS NULL
        OR or2.THRU_DATE > NOW())
   WHERE p.PARTY_TYPE_ID = 'PERSON'
     AND pr.ROLE_TYPE_ID = 'CUSTOMER'
     AND pi2.PARTY_ID IS NULL
   GROUP BY p.PARTY_ID) AS virtual_table
GROUP BY hotwax_customer_id,
         `FIRST_NAME`,
         `LAST_NAME`,
         shopify_customer_id,
         order_count
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query starts by selecting data from the party table and related tables to gather customer details, including the Hotwax customer ID, first name, last name, Shopify customer ID, and the number of orders.

**Filtering Criteria:** To focus on customers without a NetSuite ID, the query filters records to include only those with a Shopify ID and excludes those with a NetSuite ID. It also ensures that only individuals (not organizations) and those with a customer role are included.

**Joining Relevant Tables:** The query joins several tables to collect all necessary information. It joins the party table with the party role table to determine customer roles, the party identification table to check for Shopify and NetSuite IDs, the person table to get names, and the order role table to count orders.

**Grouping Data:** The data is grouped by Hotwax customer ID, first name, last name, and Shopify customer ID to ensure that each customer is uniquely identified in the report.

**Counting Orders:** Within each group, the query counts the number of distinct orders for each customer. This count provides insights into the customer's activity.

## Fulfilled Items Not Synced to NetSuite

This report identifies fulfilled order items that have not been synced to NetSuite. The report focuses on items marked as completed, joining relevant data from multiple tables to provide a comprehensive view. Items that have not yet been exported to NetSuite are highlighted, ensuring that all discrepancies are captured. The results are organized by fulfillment log ID and status datetime.

### Glossary

| Field Header             | Description                                        | HC Entity              |
| ------------------------ | -------------------------------------------------- | ---------------------- |
| **Order ID**             | It helps in distinguishing one order from another. | OrderHeader.ORDER\_ID  |
| **Order Name**           |                                                    |                        |
| **Order Type ID**        |                                                    |                        |
| **Order Item Seq ID**    |                                                    |                        |
| **SKU**                  | SKU of the product                                 | Product.INTERNAL\_NAME |
| **Status Date and Time** |                                                    |                        |
| **Fulfillment Exported** |                                                    |                        |

<details>

<summary>SQL query to generate Fulfilled Items Not Synced to NetSuite Report</summary>

```sql
SELECT `ORDER_ID` AS `ORDER_ID`,
       `ORDER_NAME` AS `ORDER_NAME`,
       `ORDER_TYPE_ID` AS `ORDER_TYPE_ID`,
       `ORDER_ITEM_SEQ_ID` AS `ORDER_ITEM_SEQ_ID`,
       `SKU` AS `SKU`,
       `STATUS_DATETIME` AS `STATUS_DATETIME`,
       `IS_FULFILLMENT_EXPORTED` AS `IS_FULFILLMENT_EXPORTED`
FROM
  (select oh.ORDER_ID ,
          oh.ORDER_TYPE_ID ,
          oh.ORDER_NAME ,
          oi.ORDER_ITEM_SEQ_ID ,
          p.INTERNAL_NAME SKU ,
          os.STATUS_DATETIME ,
          ofh.FULFILLMENT_LOG_ID ,
          ofh.EXTERNAL_FULFILLMENT_ID ,
          if(ofh.FULFILLMENT_LOG_ID is not null, "Y", "N") IS_FULFILLMENT_EXPORTED
   from order_header oh
   join order_item oi on oh.ORDER_ID = oi.ORDER_ID
   join product p on p.PRODUCT_ID = oi.PRODUCT_ID
   left join order_status os on os.ORDER_ID = oi.ORDER_ID
   and os.ORDER_ITEM_SEQ_ID = oi.ORDER_ITEM_SEQ_ID
   and os.STATUS_ID = "ITEM_COMPLETED"
   left join order_fulfillment_history ofh on ofh.ORDER_ID = oi.ORDER_ID
   and ofh.ORDER_ITEM_SEQ_ID = oi.ORDER_ITEM_SEQ_ID
   where oi.STATUS_ID = "ITEM_COMPLETED") AS virtual_table
WHERE `IS_FULFILLMENT_EXPORTED` IN ('N')
ORDER BY `FULFILLMENT_LOG_ID` ASC,
         `STATUS_DATETIME` DESC
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query starts by selecting data from various tables related to orders and order items. It retrieves key details including the order ID, order name, order type, order item sequence ID, SKU, status datetime, and a flag indicating whether the fulfillment items has been exported to NetSuite.

**Filtering for Completed Items:** The query focuses on order items that have been marked as completed. It joins to the order status table to ensure that only items with a status ID of "ITEM\_COMPLETED" are included.

**Identifying Unexported Fulfillment Items:** The query joins to the order fulfillment history table to check if each fulfilled item has been exported to NetSuite. It sets a flag (`IS_FULFILLMENT_EXPORTED`) to "N" if the fulfillment log ID is null, indicating that the item has not been exported.

## POS Orders vs POS Variance

This report compares the sales of POS (Point of Sale) orders with inventory variances, helping to identify discrepancies. It provides details such as order ID, order name, entry date, SKU, sales quantity, and quantity on hand (QOH) variance. The report focuses on POS orders completed after a particular date, and includes both sales data and inventory variance information. By joining relevant tables, it highlights orders where there is a variance between the recorded sales and the inventory quantity on hand.

### Glossary

| Field Header             | Description                                                               | HC Entity                                                     |
| ------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Order ID**             | It helps in distinguishing one order from another.                        | order\_header.ORDER\_ID                                       |
| **Order Name**           | The name or identifier for the order.                                     | order\_header.ORDER\_NAME                                     |
| **Order Type ID**        | The type of order, identifying the category of the order.                 | order\_header.ORDER\_TYPE\_ID                                 |
| **Order Item Seq ID**    | The sequence identifier for items within an order.                        | order\_item.ORDER\_ITEM\_SEQ\_ID                              |
| **SKU**                  | SKU of the product.                                                       | product.INTERNAL\_NAME                                        |
| **Status Date and Time** | The date and time when the order item status was updated.                 | order\_status.STATUS\_DATETIME                                |
| **Fulfillment Exported** | Indicates whether the fulfillment has been exported to NetSuite (Y or N). | Derived from order\_fulfillment\_history.FULFILLMENT\_LOG\_ID |

<details>

<summary>SQL query to generate POS Orders vs POS Variance</summary>

```sql
SELECT `ORDER_ID` AS `ORDER_ID`,
       `ORDER_NAME` AS `ORDER_NAME`,
       `ENTRY_DATE` AS `ENTRY_DATE`,
       `SKU` AS `SKU`,
       `SALES` AS `SALES`,
       IFNULL(`QOH`, 0) AS `QOH variance`
FROM
  (SELECT oh.ORDER_ID,
          oh.ORDER_NAME,
          oh.ENTRY_DATE,
          sale.PRODUCT_ID,
          p.INTERNAL_NAME SKU,
          sale.SALES,
          variance.QOH,
          variance.ATP,
          variance.INVENTORY_ID
   FROM order_header oh
   JOIN
     (SELECT oi.ORDER_ID,
             SUM(oi.QUANTITY) SALES,
             oi.PRODUCT_ID
      FROM order_item oi
      JOIN order_item_ship_group_assoc oisga ON oisga.ORDER_ID = oi.ORDER_ID
      AND oisga.ORDER_ITEM_SEQ_ID = oi.ORDER_ITEM_SEQ_ID
      JOIN order_item_ship_group oisg ON oisg.ORDER_ID = oisga.ORDER_ID
      AND oisg.SHIP_GROUP_SEQ_ID = oisga.SHIP_GROUP_SEQ_ID
      AND oisg.SHIPMENT_METHOD_TYPE_ID = 'POS_COMPLETED'
      GROUP BY oi.ORDER_ID,
               oi.PRODUCT_ID) sale ON sale.ORDER_ID = oh.ORDER_ID
   AND oh.ENTRY_DATE > '2024-03-24'
   AND oh.SALES_CHANNEL_ENUM_ID = 'POS_SALES_CHANNEL'
   LEFT JOIN
     (SELECT iiv.COMMENTS,
             ii.PRODUCT_ID,
             ii.INVENTORY_ITEM_ID INVENTORY_ID,
             SUM(iiv.quantity_on_hand_var) QOH,
             SUM(iiv.available_to_promise_var) ATP
      FROM inventory_item_variance iiv
      JOIN inventory_item ii ON ii.INVENTORY_ITEM_ID = iiv.INVENTORY_ITEM_ID
      AND iiv.VARIANCE_REASON_ID = 'POS_SALE'
      GROUP BY iiv.COMMENTS,
               ii.PRODUCT_ID) variance ON variance.COMMENTS LIKE CONCAT('%', sale.ORDER_ID, '%')
   AND variance.PRODUCT_ID = sale.PRODUCT_ID
   JOIN product p on sale.PRODUCT_ID = p.PRODUCT_ID) AS virtual_table
WHERE `SKU` != '9090909-999'
  AND (((IF(`QOH`, `QOH`, 0) + `SALES`) <> 0))
ORDER BY `ORDER_ID` DESC
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query selects data from multiple tables to gather information about POS orders, their sales quantities, and inventory variances. The key details retrieved include order ID, order name, entry date, SKU, sales quantity, and quantity on hand variance.

**Filtering POS Orders:** The report focuses on POS orders by filtering for orders completed after a particular date, and belonging to the POS sales channel. This ensures the report includes only relevant transactions.

**Calculating Sales and Variance:** The query calculates the total sales quantity for each order and product combination. It also sums the quantity on hand (QOH) and available to promise (ATP) variances from the inventory item variance table. The inventory variances are linked to the sales data based on comments containing the order ID.

**Filtering Results:** The results are filtered to exclude a specific SKU and to highlight records where the sum of QOH variance and sales is not zero, indicating a discrepancy.

**Ordering and Limiting Results:** The results are ordered by order ID in descending order to prioritize the most recent records. The output is limited to the first 1000 records.

## POS Returns vs Restock

This report identifies POS (Point of Sale) return transactions and compares them against restocked quantities. It provides insights into how many items were returned versus how many were restocked back into inventory. The report includes details such as return ID, entry date, order ID, product name, facility ID, returned quantity, and restocked quantity. It focuses on returns directed to specific facilities and excludes those directed to 'BDC'.

### Glossary

| Field Header           | Description                                                 | HC Entity                                |
| ---------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| **Return ID**          | Unique identifier for the return transaction.               | return\_header.RETURN\_ID                |
| **Entry Date**         | Date and time when the return transaction was recorded.     | return\_header.ENTRY\_DATE               |
| **Order Name**         | Name or identifier for the associated order.                | order\_header.ORDER\_NAME                |
| **Internal Name**      | Internal name or SKU of the returned product.               | product.INTERNAL\_NAME                   |
| **Facility ID**        | Identifier for the facility where the return was processed. | return\_header.DESTINATION\_FACILITY\_ID |
| **Returned Quantity**  | Quantity of the product returned in the transaction.        | return\_item.RETURN\_QUANTITY            |
| **Restocked Quantity** | Quantity of the product restocked back into inventory.      | return\_item.RECEIVED\_QUANTITY          |

<details>

<summary>SQL query to generate POS Returns vs POS Restock</summary>

```sql
SELECT `RETURN_ID` AS `RETURN_ID`,
       `ENTRY_DATE` AS `ENTRY_DATE`,
       `ORDER_NAME` AS `ORDER_ID`,
       `INTERNAL_NAME` AS `INTERNAL_NAME`,
       `FACILITY_ID` AS `FACILITY_ID`,
       `RETURN_QUANTITY` AS `RETURNED_QUANTITY`,
       IFNULL(`RECEIVED_QUANTITY`, 0) AS `RESTOCKED_QUANTITY`
FROM
  (SELECT ri.RETURN_ID,
          ri.RETURN_ITEM_SEQ_ID,
          p.INTERNAL_NAME,
          ri.RETURN_QUANTITY,
          ri.RECEIVED_QUANTITY,
          ri.STATUS_ID,
          rh.DESTINATION_FACILITY_ID FACILITY_ID,
          rh.RETURN_CHANNEL_ENUM_ID,
          rh.ENTRY_DATE,
          oh.ORDER_NAME,
          oh.ORDER_ID
   FROM return_header rh
   JOIN return_item ri ON ri.return_id = rh.return_id
   JOIN product p ON p.product_id = ri.product_id
   JOIN order_header oh ON oh.order_id = ri.order_id
   WHERE rh.DESTINATION_FACILITY_ID <> "_NA_") AS virtual_table
WHERE `FACILITY_ID` != 'BDC'
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query begins by selecting data from various tables that hold information on return transactions, products, and orders. Key details include return ID, entry date, order name, internal product name (SKU), facility ID, returned quantity, and restocked quantity.

\*\*Filtering Return Transactions:\*8 The report specifically looks at returns that are not directed to the generic facility '_NA_'. This helps in focusing on relevant return transactions.

**Joining Relevant Tables:** To gather comprehensive data, the SQL query joins multiple tables. The return header table (rh) contains general return information such as destination facility ID and entry date. The return item table (ri) provides details on individual returned items and their quantities. The product table (p) includes product details such as internal name (SKU), and the order header table (oh) links returns to their corresponding orders.

**Calculating Return and Restock Quantities:** The query selects the returned quantity from the return item table and checks for any restocked quantity, using `IFNULL` to handle cases where no restock occurred, setting it to zero if not restocked.

**Excluding Specific Facilities:** The results are filtered to exclude transactions directed to the 'BDC' facility, ensuring the report focuses on the relevant data.

### Query Logic

**Data Selection:** The query starts by selecting relevant data from tables that store information on return transactions, products, and orders. It gathers details such as return ID, product name (SKU), returned quantity, restocked quantity, facility ID, and order name.

**Filtering Return Transactions:** The report focuses on returns directed to specific facilities, excluding those directed to the generic '_NA_' facility.

**Categorizing Return Status:** The query categorizes each returned item as "Restocked" if the returned quantity matches the received quantity. If they do not match, the item is categorized as "Not Restocked". This is achieved using the `IF` and `IFNULL` functions.

**Counting and Grouping Data:** The data is grouped by the restocked status and counted, providing the number of items in each category ("Restocked" vs. "Not Restocked"). This count is crucial for generating the pie chart.

## Missing Order Attribute Report

The Missing Order Attribute Report is a vital tool for tracking order synchronization. By monitoring the presence of essential attributes, it identifies orders lacking crucial information, ensuring a seamless synchronization process. This report enables proactive resolution of discrepancies, preventing any orders from failing to synchronize effectively.

### Glossary

| Field                   | Description                                       |
|-------------------------|---------------------------------------------------|
| ORDER_NAME              | The identifier for the order                      |
| ATTRIBUTE     | The essential order attributes. For example, `PRODUCT_VERIFIED` indicates whether the product has been verified   |
| STATUS              | The status if the order has essential attributes or not                      |

**In the NetSuite context**, the report ensures accurate order synchronization by verifying essential attributes. By highlighting orders lacking these attributes, it prevents synchronization issues, providing assurance that orders seamlessly integrate with NetSuite. 

| Field                   | Description                                       |
|-------------------------|---------------------------------------------------|
| ORDER_NAME              | The identifier for the order                      |
| ATTRIBUTE     | The essential order attribute. For example, `PRODUCT_VERIFIED` indicates whether the product has been verified   |
| NETSUITE_ORDER_EXPORTED | Status if the order has been exported to NetSuite or not |
| NETSUITE_CUSTOMER_ID    | The customer identifier in NetSuite               |
