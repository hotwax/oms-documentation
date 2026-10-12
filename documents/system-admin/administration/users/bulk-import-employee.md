# Bulk import employees

Bulk employee creation is a Data Manager import.

## Before you begin

Use the current sample file from the target environment instead of an older local copy.

## Import employees

1. Open Data Manager in the OMS.
2. Find the employee import configuration.
3. Download its sample file.
4. Populate the required fields.
5. Upload the file.
6. Review the Data Manager log.

If the import menu lacks the employee import, search Data Manager configurations for `IMP_EMPLOYEE`.

## Verify employees

1. Open the **Company App**.
2. Go to `Users`.
3. Search for an imported employee.
4. Confirm the name, employee ID, email, and status.
5. Confirm Security Group, Product Store, and facility access.

A successful file upload proves only that Data Manager received the file. Confirm the Data Manager counts and review a selection of imported users.

If the import does not complete or a record is rejected, use the [employee import troubleshooting guide](troubleshooting/bulk-import-employee.md).
