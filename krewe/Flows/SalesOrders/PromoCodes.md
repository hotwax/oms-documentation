# Setup Promo Codes

# Create data for Integration Type Mapping entity

Following the Netsuite setup document, schedule all required scripts. Create custom discount code mapping data specific to Krewe within the IntegrationTypeMapping entity. This data will map the generic Netsuite discount values in HotWax. This universal value will serve as a fallback when the discount code provided in the Shopify order JSON is not found in Netsuite. 

Krewe uses Netsuite's internal ID for item level discount, so create the item level discount mapping data with the Netsuite internal ID.

Create Enumeration data before creating IntegrationTypeMapping data.
```xml
<Enumeration description="Discount codes mapping between HotWax and Netsuite" enumId="NETSUITE_DISC_MTHD" enumName="Netsuite Discount Codes" enumTypeId="NETSUITE" sequenceId="1"/>
```

```xml
<IntegrationTypeMapping integrationTypeId="NETSUITE_DISC_MTHD" mappingKey="SHOPIFY_DISC" mappingValue="SHOPIFY DISCOUNT"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_DISC_MTHD" mappingKey="SHOPIFY_ITEM_DISC" mappingValue="41006"/>
```
