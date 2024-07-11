# Troubleshooting Data Import Issues in HotWax Commerce

To import data into HotWax Commerce, a scheduled job retrieves the data from an SFTP location and places it under a specific configuration. Issues can occur if there is an incorrect "Configuration ID" in the job or if the "SFTP location" is missing in the configuration. These issues can prevent the job from picking up the file and importing it into the system.

## Scenario 1: Incorrect Configuration ID in the Job

In HotWax Commerce, each scheduled job is associated with a specific "Configuration ID" that determines the job's settings and execution parameters. If the Configuration ID is incorrect, the job will fail to execute properly, preventing data from being imported into the system. This issue often arises during initial setup or when configurations are manually updated.

You can refer to our [troubleshooting guide](https://docs.hotwax.co/documents/v/retail-operations/workflow/job-manager/troubleshooting/jobfailed#reason-1-job-configuration-errors) to resolve job configuration errors.

## Scenario 2: Missing SFTP Location in the Configuration

HotWax Commerce relies on data being retrieved from specified "SFTP locations". Each job must have a correctly configured "SFTP path" where it can find the files to import. If the "SFTP location" is missing or incorrectly configured, the job will not be able to locate the files, leading to import failures. This issue can occur due to changes in SFTP credentials, path updates, or errors during configuration.

**Resolution**

**Finding the SFTP Credentials in OMS:**
1. Log in to HotWax Commerce with your user credentials.
2. Navigate to the `Settings` section via the `hamburger menu`.
3. Click on the `General` page and navigate to the `FTP Connection Settings` section.
4. Copy the SFTP credentials ("host", "username", "port", and "password").

**Finding SFTP Path for Data Import in HotWax:**
1. Log in to HotWax Commerce with your user credentials.
2. Navigate to the `Settings` section via the `hamburger menu`.
3. Click on `Data Manager Configurations` to go to the `Data Manager Configurations` page.
4. Search for the job name; the SFTP path locations are listed below the job name.

**Connecting to the SFTP Server:**

**Download and Install FileZilla:**
1. Download and install `FileZilla` from the official website.

**Accessing SFTP with FileZilla:**
1. Open `FileZilla`.
2. Click on `File` in the top menu, then select `Site Manager`.
3. Click on `New Site` and enter a name for the connection.
4. Input the "Host", "Username", "Port", and "Password" obtained from HotWax Commerce settings.
5. Click `Connect` to establish the connection.

**Navigating Remote Site:**
1. After connecting, you’ll see the `Remote Site` section in `FileZilla`.
2. Navigate through the directory to locate the path where your data needs to be transferred.
3. Verify if the files that need to be imported exist at that location. If not, verify the correct path from the remote site where the file exists.
4. Once you’ve found or created the desired path, right-click on it and select `Copy`.

**Updating the SFTP Path in HotWax Commerce:**
1. Navigate to the `Data Manager Configuration` page in HotWax Commerce.
2. Search for the job, then click on the `pencil` icon to update the configuration.
3. Paste the correct import path and click `Update` to save the configuration.

By following these steps, you can diagnose and resolve issues related to incorrect Configuration IDs and missing SFTP locations in HotWax Commerce, ensuring successful data imports.
