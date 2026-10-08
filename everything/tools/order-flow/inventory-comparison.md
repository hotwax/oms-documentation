---
description: Compare inventory across systems, verify reservations for mixed orders, and trace inventory and order-export delays without changing stock.
---

# Compare Inventory And Reservation Timing

Use this guide when ERP, HotWax Commerce, and Shopify quantities differ, a positive stock count does not result in routing, or an order containing both in-stock and preorder items has not reached the ERP.

Start with one product, one location or inventory channel, and a timestamped order-line example. A stock discrepancy, a routing decision, and an order-export delay can have different causes.

{% hint style="info" %}
The checks below were reviewed on October 3–4, 2026 against these source snapshots:

- OMS: `5f37edddf065501ecc0f39f2a61a3186da6d22c6`
- Order Routing: `95ecd80a00929a543818114dad726a53cccd96a7`
- Shopify connector: `23e4db2adb896a51563882d890fae00c20173303`
- NetSuite connector: `8e5664a092eb2523ea9e6bc4caf62d92964de879`

The relevant OMS files also match **OMS 3.4.0**. The listed Order Routing, Shopify connector, and NetSuite connector revisions match releases **2.4.0**, **4.4.0**, and **3.4.0**, respectively. The NetSuite connector is optional in the Maarg 6.4.0 composition. These checks identify source baselines, not which components or integration paths are installed in your environment. The review did not execute jobs, test a live integration, or change inventory, reservations, or orders. Confirm the installed versions, configuration, and active publishing/export paths before applying an implementation-specific explanation. No fixed synchronization interval or immediate-export guarantee applies to every installation.
{% endhint %}

## 1. Compare The Same Quantity

Record these details on both sides of the comparison:

| Detail | What To Confirm |
| --- | --- |
| Environment and store | Sandbox or production, product store, Shopify shop, and ERP account. |
| Owner/subsidiary | Recorded inventory owner, facility owner, and applicable ERP subsidiary mapping. Keep these separate from the Product Store, Shopify shop, and inventory channel. |
| Product | The exact variant and mapped identifiers. Distinguish a kit parent from its components. |
| Location | One physical facility, a mapped Shopify location, or an aggregate inventory channel. A channel total is not a single warehouse count. |
| Unit | Individual units, cases, or complete kits, including the component quantity required per kit. |
| Quantity field | Copy the displayed label and value: QOH/on hand, ATP/available, committed/reserved, or online ATP. Do not relabel one as another. |
| Time | Capture the observation time and time zone, relevant transaction time, and last successful import or publication time when available. |

**Quantity on hand (QOH)** represents recorded stock at a location. **Available to promise (ATP)** and **online ATP** answer availability questions after the applicable reservation and sourcing logic. Positive QOH alone does not prove that a new order can route or that the same quantity should be offered on Shopify.

In the reviewed OMS implementation, online ATP can depend on contributing facilities, facility safety stock, channel thresholds, brokering eligibility, queued demand, and configured preorder/backorder holds. Some inputs already include deductions. Do not subtract reservations or safety stock a second time from a quantity that is already net of them.

Keep unavailable data separate from zero. A blank quantity, loading failure, or missing search result is not a verified zero-stock balance.

### Shared Sellable Availability Across Businesses

When sibling businesses are expected to sell the same stock, distinguish recorded ownership, physical location, and sellable eligibility. Two channel views of one physical pool do not represent two receipts or twice the stock. Reconcile the underlying physical stock once, then compare each view separately; do not sum overlapping availability totals.

For each participating business, record the effective Product Store-to-facility association, contributing channel facilities, Shopify shop/location target, active publishing path, and routing eligibility. The reviewed connector permits a facility group to back channels on multiple shops, but each channel publication uses that shop's Product Store and facility-group context. This does not establish that a cross-subsidiary workflow is configured in your installation.

Verify how reservations and queued demand from every participating store reach each intended sellable view. In the reviewed OMS online-ATP path, queued demand is filtered by Product Store. A shared source or matching balances alone therefore does not prove that another store's pending demand has been deducted. Trace existing order, reservation, and publication evidence before concluding that the shared pool is protected or oversold.

Do not copy stock balances, add receipts or adjustments, change ownership, or enable another publisher merely to make a sibling business show availability. If ownership, sourcing eligibility, or shared-demand handling is unclear, record the requested behavior separately from confirmed configuration and escalate before changes.

## 2. Reconstruct The Difference Before Calling It A Sync Failure

1. Open the product's inventory view and filter to the relevant facility. Record QOH and ATP separately.
2. Review inventory history for the comparison window. Account for receipts, adjustments, reservations, cancellations, shipments, transfers, and test orders that occurred between snapshots.
3. Check the configured mapping and active publication path. A physical-location feed and an aggregate-channel feed can publish different measures to different targets.
4. Compare the ERP source transaction, the OMS import result, the OMS quantity used by the publisher, and the destination quantity. Identify the first stage where the expected value is missing or different.
5. If the issue concerns routing, inspect the routing run at the time of the decision. A later positive balance does not establish what inventory was eligible then.

