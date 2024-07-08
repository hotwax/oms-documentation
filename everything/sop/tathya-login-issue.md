# Troubleshooting Login Issues for Tathya User
When a user can't log in, this guide helps you troubleshoot by detailing how to set up and manage LDAP accounts, including updating user credentials in phpLDAPadmin.

## Scenario 1: Checking Existing User Record
### Verify Existing Credentials:
- Search for the user's record in your record.
- Use the credentials on record to attempt a login.

### Successful Login:
- If the login is successful, share the same old credentials with the user.

## Scenario 2: Updating the Password via LDAP
### Log into the LDAP Directory:
- Use your administrator credentials to log into the phpLDAPadmin interface.
- Select the appropriate instance (e.g., SM, UCG, Krew, etc.).

### Access User Information:
- From the left-hand side of the phpLDAPadmin dashboard, navigate to and select the user experiencing login issues.

### Update Password:
- In the user's details, locate the password field.
- Enter a new password, ensuring it meets security standards.
- Choose the encryption method (typically MD5 for Hotwax Commerce).

### Confirm New Password:
- Click on "Check password..." to verify the new password.
- Once confirmed, click on the “Update Object” button to save the changes.

### Communicate New Credentials:
- Share the new credentials with the user.

**Note:**
For detailed instructions on creating or updating users in LDAP, refer this [Tathya user setup](../tathya/userCreation/setupLDAPaccount.md). 
