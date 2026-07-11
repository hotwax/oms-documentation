---
description: >-
  Discover how the invoice API creates sales orders in Retail Pro, streamlining
  the invoicing process for the store team.
---

# Invoice API

Creates the sales order in Retail Pro for the store team to invoice.

**Endpoint**

```
https://<host>:<port>/api/v1/Document/Ordertoinvoice
```

<details>

<summary>Body</summary>

```json
{
  // General information about the order
  "InvoicingStore": "",
  "OrderNo": "",
  "CreatedDate": "",
  "DeliveryType": 0,
  "PaymentType": 0,
  "TotalAmt": 0,
  "TotalDiscAmt": 0,
  "ShippingAmt": 0,
  "FiscalCredit": "",
  "CompanyId": "",
  "CompanyName": "",
  "CompanyAddress": "",

  // Shipping details for the customer
  "CustomerShipping": {
    "FirstName": "",
    "LastName": "",
    "Email": "",
    "Address1": "",
    "Address2": "",
    "City": "",
    "Country": "",
    "NoDocument": "",
    "TypeDocument": "",
    "Phone": ""
  },

  // Billing details for the customer
  "CustomerBilling": {
    "FirstName": "",
    "LastName": "",
    "Email": "",
    "Address1": "",  // Billing address line 1
    "Address2": "",
    "City": "",
    "Country": "",
    "NoDocument": "",
    "TypeDocument": "",
    "Phone": ""
  },

  // List of items in the order
  "Items": [
    {
      // Details of the first item
      "UPC": "",
      "OrigPrice": 0,
      "OrigTax": 0,
      "Price": 0,
      "Tax": 0,
      "Qty": 0,
      "StoreOrig": "",  // Store where the item originates
      "StoreDest": ""   // Store where the item is destined
    },
    {
      // Details of the second item
      "UPC": "",
      "OrigPrice": 0,
      "OrigTax": 0,
      "Price": 40,
      "Tax": 4.60,
      "Qty": 1,
      "StoreOrig": "",
      "StoreDest": ""
    }
    // Additional items can be added to this array as needed
  ]
}
```

</details>

<details>

<summary>Sample Body</summary>

```json
{
  "InvoicingStore": "SVA32",
  "OrderNo": "00000001",
  "CreatedDate": "2023-03-20T11:29:00",
  "DeliveryType": 1,
  "PaymentType": 1,
  "TotalAmt": 40,
  "TotalDiscAmt": 10,
  "ShippingAmt": 0,
  "FiscalCredit": "true",
  "CompanyId": "prueba 3:06",
  "CompanyName": "ADOC",
  "CompanyAddress": "calle 8",


  "CustomerShipping": {
    "FirstName": "Alan",
    "LastName": "Ventura",
    "Email": "alan.ventura@ejje.com",
    "Address1": "Colonia San Francisco",
    "Address2": "Calle las Camelias, #75",
    "City": "San Salvador",
    "Country": "El Salvador",
    "NoDocument": "039583310",
    "TypeDocument": "dui",
    "Phone": "23251988"
  },

  "CustomerBilling": {
    "FirstName": "Alan",
    "LastName": "Ventura",
    "Email": "alan.ventura@ejje.com",
    "Address1": "Colonia San Francisco",
    "Address2": "Calle las Camelias, #75",
    "City": "San Salvador",
    "Country": "El Salvador",
    "NoDocument": "039583310",
    "TypeDocument": "dui",
    "Phone": "23251988"
  },

  "Items": [
    {
      "UPC": "8720116122558",
      "OrigPrice": 50,
      "OrigTax": 5.75,
      "Price": 40,
      "Tax": 4.60,
      "Qty": 1,
      "StoreOrig": "P22",
      "StoreDest": "A36"
    },
    {
      "UPC": "8720116127799",
      "OrigPrice": 50,
      "OrigTax": 5.75,
      "Price": 40,
      "Tax": 4.60,
      "Qty": 1,
      "StoreOrig": "A27",
      "StoreDest": "A36"
    }
  ]
}
```

</details>

## Mapping tables

