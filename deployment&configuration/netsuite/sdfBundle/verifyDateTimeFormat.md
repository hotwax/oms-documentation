# Verify NetSuite Date and Time Format

## Default Formats
- Date Format: 'M/D/YYYY'
- Time Format: hh:mm AM/PM

## Verification Process
- For Date Format:
   a. Log in to NetSuite.
   b. Navigate to Setup > General preferences > Company
   c. Verify the date format under the Date/Time Format section.

- For Time Format:
   a. Log in to NetSuite.
   b. Navigate to Setup > General preferences > Company
   c. Verify the time format under the Date/Time Format section.

## Verification Steps

1. Date Format:
   - Check the default NetSuite date format, 'M/D/YYYY.'
   - If changed, share the updated format with the HotWax integrations team.
   - Ensure the HotWax integrations team adjusts the date format in CSV imports for entities like sales orders, cash sales, and inventory adjustments.

2. Time Format:
   - Confirm the default NetSuite time format is 'hh:mm AM/PM.'
   - If modified, update all export map/reduce SuiteScripts.
   - Ensure these adjustments align with the client's last run date-time data.


By following these steps, you can easily check and verify the NetSuite date and time formats, ensuring accurate communication with the HotWax integrations layer and seamless data handling in export processes.
