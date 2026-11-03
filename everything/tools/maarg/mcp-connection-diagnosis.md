---
description: Separate MCP connection, authentication, session, and tool failures without changing operational data or weakening access.
---

# MCP Connection Diagnosis

Use this guide when an approved AI client cannot connect to Maarg, lists tools but cannot use them, or reports a successful connection without a usable result. A connection badge alone does not prove that the requested business operation worked.

## Scope And Prerequisites

This guide is **source-verified against moqui-mcp v1.1.0**, specifically its enhanced servlet and component documentation. The latest published Maarg distribution reviewed on November 3, 2026 is **v6.3.20**. Its active manifest lists moqui-mcp v1.1.0, but the component is **not a member of the `oms-suite` definition**. A listed component is not proof of inclusion in the selected suite or installation on a running server.

Runtime behavior and installed versions have not been verified. Confirm component installation, deployed routing, authentication filter, client compatibility, and overrides with the environment owner before using this procedure. No credential issuance, sign-in, MCP invocation, or operational-data test was performed for this guide.

Before starting:

- Identify the approved environment, client, intended account, and exact operation. Use the deployment owner's endpoint; do not guess paths from another instance.
- Confirm that the client is authorized to connect and that the account has the intended narrow access.
- Collect the existing failure time and timezone, client version, failed stage, HTTP status, and sanitized application error.
- Use an approved non-production identity and synthetic data for any active verification. Even connection initialization can create session or visit state.
- Keep credentials, cookies, session identifiers, request headers, real records, and private endpoint details out of screenshots and public tickets.

**Navigation:** Inspect the client's connection settings and existing error details first. For account and credential questions, use [User Accounts](user-accounts.md) and [Token Administration](token-administration.md). For operation-level access, use [Groups And Artifact Authorization](authorization-groups.md). These are separate investigations; do not open credential-generating pages simply to diagnose connectivity.

{% hint style="warning" %}
MCP is not inherently read-only. The reviewed component exposes screen browsing and action execution through the same tool family. Do not submit forms, supply an action argument, create records, or invoke a business tool merely to test a connection. A screen render can also have side effects; confirm the proposed operation from deployed code before testing it.
{% endhint %}

## Locate The Failing Stage

| Stage | Evidence to inspect | What success does not establish |
| --- | --- | --- |
| Endpoint and transport | Correct environment, installed component, intended transport, and existing network response | A reachable login page is not an MCP response |
| Authentication | The actual client identity and the deployment's approved credential mechanism | A working browser session does not prove the separate client credential works |
| Protocol initialization | Initialization response and completion of the client's initialization sequence | Creating a session does not authorize every tool |
| Capability discovery | Tools/resources/prompts returned for the authenticated request | A listed tool is not proof that a business action is safe, permitted, or successful |
| Tool execution and result | Exact tool, supplied fields, structured result and error, expected synthetic outcome | HTTP success or a client connection badge is not proof of a complete result |

Start at the earliest failed stage. Do not change credentials, permissions, client name, and endpoint together: doing so makes the cause and the effective fix ambiguous.

## Diagnose From Existing Evidence

1. **Confirm the target.** Ask the environment owner to verify the installed component/version and route from deployment records. A release tag, active manifest entry, or functioning web UI is insufficient by itself. Do not use the MCP initialization response's server version as the installed component version: the reviewed v1.1.0 source reports a separate hard-coded server version.
2. **Identify the authentication mechanism.** Distinguish JWT, login key, browser session, and other client credentials. Check recorded expiry and issuing environment through the approved secure process. Do not assume a default seven-day lifetime or extend a token lifetime to troubleshoot.
3. **Read both status and application error.** Preserve a sanitized error code/message alongside HTTP status. Check the JSON-RPC `error`, then `result.isError` and returned content. The reviewed servlet can return a JSON-RPC error body without setting an HTTP failure status in some method-processing paths. In the legacy SSE message path, HTTP 202 acknowledges receipt; the result or error arrives on the event stream.
4. **Check client session handling.** The reviewed HTTP JSON-RPC path expects a `Mcp-Session-Id` header for requests other than initialization notifications/requests. Session ownership and initialization state are separate from credential validity. Never paste a session identifier into a ticket or reuse another user's session.
5. **Separate discovery from execution.** The reviewed implementation allows capability discovery while a session is still initializing, but most other methods require the initialized state. Seeing a tool list therefore does not prove that the initialization handshake is complete.
6. **Check only the affected operation.** If the connection and discovery work, investigate the tool's required fields, supported schema, account permissions, and result errors. Do not grant broad administrative access or regenerate credentials just because one tool fails.

