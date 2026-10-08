---
description: Create inventory channels, assign facilities, link configuration facilities, and schedule inventory publishing.
---

# Create inventory channels

An inventory channel defines which facilities contribute inventory to a sales channel. It also links a configuration facility for channel-level product rules.

## Create a channel

1. Open `Sourcing` > `Channels`.
2. Select the `Channels` tab on the `Inventory channels` page.
3. Select the add button.
4. Enter a channel `Name`.
5. Review the generated `ID`. The internal ID can contain no more than 20 characters.
6. Enter a `Description`.
7. Review the selected `Product store`.
8. Under `Group level configurations`, select `Create new` or choose an existing configuration facility.
9. Select the confirmation button.

Creating a channel also creates or links its configuration facility and associates both records with the selected product store.

{% hint style="info" %}
If the page has no inventory channels, you can select `Use an existing channel` to link a channel facility group that already exists.
{% endhint %}

## Link a configuration facility

Each channel card shows its configuration facility. If the card displays `No configuration facility linked`, select `Add`, choose a configuration facility, then save.

To replace a linked configuration facility, select the options button beside the current facility, choose another facility, then save.

Channel-level threshold, store pickup, and shipping rules use this configuration facility.

## Assign facilities

1. Find the channel card.
2. Select the options button in the `Facilities` section.
3. Search for a facility when needed.
4. Select the facilities that should contribute inventory to the channel.
5. Clear a selected facility to remove it from the channel.
6. Select the save button.

The channel card displays separate counts for retail facilities and warehouses.

## Edit channel details

Select `Edit group` on a channel card to update its name or description.

## Configure inventory publishing

Channel definition and Shopify publication are separate steps. After confirming facility membership and sourcing rules, configure Shopify inventory event sync in the Company App:

1. Open `Shopify` and select the connection.
2. Confirm its shop and Product Store, then open `Inventory sync`.
3. Select `Set up channel`, choose the channel facility group and an eligible aggregate Shopify location, and create the channel.
4. Review its publisher and reset jobs, scope, and approved schedules. Supported missing jobs created with `Set up` start paused.
5. Reconcile aggregate ATP, inspect event and batch delivery, and verify Shopify before relying on incremental updates.

Physical-location publication is a separate event path in the same monitor. Confirm each Shopify location's facility mapping and its physical publisher; do not send the combined channel quantity to each physical store.

See [Set up Shopify inventory event sync](../../../system-admin/inventory/README.md) and [Monitor Shopify inventory sync](../../../system-admin/administration/company/manage-shopify-inventory-sync.md) for both paths and recovery controls.
