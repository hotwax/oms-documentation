---
description: >-
  If the order item inventory is exhausted or damaged, report the reason and
  reject the item.
---

# Single Order Rejection

_**This document outlines the step by step process to reject a single order along with the rejection reason:**_&#x20;

{% hint style="info" %}
&#x20;​Rejected item will be removed from the dashboard.&#x20;
{% endhint %}

1. Go to the In-Progress page.​
2. ​Search for the desired order.
3. Click the ​Report an Issue function.
4. Select an appropriate reason from the dropdown.
5. Save the changes.

{% embed url="https://youtu.be/5JpUM8aqFSM" %}
Video: Single Order Rejection
{% endembed %}

***

### **How OMS makes inventory changes based on rejection reasons:**

{% hint style="info" %}
OMS may or may not route the order to another store, depending on the availability of the product at another store, the customer's shipping preferences, and the OMS's routing rules.
{% endhint %}

{% hint style="info" %}
OMS automatically rejects all other order items in other orders at the store that are rejected.
{% endhint %}

* **NOT IN STOCK:** OMS sets the ATP and QOH inventory to **0** for the rejected product at the store. This ensures that no new orders are placed for the product until it is back in stock
* **MISMATCH:** OMS decreases the ATP and QOH inventory by the rejected quantity. This means that the product is still available in stock, but it is not available to fulfill orders that require the specific size or color that was rejected.
* **DAMAGE:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders. The QOH inventory remains unchanged, as the product is still in stock, but it is damaged and cannot be sold.
* **WORN DISPLAY:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders, as it is worn and cannot be sold. The QOH inventory remains unchanged, as the product is still in stock.



**Related links:**&#x20;

1. [In-Progress page.](http://127.0.0.1:5000/s/NfzAzAbnWQnRfRXiK6m4/in-progress-page)​
2. &#x20;​[Report an Issue](http://127.0.0.1:5000/s/NfzAzAbnWQnRfRXiK6m4/in-progress-page/report-an-issue)



:arrow\_left: [Go to Hotwax Commerce Docs](http://127.0.0.1:5000/o/l53nGvPQLhOHrKCP9HTG/s/TefRnbhmBjhScpq172vl/)