## Interpret Common Symptoms

These examples describe the reviewed implementation, not a guarantee that a proxy, authentication filter, or another version returns the same response.

| Symptom | Safe next step |
| --- | --- |
| HTTP 401 / authentication-required error | Confirm the approved credential type, intended identity, issuing environment, and expiry with the owner. The servlet's generic Basic-auth wording is not proof that Basic authentication is the deployment's required mechanism |
| HTTP 403 / access forbidden | Read the sanitized error: an artifact denial, session-owner mismatch, or rejected Origin can all differ. Investigate the relevant layer before changing account permissions |
| “Origin not permitted” | Have the deployment owner compare the client's actual origin with the approved configuration. Do not disable origin checks or broaden the allowlist as a diagnostic shortcut |
| Missing session header or “Session not initialized” | Have the client owner verify initialization, the initialized notification, and subsequent session-header handling. This is not evidence of token expiry |
| Unsupported protocol version, invalid JSON-RPC, or unacceptable Accept header | Compare the client request format with the installed implementation. Do not change credentials to fix a protocol-format error |
| “Method not found” or invalid parameters | Check the exact supported method and field names for the installed version |
| Too many requests / velocity restriction | Stop repeated retries and have the owner inspect the restriction and timing; do not release locks or raise limits simply to continue testing |
| Tools are listed but a call fails | Inspect session state, operation-specific input and authorization, and the structured tool result separately |
| A replacement credential or renamed connection appears to work | Recheck the same intended operation in the affected user's client. Several changed variables and another person's success do not establish the original cause or resolution |

If a connection times out or drops after an action was requested, do not replay the action automatically. An authorized operator must establish whether it already executed before deciding on a retry.

## Verify A Proposed Correction Safely

Agree the verification plan before making an active request. Specify the non-production environment, identity, exact operation, synthetic input, expected result, and operations that must remain prohibited.

1. Have the responsible owner apply only the approved correction through the supported client or administration workflow.
2. Use a fresh client context where appropriate so an existing browser session or second credential does not hide the outcome. Do not terminate another user's session.
3. Confirm each relevant stage separately: connection, initialization, discovery, and the explicitly approved non-mutating operation.
4. Inspect the returned application result, not just HTTP status. Compare it with the expected synthetic outcome.
5. Record whether the **original affected client and intended operation** now work. Keep unresolved schema, permissions, or data-completeness questions open even if authentication succeeds.

Do not use logout, token generation, token refresh, session deletion, password reset, broad group grants, cache clearing, host upgrades, or operational writes as routine diagnostics. Credential replacement and revocation are separate approved workflows; a new credential does not by itself invalidate an old one.

## Escalation And Closure

Provide the environment reference through an approved private channel, installed component versions if known, client version, incident time and timezone, failed stage, sanitized error/status, expected outcome, and changes already tried. Include whether the result was reproduced by the affected client or only by another operator.

Keep secrets and raw logs out of the report. Use [Log Files](log-files.md) only through approved access and share minimal redacted evidence. Close the incident only when the agreed outcome has been verified; otherwise record the specific remaining blocker and its owner.

## Related Guides

- [Token Administration](token-administration.md)
- [User Accounts And Access Diagnosis](user-accounts.md)
- [Groups And Artifact Authorization](authorization-groups.md)
- [REST API Explorer](rest-api-explorer.md)
