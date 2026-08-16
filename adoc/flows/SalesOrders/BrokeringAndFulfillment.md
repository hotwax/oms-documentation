---
description: ADOC brokering schedule and fulfillment-network overview.
---

# Brokering and fulfillment

ADOC fulfills ecommerce orders through its fulfillment network, which includes retail stores and supported dark stores. HotWax Commerce brokers orders to eligible fulfillment locations and supports country-specific carrier integrations for shipping labels.

## Brokering schedule

Brokering does not run between 11:00 PM and 6:00 AM for ADOC. Outside that window, the configured brokering schedule processes eligible orders for fulfillment.

{% hint style="info" %}
The blackout window is specific to ADOC. Do not apply it to another product store unless that store's routing configuration has been approved separately.
{% endhint %}

## Fulfillment locations

Retail stores and dark stores can participate in ADOC fulfillment. The locations eligible for a particular order are determined by the active ADOC routing configuration and available inventory.

## Carrier integrations

| Country | Carrier |
| --- | --- |
| El Salvador | C807 |
| Guatemala | Guatex |
| Nicaragua | Cargo Trans |
| Costa Rica | Terminal Express |

For country-specific routing and carrier setup, follow the approved ADOC implementation configuration.
