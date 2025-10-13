---
description: The Open Orders page allows store associates to view and manage newly assigned orders that are pending fulfillment. On this page, store associates can filter orders, review order details, pick individual orders or pick orders in batches, print picklists, and begin the fulfillment process.
---

# Open Orders Page

## Notifications

Whenever a new order is assigned to a store for fulfillment, store associates receive a notification to take action. To access the notifications, tap the bell icon in the top right corner of the page.

## Filters

### Shipping Methods
Store associates can filter orders by shipping method.  

- To see same-day delivery orders, filter it by `Same Day`  
- To see next-day delivery orders, filter it by `Next Day`  
- To see standard delivery orders, filter it by `Standard`

### Picklist Size
By default, you see 10 orders in a page. To increase the number of orders to be displayed, tap the `Picklist Size` in the top right corner and choose the number of orders you want to see at once.

{% hint style="info" %}
You can use shipping methods filters and picklist size together. For example, to see 15 next-day delivery orders, filter it by `Next Day` and in Picklist Size, select “15 orders”.
{% endhint %}

## Bulk Rejection

Store associates can use the `Reject All` button to reject all visible orders at once. This bulk action applies only to the orders currently visible on the screen. Associates can use filters to control which orders are rejected.  

For example:  
- If the view is filtered to show five orders with `Same Day` shipping method, tapping `Reject All` will apply only to those five orders.  
- If no filters are applied, the action will affect all orders.  

This functionality is also available in the `In Progress` tab.

## Print Picklist

To begin bulk order picking, store associates can tap the `Print Picklist` button. The generated picklist will only include the orders currently visible on the page.  

For instance:  
- If the view is filtered to show only five `Same Day` orders, the picklist will contain just those five orders.  
- If no filters are active, the list will include all open orders.

After tapping the button, a pop-up window will appear, listing all pickers associated with the store. A search bar is available to help locate a specific picker.  

- By default, only pickers from the current store are displayed.  
- Users with `STOREFULFILLMENT_ADMIN` permissions can see all pickers across all stores.  

The final output format of the picklist is determined by the `FF_DOWNLOAD_PICKLIST` setting:  
- If enabled, the picklist will be downloaded as a CSV file.  
- If not, it will open as a PDF in a new browser tab.  

## Order Details Card

The Order Details Card displays key order information:  

- **Customer name, date, and time**: so they know who placed the order and when.  
- **Order ID**: this can be tapped to open more actions.  
- **Shipping method and last brokering time**: helps them see if it’s a standard or next-day order, and when it was last processed.  
- **Product image and details**: gives a quick view of the item, including its image, SKU, and name. The image can also be opened in full view.  
- **Check stock button**: tapping on it displays the number of units currently in stock.  

Store associates can pick individual orders using the Order Details Card.  

To start picking, they can tap on the Order ID, and a pop-up appears with three options:  
- **Copy ID** – if they just need to copy the order number.  
- **Pick Order** – if they’re ready to start picking that order.  
- **View Details** – takes them to the full Order Details page for more information.  

## Order Details Page

The Order Details Page shows more detailed information about the order.  
It displays:  
- Order ID  
- Order number  
- Payment methods (prepaid or cash on delivery)  
- Order status  
- Customer name & Date and time the order was placed  
- Product details like the product name, SKU, and size  
- Customer details (name, phone number, and full address)  
- Details of other shipments in the order  

The same details are also shown when viewing the Orders Details Page in the `In Progress` and `Completed` tabs.

From this page, store associates can:  
- Pick the order if items are available  
- Reject the order if items are not available  
- Pack and ship the order  

Once they tap `Pick Order`, the status changes and the order moves to the `In Progress` tab.  
After packing, the order moves to the `Completed` tab.

