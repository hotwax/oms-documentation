---
description: >-
  Learn about the Products job in HotWax Commerce.
---

# Products

## Sync

### Import Products

**Job Name:** `Import New Products`

**Job Enum ID:** `JOB\_IMP\_PROD\_NEW`

**Description**

The Import New Products job is designed to import new products from eCommerce or Product Information Management systems. This job is crucial for keeping your product catalog updated with the latest additions and ensuring accurate representation on your platform.

**Recommended Frequency**

The job frequency is set to run every 15 minutes by default. You may adjust this frequency based on the frequency of new product additions and the desired update interval for your product catalog.

**Custom Parameters**

| **Parameter**         | **Type** | **Description**                                                                                | **Default Value** | **Example Value** |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------- | ----------------- | ----------------- |
| **`shopifyConfigId`** | String   | Specifies the configuration ID for Shopify, if applicable.                                     | null              | SHOP\_CONFIG\_001 |
| **`limit`**           | Integer  | Sets a limit on the number of products to import per job run.                                  | 100               | 50                |
| **`frequency`**       | Integer  | Defines the default duration for syncing products if there is no `Last Sync Time`.             | 15 minutes        | 10 minutes        |
| **`bufferTime`**      | Integer  | Specifies the buffer time (in minutes) for scheduling job downloads.                           | Not specified     | 5                 |
| **`scheduleNow`**     | Boolean  | When set to true, forces the system to pick the file out of sequence for immediate processing. | false             | true              |

<figure><img src="../.gitbook/assets/import new products.png" alt="" width="375"><figcaption></figcaption></figure>


### Sync Products

**Job Name:** `Import Product Updates`

**Job Enum ID:** `JOB\_IMP\_PROD\_UPD`

**Description**

The Import Product Updates job is designed to update existing products from eCommerce or Product Information Management (PIM) systems. This job ensures that your product information stays current and reflects any changes made in the source system.

**Recommended Frequency**

The job frequency is set to run every 15 minutes by default. Adjust the frequency based on the update frequency of your product data in the eCommerce or PIM system.

**Custom Parameters**

| **Parameter**         | **Type** | **Description**                                                                                | **Default Value** | **Example Value** |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------- | ----------------- | ----------------- |
| **`shopifyConfigId`** | String   | Specifies the configuration ID for Shopify, if applicable.                                     | null              | SHOP\_CONFIG\_001 |
| **`limit`**           | Integer  | Sets a limit on the number of products to import per job run.                                  | 100               | 50                |
| **`frequency`**       | Integer  | Defines the default duration for syncing products if there is no `Last Sync Time`.             | 15 minutes        | 10 minutes        |
| **`bufferTime`**      | Integer  | Specifies the buffer time (in minutes) for scheduling job downloads.                           | Not specified     | 5                 |
| **`scheduleNow`**     | Boolean  | When set to true, forces the system to pick the file out of sequence for immediate processing. | false             | true              |

<figure><img src="../.gitbook/assets/Import product Update.png" alt="" width="375"><figcaption></figcaption></figure>


## Webhooks

{% hint style="info" %}
Webhooks can be subscribed to from the category pages within the Job Manager app for specific categories.
{% endhint %}

Automated messages sent from eCommerce (Shopify) to OMS whenever an event occurs. They contain data about the event and are received in OMS, allowing real time communication between eCommerce and OMS.

**Subscribe to Shopify eCommerce Webhooks from OMS for:**

<details>

<summary>Products</summary>

**Webhooks available for:**

1. New products
2. Delete products

</details>

## More Jobs

### Import Kit Components

**Job Name:** `Import kit components`

**Job Enum ID:** `IMP\_KIT\_METAFIELD`

**Description**

The `Import Kit Product Components` job is specifically designed to import components of kit products from an external system. This job ensures that kit product components are accurately reflected in the Order Management System (OMS).

**Recommended Frequency**

The frequency of running this job depends on the frequency of updates or changes to kit product components. It is recommended to run this job as needed based on changes in the external system.

**Custom Parameters**

