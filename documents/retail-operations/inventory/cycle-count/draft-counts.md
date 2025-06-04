---
description: >-
  Guide to creating and managing draft cycle counts in the Cycle Count App,
  including adding products, assigning facilities, and setting due dates.
---

# Draft Counts

A directed cycle count begins as drafts. When logging into the `Cycle Count` App, the `Drafts` page is the first page you’ll see. To create a new draft, click on the `+` icon at the bottom right of the screen.

A new Draft count will open up on a new page where you can begin setting up a new count.

## Steps to draft new cycle count

1. **Name your cycle count, a cycle count ID will be automatically assigned to it.**
2. **Add Products to the Count**
   * **Enter SKUs to Add to the Count**
     * **Adding Individual Products**\
       Retailers require cycle counts of a product in case they believe there is a discrepancy in the inventory of the product. For example, if the store has rejected the order with the reason `Not in stock` but the store should have available inventory.
       * As you enter the product's SKU, it will show up to the right of the input field. Ensure that the product SKU is accurate, otherwise the products won't appear in the results.
       * If the product you want to add to the draft count appears, click on the `+` button next to the product details.
       * To instantly add the result shown as a result of your search, press the enter key while the input field is selected.
     * **Adding Products in Bulk**\
       If you already have a list of products in a CSV file format, you can upload the list of products by clicking the `upload` button in the upper right of the page.
       * Select a file from your local file system and upload it to the app.
       * Once uploaded, you’ll be prompted to select which product identification you’ve uploaded in the CSV and which column the products are located in.
       * Click the `save` button and the products will be added to your count. Products that are already added to the count will not be added again.
   * **Removing Products**\
     If a product has been added that needs to be removed, click on the `x` button at the end of any product's row.
3. **Add a Due Date**\
   Due dates are optional on directed cycle counts and can be added by clicking on the date-time button from the configuration options. For example, retailers may want to ensure that all the inventory is counted before commencing a season-end sale.
4. **Assign a Facility**\
   Retailers need to decide the cycle count is created for which facility where the physical counting should happen. Assigning a facility is required to move a count from `Draft` to `Assigned`. To assign a facility, click on the `+ Assign` button and select a facility from the facility selection modal.

Once a count is ready to be assigned to a facility, click on the `send` button at the bottom right of the `draft detail` page. The created draft will now appear in the assigned tab and on the [store management side](https://docs.hotwax.co/documents/inventory/directed-cycle-count) of the `Cycle Count` App.



{% embed url="https://youtu.be/C1Emwnm3P2I" %}

## Search, Sort and Filter Draft Counts

The Draft Counts page allows quick access to specific counts through name-based search.  
To view drafts in a specific order, admins can sort them by Created Date (default), Due Date, or Alphabetical order.  

Facility-based filtering is useful here, admins can narrow results to:
- Drafts assigned to a specific facility  
- Or those that haven’t been assigned yet  

By default, counts across all locations are visible.

## Automatically Created Draft Cycle Counts for Rejected Items

Order rejections in a store may or may not lead to change in the inventory. For example, when a store rejects orders just because it has some operational constraints and is temporarily inactive, in that event, order rejections do not lead to change in the inventory levels.  
While, in the event where an order is rejected with a reason like, damaged item, not in stock, means that physical inventory present in the store doesn’t match what’s online, which reflects the need for a cycle count.  
For this, whenever an order rejection causes a change in the inventory levels, a draft count is automatically created in HotWax’s `Cycle Count`App to identify the actual stock and address the discrepancy.

### How It Works

- When an order item is rejected and causes a variance in Available to Promise (ATP), the `findOrCreateRejectedItemCycleCount` service is triggered. This service creates a draft cycle count named **Rejected Item Count**.

- A link to the draft count is automatically sent to the operations team or admins, so that they can assign it to the facility that rejected the order item.

- The draft count stays in **Not Assigned** status until it is assigned to a facility. If additional rejections from the same facility occur before the count is assigned, the newly rejected items are added to the same draft.

- If the count has already been assigned and further rejections from the same facility occur, a new draft cycle count is created for those items.

