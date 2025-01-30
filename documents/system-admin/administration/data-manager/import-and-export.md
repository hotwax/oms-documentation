---
description: >-
  Learn about the data import/export feature in HotWax Commerce's Master Data
  Manager. Efficiently manage bulk data updates and streamline data handling in
  OMS.
---

# Data import and export

HotWax Commerce OMS provides two methods for adding or updating data in bulk:

1. **Direct Manual Uploads**: Users can leverage the import/export capabilities to manually upload data.
2. **Automated Jobs**: The system can process data shared by third-party systems through automated jobs, which then import the data into HotWax Commerce.

## Steps to Manually Import or Export Data in HotWax Commerce OMS

1. Login into OMS and navigate to the hamburger menu.
2. In the hamburger menu, click on the **MDM** section, then on **EXIM**.
3. On the **EXIM** page, retailers can click the link they want.
4. Inside the **MDM**, on the top-left corner, retailers can upload a CSV file and download a sample CSV file.

## Import/Export Used in Initial Setup

## Import/Export Facilities

Instead of creating facilities individually through the Facilities App, retailers can upload a CSV file for all facilities.

To import a Facilities CSV, go to the **EXIM** page under the **Imports** tab in the **Warehouse** section and click on **Facility MDM**. Similarly, to export facilities for any specific reason, retailers can navigate to the **Export** tab in the **Facilities MDM** within the **Warehouse** section.

When importing facilities, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

<table><thead><tr><th width="82">S.No.</th><th width="139">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>facility-id</td><td>Unique identifier for the facility.</td></tr><tr><td>2</td><td>external-id</td><td>External identifier for the facility.</td></tr><tr><td>3</td><td>facility-name</td><td>The name of the facility.</td></tr><tr><td>4</td><td>address-line-1</td><td>Primary address line of the facility.</td></tr><tr><td>5</td><td>address-line-2</td><td>Secondary address line of the facility, if applicable.</td></tr><tr><td>6</td><td>City</td><td>The city where the facility is located.</td></tr><tr><td>7</td><td>zip-code</td><td>Zip or postal code of the facility's location.</td></tr><tr><td>8</td><td>state</td><td>State or province of the facility's location.</td></tr><tr><td>9</td><td>country</td><td>Country where the facility is located.</td></tr><tr><td>10</td><td>latitude</td><td>Latitude coordinate of the facility's location.</td></tr><tr><td>11</td><td>longitude</td><td>Longitude coordinate of the facility's location.</td></tr><tr><td>12</td><td>phone-number</td><td>Phone number for contacting the facility.</td></tr><tr><td>13</td><td>email</td><td>Contact email address for the facility.</td></tr></tbody></table>

{% file src="../.gitbook/assets/import_export_facilities.csv" %}
Sample CSV File
{% endfile %}

***

## Import Employee

Instead of creating each user individually through the User App, retailers can upload a CSV for all the Users.

To import an Employee CSV, go to the **EXIM** page under the **Imports** tab and click on **Employee MDM**.

When importing Employee data, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

<table><thead><tr><th width="109">S.No.</th><th width="148">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>party-id</td><td>Unique identifier for the party (individual or organization).</td></tr><tr><td>2</td><td>external-id</td><td>External system reference ID for integration purposes.</td></tr><tr><td>3</td><td>first-name</td><td>First name of the party.</td></tr><tr><td>4</td><td>last-name</td><td>Last name of the party.</td></tr><tr><td>5</td><td>enabled</td><td>Indicates if the account is active (true/false).</td></tr><tr><td>6</td><td>relationship-status</td><td>Current status of the party’s relationship (e.g., active, inactive).</td></tr><tr><td>7</td><td>user-login-id</td><td>Login ID for the user.</td></tr><tr><td>8</td><td>password</td><td>Password for user authentication.</td></tr><tr><td>9</td><td>party-classifications</td><td>Classifications assigned to the party (e.g., customer, supplier).</td></tr><tr><td>10</td><td>party-identifications</td><td>Identifications or IDs associated with the party.</td></tr><tr><td>11</td><td>relationships</td><td>Relationships linked to the party (e.g., parent-child relationships).</td></tr></tbody></table>



