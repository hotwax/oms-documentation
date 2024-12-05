---
description: >-
  Discover your guide to troubleshooting brokering issues due to incorrect
  Facility Associations
---

# Incorrect Facility Configurations

For orders to be routed correctly, the facilities need to be associated with the appropriate facility group. If the facilities are not correctly configured in the facility groups, orders might be routed to the wrong locations, causing delays and inefficiencies.

## Scenario: Facility not associated with Facility Group

### Resolution Steps

1. Navigate to the Facilities App.
2. Navigate to the [Facility Groups page](../../system-admin/administration/facilities/manage-groups.md).
3. Identify the facility group with the "Brokering\_Group" subtype.
4. Click on the chip available against the facilities.
5. From the submenu, click on "View Facilities" to verify the facilities or "Quick Edit" to add or remove any facility from the group.



<figure><img src="../../.gitbook/assets/facilities.hotwax.io_tabs_find-groups 1.png" alt=""><figcaption></figcaption></figure>

### Resolution Steps

1. Navigate to the Order Routing App.
2. Navigate to inventory rules by clicking on the brokering run and order batch for the orders you would like to broker.
3. Click on the inventory rule you would like to configure.
4. Click on "Filter", select "Facilities," and choose the correct facility group to which you would like to broker the order.

For more details on Order Routing, refer to our [user manual](../brokeringruns.md).
