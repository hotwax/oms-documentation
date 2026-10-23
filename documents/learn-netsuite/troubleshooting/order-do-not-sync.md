# Orders not syncing with NetSuite

Use this guide when an order is missing in NetSuite or its NetSuite ID has not reached HotWax Commerce. First confirm whether the deployment uses the batch integration or the earlier CSV integration over Secure File Transfer Protocol (SFTP).

## Trace the batch integration

Record the OMS order ID, product store, NetSuite external ID, system message ID, and remote job or task ID when available. Use those identifiers to follow the same order through each stage.

### Check selection and prerequisites

1. Check for an existing `NETSUITE_ORDER_ID` and a `NetSuiteSalesOrderDetail` tracking record. The default selection excludes an order when either exists.
2. Review the active rules and cutover settings for the product store. An order can be eligible but remain unselected because no rule matches it.
3. Check every item's active NetSuite product mapping, fulfillment location, and open hold tasks. For an exchange, check the source return's credit memo.
4. Check customer resolution. The default flow waits for the bill-to customer's NetSuite ID. A facility-based customer configuration records an error when its default customer is missing.
5. Check the shop mapping, timezone, and payment coverage. The default preparation checks item values plus adjustments against valid payments with a one percent tolerance.

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

For deployments using the earlier SFTP flow, inspect the order's `Order Sync Feed History` from the `Order Details` page. A history row confirms that the feed was generated; it does not confirm that NetSuite imported it or that OMS received the acknowledgement.

1. Check the configured order feed job and its selection criteria.
2. Confirm that the exported file reached the expected SFTP location.
3. Check the corresponding NetSuite import script and its record errors.
4. Check the NetSuite acknowledgement export and the OMS import of the identifiers.

| Flow | Feed job | NetSuite import | NetSuite acknowledgement export |
| --- | --- | --- | --- |
| Sales order | `generate_CreateOrderFeed` | `HC_importSalesOrders` | `HC_MR_ExportedSalesOrderCSV` |
| POS cash sale | `generate_CreateOrderFeed_pos` | `HC_SC_ImportCashSale` | `HC_MR_ExportedCashSaleCSV` |

Check the job names against the deployment configuration. See [Order ID sync over SFTP](../synchronization-flows/order-sync/sync-orderIds.md) and [POS cash sales](../synchronization-flows/order-sync/pos-cash-sales.md) for file and identifier details.

Allow the configured producer, NetSuite, and import cycles to finish. There is no single completion time shared by every deployment.
