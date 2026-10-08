---
description: Investigate failed, incomplete, or missing inbound and outbound system messages.
---

# Troubleshoot system messages

Open `System messages` > `Message history` and find the exact system message identifier.

## Trace a failed message

1. Open the message.
2. Confirm its direction, message type, and remote system.
3. Review status history in order.
4. Find the first failed operation.
5. Review the error and relevant payload section.
6. Open parent, child, or linked messages.

Do not assume that the last error is the original cause. Earlier operations can explain later failures.

## Investigate a missing message

1. Clear Message History filters.
2. Search by the source identifier.
3. Filter the expected direction, message type, and remote system.
4. Confirm the time range and app time zone.
5. Check for a parent or child message with the source identifier.

System messages do not use the selected product store as a global filter.

## Use a status action

Use an available status action only after you identify the failed step and required recovery.

1. Record the current message identifier and status.
2. Confirm that the source or destination is ready.
3. Select the available action.
4. Confirm the result in status history and operations.

Do not repeat the action while the first request is processing.

## Escalate safely

Share the message identifier, type, remote system, direction, status, first error, and timestamps. Redact customer data, credentials, and secrets from any payload excerpt.
