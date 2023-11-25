# Unable to Schedule Job

If you are unable to schedule a job in the Job Manager application, and the job data is not appearing, it could be due to missing job draft data, missing job runtime data, or issues with the service in the OMS.

## Step 1: Verify Job Data in the OMS Backend

Access the instance web tools using this URL: [https://<instanceName>.hotwax.io/webtools/control/FindGeneric?entityName=JobSandbox](https://<instanceName>.hotwax.io/webtools/control/FindGeneric?entityName=JobSandbox).

## Step 2: Check Job Data

1. In the JobSandbox form, find the `Job Name` field.
2. Enter the job name you are attempting to schedule.
3. Move to the "Status Id" field and enter `SERVICE_DRAFT`.
4. Click the search button.

## Step 3: Verify Job Data 

If the job data is not found, it means it's missing, and you need to add it. Refer to the [forum post](https://forum.hotwax.io/t/setting-up-custom-job-data-in-hotwax-commerce-job-manager/126) for guidance on how to create and input job data.

## Additional Steps for Checking Service and Job Runtime Data:

In cases where the job draft data is available but scheduling issues persist, follow these steps:

## Step 4: Check Service Data

1. Locate the service name field in the job draft data.
2. Check if there is data in the service name field.
3. If not found, contact the HotWax Support team for assistance.

## Step 5: Check Job Runtime Data

1. Extract `runtime ID` from the job draft data.
2. Search for the `Runtime Data` entity and input the runtime ID in the "Runtime ID" field.
3. Click the search button.

### If Runtime Data is Missing:

If no runtime data is found, it is missing. Add runtime data from Webtools: Import/Export page using XML data. Refer to the [forum post](https://forum.hotwax.io/t/setting-up-custom-job-data-in-hotwax-commerce-job-manager/126) for guidance on how to input runtime data.

### If Runtime Data is Incorrect:

If runtime data is available, and the job is still not executing, the data is incorrect.

1. Edit the runtime record, scroll down to find `runtimeInfo`, and copy the text.
2. Remove rich text using tools like ChatGPT.
3. Replace the cleaned data in runtime info and update it.
4. Retry the job to check if the issue is resolved.

If the problem persists, contact support for further assistance.

By following these steps, you can ensure that the necessary job data is available, allowing you to schedule the job successfully in the Job Manager application.
