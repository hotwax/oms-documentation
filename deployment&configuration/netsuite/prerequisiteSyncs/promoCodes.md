# Setup Promo Codes

## Order level discounts:
If an order has a discount code applied to it, during order sync to NetSuite, HotWax checks if the applied code is available in NetSuite. If the code is available then the exact code is used and the value of the discount is shared as the "Rate". In the event that the code is not available in NetSuite, HotWax will use a default discount code 'SHOPIFY DISCOUNT' along with the value of the discount.

To check promo codes in NetSuite, HotWax syncs promo codes from NetSuite once a day.
Job to save new promo codes:
```
JOB_IMP_PRMO_CODE
Import Promo Code
FTP Config: IMP_PRMO_CODE
```

Job to remove promo codes no longer active in NetSuite:
```
JOB_RMV_PRMO_CODE
Remove Promo Code
IMP_RMV_PRMO_CODE
```

## Discount items
Item level discounts have to be synced as a separate line item in the order using a "SHOPIFY DISCOUNT ITEM" item. The amount of the adjustment is added in the "Amount" field when preparing the CSV for NetSuite and the "Price Level" is always set to "Custom".

To learn more about how discounts are handled on orders, read the full NetSuite integration documentation.

For this sync to work, a blanket ‘discount item’ must be created in NetSuite. If you’re using Shopify this discount code is usually ‘Shopify Discount Item’

This ID of this product in NetSuite needs to be entered into the integration layer so that it can be sent to NetSuite during order sync.

