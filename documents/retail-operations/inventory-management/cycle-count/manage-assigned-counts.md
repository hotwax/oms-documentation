---
description: >-
  Guide to managing assigned cycle counts in the Cycle Count app, including
  tracking progress, rescheduling counts, and moving them to the review stage.
---

# View Assigned Counts

Assigned cycle counts are awaiting the assigned facilities to submit for review. While assigned, the admin view provides insights into the progress made by stores.

## Assigned Counts List View

The list of assigned counts shows how many of the items in each count have been completed and when the count is due. If the count is sent for the first time, it will have an `Assigned` badge. If a count has been sent for a "Re-count" after being reviewed, it will have a `Re-count Requested` badge.

## Assigned Count Details

The details page of an assigned count helps track the exact progress of the specific count and take any corrective actions or initiate discussions with store personnel to ensure the full completion of a count.

### Overview

The detail section of an assigned count starts with an overview of the count and its progress. On the left part of the overview, you’ll see details added during creation such as count name, assigned facility, and due date. On the right side, there is a brief progress insight.

### Progress

The progress metric shows how many assigned cycle count line items have been completed. This does not represent the accuracy of the count, but rather the completeness of the whole count.

### Variance

The variance metric shows the accuracy of the count for the counted items. It shows the total expected count along with the total inventory counted to highlight the difference between expected and actual inventory levels.

While the facility of a count cannot be changed once it is assigned, it can be rescheduled. To reschedule a count, click on the `due date` chip below the name of the count and select a new date from the date-time picker.

### Item Counts

While a count is assigned, reviewers can still track individual item progress but cannot accept or reject the count items while it is still assigned.

Each count item will show the following information while in the assigned status:

* **Quantity on Hand**: The most current quantity on hand in the OMS will be shown for items that have not yet been counted. Once an item is counted, the quantity on hand for that item at the time of being counted will be displayed. This quantity on hand value will not change on a count item once it has been counted, ensuring accurate variance logs even if the count is accepted after inventory has continued to move in the facility.
* **Counted**: Once an item has been counted, it will show the counted number on the item. This is the exact count of inventory physically counted.
* **User**: The user who performed the count will be displayed on an item once the count is submitted. If a count is performed by multiple staff members, reviewers can track exactly which user performed each count.
* **More Details**: Clicking on the vertical ellipses at the end of a count item reveals additional information and actions on a count.
  * **Last Counted**: The last time this product was counted at this facility.
  * **Remove from Count**: If an item has not been counted, it can be removed from a count if the inventory count is no longer required for that product. Once an item has been counted, it can only be rejected during the review stage.

While in the assigned status, items can still be added to a count, which is helpful in the event that an item needs to be added after a count has already been assigned.

## Move to Review

Reviewers have the option to use the admin view to move a count to the review stage themselves. This option should be used in the event that a count is not moved to the review stage by the assigned facility.

To move a count to `Pending Review` status, click on the `lock` button at the bottom right of the page.

{% embed url="https://youtu.be/sKlW-pL-Xl8" %}
