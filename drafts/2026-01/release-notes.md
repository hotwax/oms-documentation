# January 2026 Release Notes

January updates focus on store-level operations and inventory accuracy. We introduced proof of delivery for pickups, better tracking for store transfers, and improved how kit products are handled across the system.

## Receiving App
### Transfer order notifications
The Receiving App now supports push notifications for new transfer orders. This delivers real-time alerts to your device when orders are ready for processing, which removes the need to refresh the app manually. You can manage these notification preferences within the `Settings` view.
*Sources: [receiving#643](https://github.com/hotwax/receiving/pull/643), [receiving#644](https://github.com/hotwax/receiving/pull/644)*

### Transfer order discrepancy tracking
You can now track mis-shipped items directly within the application during transfer order receiving. These items appear in the `Completed` and `All` tabs after the receiving process is finished for better visibility into discrepancies. We also added a new API endpoint to support reporting on these mis-shipped items for downstream systems like NetSuite.
*Sources: [receiving#621](https://github.com/hotwax/receiving/pull/621), [receiving#636](https://github.com/hotwax/receiving/pull/636), [receiving#638](https://github.com/hotwax/receiving/pull/638), [hotwax-poorti#210](https://github.com/hotwax/hotwax-poorti/pull/210)*

### Transfer order receipt reconciliation
The system now handles complex receiving scenarios, including over-receiving and combined shipments, by distributing quantities across shipment receipt records. We updated Transfer Order APIs to report shipped quantities more reliably for better visibility during fulfillment and receiving. These changes support flexible fulfillment models and improve data accuracy in the app.
*Sources: [hotwax-poorti#127](https://github.com/hotwax/hotwax-poorti/pull/127), [hotwax-poorti#182](https://github.com/hotwax/hotwax-poorti/pull/182), [oms#359](https://github.com/hotwax/oms/pull/359), [hotwax-poorti#173](https://github.com/hotwax/hotwax-poorti/pull/173)*

## BOPIS App
### Proof of delivery
We added a new proof of delivery workflow to capture customer identity and confirmation during order pickup. Store associates can collect a signature or upload an ID directly within the order details for accurate record-keeping. The system automatically sends a confirmation email to the customer after a successful pickup. You can manage settings and permissions for this feature in the application settings.
*Sources: [bopis#699](https://github.com/hotwax/bopis/pull/699), [bopis#734](https://github.com/hotwax/bopis/pull/734), [bopis#703](https://github.com/hotwax/bopis/pull/703), [bopis#731](https://github.com/hotwax/bopis/pull/731), [oms#331](https://github.com/hotwax/oms/pull/331), [hotwax-poorti#84](https://github.com/hotwax/hotwax-poorti/pull/84)*

## Order Management System
### Ship-to-store fulfillment
HotWax Commerce now supports a complete ship-to-store order journey. The system restricts carrier options to those that support ship-to-store, tracks when orders arrive at the store, and automatically sends handover notifications to customers when their order is ready for pickup. These updates also include improvements to order status filtering and data synchronization for better reporting.
*Sources: [bopis#729](https://github.com/hotwax/bopis/pull/729), [hotwax-oms#359](https://github.com/hotwax/hotwax-oms/pull/359), [hotwax-oms#226](https://github.com/hotwax/hotwax-oms/pull/226), [hotwax-oms#227](https://github.com/hotwax/hotwax-oms/pull/227), [bopis#702](https://github.com/hotwax/bopis/pull/702), [fulfillment#1555](https://github.com/hotwax/fulfillment/pull/1555), [oms#332](https://github.com/hotwax/oms/pull/332), [oms#357](https://github.com/hotwax/oms/pull/357), [hotwax-oms#200](https://github.com/hotwax/hotwax-oms/pull/200), [hotwax-oms#312](https://github.com/hotwax/hotwax-oms/pull/312), [hotwax-oms#229](https://github.com/hotwax/hotwax-oms/pull/229)*

### Kit order management
This release improves inventory accuracy for kit products during point-of-sale (POS) transactions and returns. The system now correctly deducts inventory for all kit components when a sale or return is processed, including replacements and discontinued items. The system can also create inventory records with a default location when importing POS orders for new products to make sure stock is visible immediately.
*Sources: [hotwax-oms#204](https://github.com/hotwax/hotwax-oms/pull/204), [hotwax-oms#211](https://github.com/hotwax/hotwax-oms/pull/211), [hotwax-oms#225](https://github.com/hotwax/hotwax-oms/pull/225), [hotwax-oms#235](https://github.com/hotwax/hotwax-oms/pull/235), [hotwax-oms#246](https://github.com/hotwax/hotwax-oms/pull/246), [hotwax-oms#257](https://github.com/hotwax/hotwax-oms/pull/257), [hotwax-oms#183](https://github.com/hotwax/hotwax-oms/pull/183), [hotwax-oms#192](https://github.com/hotwax/hotwax-oms/pull/192), [hotwax-oms#195](https://github.com/hotwax/hotwax-oms/pull/195), [hotwax-oms#293](https://github.com/hotwax/hotwax-oms/pull/293)*

### Inventory cost calculation
The Weighted Average Cost (WAC) calculation now accounts for receiving transactions, including returns and negative on-hand quantities. This prevents the WAC from incorrectly resetting to zero when processing returns or receiving stock into negative positions. You can also see the unit cost displayed on the `ProductInventoryView` page.
*Sources: [hotwax-oms#197](https://github.com/hotwax/hotwax-oms/pull/197), [hotwax-oms#212](https://github.com/hotwax/hotwax-oms/pull/212), [hotwax-oms#239](https://github.com/hotwax/hotwax-oms/pull/239), [hotwax-oms#247](https://github.com/hotwax/hotwax-oms/pull/247), [oms#377](https://github.com/hotwax/oms/pull/377)*

### Digital product payment capture
The system now creates a payment capture tag automatically when the first item in an order ships or is delivered. This automation identifies if items are physical or digital to start the capture process as soon as the order is fulfilled. This reduces manual work and results in faster payment reconciliation.
*Sources: [oms#388](https://github.com/hotwax/oms/pull/388), [hotwax-oms#349](https://github.com/hotwax/hotwax-oms/pull/349), [hotwax-poorti#212](https://github.com/hotwax/hotwax-poorti/pull/212)*

## Inventory Count App
### Inventory count management
The Inventory Count app now filters out discontinued products during searches to help focus your counts. We added confirmation prompts before you remove scan data to prevent accidental deletions. Batch processing for product identifiers also makes the variance review list load faster. Additionally, the app now handles missing quantity-on-hand data more effectively during synchronization for more reliable counts.
*Sources: [inventory-count#1372](https://github.com/hotwax/inventory-count/pull/1372), [inventory-count#1363](https://github.com/hotwax/inventory-count/pull/1363), [inventory-count#1368](https://github.com/hotwax/inventory-count/pull/1368), [inventory-count#1362](https://github.com/hotwax/inventory-count/pull/1362), [inventory-count#1365](https://github.com/hotwax/inventory-count/pull/1365), [inventory-count#1361](https://github.com/hotwax/inventory-count/pull/1361), [inventory-count#1364](https://github.com/hotwax/inventory-count/pull/1364), [inventory-count#1356](https://github.com/hotwax/inventory-count/pull/1356), [inventory-count#1359](https://github.com/hotwax/inventory-count/pull/1359), [inventory-count#1342](https://github.com/hotwax/inventory-count/pull/1342), [inventory-count#1348](https://github.com/hotwax/inventory-count/pull/1348), [inventory-count#1354](https://github.com/hotwax/inventory-count/pull/1354)*

## Integrations
### Shopify data reconciliation
The Shopify connector now identifies discrepancies between Shopify orders and HotWax Commerce records and generates a CSV report for your review. This reconciliation service includes dynamic time management to process recent orders or a specific date range. Transaction retrieval now includes retry logic for better reliability, and Shopify order creation now incorporates discount applications correctly.
*Sources: [mantle-shopify-connector#212](https://github.com/hotwax/mantle-shopify-connector/pull/212), [mantle-shopify-connector#215](https://github.com/hotwax/mantle-shopify-connector/pull/215), [mantle-shopify-connector#254](https://github.com/hotwax/mantle-shopify-connector/pull/254), [mantle-shopify-connector#204](https://github.com/hotwax/mantle-shopify-connector/pull/204), [hotwax-oms#230](https://github.com/hotwax/hotwax-oms/pull/230), [hotwax-oms#243](https://github.com/hotwax/hotwax-oms/pull/243), [hotwax-oms#244](https://github.com/hotwax/hotwax-oms/pull/244)*

### NetSuite connector data feed
The NetSuite connector now synchronizes transfer order items, receipts, and inventory variances automatically. We added controls to stop shipment and receipt data from syncing for orders that are not yet fully integrated with NetSuite to prevent errors. A new inventory reset flow allows you to reconcile inventory discrepancies by exporting only the variances to NetSuite.
*Sources: [mantle-netsuite-connector#62](https://github.com/hotwax/mantle-netsuite-connector/pull/62), [mantle-netsuite-connector#189](https://github.com/hotwax/mantle-netsuite-connector/pull/189), [mantle-netsuite-connector#177](https://github.com/hotwax/mantle-netsuite-connector/pull/177), [mantle-netsuite-connector#175](https://github.com/hotwax/mantle-netsuite-connector/pull/175), [mantle-netsuite-connector#171](https://github.com/hotwax/mantle-netsuite-connector/pull/171), [mantle-netsuite-connector#194](https://github.com/hotwax/mantle-netsuite-connector/pull/194), [mantle-netsuite-connector#190](https://github.com/hotwax/mantle-netsuite-connector/pull/190), [mantle-netsuite-connector#192](https://github.com/hotwax/mantle-netsuite-connector/pull/192), [mantle-netsuite-connector#173](https://github.com/hotwax/mantle-netsuite-connector/pull/173), [mantle-netsuite-connector#187](https://github.com/hotwax/mantle-netsuite-connector/pull/187), [mantle-netsuite-connector#182](https://github.com/hotwax/mantle-netsuite-connector/pull/182)*

### Embedded app authentication
Retailers using Shopify Embedded Apps can now log in directly within the Shopify Admin and POS environments. This update uses a new authentication flow through the Shopify App Bridge. You will see a consistent login process without having to navigate away from the native Shopify interface.
*Sources: [dxp-components#429](https://github.com/hotwax/dxp-components/pull/429), [dxp-components#445](https://github.com/hotwax/dxp-components/pull/445), [dxp-components#430](https://github.com/hotwax/dxp-components/pull/430)*

## System & Core Updates
### Facility access control
Inventory data access now follows user facility associations. The system restricts inventory views and management actions to the facilities linked to each user's profile. Additionally, Inventory Logs now show the name of the user who recorded a variance event when you hover over the entry.
*Sources: [hotwax-oms#194](https://github.com/hotwax/hotwax-oms/pull/194), [hotwax-oms#207](https://github.com/hotwax/hotwax-oms/pull/207)*