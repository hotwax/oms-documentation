---
description: >-
  Order fulfillment is a critical business process for retailers, orchestrating
  the journey from order allocation to making it ready for shipping, ensuring
  timely delivery to the customers' doorstep.
---

# Order Fulfillment

<figure><img src="../.gitbook/assets/OrderFulfillment.png" alt=""><figcaption><p>Order allocation and fulfillment </p></figcaption></figure>

## How Order Fulfillment Works

Approved orders are eligible for brokering in HotWax Commerce. The order routing engine brokers orders and looks for the best fulfillment location to allocate them.

<figure><img src="../.gitbook/assets/OrderFulfillmentBP.png" alt=""><figcaption><p>Order fulfillment business process</p></figcaption></figure>

## Automatically Send Fulfillment Request

Once an order item is allocated, a fulfillment request is sent to the assigned fulfillment location. If this location happens to be a warehouse, the allocation details are synced to the WMS or ERP systems, such as NetSuite, used for warehouse fulfillment.

If an order item is allocated to a store, they are automatically reflected in the HotWax Commerce [Store Fulfillment App](https://docs.hotwax.co/documents/v/store-operations/orders/fulfillment).

{% hint style="info" %}
HotWax Commerce provides a Store Fulfillment Suite comprising user-friendly apps such as the Store Fulfillment App and Picking App to quickly and accurately fulfill orders. These apps are specifically designed to facilitate easy adoption and minimize the learning curve for store personnel.
{% endhint %}

## Manually Send Fulfillment Request

This scenario usually happens when a customer requests expedited delivery. Because the order routing engine selects a batch of orders based on the configurable routing rules set up by retailers, there's a possibility that this specific order item may be processed later. In such cases, CSRs have the option to bypass the scheduled brokering cycle and manually release items to a fulfillment location, usually the nearest store to the customer's location. HotWax Commerce then sends the fulfillment request to the chosen store location, and the order item is reflected in the Store Fulfillment App, accelerating the order fulfillment process.

#### Additional Actions CSRs can Perform:

Following automatic brokering or manual release to a store, CSRs also have an option to include specific handling instructions for order items. In scenarios where expedited shipping is requested by the customer, CSRs can write a message in the handling instructions. These details are then visible in the Store Fulfillment App, enabling store associates to prioritize the fulfillment of these orders in-store accordingly.

## Pick Order Items

The Store Fulfillment App displays orders in a "First In, First Out" (FIFO) sequence, prioritizing orders based on their placement. The app also offers the flexibility to filter orders according to various criterias, including shipping method (such as same-day, next-day, or standard) and customer loyalty status. This feature enables store managers to efficiently manage and fulfill orders based on preferred criteria, ensuring alignment with brand's fulfillment strategies.

For example, some customers may have a loyalty status of "Gold Member," indicating that they are part of a premium loyalty program with exclusive benefits such as priority order processing, or dedicated customer support. By filtering orders based on loyalty status, Store Fulfillment App can help prioritize orders from Gold Members, ensuring exceptional service and fostering customer loyalty.

### Generate Picklist and Assign Pickers

Once store managers determine the batch of orders they wish to fulfill first, they generate a picklist for them. Subsequently, they assign a picker to the picklist so that they can start picking the order items listed in their assigned picklist and begin the fulfillment process.

{% hint style="info" %}
Store managers can also prioritize picking of an individual order item by directly initiating picking and assigning a picker for it.
{% endhint %}

HotWax Commerce provides two options using which pickers can start the picking process:

**Direct Printing:** Picklists can be directly printed from the Store Fulfillment App.

**QR Code Generation:** Store managers can generate QR codes for picklists from the Store Fulfillment App. The assigned picker can then scan this QR code using their mobile device and view their picklist directly in the Picking App.

**HotWax Commerce recommends using the Picking mobile app for efficient order fulfillment because it allows pickers to:**

* Sort order items in the picklist based on preferred criteria, including Product Name, Bin ID, or Location Sequence ID.
* Scan barcodes for accurate item verification.
* View enlarged product images for easier identification.

These features maximize picker efficiency and minimize errors during the picking process.

Learn more about [Picking App](https://docs.hotwax.co/documents/v/store-operations/orders/fulfillment/pickingapp)

### Replace Pickers

Store managers can replace an assigned picker with a new one for various reasons, such as unexpected absences or scheduling conflicts. This ensures that operations continue smoothly and customer orders are fulfilled promptly through quick reassignment.

{% hint style="success" %}
As pickers pick order items, HotWax Commerce rate shops to determine the most cost-effective shipping method offered by the carrier that also meets the SLA. Once the shipping method has been selected, HotWax Commerce fetches shipping labels in bulk with tracking codes from the carrier in advance to reduce the packing time.
{% endhint %}

Learn more about [Picking](https://docs.hotwax.co/documents/v/store-operations/orders/fulfillment/shiporders#pick-orders)

## Reject Fulfillment Request

When a picker is unable to find the order item listed in their picklist in the store, store managers have the authority to reject the fulfillment of that specific order item.

{% hint style="info" %}
In case a picker finds difficulty looking up an order item, they can confirm if further search efforts are needed by checking the total available inventory directly from the app.
{% endhint %}

## Reject Fulfillment Request for All Order Items Allocated to Store

When a store is temporarily unavailable for fulfillment due to reasons such as stock unavailability, technical issues, operational challenges, or safety concerns, store managers can reject all pending order items. This helps prevent potential delays or issues with unfulfilled orders until the store is able to resume normal operations.

### Configure Rejection Reasons and their Impact on Inventory

HotWax Commerce Store Fulfillment App offers out of the box rejection reasons for store associates to choose from when they cannot fulfill items in an order and also enables store managers to introduce new ones.

They can also configure whether any rejection, predefined or new, should impact inventory levels directly from the app. This flexibility allows managers to decide if specific rejections will impact the store’s stock levels or simply record the rejection without impacting inventory.

Let’s see how the out of the box rejection reasons offered by HotWax Commerce impact inventory:

| Rejection Reason | ATP Inventory Change          | QOH Inventory Change          | Selling Impact                                                |
| ---------------- | ----------------------------- | ----------------------------- | ------------------------------------------------------------- |
| NOT IN STOCK     | Set to 0                      | Set to 0                      | Prevents new orders until product is back in stock            |
| MISMATCH         | Decrease by rejected quantity | Decrease by rejected quantity | Product still available but not in specific size or color     |
| DAMAGE           | Decrease by rejected quantity | Unchanged                     | Product remains in stock but cannot be sold due to damage     |
| WORN DISPLAY     | Decrease by rejected quantity | Unchanged                     | Product remains in stock but cannot be sold due to being worn |

Learn more about [Rejections](https://docs.hotwax.co/documents/v/store-operations/orders/fulfillment/rejection)

## Rerouted Requests

The order routing engine reroutes order items rejected at a store to the next best available fulfillment locations, ensuring minimal disruption to the fulfillment process and maintaining timely delivery for customers.

## Pack Order Items

Once the order items have been picked, they can be quickly packed as HotWax Commerce books the shipment in advance with the shipping carrier and pre-generates shipping labels.

### How HotWax Commerce Further Streamlines Packing Process:

* Store associates can add additional boxes or select the most suitable size for order items, directly from the app.
* In the event the packaging team discovers a mispacked order, the app offers an option to unpack it and then begin repacking.
* Store associates have the flexibility to search for and prioritize specific orders for packing.

Learn more about [Packing](https://docs.hotwax.co/documents/v/store-operations/orders/fulfillment/shiporders#pack-orders)

## Order Cancellations When Item is Being Prepared for Shipping

Customers often request CSRs to cancel their orders. If the order hasn't been shipped yet, it can be canceled. If HotWax Commerce has already allocated the order to a store, store associates may have already picked or packed the order. In this scenario, the order is canceled in HotWax Commerce and automatically rejected from the Store Fulfillment App, preventing any further actions on the canceled order.

## Ship Order Items

After the order items are packed, the carrier collects them from the store. This marks completion of the fulfillment process in HotWax Commerce.

Once an order has been Completed in HotWax Commerce, this data is also synced with the eCommerce platform along with the tracking number. This ensures customers stay informed about their order progress.

## Additional Scenarios Supported by HotWax Commerce in Order Fulfillment Process

### Order Fulfillment Limit

Store managers have the flexibility to set maximum order limits for their store based on their store’s fulfillment capacity. For example, if a store operates with limited staff, balancing in-store customer service and online order fulfillment can be challenging. In such scenarios, managers can predefine the number of orders they intend to fulfill in a day. The following day, the store becomes eligible for fulfillment again.

### Disabling Locations from Fulfilling Orders

In specific circumstances, store managers may opt to stop order fulfillment entirely. For example, during a store-wide inventory audit or promotional events in-store, it may be impractical to fulfill orders from that store location. In such cases, managers have the ability to directly disable order fulfillment by setting the order limit to 0.

### Configuring Online Selling

In specific circumstances, store managers may need to temporarily remove their store's inventory from online selling. This could be due to various reasons such as low stock levels, prioritizing in-store customer sales, or other internal considerations. In such cases, store managers have the option to directly disable online selling for their store. This flexibility allows managers to focus on fulfilling in-store demand while conserving inventory. Additionally, they can easily re-enable online selling in the future when the situation aligns with their business needs.

Learn more about [additional scenarios supported in Store Fulfillment App](https://docs.hotwax.co/documents/v/store-operations/orders/fulfillment/fulfillment-setting-page)
