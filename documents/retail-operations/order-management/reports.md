---
description: >-
  Discover how reports play a crucial role in ensuring order synchronization
  across Shopify, HotWax, and NetSuite.
---

# Reports

## Sales Order Count by Channel Report

Retailers receive orders through various channels, including eCommerce websites, social media platforms, online marketplaces, and point-of-sale (POS) systems. Retailers need visibility of their sales into channel performance. The Sales Order Count by Channel report offers a clear summary of order counts per channel, enabling retailers to identify high-performing channels and areas needing improvement.

Retailers can easily discern the total count of orders per channel, whether it's from POS, Shopify, or any other channel enabling effective tracking and analysis.

**User**
- Vice President of Retail, Warehouse Fulfillment team

**Report Glossary**

| Channel                    | Description                                                 |
|----------------------------|-------------------------------------------------------------|
| Shopify Online Sales       | Orders received through the Shopify online sales channel.   |
| POS Sales                  | Orders received through the Point-of-Sale (POS) system.     |
| Other Channels             | Orders received through other channels (e.g., social media platforms, online marketplaces). |

***

## Missing Netsuite Order ID Report

Retailers often encounter synchronization issues between Shopify and Netsuite, leading to orders not being properly recorded. This can result in delays and disruptions in order processing and fulfillment, impacting customer satisfaction and revenue.

This report is helpful for retailers to troubleshoot issues when orders, that have all the necessary attributes like “SIGNIFYD_APPROVED”, and “NETSUITE_CUSTOMER_ID” are not synchronized with Netsuite. It highlights orders in approved or completed status that lack Netsuite order IDs, indicating synchronization problems. Retailers can view this report to identify problematic orders and rectify errors to ensure all orders are synced with Netsuite.

The synchronization process between HotWax and Netsuite may encounter delays. Therefore, this report exclusively displays orders without NetSuite order IDs for over 4 hours.

**User**
- Head of e-commerce, Vice President of Retail

**Report Glossary**
  
| Field Name         | Description                                                                               |
|--------------------|-------------------------------------------------------------------------------------------|
| ORDER_NAME         | This refers to the name or identifier of the order.                                         |
| HC_ORDER_ID        | This could be an internal order ID.                                                        |
| HC_ENTRY_DATE      | This column represents the date when the order was entered into OMS.                        |
| TIME_SINCE_ENTRY   | This might show the duration since the order was entered into OMS.                          |
| SALES_CHANNEL      | This could indicate the channel through which the sale was made, such as Shopify, POS, etc. |

***

## POS Cash Sale Exp Failed Report

The POS Cash Sale Exp Failed Report is a tool for tracking synchronization failures related to Point of Sale (POS) cash sales. This report is instrumental in identifying instances where the synchronization process encountered issues, allowing for a proactive approach to address and resolve these failures. By leveraging this report, organizations can ensure the accuracy and completeness of their POS cash sale data, contributing to a more reliable and efficient sales reporting process.

**In the context of NetSuite,** the POS Cash Sale Exp Failed Report focuses on tracking synchronization failures specifically for POS cash sales exported to NetSuite. By pinpointing instances where synchronization has failed, this report helps in promptly identifying and addressing any discrepancies in POS cash sales data within NetSuite. This level of transparency and quick response is crucial for maintaining accurate financial records and ensuring that NetSuite reflects the most up-to-date information from POS transactions.

**User**
- Head of eCommerce, Vice President of Retail.

**Report Glossary**

| Field          | Description                                       |
| -------------- | ------------------------------------------------- |
| ORDER\_ID      | The ID of the cash sale order in HotWax Commerce  |
| EXTERNAL\_ID   | The ID of the cash sale order in external systems |
| SALES\_CHANNEL | The channel through which the sale was made       |
| LOCATION       | The location where the cash sale order was placed |
| DATE           | The date of the cash sale                         |
| CUSTOMER       | The customer associated with the cash sale order  |
| SUBSIDIARY     | The subsidiary information for the cash sale      |

***

## Duplicate Order

Retailers often face the issue of duplicate orders, which can cause inventory discrepancies and financial losses. For instance, if an order is duplicated and subsequently brokered differently, it can result in ATP (Available to Promise) discrepancies and financial losses for the retailer. Furthermore, it may cause errors when reconciling orders with Netsuite.

The "Duplicate Order" report provides crucial insights into the frequency of duplicate orders by presenting the total count of duplicate orders associated with the same order name.

By understanding the extent of duplicate orders, retailers can take necessary actions to ensure that duplicate orders are removed from the system.

**User** 
- Head of eCommerce, Vice President of Retail

**Report Glossary**

| Field Name    | Description                                                     |
|---------------|-----------------------------------------------------------------|
| ORDER_NAME    | This refers to the name or identifier of the order.             |
| COUNT         | The total number of duplicate orders associated with the same order name. |

***

## Shopify Order Import Error

When an order fails to transfer from Shopify to Hotwax, it doesn't show up in the OMS, and an error is logged in the EXIM Import record for Shopify orders. The Shopify Order Import Error report details these failed imports, providing the specific errors generated by the system. There are several potential causes for these errors, including data exported from Shopify not being compatible with the OMS, or issues with specific API endpoints, such as inadequate permissions or temporary unavailability. Retailers can use this report to identify problematic orders and troubleshoot accordingly.

**User**
- Head of eCommerce, Vice President of Retail

**Report Glossary**

| Field Name          | Description                                    |
|---------------------|------------------------------------------------|
| Shopify Website     | URL of the order on the Shopify website.       |
| Error Message       | System-generated error message.                |
| Shopify Order Name  | Name of the order in Shopify.                  |
| Order Created Date  | Date when the order was created.               |

***

## Cancelled Order Report

Retailers often face challenges in managing and reducing order cancellations.

