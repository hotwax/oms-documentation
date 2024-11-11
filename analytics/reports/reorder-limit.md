# Introduction

This document details the Reorder-Limit feature, allowing clients to automatically generate reports for items requiring inventory replenishment.The feature utilizes a pre-configured `Reorder Channel` with customizable threshold rules. Clients can adjust these rules to define the minimum inventory level **(reorder limit)** at which they'd like to be notified for stock replenishment.

## Setting Reorder Limits




Here's how to set the reorder limit for products by tag:

1. Navigate to **Launchpad** > **ATP App** > **Threshold** page.
2. Click the **"+"** symbol to create a new rule.
3. Enter a descriptive name for the rule, such as "Reorder Limit - [Tag Name]".
4. In the **Threshold** field, enter your desired reorder level (e.g., 5).
5. Under **Channels**, select the **Configuration Facility**.
6. Under **Products by Tag**, use the filter options to include or exclude products based on their tags.
7. Click **Save** to create the rule.
8. Schedule the rule to run daily at midnight. You can also click **Run Now** for immediate execution from the Job scheduler pinned on the top of the page.

### Additional Steps (Optional)

1. Navigate to **Launchpad** > **Job Manager App** > **Inventory** page.
2. Locate the **Import Product Facility** job under "More jobs." 
3. Schedule this job to run every 3 hours, or click **Run Now** for immediate execution. (This ensures data updates)
4. In the same app, navigate to the **Miscellaneous** page and schedule the **Process Bulk Import Files** job to run every 15 minutes. You can also click **Run Now** for immediate execution.

### Setting Different Reorder Limits (Optional)

If you require different reorder limits for various product categories, create separate rules using the same process mentioned above. Utilize the `Products by Tag` section for filtering products within each rule.

## Verifying Reorder Limits

After setting the reorder limits, verify the configuration by navigating to the product's inventory details within the OMS product page. You should see a new reorder channel with the corresponding reorder limit threshold. Products belonging to the designated tag and having an Available-To-Promise (ATP) level that falls below this reorder channel threshold, along with no upcoming purchase orders (POs), will be considered eligible for inclusion in the Reorder Eligible Products report.

## Report Delivery

The scheduled report will be delivered to your inbox at a predetermined time slot, assuming there are products meeting the reorder criteria. The report frequency can be adjusted upon request.