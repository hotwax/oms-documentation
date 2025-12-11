# Pending review

## Pending review page

Use the `Pending review` section in the Cycle Count app to review submitted counts before they are finalized. This page lists inventory counts completed by store associates that are waiting for admin review so you can check variances, validate accuracy, and take action.

## Required permissions

* `COMMON_ADMIN`: Grants access to view pending cycle counts, review submitted counts, accept or reject items, and close counts.

### Search and filter counts

#### Search

Use the search bar to find a specific count by name or ID.

#### Filter by type

Filter pending counts by inventory count type:

* `Hard count`  
* `Directed count`

#### Filter by facility

Filter by store or warehouse to see counts submitted at a specific location (for example, Brooklyn). Combine facility and type filters to refine results further.

### Viewing count details

Each item in the list represents one cycle count and displays the following details:

* Count type: Indicates the type of inventory count submitted by the store team.  
* Count name: A user-assigned name that identifies the count.   
* Facility name: Specifies the facility where the inventory count was performed.  
* Created date: Shows when the count was initially created.   
* Due date: Indicates the deadline for completing the count.

For example:

A `Hard count` named 03 December Count created on 3 Dec 2025 at Brooklyn appears as a row on this page.

Admins can click any count card to open the detailed review screen.

## Review count page overview

This page is used by admins to review the inventory counts submitted by store associates. It highlights mismatches between the counted quantity and system inventory, giving the admin full control to approve or reject each item.

### Page header information

At the top of the page, you will find key details about the count:

**Count information**

* Count name: The name of the count (for example, 26 December Count).  
* Facility name: The facility where the inventory count was performed.  
* Start date: When the store was supposed to start the count.  
* Due date: The scheduled completion date.  
* First item counted: Timestamp of when counting began.  
* Last item counted: Timestamp of when the last item was counted.

**Review progress**

* Shows the percentage of items reviewed.  
* Displays how many items have been reviewed out of the total.

**Overall variance (filtered)**

This metric shows the total variance across all filtered items in the current count. Variance means the difference between what was physically counted and what the system expected. 

**Example:**

* 90 units of variance  
* Based on 10 results


This means that out of the items currently displayed (based on filters applied), the combined difference between counted and system quantities is 90 units across 10 items.

### Search and filters

The section provides search and filtering options to refine the list of items.

**Search bar**

* Allows searching for products by name or SKU.

**Status filter**  
Filter items by review status:

* `All`  
* `Open`: Items that need review.  
* `Accepted`: Items approved.  
* `Rejected`: Items rejected.

### Compliance filter

The compliance filter helps reviewers identify items that fall within or outside the acceptable variance thresholds during a cycle count. 

**Filter options**

* `Compliant`: Shows items whose variance is within the defined threshold.  
* `Uncompliant`: Shows items whose variance exceeds the threshold.  
* `Configure threshold`: Allows admins to define the acceptable variance limit.


**Configure threshold**  
Admins can configure how much variance is allowed before an item is flagged as out of compliance.

**Admin options**

* Select unit of measurement: Choose the basis for calculating variance.  
  * Units: Compares the difference between counted and system quantities in absolute units.  
  * Percent: Calculates variance as a percentage difference between counted and system quantities.  
  * Cost: Flags variance based on the cost impact of the quantity difference.  
* Enter threshold value: Example: 10 units, 5%, or a cost value depending on the selected unit.  
* Save threshold: Click the blue check button to apply the threshold settings.


**How it works (example)**

If the threshold is set to **10 units**:

* A product with a variance of 8 is compliant.  
* A product with a variance of 25 is uncompliant.


This allows admins to quickly focus on items with major mismatches instead of reviewing every minor deviation.

**Sort by**

* Sort items alphabetically or by variance.


**Item list section**

The item list displays all items included in a count event, along with their relevant details and actions for review.

**Item row details**  
Each item row contains the following information:

1. **Product details**  
     
* Product image: Visual representation of the product.  
* SKU and name: SKU and the product name.  
    
2. **Count information**  
     
* `Counted quantity` / `System quantity`: Shows the quantity counted versus the system-recorded quantity.  
* `Variance`: The difference between the counted and system quantity.  
    
3. **Actions**  
     
* `Accept`: Approve the counted quantity.  
* `Reject`: Mark the item as rejected; the counted variance is skipped and the system quantity stays unchanged.

Note: Bulk actions can be applied when multiple items are selected using the checkboxes.

### Bulk review actions

At the top of the item list, you can perform bulk actions for all selected items:

* `Accept`: Accepts the counted quantities of selected items.  
* `Reject`: Marks selected items as rejected so their variances are skipped and system quantities are left as-is.  
    
  Clicking these buttons will apply the chosen action to all selected rows simultaneously.

### Additional information (expanded view)

When you click on an item row, it expands to display additional details:

1. **Count details**  
     
   * Count name: The name of the count.  
   * Count performed by: The user who performed the count.  
   * Total quantity counted: The total counted quantity for the item.  
   * Timestamps: Time when counting started and when it was last updated.  
       
2. **More options**  
     
   * Last counted: Displays the last counted quantity for the item.  
   * Edit count: Allows editing the counted quantity if adjustments are needed.  
   * Remove count: Removes the current count for the item.  
     

Items that have already been reviewed and accepted display an `Applied` status, indicating that the final counted quantity has been submitted to the system.

### Closing the review

Once the admin has finished reviewing all items in the count, they can use the `Close count` button to finalize the cycle count. Closing a count means the admin has reviewed all variances and is ready to complete the process.

When the admin clicks `Close count`, the system opens a confirmation modal with two options:

**Options when closing a count**

1. Accept all outstanding variances and close  
   * Automatically accepts all remaining items that were not manually accepted or rejected.  
   * Useful when the admin is confident the remaining variances are correct.  
   * Example: If three items are still open and the admin wants to approve them at once, selecting this option completes the review quickly.

2. Reject all outstanding variances and close  
   * Automatically rejects all remaining open variances and keeps system quantities unchanged for them.  
   * Useful when the admin does not want to apply the proposed variances.  
   * Example: If several items show unusual variances, the admin can reject all of them in one action to leave inventory as-is.

Closing the cycle count ensures that the cycle count lifecycle is completed and that the inventory updates are accurately reflected in the system.

**After closing the count**

* The count moves from the `Pending review` section to the `Closed` section.  
* The review is fully completed and no further changes can be made.  
* The system posts adjustments based on the accepted items.
