---
description: >-
  Discover how transfer order movements are tracked for timely synchronization
  between HotWax and NetSuite with efficient reports.
---

# Reports

Transfer Order reports play a crucial role in monitoring and managing the movement of goods between facilities. Here are two types of Transfer Order reports:

## Open Transfer Order Shipment Older Than One Day Report

This Open Transfer Order Shipment Older Than One Day report provides a comprehensive overview of transfer orders that have been imported from NetSuite to HotWax but have not yet been received within the last one day. The absence of reception indicates a lapse in communication to complete these orders in NetSuite. This report assists in identifying and addressing transfer orders that require attention for completion in NetSuite, ensuring a timely and accurate synchronization between HotWax and NetSuite systems.

| Field                     | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| Shipment\_ID              | The unique identifier for the shipment in the external system     |
| HotWax\_Shipment\_ID      | The unique identifier for the shipment in HotWax                  |
| Transfer\_Order           | The identification of the transfer order in the external system   |
| Origin\_Facility\_ID      | The ID of the origin facility where the shipment originates       |
| Origin\_Facility          | The name of the facility where the shipment originates            |
| Destination\_Facility\_ID | The ID of the destination facility where the shipment is destined |
| Destination\_Facility     | The name of the facility where the shipment is destined           |
| Shipment\_Status          | The current status of the shipment                                |
| Imported\_Date            | The date when the transfer order was imported into HotWax         |

## Transfer Order Shipment Completed Today Report

This Transfer Order Shipment Completed Today report provides a comprehensive list of transfer orders that have been received in HotWax and marked as completed.

| Field                     | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| Shipment\_ID              | The unique identifier for the shipment in the external system      |
| HotWax\_Shipment\_ID      | The unique identifier for the shipment in HotWax                   |
| Transfer\_Order           | The identification of the transfer order in the external system    |
| Origin\_Facility\_ID      | The ID of the origin facility where the shipment originates        |
| Origin\_Facility          | The name of the facility where the shipment originates             |
| Destination\_Facility\_ID | The ID of the destination facility where the shipment is destined  |
| Destination\_Facility     | The name of the facility where the shipment is destined            |
| Shipment\_Status          | The current status of the shipment                                 |
| Completed\_Date           | The date when the transfer order was marked as completed in HotWax |
