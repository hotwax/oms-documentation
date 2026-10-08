---
description: >-
  Prepare evidence for routing UAT and distinguish missing stock, unmatched
  rules, and downstream integration delays without rerunning orders.
---

# Check Routing UAT Readiness

Use this checklist before interpreting a failed user acceptance testing (UAT) scenario as a routing defect. A useful test records the order, usable inventory, configuration, and timing that the routing engine actually evaluated.

Order import, routing, and export to another system are separate stages. An order appearing late in an ERP does not by itself show that routing failed. Likewise, a completed routing job does not prove that an order was eligible or allocated.

## 1. Confirm The Test Environment

Record the OMS environment, Product Store, connected source and destination systems, facility, app versions, and displayed time zone. Have the environment owner confirm the test connections and permitted test actions.

Do not identify a sandbox solely from an app URL containing “UAT” or “dev.” Confirm the OMS and connected accounts before creating orders, changing inventory, or submitting a test. Keep this readiness review read-only.

## 2. Record A Reproducible Scenario

Before the authorized test begins, record:

- The intended order type, sales channel, shipping method, item quantities, and starting queue
- The expected routing group, routing, rule sequence, and eligible facilities
- Whether full allocation is required or partial allocation is permitted
- The expected unavailable-item action, such as the next rule or a holding queue
- The product or variant references and expected facility outcome
- The scheduled processing stages and the agreed observation window

Confirm that the test products exist in OMS and have the identifiers required by the connected systems. For a missing or incomplete product, use [Missing Product Details](../ofbiz/product/missing-product-details.md) before interpreting the routing result.

Keep customer names, addresses, payment data, and private system links out of shared public test examples. Use controlled test data approved for the environment.

## 3. Capture Inventory Before Routing

For each candidate facility, capture the item quantity, quantity on hand (QOH), and available-to-promise (ATP) inventory with an observation time and time zone. Include the relevant safety stock or other inventory safeguards in the test record.

Physical stock and usable ATP are not interchangeable. Existing allocations and inventory safeguards can make stock unavailable to a new routing attempt. A value observed after the test may differ because the test or another order already changed allocations.

Also inspect:

- Whether the facility is enabled for the intended fulfillment flow
- Membership in the routing rule's facility group and any excluded group
- Proximity, safety stock, weeks-of-supply, shipment-threshold, and facility-capacity conditions that apply
- Whether grouped items or full-order allocation require more usable stock than the individual line suggests

Do not change safety stock, reset inventory, add stock, or broaden facility membership merely to force a passing result. If a prerequisite is wrong, record it and have the responsible owner approve a corrected test setup.

## 4. Trace The Test Across Stages

| Stage | Evidence To Check | What It Does Not Prove |
| --- | --- | --- |
| Source order | Creation time, item quantities, shipping method, and source status | That OMS has imported or approved it |
| OMS import | Matching order and variant records, current status, and queue | That the order matched a routing |
| Routing execution | Group/job history, batch or run, decision, and allocated facility | That the downstream export has completed |
| Downstream integration | Relevant message, import/export result, and destination record | That every later fulfillment or accounting step is complete |

Use [Order Routing Run Diagnostics](../maarg/order-routing-runs.md) to correlate the routing group, execution window, batch, and routing runs. Record the first stage with missing or failed evidence.

For OMS integration delays, inspect the actual configured job schedule and recent history through [Service Jobs](../maarg/service-jobs.md) and, where applicable, [System Messages](../maarg/system-messages.md). Scheduling frequency is not an end-to-end completion guarantee. Queueing, processing, polling, and downstream imports can each add time.

For an SFTP file import through OMS Data Manager, have the integration owner identify the configured retrieval job and compare its `configId` and `systemMessageRemoteId` with the approved configuration and remote. In the reviewed `maarg-util` 4.4.0 implementation, `co.hotwax.util.UtilityServices.get#DataManagerFileFromSftp` uses the configuration's import path and file-name pattern, retrieves matching files, and creates Pending Data Manager logs. Use [Data Manager Imports](../maarg/data-manager-imports.md) to locate the resulting log by configuration and time, then check its status, counts, errors, and business outcome. File retrieval is separate from successful import and can archive or delete source files according to `fileAction`. Keep this review read-only: do not invoke the retrieval service, place a test file, run a job, change its parameters, or share credentials.

