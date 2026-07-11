---
description: Trace the Shopify bulk product-update flow through its jobs and SystemMessages.
---

# Product update SystemMessages

HotWax Commerce uses a Shopify bulk query to retrieve product and variant updates, transforms the result into an OMS feed, and then updates product histories. This page describes the SystemMessage chain used by that flow and the service jobs that start and poll it.

## Flow at a glance

1. The queue job creates a `BulkProductAndVariantsByIdQuery` SystemMessage.
2. The send job submits that query to Shopify.
3. The poll job retrieves the completed Shopify bulk-operation result.
4. The result is transformed through `GenerateOMSUpdateProductsFeedNew` into a product-updates feed.
5. `ProductUpdatesFeedNew` consumes the feed and updates product histories in OMS.

## Jobs that start and poll the flow

| Purpose | Current job identifier | Service | Seed schedule |
| --- | --- | --- | --- |
| Queue the bulk product and variant query | `queue_BulkQuerySystemMessage_BulkProductAndVariantsById` | `queue#BulkQuerySystemMessage` | Hourly |
| Send produced bulk queries to Shopify | `send_BulkProductAndVariantsByIdQueryProducedSystemMessages` | `send#AllProducedSystemMessages` | Every 15 minutes |
| Poll the Shopify bulk-operation result | `poll_BulkOperationResult_ShopifyBulkQuery` | `poll#BulkOperationResult` | Every 15 minutes |

The seed jobs are paused by default. Enable and schedule them only as part of the approved Shopify integration configuration for the target shop.

{% hint style="info" %}
Older deployment notes may refer to shortened names such as `send_BulkQuerySystemMessage`. Use the job name and parameters in the deployed instance, not a historical shorthand.
{% endhint %}

## SystemMessage chain

| SystemMessage type | Role in the flow | Next stage |
| --- | --- | --- |
| `BulkProductAndVariantsByIdQuery` | Sends the Shopify bulk product-and-variant query and consumes the JSONL result. | `GenerateOMSUpdateProductsFeedNew` |
| `GenerateOMSUpdateProductsFeedNew` | Transforms the JSONL result into an OMS product-update feed. | `ProductUpdatesFeedNew` |
| `ProductUpdatesFeedNew` | Consumes the product-update feed and updates product histories. | OMS product records are updated. |

The relationship between the message types is configured through the Shopify connector enumerations: the bulk-query message leads to the feed-generation message, which leads to the product-updates message.

## Troubleshoot a stalled update

1. Confirm that the queue, send, and poll jobs are enabled for the intended Shopify integration.
2. Check that a `BulkProductAndVariantsByIdQuery` message was created and sent.
3. Confirm that Shopify completed the bulk operation and that the poll job consumed its JSONL result.
4. Confirm that `GenerateOMSUpdateProductsFeedNew` produced a feed and that `ProductUpdatesFeedNew` consumed it.

If the job names or message types differ from this page, compare the deployed Shopify connector version and job configuration before changing schedules or retrying messages.
