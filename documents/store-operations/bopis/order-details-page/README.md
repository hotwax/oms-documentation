---
description: >-
  Learn about the Order Details page in the BOPIS app, which provides
  comprehensive information about orders and allows store associates to perform
  key functions.
---

# Order Details Page

Users can access the Order Details page by clicking on any order card from any of the tabs on `Orders` page, it will display all order-related information for that order such as customer’s name, order ID, customer's contact details, item details, reason for rejection and order item rejection history.

On clicking on any order card in the `Open`, `Packed` or `Completed` tab, users will be directed to the order details page. The order details page displays key details of an order and also enables store associates to perform the certain functions.

### Item Details

At the top of the Order Details page, this section displays the order name and order ID. It lists all items in order, along with their product image, primary, and secondary identifiers. If an item is part of a kit, a "KIT" tag is shown next to the item name. Each item has two buttons: a cube that shows the quantity on hand and a reject button. 

The buttons shown on an order depend on its status. When the order is in Open status, the available buttons are Ready for Pickup and Reject Items. If any item is damaged or unavailable for any reason, it should be rejected at this stage, before it is packed. Once the order is packed and marked as Ready for Pickup, the buttons change to Handover and Cancel Item. At this point, rejecting or unpacking items is not allowed. An email is also sent to the customer when the order is marked as Ready for Pickup.

Selecting Cancel Item opens a pop-up displaying a list of cancellation reasons. When an item is cancelled, an email is sent to the customer.

Below this section, the [cancellation sync job](/documents/retail-operations/workflow/job-workflows/orders.md/) status is shown. The behavior of cancellation and refund depends on the following settings:

- If both the cancellation sync job and the Shopify setting to process refunds are enabled, the cancellation and refund will be sent to Shopify.
- If the cancellation sync job is enabled but the Shopify refund setting is disabled, only the cancellation will be sent to Shopify.
- If the cancellation sync job is disabled, nothing is sent to Shopify, not the cancellation and not the refund, even if the Shopify refund setting is enabled.
- If both settings are disabled, no data is sent to Shopify.

### Reject Orders

Click on bin icon to reject the order, select an appropriate reason for rejecting the order in the pop-up window that appears, and click on the `reject item` button.

To reject an order partially, click on the bin icon for the particular item in the order that needs to be rejected, select an appropriate reason for rejecting the item in the pop-up window that appears, and click on the `reject item` button.

If items are rejected, a notification email is also sent, and the order may be re-routed. For more information, refer to the Order Re-Routing App User Manual. 

### Customer and Payment Details

The customer details section shows three things: the customer’s name, phone number, and COD amount (only if the order is Cash on Delivery).

Next is the Payment section. This shows how the customer paid, which payment gateway was used, how much was paid, and the payment status. Here are the different payment statuses: Authorized, Cancelled, Not Authorized, Not Received, Received, Refunded, Settled, or Declined.  

### Other Shipments: 
This section shows all shipments linked to the same order. Each shipment appears as a card displaying the fulfillment location, such as a warehouse or retail store, along with the shipment number.

The card includes a product image and its SKU to identify the item. The current shipment status appears on the top right of the card. For example, "Pending Allocation" means inventory hasn’t been assigned yet, while "Packed" indicates the item is ready for the next step.

This section shows how different parts of the order are being sent from different places. If the order is split between a warehouse and a store, both shipments are shown side by side. This helps store staff quickly check the status and answer customer questions about the rest of the order.

### Order Timeline: 
The Order Timeline shows all the important steps an order goes through, starting from when it is created in Shopify. It records every key update such as when the order is imported, assigned to a location, rejected, reassigned, prepared for pickup or shipping, and when it is finally picked up or marked complete.

On the top right of the timeline, the current order status is always visible. This gives a quick summary of where the order stands.

This section helps store staff understand the full progress of the order and makes it easier to respond to customer questions or check for any delays.

### Assign Picker

During the process of fulfilling a BOPIS order, store associates can assign and track pickers to ensure the pickers' commission eligibility. For open orders, users can assign pickers from a pop-up that will open on clicking the `Ready for Pickup` button on the order details page. In case they want to edit the picker for an order, they can do that using the `Edit` button on the order details page of a packed order.
