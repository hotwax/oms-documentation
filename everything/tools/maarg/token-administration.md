---
description: Identify Maarg credential types, review JWT token controls, and plan approved expiry and revocation without exposing secrets.
---

# Token Administration

Use **Settings → JWT Tokens** for the Maarg JWT generator and validator. First identify the credential type: a JSON Web Token (JWT), a Moqui login key, and a browser session have different lifecycles. A control for one does not necessarily affect the others.

## Version And Access

This guide is source-verified against **Maarg v6.4.0**, **maarg-util v4.4.0**, **runtime v4.1.0**, and **framework v4.2.0**, including the Maarg JWT integration patch. No live token page was opened, credential generated, token submitted, or identity record inspected for this guide.

The JWT screen is registered beneath the Maarg application's **Settings** screen at **Oms/Settings/JwtTokens**. Menu visibility and screen permissions can differ by deployment. Ask the application owner for the authorized route when it is absent; do not change permissions to expose it.

{% hint style="warning" %}
Treat token values, login keys, session cookies, and signing keys as secrets. Keep them out of screenshots, tickets, URLs, browser recordings, public token decoders, and documentation. A page that looks informational may still issue credentials: the assembled **About** screen generates a Launchpad JWT during page rendering. Do not open it merely to inspect authentication behavior.
{% endhint %}

## Identify The Credential

| Credential | How It Works | Expiry And Administration Boundary |
| --- | --- | --- |
| JWT returned as `token` by the admin login API | Signed bearer credential representing a user; distinct from the login key returned by the same response | The login service uses the configured JWT lifetime. The v6.4.0 production configuration supplies 7,200 seconds, but deployment overrides can change it. Check the returned expiry rather than assuming a duration |
| JWT from **Generate Token** | Signed credential with user and purpose claims; no per-token database record is created by this service | **Expires In (Days)** defaults to 30. This explicit lifetime is separate from the admin login JWT default |
| Moqui login key returned as `api_key` | An opaque credential accepted through the `api_key` or `login_key` authentication mechanism; its one-way hash is stored in `moqui.security.UserLoginKey` | Framework default is 144 hours, or six days, unless overridden. The JWT generator does not manage these records |
| Browser session and `moquiSessionToken` | The session identifies an authenticated browser; `moquiSessionToken` supports request/CSRF protection | Session lifetime and logout are separate from token expiry. The session token is not a replacement API bearer credential |
| Other integration credentials | Examples include service-specific tokens used by connected systems | Identify the issuer and owning integration. Do not assume this JWT screen administers every credential used by Maarg |

The labels “API token” or “access token” alone do not identify the credential's storage, scope, or revocation mechanism. Confirm the issuing service and authentication method before choosing an administration procedure.

The admin login service can issue **both** a JWT and a login key. Its `expirationTime` output describes the JWT expiry, not the login key expiry. A successful login, refresh, or token generation is a credential-issuing action, not a harmless connectivity check.

## Understand The JWT Controls

The screen heading is **JWT Token Generator**. Its two forms serve different purposes.

### Generate New Token

| Field Or Control | Meaning |
| --- | --- |
| Username | Defaults to the current user. The screen makes it editable for members of the `ADMIN` group; the service separately requires `SECURITY_ADMIN` to generate for another user |
| Purpose | Required descriptive text added to the JWT. It is not a permission scope, endpoint restriction, or read-only setting |
| Expires In (Days) | Defaults to 30. Agree a short, positive lifetime suitable for the integration; the reviewed service does not impose an explicit minimum or maximum policy |
| Generate Token | Issues a new credential for the selected user |
| Copy To Clipboard | Copies the generated secret; use only the organization's approved credential-handling process |

For an approved issuance, the designated administrator should confirm the environment, account, recipient application, intended operations, expiry, and secure storage destination before selecting **Generate Token**. Prefer a suitably limited integration account rather than reusing a broadly privileged personal account.

The result displays the user, purpose, expiry, and token. The screen consumes the generated result from the server session for that display and says it will not be shown again. This does not remove copies from the rendered page, clipboard, recordings, or downstream clients. Do not regenerate solely to obtain a documentation screenshot.

