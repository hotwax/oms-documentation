---
description: >-
  Explore essential terms in Omnichannel Order Management. Clarify your
  understanding with our comprehensive glossary.
---

### Advanced Shipping Notice (ASN)
ASN is a notification sent by a supplier to a recipient detailing the contents and expected arrival of a shipment, often sent in advance of the physical delivery.
For example, the ASN will detail this expected inventory count if a store anticipates receiving 100 shirts in an incoming shipment. When the shipment arrives, store associates can use the Inventory Receiving App to locate the ASN by scanning the ASN barcode or manually inputting the ASN ID. They can then view the ASN details, including SKUs, names, SKU codes, images, and expected inventory counts.

### Appeasement
Appeasement is the refunds, discounts, or other forms of compensation to resolve disputes, improve customer satisfaction, and maintain positive relationships. In HotWax Commerce, appeasements are handled by CSR teams through Shopify, either by offering another product or issuing a refund without a return. HotWax Commerce syncs these appeasements for reporting purposes without tracking order line item details.

### Arrival Date
The arrival date is the date when the inventory of the purchase order items is expected to arrive at the destination. Merchandisers can view the arrival date on the Find Purchase Orders page.

### Available to Promise (ATP)
ATP (Available to Promise) represents the physical quantity of a product at stores or warehouses after deducting the reserved inventory, that is, inventory that has been allocated to online orders from the Quantity on Hand (QOH).  
ATP = QOH - Reserved quantities