For routing, also inspect the selected facility group, product/facility brokering eligibility, inventory safeguards, and whether the rule requires all grouped items to be available. Single-location requirements, partial-allocation settings, and shipment thresholds can prevent an allocation even when one line has stock. Use [Investigate order routing runs](../maarg/order-routing-runs.md) to correlate the actual rule and outcome.

Do not conclude that every routing failure is an inventory shortage. Record the rule's explanation alongside the contemporaneous quantity and configuration evidence; escalate conflicting evidence.

### Separate Future Supply From Shopify Presell Availability

An imported purchase-order line or arrival date confirms only that the corresponding source data is present. It does not establish that the variant is eligible for presell, that Shopify accepted the listing update, or that the storefront offers the variant for preorder.

For the same product, variant, shop, and observation time, inspect these stages separately:

- **Future supply:** the PO line, status, remaining quantity, receiving facility, and exact date field.
- **Presell computation:** the active pre-order/backorder category, available future supply, and calculated promise date in the installed flow.
- **Shopify publication:** the mapped variant, publication result, active/inactive presell metadata, and inventory policy. A parent-product tag or a generated feed alone does not prove that the variant update succeeded.
- **Storefront result:** the selected variant's displayed date and preorder availability, checked independently of import or job completion.

If the same arrival metadata appears against several locations, establish whether it belongs to the product/variant, a supply facility, or an inventory channel. Compare the PO's receiving location and configured distribution/publication mapping before treating repeated metadata as separately available stock at every node. The reviewed presell variant-metadata payload is not a location-level inventory-quantity update.

Keep the supplier's expected receipt/arrival date, the presell storefront promise, any linked sales-order-item promise, and ship-group estimated ship/delivery dates separate. Record each field's source, scope, time zone, and update time; matching labels or dates do not establish identical meaning. In the reviewed OMS path, the PO item's `estimatedDeliveryDate` can be assigned to a linked sales-order item's `promisedDatetime`. That is distinct from a Shopify variant's presell metadata or the ship group's estimated dates.

The reviewed Shopify connector maps `fulfillAt` to the ship group's `estimatedShipDate`, not `shipAfterDate`. During the reviewed OMS preparation step, detected preorder/backorder ship groups have `estimatedShipDate` cleared and skip the ordinary ship/delivery estimate fallback. Do not apply an ordinary in-stock fallback or assume every supplied estimate is preserved without checking the installed versions and processing path.

