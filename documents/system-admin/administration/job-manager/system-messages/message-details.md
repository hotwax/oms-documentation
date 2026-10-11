---
description: Trace a system message through status history, operations, payload, and related messages.
---

# Trace a system message

Open a record from `Message history` to review its direction, lifecycle, payload, errors, and related operations.

## Follow the message journey

Use the journey and status history to answer:

- Was the message inbound or outbound?
- Which message type and remote system handled it?
- What is the current status?
- Which statuses did it pass through?
- Which operation failed or stopped?
- Is there a parent, child, or linked message?

Compare timestamps in the app time zone shown in `Settings`.

## Review errors and operations

Open the error and operation sections when they are available. Read the operation sequence in order and identify the first failed step.

Later errors can be a consequence of an earlier failure. Record the first actionable error and the message identifier before you change a status or payload.

## Review the payload

Use the payload viewer to search, expand, collapse, copy, or download available data.

An edit action can appear for supported message states and users. Change a payload only when the source contract and required correction are known.

System message payloads can contain customer data, credentials, or integration secrets. Do not paste unredacted payloads into public issues or documentation.

## Use status actions

The page shows only the status actions allowed for the current message and backend state.

1. Confirm the message identifier and direction.
2. Review the full status history and errors.
3. Select the available status action.
4. Review the confirmation.
5. Confirm the action.
6. Refresh the page and verify the resulting status and operation.

Do not repeat a status action when the first request is still processing.

## Follow related messages

Open parent, child, or linked messages to trace the complete integration flow. Keep the original message identifier in your investigation notes so that you can return to the starting point.
