---
description: Filter data document exports and inspect export-processing details.
---

# Review data document exports

Open `Data documents` > `Export history` to investigate exports across data documents.

## Find an export

Search for an export or combine these filters:

- `Document`
- `Status`
- `Started By`
- `From`
- `Thru`

Use `Previous` and `Next` to move through result pages.

## Read an export record

An export record can show:

- Export or system message identifier
- Data document
- Status
- User
- Start and completion times
- Delivery or processing metadata

Select the record to open its detail.

## Trace export processing

Export detail uses the system-message detail experience. Review:

- Status history
- Operation sequence
- Errors
- Payload or result data
- Related messages

See [Trace a system message](../system-messages/message-details.md) for the investigation pattern.

## Investigate a failed export

1. Filter `Status` to the failed state.
2. Open the export.
3. Identify the first failed operation.
4. Record the error and export identifier.
5. Return to the document.
6. Review `Issues`, `Fields`, `Conditions`, and `Preview`.
7. Correct the definition or schedule only when the error identifies that cause.

Do not rerun an export repeatedly while the original request is still processing.
