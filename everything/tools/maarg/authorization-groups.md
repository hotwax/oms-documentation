---
description: >-
  Review Maarg group memberships, permissions, and artifact authorizations, and
  verify an approved access change without assuming that a group name grants a role.
---

# Groups And Artifact Authorization

Use this guide to investigate why an authenticated user can or cannot perform a Maarg operation, and to plan a narrowly scoped access change. The effective result depends on the user's active memberships, the exact operation, and the deployed authorization configuration. A group name or a visible menu is not a complete permission report.

**Navigation:** Open **Hotwax Commerce > Security > Security Groups** for Moqui user groups and **Hotwax Commerce > Security > Artifact Groups** for protected-artifact definitions. Despite the **Security Groups** label, these util screens manage Moqui `UserGroup` records, not OFBiz `SecurityGroup` records.

**System > Security > User Groups** and **System > Security > Artifact Groups** are separate runtime administration screens. Their routes and available tabs differ. Use the menus for the intended application rather than constructing a URL or assuming that similarly named pages are interchangeable.

**Verification scope:** This guide is source-verified against Maarg 6.4.0 with `maarg-util` 4.4.0, runtime 4.1.0, and framework 4.2.0. It includes the util authentication integration and framework authorization checks. No live memberships, authorization rules, or access settings were changed or tested. Confirm the target deployment's realm, mappings, overrides, and security policy with its owner.

## Before You Start

- Record the environment, approved user identifier, business task, and exact failed screen, service, or API operation.
- Confirm who owns the access decision and whether memberships are maintained locally or synchronized from OFBiz.
- Gather existing membership dates and rule details before proposing a change. Keep a protected before-state record according to the organization's audit policy.
- Test policy changes with an approved non-production identity and synthetic data. Include both an operation that should succeed and one that must remain denied.
- Keep a separate authorized administrator available. Do not test a change by modifying the only working administrator's access.

{% hint style="warning" %}
Group and artifact pages are editing screens. **Create**, **Add**, **Apply**, **Update**, and trash controls change shared access configuration; they are not previews. A single group-level change can affect every member. Do not grant broad access, remove a deny rule, disable additional authentication, or widen a pattern simply to make an error disappear.
{% endhint %}

## Understand The Access Records

| Record | Purpose | What it does not establish |
| --- | --- | --- |
| User group | Collects permissions, artifact authorizations, preferences, and login-related settings | Its ID, description, or Group Type does not by itself define a complete business role |
| User-group membership | Associates a user with a group over **From Date** and **Thru Date** | A visible membership row can be future-dated or expired |
| User permission and group permission | A named permission and its dated assignment to a group | Creating a permission definition does not assign it, and inventing an ID does not make application code enforce it |
| Artifact group and members | Identifies protected screens, transitions, services, entities, API paths, or other artifacts | An artifact group is not a group of people and does not alone grant access |
| Artifact authorization | Connects a user group to an artifact group with an authorization type, action, and optional service | A single row is not the whole effective policy across all groups and invoked artifacts |
| Tarpit | Limits repeated use of configured artifacts | A velocity restriction is not the same as a missing authorization |

Named permissions and artifact authorizations are separate checks. For example, application code can require a named permission in addition to the authorization needed to reach its screen or service. Grant only the access required by the actual operation.

## Review A User Group

1. Open **Hotwax Commerce > Security > Security Groups**.
2. Filter by **Group ID**, **Group Type**, or **Description**, then select **Find**.
3. Open the **Group ID** and confirm its intended use with the security owner.
4. Read the following sections without submitting their forms.

| Section | Review |
| --- | --- |
| Group details | Description, **Group Type**, **IPs Allowed**, and **Require Authc Factor** |
| **Permissions** | Exact permission IDs, descriptions, and assignment dates; a permission may be marked ad-hoc |
| **Preferences** | Inherited preference values and group priority; these are not artifact grants |
| **Authorizations** | Artifact group, authorization type, action, optional authorization service, and displayed entity-filter conditions |
| **Tarpits (Use Velocity Limits)** | Artifact group, hit count, measurement duration, and restriction duration |

