# Setup SFTP

## Configure SFTP Server

From the Home dashboard, select the `Setup` link located in the top-right corner.
Under the "Custom" section, choose `SFTP Configuration` and click the `New` function.

## Add a New SFTP Server Configuration

In the "SFTP Servers" section, click the "New SFTP Server" button.

## Define SFTP Server Details

Choose the "Preferred SFTP Configuration" form by default.
Complete the details in the CUSTOM FORM.

{% hint style="danger" %}
Setting up a default directory is required for the SFTP connection to work. Please obtain this from the system admin team.
{% endhint %}

| Field                      | Details                                                        | Required |
|----------------------------|----------------------------------------------------------------|----------|
| SFTP GUID                  | Unique identifier for the SFTP configuration in NetSuite.      | Yes      |
| SFTP SERVER                | The address or domain of the SFTP server.                     | Yes      |
| USER ID                    | The username associated with the SFTP user.                   | Yes      |
| PORT                       | The port number used for SFTP communication (default is 22).  | Yes      |
| HOST KEY                   | Authentication key provided by the SFTP server.               | Yes      |
| DEFAULT FILE DIRECTORY     | The default directory on the SFTP server for file operations. Example: /home/<instanceName>-sftp/netsuite/ | Yes      |
| TEST FILE FOR SFTP CONNECTION | A sample file used to test the connection with the SFTP server. | No       |
| TEST DOWNLOAD FOLDER ID    | Identifier for the folder used in testing download operations.| No       |
| REPORT DATE TIMEZONE       | Timezone setting for reporting purposes.                       | No       |
| RETRY FILES FOLDER ID      | Identifier for the folder where retried files are stored.      | No       |
| SCRIPT ID                  | Identifier for any associated scripts or automation.           | No       |


{% hint style="warning" %}
After entering the required details, click the "Save" button.
{% endhint %}


# Obtaining SFTP GUID

## Request SFTP Key Generation:
- Ask the administration team to generate an RSA private key for the SFTP server in PEM format and they will share a file containing the generated key with you.

## Upload Key to NetSuite:
   - Navigate to Setup > Company.
   - Click on "Keys."
   - Select "Create New" and name the file "sftp-private-key."
   - Provide a random ID.
   - Go to the "File" segment and upload the PEM file received.
   - Wait for the upload process to complete.

## Save and Retrieve SFTP GUID:
   - Save the configuration.
   - Now, in the ID column, you will find the generated key (e.g., custkey999) representing the SFTP GUID.

# Create SFTP locations on the SFTP server

To enable SFTP communication, it is necessary to define SFTP locations where NetSuite will put the required files in the specified format. To set up these SFTP locations, you can go ahead and execute a SuiteScript added below in NetSuite, which will generate the necessary locations on the SFTP server. 

```
HC_SC_CreateSFTPDirectory.js
```

