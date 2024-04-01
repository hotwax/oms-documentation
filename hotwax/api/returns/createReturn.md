
# Create return API

To create a return for a customer's order that has already been fulfilled and completed, you will need to call the `/createReturn` endpoint with the `POST` method.

## Request

### Endpoint
- POST: `https://{host}/api/createReturn`

### Header
- Content-Type: application/json

### Body

```
{
    "payLoad": {
        "externalId": "",
        "type": "",
        "returnDate": "",
        "customerId": "",
        "externalCustomerId": "",
        "companyId": "",
        "companyExternalId": "",
        "status": "",
        "currencyCode": "",
        "grandTotal": ,
        "tags": [ ],
        "note": "",
        "returnIdentifications": [
            {
                "returnIdentificationTypeId": "",
                "returnIdentificationDesc": "",
                "idValue": ""
            }
        ],
        "shipFrom": {
            "postalAddress": {
                "id": "",
                "externalId": ""
            }
        },
        "shipTo": {
            "facilityId": ""
        },
        "items": [
            {
                "id": "",
                "sku": "",
                "idType": "",
                "idValue": "",
                "itemExternalId": "",
                "itemSeqId": "",
                "itemTypeId": "",
                "status": "",
                "orderId": "",
                "orderExternalId": "",
                "orderName": "",
                "orderItemSeqId": "",
                "orderItemExternalId": "",
                "quantity": ,
                "reason": "",
                "returnType": "",
                "restockType": "",
                "price": ,
                "itemAdjustments": [
                    {
                        "returnAdjustmentTypeId": "",
                        "amount": 
                    },
                    {
                        "type": "",
                        "comments": "",
                        "description": "",
                        "amount": "",
                        "sourcePercentage": ""
                    }
                ]
            }
        ],
        "returnAdjustment": [
            {
                "orderId": "",
                "orderExternalId": "",
                "id": "",
                "type": "",
                "comments": "",
                "description": "",
                "amount": "",
                "sourcePercentage": ""
            }
        ]
    }
}
```


**In the request body, include the information necessary for creating a return, including all the parameters listed below:**

| **Parameter Name**| **Description**                                                     |
|------------------------------|-----------------------------------------------------------------|
| externalId                   | Order identification in the external system (e.g. Shopify or Netsuite)          |
| customerId                   | Customer’s Identification in HotWax Commerce (partyId)                       |
| companyId                    | Identification for the Company owning the brand |
| currencyCode                 | Currency unit of measurement (USD, INR, YEN, etc.)            |
| facilityId                   | Facility where order is returned                         |
| idType                       | Identification Type                                        |
| orderId                      | Unique HotWax Commerce Order Identification                                     |
| items                        | List of Order Items                                             |
| orderName                    | Shopify Order Name                                               |
| orderItemSeqId               | Order Item Sequence                                                |
| status                       | Current status of the return                                   |
| grandTotal                   | Sum total of return items                                       |
| returnIdentificationTypeId   | Global Identification for the return (“SHOPIFY_RTN_ID”)    |
| IdValue (in returnIdentification) | Unique Value for return identification                   |
| idType                       | Global Identification Type (SKU, INVOICE_EXPORT, ISBN, UPCA, UPCE) |
| idValue                      | Unique Id value for the global identification                   |
| shipFrom                     | Customer's address                                              |
| shipTo                       | Destination address for returned order                          |
| sku                          | SKU for returned item |
| id (in item list)            | Product id for that item                                        |
| price                        | Price of the individual item                                    |
| quantity                     | Product Quantity                                                |
| orderItemExternalId (in item list) | Order Item id for external system (Shopify or Netsuite) |
| itemAdjustments              | Record of adjustments (taxes or discounts) applied on the particular item |
| type                         | Type of return adjustments                                      |
| returnAdjustments            | Record of adjustments applied on the return                     |

**Types of Return Adjustments:**

