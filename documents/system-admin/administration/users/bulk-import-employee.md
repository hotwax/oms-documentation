# Bulk import employees

Use an employee CSV to create multiple employee records at once.

## Before you begin

Prepare a CSV with the required employee data. Required fields include `party-id`, `first-name`, `last-name`, `enabled`, `relationship-status`, `user-login-id`, and `password`. Include `external-id`, classifications, identifications, and relationships when your implementation requires them.

## Import employees

1. Go to `EXIM` and open the `Imports` tab.
2. Select `Employee MDM`.
3. Upload the employee CSV file.
4. Review the file details and start the import.
5. After processing finishes, open the `Employees` page and confirm that the imported records have the expected details.

If the import does not complete or a record is rejected, use the [employee import troubleshooting guide](troubleshooting/bulk-import-employee.md).
