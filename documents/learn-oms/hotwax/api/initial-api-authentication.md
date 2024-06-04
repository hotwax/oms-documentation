---
description: >-
  Learn about authentication requirements for secure transactions on HotWax's
  platform. Ensure safe API requests effortlessly.
---

# Authentication

To ensure secure transactions on HotWax's platform, all applications connecting with the HotWax API require authentication when making API requests. The primary method of authentication employed is **Bearer token authentication**.

## Bearer Token Authentication

Bearer token authentication utilizes security tokens. After a successful login request, the server generates a secret string known as a bearer token. When making requests for protected resources, the user must include the token in the authorization header.

## How to generate a bearer token?

Hotwax Commerce relies on robust security features provided by JWT (JSON Web Token) to ensure a safe and trustworthy API communication environment. This mechanism guarantees user authenticity, authorizes their actions, and maintains data integrity through digital signatures. To create JWT, follow these steps:

1. Create a unique user from [users.hotwax.io](https://users.hotwax.io/) by using integration template or assign the integration permissions.
2. Make sure that Reset Password on Login is unchecked.
3. Navigate to the Hamburger menu in OMS: `https://{instanceName}.hotwax.io/`
4. Access the Settings option and choose `Create JWT Token`.
5. Input the user ID.It will display only the users having integration permissions.
6. Token Configuration:\*\*
   * Define the validation period.
   * Specify the purpose of the token.
7. Click `Create`, and the resulting JWT token will be displayed in the dedicated section.
8. Copy Token and use it to build connection

## Authentication Endpoint

Sample endpoint: `https://<host_name>.hotwax.io/<api_name>/login`

## APIs Requiring Authentication

The following HotWax APIs require an authentication token:

1. `updateInventory`

For more information about Bearer token authentication, refer to this [video](https://youtu.be/n-IFlWGX1t4).
