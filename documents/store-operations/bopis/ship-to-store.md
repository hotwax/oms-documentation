---
description: >-
  Learn about the Ship to Store feature, allowing customers to place pickup
  orders for products not immediately available at their preferred location.
---

## Overview

Ship to Store enables you to request inventory from another location when an item is out of stock at your store. Instead of canceling a customer's Buy Online, Pick-Up In Store (BOPIS) order, you can request the item from a warehouse or another store, modifying the fulfillment path to save the sale.

---

## 1. Setup and Configuration

**Note:** Only users with the `Admin` role and `Common Admin Permission` can view and modify these settings.

To enable the Ship to Store feature:

1.  Open the `Settings` menu in the BOPIS App.
2.  Locate the `Show Request Transfer` toggle.
3.  Turn the toggle `On`.

Once enabled, the `Request Transfer` button will replace the standard "Reject" action on your order screens.

---

## 2. Requesting a Transfer

If you cannot fulfill a BOPIS order from your own inventory, you can initiate a transfer request.

**Steps:**

1.  **Locate the Order:** Navigate to the order you need to transfer. The `Request Transfer` button is available on both the `Order Card` (list view) and the `Order Detail` view.
2.  **Click Request Transfer:** Select the button to begin the process.
    *   *Important:* This button replaces the standard "Reject" button when the feature is enabled.
3.  **Confirm the Action:** A confirmation dialog will appear. Confirm that you want to move this order to Ship to Store.

**Post-Request Workflow:**

*   The order moves to the `Store Pickup Rejected` queue
*   The system includes an automated brokering logic to route the order to a fulfillment store or warehouse
*   You can track the status of these requested orders by clicking the `History/Trail icon` in the top right corner of the page

---

## 3. Fulfilling the Request (Fulfillment App)

*This section applies to the warehouse or store fulfilling the transfer request.*

When you receive a Ship to Store order in your fulfillment queue:

1.  **Pick and Pack:** Process the order items as per standard operating procedures.
2.  **Select Carrier:** When generating the shipping label, the carrier list is automatically filtered.
    *   You will only see carriers that support the `SHIP_TO_STORE` shipment method
    *   This prevents shipping errors and ensures the package is routed correctly
3.  **Ship:** Complete the shipment steps. The package is now en route to the requesting store.

The `Ship to Store` page in the BOPIS App is organized into three tabs to help you track orders through their lifecycle:

### Incoming
This tab displays inventory that has been shipped and is currently in transit to your store.

When the physical shipment arrives, locate the order in this tab and label it `Arrived`. A notification is sent to the customer informing them that their order is now available for pickup, and the order moves to the `Ready for Pickup` tab.

### Ready for pickup
This tab displays orders that have physically arrived and are waiting for the customer.

When the customer comes to collect their order, verify their identity and mark it as `Handover`. The system marks the order as fulfilled and moves it to the `Completed` tab.

### Completed
This tab displays a history of all completed Ship to Store orders that have been successfully handed over to customers within the past 24 hours.
