---
description: >-
  Discover how reports are essential for monitoring the brokering of orders to
  facilities.
---

# Reports

These reports are essential for monitoring the brokering of orders to facilities.

## Brokered Items Report

View this report to understand which items have been brokered to facilities for fulfillment. Compare this information with new orders received in the OMS to track allocation rates. Any discrepancies between new orders from eCommerce and entries in this report may indicate issues with orders not progressing to fulfillment.

**In the NetSuite context**, the Brokered Items Report is vital for a streamlined fulfillment process. By cross-referencing brokered items with new orders, retailers ensure alignment between NetSuite and eCommerce platforms. Inconsistencies may highlight integration issues, risking order fulfillment disruptions. A misalignment between new orders from eCommerce and entries in this report may indicate that orders are not progressing to fulfillment in NetSuite.

### User
Operations team

### Glossary

| Field                | Details                                        |
| -------------------- | ---------------------------------------------- |
| HC\_Order\_ID        | The ID of the order in HotWax Commerce         |
| SHOPIFY\_ORDER\_NAME | The internal ID of the order in Shopify        |
| UPCA                 | Unique identifier                              |
| FACILITY\_ID         | The ID of the facility in HotWax Commerce      |
| BROKERED\_DATE       | The date when the order was brokered           |
| PRODUCT\_STORE\_ID   | The ID of the product store in HotWax Commerce |

## Brokered Count Report

View this report to monitor the brokered order count, providing a high-level overview to ensure all new orders are allocated. If the brokered count significantly lags behind the total new order count, investigate the unfillable reports for potential issues.

### User
Operations team

### Glossary

| Field           | Details                                                                   |
| --------------- | ------------------------------------------------------------------------- |
| STORE           | The name of the product store                                             |
| BROKERED\_DATE  | The date when the order was brokered                                      |
| BROKERED\_COUNT | The count of orders brokered at the store of the brand in HotWax Commerce |
