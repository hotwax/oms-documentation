# Canonical Shopify Onboarding Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish one complete Shopify-only onboarding journey that begins with an unclaimed Maarg instance and retire every competing setup path.

**Architecture:** Rewrite the existing Product Store onboarding URL as the canonical guide so established inbound links remain valid. Move every required action into that page, convert superseded setup pages to unlisted moved notices, retain only post-launch reference material, and expose one implementation entry from the documentation homepage and navigation.

**Tech Stack:** GitBook Markdown, repository Markdownlint configuration, Git, and GitHub pull requests.

## Global Constraints

- The binding design is `docs/superpowers/specs/2026-07-29-shopify-onboarding-design.md`.
- The guide covers one Shopify shop and standard shipping only.
- The starting state is a launched OMS instance with no initial login.
- Every mandatory action must appear on the canonical page; linked manuals are optional reference.
- Administrative backend screens are called **Maarg Admin** and are first-class steps.
- NetSuite, multiple shops, BOPIS, preorders, returns, kits, gift cards, SFTP, and custom flows are excluded.
- Shopify is the approved source for the initial product catalog, locations, and quantity on hand.
- Every order-history import requires verified level-2 protected-customer-data access.
- Orders created more than sixty days ago and `read_all_orders` are outside this simple guide.
- Use the exact current paths, job names, message types, enums, and stop conditions from the design spec.
- Do not publish credentials, tokens, customer data, private endpoints, raw entity instructions, Webtools, EXIM, OFBiz, or client-specific workarounds.
- Do not document missing Company endpoints as working.
- Do not equate a queued job or bulk query with completion.
- Keep the pull request documentation-only.

---

### Task 1: Rewrite the canonical Shopify onboarding guide

**Files:**

- Modify: `documents/system-admin/administration/company/product-store-onboarding.md`

**Interfaces:**

- Consumes: the exact journey, source baselines, compatibility gates, and acceptance criteria in the binding design.
- Produces: the sole mandatory onboarding procedure linked by every moved notice and navigation entry.

- [ ] **Step 1: Replace the current guided-setup page**

Replace the current content with one page titled:

```markdown
# Set up HotWax Commerce with Shopify
```

Use this top-level order:

```markdown
## What this guide delivers
## Confirm this guide fits your launch
## Before you begin
## Track launch progress
## 1. Create the initial Maarg administrator
## 2. Pass the instance readiness gate
## 3. Create the company and Product Store
## 4. Install, approve, and connect Shopify
## 5. Review Shopify mappings
## 6. Import and validate products
## 7. Create facilities and map Shopify locations
## 8. Seed starting inventory from Shopify
## 9. Configure Maarg Admin order infrastructure
## 10. Import open-order history and enable recurring Order Sync
## 11. Configure standard routing and fulfillment
## 12. Create operational users
## 13. Validate the launch end to end
## Troubleshooting and recovery
## Learn more
```

- [ ] **Step 2: Make every chapter self-contained**

For each numbered chapter include the owner, application, prerequisites, exact steps, expected result, evidence to save, stop conditions, and next chapter. Keep **Learn more** optional.

- [ ] **Step 3: Document the initial-admin bootstrap exactly**

Include:

- `https://<instance-host>/`
- **Welcome to your new system**
- Username, New Password, New Password Verify, User Full Name, and Email Address
- **Create Initial Admin Account**
- Success message `Account created with username <username>`
- **Maarg Admin → Applications → System → Security → Users**
- `/qapps/system/Security/UserAccount/UserAccountList`
- Active `ADMIN` membership
- Separate tested recovery administrator with active `ADMIN`
- The exact zero-user failure string and a stop instruction that prohibits raw record insertion
- The distinction between Maarg platform administration and Company App access

- [ ] **Step 4: Document connection and access as separate gates**

Include:

- Maarg **JWT Tokens** screen, purpose, expiry, one-time copy, vault handling, and Keychain rotation dependency
- Shopify OAuth installation
- HotWax Keychain **Find Instance Requests** approval
- Company Product Store link and **Refresh scopes**
- Maarg **Shop Remotes** `SHOP_RW_ACCESS` correction
- Company Product Sync **Shopify API access: Write access** verification
- The application-access package and token-subject gaps as explicit HotWax-owned stop gates

- [ ] **Step 5: Document data loading and order infrastructure from current flows**

Include:

- Product Sync preparation, terminal-result validation, and identity reconciliation
- Facility creation/import and physical Shopify-location mapping
- The Shopify-to-HotWax initial quantity-on-hand direction
- `sync_ShopifyInventoryReset`, sender, new poller, exact `systemMessageId`, and `RESET_SHOPIFY_INVENTORY`
- The global `ShopifyBulkQuery` isolation gate
- **Shopify Order Integration Setup**
- The explicit EventBridge, SQS, dead-letter queue, redrive, policy, and test-event handoff
- `newOrderSync.launchDate` and `orderSyncHistory.lastSyncDate` time-zone conversion
- `sync_ShopifyOrderHistory`, legacy poller, and `BULK_ORDER_HISTORY`
- Exact `updatedAt` and `createdAt` history semantics
- Recurring Company Order Sync only after history reconciliation

- [ ] **Step 6: Embed the complete go-live test**

Require a controlled real Shopify order to prove import, mapping, routing, facility assignment, fulfillment, tracking back to Shopify, inventory direction, and no duplicates. Require job-run, system-message, Data Manager, and application evidence before sign-off.

- [ ] **Step 7: Run task checks**

Run:

```bash
PNPM_CONFIG_OFFLINE=true /Users/adityapatel/Documents/github/toolchains/bin/pnpm dlx markdownlint-cli2 documents/system-admin/administration/company/product-store-onboarding.md
git diff --check
rg -n 'Webtools|EXIM|COMMERCE_SUPER|Import Products in Bulk|Import Product Updates|last Shopify Order ID' documents/system-admin/administration/company/product-store-onboarding.md
```

Expected:

- Markdownlint reports zero issues.
- `git diff --check` exits successfully.
- The legacy phrase search returns no instructional use.

- [ ] **Step 8: Commit the canonical guide**

```bash
git add documents/system-admin/administration/company/product-store-onboarding.md
git commit -m "Rewrite Shopify onboarding as one canonical guide"
```

### Task 2: Retire competing setup procedures

**Files:**

- Modify to moved notices:
  - `documents/learn-shopify/setup-shopify/README.md`
  - `documents/learn-shopify/setup-shopify/shopify-permissions.md`
  - `documents/learn-shopify/shopify-integration/products/product-sync-first-time-setup.md`
  - `documents/learn-shopify/initial-sync/upload-inventory.md`
  - `documents/learn-shopify/initial-sync/import-orders.md`
  - `documents/learn-shopify/setup-shopify/integration-mappings/README.md`
  - `documents/learn-shopify/setup-shopify/integration-mappings/locations.md`
  - `documents/learn-shopify/setup-shopify/integration-mappings/shipping-method.md`
  - `documents/learn-shopify/setup-shopify/integration-mappings/sales-channel.md`
  - `documents/learn-shopify/setup-shopify/integration-mappings/payment-method-type.md`
  - `documents/learn-shopify/setup-shopify/integration-mappings/product-type.md`
  - `documents/learn-shopify/setup-shopify/troubleshooting/facility-mapping-discrepancy.md`
  - `documents/system-admin/administration/company/set-up-shopify-product-sync.md`
  - `documents/system-admin/administration/company/set-up-shopify-order-sync.md`
- Modify as post-launch reference:
  - `documents/system-admin/administration/company/manage-shopify-shop.md`
  - `documents/learn-shopify/shopify-integration/products/product-sync-console.md`
  - `documents/learn-shopify/shopify-integration/orders/order-download.md`
