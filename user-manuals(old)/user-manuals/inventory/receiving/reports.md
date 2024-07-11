---
description: >-
  Track and manage discrepancies in fulfilled transfer orders, ensuring precise
  alignment between expected and received quantities.
---

# Receiving Reports

## Discrepancy Tracking for Fulfilled Transfer Orders

Reports designed to meticulously monitor and manage discrepancies arising from fulfilled transfer orders. In essence, it serves as a comprehensive oversight tool to ensure the actual receipt aligns accurately with the expected shipped quantities.

## Receiving Discrepancy report

Monitor and identify discrepancies at facilities where the actual receipt does not align with the expected shipped amount. This systematic approach allows for a meticulous tracking of fulfilled transfer orders, ensuring that the actual receipt quantities are in sync with the expectations. Facilities reporting higher discrepancies are strategically prioritized, enabling a focused investigation into potential issues.

**In case of NetSuite**

In the context of NetSuite, this monitoring system becomes particularly beneficial. By aligning the actual receipt with the expected shipped amount from NetSuite for fulfilled transfer orders, organizations gain a targeted insight into the accuracy of their inventory management.

**User:** Operations team

| Field                     | Detials                                                           |
| ------------------------- | ----------------------------------------------------------------- |
| Shipment\_Id              | The ID of the shipment in external system                         |
| HotWax\_Shipment\_Id      | The ID of the shipment in HotWax                                  |
| Transfer\_Order           | The ID of the transfer order in external system                   |
| SKU                       | Unique identifier                                                 |
| Origin\_Facility\_Id      | The ID of the origin facility where the shipment originates       |
| Origin\_Facility          | The name of the facility where the shipment originates            |
| Destination\_Facility\_Id | The ID of the destination facility where the shipment is destined |
| Destination\_Facility     | The name of the facility where the shipment is destined           |
| Expected                  | Quantity expected to be shipped                                   |
| Recieved                  | Quantity actually received                                        |
| Difference                | Variance between expected and actual quantities                   |
| Status                    | Current status of the shipment                                    |
