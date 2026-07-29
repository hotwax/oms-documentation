---
description: Create an operator-entered order in a configured Shopify shop.
---

# Create order

Use `Create order` when your approved process requires an operator to create an order in a configured Shopify shop.

{% hint style="info" %}
Use this workflow in a desktop-width browser. At smaller widths, the `Assign`, `Customer`, `Notes`, `Tags`, and `Shipping Address` cards are not displayed.
{% endhint %}

The page does not provide a `Save draft` action. Gather the customer, address, and item information before you begin.

## Confirm the Product Store

The selected Product Store controls which Shopify shops, facilities, and catalog products are available.

1. Open the Order Manager menu.
2. Confirm the `Product Store` value, or use `Select store` to choose the correct one.
3. Open `Create order`.

If you change the Product Store while the page is already open, reload the complete page before starting. Returning to a cached `Create order` page does not always reload the Shopify shop list.

If no Shopify shop is available, stop the workflow. Confirm that you selected the correct Product Store and ask an administrator to review its Shopify shop configuration.

## Assign the order

Complete the `Assign` card from top to bottom.

### Select the Shopify shop

`Shopify Shop` is required and identifies the shop where the order is created.

Select the shop before adding a customer. Customer search and customer creation are limited to the selected Shopify shop.

Changing the shop does not clear or revalidate a customer and address already selected on the form. If you change the shop, reselect the customer and review the shipping address before submitting. Never submit a customer retained from a different shop.

### Select a facility

`Facility` is optional. Before a shop is selected, the list can include facilities for the current Product Store. After you select a shop, the list is limited to facilities linked to that shop.

Select a facility only when your operating process requires one on the order. The selected facility is saved on the new order, but the page does not confirm how later allocation will use it.

Changing the Shopify shop clears the facility when the selected facility is not valid for the new shop. Review the field after every shop change.

### Select a currency

`Currency` defaults to United States dollars (USD). The list contains the configured currencies.

{% hint style="warning" %}
The selected currency is included with the order, but the `Payment` preview always formats amounts as USD. Do not use the preview to validate an order in another currency.
{% endhint %}

## Select or create a customer

Finalize the customer before editing the shipping address. Selecting a customer replaces the current order address with the address returned for that customer.

### Select an existing customer

1. Select `Add` in the `Customer` card.
2. Confirm that the modal is on `Search`.
3. Enter an email, phone, or name.
4. Press Enter to run the search.
5. Compare the customer name, ID, and email.
6. Select the correct customer.
7. Review the customer name, phone, and email in the `Customer` card.
8. Review the `Shipping Address` card because the selected customer's returned address replaces the previous order address.

If a selected customer is missing a first name, last name, or email, you cannot submit the order. `Edit` in the `Customer` card reopens customer search so that you can select another record. It does not edit the customer's fields.

### Handle a customer who does not exist

Use `Create` only after searching for an existing customer.

1. Select `Add` in the `Customer` card.
2. Select `Create`.
3. Enter `First Name`.
4. Enter `Last Name`.
5. Enter `Email`.
6. Enter `Phone` when available.
7. Select the save action.

First name, last name, and email are required. Phone is optional.

{% hint style="warning" %}
Do not continue order entry directly after creating a customer in the current app. The customer can be created in Shopify without a shipping address, and the Order Manager page can fail when it tries to use that empty address.
{% endhint %}

After saving, verify whether Shopify created the customer. Reload Order Manager, return to `Create order`, select the same Shopify shop, and find the customer through `Search` before continuing. If your organization provides another approved Shopify customer-creation process, use it and then follow the same reload-and-search steps.

If Shopify rejects the customer, correct the reported customer information or confirm the Shopify shop before retrying.

## Add the shipping address

An existing customer can supply an address, while a newly created customer starts this order without one. Review the address in either case.

1. Select `Add` or `Edit` in the `Shipping Address` card.
2. Enter `Address 1`.
3. Enter `Address 2` when needed.
4. Enter `City`.
5. Select `Country`.
6. Select `Province`.
7. Enter `Zipcode`.
8. Enter `Phone` when available.
9. Select the save action.

Select the country before the province. Changing the country clears the previous province selection and loads the provinces for the new country.

The address dialog can save an incomplete address, but order submission requires `Address 1`, `City`, `Country`, `Province`, and `Zipcode`.

If the selected country does not provide a province option, stop. The page has no manual province entry, and the order cannot pass validation. Ask an administrator to review the Shopify geography configuration.

Editing the address changes the address for this order form. It does not update the selected customer's saved address.

## Add catalog items

Add catalog products by scanning or searching. The page prevents a catalog product from appearing as a duplicate row, so change the quantity on the existing row when the customer needs more than one.

### Scan a product