| Adjustment Type        | Description                                |
|------------------------|--------------------------------------------|
| RET_ADD_FEATURE_ADJ    |  Additional Feature                   |
| RET_DISCOUNT_ADJ       |  Discount                             |
| RET_FEE_ADJ            |  Fee                                  |
| RET_MAN_ADJ            |  Manual Adjustment                    |
| RET_MISC_ADJ           |  Miscellaneous Charges                |
| RET_MKTG_PKG_ADJ       |  Marketing Package Adjustment         |
| RET_PROMOTION_ADJ      |  Promotion                            |
| RET_REPLACE_ADJ        |  Replacement                          |
| RET_SALES_TAX_ADJ      |  Sales Tax                            |
| RET_SHIPPING_ADJ       |  Shipping and Handling                |
| RET_SURCHARGE_ADJ      |  Surcharge                            |
| RET_WARRANTY_ADJ       |  Warranty                             |



<details>

<summary>Sample response </summary>

```json

{
   "payLoad": {
       "externalId": "5758438048028",
       "type": "CUSTOMER_RETURN",
       "customerId": "10317",
       "externalCustomerId": "",
       "companyId": "COMPANY",
       "companyExternalId": "",
       "status": "RETURN_RECEIVED",
       "currencyCode": "CAD",
       "grandTotal": 150.01,
       "returnIdentifications": [
           {
               "returnIdentificationTypeId": "SHOPIFY_RTN_ID",
               "returnIdentificationDesc": "MarketPlace Return",
               "idValue": "5758438048028"
           }
       ],
       "shipFrom": {
           "postalAddress": {
               "id": "",
               "externalId": ""
           }
       },
       "shipTo": {
           "facilityId": "KITST"
       },
       "items": [
           {
               "id": "10243",
               "sku": "",
               "idType": "UPCA",
               "idValue": "1110352-7AY-M",
               "itemExternalId": "",
               "itemSeqId": "",
               "itemTypeId": "PRODUCT_ORDER_ITEM",
               "status": "RETURN_RECEIVED",
               "orderId": "FAO11428",
               "orderExternalId": "5758438048028",
               "orderName": "101010236",
               "orderItemSeqId": "00101",
               "orderItemExternalId": "",
               "quantity": 1,
               "price": 89.5
           }
       ]
   }
}
```

</details>


## Response

### Header
- Content-Type: application/json

### Body
The response will include all the parameters provided in the request body, along with any error messages and login information.

<details>

<summary>Sample response </summary>

```json

_LOGIN_PASSED_": "T{
   "_ERROR_MESSAGE_": "",
   "payLoad": {
       "externalId": "5758438048028",
       "type": "CUSTOMER_RETURN",
       "customerId": "10317",
       "externalCustomerId": "",
       "companyId": "COMPANY",
       "companyExternalId": "",
       "status": "RETURN_RECEIVED",
       "currencyCode": "CAD",
       "grandTotal": 150.01,
       "returnIdentifications": [
           {
               "returnIdentificationTypeId": "SHOPIFY_RTN_ID",
               "returnIdentificationDesc": "MarketPlace Return",
               "idValue": "5758438048028"
           }
       ],
       "shipFrom": {
           "postalAddress": {
               "id": "",
               "externalId": ""
           }
       },
       "shipTo": {
           "facilityId": "KITST"
       },
       "items": [
           {
               "id": "10243",
               "sku": "",
               "idType": "UPCA",
               "idValue": "1110352-7AY-M",
               "itemExternalId": "",
               "itemSeqId": "",
               "itemTypeId": "PRODUCT_ORDER_ITEM",
               "status": "RETURN_RECEIVED",
               "orderId": "FAO11428",
               "orderExternalId": "5758438048028",
               "orderName": "101010236",
               "orderItemSeqId": "00101",
               "orderItemExternalId": "",
               "quantity": 1,
               "price": 89.5
           }
       ]
   },
   "USERNAME": "hotwax.user",
   "RUE"
}
```

</details>