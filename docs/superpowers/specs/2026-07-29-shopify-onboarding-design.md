# Canonical Shopify-only onboarding guide design

## Status

Approved direction: replace the current collection of overlapping onboarding instructions with one canonical, linear guide for a standard Shopify-only HotWax Commerce launch.

The guide must let an implementation team start with a launched OMS instance that has no initial login and finish a validated standard Shopify launch without opening another user manual for required steps. Application manuals may be linked only as optional deeper reference.

All required backend actions are first-class steps in the same guide and use the public product name **Maarg Admin**. The guide must not send readers to a separate "Moqui," "OFBiz," "backend," or implementation-only procedure.

NetSuite is explicitly excluded. It will receive a separate partner-facing implementation guide.

## Objective

Create one public answer to this question:

> My HotWax Commerce instance is online but no initial user exists. How do I connect one Shopify store, load its starting data, configure standard order processing, and prove that the launch works?

The completed guide must take the reader through this outcome:

1. Claim the new instance with a named Maarg administrator.
2. Confirm that the instance and required application access are ready.
3. Create the company and product-store context.
4. Install, approve, and connect one Shopify shop.
5. Complete the mappings needed for products, inventory, orders, and fulfillment.
6. Import products from Shopify and validate product identity.
7. Import or create facilities and map Shopify locations.
8. Seed starting inventory from Shopify into HotWax Commerce.
9. Configure the Maarg Admin infrastructure used for order import.
10. Import the agreed open-order history and configure recurring order sync.
11. Configure standard routing and fulfillment.
12. Create named operational users with the correct store and facility access.
13. Run a controlled end-to-end launch test and record evidence.

## Scope

### Included launch profile

- One launched HotWax Commerce instance.
- No initial login created yet.
- One Shopify shop.
- Shopify is the initial source for products, Shopify locations, and quantity on hand.
- Standard shippable products and standard fulfillment.
- One or more mapped fulfillment facilities.
- Product, location, inventory, order, routing, fulfillment, user-access, and launch validation steps.
- Both customer-facing applications and Maarg Admin.
- HotWax-owned infrastructure tasks shown in their correct place with an explicit owner.
- Verified Shopify level-2 protected-customer-data access for order import.
- An order-history window that does not require orders created more than sixty days ago.

### Excluded launch profiles

- Maarg deployment, self-hosting, Docker, or infrastructure installation.
- NetSuite or another ERP.
- Multiple Shopify shops.
- Migration from another OMS.
- Buy online, pick up in store.
- Preorders or backorders that require advanced inventory rules.
- Returns integrations.
- Loop, kits, gift cards, SFTP, and file-based integrations.
- Custom product, inventory, or order flows.
- Order history that needs orders created more than sixty days ago and therefore requires `read_all_orders`.

The guide should link advanced launches to a short "Contact HotWax Commerce for an advanced launch plan" note. It must not interleave advanced variants with the simple journey.

## Source baseline

The implementation must be written from current product behavior, not by rearranging the existing documentation.

| Source | Baseline used by this design | Purpose |
| --- | --- | --- |
| Public OMS documentation | `hotwax/oms-documentation` `user-guides-pub` at `a5f233488469dbbc649ef77563d2ab019f392194` | Current public structure and legacy pages |
| Company application | `hotwax/company` `main` at `978c95c9b8457e20806ae70b7c1d34e3e80efce3`, package `2.1.0` | Current onboarding routes, screens, and API calls |
| Maarg utilities | `hotwax/hotwax-maarg-util` `main` at `e82d58df108a8b4ad539bf0c4a1d87b95fbd58e9`; first-admin behavior verified at this commit | Initial administrator flow and Maarg Admin behavior |
| Shopify embedded app | `hotwax/shopify-hc-oms-app` `main` at `f7f61054d62ccc5af8638af857514c9ebf70a126`, package `2.2.0` | OMS request form and pending/accepted states |
| HotWax Keychain | `hotwax/keychain` `main` at `8cacf55c9f74be146626675e5b07ca75bebb4077`, component `4.0.2` | Instance-request approval and credential delivery |
| Shopify OMS bridge | `hotwax/hotwax-shopify-oms-bridge` `main` at `695e4f6e42ea25d5ef94154ec15fd837b73d2851`, component `2.5.0` | History, jobs, and Shopify Order Integration Setup |
| Mantle Shopify connector | `hotwax/mantle-shopify-connector` `main` at `1b514e6394499c0d648e2724f999e86f7cdd2d5d`, component `3.5.0` | Maarg shop receiver, Shopify history query, bulk-operation download, and polling behavior |
| HotWax Poorti | `hotwax/hotwax-poorti` release `v3.0.0-RC1` | Product-facility inventory reset primitive |
| Gurveen's internal "Rails Maarg Setup" document | Internal working procedure reviewed during discovery | Real launch sequence, missing checks, and operator evidence |

Before public release, the guide must be walked through on the exact minimum supported release stack. Source-current behavior is not sufficient evidence that the same behavior is deployed in every customer instance.

Gurveen's document contributes its practical sequence and verification mindset. Client names, private endpoints, credentials, private keys, password material, password hashes, and client-specific workarounds must never be copied into public documentation.

## Audience and ownership

The guide is one journey for all launch participants, not separate instructions that force readers to reconstruct the process.

Each chapter names one accountable owner:

