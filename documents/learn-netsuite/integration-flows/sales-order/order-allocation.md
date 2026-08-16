---
description: Configure and verify the allocation feed for NetSuite-managed fulfillment facilities.
---

# Order allocation

Send allocation to NetSuite only when NetSuite owns fulfillment for the assigned facility. Store and other OMS-managed fulfillment remains in HotWax Commerce; its completed items follow the separate [fulfillment synchronization](fulfillment.md#completed-fulfillment-from-hotwax-commerce) flow.

## Released eligibility

`generate_BrokeredOrderItemsFeed_Netsuite` selects an order item when it:

- Belongs to a `SALES_ORDER` with `NETSUITE_ORDER_ID`.
- Has a NetSuite line identifier in `NetsuiteItemLineId`.
- Is in `ITEM_APPROVED` status.
- Is assigned to a physical facility in `NETSUITE_FULFILLMENT`.
- Has no external fulfillment record, or its external fulfillment status is `REJECT`.

The facility group is therefore a functional routing boundary, not merely reporting metadata.

## Configure the feed

The job template is seeded paused. Before enabling it:

1. Configure `systemMessageRemoteId` and `filePathPattern`.
2. Review the optional order, item, batch-size, and template parameters.
3. Confirm that intended NetSuite-managed facilities are current members of `NETSUITE_FULFILLMENT`.
4. Configure the schedule in the instance timezone.

The job writes a CSV to the configured SFTP path and records the external fulfillment item as `Sent`. `HC_SC_UpdateSalesOrders` imports the update in NetSuite.

## Verify an allocation

Use the same OMS order and line identifiers through the flow:

1. Confirm `NETSUITE_ORDER_ID` and `NetsuiteItemLineId`.
2. Confirm item status, assigned facility, physical facility type, and `NETSUITE_FULFILLMENT` membership.
3. Retain the `generate_BrokeredOrderItemsFeed_Netsuite` Job Run ID, parameters, filename, and terminal result.
4. Confirm the file at the configured SFTP remote and path.
5. Confirm the `HC_SC_UpdateSalesOrders` deployment and execution result.
6. Confirm the intended NetSuite sales-order line location.

## Rejected allocation

The released outbound view makes a line eligible again when its external fulfillment status is `REJECT`. The released connector does not define the legacy `HC_MR_ExportedRejectedSalesOrderItemCSV` or `IMP_ORDER_ITM_RJCT` identifiers previously documented on this page.

If a deployment imports warehouse rejection from NetSuite, verify and document that integration's actual exporter, transformation, OMS import configuration, SFTP path, and retry behavior. Do not copy identifiers from another tenant.
