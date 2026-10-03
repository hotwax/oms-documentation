---
description: View and maintain the internal organization hierarchy in Company.
---

# Manage organizations

Organizations represent the internal companies and divisions that own Product Stores and facilities. Use the hierarchy to understand parent-child relationships before changing an organization.

Organization management is available to users with the required party-management permission.

## View the organization hierarchy

1. Open the **Company App**.
2. Go to `Organizations`.
3. Search by organization name or ID when needed.
4. Expand the hierarchy to review parent and child organizations.
5. Identify the organization marked `Primary`.
6. Select an organization to open its details.

The list reports hierarchy anomalies instead of hiding affected organizations. Resolve an anomaly before making another hierarchy change.

## Review organization details

The details page shows:

* Organization name and ID
* Primary organization status
* Current parent
* Child organizations
* Facilities currently owned by the organization

Owned facilities appear for reference. This version excludes facility-owner editing.

## Create an organization

1. Go to `Organizations`.
2. Click the create button.
3. Enter the organization name.
4. Review the generated organization ID and update it when needed.
5. Select the parent organization.
6. Save the organization.
7. Confirm that the new organization appears under the selected parent.

If creation reports a partial update, pause before retrying. Refresh organization data and confirm the created records, then retry or contact support.

## Rename an organization

1. Open the organization.
2. Click `Edit` next to the organization name.
3. Enter the new name.
4. Save the change.
5. Confirm the new name in both the details page and hierarchy.

The organization ID stays the same after a rename.

## Change the parent organization

1. Open the child organization.
2. Find the hierarchy section.
3. Select the new parent.
4. Click `Save`.
5. Return to `Organizations` and confirm the new position.

Company blocks a change that would create a hierarchy cycle. If the current hierarchy is ambiguous, resolve the reported anomaly before changing the parent.
