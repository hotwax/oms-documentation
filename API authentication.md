# API authentication 

## Overview 

Verfies the identity of the user. To make transactions on HotWax’s platform secure, all apps connecting with HotWax API need authentication when making API requests.

## Authentication Method Used

### Bearer token authentication

Bearer token authentication utilizes security tokens. After a successful login request, the server generates a secret string known as a bearer token. When making requests for protected resources, the user must include the token in the authorization header.

## HotWax Authentication Endpoint

Sample endpoint: `https://<host_name>.hotwax.io/<api_name>/login`

## The following HotWax APIs require an authentication token:

1. `updateInventory`

Note: Before using the APIs requiring an authentication token, the user must ask for a bearer token from HotWax.

To learn more about Bearer token authentication, watch this [video](https://youtu.be/n-IFlWGX1t4)
