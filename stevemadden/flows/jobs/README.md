## Steve Madden Integration Job Schedule

### Inventory Management

*   **IMP_PICKER:** Imports employee data into HotWax Commerce (HC) on a daily basis at 6:30 AM. This data is essential for assigning pickers to orders in the warehouse.
*   **UPL_INVT_FRM_ORSI:** Uploads and processes inventory data from the ORSI ERP system into HC daily at 7:15 AM. After this job completes, the updated inventory information is sent to Shopify.
*   **shopifySyncInventory:** Synchronizes the inventory data between HC and Shopify once a day at 7:15 AM, ensuring consistency across both platforms.
*   **AVG_INV_COST_FEED:** Imports average inventory cost data from ORSI into HC daily at 7:15 AM.
*   **AVG_INV_LND_CST_FEED:** Imports average landed cost data from ORSI into HC every 2 hours. This data is used for pricing and financial calculations.
*   **IMP_ASN_PO_FEED:** Fetches Advanced Shipping Notice (ASN) and Purchase Order (PO) feeds from ORSI and updates HC accordingly. This job runs every 2 hours to keep HC's order and inventory data up-to-date.
*   **GEN_INV_MNT_FILE:** Generates inventory maintenance files every hour, which are used to update inventory information in the XStore POS system, reflecting any changes made in HC.

### Order Management

*   **IMP_SHOPIFY_ORD:** Imports sales orders from Shopify into HC every 5 minutes, ensuring a near real-time flow of order data for fulfillment. This job has high priority to ensure timely processing of customer orders.
*   **IMP_SHOPIFY_PROD:** Imports product data from Shopify into HC every 15 minutes. This job is essential for maintaining accurate product information in HC.
*   **CANCEL_SHOPIFY_ORD:** Cancels Shopify orders in HC every hour. This job is triggered when an order needs to be canceled for various reasons (e.g., customer request, out-of-stock items).
*   **CNCL_SHPFY_ORD_ITM:** Cancels specific order items within Shopify orders in HC every hour. This allows for partial cancellations when only some items in an order are unavailable.
*   **IMP_SHOPIFY_RETURNS:** Imports return data from Shopify into HC every 15 minutes. This ensures that HC's return data is in sync with Shopify.
*   **EXPORT_INTERNET_ORDRE:** Exports internet orders to MNT files once a day at 11:30 PM. These files are likely used for further processing or analysis.

### Order Brokering and Fulfillment

*   **BROKERING_10_00, BROKERING_01_30:** These jobs handle the brokering process, which involves determining the optimal fulfillment location (warehouse or store) for each order. They run at 10:00 AM and 1:30 PM EST respectively.
*   **REBROKERING:** This job continuously re-evaluates unfulfilled orders every 30 minutes from 7 AM to 2 PM EST, attempting to find a fulfillment location if inventory becomes available or other conditions change. It has high priority to ensure timely fulfillment of pending orders.
*   **SF_SHIP_ORDERS:** Marks all shipments as "shipped" in the system at 1:00 AM daily. This job likely automates the process of updating order statuses after shipments are physically sent out.
*   **SG_AUTO_CANCEL:** Automatically cancels order items that remain unfulfilled after a certain period at 1:00 AM daily.

### Financial Reporting and Other

*   **PRE_OD_SHIP_REPORT:** Generates an hourly report on pre-order item shipments, likely used for tracking and planning purposes.
*   **UNFILLABLE_07_30:** Brokers unfillable orders (those without available inventory) at 7:30 AM ET daily. This job prioritizes fulfilling these orders if inventory becomes available.
*   **AUTO_RLS_PREORDER:** Automatically releases pre-orders daily at 7:30 AM if inventory is available and the promised date has been reached. This job runs after the unfillable orders job.
*   **releasedPreOrderItemsReport:** Generates a report on released pre-order items, likely for monitoring and analysis purposes.
*   **FINANCIAL_FEED:** This job generates financial data from HC at 11:20 PM EST. It is crucial that this job completes before the Mule job that sends this financial data to ORSI.