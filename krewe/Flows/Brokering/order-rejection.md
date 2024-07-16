---
description: Learn how store managers can efficiently reject orders and manage order fulfillment from alternate facilities to maintain operational efficiency.
---
# Bulk order reallocation

In certain situations, a facility may be unable to fulfill orders due to adverse conditions like storms. In such cases, it's essential to exclude the affected facility from participating in fulfillment and redirect orders to another facility. This document provides a step-by-step guide on how to exclude a facility from new order brokering and designate another facility for fulfillment.

### Steps to Exclude a Facility from New Order Brokering

1. **Log In to Launchpad**
   - Navigate to [launchpad.hotwax.io](https://launchpad.hotwax.io) and log in with your credentials.

2. **Access the Facilities App**
   - Scroll to the bottom of the page.
   - Under the Administration section, click on the `Facilities app`.

3. **Search for the Facility**
   - Use the search bar at the top left of the page to find the facility you want to exclude by typing its name.

4. **Open Facility Details**
   - Click on the facility to open its details page.

5. **Adjust Order Fulfillment Capacity**
   - Locate the `Online Order Fulfillment` card.
   - Click on the `Unlimited` button next to the text indicating the total number of orders allocated to this facility.
   - Select `No capacity` to ensure no new orders get brokered to this facility. Refer to this [user guide](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/configure-fulfillment-capacity) for more details on Online Order Fulfillment capacity.
     
### Steps to Reject Orders in Bulk

1. Add Facility to the OMS Fulfillment Group**
   - Locate the `Fulfillment Settings` card on the facility details page.
2. Toggle on the button for `Uses native fulfillment app` to add the facility to the `OMS fulfillment group`. This ensures the facility is visible in the `Fulfillment` app and all orders allocated to this facility can be rejected in bulk. Refer to the [user guide](https://docs.hotwax.co/documents/orders/fulfillment/rejection#bulk-order-rejection) for instructions on how to reject orders in bulk.

### Steps to Enable Order Fulfillment from Another Facility

1. **Search for the Facility**
   - Go to the Facilities app and search for the facility you want to use for fulfilling the rejected orders.

2. **Open Facility Details**
   - Click on the facility to open its details page.

3. **Add Facility to the Appropriate Fulfillment Group**
   - If the facility will use the HotWax fulfillment app for fulfilling the orders, add it to the `OMS fulfillment group`.
   - If order fulfillment will be done through NetSuite, add the facility to the `NetSuite fulfillment group`.
     - To add the facility to the group:
       - Scroll down to the bottom of the facility details page.
       - Click on the `Groups` button on the right side of the page.
       - Click on the `Link to Groups` button.
       - In the `Add Group` window, select the fulfillment group.
       - Click on the `save` icon to add the facility to the group.

4. **Set Fulfillment Capacity for the New Facility**
   - To ensure orders get brokered to this facility, set the online order fulfillment capacity to `Unlimited` or specify a custom capacity.

5. **Enabling Online Inventory Sales for the New Facility**
   - To enable the facility to sell its inventory online, toggle on the `online facility group` button on the Sell Inventory Online card on the facility details page.


