# Scheduled Job Failed

You scheduled a job, but it failed. This issue often occurs when the configuration data in the OMS is incorrect.

## Step 1: Verify Configuration Data

1. Search for the job on the pending page in the Job Manager.
2. You will find the job card with all scheduled job instances.
3. Pick any instance and open its details.
4. In the details, find the `Custom Parameters` option and click on it to view all custom parameters.

## Step 2: Verify Custom Parameters

1. Verify the custom parameters against the expected values for the service.
2. You can find the expected custom values in the setup manual for the process you are troubleshooting.
3. If the parameters are incorrect, proceed to the next step.

## Step 3: Disable the Job

1. Find the job in the category pages and open its detail page.
2. Disable the job. The custom parameters of a job cannot be edited while it’s running.

## Step 4: Correct Incorrect Parameters

1. Click on "Custom Parameters" and correct the parameters.
2. Schedule the job again.

## Step 5: Check Job Status

After the scheduled time, check the job to see if it has successfully completed. If the job fails, contact the HotWax support team for further assistance.

By following these steps, you can address configuration data issues that may lead to a scheduled job failure. If the problem persists or if you have additional questions, reach out to the HotWax support team for prompt assistance.
