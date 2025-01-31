---
description: Discover how sales orders are updated in HotWax Commerce OMS.
---

# Update orders

To perform the order allocation tasks, we first navigate to the View Sales Order page:

1. Go to the Hamburger Menu in the OMS > Order Management section > Sales Orders to open the Find Sales Order page.
2. Search for the order ID for which you want to update the order details.
3. Select the order ID to open the View Sales Order page.

## Update Shipping details

Users can easily access and review the shipping details associated with orders. This includes shipping address, communication details, shipping method, estimated delivery date, and tracking details.

{% hint style="info" %}
Edit function is available only for approved orders.
{% endhint %}

{% hint style="info" %}
Details need to be updated for each shipgroup of an order.
{% endhint %}

Here's how you can update shipping address for the order:

**Updating Shipping Address:**

* Click on the `Edit` function available for the order.
* Fill in the required shipping details that needs to be changed in the form provided.
* Save the changes by clicking on the `save` button

**Updating Shipping Method:**

* Within the order, locate the shipping method section.
* Click on the `Edit` function next to the current shipping method.
* Choose the desired shipping method from the provided list.
* Save the changes.

{% embed url="https://youtu.be/11nFbayax3I" %}
Video: Update Shipping Details
{% endembed %}

{% hint style="warning" %}
Users only change the shipping method directly for orders in the brokering queue. If inventory has already been allocated to the order, users need to reject the item from the store, update the shipping method, and then broker the order again.
{% endhint %}

***

## Cancel Sales Order

Orders can only be canceled in HotWax Commerce when they are in the `created` state. Additionally, it's important to note that the sales orders canceled on HotWax Commerce are not automatically updated on Shopify. Therefore, it is recommended for users to cancel orders directly on Shopify for seamless synchronization and accurate order status across platforms. Cancelling a sales order will automatically cancel all other sales order items in the order.

**Cancellation Process:**

1. Select the required order to open the Sales Order Detail page.
2. Click the Status dropdown located at the top left of the page.
3. Select the Cancel function to cancel the entire sales order.

{% embed url="https://youtu.be/u-CtB-pw-Kc" %}
Video: Cancel sales order
{% endembed %}

***

## Cancel Sales Order Items

1. Once the `View Sales Order` page is open, scroll down to locate the `Item` section. This section displays all items included in the selected order.
2. Within the Item section, locate and click on the `Edit Items` function. This action will enable editing options for the items within the order.
3. Identify the line item/s that need to be canceled due to inability to fulfill and click on the `Delete` function next to each respective item.
4. After deleting the unwanted items, ensure to click on the `Save` function to apply the changes to the order.

{% embed url="https://youtu.be/xFU28XyELd4" %}
Video: Cancel Sales Order items
{% endembed %}

***

## Refresh Sales Order

Refreshing sales order allows retailers to reimport a sales order from Shopify to HotWax Commerce. Refreshing is required if an order update in Shopify is not included in the `sync order update job`.

HotWax Commerce can update the following details from Shopify:

1. Adding items to an order
2. Removing items from an order
3. Changing item quantities
4. Changing shipping addresses
5. Changing customer contact detail
6. Change in Order Fulfillment Status

### Step-by-Step Usage Instructions:

**Verification at Shopify:**

1. Log in to the Shopify admin portal.
2. Locate the specific order that requires updates.
3. Review the order details to verify any changes or make necessary updates, such as adding/removing items, adjusting quantities, or modifying customer and shipping information.
4. Once verified or updated, ensure to save the changes within Shopify.

**Refresh Order in HotWax Commerce:**

1. Return to the HotWax Commerce platform and access the order view page for the corresponding order.
2. Locate and click on the "Refresh Order" button available in the header section of the order view page.
3. After refreshing, verify that the order status and item status are updated accordingly. This may involve checking for any cancellations or changes in item availability.
4. Go back to the Sales Order Find Page and select "Approved" and "Canceled" statuses from the order status filter dropdown.
5. Review the refreshed order details to ensure that the updates from Shopify have been successfully synchronized with HotWax Commerce.

{% hint style="info" %}
The existing orders get canceled with the `Old Version` tag. A new Order with the same order ID gets created with updated items in HotWax Commerce. The updated information will be reflected in the item section on the sales order detail page.
{% endhint %}

{% embed url="https://youtu.be/_e1VDQUgICs" %}
Video: Refresh Sales Order
{% endembed %}

### Allow Splitting

Splitting an order into separate shipments for fulfillment across multiple locations occurs when all items are not available at a single facility. The order splitting settings on the order view page is shown as per the product store settings. However, if the CSR team want to split a specific order, they can click on the checkbox against the allow splitting function.

### Add Gift Message

CSR teams can manually input personalized messages on behalf of customers upon request. These gift messages can be added along with the order at the time of fulfillment by the store associates by clicking on the `Add` Buttion against the gift message

### Add Handling instructions

Any special instructions or handling requirements associated with the items in the group can be added by clicking on the `Add` button against Handling instruct. The handling instructions added here will be visible in the fulfillment app for store associates

{% embed url="https://youtu.be/TE4WrSwqMMY" %}



### Add Ship By and Ship After Date

Ship By specifies the date by which the items should be shipped to ensure timely delivery, while Ship After indicates the date after which the items need to be shipped. Both Ship By and Ship After details can only be added upon customers' requests.
