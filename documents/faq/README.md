---
description: Frequently Asked Questions about HotWax Commerce OMS
---

# Frequently Asked Questions

## Order

<details>

<summary>Customers and CSR teams can cancel orders up to which stage of the fulfillment process?</summary>

Shopify doesn't support customer cancellations, but CSR teams can cancel orders from the Shopify Admin Panel. Orders can be canceled on Shopify up until they're packed and not yet shipped in HotWax Commerce.

</details>

<details>

<summary>How can the CSR team cancel orders when orders are routed to a store or the fulfillment process is initiated for the order?</summary>

CSRs are responsible for notifying the stores about order cancellations. This enables store managers to utilize the Fulfillment App to unpack the specific order and halt the fulfillment process. Subsequently, CSRs can proceed to cancel orders either through the Shopify Admin Panel. HotWax Commerce downloads the canceled orders from Shopify and cancels them in HotWax Commerce; the canceled orders are automatically removed from the Fulfillment App.

</details>

<details>

<summary>Does HotWax Commerce offer Ship to Store functionality?</summary>

Yes, HotWax Commerce offers Ship to Store functionality.

</details>

<details>

<summary>How does HotWax Commerce ensure same-day shipping orders are shipped on the same day?</summary>

HotWax Commerce ensures same-day shipping orders are shipped on the same day through a structured process involving real-time eligibility checks and inventory verification, as outlined in the Soft Allocation feature. The process includes the following steps: 1. Obtain the customer's latitude and longitude: This is done either by converting the customer's postal code using the postCodeLookup API or by obtaining the coordinates directly from the customer's device if they allow access to their system location. 2. Compare against the store's coordinates: By evaluating the proximity between the customer's location and the store's location, HotWax Commerce determines the feasibility of meeting the same-day delivery requirement. 3. Evaluate serviceable areas: The system assesses whether the customer's address falls within the store's serviceable area. 4. Prioritize orders for same-day delivery: Orders meeting these criteria are prioritized to ensure timely fulfillment. By employing these measures, HotWax Commerce effectively supports same-day shipping orders and enhances the efficiency of the fulfillment process.

</details>

<details>

<summary>What is the best way to search an order in HotWax Commerce?</summary>

To search for an order in HotWax Commerce, you can use the following methods: 1. \*\*Search by Shopify Order ID, Order Name, or External ID\*\*: Store associates can quickly find the relevant sales order by entering essential details such as the Shopify order ID, order name, or external ID on the Create Returns page. 2. \*\*Use the Order Search Functionality\*\*: HotWax Commerce provides an order search functionality that allows you to search for orders based on various criteria such as order number, customer information, shipping address, billing details, and payment information. 3. \*\*Utilize Filters and Sorting\*\*: HotWax Commerce offers filters and sorting options to narrow down your search results. You can filter orders based on different parameters such as order status, order date, location, sales channel, and more. 4. \*\*Use Advanced Search Options\*\*: HotWax Commerce may provide advanced search options that allow you to search for orders using specific criteria or custom fields. These options can vary based on the configuration and customization of your HotWax Commerce instance.

</details>

<details>

<summary>What does Splitting of order mean? Does HotWax Commerce manage global splitting or individual order splitting?</summary>

HotWax Commerce supports global order splitting, allowing for the division of orders into multiple shipments or packages based on inventory availability and fulfillment locations. If the global setting for order splitting is enabled, all orders are eligible for splitting by default. Even if the global setting is disabled, HotWax Commerce enables individual order splitting, allowing customer service representatives to manually permit splitting for specific orders as needed.

</details>

<details>

<summary>Can we change the facility for an order after it has been brokered to any other location?</summary>

Yes! Store associates can reject the item from that facility on the view sales order page of the Fulfillment App, and then the HotWax Commerce brokering engine will pick it again in the next brokering cycle. Optionally, CSRs can also manually broker it to any specific facility.

</details>

<details>

<summary>In the case of Pre-orders, what happens when there are no promise dates, and a merchant wants auto-release orders?</summary>

Auto-releasing checks inventory count and promise date of an item. An item cannot be released if there’s no promise date on it. If a merchant does not manage promise dates but still wants an automated process, they can choose to broker orders directly from the pre-order parking. Brokering pre-order parking will allow sending orders for fulfillment even if there is no promise date using the same brokering rules a merchant has set up for normal orders. Additionally, a merchant can also configure a custom set of brokering rules specifically to broker orders right from pre-order parking.

</details>

<details>

<summary>Is it necessary to import order details into HotWax Commerce for instant purchases made in a retail store?</summary>

Yes, even if a customer makes an instant purchase in a retail store, HotWax Commerce imports the order details into the Order Management System and syncs them with the ERP system for accounting purposes. This ensures a comprehensive overview of all orders and accurate financial tracking.

