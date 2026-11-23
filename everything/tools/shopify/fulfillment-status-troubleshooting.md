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

### Trace NetSuite Boxes Before Shipment Import

Use this read-only check when a NetSuite Item Fulfillment exists but its OMS shipment has not appeared, or only one of several tracking numbers is visible. This subsection was source-reviewed on November 16, 2026 against **NetSuite connector v3.3.14**. It applies to that connector's package-aware polling path, not every file import or earlier/other release line. Confirm the installed connector, active job services and destination account first. No populated demo or live shipment was verified.

1. **Confirm the affected fulfillment and route.** Correlate the ERP fulfillment, order and location with the OMS ledger and actual account. A header's tracking text is not a substitute for its box records. Read the package job and shipment job through [Service Jobs](../maarg/service-jobs.md); inspect current configuration, paused state and recorded run outcomes without executing or changing them. The release's upgrade guidance adds a separate box job before shipment polling. A published component or completed deployment does not prove that the job and its required schema/import configuration are active.
2. **Find the first incomplete package stage.** The package job, `poll#NetSuiteItemFulfillmentPackages`, reads eligible ledger rows with zero stored boxes. It queues the returned boxes under `IMP_NS_IF_PACKAGE`; that file must then import successfully. The shipment job, `poll#NetSuiteItemFulfillmentLines`, selects eligible rows with one or more stored boxes. Both selection paths exclude ledger rows with an existing shipment or an error. One stored box satisfies this gate; it is not a box-completeness check against NetSuite.
3. **Inspect import progress, not only job completion.** In [Data Manager Imports](../maarg/data-manager-imports.md), follow the package file's pending/queued/running or record-level result, then its stored box rows and the later shipment file/result. The package poll skips while any `IMP_NS_IF_PACKAGE` file is pending, queued or running; the shipment poll similarly checks `IMP_NS_IF_SHIPMENT`. A skipped job, queued file and successful row import are different outcomes. Package-job `waitingCount` counts selected ledger rows, `packageCount` counts returned boxes, and `noPackageCount` counts selected fulfillments for which no box was returned; none is a delivered-shipment count.
4. **Distinguish no boxes from blank tracking.** The package poll defaults to 200 eligible ledger rows per run. Its no-box counter increments after a successful package query returns no box for a selected fulfillment. At the configured `readLimit` (default 5), it records a no-box error; that error removes the row from ordinary eligible selection. This is a count of relevant reads, not five minutes, five scheduler ticks or a promise of automatic recovery. A box present with an empty tracking number is accepted by the reviewed package handling and is not the same condition. Ask the owner to reconcile the NetSuite boxes, account, package-import result, recorded read count and error before deciding on recovery.
5. **Read tracking at package level.** In the reviewed path, stored boxes are passed in sequence-number order. The first box uses the shipment's initial package; later boxes create additional packages, with their own tracking codes and weights when supplied. The route segment uses the first box's tracking number when present, so a single header/route value does not prove other package tracking is missing. Package creation requires a route segment on the first OMS shipment created by this import; supplied boxes are attached there only. If package records are missing, have the owner check that route segment read-only. If the fulfillment creates multiple shipments, inspect every shipment and do not assume box-to-line or box-to-split-shipment allocation. Verify any later Shopify notification independently.

For escalation, provide the exact account/fulfillment correlation, installed versions, job services and run times, package-import log/result, ledger error and package-read count, stored box count/order, and created shipment/package records through the approved private support channel. Preserve an inaccessible result as unknown. Do not fabricate a box, copy one tracking number into every package, clear an error/counter, unpause jobs, reimport a file or recreate a shipment merely to clear the symptom; recovery needs the responsible owner's scoped verification and approval.

### Distinguish Fulfillment Line Identity From Display Sequence

