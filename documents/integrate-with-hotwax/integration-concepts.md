---
description: Learn how infrastructure services support HotWax Commerce integrations.
---

# Integration concepts

Use this page for technical infrastructure terms that help explain an integration flow. Keep business and operational terms in the [OMS glossary](../learn-hotwax-oms/README.md).

## Amazon EventBridge

Amazon EventBridge is an AWS service that routes events between systems. In the Shopify order-update flow, it receives the `orders/updated` webhook event and routes the message to an Amazon Simple Queue Service (SQS) queue. See [order updates](../learn-shopify/shopify-integration/orders/order-updates.md) for the workflow.

## Amazon Simple Queue Service

Amazon Simple Queue Service (SQS) is an AWS message queue. In the Shopify order-update flow, it retains routed webhook messages until HotWax Commerce polls the queue for updates. See [order download](../learn-shopify/shopify-integration/orders/order-download.md) for the related routing and polling steps.

## Add technical terms consistently

Add a term here when it describes shared integration infrastructure, such as a messaging, event-routing, or transport service. Link the term to the workflow that uses it. Keep customer-specific endpoints, credentials, and configuration values in the applicable client documentation rather than on this shared page.
