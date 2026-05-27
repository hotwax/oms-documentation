---
description: Learn how HotWax Commerce synchronizes order updates from Shopify.
---

# Order updates

### Synchronizing order updates

Sometimes customers or customer service representatives (CSRs) make changes to Shopify orders that need to be accurately reflected in HotWax Commerce to ensure the fulfillment process meets the customer's requirements. HotWax Commerce can update the following details from Shopify:

* Adding items to an order
* Removing items from an order
* Changing item quantities
* Refunded transactions

When a new order is created, HotWax Commerce stores the complete order JSON in the order history. Later, when an order is updated in Shopify, Shopify triggers the `orders/updated` webhook. AWS EventBridge routes this webhook event to an Amazon SQS queue, where HotWax Commerce polls for the update. 

Once HotWax Commerce receives the event, it compares the new order JSON against the JSON stored in the order history. HotWax Commerce identifies the differences and applies changes only to the modified fields instead of updating the entire order. This event-driven flow ensures that order modifications sync quickly and accurately.

### Syncing Shopify order tags

Shopify order tags are also included in order updates. This allows merchants to use Shopify Flow, fraud tools, or customer service workflows to update an order's handling instructions after the order is created.

For example, merchants can configure Shopify Flow to apply a `Hold` tag when an order needs manual review and an `Approved` tag when the order is ready for fulfillment. HotWax Commerce syncs these tag changes from Shopify so the Order Management System (OMS) can use the latest tag values when deciding whether an order should remain in brokering or proceed to facility allocation.

#### Hold and Approved tag flow

1. A customer places an order in Shopify.
2. Shopify Flow evaluates the order against the merchant's review conditions, such as order value, risk level, or product-specific rules.
3. If the order requires review, Shopify Flow adds the `Hold` tag. The order remains in the brokering queue and is not allocated to a facility.
4. After a CSR reviews the order in Shopify, they remove the `Hold` tag and add the `Approved` tag.
5. The `orders/updated` webhook syncs the updated tags to HotWax Commerce.
6. On the next allocation run, orders with the `Approved` tag become eligible for facility allocation and fulfillment.

If the order does not meet any manual-review condition, Shopify Flow can add the `Approved` tag automatically. In that case, once the order is downloaded and the tag is synced, the order can proceed through the standard allocation process.

{% hint style="info" %}
When merchants use an approval-based tag flow, the `Approved` tag is required before an order can proceed to allocation and fulfillment. Orders without the required approval tag remain in the brokering queue until Shopify is updated and the tag change is synced.
{% endhint %}

To learn more about how HotWax Commerce syncs order fulfillment updates with Shopify, read the [Shopify integration overview](../../). Read further to learn how HotWax Commerce manages [presell orders](../preorders-and-backorders/) and [BOPIS orders](../bopis-orders/).
