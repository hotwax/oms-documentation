# Approve Order

The OOTB order approval flow of OMS is not used, because certain checks and data need to be verified and updated before the order is approved. So, a custom order approval flow is implemented in NiFi which will perform the extra validations based on the custom requirements and keep the file ready to approve orders for OMS. This file will be read by OMS the orders in the file will be marked as approved. For this, the orders are in CREATED status in OMS until the orders are approved.

### Requirement:

The process mandates that an order is approved only when it possesses the essential attribute 'NETSUITE_ORDER_EXPORTED'. This attribute confirms that the order has been properly exported to the NetSuite system. However, because different brands may have unique requirements, the approval process includes extra checks for brand-specific conditions. So, while the basic NetSuite approval demands the 'NETSUITE_ORDER_EXPORTED' attribute, it can also consider additional brand-related criteria. To get the thumbs up, an order must meet all these conditions, ensuring a thorough and adaptable approval process that suits both generic and brand-specific needs in NetSuite order processing.

### **NetsuiteItemLineId Attribute:**&#x20;

The NetsuiteItemLineId is generated and associated with OMS order items during a specific synchronization step after the sales order has been created in Netsuite. This synchronization step is crucial for mapping and aligning the order line items in OMS with their corresponding line item IDs in Netsuite. Verification of the presence of the NetsuiteItemLineId order item attribute is necessary. If all items of an order possess the NetsuiteItemLineId, the NETSUITE_ORDER_EXPORTED order attribute will be created.

### **Implementation Flow:**

The approval process for eligible orders will be implemented by NiFi. This workflow is divided into creating order attributes in the OMS database and then approving the eligible orders.&#x20;

1.  For creating order attributes, an SQL with required checks is executed and a CSV file is kept for the OMS job to read, which creates the order attribute. The name of the job is createUpdateOrderAttribute. The file is read from the directory -

    `hotwax/ApproveOrderAttributes`
2.  For approving orders, a CSV file containing eligible order IDs is kept on SFTP. This file is generated based on the presence of required order attributes. The OMS job consumes this file to approve orders. The file is read from the directory -

    `hotwax/ApproveOrders`

### NiFi Flow:

The NiFi setup employs the same set of processors for both flows – one for creating order attributes and the other for approving orders. The sequence for these processors is as follows:

1. The **ExecuteSQLRecord** processor is used to execute distinct SQL queries, generating CSV files based on the defined Avro schema for creating order attributes.
2. The subsequent processor, **RouteOnAttribute**, checks whether the flow file contains any records.
3. The filename is then updated to the required format using the **UpdateAttribute** processor.
4. The final step involves transferring the file to the SFTP location using the **PutSFTP** processor.
5. The stored files will be accessed via HC to create order attributes.
