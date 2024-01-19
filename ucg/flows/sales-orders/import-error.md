# Order Import Error

To help with order reconciilation the OMS will create an index in a logging database when order import from Shopify fails. This will provide a easy destination to check which orders have failed in import and need attention. To make this reconciliation even easier for customer service in the event that and order processing is being delayed and customers are asking for support, a custom flow developed by UCG will poll this logging database for failed Shopify orders and add tags to those orders that the order ingestion has failed.

Shopify order tag value:

API Documentation (need to convert to proper link)
https://docs.hotwax.co/integration-resources/v/hotwax-commerce/apis/orders/order-reconciliations