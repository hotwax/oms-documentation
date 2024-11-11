---
description: >-
  Discover how the Post Code Lookup API fetches information related to postal
  codes, aiding developers in various applications.
---

# Post Code Lookup

The Post Code Lookup API provides developers with the ability to fetch information related to postal codes. This API offers three main functionalities:

* Fetching postal codes for a given latitude and longitude within a specified range
* Fetching latitude and longitude for a given postal code
* Fetching latitude and longitude for a partial postal code

\
\\

## Fetch Postal Code for Latitude Longitude in a Given Range

Fetches the postal code for a specific location based on its latitude and longitude. The API can also return postal codes for locations within a specified distance range from the provided latitude and longitude. To get the postal code, you will need to call /postcodeLookup endpoint with the POST method.

### Request

#### Endpoint

`https://<host>/api/postcodeLookup`

#### Header

Content-Type:​ application/json

#### Body

```
{
  "json": {
    "params": {
      "q": "*:*",
      "fq": "{!geofilt sfield=location}",
      "pt": "18.180555,-66.749961",
      "d": "10"
    }
  }
}
```

| Parameter | Description                                             | Required (Y/N) |
| --------- | ------------------------------------------------------- | -------------- |
| `q`       | The query parameter                                     | N              |
| `fq`      | Applies a filter to the query search results            | N              |
| `pt`      | The latitude and longitude of the location              | N              |
| `d`       | The distance from which postal code needs to be fetched | N              |

Note:

* `pt` and `d` parameters are required to get the post codes
* `d` = 0 will fetch exact post code value for passed latitude and longitude
* `d` > 0 will fetch post codes within the given distance

### Response

#### Status Code

HTTP/1.1 200 OK

#### Headers

Content-Type: application/json

#### Body

```
{
  "responseHeader": {
    "status": 0,
    "QTime": 2,
    "params": {
      "json": "{\"params\":{\"q\":\"*:*\",\"fq\":\"{!geofilt-sfield=location}\",\"pt\":\"18.180555,-66.749961\",\"d\":\"10\"}}"
    }
  },
  "response": {
    "numFound": 1,
    "start": 0,
    "numFoundExact": true,
    "docs": [
      {
        "postcode": "601",
        "latitude": "18.180555",
        "longitude": "-66.749961",
        "country": "USA",
        "country-code-id": "601-USA",
        "location": "18.180555,-66.749961",
        "_version_": 1752733513051799552
      }
    ]
  }
}
```

| Parameter         | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `numfound`        | The number of results found                             |
| `postcode`        | The postal code for the provided latitude and longitude |
| `latitude`        | The latitude of the postal code                         |
| `longitude`       | The longitude of the postal code                        |
| `country`         | The country of the provided postal code                 |
| `country-code-ID` | The country code ID of the provided country             |
| `location`        | The latitude and longitude points of the postal code    |

\
\\

## Fetch latitude longitude for a postal code

Fetches the latitude longitude for a specific postal code. To look up the latitude longitude you will need to call the endpoint with the POST method.

### Request

#### Endpoint

`https://<host>/api/postcodeLookup`

#### Header

Content-Type:​ application/json

#### Body

```
{
  "json": {
    "query": "postcode:2635"
  }
}
```

| Parameter  | Description     | Required (Y/N) |
| ---------- | --------------- | -------------- |
| `postcode` | The postal code | Y              |

### Response

#### Status Code

HTTP/1.1 200 OK

#### Headers

Content-Type: application/json

#### Body

```
{
 "responseHeader": {
   "status": 0,
   "QTime": 1,
   "params": {
     "json": "{\"query\":\"postcode:2635\"}"
   }
 },
 "response": {
   "numFound": 1,
   "start": 0,
   "numFoundExact": true,
   "docs": [
     {
       "postcode": "2635",
       "latitude": "41.624054",
       "longitude": "-70.439397",
       "country": "USA",
       "country-code-id": "2635-USA",
       "location": "41.624054,-70.439397",
       "_version_": 1752733516719718400
     }
   ]
 }
}
```

| Parameter         | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `postcode`        | The postal code for the provided latitude and longitude |
| `latitude`        | The latitude of the postal code                         |
| `longitude`       | The longitude of the postal code                        |
| `country`         | The country of the provided postal code                 |
| `country-code-ID` | The country code ID of the provided country             |
| `location`        | The latitude and longitude points of the postal code    |

\
\\

## Fetch latitude longitude for a partial postal code

Fetches the latitude longitude for a partial postal code. This API fetches all the latitude and longitude matching the partial postal code. To look up the latitude longitude for a partial postal code you will need to call the endpoint with the POST method.

### Request

#### Endpoint

`https://<host>/api/postcodeLookup`

#### Header

Content-Type:​ application/json

#### Body

```
{
  "json": {
    "query": "postcodelike:6011",
    "fields": ["latitude", "longitude"]
  }
}
```

| Parameter      | Description                                                                          | Required (Y/N) |
| -------------- | ------------------------------------------------------------------------------------ | -------------- |
| `postcodelike` | The partial postal code                                                              | Y              |
| `fields`       | The data fields or attributes that are included in the response body of the API call | Y              |

### Response

#### Status Code

HTTP/1.1 200 OK

#### Headers

Content-Type: application/json

#### Body

```
"response": {
 "numFound": 2,
 "start": 0,
 "numFoundExact": true,
 "docs": [
   {
     "latitude": "40.130099",
     "longitude": "-85.760763"
   },
   {
     "latitude": "32.754272",
     "longitude": "-97.083196"
   }
 ]
}
```

| Parameter   | Description                      |
| ----------- | -------------------------------- |
| `latitude`  | The latitude of the postal code  |
| `longitude` | The longitude of the postal code |
