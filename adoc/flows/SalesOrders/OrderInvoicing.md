# Order Invoicing

Once an order is fulfilled in HotWax, encompassing both BOPIS and shipping orders from eCommerce it is sent to Retail Pro for invoicing and further transmission to SAP for financial posting. POS send sale orders are excluded because those orders are already invoiced when they’re created in the POS. If HotWax invoiced them again after fulfillment, it would cause duplicate invoicing in RetailPro.

HotWax uses the OrderToInvoice API from RetailPro to sync all completed orders for invoicing. 
In cases of split orders, where an item is fulfilled from one store but invoiced at another, Retail Pro’s Inventory Transfer API is utilized to adjust inventory to effectively make it look like the entire order was shipped from one store.

**Here is a detailed breakdown of how multi-store invoicing works:**

The objective is to invoice the entire order from one store even if it’s fulfilled from multiple stores.

A two step process is employed to accomplish this, the first step is to invoice the entire order at the first shipping facility of the order, and then an inventory transfer from the other stores to the invoicing store. Let’s break down each of these steps into further detail.

## Invoice from the first shipping store
When an order is fulfilled from multiple stores, HotWax elects an `invoicing store` during invoicing based on the first store to ship items from the order. In other words, the store that ships first will become the store where the entire order will be invoiced in Retail Pro. Even if the inventory for the shipped product doesn’t technically exist at the `invoicing store`, Retail Pro allows HotWax to invoice items against negative inventory. The extra inventory that is invoiced from the `invoicing store` is then compensated for using automated inventory transfers.



## Inventory transfers to the invoicing store
HotWax uses the `Manual Slip` API endpoint in RetailPro to compensate for inventory that was invoiced from the `invoicing store` but was actually shipped from another store. The actual shipping store is used as the origin store for the inventory transfer and the invoicing store is used as the destination store when executing the inventory transfer. When the inventory transfer is complete, the inventory levels in RetailPro are once again accurate to what is available in HotWax.


# APIs

## Order to Invoice

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

  "CustomerShipping": {
    "FirstName": "Alan",
    "LastName": "Ventura",
    "Email": "alan.ventura@ejje.com",
    "Address1": "Colonia San Francisco",
    "Address2": "Calle las Camelias, #75",
    "City": "San Salvador",
    "Country": "El Salvador",
    "NoDocument": "039583310",
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

**Mapping table**
| Parameter      | Data Type   | Max Length | Required (Y/N) | Parent          | Description                                            |
|-----------------|-------------|------------|----------------|------------------|--------------------------------------------------------|
| InvoicingStore  | String      | 5          | Y              | Root             | Store Code where the Order is Billed                    |
| OrderNo         | String      | 9          | Y              | Root             | Unique Order number in the Shopify system               |
| CreatedDate     | DateTime    |            | Y              | Root             | Date and time when the order was created in Shopify    |
| DeliveryType    | Short       | 3          | Y              | Root             | Type of Delivery (e.g., Standard, Express)              |
| PaymentType     | Short       | 3          | Y              | Root             | Type of Payment used for the order                      |
| TotalAmt        | Float(10,4) |            | Y              | Root             | Total Amount of the Order                              |
| TotalDiscAmt    | Float(10,4) |            | N              | Root             | Total Discount Amount applied to the entire order       |
| ShippingAmt     | Float(10,4) |            | N              | Root             | Total Amount for Shipping (if applicable)              |
| FirstName       | String      | 30         | Y              | CustomerBilling  | First Name of the Customer for Billing                  |
| LastName        | String      | 30         | Y              | CustomerBilling  | Last Name of the Customer for Billing                   |
| Email           | String      | 60         | Y              | CustomerBilling  | Email address of the Customer for Billing               |
| Address1        | String      | 40         | Y              | CustomerBilling  | First line of the Customer's address for Billing        |
| Address2        | String      | 40         | N              | CustomerBilling  | Second line of the Customer's address for Billing       |
| City            | String      | 40         | N              | CustomerBilling  | City of the Customer's address for Billing              |
| Country         | String      | 40         | N              | CustomerBilling  | Country of the Customer's address for Billing           |
| NoDocument      | String      | 20         | Y              | CustomerBilling  | Identity Document Number for Customer Billing           |
| FirstName       | String      | 30         | Y              | CustomerShipping | First Name of the Customer for Shipping                 |
| LastName        | String      | 30         | Y              | CustomerShipping | Last Name of the Customer for Shipping                  |
| Email           | String      | 60         | Y              | CustomerShipping | Email address of the Customer for Shipping              |
| Address1        | String      | 40         | Y              | CustomerShipping | First line of the Customer's address for Shipping       |
| Address2        | String      | 40         | N              | CustomerShipping | Second line of the Customer's address for Shipping      |
| City            | String      | 40         | N              | CustomerShipping | City of the Customer's address for Shipping             |
| Country         | String      | 40         | N              | CustomerShipping | Country of the Customer's address for Shipping          |
| NoDocument      | String      | 20         | Y              | CustomerShipping | Identity Document Number for Customer Shipping          |
| UPC             | String      | 19         | Y              | Item             | Product Stock Keeping Unit (SKU) Code                   |
| OrigPrice       | Float(10,4) |            | Y              | Item             | Original Price of the Product                          |
| OrigTax         | Float(10,4) |            | Y              | Item             | Original Tax amount associated with the Product        |
| Price           | Float(10,4) |            | Y              | Item             | Final Price of the Product after applying discounts    |
| Tax             | Float(10,4) |            | Y              | Item             | Final Tax amount of the Product after applying discounts|
| Qty             | Float(10,4) |            | Y              | Item             | Quantity of the Product in the Order                   |
| StoreOrig       | String      | 5          | Y              | Item             | Store code where the fulfillment of the Product is confirmed |
| StoreDest       | String      | 5          | N              | Item             | Store code where the Product is delivered to the customer (if applicable for in-store delivery) |