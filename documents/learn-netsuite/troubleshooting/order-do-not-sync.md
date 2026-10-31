# Orders not syncing with NetSuite

Use this guide when an order is missing in NetSuite or its NetSuite ID has not reached HotWax Commerce. First confirm whether the deployment uses the batch integration or the earlier CSV integration over Secure File Transfer Protocol (SFTP).

## Trace the batch integration

Record the OMS order ID, product store, NetSuite external ID, system message ID, and remote job or task ID when available. Use those identifiers to follow the same order through each stage.

### Check selection and prerequisites

1. Check for an existing `NETSUITE_ORDER_ID` and a `NetSuiteSalesOrderDetail` tracking record. The default selection excludes an order when either exists.
2. Review the active rules and cutover settings for the product store. An order can be eligible but remain unselected because no rule matches it.
3. Check every item's active NetSuite product mapping, fulfillment location, and open hold tasks. For an exchange, check the source return's credit memo.
4. Check customer resolution. The default flow waits for the bill-to customer's NetSuite ID. A facility-based customer configuration records an error when its default customer is missing.
5. Check the shop mapping, timezone, and payment coverage. The default preparation checks item values plus adjustments against valid payments with a 1% tolerance.

For the full prerequisite list, see [Order sync](../synchronization-flows/order-sync/README.md#select-orders-and-resolve-prerequisites).

### Check the tracking record and message

| Observed state | What to check next |
| --- | --- |
| No tracking record | Review rule coverage, waiting conditions, producer execution, and the configured open-batch limit. |
| Tracking record with an error but no message ID | Read the preparation error and correct the underlying mapping or order data. The tracking record prevents automatic reselection. |
| `SmsgProduced` | Check the sender, connection, request file, and send errors. The shared sender marks the message `SmsgError` when its retry threshold is reached; the default threshold is three failures. |
| `SmsgSent` | Check the remote job or task and the corresponding result poller. Record the remote outcome before considering another submission. |
| `SmsgReceived` | Check result consumption. The script poller selects sent messages, so a received message with a consumption error needs recovery of that stage. |
| `SmsgConsumed` | Check Data Manager result imports and the persisted order and line identifiers. |
| `SmsgError` | Read the exact send or task failure, check the remote outcome, and identify whether recovery belongs to submission, result collection, or import. |

The REST batch poller returns an unconsumed received message to the sent state for a later poll. The script batch poller does not implement that same reset. Use the configured transport when interpreting the message state.

### Verify result imports

1. Check `IMP_NS_SALES_ORDER_RESULT` for the order's tracking outcome.
2. Check `IMP_NS_SALES_ORDER_ID` for the `NETSUITE_ORDER_ID` import.
3. Check `IMP_NS_SALES_ORDER_ITEM` for the line identifiers required by later updates.
4. Compare the stored order ID with the actual NetSuite record. Confirm that it belongs to the same external order and customer.

If NetSuite already has the order, recover the missing result or import. Creating another order does not repair a missing acknowledgement.

### Recover the failed stage

Correct the specific error before retrying. Waiting orders have no claim and are checked again on a later producer run. Preparation refusals and claimed orders keep their tracking records, so changing source data alone does not make them eligible again.

Before a controlled retry, reconcile the saved request, remote result, tracking record, and Data Manager history. Preserve the batch file and identifiers. Use the deployment's recovery procedure for the failed stage; do not remove claims or generate a replacement batch while the remote outcome is unknown.

## Trace the CSV integration

For deployments using the earlier SFTP flow, check the actual feed job's `runFeedWithHistory` parameter before interpreting `Order Sync Feed History` on the `Order Details` page.

| History mode | Selection and recovery behavior |
| --- | --- |
| `runFeedWithHistory=Y` | An `ExternalOrderSyncHistory` row excludes the order from later exports. A required-field failure can still create this row even when the order enters an exception file. Correcting the source data alone does not make that order eligible again. |
| `runFeedWithHistory=N` | The producer does not write sync history. The shared job definitions use this mode. Missing history does not prove that no export ran, and an exported order can remain eligible until its NetSuite ID is recorded. |

1. Check the configured order feed job, history mode, selection criteria, and existing NetSuite ID.
2. Inspect the main file and the separate `required_fields_missing` and `partial_payment` exception files. Read the missing-field or payment reason and verify each file's configured destination. Partially paid, non-replacement point of sale orders do not receive a history row in history-enabled mode.
3. Confirm that the intended file reached its destination, then check the NetSuite import script and its record errors.
4. Reconcile the order directly in NetSuite. If it exists, recover the acknowledgement export and OMS identifier import.
5. Only for a confirmed failed history-enabled attempt with no remote order, use the deployment's supported recovery operation to release that order's history. Regenerate and reconcile the affected order before resuming broader processing.

A history row records an export attempt, which may have produced an exception record. It does not prove that the main file contained the order, that NetSuite imported it, or that OMS received the acknowledgement. Preserve history while the remote outcome is unknown.

| Flow | Feed job | NetSuite import | NetSuite acknowledgement export |
| --- | --- | --- | --- |
| Sales order | `generate_CreateOrderFeed` | `HC_importSalesOrders` | `HC_MR_ExportedSalesOrderCSV` |
| POS cash sale | `generate_CreateOrderFeed_pos` | `HC_SC_ImportCashSale` | `HC_MR_ExportedCashSaleCSV` |

Check the job names against the deployment configuration. See [Order ID sync over SFTP](../synchronization-flows/order-sync/sync-orderIds.md) and [POS cash sales](../synchronization-flows/order-sync/pos-cash-sales.md) for file and identifier details.

Allow the configured producer, NetSuite, and import cycles to finish. There is no single completion time shared by every deployment.
