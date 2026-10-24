---
description: Resolve sign-in, app access, facility access, and employee import problems.
---

# Troubleshoot users and access

Open `Users` in the Company App and locate the affected user by name or ID. Check the login status, Security Groups, and assigned facilities before changing access.

| Problem | What to check |
| --- | --- |
| A user cannot open an app or use an action | Follow [Troubleshoot application access](application-access-issue.md) to compare the required permission with the user's Security Groups. |
| A user cannot select a facility | Check facility assignments in [Manage users](../manage-user.md#add-facilities). |
| A user's login is blocked or the password needs resetting | Review [Block or unblock login](../manage-user.md#block-or-unblock-login) and [Reset a password](../manage-user.md#reset-a-password). |
| A picker is missing from the assignment list | Check `Show as a picker` and facility access in [Create pickers](../add-picker.md). |
| An employee import rejects records | Follow [Troubleshoot bulk employee import](bulk-import-employee.md) and correct only the rejected records. |

After an access change, have the affected user sign out and sign in again, then verify the app, facility, and action that failed. For an import, verify the resulting users and the successful and failed record counts.