</details>

## Products

<details>

<summary>Is there a way to track products that are imported from Shopify into HotWax and ensure that nothing goes amiss amongst the products getting imported?</summary>

Yes, HotWax Commerce provides a way to track products that are imported from Shopify. When importing products from Shopify to HotWax Commerce, HotWax Commerce keeps track of the "created\_at" field of products in Shopify. It identifies any products that were created after the last import and imports them into HotWax Commerce's product catalog. This ensures that all newly added products are synchronized and nothing goes amiss during the import process.

</details>

<details>

<summary>Can a SKU variant be added to HotWax Commerce by updating the Shopify product listing?</summary>

Yes, HotWax Commerce automatically syncs all newly added products and variants from the Shopify product listing through the import products job. This job runs at scheduled intervals, downloading all products and variants added since the last job run. Retailers can also schedule a sync products job to update all product changes from Shopify.

</details>

<details>

<summary>How do you configure your Product Store in HotWax Commerce?</summary>

In HotWax Commerce, retailers can configure brand-specific settings through the Product Store. The platform offers a dedicated Company app that allows retailers to create and manage their Product Store efficiently.

</details>

<details>

<summary>If merchants manage multiple products that are on pre-orders, is it possible to know which product is performing better than others? Does HotWax have any report which contains this data?</summary>

Yes, HotWax Commerce OMS provides the \*\*Daily Pre-Order Product Performance report\*\* which helps merchandisers analyze the performance of products on Pre-Order. This report assists in identifying the best and least-performing Pre-Order products, guiding future strategies and decisions regarding product assortment.

</details>

<details>

<summary>Does HotWax Commerce completely delete a variant from its database when a merchant removes it from a product on Shopify, or does it retain the variant in some form over time?</summary>

When a merchant deletes a variant of a product on Shopify, HotWax Commerce de-links that variant from the parent product but does not delete it immediately. The variant is marked as deleted but kept in the database for return management purposes. It is considered a soft deletion.

</details>

<details>

<summary>How are products loaded into the OMS? Is it automated from Shopify? Are there considerations for potential data corruption when updating products from Shopify?</summary>

HotWax Commerce uses a configurable job to download products from Shopify. This job handles: - Initial product downloads - Updates to product information - Importing newly added products - Deleting products no longer available in Shopify For more details, refer to the documentation. Considerations for potential data corruption are addressed by robust import processes and error handling mechanisms to ensure data integrity.

</details>

## Inventory

<details>

<summary>How does HotWax Commerce handle fulfillment and inventory changes during a bi-annual inventory count?</summary>

HotWax Commerce provides the capability to disable online fulfillment from facilities during a bi-annual inventory count. Retailers can adjust fulfillment capacity to 0 or remove the facility from order brokering and pickup groups to prevent new orders from arriving at those locations. This feature allows merchants to conduct their inventory counts without interruptions or changes to inventory levels.

</details>

<details>

<summary>When receiving inventory, sometimes shipments have more or less inventory items than intended. So does HotWax Commerce allow over-receiving or under-receiving?</summary>

Yes, HotWax Commerce allows for both over-receiving and under-receiving of inventory items. When stores receive more items than expected, leading to over-receiving scenarios, HotWax Commerce facilitates the receiving of this extra inventory efficiently. The platform highlights over-received items with a progress bar that turns red to easily identify items with excess inventory and generates reports for over-received items, allowing retailers to record this extra inventory within their ERP system.

</details>

<details>

<summary>Sometimes a shipment may contain inventory items of a different size or altogether different products. How does HotWax handle these extra items?</summary>

When stores receive items that differ from the recorded shipment, including scenarios where the size differs or an altogether different product is received, HotWax Commerce facilitates the process to receive and record these additional items effectively.

</details>

<details>

<summary>Store associates may occasionally make errors when manually receiving inventory. Is it possible to implement mandatory scanning so that manual errors can be avoided?</summary>

Yes, retailers have the option to mandate store associates to scan the unique barcode of each SKU for enhanced accuracy and inventory management, which can help avoid manual errors when receiving inventory.

</details>

<details>

<summary>What is consolidated inventory and why does HotWax Commerce send consolidated inventory into Shopify?</summary>

HotWax Commerce sends consolidated inventory into Shopify to ensure that the inventory counts of all products available for sale on Shopify are aggregated from all storage locations, such as stores and warehouses. This is particularly important for retailers using Shopify eCommerce and third-party Point of Sale systems, where only one Location is created on Shopify to aggregate the inventory counts. This approach allows for a unified view of inventory availability across all channels, supporting various business scenarios and ensuring that Shopify reflects the most accurate and up-to-date inventory information.

</details>

<details>

<summary>Is the inventory sync between HotWax and Shopify real-time?</summary>

