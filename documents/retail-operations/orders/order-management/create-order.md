---
description: Create a Shopify order with customer, shipping, and item information.
---

# Create order

Use `Create order` to prepare an order and submit it to a configured Shopify shop.

The desktop page places item selection and the payment summary on the left. Assignment, customer, notes, tags, and shipping-address cards appear on the right.

## Assign the order

Complete the `Assign` card:

| Field | How it works |
| --- | --- |
| `Shopify Shop` | Required. The list is scoped to the selected product store. |
| `Facility` | Optional. After you choose a shop, the list is limited to facilities linked to that shop. |
| `Currency` | Defaults to United States dollars (USD) and lists configured currencies. |

If you change the Shopify shop, confirm the facility selection again.

## Add a customer

Select `Add` in the `Customer` card to find or create a customer for the selected shop.

1. Search by email, phone, or name, then press Enter.
2. Select a matching customer.
3. If no customer matches, choose the option to create one.

Creating a customer requires first name, last name, and email. Phone is optional.

After selecting a customer, `Edit` reopens customer search so you can choose or create a different customer.

## Add order information

* Enter an order note in `Notes` when needed.
* Enter comma-separated values in `Tags` when needed.

These fields are optional.

## Add a shipping address

Select `Add` in the `Shipping Address` card. Enter:

* `Address 1`
* `Address 2`, when needed
* `City`
* `Country`
* `Province`
* `Zipcode`
* `Phone`, when needed

Choose the country before the province. Changing the country clears the previous province selection.

The address dialog can be saved before every required value is present, but final order submission requires Address 1, City, Province, Zipcode, and Country.

## Add items

You can add catalog products by scanning or searching, or add a custom line.

### Scan a product

1. Choose scan mode.
2. Focus the `Scan barcode` field.
3. Scan the configured identifier and press Enter.

A matching product is added automatically. Scanning a product already in the order does not create a duplicate row. If no product matches, use `Search`.

### Search for a product

1. Choose search mode.
2. Search by parent name, stock keeping unit (SKU), or Universal Product Code (UPC).
3. Select `Add` on the matching product.
4. Select `View more results` when the first result is not the product you need.

The page displays a loading indicator while it searches and `No product found` when no product matches.

### Add a custom line

Select `Custom Line`, then enter:

* Product name
* Quantity greater than zero
* Price of zero or more

Custom lines are useful when the item is not available in the product search.

## Review items and payment

Each catalog row shows the configured primary and secondary product identifiers. A custom row shows the product name entered by the operator.

Before submitting:

* Change the quantity when needed
* Remove any unwanted row
* Confirm every quantity is greater than zero
* Review `Subtotal`, `Shipping`, `Tax`, and `Total`

{% hint style="info" %}
The current payment summary formats displayed totals in USD, even when another currency is selected.
{% endhint %}

## Submit the order

Select the checkmark action after completing the order.

Order Manager validates:

* Shopify shop
* Customer
* Complete shipping address
* At least one line item
* Positive item quantities
* Title and SKU for catalog products
* Title for custom lines

The page shows a loader while the order is submitted and then displays a success or error message.

After a successful submission, the selected Shopify shop remains. Facility, customer, shipping address, items, notes, and tags are cleared, and currency returns to USD.
