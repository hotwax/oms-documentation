---
description: >-
  Explore how HotWax Commerce displays immediate product availability for store
  pickup on Shopify's Product Detail Pages (PDP).
---

# Shopify PDP Experience

### How Does HotWax Commerce show immediate product availability for store pickup on the Shopify PDP?

Shopify's built-in feature does not include the option to show in-store inventory availability on the Product Detail Page (PDP). This means that customers must check the availability of products in stores during the checkout process. HotWax Commerce provides a solution to this problem by allowing merchants to display inventory availability at nearby pickup locations. By installing the HotWax Commerce BOPIS PDP app on Shopify, merchants can show in-store inventory availability on their PDP and increase their conversion rates.\
This is achieved through the following steps:

1. To display nearby pickup locations for customers, latitude and longitude coordinates are required. The HotWax Commerce BOPIS PDP app for Shopify obtains these coordinates in two ways:

* When customers enter their postal code, the HotWax Commerce BOPIS PDP app utilizes the "postcodeLookup" API of HotWax Commerce to convert the postal code into accurate latitude and longitude coordinates.
* If permission to access the device location is granted by the customer, HotWax Commerce directly retrieves the latitude and longitude coordinates from the customer's device.

2. HotWax Commerce possesses the latitude and longitude coordinates for all the retailers' locations within the system. When the customer's latitude and longitude coordinates have been acquired, the HotWax Commerce BOPIS PDP app utilizes the "storeLookup" API to obtain all the available pickup locations within a designated radius from the customer's location.
3. The HotWax Commerce BOPIS PDP app shows all the locations that offer BOPIS, sorted based on how close they are to the customer. The app also displays the store's operating hours to make the BOPIS experience smoother for the customer.
4. Customers can choose a specific location to be saved as their preferred pickup spot, known as "My Store." This saves them the hassle of having to search for their preferred pickup location every time they make an order.
5. HotWax Commerce BOPIS PDP App on Shopify uses the 'checkInventory' API to confirm product availability and displays suitable pickup locations for that product.

<figure><img src="../../.gitbook/assets/28.png" alt=""><figcaption><p><em>Fig.1 : Pickup locations on PDP</em></p></figcaption></figure>

6. When a customer adds a qualifying item for in-store pickup to their cart, the HotWax Commerce BOPIS PDP App on Shopify displays the reservation expiration date and time to encourage prompt purchase and reduce abandoned carts. Retailers can customize the reservation duration. If a customer's reservation expires, they can refresh their cart to view real-time in-store availability for pickup items.

<figure><img src="../../.gitbook/assets/29.png" alt=""><figcaption><p><em>Fig.2 : Reservation until date and time</em></p></figcaption></figure>
