---
description: >-
  Learn how to start the order sync process between HotWax Commerce and Shopify to easily import open and unfulfilled orders.
---

# Initial Order Sync

## Open and Unfulfilled Orders

To download all open sales orders from a specific period in HotWax Commerce, users can schedule the 'Import Orders in Bulk' job by adding the last Shopify Order ID. This job imports all orders since the last Shopify Order ID, along with details such as order number, customer information, shipping address, billing details, and payment information.

Import the orders:

1. Open Job Manager from the HotWax Commerce Launchpad.
2. Open `Catalog`.
3. Search for `Import Orders in Bulk`.
4. Open the job and review its parameters.
5. Enter the required criteria:
   * Order status: Open
   * Fulfillment status: Unfulfilled
   * Add the Last Shopify Order ID from where you want to import Shopify orders.
6. Select `Run Now`.
7. Open `Run history` and find the new run.
8. Wait for the run to finish.

Once the job finishes, proceed to the Find Order page and verify that all orders have been successfully imported into the system.

See [Manage a job](../../retail-operations/workflow/job-management/jobs/job-details.md) and [Investigate job runs](../../retail-operations/workflow/job-management/jobs/run-history.md).

## Reconcile Order Sync

### Shopify

1. Access the Shopify admin screen
2. Go to the Orders page: https://admin.shopify.com/store/{shopName}/orders
3. Use filters `Open` and `unfulfilled` and you will be presented with the Order Count

### HotWax

To retrieve counts in HotWax, follow these structured steps in the webtools:

1. Go to the web tools and select the Entity list.
2. Locate the `orderHeader` entity.
3. Perform a search by clicking on the `Search` option without applying any filters.
4. The total order count can be found in the search results
