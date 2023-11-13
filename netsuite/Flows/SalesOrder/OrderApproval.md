# Order Approval
Orders that are in "Created" status in HotWax Commerce are pushed to Netsuite rather than orders that are in "Approved" status. It's important to note the rationale behind this decision.


Initially, we attempted to synchronize approved orders from HotWax Commerce to Netsuite. However, this posed challenges when dealing with orders that contained both available and unavailable inventory items for fulfillment. In such cases, only a partial order could be pushed to Netsuite, causing complications. If the order was partially fulfilled in Netsuite due to certain available items, a subsequent attempt to send the remaining items led to conflicts. Netsuite recognized the initial order as complete and did not accept the remaining partial order, causing system errors and duplication.


To circumvent such complexities and ensure a seamless process, a strategic shift was made. Orders, upon their creation within HotWax Commerce, are designated as "Created" status. It is at this phase that critical order information is captured and assembled into CSV files for transmission to Netsuite. By choosing the "Created" status for order synchronization, HotWax Commerce retains control of the integration process and its sequence of interactions with Netsuite, enhancing accuracy and mitigating errors that arose from attempts to synchronize orders in an "Approved" status.

## Synchronize Customers from HotWax Commerce to Netsuite
To successfully create a sales order in Netsuite, [it is a prerequisite to have the customer information pre-existing within Netsuite's database][netSuiteCustomer]. If the order contains a new customer not present in Netsuite, the system won't allow the order to be pushed. Therefore, it's vital to synchronize customer data from HotWax Commerce to Netsuite before order creation.

**Actions**

A scheduled job in HotWax Commerce operates at defined intervals to generate a CSV file comprising customers who have not been synchronized to Netsuite. This job can be configured to run at regular intervals, typically set at an hourly frequency. Customers who haven't been synchronized within the last hour are included in this CSV file for synchronization with Netsuite.

Identify new customers:
In the Person table, entries where the roleTypeId is 'CUSTOMER' and where the PartyIdentification record for identification type 'NETSUITE_CUSTOMER_ID' is not created.

A Scheduled Script in NetSuite is responsible for downloading the CSV file of customers not yet synchronized and utilizes the ImportTask function of the N/Task module. This script processes and creates customer records within Netsuite, ensuring that the necessary customer information is available in Netsuite for order creation.

**SuiteScripts**
Import new customers from SFTP
```
HC_SC_ImportCustomer
```

Once customers are created in NetSuite, a scheduled script exports recenlty created customers in a file at an SFTP location to be imported by HotWax Commerce. After HotWax imports this file, the OMS now has confirmation of customer syncronization.

**SuiteScripts**
Export recenlty created customers to SFTP
```
HC_MR_ExportedCustomerCSV
```

**Jobs in HotWax Commerce**

Import Customer IDs from NetSuite from SFTP
```
Import Party Identification
FTP Config: IMP_PARTY_IDENT
```


- [x] Sync customers

## Synchronize Sales Order from HotWax Commerce to Netsuite
Capturing orders in HotWax Commerce initiates the creation of orders in "created" status. In this step, created sales orders are pushed from HotWax Commerce to Netsuite for further processing.

**Actions**

A job in HotWax Commerce creates a CSV file of orders in "created" status that have not yet been sent to Netsuite. The file contains details such as unit prices, order adjustments, and shipping costs, excluding direct tax amounts. HotWax Commerce omits the tax amount from the file and sends tax codes for the individual order items because Netsuite independently computes the taxes based on these codes and applies them accurately to each order item, ensuring precise tax calculations within Netsuite.

*add details about how coupon codes are synced to HC*

If an order has a discount code applied to it, during order sync to NetSuite, HotWax checks if the applied code is available in NetSuite. If the code is available then the exact code is used and the value of the discount is shared as the "Rate". In the event that the code is not available in NetSuite, HotWax will use a default discount code 'SHOPIFY DISCOUNT' along with the value of the discount.

Item level discounts have special handling as well. They are synced as a seperate line item in the order using a "SHOPIFY DISCOUNT" item, however HotWax does not send an order line id for this item. The amount of the adjustment is added in the "Amount" field when preparing the CSV for NetSuite and the "Price Level" is always set to "Custom".

The price for products is not sent by HotWax when the order syncs to NetSuite. Instead NetSuite automatically adds the value of the product apon order creation based on the price of the product in NetSuite.

For retailers that use Avatax, the Tax Code and Shipping Tax Code will always contain "AVATAX" when sent from HotWax. Avalara Tax calculation will automatically compute taxes on the order in NetSuite when the order is created.

### Handling NetSuite file size limits
We've added a limit to how many orders can be synced in one file to NetSuite to ensure the NetSuite file size limit is not breached. NetSuite has a limit of 25,000 rows in one CSV, so if your order volume in one sync duration exceeds this limit, we automatically paginate the file to ensure NetSuite does not reject the file. Another thing we kept in mind is that during pagination, one order should not be split into seperate files because this could lead to errors in the order import process in NetSuite. Assuming that most e-Commerce orders contain 10 or less items, we've set an upper limit of 1000 orders per file. This should keep the file size well below NetSuite's limit while also leaving buffer for orders with more line items.

Though it may seem like this would significanlty slow down the order sync, this is not actually the case. All valid orders are still exported from HotWax Commerce at once and then paginated for NetSuite, this means all the order files are available for NetSuite to process and the speed at which they're processed is determined by the configuration of NetSuite used by the retailer. Higher configurations will have faster and more concurrent file process capabilites.

**SFTP Locations**

Export 'Created' orders with verified customers
```
/home/{sftp-username}/netsuite/salesorder/export
```

A scheduled SuiteScript in Netsuite reads the CSV file from the SFTP location and creates sales order records using the CSV Import function of the N/Task module.

## Sync Sales Order Item Line IDs from Netsuite to HotWax Commerce
This step syncs Netsuite sales order line item IDs with HotWax Commerce order items. This step is crucial as it helps in mapping and aligning the order line items in HotWax Commerce with their corresponding line item IDs in Netsuite. This synchronization enables a smooth and accurate cross-referencing of items and their relevant details between the two systems. Without syncing order line item IDs, any attempt to update an order item in NetSuite would result in a new order item being created.

**Actions**

A Map Reduce SuiteScript in Netsuite retrieves order line item IDs and generates a CSV file.

**SuiteScript**
```
HC_MR_ExportedSalesOrderItemCSV
```

A job in HotWax Commerce imports the CSV to pair Netsuite order line item IDs with appropriate order items.


- [x] Sync order line items

## Create Customer Deposit in Netsuite

This step creates customer deposit records in Netsuite for authorized payments of sales orders. Generating a customer deposit in Netsuite is essential to represent authorized payments for orders. This step signifies the initiation of the financial transaction for orders.

**Actions**

HotWax Commerce runs a scheduled job that generates a JSON file with order details and their respective grand totals.

A SuiteScript in Netsuite creates customer deposit records in "undeposited" status based on the JSON file from the SFTP server. It employs the N/Record module for record creation.

## Sync Sales Order IDs from Netsuite to HotWax Commerce
This step synchronizes Netsuite sales order IDs with orders in HotWax Commerce for tracking and identification. This step enables cross-referencing and linkage between orders in both systems, paving the way for accurate tracking and management.

The synchronization of Sales Order IDs from Netsuite to HotWax Commerce is a critical step as it serves as an indicator that the orders in HotWax Commerce have been successfully integrated into Netsuite. Additionally, it is an essential step for various functions, including the creation of item fulfillment, return authorization, and customer deposit records in Netsuite. 

**Actions**

A Map Reduce SuiteScript in Netsuite fetches pending fulfillment orders and generates a CSV file with internal sales order IDs.

**SuiteScript**
```
HC_generateCSV_FulfilledTransferOrders
```

A job in HotWax Commerce imports the CSV to associate Netsuite order IDs with corresponding orders.

- [x] Sync order ids


## Approval of Sales Order
This step involves marking of  orders as "Approved" for further processing and fulfillment.This step ensures that orders are appropriately marked "Approved" once all necessary details and required references are established. This authorization triggers the routing of orders to their designated fulfillment locations.

**Actions**

A scheduled job in HotWax Commerce validates order items and marks them "Approved."

Approved orders are then processed by the brokering engine in HotWax Commerce for order routing. Following the execution of the order brokering engine, the available inventory for each order item is assessed. Consequently, the brokering engine  in HotWax Commerce assigns suitable fulfillment locations to the order items that have inventory available for fulfillment.

After completing these steps, here is how much of the order sync is now complete:

- [x] Sync new orders from HotWax to NetSuite
  - [x] Sync customers
  - [x] Sync order line items
  - [x] Sync order ids
  - [x] Create customer deposit
- [x] Approve order in HotWax for fulfillment
- [ ] HotWax brokering allocates orders
- [ ] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
- [ ] Sync order item fulfillment details from NetSuite to HotWax
- [ ] Sync order item fulfillment details from HotWax to NetSuite
- [ ] Invoice orders in NetSuite

<!-- page links -->
[netSuiteCustomer]:https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162886247923.html#Best-Practices-for-Order-Sync