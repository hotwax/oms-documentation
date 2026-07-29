# Manage facility groups

Facility groups define where a facility participates in pickup, online inventory, brokering, shipping, and fulfillment workflows.

## Find a group

1. Open the **Company App**.
2. Go to `Facilities` > `Groups`.
3. Search by group name or ID.
4. Filter by group type.
5. Select a group or use its edit action.

## Create a group

1. Click the create button.
2. Enter the group name.
3. Review the generated internal ID.
4. Select the group type.
5. Select the Product Store when the group is store-specific.
6. Enter a description.
7. Save the group.

The internal ID becomes permanent after creation.

## Edit a group

Use the group edit action to change its name, description, group type, or Product Store links. Confirm the routing and inventory impact before deleting a group.

## Manage facilities and sequence

1. Open the group.
2. Review current facilities.
3. Add individual facilities or use `Include all` when every eligible facility belongs in the group.
4. Drag facilities into the required sequence when the group order affects routing.
5. Remove facilities that are no longer eligible.
6. Save the changes.

## Choose the group type

| Group type | Use |
| --- | --- |
| Pickup | Facilities offered for Buy Online Pick Up In Store |
| Brokering | Facilities available together in an Order Routing brokering rule |
| Channel facility group | Facilities whose inventory contributes to a sales channel |
| Generate shipping label | Facilities that use supported HotWax Commerce label generation |
| Same-day shipping | Facilities that can meet the same-day fulfillment promise |
| OMS fulfillment | Facilities that use HotWax Commerce fulfillment |

The same facility can belong to more than one group. Review all group memberships from the facility `Groups` tab.
