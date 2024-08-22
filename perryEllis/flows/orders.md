---
description: Learn about the orders of Perry Ellis.
---

# Orders

Perry Ellis utilizes HotWax Commerce for its BOPIS, Same Day Delivery, and Next Day delivery APIs. Orders placed through eCommerce are processed by the Ecom Hub, which shares order processing information regarding order packing and using which HotWax sends notifications to customers when their orders are ready for pickup. The "Ready for Pickup" API facilitates this notification process.

## BOPIS Orders flow

**Selecting  Store:**

1. Upon landing on the website, users can choose  preferred pickup location by clicking "**My Store**" in the top left dropdown and selecting "**SET AS MY STORE**." This selected store will be saved for future visits if you're a registered user.
2. Alternatively, users can skip this step and browse products directly.
3. For easy store selection, enter zip code or click the location icon in the search bar. Nearby stores will be displayed with their distances and same-day store hours.

**Browsing and Selecting Products:**

4. Browse the catalog and choose  desired product.
5. On the Product Detail Page (PDP):
    * If the product is available at selected `My Store`, a "**PICK UP AT [Facility name]**" message will be displayed.
    * A "**PICK UP IN STORE**" button and a "**CHECK OTHER STORES**" link will be available below the "ADD TO CART" button.
    * If you haven't chosen a store, a "**SELECT A STORE**" option will be displayed.

**Adding BOPIS Items to Cart:**

6. To pick up a product in-store, click the "**PICK UP IN STORE**" button.
7. You can also set any other store as  preferred store by clicking "**SET AS MY STORE**."
8. Selecting "PICK UP IN STORE" adds the product to  cart.

**Cart Information:**

8. BOPIS items will display "**Pickup Store**" and "**Reserved until**" details on the cart page.
9. "Pickup Store" indicates the chosen pickup location.
10. "Reserved until" shows the timeframe for placing an order for the item in  cart. (Currently set to 45 minutes)

**Note:** If the reservation time expires, the secure checkout button will be disabled. Clicking "View Cart" and updating the cart will inform you of inventory availability.

**Checkout Process:**

1. After clicking "Secure Checkout," you'll proceed to the "Information" page.
    * For BOPIS orders, a "Store Pickup" label and store details will be displayed.
    * If multiple stores are selected, their addresses and hours will be listed under "Store Pickup." A message will also appear indicating multiple locations.
    * For mixed orders (BOPIS and shipping), the label will be "Store Pickup and Shipping Address," and you'll need to provide a shipping address.
2. Click "Continue To Shipping Options" to proceed.
3. The Shipping page will default to "In-Store Pickup." (For mixed orders, it will show "+ In-Store Pickup")
4. The "Store Pickup" field will automatically populate with  chosen store's address.
5. Enter  card details and billing address on the payment page.
6. Finally, click "Pay Now" to place  order.

**Order Confirmation and Fulfillment:**

1. Customers will receive an order confirmation email with BOPIS details.
2. Shopify orders are imported into HotWax every five minutes as "Approved."
3. When Ecom Hub marks the order as "Ready for Pickup," HotWax triggers a notification email to customers via Klaviyo.
4. After order pickup, Ecom Hub marks the order as "Completed" in HotWax and Shopify. Conversely, rejected orders are reflected in both systems.


## Same-Day and Next-Day Shipping orders flow

**Determining Delivery Eligibility:**

1. Customer zip code determines eligibility for Same-Day Delivery (SDD) or Next-Day Delivery (NDD).
2. Customers can enter their zip code manually or have it pre-filled based on:
    * Browser location (with permission)
    * Saved address
3. Orders placed before 3 hours of store closing qualify for SDD.
4. HotWax API locates the closest store within a 15-mile radius based on the provided zip code.

**Same-Day Shipping UI:**

**Product Listing Page (PLP):**

4. Separate toggles for Same-Day Delivery and BOPIS will be designed (mutually exclusive options).
5. Store selection depends on the `HC_SD_CURRENT_STORE` variable.
6. Boost Commerce uses this variable to show product availability based on the chosen method.
7. Stores display based on browser location if no zip code is entered (permission required).
8. Previously entered zip code won't be pre-filled upon changes.
9. No "close icon" needed for delivery location zip code search (simple replacement possible).
10. "Sorry, there are no stores near this ZIP code" message will appear if no stores are found within 15 miles on PLP search.
11. "Deliver to zipcode from Facility_name" text will be displayed on PLP and PDP.
12. A new variable, `HC_SD_CUST_ZIPCODE`, will store the customer's preferred zip code for item display and accurate PDP messaging.
13. Clicking "Change" will trigger a HotWax API popup for zip code entry. The API finds a valid store within 15 miles and saves it in a session variable (`HC_SD_CURRENT_STORE`).

**Product Detail Page (PDP):**

14. HotWax API determines SDD or NDD eligibility for the product variant.
15. Clicking "Change" for location updates triggers a zip code popup. HotWax API locates a participating store within 15 miles and determines eligibility for the chosen product variant.
16. Stores display based on browser location if no zip code is entered (with permission).
17. "Sorry, there are no stores near this ZIP code" message will appear on PDP search if no stores are found within 15 miles.
18. When location is off, "Delivery to enter zip code" will be displayed instead of "Deliver to zipcode from Facility_name".

**Mini Cart:**

19. Customers can verify SDD or NDD eligibility for their cart based on the last selected store (`HC_SD_CURRENT_STORE_ZIPCODE`). Eligibility defaults to the customer's current location without a zip code.
20. The cart will be validated against the last selected store if changed between products.
21. Item-level eligibility messages will be displayed in the mini cart.
22. "Your order is eligible for same-day delivery" or "Your order is eligible for next-day delivery" will be shown if the entire cart qualifies.
23. Conversely, "Your order is not eligible for same-day delivery" or "Your order is not eligible for next-day delivery" will be displayed for ineligible carts.
24. HotWax adds line item properties to the cart page after eligibility checks:
    * Visible: "Shipping Eligibility: Same Day" and "Shipping Eligibility: Next Day"
    * Hidden (shown on eligibility check): "_hcShippingFacility:id"
25. Zip code should be pre-filled on the mini cart.
26. Customers can check cart eligibility for SDD or NDD by entering a new zip code in the mini cart search field.
27. The facility name will be displayed as "Same or Next Day Delivery from Facility name" using `HC_SD_CURRENT_STORE_NAME`.
28. If a new zip code validates the cart and a nearby store exists, the store name updates; otherwise, a "No store nearby" message appears.


**Cart Page:**

* Similar SDD logic applies to the cart page as the mini cart.