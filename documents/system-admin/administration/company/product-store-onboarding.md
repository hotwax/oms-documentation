# Set up HotWax Commerce with Shopify

Use this canonical guide to connect one Shopify shop to a new HotWax Commerce instance and validate products, facilities, starting inventory, order import, routing, fulfillment, and named operational access. It is the required procedure for the standard Shopify-only launch profile; linked application documentation is optional background, not a required setup path.

## What this guide delivers

At completion, one Shopify shop is connected to one active product store. Shopify is the approved initial source for products, locations, and quantity on hand; HotWax Commerce publishes ongoing available-to-promise inventory after cutover. The launch team has imported and reconciled products and open orders, mapped facilities, tested routing and fulfillment, and saved evidence for every gate.

Use the chapter evidence and the progress table as the launch record. A queued job, a pending request, or the absence of a visible error is never proof that a step is complete.

## Confirm this guide fits your launch

Continue only when all of the following are true:

- You have one launched HotWax Commerce instance with no initial login claimed.
- You are connecting one Shopify shop, not multiple shops.
- Shopify is the initial source for products, locations, and quantity on hand.
- You use standard shippable products and standard fulfillment with one or more mapped facilities.
- The Shopify app has verified level-2 protected-customer-data access.
- The agreed history window does not require orders created more than sixty days ago.

Stop and contact HotWax Commerce for an advanced launch plan if you need an ERP integration, multiple Shopify shops, a migration, pickup, preorders, backorders with advanced inventory rules, returns integrations, Loop, kits, gift cards, SFTP or file-based integrations, custom product or order flows, or `read_all_orders` access for older orders. Do not mix those variants into this launch.

## Before you begin

The launch owner collects and approves these inputs before anyone configures the instance:

- Instance host name; named initial administrator; administrator email; and approved password-vault location.
- Shopify shop domain and named Shopify administrator.
- Confirmation of level-2 protected-customer-data access for the Shopify app.
- Product-store name, stable identifier, currency, locale, time zone, order prefix, and order approval and billing defaults.
- Product identity policy, including governed SKU and barcode rules.
- Each Shopify location and its intended physical HotWax facility.
- Agreed order-history start date, launch cutoff timestamp, merchant time zone, and deployed instance or JVM time zone.
- Written confirmation that Shopify quantity on hand is the approved initial inventory source.
- Launch owner, HotWax integration operator, Keychain approver, platform administrator, Company application administrator, and operations validator.

Store access tokens, passwords, and private keys in the approved password vault. Redact credentials, customer data, and private endpoints from tickets and screenshots.

## Track launch progress

The launch owner keeps this table current. An individual may hold more than one owner role, but every evidence reference must identify the person accountable for the chapter.

| Chapter | Owner | Status | Completion date | Evidence link or identifier |
| --- | --- | --- | --- | --- |
| 1. Initial Maarg administrator | Maarg platform administrator | Not started | — | — |
| 2. Instance readiness | HotWax integration operator | Not started | — | — |
| 3. Company and product store | Company application administrator | Not started | — | — |
| 4. Shopify connection | Shopify administrator | Not started | — | — |
| 5. Shopify mappings | Company application administrator | Not started | — | — |
| 6. Product import | Company application administrator | Not started | — | — |
| 7. Facilities and locations | Company application administrator | Not started | — | — |
| 8. Starting inventory | HotWax integration operator | Not started | — | — |
| 9. Order infrastructure | HotWax integration operator | Not started | — | — |
| 10. History and recurring sync | HotWax integration operator | Not started | — | — |
| 11. Routing and fulfillment | Company application administrator | Not started | — | — |
| 12. Operational users | Company application administrator | Not started | — | — |
| 13. End-to-end launch test | Launch owner | Not started | — | — |

## 1. Create the initial Maarg administrator

**Owner:** Maarg platform administrator

**Application:** Maarg Admin

### Before you begin

Confirm that this is a clean tenant with only the `_NA_` seeded user, that normal seed data including the `ADMIN` group is loaded, and that the `ext-user` data set was **not** loaded. `ext-user` supplies shared or demonstration users and suppresses the one-time form. Have the named administrator's vault location ready.

### Steps

1. Open `https://<instance-host>/`. The login page redirects to the one-time form and displays **Welcome to your new system** when no user account has been claimed.
2. Enter **Username**, **New Password**, **New Password Verify**, **User Full Name**, and **Email Address**. Use a named individual account and a unique password that satisfies the deployed policy. The current tested default is at least eight characters, one digit, and one non-alphanumeric character; a deployment can require more.
3. Select **Create Initial Admin Account**. Store the credential in the approved password vault.
4. Verify the success message `Account created with username <username>`. The form returns to the normal login page rather than signing you in automatically.
5. Sign in with the new credentials, sign out, and sign in again.
6. In **Maarg Admin → Applications → System → Security → Users**, open the account. The current stable path is `/qapps/system/Security/UserAccount/UserAccountList`.
7. Verify that the account is active and has active `ADMIN` membership.
8. Create or verify a separate named recovery administrator according to the customer's access policy. In that user's **Groups** panel, add `ADMIN`, verify that the membership is active, and test a separate login. Do not grant sensitive diagnostic access unless a separately approved requirement needs it.
9. Do not require an authentication factor for the bootstrap or recovery administrator until every required Company App and operational client has been tested with that factor. Maarg web login supports authentication factors, but the current basic Maarg REST login does not expose the corresponding factor-code input.

### Expected result

Two named, separately tested Maarg platform administrators can sign in and the instance remains restricted to approved administrators.

### Evidence to save

Save the success message, both active user identifiers, active `ADMIN` memberships, login-test timestamps, and the vault record identifiers. Do not save passwords or tokens.

### Stop and resolve if

If the form is absent before an account is claimed, or submission returns `Can only create initial admin account if there are no UserAccount records`, stop. Inspect the `moqui.security.UserAccount` count and confirm whether `ext-user` was loaded. Never repair this condition by inserting raw records. This account is a Maarg platform administrator only; it does not by itself prove access to Company App or other HotWax applications.

### Next chapter

Continue to the instance readiness gate only after both administrator logins and memberships are proven.

## 2. Pass the instance readiness gate

**Owner:** HotWax integration operator

**Application:** Maarg Admin and Company App

### Before you begin

