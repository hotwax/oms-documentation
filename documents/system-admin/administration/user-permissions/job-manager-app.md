---
description: Review verified access and action permissions for the current Job Manager app.
---

# Job Manager app permissions

Job Manager uses app access, administrator permissions, and backend action checks.

## Grant app access

Assign `JOB_MANAGER_APP_VIEW` to users who need to open Job Manager.

The app checks this permission during sign-in. A user without app access cannot use the operational pages described below.

## Review verified permissions

| Permission | Current use |
| --- | --- |
| `JOB_MANAGER_APP_VIEW` | Open the Job Manager app |
| `COMMON_ADMIN` | Create, edit, save, and delete `Message types` and `Remote systems`, including protected configuration fields |
| `COMMERCEUSER_VIEW` | Use `Go to OMS` from `Settings` when that button is available in the connected environment |

## Review job-specific access

A service job can show `Permission Group` on its Job Details `Overview` tab. The backend can require this job-specific permission before a user runs or manages that job.

Grant only the permission group required for the user’s operational role.

## Understand page access

After app access is granted, the current menu contains:

- `Dashboard`
- `Catalog`
- `Run history`
- `File history`
- `Manual uploads`
- `Message history`
- `Message types`
- `Remote systems`
- `Documents`
- `Export history`
- `Settings`

Some actions also depend on record state and backend authorization. The app shows only actions available for the current user and record.

## Protect integration settings

Remote-system definitions can contain secrets. Give `COMMON_ADMIN` only to users who maintain integration configuration.

Do not include secrets, payloads, or customer data in permission screenshots or access requests.

## Learn the current workflows

See the [Job Manager guide](../../../retail-operations/workflow/README.md) for task-based instructions.
