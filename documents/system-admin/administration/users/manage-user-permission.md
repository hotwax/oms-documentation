---
description: Manage Security Groups and review application access in Company.
---

# Manage Security Groups and App Permissions

Security Groups bundle permissions for a role. App Permissions provides an application-centered view of those permissions and the users who receive access.

## Review a Security Group

1. Open the **Company App**.
2. Go to `Users` > `Security Groups`.
3. Search for the group.
4. Select the group.
5. Review:
   * User access
   * Permissions
   * Authorizations

Use the group details page when you need to understand or change one role.

## Create a Security Group

1. Go to `Security Groups`.
2. Click the create button.
3. Enter the group name, ID, and description.
4. Save the group.
5. Open the new group.
6. Add the permissions approved for the role.
7. Add users only after the permission list is reviewed.

Use a stable ID. The group name and description can explain the business role.

## Change a Security Group

1. Open the group.
2. Review current users and permissions.
3. Edit the group name or description when needed.
4. Add or remove the intended permissions.
5. Save the changes.
6. Test with a user assigned to the group.

Removing a permission affects every user who receives it through that group. Check whether another Security Group still grants the same permission before concluding that access was removed.

## Review App Permissions

Use App Permissions when you start with an application or capability instead of a role.

1. Go to `Users` > `App Permissions`.
2. Select an application.
3. Select a permission.
4. Review:
   * Security Groups with access
   * Assignment history
   * Users with access
5. Open the relevant Security Group to make an approved change.

The catalog reflects the permissions available in the current OMS environment. Use it instead of a copied static permission list.

## Verify a change

1. Confirm that the user belongs to the expected Security Group.
2. Confirm that the group contains the required permission.
3. Ask the user to sign out and sign in again when access remains unchanged.
4. Open the exact page or action being tested.

See [Troubleshoot application access](troubleshooting/application-access-issue.md) when the task remains unavailable.