- Delete:
  - `documents/learn-shopify/setup-shopify/integration-mappings/installCustomApp.md`
  - `documents/learn-shopify/setup-shopify/integration-mappings/SetupMappings.md`
  - `documents/learn-shopify/archive/initial-sync/initial-product-sync.md`
  - `documents/learn-shopify/initial-sync/troubleshooting/README.md`
  - `documents/learn-shopify/setup-shopify/troubleshooting/README.md`

**Interfaces:**

- Consumes: the canonical page from Task 1.
- Produces: old URLs that point to the canonical guide without restating mandatory steps, plus accurate post-launch references.

- [ ] **Step 1: Replace each superseded setup page with a moved notice**

Preserve existing front matter where useful and use this body:

```markdown
# This setup guide has moved

Shopify onboarding is now documented in one complete guide:

[Set up HotWax Commerce with Shopify](<correct-relative-path-to-product-store-onboarding.md>)

The canonical guide includes every required Company App, Shopify Admin, HotWax Keychain, and Maarg Admin step.
```

Calculate the correct relative path independently for every file and verify it resolves.

- [ ] **Step 2: Remove onboarding sequencing from retained references**

- Keep `manage-shopify-shop.md` about maintaining an already connected shop.
- Keep `product-sync-console.md` about post-launch operation and monitoring.
- Correct `order-download.md` so history is open and unfulfilled orders in `updatedAt` windows, not a complete archive; distinguish history, realtime, and fallback flows.
- Link each reference to the canonical guide for initial setup.

- [ ] **Step 3: Delete unsafe and obsolete files**

Delete the five listed files with patch-based deletion. Do not delete child troubleshooting articles that remain useful as reference.

- [ ] **Step 4: Validate every moved link and retired phrase**

Run:

```bash
for file in $(git diff --name-only --diff-filter=AM | rg '\\.md$'); do test -f "$file" || exit 1; done
rg -n 'Import Products in Bulk|Import Product Updates|last Shopify Order ID|Webtools|EXIM|SetupMappings|installCustomApp|Shopify > Shopify Shop' documents/learn-shopify documents/system-admin/administration/company
PNPM_CONFIG_OFFLINE=true /Users/adityapatel/Documents/github/toolchains/bin/pnpm dlx markdownlint-cli2 documents/learn-shopify documents/system-admin/administration/company
git diff --check
```

Expected:

- All changed Markdown files exist unless intentionally deleted.
- No retired procedure remains presented as current onboarding.
- Markdownlint reports zero issues.
- `git diff --check` exits successfully.

- [ ] **Step 5: Commit the retirement changes**

```bash
git add documents/learn-shopify documents/system-admin/administration/company
git commit -m "Retire duplicate Shopify setup guides"
```

### Task 3: Expose one public onboarding entry

**Files:**

- Modify: `documents/README.md`
- Modify: `documents/system-admin/SUMMARY.md`
- Modify: `documents/system-admin/administration/company/README.md`
- Modify: `documents/learn-shopify/SUMMARY.md`
- Modify: `documents/learn-shopify/README.md`

**Interfaces:**

- Consumes: canonical guide and moved notices from Tasks 1 and 2.
- Produces: one visible public implementation path and reference-only Shopify navigation.

- [ ] **Step 1: Update the documentation homepage**

Replace the legacy **Shopify Setup → Install HotWax Commerce App** target with **Set up HotWax Commerce with Shopify** and link it to the canonical System Admin page.

- [ ] **Step 2: Update System Admin navigation**

Add one top-level section:

```markdown
## Implementation

* [Set up HotWax Commerce with Shopify](administration/company/product-store-onboarding.md)
```

Remove **Complete guided setup**, **Set up Shopify Product Sync**, and **Set up Shopify Order Sync** from nested navigation. Keep manage and monitoring references.

