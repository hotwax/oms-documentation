# Add New Variance Reason

This Standard Operating Procedure (SOP) outlines the steps required to create a new variance reason in HotWax Commerce, for retailers to record variances in the cycle count app.

## Steps to Create a New Variance Reason

### Login to the Webtools
1. Open your web browser.
2. Navigate to the `HotWax Commerce Webtools` login page.
3. Enter your credentials (username and password).
4. Click the `Login` button to access the Webtools dashboard.

### Navigate to the Import/Export Section
1. Once logged in, locate the `Webtools` section on the dashboard.
2. Click on the `Import/Export` button.

### Access XML Data Import
1. In the Import/Export section, find and click on the `XML Data Import` button.

### Prepare Data for Import
1. Scroll down to the bottom of the page to locate the input box under the `Import File` button.
2. Enter the XML data in the input box. Use the sample data provided as a template

    ```xml
    <Enumeration description="New Variance Reason Description" enumId="NEW_VARIANCE_REASON_ID" enumName="New Variance Reason Name" enumTypeId="IID_REASON"/>
    ```

3. Make sure to enter the data between the `<entity-engine-xml>` tags. The complete structure should look like this:

    ```xml
    <entity-engine-xml>
        <Enumeration description="New Variance Reason Description" enumId="NEW_VARIANCE_REASON_ID" enumName="New Variance Reason Name" enumTypeId="IID_REASON"/>
    </entity-engine-xml>
    ```

### Modify the XML Data
1. Replace the `enumId`, `enumName`, and `description` values with the new variance reason details. For example

    ```xml
    <Enumeration description="CS refund" enumId="CS_REFUND" enumName="CS refund" enumTypeId="IID_REASON"/>
    ```

2. Ensure the new details accurately reflect the specific variance reason you intend to create.

### Import the XML Data
1. After entering the modified data in the input box, double-check for accuracy.
2. Click the `Import Text` button to import the data into the system.

### Verify the New Variance Reason
1. After importing the data, verify that the new variance reason has been successfully created.
2. Go to the Enumeration entity in Webtools to ensure the new variance reason appears as expected.

## Conclusion
Following these steps, you can create a new variance reason in HotWax Commerce for recording variances through the cycle count app. Ensure all data entered is accurate and double-check each step to prevent errors during the import process. For any issues or further assistance, please contact the support team.
