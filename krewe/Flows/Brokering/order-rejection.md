# Bulk Order Rejection and Fulfillment Management in HotWax Commerce

In HotWax Commerce, store managers have a `Reject All` feature in the Fulfillment app that allows them to reject all orders in an open or in-progress state. This feature is particularly valuable during times of high demand or when logistical hurdles arise, such as when a carrier truck cannot pick up items from their store or when the facility is unavailable to fulfill orders due to climatic conditions. By rejecting all online orders, store managers can ensure that orders can be fulfilled from other locations in case their facility is unavailable, thereby avoiding delays and order cancellations. To bulk reject the orders from the facility, it is necessary to add the facility to the `OMS fulfillment group`.


## Steps to Add the Facility to the OMS Group
1. Go to the Facilities app and search for the facility from which you want to bulk reject the orders.
2. Open its facility details page, scroll down to the bottom of the page, and click on the `Groups` button on the right side of the page.
3. Click on the `Link to Groups` button and select the `OMS fulfillment group` in the Add Group window.
4. Click on the save icon to add the facility to that group.

**Alternative method:** The user can also toggle on the `Uses native fulfillment app` button on the fulfillment settings card to add the facility to the OMS fulfillment group.

## Reject Outstanding Orders in Bulk
- In the open orders screen, click on the `Reject All` icon at the top right corner. All open orders will be rejected and removed from the Open Orders page.

{% embed url="https://youtu.be/4eSmmv8y6to" %}
Video: Reject outstanding orders in bulk
{% endembed %}


## Reject In-progress Orders
- From the in-progress orders screen, click on the 'Reject All' icon at the top right corner. All in-progress orders will be rejected and removed from the In-Progress Orders page.

{% embed url="https://youtu.be/fCEWxw6guGA" %}
Video: Reject in progress orders in bulk
{% endembed %}


> [!NOTE]  
> The `Reject All` button does not have any effect on the inventory of the facility. The store manager needs to set the Online Order Fulfillment capacity to No Capacity to ensure that no new orders are brokered into this facility.

## Fulfill Rejected Orders from Another Facility
If the retailer wants to fulfill these rejected orders from a different facility, follow the steps below:

1. **Add Facility:**
   - Go to the Facilities app and search for the facility from which you now want to fulfill these orders.
   - Click on the facility to open its details page.
   - If the facility uses the HotWax fulfillment app, add the facility to the `OMS fulfillment group`. If the order fulfillment is to be done by NetSuite, add it to the `NetSuite fulfillment group`. The steps to add the facility to the group are the same as mentioned above.
   - To ensure orders are brokered to this facility, set the online order fulfillment capacity to unlimited.
## Selling Inventory Online
- Facilities have the option to choose whether or not to participate in selling their inventory online. If a facility is capable of fulfilling orders and wants its inventory to be sold online, it can be added to a facility group with the CHANNEL FAC GROUP subtype. Conversely, if a facility decides not to sell its inventory online, it can be excluded from the group. To enable the facility to sell its inventory online, toggle on the online facility group button on the Sell Inventory Online card.
