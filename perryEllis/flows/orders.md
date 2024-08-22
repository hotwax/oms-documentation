---
description: Learn about the orders of Perry Ellis.
---

# Orders

Perry Ellis utilizes HotWax Commerce for its BOPIS, Same Day Delivery, and Next Day delivery APIs. Orders placed through eCommerce are processed by the Ecom Hub, which shares order processing information regarding order packing and using which HotWax sends notifications to customers when their orders are ready for pickup. The "Ready for Pickup" API facilitates this notification process.

## BOPIS Orders flow

**Selecting  Store:**

When a user visits the website, they can select their preferred pickup location by clicking "My Store" in the top left dropdown and choosing "SET AS MY STORE." This selection will be saved for future visits if the user is a registered user. Alternatively, users can skip this step and begin browsing products directly.

To easily locate nearby stores, users can enter their zip code or click the location icon in the search bar. A list of nearby stores will be displayed, along with their distances and same-day store hours. If users wish to change their preferred pickup location, they can do so by clicking "SET AS MY STORE" again.

**Browsing and Selecting Products:**

On the Product Detail Page (PDP):

* If the product is available at the selected "My Store," a message indicating "**PICK UP AT [Facility name]**" will be displayed.
* A "**PICK UP IN STORE**" button and a "**CHECK OTHER STORES**" link will be visible below the "ADD TO CART" button.
* If no store has been selected, a "**SELECT A STORE**" option will appear.


**Cart Information:**

BOPIS items will display "**Pickup Store**" and "**Reserved until**" details on the cart page. "Pickup Store" indicates the selected pickup location, while "Reserved until" shows the timeframe within which an order can be placed for the item in the cart. This reservation time is currently set to 45 minutes.

Please note that if the reservation time expires, the secure checkout button will be disabled. To check inventory availability, the user can click "View Cart" and update their cart accordingly.


**Checkout Process:**

On the checkout page, if multiple stores are selected for BOPIS items, their addresses and hours will be listed under "Store Pickup." A message will also appear indicating that multiple locations have been selected.

For mixed orders that include both BOPIS and shipping, the label will be "Store Pickup and Shipping Address." In such cases, the customer will need to provide a shipping address.

**Order Confirmation and Fulfillment:**

Customers will receive an order confirmation email containing BOPIS details. Shopify orders are imported into HotWax as "Approved" every five minutes.

When Ecom Hub marks an order as "Ready for Pickup," HotWax triggers a notification email to customers using Klaviyo. Upon order pickup, Ecom Hub updates the order status to "Completed" in both HotWax and Shopify. Rejected orders are also reflected in both systems.



## Same-Day and Next-Day Shipping orders flow

**Determining Delivery Eligibility:**

**Improved Text:**

Customer eligibility for Same-Day Delivery (SDD) or Next-Day Delivery (NDD) is determined by their zip code. Customers can either enter their zip code manually or have it pre-filled based on their browser location (with permission) or saved address.

Orders placed at least three hours before a store's closing time are eligible for SDD. The HotWax API identifies the nearest participating store within a 15-mile radius based on the provided zip code.


**Same-Day Shipping UI:**

**Product Listing Page (PLP):**

Understanding the Variables:

1. HC_SD_CURRENT_STORE: This variable likely holds the ID or identifier of the currently selected store. It is used to determine product availability and display relevant store information.
2. HC_SD_CUST_ZIPCODE: This variable stores the customer's preferred zip code, which is used for various purposes, including displaying items on the Product Listing Page (PLP) and ensuring accurate messaging on the Product Detail Page (PDP).

The HC_SD_CURRENT_STORE variable is used to determine the store that should be displayed to the customer. If no zip code is entered, the system uses the customer's browser location to identify nearby stores. If no stores are found within the specified 15-mile radius, the "Sorry, there are no stores near this ZIP code" message is displayed. The "Deliver to zipcode from Facility_name" text is displayed on PLP and PDP, using the HC_SD_CUST_ZIPCODE variable for accurate zip code representation. Clicking "Change" triggers a popup where the customer can enter a new zip code. The HotWax API then finds a valid store within 15 miles and updates the HC_SD_CURRENT_STORE session variable.

**Product Detail Page (PDP):**

**HotWax API determines whether a product variant is eligible for Same-Day Delivery (SDD) or Next-Day Delivery (NDD).** Clicking "Change" triggers a zip code popup where the customer can enter their preferred location. The HotWax API then locates a participating store within a 15-mile radius and assesses eligibility for the selected product variant.

If no zip code is entered and the customer grants permission, stores will be displayed based on their browser location. If no stores are found within the specified radius, the message "Sorry, there are no stores near this ZIP code" will appear on the Product Detail Page (PDP).

When the customer's location is off, the message "Delivery to enter zip code" will be displayed instead of "Deliver to zipcode from Facility_name."


**Mini Cart:**

**Customers can verify their cart's eligibility for Same-Day Delivery (SDD) or Next-Day Delivery (NDD) based on the last selected store.** The `HC_SD_CURRENT_STORE_ZIPCODE` variable determines eligibility, which defaults to the customer's current location if no zip code is provided.

If a customer changes their chosen store between products, the cart will be revalidated against the newly selected store. **Item-level eligibility messages will be displayed in the mini cart.**

* **Eligible Carts:** "Your order is eligible for same-day delivery" or "Your order is eligible for next-day delivery" will appear if the entire cart qualifies.
* **Ineligible Carts:** "Your order is not eligible for same-day delivery" or "Your order is not eligible for next-day delivery" will be shown if the cart does not meet the eligibility criteria.

**HotWax adds line item properties to the cart page after checking eligibility:**

* **Visible:** "Shipping Eligibility: Same Day" and "Shipping Eligibility: Next Day"
* **Hidden:** "_hcShippingFacility:id"

**Additional Notes:**

* The zip code should be pre-filled in the mini cart for convenience.
* Customers can manually enter a new zip code in the mini cart search field to check cart eligibility for SDD or NDD.
* The facility name will be displayed as "Same or Next Day Delivery from Facility name," using the `HC_SD_CURRENT_STORE_NAME` variable.
* If a customer enters a new zip code and a nearby store is found, the store name will be updated on the mini cart. Otherwise, a "No store nearby" message will appear.


**Cart Page:**

* Similar SDD/NDD logic applies to the cart page as the mini cart.