Have confirmation that the deployed HotWax applications are supported for this launch, the claimed administrator, the approved application-access package, and confirmation of Shopify's level-2 protected-customer-data approval.

### Steps

1. Confirm with HotWax Commerce that the deployed Maarg, Company App, Shopify embedded app, HotWax Keychain, Shopify OMS bridge, Mantle Shopify connector, and Poorti versions are supported for this launch.
2. Verify required seed and base data, healthy search services, present Shopify integration components, and that no demonstration or temporary administrator remains active.
3. Apply the supported HotWax application-access package and verify that the named launch administrator can open every application used by the remaining chapters.
4. Confirm level-2 protected-customer-data approval for the Shopify app and that the agreed history does not require orders created more than sixty days ago.
5. If an authentication factor is required by launch policy, test every required Company App and operational client before enabling it for the launch account. The current basic Maarg REST login has no factor-code input even though Maarg web login supports authentication factors.

### Expected result

The deployed applications and required access are ready, and the launch profile passes the access and order-history gates.

### Evidence to save

Save the supported-release confirmation, health-check results, application access test results, package reference, protected-data approval confirmation, and the history-window decision.

### Stop and resolve if

Creating an initial `ADMIN` account does not guarantee complete Company App access. Until the supported application-access package is included in the tested release, this is a HotWax-owned stop gate. Do not continue with legacy group or permission workarounds. Stop for an advanced launch plan if older order access is needed. Stop if a required client has not passed the authentication-factor compatibility test; do not mandate MFA for that account until it has.

### Next chapter

Continue when the launch administrator can use the required applications and all stated readiness evidence is positive.

## 3. Create the company and Product Store

**Owner:** Company application administrator

**Application:** Company App

### Before you begin

Have the approved product-store name, stable identifier, currency, locale, time zone, order prefix, and order approval and billing defaults.

### Steps

1. In Company App, open `/product-store` and select **Create product store** to open `/create-product-store`.
2. Enter **Company name** when this is the first Product Store, then enter **Name**, **ID**, and **Currency**. Select **Manage configurations**. The page must display `Product store created successfully.` before it opens `/product-store-onboarding/<product-store-id>`.
3. In the **Configurations** screen, select **Configure manually** and set **Product Identifier**, **Auto approve orders**, and **Sales order ID prefix**. Select **Setup product store**.
4. Open `/product-store-details/<product-store-id>` and set the approved locale, time zone, order approval and billing defaults. Re-open the details page and verify every saved value before using the Product Store in a connection.

### Expected result

An active Product Store can be selected by the Shopify connection and later associated with facilities and users.

### Evidence to save

Save the company and Product Store identifiers, configured defaults, selected time zone, and an active-state screen.

### Stop and resolve if

Stop if the identifier, currency, locale, time zone, or order defaults are undecided. Do not change the Product Store identifier after integrations or transactions exist; treat it as a governed launch decision.

### Next chapter

Continue with the Shopify connection gates using this active Product Store.

## 4. Install, approve, and connect Shopify

**Owner:** Shopify administrator, HotWax Keychain approver, and Company application administrator

**Application:** Maarg Admin, Shopify Admin, HotWax Keychain, and Company App

### Before you begin

Have the approved Shopify app URL, shop domain, named Shopify administrator, valid Product Store, protected-data approval, approved OMS token issuance profile, and vault location. Confirm the simple launch does not need `read_all_orders`.

### Steps

1. In **Maarg Admin → Settings → JWT Tokens**, open `/qapps/Oms/Settings/JwtTokens`. This screen is self-token-only: leave **Username** as the signed-in named administrator. Enter the tenant-approved free-text **Purpose** value, record it using the governed format `Shopify OMS connection | <shop-domain> | <YYYY-MM-DD>`, set **Expires In (Days)**, and select **Generate Token**. Copy the displayed token once into the approved vault. This is an OMS authorization token, not a Shopify access token.
2. Verify `Token generated for <user> — copy it now. It will not be shown again.` and record the displayed **Purpose**, **Expires**, token subject, owner, and vault reference. The positive handoff result is one valid OMS **Access Token** with those recorded attributes. Generation alone does not validate the Shopify connection.
3. In Shopify Admin, install the official HotWax Commerce app from the approved application URL. Complete Shopify OAuth, approve only the scope set authorized for the deployed app release and shop, and confirm level-2 protected-customer-data access. Do not copy scope handles from an older setup guide.
4. Enter the OMS host and the OMS **Access Token**. Never paste that token into a ticket or screenshot. Submission creates a pending connection request; pending is not connected.
5. In HotWax Keychain, open **Find Instance Requests**. The HotWax Keychain approver confirms the customer, instance, and shop, then accepts the correct pending request. For a failed, rejected, duplicate, or superseded request, stop it, record the request identifier and disposition, correct the cause, and submit only the intended replacement.
6. Reopen the connection in Company App. Confirm that the shop is connected, link it to the Product Store, and confirm the shop identifier and Product Store relationship.
7. In **Company App → Shopify connection → Configuration → Access scopes**, select **Refresh scopes**, record the returned Shopify OAuth handles, and complete both scope gates:
   * **Required API capabilities for the simple profile:** confirm the active requested set covers and the refreshed grant provides every capability below.
     * [ ] Product import: `read_products`
     * [ ] Shopify-location import: `read_locations`
     * [ ] Inventory read: `read_inventory`
     * [ ] Inventory publication: `write_inventory`
     * [ ] Order import: `read_orders`
     * [ ] Customer details on imported orders: `read_customers`
     * [ ] Merchant-managed fulfillment-order read: `read_merchant_managed_fulfillment_orders`
     * [ ] Merchant-managed fulfillment and tracking publication: `write_merchant_managed_fulfillment_orders`
   * Shopify write scopes include the corresponding read capability. Record whether `read_inventory` and `read_merchant_managed_fulfillment_orders` are explicit handles or are covered by their paired write handles; do not add duplicate read handles only to make the displayed list match.
   * **Verify the granted scopes:** compare the refreshed handles with the required capabilities above and record how each capability is granted. Resolve every missing or unexpected scope with HotWax Commerce before continuing. The later setup chapters and final validation confirm that the approved capabilities work.
   * **Not required by this simple profile:** `read_all_orders`; `write_orders` and `write_products` for pickup or preorder extensions; `read_fulfillments` and `write_fulfillments`; `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders`; `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders`; `read_channels`; `read_files` and `write_files`; `read_draft_orders` and `write_draft_orders`; `read_gift_cards` and `write_gift_cards`; and `read_returns` and `write_returns`. If the deployed manifest requests one of these or another additional handle, stop and have the HotWax release owner classify and approve it for the launch profile. Do not silently grant it or remove it from Keychain.
   * **Order-import compatibility:** have HotWax Commerce confirm that the deployed order import supports this standard scope profile without `read_returns`. Do not add `read_returns` unless returns are included in an approved advanced launch profile.
