# Unigate Email Integration Setup

This document explains how to configure **OMS with Unigate** for sending email notifications (e.g., Ready for Pickup emails).

## 1. System Message Remote
Defines a remote system endpoint to which messages (emails) will be sent.

- **description** → Label for the integration  
- **sendUrl** → Endpoint where messages will be sent (from `SystemMessageRemote` entity in OMS)  
- **systemMessageRemoteId** → Unique identifier for this remote configuration  

```xml
<SystemMessageRemote 
    description="Send email to [instance name]" 
    sendUrl="https://a.klaviyo.com/api/" 
    systemMessageRemoteId="KLAVIYO"/>

## 2. Communication Gateway Config

Configures the gateway that will handle sending emails via Unigate.

* **commGatewayConfigId** → Unique ID for the gateway
* **description** → Name of the gateway
* **sendEmailServiceName** → Service in Moqui used to send the email

Available services:

1. `co.hotwax.klaviyo.KlaviyoServices.send#EmailCommunication` → Send an email
2. `co.hotwax.klaviyo.KlaviyoServices.create#WorkflowEvent` → Create an event in Klaviyo
3. `co.hotwax.klaviyo.common.KlaviyoServices.send#KlaviyoRequest` → Send a request to Klaviyo

```xml
<co.hotwax.unigate.CommGatewayConfig 
    commGatewayConfigId="KLAVIYO"
    description="Klaviyo Gateway For [instance name]"
    sendEmailServiceName="co.hotwax.klaviyo.KlaviyoServices.send#EmailCommunication"/>
```


## 3. Instance Party

Represents the organization (instance) that will use this integration.

* **partyId** → Unique ID for the organization
* **partyTypeEnumId** → Defines that it is an `Organization` type (`PtyOrganization`)
* **organizationName** → Name of the organization

```xml
<co.hotwax.unigate.Party 
    partyId="[instance name]" 
    partyTypeEnumId="PtyOrganization">
    <organization organizationName="[instance name]"/>
</co.hotwax.unigate.Party>
```

## 4. Communication Gateway Auth

Defines the authentication link between the remote system, gateway config, and tenant.

* **systemMessageRemoteId** → Connects to remote system
* **commGatewayConfigId** → Connects to gateway configuration
* **tenantPartyId** → The tenant/organization using this gateway

```xml
<co.hotwax.unigate.CommGatewayAuth 
    systemMessageRemoteId="KLAVIYO" 
    commGatewayConfigId="KLAVIYO" 
    tenantPartyId="[instance name]"/>
```

## 5. Client User Credentials

Creates an instance user account for Unigate API access.

* **userId** → Unique identifier for the user
* **username** → Username for authentication
* **userFullName** → Display name of the user
* **partyId** → Links user to organization

Also, assign user to **UNIGATE\_API** group.

```xml
<moqui.security.UserAccount 
    userId="[instance name]" 
    username="[instance name].apiuser" 
    userFullName="[instance name] KLAVIYO" 
    partyId="[instance name]"/>

<moqui.security.UserGroupMember 
    userGroupId="UNIGATE_API" 
    userId="[instance name]" 
    fromDate="2025-09-05T00:00:00"/>
```

## 6. Unigate System Configuration

Defines the Unigate integration endpoint for sending/receiving messages.

* **systemMessageRemoteId** → Unique ID for this config
* **description** → Explains purpose
* **sendUrl** → Instance URL with Unigate REST endpoint
* **publicKey** → Generated from \[Unigate Tenant Detail page]
* **remoteId** → Remote ID created above
* **internalId** → References `partyId`

```xml
<moqui.service.message.SystemMessageRemote 
    systemMessageRemoteId="UNIGATE_CONFIG" 
    description="Unigate configuration for shipping and communication integrations"
    sendUrl="https://[instance name]-uat.hotwax.io/rest/s1/unigate" 
    publicKey="[YOUR_PUBLIC_KEY]"
    remoteId="KLAVIYO" 
    internalId="[instance name]"/>
```

## 7. Enumerations

Defines message types for sending specific emails.

* **enumId** → Unique identifier
* **description** → Explanation
* **enumTypeId** → E.g. `OMSMessageTypeEnum`
* **relatedEnumId** → Links to another enum (event trigger)

```xml
<moqui.basic.Enumeration 
    enumId="SendReadyForPickupEmail" 
    description="Send Ready for Pickup Email" 
    enumTypeId="OMSMessageTypeEnum"/>

<moqui.basic.Enumeration 
    enumId="READY_FOR_PICKUP" 
    enumCode="READY_FOR_PICKUP" 
    enumName="BOPIS Order Ready for Pickup" 
    description="Ready to Pickup Item" 
    enumTypeId="PRDS_EMAIL" 
    relatedEnumId="SendReadyForPickupEmail"/>
```

## 8. Product Store Email Settings

Configures store-level email settings to use Unigate.

* **emailType** → Type of email (`enumCode`)
* **productStoreId** → Store ID
* **subject** → Email subject line
* **systemMessageRemoteId** → References Unigate configuration

```xml
<org.apache.ofbiz.product.store.ProductStoreEmailSetting 
    emailType="READY_FOR_PICKUP" 
    productStoreId="STORE" 
    subject="Ready To Pick-Up Notification" 
    systemMessageRemoteId="UNIGATE_CONFIG"/>
```

## 9. System Message Type

Defines the service triggered to send the email.

* **systemMessageTypeId** → Unique identifier
* **description** → Purpose
* **sendServiceName** → Moqui service for sending email
* **sendPath** → Category/path (e.g., `communication/email`)

```xml
<moqui.service.message.SystemMessageType 
    systemMessageTypeId="SendReadyForPickupEmail" 
    description="Send Ready for Pickup Email"
    sendServiceName="co.hotwax.orderledger.order.email.EmailServices.send#EmailRequest" 
    sendPath="communication/email"/>
```

## 10. Communication Event Type

Defines the event type for system message emails.

* **communicationEventTypeId** → `SYS_MSG_EMAIL_COMM` (hardcoded)
* **parentTypeId** → Parent category (`EMAIL_COMMUNICATION`)
* **hasTable** → Whether it has its own table (`N`)
* **description** → Explanation
* **contactMechTypeId** → `EMAIL_ADDRESS`

```xml
<org.apache.ofbiz.party.communication.CommunicationEventType 
    communicationEventTypeId="SYS_MSG_EMAIL_COMM" 
    parentTypeId="EMAIL_COMMUNICATION" 
    hasTable="N" 
    description="Email Communication as a part of SystemMessage flow" 
    contactMechTypeId="EMAIL_ADDRESS"/>
```
