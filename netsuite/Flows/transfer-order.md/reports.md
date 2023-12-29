## Open Transfer Order Shipment Older Than One Day Report

This Open Transfer Order Shipment Older Than One Day report provides a comprehensive overview of transfer orders that have been imported from NetSuite to HotWax but have not yet been received within the last one day. The absence of reception indicates a lapse in communication to complete these orders in NetSuite. This report assists in identifying and addressing transfer orders that require attention for completion in NetSuite, ensuring a timely and accurate synchronization between HotWax and NetSuite systems.



| Field                  | Description                                             |
|------------------------|---------------------------------------------------------|
| Shipment_ID            | The unique identifier for the shipment in the external system |
| HotWax_Shipment_ID     | The unique identifier for the shipment in HotWax       |
| Transfer_Order         | The identification of the transfer order in the external system |
| Origin_Facility_ID     | The ID of the origin facility where the shipment originates |
| Origin_Facility        | The name of the facility where the shipment originates  |
| Destination_Facility_ID| The ID of the destination facility where the shipment is destined |
| Destination_Facility   | The name of the facility where the shipment is destined  |
| Shipment_Status        | The current status of the shipment                      |
| Imported_Date          | The date when the transfer order was imported into HotWax |


# Transfer Order Shipment Completed Today Report

This Transfer Order Shipment Completed Today report provides a comprehensive list of transfer orders that have been received in HotWax and marked as completed.

| Field                  | Description                                             |
|------------------------|---------------------------------------------------------|
| Shipment_ID            | The unique identifier for the shipment in the external system |
| HotWax_Shipment_ID     | The unique identifier for the shipment in HotWax       |
| Transfer_Order         | The identification of the transfer order in the external system |
| Origin_Facility_ID     | The ID of the origin facility where the shipment originates |
| Origin_Facility        | The name of the facility where the shipment originates  |
| Destination_Facility_ID| The ID of the destination facility where the shipment is destined |
| Destination_Facility   | The name of the facility where the shipment is destined  |
| Shipment_Status        | The current status of the shipment                      |
| Completed_Date         | The date when the transfer order was marked as completed in HotWax |