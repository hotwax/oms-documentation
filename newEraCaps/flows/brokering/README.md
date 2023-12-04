# Brokering

New Era Caps will use its stores for fulfillment along with their warehouse, but the conditions for when to use stores fulfillment are very particular and require that brokering be configured correctly to accommodate for these preferences.

Online shipping orders are always routed to the warehouse unless the customer has selected a store that they want the product to be shipped from when adding the item to their cart. In the event that an order item contains a soft allocated ship-from facility, the OMS will read the pre-selected facility and allocate those order items to the respective locations for fulfillment.

When this kind of soft allocated order is imported, the soft allocated items of the order will be directly allocated to that store upon import and skip the normal brokering algorithm. Because customers must explicitly choose which items they want to be shipped from store, the OMS will split the items not soft allocated and leave them in the brokering queue to be brokered to the warehouse at scheduled times.

In the event that a store cannot fulfill an order and must reject it for reallocation, those orders will not be allocated to the warehouse due to the WMS's inability to differentiate between two separate shipments of the same order when creating its CSV feed of fulfilled orders.


{% hint style="danger" %}
To support this workflow, the warehouse facility type must be passed as an excluded `type` in the Rejected Order Brokering Job.
{% endhint %}

The rigidity of the WMS software used by New Era Caps also means that if the warehouse cannot fulfill an order item, it is canceled on Shopify manually by a CSR. When CSRs preform this cancellation on Shopify, the also add a “Reshipped” tag on the order to indicate that HotWax needs to resend it to the WMS.

## How “Reshipped” works in HotWax Commerce
After CSRs apply a reshipped tag to orders where the warehouse indicates that it is unable to ship certain order items, the OMS has a custom workflow that is executed to update the order in the WMS with the removed order items.

### Current Design
When the OMS detects that an order has canceled items which were previously allocated to the New Era Caps warehouse, NiFi will produce a file of the remaining items which are allocated to the warehouse. This file is then consumed by a job in HotWax which removes their “Fulfillment History” records in the OMS.

**Order Fulfillment History**

In order to understand the rest of the implementation, understanding “Fulfillment Sent History” is necessary. Order Fulfillment History (OFH) is created for order items when their fulfillment has been posted to an external system. OFH records include a reference ID of the system the fulfillment has been shared with, allowing the OMS to track fulfillment communications of the same order with multiple systems.

Using OFH, the OMS is able to accurately retry failed fulfillment communications to external systems, always guaranteeing that it has updated all dependent systems of order fulfillment.

**Why Order Fulfillment History is deleted**

By deleting the Order Fulfillment History records for order items that have been deemed eligible to be included in the “ReShipped” feed, the brokering feed file for the New Era Caps warehouse from the OMS automatically includes these orders in the new feed that it generates.

The job that deletes OFH records is also responsible for adding a “RESHIPPED” attribute to the items which need to be included in the reshipped order item feed.

**Service to delete OFH records**
```
refreshExportedFulfillment
```
**Parameters**

externalOrderId

externalLineItemId

fulfillmentStatus

**Attribute**

Name: FULFILLMENT_STATUS

Value: RESHIPPED  

## Proposed design

A flow in NiFi that checks order items that have been recently (time based cursor) canceled from the warehouse and adds an order attribute:

Key: "ReShipped"

Value: "Pending"

Because canceled items are no longer located at the facility they were brokered too, NiFi will use the Order Facility Change history to identify canceled items that were at the warehouse facility before being canceled.

A separate NiFi "ReShipped to warehouse" flow identifies all orders with this attribute where the value is "pending" and then generates a "ReShipped" feed for the warehouse where all order names have an "_R" appended to them. The flow would also then subsequently update the order attribute value to "{orderName}_R" indicating that the order has been included in a re-shipped feed to the warehouse.

Regenerating the brokering feed for these items also updates the ExternalFulfillmentOrderItem record for them. It is yet to be determined if the OMS will add a new status for these items or not.

If the New Era team wants to manually re-ship this item, they can manually change the value of the attribute to "pending".