- [ ] **Step 3: Update the Company landing page**

Replace the seven-page **Set up a new tenant** sequence with one link to the canonical guide. Keep the existing-tenant maintenance list.

- [ ] **Step 4: Convert Learn Shopify to reference navigation**

- Remove the **Setup Shopify** and **Synchronization Flows** sections.
- Keep product, inventory, order, fulfillment, cancellation, pickup, preorder, and returns concepts as reference.
- Add one introductory link to the canonical guide.
- Do not list any moved notice.

- [ ] **Step 5: Verify the one-entry rule**

Run:

```bash
rg -n 'Set up HotWax Commerce with Shopify|Complete guided setup|Setup Shopify|Synchronization Flows|Set up Shopify Product Sync|Set up Shopify Order Sync' documents/README.md documents/system-admin/SUMMARY.md documents/system-admin/administration/company/README.md documents/learn-shopify/SUMMARY.md documents/learn-shopify/README.md
PNPM_CONFIG_OFFLINE=true /Users/adityapatel/Documents/github/toolchains/bin/pnpm dlx markdownlint-cli2 documents/README.md documents/system-admin/SUMMARY.md documents/system-admin/administration/company/README.md documents/learn-shopify/SUMMARY.md documents/learn-shopify/README.md
git diff --check
```

Expected:

- The canonical title is visible from the homepage and System Admin.
- No navigation file presents another onboarding sequence.
- Moved notices are absent from both Summary files.
- Markdownlint reports zero issues.
- `git diff --check` exits successfully.

- [ ] **Step 6: Commit navigation changes**

```bash
git add documents/README.md documents/system-admin/SUMMARY.md documents/system-admin/administration/company/README.md documents/learn-shopify/SUMMARY.md documents/learn-shopify/README.md
git commit -m "Make Shopify onboarding the single implementation path"
```

### Task 4: Validate and publish the documentation change

**Files:**

- Review: every file changed from `origin/user-guides-pub`
- Modify only when a validation finding requires a documentation fix

**Interfaces:**

- Consumes: all implementation commits.
- Produces: a documentation-only branch with reproducible validation evidence and a pull request.

- [ ] **Step 1: Verify branch scope**

Run:

```bash
git diff --name-status origin/user-guides-pub...HEAD
git diff --check origin/user-guides-pub...HEAD
```

Expected: only Markdown documentation and the two Superpowers design/plan files are changed.

- [ ] **Step 2: Run Markdown and legacy-content checks**

Run:

```bash
PNPM_CONFIG_OFFLINE=true /Users/adityapatel/Documents/github/toolchains/bin/pnpm dlx markdownlint-cli2 '**/*.md'
rg -n 'Import Products in Bulk|Import Product Updates|last Shopify Order ID|Shopify > Shopify Shop|Webtools|EXIM|SetupMappings|installCustomApp' documents
```

Classify every phrase-search result as retained historical reference, moved notice text, or an error. Fix every instructional error.

- [ ] **Step 3: Run security and link checks**

Run:

```bash
rg -n 'shpat_|shpca_|shpss_|BEGIN [A-Z ]*PRIVATE KEY|https://[^ ]+\\.hotwax\\.io' $(git diff --name-only --diff-filter=AM origin/user-guides-pub...HEAD)
git status --short
```

Verify every relative Markdown link in changed files resolves to an existing file and heading.

- [ ] **Step 4: Review requirements line by line**

Re-read the binding design acceptance criteria and confirm that the canonical guide contains every required action without following a **Learn more** link.

- [ ] **Step 5: Create the pull request**

Push `codex/docs-shopify-onboarding-canonical` and open a pull request to `user-guides-pub` with:

- The fragmented-onboarding problem.
- The canonical page and retired paths.
- Current product gaps represented as assisted steps or stop gates.
- Exact validation commands and results.
- The clean-instance walkthrough requirement before public release.
