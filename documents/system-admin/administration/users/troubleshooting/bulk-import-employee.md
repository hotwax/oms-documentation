# Troubleshoot bulk employee import

Bulk employee creation is a Data Manager import. Use Company to verify users after the import completes.

## Review common failures

Check the import file for:

* Missing required columns
* Duplicate username or external ID
* Invalid email format
* Unknown Security Group IDs
* Invalid username or password values

Use the current sample file from the target environment instead of an older local copy.

## Run the import

1. Open Data Manager in the OMS.
2. Find the employee import configuration.
3. Download its sample file.
4. Populate the required fields.
5. Upload the file.
6. Review the Data Manager log.

If the import menu lacks the employee import, search Data Manager configurations for `IMP_EMPLOYEE`.

## Correct an error

1. Open the failed Data Manager log.
2. Download or review the error records.
3. Correct only the rejected rows.
4. Upload the corrected file.
5. Confirm the successful and failed record counts.

## Verify employees

1. Open the **Company App**.
2. Go to `Users`.
3. Search for an imported employee.
4. Confirm the name, employee ID, email, and status.
5. Confirm Security Group, Product Store, and facility access.

A successful file upload proves only that Data Manager received the file. Confirm the Data Manager counts and review a selection of imported users.
