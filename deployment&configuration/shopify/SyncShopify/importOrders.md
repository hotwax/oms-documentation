# Import Orders

## Open and Unfulfilled Orders
To download all open sales orders from a specific period in HotWax Commerce, users can schedule the 'Import Orders in Bulk' job by adding the last Shopify Order ID. This job imports all orders since the last Shopify Order ID, along with details such as order number, customer information, shipping address, billing details, and payment information. 

**To import orders in HotWax Commerce, follow these steps:**

1. Visit [job-manager.hotwax.io](http://job-manager.hotwax.io).
2. Navigate to the Initial Load section.
3. Click on "Import Orders in bulk."
4. Choose the desired run time.
5. Specify the following criteria:
   - Order status: Open
   - Fulfillment status: Unfulfilled
   - Add the Last Shopify Order ID from where you want to import Shopify orders.
6. Initiate the import by clicking the "Run Import" button.
7. Access the Pipeline, specifically the Pending jobs section, to confirm that the job is scheduled as per the selected time.
8. Wait until the job is completed.

Once the job finishes, proceed to the Find Order page and verify that all products have been successfully imported into the system.

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
