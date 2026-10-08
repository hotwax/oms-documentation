---
description: >-
  Find a Maarg user account, distinguish authentication from authorization, and
  plan approved account changes in the correct identity system.
---

# User Accounts And Access Diagnosis

Use this guide when someone cannot sign in, can sign in but cannot complete a task, or needs an approved account lifecycle change. First identify the authentication system. A Maarg user record is not proof that the same account is enabled, provisioned, or authorized in a linked OMS.

**Navigation:** Open **Hotwax Commerce > Security > Users** and use **Find User Accounts**. This is the `maarg-util` Security screen in the Maarg 6.4.0 assembly. **System > Security** is a separate runtime administration area with its own User Account screens. Use the application's menus; do not copy a System URL into the Hotwax Commerce application path.

**Verification scope:** This guide is source-verified against Maarg 6.4.0, using `maarg-util` 4.4.0, runtime 4.1.0, and framework 4.2.0, including the util authentication integration. No live user list, account detail, password, or authentication-factor screen was opened for this guide. No account, credential, group assignment, or session was changed. Installed authentication configuration and access policies must be checked for the target environment.

## Before You Start

- Confirm the environment, the account's approved identifier, the affected application, and the intended task.
- Obtain the exact error and incident time with its time zone. Ask whether the failure occurs before sign-in, during an additional authentication step, or after sign-in.
- Confirm whether the environment uses native OMS authentication in Maarg or a linked OFBiz authentication realm. Ask the environment owner if this is unknown.
- Use an administrator authorized to view the account. Permission to view Security does not authorize resetting credentials, impersonating a user, or changing access.
- Keep personal details, account exports, audit records, and logs in an approved support channel. Do not include passwords, reset values, authentication codes, QR codes, or tokens in a ticket or screenshot.

{% hint style="warning" %}
Account screens contain immediate administrative actions. **Enable Account**, **Disable Account**, **Reset Password**, **Login As**, authentication-method controls, and **Release Now** are not diagnostic previews. Do not select them while gathering evidence. A sign-in test can also write login history, counters, and, in an OFBiz-linked deployment, synchronized account and membership data.
{% endhint %}

## Identify Which System Owns The Account

| Layer | What it represents | Operational consequence |
| --- | --- | --- |
| OMS `UserAccount` | Maarg user identity and local account fields | The Users screen's create, update, enable, disable, and password actions call OMS user services |
| OMS `UserGroupMember` and authorization records | Memberships and access checks used by Maarg | A successful sign-in does not establish permission for a screen, service, entity, or API operation |
| OFBiz `UserLogin` and security-group assignments | The upstream identity and assignments used when the OFBiz realm is configured | Upstream account and password administration must use the deployment's approved OMS process; local Maarg changes do not constitute an upstream lifecycle change |

In the OFBiz-linked flow, authentication can create or update the corresponding local OMS account and reconcile its groups. The mapping uses upstream identity information; matching visible names alone is not enough to establish that two records are the same person. Have the administrator check the actual identity linkage when investigating duplicates or mismatches.

Treat local edits to synchronized identity fields and memberships as potentially temporary. A later authentication can change them again. Do not create a second local account or rename a synchronized account to work around a failed upstream sign-in.

## Find The Account Without Changing It

1. Open **Hotwax Commerce > Security > Users**.
2. Open **Find Options** and filter by the approved **ID** or **Username**. Use **Email Address** or **User Full Name** only when needed to disambiguate the account.
3. Clear unrelated saved criteria, then select **Find**.
4. Confirm the returned identity before opening its ID or username.
5. Review the account state, group dates, and recent evidence without submitting a form.

Additional filters include **User Group**, **Login Date**, **Topic Email**, **Password Set Date**, **Req PW Change**, **Disabled**, **Locale**, and **Time Zone**. Text filters initially use a begins-with operator. Login-date and notification-topic filters can hide an otherwise valid account.

The list's group filter is not an effective-permission report. Verify membership dates on the individual account. Avoid CSV/XLSX exports unless an approved investigation requires them; an export can include many people's account details.

## Read Account State In Context

| Field or section | What to check |
| --- | --- |
| **User ID**, **Username**, **Party ID** | Confirm the intended identity and its association. A display name is not a unique identifier |
| **Disabled** and **Disabled Date** | These describe the local OMS record. Under native OMS authentication, a disabled record with a timestamp can represent a timed lockout; one without a timestamp is not automatically re-enabled by that timed-lockout mechanism |
| **Failed Logins** | Evidence of unsuccessful attempts recorded for this account. Stop repeated tests and check the active authentication system's counters and lockout policy |
| **Password Set Date** and **Require Password Change** | Local password state. In a linked deployment, the upstream password policy and password-change state must also be checked |
| **Terminate Date** | A local OMS lifecycle field. Do not use it as proof that all linked authentication routes, existing sessions, API access, and notifications have been shut down |
| **IPs Allowed** | Login restrictions configured on the account. Group-level settings and the deployed realm also matter; do not remove restrictions to diagnose an access error |
| **Groups** | Each membership's group, **From Date**, and **Thru Date**. A listed future or expired row is not an active assignment |
| **Authentication Methods** | Configured factor types, dates, and validation state. Do not open a factor's **View** or **Verify** dialog merely to collect evidence; it can expose enrollment material or initiate verification |
| **Login History** | Recent recorded login dates, success flags, and visit references. The detail query is limited to 20 rows; missing history is not proof that no attempt occurred |
| **Audit Log** | Available audited changes to the local OMS account. It is not a complete audit of upstream accounts, credentials, memberships, or every application action |
| **Tarpit Locks** | Temporary use-velocity restrictions with release times. These are separate from account disablement and missing permission |

