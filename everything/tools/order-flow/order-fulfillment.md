---
description: >-
  Understand the separate picking, packing, and shipping stages in the OMS
  Fulfillment App and verify the correct allocation before acting.
---

# Order Fulfillment

After routing assigns ship-from-store work, associates use the Fulfillment App to prepare and ship the allocated items. Store pickup follows the separate pickup workflow. One order can have multiple allocations and shipments, so a tab or shipment status does not describe the entire order.

**Verification scope:** This overview was checked against Fulfillment App [v4.2.2](https://github.com/hotwax/fulfillment/releases/tag/v4.2.2) and Poorti v3.3.3 on October 11, 2026. It is source-verified; installed versions, permissions, configuration, and live outcomes still require confirmation.

## Before You Start

Confirm the product store, facility, order, affected items, and quantities. Check the physical goods before progressing them. If the previous action timed out, a cancellation is reported, or the queue conflicts with the order record, use [Fulfillment Queue Troubleshooting](../launchpad/fulfillment/README.md) before another action.

## Pick

`Open` contains eligible assigned work from the order search index. Shipping-method and category filters, search, and the result size control what is loaded. The default order-date sort is not a guarantee that every order appears in the same priority order in every deployment.

Confirming the picking action or a new picklist prepares fulfillment and moves eligible work into `In Progress`. Selecting `Pick order` alone opens the picker dialog; it does not complete that action. Creating a picklist does not prove that staff physically picked every unit. Verify products, quantities, and allocation before packing. Reprinting an existing picklist is different from creating new picking work.

## Pack

`In Progress` contains approved shipments whose orders are approved. Review the specific shipment, packaging, carrier, shipping method, and required tracking before using the packing workflow. The bulk action works on the current loaded list; inspect its filters and affected count first.

Packing moves the shipment into `Completed` while it can still be waiting to ship. A carrier error or an interrupted response requires checking the actual shipment and label result before another attempt. Reading `Shipping label error` does not regenerate a label; carrier changes, manual tracking, label regeneration, and rejection are separate operational actions.

## Ship

`Completed` includes packed shipments and shipments shipped during the current day in the facility's time zone. If the facility has no time zone, the app uses its local zone. A visible completed card is not proof that the shipment has shipped.

The bulk `Ship` action starts with packed shipments in the loaded, filtered list. Already shipped entries are excluded, and shipments requiring tracking are skipped when tracking is missing. Its confirmation count can therefore exceed the number actually submitted. Review the result and remaining packed work; do not assume the whole order was shipped.

A packed shipment can be unpacked before shipping through the supported workflow. A shipped shipment cannot be unpacked in this flow. Confirm any associated carrier-label outcome separately. If an installation uses automatic shipping, its effective schedule and eligibility must be checked with the owner; this overview does not establish that such a job is enabled.

## Verify The Handoff

Confirm the affected shipment's status, item quantities, facility, and tracking where required. Other allocations can remain open. Use [Order Fulfillment Notification](order-fulfillment-notification.md) to verify the separate Shopify handoff. For missing or lingering cards, uncertain actions, and source-versus-index comparisons, follow [Fulfillment Queue Troubleshooting](../launchpad/fulfillment/README.md).
