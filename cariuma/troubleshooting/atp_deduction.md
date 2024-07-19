---
description: >-
  Discover how to resolve issues with Available to Promise (ATP) not being
  deducted as expected from Purchase Orders in Hotwax Commerce.
---

# ATP not deducting

Available to Promise (ATP) is not deducted as expected from Purchase Orders. This may be due to a discrepancy in order import, which could be caused by:

## Scenerio

1. Import job not being scheduled.
2. The import job failed to run.
3. Records failing even after a successful job run.

### Steps to troubleshoot

**Scheduling Order Import Job**

The order import job responsible for importing new orders is not scheduled, thereby causing the PO ATP to remain unaffected. To resolve:

1. Go to [Job Manager App](https://job-manager.hotwax.io/) > `Orders` page > `Import` section.
2. Find a `New Orders` job.
3. Check if it is disabled,then configure it with the required parameters like `Schedule` , `Frequency` and `limit` then click `save changes` to enable it.
4. If it is enabled, proceed with the steps below.

**Check if the Import Job Failed to Run.**

If the ATP issue persists, it might be due to job failure, possibly caused by a server error. To resolve:

1. Go to [Job Manager App](https://job-manager.hotwax.io/) > `Pipeline` page > click `History` segment.
2. In the top right corner, click on the filter icon and check the `Failed`<img src="Icons/check-box.png" alt="external link icon" data-size="line"> checkbox under the status column.
3. Check if the `order import` job has failed.
4. If found, click on the `Failed` Badge for that job to see the error message.

**Diagnose for Failed records after successful job run**

If the job runs successfully but ATP for the Purchase Order (PO) is still not updated, check for any records that failed to import. To find failed records:

1. Go to your `OMS instance`.
2. In the hamburger menu, navigate to `MDM` dropdown > click `EXIM`.
3. Under the `Shopify Jobs` section, in the MDM column, click `Shopify Orders MDM`.
4. Check for any failed records in the `Import Result` section.
5. Download the Error Records JSON file and search for the error message in `Event_Message` that describes the issue.
6. If the event message describes an issue that can't be diagnosed, communicate with HotWax Commerce for further assistance.
