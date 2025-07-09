# Test Drive

The Test Drive feature is used to test different types of orders to verify that all routing flows are working as expected.

**What Can Be Tested**
- **Brokering Run** (test a full group of routings)  
- **Routing Rule** (test one routing and its rules)  
- **Inventory Rule** (see how stock levels and ATP impact decisions)

## Pause Scheduled Brokering
While using the Test Drive feature, scheduled brokering stops temporarily. This can be done using the "Pause scheduled brokering" toggle present on the Test Drive card. This toggle turns off scheduled brokering for that product store, preventing the system from automatically routing orders.  

The toggle also shows how many other users are currently running a Test Drive session. This helps avoid conflicts, especially when multiple team members are testing at the same time. Showing active sessions helps prevent anyone from accidentally turning scheduled brokering back on while others are still working in the test environment.

## Test Routing Group
On a Routing Run page, a `Test Drive` button will appear just below the description.

### Accessing the Test Drive Interface
Selecting the button opens the Test Drive interface, where all routing and inventory rules linked to the selected run are displayed. A search bar is available to find orders.

### Viewing Order Details
Selecting Test Order opens the order details. This includes the order name, internal ID, the facility or parking where the order currently exists, whether it is in the brokering queue or at a specific facility, the carrier partner, and the delivery type, such as standard or next-day.  

If the order is not yet brokered, the routings eligible to broker the order will be highlighted. If the order is already brokered, the routing and rule that were used will be highlighted.

### Brokering and Resetting an Order
A `Broker Order` button is available. Selecting this brokers the order using the rules from the selected brokering run.  

To test the order again, the `Reset Order` button can be used. This moves the order from the allocated facilities back to the parking facility it originally came from.  

The rejection reason will state that it was part of a brokering test drive. No variance will be recorded when an order is reset.

### Understanding Brokering Decisions
The items in the order appear in separate cards based on ship groups. Each card shows the reason why those items were brokered to a specific facility.  

Each item also displays the Available To Promise (ATP) and Quantity On Hand (QoH) at the facility.

### View configuration details
To view the details of a routing and or a routing rule, click the `details` button to show the configuration of the selected routing or routing rule. If a filter does not match the test order, an error icon will appear on that filter.

## Test Single Routing
To test a single routing instead of a group, a specific routing can be selected from the order batch.  
Inside the routing, clicking the `Test` button will show an order search bar.  

Once an order is selected, the app checks if the selected routing can broker the order based on its filters. If a filter is blocking the selected order from qualifying in the routing, Test Drive will flag those filters.  
If the order is brokered, the ship group card will display the routing rule that allocated the items.

## Testing Inventory Rule
To test an individual inventory rule, select any rule to test. After selecting, a `Test` button will appear on the configuration page. Clicking the `Test` button opens the Test Drive interface. In the interface, search for an order and check if the inventory rule is working as expected.

