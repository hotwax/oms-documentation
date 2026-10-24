# View Inventory Log

### How to View Inventory Logs for a Product in HotWax Commerce

In HotWax Commerce, every change in inventory numbers for a product generates an inventory log. This log details the reasons for the change and its impact on Available to Promise (ATP) and Quantity on Hand (QOH).

#### Follow these steps to find the inventory log for a specific product

**Go to the Inventory Page**

* Click on the `hamburger` menu located at the top left corner of the page
* Scroll down to the `Warehouse` section.
* Click on the `Inventory` button.

**Select the Product**

* You will land on the `Find Product Inventory` page where multiple Items are listed.
* Click on the specific item for which you want to view the inventory details

**Access the Inventory Log**

* At the bottom of the `inventory view` page, you will see a section labeled Inventory Logs.
* Check the checkbox labeled `Inventory Log` or click on the `Inventory Log` blue text to display the inventory log of the product.
* This view will show all inventory changes and their reasons.

**Filter by Facility**

* To see inventory logs for a specific facility, use the facility dropdown menu at the top of the page.
* Click on the `Facility` button and select the desired facility from the dropdown menu.
* Again check the checkbox of the `Inventory log` to view the log specific to that facility.

### Reasons for Inventory Change

`ATP diff` and `QOH diff` show how much an event changes inventory, not the resulting balances. The examples below describe separate events for one unit unless stated otherwise.

Here are some of the reasons or events that cause inventory changes:

* **Sales Reservation:** Product Inventory is reserved for a sales order.
  * Resulting log: ATP diff: -1, QOH diff: 0
* **Sales Shipment:** When the order is completed in the OMS and shipped, the QOH decreases as the item is physically shipped from the store.
  * Resulting log: ATP diff: 0, QOH diff: -1
* **ERP Updates:** Inventory imports update OMS according to the configured source, import method, and schedule. Review the import and its inventory logs to identify the changes applied.
  * Example Scenario: ERP system updates inventory based on actual counts or adjustments.
  * Inventory Log: Created for each change in inventory.
* **Transfer Reservation:** Inventory is reserved due to a transfer order. The ATP and QOH diff will be similar to the sales reservation.
  * Resulting log: ATP diff: -1, QOH diff: 0
* **Transfer Shipment:** The on-hand quantity of the product decreases as the item is physically shipped for a transfer order.
  * Resulting log: ATP diff: 0, QOH diff: -1
* **Inbound Transfer Shipment:** Inventory for the product is received as a transfer shipment, increasing the product's inventory.
  * Resulting log: ATP diff: 1, QOH diff: 1
* **Variance API Variance log for POS order(Order-id) (POS Sale):** When an item is sold in-store, both the Available to Promise (ATP) and Quantity on Hand (QOH) for that item decrease accordingly.
  * Resulting log: ATP diff: -1, QOH diff: -1
* **Variance API (Adjustment):** When a user records a variance with the reason adjustment from the product inventory page.
* **Store rejected inventory (Not in Stock):** When a store rejects an order because the product is not in stock, the Available to Promise (ATP) and Quantity On Hand (QOH) at that particular facility will become 0.
  * Example when both ATP and QOH are 10 before the adjustment: ATP diff: -10, QOH diff: -10
* **Reservation cancelled:** Cancelling a reservation for one unit increases ATP by 1 and leaves QOH unchanged. For example, ATP of 9 and QOH of 10 become ATP of 10 and QOH of 10.
  * Resulting log: ATP diff: +1, QOH diff: 0
