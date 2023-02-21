# Getting started with BOPIS PDP experience

### HotWax's BOPIS PDP experience allows customers to browse all available pickup stores (facilities) for their desired products on the Shopify product detail page (PDP)

## To integrate this feature, follow these steps:

### Step 1: Obtain the customer's latitude and longitude

To show available pickup facilities near the customer, the latitude and longitude coordinates of the customer are required. There are two ways to obtain these coordinates:
<ol>
<li>If the customer inputs their postal code,
<ul> <li>Use the postcodeLookup API to convert the postal code into latitude and longitude coordinates </ul>
<li>If the customer allows access to their system location, 
<ul> <li>Obtain the  latitude and longitude coordinates directly from their device</ul>
</ol>

#### Sample: 

Method: `POST`

##### Request
```
{
  "json": {
    "query": "postcode: 10007"
  }
}
```

##### Response
```
{
  "responseHeader": {
    "status": 0,
    "QTime": 2,
    "params": {
      "json": "{\"query\":\"postcode:10007\"}"
    }
  },
  "response": {
    "numFound": 1,
    "start": 0,
    "numFoundExact": true,
    "docs": [
      {
      "postcode": "10007",
      "latitude": "40.713858",
      "longitude": "-74.007777",
      "country": "USA",
      "country-code-id": "10007-USA",
      "location": "40.713858,-74.007777",
      "_version_": 1752733529047826432
      }
    ]
  }
}
```

### Step 2: Fetch all stores allowing BOPIS

Using the latitude and longitude coordinates,  call the storeLookup API to fetch all the facilities within a given distance that allow BOPIS. 
Note: The distance parameter is configurable to narrow down the search results. You can allow customers to input their preferred distance or set a default value.

#### Sample: 

Method: `POST`

##### Request
```
{
  "viewSize": 40,
  "filters": ["storeType: RETAIL_STORE"],
  "point": "40.713858,-74.007777",
  "distance": 50
}

```

##### Response
```
{
  "responseHeader": {
    "status": 0,
    "QTime": 5,
    "params": {
      "d": "50",
      "pt": "40.713858,-74.007777",
      "fl": "*,dist:geodist()",
      "start": "0",
      "json": "{\"filter\":[\"docType: STORE\",\"storeType: RETAIL_STORE\"],\"query\":\"*:*\",\"sort\":\"geodist() asc\"}",
      "q.op": "AND",
      "fq": "{!geofilt}",
      "rows": "40",
      "sfield": "latlon"
    }
  },
  "response": {
    "numFound": 3,
    "start": 0,
    "docs": [
      {
        "identifier": "STORE_15",
        "country": "United States",
        "docType": "STORE",
        "externalId": "DC_STORE_15",
        "storeName": "Facility",
        "countryCode": "USA",
        "city": "New York",
        "latlon": "40.72,-74",
        "postalCode": "10012",
        "storePhone": "",
        "storeCode": "STORE_15",
        "docType-identifier": "STORE-STORE_15",
        "stateCode": "NY",
        "state": "New York",
        "address1": "10 Times Square",
        "storeType": "RETAIL_STORE",
        "_version_": 1735068683092361221,
        "dist": 0.9465923971374126
      },
      {
        "identifier": "STORE_20",
        "country": "United States",
        "docType": "STORE",
        "externalId": "DC_STORE_20",
        "storeName": "New facility",
        "countryCode": "USA",
        "city": "New York",
        "latlon": "40.72,-74",
        "postalCode": "10012",
        "storePhone": "",
        "storeCode": "STORE_20",
        "docType-identifier": "STORE-STORE_20",
        "stateCode": "NY",
        "state": "New York",
        "address1": "4 Broadway",
        "storeType": "RETAIL_STORE",
        "_version_": 1735068683093409793,
        "dist": 0.9465923971374126
      },
      {
        "identifier": "STORE_9",
        "country": "United States",
        "docType": "STORE",
        "externalId": "DC_STORE_9",
        "storeName": "Broadway",
        "countryCode": "USA",
        "city": "New York",
        "latlon": "40.72,-74",
        "postalCode": "10012",
        "storePhone": "1212555-5555",
        "storeCode": "STORE_9",
        "docType-identifier": "STORE-STORE_9",
        "stateCode": "NY",
        "state": "New York",
        "address1": "540 Broadway",
        "storeType": "RETAIL_STORE",
        "_version_": 1735068683094458369,
        "dist": 0.9465923971374126
      }
    ]
  }
}
```

### Step 3: Check inventory at each store allowing BOPIS 

For each store that allows BOPIS, use the checkInventory API to check the available to promise (ATP) inventory for the desired product. Display all the facilities with non-zero inventory numbers on the product detail page (PDP) for customers to select and place a BOPIS order. 

Note: If a facility has 0 inventory for the product, you can still display it for the Ship-to-store PDP experience.

#### Sample: 

Method: `GET`

##### Request
```
https://dev-apps.hotwax.io/api/checkInventory?productId=10249&facilityId=STORE_9&facilityId=STORE_20&facilityId=STORE_15
```

##### Response
```
{
"count": "1",
  "docs": [
    {
    "facilityId": "STORE_9",
    "atp": 13.000000
    },
    {
    "facilityId": "STORE_20",
    "atp": 8.000000
    },
    {
    "facilityId": "STORE_15",
    "atp": 0.000000
    }
  ]
}
```

### Handle cases when customer location is not available:

In case the customer's location is not available, you can display all the available store pickup locations for the product using the storeLookup API and checkInventory API. Here's how to handle this scenario:
<ul>
<li> Step 1: Call the storeLookup API without passing latitude and longitude coordinates to retrieve all facilities allowing BOPIS</li>
<li> Step 2: Use the facility IDs returned in the response of the storeLookup API with the checkInventory API to get the facilities having inventory for the product </li>
  <li> Step 3: Display all the locations with non-zero inventory on the PDP </li>
</ol>

#### Sample: 

##### Request

```
{
  "viewSize": 40,
  "filters": ["storeType: RETAIL_STORE"]
}
```

