#  Inventory Auditing

**Scenario:** Inventory Not Synced from HotWax Commerce to Shopify

Sometimes retailers may encounter inventory disparities between HotWax Commerce and Shopify Inventory. This discrepancy could result in inventory appearing out of stock in Shopify despite being available in HotWax Commerce.

## Steps to Troubleshoot

### Verify in HotWax Commerce

1. **Check Job Status:**

   - Navigate to the `HotWax Commerce Job Manager App`.
   - Locate the job named `Upload recent inventory change`. This job is responsible for updating all inventory changes in Shopify that have occurred in HotWax Commerce since the last time the job ran.
   - Ensure that the job is running. If not scheduled, schedule the job according to your preferred frequency.
   - You can also execute the `Hard Sync` job in HotWax Commerce. This job updates inventory for all the products irrespective of the inventory changes, eliminating any discrepancy between HotWax Commerce and Shopify.

2. **Inspect Inventory Configurations:**

Retailers can set rules such as safety stocks, thresholds, and exclude facilities to prevent overselling on Shopify. Follow these steps to verify the online ATP of the inventory that is being synchronized between HotWax Commerce and Shopify:

   - In HotWax Commerce, Go to `Products` > `Find Products` > `Product Detail page` > `Product Inventory View` page.
   - Check inventory configurations, including safety stocks, thresholds, reserved inventory, and excluded facilities.
   - Verify the `online ATP` of products on the inventory dashboard, if the `online ATP` is 0 then the product will appear out of stock in Shopify.

### Verify in Shopify

1. **Check Online ATP in Inventory Dashboard:**
   - Navigate to Shopify Admin Panel.
   - Go to `Products` > `Product detail` page.
   - Click on the variant of the product that requires inventory verification.

2. **Verify Inventory Adjustment History:**
   - Within the variant's `inventory` section, click on the `adjustment history` button.
   - Examine historical inventory adjustments. Ensure they reflect recent changes.
   - If historical changes show old records or there are no inventory records, go to the `HotWax Commerce Job manager App` and run the `Hard Sync` job.
   - Wait for a few minutes and revisit the inventory history on Shopify.

3. If the inventory is still not updated, and discrepancies persist, contact the HotWax Commerce support team for assistance.
