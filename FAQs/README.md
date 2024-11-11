---
description: Frequently Asked Questions about HotWax Commerce OMS
---

# Frequently Asked Questions

<details>
<summary>How does HotWax Commerce integrate with Return Management Systems like Happy Returns, Loop Returns, or Returnly in the context of Shopify?</summary>
HotWax Commerce does not serve as a Return Management System for online orders. Instead, it integrates with Shopify to handle returns processed through third-party return management apps like Happy Returns, Loop Returns, or Returnly. Once the return process is successfully completed in Shopify, HotWax Commerce downloads the return data. This information is then seamlessly sent to the ERP systems for financial and accounting purposes without the need for direct integration between ERP and Return Management Systems. This streamlined integration is facilitated by HotWax Commerce's built-in capabilities for seamless data transfer between Shopify and ERP systems.
</details>
<details>
<summary>Customers and CSR teams can cancel orders up to which stage of the fulfillment process?</summary>
Shopify doesn't support customer cancellations, but CSR teams can cancel orders from the Shopify Admin Panel. Orders can be canceled on Shopify up until they're packed and not yet shipped in HotWax Commerce.
</details>
<details>
<summary>How can the CSR team cancel orders when orders are routed to a store or the fulfillment process is initiated for the order?</summary>
CSRs are responsible for notifying the stores about order cancellations. This enables store managers to utilize the Fulfillment App to unpack the specific order and halt the fulfillment process. Subsequently, CSRs can proceed to cancel orders either through the Shopify Admin Panel. HotWax Commerce downloads the canceled orders from Shopify and cancels them in HotWax Commerce; the canceled orders are automatically removed from the Fulfillment App.
</details>
<details>
<summary>Which API is used to download return items in HotWax Commerce? What are the fields that API checks in Shopify to import returns?</summary>
The API used to download return items in HotWax Commerce checks the "Refund" status in Shopify for orders created after the last job run.
</details>
<details>
<summary>Does HotWax Commerce allow appeasement creation? How does HotWax Commerce handle appeasements?</summary>
HotWax Commerce does not have a direct feature for retailers to create appeasements. Instead, Customer Service Representative (CSR) teams can create appeasements to address customer concerns in Shopify. When an appeasement is generated, HotWax Commerce downloads this information along with refund details.
</details>
<details>
<summary>Can retailers set a maximum order limit for their stores?</summary>
Yes, retailers can set a maximum order limit for their stores. This is done through the Online Order Fulfillment card, where users can manage the order fulfillment capacity of the facility. They have the option to set the fulfillment capacity to unlimited, no capacity, or a custom number, effectively setting a maximum order limit that can be allocated to that facility.
</details>
<details>
<summary>When a store reaches its max order capacity, is the available inventory reduced to zero, or can existing inventory still be sold?</summary>
When a store reaches its maximum order capacity, the available inventory is not automatically reduced to zero. The setting of the store's fulfillment capacity to its maximum limit affects the ability to broker new orders to that facility but does not directly impact the inventory levels or the ability to sell existing inventory. Users have the option to set the fulfillment capacity to "Unlimited capacity," "No capacity," or a "Custom" number of orders that can be allocated to that facility. Setting the capacity to "No capacity" prevents any new orders from being brokered to the facility, but this is a separate consideration from the inventory level itself, which is managed independently.
</details>
<details>
<summary>How does the routing logic work when multiple stores can meet the Service Level Agreement (SLA)?</summary>
When multiple stores can meet the Service Level Agreement (SLA), the routing logic works by utilizing configurable order routing. This process involves finding a set of orders and permissible inventory based on a set of filters, then allocating the order items to the selected inventory. The routing logic evaluates orders and facilities against multiple, sequential rule-sets with unique attributes and conditions. This deep customization allows for real-time revisions to routing parameters, optimizing fulfillment based on various criteria such as proximity, facility order limit, and inventory balance.
</details>
<details>
<summary>How does HotWax Commerce check inventory levels when routing orders?</summary>
During the order routing process, HotWax Commerce conducts SKU-level inventory checks and gives priority to stores with the highest inventory levels in order to balance inventory effectively.
</details>
<details>
<summary>How can the fulfillment team prioritize orders that need to be fulfilled same-day or next day?</summary>
The fulfillment team can prioritize orders that need to be fulfilled same-day or next day by using the Daily Unfulfilled Expedited Orders Report. This report provides a granular view of all the unfulfilled same-day/next-day delivery orders, helping to identify the order’s last brokered location with brokering time. Furthermore, the fulfillment team can filter orders based on the shipment method in the Fulfillment App to prioritize same-day or next-day orders.
</details>
<details>
<summary>If we need to prioritize any specific order for fulfillment, how can I do that?</summary>
CSRs can manually release a specific order from the brokering queue to a fulfillment location from the order view page. This way, they can ensure that any specific order is prioritized for fulfillment.
</details>
<details>
<summary>Is it possible for a team of store associates to collaborate on completing a picking job for a given picklist?</summary>
Yes, it is possible for a team of store associates to collaborate on completing a picking job for a given picklist. By turning the toggle off for the "Only show my picklists" filter, users can see picklists of other users within a facility, making collaboration during fulfillment simpler.
</details>
<details>
<summary>Does HotWax Commerce automatically adjust inventory levels when recording an inventory variance?</summary>
Yes, HotWax Commerce automatically adjusts inventory levels when recording an inventory variance. When store managers log inventory variances for specific products using the Inventory Count App, they input the desired increment or decrement of inventory from the total stock in the Quantity field. Upon completion, tapping the Log Variance button updates the inventory count in the HotWax Commerce OMS and subsequently on the e-commerce platform and ERP systems.
</details>
<details>
<summary>Is it possible to configure the reasons for inventory variances and their effect on inventory?</summary>
Yes, it is possible to configure the reasons for inventory variances and their effect on inventory. Retailers can manage which rejection reasons they want to offer their staff to choose from if they're unable to fulfill items in an order. Additionally, they can configure whether a rejection reason from the fulfillment app should impact inventory at the store. Users have the flexibility to choose whether specific rejection reasons result in an actual change to the store's inventory or merely serve as a rejection without affecting stock levels.
For example, if the reason (Enumeration) enumTypeId is not REPORT_NO_VAR, the rejection will impact inventory. If inventory should be depleted when a rejection reason is used, REPORT_VAR enumTypeId will lead to changes in store inventory. When a rejection reason should eliminate all remaining inventory for the item being rejected, set the type to REPORT_ALL_VAR.
</details>
<details>
<summary>When an inventory variance is recorded for an order item, does HotWax Commerce ensure that new orders containing this specific item are not routed to that particular location again?</summary>
HotWax Commerce automatically sets the inventory of an order item to zero if the inventory variance "not in stock" is recorded for it. In the case of other variance reasons, retailers can decide whether they want to zero out the inventory for that product through the rejections page in the HotWax Commerce Fulfillment App.
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
<summary>Does HotWax Commerce offer Ship to Store functionality?</summary>
Yes, HotWax Commerce offers Ship to Store functionality.
</details>
<details>
<summary>How does HotWax Commerce ensure same-day shipping orders are shipped on the same day?</summary>
HotWax Commerce ensures same-day shipping orders are shipped on the same day through a structured process involving real-time eligibility checks and inventory verification, as outlined in the Soft Allocation feature. The process includes the following steps:
1. Obtain the customer's latitude and longitude: This is done either by converting the customer's postal code using the postCodeLookup API or by obtaining the coordinates directly from the customer's device if they allow access to their system location.
2. Compare against the store's coordinates: By evaluating the proximity between the customer's location and the store's location, HotWax Commerce determines the feasibility of meeting the same-day delivery requirement.
3. Evaluate serviceable areas: The system assesses whether the customer's address falls within the store's serviceable area.
4. Prioritize orders for same-day delivery: Orders meeting these criteria are prioritized to ensure timely fulfillment.
By employing these measures, HotWax Commerce effectively supports same-day shipping orders and enhances the efficiency of the fulfillment process.
</details>
<details>
<summary>Is there a configuration in HotWax Commerce to turn off the fulfillment of shipping orders from stores, while still allowing BOPIS (Buy Online Pick Up In Store) orders?</summary>
Yes, in HotWax Commerce, you can configure a facility to disable the fulfillment of shipping orders while still allowing BOPIS (Buy Online Pick Up In Store) orders. This is done by setting the online fulfillment capacity to 0. Additionally, ensure the "Allow Pickup" setting is toggled on to enable BOPIS for the selected facility.
</details>
<details>
<summary>Which APIs does HotWax Commerce utilize to check inventory availability in stores located in close proximity to customers?</summary>
HotWax Commerce utilizes the "postcodeLookup" API to convert a customer's postal code into latitude and longitude coordinates, and the "storeLookup" API to find available pickup locations within a designated radius from the customer's location.
</details>
<details>
<summary>If an order item is rejected from a store, will it automatically reroute to another location?</summary>
Yes, all rejected orders from a store are automatically rerouted to another location in the next brokering cycle.
</details>
<details>
<summary>Does HotWax Commerce's BOPIS App also support shipping orders?</summary>
Yes, HotWax Commerce's BOPIS App supports shipping orders. For stores managing both BOPIS and Ship from Store orders, the Show Shipping Orders feature can be enabled. This allows users to view and fulfill regular orders brokered to their store by the OMS directly within the BOPIS app. Users can easily control this setting using the toggle button to enable or disable it as needed.
</details>
<details>
<summary>Is there a way to track products that are imported from Shopify into HotWax and ensure that nothing goes amiss amongst the products getting imported?</summary>
Yes, HotWax Commerce provides a way to track products that are imported from Shopify. When importing products from Shopify to HotWax Commerce, HotWax Commerce keeps track of the "created_at" field of products in Shopify. It identifies any products that were created after the last import and imports them into HotWax Commerce's product catalog. This ensures that all newly added products are synchronized and nothing goes amiss during the import process.
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
<summary>What is the best way to search an order in HotWax Commerce?</summary>
To search for an order in HotWax Commerce, you can use the following methods:
1. **Search by Shopify Order ID, Order Name, or External ID**: Store associates can quickly find the relevant sales order by entering essential details such as the Shopify order ID, order name, or external ID on the Create Returns page.
2. **Use the Order Search Functionality**: HotWax Commerce provides an order search functionality that allows you to search for orders based on various criteria such as order number, customer information, shipping address, billing details, and payment information.
3. **Utilize Filters and Sorting**: HotWax Commerce offers filters and sorting options to narrow down your search results. You can filter orders based on different parameters such as order status, order date, location, sales channel, and more.
4. **Use Advanced Search Options**: HotWax Commerce may provide advanced search options that allow you to search for orders using specific criteria or custom fields. These options can vary based on the configuration and customization of your HotWax Commerce instance.
</details>
<details>
<summary>Can a SKU variant be added to HotWax Commerce by updating the Shopify product listing?</summary>
Yes, HotWax Commerce automatically syncs all newly added products and variants from the Shopify product listing through the import products job. This job runs at scheduled intervals, downloading all products and variants added since the last job run. Retailers can also schedule a sync products job to update all product changes from Shopify.
</details>
<details>
<summary>How does HotWax Commerce handle fulfillment and inventory changes during a bi-annual inventory count?</summary>
HotWax Commerce provides the capability to disable online fulfillment from facilities during a bi-annual inventory count. Retailers can adjust fulfillment capacity to 0 or remove the facility from order brokering and pickup groups to prevent new orders from arriving at those locations. This feature allows merchants to conduct their inventory counts without interruptions or changes to inventory levels.
</details>
<details>
<summary>How do you configure your Product Store in HotWax Commerce?</summary>
In HotWax Commerce, retailers can configure brand-specific settings through the Product Store. The platform offers a dedicated Company app that allows retailers to create and manage their Product Store efficiently.
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
Auto-releasing checks inventory count and promise date of an item. An item cannot be released if there’s no promise date on it. If a merchant does not manage promise dates but still wants an automated process, they can choose to broker orders directly from the pre-order parking.
Brokering pre-order parking will allow sending orders for fulfillment even if there is no promise date using the same brokering rules a merchant has set up for normal orders. Additionally, a merchant can also configure a custom set of brokering rules specifically to broker orders right from pre-order parking.
</details>
<details>
<summary>If merchants manage multiple products that are on pre-orders, is it possible to know which product is performing better than others? Does HotWax have any report which contains this data?</summary>
Yes, HotWax Commerce OMS provides the **Daily Pre-Order Product Performance report** which helps merchandisers analyze the performance of products on Pre-Order. This report assists in identifying the best and least-performing Pre-Order products, guiding future strategies and decisions regarding product assortment.
</details>
<details>
<summary>Is it necessary to import order details into HotWax Commerce for instant purchases made in a retail store?</summary>
Yes, even if a customer makes an instant purchase in a retail store, HotWax Commerce imports the order details into the Order Management System and syncs them with the ERP system for accounting purposes. This ensures a comprehensive overview of all orders and accurate financial tracking.
</details>
<details>
<summary>Does HotWax Commerce completely delete a variant from its database when a merchant removes it from a product on Shopify, or does it retain the variant in some form over time?</summary>
When a merchant deletes a variant of a product on Shopify, HotWax Commerce de-links that variant from the parent product but does not delete it immediately. The variant is marked as deleted but kept in the database for return management purposes. It is considered a soft deletion.
</details>
<details>
<summary>How does HotWax Commerce feed inventory to other systems?</summary>
The computed inventory by HotWax Commerce can be pushed in two ways to other systems:
1. **Inventory Feed from HotWax Commerce**: HotWax Commerce provides a feed of inventory that can be used by the retailer’s development team to transform as per the specification and file format expected by their system.
2. **HotWax Commerce Integration Platform**: Alternatively, the HotWax Commerce Integration Platform can integrate with other systems to sync inventory.
</details>
<details>
<summary>Does HotWax Commerce allow import and export of data?</summary>
Yes, HotWax Commerce allows for the import and export of data. The Master Data Manager within HotWax Commerce provides users with the ability to manually import and export data, offering functionalities such as cross-referencing systematically imported data, seamless data modification, and auditing features.
</details>
<details>
<summary>How are user roles and responsibilities maintained in the OMS?</summary>
User roles and responsibilities in the Order Management System (OMS) are maintained through a combination of user account categories and the assignment of specific permissions based on those roles and responsibilities. Users are divided into:
- **Individual User Accounts**: Created for specific users with designated roles and access privileges.
- **Generic Facility Logins**: For shared use within a facility, allowing multiple users to access fulfillment applications without individualized access privileges.
</details>
<details>
<summary>How does the OMS synchronize inventory with Shopify, and does it support a two-way sync?</summary>
The OMS (Order Management System), represented by HotWax Commerce, synchronizes inventory with Shopify primarily in a one-way sync from HotWax Commerce to Shopify. The synchronization process includes:
1. **Batch Jobs for Bulk Sync**: Regular batch jobs ensure that no product updates are missed. The 'Upload recent inventory change' job identifies products with inventory changes and updates Shopify.
2. **Hard Sync**: A 'Hard Sync' job synchronizes inventory counts of all products from HotWax Commerce to Shopify once a day.
While the primary direction of synchronization is from HotWax Commerce to Shopify, order synchronization (from Shopify to HotWax Commerce) is supported, including handling open sales orders, new orders, and order updates. Inventory levels, however, are primarily updated from HotWax Commerce to Shopify.
</details>
<details>
<summary>How are products loaded into the OMS? Is it automated from Shopify? Are there considerations for potential data corruption when updating products from Shopify?</summary>
HotWax Commerce uses a configurable job to download products from Shopify. This job handles:
- Initial product downloads
- Updates to product information
- Importing newly added products
- Deleting products no longer available in Shopify
For more details, refer to the documentation. Considerations for potential data corruption are addressed by robust import processes and error handling mechanisms to ensure data integrity.
</details>
<details>
<summary>Can rules be configured to control the visibility and availability of inventory online for specific stores?</summary>
Yes, rules can be configured to control the visibility and availability of inventory online for specific stores. This is managed through the "Sell inventory online" card on the facility details page, allowing retailers to decide whether a facility will participate in inventory computation for a channel by enabling or disabling the toggle for the sales channel of the facility.
</details>
<details>
<summary>How does the OMS handle safety stock and store inventory management?</summary>
The OMS handles safety stock and store inventory management through:
1. **Safety Stock**: Reserved stock at stores to prevent all stock from being committed to online orders. Inventory drops below a threshold to reserve stock for in-store sales.
2. **Bulk Safety Stock Feature**: Enables efficient management of safety stock for multiple products and facilities through CSV file uploads.
3. **Inventory Changes Based on Rejection Reasons**: Adjustments are made based on reasons when orders are rejected from the store fulfillment app.
4. **Manage Reasons**: Retailers can configure rejection reasons that impact inventory at the store level.
</details>
<details>
<summary>How does the OMS handle alternate fulfillment options for BOPIS orders, especially when a store rejects a pickup order?</summary>
After rejecting an item or order, customers receive an email with alternate fulfillment options selected by the retailer. The options include:
- Picking up from a different store, with the order sent to the corresponding fulfillment center.
- Choosing home delivery, with the order brokered to determine the most suitable fulfillment location.
</details>
<details>
<summary>Is the workflow for alternate fulfillment options configurable, and can it be customized based on specific business requirements?</summary>
Yes, the workflow for alternate fulfillment options is configurable and can be customized based on specific business requirements. Retailers can set rules and processes for handling rejected BOPIS orders and alternate fulfillment options according to their operational needs.
</details>
<details>
<summary>What are the key features and functionalities of the OMS related to pre-orders?</summary>
HotWax Commerce’s Pre-order Solution includes:
- Selling inventory at full price before arrival
- Managing mixed cart orders
- Allocating inventory for online and physical stores
- Facilitating pre-order fulfillment without risking overselling
</details>
<details>
<summary>How configurable are the routing rules for orders in HotWax Commerce, particularly for splitting orders?</summary>
HotWax Commerce routing rules are fully configurable based on retailer requirements. For detailed instructions on configuring routing rules, refer to the order routing user manual.
</details>
<details>
<summary>Is there a mobile app for store associates and managers to manage orders?</summary>
Yes, there are several mobile apps available for store associates and managers, including:
1. **HotWax Commerce's Picking App**: Manages picklists.
2. **HotWax Commerce's Inventory Count App**: Designed for inventory management.
3. **HotWax Commerce's Inventory Receiving App**: Manages ASN, Purchase Orders, and Returns.
4. **HotWax Commerce's BOPIS Fulfillment App**: Manages Buy Online Pick-up In Store (BOPIS) functionality.
5. **HotWax Commerce's Store Fulfillment App**: Handles picking, packing, and shipping orders.
</details>
<details>
<summary>If the toggle for a facility channel is turned on, will the inventory be immediately increased?</summary>
HotWax Commerce updates inventory through two different jobs: "Upload Recent Inventory Changes" and "Hard Sync." The "Upload Recent Inventory Changes" job only sends deltas for existing inventory in Shopify. To immediately increase the inventory when a facility's inventory is added or removed from a channel, run the "Hard Sync" job. Navigate to the Inventory page in the Job Manager app of HotWax Commerce and manually execute the "Hard Sync" job to reset the inventory of all products.
</details>
<details>
<summary>If a user is going to be receiving and fulfilling, do they need to be a store manager?</summary>
No, users do not need to be store managers to handle receiving and fulfilling tasks. In HotWax Commerce, users can be assigned specific roles such as warehouse picker, packer, clerk, receiver, or manager within the Facilities app. Role-specific permissions allow users to perform tasks according to their assigned roles, with store associates using the Store Fulfillment app and the Inventory Receiving App for various tasks.
</details>
<details>
<summary>What needs to be configured when setting up a new instance of HotWax Commerce?</summary>
When setting up a new instance of HotWax Commerce, the following configurations need to be completed:
- **Product Store Configuration**: Set up the Product Store Name, Currency, Auto Approve Order, Auto Cancel Days, Sales Order ID Prefix, Allow Split and Product Identifier.
- **Initial Setup Tasks**: Add DBICs, configure Product Stores, add more Product Stores, set up the company name, load facilities, and load System Property data.
- **User and Gateway Configuration**: Create your first system user and add shipping gateways.
- **Shopify Integration**: Connect a Shopify Store, map Shopify locations, and set up Shopify Mappings.
- **Solr Indexing Configuration**: Manage Solr indexing for efficient data retrieval and search operations.
Refer to the user manual for detailed instructions.
</details>
<details>
<summary>How can retailers decide how much inventory is allowed to sell on an inventory channel?</summary>
Retailers can manage inventory allocation by creating online channel facility groups for each sales channel. By adding facilities to the corresponding channel facility group, retailers determine which facilities' inventory is available for sale on each channel. This allows for effective control and management of inventory distribution across different sales channels.
</details>
<details>
<summary>Will store managers see every app, even if they don't need them, or can this be configured?</summary>
HotWax Commerce uses user-level permissions to control app access. While users might see various apps on the app launchpad, they can only log in to the apps for which they have permissions. This ensures that store managers and other users only access the apps relevant to their roles.
</details>
<details>
<summary>Does Automatic shipping also apply to Transfer Orders?</summary>
No, transfer orders are not automatically marked as shipped. Transfer orders may contain multiple items that cannot all be packed in a single day, leading to partial packing. Therefore, automatic shipping does not apply to transfer orders.
</details>
<details>
<summary>What does the "Reject All" button in the fulfillment app do inventory-wise?</summary>
When users click "Reject All" in the fulfillment app, all open orders are rejected and removed from the Open Orders page. For in-progress orders, clicking "Reject All" will reject all in-progress orders and remove them from the In-Progress Orders page. All rejected orders are moved to the brokering queue again. However, the "Reject All" button does not impact inventory. To prevent orders from being brokered to that facility again, the max order capacity should be set to 0.
</details>
<details>
<summary>If there's a flood and a store needs to reject everything, can they reject all or set their capacity to zero, then reject all?</summary>
Yes, a store can reject all orders in bulk and set their capacity to zero. To reject all orders, click on the 'Reject All' icon at the top right corner of the in-progress screen. To set the order capacity of the facility to '0', click on the Fulfillment Capacity chip on the Online Order Fulfillment card and select the No Capacity option from the menu.
</details>
<details>
<summary>Will rejection reports indicate which employee rejected the items?</summary>
Yes, rejection reports will indicate the name of the employee who rejected the order.
</details>
<details>
<summary>Could a user be associated with different facilities within different apps?</summary>
Yes, a user can be associated with different facilities within different apps. The "Add Facilities" function allows administrators to associate a user with multiple facilities in the OMS, enabling users to manage fulfillment operations across different locations.
</details>
<details>
<summary>Can multiple users receive the same inbound shipment at the same time? Can it be submitted twice?</summary>
A shipment can only be received once in an OMS session. If it is open on two devices simultaneously, only the first submission will be processed. Subsequent submissions will not be accepted.
</details>
<details>
<summary>When doing a damage adjustment and the cycle came up, are logging a variance. If the reason is selected as damage and one is put as a quantity, it's green in the audit trail. If you write just one, does it increment the inventory?</summary>
When logging a variance due to damage and selecting "damaged" as the reason, entering a quantity of 1 (or any positive number) does not decrement the inventory. The inventory variance needs to be explicitly logged to ensure accurate inventory adjustment.
</details>
<details>
<summary>Is there a quick and easy damage report accessible?</summary>
Yes, HotWax Commerce provides rejection reasons in the Store Rejections with Reason Graph and Recorded Variances Report. Retailers can filter out the variance recorded with the "damaged" reason from these datasets to quickly access damage reports.
</details>
<details>
<summary>Will all retail operational reporting, like fulfillment, receiving, and cycle counting, have submitted data by user for visibility on who completed a transaction?</summary>
Yes, all operational reports will show the user who completed the action in the app.
</details>
<details>
<summary>Are there any updates on transfer orders flowing from NetSuite to Hotwax, or is it just a creation process?</summary>
The process for transfer orders flowing from NetSuite to HotWax Commerce involves synchronization beyond just creation. It includes:
- Synchronizing Transfer Orders from NetSuite to HotWax Commerce.
- Creating Item Receipt records within HotWax Commerce when inventory is received.
- Automating the update of Transfer Order statuses from "Pending Receipt" to "Received" in NetSuite after item receipt.
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
<details>
<summary>Is there a way to force route an entire order if one of the items in it is rejected?</summary>
Retailers can disable partial rejection to ensure that if one inventory item is not available, all other items in that order are also rejected. The entire order will be rerouted to a different facility with available inventory.
</details>

Curious about something else? Ask your questions on the [HotWax Commerce forums](https://forum.hotwax.io/) and get answers from the community!


