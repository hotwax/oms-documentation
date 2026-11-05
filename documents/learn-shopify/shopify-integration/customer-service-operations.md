---
description: >-
  Decide where to handle daily customer service requests in Shopify and HotWax Commerce, and what to verify before confirming the outcome.
---

# Customer service and daily operations

Use Shopify for customer-facing order changes and payment actions in your approved workflow. Use HotWax Commerce to check routing, inventory availability and fulfillment progress. Before promising an order change, confirm that the location fulfilling the affected items can still make it.

This guide describes a recommended operating approach for Shopify orders. Your team must confirm its fulfillment cutoff, permissions, return channels and inventory source. Some retailers configure actions to start in HotWax Commerce or another connected system. Follow that approved workflow and verify the result in Shopify before repeating an action elsewhere.

## Where to handle each request

| Customer request or daily task | Where to work | What to verify |
| --- | --- | --- |
| Find an order or explain its progress | Match the Shopify order to HotWax Commerce. | Affected items, quantities, assigned location, shipment status and tracking. |
| Change a shipping address, item or quantity | Check fulfillment in HotWax Commerce, then make a supported edit in Shopify after confirming the fulfillment team can accept it. | The changed details in HotWax Commerce and the fulfillment team's acknowledgment. |
| Cancel an order or an unfulfilled item | Confirm fulfillment can stop, then use the approved Shopify cancellation workflow. | Affected line quantities, refund outcome and corresponding status in HotWax Commerce. |
| Answer a refund question | Review the transaction in Shopify or the approved payment channel. | Amount, payment method and actual transaction result. |
| Handle a return or exchange | Use the retailer's approved return channel. | Original order, receipt, refund or store credit, and inventory disposition. |
| Investigate unavailable stock or a routing exception | Use HotWax Commerce and involve operations. | Approval, intentional holds, inventory availability, assigned location and the next owner. |
| Correct an inventory discrepancy | Have operations use the configured inventory source. | The same SKU and location in each system, using the same inventory measure. |
| Investigate missing tracking or fulfillment updates | Compare HotWax Commerce shipment details with Shopify fulfillment records. | Shipment reference, tracking and fulfilled quantities before any retry. |

## Find and read the order

1. Open the order in Shopify. Confirm the store, order number and affected item or quantity.
2. Find the matching order in HotWax Commerce using the Shopify order reference. Confirm that the items match.
3. Review each affected item's assigned location, fulfillment progress and shipment details. A single order can have several shipments at different stages.
4. If the order is missing or the systems disagree, record the references and time of the last action for support. Check the existing order before creating a replacement.

Assignment to a location shows where HotWax Commerce routed the work. It does not prove that the location has shipped the items. Use shipment and tracking details to explain progress to the customer.

## Change an address, item or quantity

Check fulfillment before editing the order. An item that is already picked, packed, released to a warehouse or shipped may require direct coordination with the fulfillment team.

1. Confirm which items and shipment the request affects.
2. Ask the fulfillment team to confirm whether it can stop or change the affected shipment. Follow your configured hold or stop process.
3. Make the supported change in Shopify. Review any additional payment or refund that the edit requires.
4. Verify the updated details in HotWax Commerce and confirm that the fulfillment team received them before releasing the work.

A Shopify tag or hold is useful only when your integration and fulfillment process act on it. Do not assume it stops work that the warehouse has already received. Your team must define any edit window and required tag values.

HotWax Commerce supports [order updates from Shopify](orders/order-updates.md), including item and quantity changes. Update timing depends on the configured integration. A successful save in Shopify alone does not confirm that the fulfillment location has the new instructions.

## Cancel an order or item

Cancellation, physical shipment stop and refund are separate outcomes. Check all applicable outcomes before confirming completion.

1. Check whether the affected quantity has already shipped. For a partly fulfilled order, distinguish shipped items from the remaining unfulfilled quantity.
2. Confirm that the fulfillment team can stop the unfulfilled items.
3. Cancel the correct scope in Shopify through your approved workflow. Review the refund amount and payment method, and check whether another connected channel already issued a refund.
4. Verify the actual refund transaction when a refund is due. A canceled status alone does not prove that the customer received a refund.
5. Check the affected line statuses and quantities in HotWax Commerce. Escalate missing downstream updates to the integration owner.

If someone has already canceled an item in HotWax Commerce, check Shopify and the payment record before taking another action. Configured integrations can send cancellation and refund updates from HotWax Commerce to Shopify. Do not assume that behavior is enabled, or issue a second refund without checking.

For items that have shipped, follow the retailer's shipment-exception or return process. Canceling an order record does not retrieve a parcel from the carrier.

Read the integration references for [complete cancellations](order-cancellation/complete-order-cancellation.md) and [partial cancellations](order-cancellation/partial-order-cancellation.md).

## Handle returns, exchanges and refunds

Start in your retailer's approved return channel, which may be Shopify, Shopify POS or a connected returns provider. Identify the original order and check for an existing refund before creating another transaction.

Track these outcomes separately:

* **Return authorization:** The retailer accepted the return request.
* **Goods receipt:** A store or warehouse received the items.
* **Refund or store credit:** The approved payment action completed.
* **Inventory disposition:** Operations determined whether the received units can return to sellable stock.

An authorization does not prove receipt, and a refund does not prove a restock. Follow the configured channel's process and have the inventory owner verify the location and disposition. Use the financial or integration owner for missing accounting updates rather than recreating the return in several systems.

For integration details, read [Import returns from Shopify](order-return/import-returns-from-shopify.md).

## Review fulfillment and inventory exceptions

Operations should review older orders waiting for assignment, unfillable items, intentional holds, orders awaiting fulfillment and shipped orders missing updates. For each exception, record the reason, next action and owner. Separate an intentional hold from work that needs intervention.

When inventory differs, compare the same SKU, location and timestamp. Physical on-hand stock can differ from sellable availability because of reservations, safety stock or other configured rules. An aggregate online location may also represent several physical locations.

Have the inventory owner correct the configured source, which may be HotWax Commerce or an upstream system. Avoid making a temporary Shopify adjustment just to match a screen: the next inventory sync may replace it. Verify the resulting availability after the source correction.

See [Inventory sync](inventory/inventory-sync.md) and [Order fulfillment](order-fulfillment/README.md).

## Escalate a missing update

Send support enough information to identify the affected transaction:

* Shopify store and order number, with the matching HotWax Commerce reference.
* Affected item, quantity and fulfillment location.
* Requested change and the time attempted, including timezone.
* Current status in each system and any shipment or refund reference.
* Customer impact, deadline and any confirmed fulfillment stop.

Use your team's agreed update interval and escalation threshold. Integration timing varies, so this guide does not prescribe a fixed wait time.

The integration owner should check the target system before retrying a fulfillment, refund or other transaction. A completed job or local status change alone does not establish that the target accepted it. Close the case when the affected systems show the expected result and the physical fulfillment action is confirmed where relevant.
