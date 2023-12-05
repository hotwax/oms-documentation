# API Authentication Overview

To ensure secure transactions on HotWax's platform, all applications connecting with the HotWax API require authentication when making API requests. The primary method of authentication employed is **Bearer token authentication**.

## Bearer Token Authentication

Bearer token authentication utilizes security tokens. After a successful login request, the server generates a secret string known as a bearer token. When making requests for protected resources, the user must include the token in the authorization header.

## Hotwax Commerce JWT Token Generation

Hotwax Commerce relies on robust security features provided by JWT (JSON Web Token) to ensure a safe and trustworthy API communication environment. This mechanism guarantees user authenticity, authorizes their actions, and maintains data integrity through digital signatures.

### Token Generation Process

1. **User Authorization:**
   - Create a unique user from [users.hotwax.io](https://users.hotwax.io/) and assign admin permissions, e.g., Boomi Integration.

2. **Access OMS Dashboard:**
   - Navigate to the Hamburger menu in OMS: `https://{instanceName}.hotwax.io/`

3. **Settings Option:**
   - Access the Settings option and choose `Create JWT Token`.

4. **User Details:**
   - Input the user ID.

5. **Token Configuration:**
   - Define the validation period.
   - Specify the purpose of the token.

6. **Token Creation:**
   - Click `Create`, and the resulting JWT token will be displayed in the dedicated section.

7. **Copy Token:**
   - For ease of use, the token is equipped with a copy icon upon hovering.

## HotWax Authentication Endpoint

Sample endpoint: `https://<host_name>.hotwax.io/<api_name>/login`


### Usage

The generated JWT token serves as a powerful credential, enabling authenticated access to Hotwax Commerce OMS data. Utilizing this token in API calls enhances both security and efficiency, contributing to the seamless integration and performance of the system.

## HotWax APIs Requiring Authentication

The following HotWax APIs require an authentication token:

1. `updateInventory`

**Note:** Before using APIs requiring an authentication token, users must request a bearer token from HotWax.

For more information about Bearer token authentication, refer to this [video](https://youtu.be/n-IFlWGX1t4).
