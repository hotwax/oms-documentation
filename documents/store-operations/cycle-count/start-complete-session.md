---
title: Start and Complete Session
description: a comprehensive guide to performing cycle counts, scanning items, and handling discrepancies.
---

## Starting the count

Once the start time arrives, the Start Counting button becomes active in the count card. After starting, the count moves into the In Progress state.

## Creating Sessions

Managers or associates can create multiple sessions to divide the work. When they click New Session, a form appears to:

* Enter the session name  
* Select the area (Backstock, Display, etc.)


The system automatically creates one default session. Multiple sessions can be created and worked on in parallel. If a session is active, no other user can work on that same session. Managers will have the permission to forcibly release another user's active session.

## Performing the Count

Inside a session, the associate will see:

* Count name and type  
* Options to edit the session name/area  
* Option to discard the session  
* Submit button for when the session is complete

### Scanning Items

To start scanning, the associate taps `Focus Scanner`. The scanned items will appear in the left panel. If a wrong item is scanned, the associate can remove it, and the system will adjust the count automatically.

### Item Categories During Scanning (For Directed Counts)

Scanned items automatically fall into four sections:

* **Counted**: Items assigned to this session and matched correctly  
* **Unmatched**: Items scanned but not found in the system  
* **Undirected**: Items that exist in system but were not assigned to the associate  
* **Uncounted**: Items given for counting but not yet scanned

### Item Categories During Scanning (For Hard Counts)

Scanned items automatically fall into two sections:

* **Counted**: Items assigned to this session and matched correctly  
* **Unmatched**: Items scanned but not found in the system

While scanning, the system will also display the total number of units scanned and the number of unique products counted. This helps the store team track their progress and supports the reconciliation process.

For example, before counting a shelf, the team may identify that it contains 40 units. As they scan each item, the system will update the count of units and products scanned, allowing them to verify that everything has been captured accurately.

During scanning, some items may appear in the **Unmatched** tab. These are items whose UPC/UPCA does not match any product in the system. Store associates must review and manually match these items before submitting the session.

### How to Match an Unmatched Item

1. Open the **Unmatched** tab inside the session.  
2. Locate the item that needs to be matched.  
3. Click on the **Match** icon.  
4. A **Match Product** modal will open.  
5. The scanned UPC/UPCA will already be auto-filled in the search field.  
6. The system will display possible product matches based on the code.  
7. Select the correct product from the results.  
8. Click **Save** to confirm the match.

### What Happens After Saving the Match

* If the matched product belongs to the count, it moves to the **Counted** tab.  
* If the item is not assigned in the count, it moves to the **Undirected** tab.  
* The item is removed from the **Unmatched** list.

The unmatched item card also shows the time when this item was scanned and how many scans ago it occurred. The matched scans before and after this product are also displayed so that the associate can correctly locate the unmatched item in the store.

This ensures the store team can complete the count with all items correctly mapped to system products.

### Add Hand-Counted Items

At the bottom left of the page, there is an option to add items that have already been hand-counted. Click on **Hand-Counted Items**, and a new screen will open to add these items.

* Search for the item using its SKU or parent product name and press Enter. This will add the item directly.  
* Enter the quantity manually, or use the **+** and **−** buttons to adjust the inventory.  
* To remove an item, click the cross (**×**) button.

After adding all hand-counted items and their quantities, click the **Save** button at the bottom right of the page. All these counted items will then be added to the session.

**Note**: Hand-counted items can be added in directed counts only when they are already included in the directed list.
