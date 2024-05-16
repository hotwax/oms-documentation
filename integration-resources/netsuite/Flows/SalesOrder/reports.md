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

## Canceled Order Report
The Canceled Order Report provides a comprehensive tracking mechanism for all orders that have entered the OMS and subsequently been canceled. This report ensures a systematic record of cancellations, offering visibility into the cancellation process. 

**In the context of NetSuite,** the Canceled Order Report becomes important due to the non-automatic synchronization of cancellations by HotWax. This report ensures that canceled orders align with expectations in NetSuite, whether through Celigo or NetSuite user actions. By using this report, organizations leveraging NetSuite gain a proactive means to verify and reconcile cancellation records, preventing discrepancies. This meticulous approach contributes to the accuracy of cancellation data across systems, enhancing the reliability of financial and operational records within NetSuite.

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

## Product Without NetSuite ID Report

The Product Without NetSuite ID report identifies products that have been synchronized from Shopify to the OMS with an expectation that NetSuite should have corresponding entries for all these products. However, instances may arise where legacy data in Shopify is not present in NetSuite. This discrepancy has the potential to disrupt the synchronization in product-based workflows between Shopify, the OMS, and NetSuite. Addressing the products without NetSuite IDs is crucial to maintain the integrity of data across platforms and ensure a seamless synchronization process, preventing any potential disruptions in the flow of product information between the systems.

| Field              | Description                                           |
|--------------------|-------------------------------------------------------|
| sku                | Stock Keeping Unit (SKU) for the product               |
| shopify_product_id | Unique identifier for the product in Shopify           |
| hotwax_product_id  | Unique identifier for the product in HotWax OMS       |


--- 

## Customers Without NetSuite ID Report

The Customers Without NetSuite ID report identifies instances where customer records synchronized from Shopify to the OMS lack corresponding entries in NetSuite. To address this, the OMS creates new customers in NetSuite, ensuring the integrity of customer data across platforms. This report provides an overview of customers without NetSuite IDs, offering valuable insights into the synchronization status and enabling timely corrective actions. By maintaining consistency in customer data, this approach contributes to a seamless and reliable integration between Shopify, the OMS, and NetSuite.

| Field                | Description                                  |
|----------------------|----------------------------------------------|
| hotwax_customer_id   | Unique identifier for the customer in HotWax  |
| FIRST_NAME           | First name of the customer                    |
| LAST_NAME            | Last name of the customer                     |
| shopify_customer_id  | Unique identifier for the customer in Shopify|
| order_count          | Count of orders associated with the customer |

---

## Allocation Pending Report

The Allocation Pending Report displays orders assigned to facilities that currently lack sufficient inventory for immediate fulfillment. Monitoring the orders and items listed in this report is essential for initiating replenishment actions at the store. By doing so, retailers can ensure that inventory levels are maintained adequately, facilitating the successful completion of fulfillment for the identified orders.

| Field            | Description                                        |
|------------------|----------------------------------------------------|
| FACILITY_ID      | The identifier of the facility in external systems |
| FACILITY_NAME    | The name of the facility in external systems       |
| SKU              | Unique identifier                                  |
| QUANTITY         | Quantity required of the SKU                       |