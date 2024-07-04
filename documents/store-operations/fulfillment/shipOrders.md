---
description: Discover the process to Fulfill orders from the Fulfillment App.
---

# Order Fulfillment

## Pick orders

1. Go to the `Open Orders` page and print a picklist

This page displays all outstanding orders brokered to this facility by the OMS and are ready to be fulfilled.

At the top of the page, the total number of queued orders are clearly displayed, providing an instant overview of the workload.

Orders are arranged in a "First In, First Out" sequence by default. However, users have the option to filter them based on the shipping method to prioritize fulfillment. For instance, Same-day shipping orders can be prioritized by selecting the corresponding filter checkbox at the top of the page.

{% embed url="https://youtu.be/M3jXan3MOZc" %}
Video: Filter Orders
{% endembed %}

1. Click the Print Picksheet function to generate the picksheet. This will create picklist of multiple orders to support wave-picking, ensuring pickers can pick items for all orders in one go.
2. In the Add Picker dialog box, enter the Picker Name or Employee ID to assign a picker. Adding Pickers can be used for performance-based commission distribution.

{% embed url="https://youtu.be/Yu384kR-7mU" %}
Video: Print picklist
{% endembed %}

{% hint style="success" %}
Users can create individual order's picklist by clicking on the order ID which will open a dropbox where the user can select the `Pick Orders` option to create the picklist for the individual order.
{% endhint %}

3. The user can reprint the picklist by clicking on the `Print Picklist` button in the bottom right corner on the In Progress tab.
4. Users can modify the assigned picker on the `In Progress` page by selecting the `Edit Picker` button located next to the `Print Picklist` button in the bottom right corner.
5. Store managers have the option to generate a QR code by clicking the `GENERATE QR CODE` button in the bottom-left corner, pickers can scan this QR code to access their picklist directly on their mobile devices.

{% embed url="https://youtu.be/AaSwHxMoGPM" %}
Video: Regenerate picklist
{% endembed %}

## Pack Orders:

Mark orders packed when order items are ready to be shipped.

{% hint style="info" %}
Bulk Packing slips and Shipping labels will be generated in a new tab.
{% endhint %}

1. Go to the In-Progress Orders and filter out your orders

**Picker Filters:** Easily search for specific orders in batch processes using Picker Filters.

2. Add [multiple boxes](shipping-box.md#adding-shipment-box-to-order-during-fulfillment) to ship large orders.

{% embed url="https://youtu.be/V66o7vAf6HY" %}
Video: Add box
{% endembed %}

3. Click on Pack Orders function to confirm shipment details. Retailers can also enable force scanning from the settings page to ensure store associates scan the items when packing.
4. A pop-up dialog box will appear for printing additional documents like shipping labels and packing slips.

Print the shipping labels and packing slips to attach with the packed orders.

{% embed url="https://youtu.be/lVzHg8QK9Js" %}
Video: Pack Orders
{% endembed %}

**Unpack Orders**
Unpack orders by clicking the unpack button in the 'Completed Page' when necessary, especially in cases where incorrect boxes or items need to be corrected. The unpacked orders will disappear from the completed page and become visible again on the `In Progress` page for packing.
{% endhint %}

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
If the `Ship Packed Orders` Job is enabled in the Job Manager App, all packed orders will be automatically mark shipped. Enable the `isTrackingRequired` setting on shipping methods that should not be automatically shipped unless they have tracking codes.
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

{% embed url="https://youtu.be/RCzf6Uv_CoY" %}
Video: Complete process for individual order fulfillment
{% endembed %}

{% hint style="info" %}
If you face any issue during shipping label generation, you can refer to our [troubleshoot document](https://docs.hotwax.co/user-guides/v/troubleshooting/hotwax-commerce/fulfillment/shipping-label-generation)
{% endhint %}
