---
description: >-
  Learn how Shopify fulfillment-order promises populate HotWax Commerce
  ship-group dates and how missing estimates are calculated.
---

# Estimated ship and delivery dates for Shopify orders

During realtime and historical order imports, the Shopify integration reads promise dates from Shopify fulfillment orders and records them on HotWax Commerce ship groups. When Shopify does not provide a promise date, HotWax Commerce calculates the missing estimate from configured service-level agreements (SLAs).

{% hint style="info" %}
This page covers dates recorded after an order is placed. For the pre-purchase estimate shown on the storefront, see [Configure estimated delivery dates](../../../learn-hotwax-oms/how-to-guides/configure-estimated-delivery-dates.md).
{% endhint %}

## Map Shopify promise dates

The integration maps Shopify fulfillment-order data to the corresponding HotWax Commerce ship group:

| Shopify value | HotWax Commerce value |
| --- | --- |
| `fulfillBy` | `Ship By` and, when no estimated ship date was supplied, `Estimated Ship Date` |
| `fulfillAt` | `Ship After` |
| Latest `deliveryMethod.maxDeliveryDateTime` | `Estimated Delivery Date` |

The same mapping applies to realtime imports and historical orders imported through bulk synchronization.

When a ship group contains items from multiple Shopify fulfillment orders, HotWax Commerce uses the earliest `fulfillBy`, the latest `fulfillAt`, and the latest `deliveryMethod.maxDeliveryDateTime`. Canceled fulfillment orders are ignored. Closed fulfillment orders are included when historical orders are imported so their original promise data is preserved.

## Understand fallback estimates

HotWax Commerce calculates a date only when the order payload does not already contain one. Values supplied by Shopify or another integration are not overwritten.

The fallback applies to ship groups that require fulfillment. Point-of-sale (POS) cash sales and ship groups whose items are already completed are skipped.

HotWax Commerce calculates the dates as follows:

* `Estimated Ship Date` uses `Ship By` directly when it is available. Otherwise, the facility's ship SLA is added to the later of the order date or `Ship After` date.
* `Estimated Delivery Date` adds the carrier shipment method's delivery days to the estimated ship date. The delivery date remains empty when delivery days are not configured.

The ship SLA comes from the facility that currently holds the ship group. An unbrokered ship group uses the brokering queue facility, whose default is one day. An allocated ship group uses the assigned store or warehouse. A missing facility value falls back to one day, while zero represents same-day shipping.

## Configure supporting values

Use the following administration pages to maintain the values used by the fallback calculation:

* Set the facility's `Days to Ship` value in [Manage facility details](../../../system-admin/administration/facilities/manage-facility-details.md#configure-fulfillment-settings).
* Set the carrier shipment method's `Delivery Days` value in [Carrier and shipment methods](../../../system-admin/fulfillment/shipping-methods/carrier-and-shipment-methods.md#shipment-methods).
