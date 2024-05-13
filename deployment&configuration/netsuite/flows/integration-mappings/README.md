---
description: >-
  Discover the seamless integration between HotWax Commerce and NetSuite through
  configurable mappings.
---

# Integration Mappings

HotWax Commerce integration layer stores a structured repository of integration mappings between HotWax and NetSuite, including payment methods, shipping methods, promo codes, and price levels.

## Configuring Mappings between HotWax Commerce and NetSuite

Users need to periodically amend mappings to ensure that the integration between HotWax and NetSuite remains aligned with the current operational landscape. Because of these semi-frequent adjustments, they require access to updating these mappings themselves.

The dedicated NetSuite Integration page within the OMS lets you manage integration mappings between HotWax and NetSuite directly from the UI without relying on external support.

The out-of-the-box integration mappings that can be configured are:

<table data-view="cards" data-full-width="false"><thead><tr><th align="center"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td align="center">Payment Methods</td><td><a href="payment-methods.md">payment-methods.md</a></td></tr><tr><td align="center">Discount Codes</td><td><a href="discount-codes.md">discount-codes.md</a></td></tr><tr><td align="center">Price Levels</td><td><a href="price-levels.md">price-levels.md</a></td></tr><tr><td align="center">Shipping Methods</td><td><a href="shipping-methods.md">shipping-methods.md</a></td></tr><tr><td align="center">Facility Group</td><td><a href="facilities.md">facilities.md</a></td></tr></tbody></table>

Here’s how you can configure these mappings between HotWax Commerce and NetSuite:

{% hint style="warning" %}
If you cannot find the NetSuite Integration page, navigate to the General Settings page, and at the top, click on `Load NetSuite Data` to initiate the upload of NetSuite data.
{% endhint %}

1. Navigate to Settings and select the option `NetSuite Integration` from the menu.
2. Locate the Specific Mapping that you want to configure.
3. Click on the `Add` and fill-in the mandatory details mentioned in the input fields.

| Field                         | Description                                |
| ----------------------------- | ------------------------------------------ |
| **Integration Mapping Key**   | The mapping ID present in HotWax Commerce. |
| **Integration Mapping Value** | Corresponding value present in NetSuite.   |
| **Description**               | Briefly describe the method.               |

4. Confirm establishing the new mapping by clicking on the `Add`.

{% hint style="info" %}
The integration layer maps the original entities in HotWax Commerce to their corresponding representations in NetSuite. This mapping is established through a key-value pair, where the key denotes the original entity, and the value signifies its counterpart in NetSuite.
{% endhint %}


