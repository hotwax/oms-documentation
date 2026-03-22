---
description: Configure product-store level NetSuite settings required for order, inventory, and fulfillment syncs.
---

# Product Store Settings

When deploying the HotWax and NetSuite integration, some settings must be configured at the product-store level so data exported from HotWax can be created correctly in NetSuite. These settings are available from the **NetSuite** page in the Company App and are used to control how orders, inventory adjustments, and fulfillment data are mapped between the two systems.

Use this page during implementation to verify the product store is connected to the correct NetSuite context before you start syncing live data.

## Where to configure these settings

1. Open the **Company App**.
2. Go to the **NetSuite** page.
3. Select the product store you want to configure.
4. Update the settings in the relevant sections described below.

For a UI walkthrough of the NetSuite page, see [Configure NetSuite Setting](/documents/system-admin/administration/company/configure-netsuite-setting.md).

## Product Store

Each HotWax product store must be linked to the NetSuite subsidiary it belongs to.

### NetSuite Subsidiary ID

This mapping tells HotWax which NetSuite subsidiary context to use for the selected product store.

- Select the product store.
- Enter the corresponding NetSuite subsidiary ID.
- Save the mapping.

If one HotWax product store needs to work with multiple subsidiaries, configure all required subsidiary IDs for that store from the NetSuite page.

## Product and Inventory

These settings control how inventory-related data is posted to NetSuite.

### Inventory Variance

Inventory variance mappings define how HotWax sends approved inventory adjustments to NetSuite.

Configure the following for each variance reason that should sync:

- Inventory variance reason
- NetSuite inventory adjustment reason ID
- NetSuite facility ID, if that variance should post against a specific location

If a retailer uses transfer-style handling for some variance reasons, the facility mapping can be used so the transaction is processed in the correct NetSuite context.

To understand how inventory variance sync works end to end, see [Cycle Count](/documents/learn-netsuite/integration-flows/cycle-count.md).

## Orders and Fulfillment

These mappings control how sales-order and fulfillment data created in HotWax is understood by NetSuite.

### Shipping Method

Shipping methods used in HotWax must be mapped to NetSuite shipment method IDs.

- Select the HotWax shipping method.
- Enter the corresponding NetSuite shipment method ID.
- Save the mapping.

For more detail, see [Shipping Methods](/documents/learn-netsuite/synchronization-flows/integration-mappings/shipping-methods.md).

### Payment Method

Payment methods must be mapped before order sync so NetSuite receives a valid payment method value.

- Select the HotWax payment method.
- Enter the corresponding NetSuite payment method ID.
- Save the mapping.

Unmapped payment methods can cause order sync failures.

For more detail, see [Payment Methods](/documents/learn-netsuite/synchronization-flows/integration-mappings/payment-methods.md).

### Price Levels

Price level configuration determines what pricing context HotWax sends to NetSuite when orders are created.

Available options generally include:

- **Custom**: Sends the exact order price received from the sales channel.
- **Base Price**: Uses NetSuite's base item price.

To configure:

- Locate the price levels section.
- Select the NetSuite price level ID, or choose `Custom`.
- Save the setting.

For more detail, see [Price Levels](/documents/learn-netsuite/synchronization-flows/integration-mappings/price-levels.md).

### Discount Mapping

Order-level and item-level discounts in HotWax should be mapped to the corresponding NetSuite item IDs used for discount posting.

- Identify the discount type used in HotWax.
- Enter the corresponding NetSuite item ID.
- Save the mapping.

This prevents discrepancies when orders are created in NetSuite with discounts applied.

### Department

Department mapping is used when the retailer wants facility-level activity attributed to the correct NetSuite department.

- Select the relevant facility.
- Enter the NetSuite department ID.
- Save the mapping.

### Sales Channel

Sales channel mapping identifies where an order originated, such as eCommerce or POS.

- Select the HotWax sales channel.
- Enter the corresponding NetSuite sales channel ID.
- Save the mapping.

This helps NetSuite classify orders correctly for reporting and downstream workflows.

## Recommended implementation order

To reduce sync failures during setup, configure these settings in this order:

1. Product store to subsidiary mapping
2. Shipping method mapping
3. Payment method mapping
4. Price level selection
5. Discount mapping
6. Department mapping
7. Sales channel mapping
8. Inventory variance mapping

## Related setup

These settings work together with other NetSuite deployment prerequisites:

- [SFTP Locations](/documents/learn-netsuite/netsuite-deployment/prerequisite-syncs/sftp-locations.md)
- [Shipping Methods](/documents/learn-netsuite/netsuite-deployment/prerequisite-syncs/shipping-methods.md)
- [Payment Methods](/documents/learn-netsuite/netsuite-deployment/prerequisite-syncs/payment-methods.md)
- [Price Level](/documents/learn-netsuite/netsuite-deployment/prerequisite-syncs/price-level.md)
- [Configure NetSuite Setting](/documents/system-admin/administration/company/configure-netsuite-setting.md)
