---
description: Troubleshoot orders that remain in Created or Hold status instead of being approved
---

# Order approval errors

Orders must be approved before they can move into fulfillment. If an order remains in `Created` or `Hold`, check its payment, approval settings, and risk review details before trying to approve it again.

## Before you start

You need access to the order, its payment information, and the product store that owns the order. Some approval rules are configured for each product store, so the same check can produce different results for different stores.

## Check why the order is not approved

1. Open the order in **Order Manager** and confirm that its status is `Created` or `Hold`.
2. Review the payment status. Orders that are waiting for a non-cash-on-delivery payment do not auto-approve unless the product store is configured to approve without a payment check.
3. Confirm that automatic approval is enabled for the product store and has not been turned off for the order.
4. Review any required order attributes. Missing or incorrect values, such as a customer or municipality identifier used by your approval rules, can prevent the order from being approved. For help correcting an attribute, see [Missing order attributes](order-attribute-missing.md).
5. Check the order's risk assessment, if your Shopify integration sends risk data.

## Handle risk review outcomes

An order with a pending risk assessment remains unapproved until the assessment is available. Do not manually approve the order while the assessment is pending.

After an assessment is available, the configured recommendation determines what happens next:

* An accepted or no-risk recommendation allows the order to continue through approval.
* An investigate recommendation creates a customer service review task. Review the task before taking any customer-facing action.
* A cancel recommendation can cancel the order automatically when the product store is configured to accept that recommendation. Otherwise, the system creates a customer service review task.

## Check the result

After correcting the blocking condition, refresh the order and confirm that it moves to `Approved`. If a customer service review task was created, complete the review according to your team's process and monitor the order before fulfillment begins.
