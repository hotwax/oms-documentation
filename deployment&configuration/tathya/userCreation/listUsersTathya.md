# User Listing

Once the access is granted, the user is automatically listed in Tathya and by default gets assigned a “public” role.

{% hint style="warning" %}
The user's account is not yet fully configured. The auto-assigned public role does not give the required access to view charts or dashboards. To grant access, you have to assign the necessary roles and permissions to the user's account.
{% endhint %}

To complete the setup, proceed by logging into Tathya with your credentials.

### Prerequisites

Ensure that you have the necessary permissions and administrative privileges to manage users in Tathya.

After logging into Tathya, in the Toolbar, hover your cursor over Settings and locate the "Security" menu. Within the Security section, look for an option like "List Users." This option will take you to the page where you can view, add, and update all the users.

## Updating User Record

Now to update the user, locate the newly listed user that you created in the previous step and click on the edit button. You will be redirected to the “Edit user” page, here verify and update user details such as, First Name, Last Name, Username, Is Active, Email, Roles.

**First Name and Last Name:** The "First Name" and "Last Name" fields contain the user's name. These columns provide information about the user's identity so that you can quickly recognize who each user is.

**Username:** The "Username" is the same LDAP-generated ID that will be used to log into Tathya (firstn.lastn). Ensure that the provided username matches the user's LDAP identifier.

{% hint style="info" %}
Ensure that the provided username aligns with the LDAP-generated ID for seamless authentication.
{% endhint %}

**Is Active?:** The "Is Active?" field determines whether the user account is currently active or inactive. If set to "True," the user can log in and access Tathya.

{% hint style="warning" %}
Mark check in the Is Active field. If it is set to "False," the user account is deactivated, and the user cannot log in. Use this field to manage user access based on their current status within the organization.
{% endhint %}

**Email:** The "Email" is the email address associated with each user's account.

{% hint style="info" %}
Email addresses are crucial for communication and account recovery purposes. They serve as a means of contact and are often used for sending notifications or alerts related to the user's account.
{% endhint %}

**Roles:** The "Roles" column indicates the roles assigned to each user. Select the default role “HotwaxBasicPermissionUser” for the user.

{% hint style="info" %}
The HotWax Basic Permissions role is designed to provide a limited scope of access within Tathya, ensuring focused functionality for users.
{% endhint %}

Here are key details about this role:

- The HotWax Basic Permissions role restricts access to specific areas in Tathya.

- Users with the HotWax Basic Permissions role will only have access to the "Dashboard" panel. Users cannot view any charts here until and unless they are assigned to them in the form of a role.

- In the "Settings," users with this role will see a limited set of options. The displayed options include user profile details, general information, and the logout function.

- This role ensures a high level of security by preventing users from accessing areas beyond the designated dashboard and settings sections.

Finally, add the project-specific roles that you have created, which grants permission to view the project-specific charts from the Dashboard panel. (Check the section “Creating Roles for Dashboard Access” for more information)

{% hint style="warning" %}
Assign roles carefully, considering both default roles and project-specific roles for accurate access permissions.
{% endhint %}

Once all the fields that are required to add a user have been filled, click on “Save.”

Now, you have successfully listed the new user on Tathya and provided the roles and permissions necessary to manage their project’s charts and dashboards.

{% hint style="success" %}
The account is now ready to be used by the user.
{% endhint %}

## Periodic Review and Update of User Roles

Regularly review and update user roles as needed, especially when new charts are introduced. This will ensure that the users get access to the latest dashboards that have been created for them.