Changing **IPs Allowed** or **Require Authc Factor** can affect how members authenticate. Have the security owner verify the combined account/group behavior and the configured realm. These settings are not substitutes for artifact authorization, network controls, or a tested authentication policy.

## Review Membership And Its Source

For the util interface, open the intended account through **Hotwax Commerce > Security > Users** and inspect **Groups**. Each row has the group, **From Date**, **Thru Date**, and a row-specific **Update** action. The account page includes historical and future memberships; assess dates at the time of the failed request.

The runtime's **System > Security > User Groups** area additionally has a **Group Users** screen for the selected group. Do not assume that this tab exists in the util **Security Groups** area. Group-user pages display personal account data and should be opened only when that information is required and authorized.

### OFBiz-Linked Memberships

When the OFBiz realm is active, authentication can reconcile OFBiz security-group assignments into Moqui memberships. The integration uses group mappings, so an OFBiz group ID and a Moqui group ID are not interchangeable. Missing mappings or missing target groups require administrator investigation.

Local membership changes may be superseded at later authentication. Before adding or ending a local membership, have the deployment/security owner confirm the authoritative assignment, mapping behavior, and resulting permissions. Do not use a sign-in as a read-only inspection: it can update account and membership state. Do not assume that the default synchronized result is an approved least-privilege role.

### Change A Locally Managed Membership

Use these source-verified steps only after confirming that local membership management is appropriate and approved.

To add access:

1. Open the verified account's **Groups** section and select **Add Group**.
2. Select the approved **Group** and **From Date**, including the intended time zone.
3. Select **Add** once and confirm the new row.
4. If access is time-limited, set its approved **Thru Date** and select that row's **Update**. The Add dialog does not include an end-date field; account for this when scheduling the change.
5. Verify the intended access and an operation that should remain denied using the approved test identity/process.

To end access:

1. Identify the exact membership by group and **From Date**; there can be more than one dated row for the same group.
2. Set the approved **Thru Date** and select the row's **Update**.
3. Reload to confirm the saved end date. Check for other active assignments that still grant the same operation.
4. Verify the effective result through the intended access route. Do not assume existing sessions or tokens have been revoked.

Ending a membership preserves the row's history; it does not delete the user, suspend the upstream account, or cancel work already started by that identity.

## Inspect An Artifact Group

1. Open **Hotwax Commerce > Security > Artifact Groups**.
2. Filter **Group ID** or **Description**, then select **Find**.
3. Open the matching group ID.
4. Review **Artifact Members**, **Authorizations**, and **Tarpits (Use Velocity Limits)**.

For each artifact member, check:

- **Artifact Type:** The rule must apply to the kind of artifact being checked. A screen and a service are different types.
- **Artifact Name:** The installed artifact's full name/location, not its human-readable menu label.
- **Name Is Pattern:** When `Y`, the framework uses a regular-expression match. Do not treat this as a simple search wildcard or copy a broad pattern from another environment.
- **Inherit Authz:** Can extend authorization to artifacts called from an authorized artifact, subject to the framework's action and execution-context rules. Review the call path before enabling it.
- **Filter Map:** An executable Groovy expression used for matching relevant operation parameters. Treat it as reviewed application/security configuration, not a free-text filter.

For each authorization, check the **User Group**, **Authz Type**, **Action**, and optional **Authz Service Name**. The authorization service can determine a result dynamically. Displayed entity-filter sets can also constrain data access; page access is not evidence that all records are visible or writable.

## Work Out Effective Access

Use this order when an outcome differs from the intended policy:

