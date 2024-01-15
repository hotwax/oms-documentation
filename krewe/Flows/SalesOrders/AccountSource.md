# Account Source

## What is Account Source?

Account source is a custom field that Krewe has added in their custom Customer Import form. The account source of a customer helps track where a customer bought a Krewe product from for the first time. For example, if a customer first placed an order on Instagram, that will become their account source.

Within NetSuite, the account source field maps the customer to a corresponding marketing campaign. Reports are then run on those marketing campaigns to analyze new customer attribution by sales channel.

## How they're setup in HotWax Commerce

We've created Party Classification Groups in HotWax Commerce that have the same internal ID as the Sales Channel Enumeration so that during synchronization with NetSuite their source can be easily identified. At the time of customer creation in HotWax, it's linked Sales Order's sales channel ID is used to identify which Party Classification Group to add it to.

When HotWax generates a feed of new customers to be synced with NetSuite, it identifies all customers that do not have a NetSuite Identification and the party classification that they're linked to. Because this value is not frequently changed, it is not configurable from a user facing interface. Instead the mappings are saved in the integration layer.

**Here are the mappings as of August 26th 2023:**

If the party classification is POS, send: 13 If the party classification is anything else, send: 14

## XML Data

{% hint style="danger" %}
The partyClassificationGroupId must be the same as the Sales Channel enumeration ID for the account source mapping to work.
{% endhint %}

{% hint style="info" %}
If a mapping is not found for a POS channel order, the account source will default to 14.
{% endhint %}

<details>

<summary>Party Classifications</summary>

```xml
<PartyClassificationGroup partyClassificationGroupId="WEB_SALES_CHANNEL" partyClassificationTypeId="ACCT_SOURCE_INFO" description="Web Sales Channel"/>
<PartyClassificationGroup partyClassificationGroupId="INSTA_SALES_CHANNEL" partyClassificationTypeId="ACCT_SOURCE_INFO" description="Instagram Sales Channel"/>
<PartyClassificationGroup partyClassificationGroupId="FACBK_SALES_CHANNEL" partyClassificationTypeId="ACCT_SOURCE_INFO" description="Facebook Sales Channel"/>
<PartyClassificationGroup partyClassificationGroupId="POS_SALES_CHANNEL" partyClassificationTypeId="ACCT_SOURCE_INFO" description="POS Sales Channel"/>
<PartyClassificationGroup partyClassificationGroupId="AMAZON_SALES_CHANNEL" partyClassificationTypeId="ACCT_SOURCE_INFO" description="Amazon Sales Channel"/>
<PartyClassificationGroup partyClassificationGroupId="DRAFT_SALES_CHANNEL" partyClassificationTypeId="ACCT_SOURCE_INFO" description="Draft Sales Channel"/>
```

</details>
