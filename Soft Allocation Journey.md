# Introduction to Soft Allocation Brokering

Hotwax Commerce's Soft allocation brokering allows the customer to explore the eligibility of same day delivery of their shopping cart on Shopify's checkout as well as mini cart.

Soft allocation evaluates the list of items and the destination zip code against the predefined criteria by the retailers to validate same-day shipping eligibility in compliance with shipping carriers.

Internally, the process of soft allocation follows the following steps:

### Step 1: Obtain the customer's latitude and longitude

To check eligible same-day shipping facilities near the customer, the latitude and longitude coordinates of the customer are required. There are two ways to obtain these coordinates:

- If the customer inputs their postal code,
  - Use the postcodeLookup API to convert the postal code into latitude and longitude coordinates

- If the customer allows access to their system location,
  - Obtain the latitude and longitude coordinates directly from their device

`postCodeLookup` API offers three main functionalities -

- Fetching postal codes for a given latitude and longitude within a specified range
- Fetching latitude and longitude for a given postal code
- Fetching latitude and longitude for a partial postal code

### Sample :

### Method : `/POST`

## Request

```
{

"json": {

"query": "postcode: 10007"

}

}
```
## Response
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

"\_version\_": 1752733529047826432

}

]

}

}
```

## Step 2: Check inventory at each store allowing same day delivery

For each store offering same-day delivery, utilize the checkCartInventory API to assess the eligibility for the desired product.

This API provides results indicating the availability or unavailability of same-day delivery based on two key factors:

1. Latitude and longitude of the facility
2. Order time compared to the store closing time

### Method : `/POST`

## Request
```
{

point: "\\<latlon\\>",

distance: "sameDayStoreSearchProximity",

shopifyShopId: "shopId",

items: "cartItems",

filters: ["\\<filter1\\>", "\\<filter2\\>"]

}
```
## Response
```

{

"facilityId": "646",

"distance": 15,

"cors.request.origin": "[https://originalpenguin-dev.myshopify.com](https://originalpenguin-dev.myshopify.com/)",

"shopifyShopId": "10224533555",

"filters":[

"sameday\_pref: true",

"docType: STORE",

"shopifyShop\_id:10224533555"

],

"point": "25.786909, -80.361253",

"cors.request.type": "actual",

"items": [

{

"quantity": 1,

"variantId": "42088603123903",

"availableQty": 1,

"status": "available"

}

],

"facility":

{

"docType": "STORE",

"storeCode": "646",

"identifier": "646",

"storeType": "RETAIL\_STORE",

"storeName": "Dolphin Mall",

"externalId": "646",

"primaryFacilityGroupId": "10224533555",

"primaryFacilityGroupName": "OP\_Group",

"primaryShopifyShopId": "10224533555",

"10224533555\_pref": "true",

"fac\_grp\_pref": "true",

"sameday\_pref": "true",

"address1": "11401 NW 12th Street",

"city": "Miami",

"postalCode": "33172",

"country": "United States",

"countryCode": "US",

"state": "Florida",

"stateCode": "FL",

"latlon": "25.7875845,-80.3805674",

"shopifyShop\_id": ["10224533555"],

"shopifyShops": [

"[{\"domain\":\"[originalpenguin-dev.myshopify.com](http://originalpenguin-dev.myshopify.com/)\",

\"name\":\"originalpenguin-dev\",\"myshopifyDomain\":\"[originalpenguin-dev.myshopify.com](http://originalpenguin-dev.myshopify.com/)\",

\"shopifyShopId\":\"10224533555\",\"shopId\":\"OP\_SHOP\"}]" ],

"productStore\_id": ["OP\_STORE"],

"productStores": [

"[{\"storeName\":\"Original Penguin\",\"productStoreId\":\"OP\_STORE\"}]" ],

"monday\_open": "10:00:00",

"monday\_close": "21:00:00",

"tuesday\_open": "10:00:00",

"tuesday\_close": "21:00:00",

"wednesday\_open": "10:00:00",

"wednesday\_close": "21:00:00",

"thursday\_open": "10:00:00",

"thursday\_close": "21:00:00",

"friday\_open": "10:00:00",

"friday\_close": "21:00:00",

"saturday\_open": "10:00:00",

"saturday\_close": "21:00:00",

"sunday\_open": "11:00:00",

"sunday\_close": "20:00:00",

"updatedDatetime": "2023-06-15T13:41:09.708Z",

"docType-identifier": "STORE-646",

"\_version\_": 1768776238064730000,

"dist": 1.9352518 }}
```

## Handle case when same day delivery is unavailable -

In case of unavailability for same day delivery at the selected store, the status will be displayed as "_order is eligible for next day delivery_".

## API Feature Detailing

- Allows the customer to explore multiple zip codes on product detail page and mini cart for same day delivery eligibility.
- Customers will be able to view the same day delivery status on product detail page, cart detail page as well as "mini cart".
- If a customer's cart contains both Same Day Delivery and BOPIS items, the system will perform a soft allocation on all order items and assess their eligibility for same-day delivery
