# View Inventory Log

### How to View Inventory Logs for a Product in HotWax Commerce

In HotWax Commerce, every change in inventory numbers for a product generates an inventory log. This log details the reasons for the change and its impact on Available to Promise (ATP) and Quantity on Hand (QOH).

#### Follow these steps to find the inventory log for a specific product:

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

<figure><img src="https://github.com/AjinkyaM1/Ajinkya-OMS-Documentation/assets/158986859/1b8dd0de-f835-42c3-afb5-504de6b54743" alt=""><figcaption></figcaption></figure>

### Reasons for Inventory Change

To understand the various reasons for inventory changes, let's consider an example: an order involving a product with both Available to Promise (ATP) and Quantity on Hand (QOH) set at 10. Inventory logs are generated whenever any action related to the inventory of a product is performed. The calculations below are for a single quantity of the product.

Here are some of the reasons or events that cause inventory changes:

* **Sales Reservation:** Product Inventory is reserved for a sales order.
  * Resulting log: ATP diff: -1, QOH diff: 0
* **Sales Shipment:** When the order is completed in the OMS and shipped, the QOH decreases as the item is physically shipped from the store.
  * Resulting log: ATP diff: 0, QOH diff: -1
* **ERP Updates:** HotWax Commerce considers ERP systems as the source of truth and receives daily inventory updates from them. Any inventory changes, whether negative or positive, will create an inventory log.
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
  * Resulting log: ATP diff: -10, QOH diff: -10
* **Reservation cancelled:** When a sales reservation is cancelled, the Available to Promise (ATP) for the product will increase to 1, and the Quantity On Hand (QOH) will remain at 0.
  * Resulting log: ATP diff: +1, QOH diff: 0
