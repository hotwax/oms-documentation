---
description: >-
  Discover how New Era Caps Japan efficiently utilizes its warehouse
  for order fulfillment through meticulous brokering configurations.
---
# Brokering

Currently, all orders are fulfilled only from the warehouse. The brokering engine allocates every order to the warehouse. If stock is not available, the reshipping flow is used to reallocate orders to the warehouse. Stores are used for fulfillment only when specifically chosen by the customer.

## Reshipping Flow 
The WMS software used by New Era Caps is not able to differentiate between two separate shipments of the same order when creating its CSV feed of fulfilled orders. Due to this rigidity, if the WMS cannot fulfill an order item, then CSR will ask the customer whether to cancel the item or replace it with a different item.

If the item is canceled then the OMS will reship the order to WMS. When CSRs cancel an order item on Shopify, they add a “Reshipped” tag on the order to indicate that HotWax needs to resend it to the WMS.

If the item is replaced with another item then the whole order is canceled manually by CSR and the new order is created on Shopify.


Note:  Reshipping flow is only applicable to orders that are brokered to the warehouse.

## How “Reshipped” works in HotWax Commerce

When an order is partially canceled on Shopify by the CSR team, the cancellation details are sent to the OMS through the "Import Order Updates" job. A NiFi flow in HotWax identifies recently canceled order items from the warehouse using a time-based cursor and adds an order-level attribute to reshipped orders. The Reshipped flow does not apply to Store Fulfilled Orders because those orders are fulfilled using the HotWax Store Fulfillment App.

Key: "ReShipped" Value: "Pending"

The flow also deletes the External Fulfillment Order Item for all items in the ship group that were not canceled.

Because canceled items are no longer located at the facility they were brokered to, NiFi uses the Order Facility Change history to identify canceled items that were at the warehouse facility before being canceled. This entity will also contain details of which shipgroup the item was removed from, helping identify which order items to delete the fulfillment history for. NiFi puts the file of these orders on SFTP.

**SFTP path of UAT**

```
/home/newera-uat-sftp/hotwax/oms/ImportJsonListData
```

**SFTP path of PROD**
```
/home/newera-oms-sftp/hotwax/CreateOrderAttributes  
```

### WMS Feed / Brokering Feed  

When the OMS allocates an order to the warehouse, it generates a brokering feed containing essential details such as order items, quantities, and the shipping method etc. This feed acts as the medium through which orders are transmitted to the warehouse for fulfillment.  

In essence, the WMS Feed (also called the Brokering Feed) is a structured text format file which OMS shares to WMS to fulfill orders. Each file can contain up to 300 orders and is generated in fixed byte length format which starts with `SHP`.  

#### How OMS Prepares the WMS Feed  

A scheduled batch job in HotWax, `generate_WHBrokeredOrderItemsFeed_NEC`, is responsible for generating this feed. During each run, the job collects all orders allocated to the warehouse since its last execution, compiles them into a .txt file, and uploads it to a shared SFTP location. The New Era Caps WMS system then consumes this file to initiate fulfillment.  

To maintain smooth and timely operations, this job is configured to run every 20 minutes, ensuring continuous synchronization between OMS and the warehouse.  

**SFTP LocationUAT :**  
```
/home/newera-oms-sftp/Testing-Hotwax/from-shopify
```
**SFTP Location PROD:** :
```
/home/newera-oms-sftp/from-shopify
```
