# Net Transfers Between Facilities SQL Project

## Project Overview

This project aims to calculate the net transfers of products between different facilities, in the case of Mephisto retails stores. The goal is to determine the total net movement of each product between facilities. The SQL query aggregates these shipments to calculate the overall net quantity transferred.

### Key Concepts:
1. **Outgoing Transfers**: These represent shipments where products are moved from one facility to another facility.
2. **Incoming Transfers**: These represent shipments, where products are recieved from one facility to another facility.
3. **Net Transfers**: The difference between outgoing transfers and incoming transfers is calculated to determine the "net" quantity of products moved between facilities.

The SQL query provided below explains the logic used to aggregate product transfers, both outgoing and incoming, and calculate the net transfer value.

## SQL Query Explanation

The SQL query used in this project consists of two main parts: aggregation of outgoing transfers and aggregation of incoming transfers, followed by a final step that calculates the net transfer values.

### Query:

```sql
-- Aggregate Outgoing and Incoming Transfers
SELECT 
    source_facility,
    destination_facility,
    product_id,
    SUM(total_transfer) AS net_transfer
FROM (
    -- Outgoing Transfers
    SELECT 
        s.origin_facility_id AS source_facility,
        s.destination_facility_id AS destination_facility,
        si.product_id,
        SUM(si.quantity) AS total_transfer
    FROM 
        shipment_item si
    JOIN 
        shipment s ON si.shipment_id = s.shipment_id
    WHERE 
        s.shipment_type_id = 'OUT_TRANSFER'
    GROUP BY 
        s.origin_facility_id, s.destination_facility_id, si.product_id

    UNION ALL

    -- Incoming Transfers
    SELECT 
        s.origin_facility_id AS source_facility,
        s.destination_facility_id AS destination_facility,
        si.product_id,
        -SUM(si.quantity) AS total_transfer
    FROM 
        shipment_item si
    JOIN 
        shipment s ON si.shipment_id = s.shipment_id
    WHERE 
        s.shipment_type_id = 'IN_TRANSFER'
    GROUP BY 
        s.destination_facility_id, s.origin_facility_id, si.product_id
) transfers
GROUP BY 
    source_facility, destination_facility, product_id
HAVING 
    net_transfer > 0
ORDER BY 
    source_facility, destination_facility, product_id;
```

### Step-by-Step Explanation

1. **Aggregating Outgoing and Incoming Transfers**:
   - The primary goal of this query is to calculate the net movement of each product between facilities, considering both the outgoing and incoming transfer orders.

2. **Outgoing Transfers**:
   - The first subquery selects outgoing transfers from the `shipment_item` and `shipment` tables.
   - It filters transfers by checking `s.shipment_type_id = 'OUT_TRANSFER'` to identify only those shipments that are classified as outgoing.
   - The results are grouped by `origin_facility_id`, `destination_facility_id`, and `product_id`, and the total quantity for each product is summed to calculate the outgoing movement.

3. **Incoming Transfers**:
   - The second subquery handles incoming transfers, which represent reciepts.
   - Here, the origin and destination are swapped compared to the outgoing transfers, indicating that the product is being sent to its original facility.
   - The quantity is multiplied by `-1` to mark it as a receipt (negative value), and the results are again grouped by `destination_facility_id`, `origin_facility_id`, and `product_id`.

4. **Combining Outgoing and Incoming Transfers**:
   - The `UNION ALL` operation is used to combine the outgoing and incoming transfer data, ensuring that all transfer activities are included in the calculation.

5. **Final Aggregation**:
   - The combined result is aggregated by `source_facility`, `destination_facility`, and `product_id` to calculate the total net transfer for each product.
   - The `HAVING net_transfer > 0` clause ensures that only net positive transfers are included in the result, meaning that only products that had a positive net movement are shown this helps avoid duplicates in our data.

6. **Ordering the Results**:
   - The final result is ordered by `source_facility`, `destination_facility`, and `product_id` for easy interpretation and analysis.

### Summary
- This SQL query calculates the net transfers between facilities by focusing on outgoing and incoming product transfers.
- The query groups the outgoing and incoming transfers separately, combines them, and calculates the net movement for each product.
- The end result is a list of products that have a positive net transfer value, grouped by facility and product ID.

### Future Improvements
This project can be further extended by adding additional filters, such as a specific timeframe, product categories, or transfer costs, to provide a more in-depth analysis of product transfers across the supply chain.