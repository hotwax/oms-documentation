# API authentication 

## Overview 

Verfies the identity of the user. To make transactions on HotWax’s platform secure, all apps connecting with HotWax API need authentication when making API requests.

## Authentication Method Used

### Bearer token authentication

Bearer token authentication utilizes security tokens. After a successful login request, the server generates a secret string known as a bearer token. When making requests for protected resources, the user must include the token in the authorization header.

## HotWax Authentication Endpoint

Sample endpoint: `https://<host_name>.hotwax.io/<api_name>/login`

## Hotwax Commerce JWT Token Generation

Hotwax Commerce relies on the robust security features provided by JWT (JSON Web Token) to ensure a safe and trustworthy API communication environment. This mechanism guarantees the authenticity of users, authorizes their actions, and maintains the integrity of transmitted data through digital signatures.

### Token Generation Process

Creating a JWT token within the Hotwax Commerce OMS dashboard is a straightforward process:

1. **User Authorization:**
   - Create a unique user from [users.hotwax.io](https://users.hotwax.io/) and assign it admin permissions, e.g., Boomi Integration.

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

### Usage

This generated JWT token serves as a powerful credential, allowing authenticated access to Hotwax Commerce OMS data. Utilizing this token in API calls enhances both security and efficiency, contributing to the seamless integration and performance of the system.



## The following HotWax APIs require an authentication token:

1. `updateInventory`

Note: Before using the APIs requiring an authentication token, the user must ask for a bearer token from HotWax.

To learn more about Bearer token authentication, watch this [video](https://youtu.be/n-IFlWGX1t4)
