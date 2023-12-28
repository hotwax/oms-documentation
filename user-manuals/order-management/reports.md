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

## POS Cash Sale Exp Failed Report
The POS Cash Sale Exp Failed Report is a tool for tracking synchronization failures related to Point of Sale (POS) cash sales. This report is instrumental in identifying instances where the synchronization process encountered issues, allowing for a proactive approach to address and resolve these failures. By leveraging this report, organizations can ensure the accuracy and completeness of their POS cash sale data, contributing to a more reliable and efficient sales reporting process.

**In the context of NetSuite,** the POS Cash Sale Exp Failed Report focuses on tracking synchronization failures specifically for POS cash sales exported to NetSuite. By pinpointing instances where synchronization has failed, this report helps in promptly identifying and addressing any discrepancies in POS cash sales data within NetSuite. This level of transparency and quick response is crucial for maintaining accurate financial records and ensuring that NetSuite reflects the most up-to-date information from POS transactions.

| Field          | Description                                |
|-----------------|--------------------------------------------|
| ORDER_ID        | The ID of the cash sale order in HotWax Commerce   |
| EXTERNAL_ID     | The ID of the  cash sale order in external systems |
| SALES_CHANNEL   | The channel through which the sale was made |
| LOCATION        | The location where the cash sale order was placed       |
| DATE            | The date of the cash sale                   |
| CUSTOMER        | The customer associated with the cash sale order     |
| SUBSIDIARY      | The subsidiary information for the cash sale    |


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
