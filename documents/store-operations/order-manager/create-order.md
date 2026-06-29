# Create Order
---
## Overview

The Create Order page enables authorized users to **manually create a new sales order** directly within Order Manager and submit it to Shopify. This feature is intended for scenarios that fall outside normal e-commerce workflows — such as placing an order on behalf of a customer during a phone or in-store interaction, correcting a missed order, or creating a replacement shipment.

Orders created through this page are submitted to Shopify via the OMS API (`POST oms/orders/shopify`) and, upon successful creation, enter the standard fulfillment pipeline alongside all other orders.

The page is laid out in a two-column format on larger screens: a left panel for order configuration (shop assignment, customer, address, notes, and tags) and a on the right panel for adding and managing line items.

---

## Step 1: Configure the Order

Before adding products, configure the following settings in the left panel.

### Assign

This section controls the organizational and fulfillment context for the new order.

| Field | Description | Required |
|---|---|---|
| **Shopify Shop** | The Shopify store through which this order will be created. Select from the list of Shopify shops linked to the current product store. | **Yes** |
| **Facility** | Optionally pin this order to a specific fulfillment facility. The available facility list is determined by the current product store and, if a Shopify shop is selected, further narrowed to only those facilities linked to that shop's configured locations. If no facility is selected, the order will be brokered by the system. | No |
| **Currency** | The currency in which the order will be priced. Defaults to USD. Select from the full list of currencies configured in the OMS. | No |

> **Important:** Once a Shopify shop is selected, the Facility dropdown is automatically filtered to show only facilities associated with that shop's Shopify locations. If you subsequently change the shop, any previously selected facility is cleared if it no longer appears in the filtered list.

### Customer

This section captures the customer associated with the order. Click Add to open the Add Customer panel, or Edit if a customer is already selected.
Search for an existing customer by entering their details. If the customer does not exist, a new record can be created by providing the following information:

- First and last name
- Phone number
- Email address

Once a customer is selected, the above details are automatically populated from Shopify, and their default shipping address is pre-filled in the Shipping Address section.

> **Note:** The Add Customer panel requires a Shopify shop to be selected first, as the customer lookup is scoped to that shop's records.

### Notes

An optional free-text area for entering internal notes or special instructions for this order (e.g. "Handle with care — fragile items").

### Tags

An optional comma-separated field for applying tags to the order (e.g. `VIP, exchange, manual`). Tags are passed through to Shopify and can be used for reporting or routing logic.

### Shipping Address

Captures the destination shipping address for the order. Click **"Add"** (or **"Edit"** if an address exists) to open the **Address Modal**, which presents the following input fields:

| Field | Required |
|---|---|
| Address Line 1 | **Yes** |
| Address Line 2 | No |
| City | **Yes** |
| Province / State | **Yes** |
| Postal Code / ZIP | **Yes** |
| Country | **Yes** |
| Phone | No |

Once saved, the entered address is displayed in the panel for review.

---

## Step 2: Add Line Items
There are three ways to add items.

### Method 1 — Barcode Scan

Select the **barcode icon** segment button to switch to Scan mode. The system displays a barcode input field.

1. Click **"Focus scanning"** or click into the input field to enable scanner input.
2. Scan a product barcode. The system searches the product catalog using the **Barcode Identifier** configured in the Settings page (e.g. SKU, UPC).
3. If a matching product is found, it is displayed with its name and image, and is **automatically added** to the line items list.
4. If the scanned barcode does not match any product, a "not found" message appears with an option to switch to keyword search.

The input field displays the currently active barcode identifier type as placeholder text (e.g. `SKU` or `UPC`).

### Method 2 — Keyword Search

Select the **magnifying glass icon** segment button to switch to Search mode. A search bar appears.

1. Type a product name, SKU, or UPC. The system begins searching automatically.
2. The first matching result is displayed with its product image and name.
3. If the product is **not yet in the order**, an **"Add"** button appears. Click it to add the product as a line item.
4. If the product is **already in the order**, a green checkmark is shown instead of the Add button.
5. If there are additional matching results beyond the first, a **"View more results"** link appears. Clicking it opens the **Add Product Modal**, which shows the full result set.

Products can be searched by their parent name, SKU, or UPC.

### Method 3 — Custom Line Item

Click **"Custom Line"** (the "+ Custom Line" button at the top right of the Add Items card) to open the **Add Custom Line Modal**. This allows you to create a line item that is not tied to a product in the catalog — for example, a fee, a service charge, or a non-catalogued replacement item.

The Custom Line Modal accepts the following fields:

| Field | Description |
|---|---|
| Product name | A descriptive name for the custom line item |
| Quantity | The number of units |
| Price | The unit price |

---

## Managing Line Items

Once items are added, they appear in the order list below the Add Items card. For each line item you can:

- **View the product name and secondary identifier** (as configured in the Product Identifier settings)
- **View the unit price** displayed on the right side of the row
- **Edit the quantity** by changing the number in the quantity input field. The minimum value is 0.
- **Remove the item** by clicking the red trash can icon at the end of the row.

---

## Submitting the Order

When the order is ready, click the **checkmark button** at the bottom-right corner of the screen (a floating action button) to submit the order.

Before submitting, the system validates the following fields in sequence. If any check fails, a notification is shown and submission is stopped:

| Validation | Error message |
|---|---|
| A Shopify shop must be selected | "Please select a Shop." |
| Customer ID, email, first name, and last name must all be present | "Please complete all required customer information fields." |
| Address line 1, city, province, postal code, and country must be filled | "Please fill in all shipping address fields." |
| At least one line item must be added | "Please add at least one line item to the order." |
| Each line item must have a SKU or title | "Line item {n} has missing SKU or Title." |
| Each line item must have a quantity greater than 0 | "Line item {n} must have a quantity greater than 0." |
| No line item may have a negative price | "Line item {n} cannot have a negative price." |

If all validations pass, the form data is sent to the OMS API. Upon a successful response:
- A success notification ("Shopify Order Created Successfully!") is shown.
- The order form is reset, retaining only the selected Shopify shop and product store.
