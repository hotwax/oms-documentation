## Upload Inventory

- **Job ID:** JOB_UL_INV
- **Job Name:** Hard sync or Upload Inventory

### Description

The Upload Inventory job is designed to facilitate the upload of new inventory levels to the eCommerce platform for all the products. This job is crucial for keeping product availability up-to-date and ensuring accurate inventory representation on the eCommerce platform.

### Recommended Frequency

The job frequency can be configured based on the business needs and the desired frequency of updating inventory levels.

### Troubleshooting Use Case

This is a regular flow which do not have any troubleshooting scenarios.

### Custom Parameters

| **Parameter**   | **Type** | **Description**                                     | **Default Value** | **Example Value** |
|------------------|----------|-----------------------------------------------------|-------------------|-------------------|
| **`includeAll`** | Optional  | Specifies whether to include all inventory levels. | true              | false             |

---

## Import Inventory

- **Job ID:** JOB_IMP_INV
- **Job Name:** Import Inventory

### Description

The Import Inventory job is designed to import inventory from the ERP (Enterprise Resource Planning) system. This job plays a crucial role in keeping the inventory information synchronized between the ERP and the OMS.

### Recommended Frequency

The job frequency can be configured based on the business needs and the frequency of updates from the ERP system.

### Troubleshooting Use Case

**Issue 1:** Inventory is not updating as expected.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Check the configuration settings to ensure they align with the ERP system's requirements.
2. Verify that the provided file (matching the fileNameRegex) contains accurate and valid inventory data.

### Custom Parameters

| **Parameter**            | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|--------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`propertyResource`**   | Required   | Specifies the property resource for configuring FTP.    | FTP_CONFIG        | FTP_CONFIG          |
| **`fileNameRegex`**      | Optional   | Specifies the regular expression for matching file names.| *.csv             | *.csv               |
| **`configId`**           | Required   | Specifies the configuration ID for importing inventory. | RESET_INVENTORY   | RESET_INVENTORY     |
| **`remoteFilename`**   | Optional   | Specifies the remote filename for the job.              | Not specified     | sample_file.txt     |
| **`groupBy`**            | Optional   | Specifies the grouping parameter for inventory.          | facilityId        | facilityId          |
| **`locationSeqId`**      | Optional   | Specifies the location sequence ID for inventory import. | TLTLTLLL01        | TLTLTLLL01         |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.     | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`fileNameRegex`**    | Optional   | Specifies the regular expression for matching file names.| Not specified     | *.csv               |
| **`scheduleNow`**      | Optional  | Specifies whether to schedule the job for immediate processing. | false       | true                |

---

## Import Inbound Shipment

- **Job ID:** JOB_IMP_TO_SHPMNT
- **Job Name:** Import Inbound Shipment

### Description

The Import Inbound Shipment job is designed to import information about inbound shipments associated with fulfilled transfer orders. This job is crucial for maintaining accurate records of incoming shipments, facilitating efficient order fulfillment.

### Recommended Frequency

The job frequency can be configured based on the business needs and the frequency of inbound shipments for fulfilled transfer orders.

### Troubleshooting Use Case

**Issue 1:** Inbound shipment information is not updating as expected.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Check the configuration settings to ensure they align with the FTP configuration.

### Custom Parameters

| **Parameter**            | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|--------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`propertyResource`**   | Required   | Specifies the property resource for configuring FTP.    | FTP_CONFIG        | FTP_CONFIG          |
| **`configId`**           | Required   | Specifies the configuration ID for importing inbound shipments. | IMP_TO_SHPMNT | IMP_TO_SHPMNT       |
| **`remoteFilename`**   | Optional   | Specifies the remote filename for the job.              | Not specified     | sample_file.txt     |
| **`groupBy`**          | Optional   | Specifies the grouping parameter for the job.           | Not specified     | category            |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.     | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`fileNameRegex`**    | Optional   | Specifies the regular expression for matching file names.| Not specified     | *.csv               |
| **`scheduleNow`**      | Optional  | Specifies whether to schedule the job for immediate processing. | false       | true                |

---

## Export Product Thresholds

- **Job ID:** EXP_PROD_THOLD
- **Job Name:** Export Product Thresholds

### Description

The Export Product Thresholds job is designed to export a list of product thresholds based on specified tags and categories. This job is essential for obtaining insights into product stock levels and ensuring inventory management aligns with defined thresholds.

### Recommended Frequency

The job frequency can be configured based on the business needs and the frequency of updates required for product thresholds.

### Troubleshooting Use Case

