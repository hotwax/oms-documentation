---
description: Monitor Shopify inventory event sync for channels and physical locations, separately from inventory entering OMS.
---

# Inventory workflows

Shopify inventory event sync publishes OMS inventory changes to Shopify through two ledgers: channel inventory events and physical-location inventory events. Inventory entering OMS from an ERP, receipt, or file import is a separate step; successful import does not establish Shopify delivery.

<a id="adjustments"></a>

## Shopify inventory event sync

1. Open the Company App and select `Shopify`.
2. Open the affected connection and confirm its shop and Product Store.
3. Select `Inventory sync`.
4. Choose the channel or physical-location path that matches the Shopify target.
5. Follow the event into its batch and check delivery, then verify the quantity in Shopify.

| Path | Inventory basis | Monitor and publisher |
| --- | --- | --- |
| Channel inventory | ATP calculated for the channel's facility group, published to its aggregate Shopify location | `Channel inventory events`, the channel card, and `Send channel batches` |
| Physical-location inventory | Facility ATP changes published as available-quantity adjustments to the mapped physical Shopify location | `Physical inventory events` and `Publish physical batches (all shops)` |

<figure><img src="../../.gitbook/assets/company-inventory-monitor-main.jpg" alt="Company inventory event sync with separate channel and physical-location queues, waiting events, and publisher jobs"><figcaption><p>Sandbox example of the two Shopify inventory event paths. The shown pending events and paused jobs are sample states, not successful delivery results.</p></figcaption></figure>

### Follow events, batches, and delivery

Inventory changes captured by the enabled event sources produce ledger rows. Publishers group eligible waiting rows into batches, and the corresponding sender delivers each batch to Shopify. Inspect both capture and delivery when a target is stale.

* `Events waiting to batch` counts event rows, not products or units.
* `Batches waiting to send` identifies work not yet delivered.
* Open an event to inspect its source, signed change, target, and linked batch.
* Open the batch to review its summed change entries, delivery state, and errors.
* Review the correct publisher's pause state, schedule, parameters, and recent runs.

A completed publisher run or queued batch does not prove Shopify accepted an adjustment. Verify the batch and the actual target quantity.

<a id="hard-sync"></a>

### Reconcile the affected target

Use the reset job that matches the target and quantity:

| Company App job | Purpose |
| --- | --- |
| `Reset channel ATP` | Reconcile aggregate ATP for the selected channel |
| `Reset physical ATP (this shop)` | Reconcile ATP for the connection's mapped physical locations |
| `Reset physical on-hand` | Reconcile physical on-hand quantity when that separate quantity is required |

Review mappings, source quantities, outstanding Shopify order imports, and recovery scope before an approved reset. Physical event adjustments use available inventory; an on-hand reset is a separate reconciliation operation.

`Resend` sends an existing batch's frozen payload and idempotency key. It does not recalculate current inventory. Correct the delivery error before an approved retry, and use an appropriate reset when missed capture or an obsolete payload requires reconciliation.

<a id="upload-recent-inventory-changes"></a>

### Configure capture and schedules

Review both `Channel events` and `Physical location events`, the selected shop's push control, and the event-source controls. Changes made while capture is off are not recorded for later replay. Reconcile every affected target before relying on incremental updates again.

Job creation and activation must follow the approved configuration. Missing jobs that offer `Set up` are created paused; a successful setup does not enable publication automatically. Keep manual discard jobs paused and unscheduled.

Use [Monitor Shopify inventory sync](../../../system-admin/administration/company/manage-shopify-inventory-sync.md) for the complete setup, history, job, and recovery procedures. Do not substitute a file-import job or an inbound inventory webhook for either outbound event path.

## Inventory entering OMS

The workflows below update inventory records or supporting configuration inside OMS. Verify that result first, then investigate outbound Shopify events separately.

<a id="import-inventory"></a>
<a id="import-product-facility"></a>

### Inventory and configuration files

Use the configured Data Manager import for the approved inventory or product-facility file. Confirm its configuration, source path, expected quantity meaning, import status, failed records, and resulting OMS records. File retrieval or upload alone does not establish processing success.

* [Choose inventory import quantities and methods](../../inventory/inventory-upload/import-methods.md)
* [Troubleshoot file imports](../job-management/troubleshooting/file-imports.md)
* [Verify sourcing changes](../../inventory/available-to-promise/use-cases.md#verify-sourcing-changes)

<a id="import-item-receipt"></a>
<a id="import-inventory-transfer"></a>
<a id="import-inbound-shipment"></a>

### Receipts and transfers

Follow the configured receipt or transfer integration and verify the resulting inventory at the correct facility. Importing a transfer or inbound shipment is not the same as physically receiving stock.

* [NetSuite inventory integration](../../../learn-netsuite/integration-flows/inventory.md)
* [Receive transfer orders](../../../store-operations/receiving/transfer-orders.md)

<a id="bulk-recent-kit-product-inventory-setup"></a>

### Kit inventory

OMS-derived kits use component-based calculations and dedicated channel and physical-location reset feeds in the reviewed connector. Do not assume ordinary component events immediately publish a kit quantity. See [Kit inventory synchronization](../../../learn-shopify/shopify-integration/inventory/inventory-sync-kitproducts.md).

<a id="schedule-restock"></a>

### Scheduled restocking

A scheduled restock changes the inventory entering OMS. Follow the [scheduled restock procedure](../../inventory/inventory-upload/schedule-restock.md) and verify the OMS result separately from Shopify event delivery. An intended launch time is not proof that both steps completed at that time.

<a id="webhooks"></a>
<a id="sync-invnetory-from-shopify"></a>

### Starting inventory from Shopify

The one-time starting inventory seed is inbound, from Shopify to OMS. Follow [Chapter 8 of Shopify onboarding](../../../system-admin/administration/company/product-store-onboarding.md#8-seed-starting-inventory-from-shopify). It is separate from the channel and physical-location event publishers described above.
