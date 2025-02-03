In Tathya, user roles and permissions are managed to control what actions users can perform and what data they can access.

### **Alpha Role Overview**

The **Alpha** role in Tathya is a predefined role designed to provide **broad access** while limiting certain sensitive administrative capabilities.

Below is an overview of the Alpha role and steps to create client-specific database access to the Alpha role.

### **Use Cases for Alpha Users**

* Ideal for power users who need the ability to create and manage dashboards and charts but do not need full administrative control.  
* Suitable for team leads or analysts who work extensively in querying and visualizing data.

**Steps to Create an Alpha Role with Client-Specific Database Access :**

1. **Copy the Existing Alpha Role:**  
   * Go to the settings in the top-right corner.  
   * Click on `List Roles`.  
   * Select the existing `Alpha role`.  
   * Click the `Action` button to create a new role based on the Alpha role.  
2. **Rename the New Role:**  
   * Name the copied role according to the client. For example:  
     * Example-Alpha if the client is `Example`.  
   * This ensures the role is uniquely identifiable.  
3. **Modify Database Permissions:**  
   * **Remove alldatabaseaccess Permission:**  
     * Navigate to the permissions section of the newly created role.  
     * Remove the `alldatabaseaccess` permission to restrict access to all databases.  
     * Remove the `alldatasourceaccess` permission to restrict access to all datasources.  
   * **Add Permission for the Client Database:**  
     * Add permissions to the specific database associated with the client, e.g., `Example Database`.  
4. **Assign the Role to the Client User:**  
   * Navigate to the client user in the `List user`.  
   * Add the newly created role (e.g. Example-Alpha) to the client user.

### **Final Check:**

* Verify that the client user now has access only to the designated database `Example Database` and cannot access any other databases.  
* Perform a quick test by logging in as the client user to confirm the role's functionality.

### **Permissions for Alpha Users**

1. **Dashboard Management:**  
   * Can create, and delete dashboards.  
   * Can view and modify filters in dashboards they have access to.  
2. **Chart Management:**  
   * Can create, edit, and delete charts.  
   * Can view all charts they have permission to access.  
3. **Database Access:**  
   * Can access databases, schemas, and tables that are explicitly granted to them.  
4. **Dashboard Filters:**  
   * Can use advanced filters and cross-filtering in dashboards.

**Limitations of Alpha Users**

1. **Restricted Administrative Actions:**

   * Cannot manage roles or permissions for other users.  
   * Cannot access or modify system settings or configurations.  
   * Cannot assign or modify roles for other users.  
   * Cannot change their role to Admin.

2. **No Database Configuration:**

   * Cannot add, edit, or delete database connections.

3. **Limited Access Control:**

   * Can only access datasets, databases, and schemas granted to them by an Admin or through specific role permissions.  
   * Cannot edit or overwrite dashboards unless they are the owner of the dashboard.  
   * Cannot view others' draft status dashboards.  
4. **Restricted Plugin and Feature Control:**

   * Cannot enable or disable plugins.  
5. **Does not have access to SQL Lab and creating datasets**  
6. **Security Management:**

   * Cannot create or modify roles.  
   * Cannot edit global security policies.
