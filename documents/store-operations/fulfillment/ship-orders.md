---
description: Discover the process to Fulfill orders from the Fulfillment App.
---

# Order Fulfillment

## Pick orders

1. Go to the `Open Orders` page and print a picklist

This page displays all outstanding orders brokered to this facility by the OMS and are ready to be fulfilled.

At the top of the page, the total number of queued orders is displayed, providing an instant overview of the workload.

Orders are arranged in a "First In, First Out" sequence by default. However, you have the option to filter them based on the shipping method to prioritize fulfillment. For instance, Same-day shipping orders can be prioritized by selecting the corresponding filter checkbox at the top of the page.

{% embed url="https://youtu.be/M3jXan3MOZc" %}
Video: Filter Orders
{% endembed %}

1. Click the Print Picksheet function to generate the picksheet. This will create picklist of multiple orders to support wave-picking, ensuring pickers can pick items for all orders in one go.
2. In the Assign Picker dialog box, enter the Picker Name or Employee ID to assign a picker.

{% hint style="info" %} Only the [pickers](https://docs.hotwax.co/documents/system-admins/administration/users/add-picker) linked to the facility will show on the Assign Picker dialog box. This behavior is configurable—if you want to display pickers from all facilities, you can enable the corresponding [product store setting](/documents/system-admin/product-store/add-more-product-stores.md).
{% endhint %}

{% embed url="https://youtu.be/Yu384kR-7mU" %}
Video: Print picklist
{% endembed %}

3. You can create an individual order's picklist by clicking on the order ID, which will open a dropdown where you can select the `Pick Orders` option to create the picklist for the individual order.
4. You can reprint the picklist by clicking on the `Print Picklist` button in the bottom right corner on the In Progress tab.
5. You can modify the assigned picker on the `In Progress` page by selecting the `Edit Picker` button located next to the `Print Picklist` button in the bottom right corner.
6. Store managers have the option to generate a QR code by clicking the `GENERATE QR CODE` button in the bottom-left corner. Pickers can scan this QR code to access their picklist directly on their mobile devices.

{% embed url="https://youtu.be/AaSwHxMoGPM" %}
Video: Regenerate picklist
{% endembed %}

## Pack Orders

Mark orders are packed when the order items are ready to be shipped.

{% hint style="info" %}
Bulk Packing slips and Shipping labels will be generated in a new tab.
{% endhint %}

1. Go to the In-Progress Orders and filter out your orders using picklist filters.

2. Adding Shipment Box to Order During Fulfillment

* Within the order details section, locate and click on the `Add Boxes` option.
* Add the required number of boxes corresponding to the order items, ensuring adequate packaging space without excess boxes. Store associates can choose to pack multiple order items into one box, reducing shipping costs and environmental impact.
* Upon adding boxes, store associates can further specify box types for individual order items. Click on the `select box` option against the order item and navigate through the dropdown menu to select the appropriate option corresponding to each item's size and packaging requirements.
* After appropriately packing all items and selecting box types, click `Pack` to update the shipping carrier for shipping label generation with the least shipping charges for the selected boxes.

By diligently specifying both the total box quantity for the entire order and the appropriate box types for individual order items, store associates ensure accurate shipping labels, cost-effective packaging, and efficient utilization of available space, ultimately reducing shipping expenses for retailers.

{% embed url="https://youtu.be/385HSXa8Pdc" %}
Add Shipment Box During Fulfillment
{% endembed %}

1. Click on `Pack Orders` to confirm shipment details. Retailers can also enable forced scanning from the settings page to ensure store associates scan the items when packing.
2. A pop-up dialog box will appear for printing additional documents like shipping labels and packing slips.

Print the shipping labels and packing slips to attach to the packed orders.

{% embed url="https://youtu.be/lVzHg8QK9Js" %}
Video: Pack Orders
{% endembed %}

**Unpack Orders** Unpack orders by clicking the unpack button in the 'Completed Page' when necessary, especially in cases where incorrect boxes or items need to be corrected. The unpacked orders will disappear from the completed page and become visible again on the `In Progress` page for packing.

{% embed url="https://youtu.be/_4vcKgJuQrE" %}
Video: Unpack orders
{% endembed %}

## Ship order

1. Go to the Completed tab.​
2. Click the `Ship Orders` function at the top to mark the orders as shipped in bulk.

{% embed url="https://youtu.be/GlOIz9scB3s" %}
Video: Bulk Order fulfillment
{% endembed %}

{% hint style="info" %}
If the `Ship Packed Orders` Job is enabled in the Job Manager App, all packed orders will be automatically marked shipped. Enable the `isTrackingRequired` setting on shipping methods that should not be automatically shipped unless they have tracking codes.
{% endhint %}

In the event that the packing slip or shipping label is damaged after packing an order, it can be regenerated from the completed tab.

{% embed url="https://youtu.be/VuEEg_hYI9c" %}
Video: Reprint customer letter
{% endembed %}

***

## Individual Order Fulfillment

#### Pick order

1. Navigate to the Open page.
2. Use the search field to input HotWax Commerce Order ID, Shopify Order ID, or Customer name for order search.

{% embed url="https://youtu.be/oOgIiRsnDRA" %}
Image: Search an order
{% endembed %}

3. Click the Print Picksheet function to generate the picksheet.
4. In the Add Picker dialog box, enter the Picker Name or Employee ID to assign a picker.​
5. Access the Print Picksheet function again to obtain the picksheet in PDF format to reference during order picking.

#### Pack Order

1. Navigate to the In-Progress page.​
2. Search for the order.
3. Click the Pack function.
4. The Shipping Label and Packing Slip will be generated in a new tab.

{% embed url="https://youtu.be/5Gma-9Ki7cc" %}
Video: Pack order
{% endembed %}

#### Ship order

1. Navigate to the Completed page.​
2. Search for the order.
3. Click on the Ship function to mark the order as shipped.

{% embed url="https://youtu.be/0udHzKRcP_0" %}
Video: Ship order
{% endembed %}

{% embed url="https://drive.google.com/file/d/1tqF9lCp0RjlOUZCbkbmrr4wSDFci-n1s/view?usp=drive_link" %}
Video: Complete process for individual order fulfillment
{% endembed %}

{% hint style="info" %}
If you face any issue during shipping label generation, you can refer to our [troubleshoot document](https://docs.hotwax.co/user-guides/v/troubleshooting/hotwax-commerce/fulfillment/shipping-label-generation)
{% endhint %}
