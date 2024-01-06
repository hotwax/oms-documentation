# How to Set Up a Carrier

Before configuring a shipping method, it is necessary to set up a carrier corresponding to that shipping method. The OMS comes with a default placeholder carrier that can be utilized when an exact carrier shipment method doesn't need to be mapped or when Service Level Agreements (SLAs) are used to rateshop with carriers and determine an optimized shipping method.

In the OMS, a carrier is defined as a party. A party in the OMS can fulfill multiple roles, and these roles are assigned separately as PartyRoles.

To create a party for your carrier, utilize the following sample XML data and complete the party details.

Import this XML data using the web tools' import XML data function.

```xml
<Party partyId="{partyId}" partyTypeId="PARTY_GROUP"/>
```

{% hint style="info" %}
Insert a unique custom party ID for your carrier and proceed to import it into the system.
The party ID cannot be longer than 20 characters
{% endhint %}


Now that the carrier party is created, you have to assing a carrier role to it. Add the party ID to this sample data and import it into the OMS to give the party a carrier role:

```xml
<PartyRole partyId="{partyId}" roleTypeId="CARRIER"/>
```