---
description: Resolve routing results caused by missing or incorrect facility-group membership.
---

# Troubleshoot facility configuration

Check facility groups when a routing rule skips an expected location or allocates an order to the wrong location.

## Check the facility group

1. Open the **Order Routing Rules** app.
2. Confirm the Product Store shown in the app footer.
3. Go to `Routing` > `Facility groups`.
4. Search for the group used by the routing rule.
5. Confirm that its type is `Brokering`.
6. Click `Manage facilities`.
7. Select eligible facilities and clear facilities that should not participate.
8. Click the save icon.

The facility count on the group card updates after the membership change is saved.

## Check the routing rule

1. Go to `Routing` > `Order Routing`.
2. Open the routing group, then select the routing and routing rule.
3. In `Filters`, review `Group` and any excluded group.
4. Add or change the group filter when it points to the wrong facility group.
5. Review other filters that can remove a facility, including `Proximity`, `Safety stock`, `Week of Supply`, and fulfillment capacity.
6. Save the routing group's working copy.

If no facility-group filter is applied, the routing rule can consider every facility enabled for online fulfillment. Use a group filter when the rule should use a controlled set of locations.

See [Manage facility groups](../../../../system-admin/administration/facilities/manage-groups.md) and [Configure routing rules](../inventory-rules.md) for the full setup.
