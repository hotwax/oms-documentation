# Order Sync Assurance Reports

These reports play a crucial role in ensuring order synchronization across Shopify, HotWax, and NetSuite.


## Missing Order Attribute Report

The Missing Order Attribute Report is a vital tool for tracking order synchronization. By monitoring the presence of essential attributes, it identifies orders lacking crucial information, ensuring a seamless synchronization process. This report enables proactive resolution of discrepancies, preventing any orders from failing to synchronize effectively.

| Field                   | Description                                       |
|-------------------------|---------------------------------------------------|
| ORDER_NAME              | The identifier for the order                      |
| ATTRIBUTE     | The essential order attributes. For example, `PRODUCT_VERIFIED` indicates whether the product has been verified   |
| STATUS              | The status if the order has essential attributes or not                      |

**In the NetSuite context**, the report ensures accurate order synchronization by verifying essential attributes. By highlighting orders lacking these attributes, it prevents synchronization issues, providing assurance that orders seamlessly integrate with NetSuite. 

| Field                   | Description                                       |
|-------------------------|---------------------------------------------------|
| ORDER_NAME              | The identifier for the order                      |
| ATTRIBUTE     | The essential order attribute. For example, `PRODUCT_VERIFIED` indicates whether the product has been verified   |
| NETSUITE_ORDER_EXPORTED | Status if the order has been exported to NetSuite or not |
| NETSUITE_CUSTOMER_ID    | The customer identifier in NetSuite               |

---

## HotWax Order Count Report
The HotWax Order Count Report offers a daily snapshot of new orders in the Order Management System (OMS), providing a quick reference for monitoring overall order activity and facilitating proactive decision-making.

**In the Shopify context,** this report ensures seamless synchronization by comparing daily order counts. It serves as a vital tool for merchants, quickly identifying and addressing any discrepancies in the synchronization process, ensuring accurate and efficient order fulfillment.

| Field          | Description                                |
|-----------------|--------------------------------------------|
| ORDER_COUNT       | The count of the orders in HotWax Commerce   |


---

## Canceled Order Report
The Canceled Order Report provides a comprehensive tracking mechanism for all orders that have entered the OMS and subsequently been canceled. This report ensures a systematic record of cancellations, offering visibility into the cancellation process. 

**In the context of NetSuite,** the Canceled Order Report becomes indispensable due to the non-automatic synchronization of cancellations by HotWax. This report ensures that canceled orders align with expectations in NetSuite, whether through Celigo or NetSuite user actions. By using this report, organizations leveraging NetSuite gain a proactive means to verify and reconcile cancellation records, preventing discrepancies. This meticulous approach contributes to the accuracy of cancellation data across systems, enhancing the reliability of financial and operational records within NetSuite.

| Field           | Description                                              |
|-----------------|----------------------------------------------------------|
| ORDER_ID        | The ID of the order in Shopify          |
| HC_ORDER_ID     | The ID of the order in HotWax Commerce    |
| CANCELLED_DATE  | Date when the order was canceled                          |
| SKU             | Unique identifier            |
| ITEM_DESCRIPTION| Narrative detailing the characteristics of the item        |
| Price           | The monetary value associated with the canceled item      |
| REASON          | Reason behind the cancellation          |
| External_Id     | The ID of the order in the external system |

---

## Allocation Pending Report

The Allocation Pending Report displays orders assigned to facilities that currently lack sufficient inventory for immediate fulfillment. Monitoring the orders and items listed in this report is essential for initiating replenishment actions at the store. By doing so, retailers can ensure that inventory levels are maintained adequately, facilitating the successful completion of fulfillment for the identified orders.

| Field            | Description                                        |
|------------------|----------------------------------------------------|
| FACILITY_ID      | The identifier of the facility in external systems |
| FACILITY_NAME    | The name of the facility in external systems       |
| SKU              | Unique identifier                                  |
| QUANTITY         | Quantity required of the SKU                       |
