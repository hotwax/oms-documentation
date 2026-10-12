---
description: Learn how HotWax Commerce imports returns from Shopify.
---

# Import Returns from Shopify

## Import returns through OMS order sync

OMS processes return and refund data from the Shopify order payload. When return lifecycle integration is configured for the return app, an open Shopify return can create a requested OMS return; the required closed-return data can complete that return. A financial refund and physical receipt remain separate outcomes.

Use [Order download](../orders/order-download.md) to identify the order-sync entry path. Confirm the affected shop, order identifiers, import window, and processing result before investigating a missing return.

## Verify the processing result

1. Find the exact Shopify order, return, and refund identifiers that apply to the case.
2. Inspect the processing result for the applicable order-sync path: its System Message for history or fallback, or its SQS consumer job run for realtime import.
3. Inspect the related Data Manager import and failed records when present; a successful download alone does not establish successful processing.
4. Confirm the resulting OMS return lines and refund transactions.
5. For restocked items, confirm the received quantity and mapped facility receipt.
6. Check the configured ERP export separately.

Use the [return, refund, and inventory diagram](README.md#separate-goods-money-and-inventory) to distinguish these results.

If the original order is missing, investigate its import and identifiers first. Establish the original order and any partial processing results before an approved recovery; do not assume another return import can repair every missing historical order.

{% hint style="info" %}
The refund total may differ from the actual sales total of the order. This variance can be attributed to scenarios where customers have paid shipping and handling charges on the order, which are sometimes excluded from the refund amount.
{% endhint %}

## In-Store Returns

**Shopify POS:** Returns and refunds created in Shopify POS are stored in Shopify. The configured HotWax import path processes that data; verify the OMS result and ERP export independently.

Inventory receipt depends on the return or refund line's restock or disposition data and the Shopify location-to-facility mapping. Verify the received quantity and facility independently. A no-restock refund does not by itself increase stock.

**Non-Shopify POS:** For retailers using a POS system other than Shopify POS, there is no inherent information about online orders, including online order IDs in the POS system. Consequently, creating returns against these online orders becomes a challenge. HotWax Commerce, as an omnichannel Order Management System, retains records of online orders from Shopify. Retailers can use HotWax Commerce to create returns in store for online order, or use HotWax's order and return APIs to allow their POS system to accept online returns in store without having to switch systems.

For POS systems other than Shopify POS, see [In-store returns](../../../retail-operations/orders/returns/in-store-returns.md).

