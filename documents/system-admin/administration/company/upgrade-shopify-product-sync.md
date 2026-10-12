---
description: Migrate a Shopify shop from the legacy product sync to the current product sync.
---

# Upgrade Shopify product sync

Use the `New product sync upgrade` assistant when a Shopify connection shows `Upgrade to new product sync` or `Disable old product sync`. The assistant verifies that the current sync is available, deactivates the legacy pipeline, and prepares the shop for the current setup flow.

## Confirm readiness

1. Review the HotWax Commerce release and per-shop job status.
2. Check each required system message type, job, Data Manager configuration, and data document.
3. Select `Refresh checks` after the technical team adds a missing artifact.
4. Continue only when every required artifact is available.

Use `Copy details` to share missing artifact IDs with the technical team.

## Deactivate the legacy sync

1. Review the legacy system message types, service jobs, and unfinished system messages.
2. Deactivate active legacy message types.
3. Finish active legacy service jobs.
4. Cancel unfinished legacy system messages.
5. Review `Teardown activity` and retry any failed step.
6. Select `Next` after all legacy artifacts are inactive or terminal.

When 50 or more unfinished messages appear, avoid canceling them in bulk from the page. The app warns that this can create many API requests and timeouts. Ask the technical team to process the messages in the background.

## Set up the current sync

1. Configure the per-shop sync job when the assistant shows `Configure`.
2. Enable any paused shared jobs.
3. Select `Go to new product sync setup`.
4. Complete the setup action opened by the upgrade assistant, then verify the active flow in [Monitor Shopify product sync](manage-shopify-product-sync.md). This migration is an advanced path; do not use the single-shop onboarding guide as the migration procedure.
