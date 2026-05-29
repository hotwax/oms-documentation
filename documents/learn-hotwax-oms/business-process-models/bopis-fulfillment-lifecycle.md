# BOPIS Fulfillment Lifecycle

The Buy Online, Pick Up In Store (BOPIS) Fulfillment Lifecycle Business Process Model (BPM) illustrates how HotWax Commerce's BOPIS Fulfillment App enables store associates to manage BOPIS orders from the moment an order arrives at the store to the moment a customer walks out with their purchase.

HotWax Commerce, acting as an Order Management System, routes approved BOPIS orders directly to the customer's chosen pickup store with no brokering needed. The fulfillment location is pre-selected by the customer at checkout. Once the order is allocated, it surfaces automatically in the BOPIS Fulfillment App for store associates to act on.

## BOPIS fulfillment flow

1. Receive order notification  
2. Pick items  
3. Pack and mark ready for pickup  
4. Hand over to customer

## Assign pickup orders

When a customer places a BOPIS order on eCommerce, HotWax Commerce downloads it alongside all other orders using the Import Orders job.

HotWax Commerce automatically assigns the order to the customer's selected pickup store without entering the standard brokering queue. Items allocated to a store are assigned a fulfillment status of "Reserved" in HotWax Commerce.

### Why BOPIS skips brokering

Unlike standard orders, BOPIS orders don't compete for the optimal fulfillment location. The customer has already chosen where to pick up. HotWax Commerce honors that choice and sends the order directly to the designated store.

## Receive order notification

Once a BOPIS order lands in the store's queue, the BOPIS Fulfillment App sends a notification to store associates. A bell icon in the top right of the app shows new incoming orders so associates can take action without delay.

The `Open Orders` page lists all orders awaiting action. Each order card shows the order name, product image, SKU, time since order creation, and current inventory count. Associates can tap the card to open the full `Order Details` page, which includes the customer's name, contact information, payment details, other shipments, and a complete order timeline.

Items are sorted in a First In, First Out sequence by default, so older orders are prioritized.

## Picking

Store associates locate the items in the store and prepare them for the customer. To begin, associates can print a picklist directly from the order card using the printer icon. The picklist opens as a PDF and shows the order number, product details, and quantities to pick.

For orders containing kit products, a Kit tag appears on the order card. Associates can tap the three-dot menu to see the individual components of the kit.

### Picking failure

If a store associate cannot locate an item because it is out of stock, damaged, or mislabeled, a store manager can reject the order or individual items.

### When does picking failure occur?

A picking failure happens when the physical inventory does not match what HotWax Commerce shows as available. Common causes:

* Item is out of stock at the store  
* Item is damaged and unfit for sale

Store managers have two rejection options when inventory is missing for an order with multiple items:

* **Partial rejection:** Reject only the unavailable item. The remaining items stay in the order, and the rejected item is sent to the BOPIS Rejected Queue for rerouting or customer notification.  
* **Full rejection:** Reject the entire order. The full order is sent to the BOPIS Rejected Queue.

When an order is rejected, an email is automatically sent to the customer outlining alternative fulfillment options such as pickup from another store or home delivery. Retailers configure which options are available based on their fulfillment strategy.

## Pack and mark ready for pickup

Once items are picked, the associate packs the order and taps `Ready for Pickup` on the order card. This moves the order to the `Packed Orders` page and triggers a pickup-ready email to the customer.

On the `Packed Orders` page, associates can resend the pickup notification using the mail icon on the order card, or generate a packing slip using the print icon. If picker tracking is enabled in settings, a prompt will appear when associates tap `Ready for Pickup` on the `Open Orders` page, allowing them to select their name from the list before the order moves to the `Packed Orders` view.

### Gift card activation

If an order includes a physical gift card, a gift box icon appears on the order card. Associates activate the gift card before handing it over by scanning or typing the serial number printed on the card, then tapping `Activate`. Once activated, the code cannot be changed.

### Unpacking an order

If a packing mistake is discovered, associates can open the `Order Details` page to unpack the order. This returns the items back to the `Open Orders` tab so they can be re-verified and corrected before handover.

## Hand over to customer and order completion

When the customer arrives, the store associate locates the order on the `Packed Orders` page and taps `Handover`. A confirmation prompt appears to verify the items are correct and the customer has received them. Once confirmed:

* The order status updates from "Approved" to "Completed" in HotWax Commerce.  
* The Completed Orders job in HotWax Commerce marks the order as "Fulfilled" in  eCommerce.  
* The order moves to the Completed Orders page.

If the Proof of Delivery (POD) setting is enabled, associates record the name, ID number, relationship to customer, phone, and email of the person picking up the order. This creates a verifiable handover record. If the pickup person is the billing customer, the same as the customer checkbox pre-fills their details.

### Completed orders

The `Completed Orders` tab shows all orders that have been successfully handed over. Each card displays the order ID, customer name, and product details. Associates can download a packing slip using the `Print Customer Letter` button. No further fulfillment actions such as rejection or cancellation can be taken from this page. The `Order Timeline` on the details page logs every event from order creation to pickup.

## Ship to Store

Ship to Store handles BOPIS orders where the requested item is not available for same-day pickup at the customer's chosen store. Instead of rejecting the order, store associates can initiate a Transfer Request to have the item shipped from another store or warehouse to the pickup location.

When the `Show Request Transfer` toggle is enabled in `Settings`, the `Request Transfer` button replaces the standard `Reject` action on order cards and detail pages.

### Ship to Store page

The Ship to Store page is organized into three tabs:

* **Incoming:** Orders that have been shipped from the fulfillment location and are in transit. When the shipment arrives, the associate marks it as `Arrived`. A notification goes to the customer and the order moves to the `Ready for Pickup` tab.  
* **Ready for pickup:** Orders physically at the store, waiting for the customer. When the customer collects the order, the associate marks it as `Handover`. The order moves to `Completed`.  
* **Completed:** All Ship to Store orders handed over in the past 24 hours.

The BOPIS Fulfillment Lifecycle demonstrates how HotWax Commerce gives store associates everything they need to fulfill pickup orders quickly and accurately. From the moment an order lands in the app to the moment a customer picks it up, every step, including notification, picking, packing, handover, and proof of delivery, is tracked and reflected in both HotWax Commerce and eCommerce in real time.
