---
description: >-
  Troubleshoot order synchronization between HotWax Commerce and Shopify for
  seamless order management.
---

# Order Sync

## Scenario: Orders Not Available in HotWax Commerce

### Steps:

1. **Verification on Shopify:**
   * Check Shopify to verify if the order is successfully placed by searching for the order ID. If not found, create the missing orders.
2. **Run Order Import Job:**
   * In the `HotWax Commerce Job Manager` app, navigate to the `orders` page and execute the `New Orders` job. This action ensures all recently created orders are imported into HotWax Commerce.

## Scenario: Order Available in Shopify and Not Available in HotWax Commerce

### Steps:

1. **Check Shopify Jobs Section:**
   * Go to the HotWax Commerce platform.
   * Access the `EXIM` section in the hamburger menu.
   * Navigate to the `Shopify Jobs` subsection.
2. **Review MDM Jobs:**
   * Under `MDM` (Master Data Management), locate the `Shopify Order MDM` job.
3. **Inspect Failed Record:**
   * Check the logs for this job to identify any failed records. You can also filter the failed records.
   * If failed records are found after the order has been placed till the `Import Order` job runs, open the associated file containing the JSON data. Match the Shopify order ID in the JSON data to verify it's the same order.
4. **Identify Errors in the Failed Records:**
   * Check for the event message in the failed logs. Orders may fail due to missing customer address or phone number.
   * Rectify any such issues on Shopify and download the orders again by navigating to `EXIM` > `Shopify Jobs` > `Order management` > `Import Shopify Orders`.
   * Enter the `order ID` and run the job to download the order again.

{% hint style="info" %}
If the job fails due to technical errors, use logs to find out the reason for failure, non-technical users can use AI tools to decipher error messages.
{% endhint %}

5. If the problem still persists, connect with the HotWax Commerce support team for further assistance.
---
## Scenario: Order Available in HotWax Commerce but stuck in Created state

If you observe an order stuck in the `created` status for an extended period, it's advisable to examine the sales channel associated with the order. If the order originates from the web sales channel, consulting the [`Order Approval`](https://docs.hotwax.co/user-guides/v/troubleshooting/hotwax-commerce/fulfillment/orderapproval) troubleshooting document can provide valuable insights into resolving the issue.

However, if the order originates from the POS channel, it's crucial to verify its status directly on Shopify. Occasionally, orders are marked fulfilled in Shopify after some time, but if the HotWax Commerce import job runs in the meantime, the order might be marked as fulfilled on Shopify but remain stuck in the `created` status within HotWax Commerce.

### Solution: Verification at Shopify

1. Log in to the Shopify admin portal and locate the specific order that requires updates.
2. Click on the Shopify Order ID to view orders on the Shopify Admin panel.
3. Review the order details to check the status of the order.
   - If the order is fulfilled in Shopify, follow these steps to mark the order `completed` in HotWax Commerce.

### Order Refresh in HotWax Commerce

1. Access the View Sales Order page in HotWax for the identified order. Click on the "refresh order" button to initiate the order refresh process.
2. When the refresh button is clicked, HotWax generates a new version of the order and cancels the current one.
3. Go back to the View Sales Order Page and select "Completed" and "Canceled" statuses from the order status filter dropdown.
4. Verify that the new version of the order is created in HotWax and that it reflects the correct status from Shopify. The old version of the order will be marked `canceled` with the tag `old version`.
