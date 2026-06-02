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

### Step 1: Verify Payment in OMS
- To identify the root cause, first verify the payment details in both Shopify and HotWax.

_**Case 1: No Payment Transactions Present in Shopify**_

Check the payment information on Shopify. If no payment transaction is present in Shopify, no payment information will be synced to HotWax. As a result, the Customer Deposit will not be created.

_**Case 2: No Payment Transactions Present**_

This means there is no payment recorded in OMS. Since Customer Deposit creation depends on payment, NetSuite will not create any deposit.

<img width="354" height="90" alt="image" src="https://github.com/user-attachments/assets/5476c0c1-94ea-41f4-a911-438624a3fe39" />

This might happen if the payment is not captured from Shopify or any payment integration issue.

**Resolution:**

- This needs to be handled from OMS:
- The support team will re-run the payment-related service (getPaidTransactionsAndCreateOrderPayment) to bring the payment information from Shopify.
- After a valid transaction is present, the scheduled job will be run that will create the customer deposit.

_**Case 3: Payment Exists but Order is Partially Paid**_

For orders where a partial payment is recorded in OMS, In such a case as well, deposit may not be created.

**Resolution:**

- Compare Order Total vs Payment Total from the Order Detail Page.

<img width="584" height="187" alt="image" src="https://github.com/user-attachments/assets/2285a100-5ba4-4b08-a9e7-7ac035df7b2f" />

<img width="584" height="187" alt="image" src="https://github.com/user-attachments/assets/3d062a88-cbfb-46ba-813d-0d18e457946a" />

- Ensure full payment is captured and reflected in OMS
- If the payment information is missing or incorrect, please contact the support team so the payment transactions can be reprocessed correctly.

**Case 3: Payment Exists and Looks Correct**

If:

- Payment transactions are present
- Payment amount matches order total
- Order is fully paid
- Then the issue is likely not in OMS payment creation and you shall now verify in NetSuite.

### Step 3: Check System Message Error in Maarg
- Open Maarg and go to:
 `System → Sys-Sys Messages`

- Filter by type “GenerateCustomerDepositFeed”.
- View the system message errors and messages stuck in consuming status.
  
### Step 4: Check SFTP for Payment File

Just like order sync, payment/deposit data is also pushed via SFTP. To check here, use your SFTP credentials and navigate to the relevant SFTP directory and check:

SFTP Path : `/home/<instance-name>/netsuite/salesorder/customerdeposit`

- If a payment file exists for the order
- Verify whether it is in:
  - Error
  - Required Field Missing
  - Archive

- If file is in Error / Required Field Missing, address the issues with the order.
- If the file is in the Archive folder, it indicates that the order has already been sent to NetSuite. In this case, there may be an issue on the NetSuite side that needs to be investigated and resolved.

### Step 5: Check the order on NetSuite

Navigate in NetSuite:
`Setup → Import/Export → View CSV Import Status`

<img width="392" height="341" alt="image" src="https://github.com/user-attachments/assets/1edb9e13-0617-4cdb-8c63-40feea2ff72e" />

You will see various customer deposit records. Under the message column check the status besides these files, you will see statuses like:

- “5 of 5 records processed successfully”
- “4 of 5 records processed successfully”
- “0 of 1 records processed successfully”
- You need to look for files with partial or failed records.
- Download the file to view the error.

### Step 6: Reprocess the Order
- Remove existing feed history after bringing any update to the order(similar to order sync logic).
- Let the job pick it up again with the updated details.

### Step 7: To verify if the Customer Deposit is created or not
- Search for the order in NetSuite and open the Sales Order.
- Navigate to the Related Records tab.
- Check whether:
    - A Customer Deposit exists
<img width="578" height="93" alt="image" src="https://github.com/user-attachments/assets/ea8862dd-fd25-41fb-a0e0-e7482bb821dc" />