Use this read-only check when NetSuite shows a shipped Item Fulfillment but OMS has no corresponding shipment, the import reports a different line count, or the saved line points to an unexpected OMS item. This is the sales-order fulfillment pull, not transfer-order receiving or the standalone package polling procedure above.

**Prerequisites:** confirm the installed NetSuite connector, the active fulfillment list and line-fetch services, the configured account and facility scope, and the affected Item Fulfillment's internal ID. Use [Service Jobs](../maarg/service-jobs.md) and [Data Manager Imports](../maarg/data-manager-imports.md) to read existing runs and logs. The examples below use NetSuite connector **3.6.6**; the same line-link correction is present in **3.3.17**, but that line has a different package flow.

1. **Find the first missing record.** Compare the NetSuite Item Fulfillment's shipped state, sales-order link, location and modified time against the recorded harvest scope. The reviewed list selects shipped sales-order fulfillments with eligible inventory/kit lines at configured locations; accounting rows and kit members do not contribute to the list count. The count is of qualifying joined rows grouped by fulfillment and linked sales order, not a count of distinct lines. A visible NetSuite header or tracking number is not proof that this selection returned it. Trace the ledger input (`IMP_NS_IF_LEDGER` for the reviewed harvest) before diagnosing a shipment-file failure.
2. **Keep identifiers separate.** Ask the integration owner to compare the exact fulfillment line's internal ID (`transactionline.id`), its display sequence (`linesequencenumber`), its linked sales-order line (`previousline`) and its stored OMS item identifier (`custcol_hc_order_line_id`). In 3.6.6 and 3.3.17, both the shipped list and line-detail reads match the fulfillment link's `nextline` to the internal line ID. The reviewed 3.6.5 source matches the display sequence instead; the values can differ. A missing or wrong join is a version-qualified hypothesis until the owner compares the same source line and saved results.
3. **Compare the saved counts and selected items.** In the reviewed 3.6.6 route, the ledger's expected line count comes from the list, and `IMP_NS_IF_SHIPMENT` carries the later fetched lines. Compare those records for the same account and fulfillment, without changing them. The later fetch uses fulfillment IDs without the list's location filter, so check the location scope as well as line identity. The importer can report **Lines do not match the list** when the count differs. Matching counts alone do not prove correct identity: the importer also checks for a missing OMS item ID, a missing item on the mapped order, or an ineligible item status. A product match or a matching display position does not establish the same order item.
4. **Verify the actual shipment result.** Read the per-record import result and fulfillment ledger. A queued file or completed parent run does not establish a shipment. The reviewed ledger stores only the first returned shipment ID. If a shipment reference exists, inspect its line identities, quantities, location and any other related shipments before making a downstream status claim. If a record is missing or inaccessible, retain that gap rather than creating a shipment or treating it as zero shipped.

**Synthetic example:** a fulfillment line has internal ID 42 and display sequence 3. A link whose next-line value is 42 belongs to the internal-ID lookup; the sequence value is only an ordering field in the corrected reads. Neither value is the OMS item identifier. This illustrates the distinction, not any customer's data or a verified incident cause.

Escalate with the installed version, exact list/line/import stages, scoped account and fulfillment, expected and actual line counts, and the first discrepancy. Keep identifiers and payload details private. Do not change line mappings, rewind a cursor, clear a ledger error, or reimport a fulfillment as a diagnostic probe. A released fix does not prove deployment, historical reprocessing, or an accepted shipment.

Reviewed November 23, 2026 against the tagged list, line-fetch and import services. No authenticated fixture, shipment write, or screenshot was used.

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

### Trace Additional Exchange Money To The Replacement Order

Use this read-only check when an exchange costs more than the returned goods and the extra captured payment has no expected NetSuite Customer Deposit. Keep the exchange credit and additional money separate: the return's Credit Memo and the additional-payment deposit are different records, not two names for the same funding.

