# Order Import and Inventory Update From Predict Spring to HotWax

This integration flow is responsible for importing POS orders and the subsequent inventory updates within the OMS. 

Predict Spring sends two types of Order TLog JSON of POS orders using webhook, In Store orders and Send Sale orders.

HotWax reads and imports these orders into the OMS, including their associated inventory updates. However, inventory updates are exclusively performed for In Store Orders.

Send Sale orders are created in the OMS with an approved status, indicating they are ready to be brokered. During brokering, a Send Sale order will not be brokered again at the facility from which it originated.

In Store orders are fulfilled orders and are created as completed in the OMS. Additionally, for In Store orders, inventory updates are also be performed in the OMS to maintain accuracy of the inventory.

### Implementation Flow
The Order Import flow is prepared in the integration layer using Apache NiFi.

Apache NiFi listens the webhook requests coming from Predict Spring, authenticates them, and sends responses accordingly.

If the request is successfully authenticated, NiFi sends a success code 200, otherwise, it returns a 401 error code. 

Valid requests are then further processed to transform the Order TLog JSON into the required format for creating orders and update their inventory in the OMS.

#### NiFi Flow
In the NiFi Flow set up, below processors are used in Apache NiFi.

1. **HandleHttpRequest**
   1. The HandleHttpRequest processor is used to listen for webhook requests coming from Predict Spring.
   
2. **ExecuteStreamCommand**
   1. The ExecuteStreamCommand processor is used to authenticate the request and generate the response accordingly. If the request is successfully authenticated, the processor returns 'Successful', otherwise, it returns 'Failed' in the output message.
   
3. **RouteOnAttribute**
   1. The RouteOnAttribute processor is used to differentiate responses. If the response is successful, it will be routed to the successful relationship, otherwise, it will be routed to the failure relationship. 

4. **HandleHttpResponse**
   1. The HandleHttpResponse processor is used to send responses back to Predict Spring. If the request is successfully authenticated, it sends a success code 200, and for failed requests, it returns a 401 error code. 
   
   2. **QueryRecord**
      1. The QueryRecord processor is used to differentiate between the Order TLog JSON and Return TLog JSON, this also used to filter the In Store Order TLogs and Send Sale Order TLogs. 
      2. Predict Spring will use a single endpoint to send both the Order TLogs and Return TLogs. This differentiation is necessary to ensure the correct processing of order creation in the OMS.
      3. Below SQL
     
   
5. **JoltTransformJSON**
   1. The JoltTransformJSON processor is used to transform the Order TLog JSON.
   2. In the NiFi flow there are two JoltTransformJSON processors are used.
   3. One processor is dedicated to transform the Order TLog JSON to prepare the required format for importing the orders in the OMS.
   4. The other processor is specifically used to transform the Order TLog JSON for updating the inventory of In Store orders in the OMS.

6. **ConvertRecord**
   1. The ConvertRecord processor is used to convert the Inventory Update JSON file into CSV format.
   
7. **UpdateAttribute**
   1. Here the file name is prepared for the file by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which file is being kept for OMS. 
   2. In the NiFi flow there are two JoltTransformJSON processors are used, one processor is dedicated to prepare the name of the file which will be used to create orders in the OMS.
   3. The other processor is used to prepare the name of the file which will be used to update the inventory in the OMS.

8. **PutSFTP**
   1. The PutSFTP processor is used to put the prepared files at the SFTP.
   2. In the NiFi flow there are two PutSFTP processors are used, one processor will put the Create Orders File on SFTP which will be used to create orders in the OMS.
   3. The other processor will put the inventory file on SFTP which will be used to update the inventory in the OMS.

### OMS Feed File details

#### FTP locations

Path for OMS to consume the Create Orders File
This path represents the sftp location where the Create Orders File is kept to consume the file and import the orders in the OMS.
```text
/home/${sftp-username}/POS/PredictSpring/PS_to_HC/SalesOrder/dvus
```

Path for OMS to consume the Inventory Update File
This path represents the sftp location where the Inventory Update File is kept to consume the file and update the inventory for In Store orders in the OMS.
```text
/home/${sftp-username}/hotwax/ReadOrderTlogAndUpdateInventory
```

#### Sample Feed File Name Format

File format of Create Orders File
```text
${clientName}_OrderTLog_2023-12-20-00_46_40_660.json
```

File format of Inventory Update File
```text
${clientName}_InventoryUpdate_2023-12-20-00_46_40_660.json
```

