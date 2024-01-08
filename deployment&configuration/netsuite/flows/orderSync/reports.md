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