8. In **Maarg Admin → Shopify → Shopify Shops → the connected shop → Shop Remotes**, open the selected remote. The current detail path is `/qapps/Oms/Shopify/ShopifyShops/ShopifyShopDetail?shopId=<shop-id>`. Verify its **Access Scope** is `SHOP_RW_ACCESS`.
9. If the selected remote is blank, `SHOP_NO_ACCESS`, or `SHOP_READ_WRITE_ACCESS`, a HotWax integration operator edits that selected remote in **Shop Remotes**, sets it to `SHOP_RW_ACCESS`, saves, and rechecks the connection.
10. In **Company App → Shopify → open the connection → Products and Inventory → Product Sync**, verify the **Shopify API access** row displays **Write access**.
11. Document the rotation policy. HotWax Keychain retains the OMS token for credential resynchronization, so do not revoke or allow it to expire until it is replaced through the supported Keychain flow and a resync is proven.

### Expected result

The approved Shopify shop is connected to exactly one Product Store, every simple-profile API capability is available, the live OAuth handles match the approved scope profile, the selected remote has `SHOP_RW_ACCESS`, and Company Product Sync reports **Write access**.

### Evidence to save

Save the token subject, purpose, expiry, and vault record; connection request identifier and acceptance; shop and Product Store identifiers; returned OAuth handles and scope approval; order-import compatibility confirmation; selected remote identifier and access scope; and the positive Product Sync access state.

### Stop and resolve if

Stop if the launch requires a separate integration subject: the current Maarg screen cannot issue a token for it, and entering another username returns `You are not allowed to generate tokens for other users.` A signed-in named administrator may issue only that administrator's self-token when policy permits. Also stop if the request remains pending or is rejected; protected-data approval or a required API capability is missing; the refreshed handles do not match the approved scope profile; order-import compatibility is unconfirmed; an unexpected advanced handle is unresolved; the remote cannot be corrected; or Product Sync shows **Update required**, **Read only**, or **Unavailable**. Do not proceed to an order chapter when the deployed import requires `read_returns` for this standard profile. The Company token-generation action calls a missing Maarg route; do not use it as the approved issuance path. A Keychain payload can omit `accessScope`, so refreshing OAuth scopes alone does not correct the remote capability.

### Next chapter

Continue only after all four gates—OMS token, Shopify installation, Keychain approval, and Company verification—are positive and order-import compatibility is confirmed.

## 5. Review Shopify mappings

**Owner:** Company application administrator

**Application:** Company App

### Before you begin

Have the connected shop, active Product Store, actual Shopify values, and approved business meanings for product types, sales channels, payment methods and gateways, and shipping methods.

### Steps

1. Open Company App `/shopify-connection-details/<shop-id>`. For **Product types**, open `/shopify-connection-details/<shop-id>/product-types`, select each HotWax product type, enter its Shopify value in **Shopify ID**, and select the save icon. Confirm `Mapping updated successfully` and that the Shopify value displays as a chip beside the selected product type.
2. For **Sales channels**, open `/shopify-connection-details/<shop-id>/sales-channels`, select each HotWax sales channel, enter the Shopify order source in **Shopify ID**, and select the save icon. Confirm `Mapping updated successfully` and that the Shopify value displays as a chip beside the intended sales channel.
3. For **Payment methods**, open `/shopify-connection-details/<shop-id>/payment-methods`, select **Add** when the HotWax payment method does not exist, enter **Payment method name** and its Shopify value in **Shopify ID**, and save; confirm `Payment method created successfully`. Otherwise select the existing method, enter **Shopify ID**, and select the save icon; confirm `Mapping updated successfully` and the mapped value chip.
4. For **Shipment methods**, open `/shopify-connection-details/<shop-id>/shipment-methods`, select the carrier, select **Create shipment method** when needed, enter **Carrier**, **Shipment method name**, and **Shopify name**, and save. Otherwise edit the existing method's **Shopify Name** and select **Save all**. Confirm the Shopify value displays as a chip beside the intended shipment method and the page reports a successful saved mapping.
5. If starter mappings are present, compare every displayed Shopify value with the actual Shopify value. Confirm every value used by the launch has one intentional HotWax destination.

### Expected result

Each Shopify value used by the launch resolves to one reviewed HotWax destination with a clear business meaning.

### Evidence to save

Save the mapping export or screen references, source values, chosen destinations, reviewer, and timestamp.

### Stop and resolve if

Stop for unmapped values or many-to-one mappings whose business meaning is unclear. Do not import products or orders while a required mapping is unresolved.

### Next chapter

Continue with the initial product sync after the mapping review is complete.

## 6. Import and validate products

**Owner:** Company application administrator

**Application:** Company App

### Before you begin

Confirm governed SKU and barcode rules, products included from the connected shop, approved product-type mappings, and source Shopify product and variant counts.

### Steps

1. Open Company App `/shopify-connection-details/<shop-id>/product-sync`. If the connection card shows **Setup new product sync**, open it; **Update Shopify access scope**, **Shopify write access required**, **Upgrade required for new product sync**, **Upgrade to new product sync**, or **Disable old product sync** is a stop condition.
2. Select **Review configurations**. On **Confirm product store**, select the Product Store, review any linked Shopify shops, select **I have verified that these Shopify stores are part of the selected Product Store**, and select **Next**.
3. On **Confirm internal name mapping**, select the governed identifier—**SKU**, **UPCA / Barcode**, or **Shopify internal id**—and select **Next**. The choice must match the approved SKU and barcode policy.
4. On the import review, compare Shopify and HotWax product and variant counts, linked-shop count, and **Shopify API access**. Select **Am I making a mistake?** for the sample check. Resolve **Conflict** results and investigate unexpected **Not found in HotWax** results; if the page shows **Review possible catalog mismatch**, select **I reviewed the warning and want to continue** and **Continue to import** only for an approved exception.
5. Select **Run product import**. In **Background sync**, select **Setup Job** if the shop-specific job is missing, select **I understand and want to start the first product sync**, then select **Start product sync**.
6. Follow `Product export request payload`, `Pending bulk operations`, and `Bulk file process` until the run is terminal. Confirm `Product sync request completed.` Select **Finish setup** when offered and confirm `Recurring product sync scheduled every 15 minutes.`; it saves cron `0 */15 * ? * *` with paused `N` and opens the dashboard. If already active, select **Open sync page**.
7. Compare Shopify product and variant counts with imported counts; record failed and skipped counts. Inspect representative simple products and variants for SKU, barcode, Shopify product and variant identifiers, and Product Store association. Reconcile duplicate or missing identity exceptions with the launch owner.

