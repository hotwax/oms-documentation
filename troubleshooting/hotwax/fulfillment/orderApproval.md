# Orders not approved and brokered

Orders may not be showing up in the fulfillment app after being imported into the OMS, check if they are being approved as expected.

If orders are not approved in the OMS, they will not be processed further for allocation and fulfillment. The conditionals of order approval may be specific to each instance depending on the rules configured by the retailer.

Out of the box, if “Auto Approve” is enabled, HotWax Commerce approves orders that have been paid in full. If your OMS doesn’t have custom order approval rules, and orders should be approved automatically, make sure this setting is enabled.

## Custom Order Approval
If your OMS instance has a custom order approval workflow, it will be enabled from the Orders page in the Job Manager app. Make sure this job is enabled and the SFTP configuration is set to `IMP_APR_SALES_ORD` and the file path for this configuration in the OMS is set to `/home/{SFTP-USER}/hotwax/ApproveOrders`.

After order approval jobs are enabled from the Job Manager app, orders can take up to 60 minutes to be approved from the custom batch process workflow. Changing the frequency of the order approval job will not affect the duration you have to wait for an order to be approved.

If orders are still not approved after waiting for 60 minutes, you should check Data Manager logs. You can download recently produced files to see if the affected Order ID is present in the files that were recently processed.

**Link to order approval logs**
```
https://{instance-name}.hotwax.io/commerce/control/ImportData?configId=IMP_APR_SALES_ORD
```

## Verify SFTP Files

If the order approval job is enabled and files are not appearing in the Data Manager Logs, check if the files are being produced and placed at the right SFTP location.
Log into SFTP and navigate to folder:

```Hotwax > ApproveOrders```

Select the file by date and time, post order creation and download to verify if the order ID exists in the file.
If the order ID does not exist in the file, look for instance specific solutions.