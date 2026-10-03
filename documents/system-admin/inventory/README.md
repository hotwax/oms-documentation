---
description: Set up inventory channels and publish physical and aggregate inventory to Shopify.
---

# Set up multichannel inventory

Use the Order Routing Rules and Company apps together to set up multichannel inventory:

* Use `Sourcing` in the **Order Routing Rules** app to define inventory channels, assign facilities, and configure the rules that calculate online available-to-promise inventory.
* For connections using the Company inventory-event model, use `Inventory sync` in the **Company App** to map a channel to a Shopify aggregate location, monitor outbound events and jobs, and reconcile inventory.

This page covers outbound HotWax-to-Shopify publication after cutover. For the one-time inbound Shopify-to-HotWax starting inventory seed, follow [Chapter 8 of Set up HotWax Commerce with Shopify](../administration/company/product-store-onboarding.md#8-seed-starting-inventory-from-shopify).

Before you schedule publication, confirm the model deployed for the Shopify connection. The Order Routing `Publish` tab configures the `JOB_UL_INV` publishing path. Company `Inventory sync` configures the event-driven physical-QOH and aggregate-ATP paths. Do not activate both paths for the same Shopify target unless the implementation plan requires them.

## Define an inventory channel

1. Open `Sourcing` > `Channels` in the Order Routing Rules app.
2. Create or select the channel facility group.
3. Confirm every facility that should contribute inventory.
4. Link the configuration facility used by channel-level sourcing rules.
5. Review threshold, safety stock, pickup, shipping, and brokering rules for the channel.

See [Create inventory channels](../../retail-operations/inventory/available-to-promise/create-channels.md) for detailed steps.

## Choose the Shopify target model

Map each Shopify location to the inventory model that it represents:

| Target model | Mapping |
| --- | --- |
| Physical location | One Shopify location maps to one HotWax facility. Shopify receives that facility's QOH. |
| Aggregate location | One Shopify location maps to an inventory channel. Shopify receives ATP aggregated from the channel's facilities. |

Do not use a physical Shopify location as an aggregate target. Create or choose a location that does not already back a HotWax facility or another active inventory channel.

## Set up event-driven Shopify publication in Company

For a connection using the Company inventory-event model:

1. Open the **Company App**.
2. Select `Shopify` and open the connection.
3. Select `Inventory sync`.
4. Select `Set up channel`.
5. Choose the channel facility group.
6. Choose the Shopify aggregate location.
7. Create the channel.
8. Review the jobs created in a paused state.
9. Run a full aggregate ATP reset before you rely on incremental events.
10. Confirm that an active shared sender covers `ShopifyInventoryAdjustment`, or set up the approved dedicated inventory sender.
11. Activate the approved publisher and reset schedules.
12. Keep the manual discard job paused and unscheduled.

See [Monitor Shopify inventory sync](../administration/company/manage-shopify-inventory-sync.md) for channel setup, real-time controls, job monitoring, event history, and reconciliation.

## Reconcile the correct inventory path

Use `Reset physical location QOH` when a Shopify location mapped to one HotWax facility is stale. Use the affected channel's `Reset aggregate ATP` job when an aggregate Shopify location is stale.

Physical changes skipped while the shop-specific push is off and aggregate changes skipped while an individual event source is off are not replayed. Turn the control back on, then run the correct full reset for every affected target.

When the OMS-wide `Inventory channel event updates` feed is in manual mode, reconcile aggregate ATP before you enable real-time updates, then restart every OMS node so Moqui registers the feed.
