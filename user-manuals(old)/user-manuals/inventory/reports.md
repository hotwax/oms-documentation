# Receiving Discrepancies by Product

This discrepancy report helps retailers maintain inventory accuracy and uphold customer satisfaction. By highlighting inventory received that does not match the expected quantities, such as the example of **shoes-M-38** with a discrepancy of **4 units**, retailers can identify and rectify issues like shipment errors, theft, or miscounts. 

Timely detection of such discrepancies enables corrective actions like adjusting stock levels, investigating root causes, and improving receiving processes, ultimately ensuring that customers receive the products they desire when they expect them.

**User**
Head of Store, Vice President of Retail

**Report Glossary**
| Field Name   | Description                     |
|-------------|----------------------------------|
| SKU         | Unique product code for tracking |
| Difference  | Discrepancies in receiving       |

# Recorded variances report 
This Report provides retailers a detailed insights into discrepancies in inventory levels across different products and facilities. By highlighting specific product SKUs that have experienced variances and outlining the reasons behind these discrepancies, the report allows retailers to pinpoint areas of concern swiftly and accurately. Understanding the root causes of inventory discrepancies enables retailers to take proactive measures to rectify issues, whether they stem from inaccuracies in recording, theft, damage, or other factors.

This report helps in optimizing inventory management by ensuring that stock levels align with demand and sales forecasts. By identifying variances promptly, retailers can prevent overstocking or stockouts, thus minimizing potential revenue losses.

**User**
Head of Store, Vice President of Retail

**Report Glossary**
| Field          | Description                                                                                      |
|----------------|--------------------------------------------------------------------------------------------------|
| Facility       | Location of a physical store or warehouse.                                                       |
| Facility ID    | An identifier used to distinguish one facility from another uniquely.                             |
| SKU            | Each product's unique code assigned for inventory management and tracking.                       |
| Adjustment Date| The date on which a change or modification is made.                                              |
| User           | A person or system that interacts with the system.                                                |
| Quantity       | The numerical amount or count of a product.                                                       |
| Description    | A detailed explanation often used to provide information about products.                          |
| Enum ID        | Short for "Enumeration Identifier," it refers to a unique identifier within an enumeration.      |
| Comments       | Additional remarks or information provided to explain.                                            |


# Completed cycle report

This report helps retailers maintain accurate inventory records and ensure operational efficiency. By detailing the expected quantity of items, the quantity counted, and any variances discovered during the counting process, this report provides insights into the accuracy of inventory levels. Moreover, it records essential information such as who conducted the cycle count, the facility where it was performed, as well as the submission and completion dates.

This Report  allows retailers to identify discrepancies between expected and actual inventory levels promptly, enabling timely investigation and resolution of any issues such as theft, damage, or discrepancies in record-keeping. This helps in maintaining inventory accuracy, which is important for optimizing stocking levels, preventing stockouts or overstock situations, and ultimately improving customer satisfaction.

The submission and completion dates listed in the report provide insights into the efficiency of the inventory management process. Retailers can track how quickly cycle counts are conducted and completed, allowing them to assess the effectiveness of their inventory management practices and identify areas for improvement.

**User**
Head of Store, Vice President of Retail

**Report Glossary**
| Field             | Description                                       |
|-------------------|---------------------------------------------------|
| Facility          | Location of a physical store or warehouse.       |
| SKU               | Unique product code for tracking.                 |
| Expected Quantity | Anticipated stock amount.                         |
| Variance          | Discrepancy between expected and counted product. |
| Quantity Counted  | Actual amount observed.                           |
| User              | Individual conducting inventory tasks.            |
| Line Status       | Current state of the inventory item.             |
| Submitted Date    | Date of data entry.                              |
| Completed Date    | Date of task completion.                          |

# Open Inbound Shipment report

This report facilitates the management of open inbound shipments for retailers by providing an overview of the transfer process, enhancing accuracy and operational efficiency.

For retailers, this report helps to monitor the status of inbound shipments, tracks their journey to destination facilities, and verifies the receipt of goods. Key details such as destination facility, external ID (Netsuite ID), tracking code, and WMS(Warehouse management system) ID are included, offering a detailed overview of each inbound shipment for streamlined identification and effective management.

**User**
Head of Store, Vice President of Retail

**Report Glossary**
| Field          | Description                                                                                      |
|----------------|--------------------------------------------------------------------------------------------------|
| External Id (WMS) | Identification code used in the WMS to track items externally.                                   |
| External Id       | An identification code used externally for tracking purposes.                                     |
| Tracking Code     | Code used to monitor the orders.                                                                 |
| Facility          | Location of a physical store or warehouse.                                                       

# Open Transfer order shipment

This report provides insights into the movement of inventory within the supply chain. It offers an overview of the transfer process by presenting shipment IDs, origin and destination facilities, tracking numbers, and pending quantities for reception. 

it enables efficient inventory management by identifying precisely which products are in transit and yet to be received, allowing retailers to anticipate stock availability accurately.

**User**
Head of Store, Vice President of Retail

**Report Glossary**
| Field              | Description                                                                                        |
|-------------------|----------------------------------------------------------------------------------------------------|
| hotwax_shipment_id | Unique identifier specific to the HotWax Commerce.                                                 |
| shipment_id       | A unique identifier for each shipment.                                                             |
| WMS_order_name    | The name of the order within the warehouse management system.                                      |
| origin_facility   | The facility or location where the shipment originated from.                                        |
| shipment_status   | The shipment's current status (e.g., delivered, pending).                                           |
| imported_date     | The date when the shipment information was imported or recorded.                                    |

# POS orders vs POS variances 

Retailers require this report to effectively manage their inventory and streamline operations. By tracking POS-completed orders and ensuring that the same inventory variance is logged into the ERP system the retailer gains insights into any possible inventory discrepancy. 

This report provides information about the quantity variance between pos orders and pos variance. Retailers can identify the problematic orders with incorrect inventory variance and resolve the errors, if any. 

**User**
Head of Store, Vice President of Retail

**Report Glossary**
| Field        | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| ORDER_NAME   | Name associated with the order.                                                                          |
| ORDER_ID     | A unique identifier for each order.                                                                      |
| ENTRY_DATE   | The date when the order was entered or recorded.                                                         |
| SKU          | Stock Keeping Unit, a unique code assigned to each distinct product or item in inventory.                |
| SALES        | The amount of sales associated with the order.                                                           |
| QOH variance | Stands for "Quantity On Hand variance," representing the variance in Sync inventory from QOH.           |

# Shipment by Tracking Number Report

The Shipment by Tracking Number Report is valuable for retailers as it shows information such as Shopify ID, Tracking Number, Shipping Method, Shipping Location, Destination Address, and Units Shipped. 

Retailers require a report that can help them track and manage their shipments, ensuring transparency and accountability throughout the Shipment process. By having a clear overview of which orders have been shipped, where they are in transit, and their expected delivery destinations, retailers can optimize their supply chain.

**User**
Head of Store, Vice President of Retail

**Report Glossary**
| Field             | Description                                                                                        |
|-------------------|---------------------------------------------------------------------------------------------------------|
| Shopify ID        | A unique identifier assigned to each order within the Shopify platform. It helps track and manage orders efficiently. |
| Tracking Number   | A unique code assigned to a shipment by the carrier.                                                    |
| Shipping Method   | The specific method or service used to deliver the package, such as standard shipping, expedited shipping, or a specific courier service. |
| Shipping Location | The shipment's origin or point of dispatch, such as a warehouse or fulfillment center.                  |
| Units Shipped     | The quantity of items included in the shipment. It helps ensure that the correct number of products is sent to the customer. |






