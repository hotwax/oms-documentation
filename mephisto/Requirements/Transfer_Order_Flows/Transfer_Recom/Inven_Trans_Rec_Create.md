# Inventory Transfer Recommendation Based on Sales Velocity

## Solution Overview

The system aims to effectively balance inventory levels across facilities by identifying stock shortages and recommending transfers from facilities with surplus. The process involves four main steps:

1. **Identify Facilities with Insufficient Stock**: Pinpoints facilities that need inventory replenishment.
2. **Find Potential Source Facilities**: Identifies facilities with surplus stock that can fulfill the need.
3. **Evaluate Transfer Feasibility**: Ensures that the source facility can afford to make the transfer without falling below its own minimum inventory requirements.
4. **Recommend Transfers**: Recommends optimal transfers based on the evaluation, including the value of the shipment.

## Detailed Steps

### 1. Identify Facilities with Insufficient Stock

- **Criteria**: A facility is identified as deficient if its current inventory minus the minimum required quantity is less than zero.
- **Purpose**: To determine which facilities need replenishment.

### 2. Find Potential Source Facilities

For each deficient facility:

- Search for other facilities with the same product that meet the following conditions:
  - The facility is different from the deficient one.
  - The sales velocity is above a set threshold.
- **Purpose**: To identify facilities that have surplus stock and sufficient sales activity, making them viable sources for transfers.

### 3. Evaluate Transfer Feasibility

- **Calculation**: Verify if the current inventory at the source facility minus the reorder quantity is greater than the minimum required quantity.
- **Purpose**: To ensure that the source facility will not fall below its own minimum inventory level after the transfer.

### 4. Recommend Transfers

- **Action**: If the feasibility condition is satisfied, recommend transferring the reorder quantity from the source to the deficient facility. Additionally, include the **UnitCost** from the `InventoryItem` to display the value of the shipment.
- **Shipment Value**: The value of the shipment is calculated as `ReorderQuantity * UnitCost`. This helps in understanding the financial impact of the transfer.

## Examples

### Example 1: Transfer Recommended

**Facility A (Deficient)**

- Product ID: 121
- Current Inventory: 0 units
- Reorder Quantity: 50 units

**Facility B (Source)**

- Current Inventory: 100 units
- Minimum Quantity: 20 units
- Sales Velocity: Above threshold
- Unit Cost: $10 per unit

**Calculation**:

- Source Inventory After Transfer: 100 units - 50 units = 50 units
- Check: 50 units > 20 units (Minimum Quantity)
- **Result**: True
- **Shipment Value**: 50 units * $10 = $500

**Recommendation**: Transfer 50 units from Facility B to Facility A. The shipment value is $500.

### Example 2: Transfer Not Recommended

**Facility A (Deficient)**

- Product ID: 121
- Current Inventory: 0 units
- Reorder Quantity: 50 units

**Facility C (Potential Source)**

- Current Inventory: 40 units
- Minimum Quantity: 20 units
- Sales Velocity: Above threshold
- Unit Cost: $10 per unit

**Calculation**:

- Source Inventory After Transfer: 40 units - 50 units = -10 units
- Check: -10 units > 20 units (Minimum Quantity)
- **Result**: False

**Recommendation**: Do not transfer units from Facility C.

## SQL Query for Transfer Recommendations

The following SQL query is designed to identify potential inventory transfers. It ensures that facilities with insufficient stock are matched with source facilities that have surplus inventory and sufficient sales velocity. The query also includes handling of `NULL` values due to gaps in our UAT (User Acceptance Testing) data. The key points for handling `NULL` values are:

- **MINIMUM_STOCK**: Defaults to 10 if `NULL`.
- **REORDER_QUANTITY**: Defaults to 20 if `NULL`.
- **COMPUTED_LAST_INVENTORY_COUNT**: Defaults to 0 if `NULL`.
- **SALES_VELOCITY**: Defaults to a generated value based on `PRODUCT_ID` if `NULL`.

### SQL Query

