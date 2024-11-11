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

## Allocation Pending Report

The Allocation Pending Report displays orders assigned to facilities that currently lack sufficient inventory for immediate fulfillment. Monitoring the orders and items listed in this report is essential for initiating replenishment actions at the store. By doing so, retailers can ensure that inventory levels are maintained adequately, facilitating the successful completion of fulfillment for the identified orders.

| Field            | Description                                        |
|------------------|----------------------------------------------------|
| FACILITY_ID      | The identifier of the facility in external systems |
| FACILITY_NAME    | The name of the facility in external systems       |
| SKU              | Unique identifier                                  |
| QUANTITY         | Quantity required of the SKU                       |


-----------------------------------------------------------------------------------------------------------------------------------------------------------


## Shopify Order Error Report

The Shopify Order Error report is designed to highlight Shopify orders that failed to import into HotWax. This failure is typically attributed to missing essential information on the order. The report serves as a valuable tool for identifying and addressing issues related to data completeness in Shopify orders, ensuring a smooth and error-free import process into the HotWax system. By pinpointing orders with missing required information, retailers can take proactive measures to correct and complete the necessary details, ultimately facilitating a seamless integration between Shopify and HotWax.

| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| shopifyOrderName        | Unique identifier for the Shopify order               |
| site                    | The associated site or platform                        |
| tags                    | Tags associated with the order                         |
| errorMessage           | Details about the error preventing the order import   |
| firstAttemptedImport    | Date and time of the first attempted import           |
| createdDate             | Date and time when the error record was created       |
| docType                 | Document type or category of the Shopify order        |
| _expire_at_            | Expiration timestamp for the error record              |


