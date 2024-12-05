# Table of contents

* [Introduction](README.md)

## Integration Tools and Methodologies

* [SuiteScript](netsuite-integration/IntegrationTools/SuiteScript/README.md)
  * [N/Task Module](netsuite-integration/IntegrationTools/SuiteScript/N.taskModule.md)
  * [N/Record Module](netsuite-integration/IntegrationTools/SuiteScript/N.recordModule.md)
  * [N/Search Module](netsuite-integration/IntegrationTools/SuiteScript/N.searchModule.md)
  * [N/File Module](netsuite-integration/IntegrationTools/SuiteScript/N.fileModule.md)
* [Saved Search](netsuite-integration/IntegrationTools/SavedSearch/README.md)
* [Integration Methodologies](netsuite-integration/IntegrationMethodologies/README.md)
* [NetSuite](netsuite-integration/IntegrationMethodologies/NetSuite.md)
* [HotWax](netsuite-integration/IntegrationMethodologies/HotWax.md)

## Integration Flows

* [Inventory](netsuite-integration/Flows/inventory.md)
* [Sales Orders](netsuite-integration/Flows/SalesOrder/README.md)
  * [Order Approval](netsuite-integration/Flows/SalesOrder/OrderApproval.md)
  * [Order Allocation](netsuite-integration/Flows/SalesOrder/OrderAllocation.md)
  * [Fulfillment](netsuite-integration/Flows/SalesOrder/Fulfillment.md)
  * [Invoicing](netsuite-integration/Flows/SalesOrder/Invoicing.md)
  * [Bundles](netsuite-integration/Flows/SalesOrder/Bundles.md)
  * [Shipping Methods](netsuite-integration/Flows/SalesOrder/ShippingMethods.md)
  * [Gift Card Orders](netsuite-integration/Flows/SalesOrder/giftcardorders.md)
  * [POS Orders](netsuite-integration/Flows/SalesOrder/posOrders.md)
  * [Send Sale Orders](netsuite-integration/Flows/SalesOrder/sendsaleorders.md)
  * [Reports](netsuite-integration/Flows/SalesOrder/reports.md)
* [Returns](netsuite-integration/Flows/returns/returns.md)
* [Exchanges](netsuite-integration/Flows/exchanges/exchanges.md)
* [Transfer Orders](netsuite-integration/Flows/transfer-order/README.md)
  * [Warehouse to Store](netsuite-integration/Flows/transfer-order/warehousetostore.md)
  * [Store to Warehouse](netsuite-integration/Flows/transfer-order/storetowarehouse.md)
  * [Store to Store](netsuite-integration/Flows/transfer-order/storetostore.md)
  * [Reports](netsuite-integration/Flows/transfer-order/reports.md)
* [Cycle Count](netsuite-integration/Flows/cycle-count.md)
* [Purchase Orders](netsuite-integration/Flows/purchase-orders.md)

## NetSuite Deployment

* [Deployment](netsuite-deployment/README.md)
* [SDF Bundle Setup](netsuite-deployment/sdfBundle/README.md)
  * [Install SDF](netsuite-deployment/sdfBundle/installSDF.md)
  * [Setup SFTP](netsuite-deployment/sdfBundle/setupSFTP.md)
  * [Date Time Format](netsuite-deployment/sdfBundle/verifyDateTimeFormat.md)
* [Prerequisites](netsuite-deployment/prerequisites/README.md)
  * [Install NetSuite Jobs](netsuite-deployment/prerequisiteSyncs/installNetsuiteReader.md)
  * [Product Store Settings](netsuite-deployment/prerequisiteSyncs/productStoreSettings.md)
  * [SFTP Locations](netsuite-deployment/prerequisiteSyncs/sftpLocations.md)
  * [Historical Customers](netsuite-deployment/prerequisiteSyncs/historicalCustomers.md)
  * [Shipping Methods](netsuite-deployment/prerequisiteSyncs/shippingMethods.md)
  * [Price Level](netsuite-deployment/prerequisiteSyncs/priceLevel.md)
  * [Payment Methods](netsuite-deployment/prerequisiteSyncs/paymentMethods.md)
  * [Promo Codes](netsuite-deployment/prerequisiteSyncs/promoCodes.md)
  * [NetSuite Facility Group](netsuite-deployment/prerequisiteSyncs/netsuiteFulfillment.md)

## Synchronization Flows

* [Auditing](netsuite-deployment/flows/integration-audit/README.md)
* [Products and Inventory](netsuite-deployment/flows/products-and-inventory/README.md)
  * [Product IDs](netsuite-deployment/flows/productInventorySync/importProductId.md)
  * [Inventory Reset](netsuite-deployment/flows/productInventorySync/inventoryReset.md)
* [Orders](netsuite-deployment/flows/orderSync/README.md)
  * [POS Cash Sales](netsuite-deployment/flows/orderSync/posCashSales.md)
  * [Sync Customer](netsuite-deployment/flows/orderSync/syncCustomer.md)
  * [Sync Order IDs](netsuite-deployment/flows/orderSync/syncOrderIds.md)
  * [Approve Orders](netsuite-deployment/flows/orderSync/approveOrders.md)
  * [Reports](netsuite-deployment/flows/orderSync/reports.md)
* [Allocation & Fulfillment](netsuite-deployment/flows/allocation\&fulfillmentSync/README.md)
* [Transfer Orders](netsuite-deployment/flows/transferOrderSync/README.md)
* [Purchase Orders](netsuite-deployment/flows/purchaseOrderSync/README.md)
* [Integration Mappings](netsuite-deployment/flows/integration-mappings/README.md)
  * [Payment Methods](netsuite-deployment/flows/integration-mappings/payment-methods.md)
  * [Discount Codes](netsuite-deployment/flows/integration-mappings/discount-codes.md)
  * [Price Levels](netsuite-deployment/flows/integration-mappings/price-levels.md)
  * [Shipping Methods](netsuite-deployment/flows/integration-mappings/shipping-methods.md)
  * [Facility Group](netsuite-deployment/flows/integration-mappings/facilities.md)

## Troubleshooting

* [Failed suitescripts](troubleshooting/failedSuiteScripts.md)
* [Error Logs](troubleshooting/findingLogs.md)
* [Failure Notifications](troubleshooting/notifications.md)
* [Order Sync Failure](troubleshooting/order-do-not-sync.md)
