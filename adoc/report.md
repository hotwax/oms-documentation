# Duplicate Order Report Overview
# Introduction
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

## Prioritization Logic:
Orders for fulfillment are prioritized based on the attributes associated with each duplicate order. Orders with a greater number of attributes receive priority. Additionally, completed duplicate orders are given top priority. The preferred order ID for fulfillment will be in the "Preferred Order ID" column. The other duplicated orders, which are less preferred for fulfillment, will be listed in the "Other Order ID" field, which we can cancel.


**Example:** For instance, if one duplicate order includes attributes like customer ID and municipio, it will be designated as the preferred order due to its higher significance. Conversely, the other duplicate order, lacking these attributes, is considered less preferred and need to be cancelled.

## Handling Duplicate Orders:


User can manages duplicate orders through the following steps:

1. **Moving Less Preferred Orders:** Items from less preferred orders should be transferred to the general ops parking, preventing further processing.
2. **Changing Order Status:** The status of less preferred duplicate orders should be changed to "cancel," effectively cancelling one of the duplicates.

> [!NOTE]
Duplicate orders with a completed status are excluded from the report as no further action is required. Similarly, orders where one duplicate is already cancelled are also omitted. Orders are included in the report based on their fulfillment status. If order items are moved to general ops parking but the order status is not marked as cancelled, they will appear in the report.

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
