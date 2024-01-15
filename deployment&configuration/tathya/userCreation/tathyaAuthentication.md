# User Authentication in Tathya

After successfully creating an LDAP user account, log in to Tathya using the generated credentials.

Tathya forwards the authentication request to the LDAP server, which verifies the user's credentials against its directory and responds to Tathya with the authentication status.

## Access to Tathya

{% hint style="success" %}
If the LDAP authentication is successful, Tathya grants access to the user.
{% endhint %}