```sql
SELECT
    PF1.PRODUCT_ID,
    PF1.FACILITY_ID AS DeficientFacilityID,
    PF2.FACILITY_ID AS SourceFacilityID,
    IFNULL(PF1.REORDER_QUANTITY, 20) AS ReorderQuantity,
    IFNULL(PF1.MINIMUM_STOCK, 10) AS DeficientMinimumStock,
    IFNULL(PF1.COMPUTED_LAST_INVENTORY_COUNT, 0) AS DeficientInventory,
    PF2.SourceInventory,
    PF2.SourceMinimumStock,
    PF2.SourceSalesVelocity,
    (IFNULL(PF1.REORDER_QUANTITY, 20) * II.UnitCost) AS ShipmentValue
FROM
    Product_Facility PF1
JOIN
    (
        SELECT
            PF2.*,
            IFNULL(PF2.COMPUTED_LAST_INVENTORY_COUNT, 0) AS SourceInventory,
            IFNULL(PF2.MINIMUM_STOCK, 10) AS SourceMinimumStock,
            IFNULL(PF2.Sales_velocity, ((PF2.PRODUCT_ID * 13) % 21)) AS SourceSalesVelocity
        FROM
            Product_Facility PF2
    ) PF2 ON PF1.PRODUCT_ID = PF2.PRODUCT_ID
    AND PF1.FACILITY_ID <> PF2.FACILITY_ID
JOIN
    InventoryItem II ON PF1.PRODUCT_ID = II.PRODUCT_ID
WHERE
    (IFNULL(PF1.COMPUTED_LAST_INVENTORY_COUNT, 0) - IFNULL(PF1.MINIMUM_STOCK, 10)) < 0
    AND PF2.SourceSalesVelocity > 5
    AND (PF2.SourceInventory - IFNULL(PF1.REORDER_QUANTITY, 20)) > PF2.SourceMinimumStock;
```

### Explanation of the SQL Query

1. **Identifying Deficient and Source Facilities**:
   - The main table `Product_Facility PF1` represents facilities that need inventory (deficient facilities).
   - The subquery `PF2` represents potential source facilities that might have surplus inventory for the same product.
   - The `JOIN` condition ensures that the product IDs match between deficient and source facilities, and that the facilities are different (`PF1.FACILITY_ID <> PF2.FACILITY_ID`).

2. **Handling NULL Values**:
   - `IFNULL(PF1.REORDER_QUANTITY, 20)` ensures that if the reorder quantity is not provided, a default value of 20 is used.
   - `IFNULL(PF1.MINIMUM_STOCK, 10)` and `IFNULL(PF2.MINIMUM_STOCK, 10)` default the minimum stock level to 10 if no value is provided.
   - `IFNULL(PF1.COMPUTED_LAST_INVENTORY_COUNT, 0)` and `IFNULL(PF2.COMPUTED_LAST_INVENTORY_COUNT, 0)` ensure that the inventory count is treated as 0 if not provided.
   - `IFNULL(PF2.Sales_velocity, ((PF2.PRODUCT_ID * 13) % 21))` generates a default sales velocity if it is not available, based on the product ID.

3. **Conditions for Transfer**:
   - The condition `(IFNULL(PF1.COMPUTED_LAST_INVENTORY_COUNT, 0) - IFNULL(PF1.MINIMUM_STOCK, 10)) < 0` identifies facilities where inventory is below the minimum required level.
   - The condition `PF2.SourceSalesVelocity > 5` ensures that source facilities have sufficient sales activity.
   - The condition `(PF2.SourceInventory - IFNULL(PF1.REORDER_QUANTITY, 20)) > PF2.SourceMinimumStock` checks that the source facility will still have enough inventory left after making the transfer.

4. **Shipment Value Calculation**:
   - `(IFNULL(PF1.REORDER_QUANTITY, 20) * II.UnitCost) AS ShipmentValue` calculates the value of the shipment by multiplying the reorder quantity by the unit cost of the product. This value helps in understanding the financial impact of the recommended transfer.

This query effectively matches deficient facilities with suitable source facilities, ensuring inventory levels are balanced without compromising the operational capacity of the source facilities.