---
description: Create and activate the shop-specific Shopify batch Order Sync job.
---

# Set up Shopify Order Sync

Shopify Order Sync imports scheduled batches of updated orders into HotWax Commerce. Configure the shop-specific job only after the Shopify connection, Product Store, and order mappings are ready.

You need `COMMON_ADMIN` permission to create, edit, or activate the job. Other users can review the setup.

## Review prerequisites

1. Open the **Company App**.
2. Go to `Shopify`.
3. Select the connection.
4. Open `Order Sync`.
5. Click `Configure Order Sync`.
6. Confirm the Shopify shop and linked Product Store.
7. Review `Order mappings`.
8. Resolve warnings for sales channels, payment methods, and shipping methods.

## Create the batch job

When the connection lacks a shop-specific job:

1. Review the standard job and inherited schedule.
2. Click `Create paused Order Sync job`.
3. Confirm that the new job shows `Paused`.

Company clones only the standard Order Sync job and leaves historical-order import unchanged.

## Review the schedule

1. Review the inherited schedule and timezone.
2. Edit the schedule only when the implementation plan requires a different cadence.
3. Save the schedule.
4. Confirm the next run time.

## Activate Order Sync

Activate the job only after the mappings and schedule are approved.

1. Review the setup summary.
2. Confirm that `Order mappings` shows `Ready` or that each warning has an approved exception.
3. Confirm that the job is still paused.
4. Click the activation action.
5. Confirm that `Activation` shows `Active`.
6. Return to the Order Sync dashboard and monitor the first batch.

See [Manage Shopify Order Sync](manage-shopify-order-sync.md) for monitoring and recovery.
