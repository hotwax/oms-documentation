---
description: Trace inventory discrepancies for a product, facility, and sales channel.
---

# Troubleshoot inventory

Compare the same product and location in each system. Record the product identifier, facility, time, and quantity being compared: Quantity on Hand (QOH), Available to Promise (ATP), or online ATP.

| Problem | What to check |
| --- | --- |
| A quantity changed unexpectedly in OMS | Open [View Inventory Log](view-inventory-log.md), filter by facility, and inspect the event and quantity differences. |
| OMS and Shopify show different inventory | Follow [Inventory Synchronization Errors](inventory-synchronization-errors.md) to trace the mapped location or channel, event batch, and delivery result. |
| An inventory file did not update OMS | Check the import status, record counts, and errors using [Troubleshoot file imports](../../../system-admin/administration/job-manager/troubleshooting/file-imports.md). |
| Physical stock exists but online ATP is lower | Review [inventory and online ATP](../available-to-promise/inventory.md) and the [sourcing concepts](../available-to-promise/concepts.md) that affect availability. |

An inventory log's `ATP diff` or `QOH diff` is the change recorded by that event, not the final balance. For example, releasing one reserved unit adds 1 to ATP and leaves QOH unchanged.

After resolving the cause, check the resulting OMS quantity and, when applicable, the mapped Shopify quantity. Confirm which records already applied before retrying an import or resetting inventory.
