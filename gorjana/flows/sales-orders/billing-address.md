# Billing Information

HotWax includes the billing information provided by Shopify when syncing the order to NetSuite.

By default HotWax does not save the billing address for orders since it’s not required in the OMS.

**Steps to save billing information in the OMS**

Go to the Product Store detail page and click `Add` under `Store Settings` From the drop down of settings, select “Save Bill To information in HotWax” In the “Value” input field, enter `Y` and click `Save`

## Fallback billing phone

Sometimes the billing information of an order may not include a phone number. In this case Gorjana uses a fallback default phone number on all orders.

```
xxx
```
