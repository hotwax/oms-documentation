
## Steve Madden's Future Systems Architecture: Integration with M3 (ERP) and Predict Spring (POS)

This document outlines the roles and interactions of various systems in Steve Madden's (SM) envisioned architecture, with a focus on the detailed responsibilities of each system in the transition to M3 as the Enterprise Resource Planning (ERP) system and Predict Spring as the Point of Sale (POS) system.

### Core Systems and Their Detailed Responsibilities

1.  **M3 (ERP):**

    *   **Inventory Management:**
        *   Maintains a central repository of inventory data, including quantities, locations, and status (available, on order, reserved, etc.).
        *   Tracks inventory movements through receipts, shipments, transfers, and adjustments.
        *   Manages item master data, including SKUs, descriptions, attributes, and costing information.
        *   Generates reports on inventory levels, turnover, and performance.
    *   **Purchase Order Management:**
        *   Creates and manages purchase orders for replenishing inventory.
        *   Tracks PO status (open, partially received, closed) and receipt history.
        *   Calculates landed costs and updates item costs accordingly.
    *   **Financial Data:**
        *   Records financial transactions related to sales, purchases, and inventory.
        *   Generates financial reports for accounting and analysis.
    *   **Available to Promise (ATP):**
        *   Calculates real-time available inventory based on current stock levels, incoming orders, and reservations.
        *   Provides accurate inventory availability information to HotWax Commerce for order promising and allocation.
    *   **Integration:**
        *   Exposes APIs to share inventory updates with HotWax Commerce, ensuring real-time stock information.
        *   Receives sales order updates from HotWax Commerce to trigger fulfillment processes and update inventory accordingly.

2.  **HotWax Commerce (OMS):**

    *   **Order Management:**
        *   Receives sales orders from Shopify (e-commerce) and Predict Spring (POS).
        *   Validates orders for accuracy and completeness.
        *   Orchestrates order routing and fulfillment logic based on inventory availability, shipping rules, and customer preferences.
        *   Manages order status throughout the fulfillment lifecycle (pending, processing, shipped, etc.).
        *   Handles cancellations, returns, and exchanges.
        *   Communicates order updates to Shopify and Predict Spring.
    *   **Inventory Orchestration:**
        *   Receives inventory updates from M3 and other sources.
        *   Aggregates inventory data from multiple locations (warehouses, stores).
        *   Calculates available inventory for different sales channels.
        *   Sends real-time inventory updates to Shopify and Predict Spring.
        *   Manages inventory reservations for orders and allocations.
    *   **Pre-order/Backorder Management:**
        *   Identifies items eligible for pre-order or backorder based on future inventory availability.
        *   Communicates pre-order/backorder availability and estimated ship dates to Shopify for display to customers.
        *   Manages the release and fulfillment of pre-order/backorder items when inventory arrives.
    *   **Unfillable Order Management:**
        *   Identifies orders that cannot be fulfilled due to lack of inventory.
        *   Initiates order brokering to find alternative fulfillment locations.
        *   Cancels or holds orders based on predefined rules.
    *   **Order Brokering:**
        *   Determines the optimal fulfillment location (warehouse, store, or drop-ship) for each order item.
        *   Considers factors like inventory availability, proximity to customer, shipping costs, and business rules.
        *   Splits orders into multiple shipments if necessary.
    *   **Integration:**
        *   Provides APIs to receive sales orders and send inventory updates to Shopify and Predict Spring.
        *   Integrates with M3 to receive inventory updates and send sales order information.

3.  **Shopify (E-commerce):**

    *   **Online Storefront:**
        *   Presents product catalog to customers, including product details, images, pricing, and availability.
        *   Handles customer registration, login, and profile management.
        *   Provides a shopping cart and checkout process.
    *   **Order Placement:**
        *   Sends customer orders, including shipping and payment details, to HotWax Commerce for processing.
        *   Displays order status and tracking information to customers.
    *   **Inventory Updates:**
        *   Receives real-time inventory updates from HotWax Commerce to display accurate product availability.
        *   Manages product information, pricing, and promotions.

4.  **Predict Spring (POS):**

    *   **In-Store Transactions:**
        *   Processes sales and returns in physical stores.
        *   Handles various payment methods (cash, credit card, etc.).
        *   Prints receipts and customer documentation.
    *   **Order Placement:**
        *   Sends in-store sales orders to HotWax Commerce for processing and fulfillment.
    *   **Inventory Updates:**
        *   Receives real-time inventory updates from HotWax Commerce to display accurate product availability in stores.
        *   Can be used to check inventory levels in other stores or warehouses.