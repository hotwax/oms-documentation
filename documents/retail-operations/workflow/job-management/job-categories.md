---
description: >-
  Jobs are categorized based on their operations, ensuring that related
  operations are grouped together for efficient configuration.
---

# Job categories

## Categories

<details>

<summary>Initial load (legacy)</summary>

This category may remain visible on an existing tenant, but its bulk product and order jobs are not the current Shopify onboarding procedure. Do not use it to configure a new standard launch.

[Set up HotWax Commerce with Shopify](../../../system-admin/administration/company/product-store-onboarding.md)

</details>

<details>

<summary>Pre-order</summary>

Holds the Pre-orders and Backorders jobs.

**This page contains jobs such as:**

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

**This page contains jobs such as:**

1. **New orders:** Import new orders from eCommerce.
2. **Approve orders:** Check all orders and approve orders that are created.
3. **Update orders:** Import order updates from eCommerce.
4. **Cancelled orders:** Check eCommerce for orders that have been canceled and cancel them in HotWax Commerce.
5. **Cancelled items:** Check eCommerce for order items that have been canceled and cancel them in HotWax Commerce without canceling the entire order.
6. **Returns:** Check eCommerce for orders that have been returned and create a return for them in HotWax Commerce. Returned orders are also restocked if inventory is damaged, make sure to log a Damaged variance.

</details>

<details>

<summary>Fulfillment</summary>

Holds all fulfillment jobs.

**This page contains jobs such as:**

1. **Shipping:** Automatically ship orders that are packed and have a tracking number if required.
2. **History:** Create or update order fulfillment history records from FTP.
3. **Auto cancellations:** Unfulfilled orders that pass their auto cancellation date will be canceled automatically in HotWax Commerce. They will also be canceled in Shopify if upload for canceled orders is enabled.

</details>

<details>

<summary>Inventory</summary>

Holds all inventory jobs.

**This page contains jobs such as:**

1. **Export thresholds:** Export a list of product thresholds based on tags and categories
2. **Inventory variance:** Import inventory variance and adjust inventory
3. **Import thresholds:** Import a list of product thresholds based on tags and categories
4. **Sync inventory from Shopify:** Sync Inventory From Shopify
5. **Upload recent inventory change:** Upload recent inventory changes to eCommerce.

</details>

<details>

<summary>Products</summary>

Holds product-related operational jobs.

Current Shopify product onboarding and recurring synchronization use Product Sync in the Company App. Job names visible on older or specialized tenants are release-specific and are not a substitute for the Product Sync procedure.

[Monitor Shopify product sync](../../../system-admin/administration/company/manage-shopify-product-sync.md)

</details>

<details>

<summary>Miscellaneous</summary>

Holds all uncategorised jobs

</details>

***