**Issue 1:** Exported product thresholds do not include all relevant items.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Check the configuration settings to ensure they align with the FTP export configuration.
   
### Custom Parameters

| **Parameter**              | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|----------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`facilityId`**           | String   | Specifies the facility ID for exporting product thresholds. | null            | FCTY-001            |
| **`propertyResource`**     | String   | Specifies the property resource for configuring FTP export. | FTP_EXP_CONFIG    | FTP_EXP_CONFIG      |
| **`threshold`**            | String   | Specifies the threshold value for exporting products.    | null              | 10 units            |
| **`includeAll`**           | Boolean  | Specifies whether to include all products in the export. | null              | true                |
| **`searchPreferenceId`**   | String   | Specifies the search preference ID for customizing product search. | null        | SEARCH_PREF_001    |


---

## Import Product Thresholds

- **Job ID:** IMP_PROD_THOLD
- **Job Name:** Import Product Thresholds
  
### Description

The Import Product Thresholds job, identified by Job ID IMP_PROD_THOLD, is designed to import a list of product thresholds based on specified tags and categories. This job is essential for updating product stock levels and ensuring that inventory management aligns with defined thresholds.

### Recommended Frequency

The job frequency can be configured based on the business needs and the frequency of updates required for product thresholds.

### Troubleshooting Use Case

**Issue 1:** Imported product thresholds do not update as expected.

**Possible Causes:** Configuration or Data Issues

**Resolution Steps:**
1. Check the configuration settings to ensure they align with the FTP import configuration.

### Custom Parameters

| **Parameter**              | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|----------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`configId`**             | String   | Specifies the configuration ID for importing product thresholds. | IMP_PROD_THOLD | IMP_PROD_THOLD    |
| **`propertyResource`**   | Required   | Specifies the property resource for configuring FTP.    | FTP_CONFIG        | FTP_CONFIG          |
| **`configId`**           | Required   | Specifies the configuration ID for importing inbound shipments. | IMP_TO_SHPMNT | IMP_TO_SHPMNT       |
| **`remoteFilename`**   | Optional   | Specifies the remote filename for the job.              | Not specified     | sample_file.txt     |
| **`groupBy`**          | Optional   | Specifies the grouping parameter for the job.           | Not specified     | category            |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.     | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`fileNameRegex`**    | Optional   | Specifies the regular expression for matching file names.| Not specified     | *.csv               |
| **`scheduleNow`**      | Optional  | Specifies whether to schedule the job for immediate processing. | false       | true                |

---

## Sync Inventory From Shopify in Multi-Threading

- **Job ID:** SYNC_INV_SHPF_MLTTHD
- **Job Name:** Sync Inventory From Shopify in Multi-Threading
  
### Description

The Sync Inventory From Shopify in Multi-Threading job is designed to synchronize inventory from Shopify, utilizing multi-threading for enhanced efficiency. This job is crucial for maintaining accurate inventory levels and ensuring seamless integration with the Shopify platform.

### Recommended Frequency

The job frequency can be configured based on the business needs and the frequency of updates required for inventory synchronization.

### Troubleshooting Use Case

**Issue 1:** Inventory synchronization from Shopify is incomplete.

**Possible Causes:** Multi-Threading Configuration

**Resolution Steps:**
1. Check the configuration settings related to multi-threading to ensure optimal performance.
2. Review the `fileNameRegex` parameter to make sure it matches the expected file format.

### Custom Parameters

| **Parameter**          | **Type** | **Description**                                         | **Default Value** | **Example Value**   |
|------------------------|----------|---------------------------------------------------------|-------------------|---------------------|
| **`propertyResource`** | String   | Specifies the property resource for configuring FTP synchronization. | FTP_CONFIG    | FTP_CONFIG          |
| **`fileNameRegex`**    | String   | Specifies the regular expression for matching file names during synchronization. | *.csv     | *.csv                |
| **`configId`**         | String   | Specifies the configuration ID for the multi-threaded inventory synchronization. | SYNC_INV_SHPF_MLTTHD | SYNC_INV_SHPF_MLTTHD|
| **`groupBy`**          | String   | Specifies the grouping parameter for multi-threading, such as `location_id`. | Not specified | location_id          |
| **`additionalParameters`** | Optional | Specifies additional parameters for customization.     | Not specified     | { "param1": "value1", "param2": "value2" } |
| **`remoteFilename`**   | Optional   | Specifies the remote filename for the job.              | Not specified     | sample_file.txt     |
| **`scheduleNow`**      | Optional  | Specifies whether to schedule the job for immediate processing. | false       | true                |

