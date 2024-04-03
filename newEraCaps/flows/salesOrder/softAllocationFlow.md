---
description: >-
  Learn how to create soft allocation flows in Shopify using custom workflows
  and tags to streamline the integration between Shopify, the OMS, and HotWax.
---

# Soft Allocation

Orders that are soft allocated have to be uniquely tagged to ensure that when the order is imported into HotWax, the correct flows are triggered and the order is allocated to the facility included in the order line item properites.

How to create a Soft Allocation flow in Shopify:

**1. Create a new flow in Shopify from the Flow app and create a new workflow**

**2. Set the trigger to `Order Created`** This flow will now run whenever an order is created in Shopify. This is important to ensure that the required tag is applied before the order is imported into HotWax.

{% hint style="warning" %}
Shopify Flows may not run instantly after order creation. To ensure that orders are only imported after the tags have been applied to a soft allocated order, use the `buffer` parameter in the import order job.
{% endhint %}

**3. Add a tag on orders with soft allocated items**

Add a chained action by clicking on `then`

Add the following condition to the action by clicking on "Add Criteria"

1. Select orders > lineitems > Custom Attributes > Key
2. Select Key and you will be directed to the conditions page.
3. Input `hcShippingFacility` in the key

Add an action to apply order tags by clicking on `then` and `action`.

```
1. Select 'Add Order tags'.
2. Input `HC_PRE_SELECTED_FAC` as the tag name.
```

{% hint style="success" %}
Now whenever an order is created with soft allocated order items, the OMS will allocate the item to the soft alloated location.
{% endhint %}
