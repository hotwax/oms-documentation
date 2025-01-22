# Project Specification: Inventory Transfer Reconciliation

## Project Overview

The aim of this project is to develop a detailed SQL query that helps calculate the net changes in inventory quantity on hand (QOH) due to transfer orders (TOs) between different facilities. The solution focuses on tracking both outgoing and incoming inventory movements, allowing for reconciliation of these inventory transfers effectively. The purpose of this specification is to help ensure inventory accuracy and to provide insights into inventory flows between locations.

This query aggregates inventory transactions by selecting all outgoing and incoming transfers, calculating the net impact for each product between source and destination facilities. The result is the net quantity on hand (QOH) changes for each product, identified as "net_QOH_changes." The structure is akin to that used in calculating net transfers.

## Query Walkthrough

Below is the SQL query for aggregating the net changes in inventory due to transfer orders between facilities.

### SQL Query
```sql
-- Aggregate Outgoing and Incoming Transfers
SELECT 
    source_facility,
    destination_facility, 
    product_id,
    SUM(total_transfer) AS net_QOH_changes
FROM (
    -- Outgoing Transfers
    SELECT 
        s.origin_facility_id AS source_facility,
        s.destination_facility_id AS destination_facility,
        ii.product_id,
        -SUM(iid.quantity_on_hand_diff) AS total_transfer
    FROM 
        inventory_item_detail iid
        JOIN 
            shipment s ON iid.shipment_id = s.shipment_id
        JOIN 
            inventory_item ii ON iid.inventory_item_id = ii.inventory_item_id
    WHERE 
        s.shipment_type_id = 'OUT_TRANSFER'
    GROUP BY 
        s.origin_facility_id, s.destination_facility_id, ii.product_id

    UNION ALL

    -- Incoming Transfers
    SELECT 
        s.origin_facility_id AS source_facility,
        s.destination_facility_id AS destination_facility,
        ii.product_id,
        SUM(iid.quantity_on_hand_diff) AS total_transfer
    FROM 
        inventory_item_detail iid
        JOIN 
            shipment s ON iid.shipment_id = s.shipment_id
        JOIN 
            inventory_item ii ON iid.inventory_item_id = ii.inventory_item_id
    WHERE 
        s.shipment_type_id = 'IN_TRANSFER'
    GROUP BY 
        s.destination_facility_id, s.origin_facility_id, ii.product_id
) transfers
GROUP BY 
    source_facility, destination_facility, product_id
HAVING 
    net_QOH_changes > 0
ORDER BY 
    source_facility, destination_facility, product_id;
```

### Detailed Explanation

#### Step-by-Step Breakdown

1. **Main Objective**:
   - Calculate the net impact on inventory quantity on hand (QOH) due to outgoing and incoming transfer orders between facilities.

2. **Query Breakdown**:
   - The `SELECT` statement aggregates data related to inventory transfers between facilities, focusing on both outgoing and incoming transfers.

3. **Outgoing Transfers Subquery**:
   - **SELECT Fields**:
     - `s.origin_facility_id AS source_facility`: Captures the source facility ID.
     - `s.destination_facility_id AS destination_facility`: Captures the destination facility ID.
     - `ii.product_id`: Captures the product ID being transferred.
     - `-SUM(iid.quantity_on_hand_diff) AS total_transfer`: Calculates the total outgoing quantity for each product by summing up the quantity differences, resulting in a negative value.
   - **FROM and JOIN Clauses**:
     - `inventory_item_detail iid`: Contains details of inventory movements.
     - `JOIN shipment s ON iid.shipment_id = s.shipment_id`: Joins shipment details to link transfers with inventory changes.
     - `JOIN inventory_item ii ON iid.inventory_item_id = ii.inventory_item_id`: Joins inventory item data to capture product details.
   - **WHERE Clause**:
     - `s.shipment_type_id = 'OUT_TRANSFER'`: Filters only for outgoing transfers (i.e., shipments going out of a facility).
   - **GROUP BY Clause**:
     - Groups data by source and destination facilities and product ID, so we get individual totals for each product transfer.

4. **Incoming Transfers Subquery**:
   - **SELECT Fields**:
     - `s.destination_facility_id AS source_facility`: For incoming transfers, the destination facility acts as the source.
     - `s.origin_facility_id AS destination_facility`: The origin facility becomes the destination for inventory calculations.
     - `ii.product_id`: Captures the product ID involved in the transfer.
     - `SUM(iid.quantity_on_hand_diff) AS total_transfer`: Calculates the total incoming quantity for each product.
   - **FROM, JOIN, WHERE, and GROUP BY Clauses**:
     - Similar to the outgoing subquery, but with origin and destination facilities swapped to reflect incoming transfers.

5. **Combining Outgoing and Incoming Transfers**:
   - The `UNION ALL` operator is used to combine the outgoing and incoming transfers. The result is a dataset that includes both the reduction and addition of inventory quantities for each product between facilities.

6. **Aggregating Net Changes**:
   - The outer query aggregates the combined dataset to calculate the net quantity changes (`net_QOH_changes`) for each product between each source and destination facility pair.

7. **Filtering Positive Net Changes**:
   - The `HAVING net_QOH_changes > 0` clause ensures that only products with a positive net inventory change are included in the results. This helps identify scenarios where the net result of transfers indicates an increase in QOH.

8. **Ordering Results**:
   - The final `ORDER BY` statement organizes the output by `source_facility`, `destination_facility`, and `product_id` for easier interpretation.

### Use Case and Importance

This query is crucial for ensuring the accuracy of inventory management, specifically for transfers between facilities. By calculating both outgoing and incoming transfers, it becomes possible to reconcile inventory discrepancies, manage inventory efficiently, and ensure that the correct amount of product is accounted for at each facility. This kind of analysis can also be used for auditing and tracking inventory flows, making it easier to identify any issues in transfer processes.

## Next Steps

- **Testing**: Test the query using sample inventory data to verify the correctness of net calculations.
- **Optimization**: Consider adding indexing to frequently queried columns (`shipment_id`, `origin_facility_id`, `destination_facility_id`) for improving performance.
- **Visualization**: Build visual representations of the inventory flows to enhance understanding, such as Sankey diagrams for transfer flows between facilities.
