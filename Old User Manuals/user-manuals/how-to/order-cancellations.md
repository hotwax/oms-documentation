# How to Cancel Orders

Order cancellations are a common occurrence in online retail. If a merchant is using both Shopify and HotWax Commerce, cancellations can happen in two ways:

1. Cancellations made in Shopify and updated in HotWax Commerce.
2. Cancellations made in HotWax Commerce and updated in Shopify.

HotWax Commerce recommends canceling orders on Shopify and then updating them on HotWax Commerce, following the same process as used for order creation. This approach ensures that cancellations are handled consistently by both customers and the customer service team. In special cases, such as auto cancellations and mass pre-order cancellations, Shopify retailers can use HotWax Commerce to cancel orders and update them on Shopify.

## Order Cancellation on Shopify

HotWax Commerce can import cancellation updates in two cases:

### Full Order Cancellations

When customers request order cancellations from Shopify or CSR teams cancel orders due to suspected fraudulent orders, they can cancel the entire order through the following steps:

- Go to the order page on Shopify.
- Select the desired order.
- Click on `More Actions` and choose `Cancel Order`.
  
To sync cancellation updates from Shopify to HotWax Commerce, there are two options available: webhooks and batch jobs. By subscribing to the `Canceled Order` webhook, customers can cancel orders in real-time. However, it should be noted that Shopify webhooks may only sometimes be reliable. Therefore, it is recommended to schedule the `Canceled Order` Job. The canceled order job can be scheduled from the HotWax Commerce Job Manager App.

1. Navigate to the Order section in the job manager app.
2. Open the job card titled Canceled Order.
3. Select the order run time and schedule.
4. Save the Changes, this will schedule the job to import the canceled orders.

### Partial Order Cancellations

When customers request to remove any item from the order or the CSR team cancels the ordered item due to inventory variance, they can partially cancel the order through the following steps:

- Access the order page on Shopify.
- Choose the `Edit` option.
- Adjust the quantity or remove the specific item(s) to be canceled.

For partial cancellations, the order status in Shopify does not change, only the last updated date for the order changes. HotWax Commerce partially cancels the order through the following steps:

1. Navigate to the Order section in the job manager app.
2. Open the job card titled Canceled Item.
3. Select the order run time and schedule.
4. Save the Changes, this will schedule the job to import the canceled items.

For more details on how canceled orders are imported, refer to the Shopify-HotWax Commerce Integration document.

## Order Cancellation in HotWax Commerce

### Order Cancellation of Non-Brokered Items

Cancellation of an order can have a different nature on OMS. If an order is not brokered, when it's still in the `created` or `approved` status but not brokered yet, the order will be marked as canceled on the sales order dashboard of HotWax Commerce. This ensures that the canceled order is properly measured and since the order is not allocated to any store, there would be no changes in the store ATP, only the brokering queue inventory is released.

### Order Cancellation of Brokered Items

If an order is brokered for fulfillment to the facility and gets canceled on Shopify, the Fulfillment app will show the impact regardless of whether the job is Open, In Progress, or Completed status. The canceled orders will be automatically removed from the Fulfillment app so that store associates can identify that no further operation needs to be done to fulfill the orders. The ATP of the canceled orders items will increase both for the store and online ATP computation.

If the order is packed, the CSR team should verify with the fulfillment team that the order needs to be unpacked and has been canceled. This ensures that the order is not shipped to the customer.

### Partial Cancellation in HotWax Commerce

When Partial order cancellation happens in HotWax commerce, the order item is removed from the fulfillment app, and its inventory is corrected similarly to complete order cancellation. The order status will remain as per the other items, such as created, approved, or completed, only the order item status is changed to canceled which can be visible on the order details page against the line item which is canceled.