| Owner label | Responsibility in the guide |
| --- | --- |
| Launch owner | Controls sequence, inputs, evidence, cutover, and sign-off |
| Shopify administrator | Installs the Shopify app and grants required access |
| HotWax Keychain approver | Approves the requested OMS-to-Shopify connection |
| Maarg platform administrator | Claims the instance and completes Maarg Admin configuration |
| Company application administrator | Creates the product store, mappings, facilities, and users |
| HotWax integration operator | Completes HotWax-owned infrastructure and integration checks |
| Operations validator | Runs the controlled order and fulfillment test |

An individual may hold several roles. The owner labels exist to prevent hidden handoffs and ambiguous responsibility.

## Information architecture

### Canonical page

Rewrite and retitle:

`documents/system-admin/administration/company/product-store-onboarding.md`

Public title:

**Set up HotWax Commerce with Shopify**

This page is the canonical onboarding source. It contains every required action, expected result, stop condition, and launch check for the included profile.

### Navigation

| File | Required change |
| --- | --- |
| `documents/README.md` | Replace the homepage **Shopify Setup → Install HotWax Commerce App** card with the canonical **Set up HotWax Commerce with Shopify** entry |
| `documents/system-admin/SUMMARY.md` | Add one top-level **Implementation → Set up HotWax Commerce with Shopify** entry; remove the nested **Complete guided setup** entry and setup sequencing under Shopify connections |
| `documents/system-admin/administration/company/README.md` | Replace the multi-page **Set up a new tenant** sequence with one link to the canonical guide; keep only existing-tenant administration references |
| `documents/learn-shopify/SUMMARY.md` | Remove the **Setup Shopify** and **Synchronization Flows** onboarding trees; retain validated concepts and ongoing operations under reference-oriented headings |
| `documents/learn-shopify/README.md` | Present Learn Shopify as conceptual and operating reference and point implementation readers to the canonical guide |

Moved-page stubs stay out of every Summary. The public site exposes one onboarding entry, not a choice among "Complete guided setup," "Setup Shopify," "Synchronization Flows," and application manuals.

### Chapter template

Every journey chapter uses the same compact structure:

| Section | Required content |
| --- | --- |
| Owner | The person accountable for completing the chapter |
| Application | Shopify Admin, Company App, Maarg Admin, or HotWax Keychain |
| Before you begin | Inputs and gates required before the first action |
| Steps | Every required action in order |
| Expected result | The visible state that proves the action succeeded |
| Evidence to save | Screen state, identifiers, counts, timestamps, or job-run evidence |
| Stop and resolve if | Conditions that make it unsafe to continue |
| Next | The next chapter and its dependency |
| Learn more | Optional conceptual or operational references only |

No mandatory action may exist only under **Learn more**.

### Product terminology

Use these public names consistently:

- **Maarg Admin** for administrative screens served by Maarg.
- **Company App** for company, product-store, facility, mapping, product-sync, and user configuration.
- **Shopify Admin** for Shopify-owned actions.
- **HotWax Keychain** for connection approval.

Do not use "Moqui," "OFBiz," "Webtools," "EXIM," "backend," or "raw entity editor" as reader-facing applications or alternate paths.

Exact Maarg Admin navigation and stable screen paths may be included after release validation. A screen path is a convenience link, not a replacement for its visible navigation name.

## Page opening

The guide opens with four elements.

### Outcome statement

Tell the reader that the result is one connected Shopify shop with validated products, facilities, starting inventory, order import, routing, fulfillment, and named operational access.

### Fit check

Use a short checklist to confirm that the launch matches the included profile. If any excluded condition is true, stop and use an advanced launch plan.

Show a **Tested release stack** table with the deployed Maarg, Company App, Shopify embedded app, Keychain, Shopify OMS bridge, Mantle Shopify connector, and Poorti versions plus the last walkthrough date. The source baselines in this design do not substitute for deployed-version validation.

### Inputs worksheet

Collect these values before configuration begins:

- Instance host name.
- Named initial administrator, email address, and vault location.
- Shopify shop domain and Shopify administrator.
- Confirmation of level-2 protected-customer-data access for the Shopify app.
- Product-store name, identifier, currency, locale, and time zone.
- Product identity policy, including the governed SKU and barcode rules.
- Shopify locations and the facilities they represent.
- The agreed order-history start date.
- The launch cutoff timestamp, merchant time zone, and deployed instance or JVM time zone.
- Confirmation that Shopify quantity on hand is the approved initial inventory source.
- Launch owner and validation participants.

### Progress and evidence table

Show all thirteen journey chapters with an owner, status, completion date, and evidence link or identifier. This gives the launch team one shared control sheet without creating a second procedure.

## Canonical journey

### 1. Create the initial Maarg administrator

**Owner:** Maarg platform administrator

Opening `https://<instance-host>/` redirects to the login page. When the only seeded user is `_NA_`, the page displays **Welcome to your new system** and the initial administrator form.

Normal seed data, including the `ADMIN` group, must already be loaded. A clean tenant must not load the `ext-user` data set because its shared or demonstration users suppress the one-time form.

The guide must document the visible fields:

- Username.
- New Password.
- New Password Verify.
- User Full Name.
- Email Address.
- **Create Initial Admin Account**.

The current tested default policy requires at least eight characters, one digit, and one non-alphanumeric character. A deployment may override it, so release QA must confirm the enforced policy. The public guide must tell the reader to meet the deployed policy and use a stronger unique password when the tenant requires more.

