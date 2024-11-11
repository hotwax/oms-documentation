---
description: >-
  Explore the significance of facility groups in HotWax Commerce for efficient
  order routing and fulfillment.
---

# Facility Group

HotWax Commerce routes orders to optimal fulfillment locations. To facilitate order routing, it’s imperative to configure all facilities, including both stores and warehouses, within HotWax Commerce.

You can easily add facilities existing in your network using the HotWax Commerce Facility App. To learn how you can add new facilities in HotWax Commerce, please refer to the [Facility App Documentation](https://docs.hotwax.co/documents/v/system-admins/administration/facilities).

Once all the facilities have been set up, those facilities that will be using NetSuite for fulfillment should be added to the NetSuite Fulfillment group.

When HotWax routes orders, if an item is brokered to a facility within this group, it indicates that OMS syncs allocation details for these items with NetSuite.

## Adding/Removing Facilities from NetSuite Fulfillment Group:

1. Access NetSuite Integration Page by Navigating to Settings > NetSuite Integration.
2. Locate and access the `Facility Groups` section.
3. In the `Facility` field, type the facility name directly within the UI.
4. Choose the appropriate facility from the dropdown suggestions.
5. Confirm the addition by clicking on `Add`.

By making these associations, the integration layer ensures that when an order is brokered to a facility within the NetSuite Fulfillment group, the allocation details are updated in NetSuite.

{% hint style="info" %}
You can simply click on the`bin` icon to remove a facility from the NetSuite Fulfillment Group.
{% endhint %}

## Example:

| Facility Group ID    | Facility             |
| -------------------- | -------------------- |
| Central Warehouse    | NetSuite Fulfillment |
| East Coast Warehouse | NetSuite Fulfillment |

Here's a guide to [create mappings for facilities](README.md#configuring-mappings-between-hotwax-commerce-and-netsuite)
