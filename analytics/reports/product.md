# Product Reports

## Custom Gift Card Report

Sometimes store associates place a custom gift card order that is not mapped to the parent product in Shopify and NetSuite. In such cases, retailers face synchronization issues between Shopify and NetSuite due to unmapped gift cards. The custom gift card report serves as a solution to address these synchronization issues. This report shows unmapped products, enabling retailers to manually map these products to NetSuite, inventory them, and associate them with NetSuite IDs.

## Glossary

| Field Header  | Description                                                                 | HC Entity                |
|---------------|-----------------------------------------------------------------------------|--------------------------|
| **ORDER_ID**  | It helps in distinguishing one order from another.                          | OrderHeader.ORDER_ID     |
| **ORDER_NAME**| This field typically contains a reference or name associated with the order.| OrderHeader.ORDER_NAME   |
| **PRODUCT_ID**| This is a unique identifier assigned to each product within the system.     | Product.PRODUCT_ID       |
| **PRODUCT_TYPE_ID** | This field denotes the type or category of the product. In this case, it's "DIGITAL_GOOD." | Product.PRODUCT_TYPE_ID |
| **CREATED_DATE** | This indicates the date and time when the order was created or processed in the system. | Product.CREATED_DATE |
| **PRODUCT_NAME** | The name of the product. | Product.PRODUCT_NAME |

<details>
  
  <summary>SQL Query to generate Custom Gift Card Report</summary>

```sql
SELECT `ORDER_ID` AS `ORDER_ID`,
       `ORDER_NAME` AS `ORDER_NAME`,
       `PRODUCT_ID` AS `PRODUCT_ID`,
       `PRODUCT_TYPE_ID` AS `PRODUCT_TYPE_ID`,
       `CREATED_DATE` AS `CREATED_DATE`,
       `PRODUCT_NAME` AS `PRODUCT_NAME`
FROM
  (SELECT OH.ORDER_ID,
          OH.ORDER_NAME,
          P.PRODUCT_ID,
          P.PRODUCT_TYPE_ID,
          P.PRODUCT_NAME,
          P.CREATED_DATE
   FROM ORDER_HEADER OH
   JOIN ORDER_ITEM OI ON OH.ORDER_ID = OI.ORDER_ID
   JOIN PRODUCT P ON OI.PRODUCT_ID = P.PRODUCT_ID
   WHERE P.PRODUCT_TYPE_ID = 'DIGITAL_GOOD'
     AND P.PRODUCT_ID NOT IN
       (SELECT pa.product_id_to
        FROM product_assoc pa
        WHERE pa.product_id = "53051")) AS virtual_table
WHERE `CREATED_DATE` >= STR_TO_DATE('2024-05-03 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `CREATED_DATE` < STR_TO_DATE('2024-05-10 00:00:00.000000', '%Y-%m-%d %H:%i:%s.%f')
  AND `PRODUCT_NAME` != 'Test'
LIMIT 1000;
```

</details>

### Query Logic

**Data Selection:** The query selects data from the ORDER_HEADER, ORDER_ITEM, and PRODUCT tables. These tables contain information about orders, order items, and products, respectively. By joining these tables and selecting specific fields, the query retrieves necessary details related to custom gift card orders.

**Defining Criteria:** The query establishes specific criteria to identify custom gift card orders. It filters products based on their product type, ensuring only digital goods are considered. Then, it excludes products associated with a particular ID that is used for gift cards. This criterion ensures that the report focuses exclusively on digital goods matching the characteristics of custom gift cards which are not linked with the ID of the gift cards.

**Selecting Necessary Information:** Essential information such as order IDs, order names, product IDs, product type IDs, product names, and creation dates is retrieved. This selection provides comprehensive insights into custom gift card orders, enabling retailers to track and analyze their performance over time.
