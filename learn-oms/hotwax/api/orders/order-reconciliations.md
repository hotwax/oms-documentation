---
description: >-
  Explore how the Order Reconciliations API call offers insights into failed
  orders, aiding in Shopify to HotWax Commerce synchronization.
---

# Order Reconciliations

This API call provides users with log insights for failed orders that may not have been successfully downloaded from Shopify to HotWax Commerce. To retrieve the log details of these failed orders, make a GET request to the `/solr-query` endpoint.

## Request

**End Point** `https://<instance.name>.hotwax.io/api/solr-query`

Example: `https://demo-oms.hotwax.io/api/solr-query`

### Request Format

```json
{
  "json": {
    "params": {
      "q": "docType:SHOPIFY_ORDER"
    }
  },
  "coreName": "logInsights"
}
```

### Parameter Table

| Parameter Name | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| `docType`      | The Type of the document                                             |
| `coreName`     | A single index or associated transaction log and configuration files |

## Response

### Body

```json
{
    "responseHeader": {
        "zkConnected": true,
        "status": 0,
        "QTime": 0,
        "params": {
            "json": "{\"params\":{\"q\":\"docType:SHOPIFY_ORDER\"}}",
            "_forwardedCount": "1"
        }
    },
    "response": {
        "numFound": 1,
        "start": 0,
        "numFoundExact": true,
        "docs": [
            {
                "site": "",
                "shopifyOrderName": "",
                "orderCreatedDate": "",
                "firstAttemptedImport": "",
                "docType": "",
                "ttl": "",
                "errorMessage": "",
                "timestamp": "",
                "expire_at": "",
                "document-id": "",
                "version": ""
            }
        ]
    }
}
```

### Sample

```json
{
    "responseHeader": {
        "zkConnected": true,
        "status": 0,
        "QTime": 0,
        "params": {
            "json": "{\"params\":{\"q\":\"docType:SHOPIFY_ORDER\"}}",
            "_forwardedCount": "1"
        }
    },
    "response": {
        "numFound": 1,
        "start": 0,
        "numFoundExact": true,
        "docs": [
            {
                "site": "https://hc-demo.myshopify.com/83950764316/orders/e218e7d5c7705560408de87178d8fa6b/authenticate?key=",
                "shopifyOrderName": "#10101011010",
                "orderCreatedDate": "1704335862000",
                "firstAttemptedImport": "January 3, 2024 10:15:12 PM",
                "docType": "SHOPIFY_ORDER",
                "ttl": "+60DAYS",
                "errorMessage": "Service [createShopifyOrder] target threw an unexpected exception (null)",
                "timestamp": "2024-01-10T11:29:31.127Z",
                "expire_at": "2024-03-10T11:29:31.127Z",
                "document-id": "0a420d2e-1d21-12b3-a0b1-ae12d1c0a420",
                "version": 17234167832143
            }
        ]
    }
}
```

### Parameter Table

| Parameter Name         | Description                                                                    |
| ---------------------- | ------------------------------------------------------------------------------ |
| `site`                 | Shopify Store URL containing order details                                     |
| `shopifyOrderName`     | Unique identifier of the order in Shopify                                      |
| `orderCreatedDate`     | Date when the order was created on Shopify                                     |
| `firstAttemptedImport` | Date when the order import from Shopify to HotWax Commerce was first attempted |
| `docType`              | The type of the document                                                       |
| `ttl`                  | Time duration of the data, also called time to live                            |
| `errorMessage`         | The error message for the job failure                                          |
| `timestamp`            | The timestamp for the API call                                                 |
| `expire_at`            | Data expiry date                                                               |
| `document-id`          | Unique identifier of the document                                              |