By default, inventory sync between HotWax Commerce and Shopify isn't real-time. Instead, there's a batch process that syncs inventory at frequent intervals, which can be configured using the Job Manager app. Although real-time syncs are possible using Shopify webhooks, it's important to note that webhooks aren't always reliable. Therefore, periodic reconciliation is necessary to ensure data stays up-to-date.

</details>

<details>

<summary>If the sync is not real-time, how is Shopify’s inventory accurate?</summary>

Shopify's inventory accuracy is maintained through periodic synchronization with HotWax Commerce, typically occurring at frequent time intervals. This synchronization can be achieved through either webhooks or batch jobs, ensuring that inventory updates from HotWax Commerce are reflected in Shopify. However, due to the nature of periodic syncing, a slight delay in updating inventory from HotWax Commerce to Shopify may occur. Therefore, it's essential to periodically reconcile the data to ensure accuracy.

</details>

<details>

<summary>How is inventory accuracy maintained for store pickup orders?</summary>

When a customer places a store pickup order, HotWax Commerce reserves the inventory at the designated store for that order. This reserved inventory is then deducted from the available quantity when HotWax Commerce updates the online Available to Promise (ATP) to Shopify.

</details>

<details>

<summary>If an order item is rejected from a store, will it automatically reroute to another location?</summary>

### Fulfillment

### Routing

Yes, all rejected orders from a store are automatically rerouted to another location in the next brokering cycle.

</details>

<details>

<summary>How configurable are the routing rules for orders in HotWax Commerce, particularly for splitting orders?</summary>

HotWax Commerce routing rules are fully configurable based on retailer requirements. For detailed instructions on configuring routing rules, refer to the order routing user manual.

</details>

<details>

<summary>Is there a way to force route an entire order if one of the items in it is rejected?</summary>

Retailers can disable partial rejection to ensure that if one inventory item is not available, all other items in that order are also rejected. The entire order will be rerouted to a different facility with available inventory.

</details>

## Returns

<details>

<summary>How does HotWax Commerce integrate with Return Management Systems like Happy Returns, Loop Returns, or Returnly in the context of Shopify?</summary>

HotWax Commerce does not serve as a Return Management System for online orders. Instead, it integrates with Shopify to handle returns processed through third-party return management apps like Happy Returns, Loop Returns, or Returnly. Once the return process is successfully completed in Shopify, HotWax Commerce downloads the return data. This information is then seamlessly sent to the ERP systems for financial and accounting purposes without the need for direct integration between ERP and Return Management Systems. This streamlined integration is facilitated by HotWax Commerce's built-in capabilities for seamless data transfer between Shopify and ERP systems.

</details>

<details>

<summary>Which API is used to download return items in HotWax Commerce? What are the fields that API checks in Shopify to import returns?</summary>

The API used to download return items in HotWax Commerce checks the "Refund" status in Shopify for orders created after the last job run.

</details>

<details>

<summary>Does HotWax Commerce allow appeasement creation? How does HotWax Commerce handle appeasements?</summary>

HotWax Commerce does not have a direct feature for retailers to create appeasements. Instead, Customer Service Representative (CSR) teams can create appeasements to address customer concerns in Shopify. When an appeasement is generated, HotWax Commerce downloads this information along with refund details.

</details>

## Integrations

<details>

<summary>Which APIs does HotWax Commerce utilize to check inventory availability in stores located in close proximity to customers?</summary>

HotWax Commerce utilizes the "postcodeLookup" API to convert a customer's postal code into latitude and longitude coordinates, and the "storeLookup" API to find available pickup locations within a designated radius from the customer's location.

</details>

## Administration

<details>

<summary>Does HotWax Commerce allow the import and export of data?</summary>

Yes, HotWax Commerce allows for the import and export of data. The Master Data Manager within HotWax Commerce provides users with the ability to manually import and export data, offering functionalities such as cross-referencing systematically imported data, seamless data modification, and auditing features.

</details>

<details>

<summary>How are user roles and responsibilities maintained in the OMS?</summary>

User roles and responsibilities in the Order Management System (OMS) are maintained through a combination of user account categories and the assignment of specific permissions based on those roles and responsibilities. Users are divided into: - \*\*Individual User Accounts\*\*: Created for specific users with designated roles and access privileges. - \*\*Generic Facility Logins\*\*: For shared use within a facility, allowing multiple users to access fulfillment applications without individualized access privileges.

</details>

<details>

<summary>If a user is going to be receiving and fulfilling, do they need to be a store manager?</summary>

No, users do not need to be store managers to handle receiving and fulfilling tasks. In HotWax Commerce, users can be assigned specific roles such as warehouse picker, packer, clerk, receiver, or manager within the Facilities app. Role-specific permissions allow users to perform tasks according to their assigned roles, with store associates using the Store Fulfillment app and the Inventory Receiving App for various tasks.

