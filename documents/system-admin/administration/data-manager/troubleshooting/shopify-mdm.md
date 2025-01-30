# Shopify MDM

Hotwax Commerce facilitates the import and export of data with Shopify, including products, orders, and inventory, through automated jobs scheduled at regular intervals. However, occasional failures in processing may occur due to system errors or unsupported file formats. In such cases, the operations team overseeing order management receives notifications of these failures. To address these issues effectively, identifying the root cause is crucial, often achieved by examining the error logs.

## Accessing MDM Pages

To access the logs for import and export jobs, navigate to the MDM (Master Data Management) > EXIM (Export-Import) page from the Hamburger menu. Here, under the Shopify section, various MDM pages display the processes between Shopify and Hotwax Commerce. These pages include:

* **Shopify GraphQL job:** Records all GraphQL files uploaded from Hotwax Commerce to Shopify for API calls like adding pre-order catalogs or tags.
* **Shopify Order MDM:** Contains files generated from Shopify for importing orders into Hotwax Commerce.
* **Shopify Order Return:** Covers all created order returns.
* **Shopify Product MDM:** Includes all product import files generated from Shopify.
* **Shopify Inventory Sync MDM:** Lists files for inventory changes from Hotwax Commerce to Shopify.
* **Shopify Cancel Order Import MDM:** Displays details of all canceled orders from Shopify to Hotwax Commerce.
* **Shopify Fulfilled Item MDM:** Provides information on all fulfilled items feeds generated from Hotwax Commerce to mark items as fulfilled in Shopify.

## Monitoring and Troubleshooting

These MDM pages serve as a central location where users can check the status of each job, track uploaded files, and monitor processing tasks. Indicators show job statuses, indicating completed processes and those still processing.

After a job completes, users can access logs documenting every step of the data transfer. These logs provide insight into import-export operations, helping users identify where errors occurred.

If a job fails, users can identify problematic records in the log interface, facilitating troubleshooting and error resolution.



<figure><img src="../.gitbook/assets/Shopify MDM (2).png" alt=""><figcaption><p>Shopify MDM</p></figcaption></figure>
