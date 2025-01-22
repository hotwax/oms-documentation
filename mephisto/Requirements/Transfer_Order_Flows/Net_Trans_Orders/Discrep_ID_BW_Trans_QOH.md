# Project Specification: Shipment Discrepancy Analysis

## Project Overview

After analyzing inventory transfer data, it was identified that discrepancies exist between the inventory issuance quantities and shipment quantities. The goal of this project is to identify and report instances where the shipment quantities do not match the inventory quantity on hand (QOH) differences. This analysis will help uncover any issues in the inventory issuance and shipment recording processes, providing the necessary data to correct and reconcile discrepancies effectively.

The SQL query developed in this project focuses on finding shipment instances where there is a mismatch between the shipped quantities and the QOH differences. The results will help in auditing the inventory transfer process, identifying potential data entry errors, and improving overall inventory accuracy.

## SQL Query Walkthrough

The following SQL query identifies all shipment instances where the shipment quantity does not match the QOH difference. It highlights discrepancies between inventory issuance and shipment quantities, helping to identify potential issues.

### SQL Query
```sql
SELECT
    s.shipment_id,
    s.origin_facility_id AS source_facility,
    s.destination_facility_id AS destination_facility,
    si.product_id,
    si.quantity AS shipment_quantity,
    ABS(iid.quantity_on_hand_diff) AS qoh_quantity_diff,
    (si.quantity - ABS(iid.quantity_on_hand_diff)) AS discrepancy
FROM
    shipment s
JOIN
    shipment_item si ON s.shipment_id = si.shipment_id
JOIN
    inventory_item_detail iid ON s.shipment_id = iid.shipment_id 
        AND si.quantity <> ABS(iid.quantity_on_hand_diff)
JOIN
    inventory_item ii ON iid.inventory_item_id = ii.inventory_item_id
WHERE
    s.shipment_type_id = 'OUT_TRANSFER'
    AND ii.product_id = si.product_id
ORDER BY
    s.shipment_id,
    si.product_id;
```

### Detailed Explanation

#### Step-by-Step Breakdown

1. **Main Objective**:
   - The primary objective of this query is to identify discrepancies between shipment quantities and inventory quantity on hand (QOH) differences for each shipment instance.

2. **SELECT Fields**:
   - `s.shipment_id`: Captures the unique shipment ID.
   - `s.origin_facility_id AS source_facility`: Captures the source facility ID from which the product was shipped.
   - `s.destination_facility_id AS destination_facility`: Captures the destination facility ID where the product is being shipped.
   - `si.product_id`: Captures the product ID involved in the shipment.
   - `si.quantity AS shipment_quantity`: Represents the quantity of the product shipped.
   - `ABS(iid.quantity_on_hand_diff) AS qoh_quantity_diff`: Represents the absolute value of the QOH difference for the inventory issuance.
   - `(si.quantity - ABS(iid.quantity_on_hand_diff)) AS discrepancy`: Calculates the discrepancy between the shipment quantity and the QOH difference.

3. **FROM and JOIN Clauses**:
   - `shipment s`: The main table that contains shipment details.
   - `JOIN shipment_item si ON s.shipment_id = si.shipment_id`: Joins shipment items to get product details for each shipment.
   - `JOIN inventory_item_detail iid ON s.shipment_id = iid.shipment_id AND si.quantity <> ABS(iid.quantity_on_hand_diff)`: Joins inventory item details to identify where shipment quantities do not match QOH differences.
   - `JOIN inventory_item ii ON iid.inventory_item_id = ii.inventory_item_id`: Joins inventory item data to get product details.

4. **WHERE Clause**:
   - `s.shipment_type_id = 'OUT_TRANSFER'`: Filters for outgoing transfers only.
   - `ii.product_id = si.product_id`: Ensures that the product ID matches between shipment items and inventory details.

5. **Ordering Results**:
   - The `ORDER BY` clause organizes the output by `shipment_id` and `product_id` for easier interpretation and auditing.

### Use Case and Importance

This query is critical for ensuring the accuracy of inventory management, specifically for shipments leaving a facility. By identifying discrepancies between shipment quantities and inventory issuances, the organization can:

- **Reconcile Inventory Records**: Adjust inventory records to accurately reflect shipped quantities.
- **Audit Inventory Transfers**: Facilitate auditing by pinpointing problematic shipments.
- **Improve Data Accuracy**: Identify data entry errors or other issues in inventory tracking processes.

## Expected Outcomes

- **Discrepancy Report**: A report detailing shipment discrepancies, which can be used by inventory managers to investigate and reconcile discrepancies.
- **Improved Accuracy**: By identifying and correcting discrepancies, the accuracy of inventory records will be improved.
- **Enhanced Auditing**: The results will help auditors to track and verify inventory movements and ensure compliance with inventory management policies.

## Next Steps

- **Testing**: Test the query using sample shipment data to verify the correctness of identified discrepancies.
- **Optimization**: Optimize the query for performance, especially when dealing with large datasets.
- **Reporting**: Develop a detailed report to communicate the identified discrepancies and facilitate further action by inventory management.
