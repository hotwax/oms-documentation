# Troubleshooting Application Access in HotWax Commerce

If a user is unable to access an application in HotWax Commerce, the issue might be related to permissions or facility associations.

## Steps to Troubleshoot

### 1. Check Security Group Permissions
Verify if the user belongs to the correct security group that has permission to view the specific application. Users must be part of a security group with the appropriate permissions to avoid unauthorized access.

### 2. Review Specific Permissions
Ensure the user has the necessary view permissions for the application view. Here are the permissions the administrator can give users to view any application:

| PERMISSION_ID          | DESCRIPTION                        |
|------------------------|------------------------------------|
| BOPIS_APP_VIEW         | View BOPIS App                     |
| FACILITIES_APP_VIEW    | View Facilities App                |
| FULFILLMENT_APP_VIEW   | View Fulfillment App               |
| IMPORT_APP_VIEW        | View Import App                    |
| INVCOUNT_APP_VIEW      | View Inventory Count App           |
| PREORDER_APP_VIEW      | View Preorder App                  |
| RECEIVING_APP_VIEW     | View Receiving App                 |
| THRESHOLD_APP_VIEW     | View Threshold Management App      |
| USERS_APP_VIEW         | View Users App                     |

*Note: These permissions only allow users to view the app. Additional permissions would be required for them to perform any other operations.*

### 3. Add View Access Permissions
If the user lacks the necessary view permissions, the administrator can follow these steps to grant access. [Click Here](#) to learn how to grant permissions to user groups.

### 4. Verify Facility Association (for BOPIS or Fulfillment App)
If a user cannot access a BOPIS or fulfillment app application, they might need to be added to a facility. The administrator can follow these steps to add the user to a facility:

To add a user to a facility, follow these steps: [Click here](#)
