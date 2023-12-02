# Updating Order Management System (OMS)

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

### Updating from a recent version to a new version: 

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
   - Input the required information in the form:
     - **Host:** Instance name for the update.
     - **Domain:** hotwax.io
     - **ECR Image:** 289432782788.dkr.ecr.us-east-1.amazonaws.com/omscoreimage
     - **ECR Image Tag:** Select the next new release tag.
     - **Build Command:** 'ofbiz --load-data readers=ext-upgrade'
     - **Run Copy Image:** NO
     - **Solr Version:** Confirm the ready-to-deploy version from the Admin team.
     - **Plugins:** Any additional plugins to be added to the instance.

6. **Initiate Build:**
   - Click on the "Build" button to execute the update process.

7. **Verify your Machine:**
   - Wait until the processing is finished, and the box in the stage view turns green.
   - In the stage view, red box colors indicate an error. If this happens, please report the error to the system admin team.

8. **Check Deployment in Build History:**
   - Go to the "Build History" screen.
   - Click on the instance, generally the latest record, to open the latest record.
   - Click on "Console Output" to open the output.
   - Go to the bottom of the output and verify that you see a "Finished: Success" message.

9. **Verify System Online:**
   - Go to your instance; it should be online and working. 
   - If not, refresh your window, and if a login screen appears, your system is now online.
   - Open the Hamburger menu and scroll to the bottom of the page.
   - Click on the 'Powered by HotWax Commerce' icon to access the Dashboard.
   -  In the Dashboard, you'll find a table displaying the current release versions for `oms` and `omssetup`, reflecting the new updated version. 


























   
