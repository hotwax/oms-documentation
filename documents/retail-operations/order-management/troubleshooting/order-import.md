# Troubleshooting Synchronization Issues between HotWax Commerce and Shopify

## Objective:

This document provides a comprehensive guide to diagnose and resolve synchronization issues related to order import errors caused by special characters in notes and incorrectly formatted email fields. 

## Common Scenarios:

1. Order import fails in HotWax Commerce OMS due to special characters in the "Note" field. Such as 🌟 👍 😊 or miscellaneous characters.
2. Order import fails in HotWax Commerce OMS due to incorrectly formatted email addresses. Such as name#example.com or name@#example.com, etc.


**Common Error Messages:**

   - "Rollback called in Entity Engine SQLProcessor java.lang.Exception"
   - "E-mail address not formatted correctly, must be like: name@domain"


## Step-by-Step Troubleshooting Process:

### Verify If Issue Exists:
1. **Access OMS:**
   - Navigate to HotWax Commerce OMS and log in with your user credentials.
   - Go to the `MDM` page from the hamburger menu and click on `EXIM` > `MDM` > `Shopify order mdm`.
   - Check the Import Results in the `Shopify order mdm` page for any failed records.

2. **Check Shopify Logs:**
   - Review Shopify Plus logs or feeds for specific error messages related to the failed import.

### Diagnose the Issue:
1. **Identify Failed Order:**
   - Find the order that failed to import by looking at the error messages in OMS.

2. **Download JSON File:**
   - Append `/json` to the order URL in Shopify to download the JSON file of the failed order.

3. **Inspect "Note" and "Email" Fields:**
   - Open the JSON file and locate the note key. Check for any special characters, emojis, or miscellaneous symbols.
   - Locate the email key and verify that the email address follows the standard format (e.g., name@domain).

### Resolve the Issue:
1. **Remove Special Characters and Correct Email Format:**
   - Edit the JSON file to remove any special characters from the note field.
   - Correct the email address to adhere to the standard format.

2. **Save Edited JSON:**
   - `Save` the changes made to the JSON file.

3. **Re-import Order:**
   - If an error is resolved within the job execution time (generally 15 minutes), the import order job should automatically import the order.
   - Otherwise, manually import the order by navigating to `MDM / EXIM` > `MDM` > `Shopify orders mdm`,  select Shopify Config, upload your JSON or CSV file using the Upload File field, and run the job.

4. **Verify Successful Import:**
   - Ensure the order is successfully imported without errors.


By following these detailed steps, you can effectively troubleshoot and resolve synchronization issues between HotWax Commerce and Shopify, ensuring a smooth and error-free order import process.

{% hint style="success" %} This issue is handled in [Release 5.9.0](https://docs.hotwax.co/integrate-with-hotwax/oms-release-versions/omsreleases) {% endhint %}


