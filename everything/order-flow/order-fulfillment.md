---
description: >-
  Explore the streamlined process of order fulfillment in HotWax Commerce, from
  receiving order details to final shipment.
---

# Order Fulfillment

Upon receiving order details from the HotWax Commerce, the designated fulfillment center facility is promptly notified, initiating the next phase of the order fulfillment process. Store associates efficiently receive the order instructions in the fulfillment app, ensuring seamless communication and coordination, where the regular orders will move to the fulfillment app and customers who have opted for the BOPIS will move to the BOPIS app.

Subsequently, the ordered items meticulously go for Pick, Pack and Shipping.

### Pick

Navigate to the `Open Orders` page to view all pending orders sent to this facility for fulfillment. You'll find the total number of queued orders prominently displayed at the top of the page, giving you an immediate overview of the workload.

Orders are listed in a `First In, First Out` sequence, but you can apply service level agreement based on shipping methods to prioritize fulfillment. To generate a picklist, simply click on the `Print Picksheet` function.

If you need to assign a new picker to the orders, Navigate to the user management app and create a new user and there we can find an option of `show as a picker` and can add the user as the picker.

To reprint the picklist, go to the "In Progress" tab and click on the `Print Picklist` button located at the bottom right corner of the page. If you need to change the assigned picker, you can do so on the same page by selecting the "Edit Picker" button next to the "Print Picklist" button.

Store managers have the additional option to generate a QR code by clicking on the `GENERATE QR CODE` button located in the bottom-left corner. Pickers can scan this QR code with their mobile devices to access their picklist directly. Pickers can pick the orders assigned to them in the picking [app](https://docs.hotwax.co/user-guides/orders/fulfillment/pickingapp).

### Pack

This happens in the in-progress tab, once orders are picked and ready to pack, store associates can select boxes in which the order items will be packed and generate the `packing slip` and `shipping label.`

#### Steps to pack the order items in the shipping boxes:

1. Navigate to the specific order details within the In Progress tab of the Fulfillment App.
2. Within the order details section, locate and click on the Add Boxes option.
3. Add the required number of boxes corresponding to the order items, ensuring adequate packaging space without excess boxes. Store associates can choose to pack multiple order items into one box, reducing shipping costs and environmental impact.
4. Upon adding boxes, store associates can further specify box types for individual order items. Click on the select box option against the order item and navigate through the dropdown menu to select the appropriate option corresponding to each item's size and packaging requirements.
5. After appropriately packing all items and selecting box types click Pack to update the shipping carrier for shipping label generation with the least shipping charges for the selected boxes.

### Ship

When the order is ready to ship, the packed orders are transferred to the shipping area where carrier partners can pick the orders for delivery.

#### Steps to Ship Orders:

1. Go to the Completed tab, you can see all the orders on a FIFO basis.
2. Click Ship Orders function at the top to mark the orders as shipped in bulk. If Ship Packed Orders is enabled, all packed orders will be shipped. Enable the `isTrackingRequired` setting on shipping methods that should not be automatically be shipped unless they have tracking codes.

In the event that the packing slip or shipping label is damaged after packing an order, it can be regenerated from the completed tab.
