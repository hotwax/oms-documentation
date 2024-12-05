---
description: >-
  Operations teams can now easily create and assign multiple cycle counts to
  different locations at once using the new bulk import feature.
---

# Bulk Upload Cycle Count

## Bulk Import Cycle Count

The **Bulk Import** functionality in HotWax Commerce’s `Cycle Count` App is designed to simplify the process of creating and assigning cycle counts across multiple facilities and products. This feature is essential for large retailers who regularly perform cycle counts across various store locations to maintain accurate inventory records.

Efficiently managing cycle counts is critical for keeping inventory data consistent between physical and system counts, preventing stock discrepancies, and ensuring smooth operations. The bulk import capability allows users to create multiple cycle count requests simultaneously by uploading a CSV file, eliminating the need to create individual requests for each product or location. This reduces manual effort, minimizes errors, and enhances operational efficiency, especially for retailers with large store networks.

For example, if a retailer needs to conduct inventory audits for several products across 30 stores, instead of manually creating 30 separate cycle count requests, they can upload a single CSV file. This capability ensures that operations teams can manage inventory counts faster, stay on schedule, and plan audits with greater ease.

## Step-by-Step Usage Instructions:

Here’s how users can utilize the Bulk Import feature within the `Cycle Count` App for seamless cycle count management:

**1. Access the Cycle Count App**

* Navigate to the `Cycle Count` App from the HotWax Commerce launchpad.
* Log in using your credentials.

**2. View Draft Cycle Counts**

* Upon logging in, the default screen displays all **Draft Cycle Counts** that have not yet been assigned to a facility. Here, you can view existing cycle counts in progress.

**3. Create a New Bulk Cycle Count**

* In the bottom right corner, click the `+` button to initiate a new count.
* Two options will appear: one for a single cycle count and another for bulk cycle counts. Select the `bulk cycle count` option (icon with multiple pages).

**4. Upload the CSV File**

* This will open the `Bulk Upload` page.
* Click on the `Upload` button and select the prepared CSV file containing the cycle count data.

**5. Map CSV Fields to HotWax Fields**

When using the Bulk Import feature in HotWax Commerce’s `Cycle Count` App, the system enables users to map fields from their uploaded CSV file to the relevant fields within HotWax Commerce. This flexible mapping process allows retailers to customize their cycle count creation based on their unique inventory and operational needs. Additionally, once mappings are completed, users can **save these mappings for future uploads**, eliminating the need to reconfigure them every time, further streamlining the process.

**Required Fields:**

* **Count Name**: Assign a unique name to each cycle count to differentiate between them. For example, cycle counts for different product categories (e.g., Jackets, Shirts) should have distinct names. Each count can also have different due dates if needed, helping store associates prioritize tasks accordingly.
* **Product SKU**: Enter the SKUs (Stock Keeping Units) for the products that need to be counted. SKUs are critical for identifying specific items in inventory. Ensure no duplication of SKUs within a single count to avoid errors or confusion during the audit process. This field is crucial for inventory accuracy, as the SKU forms the backbone of product identification in the system.

**Optional Fields:**

* **Facility**: Operations managers can map specific facilities where the cycle counts will take place. If this information is not yet available, you can leave this field unmapped during the initial CSV upload. The counts will remain in the draft stage, allowing users to assign facilities later once the data is ready. This flexibility ensures that inventory counts can be initiated without delay, even if facility assignment is still pending.
* **Status**: Choose the status of the cycle counts during the import. For instance, you may set the counts as **Draft** if facilities have not yet been assigned, or as **Assigned** if facilities have already been determined and the counts are ready for execution. Setting the status upfront helps operations teams track the progress of cycle counts and manage their workflows effectively.
* **Due Date**: Assign a due date to provide a timeline for store associates to complete their cycle counts. This optional field allows operations managers to enforce deadlines and ensure that all inventory audits are completed within a set time frame, helping to maintain an organized and consistent approach to inventory control.

**Additional Details:**

* **Saving Mappings for Future Use**: Once you have mapped the CSV fields to the corresponding HotWax fields, you can save these mappings for future use. This feature ensures that repeated cycle count uploads—especially for recurring tasks across multiple stores—can be handled efficiently without needing to redo the mapping every time. By saving mappings, retailers can quickly initiate bulk cycle counts, further reducing manual input and enhancing productivity.

This comprehensive field mapping process is crucial for customizing cycle counts to match the specific needs of retailers, and the ability to save these configurations increases efficiency for future inventory management tasks.

**6. Confirm and Upload**

* After mapping the necessary fields, click the `Upload` button.
* Confirm the `upload` in the popup window.

**7. Review Uploaded Cycle Counts**

* Once processed, the uploaded cycle counts will appear at the bottom of the import screen.
* These counts will appear in the `Draft` section until they are assigned to specific facilities.

**8. Canceling Uploaded Counts**

* If any uploaded cycle counts have not been processed, users can cancel them by clicking the `trash-bin icon` next to the corresponding count.

This standard bulk import feature streamlines cycle count scheduling and management, allowing retailers to maintain accurate and timely inventory records with minimal manual input.

<figure><img src="https://github.com/user-attachments/assets/a4541e72-b58c-4ede-8c50-e83b4827dc50" alt=""><figcaption></figcaption></figure>
