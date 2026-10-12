---
description: Investigate data document definition, preview, schedule, and export failures.
---

# Troubleshoot data document exports

Start with the affected document and export identifier.

## Investigate an empty preview

1. Open the data document.
2. Review `Issues`.
3. Confirm the primary entity.
4. Review `Fields`.
5. Review all `Conditions`.
6. Run the preview again.

An empty preview can be correct when no records match the conditions. Do not remove conditions until you confirm the expected data.

## Investigate a failed export

1. Open `Data documents` > `Export history`.
2. Filter to the document and failed status.
3. Open the export.
4. Review status history and operations.
5. Record the first error.
6. Return to the document and compare its saved definition with the preview.

Correct only the field, relationship, condition, or delivery setting identified by the error.

## Investigate a scheduled export

1. Open the document.
2. Review the export schedule.
3. Confirm its pause state, cron expression, recipient, and app time zone.
4. Open `Recent Exports`.
5. Compare the expected run time with Export History.

Confirm the recipient before you resume an email-export schedule.

## Investigate a missing delivery

Confirm that the export completed successfully before you investigate email delivery. A successful export and failed delivery can appear as separate operations or related messages.

Open the export detail and follow each related system message.
