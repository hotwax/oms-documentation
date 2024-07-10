---
description: >-
  Explore essential terms in Omnichannel Order Management. Clarify your
  understanding with our comprehensive glossary.
---

## Advanced Shipping Notice (ASN)

An Advance Shipment Notification (ASN) is a notification sent by a supplier to a recipient detailing the contents and expected arrival of a shipment, often sent in advance of the physical delivery. For example, if a store anticipates receiving 100 shirts in an incoming shipment, the ASN will detail this expected inventory count.

In the context of Hotwax Commerce, store associates receive ASNs in relation to Transfer Orders (TOs). Generally, a Transfer Order is created in an ERP system, and when the TO is fulfilled in the ERP or WMS (Warehouse Management System), an ASN is generated in HC. Store associates then perform the receiving based on this ASN using the HC Receiving App. In the context of Purchase orders, the ASN receiving is done in ERP/WMS.

Upon the shipment's arrival, store associates can use the Inventory Receiving App to locate the ASN by scanning the ASN barcode or manually inputting the ASN ID. They can then view the ASN details, including SKUs, names, SKU codes, images, and expected inventory counts.


## Appeasement

Appeasement refers to refunds, discounts, or other forms of compensation provided to resolve disputes, improve customer satisfaction, and maintain positive relationships. HotWax Commerce does not allow the creation of appeasements. Instead, CSR teams can create appeasements in e-commerce platforms like Shopify, either by offering another product or issuing a refund without a return. HotWax Commerce downloads these appeasements for reporting purposes and posts them to the ERP for financial record keeping without tracking order line item details.

## Arrival Date

The arrival date is the date when the inventory of the purchase order items is expected to arrive at the destination. Merchandisers can view the arrival date on the Find Purchase Orders page.

## Available to Promise (ATP)

ATP (Available to Promise) represents the physical quantity of a product at stores or warehouses after deducting the reserved inventory, that is, inventory that has been allocated to online orders from the Quantity on Hand (QOH).  
ATP = QOH - Reserved quantities

## Backorders

