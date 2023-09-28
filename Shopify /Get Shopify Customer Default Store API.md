## **Get Shopify Customer Default Store API**

Fetches the default store selected by the customer during the initial Shopify store account setup. To fetch the customer's default Shopify store ID you will need to call the endpoint with the `/GET` method.

### **Request**

#### End Point

`https://\<oms\>/api/getShopifyCustomerDefaultStore?customerId=\<customerId\>&shopifyShopId=\<shopId\>`

Example: https://demo-oms.hotwax.io/api/getShopifyCustomerDefaultStore?customerId=637245368996&shopifyShopId=672

#### Header

| Content-Type:​ application/json |
| --- |

| **Parameters** | **Description** | **Required (Y/N)** |
| --- | --- | --- |
| `customerId` | The Unique Shopify account ID of the customer | Y |
| `shopId` | The ID of the virtual Shopify store where the customer is operating. | Y |

###


###


### **Response**

#### Status Code

| HTTP/1.1 200 OK |
| --- |

#### Headers

| **Content-Type: application/json** |
| --- |

```
{
    "customer": {
        "customerId": "6327128850623",
        "result": "success",
        "facilityId": "672}
}
```

| **Parameters** | **Description** |
| --- | --- |
| `result` | The response generated when the request was processed. |
| `facilityId` | The unique identification of the default retail location selected by the customer. |

###


###


### **Error Handling**

An error may occur in case the data such as - Customer ID or Shopify ID is not found in the database.

**Sample Code Snippet -**

```
{
          "customer": {
                     "customerId": "<customerId>",
                     "result": "error",
                     "errorMessage": "Unable to get customer information."
           }
}
```

| **Parameters** | **Description** |
| --- | --- |
| `errorMessage` | The details of the error. |