Use [Purchase Order Upload](https://github.com/hotwax/oms-documentation/blob/ca98c89eec3a379c3e2ebb7aef2247875bf8cf4f/documents/retail-operations/orders/pre-orders/purchase-order-uploads.md) and [Presell Audit](https://github.com/hotwax/oms-documentation/blob/ca98c89eec3a379c3e2ebb7aef2247875bf8cf4f/documents/retail-operations/orders/pre-orders/audit-pre-order.md) for the workflow concepts. Confirm the installed path and actual schedule; do not copy a fixed cadence or change eligibility, mappings, inventory policy, dates, or jobs during triage.

## 3. Compare Kits In Complete-Kit Units

First confirm which system computes the kit's availability and whether the installed flow uses OMS component associations. A Shopify-native bundle or a different ERP item type may use a different path.

For an OMS component-derived kit in the reviewed implementation:

1. Verify each effective component association and its required quantity. A missing association or invalid definition needs investigation; it is not interchangeable with a valid kit that has zero availability.
2. At each eligible physical facility, use each component's applicable available quantity, rather than its raw on-hand count.
3. Divide each component's available quantity by the quantity required for one kit, round down to complete kits, and take the smallest result.
4. Complete this calculation separately at each facility before combining complete-kit contributions for a channel. Do not combine loose components from different facilities to construct a kit that no facility can fulfill.

**Example:** A kit requires two units of component A and one of component B. At one facility, the applicable available quantities are 21 A and 9 B. A supports 10 complete kits and B supports 9, so the component-based result is 9 kits before any additional kit/channel policy.

For the same two-A/one-B kit, components split across facilities are not interchangeable with complete kits at a facility:

| Facility | Applicable Available A | Applicable Available B | Complete Kits |
| --- | --- | --- | --- |
| First facility | 4 | 0 | 0 |
| Second facility | 0 | 2 | 0 |

The aggregate component totals are four A and two B, but neither facility can supply a complete kit. This component-derived path therefore contributes zero complete kits from these two facilities, rather than pooling their loose components to advertise two kits. The numbers are illustrative available quantities, not raw QOH or a real inventory snapshot.

The reviewed component-based path accounts for component-level safety stock and brokering eligibility, and can apply configured holds. Additional kit/channel rules can reduce the final published quantity. Do not reuse the example as a universal formula for a different publishing model or deduct the same safeguard twice.

## 4. Separate Reservation, ERP Export, And Fulfillment

For an order with both in-stock and preorder lines, collect the following for **each line and ship group**, rather than relying on the order header alone:

| Question | Evidence To Inspect |
| --- | --- |
| Is the line approved and where is it assigned? | Item status, physical facility or queue, ship group, and routing history. |
| Has physical inventory been reserved? | Reservation quantity and timestamp, linked inventory item, and inventory-history entry at the assigned facility. A location assignment alone is insufficient. |
| Is pending demand reflected in online availability? | The active ATP calculation, relevant queue quantities, applicable store settings, and the latest published result. |
| Does the preorder line have a future supply assignment? | Its purchase-order or future-inventory reference, quantity, expected date, and location mapping. This is distinct from a reservation of physical stock. |
| Is the order eligible for ERP export? | The installed export rules, product and location mappings, customer prerequisites, holds, and any waiting or error result. |
| Has the ERP accepted it? | A correlated ERP order ID and the per-order result, followed by line/location verification in the ERP. A produced or sent batch is not enough. |
| May fulfillment start? | The applicable release policy for the order, ship group, or location, and the actual fulfillment state. |

The reviewed OMS allocation service does not create a physical reservation when moving an item to a virtual facility, and treats an item in `ITEM_CREATED` as a location decision rather than the first reservation. Separately, the reviewed online-ATP calculation can reduce advertised availability for queued demand when the relevant store setting enables reservation logic. Therefore, the absence of a physical reservation alone proves neither that the item is unprotected online nor that overselling has occurred. Verify both paths and their timestamps.

ERP export is another decision. The reviewed NetSuite batch path selects orders and applies order-level prerequisites, so a line-level mapping or hold can affect the order's export eligibility. However, a preorder line is not automatically a reason to hold the order: that implementation has preorder-location handling and configurable brokering-queue location handling. Confirm the installed mapping and selection rules instead of assuming that all lines must be physically available before export, or that in-stock lines are always sent immediately.

For downstream record and billing reconciliation, use [Fulfillment And Invoice Status Troubleshooting](../shopify/fulfillment-status-troubleshooting.md).

Treat **reserve available items**, **create the ERP sales order**, and **release items for fulfillment** as separate requirements. A Ship Complete setting does not establish that a reservation or export succeeded. For mixed-location orders, explicitly confirm whether the intended release policy applies to the entire order or separately to each location, and which system implements it. Do not change that setting to repair an unexplained inventory discrepancy.

## 5. Measure The Actual Delay

Build a timeline for the affected record:

- Source transaction or order change
- OMS import and its record-level result
- Routing or reservation decision, when applicable
- Export selection or inventory calculation
- Message/feed production and delivery attempt
- Destination processing result and readback

These are separate paths and milestones; their order depends on the integration. Inventory publication and sales-order export need separate evidence even when both are described as “sync.”

Inspect each relevant job's scope, schedule, paused state, recent runs, and errors using [Inspect service jobs](../maarg/service-jobs.md). Follow batch, feed, or remote-operation references with [Investigate system messages](../maarg/system-messages.md). A producer's successful run can leave work waiting downstream, and a configured cadence is not an end-to-end completion time.

If an expected record was never selected, investigate eligibility. If it was selected but remains queued, investigate processing and delivery. If the destination reports success but quantities still differ, compare the actual item, location, measure, and timestamp again. Verify the destination result before treating the discrepancy as resolved.

## Escalate With A Small, Read-Only Evidence Pack

Provide support with:

- Environment, installed app/connector versions, active integration paths, and relevant configuration scope
- Mapped product and location identifiers, exact quantity labels and units, and timestamped before/after values
- For shared availability, ownership/subsidiary scope, participating stores, overlapping source facilities, destination mappings, and evidence of how each store's demand affects the pool
- For kits, effective component quantities and per-facility calculations
- Order and item identifiers, ship groups, queues, reservations, future-supply references, and the routing run
- For presell, the PO receiving facility, category state, mapped Shopify variant, separate publication/storefront outcomes, and each date field's scope and source
- Relevant job/run, message/feed, and ERP correlation IDs with the first meaningful error or waiting reason
- The expected reservation, export, and release behavior, identifying whether each is confirmed configuration or a requested change

Share only the necessary records through the approved support channel. Remove credentials and unrelated customer data from screenshots or logs.

{% hint style="warning" %}
Do not reset inventory, broadly resync products or orders, rerun allocation, enable Test Drive, replay integration messages, or post an order directly to the ERP merely to make counts match. These actions can change reservations, create duplicate downstream work, or erase useful evidence. Have the responsible owner establish the failed stage and approve a targeted recovery first.
{% endhint %}