### Validate Token

The **JWT Token** field and **Validate** button submit a token to the same Maarg instance for verification. The screen reports **Valid Token** with user, user ID, purpose, and expiry, or **Invalid Token** with an error.

This verifies the JWT signature, expected issuer, and time-related validity. It does **not** prove that the account can use a particular API, that every login-state check will pass, or that an integration is authorized for the requested business action. Do not submit a Moqui login key to this JWT validator or paste an unrelated service's credential into it.

## Plan Expiry, Replacement, And Revocation

Record the credential type, owning account, integration owner, environment, issue/expiry times, and approved purpose in the access register. Store the secret only in an approved secret store, separate from that register.

| Action | What The Reviewed Implementation Supports Or Limits |
| --- | --- |
| Replace a JWT | Generating another JWT does not invalidate the previous one. The admin `refreshToken` operation calls the generator; it is not evidence of an old-token revocation mechanism |
| Revoke one JWT | The JWT screen has no token inventory or individual revoke button. The reviewed generator/validator provides no per-token revocation record. Escalate to the security owner for a deployment-specific response |
| Expire or remove a login key | New key-based authentication depends on its `UserLoginKey` record and expiry. Have an authorized administrator use the approved key-management procedure for the exact record. Do not substitute generic entity editing, SQL, or a bulk delete |
| Sign out | Logout invalidates the current HTTP session and sets logout state used by the Moqui/Maarg authentication paths. It does not delete login-key records or constitute permanent, individual JWT revocation |
| Change account access or rotate signing material | These can affect multiple users, tokens, sessions, and integrations. They require a separate, owner-approved change and verification plan |

For login keys, `fromDate` records issuance and `thruDate` records expiry. The reviewed authentication path checks the upper expiry date; do not treat a future `fromDate` as an activation gate. Key issuance also cleans up that user's expired keys. Neither expiry nor removal of a key should be assumed to terminate an already established browser session.

JWT logout handling depends on account logout state and the installed integration patch. Subsequent authentication can update account state again. Do not use logout, password reset, cache clearing, or replacement-token issuance as proof that every old credential is permanently unusable.

For suspected exposure, notify the security owner promptly. Identify the credential family and affected integration without reproducing the secret, then agree containment and a controlled verification plan. Signing-key rotation can invalidate many JWTs and must not be attempted as a routine troubleshooting step.

## Verify Without Exposing Credentials

1. Review the deployed screen and service definitions before choosing a test. Confirm which action issues, validates, or invalidates which credential.
2. Use an approved non-production account and a harmless, explicitly authorized API operation when an end-to-end check is required. The designated operator should handle the credential securely.
3. Record only the environment, credential type, expiry, test time and timezone, requested operation, HTTP status, and sanitized error or result. Exclude headers, cookies, credential values, and real identity details from public evidence.
4. When testing revocation, use a fresh client context so an existing session or a second credential cannot mask the outcome. Verify the affected integration and credential type separately.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| JWT Tokens is missing | Confirm installed util version, Settings registration, and authorized screen access |
| Another user's name can be entered but generation is denied | Screen editability and the service's `SECURITY_ADMIN` check are separate; ask the security owner to review the intended account |
| JWT is valid but an API call is denied | Check the API's user permissions, account state, environment, and operation-specific authorization |
| JWT expires earlier than expected | Distinguish login JWT lifetime from generator days; confirm the returned expiry and deployed overrides |
| Token was replaced but the old one still works | Replacement alone does not revoke a JWT. Check for an existing session and follow the credential-specific revocation plan |
| Login key is absent from JWT Tokens | This screen is not a `UserLoginKey` inventory or revocation tool |

## Related Guides

- [User Accounts And Access Diagnosis](user-accounts.md)
- [Groups And Artifact Authorization](authorization-groups.md)

- [REST API Explorer](rest-api-explorer.md)
- [Log Files](log-files.md)
- [Maarg Overview](README.md)