{% file src="../.gitbook/assets/import_employee.csv" %}
Sample CSV File
{% endfile %}

***

## Import Calendar

HotWax Commerce provides two convenient options for managing the facility calendar: through the **Facilities App** or via the **Calendar MDM**. Retailers can import a generic calendar based on the store's operating hours. Later, it can be linked to the facility using the **Import Store Calendar Assoc** under the **Imports** tab in the MDM section.

To import a Calendar CSV, go to the **EXIM** page under the **Imports** tab in the **MDM** section and click on **Calendar MDM**. When importing a calendar, some fields need to be filled mandatorily. Here is the list:

<table><thead><tr><th width="113">S.No.</th><th width="171">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>calendar-id</td><td>A unique identifier for the calendar used to manage facility schedules.</td></tr><tr><td>2</td><td>description</td><td>A brief description of the calendar or its purpose.</td></tr><tr><td>3</td><td>monday-start</td><td>The start time for operations on Monday.</td></tr><tr><td>4</td><td>monday-capacity</td><td>The maximum capacity or limit for operations on Monday.</td></tr><tr><td>5</td><td>tuesday-start</td><td>The start time for operations on Tuesday.</td></tr><tr><td>6</td><td>tuesday-capacity</td><td>The maximum capacity or limit for operations on Tuesday.</td></tr><tr><td>7</td><td>wednesday-start</td><td>The start time for operations on Wednesday.</td></tr><tr><td>8</td><td>wednesday-capacity</td><td>The maximum capacity or limit for operations on Wednesday.</td></tr><tr><td>9</td><td>thursday-start</td><td>The start time for operations on Thursday.</td></tr><tr><td>10</td><td>thursday-capacity</td><td>The maximum capacity or limit for operations on Thursday.</td></tr><tr><td>11</td><td>friday-start</td><td>The start time for operations on Friday.</td></tr><tr><td>12</td><td>friday-capacity</td><td>The maximum capacity or limit for operations on Friday.</td></tr><tr><td>13</td><td>saturday-start</td><td>The start time for operations on Saturday.</td></tr><tr><td>14</td><td>saturday-capacity</td><td>The maximum capacity or limit for operations on Saturday.</td></tr><tr><td>15</td><td>sunday-start</td><td>The start time for operations on Sunday.</td></tr><tr><td>16</td><td>sunday-capacity</td><td>The maximum capacity or limit for operations on Sunday.</td></tr></tbody></table>



{% file src="../.gitbook/assets/import_calendar.csv" %}
Sample CSV file
{% endfile %}

***

## Import Store Calendar Assoc

In HotWax Commerce, retailers can set the operating hours of a facility in two ways:

1. From the **Operating Hours** setting in the **Settings** page of the Facilities App.
2. From the **Import Calendar Assoc** in MDM.

The **Import Calendar Assoc** is used to set the operating hours of a particular facility. Retailers can find this under the **Imports** tab in the MDM section.

When importing the CSV, some fields need to be filled mandatorily. Here is the list:

<table><thead><tr><th width="81">S.No.</th><th>Field Name</th><th width="544">Description</th></tr></thead><tbody><tr><td>1</td><td>store-id</td><td>Unique identifier for the store.</td></tr><tr><td>2</td><td>calendar-id</td><td>Unique identifier for the calendar associated with the store.</td></tr><tr><td>3</td><td>from-date</td><td>Start date for the calendar's validity period. Users can use either MM-DD-YYYY or DD-MM-YYYY for the arrival-date based on their region.</td></tr><tr><td>4</td><td>thru-date</td><td>End date for the calendar's validity period. Users can use either MM-DD-YYYY or DD-MM-YYYY for the arrival-date based on their region.</td></tr></tbody></table>

{% file src="../.gitbook/assets/import_store_calendar_assoc.csv" %}
Sample CSV file
{% endfile %}

***

## Import Inventory Variances

This import in HotWax allows retailers to update inventory based on the identification type used in external systems. By importing a CSV file into HotWax, inventory adjustments are marked.

