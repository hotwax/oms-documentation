
### Orders

##### Import Orders

- **Job Enum ID:** JOB_IMP_ORD
- **Job Name:** Import Orders

##### Description

The Import Orders job is designed to import new orders recently created on eCommerce platforms into HotWax Commerce. New orders are identified by checking those created since the last time the job was executed. If the job is run for the first time, it defaults to orders created in the last 15 minutes from the execution time. This default duration can be adjusted using the "frequency" custom parameter.

##### Recommended Frequency

Importing new orders every 15 minutes is generally sufficient to ensure customers have a grace period for order cancellations and to process expedited orders on time. However:

- **Low Order Volume:** For instances with lower order volume and more demanding fulfillment SLAs, consider increasing the frequency to every five minutes.
- **High Order Volume:** During periods of higher order volume, importing orders every 15 minutes is recommended to leverage HotWax Commerce's bulk import capabilities fully.

##### Common Troubleshooting Use Cases

The Import Orders job is primarily used for the regular flow of orders and is not commonly employed for troubleshooting. Custom parameter descriptions may provide insights into how the job can be adapted for different use cases.

##### Custom Parameters

| **Parameter**    | **Type**     | **Description**                                                                                                   | **Default Value** | **Example Value** |
|-------------------|--------------|-------------------------------------------------------------------------------------------------------------------|-------------------|-------------------|
| **`frequency`**   | Required     | Defines the default duration for syncing orders if there is no `Last Sync Time`.                                 | 15 minutes        | 10                |
| **`limit`**       | Optional     | Sets a limit on the order import job, restricting the number of orders fetched from eCommerce.                    | Not specified     | 100               |
| **`bufferTime`**  | Optional     | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in eCommerce platforms. | Not specified | 30 minutes        |
| **`thruDateBuffer`** | Optional  | Skips Shopify orders created within the specified time interval. For example, if `thruDateBuffer` is set to 1, it implies that orders created in Shopify within the last 1 minute will be skipped during the import process. | Not specified     | 1 m,minute                |
| **`scheduleNow`** | Optional     | When importing files into the OMS, forces the system to pick the file out of sequence for immediate processing. Enabled by default when importing files from FTP, but can be disabled during high-volume syncs for system stability. | Enabled     | false             |

---

##### Import Order Updates from Shopify

- **Job Enum ID:** JOB_IMP_ORD_UPD
- **Job Name:** Import Order Updates from Shopify

##### Description

The Import Order Updates from Shopify job is specifically designed to handle the import of order updates from the eCommerce platform into HotWax Commerce. This job caters to a variety of order modifications, including the addition of new items, changes in item quantities, and the cancellation of items or entire orders.

##### Recommended Frequency

The job is configured to run every 60 minutes, ensuring frequent updates and maintaining synchronization between Shopify and HotWax Commerce.

##### Common troubleshooting Use Case

**Issue 1: Order Updates Not Reflecting in HotWax Commerce**

**Possible Causes:** Job Frequency

**Resolution Steps** 
Review the `frequency` parameter to ensure it aligns with the intended import frequency. Occasional delays may occur in the immediate reflection of order updates when the frequency is set high.

##### Custom Parameters

| **Parameter**    | **Type**     | **Description**                                                                                                   | **Default Value** | **Example Value** |
|-------------------|--------------|-------------------------------------------------------------------------------------------------------------------|-------------------|-------------------|
| **`frequency`**   | Required     | Defines the default duration for syncing orders if there is no `Last Sync Time`.                                 | 60 minutes        | 
| **`bufferTime`**  | Optional     | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in Shopify. | Not specified | 15 minutes        |

---

##### Import Canceled Items

- **Job ID:** JOB_IMP_ITM_CNCL
- **Job Name:** Import Canceled Items

##### Description

The Import Canceled Items job is designed to actively monitor eCommerce platforms for order items that have been canceled. Unlike canceling the entire order, this job specifically targets canceled items and ensures their corresponding status is updated within HotWax Commerce. This job is crucial for maintaining accurate inventory records and order status in HotWax Commerce. By identifying and canceling individual items that have been canceled on the eCommerce platform, it prevents discrepancies and ensures that the system reflects the most up-to-date order information.

##### Recommended frequency

The job is configured to run every 15 minutes, ensuring a regular check for canceled items and prompt updates within HotWax Commerce.

##### Troubleshooting Use Case

**Issue:** Cancelled Order item Not Reflecting in HotWax Commerce

