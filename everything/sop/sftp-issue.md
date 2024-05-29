
# Introduction
HotWax Commerce sends data with external systems by sending data files over an SFTP server. Various data flows exist between HotWax and other systems. This document will help you assist the client with the issue of not seeing the files on the SFTP location and the common issues around SFTP.

To know about different data flows with the external systems and the SFTP locations where Hotwax kept the file, refer to this [integration documentation](https://docs.hotwax.co/integration-resources/v/netsuite-integration/supported-integrations/salesorder/orderapproval).

### Steps to Assist a Client 

#### 1. Identify the Requested File
To begin resolving the issue, we first need to determine the specific file the client is referring to. Typically, clients provide the name of the file they cannot locate or mention that a particular feed has not been placed at the SFTP. 

#### 2. Access the SFTP server
To troubleshoot the issue, we'll need to access the SFTP server using the FileZilla application. If you haven't already, download FileZilla onto your machine using this [link](https://filezilla-project.org/).

Once FileZilla is installed, follow these steps to log in to the SFTP server and inspect the data files:

1. Retrieve the SFTP user credentials from the OMS 
   - Access the OMS and click on the hamburger menu.
   - Scroll down to the Settings section and click on it.
   - Find and click on the General option.
   - Scroll down the General Settings page to locate the FTP connection settings.
   - Copy down the SFTP user credentials.

2. Open FileZilla and use the obtained credentials to log in to the SFTP server.

3. Once logged in, navigate through the directories to locate the relevant feed based on the information provided by the client. You can use the integration document for the SFTP location. Here is an example of file path looks like: `/home/{sftp-username}/netsuite/customer/export`.

When a file is found in the SFTP archive folder, it indicates that the external system has successfully consumed the file. Communicate this to the client and attach the file and a screenshot for their reference. Files not successfully consumed by the external system will be in the failed folder.

### Possible Reasons for Files Not Being Exported

There may be various reasons for files not being exported and placed by HotWax on the SFTP. The reasons should be as follows:

1. **Failed Export Validations**
   - The data may not pass the required export validations and therefore doesn't get placed at the location for the external system. In this case, contact the integration team for assistance.

2. **Integration Platform Issue**
   - The flow in [Napita-integration](https://docs.hotwax.co/deployment-and-configurations/v/napita) platform which handles placing files on the SFTP, may not be running. Please check with the integration team to ensure the flow is running properly. Alternatively, you can follow these steps:
     - Right-click on the canvas of the processor group in Napita.
     - Check the status of the processor.
     - If the processor is enabled, you will see an option to `Stop`.
     - If the processor is not enabled, you will see an option to `Start`.
     These steps will help you determine whether the flow is currently enabled. 

After exploring all possible reasons why the file isn't making it to the SFTP, and confirming it's not on our end, we can take the next step by kindly asking the client for their SFTP credentials to delve deeper. We can use the following templated reply:

> Could you please share the SFTP credentials you're using so that we can trace the root cause of the issue?

This allows us to log in to the SFTP server with their credentials and identify the root cause of the issue. Sometimes, the problem arises because the credentials they are using are outdated, preventing them from accessing the files. In such cases, we can provide them with new credentials.

Additionally, there are instances where users are unable to upload or download files from the SFTP server due to insufficient permissions. To resolve this, we can contact the admin team to check and adjust the users' permissions as needed.
