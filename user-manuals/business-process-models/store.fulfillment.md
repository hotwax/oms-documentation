---
description: >-
  The Store Fulfillment Lifecycle BPM illustrates how HotWax Commerce Store Fulfillment App enables
  store associates to Pick, Pack & Ship online orders received at stores.
---

# Store fulfillment lifecycle

<figure><img src="../.gitbook/assets/store fulfillment bpm.png" alt=""><figcaption><p>Store fulfillment lifecycle business process model</p></figcaption></figure>

## Analyze Items and Generate Picklist

Items that have been successfully allocated to stores have fulfillment status <mark style="color:orange;">**"Reserved"**</mark> in HotWax Commerce.&#x20;

By default items are arranged in a "First In, First Out" sequence, ensuring that placed earlier are prioritized. Store managers can filter them based on the shipping method (such as same-day, next-day, or standard) or customer loyalty status.

For example, in the event a store manager wishes to prioritize items with tight SLAs, they can filter items that have a same-day shipping method to initiate batch processing for them.

Once store managers determine items they wish to fulfill first, they generate a picklist for them and subsequently, assign a picker so that they can start picking items.

Once the picklist has been generated, the fulfillment status is updated from <mark style="color:orange;">**"Reserved"**</mark> to <mark style="color:orange;">**"Picking"**</mark> in HotWax Commerce.

### Book Shipment

As pickers scan and pick items, HotWax Commerce rate shops to determine the most cost-effective shipping method offered by the carrier that also meets the SLA.

For example, if a customer opts for 2-day delivery, rate shopping evaluates shipping methods provided by carriers capable of meeting the specified timeframe. Let's consider FedEx as the carrier. In this scenario, HotWax Commerce will evaluate the shipping methods provided by FedEx. If both Air and Ground Shipping methods can deliver the item within two days, Ground Shipping will be automatically selected, as it achieves the same delivery timeframe at a lower cost.

### Generate Shipping Labels in Advance

Once the shipping method has been selected, HotWax Commerce fetches shipping labels in bulk with tracking codes from the carrier in advance to reduce the packing time.

{% hint style="info" %}
It's crucial to note that shipping labels are valid only when orders consist of a single package. In the event the packing team uses two boxes to pack the order items, the pre-generated shipping label will not be suitable as it has been auto-generated for a single package.
{% endhint %}

### Picking Failure

When a picker is unable to find the item that is listed in their picklist, store managers have the authority to reject that specific item. In this scenario, its fulfillment status <mark style="color:orange;">**"Picking"**</mark> is automatically removed in HotWax Commerce.

Learn more about [Rejections and their reasons](../fulfillment/rejection.md)

## Pack Items

Now, when the items have been picked and brought to the packing station, they can be quickly packed since the shipment has already been booked and shipping labels have been pre-generated.

Once items have been packed, the packing team places them at the designated location in the store from where the carrier will collect them.

The fulfillment status for packed items is updated from <mark style="color:orange;">**"Picking"**</mark> to <mark style="color:orange;">**"Packed"**</mark> in HotWax Commerce.

In the event that an order has multiple items and one box isn’t suitable to fit all the items, the packing team can add more boxes or choose the size that suits best for the items. In this scenario, the pre-generated shipping label will not serve that purpose and the packing team will have to regenerate the shipping label.

### Unpack Items

In the event the packing team discovers that they have mispacked an item, they have to unpack it. The fulfillment status is then updated from <mark style="color:orange;">**"Packed"**</mark> to <mark style="color:orange;">**"Picking"**</mark> in HotWax Commerce.

Once the item has been correctly repacked, the fulfillment status in HotWax Commerce is updated to <mark style="color:orange;">**"Packed"**</mark> once again.

## Ship Items

Finally, the fulfillment team hands over the packed items to the shipping carrier.

The `Ship Packed Orders` Job in HotWax Commerce checks if packed items have tracking codes assigned and automatically ships them. Fulfillment teams can also manually ship items once the carrier collects them.

Once items are shipped, the fulfillment status is updated from <mark style="color:orange;">**"Packed"**</mark> to <mark style="color:orange;">**"Shipped"**</mark> and the order status is updated from <mark style="color:orange;">**"Approved"**</mark> to <mark style="color:orange;">**"Completed"**</mark> in HotWax Commerce.
