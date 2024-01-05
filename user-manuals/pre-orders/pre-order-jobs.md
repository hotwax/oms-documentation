# Pre-order Jobs

Once Purchase Orders have successfully been uploaded to HotWax Commerce, the subsequent step involves seamlessly syncing the pre-orders with the e-commerce platform. Merchandisers can set up various jobs in HotWax Commerce to ensure the accurate listing of pre-orders on the e-commerce platform. Some of these jobs are internal to HotWax Commerce and facilitate the creation of jobs within the system.

All Pre-order jobs have a defined frequency of 15 minutes to ensure the smooth running of the process. However, should the merchandiser wish to modify the job frequency, they can do so by following these steps:

1. Navigate to the `Job Manager`> `Pipeline` Page.
2. Utilize the `search` bar at the top of the page to locate the specific job.
3. The desired job card will appear in the results, displaying all the job details, including the last run time, frequency, and other relevant job data.
4. Clicking on the job card reveals a detailed view, offering merchandisers various options to modify the job, such as altering the run time, adjusting the frequency, and adding custom parameters if required.
5. Once the changes are made, merchandisers can save them by clicking on the `save changes` button. This action ensures that all future runs of the job reflect the updated settings. Additionally, if there are no pre-orders, merchandisers can also cancel the job to reduce system load.

{% embed url="https://youtu.be/KFecL75l5Lk" %}
Schedule Pre-order jobs
{% endembed %}

## Jobs for Pre-Order Catalog Management in HotWax Commerce

In HotWax Commerce, merchandisers have the option to schedule the `Auto Refresh Pre-sell Catalog` job, which automatically manages the addition or removal of pre-sell products from the HotWax Pre-order/Backorder category. This job checks for new products eligible for pre-order/backorder and adds them to the pre-order catalog based on specific eligibility criteria:

* Status of PO items must be created or approved, ensuring canceled PO items are not considered for Pre-Order.
* Promise date of a PO item must be in the future, guaranteeing that purchase order items will arrive in the future, not from an old PO.
* Current inventory of the item must be 0, indicating it's out of stock and qualified for Pre-Order or backorder.
* If the 'isNewProoduct' field of a PO is marked as “yes”, it’s identified as a Pre-Order product; if marked “no”, it's categorized as a backorder product.

Products from purchase orders that don't meet these criteria won't be listed in HotWax Commerce's pre-order catalog. It's important to ensure that purchase order items adhere to these criteria for accurate listing.

Moreover, this job also manages the removal of pre-sell items from the pre-order/backorder category in HotWax Commerce under specific circumstances:

* When all future inventory pre-orders are received.
* When the Purchase Order status changes to “Canceled” or “Completed”.
* Upon physical receipt of inventory at the fulfillment center.
* When the Purchase Order arrival date (promised fulfillment date) has passed.

