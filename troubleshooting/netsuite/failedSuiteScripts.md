# Failed SuiteScripts

## Export Failure

If an export SuiteScript is reported in an error notification indicating a connection timeout to SFTP, this may be for two reasons.

**Steps to Troubleshoot:**

1. Review the custom NetSuite entity setup by the SDF bundle for SFTP configurations. Ensure that the default directory is set up correctly for your project. It should look something like this: `/home/{client-name}sftp/netsuite/`.
   
2. If the connection issue still persists, try logging into the SFTP directly with credentials provided by HotWax. If you are unable to connect to the SFTP directly, this most likely indicates that the OMS instance is experiencing availability issues. Connect with the HotWax Support team for this.

**Retry data from failed exports**

HotWax SuiteScripts maintain a time-based cursor to track the last exported date and time to ensure all records are synced to HotWax. In the event that a SuiteScript fails to execute, the last sync time of the SuiteScript is not updated. This ensures that the next time the script runs successfully it will sync all records introduced since the last successful sync with HotWax and no data loss.

At any point if you wish to export a certain set of records on demand, the scheduled scripts can also be run on demand, but to fully complete the sync, it’s important to also run the corresponding import job in HotWax or else the sync will not be complete.

---

## Import Failures

### N/Record import failures

Whenever an N/Record based import fails, a CSV file of the failed records is sent in a mail notification. This file includes the exact records where errors occurred along with the error reasons.

To retry the failed records, fix the errors and place the file back in the original SFTP location for the SuiteScript to reprocess in the next scheduled import. If you want to process the file right away, execute the script manually from NetSuite after uploading the corrected file to the SFTP.

### CSV Import failures

CSV imports in NetSuite are broken down into two subprocesses, the first is validating a file for import and then actually processing the file for import. If NetSuite is unable to validate a file for import, it will discard the file and log it as an error file in its CSV import module interface. Unfortunately, there is no alert or notification system in NetSuite that can be leveraged to track these occurrences.

NetSuite will not attempt to import a CSV if it is missing a required field or even if a record is missing a required value. A CSV will be considered valid even if the values of a record are incorrect.

**Example**

The promo code internal ID provided by HotWax during order creation was no longer active in NetSuite.

Netsuite will still consider this file valid, but it’ll create an error log CSV for the record in the corresponding FTP location. An alert will also be sent for this failed record.

Here are the imports which use NetSuite’s CSV import module:

- Customer Import
- Order Creation
- Inventory Adjustment (Cycle Count)

#### Retry data from failed exports

Depending on the type of sync time based sync or attribute-based sync, the troubleshooting steps may vary.

**Attribute-based sync**

Attribute-based flows ensure that a sync is automatically retried until an attribute indicating a successful sync is added in HotWax. When an error occurs in these kinds of syncs, fixing data mappings in HotWax can allow you to successfully complete a sync with NetSuite even after a failure.

Here are the flows which use an attribute-based sync when exporting data to NetSuite:

- Customer Sync
- Order Sync

**Time-based sync**

All other synchronizations with NetSuite use a time-based cursor to track which records have been synced with NetSuite. In this case, if certain records fail to import into NetSuite, they need to be manually corrected and retried to complete the sync.

Currently, there is only one flow that is time-based and uses the CSV import module in NetSuite:

- Inventory adjustments from Cycle Counts