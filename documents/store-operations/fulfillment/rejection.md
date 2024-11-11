---
description: >-
  If the order item inventory is exhausted or damaged, report the reason and
  reject the item.
---

# Rejection

## Single Order Rejection

{% hint style="info" %}
​Rejected items will be removed from the dashboard.
{% endhint %}

1. Go to the In-Progress page.​
2. ​Search for the desired order.
3. Click the \`​Report an Issue\`\` function.
4. Select an appropriate reason from the dropdown.
5. Save the changes.

The OMS will route the order to another facility, depending on the availability of the product at another facility, the customer's shipping preferences, and routing rules.

{% embed url="https://youtu.be/5JpUM8aqFSM" %}
Video: Single Order Rejection
{% endembed %}

***

#### How OMS makes inventory changes based on rejection reasons:

* **NOT IN STOCK:** OMS sets the ATP and QOH inventory to **0** for the rejected product at the store. This ensures that no new orders are placed for the product until it is back in stock
* **MISMATCH:** OMS decreases the ATP and QOH inventory by the rejected quantity. This means that the product is still available in stock, but it is not available to fulfill orders that require the specific size or color that was rejected.
* **DAMAGE:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders. The QOH inventory remains unchanged, as the product is still in stock, but it is damaged and cannot be sold.
* **WORN DISPLAY:** OMS decreases the ATP inventory by the rejected quantity. This means that the product is no longer available to fulfill orders, as it is worn and cannot be sold. The QOH inventory remains unchanged, as the product is still in stock.

## Bulk Order Rejection

In HotWax Commerce, store managers have a Reject All feature that allows rejecting all orders that are in an open state or in-progress state coming for fulfillment. This feature is particularly valuable during times of high demand or when logistical hurdles arise, such as when a carrier truck cannot pick up the items from their store.

By rejecting all online orders, store managers can ensure that orders can be fulfilled from other locations in case their facility is unavailable for fulfillment to avoid delays and order cancellations.

Note: The store manager needs to select `Online order fulfillment` capacity to `No Capacity` to ensure that no new orders are  brokered to this facility


#### Reject outstanding orders in bulk

1. In the open screen, click on 'Reject All' icon at the top right corner.
2. All open orders will be rejected and removed from the Open Orders page.​

{% embed url="https://youtu.be/4eSmmv8y6to" %}
Video: Reject outstanding orders in bulk
{% endembed %}

***

#### Reject In-progress Orders

From the in-progess screen, click on the ​'Reject All' icon at the top right corner. All in-progress orders will be rejected and removed from the In-Progress Orders page.

{% embed url="https://youtu.be/fCEWxw6guGA" %}
Video: Reject in progress orders in bulk
{% endembed %}

{% hint style="info" %}
`Reject all` button does not have any effect on the inventory of the facility. Users need to set the fulfillment capacity of the facility to 0 to ensure that orders are not brokered again to that facility.
{% endhint %}

## Manage Reasons

Retailers can configure which rejection reasons they want to offer for their staff to choose from if they're unable to fulfill items in an order. This section walks through how those reasons are managed in the OMS today.

They can also configure whether a rejection reason from the fulfillment app should impact inventory at the store. Users have the flexibility to choose whether specific rejection reasons result in an actual change to the store's inventory or merely serve as a rejection without affecting stock levels.

### Configuration Details

If the reason (Enumeration) `enumTypeId` is not `REPORT_NO_VAR`, the rejection will impact inventory. If inventory should be depleted when a rejection reason is used, `REPORT_VAR` `enumTypeId` will lead to changes in store inventory. When a rejection reason should elminate all remaining inventory for the item being rejected, set the type to `REPORT_ALL_VAR`.

**Out Of The Box Rejection Reasons**

| Enum Id           | Enum Type Id     | Enum Code         | Sequence Id | Description    | Enum Name | Sequence Num |
| ----------------- | ---------------- | ----------------- | ----------- | -------------- | --------- | ------------ |
| INACTIVE\_STORE   | REPORT\_NO\_VAR  | INACTIVE\_STORE   | 40          | Inactive store |           |              |
| MISMATCH          | REPORT\_VAR      | MISMATCH          | 40          | Mismatch       |           |              |
| NOT\_IN\_STOCK    | REPORT\_ALL\_VAR | NOT\_IN\_STOCK    | 10          | Not in Stock   |           |              |
| NO\_VARIANCE\_LOG | REPORT\_NO\_VAR  | NO\_VARIANCE\_LOG | 40          | No variance    |           |              |
| REJ\_RSN\_DAMAGED | REPORT\_VAR      | DAMAGED           | 30          | Damaged        |           |              |
| WORN\_DISPLAY     | REPORT\_VAR      | WORN\_DISPLAY     | 20          | Worn Display   |           |              |


## Rejections 2.0

The fulfillment app allows store users to reject an order line item when it is unavailable to be fulfilled from that facility. Users can click on the trash-bin button present against the order line item to reject the item with a rejection reason.

Note: Partial fulfillment may or may not be selected by the merchant. 

Depending on the choice let's look at each case scenario:

### Partial Rejection Allowed

1. **Reject Unfillable Item:** Click the reject button next to the specific item.
2. **Choose Reason:** Select a reason like "not in stock" or "damaged".
3. **Fulfill Remaining Items:** Process the remaining items as usual and create a shipment.
4. **Rebrokering:** The rejected item will be sent to another facility for fulfillment.

### Partial Rejection Not Allowed

**Case 1: Single Unfillable Item**

1. **Reject Item:** Click the reject button and select a reason such as "not in stock".
2. **Automatic Rejection:** The entire order will be rejected with the reason "reject entire order" which will not impact inventory variance and not count in the rejections reporting.

**Case 2: Multiple Unfillable Items**

1. **Reject an Item:** Click the reject button on one unfillable item.
2. **Automatic Rejection:** All items will be rejected with the reason "reject entire order."
3. **Update Reason (Optional):** If another item has a different rejection reason, manually change it.

**Note:** In cases where partial rejection is not allowed, rejecting any item automatically triggers rejection of the entire order.
