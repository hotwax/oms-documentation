---
description: >-
  Learn about processing in-store returns for online orders with Shopify POS.
---

# In-Store Returns

**Shopify POS:** Shopify POS is already linked with Shopify eCommerce, providing access to online orders within the POS system. When in-store returns are created in Shopify POS for online orders, these return details are stored in Shopify. HotWax Commerce utilizes the 'Import Order Return' job, which both Shopify e-commerce and Shopify POS, to download refund information and transfer transaction details to the ERP.

When in-store returns occur in Shopify POS, HotWax Commerce captures the facility ID where the returned inventory is received to ensure inventory is correctly incremented in the OMS.

**Non-Shopify POS:** For retailers using a POS system other than Shopify POS, there is no inherent information about online orders, including online order IDs in the POS system. Consequently, creating returns against these online orders becomes a challenge. HotWax Commerce, as an omnichannel Order Management System, retains records of online orders from Shopify. Retailers can use HotWax Commerce to create returns in store for online order, or use HotWax's order and return APIs to allow their POS system to accept online returns in store without having to switch systems.

To learn more about how to use HotWax Commerce for in store returns with POS systems other than Shopify POS, read this document (link to be added)
