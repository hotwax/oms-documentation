# Tathya login Issue

Tathya users sometimes face login issues due to forgotten credentials, which can be resolved by verifying or updating their credentials in our records. This guide helps you troubleshoot by detailing how to set up and manage LDAP accounts, including updating user credentials in phpLDAPadmin.

## Scenario 1: Checking Existing User Record

#### Verify Existing Credentials:

* Search for the user's record in your record.
* Use the credentials on record to attempt a login.

#### Successful Login:

* If the login is successful, share the same old credentials with the user.

{% hint style="info" %}
We follow a standard template when creating a password, such as "Ht5@nusername".
{% endhint %}

## Scenario 2: Updating the Password via LDAP

#### Log into the LDAP Directory:

* Use your administrator credentials to log into the `phpLDAPadmin` interface.
* Select the appropriate instance (e.g., SM, UCG, Krewe, etc.).

#### Access User Information:

* From the left-hand side of the `phpLDAPadmin` dashboard, navigate to and select the user experiencing login issues.

#### Update Password:

* In the user's details, locate the password field.
* Enter a new password, ensuring it meets security standards.
* Choose the encryption method (typically MD5 for Hotwax Commerce).



<figure><img src="../../.gitbook/assets/ldap (1).png" alt=""><figcaption></figcaption></figure>

#### Confirm New Password:

* Click on `Check password` to verify the new password.
* Once confirmed, click on the `Update Object` button to save the changes.

#### Communicate New Credentials:

* Share the new credentials with the user.

{% hint style="info" %}
For detailed instructions on creating or updating users in LDAP, refer [Tathya user setup](../userCreation/setupLDAPaccount.md).
{% endhint %}
