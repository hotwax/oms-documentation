---
description: Verify the installed NetSuite invoicing, cancellation, and refund processes.
---

# Invoicing

The released connector exposes `HC_SC_CreateSalesOrderInvoice` in the OMS job catalog as a NetSuite SuiteScript job. The connector repository does not contain that SuiteScript's implementation, so it does not prove universal selection criteria, payment outcomes, error-file behavior, or notifications.

## Verify invoice processing

Before enabling or operating the job:

1. Confirm that `HC_SC_CreateSalesOrderInvoice` is installed and deployed in the NetSuite account.
2. Record the deployed script and deployment IDs.
3. Review the installed script's saved search or selection criteria.
4. Confirm how customer deposits, payment items, taxes, and partial fulfillment are handled.
5. Confirm its schedule, file or record inputs, error handling, and notifications.

Use the NetSuite script execution and resulting invoice or error as evidence. A completed OMS fulfillment job does not, by itself, prove that NetSuite invoiced or applied payment to the order.

## Reconcile an invoice

Retain:

- Shopify, OMS, and NetSuite order identifiers.
- NetSuite item-fulfillment and invoice identifiers.
- Invoice status and applied payment or deposit records.
- `HC_SC_CreateSalesOrderInvoice` execution ID and error text.
- Any deployment-specific source file, saved search, or notification identifier.

## Cancellations and refunds

Cancellation and customer-refund integrations are deployment-specific. The released connector and generic OMS UDM do not define the previously documented universal 15-minute jobs, JSON contracts, SFTP paths, or customer-refund script.

For the configured deployment, document and verify:

1. The system that owns cancellation and refund decisions.
2. The OMS producer or import job and its actual schedule.
3. File or API format, remote, path, and identifier mapping.
4. The installed NetSuite updater and refund SuiteScripts.
5. Partial-cancellation and partial-refund accounting behavior.
6. Retry, idempotency, and duplicate-prevention controls.
7. Final order, deposit, refund, and invoice statuses.

`HC_SC_UpdateSalesOrders` is exposed as a general NetSuite sales-order update job, but its presence does not prove that a deployment uses it for cancellations.

For cross-system monitoring, use [Order synchronization checkpoints](reports.md).
