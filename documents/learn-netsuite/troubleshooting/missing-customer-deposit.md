# Missing Customer Deposit in NetSuite

## Objective
The objective of this document is to help users identify and resolve cases where Customer Deposits are not created in NetSuite for orders processed through OMS. This guide outlines the end-to-end flow and provides steps to resolve issues related to this.

## Context
A Customer Deposit in NetSuite is created only when:

- A valid payment transaction exists in OMS
- That payment is successfully exported and processed in NetSuite

This is how a customer deposit is created in NetSuite

- Order is created
- Payment is captured (Shopify)
- Payment is recorded in OMS as Payment Transaction
- OMS sends this payment to NetSuite
- NetSuite creates a Customer Deposit

If any step in this fails, the deposit will not be created.

### Step 1: Verify in NetSuite
- Search for the order in NetSuite and open the Sales Order.
- Navigate to the Related Records tab.
  
Check whether:

- A Customer Deposit exists

<img width="523" height="86" alt="image" src="https://github.com/user-attachments/assets/802c8b62-bb95-43c6-b8ac-15e81f167c45" />

If Order Exists but Customer Deposit is Missing, this is the key scenario.

### Step 2: Verify Payment in OMS
- Open the order in OMS and carefully review the Order Payment Preference created.

_**Case 1: No Payment Transactions Present**_

This means there is no payment recorded in OMS. Since Customer Deposit creation depends on payment, NetSuite will not create any deposit.

<img width="354" height="90" alt="image" src="https://github.com/user-attachments/assets/5476c0c1-94ea-41f4-a911-438624a3fe39" />

This might happen if the payment is not captured from Shopify or any payment integration issue.

**Resolution:**

- This needs to be handled from OMS:
- The support team will re-run the payment-related service (getPaidTransactionsAndCreateOrderPayment)
- Ensure payment is properly created.
- Until this is done, no deposit can be created.

_**Case 2: Payment Exists but Order is Partially Paid**_

This means that the order has partial payment recorded. In such a case as well, deposit may not be created

**Resolution:**

- Compare Order Total vs Payment Total from the Order Detail Page.

<img width="478" height="353" alt="image" src="https://github.com/user-attachments/assets/69f4d632-26ef-4fca-aff9-d8efb95b00b3" />

- Ensure full payment is captured and reflected in OMS
- If incorrect, reprocess payment transactions
- Partial payments are one of the most common reasons for missing or incorrect deposits.

**Case 3: Payment Exists and Looks Correct**

If:

- Payment transactions are present
- Payment amount matches order total
- Order is fully paid
- Then the issue is likely not in OMS payment creation and you shall now verify in NetSuite.
  
### Step 3: Check SFTP for Payment File

Just like order sync, payment/deposit data is also pushed via SFTP. To check here, use your SFTP credentials and navigate to the relevant SFTP directory and check:

SFTP Path : `/home/<instance-name>/netsuite/salesorder/customerdeposit`

- If a payment file exists for the order
- Verify whether it is in:
  - Error
  - Required Field Missing
  - Archive

- If file is in Error / Required Field Missing → address the issues
- If file is in Archive → Sent to NetSuite

### Step 4: Check System Message Error in Maarg
- Open Maarg and go to:
 `System → Sys-Sys Messages`

- Filter by type “GenerateCustomerDepositFeed”.
- View the system message errors and messages stuck in consuming status.

### Step 5: Reprocess the Order
- Remove existing feed history after bringing any update to the order(similar to order sync logic).
- Let the job pick it up again with the updated details.






