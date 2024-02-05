---
description: >-
  Jobs are categorized based on their operations, ensuring that related
  operations are grouped together for efficient configuration.
---

# Job categories

## Categories

<details>

<summary>Initial load</summary>

Displays the jobs for initial OMS setup to import all products and orders.​



**This page contains jobs such as:**

1. **Import Products in Bulk:** Import all products from Shopify. Make sure you run this before importing orders in bulk during initial setup.
2. **Import Orders in Bulk:** Before importing historical orders in bulk, make sure all products are set up or else order import will not run correctly.

</details>

<details>

<summary>Pre-order</summary>

Holds the Preorders and Backorders jobs.



**This page contains jobs such as:**&#x20;

1. **Auto refresh presell catalog:** Automatically add and remove products from the pre-order and backorder catalogs based on inventory, purchase orders, and order queues.
2. **Sync variant details:** Sync pre-selling related information to Shopify as tags and meta fields.
3. **Add tags:** Add pre-order/backorder tags on orders with pre-selling items in them.
4. **Add promise date:** Add a note with the promise date given to the customer at the time of placing the order.
5. **Update promise date:** Add notes to the impacted order items on Shopify for changes promise dates.
6. **Promise date change:** Notify customers of any changed promise dates for their orders.
7. **Auto releasing:** Auto releasing pre-orders will find pre-orders with passed promise dates and release them for fulfillment.

</details>

<details>

<summary>Orders</summary>

Holds all order jobs.



**This page contains jobs such as:**&#x20;

1. **New orders:** Import new orders from eCommerce.
2. **Approve orders:** Check all orders and approve orders that are created.
3. **Update orders:** Import order updates from eCommerce.
4. **Cancelled orders:** Check eCommerce for orders that have been canceled and cancel them in HotWax Commerce.
5. **Cancelled items:** Check eCommerce for order items that have been canceled and cancel them in HotWax Commerce without canceling the entire order.
6. **Returns:** Check eCommerce for orders that have been returned and create a return for them in HotWax Commerce. Returned orders are also restocked if inventory is damaged, make sure to log a Damaged variance.

</details>

<details>

<summary>Brokering</summary>

Holds all brokering jobs and occurrence.



**This page contains jobs such as:**&#x20;

1. **Create new brokering:** Schedule a new brokering batch on new or unfulfilled orders.
2. **Rejected orders brokering:** Schedule a brokering batch for rejected orders.

</details>

<details>

<summary>Fulfillment</summary>

Holds all fulfillment jobs.&#x20;



**This page contains jobs such as:**&#x20;

1. **Shipping:** Automatically ship orders that are packed and have a tracking number if required.
2. **History:** Create or update order fulfillment history records from FTP.
3. **Auto cancellations:** Unfulfilled orders that pass their auto cancelation date will be canceled automatically in HotWax Commerce. They will also be canceled in Shopify if upload for canceled orders is enabled.

</details>

<details>

<summary>Inventory </summary>

Holds all inventory jobs.&#x20;



**This page contains jobs such as:**&#x20;

1. **Export thresholds:** Export a list of product thresholds based on tags and categories
2. **Inventory variance:** Import inventory variance and adjust inventory
3. **Import thresholds:** Import a list of product thresholds based on tags and categories
4. **Sync inventory from Shopify:** Sync Inventory From Shopify
5. **Upload recent inventory change:** Upload recent inventory changes to eCommerce.

</details>

<details>

<summary>Products</summary>

Holds all product jobs.&#x20;



**This page contains jobs such as:**&#x20;

1. **Sync:** Sync products and category structures from Shopify into HotWax Commerce and keep them up to date.

</details>

<details>

<summary>Miscellaneous</summary>

Holds all uncategorised jobs

</details>



***

## Webhooks

{% hint style="info" %}
Webhooks can be subscribed to from the category pages within the Job Manager app for specific categories.
{% endhint %}

Automated messages sent from eCommerce (Shopify) to OMS whenever an event occurs. They contain data about the event and are received in OMS, allowing real time communication between eCommerce and OMS.



**Subscribe to Shopify eCommerce Webhooks from OMS for:**

<details>

<summary>Orders</summary>



**Webhooks available for:**&#x20;

1. New Orders
2. Cancelled orders
3. Payment status
4. Returns

</details>

<details>

<summary>Inventory</summary>



**Webhooks available for:**&#x20;

Inventory level update

</details>

<details>

<summary>Products</summary>



**Webhooks available for:**&#x20;

1. New products
2. Delete products

</details>