**Source scope:** NetSuite connector **3.6.6** adds the reviewed exchange payload view and source-capture correlation. It uses a separately configured exchange deposit route; a normal deposit job or the presence of a replacement sales order does not establish that this route is enabled. Earlier payment guidance above retains its own versions.

1. **Identify both payment records.** Open the authorized replacement order and its payment details. Record the `EXCHANGE_PAYMENT` preference and amount, then have the integration owner follow `sourceOrderPaymentPreferenceId` to the original capture preference using the [read-only entity inspection procedure](../maarg/entity-inspection.md). Keep the return's `EXCHANGE_CREDIT` separate. A blank transaction reference on the exchange preference alone is not proof that the source capture is missing.
2. **Match the source capture in its own shop and order.** In this implementation, the outgoing amount and NetSuite sales-order identity come from the exchange payment/replacement order. The transaction reference, request ID, payment-method basis and processed date come from its linked source capture. Match Shopify transaction history on the source order, shop and transaction reference together; a similar reference elsewhere is not sufficient. Record the actual processed date instead of substituting the replacement order's creation date.
3. **Check the exchange prerequisites before looking for a failed send.** The reviewed `NetSuiteExchangeDepositDueView` requires a settled exchange payment, its linked source preference with a transaction reference, matching Shopify history with a processed date, the replacement order's effective NetSuite identification, the exchange credit's Invoice record with a Credit Memo external ID, and the source payment type's effective company payment-method mapping with a NetSuite external ID. Missing prerequisites can keep a payment out of selection without creating a failed outbound message. These stored references still require destination verification.
4. **Confirm the configured selection and payload separately.** In existing [Service Jobs](../maarg/service-jobs.md), read the deposit producer's actual scope and run parameters with the owner. The exchange route uses `NetSuiteExchangeDepositDueView` for eligibility and a payload mapping backed by `OrderExchangePaymentDepositView`. The payload view does not join the claim ledger, so the claim alone does not remove its data; other source prerequisites still need to exist. The due view excludes claimed payments. Do not replace the normal job, repoint the payload at the due view, or broaden rules during diagnosis.
5. **Follow the exchange payment's claim and result.** Correlate `NetSuiteCustomerDepositDetail` by the exchange preference and destination account. A preparation refusal can have an error without a batch; a downstream refusal has its saved batch/result evidence, and a missing result remains unresolved. Disappearing from the due population does not prove payment application. The reviewed due-view exclusion matches the payment preference without filtering destination account: if the intended account has no claim, ask the owner to check other authorized account claims before classifying it as unclaimed. Do not delete or release another account's claim. Follow the saved batch and per-payment result as described above, then verify the NetSuite deposit's amount, currency and replacement-order link. Reconcile the Credit Memo and its application separately.

**Synthetic example:** a replacement is funded by an 80-unit exchange credit and 20 units of additional captured money in the same currency. In this route, the expected additional-payment deposit is 20, not the replacement's full 100. The example does not prove either the Credit Memo application or the deposit has succeeded.

Escalate with both payment identities, source shop/order/capture correlation, the first missing prerequisite, configured due/payload views, and any existing claim or destination record. Do not capture again, edit source links, change payment state, delete a claim, issue a Credit Memo or create a deposit to test the explanation.

Reviewed November 20, 2026 against the tagged selection, payload and batch-service source. Maarg v6.6.8 declares connector 3.6.6 outside its default OMS suite; neither release publication nor a declared component proves installation, an enabled exchange job or runtime success. No authenticated exchange, accounting action or new screenshot was used for this addition.

### Read NetSuite Customer Refund Audit Pairs

Use this read-only check when a return has a Credit Memo but its NetSuite Customer Refund or application is unclear. This is ERP return settlement, not a Shopify cancellation refund, an exchange deposit, or proof that a payment provider released funds.

**Prerequisites:** authorized access to the OMS return/payment, the expected NetSuite account, and [System Messages](../maarg/system-messages.md). Ask the integration owner to confirm that the installed route calls the synchronous `create#NetSuiteCustomerRefundFromCreditMemo` service. This procedure applies to the reviewed NetSuite connector **3.6.6** implementations; other refund jobs can have different lifecycles.

