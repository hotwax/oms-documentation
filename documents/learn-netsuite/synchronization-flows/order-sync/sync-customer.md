---
description: >-
  Sync customer records and NetSuite identifiers through the CSV integration.
---

# Sync customers over SFTP

This page describes the earlier CSV integration over Secure File Transfer Protocol (SFTP). For the batch integration and its result imports, use [Order sync](README.md).

The customer flow creates or maps the customer in NetSuite and imports the NetSuite customer ID into HotWax Commerce before order export.

## Import historical customer mappings

If NetSuite already contains Shopify customers, import their verified Shopify and NetSuite identifiers before exporting customers from HotWax Commerce. Missing mappings can lead to duplicate customer records.

1. Run `HC_SC_GenerateHistoricalCustomerCSV` in NetSuite to export existing customers and their Shopify IDs.
2. Run `HC_SC_UploadHistoricalCustomerCSV` to move the file to SFTP.
3. Verify that the file is present at the configured path:

```text
/home/{sftp-username}/netsuite/historicalshopifycustomer/csv
```

4. Run `Import Historical Shopify Customers` in HotWax Commerce.
5. Verify the imported Shopify and NetSuite identifications on the intended customer records.

## Export new customers and import their IDs

1. Schedule the configured customer export job in the integration layer. It generates a CSV file for customers without a NetSuite mapping. Verify the file at:

```text
/home/{sftp-username}/netsuite/customer/export
```

2. Schedule `HC_SC_ImportCustomer` in NetSuite to import the customer file.
3. Schedule `HC_MR_ExportedCustomerCSV` in NetSuite to export the customer identifiers.
4. Verify the acknowledgement file at:

```text
/home/{sftp-username}/netsuite/customer/import/
```

5. Enable `Import Party Identification` in HotWax Commerce with FTP configuration `IMP_PARTY_IDENT`.
6. Check the import result and confirm the NetSuite customer identification in OMS before retrying dependent orders.

Replace `{sftp-username}` with the configured SFTP username. Confirm the job schedules and paths for your deployment. See [Manage a job](../../../system-admin/administration/job-manager/jobs/job-details.md) for scheduling instructions.