### Expected result

The Product Sync terminal result and reconciliation show that intended Shopify products and variants have correct identity and Product Store association.

### Evidence to save

Save source and imported counts, terminal job state, failed and skipped counts, sample identifiers, identity exceptions, and their approved disposition.

### Stop and resolve if

Stop if Product Sync does not reach a terminal success state, counts do not reconcile, or any duplicate or missing identity exception is unapproved. Do not load inventory until exceptions are resolved or explicitly accepted by the launch owner.

### Next chapter

Continue to facilities and location mapping when product identity is reconciled.

## 7. Create facilities and map Shopify locations

**Owner:** Company application administrator

**Application:** Company App

### Before you begin

Have the approved facility list, Shopify location identifiers and names, physical-location intent, Product Store association, and each location's inventory, routing, and fulfillment role.

### Steps

1. To create a facility first, open Company App `/create-facility`, select **Type**, enter **Name** and **Internal ID**, optionally enter **External ID**, and select **Create facility**. Confirm `Facility created successfully.` Then open `/create-facility/address/<facility-id>` to save its address and `/create-facility/config/<facility-id>`.
2. In **Add Store Configuration**, select **Add** under **Product Stores**, select the Product Store, set it as **Primary** when appropriate, select **Sell Inventory Online** and **Uses native fulfillment app** only when approved for that facility, then select **Save configurations**. Confirm the facility detail page shows the Product Store association and selected fulfillment settings.
3. To import a Shopify location, open `/shopify-connection-details/<shop-id>/locations`, select **Import facility**, select only the intended Shopify locations, select **Retail Store** or **Warehouse**, and select the download action. Confirm the `{count} locations imported` result. Re-open each created facility and explicitly add and verify its Product Store association before mapping; importing from this screen alone does not prove that association.
4. In `/shopify-connection-details/<shop-id>/locations`, select the facility row, enter the Shopify location identifier in **Shopify ID**, and save. Confirm `Mapping updated successfully`, then select **Run Facility Audit** and verify the summary shows the required locations as **mapped** with zero unintended **not imported** or **stale** locations.
5. Review the Shopify location identifier and name, HotWax facility identifier and name, Product Store association, and whether the facility participates in inventory, routing, and fulfillment.

### Expected result

Every active Shopify location used by the launch has one intentional physical-facility mapping and Product Store association.

### Evidence to save

Save a location-to-facility mapping table with Shopify identifiers and names, HotWax identifiers and names, Product Store, and operational roles.

### Stop and resolve if

Stop if an active Shopify location has no intentional facility mapping or maps to an unsuitable physical facility. Do not use `_NA_` as a universal facility or location mapping.

### Next chapter

Continue to starting inventory only after products, facilities, and all required location mappings are reconciled.

## 8. Seed starting inventory from Shopify

**Owner:** HotWax integration operator and Company application administrator

**Application:** Maarg Admin and Company App

### Before you begin

Confirm complete product identity, facility and location mappings, a valid Shopify remote internal identifier, approved inventory cutover, and that Shopify quantity on hand is the approved initial source. Pause the shared Shopify bulk-operation poller schedules and confirm global isolation before starting.

| Flow | Purpose in this guide | Source of truth |
| --- | --- | --- |
| Shopify to HotWax Commerce | One-time starting quantity-on-hand seed | Shopify |
| HotWax Commerce to Shopify | Ongoing available-to-promise publication after cutover | HotWax Commerce |

### Steps

1. In **Maarg Admin → System → System Messages**, confirm no unrelated message under parent type `ShopifyBulkQuery` is in `SmsgProduced` or `SmsgSent`.
2. Keep both shared Shopify bulk-operation poller schedules paused.
3. Open **Maarg Admin → System → Service Jobs**, open `sync_ShopifyInventoryReset`, set the selected Shopify shop identifier, and select **Run Job** once. The current path is `/qapps/system/ServiceJob/Jobs/ServiceJobDetail?jobName=sync_ShopifyInventoryReset`. Save the job-run identifier.
4. In **System Messages**, find the resulting `BulkQueryShopifyInventoryReset` message and record its exact `systemMessageId`.
5. Open `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery`, select **Run Job** once, and verify that the recorded message—not another bulk query—moves from `SmsgProduced` to `SmsgSent` and receives the Shopify bulk-operation identifier.
6. Open `poll_ShopifyBulkOperationResult` and use one-time **Run Job** actions until the recorded message reaches its expected terminal state. Keep `poll_BulkOperationResult_ShopifyBulkQuery` paused for this inventory operation.
7. In **Maarg Admin → MDM → Data Manager Imports**, wait for the `RESET_SHOPIFY_INVENTORY` load tied to the recorded message to reach a terminal result.
8. Compare sample Shopify `on_hand` values with HotWax quantity on hand. Verify external inventory reset records and that outbound publication did not echo unapproved quantities to Shopify during the seed.
9. Restore only the schedules approved for normal operations after validation.

### Expected result

The recorded message completes its inbound Shopify inventory path, its `RESET_SHOPIFY_INVENTORY` Data Manager load is terminal and positive, and sample quantity-on-hand values reconcile in the Shopify-to-HotWax direction.

### Evidence to save

Save job-run final status; exact `BulkQueryShopifyInventoryReset` `systemMessageId`; Shopify bulk-operation identifier and transitions; `RESET_SHOPIFY_INVENTORY` counts and errors; sample quantity comparison; external reset records; and schedule-state evidence. Evidence screens include `/qapps/system/ServiceJob/JobRuns/JobRunList`, `/qapps/system/SystemMessage/Message/SystemMessageList`, and `/qapps/Oms/DataManager/DataManagerImport/DataManagerImportList`.

