## Import New Products

- **Job ID:** JOB_IMP_PROD_NEW
- **Job Name:** Import New Products

### Description

The Import New Products job is designed to import new products from eCommerce or Product Information Management systems. This job is crucial for keeping your product catalog updated with the latest additions and ensuring accurate representation on your platform.

### Recommended Frequency

The job frequency is set to run every 15 minutes by default. You may adjust this frequency based on the frequency of new product additions and the desired update interval for your product catalog.

### Troubleshooting Use Case

**Issue 1:** New products are not appearing in the catalog after import.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Check the configuration settings to ensure they align with the eCommerce or PIM system.
2. Verify that the `limit` parameter is set appropriately, allowing the import of the desired number of products.

### Custom Parameters

| **Parameter**          | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`shopifyConfigId`**  | String   | Specifies the configuration ID for Shopify, if applicable. | null            | SHOP_CONFIG_001     |
| **`limit`**            | Integer  | Sets a limit on the number of products to import per job run. | 100             | 50                  |
| **`frequency`**        | Integer  | Defines the default duration for syncing products if there is no `Last Sync Time`. | 15 minutes | 10 minutes          |
| **`bufferTime`**       | Integer  | Specifies the buffer time (in minutes) for scheduling job downloads. | Not specified | 5                 |
| **`scheduleNow`**      | Boolean  | When set to true, forces the system to pick the file out of sequence for immediate processing. | false | true              |

---

## Import Product Updates

- **Job ID:** JOB_IMP_PROD_UPD
- **Job Name:** Import Product Updates

### Description

The Import Product Updates job is designed to update existing products from eCommerce or Product Information Management (PIM) systems. This job ensures that your product information stays current and reflects any changes made in the source system.

### Recommended Frequency

The job frequency is set to run every 15 minutes by default. Adjust the frequency based on the update frequency of your product data in the eCommerce or PIM system.

### Troubleshooting Use Case

**Issue 1:** Updated product information is not reflected in the catalog.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Verify that the `frequency` parameter aligns with the intended update frequency of your product data.
2. Check the configuration settings to ensure they align with the eCommerce or PIM system.

### Custom Parameters

| **Parameter**          | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`shopifyConfigId`**  | String   | Specifies the configuration ID for Shopify, if applicable. | null            | SHOP_CONFIG_001     |
| **`limit`**            | Integer  | Sets a limit on the number of products to import per job run. | 100             | 50                  |
| **`frequency`**        | Integer  | Defines the default duration for syncing products if there is no `Last Sync Time`. | 15 minutes | 10 minutes          |
| **`bufferTime`**       | Integer  | Specifies the buffer time (in minutes) for scheduling job downloads. | Not specified | 5                 |
| **`scheduleNow`**      | Boolean  | When set to true, forces the system to pick the file out of sequence for immediate processing. | false | true              |

---

## Import Promo Code

- **Job ID:** JOB_IMP_PRMO_CODE
- **Job Name:** Import Promo Code

### Description

The Import Promo Code job is designed to import promotional codes into the system. This job is essential for managing and updating promotional offers on your platform.

### Recommended Frequency

The frequency for running this job depends on the frequency of updates to your promotional codes. Adjust the frequency accordingly to ensure timely and accurate updates.

### Troubleshooting Use Case

**Issue 1:** Imported promo codes are not reflecting in the system.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Verify that the configuration settings, including `propertyResource` and `configId`, are correctly specified.

### Custom Parameters

| **Parameter**           | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`propertyResource`** | String   | Specifies the property resource for the FTP configuration. | FTP_CONFIG | SFTP_CONFIG_001   |
| **`configId`**         | String   | Specifies the configuration ID for importing promo codes. | IMP_PRMO_CODE | PROMO_CONFIG_001   |
| **`fileNameRegex`**    | String   | Specifies the regular expression for matching file names during synchronization. | *.csv     | *.csv                |
| **`groupBy`**          | String   | Specifies the grouping parameter for multi-threading, such as `location_id`. | Not specified | location_id          |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.     | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`remoteFilename`**   | Optional   | Specifies the remote filename for the job.              | Not specified     | sample_file.txt     |
| **`scheduleNow`**      | Optional  | Specifies whether to schedule the job for immediate processing. | false       | true                |

---

## Remove Promo Code

- **Job ID:** JOB_RMV_PRMO_CODE
- **Job Name:** Remove Promo Code
  
### Description

The Remove Promo Code job, identified by Job ID JOB_RMV_PRMO_CODE, is designed to remove promotional codes from the system. This job is crucial for maintaining an accurate and up-to-date list of active promotional offers on your platform.

### Recommended Frequency

The frequency for running this job depends on the removal frequency of your promotional codes. Adjust the frequency accordingly to ensure timely and accurate removals.

### Troubleshooting Use Case

**Issue 1:** Promo codes are not being removed as expected.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Verify that the configuration settings, including `propertyResource` and `configId`, are correctly specified.
2. Check the file format and content to ensure it adheres to the expected structure.

### Custom Parameters