| Parameter      | Data Type   | Max Length | Required (Y/N) | Parent           | Description                                                                                     |
| -------------- | ----------- | ---------- | -------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| InvoicingStore | String      | 5          | Y              | Root             | Store Code where the Order is Billed                                                            |
| OrderNo        | String      | 9          | Y              | Root             | Unique Order number in the Shopify system                                                       |
| CreatedDate    | DateTime    |            | Y              | Root             | Date and time when the order was created in Shopify                                             |
| DeliveryType   | Short       | 3          | Y              | Root             | Type of Delivery (e.g., Standard, Express)                                                      |
| PaymentType    | Short       | 3          | Y              | Root             | Type of Payment used for the order                                                              |
| TotalAmt       | Float(10,4) |            | Y              | Root             | Total Amount of the Order                                                                       |
| TotalDiscAmt   | Float(10,4) |            | N              | Root             | Total Discount Amount applied to the entire order                                               |
| ShippingAmt    | Float(10,4) |            | N              | Root             | Total Amount for Shipping (if applicable)                                                       |
| FiscalCredit   | Boolean     | Y          | Y              | Root             | If value is true, the fields CompanyId, CompanyName, and CompanyAddress are required.           |
| CompanyId      | String      | 20         | N              | Root             | Company Identity Document                                                                       |
| CompanyName    | String      | 30         | N              | Root             | Company Name according to Identity Document                                                     |
| CompanyAddress | String      | 80         | N              | Root             | Company Address according to Identity Document                                                  |    
| FirstName      | String      | 30         | Y              | CustomerBilling  | First Name of the Customer for Billing                                                          |
| LastName       | String      | 30         | Y              | CustomerBilling  | Last Name of the Customer for Billing                                                           |
| Email          | String      | 60         | Y              | CustomerBilling  | Email address of the Customer for Billing                                                       |
| Address1       | String      | 40         | Y              | CustomerBilling  | First line of the Customer's address for Billing                                                |
| Address2       | String      | 40         | N              | CustomerBilling  | Second line of the Customer's address for Billing                                               |
| City           | String      | 40         | N              | CustomerBilling  | City of the Customer's address for Billing                                                      |
| Country        | String      | 40         | N              | CustomerBilling  | Country of the Customer's address for Billing                                                   |
| NoDocument     | String      | 20         | Y              | CustomerBilling  | Identity Document Number for Customer Billing                                                   |
| TypeDocument   | String      | 40         | Y              | CustomerBilling  | Type Document the Customer for Billing                                                          |
| FirstName      | String      | 30         | Y              | CustomerShipping | First Name of the Customer for Shipping                                                         |
| LastName       | String      | 30         | Y              | CustomerShipping | Last Name of the Customer for Shipping                                                          |
| Email          | String      | 60         | Y              | CustomerShipping | Email address of the Customer for Shipping                                                      |
| Address1       | String      | 40         | Y              | CustomerShipping | First line of the Customer's address for Shipping                                               |
| Address2       | String      | 40         | N              | CustomerShipping | Second line of the Customer's address for Shipping                                              |
| City           | String      | 40         | N              | CustomerShipping | City of the Customer's address for Shipping                                                     |
| Country        | String      | 40         | N              | CustomerShipping | Country of the Customer's address for Shipping                                                  |
| NoDocument     | String      | 20         | Y              | CustomerShipping | Identity Document Number for Customer Shipping                                                  |
| TypeDocument   | String      | 40         | Y              | CustomerShipping | Type Document the Customer for Shipping                                                         |
| UPC            | String      | 19         | Y              | Item             | Product Stock Keeping Unit (SKU) Code                                                           |
| OrigPrice      | Float(10,4) |            | Y              | Item             | Original Price of the Product                                                                   |
| OrigTax        | Float(10,4) |            | Y              | Item             | Original Tax amount associated with the Product                                                 |
| Price          | Float(10,4) |            | Y              | Item             | Final Price of the Product after applying discounts                                             |
| Tax            | Float(10,4) |            | Y              | Item             | Final Tax amount of the Product after applying discounts                                        |
| Qty            | Float(10,4) |            | Y              | Item             | Quantity of the Product in the Order                                                            |
| StoreOrig      | String      | 5          | Y              | Item             | Store code where the fulfillment of the Product is confirmed                                    |
| StoreDest      | String      | 5          | N              | Item             | Store code where the Product is delivered to the customer (if applicable for in-store delivery) |

This table maps the `DeliveryType` values in the API JSON.

The `Id` column represents the numeric identifier for each delivery option, and the `Description` column provides a human-readable description of each option.

In the API JSON, the `DeliveryType` field should take one of these values based on the desired delivery method:

* For "Delivery in store" (store pickup) set `DeliveryType` to `1`.
* For "Delivery at Home" set `DeliveryType` to `2`.

| Id | Description       |
| -- | ----------------- |
| 1  | Delivery in store |
| 2  | Delivery at Home  |

This table maps the `PaymentType` values in the API JSON. The `Id` column represents the numeric identifier for each payment option, and the `Description` column provides a human-readable description of each option.

In the API JSON, the `PaymentType` field should take one of these values based on the desired payment method:

* For "Credit/Debit Card," set `PaymentType` to `1`.
* For "Cash on delivery," set `PaymentType` to `2`.

So, when constructing the API JSON for an order, you would choose the appropriate `PaymentType` value based on the payment method associated with the order.

| Id | Description       |
| -- | ----------------- |
| 1  | Credit/Debit Card |
| 2  | Cash on delivery  |

During invoicing, HotWax also uses inventory transfers in Retail Pro to ensure inventory is depleted at the actual shipping store as well. Read more about that API on the next page.
