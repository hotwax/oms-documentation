---
description: Configure NetSuite connection details and integration mappings in Company.
---

# Manage NetSuite settings

Use the NetSuite page to review connection configuration and maintain the values that translate HotWax Commerce records into NetSuite records.

The page contains three areas:

| Area | Contents |
| --- | --- |
| Configuration | SFTP connection and Product Store |
| Products & Inventory | Inventory variances |
| Orders & Fulfillment | Shipping methods, payment methods, price levels, discounts, departments, and sales channel |

## Review the SFTP connection

1. Open the **Company App**.
2. Go to `NetSuite`.
3. Open `SFTP`.
4. Review the configured remote and connection status.
5. Update the connection only when the integration team provides approved values.
6. Save the change and verify the next expected file transfer.

See [Set up SFTP](../../../learn-netsuite/netsuite-deployment/sdf-bundle/setup-sftp.md) for the NetSuite-side requirements.

## Select the Product Store

1. Open `Product Store`.
2. Select the Product Store used by the NetSuite integration.
3. Save the selection.
4. Confirm the Product Store on the NetSuite landing page.

Review the related [NetSuite Product Store settings](../../../learn-netsuite/netsuite-deployment/prerequisite-syncs/productstore-settings.md) before activation.

## Configure inventory variances

1. Open `Inventory variances`.
2. Review the HotWax variance reason.
3. Select the matching NetSuite adjustment reason or account.
4. Save the mapping.
5. Repeat for each variance reason used by store and warehouse teams.

Unmapped variance reasons can prevent an inventory adjustment from posting correctly to NetSuite.

## Map shipment methods

1. Open `Shipping methods`.
2. Review the HotWax shipment method and carrier.
3. Enter or select the matching NetSuite value.
4. Save the mapping.

## Map payment methods

1. Open `Payment methods`.
2. Review the HotWax payment method.
3. Select the matching NetSuite payment method.
4. Save the mapping.

See [NetSuite payment method mappings](../../../learn-netsuite/synchronization-flows/integration-mappings/payment-methods.md) for integration context.

## Configure price levels and discounts

1. Open the applicable mapping from `Orders & Fulfillment`.
2. Review the HotWax value.
3. Select the matching NetSuite price level or discount item.
4. Save the mapping.

See [NetSuite price levels](../../../learn-netsuite/synchronization-flows/integration-mappings/price-levels.md) for deployment requirements.

## Map departments

1. Open `Departments`.
2. Review each HotWax Product Store or sales context.
3. Select the matching NetSuite department.
4. Save the mapping.

## Map the sales channel

1. Open `Sales channel`.
2. Review the HotWax sales channel.
3. Select the matching NetSuite sales channel value.
4. Save the mapping.

## Verify changes

After changing a mapping:

1. Reopen the page and confirm the saved value.
2. Validate a bounded test record through the integration.
3. Review the related integration log.
4. Apply the mapping to other values only after the test succeeds.
