---
description: Learn how HotWax Commerce synchronizes order updates from Shopify.
---

# Order Updates

### Synchronizing Order Updates

Sometimes customers or customer service representatives make changes to Shopify orders that need to be accurately reflected in HotWax Commerce to ensure the fulfillment process meets the customer's requirements. HotWax Commerce can update the following details from Shopify:

* Adding items to an order
* Removing items from an order
* Changing item quantities
* Refunded transactions

To ensure all order modifications are synced accurately, HotWax Commerce has an 'Import order updates from Shopify' job. This job checks the 'updated\_at' field of orders in Shopify and compares it to the last run time of the job. If the 'updated\_at' time is after the last run time, the job downloads all order details from Shopify, compares it to HotWax Commerce data, and updates any changed fields. The default frequency for the job is every hour, but merchants can change it through the Job Manager App to meet their requirements.

<figure><img src="../../.gitbook/assets/import-order-updates-job-config.png" alt=""><figcaption><p><em>Fig.6 : Configuration of the “Import order updates from Shopify” job in the Job Manager App</em></p></figcaption></figure>

### Synchronizing Shopify Order Tags

Shopify order tags are also included in order updates. This allows merchants to use Shopify Flow, fraud tools, or customer service workflows to update an order's handling instructions after the order is created.

For example, merchants can configure Shopify Flow to apply a `HOLD` tag when an order needs manual review and an `APPROVED` tag when the order is ready for fulfillment. HotWax Commerce syncs these tag changes from Shopify so the OMS can use the latest tag values when deciding whether an order should remain in brokering or move forward to facility allocation.

#### HOLD and APPROVED Tag Flow

1. A customer places an order in Shopify.
2. Shopify Flow evaluates the order against the merchant's review conditions, such as order value, risk level, or product-specific rules.
3. If the order requires review, Shopify Flow adds the `HOLD` tag. The order remains in the brokering queue and is not allocated to a facility.
4. After a CSR reviews the order in Shopify, the CSR removes the `HOLD` tag and adds the `APPROVED` tag.
5. The 'Import order updates from Shopify' job syncs the updated tags to HotWax Commerce.
6. On the next allocation run, orders with the `APPROVED` tag become eligible for facility allocation and fulfillment.

If the order does not meet any manual-review condition, Shopify Flow can add the `APPROVED` tag automatically. In that case, once the order is downloaded and the tag is synced, the order can proceed through the standard allocation process.

{% hint style="info" %}
When merchants use an approval-based tag flow, the `APPROVED` tag is required before an order can move forward to allocation and fulfillment. Orders without the required approval tag remain in the brokering queue until Shopify is updated and the tag change is synced.
{% endhint %}

To know more about how HotWax Commerce synchronizes order fulfillment updates with Shopify, read the [Shopify integration overview](../../). Read further to know how HotWax Commerce manages [Presell orders](../preorders-and-backorders/) and [BOPIS Orders](../bopis-orders/).
