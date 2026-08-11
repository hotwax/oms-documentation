---
description: Learn how HotWax Commerce imports, approves, and updates Shopify orders.
---

# Orders

The Shopify order integration covers controlled pre-launch reconciliation, post-launch ingestion, OMS approval, and supported order updates. Each flow has separate configuration and monitoring requirements. A successful fallback batch does not prove that realtime event delivery is healthy.

## How orders enter HotWax Commerce

| Flow | When to use it | Detail |
| --- | --- | --- |
| History | Import eligible open and unfulfilled orders from before launch | [Shopify order download flows](order-download.md#historical-open-order-import) |
| Realtime | Process configured Shopify order events through EventBridge and SQS | [Shopify order download flows](order-download.md#realtime-order-import) |
| Scheduled fallback | Recover eligible orders and updates in date windows | [Order download buffer time](buffertimes.md) |

## What happens after import

- New nonterminal orders are evaluated against the Product Store, payment, and risk [approval rules](order-approval-for-fulfillment.md).
- Supported Shopify changes are detected and staged through the [order update flow](order-updates.md).
- Digital gift cards, physical gift cards, kits, and POS orders have additional mapping and fulfillment behavior described in this section.

{% hint style="info" %}
Actual event subscriptions, schedules, buffer values, credentials, and custom approval policy are deployment-specific. Verify the configured job and Shopify shop before rerunning a flow.
{% endhint %}