This import records variances based on the given delta and updates both **ATP** (Available to Promise) and **QOH** (Quantity on Hand). The MDM feature can set inventory to 0 but cannot make it negative.

**Example:** When an Inventory Reset file is provided by an external system (e.g., NetSuite), and Product A's inventory is updated to 5 while HotWax currently shows 10, a variance of (+5) will be logged, increasing the total inventory to 15. Similarly, if the file specifies a variance of -5, the system's inventory will adjust to 5. When importing Inventory Adjustments, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

<table><thead><tr><th width="93">S.No.</th><th width="167">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>facilityId</td><td>Unique identifier for the facility.</td></tr><tr><td>2</td><td>externalFacilityId</td><td>Identifier used for the facility in external systems.</td></tr><tr><td>3</td><td>idType</td><td>Type of identifier being referenced (e.g., product).</td></tr><tr><td>4</td><td>idValue</td><td>Specific value of the referenced identifier.</td></tr><tr><td>5</td><td>availableDelta</td><td>Change in the available quantity for the facility.</td></tr><tr><td>6</td><td>locationSeqId</td><td>Sequence ID of the location within the facility.</td></tr><tr><td>7</td><td>varianceReasonId</td><td>Identifier for the reason behind a variance in inventory or data.</td></tr><tr><td>8</td><td>comments</td><td>Additional remarks or notes related to the record.</td></tr></tbody></table>

{% file src="../.gitbook/assets/import_inventory_variance (1).csv" %}
Sample CSV file
{% endfile %}

***

## Import Future Inventory

This import is used by retailers to schedule restocking for a product at future scheduled date and time, making the inventory available in HotWax Commerce and on Shopify at their preferred times.

When scheduling a restock, certain mandatory fields should be filled. These fields are listed below:

<table><thead><tr><th width="89">S.No.</th><th width="187">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Shopify Product SKU</td><td>Unique ID for a Product in Shopify.</td></tr><tr><td>2</td><td>Restock Quantity</td><td>The quantity of items restocked.</td></tr><tr><td>3</td><td>Schedule</td><td>Allows selecting the time.</td></tr><tr><td>4</td><td>Facility ID</td><td>Unique ID for a facility where restock is scheduled.</td></tr><tr><td>5</td><td>Product Store</td><td>The name of the Product Store.</td></tr><tr><td>6</td><td>Shopify Store</td><td>Name of the Shopify Store on which the inventory will change.</td></tr><tr><td>7</td><td>Restock Name</td><td>Name for the restock.</td></tr></tbody></table>

{% file src="../.gitbook/assets/schedule_restock.csv" %}
Sample CSV File
{% endfile %}

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

<table><thead><tr><th width="97">S. No.</th><th width="127">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>productId</td><td>Unique identifier for the product.</td></tr><tr><td>2</td><td>idValue</td><td>Value corresponding to the identification type.</td></tr><tr><td>3</td><td>facilityId</td><td>Identifier for the facility location.</td></tr><tr><td>4</td><td>locationSeqId</td><td>Sequence ID for the specific storage location.</td></tr><tr><td>5</td><td>quantity</td><td>Number of items involved in the action.</td></tr><tr><td>6</td><td>reason</td><td>Explanation for the inventory adjustment.</td></tr><tr><td>7</td><td>comments</td><td>Additional notes or remarks.</td></tr></tbody></table>

{% file src="../.gitbook/assets/reset_inventory.csv" %}
Sample CSV file
{% endfile %}

***

## Reset Inventory by QOH

The **Reset Inventory by QOH** method is used when you want to sync the physical inventory from a third-party system, such as NetSuite, to HotWax Commerce OMS without considering inventory reservations. This ensures that the QOH (Quantity on Hand) in HotWax matches the physical inventory recorded in the external system.\
When the reset file is imported, the OMS compares the QOH value in the file with its systemic QOH. The difference (delta in QOH) is then applied to both QOH and ATP (Available to Promise), ignoring any reservations.

**Example:**&#x20;

For Product A at a store:

