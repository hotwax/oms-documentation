# Add DBICs

DBIC stands for `Doing Business in Countries`

This list should be retrieved from the client. If a client is using multiple instances to service multiple countries, only add the countries that this instance will be used for.
The countries that are added here will be available in all address forms thoughout the application, so adding too many countries creates a bad experience for users.

DBIC countries need to be added from the XML data import page in WebTools, the backend service application of HotWax Commerce.

Log into Webtools
```
{hostname}.hotwax.io/webtools
```

Under `Framework Web Tools`, click `Import/Export`. Then in the list of buttons below, select `XML Data Import`

Alternatively you can go to this URL after loging in
```
{hostname}.hotwax.io/webtools/control/EntityImport
```

#### Get Geo IDs for your DBIC data
GeoIds for all countries can be found in the Geo entity in Webtools. Use them to create GeoAssoc data like the sample data below. Replace the geoId and sequenceNum to create your own data for other countries.

To go to this page directly, use this URL with your hostname
```
{hostname}.hotwax.io/webtools/control/FindGeneric?entityName=Geo
```

{% hint style="warning" %}
    The sequence number decides the sequencing of DBIC options in the country dropdown on the stores page.
{% endhint %}

```
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="USA" geoIdTo="DBIC" sequenceNum="1"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="CAN" geoIdTo="DBIC" sequenceNum="2"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="ENGL" geoIdTo="DBIC" sequenceNum="3"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="NIRL" geoIdTo="DBIC" sequenceNum="4"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="SCOT" geoIdTo="DBIC" sequenceNum="5"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="WALS" geoIdTo="DBIC" sequenceNum="6"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="SGP" geoIdTo="DBIC" sequenceNum="7"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="NLD" geoIdTo="DBIC" sequenceNum="8"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="AUS" geoIdTo="DBIC" sequenceNum="9"/>
<GeoAssoc geoAssocTypeId="GROUP_MEMBER" geoId="GBR" geoIdTo="DBIC" sequenceNum="10"/>
```

Geo IDs for countries in Great Britian have to be added in addition to the ID for Great Britian itself. This is because Shopify categorises Great Britian as a country as well.

DBIC countries in Great Britian:
- England
- Wales
- Scotland