### Data Model Mapping for Order Import in OMS
| OMS Field        | Type     | Description        | Predict Spring Field Mapping      |
|------------------|----------|--------------------|-----------------------------------|
| externalId       | string   | The unique ID assigned to an order in the external system. | orderId                           |
| orderName        | string   | Name of the order. | orderId                           |
| channel          | string   | The sales channel of the order. | Used a default value as **POS_SALES_CHANNEL** |
| customerId       | string   | The unique ID of the customer. | Used a defaule value as **NA** for the guest check type of orders. |
| customerExternalId | string   | The unique ID of the customer in the external system. | customerProfile.customerId        |
| firstName        | string   | The firstName of the customer. | billingAddress.firstName          |
| lastName         | string   | The lastName of the customer. | billingAddress.lastName           |
| email            | string   | The email ID of the customer. | customerProfile.email             |
| phone            | string   | The phone of the customer. | customerProfile.phoneMobile       |
| priority         | string   | The priority of the order. | Used default value as **2**       |
| orderDate        | string   | The date of the order. | creationDate                      |
| statusId         | string   | The status ID of the order. | 1. The value for this field is prepared using the configurable parameter **default.instore.order.status** and **default.online.order.status** in NiFi. <br/> 2. Sample value - **ORDER_APPROVED** and/or **ORDER_COMPLETED**    </br> 3. In Store type of orders will be created as in the ORDER_COMPLETED status. </br> 4.  Send Sale type of orders will be created as in the ORDER_APPROVED |
| currencyCode     | string   | The currency of the order. | 1. The value for this field is prepared using the configurable parameter **default.currency** in NiFi. </br> 2. Sample Value - **USD** |
| grandTotal       | number   | The grand total of the order. | totalAmount                       |
| orderIdentifications.orderIdentificationTypeId | string   | The type of the Order Identification. | 1. The value for this field is prepared using the configurable parameter **default.order.identification** in NiFi. </br> 2. Sample Value - **PS_ORD_ID** |
| orderIdentifications.idValue | string   | The Id value of the Order Identification. | orderId                           |
| shipGroup.orderFacilityId | string   | The Facility ID assign to an order in the external sysytem. | storeId </br> 1. **NOTE:** While creating send sale orders the orderFacilityId will be used to exclude the facility Id for this order, to ensure that during brokering a Send Sale order will not be brokered again at the facility from which it originated. |
| shipGroup.maySplit | string   | This attribute defines that shipGroup can split or not. | 1. The value for this field is prepared using the configurable parameter **default.may.split** in NiFi. </br> 2. Sample Value - **Y** |
| shipGroup.carrierPartyId | string   | The carrier party ID of the ship to address. | 1. Used default value as **NA**.  |
| shipGroup.shipmentMethodTypeId | string   | The Shipment Method Type ID of ship to address. | shippingName                      |
| shipGroup.shipTo.postalAddress.name | string   | The customer name of ship to address. | shippingAddress.customerName      |
| shipGroup.shipTo.postalAddress.address1 | string   | The address1 of ship to address. | shippingAddress.addressLine1      |
| shipGroup.shipTo.postalAddress.address2 | string   | The address2 of ship to address. | shippingAddress.addressLine2      |
| shipGroup.shipTo.postalAddress.city | string   | The city of ship to address. | shippingAddress.city              |
| shipGroup.shipTo.postalAddress.state | string   | The state of ship to address. | shippingAddress.state             |
| shipGroup.shipTo.postalAddress.postalCode | string   | The postalCode of ship to address. | shippingAddress.postalCode        |
| shipGroup.shipTo.postalAddress.country | string   | The country of ship to address. | shippingAddress.country           |
| shipGroup.shipTo.postalAddress.residentialAddress | string   | The attribute defines if the address is residential address of ship to address. | 1. The value for this field is prepared using the configurable parameter **default.residential.address** in NiFi. </br> 2. Sample Value - **Y** |
| shipGroup.shipTo.email.infoString | string   | The email of ship to address. | shippingAddress.emailAddress      |
| shipGroup.shipTo.phoneNumber.contactNumber | string   | The phone number of ship to address. | shippingAddress.phone             |
| shipGroup.items.idValue | string   | The identifier of the product. | orderProductList.gtin             |
| shipGroup.items.idType | string   | The type of the product identifier. | Used default value as **UPCA**.   |
| shipGroup.items.status | string   | The status of the item. | 1. The value for this field is prepared using the configurable parameter **default.instore.item.status** and **default.online.item.status** in NiFi. <br/> 2. Sample value - **ITEM_APPROVED** and/or **ITEM_COMPLETED**    </br> 3. In Store type of orders will be created as in the ITEM_COMPLETED status. </br> 4.  Send Sale type of orders will be created as in the ITEM_APPROVED |
| shipGroup.items.quantity | number   | The quantity of the item. | Used default value as **1**.      |
| shipGroup.items.unitPrice | string   | The unit price of the item. | orderProductList.quantity         |
| shipGroup.items.itemAdjustments.type | string   | The adjustment type of the item. | Used default value as **SALES_TAX** |
| shipGroup.items.itemAdjustments.amount | number   | The adjustment amount of the item. | orderProductList.productTax.totalTax |
| orderAdjustments.type | string   | The adjustment type of the order. | Used default value as **SHIPPING_CHARGES** and/or **SHIPPING_SALES_TAX** </br> **NOTE:** 1. For **shippingSubTotal** used the SHIPPING_CHARGES as a adjustment type and for **shippingTax** used the SHIPPING_SALES_TAX as a adjustment type of an order. |
| orderAdjustments.amount | number   | The adjustment amount of an order. | shippingSubTotal and/or shippingTax |
| orderPaymentPref.paymentMethodTypeId | string   | The Payment method type of an order. | tenders.paymentMethod             |
| orderPaymentPref.maxAmount | number   | The max amount of the payment of an order | tenders.amountAuthorized          |
| orderPaymentPref.statusId | string   | The status of the payment of an order. | 1. The value for this field is prepared using the configurable parameter **default.payment.status** in NiFi. </br> 2. Sample Value - **PAYMENT_SETTLED** |