**Possible Causes:** Job Frequency

**Resolution Steps** 
Review the `frequency` parameter to ensure it aligns with the intended import frequency. Occasional delays may occur in the immediate reflection of order updates when the frequency is set high.


##### Custom Parameters

| **Parameter**    | **Type**     | **Description**                                                                                                   | **Default Value** | **Example Value** |
|-------------------|--------------|-------------------------------------------------------------------------------------------------------------------|-------------------|-------------------|
| **`frequency`**   | Required     | Defines the default duration for syncing orders if there is no `Last Sync Time`.                                 | 15 minutes        | 
| **`bufferTime`**  | Optional     | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in Shopify. | Not specified |        |


---

##### Import Order Returns

- **Job ID:** JOB_IMP_RTN
- **Job Name:** Import Order Returns

##### Description

The Import Order Returns job plays a crucial role in managing returned orders seamlessly between eCommerce platforms and HotWax Commerce. This job actively monitors eCommerce platforms to identify orders that have been returned. Subsequently, it initiates the creation of return transactions within HotWax Commerce. In cases where inventory is damaged, the job ensures accurate logging of Damaged variances in HotWax.

- **Return Creation:** The primary function of the job is to create return transactions in HotWax Commerce for orders identified as returned on the eCommerce platform.
  
- **Restocking:** If the inventory is damaged and marked as returnable, the job ensures that returned items are restocked appropriately.

##### Recommended frequency

The job is configured to run every 15 minutes, ensuring a regular check for returned orders and facilitates swift updates within HotWax Commerce.


##### Troubleshooting Use Case

**Issue 1:** Orders marked as returned on the eCommerce platform are not creating return transactions in HotWax Commerce

**Possible Causes:** Job Frequency

**Resolution steps:** Review the `frequency` parameter to ensure it aligns with the intended frequency for checking and creating return transactions.Lower frequencies might result in delays in processing returns. 

**Issue 2:** Damaged variances are not being logged as expected

**Possible Causes:** Restock Inventory Configurations

**Resolution steps:** Verify that the return handling settings allow for restocking of returnable items.


##### Custom Parameters

| **Parameter**      | **Type**     | **Description**                                                                                                   | **Default Value** | **Example Value** |
|--------------------|--------------|-------------------------------------------------------------------------------------------------------------------|-------------------|-------------------|
| **`frequency`**     | Required     | Defines the default duration for syncing orders if there is no `Last Sync Time`.                                 | 15 minutes        | 10                |
| **`bufferTime`**    | Optional     | Ensures orders are not imported until they have aged past a desired duration, accommodating post-processing workflows in Shopify. | Not specified | 30 minutes        |
| **`financialStatus`** | Optional    | Specifies the financial status of orders.                                                                         | Not specified     | `paid`            |
| **`limit`**         | Optional     | Sets a limit on the order import job, restricting the number of orders fetched from eCommerce.                    | Not specified     | 100               |

---

##### Upload Completed Orders

- **Job ID:** JOB_UL_CMPLT_ORD
- **Job Name:** Upload Completed Orders

##### Description

The Upload Completed Orders job is designed to update the order status of fulfilled orders to the eCommerce platform. This ensures that the eCommerce platform accurately reflects the current status of orders that have been successfully fulfilled by OMS.

##### Recommended frequency

The job is configured to run at a frequency that suits the needs of your business, ensuring timely updates for fulfilled orders.

##### Troubleshooting Use Case

**Issue 1:** Orders are not updating their status on the eCommerce platform after being fulfilled.

**Possible Causes:** Job Frequency

**Resolution Steps:** Review the `frequency` parameter to ensure it aligns with the intended frequency for updating the order status. Lower frequencies might result in delays in processing fulfillment. 

##### Custom Parameters

| **Parameter**           | **Type**     | **Description**                                                                                                   | **Default Value** | **Example Value** |
|--------------------------|--------------|-------------------------------------------------------------------------------------------------------------------|-------------------|-------------------|
| **`shipmentID`**         | Required     | The ID associated with the shipment to track and update orders.                                                   | Not specified     | "SH123456"        |
| **`orderID`**            | Required     | The ID associated with the order to be updated on the eCommerce platform.                                         | Not specified     | "ORD789012"       |
| **`shipmentCreatedDate`** | Required     | The timestamp associated with the creation of shipments.                                                         | Not specified     | "1649883480000"  |

