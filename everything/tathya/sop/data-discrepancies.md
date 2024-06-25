# Troubleshooting Document: Resolving Data Discrepancies in Tathya

## Objective
To address and resolve discrepancies in data within Tathya reports, ensuring accurate and reliable information for users.

## Context
Occasionally, discrepancies in data may arise in Tathya, impacting the visibility or accuracy of reports generated for clients. These issues typically stem from SQL query issues, dataset misconfigurations, or user-specific requirements not being met.

## Scenarios
### 1. Field Not Found
   **Issue:** Users do not see expected fields or results in Tathya reports.
   **Cause:** Missing fields in SQL queries or dataset configurations.
   
### 2. Duplicated Data
   **Issue:** Users encounter repeated fields or data in reports.
   **Cause:** SQL queries fetching duplicate records or incorrect joins.
   
### 3. Mismatched Data
   **Issue:** Expected data does not match what is displayed in reports.
   **Cause:** Incorrect filters or conditions in SQL queries.
   
### 4. New Feature Request
   **Issue:** Clients request additional data fields not currently available.
   **Cause:** Queries need modification to incorporate new data requirements.

## Troubleshooting Steps

### 1. Initial Checks
**Verify Issue Existence**
- Log in to Tathya using credentials.
- Navigate to the specific report or dashboard where the issue is observed.
- Confirm discrepancies reported by users.

### 2. Investigate and Diagnose
**Identify Scenario**
- Determine if the issue falls under Field Not Found, Duplicated Data, Mismatched Data, or New Feature Request.
   
**Check Tathya Configuration**
- Navigate to the report or chart where the problem occurs.
- Click on the chart title or navigate to the `Charts` option in the navigation bar.

**Edit Dataset**
- Click the three dots on the chart and select `Edit dataset`.
- In the `Edit dataset` dialog, go to the `Source` section.
- Edit the SQL query in the `SQL` field as necessary to address the issue.
- Click on `Save` button.

**Sync Columns**
- Inside the `Edit dataset` dialog, navigate to the `Columns` section.
- Click on `SYNC COLUMNS FROM SOURCE` to ensure all necessary columns are included from the updated SQL query.
- Click `Save` to apply changes.

### 3. Verification and Resolution
**Cross-check Results**
- Return to the dashboard or report and verify if the issue is resolved.
- Ensure the changes do not adversely affect other charts relying on the same dataset.

## Additional Considerations
**Dependency Check**
- Before making changes, review dependencies to understand impacts on other reports or charts.
- Ensure changes are implemented in a way that maintains data integrity across all relevant areas.