### Stop and resolve if

Stop if an unrelated produced or sent bulk message exists, the recorded message is queued without download and processing evidence, the Data Manager load fails, quantities do not reconcile, or outbound inventory publishes unapproved seed values. The released Company inventory action is not an inbound Shopify inventory import; use this Maarg Admin procedure until a tested supported Company flow is released.

### Next chapter

Continue to order infrastructure only after inventory seeding is reconciled and approved normal schedules are restored.

## 9. Configure Maarg Admin order infrastructure

**Owner:** HotWax integration operator

**Application:** Maarg Admin

### Before you begin

Have the selected shop identifier and domain, environment, AWS account and region, approved queue naming, launch date, stored AWS credentials, approved queue policies, and the Chapter 4 order-import compatibility confirmation.

### Steps

1. Open **Maarg Admin → Shopify → Shopify Order Integration Setup** at `/qapps/Oms/Shopify/ShopifyOrderIntegrationSetup?shopId=<shop-id>`. In **Select Shopify Store**, choose the selected shop and select **Refresh / View Health Status**. Treat the `✅ Integration Stack Fully Configured` or `⚠️ Integration Setup Incomplete` banner only as a configuration summary; it is not a runtime gate. Return channels, return-application modeling, and gift-card mapping are excluded from this launch and do not block it.
2. Save included-profile section evidence: **MDM Bridge Configuration** must show **MDM Framework Status** `✅ Valid`; **Data Manager Configs** must include configured `SYNC_SHOPIFY_ORDER` and `BULK_ORDER_HISTORY` services; **Global AWS/SQS Configuration** must show `✅ Connected` for the selected queue; and `consume_ShopifyOrders_SQS` must show `✅ Active` with the approved **Queue Name**, **Remote ID**, and **Expire Lock Minutes**. Correct only the selected required section using its visible action, such as **Fix MDM Data** then **Load XML**, **Load Configurations Template** then **Load Configs**, **Edit Service** then **Update Config**, or consumer **Update**.
3. In **Order Sync System Properties**, verify `newOrderSync.launchDate` and `orderSyncHistory.lastSyncDate`. Use **Edit**, enter the approved **Value**, and select **Update Property**; use **Set to Now** only when the approved launch cutoff is now.
4. In **Webhooks Management**, register both realtime order topics:
   - For new orders, select **Subscribe New Webhook**, enter `ORDERS_CREATE` in **Topic**, verify **EndPoint / ARN**, and select **Register**. This topic provides the dedicated new-order signal during high-volume order creation instead of relying on order updates alone.
   - For order changes, select **Subscribe ORDERS_UPDATED**, verify **EndPoint / ARN**, and select **Register**.
   - Refresh the webhook list and confirm that both `ORDERS_CREATE` and `ORDERS_UPDATED` rows show the intended endpoint. `Webhook creation triggered.` is not registration evidence.
5. Configure the fallback `queue_ShopifyOrderSync` job by its visible row state:

   - **❌ Incomplete:** before opening **Fix Configuration**, open the linked job name in **Maarg Admin Service Job** detail and record `runAsBatch`, `fromDate`, and `additionalParameters`, or obtain their governed approved values. **Save Config** submits only **System Message Type** and **Remote ID** and may blank those omitted parameters. Enter the two visible values and select **Save Config** only after the three hidden values are recorded or approved. Re-open the resulting configured row, select **Edit**, restore the exact recorded or approved **Run As Batch**, **From Date**, and **Additional Params**, select **Update Job**, then re-open it and verify all five values and its `✅ Active` status.
   - **Configured intended-shop row:** select **Edit**, review **System Message Type**, **Remote ID**, **Run As Batch**, **From Date**, and **Additional Params**, then select **Update Job** only with the exact recorded or governed approved values. Re-open the row and save every displayed value and its `✅ Active` status.
   - **⚠️ Unassigned:** enter the approved **New Job Name** in **Clone**, select **Clone Job**, then re-open the cloned intended-shop row and follow the applicable incomplete or configured branch.
   - **❌ No fallback jobs found matching `queue_ShopifyOrderSync`:** select **Clone Standard Job**, enter the approved **New Job Name**, select **Clone Job**, then re-open the cloned row and follow the applicable incomplete or configured branch.

6. Configure `sync_ShopifyOrderHistory` by its visible row state:

   - **❌ Incomplete:** before opening **Fix Configuration**, open the linked job name in **Maarg Admin Service Job** detail and record `windowDays`, or obtain its governed approved value. **Save Config** submits only **System Message Type** and **Remote ID** and may blank the omitted `windowDays`. Enter the two visible values and select **Save Config** only after `windowDays` is recorded or approved. Re-open the resulting configured row, select **Edit**, restore the exact recorded or approved **Window Days**, select **Update Job**, then re-open it and verify **System Message Type**, **Remote ID**, **Window Days**, and its `✅ Active` status.
   - **Configured intended-shop row:** select **Edit**, review **System Message Type**, **Remote ID**, and **Window Days**, then select **Update Job** only with the exact recorded or governed approved values. Re-open the row and save every displayed value and its `✅ Active` status.
   - **⚠️ Unassigned:** enter the approved **New Job Name** in **Clone**, select **Clone Job**, then re-open the cloned intended-shop row and follow the applicable incomplete or configured branch.
   - **❌ No historic sync jobs found matching `sync_ShopifyOrderHistory`:** select **Clone Standard Job**, enter the approved **New Job Name**, select **Clone Job**, then re-open the cloned row and follow the applicable incomplete or configured branch.

7. Complete the HotWax-owned infrastructure handoff. Its evidence must show that the EventBridge rule matches both `orders/create` / `ORDERS_CREATE` and `orders/updated` / `ORDERS_UPDATED`, and must include the SQS queue URL and ARN, dead-letter queue ARN, redrive policy, queue policy, resource policy, a successful AWS test-event identifier for each topic, target-queue delivery, consumer-read evidence, failed-test dead-letter evidence, and policy comparison to the approved environment.
8. Do not infer a Maarg service-job run, system message, or Data Manager load from the infrastructure test event: this screen does not provide a source-proven action that causally creates those records. Runtime proof for the included profile is deferred to the controlled real Shopify order in Chapter 13, where the order, job run, system message, and Data Manager record are tied together.

### Expected result