The account must be named and individual. Store its credentials in the approved password vault and protect the account as a platform administrator. Do not create a shared `hotwax.user` or client-generic login.

After submission, verify `Account created with username <username>`. The form returns to the normal login screen and does not automatically sign the user in. Sign in with the new credentials, sign out, and sign in again before treating the account as proven. Then verify the user in:

**Maarg Admin → Applications → System → Security → Users**

The current stable screen path is:

`/qapps/system/Security/UserAccount/UserAccountList`

Evidence must show that the account is active and is a member of the `ADMIN` group.

This action creates a Maarg platform administrator. It does not, by itself, prove access to Company App or other HotWax applications. The guide must state that distinction directly.

Before continuing, create or verify a second named recovery administrator according to the customer's access policy. In the recovery user's **Groups** panel, add `ADMIN`, verify that the membership is active, and test a separate login. Do not grant `ADMIN_ADV` unless a separately approved diagnostic requirement needs its sensitive tooling. Keep the instance restricted until the initial claim and recovery path are complete.

The guide must not instruct users to create raw XML, SQL, entity records, `COMMERCE_SUPER`, legacy OFBiz permissions, or standard onboarding access through `ADMIN_ADV`.

If the form is absent before an account has been claimed, or submission returns `Can only create initial admin account if there are no UserAccount records`, stop. Inspect the `moqui.security.UserAccount` count and the data sets that were loaded. Never repair this condition by inserting legacy or raw records.

### 2. Verify the instance readiness gate

**Owner:** HotWax integration operator

The launch must not continue merely because the login page works.

The readiness gate confirms:

- The deployed Maarg and Shopify integration versions meet the guide's tested minimum stack.
- Required seed and base data are loaded.
- Search services are healthy.
- No demo or temporary administrator remains active.
- Shopify integration components are present.
- The supported HotWax application-access package has been applied.
- The named launch administrator can open the applications required by the remaining guide.
- The Shopify app has level-2 protected-customer-data approval required by every released order-history import.
- The simple launch does not need orders created more than sixty days ago. If it does, stop and use the advanced launch process for `read_all_orders` approval.

There is a current product gap between creating the initial Maarg `ADMIN` account and granting complete Company App access, tracked in `hotwax/hotwax-maarg-util#132`. The public guide must use the supported application-access package once available. Until that package is included in the tested release, this chapter is an explicit HotWax-owned stop gate. It must not reproduce Gurveen's legacy group and permission workaround.

### 3. Create the company and product-store context

**Owner:** Company application administrator

Use the Company App onboarding flow to create or select the company and product store. Current Company routes include:

- `/product-store`
- `/create-product-store`
- `/product-store-onboarding`

The guide must include all decisions needed later:

- Product-store name and stable identifier.
- Currency.
- Locale.
- Time zone.
- Order prefix or numbering policy.
- Order approval and billing defaults used by the standard launch.

The expected result is an active product store that can be selected by the Shopify connection and later assigned to facilities and users.

Changing the product-store identifier after integrations or transactions exist is out of scope. The guide must treat the identifier as a governed launch decision.

### 4. Install, approve, and connect Shopify

**Owner:** Shopify administrator, HotWax Keychain approver, and Company application administrator

The guide presents the connection as four separate gates.

#### OMS Access Token gate

Before opening the Shopify installation flow, create the credential shown by Shopify as **Access Token**. It is an OMS authorization token, not a Shopify access token.

The source-current Maarg screen is:

**Maarg Admin → Settings → JWT Tokens**

Current source path:

`/qapps/Oms/Settings/JwtTokens`

It requires a purpose and expiry and shows the token once. A normal user can generate only a self-token; an administrator with `SECURITY_ADMIN` may select an existing subject user. The current Company **Generate JWT token** action instead calls the missing Maarg admin route `POST /rest/s1/admin/jwtTokens` and cannot be documented as working.

The source-current Maarg screen is not automatically a complete replacement for a supported least-privilege integration-user package. Before publication, release QA must select and prove one supported issuance profile:

- Create the approved integration subject, apply its tested application-access package, and have an authorized administrator generate its token in Maarg.
- Generate a token for the signed-in named administrator only when the approved security policy explicitly permits that temporary profile.

The final guide must state the token subject, owner, purpose text, expiry, one-time copy behavior, vault location, expected validation result, and rotation policy. Keychain retains the OMS token for later credential resynchronization, so do not revoke or let it expire without replacing it in the supported Keychain flow and proving a resync. If the deployed stack cannot perform the approved profile, this is a HotWax-owned stop gate. The assisted handoff returns one artifact: a valid OMS **Access Token** with its subject, purpose, expiry, and vault record. No other manual is required.

#### Shopify installation gate

Install the official HotWax Commerce app from Shopify using the approved application URL. Complete Shopify OAuth and grant the required scopes.

Enter the OMS host and the OMS **Access Token** created in the preceding gate. Never paste a token into documentation, a ticket, or a screenshot.

Before authorization, confirm the baseline OAuth scopes needed for the standard product, location, inventory, order, and fulfillment flows and confirm level-2 protected-customer-data access. The simple guide stops if the launch needs `read_all_orders`.

Submission creates a pending connection request. Pending is not connected.

#### HotWax Keychain approval gate

The HotWax Keychain approver opens **Find Instance Requests**, confirms the customer, instance, and shop, and accepts the correct pending request.

Only acceptance delivers the approved credentials to the target OMS. The guide must also explain what the owner does with failed, rejected, duplicate, or superseded requests.

