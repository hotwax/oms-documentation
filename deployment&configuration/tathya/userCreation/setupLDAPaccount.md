# Creating LDAP Account

You can create “Organizational Units” (OU) and “Customer Units” (CU) in the LDAP directory. For a new project, before creating a user (CU), it is recommended to create an OU.

### Why OU?

OUs allow for the logical grouping and organization of users within the LDAP directory. Each OU typically represents a specific category, department, or project.

## Organizational Unit (OU) Creation

1. Login into the [LDAP](https://ldap.hotwax.io/) directory with your credentials. On the phpLDAPadmin default dashboard page, locate the domain components on the left corner and click on the "+" icon. Now, select "Create new entry here".
2. Choose "Generic: Organizational Unit" as the template for creating the object.

{% hint style="info" %}
**“Create Object”** refers to the process of creating a new object, that is, organizational unit or user account. “Create Entry” refers to establishing a new entry in the LDAP directory that represents the created object.
{% endhint %}

3. In the main pane, provide the name of the organizational unit, typically representing the entire project.

{% hint style="info" %}
For example, if a project were named Wasatch Ski, the OU name should be “tathya-wasatch-ski”.
{% endhint %}

4. Click on the "Create Object" button and confirm the creation of the entry by clicking on "Commit".

{% hint style="success" %}
You have now successfully created an OU that represents the specific project.
{% endhint %}

## User Account Creation

1. In the LDAP directory, navigate to the newly created Organizational Unit ("tathya-wasatch-ski" in our example). Below the OU, click on “Create new entry here” to add a user.
2. In the main pane, click on "Create a child entry" and then select "Generic User Account" as the template for creating the user account.
3. Input user details such as First and Last Name, Common Name, UserID, Password, UID Number, GID Number, and Login Shell.

**First and Last Name:** The first and last name of the user that you want to log in to on Tathya.

**Common Name:** Common Name (CN) is the full name of the user.

{% hint style="info" %}
A preferred CN would be “firstn.lastn” and it is recommend to keep all the initials in lowercase. This is the same ID that will be used on Tathya for login.
{% endhint %}

**UserID:** UserID is an auto-generated unique identifier for the user. It serves as a key attribute for identifying and distinguishing each user within the LDAP directory.

**Password:** The Password is a secure string of characters chosen by the user to authenticate and access the LDAP.

{% hint style="info" %}
This is the same password that will be used on Tathya for login.
{% endhint %}

**GID Number:** The GID number defines a search space where administrators or developers can perform LDAP searches specifically targeted to retrieve information related to various accounts.

{% hint style="info" %}
There would be two options displayed “Users” and “Admin”. When creating user accounts for a project, select the "Users" option.
{% endhint %}

**Login Shell:** The Login shell is the shell or program the user interacts with after login. It influences the user's experience after logging in, defining the command-line environment.

{% hint style="info" %}
We usually choose “Bash” (Bourne Again SHell) as the login shell. If a user's login shell is set to Bash, their interaction with the system after logging in will involve the Bash command-line interface.
{% endhint %}

4. Once you enter all the details, click on the "Create Object" button and confirm the creation of the entry by clicking on "Commit".

{% hint style="success" %}
You have now successfully created a user in the LDAP directory. These user credentials can be used on Tathya for an automated login.
{% endhint %}

{% hint style="info" %}
**To add additional users under an OU**, follow the same steps and create a child entry for each new user.
{% endhint %}
