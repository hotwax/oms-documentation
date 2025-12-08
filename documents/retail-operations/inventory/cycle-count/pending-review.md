# Pending Review

## Pending review page

This manual provides a step-by-step guide to understanding and using the Pending Review sections in the Cycle Count App, helping admins review all submitted counts before they are finalized and guiding them on how to navigate the page, interpret the information displayed, and perform review actions smoothly.

This manual provides a step-by-step guide to understanding and using the Pending Review sections in the Cycle Count App, helping admins review all submitted counts before they are finalized. It lists all inventory counts completed by store associates that are waiting for admin review. From here, admins can check variances, validate accuracy, and take necessary review actions.

### Search and Filter Counts

1. Search  
     
   Admins can use the search bar to quickly find a specific count by entering the count name or ID.

2. Filter by Type  
     
   Admins can filter pending counts based on the type of inventory count. Types include:  
   * Hard Count  
   * Directed Count  
       
3. Filter by Facility  
     
   This filter allows the admin to view counts submitted by a specific store or warehouse. For instance, selecting Brooklyn will display only the counts completed at that location.  
   

Both Filter by Type and Filter by Facility filters can be combined to refine the results further.

### Viewing Count Details

Each item in the list represents one cycle count and displays the following details:

* Count Type: Indicates the type of inventory count submitted by the store team.  
* Count Name: A user-assigned name that identifies the count.   
* Facility Name: Specifies the facility where the inventory count was performed.  
* Created Date: Shows when the count was initially created.   
* Due Date: Indicates the deadline for completing the count.

For example:

A Hard Count named 03 December Count created on 3rd Dec 2025 at Brooklyn will appear as a row on this page.

Admins can click on any count card to open the detailed review screen.

## Review Count Page Overview

This page is used by admins to review the inventory counts submitted by store associates. It highlights mismatches between the counted quantity and system inventory, giving the admin full control to approve or reject each item.

### Page Header Information

At the top of the page, you will find key details about the count:

**Count Information**

* Count Name – The name of the count (e.g., 26 December Count).  
* Facility Name: The facility where the inventory count was performed.  
* Start Date – When the store was supposed to start the count.  
* Due Date – The scheduled completion date.  
* First Item Counted – Timestamp of when counting began.  
* Last Item Counted – Timestamp of when the last item was counted.

**Review Progress**

* Shows the percentage of items reviewed.  
* Displays how many items have been reviewed out of the total.

**Overall Variance (Filtered)**

This metric shows the total variance across all filtered items in the current count. Variance means the difference between what was physically counted and what the system expected. 

**Example shown:**

* 90 units of variance  
* Based on 10 results


This means that out of the items currently displayed (based on filters applied), the combined difference between counted and system quantities is 90 units across 10 items.

### Search and Filters

The section provides search and filtering options to refine the list of items.

**Search Bar**

* Allows searching for products by name or SKU.


Status Filter  
You can filter items based on review status:

* All  
* Open – Items that need review.  
* Accepted – Items approved.  
* Rejected – Items rejected.

### Compliance Filter

The Compliance Filter helps reviewers identify items that fall within or outside the acceptable variance thresholds during a cycle count. 

**Filter Options**

* Acceptable – Shows items whose variance is within the defined threshold.  
* Rejectable – Shows items whose variance exceeds the threshold.  
* Configure Threshold – Allows admins to define the acceptable variance limit.


**Configure Threshold**  
Admins can configure how much variance is allowed before an item is flagged as out of compliance.

**Admin Options**

* Select Unit of Measurement – Choose the basis for calculating variance:  
    
  * Units: Compares the difference between counted and system quantities in absolute units   
  * Percent: Calculates variance as a percentage difference between counted and system quantities  
  * Cost: Flags variance based on the cost impact of the quantity difference.  
      
* Enter Threshold Value – Example: 10 units, 5%, or a cost value depending on the selected unit.  
    
* Save Threshold – Click the blue check button to apply the threshold settings.


**How it works (Example)**

If the threshold is set to **10 units**:

* A product with a variance of 8 is Acceptable  
* A product with a variance of 25 is Rejectable


This allows admins to quickly focus on items with **major mismatches** instead of reviewing every minor deviation.

**Sort By**

* Sort items alphabetically or by variance.


**Item List Section**

The **Item List** displays all items included in a count event, along with their relevant details and actions for review.

**Item Row Details**  
Each item row contains the following information:

1. **Product Details**  
     
* Product Image – Visual representation of the product.  
* SKU and Name – SKU and the product name.  
    
2. **Count Information**  
     
* Counted Quantity / System Quantity – Shows the quantity counted versus the system-recorded quantity.

* Variance Value – The difference between the counted and system quantity.  
    
3. **Actions**  
     
* ACCEPT – Approve the counted quantity.  
* REJECT – Reject the count and send the item for recount.

Note: Bulk actions can be applied when multiple items are selected using the checkboxes.

### Bulk Review Actions

At the top of the item list, you can perform bulk actions for all selected items:

* ACCEPT – Accepts the counted quantities of selected items.  
* REJECT – Rejects selected items and sends them for recount.  
    
  Clicking these buttons will apply the chosen action to all selected rows simultaneously.

### Additional Information (Expanded View)

When you click on an item row, it expands to display additional details:

1. **Count details**  
     
   * Count Name – The name of the count.  
   * Count Performed By – The user who performed the count.  
   * Total Quantity Counted – The total counted quantity for the item.  
   * Timestamps – Time when counting started and when it was last updated.  
       
2. **More options**  
     
   * Last Counted – Displays the last counted quantity for the item.  
   * Edit Count – Allows editing the counted quantity if adjustments are needed.  
   * Remove Count – Removes the current count for the item.  
     

Items that have already been reviewed and accepted display an “APPLIED” status, indicating that the final counted quantity has been successfully submitted to the system.

### Closing the Review

Once the admin has finished reviewing all items in the count, they can use the Close Count button to finalize the cycle count. Closing a count means that the admin has reviewed all variances and is ready to complete the process.

When the admin clicks the Close button, the system opens a confirmation modal with two options:

Options Available While Closing a Count

1. Accept all outstanding variances and close  
     
* This option automatically accepts all remaining items that were not manually accepted or rejected.  
* Useful when the admin is confident that the remaining variances are correct.  
* Example: If 3 items are still open and the admin wants to approve them all at once, selecting this option completes the review quickly.


2. Reject all outstanding variances and close  
     
* This option automatically rejects all remaining open variances.  
* Useful when the admin wants those items to be recounted or corrected later.  
* Example: If several items show unusual variances, the admin can reject all of them in one action.


Closing the cycle count ensures that the cycle count lifecycle is completed and that the inventory updates are accurately reflected in the system.

**After Closing the Count**

* The count moves from the Pending Review section to the Closed section.  
* This means the review is fully completed and no further changes can be made.  
* The system will now post adjustments based on the accepted items.