Customers or CSRs may cancel orders due to reasons such as changes in preference, product unavailability, errors in orders, delivery delays, financial constraints, product defects, better offers elsewhere, and miscommunication.

The Cancelled Order Report provides weekly insights into cancellation rates, enabling retailers to pinpoint peak cancellation weeks and address underlying causes. It outlines the total number of canceled orders within the OMS, helping retailers businesses enhance customer satisfaction and operational efficiency by addressing root issues effectively.

A weekly report is generated for retailers, and the frequency of the report can be updated as per the requirements.


**User**
- Head of eCommerce, Vice President of Retail.

**Report Glossary**

| Field Name        | Description                                                            |
|-------------------|------------------------------------------------------------------------|
| CANCELLED_DATE    | The date range during which orders were cancelled (2024-01-28 to 2024-02-04). |
| COUNT_DISTINCT(ORDER_ID) | The count of distinct order IDs for cancelled orders (11).             |

***

## Order Approval Duration Graph

Order approval delays can happen due to missing order attributes such as missing customer ID or municipio ID. Delays in order approval can lead to missed delivery deadlines and potential revenue loss.

The Order Approval Duration graph provides information on how long it takes the OMS to approve orders. It has two main attributes: order volume and average approval duration in minutes.

This Graph helps in tracking the average approval duration over time. This helps in identifying any deviations from expected performance levels and taking corrective actions promptly.

**User**
- Head of eCommerce, Vice President of Retail.

**Report Glossary** 

| Field Name                            | Description                                                                                   |
|---------------------------------------|-----------------------------------------------------------------------------------------------|
| Order Volume                         | This refers to the number of orders received by the system over a specific period. Order volume can fluctuate based on various factors such as time of day, seasonality, marketing promotions, etc. |
| Average Approval Duration in Minutes | This is the average amount of time it takes for the OMS to approve an order. Approval duration can depend on several factors including the complexity of orders, system efficiency, etc. |

***

## Missing Order Attribute Report

The Missing Order Attribute Report is a vital tool for tracking order synchronization. By monitoring the presence of essential attributes, it identifies orders lacking crucial information, ensuring a seamless synchronization process. This report enables proactive resolution of discrepancies, preventing any orders from failing to synchronize effectively.

**Report Glossary**

| Field       | Description                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| ORDER\_NAME | The identifier for the order                                                                                    |
| ATTRIBUTE   | The essential order attributes. For example, `PRODUCT_VERIFIED` indicates whether the product has been verified |
| STATUS      | The status if the order has essential attributes or not                                                         |

**In the NetSuite context**, the report ensures accurate order synchronization by verifying essential attributes. By highlighting orders lacking these attributes, it prevents synchronization issues, providing assurance that orders seamlessly integrate with NetSuite.

**Report Glossary**

| Field                     | Description                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ORDER\_NAME               | The identifier for the order                                                                                   |
| ATTRIBUTE                 | The essential order attribute. For example, `PRODUCT_VERIFIED` indicates whether the product has been verified |
| NETSUITE\_ORDER\_EXPORTED | Status if the order has been exported to NetSuite or not                                                       |
| NETSUITE\_CUSTOMER\_ID    | The customer identifier in NetSuite                                                                            |

***

## HotWax Order Count Report

The HotWax Order Count Report offers a daily snapshot of new orders in the Order Management System (OMS), providing a quick reference for monitoring overall order activity and facilitating proactive decision-making.

**In the Shopify context,** this report ensures seamless synchronization by comparing daily order counts. It serves as a vital tool for merchants, quickly identifying and addressing any discrepancies in the synchronization process, ensuring accurate and efficient order fulfillment.

**Report Glossary**

| Field        | Description                                |
| ------------ | ------------------------------------------ |
| ORDER\_COUNT | The count of the orders in HotWax Commerce |

***

## Canceled Order Report

The Canceled Order Report provides a comprehensive tracking mechanism for all orders that have entered the OMS and subsequently been canceled. This report ensures a systematic record of cancellations, offering visibility into the cancellation process.

**In the context of NetSuite,** the Canceled Order Report becomes indispensable due to the non-automatic synchronization of cancellations by HotWax. This report ensures that canceled orders align with expectations in NetSuite, whether through Celigo or NetSuite user actions. By using this report, organizations leveraging NetSuite gain a proactive means to verify and reconcile cancellation records, preventing discrepancies. This meticulous approach contributes to the accuracy of cancellation data across systems, enhancing the reliability of financial and operational records within NetSuite.

**Report Glossary**

| Field             | Description                                          |
| ----------------- | ---------------------------------------------------- |
| ORDER\_ID         | The ID of the order in Shopify                       |
| HC\_ORDER\_ID     | The ID of the order in HotWax Commerce               |
| CANCELLED\_DATE   | Date when the order was canceled                     |
| SKU               | Unique identifier                                    |
| ITEM\_DESCRIPTION | Narrative detailing the characteristics of the item  |
| Price             | The monetary value associated with the canceled item |
| REASON            | Reason behind the cancellation                       |
| External\_Id      | The ID of the order in the external system           |

***

## Allocation Pending Report

The Allocation Pending Report displays orders assigned to facilities that currently lack sufficient inventory for immediate fulfillment. Monitoring the orders and items listed in this report is essential for initiating replenishment actions at the store. By doing so, retailers can ensure that inventory levels are maintained adequately, facilitating the successful completion of fulfillment for the identified orders.

**Report Glossary**

| Field          | Description                                        |
| -------------- | -------------------------------------------------- |
| FACILITY\_ID   | The identifier of the facility in external systems |
| FACILITY\_NAME | The name of the facility in external systems       |
| SKU            | Unique identifier                                  |
| QUANTITY       | Quantity required of the SKU                       |

