# Pre-Order Jobs

Once Purchase orders have successfully been uploaded to HotWax Commerce, the subsequent step involves seamlessly syncing the pre-orders with the e-commerce platform. Merchandisers can set up various jobs in HotWax Commerce to ensure the accurate listing of pre-orders on the e-commerce platform. Some of these jobs are internal to HotWax Commerce and facilitate the creation of jobs within the system.

All Pre-order jobs have a defined frequency of 15 minutes to ensure the smooth running of the process. However, should the merchandiser wish to modify the job frequency, they can do so by following these steps:

1. Navigate to the `Job Manager`> `Pipeline` Page.
2. Utilize the `search` bar at the top of the page to locate the specific job.
3. The desired job card will appear in the results, displaying all the job details, including the last run time, frequency, and other relevant job data.
4. Clicking on the job card reveals a detailed view, offering merchandisers various options to modify the job, such as altering the run time, adjusting the frequency, and adding custom parameters if required.
5. Once the changes are made, merchandisers can save them by clicking on the `save changes` button. This action ensures that all future runs of the job reflect the updated settings. Additionally, if there are no pre-orders, merchandisers can also cancel the job to reduce system load.

## Jobs for Pre-Order Catalog Management in HotWax Commerce

In HotWax Commerce, merchandisers have the option to schedule the `Auto Refresh Pre-sell Catalog` job, which automatically manages the addition or removal of pre-sell products from the HotWax Pre-order/Backorder category. This job checks for new products eligible for pre-order/backorder and adds them to the pre-order catalog based on specific eligibility criteria:

- Status of PO items must be created or approved, ensuring canceled PO items are not considered for Pre-Order.
- Promise date of a PO item must be in the future, guaranteeing that purchase order items will arrive in the future, not from an old PO.
- Current inventory of the item must be 0, indicating it's out of stock and qualified for Pre-Order or backorder.
- If the 'isNewStyle' field of a PO is marked as “yes”, it’s identified as a Pre-Order product; if marked “no”, it's categorized as a backorder product.

Products from purchase orders that don't meet these criteria won't be listed in HotWax Commerce's pre-order catalog. It's important to ensure that purchase order items adhere to these criteria for accurate listing.

Moreover, this job also manages the removal of pre-sell items from the pre-order/backorder category in HotWax Commerce under specific circumstances:

- When all future inventory pre-orders are received.
- When the Purchase Order status changes to “Canceled” or “Completed”.
- Upon physical receipt of inventory at the fulfillment center.
- When the Purchase Order arrival date (promised fulfillment date) has passed.

For more comprehensive details, read our ecommerce integration page.

You can schedule the job by accessing the `Job Manager App` > `Pre-order page` and selecting the `checkbox` next to the `Auto refresh pre-sell catalog` job name.

