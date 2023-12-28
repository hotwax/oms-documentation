# Discrepancy Tracking for Fulfilled Transfer Orders
Reports designed to meticulously monitor and manage discrepancies arising from fulfilled transfer orders. In essence, it serves as a comprehensive oversight tool to ensure the actual receipt aligns accurately with the expected shipped quantities.

# Receiving Discrepancy report

Monitor and identify discrepancies at facilities where the actual receipt does not align with the expected shipped amount from NetSuite for fulfilled transfer orders. Facilities reporting higher discrepancies will be prioritized at the top, facilitating a focused investigation into potential issues with inventory levels.

**User:**
Operations team

| Field                    | Value                                 |
|--------------------------|---------------------------------------|
| Shipment_Id              | The ID of the shipment in external system    |
| HotWax_Shipment_Id       | The ID of the shipment in HotWax |
| Transfer_Order           | The ID of the transfer order in external system     |
| SKU                      | Unique identifier         |
| Origin_Facility_Id       | The ID of the origin facility where the shipment originates          |
| Origin_Facility          | The name of the facility where the shipment originates|
| Destination_Facility_Id  | The ID of the destination facility where the shipment is destined       |
| Destination_Facility     | The name of the facility where the shipment is destined|
| Expected                 | Quantity expected to be shipped      |
| Recieved                 | Quantity actually received           |
| Difference               | Variance between expected and actual quantities |
| Status                   | Current status of the shipment        |

