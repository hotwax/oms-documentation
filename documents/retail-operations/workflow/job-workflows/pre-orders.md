---
description: >-
  Learn about the Pre-Order job in HotWax Commerce.
---

# Pre-Orders

## Jobs for Pre-Order Catalog Management in HotWax Commerce

#### Frequency for Pre-Order Jobs

All Pre-order jobs have a defined frequency of 15 minutes by default which can be modified and adjusted at any point of time as per the requirement. The user may have various options to modify the job, such as altering the run time, adjusting the frequency, and adding custom parameters if required, or can also cancel the job to reduce system load. Users can follow the given steps to execute any changes in the existing jobs to update the runtime and the scheduled frequency of the job whenever required.

**Runtime:** Time at which a job is scheduled particularly. **Scheduled Frequency:** A time duration for repeated occurrence.

1. Go to the Pipeline and search for the Job, by job name or related keyword.
2. Click on the Job Card to refer to the job detailed view.
3. Select the runtime function dropdown to change the run time from the dropdown or make custom changes.
4. Or change the scheduled frequency by choosing it from the dropdown or make a custom requirement.
5. Ensure to save the changes.
6. Users can add custom parameters to the jobs and schedule them accordingly.
7. Users can also “Skip” or “Cancel” the jobs from the same job detailed card.

___

### Auto Refresh Pre-Sell Catalog

Job Name: `Auto Refresh Pre-Sell Catalog`
Job Enum Id: `JOB_PREORDER_CAT_SYNC`
Service Name: `uploadPreorderCatalogToShopify`
Flow: Catalog Update to Shopify

A product is eligible for pre-order only if:

- **PO ATP is greater than 0**: This means there is incoming stock confirmed through a Purchase Order.
- **Current ATP is less than or equal to 0**: This means that the current ATP of the product should be 0 only then the product will be eligible for Pre-order.

Retailers organize products into different catalogs for better segregation, including a dedicated catalog for pre-order items. The `Auto Refresh Pre-Sell Catalog` job adds or removes products from the pre-order catalog based on their eligibility criteria for pre-orders.

**Note**: This job is specifically for OMS and is used to maintain the pre-order catalog. However, there are separate jobs that sync the same products as pre-orders on Shopify
<figure><img src="../../.gitbook/assets/Pre-sell Catalog.png" alt="" width="375"><figcaption></figcaption></figure>

___

## Pre-Sell on Shopify

**All jobs in this category synchronize changes and updates from HotWax to Shopify.**

## Products

Note: HotWax and Shopify both maintain product details. The jobs listed in the product section below are used to sync product level changes and updates from HotWax to Shopify.

### Sync Variant Details

When a product becomes eligible for pre-order in OMS, it is responsible for syncing the updated product details to Shopify. Only after this synchronization can Shopify accept pre-orders or backorders for that product. The `Sync Variant Details` job is used to sync meta-fields (like promise date, etc) of pre-order/backorder-eligible products from HotWax to Shopify.

Other jobs, such as `Add Promise Date` and `Update Sales Order Item Promise Date`, must be scheduled in HotWax to ensure accurate synchronization of updated promise dates with Shopify. These jobs are discussed in detail later in this document.

---

### Add Pre-Order Tags

This job is used to apply tags on products that are eligible for pre-order in HotWax product catalog, to products in Shopify. For example, if Product A is eligible for pre-order in HotWax, the `Add Pre-Order Tags` job is used to apply the pre-order tag in Shopify, ensuring integrity between both systems.

**Internally**, when this job is toggled on, HotWax makes a POST API call to Shopify and enables the **`Continue selling when out of stock`** toggle in Shopify. This ultimately allows the product to be available for pre-order in Shopify.

---

### Remove Pre Order Tags

This job is used to remove pre-order tags on products in Shopify. For example, if Product A is now in-stock and considered as a normal product. the `Remove Pre-Order Tags` job is used to remove the pre-order tag in Shopify, ensuring integrity between both systems.