* **Initial QOH**: 10 units
* **Initial ATP**: 5 units
* **File’s Quantity**: 4 units

**After resetting:**

* **QOH**: 4 units (adjusted by a delta of -6).
* **ATP**: -1 unit (adjusted by the same delta of -6).

This method ensures a direct update of physical inventory levels in HotWax OMS.

When the “RESET INVENTORY BY QOH” file is uploaded it has some fields which are listed below:

<table><thead><tr><th width="114">S. No.</th><th width="137">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>productId</td><td>Unique identifier for the product.</td></tr><tr><td>2</td><td>idValue</td><td>Value corresponding to the identification type.</td></tr><tr><td>3</td><td>facilityId</td><td>Identifier for the facility location.</td></tr><tr><td>4</td><td>locationSeqId</td><td>Sequence ID for the specific storage location.</td></tr><tr><td>5</td><td>quantity</td><td>Number of items involved in the action.</td></tr><tr><td>6</td><td>reason</td><td>Explanation for the inventory adjustment.</td></tr><tr><td>7</td><td>comments</td><td>Additional notes or remarks.</td></tr></tbody></table>

{% file src="../.gitbook/assets/reset_inventory_by_QOH.csv" %}
Sample CSV file
{% endfile %}

***

## Reset Inventory by ATP & QOH

The **Reset Inventory by ATP & QOH** method is used when you want to update both QOH (Quantity on Hand) and ATP (Available to Promise) in HotWax Commerce OMS, while maintaining the difference between them. This method accounts for reservations, safety stock, and network thresholds configured in HotWax OMS when recalculating ATP.

**Example:**&#x20;

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

<table><thead><tr><th width="85">S. No.</th><th width="145">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>productId</td><td>Unique identifier for the product.</td></tr><tr><td>2</td><td>idValue</td><td>Value corresponding to the identification type.</td></tr><tr><td>3</td><td>facilityId</td><td>Identifier for the facility location.</td></tr><tr><td>4</td><td>locationSeqId</td><td>Sequence ID for the specific storage location.</td></tr><tr><td>5</td><td>quantity</td><td>Number of items involved in the action.</td></tr><tr><td>6</td><td>reason</td><td>Explanation for the inventory adjustment.</td></tr><tr><td>7</td><td>comments</td><td>Additional notes or remarks.</td></tr></tbody></table>

{% file src="../.gitbook/assets/reset_inventory.csv" %}
Sample CSV file
{% endfile %}

***

## Export Order

If the admin team wants to export orders based on multiple filters or criteria, they can navigate to their OMS instance. The default page that opens is the **“Find Order Page”**. From there, they can apply filters and then export the CSV file of orders.

When exporting the CSV it gives some major fields which are listed here :

<table><thead><tr><th width="87">S. No.</th><th width="193">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>orderId</td><td>Unique identifier for the order.</td></tr><tr><td>2</td><td>orderName</td><td>Name or description of the order.</td></tr><tr><td>3</td><td>orderItemSeqId</td><td>Sequential identifier for the order item.</td></tr><tr><td>4</td><td>productId</td><td>Unique identifier for the product.</td></tr><tr><td>5</td><td>parentProductName</td><td>Name of the parent product associated with the order item.</td></tr><tr><td>6</td><td>productName</td><td>Name of the product in the order.</td></tr><tr><td>7</td><td>internalName</td><td>Internal name of the product within the system.</td></tr><tr><td>8</td><td>quantity</td><td>Quantity of the order item.</td></tr><tr><td>9</td><td>orderItemStatusId</td><td>Status identifier for the order item.</td></tr><tr><td>10</td><td>orderItemStatusDesc</td><td>Description of the order item status.</td></tr></tbody></table>

{% file src="../.gitbook/assets/export_order.csv" %}
Sample CSV
{% endfile %}

***

## Import/ Export that are generally used

## Export Inventory Config

This is used to export inventory details such as Product Id, Facility Id, ATP, Minimum Stock from HotWax. To export an Inventory CSV file, go to the **EXIM** page, navigate to the **Exports** tab in the **Warehouse** section, and click on **Import Inventory Config MDM**.

