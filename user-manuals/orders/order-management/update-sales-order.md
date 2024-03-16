
# Update Sales Order 

To perform the order allocation tasks, we first navigate to the View Sales Order page:

1. Go to  the Hamburger Menu in the OMS > Order Management section > Sales Orders to open the Find Sales Order page.
2. Select the order ID to open the View Sales Order page.


## Update Shipping details

{% hint style="info" %}
Edit function is available only for approved orders.
{% endhint %}

{% hint style="info" %}
Details need to be updated for each shipgroup of an order.
{% endhint %}


1. Click the Edit function.
2. Enter the required details in the form and save.
3. Click the edit function against the Shipping method.
4. Choose the method from the list and Save.

{% embed url="https://youtu.be/11nFbayax3I" %}
Video: Update Shipping Details
{% endembed %}

---

## Cancel Sales Order


{% hint style="info" %}
Cancelling a sales order will automatically cancel all other sales order items in the order.
{% endhint %}


1. Click the Status dropdown.
2. Select the Cancel function to cancel the entire sales order.

{% embed url="https://youtu.be/u-CtB-pw-Kc" %}
Video: Cancel sales order
{% endembed %}

---

## Cancel Sales Order Items


1. Go to the Item section.
2. Click the Edit Items function.
3. Click the Delete function for  the respective line item/s.
4. Click the Save function.

{% embed url="https://youtu.be/xFU28XyELd4" %}
Video: Cancel Sales Order items
{% endembed %}

---

## Refresh Sales Order

_**Refreshing sales order allows retailers to reimport a sales order from Shopify to HotWax Commerce. Refreshing is required if an order update in Shopify is not included in the 'sync order update job'.**_

HotWax Commerce can update the following details from Shopify:
1. Adding items to an order
2. Removing items from an order
3. Changing item quantities
4. Changing shipping addresses
5. Changing customer contact detail



**Verification at Shopify**

1. Go to Shopify admin portal and search the order.
2. Verify the changes done on the existing order or perform the updation as required.
3. Save the changes on Shopify.

**Refresh Order in HotWax Commerce**

1. Go back to the order view page
2. Click the Refresh Order button from the header section.
3. Verify that the order status and item status gets canceled.
4. Go back to the Sales Order Find Page and select Approved and Canceled status from the order status filter dropdown.
5. Verify the changes.

**Note:**

* The Canceled order status with  ‘Old Version’ tag signifies the previous order.
* New Order with the same Shopify Order ID is created in HotWax Commerce OMS with updated information in the item section.

{% embed url="https://youtu.be/_e1VDQUgICs" %}
Video: Refresh Sales Order
{% endembed %}

---