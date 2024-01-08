# Setup Promo Codes

## Order level discounts:
If an order has a discount code applied to it, during order sync to NetSuite, HotWax checks if the applied code is available in NetSuite. If the code is available then the exact code is used and the value of the discount is shared as the "Rate". 

In the event that the code is not available in NetSuite, HotWax will use a default discount code 'SHOPIFY DISCOUNT' along with the value of the discount. For this failover to work the discount item must be created in NetSuite first.

1. Go to **Lists > Accounting > Items > New**
2. Select Item Type: **Discount**
3. Enter **'SHOPIFY DISCOUNT'** in the Item Name and Display Name field
4. Enter **0.00** in the Rate field
5. Select Subsidiary
6. In the **Accounting** sub-tab
    - Select Account
    - Check the **'Apply before sales tax'** checkbox

To check promo codes in NetSuite, HotWax syncs promo codes from NetSuite once a day.

Create Enumeration data before creating IntegrationTypeMapping
```
<Enumeration description="Discount codes mapping between HotWax and Netsuite" enumId="NETSUITE_DISC_MTHD" enumName="Netsuite Discount Codes" enumTypeId="NETSUITE" sequenceId="1"/>

<IntegrationTypeMapping integrationTypeId="NETSUITE_DISC_MTHD" mappingKey="SHOPIFY_DISC" mappingValue="{NetSuite Discount Name}"/>
<IntegrationTypeMapping integrationTypeId="NETSUITE_DISC_MTHD" mappingKey="SHOPIFY_ITEM_DISC" mappingValue="{NetSuite Discount Item Internal ID}"/>
```

### Export Current Promo Codes from NetSuite
Schedule this SuiteScript to export current promo codes in NetSuite that need to be synced to HotWax
```
HC_MR_ExportedDiscountItemCSV
```

Job to save new promo codes:
```
JOB_IMP_PRMO_CODE
Import Promo Code
FTP Config: IMP_PRMO_CODE
```

### Export Discontinued Promo Codes
Schedule this SuiteScript to export removed promo codes in NetSuite that need to be synced to HotWax
```
HC_MR_ExportedInActiveDiscountCSV
```
Job to remove promo codes no longer active in NetSuite:
```
JOB_RMV_PRMO_CODE
Remove Promo Code
FTP Config: IMP_RMV_PRMO_CODE
```

## Discount items
Item level discounts have to be synced as a separate line item in the order using a "SHOPIFY ITEM DISCOUNT" item. The amount of the adjustment is added in the "Amount" field when preparing the CSV for NetSuite and the "Price Level" is always set to "Custom".

To learn more about how discounts are handled on orders, read the full NetSuite integration documentation.

For this sync to work, a blanket ‘discount item’ must be created in NetSuite. If you’re using Shopify this discount code is usually ‘Shopify Discount Item’

This ID of this product in NetSuite needs to be entered into the integration layer so that it can be sent to NetSuite during order sync.

1. Go to **Lists > Accounting > Items > New**
2. Select Item Type: **Discount**
3. Enter **'SHOPIFY DISCOUNT ITEM'** in the Item Name and Display Name field
4. Enter **0.00** in the Rate field
5. Select Subsidiary
6. In the **Accounting** sub-tab
    - Select Account
    - Check the **'Apply before sales tax'** checkbox
  
### Create data for Integration Type Mapping entity
Create this data to map the generic Netsuite discount values in HotWax. This universal value will serve as a fallback when the discount code provided in the Shopify order JSON is not found in Netsuite.
