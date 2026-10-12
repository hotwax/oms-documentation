---
description: Resolve orders that do not match the intended routing shipping-method filter.
---

# Troubleshoot shipping-method mapping

An imported order can miss the intended routing when its source shipping option is not mapped to the HotWax Commerce shipment method used by the routing filter.

## Compare the order and routing values

1. Open the order in `Sales Orders`.
2. Record the shipping method on the order.
3. In the **Order Routing Rules** app, go to `Routing` > `Order Routing`.
4. Open the routing group and select the intended routing.
5. In `Filters`, review the included and excluded `Shipping method` values.
6. Confirm that the order's HotWax shipping method matches an included value and does not match an excluded value.

A `Shipping method` sort changes processing priority. It does not make an order eligible for the routing.

## Correct a Shopify mapping

1. Open the **Company App**.
2. Go to `Shopify` and select the connection that imported the order.
3. Open `Shipping methods`.
4. Find the source shipping option.
5. Select the matching HotWax shipment method and carrier.
6. Click `Save All`.

Repeat this check for every active source shipping option. For an order from another commerce channel, review that channel's integration mapping instead.

{% hint style="info" %}
Changing a mapping does not prove that an existing order was updated. After saving the mapping, inspect the order again and follow your integration's approved correction or reimport process when the old value remains.
{% endhint %}

See [Manage Shopify mappings](../../../../system-admin/administration/company/manage-shopify-mappings.md#map-shipping-methods) and [Find sales orders](../../order-management/find-sales-orders.md).
