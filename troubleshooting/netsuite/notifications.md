# Error Notification Not Received

All errors in HotWax SuiteScripts automations trigger an email notification to a designated mailing list for troubleshooting. The only time an error notification is not sent is for files that the CSV import module doesn’t process because of a data mapping error. If a CSV import fails before it begins processing, NetSuite will not trigger a notification email so these files have to be checked manually.

Here is a list of flows where CSV imports are used:

- Customer Import
- Order Creation
- Inventory Adjustment (Cycle Count)

Learn more about how to troubleshoot an unprocessed CSV file [here](failedSuiteScripts.md#csv-import-failures).

**Missing Notifications**

If SuiteScripts are failing, but no notifications are received, check NetSuite configurations for email notifications to the Integration mailing list.
