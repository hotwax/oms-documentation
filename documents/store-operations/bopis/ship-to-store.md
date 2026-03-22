---
description: >-
  Learn about the Ship to Store feature, allowing customers to place pickup
  orders for products not immediately available at their preferred location.
---

# Ship to Store

The `Ship to Store` feature helps customers in placing pickup orders for products that are not immediately available for same-day fulfillment at their preferred location. Users of the BOPIS app can find the `Ship to Store` page by clicking on the `Ship to Store icon (represented by a trail sign)` on the top right corner of the `Orders` page.

Shopify retailers can install the HotWax Commerce BOPIS PDP App within their Shopify stores enabling their customers to select a specific future timeframe for their pickup. Customers will see an estimated pickup timeframe directly on the product detail page, displayed as "Pick up in x days”.

Once the order is downloaded, HotWax Commerce categorizes it as a "Ship to Store" order and brokers it to a facility from where the inventory will be shipped to the pickup location. After a fulfillment location has been designated, store employees can use the following steps to monitor and fulfill `Ship to Store` orders:

1.  **Locate the Ship to Store Section:** Click on the `Ship to Store icon (represented by a trail sign)` on the top right corner of the `Orders` page. This will redirect the user to the `Ship to Store` page.
2.  **Search for Orders:** Users can use the `Search` bar on the top left of the page to find orders using customer name or order ID.

---

## 1. Setup and Configuration

**Note:** To view and modify these settings, the user must have the `Admin` role or the `APP_REQUEST_TRANSFER_UPDATE` permission.

To enable the Ship to Store feature:

1.  Open the `Settings` menu in the BOPIS App.
2.  Locate the `Show Request Transfer` toggle.
3.  Turn the toggle `On`.

Once enabled, the `Request Transfer` button will automatically replace the standard "Reject" action on the order screens.

---

## 2. Requesting a Transfer

If you cannot fulfill a BOPIS order from your own inventory, you can initiate a transfer request.

**Steps:**

1.  **Locate the Order:** Navigate to the order you need to transfer. The `Request Transfer` button is available on both the `Order Card` (list view) and the `Order Detail` view.
2.  **Click Request Transfer:** Select the button to begin the process.
    *   *Important:* This button replaces the standard "Reject" button when the feature is enabled.
3.  **Confirm the Action:** A confirmation dialog will appear. Confirm that you want to move this order to Ship to Store.

**Post-Request Workflow:**

*   The order moves to the `Store Pickup Rejected` queue.
*   The system includes an automated brokering logic to route the order to a fulfillment store or warehouse.
*   You can track the status of these requested orders by clicking the `Ship to Store icon (represented by a trail sign)` in the top right corner of the page.

---

## 3. Fulfilling the Request (Fulfillment App)

*This section applies to the warehouse or store fulfilling the transfer request.*

When you receive a Ship to Store order in your fulfillment queue:

1.  **Pick and Pack:** Process the order items as per standard operating procedures.
2.  **Select Carrier:** When generating the shipping label, the carrier list is automatically filtered.
    *   You will only see carriers that support the `SHIP_TO_STORE` shipment method.
    *   This prevents shipping errors and ensures the package is routed correctly.
3.  **Ship:** Complete the shipment steps. The package is now en route to the requesting store.

---

## 4. Lifecycle of a Ship to Store Order

The `Ship to Store` page in the BOPIS App is organized into three tabs to help you track orders through their lifecycle:

### Incoming
This tab displays inventory that has been shipped from the fulfillment center and is currently in transit to your store.

When the physical shipment arrives, locate the order in this tab and label it `Arrived`. A notification is automatically sent to the customer informing them that their order is now available for pickup, and the order moves to the `Ready for Pickup` tab.

### Ready for pickup
This tab displays orders that have physically arrived at your store and are waiting for the customer.

When the customer comes to collect their order, verify their identity and mark it as `Handover`. The system marks the order as fulfilled and moves it to the `Completed` tab.

### Completed
This tab displays a history of all completed Ship to Store orders that have been successfully handed over to customers within the past 24 hours.

<figure><img src="https://github.com/user-attachments/assets/1ce90a47-c320-4d12-8747-cd356667bdcd" alt=""><figcaption></figcaption></figure>
