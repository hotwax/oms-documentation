---
description: Resolve issues with missing pre-order tags in HotWax Commerce OMS for Shopify stores. Troubleshoot common problems like the absence, disabling, or failure of the `update preorder tags job`.
---

# Pre-Order & Back Order Tags 

Pre-orders are differentiated from standard orders in HotWax Commerce with the help of the pre-order tags, i.e. `HC:Pre-order` and `HC:Backorder`. HotWax Commerce with the help of a job automation applies these tags to all accepted pre-orders on Shopify store.

## Scenerio

If these tags are not present on imported pre-orders in HotWax Commerce OMS, then this issue may stem from the following:

1. The `update preorder tags job` does not exist in OMS.
2. The `update preorder tags job` is disabled.
3. The `update preorder tags job` is scheduled but getting failed.

### Steps to troubleshoot

**Firstly, select Shopify shop by following below steps:**

1. Open the [Job Manager App](https://job-manager.hotwax.io/).
2. Select the Shopify Shop from the Shop switcher in the bottom left.
3. Go to the `Pre-order` page and look for the job name `update preorder tags job` in the More section.
4. If not found, try the `Miscellaneous` page.
5. Still not found,then contact HotWax Support.

**If the job is visible then check for its configuration and scheduling. For this:**

1. If it is not scheduled then, configure it with the required parameters like `Schedule` , `Frequency` and `limit` then click `save changes`.
2. After the job runs, verify the orders again for the PREORDER tag.
3. Repeat the same procedure if any other Shopify Shop is missing the tag.

**Check if Job is scheduled and tags are still not updated, it may be due to job failures. To resolve it:**

1. Go to the [Job Manager App](https://job-manager.hotwax.io/) > Pipeline page > click on the History segment.
2. In the top right corner, click on the filter icon and check the "Failed" checkbox under the status column.
3. Check if the `update order tags job` failed. If yes, click on the Failed badge for that job to see the error message.
4. If the event message describes an issue that can't be diagnosed, communicate with HotWax Commerce for further assistance.