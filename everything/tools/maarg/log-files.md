---
description: Log Files workflows, diagnostic controls, and troubleshooting in Maarg.
---

# Log Files

Use the **Log File Viewer** to inspect a recent slice of a Maarg runtime log while investigating an error. It provides a file selector, a bounded tail, an exact-level filter, and a manual refresh.

## Version And Access

This guide is based on **Maarg v6.4.0**, with **maarg-util v4.4.0**. The screen is registered as **Log Files** under the Maarg application but is hidden from the standard menu in this source baseline. Ask your administrator for the authorized **LogViewer** route if it is not exposed in your deployment. A missing menu entry alone does not show whether the screen exists or whether your account can access it.

The source screen is `screen/LogViewer.xml`. Screen behavior in this guide is source-verified; use the deployed version when checking the available controls.

{% hint style="warning" %}
Logs can contain customer data, internal URLs, request payloads, and credentials written by other services. Read only what the investigation needs. Do not publish raw logs or screenshots without reviewing and redacting them.
{% endhint %}

## Read A Recent Log Slice

1. Open the authorized **Log Files** route.
2. Select a **Log File**. The list contains files directly in the runtime log directory whose names end in `.log`, ordered by most recently modified. The selector also shows each file's size.
3. Choose **Lines**: Last 200, 500, 1000, 2000, or 5000. The default is 500.
4. Start with **Level → All Levels** and select **View**.
5. Find the incident timestamp and nearby context. Then use **ERROR**, **WARN**, **INFO**, or **DEBUG** to narrow the display if helpful.
6. Select **Refresh** to read a new slice with the same file, line count, and level. The page does not stream logs automatically.

## Understand The Result

- **Lines is an upper bound.** The reader takes a bounded byte window from the end of the file and then keeps at most the requested number of lines. Long log lines can produce fewer lines than requested.
- **Level filtering happens after tail selection.** Selecting ERROR with Last 500 searches only that recent slice, not the entire file.
- **Levels are exact matches.** ERROR does not include WARN or INFO. The filter recognizes the level surrounded by spaces or in square brackets.
- **Stack traces may be incomplete under a level filter.** Continuation lines often lack a level marker. Switch to All Levels to read the surrounding exception.
- **The header shows displayed lines after filtering.** Zero matching lines does not prove the system has no errors.
- **The view belongs to the runtime serving the request.** In a multi-node deployment, ask the operator to identify the relevant node and log source before treating this as a complete incident history.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| No file is listed | Confirm this runtime has readable `.log` files in its log directory. Compressed rotations, files with other suffixes, and nested directories are not listed |
| A known error is absent | Select All Levels, increase the line window, and check the correct file, node, and incident time. Older entries may be outside the bounded tail |
| The exception appears without its stack trace | Use All Levels so continuation lines are retained |
| “Could not read log file” appears | The selected file may have rotated or become unavailable. Reopen the selector and ask the operator to check the runtime log source |
| Refresh appears unchanged | The source file may not have received new entries, or the selected level may exclude them |

## Capture Useful Evidence

Keep the incident time and timezone, environment, runtime/node identifier when known, filename, selected line window, relevant service or business identifier, and a minimal redacted excerpt. Correlate these with the originating task, import, or routing run. Avoid repeating a business operation solely to make its error appear in the current log tail.

## Related Guides

- [Data Manager Imports](data-manager-imports.md)
- [Order Routing Runs](order-routing-runs.md)
- [Search Admin](search-admin.md)
