---
description: HotWax Commerce now supports the SAML-based Single Sign-On feature.
---

# Launched Single Sign On

<figure><img src="https://www.hotwax.co/hubfs/Single%20Sign%20On.png" alt="" width="563"><figcaption><p>Single Sign On</p></figcaption></figure>

HotWax Commerce is used by enterprise retailers who use multiple software solutions, like WMS, ERP, etc. Users of enterprise retailers constantly have to juggle multiple systems to get the job done. However, each system has its own authentication and authorization process, and remembering login credentials for various systems makes work even more complicated for the users.\
\
HotWax Commerce also has multiple applications for dedicated operations like receiving, inventory counting, picking and packing items for fulfillment, managing pre-orders, and more. Previously, each application had its own authentication and authorization process, forcing users to log in multiple times on each application, which negatively impacted the user experience.

With this update, HotWax Commerce launched Single Sign On that adheres to the [SAML (Security Assertion Markup Language) Standard](https://learn.microsoft.com/en-us/azure/active-directory/develop/single-sign-on-saml-protocol). With Single Sign On, enterprise users do not have to create, remember, and enter multiple passwords for each application, or other SAML-compatible systems in their tech stack. This improves the user experience by providing access to multiple applications and systems from a single login.\
\
SAML also offers increased security because the Identity Provider stores all login information and HotWax Commerce does not need to store any user credentials. Retailers can choose any Identity Provider, like Microsoft Azure or OneLogin.

Retailers that don’t use a SAML Single Sign On platform will still benefit from HotWax Single Sign On across HotWax Commerce apps, eliminating repeated logins when switching between apps using the Launchpad.
