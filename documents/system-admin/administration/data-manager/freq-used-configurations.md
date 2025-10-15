# Data Import and Export

## Import/Export Facilities

Instead of creating facilities individually through the Facilities App, retailers can upload a CSV file for all facilities.

To import a Facilities CSV, go to the **EXIM** page under the **Imports** tab in the **Warehouse** section and click on **Facility MDM**. Similarly, to export facilities for any specific reason, retailers can navigate to the **Export** tab in the **Facilities MDM** within the **Warehouse** section.

When importing facilities, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

| S.No. | Field Name      | Description                                         |
|-------|-----------------|-----------------------------------------------------|
| 1     | facility-id     | Unique identifier for the facility.                 |
| 2     | external-id     | External identifier for the facility.               |
| 3     | facility-name   | The name of the facility.                           |
| 4     | address-line-1  | Primary address line of the facility.               |
| 5     | address-line-2  | Secondary address line of the facility, if applicable. |
| 6     | city            | The city where the facility is located.             |
| 7     | zip-code        | Zip or postal code of the facility's location.      |
| 8     | state           | State or province of the facility's location.       |
| 9     | country         | Country where the facility is located.              |
| 10    | latitude        | Latitude coordinate of the facility's location.     |
| 11    | longitude       | Longitude coordinate of the facility's location.    |
| 12    | phone-number    | Phone number for contacting the facility.           |
| 13    | email           | Contact email address for the facility.             |


***

## Import Employee

Instead of creating each user individually through the User App, retailers can upload a CSV for all the Users.

To import an Employee CSV, go to the **EXIM** page under the **Imports** tab and click on **Employee MDM**.

When importing Employee data, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

| S.No. | Field Name            | Description                                                        |
|-------|-----------------------|--------------------------------------------------------------------|
| 1     | party-id              | Unique identifier for the party (individual or organization).      |
| 2     | external-id           | External system reference ID for integration purposes.             |
| 3     | first-name            | First name of the party.                                           |
| 4     | last-name             | Last name of the party.                                            |
| 5     | enabled               | Indicates if the account is active (true/false).                   |
| 6     | relationship-status   | Current status of the party’s relationship (e.g., active, inactive).|
| 7     | user-login-id         | Login ID for the user.                                             |
| 8     | password              | Password for user authentication.                                  |
| 9     | party-classifications | Classifications assigned to the party (e.g., customer, supplier).  |
| 10    | party-identifications | Identifications or IDs associated with the party.                  |
| 11    | relationships         | Relationships linked to the party (e.g., parent-child relationships).|


***

## Import Calendar

HotWax Commerce provides two convenient options for managing the facility calendar: through the **Facilities App** or via the **Calendar MDM**. Retailers can import a generic calendar based on the store's operating hours. Later, it can be linked to the facility using the **Import Store Calendar Assoc** under the **Imports** tab in the MDM section.

To import a Calendar CSV, go to the **EXIM** page under the **Imports** tab in the **MDM** section and click on **Calendar MDM**. When importing a calendar, some fields need to be filled mandatorily. Here is the list:

| S.No. | Field Name          | Description                                                         |
|-------|---------------------|---------------------------------------------------------------------|
| 1     | calendar-id         | A unique identifier for the calendar used to manage facility schedules. |
| 2     | description         | A brief description of the calendar or its purpose.                 |
| 3     | monday-start        | The start time for operations on Monday.                            |
| 4     | monday-capacity     | The maximum capacity or limit for operations on Monday.             |
| 5     | tuesday-start       | The start time for operations on Tuesday.                           |
| 6     | tuesday-capacity    | The maximum capacity or limit for operations on Tuesday.            |
| 7     | wednesday-start     | The start time for operations on Wednesday.                         |
| 8     | wednesday-capacity  | The maximum capacity or limit for operations on Wednesday.          |
| 9     | thursday-start      | The start time for operations on Thursday.                          |
| 10    | thursday-capacity   | The maximum capacity or limit for operations on Thursday.           |
| 11    | friday-start        | The start time for operations on Friday.                            |
| 12    | friday-capacity     | The maximum capacity or limit for operations on Friday.             |
| 13    | saturday-start      | The start time for operations on Saturday.                          |
| 14    | saturday-capacity   | The maximum capacity or limit for operations on Saturday.           |
| 15    | sunday-start        | The start time for operations on Sunday.                            |
| 16    | sunday-capacity     | The maximum capacity or limit for operations on Sunday.             |

