---
description: >-
  Discover how HotWax Commerce's Soft Allocation feature conducts real-time
  eligibility checks for items in a customer's cart.
---

# Order Soft Allocation

Hotwax Commerce's Soft Allocation feature performs real-time eligibility checks for the items in a customer's shopping cart. By evaluating the list of items in the cart along with the destination zip code, Soft Allocation ensures compliance with predefined criteria set by retailers such as checking if all items can be shipped from one location.

This process alse helps guarantee an efficient validation of shipping eligibility, aligning with the requirements of various specialty shipping carriers.

Internally, the Soft Allocation process adheres to a structured set of steps:

### Step 1: Obtain the customer's latitude and longitude

To check eligible shipping facilities near the customer, the latitude and longitude coordinates of the customer are required. There are two ways to obtain these coordinates:

a. If the customer inputs their postal code:

* Use the [postcodeLookup](https://github.com/hotwax/oms-documentation/blob/oms1.0/Facility/Post%20code%20lookup.md) API to convert the postal code into latitude and longitude coordinates. Learn more about how to use the postCodeLookup API and convert postal codes into latitudes and longitudes.

b. If the customer allows access to their system location:

* Obtain the latitude and longitude coordinates directly from their device.

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

## Step 2: Verify inventory availability of cart items.

Utilize the `checkCartInventory` API to determine same-day delivery eligibility for cart items across facilities. This API evaluates eligibility based on key factors, including facility latitude and longitude and a predefined distance (typically within 50 miles for same-day delivery by carriers). The results indicate the closest facility eligible for fulfillment.

### Sample of `checkCartInventory`:

### Method : `/POST`

## Request

```
{
  "point": "40.713858,-74.007777",
  "distance": 15,
  "shopifyShopId": "<shopifyshopID>",
  "items": [
    {
      "variantId": "123456",
      "quantity": 1
    },
    {
      "variantId": "234567",
      "quantity": 1
    }
  ],
  "filters": ["sameday_pref: true"]
}
```

## Response

```
{
  "facilityId": "868",
  "distance": 50,
  "cors.request.origin": "<url of the Shopify store>",
  "shopifyShopId": "23324533555",
  "filters": [
    "sameday_pref: true",
    "docType: STORE",
    "shopifyShop_id:23324533555"
  ],
  "point": "25.786909, -80.361253",
  "cors.request.type": "actual",
  "items": [
    {
      "variantId": "123456",
      "quantity": 1,
      "available_qty": 1,
      "status": "available"
    },
    {
      "variantId": "234567",
      "quantity": 1,
      "available_qty": 1,
      "status": "available"
    }
  ],
  "facility": {
    "docType": "STORE",
    "storeCode": "868",
    "identifier": "868",
    "storeType": "RETAIL_STORE",
    "storeName": "Silver Mall",
    "externalId": "868",
    "primaryFacilityGroupId": "10224533555",
    "primaryFacilityGroupName": "OP_Group",
    "primaryShopifyShopId": "10224533555",
    "10224533555_pref": "true",
    "fac_grp_pref": "true",
    "sameday_pref": "true",
    "address1": "11501 NW 10th Street",
    "city": "Miami",
    "postalCode": "10007",
    "country": "United States",
    "countryCode": "US",
    "state": "Florida",
    "stateCode": "FL",
    "latlon": "25.7875845,-80.3805674",
    "shopifyShop_id": ["10224533555"],
    "shopifyShops": [
      {
        "domain": "<domain-name>",
        "name": "shop-name",
        "myshopifyDomain": "<shopify-domain>",
        "shopifyShopId": "10224533555",
        "shopId": "SHOP"
      }
    ],
    "productStore_id": ["STORE"],
    "productStores": [
      {
        "storeName": "Not Naked",
        "productStoreId": "STORE"
      }
    ],
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
    "docType-identifier": "STORE-868",
    "_version_": 1768776238064730000,
    "dist": 1.9352518
  }
}
```

## Step 3: Displaying Eligibility on the Cart Page

Upon receiving the response indicating facility's eligiblity for fulfillment, the application follows a systematic comparison process:

1. **Lead Time Comparison for Same Day Delivery:** The client side in-browser script compares the order preparation lead time predefined within the app with the difference between the customer's current time and the facility's closing time.
2. **Eligibility Assessment:** If the lead time is less than the time difference, the cart is deemed eligible for same-day delivery. Conversely, if the lead time exceeds the time difference, the order is marked as eligible for next-day delivery.

This structured approach ensures precise determination of delivery eligibility, providing customers with accurate information about their order's expected delivery date.

## Additional Notes:

In addition to the eligibility assessment process:

a. **Multiple Zip Code Exploration:** The application enables customers to explore multiple zip codes directly on the product detail page and mini cart to check same-day delivery eligibility in various locations by submitting their cart against multiple times with different destination zip codes.

b. **Real-time Status Updates:** Customers can view the same-day delivery status not only on the product detail page but also in the cart details and the "mini cart" interface, ensuring consistent and real-time visibility of delivery options.

c. **Mixed Cart Handling:** If a customer's cart contains both Delivery and Buy Online, Pick Up In Store (BOPIS) items, it is suggested that the client side script submit all items for soft allocation irrespective of shipping method to provide a simple experience for the customer.

These additional features enhance the customer experience, providing flexibility and transparency in the delivery process.
