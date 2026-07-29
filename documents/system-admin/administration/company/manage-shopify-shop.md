---
description: Review and maintain Shopify connections in Company.
---

# Manage a Shopify connection

Each Shopify connection links one Shopify shop with HotWax Commerce configuration, mappings, and synchronization tools.

## Find a connection

1. Open the **Company App**.
2. Go to `Shopify`.
3. Search for the shop when needed.
4. Filter the list by connection status.
5. Select a connection.

The connection page groups configuration into three areas.

| Area | Contents |
| --- | --- |
| Configuration | Instance details, Product Store, API credentials, and access scopes |
| Products & Inventory | Inventory locations and product types |
| Orders & Fulfillment | Order Sync, shipping methods, payment methods, and sales channels |

Product Sync appears with the products and inventory workflow when available for the connection.

## Review instance details

1. Open the connection.
2. Select `Instance details`.
3. Review the shop name, Shopify domain, and timezone.
4. Review the refund-upload setting.
5. Save only the intended changes.

The Shopify domain identifies the remote shop. Confirm it before changing another connection setting.

## Link a Product Store

1. Open the connection.
2. Select `Product Store`.
3. Choose the Product Store that owns the Shopify shop.
4. Save the link.
5. Return to the connection page and confirm the Product Store.

A Shopify shop can be linked to only one Product Store.

## Manage API credentials

Use the credentials page only when the implementation team provides a current Shopify credential change.

1. Open `API credentials`.
2. Confirm the Shopify shop.
3. Enter the approved credential values.
4. Save the change.
5. Verify the connection before starting a synchronization task.

Keep credentials out of tickets, screenshots, and documentation.

## Review access scopes

1. Open `Access scopes`.
2. Refresh the scope list when instructed.
3. Compare the available scopes with the integration requirements.
4. Resolve missing scopes in Shopify before retrying the affected task.

## Continue configuration

Complete these tasks for the connection:

* [Review Shopify mappings](manage-shopify-mappings.md)
* [Set up Shopify Product Sync](set-up-shopify-product-sync.md)
* [Manage Shopify Product Sync](manage-shopify-product-sync.md)
* [Set up Shopify Order Sync](set-up-shopify-order-sync.md)
* [Manage Shopify Order Sync](manage-shopify-order-sync.md)

Exclude the development-only Debug area from operator workflows.
