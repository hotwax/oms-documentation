---
description: Use source-system evidence to monitor and reconcile NetSuite order synchronization.
---

# Order synchronization checkpoints

The base connector does not guarantee that a named assurance report is installed in every deployment. Reconcile the flow with source-system evidence and the same order identifiers instead of relying on a report title alone.

## Checkpoint table

| Stage | Evidence to retain | Failure signal |
| --- | --- | --- |
| OMS eligibility | Shopify order ID, `NETSUITE_CUSTOMER_ID`, item `NETSUITE_PRODUCT_ID` values, and absence of `NETSUITE_ORDER_ID` | A prerequisite is missing, so the order is absent from `EligibleOrders`. |
| Feed generation | Job name, Job Run ID, parameters, filename, record count, and terminal status | The job fails, produces no eligible record, or routes it to `required_fields_missing` or `partial_payment`. |
| SFTP delivery | Configured remote, exact path, filename, size, and timestamp | The file is absent, stale, or in an error/archive location unexpectedly. |
| NetSuite import | SuiteScript deployment, execution ID, CSV import status, and NetSuite error text | The script or import is failed, incomplete, or not deployed. |
| Identifier export | Export script execution and returned header or line IDs | NetSuite created the record but no return row exists. |
| OMS identifier import | Data Manager configuration, `logId`, Job Run link, terminal result, and stored identifiers | The import failed or the expected order still lacks NetSuite IDs. |
| OMS approval | Final status and the exact standard or custom policy evaluated | IDs are present, but a payment, risk, attribute, or Product Store gate remains unsatisfied. |
| Allocation or fulfillment | Owning facility group, outbound job, SuiteScript/import evidence, and item statuses in both systems | Allocation and completed-fulfillment flows are confused or one direction is missing. |

## Recommended reconciliation

1. Start with one Shopify order ID and resolve its HotWax Commerce order ID.
2. Check the earliest missing prerequisite or checkpoint.
3. Record exact Job Run, Data Manager `logId`, filename, and NetSuite execution identifiers.
4. Correct the failed stage before replaying downstream work.
5. Confirm the final NetSuite internal ID and OMS status without creating a duplicate.

Deployment-specific BI or saved-search reports can supplement this chain, but their fields, owners, schedules, and alert thresholds should be documented with that deployment.

## Troubleshooting references

- [Order Sync Failure](../../troubleshooting/order-do-not-sync.md)
- [Failed SuiteScripts](../../troubleshooting/failed-suitescripts.md)
- [Error Logs](../../troubleshooting/finding-logs.md)
- [Manage a job](../../../retail-operations/workflow/job-management/jobs/job-details.md)
