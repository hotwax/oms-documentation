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

Use this action when you need to record shipment details from the `View Sales Order` page. Confirm that the items are assigned to the facility that shipped them before you mark them as shipped.

1. Open the order from the `Find Sales Order` page.
2. Select the items to ship. If an item is not assigned to the shipping facility, select `Release` and choose that facility first.
3. Select `Ship Items` in the `Items` section.
4. Choose the line items to include, select the carrier, and enter the tracking number.
5. Confirm the shipment.

To verify the update, open the item history from the `Status` column. The history shows when the item was completed and the user who completed it.

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
