
# Create return API

```JSON
{
    "payLoad": {
        "externalId": "254-ANY-20240219185846-5-2",
        "type": "CUSTOMER_RETURN",
        "returnDate": "2024-02-20 00:00:00",
        "customerId": "_NA_",
        "externalCustomerId": "",
        "companyId": "SM_COMPANY",
        "companyExternalId": "",
        "status": "RETURN_COMPLETED",
        "currencyCode": "USD",
        "grandTotal": 136.1,
        "tags": [
            "In-store return"
        ],
        "returnIdentifications": [
            {
                "returnIdentificationTypeId": "RTN_MKT_PLACE",
                "returnIdentificationDesc": "MarketPlace Return",
                "idValue": "254-ANY-20240219185846-5-2"
            }
        ],
        "shipFrom": {
            "postalAddress": {
                "id": "",
                "externalId": ""
            }
        },
        "shipTo": {
            "facilityId": "254"
        },
        "items": [
            {
                "id": "",
                "sku": "",
                "idType": "UPCA",
                "idValue": "888377022630",
                "itemExternalId": "",
                "itemSeqId": "",
                "itemTypeId": "RET_FPROD_ITEM",
                "status": "RETURN_COMPLETED",
                "orderId": "",
                "orderExternalId": "",
                "orderName": "DV00000562",
                "orderItemSeqId": "00101",
                "quantity": 1,
                "reason": "RTN_NOT_WANT",
                "returnType": "RTN_REFUND",
                "restockType": "INV_RETURNED",
                "price": 125,
                "includeAdjustments": "Y",
                "itemAdjustments": [
                    {
                        "type": "RET_SALES_TAX_ADJ",
                        "comments": "IGST - Interstate Goods and Services Tax",
                        "description": "Return Sales Tax",
                        "amount": 11.1
                    }
                ]
            }
        ]
    }
}
```
