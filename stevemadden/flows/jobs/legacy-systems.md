# Legacy systems

This document outlines additional scheduled jobs involved in the integration between Steve Madden (SM) systems, primarily focusing on financial data, inventory updates, purchase orders, and communication with the XStore POS system.

### Financial Data Transfer

*   **Financial Feed (HC to ORSI):** This job is responsible for transferring financial data from HotWax Commerce (HC) to the ORSI ERP system on a daily basis at 11:20 AM EDT. It is crucial for ensuring financial data consistency between the two systems and should be closely monitored to ensure timely and accurate transfer.

### Inventory Synchronization

*   **Inventory Feed (ORSI to HC):** This daily job imports inventory data from ORSI into HC at 6:45 AM EDT, updating stock levels and ensuring accurate inventory information in HC.
*   **Inventory feed (HC to XStore) & (XStore to HC):** These jobs synchronize inventory data between HC and the XStore POS system. The exact timing (TBD) indicates these jobs may be configured for specific store hours or operational needs. Monitoring these jobs is crucial for maintaining consistent inventory levels across all sales channels.

### Order and Shipment Management

*   **WMI - Shipment (HC to ORSI):** This job transmits shipment data from HC to ORSI every 30 minutes between 7:15 AM and 11:15 PM EDT. It is essential for keeping ORSI updated on order fulfillment progress.
*   **WMI - Shipment Completion (ORSI to HC):**  This job communicates shipment completion status from ORSI to HC every 30 minutes starting at 8:00 AM EDT. It ensures HC reflects the latest shipment status for accurate order tracking and customer communication.
*   **WMI - Rejected Shipment (ORSI to HC):**  This job informs HC of any rejected shipments from ORSI every 30 minutes starting at 8:10 AM EDT. This helps HC to manage exceptions and take necessary actions.

*   **PO feed (ORSI to HC):** This job imports purchase order (PO) data from ORSI to HC daily at 7:00 AM EDT. It updates HC with the latest information on incoming stock, enabling better inventory planning and management.
*   **CAS Feed (Internet Orders) (HC to XStore):** This job sends internet order data from HC to the XStore POS system daily at 11:30 PM EDT. This ensures that store associates have visibility into online orders, allowing them to process returns for online orders initiated by walk-in customers.