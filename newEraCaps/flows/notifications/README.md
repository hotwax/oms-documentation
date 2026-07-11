---
description: >-
  Learn how HotWax handles customer email notifications for BOPIS and ship from store orders in New Era Caps, including order ready for pick-up, cancellations, and planned reminder emails for uncollected orders.
---
# List of Notifications Triggered from HotWax
## CS team Notification

1. **BOPIS orders not picked up email**   
   This email includes orders for all the stores that are not picked up yet by the customer.   
   This email is triggered everyday, including orders that are in packed status for more than 30 days. The email is sent via Tathya.  
2. **BOPIS order rejection email**  
   Email alert via Tathya for orders failed to pack by salesperson. Orders are rejected for reasons like damaged goods, out-of-stock items, or other fulfillment issues.  
   This email is triggered everyday for orders rejected in the last 24 hours.

## Store Notifications

1. **BOPIS new orders push notification**  
   When the store receives a new order in the BOPIS app, a notification is sent to the store via BOPIS app.   
2. **BOPIS open orders push notification**  
   This is a re-send reminder notification which is sent after 7 days, if the store hasn't yet picked the order. The notification is sent on the BOPIS app.  
3. **BOPIS orders not picked up email**   
   This email includes orders that are not picked up in a particular store yet by the customer. This email is triggered everyday, including orders that are in packed status for more than 30 days. The email is sent via Tathya.  
4. **SFS new orders push notification**  
   The new order notification is sent for SFS on the fulfillment app. This is done to allow store to reserve stock for packing/pickup later and avoid overselling.  
5. **SFS open orders push notification**  
   This is a re-send reminder notification which is sent after 7 days, if the store hasn't yet picked the order. The notification is sent on the fulfillment app.

## Customer Notification

1. **BOPIS ready for pick-up email**  
   When the order is marked “Ready for pick up”, it’s moved to packed status and shown in the Packed tab of HotWax BOPIS app. As soon as the order is marked “Ready for pick up”, an email trigger request is sent to Klavyio. Email is sent from Klaviyo to customers.

2. **BOPIS cancellation email**  
   When the order/order item is rejected from the HotWax BOPIS app. As soon as the order is rejected from the store an email trigger request is sent from HotWax to Klaviyo. Email is sent from Klaviyo to the customer.

3. **Auto-BOPIS ready for pickup email**  
   When the order is marked “Ready for pick up”, it’s moved to packed status and shown in the Packed tab of HotWax BOPIS app. When an order is in packed status for more than 7 days a reminder pick-up email should be sent to the customer. The email trigger request should be sent to Klaviyo every 7th,14th and 21st day. Email should be sent from Klaviyo to the customer.   
4. **Ready For Delivery (SFS) email**  
   When the order is packed in its entirety and ready for the carrier to pickup, the customer will receive an email via Klaviyo.  
5. **SFS Cancellation email**  
   When an order is rejected by the store and is not available in any other store, OMS automatically sets an auto-cancelled date for the order item. The order is then marked as auto-cancelled, and an email notification is triggered to the customer. This email is sent to the customer via Klaviyo.
