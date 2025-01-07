# User Permissions in Tathya

User permissions in Tathya determine the level of access and actions granted to individual users within the system. These permissions are categorized into various roles, each with specific functionalities and access levels.

## 1. Client Users

Clients have access to multiple predefined dashboards to review their performance on a daily, weekly, or monthly basis. They are granted [**HotwaxBasicPermission**](./#Here-is-the-list-of-Permission) with their specific Dashboard permission to view their designated dashboard but are restricted from editing or creating any dashboards. All data within the dashboard is interlinked, so any discrepancies will be promptly reflected in the dashboard. If a client wishes to make changes to the dashboard, they can communicate with Hotwax Support.

## 2. Internal Users

For internal users, we generally provide two types of permissions:

- **Basic Business Analyst Permission**: Grants access to create their chart dashboards and view any existing ones. However, users with this permission do not have default access to the SQL lab, nor can they view any draft dashboards or charts, nor edit other owners' charts. If we add SQL permission to the [**Basic Business Analyst permission**](./#Here-is-tthe-list-of-Permission), users gain access to the SQL lab that allows them to save queries and view query history.

- **SuperBusinessAnalyst Permission**: Grants access to more advanced users familiar with dashboard reporting. Users with this permission can access the SQL lab by default but cannot edit dashboards or reports owned by others without explicit permission. If they wish to edit another user's chart, they must request the admin or creator to include them in the owners' section of the chart/dashboard.

    - **Note**: [**SuperBusinessAnalyst**]((./#Here-is-tthe-list-of-Permission)) users can request [**Admin**](./#Here-is-tthe-list-of-Permission) Permission, which grants them access to all permissions except for creating and managing users and their roles. This permission allows them to edit dashboards or reports owned by others.

## 3. Admin-Main Users

[**Admin**](./#Here-is-tthe-list-of-Permission) users in Tathya hold the highest level of access, responsible for system management and administration. Admin users have all the **SuperBusinessAnalyst** permissions along with access to view and edit charts owned by others. Furthermore, they have authority over various aspects, including managing user registrations, handling access requests, and organizing data through tagging for efficient categorization. Additionally, admins oversee role management, which involves editing, deleting, adding, and listing dashboards, charts, and reports of other users and their draft dashboards.

#### Here is the list of Permission

| Permissions                  | HotwaxBasic Permission + Specific DashboardViewPermission | Basic Business Analyst Permission | Super Business Analyst Permission | Super Business Analyst Permission + Admin | Admin-Main+Admin |
|------------------------------|-------------------------|----------------------------------|-----------------------------------|-----------------------------------------|-------------------|
| Access to Dashboard Menu     | YES                     | YES                              | YES                               | YES                                     | YES               |
| Access to Draft Dashboards   | NO                      | NO                               | NO                             | YES                                     | YES               |
| Create Charts/Dashboards/Reports | NO                  | YES                              | YES                               | YES                                     | YES               |
| Edit Anyone Charts/Dashboards/Reports | NO              | NO                             | NO                              | YES                                     | YES               |
| SQL Lab Access               | NO                      | NO                               | YES                               | YES                                     | YES               |
| Manage User Registration     | NO                      | NO                               | NO                                | NO                                     | YES               |
| Manage Roles                 | NO                      | NO                               | NO                                | NO                                   | YES               |
| Write-only Access to Database| NO                      | NO                              | YES                               | YES                                     | YES               |
| Read-only Access to Database | NO                     | YES                              | YES                               | YES                                     | YES               |