#### Company verification and product-store link

Reopen the Shopify connection after approval. In Company App:

- Confirm that the shop is connected.
- Link the Shopify shop to the product store.
- Refresh and review the granted Shopify scopes.
- Confirm that the shop identifier and product-store relationship are correct.

Acceptance creates the Shopify shop and remote integration context, but it does not automatically prove that the product store is linked or that current OAuth scope records have been refreshed.

Verify two different access concepts:

1. In **Company App → Shopify connection → Configuration → Access scopes**, select **Refresh scopes** and verify the Shopify OAuth handles granted to the app.
2. In **Maarg Admin → Shopify → Shopify Shops → the connected shop → Shop Remotes**, verify that the selected remote's **Access Scope** is `SHOP_RW_ACCESS`.

The Maarg remote capability enum is not a Shopify OAuth scope handle. Refreshing OAuth scopes does not correct a missing or deprecated `SystemMessageRemote.accessScopeEnumId`.

The source-derived Maarg shop-detail path is:

`/qapps/Oms/Shopify/ShopifyShops/ShopifyShopDetail?shopId=<shop-id>`

If the remote capability is blank, `SHOP_NO_ACCESS`, or the deprecated `SHOP_READ_WRITE_ACCESS`, a HotWax integration operator uses the Maarg **Shop Remotes** edit action to set the correct remote to `SHOP_RW_ACCESS`, saves it, and then verifies that Company Product Sync reports write access. Editing a different remote or proceeding without the positive Company state is a stop condition.

The Company verification path is:

**Company App → Shopify → open the connection → Products and Inventory → Product Sync**

The **Shopify API access** row must display **Write access**. **Update required**, **Read only**, or **Unavailable** is a stop condition.

Current Keychain `4.0.2` does not send `accessScope` in its Maarg shop payload, so a newly created remote may not contain the canonical enum. The guide must include the Maarg correction and Company verification until the payload is fixed and released.

The missing JWT route affects Company's token-generation action, not the entire Shopify connection flow. Once a valid token has been supplied, the installation, Keychain approval, and Company verification gates remain the supported journey subject to release validation.

### 5. Review Shopify mappings

**Owner:** Company application administrator

The canonical guide includes the minimum mappings required for the standard journey:

- Shopify product type to HotWax product type.
- Shopify sales channel to HotWax sales channel.
- Shopify payment methods and gateways to HotWax payment methods.
- Shopify shipping methods to HotWax shipping methods.

Starter mappings may be generated, but the owner must review them against real Shopify values before product or order import.

The expected result is that each Shopify value used by the launch has one intentional HotWax destination. Unmapped or many-to-one values with an unclear business meaning are stop conditions.

### 6. Import and validate products

**Owner:** Company application administrator

Use the current Company App **Product Sync** flow. The guide must not send readers to legacy jobs named **Import Products in Bulk** or **Import Product Updates**.

Before sync:

- Confirm the governed SKU and barcode identity rules.
- Confirm which Shopify products belong to the connected shop.
- Review product-type mappings.
- Record the source product and variant counts.

Run the initial product sync and wait for a terminal result. Queued is not complete.

Validation includes:

- Shopify product and variant counts compared with imported counts.
- Failed and skipped record counts.
- A sample of simple products and variants.
- SKU and barcode values.
- Shopify product and variant identifiers.
- Product-store association.
- Duplicate or missing identity exceptions.

Do not continue to inventory until identity exceptions are resolved or explicitly accepted by the launch owner.

### 7. Create facilities and map Shopify locations

**Owner:** Company application administrator

The guide includes both supported standard choices:

- Import a Shopify location as a HotWax facility.
- Create the HotWax facility first and then map it to a Shopify location.

Each active Shopify location used for inventory or fulfillment must map to the intended physical HotWax facility and product store.

The guide must not recommend `_NA_` as a universal facility or location mapping.

Evidence includes:

- Shopify location identifier and name.
- HotWax facility identifier and name.
- Product-store association.
- Whether the location participates in inventory, routing, and fulfillment.

An active Shopify location with no intentional facility mapping is a stop condition.

### 8. Seed starting inventory from Shopify

**Owner:** HotWax integration operator and Company application administrator

The chapter begins with an explicit direction table:

| Flow | Purpose in this guide | Source of truth |
| --- | --- | --- |
| Shopify to HotWax Commerce | One-time starting quantity-on-hand seed | Shopify |
| HotWax Commerce to Shopify | Ongoing available-to-promise publication after cutover | HotWax Commerce |

The simple launch assumes Shopify quantity on hand is approved as the initial source.

The current Company onboarding inventory action is not usable for this purpose. Its `sob/shopify/inventoryReset` endpoint is absent from the released Shopify OMS bridge REST surface, and its local fallback configures the outbound `resetShopifyInventoryQoh` flow. The guide must not label that action as an inbound Shopify inventory import.

Until a supported Company flow is released and tested, make the released Maarg Admin flow a first-class procedure:

