---
description: Distinguish NetSuite allocation, OMS fulfillment export, and NetSuite fulfillment import.
---

# Fulfillment synchronization

<figure><img src="../../../.gitbook/assets/order-timeline.png" alt=""><figcaption><p>Order lifecycle timeline</p></figcaption></figure>

Allocation to a NetSuite-managed facility, completed fulfillment from an OMS-managed facility, and shipped fulfillment returning from NetSuite are three different flows. Monitor them independently.

Both outbound job templates are seeded paused. Configure the SFTP remote before enabling either job. Also configure `filePathPattern` for `generate_BrokeredOrderItemsFeed_Netsuite`.

## Allocation to NetSuite-managed facilities

Use `generate_BrokeredOrderItemsFeed_Netsuite` for allocations that NetSuite will fulfill. The connector selects approved items assigned to physical facilities in `NETSUITE_FULFILLMENT`.

This is an allocation feed, not a completed-fulfillment feed. Confirm the facility's group membership, outbound Job Run, SFTP file, and `HC_SC_UpdateSalesOrders` result in NetSuite.

## Completed fulfillment from HotWax Commerce

Use `generate_FulfilledOrderItemsFeed_Netsuite` after an OMS-managed facility completes fulfillment.

In connector v3.0.3, this job:

- Selects completed, non-POS items from facilities in `OMS_FULFILLMENT`.
- Generates a CSV feed.
- Uses the `hotwax-fulfilled` line tag.
- Uploads to `/home/{sftp-username}/netsuite/salesorder/update/`.

`HC_SC_UpdateSalesOrders` applies the update in NetSuite, and `HC_SC_CreateItemFulfillment` creates the item-fulfillment record. Verify the installed script deployments and actual connector version because behavior can differ by deployed connector version.

## Shipped fulfillment from NetSuite

`HC_MR_ExportedSalesOrderFulfillmentCSV` exports shipped item-fulfillment records from NetSuite.

The connector exposes the exporter metadata, while downstream file pickup, transformation, and OMS import are deployment/integration-stack specific. Generic OMS UDM defines `Order Item Fulfillment` with configuration `IMP_ODR_ITM_FLFLMNT`; verify whether the deployment configures and schedules it. Do not assume that path is connector-native.

## Verification

For either direction, retain:

- OMS order ID and order-item sequence ID.
- Owning facility and its configured fulfillment group.
- Outbound or inbound Job Run and filename.
- SFTP remote and exact path.
- NetSuite SuiteScript deployment and execution result.
- Final item status and identifier in both systems.

For a complete diagnostic chain, use [Order synchronization checkpoints](reports.md).
