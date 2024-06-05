---
description: >-
  If a BOPIS order is released to the customer but not updated in HotWax
  Commerce, it can be marked as completed on the Sales Order View page.
---

# Update BOPIS order fulfillment status

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2022/September%202022/Product%20Updates/Feature%20image/Ship%20items-3.png" alt=""><figcaption></figcaption></figure>

When retailers are using their own custom built BOPIS Fulfillment App instead of HotWax Commerce BOPIS Fulfillment App, and customer picks up a BOPIS order from the store, the store associate updates the order status in custom built BOPIS Fulfillment App. The custom built BOPIS Fulfillment App sends this update to HotWax Commerce through APIs, and the BOPIS order is marked "Complete."

HotWax Commerce generates a daily report detailing BOPIS orders and their fulfillment status. If the report shows delays in fulfilling BOPIS orders, customer success teams investigate why.

In some cases, Customer Success teams discover that the customer has picked up the order. However, in HotWax Commerce, the order status remains unchanged due to failed API requests from their custom built BOPIS Fulfillment App.

HotWax Commerce now enables CSRs to mark BOPIS orders as "Complete" using the "Ship item" button on the Sales Order View Page to ensure that the order status is updated in HotWax Commerce.