The screen displays a blank Disabled value as `N`. That display does not establish the state of an OFBiz `UserLogin`, an identity provider, or a token-based client.

## Diagnose The Failure Before Choosing A Fix

### Sign-In Fails

1. Confirm the account and environment rather than repeatedly trying credentials.
2. Identify the active authentication realm and have its owner check account enablement, lockout state, password-change requirements, and the approved authentication method.
3. If an additional factor is requested, use the account owner's approved recovery process. Do not remove factors or disable group requirements to bypass the prompt.
4. If an IP restriction is reported, compare the expected access route with the administrator's configuration. Have the administrator validate proxy/client-IP handling rather than broadening the allowed range.
5. Correlate the time and error with appropriately restricted [log evidence](log-files.md). Redact identity details and authentication material before sharing excerpts.

### Sign-In Works But A Task Is Denied

1. Record the exact screen or action that failed and whether viewing the page or submitting an operation triggered the error.
2. Check effective group memberships and their dates, then the permission or artifact authorization needed for that action.
3. Check whether another group, authorization condition, entity filter, or velocity limit explains the result.
4. Ask the security owner to approve the narrow correction. Do not add a broad administrative group as a diagnostic test.

An enabled account and a visible menu are not evidence that all underlying operations are authorized. Likewise, a missing menu does not establish that an API operation is inaccessible.

## Carry Out An Approved Lifecycle Change

These are source-verified procedures, not a recommendation to change an account during diagnosis. Record the approver, target identity, intended result, change window, and verification plan first. Keep a separate authorized administrator available when changing administrative access.

### Create A Native OMS Account

Use this only when the environment owner has confirmed that local creation is the correct provisioning route.

1. Search for an existing account before selecting **Create User Account**.
2. Enter the approved **Username**, **Email**, and **Full Name**.
3. Have the authorized person enter **Password** and **Password Verify** through the approved secure process. Never copy credentials into documentation or chat.
4. Review **Require Password Change** and select **Create** once.
5. Find the created record and verify its identity and state. If submission was interrupted, search again before retrying.
6. Apply only the separately approved access assignments and verify the intended task through the organization's controlled test process.

The create service checks for a case-insensitive duplicate username and, when supplied, email address, and validates the password. It does not create an OFBiz `UserLogin`, and the form does not assign a user group. Creation success alone is not access approval or proof that the account has exactly the intended permissions.

### Update Account Details

1. Open the verified account and review the existing values.
2. Change only approved fields in the account form, then select its **Update** button.
3. Reload and confirm the saved values. Review available audited changes where appropriate.

The form includes identity/contact fields, password-change requirement, termination date, IP restrictions, locale, and time zone. These do not all have the same risk. Identity, lifecycle, and IP changes require security-owner review. In this baseline, locale/time-zone updates can also synchronize to a matching OFBiz login; do not assume every field is local-only or that all fields synchronize in both directions.

### Enable Or Disable A Local Account

- **Enable Account** clears the local OMS disabled flag, disabled timestamp, and failed-login counter. It does not resolve the underlying cause of repeated failures or establish upstream enablement.
- **Disable Account** sets the local OMS disabled flag and clears its disabled timestamp, so it is not the timed-lockout form of disablement.

Use the applicable action only after the correct authority has approved it. Reload and confirm the local result, then verify the intended authentication routes separately. In an OFBiz-linked deployment, follow the upstream lifecycle procedure as well; do not regard this screen's button as complete suspension or offboarding.

### Password Recovery And Offboarding

**Reset Password** is an active operation: the OMS service prepares a reset credential and requests an email to the saved address. It is not an email-address check. A generic success message does not prove delivery. **Change Password** changes credential state and requires the authorized person to use the secure password workflow.

For linked OMS identities, use the approved upstream password/recovery process. Do not infer that a local reset changed the upstream password.

For offboarding, have the identity/security owner cover the authoritative account, group assignments, authentication factors, active sessions, login keys/tokens, connected applications, and any jobs or integrations that rely on the identity. Preserve required audit history. Confirm each access route under the approved verification plan; disabling one record or ending one membership is not a universal revocation guarantee.

## Troubleshooting

| Symptom | Next check |
| --- | --- |
| No account is found | Confirm environment and spelling; clear login-date, group, and notification filters; check whether the authoritative account has been provisioned through the approved route |
| The local account is enabled but sign-in fails | Check the configured realm, upstream state, password policy, factor requirement, and IP restrictions |
| Local identity or group changes do not persist | Investigate synchronization and mapping ownership before applying the change again |
| A group is listed but the task is denied | Check membership dates, the exact operation, permissions, artifact rules, conditions, and the request's actual identity |
| Login-history or audit rows are absent | Check history/auditing configuration and retention; use restricted logs and upstream evidence where appropriate |
| Reset reports success but the user receives no email | Verify the approved recipient and email-processing evidence; avoid repeated reset requests and never request the reset value for a ticket |
| Requests are temporarily rate-limited | Inspect tarpit release time and the cause of repeated calls; **Release Now** changes enforcement and needs approval |

When escalating, provide the environment and component versions, authentication mode, account identifier through an approved channel, incident time, exact failed operation, sanitized error, relevant effective dates, and changes already attempted. Exclude credentials and authentication material.

## Related Guides

- [Groups And Artifact Authorization](authorization-groups.md)
- [Token Administration](token-administration.md)
