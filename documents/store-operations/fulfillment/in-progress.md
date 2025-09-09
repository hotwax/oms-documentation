---
description: >-
 The "In Progress" tab contains orders that have been picked and moved from the "Open" tab. This page is dedicated to the packing stage of fulfillment. Here, associates can activate gift cards, generate documents such as shipping labels and packing slips, and complete the remaining fulfillment steps.
---

# In Progress Orders Page

## Filter Orders by Picker

Store associates can filter orders by picker to view orders assigned to a specific individual for fulfillment. Only one picker can be selected at a time, and the page then displays only the orders assigned to that picker.  

In the top-right corner, a result size filter also allows associates to limit the number of orders they see at one time (e.g., 5, 10, or 20). This feature can be combined with the picker filter. For instance, if an associate selects a picker and "5" from the result size filter, the page will show only five orders assigned to that picker.

## Print Picklist

At the bottom of the page, associates have several options for managing the picklist.  

In the bottom-right corner, they can reprint the list using the `Print Picklist` button or change the assigned picker by selecting the adjacent `Edit Picker` button.  

## Bulk Packing

Store associates can pack multiple orders simultaneously by tapping the `Pack Orders` button. This bulk action applies only to the orders currently displayed, which can be controlled by filters.  

For example:  
- If the view is filtered to show five orders for a specific picker, only those five orders will be packed.  
- If no filters are active, the action will apply to all orders visible on the page.  

Upon tapping the button, a confirmation pop-up will appear, indicating the total number of orders to be packed. This window also provides an option to select which documents, such as packing slips or shipping labels, should be printed as part of the process.  

Store associates can check or uncheck the boxes for:  
- Shipping labels  
- Packing slip  

Once ready, tap `Pack` to complete the packing process and print the selected documents.

## Order Details Card

Store associates can pack orders individually. Each order is displayed on a card that contains the following information:  

- **Left Side**: Customer name, order date, and time.  
- **Center**: Order ID  
- **Right Side**: Shipping method  

Below this header, the card lists each product's details and image. For each item, associates can tap the `Check stock` button (box icon) to view its available inventory or the `Reject` button (bin icon) to reject the item from the order. When rejecting an item, a reason must be selected (e.g., "Mismatch," "Damaged," or "Worn Display").  

To pack the items, associates use the `Add Box` button to assign products to boxes. The maximum number of boxes allowed is equal to the total number of items in the order. For instance, an order with two items can be packed into a maximum of two boxes. The `Add Box` button will become inactive once this limit is reached.  

To pack an order, associates need to tap the `Pack Order` button on the order card. This opens a pop-up where they can choose whether to print the shipping labels and the packing slip. After confirming, they can tap `Pack` in the pop-up to complete the packing process.  

After tapping the `Pack` button, if the shipping label generation fails, a pop-up displays:  
*"We couldn’t retrieve a shipping label from the carrier (UPS, FedEx, etc.). To pack this order, please add tracking details."*  

To proceed, store associates:  
- Generate a label using a different carrier.  
- Manually enter tracking details.  
- Reject the order with a reason if tracking information isn’t available.  

The `Shipping Label Error` button is also available; it opens up a pop-up with the specific error details provided by the carrier partner.  

To view more information about an order, store associates need to tap on the order name. A pop-up will appear with the options to **Copy ID** and **View Order Details**. Tapping on **View Order Details** will redirect them to the Order Details page.

## Order Details Page

The order details page here shows all the same basic details as in the Open Orders tab. Store associates can pack the order, mark it as shipped, or reject it if required. This page shows the **Shipment Method** card, which shows the carrier name, the shipping method, and the tracking code.  

When an order has more than one shipment, this screen displays all of them. Staff can check which shipments are already fulfilled, which ones are in progress, and if any are pending or cannot be fulfilled.

## Handling Order Rejections

Store associates can reject items from an order if they cannot be fulfilled from the current store. When this happens, the rejected items are moved to a virtual facility called **Rejected Item Parking**. As these items are not cancelled, they are kept aside so the system can try to assign them to another location.  

For this to work, at least one brokering rule must be set to pick up orders from **Rejected Item Parking**. This helps make sure the order can still be fulfilled from a different store or warehouse.  

To understand the full process, go to the [Rejection Workflow](documents/store-operations/fulfillment/rejection.md).

## Shipping Label Generation

A shipping label is provided by the carrier and pasted onto the package. The label includes details such as the shipping address, delivery address, carrier name, shipping method, tracking number, and barcode. As the package progresses through various steps, such as pickup, sorting, and delivery, the label is scanned. These scans update the tracking information, which is shared with the customer.  

To generate the shipping label, tap the `Pack Order` button on the order card. A pop-up window will open, offering the option to print the shipping label and packing slip. After selecting the options, tap `Pack` to finish packing and get the label.

### Specific Details which is included in the Shipping Label:

#### Multi-packaging Label Behavior
For carriers that support multi-package shipments, HotWax OMS generates individual shipping labels for each package under a single shipment ID. When a shipment includes multiple packages, the OMS sends a request to the carrier specifying the total number of packages, and the carrier returns labels for each package linked to the same shipment ID.

#### Label Display Format
Every carrier generates shipping labels in a different format. Some carriers provide labels as PDF files, while others send them as images or image bytes. HotWax OMS caters to these formats and can render them as images for display.

#### Display Behavior
The Fulfillment App handles label display based on the format received from the carrier:  

- **Single tab display**: When the carrier sends the label in an image format, the app opens a new tab that shows both the packing slip (generated by HotWax) and shipping label together. This combined view makes it easy to see all shipment information in one place.  
- **Two-tab display**: When the carrier sends the label as a PDF file, it will open in two new tabs. One tab displays the packing slip, and the other tab shows the shipping label. This separation is necessary because PDF labels require a different rendering than the packing slip format.
