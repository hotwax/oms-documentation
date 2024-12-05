---
description: >-
  Learn how to add Solr indexes in HotWax Commerce to efficiently index product
  orders and other data, enhancing data retrieval and search operations within
  the platform.
---

# SOLR Indexing

Solr is an open-source enterprise-search platform used by HotWax Commerce to index product orders and other data within its system. It provides powerful search capabilities, making it an essential component for efficient data retrieval and search operations within the platform.

Navigate to the `Search Admin` page from the `hamburger menu` to manage Solr indexing in HotWax Commerce. This page is divided into 3 sections:

### Overview Section

Upon accessing the `Search Admin` page, you'll find the `Overview` section, which provides essential details about the Solr indexing configuration for your instance.

* **Host:** This indicates the host location of the Solr index associated with your specific instance. It's crucial to identify where the indexing operations are being performed.
* **Cloud Mode:** This indicates whether the indexes are hosted on the cloud or not. Understanding the hosting environment helps users manage and optimize their indexing setup accordingly.
* **Solr Version:** This displays the version of Solr being utilized. It's important for compatibility and understanding the available features and functionalities.
* **Instance Name:** This identifies the specific instance within HotWax Commerce. It helps users differentiate between multiple instances and manage indexing settings accordingly.

### Core Operations Section

The `Core Operations` feature within HotWax Commerce enables users to manage Solr cores effectively, ensuring optimal performance and organization of their indexed data. In the context of Solr, a core refers to a single index along with its associated transaction log and configuration files. Each core represents a distinct collection of data within the Solr search platform. HotWax Commerce utilizes three different types of cores:

* **shopifyCore:** This core contains all data related to Shopify GraphQL files for pre-order and backorder functions. It serves as the repository for information pertinent to pre-orders and backorders processed through the Shopify integration within HotWax Commerce.
* **enterpriseSearch:** The enterpriseSearch core houses comprehensive data concerning products, orders, and other enterprise-related information. It serves as the primary repository for critical business data, facilitating efficient search and retrieval operations within the HotWax Commerce platform.
* **logInsights:** The logInsights core contains insights derived from system logs, offering valuable information for generating superset reports within HotWax Commerce. It serves as a repository for log data analysis, aiding in performance monitoring, troubleshooting, and reporting activities.

#### Core Management Operations:

* **Refresh Core:** Click on the `Refresh Core` button to update the Solr index with the latest data, ensuring synchronization with system changes or updates.
* **Delete Core:** Use caution when deleting a core, as it permanently removes all associated data. Only delete cores that are no longer in use and ensure the action is intentional.
* **Upload ConfigSet:** Utilize the `Upload ConfigSet` feature to upload configuration files for Solr cores, it only works if there are changes in the Solr config data.
* **Delete all data:** Click on `Delete all data` to remove all indexed data from the selected core while preserving the core structure. This operation is useful for data cleanup or resetting the index.
* **Delete Query:** Enter a specific query to delete selected data from the Solr index, allowing users to remove specific records or subsets of data while retaining the rest of the index intact.

### Index Operations

The "Index Operations" feature within HotWax Commerce is essential for ensuring that data is properly indexed in Solr cores, enabling efficient search functionality within the platform. This feature plays a crucial role in enhancing users' ability to retrieve relevant information quickly and accurately, thereby improving workflow efficiency and decision-making processes.

Follow these steps to create all the indexes for Solr cores:

* **Create Userlogin Index:** Click on the `Create Userlogin Index` button to initiate indexing for user login credentials. Optionally, add a specific user login ID if you want to index data for a particular user. Otherwise, click `Submit` to index all user login data.
* **Create Store Index:** Use the `Create Store Index` button to create an index for product stores in HotWax Commerce. Optionally, insert a specific product store ID to index data for a particular store. Otherwise, click `Submit` to index data for all product stores.
* **Create Product Index:** Click on the `Create Product Index` button to create an index for products downloaded from Shopify. Optionally, specify a time frame to optimize indexing by including only products created within that period. This helps manage and streamline the indexing process for product data.
* **Create Order Index:** Use the `Create Order Index` button to create an index for orders in HotWax Commerce. Optionally, add a specific order ID if you want to index data for a particular order. Otherwise, click `Submit` to index all orders.
* **Create Order Item Ship Group Inventory Reservation (OISGIR) Index:** Click on the `Create Order Item Ship Group Inventory Reservation (OISGIR) Index` button to create an index for reservations against order item ship groups. Optionally, specify parameters such as order ID, order item sequence ID, ship group sequence ID, inventory item ID, or shipment ID to index specific reservation data. Otherwise, click `Submit` to index all reservations.

<figure><img src=".gitbook/assets/Solr Indexing.png" alt=""><figcaption></figcaption></figure>
