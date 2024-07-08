# Parkings

The `Facilities app` within HotWax Commerce offers an efficient solution for overseeing queues or parking spaces designated for orders awaiting fulfillment. These queues serve as digital storage areas for various order types, including those awaiting brokering or pre-orders lacking inventory. Through representing these queues as virtual facilities within the app, users can conveniently establish, oversee, archive, and modify them as necessary. This functionality optimizes workflow by effectively organizing orders and facilitating seamless order management procedures.

## Creating a New Parking

1. Navigate to the parking page in the `Facilities App`.
2. Click on the `(+)` Add New Parking button at the bottom of the page which will open up a new form for creating new parking.
3. Enter the name, Internal ID, and description for the new parking.
4. Click on the `(+)` symbol at the bottom of the form to confirm and save the new parking.

## Archiving Unused Parking

1. Access the `parking` page within the `Facilities app`.
2. Select the `overflow menu` button of the parking you wish to archive.
3. Choose the `Archive` option to archive the selected parking.
4. To unarchive parking, click on the `View Box` icon located at the top right corner of the page. This will display a list of all archived facilities. Click on the `Unarchive` icon next to the name of the parking you wish to unarchive.

## Renaming a Parking

1. In the `Parking page`, click the overflow menu of the parking you want to rename.
2. Choose the option to `rename` the parking.
3. Enter the new name for the parking and confirm the changes.

There are some default parkings available when you deploy HotWax Commerce, you can create any new parking of your preference and archive any unused parkings.

## Default Parkings 

**Brokering Queue**

Order brokering is the process of analyzing the order priority and determining the optimal fulfillment location, with proximity and inventory availability.  Brokering Queue serves as a waiting area for orders awaiting processing, ensuring that they are handled efficiently. If brokering engine is scheduled to run at various times throughout the day, Orders placed between each brokering session will wait in the queue until the next scheduled processing time.

For example, if brokering engines are scheduled to run at 9:00 A.M. and 12:00 P.M.,orders placed between 9:00 A.M. and 12:00 P.M. will remain in the queue until 12:00 P.M. brokering session.


**Pre-order Parking**

Pre-orders offer businesses the opportunity to secure orders for products ahead of their official release. Customers can reserve these items in advance, and pre-order parking provides a digital space within the system to manage these orders until the products become available for fulfillment.

For instance, NotNaked intends to launch a new style of t-shirt in the upcoming season. Even though the inventory from the purchase order won't arrive until 01-03-2024, the brand can start accepting pre-orders from 01-01-2024. These pre-orders will be stored in the pre-order parking area until the products are ready for delivery.

**Backorder Parking**

Backorders are orders placed when inventory is temporarily unavailable. Backorder parking designates a specific area in the system to hold these orders until the backordered items are restocked and prepared for fulfillment.

For example, let's take NotNaked, a clothing retailer facing high demand for their t-shirts. They've already placed purchase orders (POs) for new inventory, anticipated to arrive on 01-03-2024. Backorders submitted before the inventory arrival date will be stored in the backorder parking area.


**Configuration Facility**

The merchandising team maintains a buffer stock at the company level, known as the Inventory Threshold, before committing inventory to online channels. The Configuration Facility allows retailers to allocate this threshold inventory to a virtual location. Inventory stored in the configuration facility will not be available for sale on the e-commerce platform.

For example, let's take Product A, with a Quantity On Hand (QOH) of 100 units and a threshold of 10 units. In this case, 10 units will be stored in the Configuration Facility, which will be subtracted from the QOH. As a result, the Available to Promise (ATP) quantity for Product A would be reduced to 90 units.


**General Operations Parking Queue**

During the initial setup phase, a bulk data import is carried out to input orders into the system. If the retailer opts to include canceled and completed orders alongside open orders, they are placed in the General Operations Parking Queue. This step is taken to distinguish these orders from the open sales orders that HotWax Commerce will fulfill.


**BOPIS Rejected Queue**

The BOPIS (Buy Online Pick Up In Store) Rejected Queue manages orders that cannot be fulfilled at the intended store location. When an order cannot be fulfilled due to inventory unavailability at the store, it is rejected and placed in the BOPIS rejected queue.

Retailers can provide customers with alternative fulfillment choices, such as home delivery or pickup from another store. Upon the customer selecting their preferred option, the order is processed accordingly.


**Unfillable Hold Parking**

The Unfillable Hold Parking feature is crafted to manage situations where orders cannot be fulfilled due to insufficient inventory, potentially resulting in automatic order cancellations after a predetermined period. However, if merchandisers are aware of upcoming inventory, such as through Purchase Orders, they can place these orders in Unfillable Hold Parking. Additionally, any automatic cancellation dates associated with these orders are removed through backend processes, ensuring a digital space for effectively managing unfillable orders. Once the inventory for these orders becomes available, they are transferred to the brokering queue for processing.

For example, suppose an order encounters unavailability due to inventory shortages and will be restocked in 6 days. However, the merchandiser's policy dictates order cancellation if delivery cannot be made within 5 days. In such a scenario, merchandisers can relocate these orders to Unfillable Hold Parking. Concurrently, the system eliminates the auto-cancellation, ensuring the efficient management of the order until inventory becomes available for fulfillment.


**Unfillable Parking**

If an order cannot be processed during the current brokering sessions due to inventory unavailability, it is placed in Unfillable Parking. The order remains there until the next brokering cycle.

For example, suppose there are two brokering engines scheduled to run at 10:00 A.M. and 10:00 P.M. Orders that remain unfulfilled after the 10:00 A.M. the cycle will be parked in the Unfillable Parking space and will be processed for fulfillment at 10:00 P.M. Orders in the Unfillable Parking are prioritized for fulfillment in the next brokering run.
