---
description: >-
  Learn how to troubleshoot failed job issues in the HotWax Commerce Job Manager
  app.
---

# Job Failed

A scheduled job might fail in HotWax Commerce due to various reasons, such as incorrect parameter settings, outdated information, or conflicts within the system. 

## Identify Failed Jobs Reason

Users can swiftly identify the reasons for a failed job from the `pipeline` page of the `Job Manager` app. This feature allows user to pinpoint the reasons behind failed jobs, facilitating easy troubleshooting of errors. Here's how you can find out the reason behind the failed jobs:

1. Navigate to the Pipeline page in the job manager.
2. Within the pipeline page, click on the History tab.
3. Apply a filter by clicking the checkbox against the Failed option to display only failed jobs.
4. Click on the Failed badge to view the reason for the failed job.

{% embed url="https://youtu.be/teFPQTKV-Pc" %} Video: Identify Failed Jobs Reason {% endembed %}

**Common Reasons for Job Failure:**

### Reason 1: Job Configuration Errors

Scheduled jobs can fail due to incorrect parameter settings. If users are facing any issues regarding job configuration, they can follow these steps to rectify the problem:

**Step 1: Verify Configuration Data**

1. Search for the job on the pending page in the Job Manager.
2. You will find the job card with all scheduled job instances.
3. Pick any instance and open its details.
4. In the details, find the `Custom Parameters` option and click on it to view all custom parameters.


**Step 2: Verify Custom Parameters**

1. Verify the custom parameters against the expected values for the service.
2. You can find the expected custom values in the setup manual for the process you are troubleshooting.
3. If the parameters are incorrect, proceed to the next step.


**Step 3: Disable the Job**

1. Find the job in the category pages and open its detail page.
2. Disable the job. The custom parameters of a job cannot be edited while it’s running.

**Step 4: Correct Incorrect Parameters**

1. Click on "Custom Parameters" and correct the parameters.
2. Schedule the job again.


**Step 5: Check Job Status**

After the scheduled time, check the job to see if it has successfully completed. If the job fails, contact the HotWax support team for further assistance.

By following these steps, you can address configuration data issues that may lead to a scheduled job failure. If the problem persists or if you have additional questions, reach out to the HotWax support team for prompt assistance.


### Reason 2: Errors due to Shopify Integration Issue

Shopify integration issues may arise if Shopify experiences downtime during the day, leading to job failures reliant on accessing its API calls. These failures can be attributed to internal errors within the Shopify platform.

If you encounter any issues with Shopify integration, you can manually run the job by clicking on the `Run Now` button or wait for the next scheduled job to resolve the problem.


### Reason 3: Errors due to Semaphore Issues

In job scheduling systems, a semaphore could be used to manage the allocation of resources (like CPU time, memory, or disk space) among competing processes or jobs. This ensures that resources are efficiently utilized and that no single job monopolizes 
Semaphore issues in job scheduling can lead to various consequences when a job fails. These include resource starvation, deadlocks, performance degradation, job abandonment, and system instability. These issues can result in failed or incomplete tasks, resource contention, and system-wide slowdowns, emphasizing the importance of proper monitoring and mitigation strategies.
If you encounter any issues with semaphore, you can manually run the job by clicking on the `Run Now` button or wait for the next scheduled job.


