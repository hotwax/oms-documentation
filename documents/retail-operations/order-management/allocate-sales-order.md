---
description: Learn how the sales orders are allocated efficiently in different scenarios.
---

# Allocation

To perform the order allocation tasks, we first navigate to the View Sales Order page:

1. Go to the Hamburger Menu in the OMS > Order Management section > Sales Orders to open the Find Sales Order page.
2. Select the order ID to open the View Sales Order page.

## Release Items

{% hint style="info" %}
For automated facility selection, the user can either wait for the next brokering run or use the Broker Now function to broker items immediately.
{% endhint %}

1. Select the line item and click Release function.
2. View the inventory and select any facility using the radio button.
3. Release the item to the selected facility.
4. Click the history function to view the changes.

{% embed url="https://youtu.be/_8XcDyvb3sY" %}
Video: Release item
{% endembed %}

## Reject Items

The `Reject Items` feature within the HotWax Commerce platform serves as a crucial tool for managing orders efficiently and maintaining customer satisfaction. It allows users to reject specific items from sales orders, providing valid reasons such as stock unavailability, damages, mismatches, or inactive stores. By enabling users to address issues promptly and accurately, this feature contributes significantly to workflow efficiency and customer service quality.

1. Identify the item(s) you wish to reject and click on the corresponding line item.
2. Look for the `Reject` function and click on it to initiate the rejection process.
3. Choose the appropriate reason for rejection from the available options using radio buttons (e.g., Not in Stock, Damaged, Mismatch).    
4. After selecting the rejection reason, save your changes to confirm the rejection.

Check the order item history by clicking on the radio button


{% embed url="https://youtu.be/3bT6-DgK5tY" %}
Video: Reject sales order items
{% endembed %}

## Mark items shipped in OMS

Sometimes there are instances when customers may connect with CSR to receive the order urgently, in such cases CSR has the option to ship the order from the order details page without waiting for the fulfillment center to mark the order item shipped. Here's how users can mark the order items as shipped in the OMS:

**Scenario 1: Marking Items as Shipped that is still Unassigned to a Facility**

1. **Locate the Order:** Navigate to the desired order and open it to view details from the `View Sales Order` page.
2. **Release Item to Facility:** Select the line item, click `Release`, and choose the target facility for shipment.
3. **Mark Items as Shipped:** Scroll to the item section on the `View Sales Order` page and click `Ship Items`.
4. **Select Line Items:** Choose the items to be marked as shipped in the popup window.
5. **Enter Tracking Details:** Select the carrier party from the dropdown and input the tracking number.
6. **Confirm Shipment:** Verify the details and confirm the shipment to mark the selected item(s) as shipped.

**Scenario 2: Marking Items as Shipped that are assigned to a different facility**

1. **Reject Line Item:** Identify the line item on the `View Order` page, click `Reject`, choose `No Variance` as the reason, and confirm the rejection.
2. **Release Item to Facility:** Select the rejected item, click `Release`, and choose the necessary facility.
3. **Mark Items as Shipped:** Proceed to click `Ship Items`, select line item(s), input tracking details, and confirm the shipment.

**Scenario 3: Marking BOPIS Sales Order Items as Shipped**

1. **Modify Shipping Method:** Scroll to the item section on the `View Order` page, click `Edit`, and modify the shipping method to `Standard`.
2. **Reject Line Item:** Reject the line item, choosing `No Variance` as the reason.
3. **Release Item to Facility:** Select the rejected item, click `Release`, and choose the necessary facility.
4. **Mark Items as Shipped:** Click `Ship Items`, select line item(s), input tracking details, and confirm the shipment.

{% hint style="info" %}
Click the history function in the status column to view when the item is marked completed and the user who marked the item completed.{% endhint %}

{% embed url="https://youtu.be/RwpJ86nFnAo" %}
Video: Ship items in OMS
{% endembed %}

## Manage Auto-Cancel Date

Managing orders is a complex process, and sometimes, items fail to be fulfilled due to inventory unavailability across facilities. When this occurs, it's crucial to set an auto-cancel date to streamline operations and ensure resource allocation is optimized.

This feature allows users to easily modify or remove auto-cancel dates from orders that are marked unfillable due to failed brokering attempts. By providing this functionality, HotWax Commerce empowers users to maintain control over their orders, preventing unnecessary delays and potential customer dissatisfaction.

**Update the Auto-cancel Date on a single order:**

1. Choose the specific order you want to manage and click on it to enter the Sales Order View page.
2. In the Item section of the Sales Order View page, locate the auto-cancel date and click on the edit function next to it.
3. From the Calendar that appears, select the new date for the auto-cancelation.
4. After updating the date, click on the `Save` function to apply the changes.

**Remove Auto-cancel Date from single order:**

1. Choose the specific order you want to modify and enter the Sales Order View page.
2. In the Item section, locate the auto-cancel date and click on the edit function next to it.
3. Click on the delete icon next to the auto-cancel date to remove it from the order.
4. Confirm the changes by clicking on the `Save` function.


## Move Items to Order Parking

HotWax Commerce features various parking areas serving as virtual facilities for storing orders awaiting fulfillment. Users frequently need to transfer orders between these parking areas to ensure accurate inventory allocation. For instance, if there are unfulfillable orders and retailers are aware of when will inventory arrive, they may opt not to run brokering for such orders until that day. In such scenarios, these orders can be moved from the brokering queue to the unfulfillable hold queue. Here's how you can relocate items to different parking areas:

1. In the items section, click the `Move Items to Parking` function.
2. Choose the parking using the `Radio` button and Save.
3. Confirm the Ship From column to view the selected parking.

Refer to the table below for parking description and purpose.

<table data-header-hidden><thead><tr><th width="168.33333333333331"></th><th width="190"></th><th></th></tr></thead><tbody><tr><td><strong>Facility Parking</strong></td><td><strong>Description</strong></td><td><strong>Purpose</strong></td></tr><tr><td>Brokering</td><td>Holds new orders</td><td>To hold orders for in-stock items, until the next brokering run.</td></tr><tr><td>Pre-order</td><td>Holds pre-orders</td><td>To hold pre-ordered items until released from the HotWax Commerce Pre-order Management app upon inventory availability.</td></tr><tr><td>Backorder</td><td>Holds Backorders</td><td>To hold backordered items until released from the HotWax Commerce Pre-order Management app upon inventory availability.</td></tr><tr><td>Unfillable Hold Parking</td><td>Hold orders which are unfillable but expecting inventory</td><td>To hold unfillable items from further brokering and auto-cancellation.</td></tr><tr><td>General Operations Parking</td><td>Hold completed and canceled orders during initial setup.</td><td>To hold completed and canceled orders during the initial Order Management System (OMS) instance setup, for later reference during analysis in reporting.</td></tr><tr><td>Store Pickup Rejected queue</td><td>Hold rejected store pickup orders</td><td>To hold store pickup orders which are rejected from the store,</td></tr></tbody></table>

{% embed url="https://youtu.be/5J3HCUUbwiw" %}
Video: Move item to Order parking
{% endembed %}