**Internally**,`Remove Pre-Order Tags` functions in a similar way to the Add Pre-Order Tags job only difference being that in the POST API call this job disables the **`Continue selling when out of stock`** toggle in Shopify.

---

### Add Back Order tags

This job is used to sync products that are eligible for back-order in HotWax with Shopify. For example, if Product A is eligible for back-order in HotWax, the `Add Back Order Tags` job is used to apply the back order tag in Shopify, ensuring integrity between both systems.

Internally, when this job is toggled on, HotWax makes a POST API call to Shopify and enables the **`Continue selling when out of stock`** toggle in Shopify. This ultimately allows the product to be available for back order in Shopify.

---

### Remove Back Order tags

This job is used to remove back order tags on products in Shopify. For example, if Product A is now in-stock and considered as a normal product. the `Remove Back Order Tags` job is used to remove the pre-order tag in Shopify, ensuring integrity between both systems.

Internally,`Remove Back Order Tags` functions in a similar way to the Add Back Order Tags job only difference being that in the POST API call this job disables the **`Continue selling when out of stock`** toggle in Shopify.

___

## Orders

**Note: The jobs listed in the order section below are used to sync Order level changes and updates from HotWax to Shopify.**

### Add Pre-Order Tags

This job applies pre-order tags to orders. For example, if a customer places an order with three items—two pre-order products and one regular product—HotWax identifies orders that contain pre-order items and tags the entire order in Shopify.

Internally, when this job is toggled onn HotWax makes a post API call to Shopify and add tags on all orders which contains pre-order items.

---

### Add Back Order Tags

This job applies back order tags to orders. For example, if a customer places an order with three items—two back order products and one regular product—HotWax identifies orders that contain back order items and tags the entire order in Shopify.

Internally, when this job is toggled onn HotWax makes a post API call to Shopify and add tags on all order in Shopify which containing back order items.

---

### Add Promise Date

When an order is placed containing a pre-order or back order items, HotWax identifies it and add the promise date in Shopify as a note on Order Level. This job is used to apply promise date to orders in Shopify.

---

### Update Promise Date

When the estimated promise date on a purchase order changes, it's important to inform customers about updates to their orders linked to that inventory. The "Update Promise Date" job updates the promise date of order note in Shopify.

Internally, through this job HotWax sends an post API call on Shopify and change the promise date on the of order note on Shopify. However, there are different jobs in HotWax which triggers notification to the customers.
___

## Auto Releasing

### Run Daily

Job Name: `Release pre-orders and back orders`
Job Enum ID: `JOB_RLS_ORD_DTE`
Service Name: `checkPreOrderItemForRelease`

After the promise date is passed, this job is used to push orders for brokering. HotWax maintains dedicated parking for pre-orders and backorders, ensuring they are managed separately. All such orders remain in this parking until they are ready for fulfillment. The "Run Daily" job runs once a day, checking the pre-order and backorder parking for orders with passed promise date and releasing them for brokering.

<figure><img src="../../.gitbook/assets/Update promise Date for pre-order product.png" alt="" width="375"><figcaption></figcaption></figure>

___

## More Jobs

### Update Sales Order Item Promise Date

Job Name: `Update Sales Order Item Promise Date`
Job Enum ID: `JOB_UL_PRMS_DTE`
Service Name: `pushPromiseDateChangedNotes`

When a customer places a pre-order, they are given a promised delivery date based on the estimated arrival of the associated purchase order. If this estimated arrival date changes, the promised delivery date for existing orders must be updated accordingly. This adjustment is handled by the `Update Sales Order Item Promise Date` job.

**Note**: This job updates the promise date specifically in OMS. However, other jobs are responsible for syncing the updated promise date to external systems.

**Custom Parameters**
- No required parameter for this job.
- productStoreIds is the optional parameters for this job.

