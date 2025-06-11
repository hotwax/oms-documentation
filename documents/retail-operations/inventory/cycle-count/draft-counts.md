---
description: >-
  Guide to creating and managing draft cycle counts in the Cycle Count App,
  including adding products, assigning facilities, and setting due dates.
---

# Draft Counts

A directed cycle count begins as a draft. When logging into the Cycle Count App, the `Drafts` page is the first page you’ll see. To create a new draft, click on the `+` icon at the bottom right of the screen.

A new Draft count will open up on a new page where you can begin setting up a new count.

## Steps to draft new cycle count

1. **Name your cycle count, a cycle count ID will be automatically assigned to it.**
2. **Add products to the count**
   * **Adding Individual Products**
       * Click on the text field below the count name. As you enter the product's SKU, it will show up to the right of the input field. Ensure that the product SKU is accurate, otherwise the products won't appear in the results.
       * If the product you want to add to the draft count appears, click on the `+` button next to the product details or simply press enter on your keyboard.
   * **Adding Products in Bulk**\
       If you already have a list of products in a CSV file format, you can upload the list of products by clicking the `upload` button in the upper right of the page.
       * Select a file from your computer and upload it to the app.
       * Once uploaded, you’ll be prompted to select which product identification you’ve uploaded in the CSV and which column the products are located in.
       * Click the `save` button and the products will be added to your count. Products that are already added to the count will not be added again.
   * **Removing Products**\
     If a product has been added that needs to be removed, click on the `x` button at the end of any product's row.
3. **Add a Due Date**\
   Due dates can be added by clicking on the date button from the configuration options. For example, retailers may want to ensure that all the inventory is counted before commencing a season-end sale.
4. **Assign a Facility**\
   Retailers must assign a cycle count facility to move a count from Draft to Assigned. Click `+ Assign` and select a facility from the modal.

Once a count is ready to be assigned to a facility, click on the `send` button at the bottom right of the draft cycle count. The created draft will now appear in the assigned tab and on the [for the store team](https://docs.hotwax.co/documents/inventory/directed-cycle-count) of the `Cycle Count` App.

{% embed url="https://youtu.be/C1Emwnm3P2I" %}

## Search, Sort and Filter Draft Counts

The Draft Counts page allows sorting by Created Date (default), Due Date, or Alphabetical order.  

Admins can narrow results with the facility filter as well:
- A specific facility  
- Unassigned counts  

By default, counts across all locations are visible.

## Automatically Created Draft Cycle Counts for Rejected Items

Order rejections in a store may lead to change in the inventory. In the event where an order is rejected with a reason like Damaged or Not in Stock, means that physical inventory present in the store doesn’t match systemic inventory, indicating the need for a cycle count.

For this, there is a configurable product store setting named `Create cycle count for rejected items`, which automatically creates a draft count in HotWax’s `Cycle Count` App whenever an order rejection causes a change in the inventory levels, to identify the actual stock and address the discrepancy.

### How It Works

- When an order item is rejected and causes a variance in Available to Promise (ATP), a draft cycle count named **Rejected Item Count** is created.

- A link to the draft count is automatically sent to the operations team or admins, so that they can assign it to the facility that rejected the order item.

- The draft count stays in a **Draft** status until it is assigned. If additional rejections from the same facility occur before the count is assigned, they are also added to the same count.

- If the count has already been assigned and further rejections from the same facility occur, a new draft cycle count is created for those items.