1. Open **Maarg Admin → System → System Messages** and confirm that no unrelated message under parent type `ShopifyBulkQuery` is in `SmsgProduced` or `SmsgSent`.
2. Keep both shared Shopify bulk-operation poller schedules paused.
3. Open **Maarg Admin → System → Service Jobs**.
4. Open `sync_ShopifyInventoryReset`.
5. Set the selected Shopify shop identifier.
6. Select **Run Job** once and save its job-run identifier.
7. Find the resulting `BulkQueryShopifyInventoryReset` message in **System Messages** and record its `systemMessageId`.
8. Open `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` and select **Run Job** once. Verify that the recorded message, not another bulk query, transitions from `SmsgProduced` to `SmsgSent` and receives the Shopify bulk-operation identifier.
9. Open `poll_ShopifyBulkOperationResult` and use one-time **Run Job** actions until the recorded message reaches the expected terminal state.
10. Keep `poll_BulkOperationResult_ShopifyBulkQuery` paused for this inventory operation.
11. Open **Maarg Admin → MDM → Data Manager Imports** and wait for the `RESET_SHOPIFY_INVENTORY` load tied to the recorded message to reach a terminal result.
12. Restore only the schedules approved for normal operations after validation.

The current direct service-job path is:

`/qapps/system/ServiceJob/Jobs/ServiceJobDetail?jobName=sync_ShopifyInventoryReset`

The evidence screens are:

- `/qapps/system/ServiceJob/JobRuns/JobRunList`
- `/qapps/system/SystemMessage/Message/SystemMessageList`
- `/qapps/Oms/DataManager/DataManagerImport/DataManagerImportList`

Prerequisites include complete product identity, location mappings, a valid Shopify remote internal identifier, an agreed inventory cutover, and the shared bulk-operation isolation gate. The sender chooses the oldest eligible produced message and the pollers choose an eligible sent message under the shared `ShopifyBulkQuery` parent, so an unrelated produced or sent message is a stop condition.

Evidence includes:

- Job-run identifier and final status.
- The exact `BulkQueryShopifyInventoryReset` `systemMessageId`, Shopify bulk-operation identifier, transitions, and result.
- `RESET_SHOPIFY_INVENTORY` Data Manager counts and errors.
- Sample Shopify `on_hand` values compared with HotWax quantity on hand.
- External inventory reset records.
- Proof that outbound publication did not echo unapproved quantities back to Shopify during the seed.

A queued bulk query is not completion. Download, processing, and Data Manager results must all be positive.

### 9. Configure Maarg Admin order infrastructure

**Owner:** HotWax integration operator

Use **Maarg Admin → Shopify → Shopify Order Integration Setup** for the selected shop. The screen is part of the canonical journey, not a separate implementation manual.

The guide must cover the checks exposed by the screen:

- Required master-data and Data Manager configuration.
- Shopify remote records.
- Stored AWS credentials and SQS queue reachability.
- Required Shopify webhooks.
- The shared `consume_ShopifyOrders_SQS` consumer.
- Fallback and order-history service jobs.
- Shop-level system properties.

The screen can validate and store parts of the integration, but it does not prove EventBridge delivery or provision the SQS queue, dead-letter queue, redrive policy, queue policy, or resource policy.

The final guide therefore includes this inline HotWax-owned infrastructure handoff:

| Handoff field | Required content |
| --- | --- |
| Owner | HotWax integration operator |
| Input | Environment, Shopify shop identifier and domain, AWS account and region, approved queue naming, and launch date |
| Output | EventBridge rule, SQS queue URL and ARN, dead-letter queue ARN, redrive policy, queue and resource policies, and a successful test-event identifier |
| Evidence | Test event delivered once to the target queue, consumer can read it, failed test can reach the dead-letter path, and policies match the approved environment |
| Stop condition | Any missing resource, inaccessible queue, failed delivery, missing redrive behavior, or cross-environment identifier |

The current released source path is:

`/qapps/Oms/Shopify/ShopifyOrderIntegrationSetup?shopId=<shop-id>`

The final guide must also show the visible create, save, run, and verify actions for:

- **Maarg Admin → Shopify → Shopify Order Integration Setup**
- **Maarg Admin → System → Service Jobs**
- **Maarg Admin → System → System Messages**
- **Maarg Admin → MDM → Data Manager Imports**

Release QA must verify the exact deployed path and every action, including the screen's legacy `find#OfbizJobs` and scheduled-job cancellation calls. That QA is a publication prerequisite and must produce inline steps, not an optional link.

Do not continue until the realtime queue, dead-letter path, policies, test delivery, consumer, webhooks, remotes, and Data Manager requirements all show the expected state.

### 10. Import open-order history and enable recurring order sync

**Owner:** HotWax integration operator and Company application administrator

The current Company onboarding action calls `sob/shopify/orderHistory`, which is absent from the released Shopify OMS bridge REST surface. The guide must not present that button as working until compatibility is released and tested.

Use the supported Maarg Admin setup path for the current baseline:

1. Convert the merchant's zoned history start and launch cutoff into the deployed instance or JVM time zone.
2. Store both properties in zone-less `yyyy-MM-dd HH:mm:ss` format because the released service parses them with `Timestamp.valueOf`.
3. Set `newOrderSync.launchDate` for the shop to the converted launch cutoff.
4. Set `orderSyncHistory.lastSyncDate` to the converted history start.
5. Confirm in **System Messages** that no unrelated `ShopifyBulkQuery` message is in `SmsgProduced` or `SmsgSent`.
6. Keep `poll_ShopifyBulkOperationResult` paused while this released history flow is active.
7. Clone `sync_ShopifyOrderHistory` for the selected shop.
8. Set `systemMessageTypeId` to `BulkOrderHistoryQuery`.
9. Set the correct Shopify `systemMessageRemoteId`.
10. Set the approved window size, using the standard seven-day window unless the tested release defines another safe default.
11. Select **Run Now** once and record the job-run identifier.
12. Record the resulting `BulkOrderHistoryQuery` `systemMessageId`.
13. Select **Run Job** once on `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` and verify that the recorded message is the message sent.
14. Use one-time **Run Job** actions on `poll_BulkOperationResult_ShopifyBulkQuery` until the recorded history message reaches the expected terminal state.
15. Wait for the `BULK_ORDER_HISTORY` Data Manager load tied to that message to reach a terminal result.

