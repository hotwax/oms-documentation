# Update OMS version (OMS)

Updating OMS is vital for security, performance, and efficiency. The latest versions often include essential security enhancements, safeguarding your business and customer data. Performance improvements lead to smoother operations, faster order processing, and enhanced user experience. Regular updates also address bugs, preventing disruptions in your order management process. In essence, OMS updates are a simple yet crucial step in maintaining the integrity and effectiveness of your business processes.

## How to update OMS to the latest release version?

Please check the current release version of your Order Management System (OMS) before you initiate any updates. This practice helps anticipate potential challenges, especially when transitioning from a significantly older version to a new one. Such updates may require manual data input and adherence to specific SQL processes. Failing to follow the correct procedures during the OMS update could lead to version management conflicts. 

To check your OMS current release version, follow these steps:

1. Go to your OMS instance: https://{instanceName}.hotwax.io
2. Open the Hamburger menu and scroll to the bottom of the page.
3. Click on the 'Powered by HotWax Commerce' icon to access the Dashboard.
4. In the Dashboard, you'll find a table displaying the current release versions for `oms` and `omssetup`:

| Name       | Branch                |
|------------|-----------------------|
| `oms`        | currentReleaseVersion |
| `omssetup`   | currentReleaseVersion |

The `oms` version reflects your current OMS version. Compare it with the version you intend to deploy for accurate version management. This step ensures a seamless and informed update process.

### Updating from a Recent Version to a New Version:

1. **Log into Jenkins:**
   - Link: [https://jenkins.hotwax.co/](https://jenkins.hotwax.co/)
   - Use your credentials for authentication.

2. **Navigate to `oms-env-setup`:**
   - Click on the `oms-env-setup` option from the available segments.

3. **Access `oms-update` on the OMS update page:**
   - Locate and click on the `oms-update` section.

4. **Initiate Build with Parameters:**
   - Select "Build with parameters" from the side menu.

5. **Complete the Form:**

| Information            | Input                                                                                          |
|------------------------|------------------------------------------------------------------------------------------------|
| Host                   | Instance name for the update.                                                                  |
| Domain                 | hotwax.io                                                                                      |
| ECR Image              | 289432782788.dkr.ecr.us-east-1.amazonaws.com/omscoreimage                                    |
| ECR Image Tag          | Select the next release tag.                                                                   |
| Build Command          | `ofbiz --load-data readers=ext-upgrade` (for updating from recent to latest version),<br> `build` (for updating from older to latest version) |
| Run Copy Image         | NO                                                                                             |
| Solr Version           | Latest version                                      |
| Plugins                | Any additional plugins to be added to the instance.                                            |

6. **Initiate Build:**
   - Click on the "Build" button to execute the update process.

7. **Verify your Machine:**
   - Wait until the processing is finished, and the box in the stage view turns green.
   - In the stage view, red box colors indicate an error. Report any errors to the system admin team.

8. **Check Deployment in Build History:**
   - Go to the "Build History" screen.
   - Click on the instance, generally the latest record, to open the latest record.
   - Click on "Console Output" to open the output.
   - Verify the presence of a "Finished: Success" message at the bottom.

9. **Verify System Online:**
   - Check your instance; it should be online and working.
   - If not, refresh your window. If a login screen appears, your system is now online.
   - Open the Hamburger menu and scroll to the bottom of the page.
   - Click on the 'Powered by HotWax Commerce' icon to access the Dashboard.
   - In the Dashboard, find a table displaying the current release versions for `oms` and `omssetup`, reflecting the new updated version.

Certainly! Here's the information in a structured Markdown code snippet:

### Updating from an Older Version to a New Version:

**1-9. Follow the Steps for Updating from a Recent Version to a New Version:**
   - Log into Jenkins.
   - Navigate to `oms-env-setup`.
   - Access `oms-update` on the OMS update page.
   - Initiate build with parameters.
   - Complete the form with the following information:

| Information        | Input                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------|
| Host               | Instance name for the update.                                                                  |
| Domain             | hotwax.io                                                                                      |
| ECR Image          | 289432782788.dkr.ecr.us-east-1.amazonaws.com/omscoreimage                                    |
| ECR Image Tag      | Select the next release tag.                                                                   |
| Build Command      | 'build' (for updating from older to latest version)                                           |
| Run Copy Image     | NO                                                                                             |
| Solr Version       | Confirm the ready-to-deploy version from the Admin team.                                      |
| Plugins            | Any additional plugins to be added to the instance.                                            |

   - Initiate the build.
   - Verify your machine.
   - Check deployment in build history and ensure the system is online.

**10. Update Data:**

{% hint style="warning" %}
Neglecting to update the upgrade steps and SQL may lead to version management conflicts. Therefore, it is essential to meticulously update both the upgrade steps and SQL to align with the new version.
{% endhint %}

   - Go to [webtools](https://{instanceName}.hotwax.io/webtools).
   - Refer to [this document](https://docs.hotwax.co/deployment-and-configurations/additional-resources/omsreleases) for the chosen release version and upgrade steps.
   - Copy the data from the document.
   - In web tools, go to Import/Export > XML data import > Complete XML document.
   - Enter the data between `<entity-engine-xml>{put the data here}</entity-engine-xml>` and click Import Text.
   - Return to the document, find Update SQL, click on the links, and open webtools in a new tab.
   - On the Main page, go to ENTITY ENGINE TOOLS > Entity SQL Processor > Select Group as org.apache.ofbiz.
   - Add the SQL Commands as per the document and click Send.

**11. Repeat the Update Process:**
   - Continue the process iteratively until the OMS is on the latest version.
   
