# User Creation

With roles set up to manage access to dashboards and charts, the next step is to create user profiles and assign the appropriate roles.

{% hint style="warning" %}
Skip this step if the user is already listed on Tathya.
{% endhint %}

To initiate this process, it is essential to first “list” the user on the Tathya platform.

## Prerequisites

User access to Tathya requires prior registration on LDAP (Lightweight Directory Access Protocol).

{% hint style="info" %}
**LDAP** serves as a centralized user management platform which ensures authentication across various systems. The LDAP integration allows for a single sign-on (SSO) experience, where a registered user can use their LDAP credentials to access multiple systems, including Nifi and Tathya.
{% endhint %}