Inventory reset and order-history bulk operations must run serially because the released flows use overlapping poller responsibilities.

The guide must state the actual import semantics:

- `updatedAt` determines whether an open and unfulfilled Shopify order belongs to a query window.
- For an order not already in HotWax Commerce, `createdAt < newOrderSync.launchDate` determines whether the order is created as historical work.
- An order that already exists is not recreated by the history path.
- It is not an unrestricted import of every historical order.
- Orders before the launch cutoff are historical work, use `needsInventoryIssuance=N`, and park unfulfilled ship groups in `GENERAL_OPS_PARKING`.
- The history cursor advances when the window is queued. If a window fails, the operator must reset the cursor to the failed window before retrying.
- Orders created more than sixty days ago require the separately approved `read_all_orders` scope and are outside the simple guide even when they were updated recently.
- Every released history query requests names, addresses, email, and phone, so verified level-2 protected-customer-data access is required for every history import.

Evidence includes:

- History job-run identifiers.
- `BulkOrderHistoryQuery` and result system messages.
- `BULK_ORDER_HISTORY` Data Manager counts and errors.
- Imported window start and end timestamps.
- Reconciliation from Shopify query records to Data Manager records.
- The count of eligible unknown pre-launch orders compared with newly created HotWax orders.
- Proof that existing orders were not duplicated and post-launch records were not created by the history flow.

After history is complete, configure the current Company App **Order Sync** flow for recurring delta import:

- Create the shop-specific job in a paused state.
- Set its schedule and remote.
- Confirm mapping and Data Manager readiness.
- Review the first batch.
- Activate only after the first controlled batch passes.

Realtime webhook and queue infrastructure is a separate dependency from the recurring fallback job. The guide must validate both.

### 11. Configure standard routing and fulfillment

**Owner:** Company application administrator and operations validator

Keep this chapter to the standard shipping launch:

- Select facilities that participate in fulfillment.
- Confirm routing and brokering rules for those facilities.
- Confirm split-order behavior used by the customer.
- Confirm Shopify shipping mappings.
- Confirm fulfillment notifications and tracking publication to Shopify.

Do not introduce pickup, preorder, advanced promise, or returns configuration.

The expected result is that a standard shippable Shopify order can be assigned to an eligible facility and its fulfillment and tracking can return to Shopify.

### 12. Create operational users

**Owner:** Company application administrator

Create operational users only after stores and facilities exist so their access can be assigned correctly.

For each named user:

- Assign the approved user group or role.
- Assign the product stores they operate.
- Assign the facilities they operate.
- Verify the applications and actions required for their job.
- Record the access owner and review date.

The initial Maarg administrator is a platform recovery and administration account, not the routine operations account.

The current platform-admin-to-application-access gap remains a release gate. The guide may document only a supported access package or screen; it must not recreate legacy raw permission records.

### 13. Validate the launch end to end

**Owner:** Launch owner and operations validator

Keep the complete validation matrix inside the canonical guide. A downloadable checklist may mirror this section, but it may not contain unique required actions.

Place one controlled real Shopify order using a standard shippable product. Verify:

1. The order is visible in Shopify with the expected payment and shipping values.
2. The webhook or fallback flow imports it once.
3. Product, channel, payment, shipping, and location mappings resolve.
4. The order reaches the intended HotWax state.
5. Routing assigns an eligible facility.
6. The facility can process the fulfillment.
7. Fulfillment and tracking are published back to Shopify.
8. Inventory changes follow the approved post-cutover direction.
9. No duplicate order, fulfillment, or inventory message is produced.
10. Job runs, system messages, Data Manager loads, and application screens contain the expected evidence.

The launch passes only when the evidence is positive. "Job queued," "no visible error," or "order exists somewhere" is not sufficient.

The guide includes a stop-and-recovery table for:

- Shopify request pending or rejected.
- Missing OAuth scope.
- Unmapped product or order value.
- Product count mismatch.
- Facility or Shopify-location mismatch.
- Bulk operation that never downloads or processes.
- Failed Data Manager load.
- History cursor advanced past a failed window.
- Realtime queue or consumer unavailable.
- Duplicate import.
- Fulfillment or tracking not returned to Shopify.
- Inventory moving in the wrong direction.

The launch owner records sign-off, release versions, test order identifier, evidence links, known exceptions, and rollback ownership.

## Current compatibility and product gaps

The documentation must be honest where the current products do not yet provide a safe public path.