For more comprehensive details, read our [ecommerce integration page.](https://app.gitbook.com/s/HuLroZUG7riNx5fMTaPy/how-are-pre-orderable-and-backorderable-products-listed-or-delisted-on-shopify/presell-catalog-management)

You can schedule the job by accessing the `Job Manager App` > `Pre-order page` and selecting the `checkbox` next to the `Auto refresh pre-sell catalog` job name.

## Jobs for Synchronizing the Pre-Order Catalog with eCommerce:

To schedule the job, Merchandisers navigate to the `Job Manager` > `Pre Orders` page, where they can schedule the `presell catalog sync` by checking the box next to `Sync variant details`. This job facilitates updates to the Presell catalog on Shopify, working through these steps:

1. HotWax Commerce generates a GraphQL file encapsulating all pre-order-related changes, including promised delivery dates, product categories, and statuses. This file is placed in an SFTP location.
2. Shopify processes these GraphQL files in sequence from the SFTP location to execute the required updates. However, for multiple sequential GraphQL file uploads, Shopify doesn’t fetch the next file automatically. To initiate processing for the subsequent files, Merchandisers should schedule Process Upload jobs in HotWax Commerce through the following steps:

* Navigate to `Job Manager` > `Initial Load` > `Process uploads` card.
* Activate the `File Upload Status` job, which monitors file processing and potential errors via the Shopify webhook.
* Schedule the `Upload Pending Proces`s job to prompt Shopify for the next GraphQL file upon receiving `Upload` Status updates.

<figure><img src="../.gitbook/assets/job-manager.hotwax.io_pre-order (5).png" alt=""><figcaption><p>Process Upload</p></figcaption></figure>

* After confirming the activation of `Process Upload` jobs, Merchandisers can schedule the `presell catalog sync` job. To delve deeper into understanding how pre-orders are listed on Shopify, comprehensive insights are available in our [Shopify Pre-order integration guide.](https://app.gitbook.com/s/HuLroZUG7riNx5fMTaPy/how-are-pre-orderable-and-backorderable-products-listed-or-delisted-on-shopify/presell-catalog-synchronization)

Upon listing all products on Shopify, it's crucial to appropriately tag them with `HC: Preorder` or `HC: Backorder`. This tagging process is easily managed by enabling the checkbox for the `Add pre-order tags` and `Add backorder tags` jobs, running every 15 minutes. These jobs utilize the preorder category in the meta fields to add the suitable tag to the parent product on Shopify.

The HotWax Commerce Preorder PDP app employs tags and meta fields to modify the `Add to Cart` button and display the expected delivery date on Shopify PDP. Products labeled with `HC: Preorder` tags will alter the `Add to Cart` button to `Pre-Order`, while those with `HC: Backorder` tags will display `Backorder`.

Likewise, it's essential to schedule the `Remove pre-order tags` and `Remove backorder tags` jobs to eliminate the `HC: Preorder` and `HC: Backorder` tags when a product is removed from the pre-order catalog.

**Update Pre-Order Category Item Arrival Date**

The `Sync Variant Details` job ensure that if there is any change in the purchase order arrival date the promise dates of the product is also updated on Shopify. However, when there are changes in the arrival dates of the multiple items in the purchase orders, the promise dates need to be first updated in HotWax Commerce pre-sell category. These changes happen through `Update Pre-Order Category Item Arrival Date` job which creates a file and process all the updated date changes in HotWax Commerce category, after this the Sync Variant Details updates the changes on Shopify.

<figure><img src="../.gitbook/assets/job-manager.hotwax.io_pre-order (1).png" alt=""><figcaption></figcaption></figure>

## Jobs for Sales Orders with Pre-Order Items

Ensuring accurate representation of pre-order information and changes in customer sales orders post their e-commerce purchase is crucial. While pre-orders are downloaded alongside regular orders, specific notes are included in these sales orders for easy identification of pre-orders. Here are the various jobs that can be scheduled in HotWax Commerce for managing sales orders with pre-order items:

**Add Pre-order/Backorder Tags**- These jobs assign pre-order/backorder tags to orders containing pre-selling items. This simplifies identification for the operations team. The job is scheduled by selecting the respective checkbox against the `Add Pre-Order Tag` or `Add Backorder Tag`.

**Add Promise Date**- Adding promise dates to sales orders, mirroring the dates provided to customers upon order placement. This job, when activated via checkbox, appends promise date notes to sales orders.

**Update Promise Date**- In cases where promise dates change due to shifts in the arrival date of purchase orders, updates to the promise dates in sales orders are necessary. The `update promise date` job update the promise date notes of the sales orders.

<figure><img src="../.gitbook/assets/job-manager.hotwax.io_pre-order (2).png" alt=""><figcaption><p>Sales order jobs</p></figcaption></figure>

**Adjust ATP on Early PO in Bulk**– Merchandisers frequently handle multiple Purchase Orders for identical SKUs. Sometimes, they might upload a new Purchase Order with an earlier promised date, even if there's an existing Purchase Order for the same SKU in the system. In such cases, reallocating sales orders from the initial Purchase Order to the latest one with an earlier date becomes vital. This ensures that customers who placed pre-orders first are given priority, guaranteeing timely delivery. The task automatically adjusts Purchase Order ATP allocations and reallocates pre-orders accordingly. To schedule this, enable and set up the `Adjust ATP on Early PO in Bulk` job found in the More Jobs section.

<figure><img src="../.gitbook/assets/job-manager.hotwax.io_pre-order (6).png" alt=""><figcaption><p>Adjust ATP on Early PO in Bulk</p></figcaption></figure>

**Auto Sync Date to order-** Merchants can change the promise dates in sales orders if there are any changes in the promise date due to arrival date changes in Purchase order through this job. This job can be scheduled by checking the box against the file name.

**Email Customers**- To efficiently manage customer expectations regarding changes in promised dates, activating the `Email customers` checkbox initiates a job that triggers automatic emails to customers. This action ensures customers are informed whenever there's a modification in the promised date.

<figure><img src="../.gitbook/assets/job-manager.hotwax.io_pre-order (3).png" alt=""><figcaption><p>Update Promise date changes to customers</p></figcaption></figure>