### Backorders
Backorders are orders taken for products that are temporarily out of stock. These orders are referred to as “backorders” because they were previously in stock and will be available again soon but are currently unavailable due to high demand, inaccurate sales forecasting, or operational discrepancies.  
For example, Brand ABC has an amazing season and sells all its inventory. Some regular items were bought frequently, so the merchandisers have already sent POs for these goods and know the approximate date of arrival. The brand utilizes this time for sales and starts taking orders for these products.  
To know more about Backorders [Click Here](https://www.hotwax.co/blog/key-concepts-omnichannel-order-management).

### Backorder Parking
Backorder parking refers to the location that holds the orders for Backorder items. These orders are stored in the backorder parking area until they are restocked and prepared for fulfillment. To learn more about Backorder Parking [Click Here](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings).

### Brokering
In Hotwax Commerce, brokering refers to the process of matching and routing orders to the most suitable fulfillment center or location based on factors like inventory availability, proximity to the customer, and delivery speed requirements. This ensures that orders are processed and shipped efficiently to meet delivery expectations.

### Brokering History
Brokering History refers to the record of past brokering activities in HotWax Commerce. It logs when orders were routed to fulfillment centers based on inventory, proximity, and delivery speed.

### Brokering Queue
The Brokering Queue serves as a waiting area for orders awaiting processing in the order brokering process. It ensures that orders are handled efficiently by analyzing order priority and determining the optimal fulfillment location based on proximity and inventory availability. Orders placed between brokering sessions will wait in the queue until the next scheduled processing time.  
For example, if brokering engines are scheduled to run at 9:00 A.M. and 12:00 P.M., orders placed between 9:00 A.M. and 12:00 P.M. will remain in the queue until the 12:00 P.M. brokering session.  
To Know more about Brokering [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/brokering).

### Bundle Product
A Bundle Product refers to a product composed of multiple components, which are imported from an external system. The Import Bundle Product Components job ensures that these components are accurately reflected in the Order Management System (OMS).  
The lowest common denominator of the Bundle component inventory available by facility determines the bundle product's availability. The computed inventory of a Bundle product at each facility is then summed to produce the final sellable inventory number.  
To know more about Bundle Products [Click Here](https://docs.hotwax.co/documents/v/learn-shopify/additional-resources/kit-products).

### CSR (Customer Service Representative)
A Customer Service Representative (CSR) is the first point of contact for any customer who has a question or an issue with a product or service the company sells. CSRs are responsible for handling customer requests regarding order fulfillment, order cancellations, and returns.  
Customer Service Representatives (CSRs) can utilize HotWax Commerce to get detailed visibility about the orders and perform actions accordingly as per the customer’s requests.

### Digital Gift Cards
Digital gift cards, or e-gift cards, are virtual equivalents of physical gift cards. Customers receive them via email or text message along with a unique serial number that they can use to redeem the value stored in the card. When customers order a digital gift card on Shopify, the order is immediately auto-fulfilled, a serial number is assigned, and the value is loaded to activate the gift card. Consequently, when HotWax Commerce downloads that order from Shopify, it is automatically marked as "Completed".  
To Know more about Gift cards [Click Here](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/giftcardorderslifecycle#digital-gift-cards).

### Excluded ATP
Excluded ATP refers to the inventory at fulfillment locations that are not participating in online selling. This inventory is not considered available for online orders and is excluded from the Online ATP calculation.

### Excluded Facilities
Excluded Facilities are facilities that are either not participating in online order fulfillment or temporarily unable to participate due to reasons like insufficient labor, natural disasters, or holidays. Inventory becomes available again when these scenarios change. Retailers can turn off fulfillment if they want to temporarily disable a facility from participation.  
To know more about this [Click Here](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/disabling-facilities).

### Expedited Orders
Expedited orders are those prioritized for faster processing and shipping to ensure delivery within a shorter timeframe, typically within one to three business days. These orders are given precedence over standard orders to meet the high expectations of consumers for quick delivery. Expedited orders often involve additional costs for the customer or the merchant to facilitate the faster shipping and handling process.

### Facility
In HotWax Commerce, a facility is a physical location such as a warehouse, distribution center, or store where inventory is stored, managed, and processed.

### Facility Group
Facility groups are used to define the scope and functionality of facilities for omnichannel order management. For example, including a facility in the Pickup and Same Day Shipping groups indicates that the facility accommodates both Buy Online, Pickup In-Store (BOPIS), and same-day shipping orders.

### Facility Type
In Hotwax Commerce, Facility type is the type of facility that is used for fulfillment such as retail store warehouse, outlet store, and outlet warehouse.

### Inventory Configuration
The Inventory Configuration section in HotWax Commerce allows users to manage their inventory by configuring facilities, adjusting safety stock levels, and organizing locations within each facility. This feature helps optimize inventory levels, streamline warehouse operations, and ensure seamless order fulfillment processes.  
To know more about Inventory configuration [Click Here](https://docs.hotwax.co/documents/v/retail-operations/inventory/inventory-management/inventory-configurations).

### Inventory Variance
Inventory variance refers to discrepancies between expected and actual inventory levels. It can be caused by factors such as damaged goods, discrepancies in shipment, or theft.

### Item Fulfillment Status
Item Fulfillment Status in HotWax Commerce tracks the current stage of an item within the order fulfillment process. This status helps in monitoring and managing orders, indicating whether an item is Reserved, Picked, Packed, Shipped, or Delivered.

### Maximum Order Limit
The Maximum Order Limit is a set limit by a store determining the maximum number of orders it can fulfill in a day. Orders beyond this limit are fulfilled the next day, allowing the store to continue selling online.  
The maximum order limit is added to determine the maximum number of orders a store can fulfill in a day. This allows the store to manage its resources effectively and ensures that orders beyond this limit are fulfilled the next day, enabling the store to continue selling online without overcommitting its capacity.

### Online ATP
Online ATP represents the unified inventory pool of actual sellable inventory count that is published on eCommerce platforms and can be promised to customers.  
To calculate Online ATP, HotWax Commerce deducts inventory that is not available for sale from the ATP. This includes items such as safety stock, threshold quantities, orders in the brokering queue, and inventory from locations that are not participating in online selling.  
HotWax Commerce calculates Online Available to Promise (ATP)  
Online ATP = QOH - (Reserved quantities + Safety stock + Threshold + Orders in brokering queue + Excluded facilities’ ATP)  
To Know more about Online ATP [Click Here](https://docs.hotwax.co/documents/v/learn-hotwax-oms/business-process-models/inventorylifecycle#push-online-atp-to-ecommerce).

### Order Fulfillment Status
Order Fulfillment Status in HotWax Commerce tracks the current stage of an overall order within the order fulfillment process. This status helps in monitoring and managing orders, indicating whether an Order is created, approved, completed, or canceled.

### Order Merging
When a customer places multiple orders that can be fulfilled from the same location. Instead of treating them as separate orders, retailers prefer to merge them into a single shipment, ensuring a smoother and more cost-effective delivery process. Hotwax commerce enables order merging so that orders coming from the same location are fulfilled together.
To Know more about Order Merging [Click Here](https://www.hotwax.co/blog/what-is-order-consolidation-and-order-merging)

### Packing Slip
Packing slips help customers reconcile their orders against the delivered items. Store managers can use the Generate Packing Slip toggle to control whether or not packing slips are generated for orders.  
To know more about Packing Slip[Click Here](https://docs.hotwax.co/documents/orders/bopis/packed-order-tab).

### Picker
A picker is a role within the Order Management System (OMS) and is responsible for order fulfillment tasks, specifically picking items from inventory to fulfill orders. Pickers can be created and assigned roles such as Warehouse pickers to manage picking operations efficiently.

### Picklist
A Picklist is a list used to pick and pack the items for orders.

### Pre-Orders
Pre-orders are simply advance orders taken for future inventory. These products have not yet been released in the market and are still in planning or production, and thus not in stock. A pre-order is an order placed for a product that is not yet available for purchase or delivery. Customers can reserve the item in advance, and the order will be fulfilled once the product becomes available in stock.
To Know more about Pre-Orders [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/pre-orders)

### Pre-Order Parking
Pre-order parking in HotWax Commerce is a holding area where pre-ordered items are kept until their inventory becomes available. Orders in this queue are not yet ready for fulfillment and wait until the specified stock arrives before being moved to the brokering queue for processing and shipping. This ensures efficient and timely handling of pre-orders based on inventory availability.
To Know more about Pre-Order Parking [Click Here](https://docs.hotwax.co/documents/v/system-admins/administration/facilities/manage-parkings#default-parkings)

### Product Variants
A product variant in HotWax Commerce refers to individual variations of a product, which can include different sizes, colors, or other features. The Find Product page displays these variants along with the product category, product name, product ID, and product features such as size and colors.

### Promise Date
In HotWax Commerce, the promise date refers to the estimated date by which an order is expected to be fulfilled and shipped to the customer. It represents the commitment made by the seller regarding the delivery timeline for each order in the system. 

### Proximity
In the context of HotWax Commerce, proximity refers to the distance or closeness of a particular location or fulfillment center to the customer's shipping address. It is a key factor in determining the most efficient and cost-effective way to fulfill orders, as closer proximity may result in shorter shipping times and lower shipping costs.

### Purchase Order
A purchase order (PO) is a document that provides crucial details about item specifics and upcoming inventory arrivals. It is used by retailers to manage pre-order and back-order processes by automating the listing and de-listing of products. Retailers can integrate their ERP systems with HotWax Commerce to synchronize purchase orders automatically or manually import purchase order CSV files using the Import App.  
To learn more [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/pre-orders/purchase-order-uploads)

### Quantity on Hand (QOH)
QOH represents the total physical quantity of a product available at stores or warehouses. HotWax Commerce receives daily inventory feeds from the ERP system to update and maintain inventory data. Additionally, in the absence of ERP systems, HotWax Commerce also receives inventory feeds from Warehouse Management Systems (WMS) and Point of Sale (POS) systems.

### Rejected Orders
Rejected orders are orders brokered for fulfillment but rejected by a warehouse or store due to physical inventory unavailability, often caused by damaged, lost, or stolen items. Rejected orders return to the brokering queue for reassignment. Rejected orders are managed by routing them back to the brokering queue for reassignment. The OMS will then route the order to another facility based on product availability, customer shipping preferences, and routing rules.

### Reserved Inventory
Reserved inventories are store inventories for which the store has already received orders. Reserved quantities are not included in the “available to promise” (ATP) and are not eligible to be sold. 

### Safety Stock
Safety stock helps retailers control how much inventory they promise to online channels. Once a store’s inventory count falls below the designated safety stock quantity, the remaining inventory will be reserved for in-store sales. Retailers often face inventory discrepancies, where a system’s inventory does not match the actual inventory in stores. Keeping safety stock also helps retailers mitigate the risk of taking orders that cannot be fulfilled due to inventory discrepancies. A robust omnichannel order management system helps retailers easily manage safety stock for each store. 
To Know more about Safety Stock [Click Here](https://docs.hotwax.co/documents/v/retail-operations/inventory/safety-stock)

### SendSale Orders
SendSale Orders in HotWax Commerce refer to orders captured through the Shopify POS App. The SendSale orders come into HotWax in a created state and are shipped to the customer’s address. A send sales order is processed just like a sales order.

### Shipping Label
The carrier provides a shipping label in HotWax Commerce. Shipping labels are pre-generated and used by the shipping carrier to deliver the package to the customer's address. If an order contains multiple items and one box isn’t sufficient to fit all of them, the packing team can add more boxes. In this scenario, the pre-generated shipping label will not serve the purpose, as it has been generated by default for a single package. While packing, the store managers can regenerate shipping labels as needed.

### Shopify Order ID
This is a unique identifier assigned by Shopify to each order. It serves as a reference point for tracking and managing orders within the Shopify platform. Additionally, users can conveniently view the order details directly on Shopify by clicking on the provided link associated with the Shopify order ID on the view order detail page.

### Shopify Order Name
The order name in Shopify typically refers to a customizable name or title assigned to an order on Shopify for further order identification.

### Shopify Order Number
Shopify assigns a distinct numerical identifier to each order. It acts as another unique reference for orders, often used in communication and documentation.

### Split Shipment
Split shipment, also known as order splitting, is a fulfillment strategy where a single customer order is divided into multiple shipments to ensure faster delivery of available items. This approach is used when different items in an order are located at different fulfillment centers or when some items are out of stock and need to be shipped separately once they become available.  
To know more about Split Shipment [Click Here](https://docs.hotwax.co/documents/v/retail-operations/orders/order-management/update-sales-order#allow-splitting)

### Threshold
Retailers who utilize SKUs manage inventory inaccuracies by keeping a “threshold.” Unlike safety stock, the threshold is not managed at the store level. Merchandisers generally assume that there are inaccuracies, so they reduce the reported inventory of all products at the company level using this value and then promise the remaining inventory to online channels. For example, let’s say Brand ABC sets the threshold of 10 units for red socks in Stores X and Y. This will impact these stores’ inventory levels, in the following manner:

Store X Inventory: 100 Units  
Store Y Inventory: 100 Units  
Threshold: 10 Units  
Inventory Available for Online Orders: 200 Units - 10 Units (threshold) = 190 Units

### Unfillable Parking
When inventory is unavailable for orders at any location, the order routing engine moves them from the Brokering Queue to the Unfillable Parking. A dedicated brokering run is performed to check the orders in the Unfillable Parking and allocate inventory to them.


