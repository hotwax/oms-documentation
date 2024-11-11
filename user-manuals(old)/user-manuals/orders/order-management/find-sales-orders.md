# Find Sales orders

The `Find Sales Order` page in HotWax Commerce offers users a comprehensive listing of all orders, accompanied by essential order details including order items, order ID, order date, and customer information. Additionally, users can easily ascertain the current status of each order and identify the facility to which it is allocated. For enhanced order management, the page also displays promise dates and auto-cancel dates, ensuring timely fulfillment.

To streamline the search process, users have the option to search for orders using product identifiers on the search page. Moreover, filters such as product store, facility, and sales channel are available to further refine and manage the order list.

For seamless integration with external systems, users can export order data in CSV format, facilitating efficient order fulfillment processes across platforms.

**HotWax Commerce offers the following features on the Sales Order Page:**

### Search Sales Orders

The `Search Sales Order` feature on the `Sales Order` page provides users with quick access to information regarding a specific Order Information. Users can search for Orders based on various identifiers such as Order ID, Customer name, SKU, etc. to get an instant overview of the order.

**Step-by-Step Usage Instructions:**

1. Navigate to the HotWax Commerce platform and log in with your credentials. The first page that opens up upon logging in is the Sales Order page.
2. Within the `Sales Order Page`, you'll find a search bar.
3. In the search bar, you can enter the identifier of the desired order you wish to locate.
4. Press the `Enter` key to initiate the search process after entering the search criteria.
5. The platform will display the search results based on the provided SKU or order ID.
6. You can now view all pertinent details related to the order, including customer information, order items, and status. Click on the order to access the detailed information.

### Filter Orders

HotWax Commerce allows users to sort through numerous orders based on different filter criteria. Enabling users to focus on specific subsets of orders, making it particularly valuable for those dealing with high order volume.

You can apply these filters to Sales Orders:

| Filter Name       | Description                                                                                                                           |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Product Store     | Choose the desired Product Store from the dropdown menu to filter by a specific store.                                                |
| Facility          | Select the Facility to narrow down the results to a particular location.                                                               |
| Order Status      | Filter by Order Status to view orders in a specific stage (created, approved, completed, canceled).                                   |
| Item Status       | Filter by Item Status to focus on specific stages of item fulfillment (Reserved, Picking, Packing, Shipped, Delivered).              |
| Sales Channel     | Choose the desired Sales channel from the dropdown menu to filter by a specific channel such as Shopify, Amazon, etc.                |
| Order Date        | This filter categorizes orders based on their order date, allowing users to filter them by predefined time intervals.                |
| Promised Date     | This filter categorizes orders based on their promise date, allowing users to filter them by predefined time intervals.               |
| Auto Cancel Date  | The auto-cancel date is the predetermined deadline by which an order will be automatically canceled if not fulfilled.               |
| Shipping Method   | Filter by the shipping method such as delivery speed (standard, expedited, express), cost, or specific carriers.                      |

{% hint style="success" %}
You can save the search filters using the disc icon and view the saved search filter by clicking on the three horizontal eclipses on the right.{% endhint %}

### Filter Orders based on Queue

HotWax Commerce has different queues that act as a virtual facility to park the orders that are awaiting fulfillment. Users can view the orders in the queue to identify orders that currently do not have inventory allocated to them.

| Queue Name         | Description                                                                                                                                   |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Pre-Orders        | Orders that are placed in Pre-order parking (To hold pre-ordered items until released from HC) can be shown by clicking on the Pre-orders checkbox. |
| Back Orders       | Orders that are placed in Backorder parking (To hold back-ordered items until released from the HC) can be shown by clicking on the Back-orders checkbox. |
| Brokering Queue   | Orders that are placed in the Brokering Queue (To hold orders for in-stock items until the next brokering run) can be shown by clicking on the Brokering Queue checkbox. |
| Unfillable Hold   | Orders that are placed in the Unfillable Hold (To hold unfillable items from further brokering and auto-cancellation) can be shown by clicking on the Unfillable Hold checkbox. |

By filtering orders based on queues, users can focus on handling orders that require immediate attention or fall into the queue.

Users can also filter the orders that will be auto-canceled today to make sure such orders are prioritized.

### Export Orders

Enables users to export all displayed sales orders into CSV using the Export CSV function. Once the filtered orders are displayed, Click on the `Export CSV` option to initiate the export process.
