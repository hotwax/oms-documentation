---
description: >-
  Point of Sale (POS) sales are purchases made by customers directly at physical
  retail locations. These involve immediate payment and fulfillment, occurring
  in real-time.
---

# POS Sales Download

The scheduled 'New Orders' job in HotWax Commerce that downloads new orders in bulk from Shopify also includes POS sales. Because POS sales in Shopify have already been fulfilled to customers at the point of sale in-store, they are automatically marked as "Completed" in HotWax Commerce upon import.

**Differentiating POS Sales from Regular Orders:**

During import, HotWax Commerce differentiates between POS sales and regular orders by checking if the following conditions are met:

1. POS sales are already fulfilled in Shopify.
2. They are originated from the POS channel.
3. They have their shipping method set to POS\_Completed.

If these conditions are satisfied, HotWax Commerce automatically marks the POS sales as "Completed".

{% hint style="info" %}
HotWax Commerce automatically deducts inventory against the POS sale upon import. This ensures that the actual physical inventory available at the retail store is accurately reflected in HotWax Commerce.
{% endhint %}

POS sale fields in Shopify are mapped in HotWax Commerce just like any regular order. Certain fields such as Sales Channel, Status, and Shipping Method have different values for POS sales, reflecting how POS sales differ from regular orders.

{% tabs %}
{% tab title="POS sale in Shopify" %}
<figure><img src="../../.gitbook/assets/23.png" alt=""><figcaption><p>POS sale field mapping</p></figcaption></figure>
{% endtab %}

{% tab title="POS sale in HotWax Commerce" %}
<figure><img src="../../.gitbook/assets/24.png" alt=""><figcaption><p>POS sale field mapping</p></figcaption></figure>
{% endtab %}
{% endtabs %}
