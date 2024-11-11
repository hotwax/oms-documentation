---
description: >-
  Learn about the Order Details page in the BOPIS app, which provides
  comprehensive information about orders and allows store associates to perform
  key functions.
---

# Order Details Page

Users can access the Order Details page by clicking on any order card from any of the tabs on `Orders` page, it will display all order-related information for that order such as customer’s name, order ID, customer's contact details, item details, reason for rejection and order item rejection history.

On clicking on any order card in the `Open`, `Packed` or `Completed` tab, users will be directed to the order details page. The order details page displays key details of an order and also enables store associates to perform the certain functions.

### Reject Orders

During peak hours or promotional events, brick-and-mortar retail locations often face increased in-store traffic, heightening the risk that the requested item for pick-up may become unavailable due to in-store purchases. In such instances, store associates may need to reject an order or reject an order partially in case the order item inventory is insufficient at the store. Partial order rejection feature can be enabled using the toggle on the settings page.

To reject an entire order, click on the order card in the `Open` tab to open the order details page. Click on `Reject Order` to reject the order, select an appropriate reason for rejecting the order in the pop-up window that appears and click on the `save` icon. Another pop-up will appear to confirm order rejection, select `Reject` to reject the order.

To reject an order partially, click on `Report an Issue` available under the particular item in the order that needs to be rejected, select an appropriate reason for rejecting the item in the pop-up window that appears and click on the `save` icon. Another pop-up will appear to confirm item rejection, select `Reject` to reject the item from the order.

The available reasons for rejection are:

* **Not in Stock:** If items are out of stock or exhausted at the store, the store associate can select `Not In Stock` as a reason for rejection. In that case, the inventory ATP (Available to Promise) and QOH (Quantity on Hand) are set to 0 for that product for the selected store and all open orders with respective items are auto-rejected from the store.
* **No Reason:** "If store associates cannot fulfill an order due to high in-store demand and want to maintain the current inventory count, they can choose 'No Reason.' Selecting this option releases reserved inventory, reverting ATP to the original count before the order was received."

{% hint style="info" %}
Upon rejecting an item or order, customers will receive an email with \[alternate fulfillment options]\(../settings-page.md#order-edit-permissions) of the retailer's choice, and the rejected order or order item will be removed from your dashboard.
{% endhint %}

### Customer and Payment Details

Customer details on the order such as the customer’s name and contact details can be viewed and copied from this page. Along with that payment method details are also displayed on the page for store associates to know if it is a paid order or payment needs to be collected at the time of order handover. The payment method is displayed on the right side of the order details page.

### Assign Picker

During the process of fulfilling a BOPIS order, store associates can assign and track pickers to ensure the pickers' commission eligibility. For open orders, users can assign pickers from a pop-up that will open on clicking the `Ready for Pickup` button on the order details page. In case they want to edit the picker for an order, they can do that using the `Edit` button on the order details page of a packed order.

<figure><img src="../../.gitbook/assets/Screenshot 2024-01-01 at 11.50.51 PM (1).png" alt=""><figcaption><p>Image: Order Details Page</p></figcaption></figure>
