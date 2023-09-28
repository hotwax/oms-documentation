# **Set Shopify Customer Default Store API**

Stores the default Shopify store selected by the customer in their Shopify store. To set the Shopify store as default store you will need to call the endpoint with the `/POST` method.

## **Request**

### End Point

`https://\<oms\>/api/setShopifyCustomerDefaultStore`

Example: https://demo-oms.hotwax.io/api/setShopifyCustomerDefaultStore

### Header

Content-Type:​ application/json

### Body:
```
{     	
  "customerId": "<customerID>",     
  "shopifyShopId": "<shopifyShopId>",     
  "facilityId": "<facilityId>"
} 

```

Example :

```
{     	
   "customerId": "67893726937",     
   "shopifyShopId": "3537098370",     
   "facilityId": "138"
} 

```

## **Response**

### Status Code

HTTP/1.1 200 OK

### Headers

Content-Type: application/json

### Body:
```
{     
  "result": "success",     
  "customerId": "<customerId>",     
  "response": "Customer information updated successfully." 
}

```

Example :

```
{     
  "result": "success",     
  "customerId": "67893726937",     
  "response": "Customer information updated successfully." 
} 

```

### **Error Handling**

Incase Customer ID or Shopify Shop Id is not sent at the time of API call an error may occur.

**Error message -**"Unable to update customer information" or any other message would be displayed.