Included-profile MDM, remote, queue, consumer, property, webhook, fallback, and history configuration evidence is positive. Separate `ORDERS_CREATE` and `ORDERS_UPDATED` webhook rows exist, and the HotWax infrastructure handoff proves both EventBridge topic patterns, queue delivery, and dead-letter delivery. The health banner and configuration actions do not prove runtime order import.

### Evidence to save

Save the included-profile section states and identifiers, queue URL and ARN, dead-letter ARN, policy references, both EventBridge topic patterns and test-event identifiers, target-queue deliveries, consumer-read results, failed-test dead-letter result, separate `ORDERS_CREATE` and `ORDERS_UPDATED` webhook-list rows, and property values. For every incomplete fallback or history job, save the Service Job detail's pre-save hidden values or governed approval, then the re-opened **Edit** values and `✅ Active` status after **Update Job**. Save runtime job, system-message, and Data Manager evidence only with the controlled Shopify order in Chapter 13.

### Stop and resolve if

Stop for missing Chapter 4 order-query compatibility evidence, a missing required included-profile resource or section state, inaccessible queue, failed delivery, missing redrive behavior, a missing `ORDERS_CREATE` or `ORDERS_UPDATED` webhook row or EventBridge pattern, failed consumer, incomplete required Data Manager configuration, a cross-environment identifier, or any unknown fallback `runAsBatch`, `fromDate`, `additionalParameters`, or history `windowDays` value. Do not use **Save Config** until a governed value is available. The setup screen does not by itself provision or prove EventBridge delivery, queues, dead-letter handling, redrive, policies, or runtime order import.

### Next chapter

Continue to open-order history only after realtime queue infrastructure and the fallback prerequisites are proven.

## 10. Import open-order history and enable recurring Order Sync

**Owner:** HotWax integration operator and Company application administrator

**Application:** Maarg Admin and Company App

### Before you begin

Have the agreed merchant-zoned history start and launch cutoff, deployed instance or JVM time zone, valid Shopify remote identifier, approved window size, level-2 protected-data approval, completed realtime infrastructure, and the Chapter 4 order-import compatibility confirmation. Inventory bulk work must be complete because inventory and history use overlapping bulk-operation responsibilities. `updatedAt` selects open, unfulfilled orders for a query window. For an order not already in HotWax Commerce, `createdAt < newOrderSync.launchDate` determines historical creation. Existing orders are not recreated; pre-cutoff orders are historical work, use `needsInventoryIssuance=N`, and park unfulfilled ship groups in `GENERAL_OPS_PARKING`.

### Steps

1. Convert the merchant's zoned history start and launch cutoff to the deployed instance or JVM time zone. Store `newOrderSync.launchDate` as the converted launch cutoff and `orderSyncHistory.lastSyncDate` as the converted history start in zone-less `yyyy-MM-dd HH:mm:ss` format.
2. In **System Messages**, confirm no unrelated `ShopifyBulkQuery` message is in `SmsgProduced` or `SmsgSent`. Keep `poll_ShopifyBulkOperationResult` paused while this released history flow is active.
3. Calculate and record the exact converted start and end timestamp for the first history window. Clone `sync_ShopifyOrderHistory` for the selected shop. Set `systemMessageTypeId` to `BulkOrderHistoryQuery`, set the correct Shopify `systemMessageRemoteId`, set the approved window size—seven days unless the tested release defines another safe default—and select **Run Now** once. Save the job-run identifier and that window's exact bounds.
4. Record the resulting `BulkOrderHistoryQuery` `systemMessageId` together with the exact converted start and end timestamp for its queued window.
5. Select **Run Job** once on `send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery` and verify that the recorded history message is the message sent.
6. Use one-time **Run Job** actions on `poll_BulkOperationResult_ShopifyBulkQuery` until the recorded history message reaches the expected terminal state.
7. Wait for the tied `BULK_ORDER_HISTORY` Data Manager load to reach a terminal result, then reconcile Shopify query records to Data Manager records. Record the same window's exact converted start and end timestamp with the job run, `systemMessageId`, and Data Manager result.
8. For each window, compare eligible unknown pre-launch Shopify orders with newly created HotWax orders; prove that existing orders were not duplicated and post-launch records were not created by the history flow. Calculate the exact next start and end timestamp before queueing the next window so the evidence proves no gap or overlap.
9. After history reconciliation, open `/shopify-connection-details/<shop-id>/order-sync/configure`. Verify **Shopify shop**, **Product Store**, **Shopify remote**, and **Order mapping readiness**. Select **Create paused Order Sync job** and confirm **Batch job** and **Activation** both show **Paused**.
10. In **Schedule**, enter a valid containment **Quartz cron expression** whose displayed **Schedule preview** and next run are after the controlled validation window. Verify the displayed **OMS runtime timezone** and select **Save schedule**. Resolve every **Missing** mapping in the linked mapping screen or obtain an approved exception before activation.
11. Select **Review and activate**, verify the selected shop, remote, containment schedule, and mapping review in **Activate Order Sync**, then select **Activate Order Sync**. Confirm **Activation** shows **Active** and open `/shopify-connection-details/<shop-id>/order-sync` immediately; **Run now** is unavailable while the job is paused.
12. In the **Order sync jobs** card, open **Queue order requests**. With a controlled eligible Shopify order in the selected batch window, select **Run now** and confirm `The standard next batch was queued as <id>.` Save the resulting **Queued SystemMessage**, job run, the tied import, and its Data Manager result. Do not allow the containment schedule to fire while that run is unresolved.
13. If the controlled batch is positive, open **Queue order requests**, replace the containment expression with the approved normal recurrence in **Quartz cron expression**, verify its **Schedule preview**, and select **Save**. If the batch fails, immediately turn **Active** off in that same job detail and select **Save** before the containment schedule fires; preserve the failure evidence and do not enable normal recurrence.

### Expected result

Each history window has a positive terminal bulk and Data Manager result, the open-order reconciliation is complete, and the contained active Order Sync has a positive controlled batch before normal recurrence is saved.

### Evidence to save

Save converted property timestamps and the exact converted start and end timestamp for **every** queued history window, along with its history job-run identifier, `BulkOrderHistoryQuery` and result messages, exact `systemMessageId`, `BULK_ORDER_HISTORY` counts and errors, source-to-load reconciliation, duplicate proof, containment and normal recurrence expressions, first controlled-batch message, job-run, import, and Data Manager result, and activation record.

