# January 2026 Release Notes

January brings updates focused on improving security for store pickups and increasing the accuracy of inventory transfers. These changes help store teams work faster while maintaining tighter data synchronization between HotWax Commerce, Shopify, and NetSuite.

## BOPIS & Fulfillment

### Proof of delivery
Store associates now follow a more secure process for Buy Online, Pick Up In Store (BOPIS) orders. The system prompts associates to confirm order details and capture proof of identity during pickup. Once an order is handed over, customers receive an automated email notification with their order details. New settings and permissions allow managers to control how this process is handled at each location.
*Sources: [bopis#699](https://github.com/hotwax/bopis/pull/699), [bopis#734](https://github.com/hotwax/bopis/pull/734), [bopis#703](https://github.com/hotwax/bopis/pull/703), [bopis#731](https://github.com/hotwax/bopis/pull/731), [oms#331](https://github.com/hotwax/oms/pull/331), [hotwax-poorti#84](https://github.com/hotwax/hotwax-poorti/pull/84)*

### Ship to store fulfillment
Several updates make fulfilling orders shipped to stores for customer pickup more reliable. The system now filters carrier options to only show those that support ship to store and preserves the selected shipment method when changing carriers. Order status tracking and completion emails now reflect the fulfillment process more accurately, and delivered shipments are indexed to improve search results in the Order Management System (OMS).
*Sources: [bopis#729](https://github.com/hotwax/bopis/pull/729), [bopis#702](https://github.com/hotwax/bopis/pull/702), [fulfillment#1555](https://github.com/hotwax/fulfillment/pull/1555), [oms#332](https://github.com/hotwax/oms/pull/332), [oms#357](https://github.com/hotwax/oms/pull/357), [hotwax-oms#359](https://github.com/hotwax/hotwax-oms/pull/359), [hotwax-oms#200](https://github.com/hotwax/hotwax-oms/pull/200), [hotwax-oms#312](https://github.com/hotwax/hotwax-oms/pull/312)*

### Order picker management
Retailers have more control over who is assigned to pick orders. The system now prevents changes to picker assignments once an order is handed over to a customer or rejected. New background services also support better indexing and assignment workflows for pickers within the OMS.
*Sources: [bopis#719](https://github.com/hotwax/bopis/pull/719), [bopis#723](https://github.com/hotwax/bopis/pull/723), [bopis#727](https://github.com/hotwax/bopis/pull/727), [oms#340](https://github.com/hotwax/oms/pull/340), [oms#341](https://github.com/hotwax/oms/pull/341), [oms#342](https://github.com/hotwax/oms/pull/342), [oms#352](https://github.com/hotwax/oms/pull/352), [hotwax-oms#232](https://github.com/hotwax/hotwax-oms/pull/232)*

### Picklist customer identification
Store associates can now see the customer’s first and last name directly on the picklist. This allows for faster identification and verification when preparing BOPIS orders for pickup.
*Sources: [hotwax-poorti#158](https://github.com/hotwax/hotwax-poorti/pull/158)*

## Inventory & Receiving

### Transfer order receipt notifications
The Receiving App now supports push notifications for new transfer orders. Store users receive immediate alerts when orders are ready for receiving, which reduces the need for manual status checks. Users can adjust these alert settings in the `Settings` view.
*Sources: [receiving#643](https://github.com/hotwax/receiving/pull/643), [receiving#644](https://github.com/hotwax/receiving/pull/644)*

### Mis-shipped item management
Store associates can now track and process items received that were not on the original transfer order. These items appear in the `Completed` tab and `Receiving History` to ensure full visibility. This data is sent to NetSuite through a new inventory adjustment feed to keep stock levels accurate across platforms.
*Sources: [receiving#621](https://github.com/hotwax/receiving/pull/621), [receiving#636](https://github.com/hotwax/receiving/pull/636), [receiving#638](https://github.com/hotwax/receiving/pull/638), [hotwax-poorti#210](https://github.com/hotwax/hotwax-poorti/pull/210), [mantle-netsuite-connector#171](https://github.com/hotwax/mantle-netsuite-connector/pull/171)*

### Inventory cycle count
The inventory counting workflow includes several improvements for data accuracy. Users can now filter out discontinued products during counts and use live search to match products. Variance review lists now include primary and secondary IDs for easier identification. Additionally, inventory logs now show which user was responsible for specific variance events.
*Sources: [inventory-count#1372](https://github.com/hotwax/inventory-count/pull/1372), [inventory-count#1363](https://github.com/hotwax/inventory-count/pull/1363), [inventory-count#1362](https://github.com/hotwax/inventory-count/pull/1362), [inventory-count#1361](https://github.com/hotwax/inventory-count/pull/1361), [inventory-count#1368](https://github.com/hotwax/inventory-count/pull/1368), [inventory-count#1365](https://github.com/hotwax/inventory-count/pull/1365), [inventory-count#1364](https://github.com/hotwax/inventory-count/pull/1364), [inventory-count#1356](https://github.com/hotwax/inventory-count/pull/1356), [inventory-count#1359](https://github.com/hotwax/inventory-count/pull/1359), [inventory-count#1342](https://github.com/hotwax/inventory-count/pull/1342), [inventory-count#1348](https://github.com/hotwax/inventory-count/pull/1348), [inventory-count#1354](https://github.com/hotwax/inventory-count/pull/1354), [hotwax-poorti#194](https://github.com/hotwax/hotwax-poorti/pull/194), [hotwax-poorti#155](https://github.com/hotwax/hotwax-poorti/pull/155), [hotwax-poorti#141](https://github.com/hotwax/hotwax-poorti/pull/141), [hotwax-poorti#150](https://github.com/hotwax/hotwax-poorti/pull/150), [hotwax-poorti#145](https://github.com/hotwax/hotwax-poorti/pull/145), [hotwax-poorti#151](https://github.com/hotwax/hotwax-poorti/pull/151), [hotwax-poorti#154](https://github.com/hotwax/hotwax-poorti/pull/154), [hotwax-poorti#156](https://github.com/hotwax/hotwax-poorti/pull/156), [hotwax-poorti#167](https://github.com/hotwax/hotwax-poorti/pull/167), [hotwax-poorti#168](https://github.com/hotwax/hotwax-poorti/pull/168), [hotwax-poorti#181](https://github.com/hotwax/hotwax-poorti/pull/181), [hotwax-poorti#178](https://github.com/hotwax/hotwax-poorti/pull/178), [hotwax-poorti#185](https://github.com/hotwax/hotwax-poorti/pull/185), [oms#363](https://github.com/hotwax/oms/pull/363), [hotwax-oms#207](https://github.com/hotwax/hotwax-oms/pull/207)*

### Transfer order lifecycle
Warehouse-to-store transfer orders are now automatically approved based on linked outbound shipments. New APIs support partial receipts and over-receiving scenarios, providing more flexibility when shipments don't match expectations. The `TransferOrderAndItem` view now includes external facility IDs to improve integration with NetSuite.
*Sources: [oms#350](https://github.com/hotwax/oms/pull/350), [oms#359](https://github.com/hotwax/oms/pull/359), [oms#368](https://github.com/hotwax/oms/pull/368), [oms#379](https://github.com/hotwax/oms/pull/379), [hotwax-poorti#164](https://github.com/hotwax/hotwax-poorti/pull/164), [hotwax-poorti#169](https://github.com/hotwax/hotwax-poorti/pull/169), [hotwax-poorti#127](https://github.com/hotwax/hotwax-poorti/pull/127), [hotwax-poorti#182](https://github.com/hotwax/hotwax-poorti/pull/182), [hotwax-poorti#173](https://github.com/hotwax/hotwax-poorti/pull/173)*

### Kit product fulfillment
Inventory for kit components is now accurately deducted during shipment creation, POS orders, and returns. This ensures that bundled products correctly update the stock levels of their individual parts, including during replacements and pullbacks of discontinued items.
*Sources: [hotwax-oms#204](https://github.com/hotwax/hotwax-oms/pull/204), [hotwax-oms#211](https://github.com/hotwax/hotwax-oms/pull/211), [hotwax-oms#237](https://github.com/hotwax/hotwax-oms/pull/237), [hotwax-oms#235](https://github.com/hotwax/hotwax-oms/pull/235), [hotwax-oms#257](https://github.com/hotwax/hotwax-oms/pull/257), [hotwax-oms#246](https://github.com/hotwax/hotwax-oms/pull/246), [hotwax-oms#225](https://github.com/hotwax/hotwax-oms/pull/225)*

### Product cost calculation
Weighted Average Cost (WAC) calculations are now more accurate across different receiving and return scenarios. The system handles negative quantities and existing values correctly, preventing unit costs from defaulting to zero. Unit costs are now also visible on the `ProductInventoryView` page.
*Sources: [hotwax-oms#197](https://github.com/hotwax/hotwax-oms/pull/197), [hotwax-oms#212](https://github.com/hotwax/hotwax-oms/pull/212), [hotwax-oms#239](https://github.com/hotwax/hotwax-oms/pull/239), [hotwax-oms#247](https://github.com/hotwax/hotwax-oms/pull/247), [oms#377](https://github.com/hotwax/oms/pull/377)*

## Orders & Payments

### Order return management
The return workflow now allows users to add or update return identification numbers from external systems. Exchange credit payments are now created only when specified by incoming return data. Additionally, data queries for vendor returns have been optimized to improve speed.
*Sources: [hotwax-oms#216](https://github.com/hotwax/hotwax-oms/pull/216), [hotwax-oms#206](https://github.com/hotwax/hotwax-oms/pull/206), [hotwax-oms#285](https://github.com/hotwax/hotwax-oms/pull/285), [hotwax-oms#367](https://github.com/hotwax/hotwax-oms/pull/367)*

### Order payment capture
HotWax now automatically creates payment capture tags when the first item in an order is fulfilled. This process includes validation for different product types to ensure physical and digital goods are handled correctly.
*Sources: [oms#388](https://github.com/hotwax/oms/pull/388), [hotwax-oms#349](https://github.com/hotwax/hotwax-oms/pull/349), [hotwax-poorti#212](https://github.com/hotwax/hotwax-poorti/pull/212)*

### Customer communication
Customers now receive automated email updates when they change their shipping method or cancel an order through the routing application. This provides immediate confirmation of their requested changes.
*Sources: [hotwax-oms#229](https://github.com/hotwax/hotwax-oms/pull/229)*

## Integrations

### Shopify data integration
The Shopify connector now synchronizes customer profiles, gift card data, order tags, and transaction history more reliably. This includes better handling of gift card refunds and order discounts. Retailers can also update Shopify order tags directly from the OMS. Standardized date handling has been added to ensure consistent time zone conversions.
*Sources: [mantle-shopify-connector#198](https://github.com/hotwax/mantle-shopify-connector/pull/198), [mantle-shopify-connector#200](https://github.com/hotwax/mantle-shopify-connector/pull/200), [mantle-shopify-connector#203](https://github.com/hotwax/mantle-shopify-connector/pull/203), [mantle-shopify-connector#206](https://github.com/hotwax/mantle-shopify-connector/pull/206), [mantle-shopify-connector#210](https://github.com/hotwax/mantle-shopify-connector/pull/210), [mantle-shopify-connector#214](https://github.com/hotwax/mantle-shopify-connector/pull/214), [mantle-shopify-connector#216](https://github.com/hotwax/mantle-shopify-connector/pull/216), [mantle-shopify-connector#217](https://github.com/hotwax/mantle-shopify-connector/pull/217), [hotwax-shopify-oms-bridge#36](https://github.com/hotwax/hotwax-shopify-oms-bridge/pull/36), [hotwax-oms#183](https://github.com/hotwax/hotwax-oms/pull/183), [hotwax-oms#192](https://github.com/hotwax/hotwax-oms/pull/192), [hotwax-oms#230](https://github.com/hotwax/hotwax-oms/pull/230), [hotwax-oms#243](https://github.com/hotwax/hotwax-oms/pull/243), [hotwax-oms#244](https://github.com/hotwax/hotwax-oms/pull/244), [hotwax-oms#254](https://github.com/hotwax/hotwax-oms/pull/254), [hotwax-oms#314](https://github.com/hotwax/hotwax-oms/pull/314), [hotwax-oms#296](https://github.com/hotwax/hotwax-oms/pull/296)*

### Shopify order reconciliation
To reduce manual review work, a new order reconciliation service automatically compares Shopify orders with internal OMS records. The service generates a report of any discrepancies and defaults to checking the previous day's data if a specific range is not provided.
*Sources: [mantle-shopify-connector#212](https://github.com/hotwax/mantle-shopify-connector/pull/212), [mantle-shopify-connector#215](https://github.com/hotwax/mantle-shopify-connector/pull/215)*

### NetSuite data synchronization
New automated data feeds improve how HotWax stays in sync with NetSuite. Functional updates include exporting inventory resets and variances, and reconciling completed transfer order items. Validations have been added to transfer order and shipment feeds to improve data quality and prevent synchronization errors.
*Sources: [mantle-netsuite-connector#194](https://github.com/hotwax/mantle-netsuite-connector/pull/194), [mantle-netsuite-connector#190](https://github.com/hotwax/mantle-netsuite-connector/pull/190), [mantle-netsuite-connector#193](https://github.com/hotwax/mantle-netsuite-connector/pull/193), [mantle-netsuite-connector#192](https://github.com/hotwax/mantle-netsuite-connector/pull/192), [mantle-netsuite-connector#62](https://github.com/hotwax/mantle-netsuite-connector/pull/62), [mantle-netsuite-connector#187](https://github.com/hotwax/mantle-netsuite-connector/pull/187), [mantle-netsuite-connector#177](https://github.com/hotwax/mantle-netsuite-connector/pull/177), [mantle-netsuite-connector#182](https://github.com/hotwax/mantle-netsuite-connector/pull/182), [mantle-netsuite-connector#175](https://github.com/hotwax/mantle-netsuite-connector/pull/175), [mantle-netsuite-connector#173](https://github.com/hotwax/mantle-netsuite-connector/pull/173), [mantle-netsuite-connector#189](https://github.com/hotwax/mantle-netsuite-connector/pull/189), [hotwax-poorti#170](https://github.com/hotwax/hotwax-poorti/pull/170)*

## User Management & Security

### User permission management
Administrators have more control over data access using permissions based on roles, facilities, and security groups. A new `Security Group and Permission` view allows for easier management of these controls. Users can now be restricted to only see inventory and screens relevant to their assigned store or warehouse.
*Sources: [hotwax-maarg-util#11](https://github.com/hotwax/hotwax-maarg-util/pull/11), [hotwax-maarg-util#12](https://github.com/hotwax/hotwax-maarg-util/pull/12), [oms#364](https://github.com/hotwax/oms/pull/364), [oms#365](https://github.com/hotwax/oms/pull/365), [oms#369](https://github.com/hotwax/oms/pull/369), [hotwax-oms#194](https://github.com/hotwax/hotwax-oms/pull/194), [hotwax-poorti#157](https://github.com/hotwax/hotwax-poorti/pull/157)*

### User account security
Login security has been updated with clearer messaging for blocked attempts. When the maximum number of failed attempts is reached, the system displays: “Too many failed login attempts. Your account has been blocked.” Additionally, the system now correctly prompts users when a password change is required for access.
*Sources: [hotwax-oms#268](https://github.com/hotwax/hotwax-oms/pull/268), [hotwax-oms#280](https://github.com/hotwax/hotwax-oms/pull/280)*

## System & Core Updates

### Agent instruction execution
This update introduces a new agent-based model where devices can receive and execute instructions directly from the server. This allows for centralized control and faster response times for device-level actions, such as inventory tasks.
*Sources: [inventory-count#1369](https://github.com/hotwax/inventory-count/pull/1369), [inventory-count#1370](https://github.com/hotwax/inventory-count/pull/1370), [hotwax-maarg-util#22](https://github.com/hotwax/hotwax-maarg-util/pull/22)*

### Application authentication flow
HotWax now supports user authentication for Shopify embedded applications using the App Bridge. This allows users to log in directly within Shopify Admin and POS environments. The facility toggle is hidden in embedded mode to provide a cleaner interface.
*Sources: [dxp-components#429](https://github.com/hotwax/dxp-components/pull/429), [dxp-components#445](https://github.com/hotwax/dxp-components/pull/445), [dxp-components#430](https://github.com/hotwax/dxp-components/pull/430), [dxp-components#451](https://github.com/hotwax/dxp-components/pull/451)*

### Inventory availability API
A new API endpoint allows for requesting Available-to-Promise (ATP) quantities for multiple products in a single call. This reduces network traffic and speeds up inventory checks for online orders.
*Sources: [oms#360](https://github.com/hotwax/oms/pull/360)*