---
description: >-
  The Store Fulfillment Process Model illustrates how HotWax Commerce enables store associates to Pick, Pack & Ship online orders received at stores.
---

# Store fulfillment

Once order items have been successfully allocated to stores, the fulfillment status for the order item is set as `Reserved`.

<figure><img src="../.gitbook/assets/store fulfillment bpm.png" alt=""><figcaption><p>Store fulfillment business process model</p></figcaption></figure>

<figure><img src="../.gitbook/assets/notations.png" alt=""><figcaption><p>Notations</p></figcaption></figure>

## Analyze Orders and Generate Picklist

Retailers use HotWax Commerce Store Fulfillment App to fulfill orders allocated to stores.

Orders are by default arranged in a "First In, First Out" sequence, ensuring that orders placed earlier are prioritized. Store managers can filter them based on the shipping method (such as same-day, next-day, or standard) or customer loyalty status.

For example, in the event a store manager wishes to prioritize orders with tight SLAs, selecting the filter “same-day” will display all the orders that have a same-day shipping method. This way they can initiate batch processing of these orders.

Once store managers determine the batch of orders they wish to fulfill first, they proceed to generate a picklist for them. Subsequently, they assign a picker to the picklist so that they can start picking the order items listed in their assigned picklist and begin the fulfillment process.

Once the picklist has been generated, the fulfillment status is updated from `Reserved` to `Picking` in HotWax Commerce.

### Book Shipment

As pickers scan and pick order items, HotWax Commerce rate shops to determine the most cost-effective shipping method offered by the carrier that also meets the SLA.

For example, if a customer opts for 2-day delivery, rate shopping evaluates shipping methods provided by carriers capable of meeting the specified timeframe. Let's consider FedEx as the carrier. In this scenario, HotWax Commerce will evaluate the shipping methods provided by FedEx. If both Air and Ground Shipping methods can deliver the order within two days, Ground Shipping will be automatically selected, as it achieves the same delivery timeframe at a lower cost.

### Generate Shipping Labels in Advance

Once the shipping method has been selected, HotWax Commerce fetches shipping labels in bulk with tracking codes from the carrier in advance to reduce the packing time.

{% hint style="info" %}
It's crucial to note that shipping labels are valid only when orders consist of a single package. In the event the packing team uses two boxes to pack the order items, the pre-generated shipping label will not be suitable as it has been auto-generated for a single package.
{% endhint %}

### Picking Failure

When a picker is unable to locate the order item listed in their picklist in the store, store managers have the authority to reject that specific order. In this event, its fulfillment status `Picking` automatically is removed in HotWax Commerce.

Learn more about Rejections and their reasons

## Pack Orders

Now, when the order items have been picked and brought to the packing station, they can be quickly packed since the shipment has already been booked and shipping labels have been pre-generated.

Once orders have been packed, the packing team places them at the designated location in the store, where the carrier will collect them.

The fulfillment status for packed orders is updated from `Picking` to `Packed` in HotWax Commerce.

In the event that an order has multiple items and one box isn’t suitable to fit all the items, packing teams can add more boxes or choose the size that suits best for the order items. In this scenario, the pre-generated shipping label will not serve that purpose and the packing team will have to regenerate the shipping label.


### Unpack Orders

In the event the packing team discovers that they have mispacked an order, they have to unpack it. The fulfillment status is then updated from `Packed` to `Picking` in HotWax Commerce.

Once the order has been correctly repacked, the fulfillment status in HotWax Commerce is updated to `Packed` once again.

## Ship Orders

After the carrier collects the packed orders, the `Ship Packed Orders` Job in HotWax Commerce checks if packed orders have tracking codes and automatically ships them. Fulfillment teams can also manually ship orders once the shipping provider collects them.

Once orders are shipped, the order item status in HotWax Commerce is updated from `Approved` to `Completed`, and the fulfillment status is updated from `Packed` to `Shipped`.