1. Select the barcode segment in `Add items`.
2. Read the identifier shown in `Scanning is set to`.
3. Select `Focus scanning` if the page says the scanner is not focused.
4. Scan the configured identifier into `Scan barcode`.
5. Press Enter if the scanner does not send it automatically.
6. Confirm that the product and a green checkmark appear and that the item is added below.

If the barcode type does not match the identifier being scanned, change the [Barcode Identifier in Settings](settings.md#set-the-barcode-identifier) before continuing.

When a barcode is not found:

1. Confirm that the scanner read the barcode correctly.
2. Select `Search` beside the not-found message.
3. Search by product name or another identifier.
4. Add the correct catalog product from the results.

Do not add a custom line solely because one scan failed. Search the catalog before deciding that the item is not available.

### Search for a product

1. Select the search segment in `Add items`.
2. Search by parent product name, stock keeping unit (SKU), or Universal Product Code (UPC).
3. Wait for the first result.
4. Select `Add` when it is the correct product.
5. Select `View more results` when you need to compare additional matches.

In `Add product`, you can:

* Change the search text and press Enter.
* Select `Add to Order` for a product.
* Scroll to load more matching products.
* Use the checkmark to identify a product that is already in the order.

`No product found` appears when the page has no result for the current attempt. Check the identifier and retry with another keyword before using a custom line.

## Add a custom line

Use `Custom Line` for an intentional non-catalog item.

1. Select `Custom Line`.
2. Enter `Product Name`.
3. Enter a quantity greater than zero.
4. Enter a price of zero or more.
5. Select the save action.

A custom line does not use the catalog identifiers or catalog price shown for catalog products. Review its name, quantity, and price.

## Review line items

Each catalog row shows the configured primary and secondary product identifiers, its price, and its quantity. A custom row shows the product name entered by the operator.

Before submitting:

1. Confirm that each row represents the intended product.
2. Review the displayed price.
3. Change `Qty` when needed.
4. Confirm that every quantity is greater than zero.
5. Remove an unwanted row with the trash action.

Product data supplies the catalog price, and you cannot edit it on this page. If a catalog price is incorrect, stop the workflow and have the product price reviewed before submitting the order.

You also cannot correct a missing catalog title or SKU in the line editor. Remove the line, correct the catalog source data, reload the page, and add the product again.

## Add notes and tags

Use `Notes` for order-specific information or instructions required by your operating process.

Use `Tags` for agreed order tags. Enter multiple tags as comma-separated values. The page does not validate tag spelling or promise an action from a tag, so use only values defined by your process.

Notes and tags are optional.

## Read the Payment preview

The `Payment` card is an on-screen cost preview. It does not collect a payment method or confirm payment capture.

| Value | Current calculation |
| --- | --- |
| `Subtotal` | Item price multiplied by quantity for every line, then added together. |
| `Shipping` | USD 10 when the subtotal is greater than zero and less than USD 150. Shipping is zero when the subtotal is at least USD 150. |
| `Tax` | Displays `Not calculated`. |
| `Total` | Subtotal plus the displayed shipping amount. |

All preview amounts are formatted as USD, even when another currency is selected. Do not treat this card as a final tax-inclusive Shopify total.

## Submit the order

Select the floating checkmark to submit the order.

The app checks the form in this order:

| Validation | What to correct |
| --- | --- |
| Shopify shop | Select a `Shopify Shop`. |
| Customer | Select a customer with an ID, first name, last name, and email. |
| Shipping address | Complete `Address 1`, `City`, `Province`, `Zipcode`, and `Country`. |
| Line items | Add at least one catalog or custom line. |
| Catalog item information | Confirm that each catalog item has a title and SKU. |
| Custom-line information | Confirm that each custom line has a product name. |
| Quantity | Set every line to a quantity greater than zero. |
| Price | Remove any negative price. |

The app displays the first validation problem it finds. Correct that field, then select the checkmark again to continue validation.

While the request is processing, the app displays `Submitting Shopify Order...`.

### Confirm success

`Shopify Order Created Successfully!` is the in-page confirmation that the submission completed.

After success:

* The selected Shopify shop remains.
* Facility, customer, shipping address, items, notes, and tags are cleared.
* Currency returns to USD.

Do not submit the cleared form again. Use your normal order-verification process before beginning follow-up work. If that process uses `Find orders`, confirm the correct Product Store and search with the Shopify order identifier when it becomes available. This page does not define when the new order will appear in search.

### Recover from failure

A failed validation or submission does not clear the form.

1. Read the error message.
2. Before retrying a submission request, search the selected Shopify shop for an order with the same customer and item details.
3. Check Order Manager for the same order when your normal synchronization interval has passed.
4. Retry only after confirming that Shopify did not create the order.
5. Correct the identified field or configuration, then review the complete form again.

The app can show an error after Shopify has already received the request. Retrying without checking can create a duplicate order. Do not assume that submission failed only because the success message is missing or the order is not immediately visible in `Find orders`.