| **Parameter**           | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`propertyResource`** | String   | Specifies the property resource for the FTP configuration. | FTP_CONFIG | SFTP_CONFIG_001   |
| **`configId`**         | String   | Specifies the configuration ID for removing promo codes.  | IMP_RMV_PRMO_CODE | PROMO_CONFIG_002   |
| **`fileNameRegex`**    | String   | Specifies the regular expression for matching file names during synchronization. | *.csv     | *.csv                |
| **`groupBy`**          | String   | Specifies the grouping parameter for multi-threading, such as `location_id`. | Not specified | location_id          |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.     | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`remoteFilename`**   | Optional   | Specifies the remote filename for the job.              | Not specified     | sample_file.txt     |
| **`scheduleNow`**      | Optional  | Specifies whether to schedule the job for immediate processing. | false       | true                |

---

## Product Identification

- **Job ID:** JOB_PROD_IDENT
- **Job Name:** Product Identification

### Description

The Product Identification job, identified by Job ID JOB_PROD_IDENT, is designed to create or update GoodIdentification records for products. This job is crucial for maintaining accurate identification and synchronization of product information across systems.

### Recommended Frequency

The frequency for running this job depends on the frequency of updates to product identifications. Adjust the frequency accordingly to ensure timely and accurate updates.

### Troubleshooting Use Case

**Issue 1:** GoodIdentification records are not created or updated as expected.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Verify that the configuration settings, including `propertyResource` and `configId`, are correctly specified.
2. Check the file format and content to ensure it adheres to the expected structure.

### Custom Parameters

| **Parameter**                    | **Type** | **Description**                                                   | **Default Value** | **Example Value**   |
|----------------------------------|----------|-------------------------------------------------------------------|-------------------|---------------------|
| **`propertyResource`**           | String   | Specifies the property resource for the FTP configuration.        | FTP_CONFIG        | SFTP_CONFIG_001     |
| **`configId`**                   | String   | Specifies the configuration ID for importing product identifications. | IMP_PROD_IDENT  | PROD_IDENT_CONFIG_001 |
| **`additionalParameters.idType`**| String   | Specifies the type of identification used (e.g., SHOPIFY_PROD_ID). | Not specified     | SHOPIFY_PROD_ID     |
| **`additionalParameters.goodIdentificationTypeId`** | String   | Specifies the type of GoodIdentification (e.g., NETSUITE_PRODUCT_ID). | Not specified | NETSUITE_PRODUCT_ID |
| **`groupBy`**          | String   | Specifies the grouping parameter for multi-threading, such as `location_id`. | Not specified | location_id          |
| **`remoteFilename`**   | Optional   | Specifies the remote filename for the job.              | Not specified     | sample_file.txt     |
| **`groupBy`**          | String   | Specifies the grouping parameter for multi-threading, such as `location_id`. | Not specified | location_id          |


---

## Associate Products with Sub Catalog

- **Job ID:** JOB_UPD_PROD_ASSOC
- **Job Name:** Associate products with sub catalog


### Description

The job identified by Job ID `JOB_UPD_PROD_ASSOC` is specifically crafted to link products within a child product catalog (typically a non-master catalog) with those in the master product catalog in OMS. This process is vital for ensuring accurate product associations across multiple Shopify stores utilizing the same product catalog, thereby enhancing consistency in the system.

### Recommended Frequency

The recommended frequency for running this job is every 60 minutes. Adjust the frequency based on the frequency of updates or changes to product associations.

### Troubleshooting Use Case

**Issue 1:** Product associations are not being updated as expected.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Verify that the configuration settings, including `configId`, are correctly specified.
2. Check the file format and content to ensure it adheres to the expected structure.

### Custom Parameters

| **Parameter**           | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`configId`**         | String   | Specifies the configuration ID for updating product associations. | IMP_SHPFY_SHOP_PROD | ASSOC_PROD_CONFIG_001 |
| **`frequency`**        | Integer  | Specifies the frequency (in minutes) for running the job. | 60                | 30                |
| **`limit`**       | Optional     | Sets a limit on the order import job, restricting the number of orders fetched from eCommerce.                    | Not specified     | 100               |
| **`bufferTime`**  | Optional     | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in eCommerce platforms. | Not specified | 30 minutes        |
| **`scheduleNow`** | Optional     | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Enabled     | false             |

---

## Import Kit Product Components

- **Job ID:** IMP_KIT_METAFIELD
- **Job Name:** Import kit product components

### Description

The Import Kit Product Components job is specifically designed to import components of kit products from an external system. This job ensures that kit product components are accurately reflected in the Order Management System (OMS).

### Recommended Frequency

The frequency of running this job depends on the frequency of updates or changes to kit product components. It is recommended to run this job as needed based on changes in the external system.

### Troubleshooting Use Case

**Issue 1:** Kit product components are not being imported as expected.

**Possible Causes:** Query or Configuration Issues

**Resolution Steps:**
1. Verify that the `productVariantsQuery` parameter is correctly specified to identify kit products.
2. Check the configuration settings, including the `configId`, to ensure they are accurate.

### Custom Parameters

| **Parameter**                | **Type** | **Description**                                        | **Default Value** | **Example Value**     |
|-----------------------------|----------|--------------------------------------------------------|-------------------|-----------------------|
| **`shopifyConfigId`**       | String   | Specifies the configuration ID for Shopify.             | null              | SHOPIFY_CONFIG_001    |
| **`configId`**              | String   | Specifies the configuration ID for importing kit product components. | BULK_IMP_VARIANTS_MF | KIT_COMP_IMPORT_CONFIG |
| **`productVariantsQuery`**  | String   | Specifies the query to identify kit products.           | product_type: Kit | category: Bundle       |
| **`namespaces`**            | String   | Specifies the namespaces for kit product components.   | bundles_app       | kit_components        |
