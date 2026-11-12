---
description: >-
  Reconcile Shopify and POS fulfillment with OMS, NetSuite fulfillment, and billing
  records before choosing a recovery action.
---

# Fulfillment And Invoice Status Troubleshooting

Use this guide when Shopify shows an order as "Fulfilled" but OMS or an enterprise resource planning (ERP) system shows a different fulfillment or billing state. Start with the individual order and line records. A report's "Fulfilled" column does not establish that an ERP invoice should exist.

The NetSuite examples below describe documented OMS integration flows. Confirm the installed integration version, posting model, saved-search criteria, and schedules before applying them to a particular environment.

**Verification scope:** Reviewed on October 3, 2026 against the linked OMS manuals, Shopify connector release `v4.4.0`, and the [public NetSuite integration source at commit `4922c6e`](https://github.com/hotwax/netsuite-integration/commit/4922c6ea09940335cab5ad262cd6dbbba4b190e3). The NetSuite invoice script and selection definition also match [release `v1.1.0`](https://github.com/hotwax/netsuite-integration/releases/tag/v1.1.0). These are source baselines, not confirmation of a merchant's deployed version or runtime outcome.

The pinned consumer-manual sources were refreshed on October 4, 2026 at documentation commit `a5d99d80`. This includes the separate returns lifecycle below; a documentation merge does not establish that its configured flow is installed in an environment.

{% hint style="warning" %}
This is a read-only diagnosis guide. Do not fulfill, invoice, adjust inventory, change payment status, or delete and re-import an order merely to make status labels agree. A missing response can also mean that a transaction succeeded but its acknowledgement has not arrived.
{% endhint %}

For a sales order missing from NetSuite or rejected because of a sales-channel, department, or location reference, start with [Diagnose NetSuite Order Push And Mappings](../Netsuite/order-push-troubleshooting.md). It separates order selection, Data Manager processing, actual mapping, and destination acknowledgement.

## Understand The Status Boundaries

| Evidence | What It Establishes | What Still Needs Checking |
| --- | --- | --- |
| Shopify fulfillment status | The fulfillment state recorded in Shopify | The affected lines, quantities, location, and whether the update came from POS, a manual action, or an integration |
| Shopify payment status | The separate payment state recorded in Shopify | Payment eligibility for the deployed export and any required ERP payment records |
| OMS order or shipment status | The processing state recorded in OMS | Line-level completion and acceptance by each downstream system |
| NetSuite Item Fulfillment | A fulfillment transaction exists for the linked sales order | Its shipment status, lines, quantities, location, and subsequent billing |
| NetSuite Invoice or Cash Sale | The corresponding billing transaction exists | Whether it is the expected transaction type, covers the correct lines, and has the required payment application |

Shopify maintains payment, fulfillment, and return statuses separately. Do not use one as a substitute for another. See [Shopify Order Statuses](https://help.shopify.com/en/manual/fulfillment/managing-orders/order-status).

Do not change Shopify to "Partially Fulfilled" solely to represent an ERP backorder or invoice delay. First reconcile the fulfillment facts and the approved behavior of the integration.

## 1. Confirm The Order Type And Expected ERP Record

Distinguish an immediate in-store sale from a POS-originated order that still needs shipment. The documented [POS Sales Download](https://docs.hotwax.co/documents/learn-shopify/shopify-integration/orders/pos-sales-download) identifies completed POS sales using fulfillment state, sales channel, and the POS Completed shipping method. A POS channel alone is insufficient to classify the flow.

Confirm the posting model with the integration owner:

- **Direct Cash Sale:** The documented [POS Orders integration](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/sales-order/pos-orders) posts eligible completed POS sales as NetSuite Cash Sales. A separate sales-order Item Fulfillment and Invoice are not the expected completion evidence for this path.
- **Sales Order And Invoice:** Follow the installed sales-order creation, fulfillment, payment/deposit, and billing stages. Their selection rules can differ from the Cash Sale path.
- **Send Sale:** An order placed in POS for later shipment follows the documented sales-order flow rather than being treated as an immediate completed POS sale. See the [Send Sale Orders guide](https://github.com/hotwax/oms-documentation/blob/a5d99d80b37042c98f8418cc70fc2eeca2a47397/documents/learn-netsuite/integration-flows/sales-order/sendsale-orders.md).

If the discrepancy involves a return, refund, or store-credit Invoice, follow the separate [NetSuite Returns lifecycle](https://github.com/hotwax/oms-documentation/blob/a5d99d80b37042c98f8418cc70fc2eeca2a47397/documents/learn-netsuite/integration-flows/returns/README.md). Distinguish return authorization, any required inventory receipt, and financial settlement. A stored Invoice or Credit Memo ID does not prove that the required credit application completed; verify that application in NetSuite for the configured outcome.

For a sales-order flow, partial fulfillment does not universally prevent invoicing in NetSuite. Billing behavior depends on enabled features, preferences, and the integration's own selection criteria. Check the installed workflow rather than assuming all backordered orders are ineligible. See [NetSuite Billing Or Invoicing A Sales Order](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1240951.html).

## 2. Validate The Report Against Current Records

1. Record when the report was generated, its time zone, date range, source system for each status column, and expected transaction type.
2. Check whether it counts orders, order lines, fulfillments, or invoices. Related-record joins can repeat an order or exclude a valid transaction of another type.
3. Inspect the filters and joins in the existing report without changing a shared saved search. Start with a small sample from each apparent exception group.
4. Open the corresponding current records in each system using mapped IDs. Compare the same order, line, quantity, location, and observation time.
5. Separate already-posted records, records waiting for a prerequisite, eligible records awaiting scheduled processing, and records with a verified processing error. Keep records with insufficient evidence in an "Outcome Unknown" group.

A corrected or refreshed report may resolve a reporting discrepancy without any order mutation. Confirm the sample first, then reconcile the remaining population using the same criteria.

## 3. Collect A Correlated Timeline

For each representative order, collect only the information needed through approved support channels:

- Environment, Shopify shop, OMS product store, ERP account, and integration versions
- Shopify order and line IDs, OMS order/line and shipment IDs, and mapped ERP transaction/line IDs
- Order type, shipping method, current fulfillment quantities, fulfillment location, payment state, and any cancellation or return state
- Source event and record-update times, export window, job execution time, import/task result, and acknowledgement time, all with time zones
- Applicable job/service, system-message, import-log, file, or task IDs and a redacted error summary

For stocked items, inspect availability, committed or backordered quantities, and the location on the affected ERP line at the relevant time. Stock visible elsewhere or at a later time does not establish that the line was eligible when processing ran. Also verify required product and location mappings. Special items such as gift cards require the approved item mapping for that deployment; do not invent a substitute item to clear an error.

Use [Compare Inventory And Reservation Timing](../order-flow/inventory-comparison.md) to distinguish recorded stock, ATP, physical reservations, and export eligibility before treating a positive quantity as proof of readiness.

## 4. Locate The First Incomplete Stage

Skip stages that do not belong to the confirmed posting model. At each applicable stage, establish the last confirmed input and the first missing or rejected output.

| Observation | Read-Only Checks | Classification |
| --- | --- | --- |
| Shopify is fulfilled but the OMS order is missing or incomplete | Verify shop/order mapping, the import result, source update timing, and line-level state. Identify manual fulfillment separately from the normal integration path | Order ingestion or state-reconciliation issue; not yet an invoice failure |
| OMS record exists but no expected ERP transaction is found | Check deployed export eligibility, payment requirements, required item/location mappings, export window, generated record, transport, and ERP import result | Eligibility, export, delivery, or import stage |
| ERP transaction exists but its ID is missing in OMS | Confirm the transaction by source reference and inspect the identification/acknowledgement import | Acknowledgement stage; do not create another ERP transaction |
| Sales order exists but expected Item Fulfillment is absent or incomplete | Inspect related fulfillments and line quantities, location, commitment/backorder state, fulfillment-feed acceptance, selection criteria, and script errors | Fulfillment prerequisite or fulfillment-processing stage |
| Required fulfillment exists but the expected Invoice is absent | Check the actual invoice-selection search, payment/deposit prerequisites, last billing run, and record-level errors | Billing eligibility or invoice-processing stage |
| Expected Invoice or Cash Sale exists but the report still lists it as missing | Compare report filters, joins, transaction type, IDs, and refresh time with the live record | Reporting or identification mismatch |
| OMS shipment is complete but Shopify is unfulfilled or partial | Trace the installed notification route, message/import outcome, and Shopify fulfillment response. Compare the accepted lines, quantities, and location | Shopify notification stage; ERP billing is a separate check |

If a manual action bypassed the normal flow, preserve its timestamp and what changed. Ask the process owner to confirm the intended handling before treating the difference as a defect or selecting a recovery.

## 5. Read Job Results At Record Level

Scheduled processing can leave systems temporarily at different stages. Compare the prerequisite-completion time with the configured next run and actual run result. Do not promise a fixed delay from a generic schedule, and do not keep waiting when a required record was excluded or failed.

Use the tools installed in the environment:

- [Service Jobs](../maarg/service-jobs.md) to inspect the relevant definition and execution history
- [System Messages](../maarg/system-messages.md) to follow the exact remote, message type, errors, and downstream acknowledgement
- [Data Manager Imports](../maarg/data-manager-imports.md) to review processed/imported/failed counts and record-level errors
- The ERP's import and script execution history to confirm the actual transaction result

In the documented NetSuite sales-order flow, `HC_SC_CreateItemFulfillment` and `HC_SC_CreateSalesOrderInvoice` perform separate steps. The invoice script loads a saved search, transforms selected sales orders, and records per-order errors. A completed script run does not establish that every candidate received an invoice. The documented baseline selects Pending Billing sales orders with customer deposits; verify the deployed search and other criteria. See the [Invoicing guide](https://github.com/hotwax/oms-documentation/blob/a5d99d80b37042c98f8418cc70fc2eeca2a47397/documents/learn-netsuite/integration-flows/sales-order/invoicing.md).

On the Cash Sale path, task submission or an archived input file is not enough to prove a successful import. Check the terminal import result and actual Cash Sale record. Likewise, a consumed upstream fulfillment feed is not proof that every Shopify fulfillment was accepted. Verify the downstream fulfillment ID and the relevant line quantities.

### Trace A Later Shopify Payment To Its NetSuite Deposit

Use this check when an order already exists in NetSuite but a later Shopify charge has no corresponding Customer Deposit. An address or tax change can change the order amount; it does not establish whether a payment succeeded, reached OMS or qualified for the installed deposit route.

**Scope:** This subsection uses Shopify connector 4.6.3 and the optional NetSuite connector 3.6.2. In this Shopify baseline, processing an existing order can import transaction IDs not already recorded in `ShopifyTransactionHistory`. The reviewed NetSuite batch route selects individual eligible payments. Do not infer that all post-checkout changes are unsupported, or that every installation runs this route automatically.

#### Confirm The Payment And Active Route

1. In the authorized Shopify order view, read the payment event and its transaction ID, kind, status, amount, currency and time. Separate a successful sale or capture from an authorization, pending/failed transaction, refund or a change to the order total alone.
2. Compare the same transaction with its OMS payment preference and transaction-history record. Preserve the Shopify transaction ID and OMS payment identity separately; `manualRefNum` links the reviewed OMS payment to the Shopify transaction. A capture can update an earlier authorization preference, so do not require a new preference row for every event. Match shop-currency amounts separately from presentment amounts/currency. Do not compare only total paid against the current order total or treat the original deposit as evidence for the later payment.
3. Have the integration owner identify the configured Shopify order-update/import path, NetSuite deposit producer, due view, rules, remote and result consumer. Read existing [Service Jobs](../maarg/service-jobs.md) and [System Messages](../maarg/system-messages.md). A schedule or run for initial order creation does not establish that later payments are selected.
4. For the reviewed per-payment batch route, use authorized, narrowly filtered [Entity Inspection](../maarg/entity-inspection.md) to correlate the payment with its `NetSuiteCustomerDepositDetail` tracking record by `orderPaymentPreferenceId` and `systemMessageRemoteId`. If those records are not exposed to your role, request a read-only check from the owner. Do not invent a deposit-monitor screen or substitute legacy feed-job instructions.

The current `NetSuiteDepositDueView` requires a settled payment, an effective NetSuite order identification, an effective company **PaymentMethod** record with its NetSuite `externalId`, and matching Shopify transaction history. It excludes payments already claimed in the deposit tracking table and applies exchange-related exclusions. The producer's configured due view and rules determine the actual population. Read their saved conditions; do not broaden them to make a payment appear.

The reviewed due view does not itself impose the original order's creation-date cutoff. Older order/feed selection windows, different wrappers and deployment rules can produce different outcomes. Confirm the exact route before attributing a missing later payment to order age.

#### Locate The First Missing Payment Stage

| Observation | Read-only next check |
| --- | --- |
| Only the order total or tax changed | Establish whether a successful additional payment transaction exists. A revised total is not payment evidence. |
| Shopify transaction exists but its OMS payment/history is missing | Trace the order-update/import result and the exact transaction identity. Do not capture again, recreate the order or run an unrestricted order import. |
| OMS payment exists but no deposit claim exists | Check settled status, order identification, payment-method mapping, transaction history, exchange handling and the actual selection rules. Absence from one run is not proof of a rejected deposit. |
| Claim has `errorMessage` and no `systemMessageId` | Inspect preparation evidence. A tracking record can be saved for a preparation error before any batch is sent, and its presence affects later selection. |
| Claim has a batch/message reference, including a claim with an error | Follow that saved request, remote submission and per-payment result. A produced/sent message or completed batch does not prove this payment's deposit succeeded. |
| Result records `netsuiteDepositId` or an error | Correlate the result by its external reference to the exact payment. Verify the actual NetSuite transaction even when an ID is stored; preserve missing or uncertain result evidence before any retry. |
| Deposit exists but billing or balance still differs | Compare its amount, currency, linked customer/order and any required payment application. Deposit creation, invoice creation and payment application are separate outcomes. |

Keep the original and later payments separate throughout the comparison. Reconcile each request and result rather than inferring success from one order-level badge, the presence of any deposit, or a reduced batch count.

Before an approved correction, establish whether NetSuite already accepted the deposit, whether an acknowledgement is missing, and whether any related processing is still active. Do not delete tracking records, clear transaction history, change payment status, move a selection cursor, resend a whole batch or manually create another deposit to test the diagnosis. Have the financial and integration owners agree on the exact affected payment and accounting outcome.

**Verification boundary:** Checked on November 12, 2026 against the source versions above. Latest-published Maarg 6.6.3 includes Shopify 4.6.3 in its default suite and declares NetSuite 3.6.2 as optional; this does not establish installation or scheduling. Earlier sections retain their stated baselines. The authorized demo reached sign-in only. No payment, deposit, import, replay or accounting operation was performed.

## 6. Agree On A Bounded Recovery

Escalate with the first incomplete stage, its owner, expected result, evidence, and business deadline. The next action depends on the finding:

- **Reporting mismatch:** Have the report owner correct the interpretation or approved report logic, then reconcile again
- **Missing prerequisite or mapping:** Have the responsible business and integration owners confirm the intended data and flow before making a change
- **Verified processing failure:** Resolve the cause, identify exactly which records still need processing, and approve a targeted recovery only after checking existing transactions and duplicate protection
- **Uncertain outcome:** Establish whether the destination already accepted the operation before any retry or replay

Do not reset an export cursor, replay a whole file, run a broad resync, force billing, or cancel/delete/recreate an order as a default repair. An automatic next run is not a guaranteed retry either: the documented POS Cash Sale export uses a time-based cursor, so failed orders require investigation of the appropriate recovery path.

After an approved recovery, verify the intended downstream transaction, line quantities, location, relevant payment application, and identifiers. Refresh the reconciliation report using the same scope and retain any remaining exceptions with their evidence and owner. Matching top-level status labels alone is not the completion criterion.