If inventory was unavailable at the routing attempt but is present now, preserve both timestamps. That evidence supports an inventory-timing investigation; it does not by itself prove a rule defect or authorize another run.

### Measure Source-To-Destination Timing

Keep separate acceptance records for inventory publication, purchase-order import, and sales-order export. They can use different selection rules, schedules, and downstream processors. A requested maximum delay is a test requirement to agree with the integration owner, not evidence of an installed schedule or a product guarantee.

For one mapped record in each flow, capture:

| Checkpoint | Evidence To Record |
| --- | --- |
| Start of the agreed window | The source event or eligible update, its ID and timestamp, and the event chosen to start the timing measurement |
| Selection and execution | Eligibility result, actual selecting job/run, start/end times, paused state, and any queue or retry wait |
| Delivery and processing | The correlated file, message, or request and the destination's record-level result |
| Verified outcome | Destination ID, relevant value/status, destination update time when available, and the time you read it back |
| Acceptance decision | Requested target, owner-agreed threshold and scope, observed elapsed time, or the first checkpoint still missing |

Use one time zone or record each offset. Keep the destination's update time separate from the time someone first noticed the change. If the actual update time is unavailable, label the readback time as an observation rather than inventing a precise latency. A missing timestamp means timing is unproven, not zero.

A job scheduled every five minutes does not establish a five-minute maximum from source change to destination visibility. Compare the actual executions and downstream results before changing a schedule or running anything again.

### Keep Routing And Accounting Acceptance Separate

Record the result for each required checkpoint, rather than giving the entire scenario one routing-based pass. A correct facility assignment can coexist with a pending ERP sales order, customer deposit, or later return/refund outcome. Conversely, an existing ERP order does not prove that its payment or settlement records are complete.

For the configured flow, verify the correlated remote order and any required deposit/payment records separately. For a return scenario, use the [NetSuite Returns lifecycle](https://github.com/hotwax/oms-documentation/blob/ca98c89eec3a379c3e2ebb7aef2247875bf8cf4f/documents/learn-netsuite/integration-flows/returns/README.md) and verify the required records and credit application. Do not assume that every order uses the same accounting path or that all these records are required for every scenario.

Preserve a previous failure as its own result. Record a retest with its new order/run reference, configuration and observation time; a passing retest does not retroactively verify every earlier case. Leave unexecuted cases marked as untested.

## 5. Classify The Result

- **Prerequisite not met:** Product, usable inventory, facility eligibility, or order status did not match the agreed scenario.
- **Execution not observed:** No matching run has been established in the expected time window. Check environment, filters, schedule, and history.
- **Routing outcome differs:** The correct order and run are known, but the selected rule, facility, or unavailable-item action differs from the expected result.
- **Downstream processing pending or failed:** OMS allocation is established, but export or destination processing is incomplete.
- **Insufficient evidence:** The pre-run state or matching execution cannot be established. Record what is missing instead of marking the rule as passed or failed.

Do not use a fixed waiting period copied from another environment. Agree on the observation window from the actual configured stages, then report pending work separately from a confirmed failure.

## Test Controls Are Operational Actions

{% hint style="warning" %}
`Run now` performs routing. `Test drive`, where available, also performs live allocation; it is not a read-only preview. Do not enable a hidden test feature, run a production group, reset an order, release a lock, or change a schedule as part of this diagnostic checklist.
{% endhint %}

The current [Test Drive manual](https://github.com/hotwax/oms-documentation/blob/3c4fead4319e27b8a633164c51c1f48f9a6d7c49/documents/retail-operations/orders/order-routing/test-drive.md) includes deployment and authorization prerequisites. Keep Test Drive disabled until an administrator has secured and verified both routing and reset operations. The environment owner must verify those prerequisites before any authorized test. If a test has already changed allocation and its reset is uncertain, stop and ask the OMS administrator to verify the live state before proceeding.

## Escalation Packet

Provide a concise private test record containing the expected result, observed result, environment and Product Store, relevant record references, pre-run inventory snapshot, run timestamps and time zone, rule/filter snapshot, and the first failing stage. Include the minimum redacted error excerpt needed to identify the problem.

This preserves enough evidence for the routing or integration owner to reproduce the issue without prescribing an unsafe retry. For the routing hierarchy and setup concepts, see the [Order Routing manual](https://docs.hotwax.co/documents/retail-operations/orders/order-routing). Installed versions and available diagnostic screens may differ.
