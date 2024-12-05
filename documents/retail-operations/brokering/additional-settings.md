# Additional Settings for Order Routing

The Order Routing app in HotWax Commerce offers retailers flexibility in configuring various scenarios to meet their specific needs. However, certain settings outside the app can still impact order routing processes.

## Maximum Order Capacity

To prevent operational strain when fulfilling online orders alongside walk-in customers, retailers can set a maximum order capacity for each store. This helps avoid exceeding a store's fulfillment capabilities. Once the set limit is reached, the brokering engine will automatically route further orders to other facilities with available capacity.

The process for setting the Maximum Order Capacity is consistent across the [Facility](https://docs.hotwax.co/documents/system-admins/administration/facilities/configure-fulfillment-capacity), [Fulfillment](https://docs.hotwax.co/documents/store-operations/orders/fulfillment/fulfillment-setting-page#online-order-fulfillment), and [ATP](./../available-to-promise/shipping-rule.md#setting-maximum-order-capacity-of-a-facility) apps. Follow these steps to configure the maximum capacity for a facility:

### Steps to Implement

1. In each app (Facility, Fulfillment, ATP), locate the capacity settings for the store.
2. Click the capacity chip on the store’s order capacity card.
3. Choose from the following options:
   - **Unlimited Capacity**
   - **No Capacity**
   - **Custom Capacity**
4. Select `Custom Capacity` and enter the desired maximum limit (e.g., 10 orders per day) for each facility.

{% hint style="info" %} During peak hours, store managers can turn off fulfillment to manage store capacity by setting the order capacity to `No Capacity`. {% endhint %}

## Brokering Shipment Thresholds

To optimize inventory usage and fulfillment speed, retailers often split orders across multiple locations. However, this can result in high shipping costs, especially for low-value items. HotWax Commerce provides an option to set a Brokering shipment threshold value to avoid high shipping costs. If this threshold is set, orders will be allowed to split only if they are above the mentioned threshold.

**Example:** 

1- If an order contains a `Black Belt' of $80 and a 'Brown Wallet' worth $160, the order will not be split as both items should be above the threshold.

2- If an order contains a 'Black Belt' and 'Black Wallet' valued at $80 each, the order will not be split as both item falls below the threshold.

3- If an order contains two items—'Brown Belt' and 'Brown Wallet'—each worth $160, and the brokering threshold is set to $100, the items will be split since both items are above the threshold.

### Steps to Implement

1. **Navigate to Store Settings**
   - In the HotWax Commerce Order Management System, go to the `Product Store` page.
   - Click `Add Settings` in the store settings section.

2. **Set Brokering Shipment Threshold**
   - From the settings submenu, select `Brokering Shipment Threshold`.
   - Enter the threshold value to prevent splitting orders below this amount (e.g., set the threshold to $100).

3. **Save Settings**
   - Save the store settings to apply the brokering threshold across the Product Store.

Once the threshold is set, orders will only be split if the value of the items meets or exceeds the threshold, ensuring more efficient shipping and reducing losses on low-value shipments.

{% embed url="https://youtu.be/GQU6wyNI4kw" %}
Set Brokering Shipment Threshold
{% endembed %}
