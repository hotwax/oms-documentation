---
description: Understand the safety delay used by scheduled Shopify order fallback batches.
---

# Order download buffer time

The scheduled fallback flow uses `thruDateBuffer` to keep the upper end of a query window behind the current time. This reduces the chance of querying records while Shopify is still making them available. It is not used by the realtime SQS flow.

## Released default

The released `queue_ShopifyOrderSync` template is seeded to run every five minutes with `thruDateBuffer=1`. The template is paused by default, so its actual schedule and parameters must be verified for each Shopify shop.

For each fallback batch, HotWax Commerce:

1. Uses the most recent sent `ShopifyOrderSync` System Message high-water mark as `fromDate`.
2. Sets `thruDate` to the current time minus `thruDateBuffer`.
3. Queues the new date window and stores its `thruDate` as the next high-water mark.

The current order-sync implementation does not have a separate `bufferTime` parameter and does not intentionally overlap consecutive windows.

## Example

Suppose the configured fallback job runs every five minutes with a one-minute `thruDateBuffer`:

- A run at 13:15 can query updates after 13:10 and before 13:14.
- The next run at 13:20 can query updates after 13:14 and before 13:19.

The query uses exclusive start and end bounds. During reconciliation, check records whose Shopify `updatedAt` exactly matches a boundary instead of assuming adjacent windows are gap-free.

{% hint style="warning" %}
Changing a job's cadence does not automatically change `thruDateBuffer`. Review both values, the last sent System Message, and the shop's timezone before replaying a fallback window.
{% endhint %}
