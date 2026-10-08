---
description: Set up Shopify inventory event sync for channel ATP and physical locations.
---

# Set up Shopify inventory event sync

Use the Order Routing Rules app to define inventory channels, facility membership, and sourcing rules. Use `Inventory sync` in the Company App to configure and monitor Shopify inventory event publication for both channels and physical locations.

This page covers outbound OMS-to-Shopify publication after cutover. For the one-time inbound starting inventory seed, follow [Chapter 8 of Shopify onboarding](../administration/company/product-store-onboarding.md#8-seed-starting-inventory-from-shopify).

## Define an inventory channel

1. Open `Sourcing` > `Channels` in the Order Routing Rules app.
2. Create or select the channel facility group.
3. Confirm the facilities that should contribute inventory.
4. Link the configuration facility used by channel-level sourcing rules.
5. Review the applicable threshold, safety-stock, pickup, and shipping rules.

See [Create inventory channels](../../retail-operations/inventory/available-to-promise/create-channels.md) for detailed steps.

## Choose the Shopify target model

| Target | Mapping and event publication |
| --- | --- |
| Physical location | One Shopify location maps to one OMS facility. Physical-location events publish facility ATP changes as adjustments to Shopify available inventory. |
| Aggregate location | One Shopify location maps to an inventory channel. Channel events publish ATP changes calculated for its facility group. |

Do not use a physical Shopify location as an aggregate target. Choose a separate aggregate location that is not mapped to another active channel. A physical on-hand reset is a separate reconciliation action; it does not make the physical event stream a QOH stream.

## Set up event-driven Shopify publication in Company

1. Open the Company App, select `Shopify`, and open the connection.
2. Confirm its shop and Product Store, then select `Inventory sync`.
3. For an aggregate target, select `Set up channel`, choose its facility group and eligible Shopify location, and create the channel.
4. Review the channel's `Send channel batches` and `Reset channel ATP` jobs. Missing supported jobs created with `Set up` start paused.
5. For physical targets, confirm the Shopify-location-to-facility mappings and review `Publish physical batches (all shops)` plus the applicable physical reset jobs.
6. Review the approved capture controls, publisher/sender configuration, parameters, and schedules for both paths. Do not activate a duplicate publisher for the same target.
7. Reconcile the applicable targets and verify Shopify quantities before relying on incremental delivery.
8. Keep manual discard jobs paused and unscheduled.

<figure><img src="../.gitbook/assets/company-inventory-monitor-main.jpg" alt="Company Inventory sync monitor showing channel and physical-location event queues and their jobs"><figcaption><p>The two event paths have separate queues and jobs. Review the selected Shopify target before changing capture or publication settings.</p></figcaption></figure>

See [Monitor Shopify inventory sync](../administration/company/manage-shopify-inventory-sync.md) for setup, event history, capture controls, job monitoring, and recovery.

## Reconcile the correct inventory path

Use `Reset channel ATP` for the selected aggregate channel. Use `Reset physical ATP (this shop)` for mapped physical-location available inventory. Use `Reset physical on-hand` only when on-hand reconciliation is required.

Changes made while event capture is off are not recorded for later replay. Coordinate the approved capture change and appropriate reconciliation for every affected target. Enabling real-time event feeds requires restarting every OMS node after saving; follow the detailed monitor guide and the deployment team's change plan.

A successful reset job or sender run does not prove the final Shopify quantity. Check event and batch results and verify the same variant at the mapped Shopify location.
