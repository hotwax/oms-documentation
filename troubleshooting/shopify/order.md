# Order Auditing

## Scenario: Orders Not Available in HotWax Commerce

### Steps:

1. **Verification on Shopify:**
   - Check Shopify to verify if the order is successfully placed by searching for the order ID. If not found, create the missing orders.

2. **Run Order Import Job:**
   - In the `HotWax Commerce Job Manager` app, navigate to the `orders` page and execute the `New Orders` job. This action ensures all recently created orders are imported into HotWax Commerce.

## Scenario: Order Available in Shopify and Not Available in HotWax Commerce

### Steps:

1. **Check Shopify Jobs Section:**
   - Go to the HotWax Commerce platform.
   - Access the `EXIM` section in the hamburger menu.
   - Navigate to the `Shopify Jobs` subsection.

2. **Review MDM Jobs:**
   - Under `MDM` (Master Data Management), locate the `Shopify Order MDM` job.

3. **Inspect Failed Record:**
   - Check the logs for this job to identify any failed records. You can also filter the failed records.
   - If failed records are found after the order has been placed till the `Import Order` job runs, open the associated file containing the JSON data. Match the Shopify order ID in the JSON data to verify it's the same order.

4. **Identify Errors in the Failed Records:**
   - Check for the event message in the failed logs. Orders may fail due to missing customer address or phone number.
   - Rectify any such issues on Shopify and download the orders again by navigating to `EXIM` > `Shopify Jobs` > `Order management` > `Import Shopify Orders`.
   - Enter the `order ID` and run the job to download the order again.

  {% hint style="info" %}
If the job fails due to technical errors, use logs to find out the reason for failure, non-technical users can use AI tools to decipher error messages.
{% endhint %}

5. If the problem still persists, connect with the HotWax Commerce support team for further assistance.