| Gap | Documentation behavior |
| --- | --- |
| Initial `ADMIN` does not guarantee Company App access | Make supported application access a HotWax-owned readiness gate; do not publish legacy permission workarounds |
| Company **Generate JWT token** calls the missing Maarg admin `admin/jwtTokens` route | Use the tested Maarg token screen or HotWax-owned issuance flow; do not imply that the rest of the connection is broken |
| Keychain omits `accessScope` and a new remote may lack canonical `SHOP_RW_ACCESS` | Correct the selected remote in Maarg **Shop Remotes** and require Company Product Sync **Shopify API access: Write access** |
| Company inventory action points to an absent Shopify OMS bridge route and outbound reset logic | Use the released Maarg Admin inbound inventory flow and label direction explicitly |
| Company order-history action points to an absent Shopify OMS bridge route | Use the released Maarg Admin history flow |
| Shopify Order Integration Setup retains legacy job-management calls | Validate on the minimum supported stack before publishing direct action instructions |
| Released inventory and history paths share a sender parent and overlapping pollers | Require global bulk-message isolation, serial execution, one-time job runs, and exact `systemMessageId` tracking |
| History cursor advances before downstream processing is proven | Require evidence per window and cursor reset on failure |
| A terminal Shopify bulk operation may still fail during download or downstream processing | Require system-message and Data Manager evidence; never equate queued with complete |
| Preview Store Inventory and preorder wizard steps are not part of the standard released launch | Exclude them from this guide |
| Maarg web login supports authentication factors but the current basic Maarg REST login does not expose the corresponding factor-code input | Do not mandate MFA for the bootstrap administrator until every required Company and operational client is validated; document the tested client boundary |

A gap must result in one of three public outcomes:

1. A tested supported step.
2. An explicit HotWax-owned assisted step at the correct point in the journey.
3. A stop gate that prevents unsafe continuation.

The guide must never create the appearance of a self-service success path when the product does not support one.

## Legacy retirement and consolidation

### Rewrite as the canonical source

- `documents/system-admin/administration/company/product-store-onboarding.md`

### Convert to landing pages

- `documents/system-admin/administration/company/README.md`
- Relevant System Admin and Learn Shopify index pages

Landing pages briefly identify the canonical guide and the optional reference manuals. They do not restate onboarding steps.

### Merge unique content and leave moved-page stubs