***

## Import Store Calendar Assoc

In HotWax Commerce, retailers can set the operating hours of a facility in two ways:

1. From the **Operating Hours** setting in the **Settings** page of the Facilities App.
2. From the **Import Calendar Assoc** in MDM.

The **Import Calendar Assoc** is used to set the operating hours of a particular facility. Retailers can find this under the **Imports** tab in the MDM section.

When importing the CSV, some fields need to be filled mandatorily. Here is the list:

| S.No. | Field Name   | Description                                                                                                            |
|-------|--------------|------------------------------------------------------------------------------------------------------------------------|
| 1     | store-id     | Unique identifier for the store.                                                                                       |
| 2     | calendar-id  | Unique identifier for the calendar associated with the store.                                                          |
| 3     | from-date    | Start date for the calendar's validity period. Users can use either MM-DD-YYYY or DD-MM-YYYY for the arrival-date based on their region. |
| 4     | thru-date    | End date for the calendar's validity period. Users can use either MM-DD-YYYY or DD-MM-YYYY for the arrival-date based on their region.   |

***

## Import Inventory Variances

This import in HotWax allows retailers to update inventory based on the identification type used in external systems. By importing a CSV file into HotWax, inventory adjustments are marked.

This import records [variances](/documents/integrate-with-hotwax/README.md) based on the given delta and updates both [ATP](https://docs.hotwax.co/documents/learn-hotwax-oms#available-to-promise-atp) (Available to Promise) and **QOH** (Quantity on Hand). The MDM feature can set inventory to 0 but cannot make it negative.

**Example:** When an Inventory Reset file is provided by an external system (e.g., NetSuite), and Product A's inventory is updated to 5 while HotWax currently shows 10, a variance of (+5) will be logged, increasing the total inventory to 15. Similarly, if the file specifies a variance of -5, the system's inventory will adjust to 5. When importing Inventory Adjustments, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

| S.No. | Field Name           | Description                                                           |
|-------|----------------------|-----------------------------------------------------------------------|
| 1     | facilityId           | Unique identifier for the facility.                                   |
| 2     | externalFacilityId   | Identifier used for the facility in external systems.                 |
| 3     | idType               | Type of identifier being referenced (e.g., product).                  |
| 4     | idValue              | Specific value of the referenced identifier.                          |
| 5     | availableDelta       | Change in the available quantity for the facility.                    |
| 6     | locationSeqId        | Sequence ID of the location within the facility.                      |
| 7     | varianceReasonId     | Identifier for the reason behind a variance in inventory or data.     |
| 8     | comments             | Additional remarks or notes related to the record.                    |

***

## Import Future Inventory

This import is used by retailers to schedule restocking for a product at future scheduled date and time, making the inventory available in HotWax Commerce and on Shopify at their preferred times.

When scheduling a restock, certain mandatory fields should be filled. These fields are listed below:

| S.No. | Field Name            | Description                                         |
|-------|-----------------------|-----------------------------------------------------|
| 1     | Shopify Product SKU   | Unique ID for a Product in Shopify.                 |
| 2     | Restock Quantity      | The quantity of items restocked.                    |
| 3     | Schedule              | Allows selecting the time.                          |
| 4     | Facility ID           | Unique ID for a facility where restock is scheduled.|
| 5     | Product Store         | The name of the Product Store.                      |
| 6     | Shopify Store         | Name of the Shopify Store on which the inventory will change. |
| 7     | Restock Name          | Name for the restock.                               |


***

## Reset Inventory by ATP

When NetSuite (or any third-party system) is used as a Warehouse Management System (WMS), it reserves inventory for orders that need to be fulfilled. To sync inventory with HotWax Commerce OMS based on the sellable inventory in NetSuite (or any third-party system of records for inventory), the **Reset Inventory by ATP** method is used.\
This process updates HotWax OMS by comparing the quantity in the import file with the system's current ATP. The difference (delta in ATP) is applied to both ATP and QOH (Quantity on Hand) in HotWax OMS.

**Example:**

For Product A at a store:

* **Initial QOH**: 10 units
* **Initial ATP**: 5 units
* **File’s Quantity**: 4 units

**After resetting:**

* **ATP**: 4 units (adjusted by the delta of -1).
* **QOH**: 9 units (adjusted by the delta of -1).

This method ensures accurate syncing of sellable inventory while accounting for reserved stock in NetSuite.

The Reset file contains the following fields:

| S. No. | Field Name      | Description                                    |
|--------|-----------------|------------------------------------------------|
| 1      | productId       | Unique identifier for the product.             |
| 2      | idValue         | Value corresponding to the identification type.|
| 3      | facilityId      | Identifier for the facility location.          |
| 4      | locationSeqId   | Sequence ID for the specific storage location. |
| 5      | quantity        | Number of items involved in the action.        |
| 6      | reason          | Explanation for the inventory adjustment.      |
| 7      | comments        | Additional notes or remarks.                   |


***

## Reset Inventory by QOH

The **Reset Inventory by QOH** method is used when you want to sync the physical inventory from a third-party system, such as NetSuite, to HotWax Commerce OMS without considering inventory reservations. This ensures that the QOH (Quantity on Hand) in HotWax matches the physical inventory recorded in the external system.\
When the reset file is imported, the OMS compares the QOH value in the file with its systemic QOH. The difference (delta in QOH) is then applied to both QOH and ATP (Available to Promise), ignoring any reservations.

**Example:**

For Product A at a store:

* **Initial QOH**: 10 units
* **Initial ATP**: 5 units
* **File’s Quantity**: 4 units

**After resetting:**

* **QOH**: 4 units (adjusted by a delta of -6).
* **ATP**: -1 unit (adjusted by the same delta of -6).

This method ensures a direct update of physical inventory levels in HotWax OMS.

When the “RESET INVENTORY BY QOH” file is uploaded it has some fields which are listed below:

| S. No. | Field Name     | Description                                    |
|--------|---------------|------------------------------------------------|
| 1      | productId      | Unique identifier for the product.             |
| 2      | idValue        | Value corresponding to the identification type.|
| 3      | facilityId     | Identifier for the facility location.          |
| 4      | locationSeqId  | Sequence ID for the specific storage location. |
| 5      | quantity       | Number of items involved in the action.        |
| 6      | reason         | Explanation for the inventory adjustment.      |
| 7      | comments       | Additional notes or remarks.                   |

***

## Reset Inventory by ATP & QOH

The **Reset Inventory by ATP & QOH** method is used when you want to update both QOH (Quantity on Hand) and ATP (Available to Promise) in HotWax Commerce OMS, while maintaining the difference between them. This method accounts for reservations, safety stock, and network thresholds configured in HotWax OMS when recalculating ATP.

**Example:**

For Product A

* **Initial QOH**: 15 units
* **Initial ATP**: 10 units
* **Difference (QOH - ATP)**: 5 units
* **File’s Quantity**: 20 units

**After resetting:**

* **New QOH**: 20 units (updated to match the file).
* **New ATP**: 15 units (adjusted to retain the difference of 5 units).

This approach ensures accurate updates to inventory levels while respecting the system's inventory policies and calculations.

When the “RESET INVENTORY BY ATP & QOH” file is uploaded it has some fields which are listed below:

| S. No. | Field Name     | Description                                    |
|--------|---------------|------------------------------------------------|
| 1      | productId      | Unique identifier for the product.             |
| 2      | idValue        | Value corresponding to the identification type.|
| 3      | facilityId     | Identifier for the facility location.          |
| 4      | locationSeqId  | Sequence ID for the specific storage location. |
| 5      | quantity       | Number of items involved in the action.        |
| 6      | reason         | Explanation for the inventory adjustment.      |
| 7      | comments       | Additional notes or remarks.                   |


***

## Export Order

If the admin team wants to export orders based on multiple filters or criteria, they can navigate to their OMS instance. The default page that opens is the **“Find Order Page”**. From there, they can apply filters and then export the CSV file of orders.

When exporting the CSV it gives some major fields which are listed here :

| S. No. | Field Name           | Description                                                   |
|--------|----------------------|---------------------------------------------------------------|
| 1      | orderId              | Unique identifier for the order.                              |
| 2      | orderName            | Name or description of the order.                             |
| 3      | orderItemSeqId       | Sequential identifier for the order item.                     |
| 4      | productId            | Unique identifier for the product.                            |
| 5      | parentProductName    | Name of the parent product associated with the order item.    |
| 6      | productName          | Name of the product in the order.                             |
| 7      | internalName         | Internal name of the product within the system.               |
| 8      | quantity             | Quantity of the order item.                                   |
| 9      | orderItemStatusId    | Status identifier for the order item.                         |
| 10     | orderItemStatusDesc  | Description of the order item status.                         |

***

## Import/ Export that are generally used

## Export Inventory Config

This is used to export inventory details such as Product Id, Facility Id, ATP, Minimum Stock from HotWax. To export an Inventory CSV file, go to the **EXIM** page, navigate to the **Exports** tab in the **Warehouse** section, and click on **Import Inventory Config MDM**.

When exporting CSV fields are in this way:

| S.No. | Field             | Description                                                                          |
|-------|-------------------|--------------------------------------------------------------------------------------|
| 1     | product-id        | Unique identifier for each product.                                                  |
| 2     | internal-name     | Internal reference name for the product.                                             |
| 3     | product-id-value  | Specific value assigned to the product ID for mapping or identification.             |
| 4     | facility-id       | Unique identifier for the facility (e.g., warehouse or store) where the product is managed. |
| 5     | external-id       | Identifier for the product used in external systems or integrations.                 |
| 6     | ATP               | Available to Promise - quantity of product available to fulfill orders.              |
| 7     | minimum-stock     | The minimum required stock level to prevent stockouts.                               |
| 8     | inv-group-member  | Specifies the inventory group or category the product belongs to.                    |


***

## Import/Export Inbound Shipment

Inbound shipments are used to receive inventory at a facility or warehouse. Majorly inbound shipments are created in the ERP and synced to HotWax Commerce via API, they can also be manually imported using MDM. To import a Shipment CSV file, go to the **EXIM** page, navigate to the **Imports** tab in the **Warehouse** section, and click on **Shipment**.

In situations where retailers want to verify or edit their upcoming shipments, they can do so by exporting the Shipment CSV from the **Warehouse** section under the **Exports** tab. When importing shipment some fields need to be filled mandatorily, while others can be filled for further references. Here is the list of mandatory fields:

| S.No. | Field Name             | Description                                                                      |
|-------|------------------------|----------------------------------------------------------------------------------|
| 1     | shipment-id            | Unique identifier for the shipment.                                               |
| 2     | external-shipment-id   | External identifier for the shipment, often used in third-party systems.          |
| 3     | shipment-type          | Type of shipment (e.g., inbound, outbound, transfer).                             |
| 4     | shipment-status        | Current status of the shipment (e.g., pending, in-transit, delivered).            |
| 5     | origin-facility-id     | ID of the facility from which the shipment is originating.                        |
| 6     | destination-facility-id| ID of the facility where the shipment is being delivered.                         |
| 7     | product-id             | Unique identifier for the product being shipped.                                  |
| 8     | id-type                | Type of ID used for identifying the product (e.g., SKU, barcode).                 |
| 9     | product-sku            | SKU (Stock Keeping Unit) for the product being shipped.                           |
| 10    | quantity               | Quantity of the product being shipped.                                            |
| 11    | serial-number          | Serial number of the product being shipped, if applicable.                        |
| 12    | order-id               | Unique identifier for the order related to the shipment.                          |
| 13    | tracking-number        | Unique tracking number assigned to the shipment for tracking its status.          |


***

## Import Safety Stock

Retailers can manually apply safety stock at products per location by importing a CSV. To import a Safety Stock CSV file, go to the **EXIM** page, navigate to the **Imports** tab in the **Warehouse** section, and click on **Safety Stock MDM**.

When importing safety stock some fields need to be filled mandatorily, while others can be filled for further references. Here is the list of mandatory fields:

| S.No. | Field Name           | Description                                                                      |
|-------|----------------------|----------------------------------------------------------------------------------|
| 1     | facility-id          | Unique identifier for the facility within the system.                            |
| 2     | facility-external-id | External identifier used to represent the facility in external systems.           |
| 3     | product-id           | Unique identifier for the product in the system.                                 |
| 4     | product-sku          | Stock Keeping Unit (SKU) of the product for tracking and inventory management.   |
| 5     | facility-safety-stock| Quantity of safety stock reserved for walk-in customers at the facility.         |


***

## Import/Export Purchase Order

While most Purchase Orders are created in ERP and synced with OMS through automated jobs, in some cases, when a retailer intends to upload or download a PO manually, they can do this using EXIM. To import a Purchase Order CSV file, go to the **EXIM** page, navigate to the **Imports** tab in the **Procurement** section, and click on **Purchase Order MDM**.

Similarly, users can export the CSV of Purchase Order in the **Procurement** section under the **Exports** tab.

When importing Purchase Order some fields need to be mandatorily filled, while others can be filled for further references. Here is the list of mandatory fields:

| S.No. | Field Name           | Description                                                                                                       |
|-------|----------------------|-------------------------------------------------------------------------------------------------------------------|
| 1     | external-id          | A unique identifier for the record in an external system or database.                                             |
| 2     | product-store-id     | The unique identifier for the product store where the item is located.                                            |
| 3     | facility-id          | The identifier for the facility handling the product.                                                             |
| 4     | external-facility-id | The unique external identifier for the facility in another system.                                                |
| 5     | product-SKU          | The unique Stock Keeping Unit (SKU) identifier for the product.                                                   |
| 6     | quantity             | The available quantity of the product in stock or expected.                                                       |
| 7     | atp                  | The quantity of the product that can be promised for delivery.                                                    |
| 8     | arrival-date         | The expected date when the product will arrive at the facility or store. Users can use either MM-DD-YYYY or DD-MM-YYYY for the arrival-date based on their region. |


***

## Import/Export Purchase Order ATP

PO ATP (Purchase Order Available to Promise) refers to the pre-sellable inventory from a purchase order promised for delivery by a vendor and available for pre-orders.

Retailers may need to update PO ATP when they want to adjust the pre-sellable inventory on a purchase order after it's already been uploaded and do not want to make their entire upcoming inventory available for pre-orders on eCommerce. To import a PO ATP CSV, go to the **EXIM** page > **Imports** tab > **Procurement** section > **PO ATP**. Allowing retailers to adjust promised inventory as needed.

Similarly, users can export the CSV of PO ATP from the **EXIM** page in the **Procurement** section under the **Exports** tab. When importing PO ATP, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

| S.No. | Field Name       | Description                                                                                     |
|-------|------------------|------------------------------------------------------------------------------------------------|
| 1     | po-id            | The unique identifier for the Purchase Order (PO) within the system.                           |
| 2     | po-external-id   | The unique identifier for the Purchase Order in an external system.                            |
| 3     | po-item-seq-id   | The sequence identifier for items within the Purchase Order.                                   |
| 4     | product-id       | The unique identifier for the product in the system.                                           |
| 5     | product-sku      | The Stock Keeping Unit (SKU) represents the product.                                           |
| 6     | ATP              | Available-to-Promise quantity for the product based on current inventory data.                 |

## Import Product ERP Code

Instead of updating ERP codes individually through the `ViewProduct` page, retailers can upload a CSV file for multiple products at once.

To **import a Product ERP Code CSV**, go to the **EXIM** page under the **Imports** tab in the **PIM** section and click on **Create and Update Product ERP Code**.

When importing product ERP codes, certain fields must be filled in mandatorily. Below is the list of required fields:

| S.No. | Field Name                | Description                                                                     |
| ----- | ------------------------- | ------------------------------------------------------------------------------- |
| 1     | productId                 | HC Unique identifier for the product.                                           |
| 2     | id-type                   | Secondary identifier type such as `UPCA` or `SKU`.                              |
| 3     | id-value                  | The value corresponding to the identifier type.                                 |
| 4     | good-identification-type  | The type of identification. For ERP codes, the value should always be `ERP_ID`. |
| 5     | good-identification-value | The ERP code assigned to the product.                                           |


---

### Example: Create a Product ERP Code

```
productId,id-type id-value,good-identification-type,good-identification-value
100182,UPCA, 69684750301, ERP_ID,31-1350
```

---

### Example: Update a Product ERP Code

```
productId,id-type id-value,good-identification-type,good-identification-value
100182,UPCA, 69684750301, ERP_ID,31-1351
```