### Stop and resolve if

The history cursor advances when a window is queued; if it fails, reset the cursor to the failed window before retrying. Stop if the Chapter 4 order-query compatibility evidence is missing or if protected-data approval, the shared bulk isolation gate, the recorded window bounds, the Data Manager result, or reconciliation fails. Pause the contained job before its first scheduled fire if the controlled batch fails. Orders created more than sixty days ago need separately approved `read_all_orders` and are outside this guide. Do not use the current Company history action until its compatibility is released and tested.

### Next chapter

Continue to routing and fulfillment when history is reconciled and recurring Order Sync is safely active.

## 11. Configure standard routing and fulfillment

**Owner:** Company application administrator and operations validator

**Application:** Order Routing app and Company App

### Before you begin

Have mapped fulfillment facilities, approved routing and brokering policy, split-order behavior, shipping mappings, and fulfillment notification and tracking policy.

### Steps

1. In the Order Routing app, open `/order-routing`. Select **Create routing group**, enter the approved group data, select **Save**, and confirm `Changes saved successfully`. Open `/order-routing/<routing-group-id>` and set **Status** to **Active** rather than **Draft**.
2. In the routing-group detail, add the approved eligible facilities and routing rules. Set each routing rule to **Active**, select **Save**, and confirm `Saved` and `Changes saved successfully` before using the rule.
3. Set the approved split-order behavior in the active routing group. Use **Add schedule** or **Edit schedule** only for the approved routing cadence, then select **Save** and confirm the group's and each rule's **Active** state.
4. Open `/order-routing/<routing-group-id>/test` and run the controlled routing test with the standard shippable product, shipping method, and mapped facility. Confirm the result selects an eligible facility. Use **Run now** only for the approved schedule and inspect **History** for the resulting run.
5. In Company App, recheck `/shopify-connection-details/<shop-id>/shipment-methods` for the mapped Shopify shipping method. Open `/product-store-details/<product-store-id>` and verify **Fulfillment notifications** and **Enable tracking** are enabled for the approved standard flow.

### Expected result

A standard shippable Shopify order can route to an eligible facility, be fulfilled there, and return fulfillment and tracking information to Shopify.

### Evidence to save

Save the routing-group and rule identifiers, their **Active** states, controlled-test result, schedule and history references, selected-facility configuration, split-order decision, shipping mapping evidence, and notification and tracking settings.

### Stop and resolve if

Stop if the routing group or any required rule remains **Draft**, no eligible facility is selected by the routing test, shipping values are unmapped, or fulfillment and tracking publication is not configured. Do not add pickup, preorder, advanced promise, or returns setup to this standard launch.

### Next chapter

Continue to operational access once standard routing and fulfillment settings are proven.

## 12. Create operational users

**Owner:** Company application administrator

**Application:** Company App

### Before you begin

Have the named operational users, approved roles or groups, Product Store assignments, facility assignments, access owner, and access-review date. Stores and facilities must already exist.

### Steps

1. In Company App, open `/users` and select the create action to open `/create-user`. Leave **Facility login** off; it is a distinct party-group flow. Enter required **First name** and **Last name** and the approved optional **Employee ID**, **Email**, and **Phone number**, then select **Create User**. Confirm `User created successfully`, open `/user-confirmation/<party-id>`, and select **Quick Setup**.
2. Select the template that exactly matches the user's operational job, then follow only that template's visible fields and assignments:

   - **Admin:** enter **Username**, **Password**, and **Email**; choose **Require password reset on login** when policy requires it; select the approved **Product stores**; do not assign facilities; then select **Finish setup** and confirm **Setup complete**. Verify security group `ADMIN` and Product Store role `APPLICATION_USER`.
   - **Merchandising manager:** enter **Username**, **Password**, and **Email**; apply the approved password-reset policy; select the approved **Product stores**; do not assign facilities; then select **Finish setup** and confirm **Setup complete**. Verify security group `MERCHANDISE_MGR` and Product Store role `APPLICATION_USER`.
   - **CSR:** enter **Username**, **Password**, and **Email**; apply the approved password-reset policy; do not assign Product Stores or facilities; then select **Finish setup** and confirm **Setup complete**. Verify security group `CSR`.
   - **Fulfillment manager:** enter **Username**, **Password**, **Email**, and **Employee ID**; apply the approved password-reset policy; select every approved facility under **Select Facilities**; do not assign Product Stores; then select **Finish setup** and confirm **Setup complete**. Verify security group `STORE_MANAGER`, party role `WAREHOUSE_PICKER`, and each facility assignment with role `WAREHOUSE_PICKER`.
   - **Fulfillment:** enter **Employee ID** only, then select **Finish setup**. This template does not create a login, security group, Product Store assignment, or facility assignment; it ensures party role `WAREHOUSE_PICKER`, then redirects directly to `/user-details/<party-id>` without a **Setup complete** alert. It does not provide application access.

3. If a user needs an application login with an approved security group but no login-bearing template above supplies the required access, select **Setup Manually** at `/user-confirmation/<party-id>` and confirm the prompt; it opens `/user-details/<party-id>`. In **Login details**, enter **Username** and **Password**, then select **Add credentials**. In **Clearance → Security Group**, select **Add to security group** (or **Add**), choose the approved group or groups, and use the save-icon action; confirm `Security group(s) updated successfully.` In **Product stores**, select **Add to a product store** (or **Add**), choose the approved stores, and use the save-icon action; confirm `Role(s) updated successfully.` For required facilities, open the **Added to facilities** assignment row in **Fulfillment**, choose the approved facilities, and use the save-icon action; confirm `Facility associations updated successfully.` Re-open `/user-details/<party-id>` and verify the exact saved Username, **Block login** state, security groups, Product Stores, facilities, and application access. Do not infer that a template provides an unshown assignment.
4. For Admin, Merchandising manager, CSR, and Fulfillment manager, **Setup complete** confirms creation only; then open `/user-details/<party-id>` and verify **Username**, **Block login** is off, and the exact template-specific security group, Product Store, and facility results above. For **Fulfillment**, use the direct `/user-details/<party-id>` redirect to verify the `WAREHOUSE_PICKER` party role and the expected absence of login and security-group assignments. Confirm the relevant saved result when an assignment changes.
5. Sign in only with a login-bearing template and complete the job-specific application and action test. Record the access owner and review date for each user; do not retain plaintext credentials as evidence.

