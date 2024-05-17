# POS Orders Download

Point of Sale (POS) orders are purchases made by customers directly at physical retail locations. These orders involve immediate payment and fulfillment, occurring in real-time.

## POS Order Download

HotWax Commerce downloads POS sales from Shopify similarly to regular orders. The scheduled `New Orders` job, which downloads new orders in bulk from Shopify, also includes POS sales.

Since POS sales from Shopify have already been fulfilled to customers at the point of sale in-store, they are automatically marked as "Completed" in HotWax Commerce upon import.

Differentiating POS Orders from Regular Orders:

During import, HotWax Commerce differentiates between POS orders and regular orders by checking if the following conditions are met:

1. The orders are already fulfilled in Shopify.
2. The orders originated from the POS channel.
3. The orders have their shipping method set to POS\_Completed.

If these conditions are satisfied, HotWax Commerce automatically marks the orders as "Completed".

{% hint style="info" %}
HotWax Commerce automatically deducts inventory against the POS sale upon import. This ensures that the actual physical inventory available at the retail store is accurately reflected in HotWax Commerce.
{% endhint %}

Order fields in Shopify mapped in HotWax Commerce remains straightforward like the any regular orders.

{% tabs %}
{% tab title="POS order in Shopify" %}
<figure><img src="../.gitbook/assets/Order Details - Shopify.png" alt=""><figcaption><p>POS orders field mapping</p></figcaption></figure>
{% endtab %}

{% tab title="POS order in HotWax Commerce" %}
<figure><img src="../.gitbook/assets/Order Details - HC.png" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}
