# List Roles

Click on "Settings" located in the top-right corner of the Tathya interface. Under the "Security" section within Settings, select "List Roles."

On the List Roles page, you'll find an overview of existing roles. To add a new role, click on the “+” icon.

In the role creation interface, you'll encounter two key fields: "Name" and "Permissions."

**Name:**
Begin by giving the role a descriptive and easily identifiable name. Consider using a camel case convention for clarity. For example, if your project is named "Wasatch-Ski," you might name the role "Wasatch-SkiProd-DatabasePermission."

Choose a name that clearly indicates the purpose or project associated with the role, making it easy to understand at a glance.

**Permissions:**
In Tathya, permissions play a crucial role in determining access levels to dashboards and charts.

Start by searching for and listing all the charts created for your project. This ensures that users with this role can access dashboards containing these specific charts.

{% hint style="info" %} 
A single chart can be present in multiple dashboards. If a chart is listed in the permissions of a role, any dashboard containing that specific chart becomes eligible for access by users assigned to that role.
{% endhint %}

Once you've filled in the necessary details, click "Save" to create the new role.

# Modifying Permissions for Existing Roles

If there's a need to revise permissions for an existing role, for example, when new charts are added to an existing project, follow these straightforward steps:

1. Identify and select the role for which you want to modify permissions.

2. Once you've located the role, click on the edit icon associated with that role.

3. Inside the role editing interface, navigate to the "Permissions" field. Here, you can add new charts or remove existing ones to adjust access levels.

4. To include new charts in the permissions, start typing the names of the additional charts. They will be automatically suggested for selection.

5. After making the necessary modifications, click "Save" to update the permissions for the existing role.

{% hint style="info" %}
Regularly review and update permissions to align with any changes in the project, such as the creation of new charts.

Modifying permissions allows you to grant access to the latest project developments, ensuring users with the role can view the most up-to-date dashboards.
{% endhint %}