| **Parameter**              | **Type** | **Description**                                                      | **Default Value**       | **Example Value**         |
| -------------------------- | -------- | -------------------------------------------------------------------- | ----------------------- | ------------------------- |
| **`shopifyConfigId`**      | String   | Specifies the configuration ID for Shopify.                          | null                    | SHOPIFY\_CONFIG\_001      |
| **`configId`**             | String   | Specifies the configuration ID for importing kit product components. | BULK\_IMP\_VARIANTS\_MF | KIT\_COMP\_IMPORT\_CONFIG |
| **`productVariantsQuery`** | String   | Specifies the query to identify kit products.                        | product\_type: Kit      | category: Bundle          |
| **`namespaces`**           | String   | Specifies the namespaces for kit product components.                 | bundles\_app            | kit\_components           |


### Import Promo Code

**Job Name:** `Import Promo Code`

**Job Enum ID:** `JOB\_IMP\_PRMO\_CODE`

**Description**

The `Import Promo Code` job is designed to import promotional codes into the system. This job is essential for managing and updating promotional offers on your platform.

**Recommended Frequency**

The frequency for running this job depends on the frequency of updates to your promotional codes. Adjust the frequency accordingly to ensure timely and accurate updates.


**Custom Parameters**

| **Parameter**              | **Type** | **Description**                                                                  | **Default Value** | **Example Value**                          |
| -------------------------- | -------- | -------------------------------------------------------------------------------- | ----------------- | ------------------------------------------ |
| **`propertyResource`**     | String   | Specifies the property resource for the FTP configuration.                       | FTP\_CONFIG       | SFTP\_CONFIG\_001                          |
| **`configId`**             | String   | Specifies the configuration ID for importing promo codes.                        | IMP\_PRMO\_CODE   | PROMO\_CONFIG\_001                         |
| **`fileNameRegex`**        | String   | Specifies the regular expression for matching file names during synchronization. | \*.csv            | \*.csv                                     |
| **`groupBy`**              | String   | Specifies the grouping parameter for multi-threading, such as `location_id`.     | Not specified     | location\_id                               |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.                               | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`remoteFilename`**       | Optional | Specifies the remote filename for the job.                                       | Not specified     | sample\_file.txt                           |
| **`scheduleNow`**          | Optional | Specifies whether to schedule the job for immediate processing.                  | false             | true                                       |

<figure><img src="../.gitbook/assets/Import Promo code.png" alt="" width="375"><figcaption></figcaption></figure>


### Product Identification

**Job Name:** `Product Identification`

**Job Enum ID:** `JOB\_PROD\_IDENT`

**Description**

The `Product Identification` job, identified by Job ID JOB\_PROD\_IDENT, is designed to create or update GoodIdentification records for products. This job is crucial for maintaining accurate identification and synchronization of product information across systems.

**Recommended Frequency**

The frequency for running this job depends on the frequency of updates to product identifications. Adjust the frequency accordingly to ensure timely and accurate updates.

**Custom Parameters**

| **Parameter**                                       | **Type** | **Description**                                                              | **Default Value** | **Example Value**        |
| --------------------------------------------------- | -------- | ---------------------------------------------------------------------------- | ----------------- | ------------------------ |
| **`propertyResource`**                              | String   | Specifies the property resource for the FTP configuration.                   | FTP\_CONFIG       | SFTP\_CONFIG\_001        |
| **`configId`**                                      | String   | Specifies the configuration ID for importing product identifications.        | IMP\_PROD\_IDENT  | PROD\_IDENT\_CONFIG\_001 |
| **`additionalParameters.idType`**                   | String   | Specifies the type of identification used (e.g., SHOPIFY\_PROD\_ID).         | Not specified     | SHOPIFY\_PROD\_ID        |
| **`additionalParameters.goodIdentificationTypeId`** | String   | Specifies the type of GoodIdentification (e.g., NETSUITE\_PRODUCT\_ID).      | Not specified     | NETSUITE\_PRODUCT\_ID    |
| **`groupBy`**                                       | String   | Specifies the grouping parameter for multi-threading, such as `location_id`. | Not specified     | location\_id             |
| **`remoteFilename`**                                | Optional | Specifies the remote filename for the job.                                   | Not specified     | sample\_file.txt         |
| **`groupBy`**                                       | String   | Specifies the grouping parameter for multi-threading, such as `location_id`. | Not specified     | location\_id             |

***

<figure><img src="../.gitbook/assets/Product identification.png" alt="" width="375"><figcaption></figcaption></figure>


### Activate Products on Shopify

**Job Name:** `Activate products on Shopify`

**Job Enum ID:** `JOB_ACT_PROD_SHPFY`

