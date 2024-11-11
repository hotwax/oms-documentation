# How to Bulk Import Employee

## Problem:

When importing employee data into OMS, specific issues may occur that can prevent a successful bulk import. This guide will assist you in troubleshooting and resolving common problems that may arise during the employee import process.

## Error Identification:

When importing employee data into OMS, various errors can occur due to issues in the CSV file or system conflicts. It is essential to recognize and address specific errors to ensure a smooth import process.

### Common Errors:

* Missing mandatory fields in the CSV file
* Duplicate employee entries
* Incorrect format of email or external ID
* Security group not recognized
* Invalid username or password format

## Cause Analysis:

The issues with importing employees are generally related to specific data formatting errors or missing fields in the CSV file. Below is an analysis of common causes:

* **Missing mandatory fields** – Ensure that the CSV contains all the required fields: first name, last name, security group, username, password, email ID (for password reset), and external ID (if provided).
* **Duplicate employee entries** – If an employee already exists in the system with the same external ID or username, the import may fail.
* **Invalid format for email or external ID** – Ensure that the email follows the standard format (e.g., example@domain.com), and external ID (if used) is unique.
* **Security group not recognized** – Verify that the security group matches the ones available in the system.
* **Incorrect username or password format** – The username should follow the specified pattern, and the password should meet the security requirements (e.g., minimum length, special characters).

## Solution:

### Step 1: Login to OMS

Access the OMS platform using your credentials.

### Step 2: Navigate to the EXIM Menu

* Once logged in, go to the EXIM menu.
* Under the Relationship category, click on **Employee**.

**If you cannot find the Employee link under the EXIM menu:**

* Navigate to **Settings**.
* Click on **Data Manager Config**.
* In the search bar, type **IMP\_EMPLOYEE**.
* This will direct you to the correct configuration page for employee imports.

### Step 3: Upload the CSV File

In the **Employee Import** screen, upload your CSV file containing the employee data.

The CSV should include the following fields:

* First name
* Last name
* Security group
* Username
* Password
* Email ID (for password reset)
* External ID (if provided)

### Step 4: Validate the Data

* Ensure that all mandatory fields are present and formatted correctly.
* Check for duplicates or missing information.
* Once validated, proceed with the import.

### Step 5: Handling Errors

* If any errors occur during the import, review the logs provided by the system.
* Identify the issue based on the error message and adjust the CSV file accordingly.
* Re-upload the corrected CSV file to complete the import.

## Post-Import Validation:

After the import is complete, verify that the employees have been added to the system correctly by:

* Navigating to the **Employees** screen under the Relationship category in OMS.
* Checking that all imported employees appear in the system with the correct details.

<figure><img src="../../../.gitbook/assets/Import Employee.png" alt=""><figcaption></figcaption></figure>
