---
description: >-
  Track and manage discrepancies in fulfilled transfer orders, ensuring precise
  alignment between expected and received quantities.
---

# Receiving reports

## Discrepancy tracking for fulfilled transfer orders

Use this report to monitor discrepancies in fulfilled transfer orders. It compares expected shipped quantities with actual receipts.

## Receiving discrepancy report

Identify facilities where actual receipts do not match expected shipped amounts. Prioritize locations with higher discrepancies to investigate potential issues.

**In case of NetSuite**

In NetSuite, the report compares actual receipts with expected shipped amounts from transfer orders to highlight inventory accuracy issues.

**User:** Operations team

| Field                     | Details                                                           |
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
| Received                  | Quantity actually received                                        |
| Difference                | Variance between expected and actual quantities                   |
| Status                    | Current status of the shipment                                    |
