# Introduction to Soft Allocation Brokering

Hotwax Commerce's Soft Allocation Brokering feature performs real-time eligibility checks for same-day delivery of items in a customer's shopping cart. By evaluating the list of items in the cart along with the customer's zip code, Soft Allocation Brokering ensures compliance with predefined criteria for same-day shipping. 

This process guarantees a seamless and efficient validation of same-day shipping eligibility, aligning with the requirements of various shipping carriers.

Internally, the Soft Allocation process adheres to a structured set of steps: 


### Step 1: Obtain the customer's latitude and longitude

To check eligible same-day shipping facilities near the customer, the latitude and longitude coordinates of the customer are required. There are two ways to obtain these coordinates:

a. If the customer inputs their postal code,
  - Use the `postcodeLookup` API to convert the postal code into latitude and longitude coordinates.

b. If the customer allows access to their system location,
  - Obtain the latitude and longitude coordinates directly from their device.
    

### Sample of `postCodeLookup` :

#### Method : `/POST`

## Request

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

## Response

```
{
  "responseHeader": {
    "status": 0,
    "QTime": 2,
    "params": { "json": "{\"query\":\"postcode:10007\"}"
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

## Step 2: Verify store inventory for same-day delivery of cart items.

Utilize the `checkCartInventory` API to determine same-day delivery eligibility for cart items across stores. This API evaluates eligibility based on key factors, including facility latitude and longitude and a predefined distance (typically within 50 miles) for same-day delivery by the carrier. The results indicate the closest store eligible for same-day delivery.

### Sample of `checkCartInventory`:

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
  "cors.request.origin": "https://originalpenguin-dev.myshopify.com",
  "shopifyShopId": "10224533555",
  "filters": [
    "sameday_pref: true",
    "docType: STORE",
    "shopifyShop_id:10224533555"
  ],
  "point": "25.786909, -80.361253",
  "cors.request.type": "actual",
  "items": [{
    "quantity": 1,
    "variantId": "42088603123903",
    "availableQty": 1,
    "status": "available"
  }],
  "facility": {
    "docType": "STORE",
    "storeCode": "646",
    "identifier": "646",
    "storeType": "RETAIL_STORE",
    "storeName": "Dolphin Mall",
    "externalId": "646",
    "primaryFacilityGroupId": "10224533555",
    "primaryFacilityGroupName": "OP_Group",
    "primaryShopifyShopId": "10224533555",
    "10224533555_pref": "true",
    "fac_grp_pref": "true",
    "sameday_pref": "true",
    "address1": "11401 NW 12th Street",
    "city": "Miami",
    "postalCode": "33172",
    "country": "United States",
    "countryCode": "US",
    "state": "Florida",
    "stateCode": "FL",
    "latlon": "25.7875845,-80.3805674",
    "shopifyShop_id": ["10224533555"],
    "shopifyShops": [{
      "domain": "originalpenguin-dev.myshopify.com",
      "name": "originalpenguin-dev",
      "myshopifyDomain": "originalpenguin-dev.myshopify.com",
      "shopifyShopId": "10224533555",
      "shopId": "OP_SHOP"
    }],
    "productStore_id": ["OP_STORE"],
    "productStores": [{
      "storeName": "Original Penguin",
      "productStoreId": "OP_STORE"
    }],
    "monday_open": "10:00:00",
    "monday_close": "21:00:00",
    "tuesday_open": "10:00:00",
    "tuesday_close": "21:00:00",
    "wednesday_open": "10:00:00",
    "wednesday_close": "21:00:00",
    "thursday_open": "10:00:00",
    "thursday_close": "21:00:00",
    "friday_open": "10:00:00",
    "friday_close": "21:00:00",
    "saturday_open": "10:00:00",
    "saturday_close": "21:00:00",
    "sunday_open": "11:00:00",
    "sunday_close": "20:00:00",
    "updatedDatetime": "2023-06-15T13:41:09.708Z",
    "docType-identifier": "STORE-646",
    "_version_": 1768776238064730000,
    "dist": 1.9352518
  }
}
```

## Step 3: Displaying Eligibility on the Cart Page 

Upon receiving the response indicating stores eligible for same-day delivery, the application follows a systematic comparison process:

1. Lead Time Comparison:
   - The application compares the order preparation lead time with the difference between the customer's current time and the store's closing time.
  
2. Eligibility Assessment:
   - If the lead time is less than the time difference, the item is deemed eligible for same-day delivery.
   - Conversely, if the lead time exceeds the time difference, the order is marked as eligible for next-day delivery.
  
This structured approach ensures precise determination of delivery eligibility, providing customers with accurate information about their order's expected delivery date.


## Additional Notes:

In addition to the eligibility assessment process:

a. Multiple Zip Code Exploration:
  - The application enables customers to explore multiple zip codes directly on the product detail page and mini cart to check same-day delivery eligibility in various locations.

b. Real-time Status Updates:
  - Customers can view the same-day delivery status not only on the product detail page but also in the cart details and the "mini cart" interface, ensuring consistent and real-time visibility of delivery options.

c. Mixed Cart Handling:
  - If a customer's cart contains both Same Day Delivery and Buy Online, Pick Up In Store (BOPIS) items, the system seamlessly performs a soft allocation for all order items. It assesses the eligibility of each item for same-day delivery, guaranteeing a comprehensive and accurate delivery determination for the entire order.

These additional features enhance the customer experience, providing flexibility and transparency in the delivery process.
