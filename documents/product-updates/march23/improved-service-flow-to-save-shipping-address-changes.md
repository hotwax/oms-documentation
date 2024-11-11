---
description: >-
  Enhanced service flow in HotWax Commerce ensures that edited shipping
  addresses are saved, even in the event of errors during address updates on
  Shopify.
---

# Improved service flow to save shipping address changes

<figure><img src="https://www.hotwax.co/hubfs/Product%20Updates%20and%20Release%20Notes/2023/March%202023/Product%20Update/Featured%20Image/Address%20Change%20Sync.png" alt=""><figcaption></figcaption></figure>

HotWax Commerce is relied upon by enterprise customers for accurately processing order details, routing orders, and generating shipping labels, making it a trusted source for all eCommerce order-related information. When a customer inputs an incorrect shipping address in Shopify, Customer Service Representatives (CSRs) rectify the shipping address within HotWax Commerce. Previously, a service would attempt to update the shipping address in both HotWax Commerce and Shopify simultaneously. If one of the platforms failed to accept the change, the address would remain unaltered in both systems, obstructing order fulfillment.

In cases where Shopify encountered an internal error and couldn't process the address modification, CSRs were unable to complete the necessary action. To resolve this issue and prevent fulfillment delays, HotWax Commerce has enhanced its service flow. The updated service now immediately saves edits made to the shipping address and initiates an asynchronous job to bulk save the revised address in Shopify. If Shopify experiences an error, HotWax Commerce will persistently push the changes until they are successfully saved. This improvement ensures a seamless order fulfillment process and eliminates potential delays.
