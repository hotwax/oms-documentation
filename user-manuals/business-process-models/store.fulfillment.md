---
description: >-
  The Store Fulfillment Process Model illustrates how HotWax Commerce Store
  Fulfillment Suite enables Pick, Pack & Ship of online orders received at
  stores.
---

# Store fulfillment

<figure><img src="../.gitbook/assets/store fulfillment bpm.png" alt=""><figcaption><p>Store fulfillment business process model</p></figcaption></figure>

## Orders Allocated to Stores

As outlined in the Order Lifecycle Business Process Model, HotWax Commerce order routing engine looks for the optimal fulfillment location to allocate approved orders. Once order items have been successfully allocated to stores, two actions take place in HotWax Commerce:

* The allocation status for the order item is set as "Brokered".
* The fulfillment status for the order item is set as "Reserved".

## Pick, Pack & Ship

HotWax Commerce provides a dedicated Store Fulfillment Suite comprising user-friendly apps such as the Store Fulfillment App and Order Picking App to quickly and accurately fulfill orders. These apps are specifically designed to facilitate easy adoption and minimize the learning curve for store personnel.

### Push Orders to Store Fulfillment App

Orders are automatically reflected at their allocated store location in the Store Fulfillment App.

### Analyze Orders and Generate Picklist

Orders are by default arranged in a "First In, First Out" sequence, ensuring that orders placed earlier are prioritized. The app also provides options to filter orders based on their shipping method (such as same-day, next-day, or standard) or customer loyalty status.

For example, in the event a store manager wishes to prioritize orders with tight SLAs, selecting the filter “same-day” will display all the orders that have a same-day shipping method. This way they can initiate batch processing of these orders.

Once store managers determine the batch of orders they wish to fulfill first, they proceed to generate a picklist for them. Subsequently, they assign a picker to the picklist so that they can start picking the order items listed in their assigned picklist and begin the fulfillment process.

There are two options using which pickers can start the picking process:

* **Direct Printing:** Picklists can be directly printed from the Store Fulfillment App.
* **QR Code Generation:** Store managers can generate QR codes for picklists from the Store Fulfillment App. The assigned picker can then scan this QR code using their mobile device and view their picklist directly in the Order Picking App.

HotWax Commerce recommends using the Order Picking mobile app for efficient order fulfillment because it allows pickers to:

* Sort order items in the picklist based on preferred criteria, including Product Name, Bin ID, or Location Sequence ID.
* Scan barcodes for accurate item verification.
* View enlarged product images for easier identification.

These features maximize picker efficiency and minimize errors during the picking process.

Open picklists appear in the “In-Progress” status in the Order Picking App. Once pickers scan all order items listed in their picklist, they can mark their picklist as "Complete".

### Book Shipment

As pickers pick order items, HotWax Commerce rate shops to determine the most cost-effective shipping method offered by the carrier that also meets the SLA.

For example, if a customer opts for 2-day delivery, rate shopping evaluates shipping methods provided by carriers capable of meeting the specified timeframe. Let's consider FedEx as the carrier. In this scenario, HotWax Commerce will evaluate the shipping methods provided by FedEx. If both Air and Ground Shipping methods can deliver the order within two days, Ground Shipping will be automatically selected, as it achieves the same delivery timeframe at a lower cost.

### Generate Shipping Labels in Advance

Once the shipping method has been selected, HotWax Commerce fetches shipping labels in bulk with tracking codes from the carrier in advance to reduce the packing time.

It's crucial to note that shipping labels are valid only when orders consist of a single package. In the event the packaging team uses two boxes to pack the order items, the pre-generated shipping label will not be suitable as it has been auto-generated for a single package.

### Picking Failure

In the event a picker is unable to locate the order item listed in their picklist in the store, store managers have the authority to reject the fulfillment of that specific order item.

When fulfillment for an order item is rejected in the Store Fulfillment App, its allocation status is updated from "Brokered" to "Rejected," and the fulfillment status "Reserved" is automatically removed in HotWax Commerce.

The rejected order item becomes eligible for rebrokering. When the order routing engine allocates this item to a new fulfillment location, its allocation status reverts to "brokered" and the fulfillment status is once again updated to "Reserved".

### Pack Orders

Now, when the order items have been picked and brought to the packing station, they can be quickly packed since the shipment has already been booked and shipping labels have been pre-generated.

Once orders have been packed, the packaging team places them at the designated location in the store, where the carrier will collect them, and then marks orders as "Packed." The fulfillment status for packed orders is updated from “Reserved” to “Packed” in HotWax Commerce.

In the event that an order has multiple items and one box isn’t suitable to fit all the items, packaging teams can add more boxes or choose the size that suits best for the order items. In this scenario, the pre-generated shipping label will not serve that purpose and the packing team will have to regenerate the shipping label from the app.

### Unpack Orders

In the event the packaging team discovers that they have mispacked an order, the app offers an option to unpack it. The fulfillment status is then updated from “Packed” to “Reserved” in HotWax Commerce.

Once the order has been correctly repacked, the team marks it as "Packed." Subsequently, the fulfillment status in HotWax Commerce is updated to "Packed" once again.

### Ship Orders

After the carrier collects the packed orders, fulfillment teams have two options:

* **Auto ship:** The Ship Packed Orders Job in HotWax Commerce checks if packed orders have tracking codes and automatically marks them as “Ship Now”.
* **Manual ship:** Fulfillment teams can manually mark orders as "Ship Now" once the shipping provider collects them.

Once orders are marked as shipped in the Store Fulfillment App, the order item status in HotWax Commerce is updated from "Approved" to "Completed," and the fulfillment status is updated from "Packed" to "Shipped".
