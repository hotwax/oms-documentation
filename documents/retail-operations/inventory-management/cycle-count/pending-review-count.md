---
description: >-
  Comprehensive guide to reviewing cycle counts in the Cycle Count app,
  including filtering counts, accepting or rejecting items, and managing
  inventory variance thresholds.
---

# Review Counts

Once a count has been submitted for review by the facility it was assigned to, it will be shown on the `Pending Review` page.

## Pending Review List View

On the review cycle count page, you can filter counts by facilities where the count was submitted from, as well as counts that have specifically been resubmitted after a recount.

If the cycle count is submitted for the first time, a `Submitted` badge will appear. For counts with items that were recounted and re-submitted, a `Re-submitted` badge will indicate that the count was reassigned and resubmitted by the facility after a recount.

The `pending review list view` also shows how many of the assigned items have been counted as well as the due date of the count. Clicking on a count opens the detail page for it.

## Pending Review Detail View

The detail page of a pending review cycle count is where items are finally accepted or rejected from a cycle count.

### Overview

The overview section, similar to the `Assigned` page, shows a high-level readout of how the count performed and overall accuracy. The due date of a cycle count can still be adjusted if it needs to be assigned back to a facility with a new due date.

The `Inventory Variance Threshold` function helps reviewers quickly filter out cycle count results based on the percent variance recorded. Counts that pass the variance threshold will be filterable using the green threshold filter, and counts that fall below the threshold can be filtered out under the red threshold filter.

Admins can use the slider of the inventory threshold to get accept/reject suggestions accordingly.

### Count Items

Each count item will show the following information:

* **Counted**: Represents the physically available sellable inventory counted at the facility for a given product. If an item is not counted, this information will not be shown on an item.
* **Systemic**: Represents the quantity on hand at the time when that particular count was submitted.
* **Variance**: Shows the difference between the expected and counted values if a count is submitted for an item.
* **User**: The user name that submitted the count will be displayed below the variance.

If no count has been submitted for an item, a red badge labeled `Not Counted` will be displayed along with the date that this product was last counted.

### Actions

Every count item has three options that the reviewer must select from. When a count is closed, all items where no action was performed will be rejected by default to ensure that they do not impact inventory.

* **Accept**: Accepting a count commits the variance submitted by that count to the OMS’s actual inventory and also becomes available to be synced to external systems as cycle counts or inventory adjustments. Click the green thumbs-up button to accept a count.
* **Recount**: When variances reported in a count are outside of acceptable limits and a recount by the store is required, click on the yellow recount button. This will reject the current count and add the same item back into the count so that when the count is reassigned to the facility, the product is available to be counted again.
* **Reject**: Rejecting an item discards a submitted count, ensuring that it does not impact OMS inventory levels. clicking on the red thumbs-down button rejects the cycle count for the items.

### Suggested Actions

Based on the variance threshold selected, suggested actions will be highlighted with an outline. Admins can use the slider of the inventory threshold to accept/reject suggestions accordingly.

Items with variances within acceptable tolerances will be suggested by the system to be accepted, and items below acceptable tolerance will be suggested for recount or rejection. Items that were not counted at all will be suggested for recount.

### Bulk Actions

Select multiple items by clicking on the checkbox at the end of an item and clicking on the desired bulk action in the bottom toolbar. All items can be selected or unselected by clicking on the checkbox in the top toolbar. Retailers can also switch the green or red threshold tabs to accept/reject items in bulk.

### Add Item

If an item needs to be added to a count before being reassigned to a facility for a recount, click on the `add` toolbar at the top of the screen, search for the product using the product identifier, and click on Add to Count to add the product.

All the newly added items and the items sent for recount will need to be reassigned to the facility. Click on the `re-assign` button in the overview section to reassign the inventory count to the facility.

## Close a count

To close a count, click on the primary action button at the bottom of the screen. This will prompt you to confirm that the current count is ready to close. All open count items from the count will be rejected and the count will no longer be editable. Closed counts are shown on the `Closed counts` page.

{% hint style="info" %}
When an inventory is rejected by the fulfillment team in HotWax Commerce, the ATP of that product gets 0, while the QOH remains the Same. Once inventory is updated through the Cycle count app, the variance for both the QOH and ATP is recorded separately. For example, if the QOH of the inventory is 10 and the ATP is 0 due to order rejection, and during the inventory count the inventory available is 9 then the variance will be updated as -1 and +9 for QOH and ATP respectively.
{% endhint %}

{% embed url="https://youtu.be/kDOA6NUjIV4" %}