1. **Identity and authentication:** Confirm which user and authentication route actually made the request. Resolve login, factor, or IP problems separately from permissions.
2. **Effective membership:** Check every active membership at the relevant time and, where applicable, its synchronization source. Include the framework's implicit all-users artifact-policy scope, which is not shown as an ordinary selectable group in the user-list filter.
3. **Named permission:** If the code requires a named permission, check its exact ID and both membership and permission-assignment dates.
4. **Artifact and action:** Identify the actual screen, transition, service, entity, or API path and the action being checked. A read/view grant need not authorize an update or execution.
5. **Matching rules:** Review exact names or patterns, all relevant group authorizations, filter maps, authorization services, entity filters, and inherited authorization on the call path.
6. **Enforcement context:** Have the administrator check deployed authorization settings and relevant overrides. Confirm whether a velocity limit, rather than an authorization failure, explains the response.
7. **Controlled verification:** Validate both intended access and intended denial. After an approved change, use the deployment's supported session/cache refresh procedure rather than assuming that a saved row proves the effective result everywhere.

Do not reduce the framework's evaluation to “allow always wins” or “deny always wins.” Ordinary Allow and Deny rules, **Always Allow**, inherited authorization, and dynamic checks have different behavior. In particular, Always Allow is a high-impact authorization type, not a safer version of Allow. Any change to these rules needs security review.

## Create Or Modify Access Configuration

Only carry out the approved change set after reviewing who is affected and how to recover the previous policy. The screens save configuration directly; there is no policy dry-run or approval queue shown in these forms.

### User Groups And Named Permissions

- **Create User Group** creates the approved group ID and description. Reopen it to verify. This alone does not add members or assign permissions.
- **New Permission** creates a permission definition. **Apply Existing Permission** or **Apply Ad-hoc Permission** assigns a permission to the group with **From Date** and optional **Thru Date**. Use only IDs the relevant application actually checks.
- A permission row's **Update** changes its end date. Prefer an approved end-date change when preserving assignment history is required; deletion removes the assignment row.
- Review changes to group-level login restrictions separately from permission changes. Never weaken additional-factor requirements to solve an unrelated authorization error.

### Artifact Groups And Authorizations

1. Select **Create Artifact Group** only if the approved design needs a new group. Enter the agreed ID and description, then verify the saved record.
2. Use **Add Any Artifact/Pattern** to add a reviewed type/name with explicit pattern, inheritance, and filter choices.
3. Use **Add Authorization** from the artifact group or user-group detail to connect the approved groups with the reviewed authorization type, action, and optional service.
4. Reload both sides and confirm the same authorization relationship. An artifact group can be used by multiple user groups, so review all affected assignments.
5. Test the agreed positive and negative cases, including any invoked service and record-level restriction. Record the evidence and approver before closing the change.

The visible artifact-authorization form does not have membership-style start/end dates. Do not assume a new grant will expire automatically. Coordinate any temporary policy change and its removal explicitly.

Trash controls on artifact members, authorizations, permissions, and tarpits remove configuration. Read the confirmation and impact before proceeding; removal can broaden or restrict access depending on which rule is deleted.

## Troubleshooting

| Symptom | Next check |
| --- | --- |
| A group row exists but access is absent | Check effective membership dates, named-permission dates, exact artifact/action, and all matching rules |
| A local assignment disappears or returns | Check the authoritative OFBiz assignment and deployed synchronization behavior; do not repeatedly override it locally |
| The page opens but a button or API call fails | Identify the transition/service/entity or API authorization and any explicit named permission required by that operation |
| The user sees only some records | Inspect applicable entity filters, operation parameters, and business-data scope; do not remove filters as a general fix |
| A grant was ended but access remains | Look for another active membership, implicit policy, inherited or Always Allow authorization, and existing authentication/session context |
| A new permission has no effect | Confirm that it was assigned to the group, is effective, and is actually checked by the operation |
| A request is blocked after repeated use | Check tarpit hit/duration settings and lock release time. Changing limits or releasing a lock is an approved enforcement change |
| The menu or fields differ | Confirm whether you are in Hotwax Commerce or System and check installed component versions and screen overrides |

For escalation, provide a sanitized failed operation, time zone, effective membership dates, relevant rule IDs and actions, expected positive/negative cases, and the result of the last approved change. Use [Maarg logs](log-files.md) where needed, keeping personal data and authentication material out of public examples.

## Related Guides

- [User Accounts And Access Diagnosis](user-accounts.md)
- [Token Administration](token-administration.md)
