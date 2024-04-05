---
description: >-
  Learn how HotWax Commerce seamlessly imports orders from Shopify, ensuring
  users have access to real-time order information.
---

# Order Import

HotWax Commerce periodically checks for new orders on Shopify, ensuring that users have access to the most up-to-date order information.

Furthermore, you can utilize features such as scheduled jobs for importing new orders and updating order statuses. The Job Manager app allows users to set up automated tasks, such as importing new orders at specified intervals and updating order statuses based on predefined [parameters](https://docs.hotwax.co/user-guides/workflow/job-workflows/orders). This ensures that orders are processed promptly and accurately.

**Step-by-Step Usage Instructions:**

1. **Setting Up Scheduled Job for Importing Orders:**
   * Log in to your HotWax Commerce user account and navigate to the Job Manager app.
   * Select the `Orders` option from the menu, Navigate to the Import Orders job to create a new scheduled job for importing orders.
   * Configure the job settings, including the frequency of import (e.g., daily, hourly) and any specific parameters required for the import [process](https://docs.hotwax.co/user-guides/workflow/job-workflows).
   * Save the job settings to activate the scheduled import of orders from Shopify to HotWax Commerce.
2. **Automatically Approving Orders:**
   * Set up a scheduled job named `Approved Orders` within the Job Manager app.
   * Configure the job to check the approval status of Shopify orders based on parameters defined by Shopify Merchants.
   * Save the job settings to enable automatic approval of orders in HotWax Commerce.
3. **Updating Orders:**
   * Create a scheduled job for updating orders within the Job Manager app.
   * Configure the job settings to run at specified intervals to ensure that order information remains current.
   * Save the job settings to activate automatic updates for orders in HotWax Commerce.

[For more information read here](https://docs.hotwax.co/integration-resources/how-are-orders-downloaded-from-shopify-to-hotwax-commerce/order-download)
