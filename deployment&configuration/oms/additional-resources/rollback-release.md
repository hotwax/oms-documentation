# Rollback OMS to old release version

{% hint style="danger" %}
For patch releases, rollbacks are useful for issue resolution. However, it's strongly discouraged to attempt major release rollbacks without developer assistance. Major releases have complex changes and dependencies that may not be easily reversible. Doing so without expertise can result in unexpected complications and system instability. Seek developer guidance for a safer approach. 
{% endhint %}

Rolling back a release is crucial in software development, offering a safety net for unforeseen issues. Despite thorough testing, unexpected bugs or performance issues can occur. The ability to quickly revert to a previous version ensures minimal downtime, preserving a positive user experience and preventing potential financial and reputational losses. 

## How to rollback OMS to the older release version?

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
| Host                   | Instance name for the update                                                                |
| Domain                 | hotwax.io                                                                                      |
| ECR Image              | 289432782788.dkr.ecr.us-east-1.amazonaws.com/omscoreimage                                    |
| ECR Image Tag          | Select the (old release tag)[https://docs.hotwax.co/deployment-and-configurations/additional-resources/omsreleases]                                                                  |
| Build Command          | `build` |
| Run Copy Image         | NO                                                                                             |
| Solr Version           | Latest version                                      |
| Plugins                | Leave empty                                           |

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
   - In the Dashboard, find a table displaying the current release versions for `oms`, reflecting the older version.

10. **Rollback SQL Upgrades:**
    - If any SQL upgrades were executed, it's essential to revert these changes to ensure the system returns to its previous state and functions seamlessly.

11. **Undo Upgrade Steps:**
    - If you've executed any specific upgrade steps that led to data creation, it's necessary to reverse those steps by deleting the associated data. This step is crucial to maintain the system's previous state.

12. **Manually Remove Upgraded Data:**
    - Should there be any additional data introduced during the upgrade process, it's recommended to manually delete this data using Webtools. This ensures a clean and accurate representation of the system, aligning with its prior configuration.