When exporting CSV fields are in this way:

<table><thead><tr><th width="96">S.No.</th><th width="178">Field</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>product-id</td><td>Unique identifier for each product.</td></tr><tr><td>2</td><td>internal-name</td><td>Internal reference name for the product.</td></tr><tr><td>3</td><td>product-id-value</td><td>Specific value assigned to the product ID for mapping or identification.</td></tr><tr><td>4</td><td>facility-id</td><td>Unique identifier for the facility (e.g., warehouse or store) where the product is managed.</td></tr><tr><td>5</td><td>external-id</td><td>Identifier for the product used in external systems or integrations.</td></tr><tr><td>6</td><td>ATP</td><td>Available to Promise - quantity of product available to fulfill orders.</td></tr><tr><td>7</td><td>minimum-stock</td><td>The minimum required stock level to prevent stockouts.</td></tr><tr><td>8</td><td>inv-group-member</td><td>Specifies the inventory group or category the product belongs to.</td></tr></tbody></table>

{% file src="../.gitbook/assets/export_inventory_config.csv" %}
Sample CSV Files
{% endfile %}

***

## Import/Export Inbound Shipment

Inbound shipments are used to receive inventory at a facility or warehouse. Majorly inbound shipments are created in the ERP and synced to HotWax Commerce via API, they can also be manually imported using MDM. To import a Shipment CSV file, go to the **EXIM** page, navigate to the **Imports** tab in the **Warehouse** section, and click on **Shipment**.

In situations where retailers want to verify or edit their upcoming shipments, they can do so by exporting the Shipment CSV from the **Warehouse** section under the **Exports** tab. When importing shipment some fields need to be filled mandatorily, while others can be filled for further references. Here is the list of mandatory fields:

<table><thead><tr><th width="94">S.No.</th><th width="208">Field Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>shipment-id</td><td>Unique identifier for the shipment.</td></tr><tr><td>2</td><td>external-shipment-id</td><td>External identifier for the shipment, often used in third-party systems.</td></tr><tr><td>3</td><td>shipment-type</td><td>Type of shipment (e.g., inbound, outbound, transfer).</td></tr><tr><td>4</td><td>shipment-status</td><td>Current status of the shipment (e.g., pending, in-transit, delivered).</td></tr><tr><td>5</td><td>origin-facility-id</td><td>ID of the facility from which the shipment is originating.</td></tr><tr><td>6</td><td>destination-facility-id</td><td>ID of the facility where the shipment is being delivered.</td></tr><tr><td>7</td><td>product-id</td><td>Unique identifier for the product being shipped.</td></tr><tr><td>8</td><td>id-type</td><td>Type of ID used for identifying the product (e.g., SKU, barcode).</td></tr><tr><td>9</td><td>product-sku</td><td>SKU (Stock Keeping Unit) for the product being shipped.</td></tr><tr><td>10</td><td>quantity</td><td>Quantity of the product being shipped.</td></tr><tr><td>11</td><td>serial-number</td><td>Serial number of the product being shipped, if applicable.</td></tr><tr><td>12</td><td>order-id</td><td>Unique identifier for the order related to the shipment.</td></tr><tr><td>13</td><td>tracking-number</td><td>Unique tracking number assigned to the shipment for tracking its status.</td></tr></tbody></table>

{% file src="../.gitbook/assets/import_export_inbound_shipment.csv" %}
Sample CSV File
{% endfile %}

***

## Import Safety Stock

Retailers can manually apply safety stock at products per location by importing a CSV. To import a Safety Stock CSV file, go to the **EXIM** page, navigate to the **Imports** tab in the **Warehouse** section, and click on **Safety Stock MDM**.

When importing safety stock some fields need to be filled mandatorily, while others can be filled for further references. Here is the list of mandatory fields:

<table><thead><tr><th width="97">S.No.</th><th>Field Name</th><th width="434">Description</th></tr></thead><tbody><tr><td>1</td><td>facility-id</td><td>Unique identifier for the facility within the system.</td></tr><tr><td>2</td><td>facility-external-id</td><td>External identifier used to represent the facility in external systems.</td></tr><tr><td>3</td><td>product-id</td><td>Unique identifier for the product in the system.</td></tr><tr><td>4</td><td>product-sku</td><td>Stock Keeping Unit (SKU) of the product for tracking and inventory management.</td></tr><tr><td>5</td><td>facility-safety-stock</td><td>Quantity of safety stock reserved for walk-in customers at the facility.</td></tr></tbody></table>

{% file src="../.gitbook/assets/import_safety_stock (1).csv" %}
Sample CSV File
{% endfile %}

***

## Import/Export Purchase Order

While most Purchase Orders are created in ERP and synced with OMS through automated jobs, in some cases, when a retailer intends to upload or download a PO manually, they can do this using EXIM. To import a Purchase Order CSV file, go to the **EXIM** page, navigate to the **Imports** tab in the **Procurement** section, and click on **Purchase Order MDM**.

Similarly, users can export the CSV of Purchase Order in the **Procurement** section under the **Exports** tab.

When importing Purchase Order some fields need to be mandatorily filled, while others can be filled for further references. Here is the list of mandatory fields:

<table><thead><tr><th width="93">S.No.</th><th>Field Name</th><th width="527">Description</th></tr></thead><tbody><tr><td>1</td><td>external-id</td><td>A unique identifier for the record in an external system or database.</td></tr><tr><td>2</td><td>product-store-id</td><td>The unique identifier for the product store where the item is located.</td></tr><tr><td>3</td><td>facility-id</td><td>The identifier for the facility handling the product.</td></tr><tr><td>4</td><td>external-facility-id</td><td>The unique external identifier for the facility in another system.</td></tr><tr><td>5</td><td>product-SKU</td><td>The unique Stock Keeping Unit (SKU) identifier for the product.</td></tr><tr><td>6</td><td>quantity</td><td>The available quantity of the product in stock or expected.</td></tr><tr><td>7</td><td>atp</td><td>The quantity of the product that can be promised for delivery.</td></tr><tr><td>8</td><td>arrival-date</td><td>The expected date when the product will arrive at the facility or store. Users can use either MM-DD-YYYY or DD-MM-YYYY for the arrival-date based on their region.</td></tr></tbody></table>

{% file src="../.gitbook/assets/import_export_purchase_order.csv" %}
Sample CSV file
{% endfile %}

***

## Import/Export Purchase Order ATP

PO ATP (Purchase Order Available to Promise) refers to the pre-sellable inventory from a purchase order promised for delivery by a vendor and available for pre-orders.

Retailers may need to update PO ATP when they want to adjust the pre-sellable inventory on a purchase order after it's already been uploaded and do not want to make their entire upcoming inventory available for pre-orders on eCommerce. To import a PO ATP CSV, go to the **EXIM** page > **Imports** tab > **Procurement** section > **PO ATP**. Allowing retailers to adjust promised inventory as needed.

Similarly, users can export the CSV of PO ATP from the **EXIM** page in the **Procurement** section under the **Exports** tab. When importing PO ATP, some fields need to be filled mandatorily, while others can be filled for further reference. Here is the list of mandatory fields:

<table><thead><tr><th>S.No.</th><th>Field Name</th><th width="523">Description</th></tr></thead><tbody><tr><td>1</td><td>po-id</td><td>The unique identifier for the Purchase Order (PO) within the system.</td></tr><tr><td>2</td><td>po-external-id</td><td>The unique identifier for the Purchase Order in an external system.</td></tr><tr><td>3</td><td>po-item-seq-id</td><td>The sequence identifier for items within the Purchase Order.</td></tr><tr><td>4</td><td>product-id</td><td>The unique identifier for the product in the system.</td></tr><tr><td>5</td><td>product-sku</td><td>The Stock Keeping Unit (SKU) represents the product.</td></tr><tr><td>6</td><td>ATP</td><td>Available-to-Promise quantity for the product based on current inventory data.</td></tr></tbody></table>



{% file src="../.gitbook/assets/import_export_purchase_order_atp (1).csv" %}
Sample CSV File
{% endfile %}
