---
description: >-
  Trace a missing integration file through pickup, transformation, delivery, and
  business processing without unsafe retries or credential sharing.
---

# Investigate Missing SFTP Files

Use this guide when an expected integration file is not visible, an archive is being treated as proof of success, or a previously used import screen no longer shows activity. First identify the active route and the stage that is missing. SFTP transfer, message receipt, transformation, and business processing are separate checks.

This page retains its existing location for links from older OFBiz documentation. Do not assume that a legacy menu, folder, job name, or schedule applies to a current OMS integration.

## Confirm The File And Route

Keep the investigation read-only.

- Confirm the environment, business process, transfer direction, affected facility/store scope, incident time, and time zone.
- Obtain the expected file reference, source system, intended destination, and the last known successful delivery. Identify whether the file is an original input or generated output.
- Ask the integration owner to confirm the active producer/poller, filename pattern, intake location, downstream consumer, and processing-history location.
- If the route changed, establish the cutover time and which environments or locations changed. Check each affected scope rather than assuming a single migration date.
- Use approved existing access. Do not request or send passwords, private keys, or full connection settings in chat, email, tickets, or screenshots. Authentication or access problems belong with the authorized administrator's secure process.

If the supported intake location is not confirmed, do not upload a test file to the old location or create a replacement folder/configuration. For a missing reset-inventory log, start with [Confirm which route owns the file](../../maarg/data-manager-imports.md#confirm-which-route-owns-the-file).

## Trace The First Missing Stage

| Stage | Read-only evidence | What it does not prove |
| --- | --- | --- |
| Source creation | Source export/job result, file reference, generation time, and intended scope | The file was delivered |
| Pickup | Polling run, matching filename/pattern, message or download reference, and any read error | Transformation or business processing finished |
| Transformation | Input/output references, transformation result, errors, and expected record counts | The generated output reached its destination |
| Delivery | Transport result, destination reference, and receiver acknowledgement where the route defines one | The receiver applied every business record |
| Business processing | Destination import/message result, errors, record counts, and expected business records | A later connected system also completed its work |

Follow [Service Jobs](../../maarg/service-jobs.md), [System Messages](../../maarg/system-messages.md), and [Data Manager Imports](../../maarg/data-manager-imports.md) only where the configured route uses them. A job's successful completion can mean it handed work to another stage.

For the standard Maarg SFTP poller reviewed here, the message type supplies the receive path and filename pattern. A configured file-count limit can bound a polling pass. The remote file name becomes a remote message reference. An integration owner should compare those effective settings and existing messages before concluding that a visible file was ignored. Do not change a pattern, limit, or message identity to force pickup.

## Interpret Archive And Failure Folders Carefully

An archive folder shows that a move/archive step occurred. Its meaning depends on the process that moved the file.

In maarg-util 4.3.6, the standard SFTP poller receives and saves incoming messages before applying its configured move or delete response. Framework 4.1.4 initiates message consumption asynchronously. A moved source file therefore does not prove that the consumer, downstream import, or inventory update succeeded.

Likewise, a failure folder is only meaningful when the route's error-handling contract identifies which stage places files there. It does not prove that all other files completed successfully or that a failed file made no partial changes.

Correlate the archived original, any transformed output, message/import IDs, and final business result. Do not restore, rename, delete, or re-upload an archived file as a diagnostic step.

## Missing Files Or Empty History

1. Check the exact environment and expected direction. A source export folder and a destination intake folder are not interchangeable.
2. Confirm generation and pickup separately. Read the appropriate job or flow result without starting or stopping it.
3. Check the filename pattern, current route, time zone, filters, retention, and any documented move/archive behavior.
4. If the route includes transformation, find the resulting output reference rather than assuming the input name is preserved.
5. Inspect the destination's current processing history. If it bypasses the old MDM configuration, an empty legacy log is not evidence of failure.
6. Verify the expected business result before proposing recovery. For inventory, confirm product/facility identity, target versus adjustment semantics, quantity basis, and relevant timing.

A report that data became current after a manual run does not establish why the scheduled flow was delayed or which job should be rerun next. Preserve that run's identity and investigate its actual scope and downstream results.

## Recovery And Escalation

Before any replay, the owner must establish the earlier outcome, rule out active processing, resolve the cause, and approve the precise file/record scope and destination. A timeout or missing screen entry does not make repeat processing safe.

Escalate with the environment, affected scope, original and generated file references, expected timing, producer/poller and consumer references, observed stage, redacted error, and prior-attempt outcome. State which intake location or history remains unconfirmed. Share payloads or logs only when necessary and authorized through approved private support channels.

Do not restart integration flows, run jobs, reset messages, modify access, replace credentials, or post inventory corrections merely to test visibility. Successful recovery requires the intended business result, not just a moved file or a cleared error.

## Verification Scope

The standard Maarg SFTP polling, incoming-message, and MDM-history boundaries above were source-checked on November 7, 2026 against maarg-util 4.3.6 and framework 4.1.4. The latest published distribution by publication time was Maarg 6.3.24, published November 6; this does not establish the installed version or the configuration of a specific integration.

The authorized demo reached sign-in only. No SFTP connection, file movement, upload, replay, job action, or inventory mutation was performed. No runtime screenshot is included. A migrated route's supported intake location, current history, effective scope, and approved recovery procedure require separate deployment evidence.