1. **Start with one payment and Credit Memo.** Find the original OMS refund-payment identity and mapped NetSuite Credit Memo. In **System Messages > Find Options**, narrow to the known time window, the applicable remote/account and message type `NetSuiteCustomerRefund`. Confirm document subtype `CreateFromCreditMemo` in the details when available. Match the payment in `messageId` and open the matching details. If those fields are not exposed, ask the owner for an authorized read-only lookup.
2. **Match the outgoing and incoming audit rows.** The outgoing row's remote message ID is the Credit Memo; the incoming row's remote message ID is the returned Customer Refund ID, when available. The incoming row's parent reference points to the exact outgoing message. Use the parent link to pair an exact attempt; the outgoing acknowledgement reference can confirm the link when present. Timestamps narrow the search but do not identify a pair by themselves.
3. **Interpret the pair by installed version.** In the reviewed route, an HTTP 2xx records **Confirmed** (`SmsgConfirmed`) on the request and **Consumed** (`SmsgConsumed`) on the response. A non-2xx or missing HTTP status records **Error** on both if the audit-recording stage is reached. These are synchronous audit rows, not work waiting for a background consumer. On an older build, a successful reply can still be labeled **Received**; check the original response and installed version before classifying a consumer error as an unsent refund. Do not trigger consumption or change message status as a diagnostic step.
4. **Verify the destination transaction and application.** If an ID is stored, read that exact Customer Refund in the correct NetSuite account and compare the refund amount/currency, applied Credit Memo and applied amount. If the response indicates an existing record, inspect that same record rather than counting another refund. A 2xx path sets the audit statuses from HTTP status, so a missing refund ID or missing application still needs reconciliation. A Credit Memo balance alone does not identify which transaction applied it.
5. **Keep missing evidence unresolved.** Error rows can survive a failed local calling transaction because the audit writes use separate transactions. Conversely, a preflight error before the call can leave no pair at all. Missing or incomplete audit pairs, a timeout, or a local rollback do not by themselves establish whether NetSuite accepted a prior attempt. Have the responsible owner check the actual request reference and destination before considering any recovery.

For recurring error-report rows, group by verified account, payment and attempt, not by email count. Retain only the minimum references and a redacted reason in approved support channels. Do not reissue a refund, modify the Credit Memo, clear audit history or replay a message to make the statuses agree.

Reviewed November 22, 2026 against the tagged synchronous refund services. The terminal audit-state correction was released in NetSuite connector 3.6.4 and is present in 3.6.6. No authenticated refund, settlement, or accounting action was performed, and no screenshot or installation evidence is claimed.

## 6. Agree On A Bounded Recovery

Escalate with the first incomplete stage, its owner, expected result, evidence, and business deadline. The next action depends on the finding:

- **Reporting mismatch:** Have the report owner correct the interpretation or approved report logic, then reconcile again
- **Missing prerequisite or mapping:** Have the responsible business and integration owners confirm the intended data and flow before making a change
- **Verified processing failure:** Resolve the cause, identify exactly which records still need processing, and approve a targeted recovery only after checking existing transactions and duplicate protection
- **Uncertain outcome:** Establish whether the destination already accepted the operation before any retry or replay

Do not reset an export cursor, replay a whole file, run a broad resync, force billing, or cancel/delete/recreate an order as a default repair. An automatic next run is not a guaranteed retry either: the documented POS Cash Sale export uses a time-based cursor, so failed orders require investigation of the appropriate recovery path.

After an approved recovery, verify the intended downstream transaction, line quantities, location, relevant payment application, and identifiers. Refresh the reconciliation report using the same scope and retain any remaining exceptions with their evidence and owner. Matching top-level status labels alone is not the completion criterion.