</details>

<details>

<summary>What needs to be configured when setting up a new instance of HotWax Commerce?</summary>

When setting up a new instance of HotWax Commerce, the following configurations need to be completed: - \*\*Product Store Configuration\*\*: Set up the Product Store Name, Currency, Auto Approve Order, Auto Cancel Days, Sales Order ID Prefix, Allow Split and Product Identifier. - \*\*Initial Setup Tasks\*\*: Add DBICs, configure Product Stores, add more Product Stores, set up the company name, load facilities, and load System Property data. - \*\*User and Gateway Configuration\*\*: Create your first system user and add shipping gateways. - \*\*Shopify Integration\*\*: Connect a Shopify Store, map Shopify locations, and set up Shopify Mappings. - \*\*Solr Indexing Configuration\*\*: Manage Solr indexing for efficient data retrieval and search operations. Refer to the user manual for detailed instructions.

</details>

<details>

<summary>Will store managers see every app, even if they don't need them, or can this be configured?</summary>

HotWax Commerce uses user-level permissions to control app access. While users might see various apps on the app launchpad, they can only log in to the apps for which they have permissions. This ensures that store managers and other users only access the apps relevant to their roles.

</details>

<details>

<summary>Could a user be associated with different facilities within different apps?</summary>

Yes, a user can be associated with different facilities within different apps. The "Add Facilities" function allows administrators to associate a user with multiple facilities in the OMS, enabling users to manage fulfillment operations across different locations.

</details>

<details>

<summary>Is there a mobile app for store associates and managers?</summary>

Yes, there are several mobile apps available for store associates and managers, including: 1. \*\*HotWax Commerce's Picking App\*\*: Manages picklists. 2. \*\*HotWax Commerce's Inventory Count App\*\*: Designed for inventory management. 3. \*\*HotWax Commerce's Inventory Receiving App\*\*: Manages ASN, Purchase Orders, and Returns. 4. \*\*HotWax Commerce's BOPIS Fulfillment App\*\*: Manages Buy Online Pick-up In Store (BOPIS) functionality. 5. \*\*HotWax Commerce's Store Fulfillment App\*\*: Handles picking, packing, and shipping orders.

</details>

## Pre-orders

<details>

<summary>What are the key features and functionalities of the OMS related to pre-orders?</summary>

HotWax Commerce’s Pre-order Solution includes: - Selling inventory at full price before arrival - Managing mixed cart orders - Allocating inventory for online and physical stores - Facilitating pre-order fulfillment without risking overselling

</details>

## Reports

<details>

<summary>Is there a quick and easy damage report accessible?</summary>

Yes, HotWax Commerce provides rejection reasons in the Store Rejections with Reason Graph and Recorded Variances Report. Retailers can filter out the variance recorded with the "damaged" reason from these datasets to quickly access damage reports.

</details>

<details>

<summary>Will all retail operational reporting, like fulfillment, receiving, and cycle counting, have submitted data by user for visibility on who completed a transaction?</summary>

Yes, all operational reports will show the user who completed the action in the app.

</details>

## Transfer Orders

<details>

<summary>Are there any updates on transfer orders flowing from NetSuite to Hotwax, or is it just a creation process?</summary>

The process for transfer orders flowing from NetSuite to HotWax Commerce involves synchronization beyond just creation. It includes: - Synchronizing Transfer Orders from NetSuite to HotWax Commerce. - Creating Item Receipt records within HotWax Commerce when inventory is received. - Automating the update of Transfer Order statuses from "Pending Receipt" to "Received" in NetSuite after item receipt.

</details>

<details>

<summary>Once a transfer order is closed, will store associates be able to take action on it, or will they be restricted from making changes?</summary>

Once a transfer order is closed and completed, it is locked to prevent changes to the items or quantities shipped. However, during fulfillment, store associates can make partial shipments and add remaining items before the order is closed.

</details>

<details>

<summary>Do stores still have access to see what was transferred before?</summary>

Yes, stores have access to see what was transferred before through the Transfer Orders page in HotWax Commerce OMS.

</details>

<details>

<summary>Can transfers be prevented from overshipping?</summary>

Yes, transfer orders will not be overshipped. Store associates receive notifications when picking orders if the picked quantity cannot exceed the ordered quantity.

</details>

<details>

<summary>If a shipment is supposed to contain only shirts but there's a hat, can it be scanned in as a hat?</summary>

Yes, if a shipment is supposed to contain only shirts but there's a hat, it can be scanned in as a hat. The HotWax Commerce receiving app allows for the receiving and recording of unexpected items.

</details>

Curious about something else? Ask your questions on the [HotWax Commerce forums](https://forum.hotwax.io/) and get answers from the community!
