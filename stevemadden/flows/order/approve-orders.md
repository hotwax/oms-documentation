# Order Approval 

Online payments do have a high risk of frauds. Hence it becomes crucial to identify such customers and not broker their orders. 

Retailers use payment authentication apps such as Riskified app to detect such fraudulent and discard them based on their past payment history, if found suspicious.
Order when created on shopify, gets a riskified tag with status as submitted. 

Applications, based on analysis, applies a riskified Approved tag if a customer passes the test, else applies the riskified Declined tag if found suspicious. 


The `Check Riskified tag and Approve Orders` job runs on an  hourly basis and picks only those orders which have payment methods among the following:

- **EXT_SHOP_VISA**
- **EXT_SHOP_AMEX**
- **EXT_SHOP_MASTERCARD**
- **EXT_SHOP_DISCOVER**

## Riskified Approved:
    If an order gets riskified approved before getting imported in OMS, it is imported as in approved status.
    If a created order is found riskified approved, the job updates the order status as approved.

## Riskified Declined:
    If an order is riskified declined before getting imported into OMS, we import the order with canceled status.
    If an imported order gets riskified declined, then order status is updated to canceled.


`NOTE`: This approval flow is applicable for the ecom orders placed from shopify. The in-store and send sale  orders placed from predict spring are imported in completed or approved status. 