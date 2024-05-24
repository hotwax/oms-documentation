---
description: >-
   Duplicate order report for handling order duplications in OMS
---



# Duplicate Order Report Overview

In cases where HotWax Commerce imports an order twice due to synchronization error, each order is processed independently, leading to separate fulfillments for what was originally a single order. This duplication often results in inventory discrepancies as it generates two reserved items instead of one. To address this issue and enhance visibility concerning duplicated orders within the OMS, we've introduced the Duplicate Order Report.

### Report Structure
The Duplicate Order Report comprises the following sections

| Field Header             | Description                                                                                                                |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Order Name               | This field refers to the Shopify order name.                                                                               |
| Preferred Order ID       | It denotes the order ID of the preferred duplicate order, which should be fulfilled over others based on order attributes. |
| Preferred Order Status   | This indicates the status of the preferred duplicate order.                                                                |
| Other Order ID           | Represents the order ID of the other duplicate order, which is less preferred for fulfillment.                             |
| Other Order Status       | Specifies the status of the other duplicate order.                                                                         |
| Recent Order Date        | Reflects the date of the most recent order among the duplicates.                                                           |





<details>

**<summary> SQL query to generate Duplicate Order Report</summary>**

```sql
SELECT order_name AS order_name,
       prefered_order_id AS prefered_order_id,
       prefered_order_status AS prefered_order_status,
       other_order_ids AS other_order_ids,
       other_order_statuses AS other_order_statuses,
       recent_order_date AS recent_order_date
FROM
  (select temp.order_name ,
          substring_index(group_concat(temp.order_id
                                       order by temp.weight desc, temp.order_id), ",", 1) prefered_order_id ,
          substring_index(group_concat(temp.status_id
                                       order by temp.weight desc, temp.order_id), ",", 1) prefered_order_status ,
          substring_index(group_concat(temp.order_id
                                       order by temp.weight desc, temp.order_id separator ", "), ", ", 1-count(*)) other_order_ids ,
          substring_index(group_concat(temp.status_id
                                       order by temp.weight desc, temp.order_id separator ", "), ", ", 1-count(*)) other_order_statuses ,
          max(temp.order_date) recent_order_date
   from
     (select oh.order_name ,
             oh.order_id ,
             oh.status_id ,
             oh.order_date ,
             oa1.attr_value customerId ,
             oa2.attr_value municipio ,
             (if(oa1.attr_value is not null, 1, 0) + if(oa2.attr_value is not null, 1, 0) + if(oh.status_id = "ORDER_COMPLETED", 10, 0)) weight
      from order_header oh
      left join order_attribute oa1 on oa1.order_id = oh.ORDER_ID
      and oa1.ATTR_NAME = "customerId"
      left join order_attribute oa2 on oa2.order_id = oh.ORDER_ID
      and oa2.ATTR_NAME = "municipio"
      where oh.status_id <> "ORDER_CANCELLED" ) temp
   group by temp.order_name
   having count(*)>1
   and sum(temp.status_id = "ORDER_COMPLETED") <> count(*)) AS virtual_table
LIMIT 1000;
```



</details>


## Query Logic

The SQL query selects data from the `order_header` table. It joins the `order_attribute` table to retrieve additional attributes like `customerId` and `municipio` for each order.

### Calculation of Weight

A weight is calculated for each order based on the presence of `customerId`, `municipio`, and the status of the order (`ORDER_COMPLETED`). 
If `customerId` or `municipio` is not null, it contributes 1 to the weight. If the order status is `ORDER_COMPLETED`, it contributes 10. This weighting scheme prioritizes completed orders and those with customer information.

### Aggregation

The innermost subquery groups the data by `order_name` and calculates aggregates for each group.
For each group, it selects the order with the highest weight as the preferred order. This is done using `group_concat` to concatenate order IDs and statuses sorted by weight and order ID, and then `substring_index` to select the first (highest weighted) order ID and status.

### Selection of Preferred Order

The preferred order is the one with the highest weight within each group `order_name`. This order is selected based on its highest weight, prioritizing completed orders and those with customer information.
The `prefered_order_id` and `prefered_order_status` columns store the ID and status of the preferred order that needs to be fulfilled.

All other orders are considered secondary and are analyzed in conjunction with the preferred orders. These are the orders that have less weight as compared to the preferred order because they have fewer attributes and should be cancelled.

### Handling of Duplicate Order

Less preferred orders need to be manually cancelled and the order items should be transferred to the general ops parking, preventing further processing. If order items are transferred to general ops parking without the order being marked as cancelled, they will still be included in the report.