Backorders are orders taken for products that are temporarily out of stock. These orders are referred to as “backorders” because they were previously in stock and will be available again soon but are currently unavailable due to high demand, inaccurate sales forecasting, or operational discrepancies.  
For example, Brand ABC has an amazing season and sells all its inventory. Some regular items were bought frequently, so the merchandisers have already sent POs for these goods and know the approximate date of arrival. The brand utilizes this time for sales and starts taking orders for these products.  
To know more about Backorders [Click Here](https://www.hotwax.co/blog/key-concepts-omnichannel-order-management).

## Backorder Parking

Backorder parking refers to the area that holds the orders for Backorder items. These orders are stored in the backorder parking area until they are restocked and prepared for fulfillment. To learn more about Backorder Parking [Click Here](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings).

## Brokering

In Hotwax Commerce, brokering refers to the process of matching and routing orders to the most suitable fulfillment center or location based on factors like inventory availability, proximity to the customer, and delivery speed requirements. This ensures that orders are processed and shipped efficiently to meet delivery expectations.

## Brokering History
Brokering History refers to the record of past brokering activities in HotWax Commerce. It logs when orders were routed to fulfillment centers based on inventory, proximity, and delivery speed.

## Brokering Queue

The Brokering Queue serves as a waiting area for orders awaiting processing in the order brokering process. It ensures that orders are handled efficiently by analyzing order priority and determining the optimal fulfillment location based on proximity and inventory availability. Orders in Approved status waiting to be brokered are parked in the Brokering Queue until the brokering engine runs at frequent intervals.

For example, if the brokering engine runs every three hours starting at 9:00 A.M., orders placed and approved at 10:00 A.M. will remain in the Brokering Queue until the next brokering engine run at 12:00 P.M. Similarly, orders placed and approved at 11:30 A.M. will also be processed at 12:00 P.M.

To Know more about Brokering [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/brokering).

## Bundle Product

A Bundle Product refers to a product that consists of multiple components. These components are integrated to form a cohesive product offering. For example, a computer bundle might include a CPU, motherboard, RAM, and a hard drive.

The Import Bundle Product Components job ensures that these components are accurately reflected in the Order Management System (OMS). The availability of a bundle product is determined by the lowest common denominator of component inventory available at each facility. This means that the bundle product's availability is constrained by the facility with the least available inventory of its components. The computed inventory of each bundle product at every facility is then aggregated to determine the final sellable inventory number across the entire network.
 
To know more about Bundle Products [Click Here](https://docs.hotwax.co/documents/v/learn-shopify/additional-resources/kit-products).

## CSR (Customer Service Representative)

A Customer Service Representative (CSR) is the first point of contact for any customer who has a question or an issue with a product or service the company sells. CSRs are responsible for handling customer requests regarding order fulfillment, order cancellations, and returns.

Customer Service Representatives (CSRs) can utilize HotWax Commerce to get detailed visibility about the orders and perform actions accordingly as per the customer’s requests.

## Digital Gift Cards

Digital gift cards, or e-gift cards, are virtual equivalents of physical gift cards. Customers receive them via email or text message along with a unique serial number that they can use to redeem the value stored in the card. When customers order a digital gift card on Shopify, the order is immediately auto-fulfilled, a serial number is assigned, and the value is loaded to activate the gift card. Consequently, when HotWax Commerce downloads that order from Shopify, it is automatically marked as "Completed". 

To Know more about Gift cards [Click Here](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/giftcardorderslifecycle#digital-gift-cards).

## Excluded ATP

Excluded ATP refers to the inventory at fulfillment locations that are not participating in online selling. This inventory is not considered available for online orders and is excluded from the Online ATP calculation.

## Excluded Facilities

Excluded Facilities are facilities that are either not participating in online order fulfillment or temporarily unable to participate due to reasons like insufficient labor, natural disasters, or holidays. Inventory becomes available again when these scenarios change. Retailers can turn off fulfillment if they want to temporarily disable a facility from participation. 

To learn more about excluded facilities [Click Here](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/disabling-facilities).

## Expedited Orders

Expedited orders are those prioritized for faster processing and shipping to ensure delivery within a shorter timeframe, typically within one to three business days. These orders are given precedence over standard orders to meet the high expectations of consumers for quick delivery. Expedited orders often involve additional costs for the customer or the merchant to facilitate the faster shipping and handling process.

## Facility

In HotWax Commerce, a facility is a physical location such as a warehouse, distribution center, or store where inventory is stored, managed, and processed.

## Facility Group

Facility groups are used to define the scope and functionality of facilities for omnichannel order management. For example, including a facility in the Pickup and Same Day Shipping groups indicates that the facility accommodates both Buy Online, Pickup In-Store (BOPIS), and same-day shipping orders.

## Facility Type

In HotWax Commerce, Facility type refers to different locations used for fulfillment, including:

Retail Store: Physical stores that fulfill online orders and facilitate in-store pickups.
Warehouse: Centralized storage locations for fulfilling online orders and restocking stores.
Outlet Store: Discount retail locations that fulfill orders and offer in-store pickups.
Outlet Warehouse: Storage for outlet inventory, supporting fulfillment for outlet stores, and direct customer shipments.

Retailers can prioritize their brokering rules according to the facility types

## Inventory Variance
Inventory variance refers to discrepancies between expected and actual inventory levels. It can be caused by factors such as damaged goods, discrepancies in shipment, or theft.

## Item Fulfillment Status
Item Fulfillment Status in HotWax Commerce tracks the current stage of an item within the order fulfillment process. This status helps in monitoring and managing orders, indicating whether an item is Reserved, Picked, Packed, Shipped, or Delivered.

## Maximum Order Limit

The Maximum Order Limit is a predefined limit set by a store, indicating the maximum number of orders it can fulfill in a day. When this limit is reached, the brokering engine automatically routes additional orders to alternative facilities that have capacity available. 
Setting a maximum order limit helps the store manage its resources effectively. It ensures that orders can be fulfilled within operational constraints and prevents overcommitment of resources. By leveraging the brokering engine to redirect orders to other facilities as needed, retailer maintains their ability to meet customer demand without delay.


## Online ATP
Online ATP represents the unified inventory pool of actual sellable inventory count that is published on eCommerce platforms and can be promised to customers.  
To calculate Online ATP, HotWax Commerce deducts inventory that is not available for sale from the ATP. This includes items such as safety stock, threshold quantities, orders in the brokering queue, and inventory from locations that are not participating in online selling.  
HotWax Commerce calculates Online Available to Promise (ATP)  
Online ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)  
To Know more about Online ATP [Click Here](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/inventorylifecycle#push-online-atp-to-ecommerce).

## Order Fulfillment Status
Order Fulfillment Status in HotWax Commerce tracks the current stage of an overall order within the order fulfillment process. This status helps in monitoring and managing orders, indicating whether an Order is created, approved, picked, packed, or shipped.

## Order Merging
When a customer places multiple orders that can be fulfilled from the same location. Instead of treating them as separate orders, retailers prefer to merge them into a single shipment, ensuring a smoother and more cost-effective delivery process. Hotwax commerce enables order merging so that orders coming from the same location are fulfilled together.
To Know more about Order Merging [Click Here](https://www.hotwax.co/blog/what-is-order-consolidation-and-order-merging)

## Packing Slip
A packing slip is a document included with a shipment that lists the contents of the package. It typically includes details such as item names, quantities, and sometimes prices. This document assists both customers and senders in confirming that the correct items have been packed and shipped.
In HotWax Commerce, store associates can choose whether they want to print the packing slip when packing orders  
To know more about Packing Slip [Click Here](https://docs.hotwax.co/documents/orders/bopis/packed-order-tab).

## Picker

Pickers are tasked with fulfilling orders by picking items from the store’s location according to a printed or digital picklist. This role can be created and assigned to a user in HotWax Commerce, ensuring efficient management of picking operations. Once a digital or printed picklist is created, it can be assigned to a user in the Picker role, to streamline the order fulfillment process.

## Picklist
A picklist provides details such as inventory SKUs, quantities, and locations. It serves as a guide for pickers to pick items for orders fulfillment. To improve the picking process, store or fulfillment managers often organize inventory based on criteria such as Product Name, Bin ID, or Location Sequence ID. Structuring picklists to align with these strategies ensures an optimized route for pickers, minimizing time spent on picking and improving both speed and accuracy. 

## Pre-Orders
Pre-orders are simply advance orders taken for future inventory. These products have not yet been released in the market and are still in planning or production, and thus not in stock. A pre-order is an order placed for a product that is not yet available for purchase or delivery. Customers can reserve the item in advance, and the order will be fulfilled once the product becomes available in stock.
To Know more about Pre-Orders [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/pre-orders)

## Pre-Order Parking
Pre-order parking in HotWax Commerce is a holding area where pre-ordered items are kept until their inventory becomes available. Orders in this queue are not yet ready for fulfillment and wait until the specified stock arrives before being moved to the brokering queue for processing and shipping. This ensures efficient and timely handling of pre-orders based on inventory availability.
To Know more about Pre-Order Parking [Click Here](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings#default-parkings)

## Product Variants
A product variant in HotWax Commerce refers to individual variations of a product, which can include different sizes, colors, or other features. The Find Product page displays these variants along with the product category, product name, product ID, and product features such as size and colors.

## Promise Date
In HotWax Commerce, the promise date refers to the estimated date by which an order is expected to be fulfilled and shipped to the customer. It represents the commitment made by the seller regarding the delivery timeline for each order in the system. 

## Proximity
In the context of HotWax Commerce, proximity refers to the distance or closeness of a particular location or fulfillment center to the customer's shipping address. It is a key factor in determining the most efficient and cost-effective way to fulfill orders, as closer proximity may result in shorter shipping times and lower shipping costs.

## Purchase Order
A purchase order (PO) is a document created by a retailer and sent to their supplier to order items. It is typically generated in the retailer's ERP system. POs are synchronized from the ERP to HotWax Commerce to track ordered items and anticipate future inventory arrivals. This synchronization helps in calculating future inventory and managing pre-orders and back-orders. HotWax Commerce also syncs future inventory data to eCommerce platforms like Shopify, ensuring accurate pre-order management without overpromising or underpromising. 
To learn more [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/pre-orders/purchase-order-uploads)

## Quantity on Hand (QOH)
QOH represents the total physical quantity of a product available at stores or warehouses. HotWax Commerce receives daily inventory feeds from the ERP system to update and maintain inventory data. Additionally, in the absence of ERP systems, HotWax Commerce also receives inventory feeds from Warehouse Management Systems (WMS) and Point of Sale (POS) systems.

## Rejected Orders
Rejected orders are orders brokered for fulfillment but rejected by a warehouse or store due to physical inventory unavailability, often caused by damaged, lost, or stolen items. Rejected orders return to the brokering queue for reassignment. Rejected orders are managed by routing them back to the brokering queue for reassignment. The OMS will then route the order to another facility based on product availability, customer shipping preferences, and routing rules.

## Reserved Inventory
Reserved inventories refer to inventory, whether in a store or warehouse, that has already been allocated to fulfill orders. Reserved quantities are not included in the "available to promise" (ATP) and are not eligible to be sold.

## Safety Stock
Safety stock helps retailers control how much inventory they promise to online channels. Once a store’s inventory count falls below the designated safety stock quantity, the remaining inventory will be reserved for in-store sales. Retailers often face inventory discrepancies, where a system’s inventory does not match the actual inventory in stores. Keeping safety stock also helps retailers mitigate the risk of taking orders that cannot be fulfilled due to inventory discrepancies. A robust omnichannel order management system helps retailers easily manage safety stock for each store. 
To Know more about Safety Stock [Click Here](https://docs.hotwax.co/documents/v/retail-operations/inventory/safety-stock)

## SendSale Orders
Send Sale orders in HotWax Commerce refer to orders captured through the Shopify POS App. These orders are taken in the store by store associates on behalf of customers for items that are not in stock in the store. The items are then shipped to customers at their preferred shipping location.
In HotWax Commerce, these orders are downloaded and processed just like online orders. However, the channel tagged for the order in HotWax Commerce is Point of Sale (POS).

## Shipping Label

A shipping label is a document used by shipping carriers to deliver a package to the customer's address. It includes essential information such as the destination address, return address, and tracking barcode.
HotWax Commerce integrates with third-party shipping carriers like FedEx and shipping aggregators like ShipStation to obtain shipping rates and generate labels. The fulfillment team can create packages and generate labels directly within HotWax Commerce, without needing to move to a separate system. 

## Shopify Order ID
This is a unique identifier assigned by Shopify to each order. It serves as a reference point for tracking and managing orders within the Shopify platform. Additionally, users can conveniently view the order details directly on Shopify by clicking on the provided link associated with the Shopify order ID on the view order detail page.

## Shopify Order Name
The order name in Shopify typically refers to a customizable name or title assigned to an order on Shopify for further order identification.

## Shopify Order Number
Shopify assigns a distinct numerical identifier to each order. It acts as another unique reference for orders, often used in communication and documentation.

## Split Shipment

Split shipment, also known as order splitting, is a fulfillment strategy where a single customer order is divided into multiple shipments to ensure faster delivery of available items. This approach is used when different items in an order are located at different fulfillment centers or when some items are out of stock and need to be shipped separately once they become available.
In HotWax Commerce (HC), this capability is a configurable setting. Retailers have the option to choose whether they want orders to be split for shipment or not. This global setting applies to all orders by default but can be overridden for specific orders as needed.
When configuring brokering rules in HC, administrators can specify conditions for when orders should be split and when they should not. For instance, the brokering engine can prioritize shipping all items from one location to avoid splitting orders. However, if necessary, it can split an order and ship items from multiple locations as a last resort to fulfill the customer's requirements efficiently.

To know more about Split Shipment [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/order-management/update-sales-order#allow-splitting)

### Threshold
To mitigate the risk of overselling caused by inventory inaccuracies, merchandisers allocate buffer stock on a company-wide basis before committing inventory to online sales channels. This buffer inventory is referred to as the Inventory Threshold. Unlike safety stock, which is managed at the store level, the Inventory Threshold ensures that reported inventory levels across all products are adjusted to account for potential inaccuracies before allocating stock to online channels.

For example, let’s say Brand ABC sets the threshold of 10 units for red socks in Stores X and Y. This will impact these stores’ inventory levels, in the following manner:

Store X Inventory: 100 Units  
Store Y Inventory: 100 Units  
Threshold: 10 Units  
Inventory Available for Online Orders: 200 Units - 10 Units (threshold) = 190 Units

### Unfillable Parking
When inventory is unavailable for orders at any location, the order routing engine moves them from the Brokering Queue to the Unfillable Parking. A dedicated brokering run is performed to check the orders in the Unfillable Parking and allocate inventory to them.