### Expected result

Each named operational user has the exact template-specific account, security group, Product Store, facility, and/or `WAREHOUSE_PICKER` role result. Every job that needs application access has a named login and a recorded successful job-specific test.

### Evidence to save

Save user identifiers; the exact security group where the template creates one, or explicit no-login/no-security-group evidence for **Fulfillment**; Product Store and facility assignments and count where applicable; `WAREHOUSE_PICKER` role evidence where applicable; access-test result; access owner; and review date. Do not save plaintext credentials.

### Stop and resolve if

Stop if the saved account, security group, Product Store, facility, or `WAREHOUSE_PICKER` role does not match the selected template and approved access, or if a required application login cannot be supplied through a tested login-bearing template or the supported manual route. The initial Maarg administrator is a platform recovery and administration account, not a routine operations account. Do not recreate legacy raw permission records.

### Next chapter

Continue to launch validation once operational users have passed their job-specific access tests.

## 13. Validate the launch end to end

**Owner:** Launch owner and operations validator

**Application:** Shopify Admin, Company App, and Maarg Admin

### Before you begin

Confirm that Chapters 1 through 12 are complete, a standard shippable test product is available, an eligible facility can fulfill it, and all evidence owners are available for sign-off.

### Steps

1. Place one controlled real Shopify order using a standard shippable product and record the Shopify order identifier.
2. Verify the expected payment and shipping values in Shopify.
3. Prove that the webhook or fallback flow imports the order exactly once.
4. Verify product, channel, payment, shipping, and location mappings resolve; the order reaches the intended HotWax state; and routing assigns an eligible facility.
5. Have the facility process fulfillment and confirm fulfillment and tracking publish back to Shopify.
6. Verify inventory changes follow the approved post-cutover HotWax-to-Shopify direction.
7. Verify no duplicate order, fulfillment, or inventory message was produced.
8. Review and save the job-run, system-message, Data Manager, and application-screen evidence for every preceding result.
9. Record sign-off, release versions, test order identifier, evidence links, known exceptions, and rollback ownership.

### Expected result

One controlled order proves import, mapping, routing, facility assignment, fulfillment, tracking return to Shopify, approved inventory direction, named operational access, and absence of duplicates.

### Evidence to save

Save the Shopify order identifier and states, HotWax order identifier and state, mapping and facility evidence, fulfillment and tracking confirmation, inventory evidence, job runs, system messages, Data Manager loads, release versions, sign-off, exceptions, and rollback owner.

### Stop and resolve if

Stop the launch for a pending or rejected Shopify request, missing OAuth scope, unmapped product or order value, product count mismatch, facility or Shopify-location mismatch, bulk operation that never downloads or processes, failed Data Manager load, history cursor advanced past a failed window, unavailable realtime queue or consumer, duplicate import, fulfillment or tracking not returned to Shopify, or inventory moving in the wrong direction. Recover the failed stage, save the failure evidence, and repeat the affected validation; do not sign off on a queued job, no visible error, or an order that merely exists somewhere.

### Next chapter

The launch is ready for operational handoff only after the launch owner records positive evidence and sign-off.

## Troubleshooting and recovery

Use this table to recover without bypassing the applicable stop gate.

| Symptom | Recovery action | Do not continue until |
| --- | --- | --- |
| Shopify request is pending, rejected, duplicated, or superseded | In HotWax Keychain, verify the intended request, record its disposition, correct the cause, and accept only the intended replacement. | The correct request is accepted and Company shows the expected connected shop. |
| OAuth scope or Product Sync access is missing | Refresh scopes, verify the selected remote is `SHOP_RW_ACCESS`, correct that selected remote if needed, and recheck Product Sync. | Product Sync shows **Write access**. |
| Product or order value is unmapped | Add or correct the reviewed mapping and retest the value. | Each used source value has an intentional destination. |
| Product counts or identity do not match | Compare source and terminal import counts, investigate failed or skipped records, and resolve identity exceptions. | Counts reconcile or the launch owner explicitly accepts a documented exception. |
| Facility and Shopify location disagree | Correct the physical facility mapping and Product Store association. | Every active operational location has an intentional mapping. |
| Bulk operation never downloads or processes | Keep the global `ShopifyBulkQuery` isolation gate, record the exact `systemMessageId`, run only the prescribed one-time job, and inspect downstream Data Manager evidence. | The recorded message and its Data Manager load are terminal and positive. |
| Data Manager load fails | Save its error and tied message, correct the source or configuration cause, then rerun the isolated affected flow. | Terminal counts and error review are positive. |
| History cursor moved past a failed window | Reset `orderSyncHistory.lastSyncDate` to the failed window before retrying and preserve the failure evidence. | That exact window is reconciled before later windows proceed. |
| Realtime queue or consumer is unavailable | Repair EventBridge, SQS, dead-letter, redrive, policies, consumer, and webhook prerequisites through the HotWax-owned handoff. | Test delivery, consumer read, and failed-test dead-letter path are proven. |
| Duplicate import, fulfillment, or inventory message | Pause the affected schedule, preserve identifiers and transitions, determine the duplicate source, and reconcile the data before resuming. | No duplicate is created in a controlled repeat test. |
| Fulfillment or tracking is absent in Shopify | Verify facility processing, shipping mapping, notification configuration, and tracking publication, then repeat the controlled fulfillment. | Shopify shows the expected fulfillment and tracking. |
| Inventory moves in the wrong direction | Pause unapproved publication, confirm the current launch phase, and reconcile sample values before resuming the approved direction. | Seeded inventory is Shopify to HotWax; post-cutover publication is HotWax to Shopify. |

## Learn more

Use application manuals only for optional operating detail after this guide's required outcome is complete. Keep the following boundaries clear:

- **Maarg Admin** is the platform-administration application used for the bootstrap, tokens, service jobs, system messages, Data Manager, and integration setup.
- **Company App** is used for Product Store, connection verification, mappings, Product Sync, facilities, operational users, and recurring Order Sync.
- **Order Routing app** is used to create, activate, test, schedule, and review standard routing groups and rules.
- **Shopify Admin** owns app installation, OAuth approval, and the controlled order.
- **HotWax Keychain** owns acceptance of the pending instance request.

For advanced or excluded launch profiles, contact HotWax Commerce for an advanced launch plan rather than extending this procedure with untested steps.
