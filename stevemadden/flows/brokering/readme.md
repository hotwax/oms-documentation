# Brokering Jobs

There are several types of brokering jobs operating within SM-USA production. These jobs broker specific orders to facilities with available inventory. If inventory is unavailable, the order item becomes unfulfillable, and an auto cancellation date is set on the items based on the auto-cancel days defined in ProductStore.DaysToCancelNonPay.

The following brokering jobs are currently active in SM-Production:

| Job Name                      | Description                                                                                                       | Frequency                                    |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| brokerUnfillableOrder        | This service operates on a brand-specific basis, selecting only order items tagged as unfillable.                 | First brokering of the day, runs at brand level |
| brokerRegularOrder           | Following brokerUnfillableOrder, this service picks fresh orders that have not yet undergone brokering attempts.   | Runs sequentially after brokerUnfillableOrder |
| checkPreOrderedItemsForRelease | This service identifies pre-order or backorder items with available inventory and releases/brokers them to the facility if the promise date has arrived. | Runs sequentially after brokerRegularOrder |
| reBrokerOrder                | This service identifies items with a rejected tag and brokers them to another facility with available inventory.  | Runs between 08:15 am to 02:45 pm for all brands |
| brokerOrders                 | This service picks fresh orders within the day that have not yet undergone brokering attempts.                   | Runs between 11:00 am to 02:00 pm at brand level |
| brokerOrdersOnFacilityType   | This service filters out only those orders that are having standard shipping methods and are available at the warehouse. | Runs on defined frequency at brand level |
| brokerReleasedOrderItems     | When items/products are manually released from the HotWax preorder app, the brokerReleasedOrderItems service is triggered for the released items. | Runs immediately after items are released from the pre-order app. |
