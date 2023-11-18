# Sync Customer
If the order contains a new customer not present in Netsuite, the system won't allow the order to be pushed. Therefore, it's vital to synchronize customer data from HotWax Commerce to Netsuite before order creation.

A scheduled job in HotWax Commerce operates at defined intervals to generate a CSV file comprising customers who have not been synchronized to Netsuite.

This job is scheduled in the integration layer and not executed natively in the OMS, so it is not visible in the Job Manager app.

**SFTP Location**
```
/home/{sftp-username}/netsuite/customer/export
```

### Import customers into NetSuite

Schedule SuiteScript
```
HC_SC_ImportCustomer
```

### Export customer IDs from NetSuite
Schedule SuiteScript
```
HC_MR_ExportedCustomerCSV
```
SFTP Location
```
/home/{sftp-username}/netsuite/customer/import/
```

### Import NetSuite Customer into HotWax
Job in HotWax
```
Import Party Identification
FTP Config: IMP_PARTY_IDENT
```