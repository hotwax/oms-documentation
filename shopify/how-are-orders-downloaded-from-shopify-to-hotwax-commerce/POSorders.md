---
description: >-
  Point of Sale (POS) sales are purchases made by customers directly at
  physical retail locations. These orders involve immediate payment and
  fulfillment, occurring in real-time.
---

# POS Sales

## POS Sales Download

The scheduled 'New Orders' job in HotWax Commerce that downloads new orders in bulk from Shopify also includes POS sales. Because POS sales in Shopify have already been fulfilled to customers at the point of sale in-store, they are automatically marked as "Completed" in HotWax Commerce upon import.

**Differentiating POS Orders from Regular Orders:**

During import, HotWax Commerce differentiates between POS orders and regular orders by checking if the following conditions are met:

1. The orders are already fulfilled in Shopify.
2. The orders originated from the POS channel.
3. The orders have their shipping method set to POS\_Completed.

If these conditions are satisfied, HotWax Commerce automatically marks the orders as "Completed".

{% hint style="info" %}
HotWax Commerce automatically deducts inventory against the POS sale upon import. This ensures that the actual physical inventory available at the retail store is accurately reflected in HotWax Commerce.
{% endhint %}

Order fields in Shopify are mapped in HotWax Commerce just like any regular order. Certain fields such as Sales Channel, Status, and Shipping Method have different values for POS sales, reflecting how POS sales differ from regular orders.

{% tabs %}
{% tab title="POS order in Shopify" %}
<figure><img src="../.gitbook/assets/Order Details - Shopify.png" alt=""><figcaption><p>POS orders field mapping</p></figcaption></figure>
{% endtab %}

{% tab title="POS order in HotWax Commerce" %}
<figure><img src="../.gitbook/assets/Order Details - HC.png" alt=""><figcaption><p>POS orders field mapping</p></figcaption></figure>
{% endtab %}
{% endtabs %}
