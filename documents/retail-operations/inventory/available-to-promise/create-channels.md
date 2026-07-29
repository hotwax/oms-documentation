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

The `Publish` tab displays one card for each Shopify shop connected to the selected product store.

1. Select the `Publish` tab.
2. Find the Shopify shop.
3. Select a `Run time`.
4. Select a `Frequency`.
5. Select the `Inventory channel` that should supply inventory.
6. Select `Save changes`.

Open the shop card overflow menu for these actions:

* `History`: Review previous job runs.
* `Copy details`: Copy the job information.
* `Run now`: Create a copy of the job and run it immediately.
* `Disable`: Stop future occurrences of the job.

{% hint style="info" %}
The `Publish` tab displays `No publish jobs yet` until a Shopify shop is connected to the selected product store.
{% endhint %}
