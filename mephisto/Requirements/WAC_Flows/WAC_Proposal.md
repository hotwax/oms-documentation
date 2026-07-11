# Revised Proposal for Implementing Weighted Average Cost Calculation

## Activate the Average Cost Update Service

**File:** `secas.xml`

```xml
<!-- Set the average cost of product -->
<eca service="receiveInventoryProduct" event="commit">
    <action service="updateProductAverageCostOnReceiveInventory" mode="sync"/>
</eca>
```

This action ensures that whenever the `receiveInventoryProduct` service commits (i.e., when inventory is received), the `updateProductAverageCostOnReceiveInventory` service is triggered synchronously. This ensures that the average cost of the product is up-to-date immediately after inventory is received, providing accurate cost information for subsequent transactions.

## Utilize `productAverageCost` Entity

The `productAverageCost` entity stores the calculated average costs of products and ensures cost consistency across the system.

**Fields in `productAverageCost`:**
- **productAverageCostTypeId**: Specifies the type of average cost calculation (e.g., `WEIGHTED_AVG_COST`). This field allows different methods of cost calculation to be used, providing flexibility in cost management.
- **partyId**: The party (store or organization) associated with the product. This field helps in differentiating costs based on different stores or entities managing the product.
- **productId**: The identifier of the product. This unique identifier is used to associate the average cost record with a specific product.
- **facilityId**: The facility where the product is stored. This allows cost calculations to be specific to a particular storage facility, which is crucial for multi-facility operations.
- **averageCost**: The calculated average cost of the product. This value is updated based on the method specified by `productAverageCostTypeId` and reflects the true cost of inventory at a given point in time.
- **fromDate** / **thruDate**: The effective date range for this average cost record. `fromDate` indicates when the cost record becomes effective, and `thruDate` specifies until when it is valid. If `thruDate` is null, it indicates that the cost is currently active.

**Types in `productAverageCostType`:**
- `SIMPLE_AVG_COST`: A straightforward average of the cost of all inventory units.
- `WEIGHTED_AVG_COST`: A weighted average considering the cost of existing inventory and newly received inventory.
- `MOVING_AVG_COST`: A continuously updated average that adjusts as inventory is received or sold.

## Process Flow Upon Receiving Inventory

### Step 1: Receive Inventory
When a store receives inventory via a shipment, the `receiveInventoryProduct` service is called. This service handles the logistics of adding the received quantity to the existing inventory and updating relevant records.

### Step 2: Trigger Average Cost Update
The `updateProductAverageCostOnReceiveInventory` service is automatically invoked due to the configured ECA (Event-Condition-Action) rule. This ensures that any changes in inventory quantities immediately reflect in the average cost calculations, maintaining data integrity and accuracy.

### Step 3: Calculate New Average Cost
The service calculates the new average cost of the item using the Weighted Average Cost method. The Weighted Average Cost is calculated by considering both the cost of the existing inventory and the cost of the newly received inventory. The formula used is:

New Average Cost = 
((Existing Quantity × Existing Cost) + (New Quantity × New Cost)) 
divided by 
(Existing Quantity + New Quantity)

This method provides a balanced approach to costing, taking into account both historical and current inventory costs. The cost of existing inventory is calculated using the most recent valid record in `productAverageCost` for that item, ensuring accuracy.

### Step 4: Record the New Average Cost
Create a new record in the `productAverageCost` entity with:
- **productAverageCostTypeId**: Set to `WEIGHTED_AVG_COST` to indicate the method used.
- **partyId**: The store or organization's ID to associate the cost with the relevant entity.
- **productId**: The product's ID to ensure the cost is linked to the correct item.
- **facilityId**: The facility where the product is stored, providing location-specific cost data.
- **averageCost**: The newly calculated average cost, which is now the effective cost for this product.
- **fromDate**: The current date/time, indicating when this cost becomes effective.
- **thruDate**: Null or a future date when the cost is no longer effective. If `thruDate` is null, it means the current record is active until another update is made.

This record-keeping process ensures that historical cost data is retained, allowing for accurate tracking and auditability of cost changes over time.