| Current page | Treatment |
| --- | --- |
| `documents/learn-shopify/setup-shopify/README.md` | Merge official installation and approval concepts, remove token conflation and raw migration steps, then replace with an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/shopify-permissions.md` | Merge the tested standard scope checklist, then replace with an unlisted moved-page stub; design advanced scopes separately |
| `documents/learn-shopify/shopify-integration/products/product-sync-first-time-setup.md` | Merge current product preparation and validation, then replace with an unlisted moved-page stub |
| `documents/learn-shopify/initial-sync/upload-inventory.md` | Merge only correct inventory concepts, replace the misleading direction, then leave an unlisted moved-page stub |
| `documents/learn-shopify/initial-sync/import-orders.md` | Replace the legacy last-order-ID approach with current history and recurring sync behavior, then leave an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/integration-mappings/README.md` | Merge the required mapping gate, then replace with an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/integration-mappings/locations.md` | Merge the standard location setup, then leave an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/integration-mappings/shipping-method.md` | Merge every required shipping-mapping action, then replace with an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/integration-mappings/sales-channel.md` | Merge every required sales-channel-mapping action, then replace with an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/integration-mappings/payment-method-type.md` | Merge every required payment-mapping action, then replace with an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/integration-mappings/product-type.md` | Merge every required product-type-mapping action, then replace with an unlisted moved-page stub |
| `documents/learn-shopify/setup-shopify/troubleshooting/facility-mapping-discrepancy.md` | Merge the stop conditions and recovery checks, then leave an unlisted moved-page stub |
| `documents/system-admin/administration/company/set-up-shopify-product-sync.md` | Merge every required launch action, then replace with an unlisted moved-page stub |
| `documents/system-admin/administration/company/set-up-shopify-order-sync.md` | Merge every required launch action, then replace with an unlisted moved-page stub |

Every moved-page stub contains only a moved notice and a link to the canonical guide. The public documentation owner keeps it for at least ninety calendar days. It may be removed only when repository search reports zero internal links to the old path and the old path contributes less than one percent of canonical-guide page views during the trailing thirty days. If page-view analytics are unavailable, retain the stub.

### Keep only as optional reference

- `documents/system-admin/administration/company/manage-shopify-shop.md`: retain connection maintenance only and remove initial setup sequencing.
- `documents/system-admin/administration/company/manage-shopify-mappings.md`: retain post-launch mapping maintenance only.
- `documents/system-admin/administration/company/manage-shopify-product-sync.md`: retain post-launch monitoring and operation only.
- `documents/system-admin/administration/company/manage-shopify-order-sync.md`: retain post-launch monitoring and operation only.
- `documents/learn-shopify/shopify-integration/products/product-sync-console.md`: retain post-launch operating reference after required onboarding actions are merged.
- `documents/learn-shopify/shopify-integration/orders/order-download.md`: correct "complete history" language and retain the current order-flow model only.
- `documents/learn-shopify/shopify-integration/inventory/location-mapping.md`: retain the ongoing mapping model after the required setup procedure is merged.
- Validated Shopify product, inventory, order, fulfillment, and location concepts.

The canonical guide duplicates every action required for launch. These manuals explain concepts, exceptions, and ongoing operations only.

For each retired URL, the implementation pull request records this disposition table in its description:

| Field | Required value |
| --- | --- |
| Old path | Exact repository path |
| Replacement | Canonical guide, reference page, or removal |
| Stub | Yes or no |
| Navigation removed | System Admin Summary, Learn Shopify Summary, Company landing page, or Learn Shopify landing page |
| Removal owner | Public documentation owner |
| Earliest removal date | Publication date plus ninety calendar days |

### Remove or unpublish after merge

- `documents/learn-shopify/setup-shopify/integration-mappings/installCustomApp.md`
- `documents/learn-shopify/setup-shopify/integration-mappings/SetupMappings.md`
- `documents/learn-shopify/archive/initial-sync/initial-product-sync.md`
- Empty troubleshooting indexes under the initial-sync and setup-Shopify trees.
- Legacy Job Manager product-import procedures presented as current onboarding.
- Direct ShopifyShop entity editing.
- OFBiz, EXIM, and Webtools setup paths.
- Duplicate or unsafe user and permission instructions.

### Legacy-language checks

The implementation review must find and resolve onboarding uses of:

- `Import Products in Bulk`
- `Import Product Updates`
- `last Shopify Order ID`
- `Shopify > Shopify Shop`
- `Webtools`
- `EXIM`
- `SetupMappings`
- Statements that treat a Shopify access token and a HotWax JWT as the same credential
- Instructions that use `_NA_` as a universal facility or location mapping

## Security and writing rules

- Use placeholders such as `<instance-host>` and `<shop-id>` in examples.
- Never include real access tokens, client secrets, private keys, passwords, password hashes, or client endpoints.
- Do not use screenshots that expose credentials, customer data, private URLs, or internal infrastructure identifiers.
- Identify which application the reader is in before every procedure.
- Use visible labels first and stable paths second.
- Put the expected result immediately after each meaningful action.
- Include a stop condition wherever proceeding could import incorrect data or publish incorrect inventory.
- Keep customer-specific examples, Rails terminology, and NetSuite details out of the Shopify guide.
- Do not hide required actions in notes, troubleshooting pages, or linked manuals.

## Documentation implementation

The documentation change should be one atomic documentation pull request so the public site never has two active onboarding journeys.

The pull request includes:

1. The rewritten canonical guide.
2. System Admin navigation and landing-page changes.
3. Merged content from the legacy pages.
4. Moved-page stubs for retained inbound URLs.
5. Removal of legacy pages and navigation that should no longer be published.
6. Search and link cleanup.

Product fixes, endpoint compatibility, access seeding, application behavior, and removal of obsolete application code belong in their product repositories and issues. "Retire old logic" in this documentation pull request means removing obsolete public procedures, navigation, and duplicate explanations; it does not authorize unrelated production-code deletion. The documentation pull request must not silently compensate for missing product behavior.

## Validation plan

### Product walkthrough

Run the entire guide on a clean instance with:

- Only the `_NA_` seeded account.
- The declared minimum supported release stack.
- One test Shopify shop.
- Standard shippable products.
- At least one active Shopify location.
- Controlled product, inventory, order-history, and live-order data.

For every chapter, capture the application, screen, input, expected state, evidence, and failure behavior.

Capture the exact Shopify OAuth scope handles returned by **Refresh scopes** for the tested app release. Build the public baseline from that result and successful flow tests, not from the existing permissions page.

### Documentation checks

- Run the repository grammar, spelling, Markdown, and link workflows.
- Run `git diff --check`.
- Validate every relative link and heading fragment.
- Confirm that moved-page stubs resolve to the canonical guide.
- Confirm that the public homepage, both Summary files, and both landing pages expose the same single onboarding entry.
- Search for the retired legacy phrases.
- Scan changed files for tokens, private keys, passwords, private endpoints, and customer identifiers.
- Confirm that all required actions remain in the canonical page even when every **Learn more** link is ignored.

### Required reviewers

- Company App owner.
- Shopify connector and HotWax Keychain owner.
- Maarg Admin or implementation operations owner.
- Public documentation owner.

Publishing is blocked until the clean-instance walkthrough passes on the declared release stack.

## Acceptance criteria

The design is implemented successfully when:

- A reader can start with a launched instance and no initial login and complete a standard Shopify-only launch from one canonical page.
- Every mandatory Company App, Shopify Admin, HotWax Keychain, and Maarg Admin action appears inline.
- Maarg Admin screens are first-class steps with visible names, owners, expected results, and evidence.
- Application manuals are optional deeper reference, not required procedure.
- NetSuite and advanced launch variants do not interrupt the simple journey.
- The guide distinguishes initial Shopify-to-HotWax inventory seeding from ongoing HotWax-to-Shopify inventory publication.
- The guide distinguishes open-order history, recurring delta sync, and realtime queue infrastructure.
- Current compatibility gaps are expressed as tested assisted steps or stop gates.
- Public navigation exposes one onboarding path.
- Legacy URLs are redirected or retired without leaving competing instructions.
- No credential, key, customer data, or private endpoint is published.
- A clean-instance launch test proves product, inventory, order, routing, fulfillment, tracking, and access outcomes.

## Separate future NetSuite guide

NetSuite onboarding will be designed as a separate partner-facing implementation guide. It must cover everything a NetSuite partner needs without being mixed into the Shopify-only journey:

- Ownership and implementation boundaries.
- Authentication, roles, permissions, and credential rotation.
- NetSuite records, saved searches, identifiers, and durable mappings.
- Product, customer, order, fulfillment, inventory, payment, and return data contracts.
- Jobs, schedules, sequencing, and dependencies.
- Initial loads, incremental updates, reconciliation, and retry behavior.
- Failure recovery, monitoring, and operational ownership.
- Cutover, rollback, validation evidence, and partner certification.

That guide is a separate design and implementation effort.
