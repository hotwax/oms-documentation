---
description: >-
  Learn how HotWax Commerce OMS handles import errors from Shopify, providing an
  efficient process for order reconciliation and customer service support.
---

# Import Error

To aid in order reconciliation, the OMS will create an index in a logging database when the order import from Shopify fails. This will provide an easily accessible destination to check which orders have failed to import and require attention. To further streamline this reconciliation process for customer service, especially in situations where order processing is delayed, and customers are seeking support, a custom flow developed by UCG will poll this logging database for failed Shopify orders and add tags to those orders where the order ingestion has failed.

Shopify order tag value:

[API Documentation](https://docs.hotwax.co/integration-resources/v/hotwax-commerce/apis/orders/order-reconciliations)
