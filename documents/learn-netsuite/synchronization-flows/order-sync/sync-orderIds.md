---
description: >-
  Create sales orders and import their NetSuite identifiers through the CSV integration.
---

# Sync order IDs over SFTP

This page describes the earlier CSV integration over Secure File Transfer Protocol (SFTP). For the batch integration and its result imports, use [Order sync](README.md).

HotWax Commerce imports the NetSuite order ID and line IDs after NetSuite creates the sales order. Later allocation and order updates use these identifiers to address the correct records.

## Create sales orders in NetSuite

1. Schedule the configured order export job in the HotWax Commerce integration layer. It generates a file for orders still eligible for export without a recorded NetSuite order ID. When `runFeedWithHistory=Y`, an existing sync-history row also excludes an order.
2. Verify the exported file at the configured SFTP location:

```text
/home/{sftp-username}/netsuite/salesorder/export
```

3. Schedule `HC_importSalesOrders` in NetSuite to import the file.
4. Check the script result and confirm that the intended sales orders were created.

Replace `{sftp-username}` with the configured SFTP username. Job schedules and selection criteria depend on the deployment.

Review [CSV selection and retry behavior](../../troubleshooting/order-do-not-sync.md#trace-the-csv-integration) before regenerating a feed. An earlier export can still lack its NetSuite acknowledgement.

## Import order and line identifiers

| Stage | NetSuite export script | HotWax Commerce import job | FTP configuration |
| --- | --- | --- | --- |
| Order line IDs | `HC_MR_ExportedSalesOrderItemCSV` | `Order Item Attribute` | `IMP_ORDER_ITM_ATTR` |
| Order IDs | `HC_MR_ExportedSalesOrderCSV` | `Order Identification` | `IMP_ORDER_IDENT` |

1. Schedule the NetSuite export scripts to generate the acknowledgement files.
2. Open `Catalog` in Job Manager and find each import job.
3. Configure the corresponding FTP configuration and schedule.
4. Check the import results and verify that both the order ID and line IDs are available in HotWax Commerce.

A successful NetSuite import does not complete this acknowledgement stage. If the order exists in NetSuite but its identifiers are missing in OMS, recover the acknowledgement import before resubmitting the order.

See [Manage a job](../../../system-admin/administration/job-manager/jobs/job-details.md) for scheduling instructions.
