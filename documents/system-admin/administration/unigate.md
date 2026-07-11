---
description: Configure an OMS Unigate tenant and email gateway settings for email automation.
---

# Configure Unigate for email automation

Use Unigate to connect the OMS to a supported email gateway. Complete this setup before adding a Klaviyo connection in the Company app.

## Before you begin

Collect the following values from the Unigate deployment or gateway owner:

* Unigate tenant ID
* Unigate base URL
* Unigate API key
* Email-gateway credentials and endpoint
* Product store, email event type, sender address, subject, and approved message template

{% hint style="warning" %}
API keys and gateway credentials are secrets. Enter them directly in OMS. Do not add them to documentation, issue comments, screenshots, or email templates.
{% endhint %}

## 1. Set up the Unigate tenant

1. In OMS Admin, open `Unigate` > `Communication Gateway`.
2. In the **Active Tenant** section, select `Setup Tenant`.
3. Enter the tenant ID, description, instance URL, and API key supplied for the Unigate deployment.
4. Select `Create`.

OMS stores this connection as `UNIGATE_CONFIG`. The tenant is ready only when the tenant ID, API key, and instance URL are all present.

## 2. Add the email gateway authentication

1. In **Communication Gateway Auths**, select `Add Comm Auth`.
2. Select the supported gateway configuration.
3. Enter a gateway auth ID, description, base URL, and the credentials required by that gateway.
4. Set the authentication header name when the gateway requires one, then select `Add`.

Record the gateway auth ID. You select it when you create an email setting.

## 3. Add a product-store email setting

1. In **Product Store Email Settings**, select `Add Email Setting`.
2. Select the product store and email type.
3. Enter the sender address and subject.
4. Select the approved message template in **Body Screen Location**.
5. Select the gateway auth ID created in the previous step.
6. Leave **System Message Remote ID** set to `UNIGATE_CONFIG` unless the implementation owner has supplied a different configured remote.
7. Select `Add`.

## 4. Verify the connection

1. Confirm that **Active Tenant** shows the tenant ID and base URL.
2. Confirm that the gateway authentication record appears in **Communication Gateway Auths**.
3. Confirm that the product-store email setting lists the expected email type and gateway auth ID.
4. Refresh the Company app. The email connection is available only after `UNIGATE_CONFIG` exists on the OMS instance.

If any tenant field is missing, OMS marks `UNIGATE_CONFIG` as incomplete and does not expose the gateway settings. Correct the tenant configuration before adding or updating email settings.

## Update or replace credentials

Update tenant or gateway credentials only when the deployment owner has provided replacement values. Replacing the Unigate API key changes the key used by every email connection routed through that tenant. Verify the replacement with the integration owner before saving it.
