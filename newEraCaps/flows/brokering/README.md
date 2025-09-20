---
description: >-
  Discover how New Era Caps Japan efficiently utilizes its stores and warehouse
  for order fulfillment through meticulous brokering configurations.
---

# Brokering

New Era Caps will use its stores for fulfillment along with their warehouse, but the conditions for when to use stores fulfillment are very particular and require that brokering be configured correctly to accommodate for these preferences.

**SFTP Path to export orders brokered at Warehouse:** 

UAT
```
/home/newera-uat-sftp/hotwax/Testing_Hotwax/from-shopify
```

PROD 
```
/home/newera-oms-sftp/Testing-Hotwax/from-shopify
```


Online shipping orders are routed to the warehouse by default, unless the customer selects a store for shipping when adding the item to their cart. In the event that an order item contains a soft allocated ship-from facility, the OMS will read the pre-selected facility and allocate those items to the respective store for fulfillment.  

When such a soft allocated order is imported, the allocated items bypass the normal brokering algorithm and are immediately assigned to the chosen store. Items not soft allocated remain in the brokering queue and are later routed to the warehouse during scheduled brokering runs. This ensures that only the items explicitly chosen by customers for store shipping are fulfilled from stores, while all others follow the standard warehouse fulfillment process.


In the event that a store cannot fulfill an order and must reject it for reallocation, those orders will not be allocated to the warehouse because soft allocation only happens when the inventory is not available in the warehouse but in stores.

{% hint style="danger" %}
To support this workflow, the warehouse facility type must be passed as an excluded `type` in the Rejected Order Brokering Job.
{% endhint %}

The WMS software used by New Era Caps is not able to differentiate between two separate shipments of the same order when creating its CSV feed of fulfilled orders. Due to this rigidity, if the WMS cannot fulfill an order item, then CSR will ask the customer whether to cancel the item or replace it with a different item.
1. If the item is canceled then the OMS will reship the order to WMS. When CSRs cancel order item on Shopify, they add a “Reshipped” tag on the order to indicate that HotWax needs to resend it to the WMS.
2. If the item is replaced with another item then the whole order is canceled manually by CSR and the new order is created on Shopify.

**Note**: The reshipping process is only applicable to orders that are brokered to the warehouse.

## How “Reshipped” works in HotWax Commerce

When an order is partially canceled on Shopify by the CSR team, the cancellation details are sent to the OMS through the "Import Order Updates" job. A NiFi flow in HotWax identifies recently canceled order items from the warehouse using a time-based cursor and adds an order-level attribute to reshipped orders. The Reshipped flow does not apply to Store Fulfilled Orders because those orders are fulfilled using the HotWax Store Fulfillment App.

Key: "ReShipped" Value: "Pending"

The flow also deletes the External Fulfillment Order Item for all items in the ship group that were not canceled.

Because canceled items are no longer located at the facility they were brokered too, NiFi uses the Order Facility Change history to identify canceled items that were at the warehouse facility before being canceled. This entity will also contain details of which shipgroup the item was removed from, helping identify which order items to delete the fulfillment history for. NiFi puts the file of these orders on SFTP.

**SFTP path of UAT**
```
/home/newera-uat-sftp/hotwax/oms/ImportJsonListData
```
The JsonListData calls the following services:
1. deleteExternalFulfillmentOrderItem
2. updateOrderAttr

Now that the External Fulfillment Order Item record is deleted for the items that need to be reshipped, when these items are brokered again a new External Fulfillment Order Item record will be created. At the same time, the cancelled item’s fulfillment status will be updated to `Reject`.

When processing the brokered items feed, NiFi checks for orders that have an order attribute of Reshipped: Pending and logs each of these order Ids into a CSV. These orders are submitted to the OMS to have their order attribute value updated to "Sent"

Key: "ReShipped" Value: "Sent"
 
**SFTP path of UAT**
```
/home/newera-uat-sftp/hotwax/ReshippedOrderAttr
```
