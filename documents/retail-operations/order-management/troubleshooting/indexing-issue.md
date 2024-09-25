# Order Indexing Discrepancy

This troubleshooting guide aims to address issues where orders remain stuck in the fulfilment app even after completion or incorrectly appear as created on the find sales orders page when they are completed or approved.

### Issue Scenario

HotWax Commerce utilizes Solr, an open-source enterprise-search platform, to index product orders and other data within its system. The order details page retrieves data directly from the database, while the find order detail page relies on Solr for rapid data retrieval. Solr inconsistencies can lead to discrepancies in displayed information across these pages and apps.

### Troubleshooting Steps

#### 1. Resolving Order Status Discrepancies:

* If an order remains in the created or approved status on the find sales orders page, while it's marked as `completed` in the OMS:
  * Navigate to the order details page and click on the reindex button located near the top of the page, next to the refresh button. This action will index the order correctly.
  * If the issue persists, follow these steps:
    * Go to the settings section, scroll down in the hamburger menu, and select the search admin page.
    * Locate the index operations section at the bottom of the page, which includes the following four boxes:
      * Create order indexes
      * Create product indexes
      * Create user login indexes
      * Create OISGIR indexes

For more details, kindly refer to this [documentation](../../../system-admin/search-admin.md).

#### 2. Correctly Indexing Orders on the "Find Order Details" Page:

* Navigate to the `Find Order Details` page where you can manage order indexing.
* Click the `Create Order Index` button to initiate the indexing process.
* A modal window will appear. Enter the order ID associated with the order you want to index.
* After entering the order ID, click the `Create Order Index` button within the modal window to accurately index the order.
* If no values are entered in the field, all available data will still be indexed automatically.

#### 3. Addressing Fulfillment Issues:

* Click the `Create OISGIR Index` button if an order is encountering fulfillment difficulties.
* In the modal window that appears, enter the order ID associated with the order facing fulfillment issues.
* Once the order ID is entered, click the `Create OISGIR Index` button. Providing only the order ID is sufficient to generate its index; filling out all fields is not necessary.



<figure><img src="../../.gitbook/assets/Order Indexing  Discrepancy 1.png" alt=""><figcaption></figcaption></figure>
