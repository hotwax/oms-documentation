---
description: >-
  If the order item inventory is exhausted or damaged, report the reason and
  reject the item.
---

# Single Order Rejection

{% hint style="info" %}
​Rejected items will be removed from the dashboard.
{% endhint %}

1. Go to the In-Progress page.​
2. ​Search for the desired order.
3. Click the `​Report an Issue`` function.
4. Select an appropriate reason from the dropdown.

<figure><img src="../.gitbook/assets/Screenshot 2023-11-01 at 5.42.23 PM (1).png" alt=""><figcaption><p>Image: In progress Order page</p></figcaption></figure>

5. Save the changes.

The OMS will route the order to another facility, depending on the availability of the product at another facility, the customer's shipping preferences, and routing rules.

{% embed url="https://youtu.be/5JpUM8aqFSM" %}
Video: Single Order Rejection
{% endembed %}

***

### How OMS makes inventory changes based on rejection reasons:

* **NOT IN STOCK:** OMS sets the ATP and QOH inventory to **0** for the rejected product at the store. This ensures that no new orders are placed for the product until it is back in stock
* **MISMATCH:** OMS decreases the ATP and QOH inventory by the rejected quantity. This means that the product is still available in stock, but it is not available to fulfill orders that require the specific size or color that was rejected.
* **DAMAGE:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders. The QOH inventory remains unchanged, as the product is still in stock, but it is damaged and cannot be sold.
* **WORN DISPLAY:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders, as it is worn and cannot be sold. The QOH inventory remains unchanged, as the product is still in stock.


# Bulk Order Rejection

### Reject outstanding orders in bulk

1. In[ ](https://app.gitbook.com/s/nxEFZBvpZaE6aiGObuBX/adminstration-settings/fulfillment-section)the open screen, click on 'Reject All' icon at the top right corner.
2. All open orders will be rejected and removed from the Open Orders page.​



{% embed url="https://youtu.be/4eSmmv8y6to" %}
Video: Reject outstanding orders in bulk
{% endembed %}

***

### Reject In-progress Orders

From the in-progess screen, click on the ​'Reject All' icon at the top right corner. All in-progress orders will be rejected and removed from the In-Progress Orders page.

{% embed url="https://youtu.be/fCEWxw6guGA" %}
Video: Reject in progress orders in bulk
{% endembed %}