# Invoicing

Generating invoices in Netsuite for orders streamlines the financial processes. This step finalizes payment transactions and accounting entries for completed orders, contributing to accurate financial reporting. This step remains the same for orders whether items are fulfilled in NetSuite or not.

**Actions**

A scheduled SuiteScript in Netsuite identifies sales orders in "pending_billing" status, which have corresponding customer deposits already created (as per Step 3 and create invoice records for these orders.

Upon generating the invoice, the status of the customer deposit is marked as "Deposited," and the invoice status changes to "Fully Applied," signifying payment reception and application to the invoice. This process also ensures all necessary accounting postings are handled in Netsuite.

**Overall sync progress**

- [x] Sync new orders from HotWax to NetSuite
  - [x] Sync customers
  - [x] Sync order line items
  - [x] Sync order ids
  - [x] Create customer deposit
- [x] Approve order in HotWax for fulfillment
- [x] HotWax brokering allocates orders
- [x] Sync item allocation to NetSuite for facilities where NetSuite fulfillment is used
- [x] Sync order item fulfillment details from NetSuite to HotWax
- [x] Sync order item fulfillment details from HotWax to NetSuite
- [x] Invoice orders in NetSuite