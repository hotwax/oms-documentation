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

# Manage Reasons

Retailers can configure which rejection reasons they want to offer for their staff to choose from if they're unable to fulfill items in an order. This section walks through how those reasons are managed in the OMS today.

They can also configure whether a rejection reason from the fulfillment app should impact inventory at the store. Users have the flexibility to choose whether specific rejection reasons result in an actual change to the store's inventory or merely serve as a rejection without affecting stock levels.

## Configuration Details

If the reason (Enumeration) `enumTypeId` is not `REPORT_NO_VAR`, the rejection will impact inventory. If inventory should be depleted when a rejection reason is used, `REPORT_VAR` `enumTypeId` will lead to changes in store inventory. When a rejection reason should elminate all remaining inventory for the item being rejected, set the type to `REPORT_ALL_VAR`.

#### Out Of The Box Rejection Reasons

| Enum Id           | Enum Type Id       | Enum Code         | Sequence Id | Description      | Enum Name       | Sequence Num |
|-------------------|--------------------|-------------------|-------------|------------------|-----------------|--------------|
| INACTIVE_STORE    | REPORT_NO_VAR      | INACTIVE_STORE    | 40          | Inactive store   |                 |              |
| MISMATCH          | REPORT_VAR         | MISMATCH          | 40          | Mismatch         |                 |              |
| NOT_IN_STOCK      | REPORT_ALL_VAR     | NOT_IN_STOCK      | 10          | Not in Stock     |                 |              |
| NO_VARIANCE_LOG   | REPORT_NO_VAR      | NO_VARIANCE_LOG   | 40          | No variance      |                 |              |
| REJ_RSN_DAMAGED   | REPORT_VAR         | DAMAGED           | 30          | Damaged          |                 |              |
| WORN_DISPLAY      | REPORT_VAR         | WORN_DISPLAY      | 20          | Worn Display     |                 |              |