**Description**  
The `Activate Products on Shopify` job synchronizes activated products, such as gift cards, from HotWax Commerce to Shopify. Gift cards, as stored-value products, must be activated to ensure customers can redeem them upon receipt. This job ensures that once gift cards are activated in HotWax Commerce, the activation codes are automatically synced to Shopify, making them immediately redeemable for customers.

**Custom Parameters**

| **Parameter**  | **Type**   | **Description**                                                             | **Default Value** |
|----------------|------------|-----------------------------------------------------------------------------|-------------------|
| `facilityids`  | Optional   | Identifies the configuration for Order Item Attribute records.              | `Not specified`   |
| `productId`    | Optional   | Specifies the property resource for configuration.                          | `Not specified`   |
| `idType`       | Optional   | Specifies the remote filename for processing.                               | `Not specified`   |
| `iDValue`      | Optional   | Specifies a grouping parameter for the job.                                 | `Not specified`   |
| `limit`        | Optional   | Additional parameters for job customization.                                | `Not specified`   |


### Associate Products with Sub Catalog

**Job Name:** `Associate products with sub catalog`

**Job Enum ID:** `JOB\_UPD\_PROD\_ASSOC`

**Description**

The job identified by Job ID `JOB_UPD_PROD_ASSOC` is specifically crafted to link products within a child product catalog (typically a non-master catalog) with those in the master product catalog in OMS. This process is vital for ensuring accurate product associations across multiple Shopify stores utilizing the same product catalog, thereby enhancing consistency in the system.

**Recommended Frequency**

The recommended frequency for running this job is every 60 minutes. Adjust the frequency based on the frequency of updates or changes to product associations.

**Custom Parameters**

| **Parameter**     | **Type** | **Description**                                                                                                                                                                                                                      | **Default Value**      | **Example Value**        |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ------------------------ |
| **`configId`**    | String   | Specifies the configuration ID for updating product associations.                                                                                                                                                                    | IMP\_SHPFY\_SHOP\_PROD | ASSOC\_PROD\_CONFIG\_001 |
| **`frequency`**   | Integer  | Specifies the frequency (in minutes) for running the job.                                                                                                                                                                            | 60                     | 30                       |
| **`limit`**       | Optional | Sets a limit on the order import job, restricting the number of orders fetched from eCommerce.                                                                                                                                       | Not specified          | 100                      |
| **`bufferTime`**  | Optional | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in eCommerce platforms.                                                                                        | Not specified          | 30 minutes               |
| **`scheduleNow`** | Optional | When importing files into the OMS, force the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Enabled                | false                    |

***

<figure><img src="../.gitbook/assets/Associate product sub catalog.png" alt="" width="375"><figcaption></figcaption></figure>


### Remove Promo Code

**Job Name:** `Remove Promo Code`

**Job Enum ID:** `JOB\_RMV\_PRMO\_CODE`

**Description**

The Remove Promo Code job, identified by Job ID JOB\_RMV\_PRMO\_CODE, is designed to remove promotional codes from the system. This job is crucial for maintaining an accurate and up-to-date list of active promotional offers on your platform.

**Recommended Frequency**

The frequency for running this job depends on the removal frequency of your promotional codes. Adjust the frequency accordingly to ensure timely and accurate removals.

**Custom Parameters**

| **Parameter**              | **Type** | **Description**                                                                  | **Default Value**    | **Example Value**                          |
| -------------------------- | -------- | -------------------------------------------------------------------------------- | -------------------- | ------------------------------------------ |
| **`propertyResource`**     | String   | Specifies the property resource for the FTP configuration.                       | FTP\_CONFIG          | SFTP\_CONFIG\_001                          |
| **`configId`**             | String   | Specifies the configuration ID for removing promo codes.                         | IMP\_RMV\_PRMO\_CODE | PROMO\_CONFIG\_002                         |
| **`fileNameRegex`**        | String   | Specifies the regular expression for matching file names during synchronization. | \*.csv               | \*.csv                                     |
| **`groupBy`**              | String   | Specifies the grouping parameter for multi-threading, such as `location_id`.     | Not specified        | location\_id                               |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.                               | Not specified        | { "param1": "value1", "param2": "value2" } |
| **`remoteFilename`**       | Optional | Specifies the remote filename for the job.                                       | Not specified        | sample\_file.txt                           |
| **`scheduleNow`**          | Optional | Specifies whether to schedule the job for immediate processing.                  | false                | true                                       |

<figure><img src="../.gitbook/assets/Remove promo Code.png" alt="" width="375"><figcaption></figcaption></figure>

